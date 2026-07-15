"use client";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Jobseon</h1>

      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>📊 Dashboard</div>
        <div>👤 Profile</div>
        <div>💼 Jobs</div>
        <div>❤️ Saved Jobs</div>
        <div>📄 Applications</div>
      </div>
    </aside>
  );
}