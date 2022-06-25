# Project #2: Student Store

## Overview

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of Codepath. The application entails a frontend user interface for potential customers to peruse the goods, and a backend API to handle data management. The API will be built with Node and Express and the UI will be built with React.

https://user-images.githubusercontent.com/65472356/175026580-ba13bfa5-cd3f-4974-98f1-f5670d57b10c.mp4

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

- [ ] User can click in the top navigation bar to scroll to the relevant section.
- [X] User sees a "not found" display when searching for a nonexistent product.
- [ ] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Passing Automated Tests

The following specifications were met on the Express backend and the React frontend.

### React UI

**App.jsx**

  - [X] The core App component that contains the routes for the app and does the initial data fetching
  - [X] Renders a `BrowserRouter` component that contains a `Routes` component with the following routes:
    - [X] `/` - Should render the `Home.jsx` component
    - [X] `/products/:productId` - should render the `ProductDetail` component
    - [X] `*` - anything else should render the `NotFound` component
  - [X] Renders the `Navbar` component on every route
  - [X] Renders the `Sidebar` component on every route
  - [X] Should create **at least** the following state variables:
    - [X] `products` - an array of product objects that is initially empty.
    - [X] `isFetching` - a boolean value representing whether or not the App is currently fetching the `products` from the API.
    - [X] `error` - a variable used to display a message when something goes wrong with the API requests.
    - [X] `isOpen` - a boolean value representing whether or not the `Sidebar.jsx` is in the open or closed state.
    - [X] `shoppingCart` - should store state for the active user's shopping cart (items they want to purchase and the quantity of each item).
      - [X] Use whatever data type works best here, but make sure the format the `shoppingCart` as an array before passing it to other components.
      - [X] When passed down to other components as a prop, it should formatted as an array of objects.
      - [X] Each object in the array should have two fields:
        - [X] The `itemId` field should store the `id` of the item being purchased.
        - [X] The `quantity` field should store a number representing how many of that item the user is purchasing.
    - [X] `checkoutForm` - the user's information that will be sent to the API when they checkout.
  - [X] Leverage the `useEffect` hook to ensure that when the `App.jsx` component is mounted to the screen...
    - [X] It should make a `GET` request to the API's `/store` endpoint with the `axios.get` method.
    - [X] When the request completes successfully, it should store the `products` returned by the response in state.
    - [X] If the request does not complete successfully, or there are no `products` found in the response,
            it should create an error message and store it in the `error` state variable.
  - [X] The `App.jsx` component should define handler functions to be passed as props to the `Home` and `ProductDetail` components.
    - [X] Define as many as are needed.
    - [X] At minimum, **create these five handlers**:
      - [ ] The **`handleOnToggle`** function. When called...
        - [ ] It should toggle the open/closed state of the `Sidebar`.
      - [X] The **`handleAddItemToCart`** function. When called...
        - [X] It should accept a single argument - `productId`
        - [X] It should add that product to the `shoppingCart` if it doesn't exist, and set its quantity to `1`.
        - [X] If it does exist, it should increase the quantity by `1`.
        - [X] It should add the price of the product to the total price of the `shoppingCart`.
      - [X] The **`handleRemoveItemFromCart`** function. When called...
        - [X] It should accept a single argument - `productId`
        - [X] It should decrease the quantity of the item in the `shoppingCart` by `1`, but only if it already exists.
        - [X] If it doesn't exist, the function should do nothing.
        - [X] If the new quantity is `0`, it should remove the item from the `shoppingCart`
      - [X] The **`handleOnCheckoutFormChange`** function. When called...
        - [X] It should receive two arguments:
          - [X] `name` - the `name` attribute of the input being updated
          - [X] `value` - the new value to set for that input
        - [X] It should update the `checkoutForm` object with the new value from the correct input(s)
      - [X] The **`handleOnSubmitCheckoutForm`** function. When called...
        - [X] It should submit the user's order to the API
        - [X] To submit the user's order, it should leverage the `axios.post` method to send a `POST` request to the `/store` endpoint.
        - [X] The body of that `POST` request should be an object with two fields:
          - [X] The `user` field:
            - [X] Should be an object containing `name` and `email` properties
            - [X] Each property should be set to the correct value found in the `checkoutForm`
          - [X] The `shoppingCart` field:
            - [X] Should contain the user's order formatted as an array of objects.
            - [X] Each object in the array should have two fields:
              - [X] The `itemId` field should store the `id` of the item being purchased.
              - [X] The `quantity` field should store a number representing how many of that item the user is purchasing.
            - [X] Don't include the `total` price here, since we'll be calculating that on the backend. Remember to never trust the client!

