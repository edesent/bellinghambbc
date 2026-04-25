import { eventsSheetId } from "@/lib/site";

export interface EventItem {
  title: string;
  time: string;
  description: string;
  month: string;
  day: string;
  label: string;
  accent?: boolean;
}

const fallbackEvents: EventItem[] = [
  {
    month: "SUN",
    day: "Every",
    label: "Week",
    title: "Sunday Worship",
    time: "10:00 AM and 11:00 AM",
    description:
      "Sunday School for adults, teens, and kids followed by the main worship service.",
    accent: true,
  },
  {
    month: "WED",
    day: "Every",
    label: "Week",
    title: "Prayer Service and Kid's Club",
    time: "Wednesday at 6:30 PM",
    description:
      "A midweek gathering for prayer, Bible encouragement, and children's ministry.",
  },
  {
    month: "LIVE",
    day: "Watch",
    label: "Online",
    title: "Livestream and Sermons",
    time: "Sunday at 11:00 AM",
    description:
      "Recent services are available through the church's official YouTube channel.",
  },
];

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let row: string[] = [];
  let inQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];

    if (inQuotes) {
      if (char === '"' && csv[i + 1] === '"') {
        current += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(current);
      current = "";
    } else if (char === "\n" || (char === "\r" && csv[i + 1] === "\n")) {
      row.push(current);
      rows.push(row);
      row = [];
      current = "";
      if (char === "\r") i += 1;
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current);
    rows.push(row);
  }

  return rows;
}

export async function getEvents(): Promise<EventItem[]> {
  if (!eventsSheetId) {
    return fallbackEvents;
  }

  const url = `https://docs.google.com/spreadsheets/d/e/${eventsSheetId}/pub?gid=0&single=true&output=csv`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return fallbackEvents;
    }

    const csv = await response.text();
    const rows = parseCSV(csv);
    const items = rows
      .slice(1)
      .filter((row) => row[0]?.trim())
      .map((row) => ({
        title: row[0]?.trim() || "",
        time: row[1]?.trim() || "",
        description: row[2]?.trim() || "",
        month: row[3]?.trim() || "",
        day: row[4]?.trim() || "",
        label: row[5]?.trim() || "",
        accent: (row[6] || "").trim().toLowerCase() === "true",
      }));

    return items.length > 0 ? items : fallbackEvents;
  } catch {
    return fallbackEvents;
  }
}
