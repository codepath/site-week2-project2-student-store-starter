# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

Demo recorded on Loom:
<a href="https://www.loom.com/share/9ddf4f40a12a45ff8cfdbb2151e5431b">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/private/9ddf4f40a12a45ff8cfdbb2151e5431b-with-play.gif?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZG4ubG9vbS5jb20vc2Vzc2lvbnMvdGh1bWJuYWlscy9wcml2YXRlLzlkZGY0ZjQwYTEyYTQ1ZmY4Y2ZkYmIyMTUxZTU0MzFiLXdpdGgtcGxheS5naWYiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2ODcwNjM2MDZ9fX1dfQ__&Key-Pair-Id=APKAJQIC5BGSW7XXK7FQ&Signature=RsCO7QFXSfjD8Peu%7EeSwLQ0Ovl161EHUTTxt8WVut4n%7EAHvykRPrISbUXJ0%7Eb8SFzIsFMF3gx1rWlasOaM29jERaux4YgwKQIjNoNDAuGjVS70HJDBrdDXWHHE%7ElssZI-Nqqf4u8qUN7Anhq8KJ-AT3Bjc-5PwbbuywLKnWNLBa82ABemCczk4gGkIprzKZyNTR0TVtiv7RazDgC9KEtwsq5L2qkBEUvHj2oKMUvxSTBwjUVhZtolLD09RjZ2r0QK5iAspLw3xttzJexjSG6nzg7DirHHH0Mk1B8mF5M-XPBbNekIgUm2l2KpGPKhAdAWFW-nir0%7EoAQNfZ3HvD0hQ__">
  </a>
   

### Core Features

- [x] The website displays header, banner, search, product grid, about, contact, and footer section.
- [x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [x] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [x] Users can search for products.
- [x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [ ] Users can click to expand the shopping cart in the left navigation.
- [ ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ ] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can leave ratings for products they have purchased.)

## *Week 3* Application Features

### Core Features

- [ ] User can click to expand the shopping cart in the left navigation.
- [ ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ ] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ ] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [ ] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can create a wish list of products they are interested in but not yet ready to purchase.)