**Navbar.jsx**

  - [X] Should render JSX that is wrapped by a `nav` element with a `className` of `navbar`
  - [X] Should render the `Logo` component that links to the `/` route when clicked

**Logo.jsx**

  - [ ] Should render JSX that is wrapped by a `div` element with a `className` of `logo`
  - [ ] Should use the `Link` component from `react-router-dom` to link to the home route (`/`) when clicked

**Home.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with a `className` of `home`
  - [X] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [X] Should render the `Hero` component
  - [X] Should render the `ProductGrid` component

**Hero.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with a `className` of `hero`
  - [X] Should display an intro message inside an element with the `className` of `intro`. That message should contain the text `"Welcome!"` somewhere within it.
  - [X] Should render a hero image inside an `img` tag with the `className` of `hero-img`.

**ProductGrid.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with a `className` of `product-grid`
  - [X] Should accept **at least** the following props:
    - `products` - an array of product objects
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [ ] Should iterate over its `products` prop, rendering a `ProductCard` component for each one. Set the `showDescription` prop to `false` for all of the `ProductCard` components rendered in the `ProductGrid` component.

**ProductDetail.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with a `className` of `product-detail`
  - [X] Should accept **at least** the following props:
    - `handleAddItemToCart` - handler function defined in the `App.jsx` component
    - `handleRemoveItemToCart` - handler function defined in the `App.jsx` component
  - [X] Should define **at least** a `product` state variable and updater
  - [X] It should leverage the `useParams` hook from `react-router-dom` to extract the `productId` param from the url.
  - [X] When the component is mounted to the screen...
    - [X] It should make a `GET` request to the `/store/:productId` endpoint with the `axios.get` method.
    - [X] The `:productId` part of the request should be replaced with the `productId` pulled from the url.
    - [X] When the initial request is loading, it should render an `h1` element with the `className` of `loading` and contain the text `"Loading..."`
    - [X] It should store the `product` received by the request in state and then render the `ProductView` component.
    - [X] If no `product` is found with that `id`, it should render the `NotFound` component

**ProductView.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with a `className` of `product-view`
  - [X] Should accept **at least** the following props:
    - `product` - the `product` object returned by the API request
    - `productId` - the id of the product extracted from the url
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
  - [X] It should display an `h1` element with the `className` of `product-id` that contains the text: `Product #` followed by the `productId` prop
  - [X] It should render a `ProductCard` component and pass it the props it needs. It should also set the `showDescription` prop to `true` for this product card.

**ProductCard.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with a `className` of `product-card`
  - [X] Should accept **at least** the following props:
    - `product` - a product object
    - `productId` - a `number` representing the `id` of the product
    - `quantity` - the quantity for this product found in the `shoppingCart`
    - `handleAddItemToCart` - handler function
    - `handleRemoveItemToCart` - handler function
    - `showDescription` - boolean
  - [X] Should render the `name` of the product inside an element with the `className` of `product-name`
  - [X] Should render the `price` of the product inside an element with the `className` of `product-price`. The price should formatted so that it starts with a `$`, and has **at least one** integer digit, along with **exactly two** decimal digits. Examples - `$22.99`, `$860.20`, and `$0.50`
  - [ ] If the `showDescription` prop is set to `true`, it should render the `description` of the product inside an element with the `className` of `product-description`.
  - [X] Should render an `img` element for the product:
    - [X] The `img` element should have a `src` attribute to set to the `image` property of the `product` prop.
    - [X] The `img` element should be wrapped in a `Link` component from `react-router-dom`.
      - [X] The `Link` element should have a `to` prop so that when the `img` element is clicked on, it should navigate to the product detail route for that product using its `id` attribute. For example, a product with an `id` of `4` should create a `Link` with its `to` prop set to `/products/4`.
      - [X] The `Link` that wraps the `img` element should be nested somewhere inside an element with the `className` of `media`.
  - [X] Should render two `buttons` elements...
    - [X] One button with a `className` of `add`. When clicked, it should call the `handleAddItemToCart` function with the `id` of the `product` as its only argument.
    - [X] One button with a `className` of `remove`. When clicked, it should call the `handleRemoveItemFromCart` function with the `id` of the `product` as its only argument.
  - [X] Should display the current quantity of items that the user has selected in their shopping cart. The quantity should be rendered inside an element with the `className` of `product-quantity`. If none of that particular item have been added to the shopping cart, it should render nothing there.

