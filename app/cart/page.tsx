import Link from 'next/link';
export default function CartPage(){
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Cart (Demo)</h1>
      <div className="card p-4">
        <p>This demo cart is a placeholder. When connected to Supabase functions, cart items will appear here.</p>
      </div>
      <div className="mt-4"><Link href="/cart/checkout" className="btn">Complete Order</Link></div>
    </div>
  )
}
