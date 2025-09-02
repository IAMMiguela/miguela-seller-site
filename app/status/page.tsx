import { supabase } from '@/lib/supabaseClient';
export default async function StatusPage(){
  const { data } = await supabase.from('orders').select('*').order('created_at', {ascending:false}).limit(10);
  const orders = data || [];
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Order Status</h1>
      <div className="space-y-3">
        {orders.map(o=>((
          <div key={o.id} className="card p-4">
            <div className="font-semibold">Order #{o.id.slice(0,8)}</div>
            <div className="text-sm">Status: {o.status}</div>
            <div className="text-sm">Total: ₱{o.total}</div>
          </div>
        )))}
      </div>
    </div>
  )
}
