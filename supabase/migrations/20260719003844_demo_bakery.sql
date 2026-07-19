-- ==========================================================
-- Grandir Demo Bakery Data
-- ==========================================================

-- Settings
insert into settings (
    business_name, description, phone, whatsapp, email, address,
    logo_url, hero_image_url, pickup_enabled, delivery_enabled,
    opening_hours, social_links
) values (
    'Grandir Bakery',
    'Freshly baked every morning.',
    '+92 300 1234567',
    '+92 300 1234567',
    'hello@grandir.pk',
    'Lahore, Pakistan',
    null,
    null,
    true,
    true,
    '{"Mon-Fri":"08:00-20:00","Sat-Sun":"09:00-21:00"}'::jsonb,
    '{"instagram":"@grandirbakery","facebook":"Grandir Bakery"}'::jsonb
);

-- Categories
insert into categories(name, description, display_order) values
('Cakes','Fresh celebration cakes',1),
('Bread','Fresh artisan bread',2),
('Cookies','Classic baked cookies',3),
('Pastries','Flaky pastries',4),
('Drinks','Hot & cold beverages',5),
('Special Offers','Seasonal specials',6);

-- Products
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Chocolate Cake','Rich chocolate sponge',350000,true,true from categories where name='Cakes';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Red Velvet Cake','Classic red velvet',380000,true,true from categories where name='Cakes';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Cheesecake','Creamy baked cheesecake',420000,false,true from categories where name='Cakes';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Black Forest Cake','Chocolate and cherries',390000,false,true from categories where name='Cakes';

insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Sourdough Loaf','Naturally fermented',85000,false,true from categories where name='Bread';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Garlic Bread','Butter garlic loaf',65000,false,true from categories where name='Bread';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Baguette','French baguette',70000,false,true from categories where name='Bread';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Multigrain Bread','Healthy multigrain loaf',95000,true,true from categories where name='Bread';

insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Chocolate Chip Cookies','Crunchy classic',45000,true,true from categories where name='Cookies';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Butter Cookies','Melt-in-mouth',40000,false,true from categories where name='Cookies';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Oatmeal Raisin Cookies','Wholesome cookies',42000,false,true from categories where name='Cookies';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Double Chocolate Cookies','Extra chocolate',48000,false,true from categories where name='Cookies';

insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Croissant','Buttery croissant',55000,true,true from categories where name='Pastries';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Cinnamon Roll','Soft cinnamon roll',60000,false,true from categories where name='Pastries';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Apple Turnover','Apple filled pastry',65000,false,true from categories where name='Pastries';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Danish Pastry','Fruit danish',70000,false,true from categories where name='Pastries';

insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Espresso','Single shot',30000,false,true from categories where name='Drinks';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Cappuccino','Fresh cappuccino',45000,true,true from categories where name='Drinks';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Latte','Creamy latte',50000,false,true from categories where name='Drinks';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Iced Coffee','Cold brewed coffee',55000,false,true from categories where name='Drinks';

insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Weekend Combo','Cake + Coffee',600000,true,true from categories where name='Special Offers';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Family Bread Pack','Assorted breads',250000,false,true from categories where name='Special Offers';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Cookie Box','12 assorted cookies',180000,false,true from categories where name='Special Offers';
insert into products(category_id,name,description,price_in_paisa,featured,available)
select id,'Breakfast Bundle','Croissant + Coffee',90000,true,true from categories where name='Special Offers';