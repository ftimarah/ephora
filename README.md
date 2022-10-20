A demo video of the app: https://drive.google.com/file/d/1dmQF6WX31skw20CsxOCmT1274VZ_PG5G/view?usp=sharing

Link to the app: https://ephora.herokuapp.com/

* heroku database right now is read only because of maintenance issues. 
** update maintenance is done so everything is back to normal. (Maintenance results in the database to become read only.) Jan 20 7:16pm

Welcome to Ephora Skincare's Inventory System. 

Ephora Skincare prides itself in having a diverse range of skincare catered to all ages and skin types. This is the inventory system to help track the products that Ephora Skincare sells on their website.

I've developed a basic web app that mimics an inventory system. You are able to create new products where you create its name, price, and quantity. Upon creating a new product, you can edit its parameters via the "Edit Button". Then by redirecting to the homepage and by clicking the "View All Prodcuts" you can see the latest updates. Also, in this this page, you can view all the products in the inventory system, choose to delete a single item by clicking the "Delete Product" button, and/or export the current inventory data into a csv file by clicking "Export Products to CSV file".

Stack:

Client: Html, jquery, JavaScript
Server: Node.js, Express.js, PostgreSQL, JavaScript, Heroku (for hosting)

As time goes on I will continue to improve this application, particularly by:

- Making the system more detailed by adding:
    - orders: view customer orders, change the quantity of product in the inventory system based off customer orders/transactions
    - supplier documentation: location, origin, and supplier of products to be sold.
    - adding a filter element, categorizing by the product type, ex. filter by day cream, cleanser, sunscreen, night cream. Also by min/max price, and min/max quantity

Everything else works fine for a super duper basic app :)





