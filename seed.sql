-- Seed data
insert into categories (name) values ('Coffee'),('Capsule'),('Powder'),('Accessories')
on conflict do nothing;

insert into products (name, price)
values ('Sample Coffee', 10), ('Sample Capsule', 5)
on conflict do nothing;