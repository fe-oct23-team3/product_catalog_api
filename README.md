## Data

1. You have `phones.json` and `phones/:phoneId.json` files in the `api` folder.
1. Images are inside `img/phones` folder grouped by phone models and colors.
1. Better to move images to the API side, but they can exist on a FE side too.
1. Each product has:
    - `id` is required to fetch product details;
    - `name` with a product name;
    - `image` with a link to the first image relative to a `public` folder;
    - `price` and `fullPrice` to show the discount;
    - `year` is used to sort by `Newest`;
    - `capacity` and `color` that can be choosen on product details page.