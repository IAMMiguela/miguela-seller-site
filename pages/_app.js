// /pages/_app.js
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "10px", background: "#222", color: "white" }}>
        <Link href="/" style={{ marginRight: 15, color: "white" }}>Home</Link>
        <Link href="/products" style={{ marginRight: 15, color: "white" }}>Products</Link>
        <Link href="/cart" style={{ marginRight: 15, color: "white" }}>Cart</Link>
        <Link href="/login" style={{ marginRight: 15, color: "white" }}>Login</Link>
        <Link href="/register" style={{ marginRight: 15, color: "white" }}>Register</Link>
      </nav>

      {/* Page content */}
      <div style={{ padding: "20px" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
