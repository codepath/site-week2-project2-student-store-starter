# Project #2: Student Store

## Overview

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of Codepath. The application entails a frontend user interface for potential customers to peruse the goods, and a backend API to handle data management. The API will be built with Node and Express and the UI will be built with React.


#### WEEK 2 Frontend Previews

Displays the header, banner, search, product grid, about, contact, and footer sections.
![](https://i.imgur.com/LPO7UW1.gif)

User can sort by clicking the cateogories and can search for products
![](https://i.imgur.com/SCnDX96.gif)

User can click on a product in the grid to view additional product details with a React Router. User can click the logo in the navigation bar to return to the home page
![](https://i.imgur.com/GdvQFfa.gif)

#### WEEK 3 Backend Previews

Core features: Displays sections, can filter by category and search, can add and remove items from shopping cart, sidebar toggles and shows shopping cart and checkout form, shows error messages and succes messages, user can checkout and view receipt.
Stretch features: Has top bar navigation, shows "Not found" page, shows message in product grid when no items are found.
![](https://i.imgur.com/tMgmDe4.gif)

API Get requests work
![](https://i.imgur.com/L6ydNmg.gif)


### Application Features

#### Core Features

- [X] Displays the following sections: header, banner, search, product grid, about, contact, and footer.
- [X] On initial page load, display the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store).
- [X] User can click on the categories (Clothing, food, etc) to filter the product grid by type.
- [X] User can search for products.
- [X] User can click on a product in the grid to view additional product details. Navigation is via a React Router.
- [X] User can click to expand the shopping cart in the left navigation.
- [X] User can click the '+' button on a product cart to increment that product in the shopping cart.
- [X] User can click the '-' button on a product cart to increment that product in the shopping cart.
- [X] Shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [X] User can check out, and can view receipt upon completion.

#### Stretch Features

- [X] User can click in the top navigation bar to scroll to the relevant section.
- [X] User sees a "not found" display when searching for a nonexistent product.
- [X] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Passing Automated Tests

The following specifications were met on the Express backend and the React frontend.

### React UI

**App.jsx**

  - [ ] The core App component that contains the routes for the app and does the initial data fetching
  - [ ] Renders a `BrowserRouter` component that contains a `Routes` component with the following routes:
    - [ ] `/` - Should render the `Home.jsx` component
    - [ ] `/products/:productId` - should render the `ProductDetail` component
    - [ ] `*` - anything else should render the `NotFound` component
  - [ ] Renders the `Navbar` component on every route
  - [ ] Renders the `Sidebar` component on every route
  - [ ] Should create **at least** the following state variables:
    - [ ] `products` - an array of product objects that is initially empty.
    - [ ] `isFetching` - a boolean value representing whether or not the App is currently fetching the `products` from the API.
    - [ ] `error` - a variable used to display a message when something goes wrong with the API requests.
    - [ ] `isOpen` - a boolean value representing whether or not the `Sidebar.jsx` is in the open or closed state.
    - [ ] `shoppingCart` - should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
      - [ ] Use whatever data type works best here, but make sure the format the `shoppingCart` as an array before passing it to other components.
      - [ ] When passed down to other components as a prop, it should formatted as an array of objects.
      - [ ] Each object in the array should have two fields:
        - [ ] The `itemId` field should store the `id` of the item being purchased.
        - [ ] The `quantity` field should store a number representing how many of that item the user is purchasing.
    - [ ] `checkoutForm` - the user's information that will be sent to the API when they checkout.
  - [ ] Leverage the `useEffect` hook to ensure that when the `App.jsx` component is mounted to the screen...
    - [ ] It should make a `GET` request to the API's `/store` endpoint with the `axios.get` method.
    - [ ] When the request completes successfully, it should store the `products` returned by the response in state.
    - [ ] If the request does not complete successfully, or there are no `products` found in the response,
            it should create an error message and store it in the `error` state variable.
  - [ ] The `App.jsx` component should define handler functions to be passed as props to the `Home` and `ProductDetail` components.
    - [ ] Define as many as are needed.
    - [ ] At minimum, **create these five handlers**:
      - [ ] The **`handleOnToggle`** function. When called...
        - [ ] It should toggle the open/closed state of the `Sidebar`.
      - [ ] The **`handleAddItemToCart`** function. When called...
        - [ ] It should accept a single argument - `productId`
        - [ ] It should add that product to the `shoppingCart` if it doesn't exist, and set its quantity to `1`.
        - [ ] If it does exist, it should increase the quantity by `1`.
        - [ ] It should add the price of the product to the total price of the `shoppingCart`.
      - [ ] The **`handleRemoveItemFromCart`** function. When called...
        - [ ] It should accept a single argument - `productId`
        - [ ] It should decrease the quantity of the item in the `shoppingCart` by `1`, but only if it already exists.
        - [ ] If it doesn't exist, the function should do nothing.
        - [ ] If the new quantity is `0`, it should remove the item from the `shoppingCart`
      - [ ] The **`handleOnCheckoutFormChange`** function. When called...
        - [ ] It should receive two arguments:
          - [ ] `name` - the `name` attribute of the input being updated
          - [ ] `value` - the new value to set for that input
        - [ ] It should update the `checkoutForm` object with the new value from the correct input(s)
      - [ ] The **`handleOnSubmitCheckoutForm`** function. When called...
        - [ ] It should submit the user's order to the API
        - [ ] To submit the user's order, it should leverage the `axios.post` method to send a `POST` request to the `/store` endpoint.
        - [ ] The body of that `POST` request should be an object with two fields:
          - [ ] The `user` field:
            - [ ] Should be an object containing `name` and `email` properties
            - [ ] Each property should be set to the correct value found in the `checkoutForm`
          - [ ] The `shoppingCart` field:
            - [ ] Should contain the user's order formatted as an array of objects.
            - [ ] Each object in the array should have two fields:
              - [ ] The `itemId` field should store the `id` of the item being purchased.
              - [ ] The `quantity` field should store a number representing how many of that item the user is purchasing.
            - [ ] Don't include the `total` price here, since we'll be calculating that on the backend. Remember to never trust the client!

**Navbar.jsx**

  - [ ] Should render JSX that is wrapped by a `nav` element with a `className` of `navbar`
  - [ ] Should render the `Logo` component that links to the `/` route when clicked

**Logo.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `logo`
  - [ ] Should use the `Link` component from `react-router-dom` to link to the home route (`/`) when clicked

**Home.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `home`
  - [ ] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should render the `Hero` component
  - [ ] Should render the `ProductGrid` component

**Hero.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `hero`
  - [ ] Should display an intro message inside an element with the `className` of `intro`. That message should contain the text `"Welcome!"` somewhere within it.
  - [ ] Should render a hero image inside an `img` tag with the `className` of `hero-img`.

**ProductGrid.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-grid`
  - [ ] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should iterate over its `products` prop, rendering a `ProductCard` component for each one. Set the `showDescription` prop to `false` for all of the `ProductCard` components rendered in the `ProductGrid` component.

**ProductDetail.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-detail`
  - [ ] Should accept **at least** the following props:
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should define **at least** a `product` state variable and updater
  - [ ] It should leverage the `useParams` hook from `react-router-dom` to extract the `productId` param from the url.
  - [ ] When the component is mounted to the screen...
    - [ ] It should make a `GET` request to the `/store/:productId` endpoint with the `axios.get` method.
    - [ ] The `:productId` part of the request should be replaced with the `productId` pulled from the url.
    - [ ] When the initial request is loading, it should render an `h1` element with the `className` of `loading` and contain the text `"Loading..."`
    - [ ] It should store the `product` received by the request in state and then render the `ProductView` component.
    - [ ] If no `product` is found with that `id`, it should render the `NotFound` component

**ProductView.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-view`
  - [ ] Should accept **at least** the following props:
    - `product` - the `product` object returned by the API request
    - `productId` - the id of the product extracted from the url
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
  - [ ] It should display an `h1` element with the `className` of `product-id` that contains the text: `Product #` followed by the `productId` prop
  - [ ] It should render a `ProductCard` component and pass it the props it needs. It should also set the `showDescription` prop to `true` for this product card.

**ProductCard.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `product-card`
  - [ ] Should accept **at least** the following props:
    - `product` - a product object
    - `productId` - a `number` representing the `id` of the product
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
    - `showDescription` - boolean
  - [ ] Should render the `name` of the product inside an element with the `className` of `product-name`
  - [ ] Should render the `price` of the product inside an element with the `className` of `product-price`. The price should formatted so that it starts with a `$`, and has **at least one** integer digit, along with **exactly two** decimal digits. Examples - `$22.99`, `$860.20`, and `$0.50`
  - [ ] If the `showDescription` prop is set to `true`, it should render the `description` of the product inside an element with the `className` of `product-description`.
  - [ ] Should render an `img` element for the product:
    - [ ] The `img` element should have a `src` attribute to set to the `image` property of the `product` prop.
    - [ ] The `img` element should be wrapped in a `Link` component from `react-router-dom`.
      - [ ] The `Link` element should have a `to` prop so that when the `img` element is clicked on, it should navigate to the product detail route for that product using its `id` attribute. For example, a product with an `id` of `4` should create a `Link` with its `to` prop set to `/products/4`.
      - [ ] The `Link` that wraps the `img` element should be nested somewhere inside an element with the `className` of `media`.
  - [ ] Should render two `buttons` elements...
    - [ ] One button with a `className` of `add`. When clicked, it should call the `handleAddItemToCart` function with the `id` of the `product` as its only argument.
    - [ ] One button with a `className` of `remove`. When clicked, it should call the `handleRemoveItemFromCart` function with the `id` of the `product` as its only argument.
  - [ ] Should display the current quantity of items that the user has selected in their shopping cart. The quantity should be rendered inside an element with the `className` of `product-quantity`. If none of that particular item have been added to the shopping cart, it should render nothing there.

**Sidebar.jsx**

  - [ ] Should render JSX that is wrapped by a `section` element with the `className` of `sidebar`
  - [ ] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `products` - the array of products fetched from the API
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm` object
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
    - `handleOnToggle` - handler function to toggle open/closed `Sidebar` state
  - [ ] It should always render a `button` element with the `className` of `toggle-button`. When that button is clicked it should change the `isOpen` prop by calling the `handleOnToggle` prop.
  - [ ] When the sidebar is opened, it should display the `ShoppingCart` and `CheckoutForm` components and should be wider than `350px`.
  - [ ] When the sidebar is closed, it should only render the toggle button and shouldn't be wider than `150px`.

**ShoppingCart.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with the `className` of `shopping-cart`
  - [ ] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `products` - the array of products fetched from the API
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
  - [ ] For every item in the `shoppingCart`:
    - [ ] It should display the `name` of the item in an element with the `className` of `cart-product-name`. Remember that items in the `shoppingCart` prop will **only** contain the `itemId` and `quantity` fields. Other props will have to be used to conver the `itemId` field to the `product`'s name.
    - [ ] It should display the `quantity` of the item in an element with the `className` of `cart-product-quantity`
  - [ ] It add up the cost of all items (make sure to use the quantity of the item requested), and render that amount **rounded up to exactly 2 decimal places** inside an element with the `className` of `subtotal`. Make sure it is prefixed with a dollar sign ($)!
  - [ ] It should calculate the cost of taxes on that subtotal (using 8.75% as the tax rate), add that amount to the subtotal, and render the total cost **rounded up to exactly 2 decimal places** inside an element with the `className` of `total-price`. Make sure it is prefixed with a dollar sign ($)!
  - [ ] If no items exist in the `shoppingCart`, it should render this message: `"No items added to cart yet. Start shopping now!"` inside an element with the `className` of `notification`

**CheckoutForm.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with the `className` of `checkout-form`
  - [ ] Should accept **at least** the following props:
    - `isOpen` - boolean
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm`
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
  - [ ] Should render two `input` elements, each with the `className` of `checkout-form-input`
    - [ ] The `checkoutForm` prop should supply the correct props needed to create the two controlled inputs:
      - [ ] The first input should have:
        - [ ] the `type` prop set to `email`
        - [ ] the `name` prop set to `email`
        - [ ] the `placeholder` prop set to `student@codepath.org`
        - [ ] the `value` prop set by `checkoutForm.email`.
        - [ ] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
      - [ ] The second input should have:
        - [ ] the `type` prop set to `text`
        - [ ] the `name` prop set to `name`
        - [ ] the `placeholder` prop set to `Student Name`
        - [ ] the `value` prop set by `checkoutForm.name`.
        - [ ] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
  - [ ] Should render a `button` element with the `className` of `checkout-button`.
    - [ ] It should contain the text `Checkout`.
    - [ ] When clicked, it should call the `handleOnSubmit` function.
      - [ ] If that request fails, the `CheckoutForm` component should display an error message inside an element with the `className` of `error`.
      - [ ] If the `POST` request is successful...
        - [ ] The `CheckoutForm` component should display a success message that contains the text `"Success!"` inside an element with the `className` of `success`.
        - [ ] The `shoppingCart` should be emptied
        - [ ] The `checkoutForm` should be reset to its default state.

**Server** - Create an Express server
  - [ ] Wire up the appropriate middleware and error handlers in the `app.js` file
  - [ ] Create a single `GET` request handler at the `/` endpoint. It should respond to all `GET` requests with a JSON object and a `200` status code. The JSON response should contain a single key of `ping` that stores the string value: `pong`. For example: `{ "ping": "pong" }`.
  - [ ] Have a `server.js` file that starts the app by listening on port `3001`.

**Models** - The API should use a `Store` model that handles the following
  - [ ] List all products currently in the `db.json` file
  - [ ] Fetch a single product by its id
  - [ ] Create a purchase order

**Routes** - The API should contain a route mounted at the `/store` endpoint
  - [ ] It should respond to `GET` requests to `/store` with an array of all products in the store in this format: `{ "products": products }`
  - [ ] It should respond to `GET` requests to `/store/:productId` with a single product based on the product's id using this JSON format: `{ "product": product }`
  - [ ] It should allow `POST` requests to the `/store` endpoint:
    - [ ] The endpoint should create purchase orders for users and save them to the `db.json` file
    - [ ] The endpoint should accept a request body that contains `shoppingCart` and `user` fields.
      - [ ] The `shoppingCart` field should contain the user's order.
        - [ ] This should be an array of objects.
        - [ ] Each object in the array should have two fields:
          <!-- - [ ] The `item` field should store an object of the item being purchased -->
          - [ ] The `itemId` field should store the `id` of the item being purchased
          - [ ] The `quantity` field should store a number representing how many of that item the user is purchasing.
      - [ ] The `user` field should contain the name and email of the person placing the order.
      - [ ] When either the `shoppingCart` or `user` fields are missing, it should throw a `400` error.
      - [ ] If there are duplicate items in the `shoppingCart`, it should throw a `400` error.
      - [ ] If either the `quantity` or `itemId` field is missing for any of the items in the `shoppingCart`, a `400` error should be thrown.
      - [ ] When both are there, it should calculate the total cost of all the items (including quantities), add a `8.75%` tax to the total, and create a new purchase object containing 6 required fields and 1 optional field:
        - **required**:
          - [ ] `id` - the new `id` of the purchase should be equal to one more than the current number of existing purchases
          - [ ] `name` - the name of the user making the purchase
          - [ ] `email` - the email of the user making the purchase
          - [ ] `order` - the `shoppingCart` value sent in the `POST` request
          - [ ] `total` - the calculated total of the order
          - [ ] `createdAt` - a string representation of the date and time when the order was placed
        - **optional**:
          - [ ] `receipt` - text describing the order (what might go on a receipt)
      - [ ] It should then send a JSON response back to the client with the new purchase like so: `{ "purchase": purchase }`. The response should have a `201` status code for a resource created action.


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Week2: Initially, I felt most unprepared to complete the routing with BrowserRouter, Routes, and Links. Although it ended up being more straightforward than I had anticipated, it still felt intimidating since we weren't able to cover it during the labs. The API call with axios was another instance of this since I didn't really practice using useEffect hooks before the project. Overall, though, I felt like the labs did cover the major parts of the assignment such as incorporating controlled text inputs, filtering objects, and passing props between components. One thing of note is that this project had a lot more components than the labs with a lot more props being passed between them. So, I definitely still felt this was a step up from the labs as I had to take extra care in making sure that all the necessary props were passed properly.

Week 3: For week 3, I ended up referencing the labs a lot, especially the bank of CodePath lab because it provided a really good "standard" for my project on writing get and post requests. I would say that I felt most confused when I was writing the model functions for the project, but looking at week 3's labs helped clarify what functions I should be writing and how I should go about writing them (e.g, what built-ins to use, how to access local databases). Another aspect that I found a little daunting was accessing and using POST request responses. We mostly practiced making GET requests to retrieve data, so doing the POST request and receiving data back was a little strange at first. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Week 2: Currently, I have yet to properly implement some parts of the shopping cart and the checkout form components, so that would be the first thing I would be working on as I start on Week 3. In terms of additional features, I hope to add the top bar navigation links and create the "Not Found" display. The UI is currently not great in terms of spacing and interaction, so that is also definitely something I want to continue to improve over the course of Week 3 before I submit the final project. In terms of specific functionalities, one thing I would like to change is to make my category filtering be more reusable by changing how the "All categories" button works. Lastly, my site is not very robust and is heavily reliant on all the data getting passed to its props being formatted in a very specific way, so it probably would not handle errors very well. So, to improve my site, I will have to go back in and make sure that the components will still render without errors even with "incorrect" or missing props through adding default values for my components.

Week 3: At this point, I've been able to accomplish some of the features that I mentioned in my week 2 reflection (shopping cart, checkout form, top bar navigation, "not found" display, UI changes), which is really great! However, the other changes mentioned in last week's reflection still stand. I think I've gotten better at making components more error-resistant since I've been more intentional about it. So, I think the components I worked on this week are OK, but I would still need to go back and edit all my other components. Another thing I would do is clean up the function I wrote to update the database to include new purchases. It requred a lot of logic that got kind of confusing since there were so many things to consider, so I think I would want to spend some time working to optimize it. Additionally, at this point, there are still 2 more stretch features I can do: creating a list of past purchases, and searching them by email. Hopefully, this is something I can get done over the weekend.


* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Week 2: One thing that I did not anticipate is how long it would take to do the styling for the website. Although it was not necessarily difficult, it definitely takes some time to get things in the right places, and I ended up spending a lot of my work time on the CSS and I did not make as much progress as I had hoped. Another obstacle I faced with this project was with working with state variables. When I was working on the shopping cart, I had a lot of trouble updating the cart because it would change a step late. I was able to fiture out my issue, but I realized that I did not understand how state variables updated with the rest of the page as well as I had thought, and I had to do some more research on this in order to get my project going. Lastly, when thinking about some of the features my peers incorporated in their projects, I feel that most of the demos I saw generally just followed the same functionalities listed in the requirements. But, I noticed that people really customized their UI, so I would like to incorporate some of the design decisions I saw, such as a sidebar for the category filters.

Week 3: A major point of frustration was setting up the backend server. I forgot that we had to restart the server, and I struggled for a while because I thought my backend wasn't working at all when in reality, I just needed to restart the server. I ended up wasting a lot of time because of this, which was really frustrating. Luckily, the rest of the backend was not TOO difficult to implement minus the function to update the database for the POST request. One thing I saw during demos that I thought was really neat was creating a drop-down filter for the past orders. Although I did not implement the associated stretch feature, I think a drop-down filter would be a good addition for the product grid and is something I could do for that stretch feature if I'm able to get to it.

### Open-source libraries used

- [FontAwesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)

### Shout out

I'd like to shoutout all of my podmates: Angelo, Charidi, Evans, and Travis; it was great working with one group for a couple days! There were a lot of instances where I got frustrated with bugs in my code, and they provided a fresh set of eyes that helped me identify what was going on and get past those setbacks.