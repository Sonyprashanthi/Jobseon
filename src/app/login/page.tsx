import Navbar from "../../components/Navbar";

export default function LoginPage() {
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
          Welcome Back
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "17px",
            marginBottom: "35px",
          }}
        >
          Sign in to continue to Jobseon
        </p>

        <form
          style={{
            width: "100%",
            maxWidth: "450px",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "18px",
            boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* Email */}

          <div style={{ marginBottom: "22px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#111827",
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
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password */}

          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
                color: "#111827",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "14px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Forgot Password */}

          <div
            style={{
              textAlign: "right",
              marginBottom: "25px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Login
          </button>

          {/* Register */}

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#6b7280",
              fontSize: "15px",
            }}
          >
            Don't have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#2563eb",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </>
  );
}