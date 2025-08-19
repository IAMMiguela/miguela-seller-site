import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let { data, error } = await supabase.from('products').select('*');
      if (!error) setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}