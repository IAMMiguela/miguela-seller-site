-- ============================
-- Seed file for Coffee Shop DB
-- ============================

-- Insert categories (id comes from existing schema rules; if your schema uses SERIAL/INT, remove gen_random_uuid())
INSERT INTO categories (name)
VALUES
  ('Coffee'),
  ('Capsules'),
  ('Powder'),
  ('Accessories')
ON CONFLICT (name) DO NOTHING;

-- Insert products with real coffee images
INSERT INTO products (name, description, price, category_id, image_url)
VALUES
  (
    'Espresso Beans',
    'Rich and dark roasted espresso beans',
    12.99,
    (SELECT id FROM categories WHERE name = 'Coffee'),
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop'
  ),
  (
    'Coffee Capsules',
    'Pack of 10 premium coffee capsules',
    8.50,
    (SELECT id FROM categories WHERE name = 'Capsules'),
    'https://images.unsplash.com/photo-1587248720325-27c1b3d5b6ab?w=600&auto=format&fit=crop'
  ),
  (
    'Instant Coffee Powder',
    '200g jar of instant coffee powder',
    5.25,
    (SELECT id FROM categories WHERE name = 'Powder'),
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop'
  ),
  (
    'French Press',
    'Classic French press coffee maker',
    18.00,
    (SELECT id FROM categories WHERE name = 'Accessories'),
    'https://images.unsplash.com/photo-1511193311918-7f8d6e62b91d?w=600&auto=format&fit=crop'
  );
