'use client';
import { useEffect, useState } from 'react';

export default function AdminPage(){
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(()=>{ fetch('/api/admin/orders').then(r=>r.json()).then(j=>setOrders(j.orders||[])); }, []);
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <div className="space-y-3">
        {orders.map(o=>((
          <div key={o.id} className="card p-4">
            <div className="font-semibold">Order #{o.id.slice(0,8)}</div>
            <div>Status: {o.status}</div>
            <div>Subtotal: ₱{(o.subtotal || 0).toFixed(2)}</div>
            <div>Delivery Fee: ₱{(o.delivery_fee || 0).toFixed(2)}</div>
            <div className="mt-2"><input placeholder="Delivery Fee" className="border rounded px-2 py-1" /></div>
          </div>
        )))}
      </div>
    </div>
  )
}
