import Navbar from "../../components/Navbar";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8fafc",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "10px",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "17px",
            marginBottom: "35px",
          }}
        >
          Join Jobseon and start your career journey
        </p>

        <form
          style={{
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 20px 45px rgba(37,99,235,0.12)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#6b7280",
              fontSize: "15px",
            }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                color: "#2563eb",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
}