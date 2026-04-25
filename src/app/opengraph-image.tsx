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
            "linear-gradient(135deg, #142033 0%, #8f1d2c 48%, #d9aa4f 100%)",
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
              background: "#d9aa4f",
            }}
          />
          <div
            style={{
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              color: "#f3d992",
            }}
          >
            Bellingham Bible Baptist Church
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
            You Are Welcome Here
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: "840px",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Independent Baptist church in Bellingham, Massachusetts
          </div>
        </div>
      </div>
    ),
    size
  );
}
