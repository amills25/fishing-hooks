# Pseudocode for Fishing Hooks

### APP.JS

-   React Router here
    -   Navbar goes atop router, outside of switch, because it's a component that shows up on every page
-   Create an array for all Products and for Cart products using hooks
    -   Products array
        -   API call here
            -   pass data to the children components
    -   Cart array
        -   addToCart method
            -   find index (method) of a cart item, if there isn't one, skip the if, but if it already exists, then we're adding to the current quantity by cloning the cartArray
        -   removeFromCart method
            -   Use in an onClick method in Cart
            -   Clone the cart array
            -   Remove an item if the id of the item that is clicked is seen in the cart array
            -   Return the cloned array
        -   Get local storage in useState if we have items in the cart
        -   Set local storage in useEffect to store the items in the cart

### HOME PAGE

-   Do this as a group
-   Colors: Blues and neutrals
-   Logo
-   Navbar
    -   Login ability
-   Carousel with a handful of items
    -   cards
    -   don't have to be from the api

### NAVBAR

-   Everyone makes navbar

    -   HOME - everyone does this
    -   PRODUCTS - andrew does this page
    -   CART - chase makes this page
        -   show number of items in cart
    -   LOGIN -keith makes this page

-   Use a forEach method to have a cart quantity count in the nav
    -   For every item in the cartArray, we'll add it's quantity to the total quantity

### PRODUCTS/CATALOGUE PAGE

#### Requirements

1. A user can see all the products listed on the products page.

    - cards on the catalogue page
    - map over api data
        - pulls name, price, and description from api

2. A user can modify the number of items in their cart.
    - Start with empty array
    - When user clicks on "add to cart" on a given product, then add it to cart array
        - cart items = cart array length

### ITEM PAGE

3. A user can see a product page when they click on a product (from the products page or from their cart).

-   When user clicks "view item" you'll go to the ShowItem page to see just that item
-   Use find method to pull out just one item from the products array

### CART PAGE

4. When the user clicks "add to cart" on a product(s), add it to the cart (A user should be able to add more than 1 item to their cart at a time)

-   Can only view cart if there are items in the cart
-   Can't remove item from cart if it isn't in cart

-   Shows items in cart array displayed as card
