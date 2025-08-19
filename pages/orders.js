import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      let { data, error } = await supabase.from('orders').select('*');
      if (!error) setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h1>Orders</h1>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>Order {o.id} - {o.status}</li>
        ))}
      </ul>
    </div>
  );
}