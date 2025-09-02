'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { isGmail } from '@/lib/utils';

export default function LoginPage(){
  const [email,setEmail] = useState(''); const [password,setPassword]=useState(''); const [name,setName]=useState(''); const [phone,setPhone]=useState('');
  const [msg,setMsg]=useState('');

  async function signUp(){
    setMsg('');
    if (!isGmail(email)){ setMsg('Please register with Gmail only.'); return; }
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) setMsg(error.message); else setMsg('Check your email for verification.');
    // In production, you'd also insert into profiles table via server API
  }

  async function signIn(){
    setMsg('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message); else setMsg('Logged in.');
  }

  return (
    <div className="container py-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Login / Create Account</h1>
      <div className="card p-4 space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Gmail address" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Phone (09xxxxxxxxx)" value={phone} onChange={e=>setPhone(e.target.value)} />
        <input className="w-full border rounded px-3 py-2" placeholder="Password (8+)" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div className="flex gap-2">
          <button className="btn" onClick={signUp}>Create Account</button>
          <button className="btn" onClick={signIn}>Login</button>
        </div>
        {msg && <div className="text-sm mt-2">{msg}</div>}
      </div>
    </div>
  )
}
