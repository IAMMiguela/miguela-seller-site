import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductsPage(){
  const { data } = await supabase.from('products').select('*').order('name', {ascending:true});
  const products = data || [];
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((p:any)=>((
          <div key={p.id} className="card p-4">
            <div className="relative w-full aspect-square rounded overflow-hidden">
              <Image src={p.image_url} alt={p.name} fill className="object-cover" />
            </div>
            <div className="mt-3">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-600">₱{(p.price).toFixed(2)}</div>
              <div className="text-xs text-gray-500 mt-1">{p.description}</div>
              <div className="mt-3 flex items-center gap-2">
                <form action="/api/cart/add" method="post">
                  <input type="hidden" name="product_id" value={p.id} />
                  <button className="btn">+</button>
                </form>
                <form action="/api/cart/remove" method="post">
                  <input type="hidden" name="product_id" value={p.id} />
                  <button className="btn">-</button>
                </form>
                <span className="ml-auto text-sm">Available: {p.stock}</span>
              </div>
            </div>
          </div>
        )))}
      </div>
      <div className="mt-6"><Link href="/cart" className="btn">Go to Cart</Link></div>
    </div>
  )
}
