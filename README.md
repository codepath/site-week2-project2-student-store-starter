# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

### Core Features

- [ X ] The website displays header, banner, search, product grid, about, contact, and footer section.
- [ X ] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [ X ] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [ X ] Users can search for products.
- [ X] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [ X ] Users can click to expand the shopping cart in the left navigation.
- [ X ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ X ] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [ X ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ X ] CSS animations (text hovering)

### Additional Resources Used
Google Material Icons

### Walkthrough Video

https://www.loom.com/share/5711cb411b6c4044a631d999ba506331?sid=06ca8283-57ce-49f4-ac22-a7e15ed2c856

### Reflection
- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, learning about useState and understanding how pages are reloading with changing variables was really helpful in building out the project of this week. It was also really helpful to understand how the navigation in React works using the React Router library. I think I felt least prepared to complete the sidebar featur because I think it requires learning about other react hooks that were not talked about in much length during the class time.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

I would have loved to continue styling my product details page, and add some css animations to the website. I also would have liked to implement my sidebar checkout cart and have compartmentalize the home page better. I wanted to also focus more on ensuring my website is more accessible, so I would have wanted to implement a way for users to navigate my website using only tab keys among other accessiblity features. 

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Understanding React was diffcult but I was able to build out a functional store which I think went really well for me. I did not expect the search bar to some extra critical thinking and caution, but I'm glad I was able to design and implement a neat solution to have products be filtered by searches and categories. I really like our Marwan included images in his footer, and I would have liked to add a similar thing in my website.

### Shout Outs
Jordan, Niya, Sophia, Oj, and the amazing instructors!

## *Week 3* Application Features

### Core Features

- [ X ] User can click to expand the shopping cart in the left navigation.
- [ X ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ X ] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [ X ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ X ] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [ X ] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ X ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ X ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ X ] Your choice! CSS animations and using the useReducer hook

### Walkthrough Video
https://www.loom.com/share/5fecf02a0db44f95b284cc9b1b39a4fd?sid=681d3b25-1e84-4503-bc6a-989024d40ed3
