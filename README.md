Welcome to Ephora Skincare's Inventory System. 
This system allows you to create, update, view, and delete inventory products.The links are established as follows: Create Products redirects you to a form to input information for a new product. View All Products redirects you to a page to view all existing inventory, and allows you to edit existing information about a product, to delete a product, and to export the entire table to a CSV file.


How to replicate this environment on your own:

1. Install home-brew
2. brew install postgresql 
3. brew services start postgresql
4. psql postgres
5. postgres=# \conninfo
6. postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';
7. postgres=# ALTER ROLE me CREATEDB;
8. postgres=# \q
9. psql -d postgres -U me
10. postgres=> CREATE DATABASE inventorystore;
11. postgres=> \c inventorystore;
12. You are now connected to database "inventorystore" as user "me".
    inventorystore=>

13. go into db.sql
14. copy the table listed
    CREATE TABLE products ( 
        productid serial PRIMARY KEY,
        productname VARCHAR (255) UNIQUE ,
        producttype VARCHAR (255),
        price FLOAT NOT NULL,
        quantity  INT NOT NULL,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    );

15. continuing back into terminal of inventorystore, past the copied table
16. inventorystore=> CREATE TABLE products ( 
        productid serial PRIMARY KEY,
        productname VARCHAR (255) UNIQUE ,
        producttype VARCHAR (255),
        price FLOAT NOT NULL,
        quantity  INT NOT NULL,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
    );
17. in a new terminal initalize express, and node-postgres servers
18. npm i express pg
19. node index.js or npm start
20. Now if you go to http://localhost:3000/ you'll see Ephora Skincare!

