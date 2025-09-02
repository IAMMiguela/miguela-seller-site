import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, address } = body || {};
    const now = new Date().toISOString();

    const { data, error } = await supabaseAdmin
      .from('orders')
      .insert([
        {
          user_id: null,
          subtotal: 0,
          delivery_fee: 0,
          total: 0,
          status: 'awaiting_admin',
          payment_method: null,
          created_at: now,
          shipping_name: name,
          shipping_phone: phone,
          shipping_address: address,
        },
      ])
      .select(); // ✅ ensure data is returned

    if (error) {
      return NextResponse.json({ ok: false, error: error.message });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ ok: false, error: 'No order created' });
    }

    return NextResponse.json({ ok: true, order: data[0] });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || 'Unexpected error' });
  }
}
