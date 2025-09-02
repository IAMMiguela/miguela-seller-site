'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout(){
  const [name,setName]=useState(''); const [phone,setPhone]=useState(''); const [address,setAddress]=useState('');
  const router = useRouter();
  async function submit(e:any){ e.preventDefault();
    const res = await fetch('/api/orders/create', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ name, phone, address }) });
    const j = await res.json();
    if (j.ok) router.push('/payment'); else alert(j.error||'Failed');
  }
  return (
    <div className="container py-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <form className="card p-4 space-y-3" onSubmit={submit}>
        <input required className="w-full border rounded px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input required className="w-full border rounded px-3 py-2" placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} />
        <textarea required className="w-full border rounded px-3 py-2" placeholder="Address with landmark" value={address} onChange={e=>setAddress(e.target.value)} />
        <button className="btn">Complete Order</button>
      </form>
    </div>
  )
}
