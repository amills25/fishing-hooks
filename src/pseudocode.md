# Pseudocode for Fishing Hooks

### APP.JS

-   React Router here
-   API call here
    -   pass data to children/grandchildren

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

### CART PAGE

4. When the user clicks "add to cart" on a product(s), add it to the cart (A user should be able to add more than 1 item to their cart at a time)

-   Can only view cart if there are items in the cart
-   Can't remove item from cart if it isn't in cart

-   Shows items in cart array displayed as card
