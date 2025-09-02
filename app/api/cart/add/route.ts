import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  const form = await req.formData();
  const product_id = form.get('product_id') as string | null;
  if (!product_id) return NextResponse.json({ ok:false, error:'no product' });
  const { data, error } = await supabaseAdmin.from('cart_items').insert([{ user_id: null, product_id, quantity: 1 }]);
  if (error) return NextResponse.json({ ok:false, error: error.message });
  return NextResponse.json({ ok:true });
}
