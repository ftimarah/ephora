Welcome to Ephora Skincare's Inventory System. 

This is my submission for the Shopify Backend Developer Challenge for Summer 2022.

Ephora Skincare is a website that provides a diverse range of skincare catered to all ages and skin types.

This inventory system is to help track the products that Ephora Skincare sells on their website.

I've developed a basic web app that mimics an inventory system. You are able to create new products where you create its name, price, and quantity. Upon creating a new product, you can edit its parameters via the "Edit Button" by redirecting to the homepage and by clicking the "View All Prodcuts". In this page, you can view all the products existing in the inventory system, choose to delete a single item by clicking the "Delete Product" button, or export the current inventory into a csv file by clicking "Export Products to CSV file".

Stack:

Client: Html, jquery, JavaScript
Server: Node.js, Express.js, PostgreSQL, JavaScript, Heroku (for hosting)

As time goes on I will continue to improve this application particularly:

- Making the system more detailed by adding:
    - orders: view customer orders, change the quantity of product in the inventory system based off customer orders/transactions
    - supplier documentation: location, origin, and supplier of products to be sold.
    - adding a filter element, categorizing by the product type, ex. filter by day cream, cleanser, sunscreen, night cream. Also by min/max price, and min/max quantity

Features (and issues) of the App

When creating a new product in the create products page, you will notice that each product name is unique from each other. Duplicate names are not accepted and thus you will not be able to submit the form data successfully (on clicking the submit button). An improvement can be made here from the client side, such as adding an error message on clicking submit to notify the user that the chose name already exists in the system (database).

When updating a products information, all the inputs must be utilized. This obviously inefficient in the case that the user would want to update specific paramters, i.e. updating the price only of the product. The solution for this would be to make the inputs optional, so upon clicking submit, null values will be checked and not accounted for when updating the database with the respective product.

Both quantity and price values begin at minimum of 0, as negative values do not make sense in this setting. 

Everything else works fine for a super duper basic app :)





