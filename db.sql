---- db version 2 

CREATE TABLE products ( 
    productid serial PRIMARY KEY,
    productname VARCHAR (255) UNIQUE ,
    producttype VARCHAR (255),
    price FLOAT NOT NULL,
    quantity  INT NOT NULL,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
);

-- CREATE TABLE orders (
--     orderID INT NOT NULL PRIMARY KEY,
--     productName VARCHAR (255) NOT NULL,
--     quantity INT NOT NULL,
--     price  FLOAT NOT NULL,
--     createdAt timestamp DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE supplier ( 
--     supplierID INT NOT NULL PRIMARY KEY,
--     supplierName VARCHAR (255) NOT NULL,
--     country VARCHAR (255) NOT NULL,
--     productID INT NOT NULL REFERENCES product(productID),
--     quantity INT NOT NULL,
--     createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
--     updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
-- );













-- -- 1, rave wash, 15 cad, 25, facewash, total units as of today
-- -- 2, rave acne wash , 15 cad, 25, facewash, total units as of today
-- -- 3, rave acne cream, 15 cad, 25, moi\lsturizer, total units as of today

-- CREATE TABLE productType (
--     productTypeName VARCHAR (255) NOT NULL PRIMARY KEY,
--     productID serial,
--     inventoryAmtCurrent INT NOT NULL,
--     createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
--     updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
-- );
-- -- location
-- -- 1, facewash, alpha, 50, created today - total as of today
-- -- 2, moisturizer, alpha, 25, total units as of today 
--  FOREIGN KEY (supplierName) references supplier(supplierName),
-- FOREIGN KEY (productTypeName) REFERENCES supplier(productTypeName)

-- CREATE TABLE supplier ( 
--     supplierID serial PRIMARY KEY,
--     supplierName VARCHAR (255) NOT NULL,
--     originCountry VARCHAR (255) NOT NULL,
--     productTypeName VARCHAR (255) NOT NULL REFERENCES productType(productTypeName),
--     inventoryAmtOriginal INT NOT NULL,
--     createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
--     updatedAt timestamp DEFAULT CURRENT_TIMESTAMP
-- );


-- -- totalItemsDistributed = all products inventoryAmt added up 
-- -- alpha, korea, 75 

-- CREATE TABLE orders (
--     orderID serial PRIMARY KEY
--     customerID serial, 
--     productTypeBought VARCHAR (255) NOT NULL,
--     totalPrice price FLOAT NOT NULL,
--     createdAt timestamp DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE productTypeBought (
--     orderID serial,
--     customerID serial, 
--     productID serial PRIMARY KEY,
--     totalNumItemsBought INT NOT NULL,
--     createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (orderID) references orders(orderID),
--     FOREIGN KEY (customerID) references orders(customerID)
-- );


--     -- locationPurchased
-- -- 1, 1, 2, 30, date today 
-- -- then database should update and sup
-- -- 
-- -- no returns atm. so no updatedAt time



-- -- CREATE TABLE location (
-- --     locationName
-- --     numofItemsTotalatLocation
-- --     productType foreign key
-- --     createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
-- --     updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,

-- -- )