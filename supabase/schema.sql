create extension if not exists "pgcrypto";

create table profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  phone text,
  address text,
  created_at timestamptz default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric(10,2) not null,
  image_url text,
  stock integer default 0,
  created_at timestamptz default now()
);

create table orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  subtotal numeric(12,2) default 0,
  delivery_fee numeric(12,2) default 0,
  total numeric(12,2) default 0,
  status text default 'awaiting_admin',
  payment_method text,
  shipping_name text,
  shipping_phone text,
  shipping_address text,
  created_at timestamptz default now()
);

create table order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  name text,
  image_url text,
  price numeric(12,2),
  quantity integer
);

create table cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  product_id uuid references products(id),
  quantity integer default 1,
  added_at timestamptz default now()
);
