// pages/products.js
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
  let { data, error } = await supabase
    .from("products")
    .select("id, name, description, price, image_url");

  // 🔍 Debug logs
  console.log("Products data:", data);
  console.log("Supabase error:", error);

  if (error) {
    console.error("Error fetching products:", error.message);
  } else {
    setProducts(data);
  }
  setLoading(false);
};

    fetchProducts();
  }, []);

  if (loading) return <p style={{ padding: "1rem" }}>Loading products...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "0.5rem" }}
              />
              <h3>{product.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{product.description}</p>
              <p style={{ fontWeight: "bold" }}>₱{product.price}</p>
              <button
                style={{
                  marginTop: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