**Sidebar.jsx**

  - [X] Should render JSX that is wrapped by a `section` element with the `className` of `sidebar`
  - [X] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `products` - the array of products fetched from the API
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm` object
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
    - `handleOnToggle` - handler function to toggle open/closed `Sidebar` state
  - [X] It should always render a `button` element with the `className` of `toggle-button`. When that button is clicked it should change the `isOpen` prop by calling the `handleOnToggle` prop.
  - [X] When the sidebar is opened, it should display the `ShoppingCart` and `CheckoutForm` components and should be wider than `350px`.
  - [X] When the sidebar is closed, it should only render the toggle button and shouldn't be wider than `150px`.

**ShoppingCart.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with the `className` of `shopping-cart`
  - [X] Should accept **at least** the following props (and probably a few more):
    - `isOpen` - boolean representing the open/closed state of the Sidebar
    - `products` - the array of products fetched from the API
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
  - [X] For every item in the `shoppingCart`:
    - [X] It should display the `name` of the item in an element with the `className` of `cart-product-name`. Remember that items in the `shoppingCart` prop will **only** contain the `itemId` and `quantity` fields. Other props will have to be used to conver the `itemId` field to the `product`'s name.
    - [X] It should display the `quantity` of the item in an element with the `className` of `cart-product-quantity`
  - [X] It add up the cost of all items (make sure to use the quantity of the item requested), and render that amount **rounded up to exactly 2 decimal places** inside an element with the `className` of `subtotal`. Make sure it is prefixed with a dollar sign ($)!
  - [X] It should calculate the cost of taxes on that subtotal (using 8.75% as the tax rate), add that amount to the subtotal, and render the total cost **rounded up to exactly 2 decimal places** inside an element with the `className` of `total-price`. Make sure it is prefixed with a dollar sign ($)!
  - [X] If no items exist in the `shoppingCart`, it should render this message: `"No items added to cart yet. Start shopping now!"` inside an element with the `className` of `notification`

**CheckoutForm.jsx**

  - [X] Should render JSX that is wrapped by a `div` element with the `className` of `checkout-form`
  - [X] Should accept **at least** the following props:
    - `isOpen` - boolean
    - `shoppingCart` - the active user's cart formatted as an array of objects with `itemId` and `quantity` keys
    - `checkoutForm` - the form state for the `CheckoutForm` component
    - `handleOnCheckoutFormChange` - handler function to update the `checkoutForm`
    - `handleOnSubmitCheckoutForm` - handler function to submit the user's order to the API
  - [X] Should render two `input` elements, each with the `className` of `checkout-form-input`
    - [X] The `checkoutForm` prop should supply the correct props needed to create the two controlled inputs:
      - [X] The first input should have:
        - [X] the `type` prop set to `email`
        - [X] the `name` prop set to `email`
        - [X] the `placeholder` prop set to `student@codepath.org`
        - [X] the `value` prop set by `checkoutForm.email`.
        - [X] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
      - [X] The second input should have:
        - [X] the `type` prop set to `text`
        - [X] the `name` prop set to `name`
        - [X] the `placeholder` prop set to `Student Name`
        - [X] the `value` prop set by `checkoutForm.name`.
        - [X] a valid `onChange` prop that uses the `handleOnCheckoutFormChange` function to update the `checkoutForm` state
  - [X] Should render a `button` element with the `className` of `checkout-button`.
    - [X] It should contain the text `Checkout`.
    - [X] When clicked, it should call the `handleOnSubmit` function.
      - [ ] If that request fails, the `CheckoutForm` component should display an error message inside an element with the `className` of `error`.
      - [X] If the `POST` request is successful...
        - [X] The `CheckoutForm` component should display a success message that contains the text `"Success!"` inside an element with the `className` of `success`.
        - [X] The `shoppingCart` should be emptied
        - [X] The `checkoutForm` should be reset to its default state.

**Server** - Create an Express server
  - [X] Wire up the appropriate middleware and error handlers in the `app.js` file
  - [X] Create a single `GET` request handler at the `/` endpoint. It should respond to all `GET` requests with a JSON object and a `200` status code. The JSON response should contain a single key of `ping` that stores the string value: `pong`. For example: `{ "ping": "pong" }`.
  - [X] Have a `server.js` file that starts the app by listening on port `3001`.

**Models** - The API should use a `Store` model that handles the following
  - [X] List all products currently in the `db.json` file
  - [X] Fetch a single product by its id
  - [X] Create a purchase order

**Routes** - The API should contain a route mounted at the `/store` endpoint
  - [X] It should respond to `GET` requests to `/store` with an array of all products in the store in this format: `{ "products": products }`
  - [X] It should respond to `GET` requests to `/store/:productId` with a single product based on the product's id using this JSON format: `{ "product": product }`
  - [X] It should allow `POST` requests to the `/store` endpoint:
    - [X] The endpoint should create purchase orders for users and save them to the `db.json` file
    - [X] The endpoint should accept a request body that contains `shoppingCart` and `user` fields.
      - [X] The `shoppingCart` field should contain the user's order.
        - [X] This should be an array of objects.
        - [X] Each object in the array should have two fields:
          <!-- - [X] The `item` field should store an object of the item being purchased -->
          - [X] The `itemId` field should store the `id` of the item being purchased
          - [X] The `quantity` field should store a number representing how many of that item the user is purchasing.
      - [X] The `user` field should contain the name and email of the person placing the order.
      - [X] When either the `shoppingCart` or `user` fields are missing, it should throw a `400` error.
      - [ ] If there are duplicate items in the `shoppingCart`, it should throw a `400` error.
      - [X] If either the `quantity` or `itemId` field is missing for any of the items in the `shoppingCart`, a `400` error should be thrown.
      - [X] When both are there, it should calculate the total cost of all the items (including quantities), add a `8.75%` tax to the total, and create a new purchase object containing 6 required fields and 1 optional field:
        - **required**:
          - [X] `id` - the new `id` of the purchase should be equal to one more than the current number of existing purchases
          - [X] `name` - the name of the user making the purchase
          - [X] `email` - the email of the user making the purchase
          - [X] `order` - the `shoppingCart` value sent in the `POST` request
          - [X] `total` - the calculated total of the order
          - [X] `createdAt` - a string representation of the date and time when the order was placed
        - **optional**:
          - [ ] `receipt` - text describing the order (what might go on a receipt)
      - [ ] It should then send a JSON response back to the client with the new purchase like so: `{ "purchase": purchase }`. The response should have a `201` status code for a resource created action.

---

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Mostly the labs were able to prepare me for this week's project. All of the labs were about React and creating components, so being able to get familiar with those topics helped, but there were some topics that weren't covered in the labs that were in the project, so I did feel underprepared this week. In particular, axios and React Router weren't covered in the labs, but thankfully Moe had covered these in the slides throughout the week. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would have changed the way I went about starting the project. I initially had focused on one component at a time, completing both the functionality and the CSS, which really hindered my time on the core functionalities. I should have left out as much CSS as I could, just so I could be working with the skeleton layout so I can focus on the core features more. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Overall I believe my project demo went well, I went from having just a nav bar on thursday to having all core features done and having the CSS really well done, so I'm proud of what I accomplished overnight. Some things that my peers implemented that I will attempt over the weekend is the shopping cart and sidebar functionalities, I really am impressed by my peers and how they accomplish so much, I look forward to stepping up my game in the weeks to come.

### Open-source libraries used

- tps://fontawesome.com/

### Shout out

Shoutout to Angelo and Annesa for sticking with me through that whole project, we really overcame a lot this week!
