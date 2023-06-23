# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

 <a href="https://www.loom.com/share/6621236ac81043e7a332a56b854fd3cb">
<!--     <p>Exploring Our Storefront 🛍️ - Watch Video</p> -->
  <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6621236ac81043e7a332a56b854fd3cb-with-play.gif">
  </a>

## *Week 2* Application Features

### Core Features

- [x] The website displays header, banner, search, product grid, about, contact, and footer section.
- [x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [x] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [x] Users can search for products.
- [x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [x] Users can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can click on links to navigate to company's social media pages (both on Navbar and Contact Us)
- [x] Users can refresh to home page by clicking company image on about page
- [x] Users can hover over hero logo for an animation
- [x] Users can navigate to different sections on the page using the Navbar links
- [x] Users will not receive an output if they try to search for a product that does meet search or filter criteria
- [x] Placeholder search value for accessibility

## *Week 3* Application Features

### Core Features

- [x] User can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [ ] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [x] User can review a list of all products they have ordered in the past by selecting the button on the Navbar
