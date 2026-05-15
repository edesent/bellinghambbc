import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0e1a1f 0%, #7e1f2a 48%, #c9a653 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "8px",
              border: "4px solid #c9a653",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a653",
              fontSize: 44,
              fontWeight: 900,
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#f2d68b",
            }}
          >
            BMBC Rockwell, NC
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 600,
              maxWidth: "900px",
            }}
          >
            Bible Missionary Baptist Church
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: "840px",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Relevant in the present. Rooted in the past.
          </div>
        </div>
      </div>
    ),
    size
  );
}
