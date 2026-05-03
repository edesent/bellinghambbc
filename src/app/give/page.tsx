import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description: "Give to Bellingham Bible Baptist Church",
};

export default function GivePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Give Online
      </h1>

      <p style={{ marginBottom: "20px" }}>
        Click below to give securely through Church Center.
      </p>

      <a
        href="https://bellinghambbc.churchcenter.com/giving"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 24px",
          background: "#007AB8",
          color: "#ffffff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Give Now
      </a>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        If the button does not work, use this link:
        <br />
        https://bellinghambbc.churchcenter.com/giving
      </p>
    </main>
  );
}
