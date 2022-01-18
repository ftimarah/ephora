CREATE TABLE products ( 
    productid int PRIMARY KEY AUTOINCREMENT,
    productname text NOT NULL UNIQUE ,
    producttype text NOT NULL,
    price real NOT NULL,
    quantity  int NOT NULL
);