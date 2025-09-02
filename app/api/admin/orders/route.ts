import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET() {
  const { data, error } = await supabaseAdmin.from('orders').select('*').order('created_at', {ascending:false}).limit(20);
  if (error) return NextResponse.json({ orders: [] });
  return NextResponse.json({ orders: data });
}
