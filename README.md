# Mobile config page

## Installation
1. Have Node and NPM installed, ideally with version at least 10
2. Have yarn installed
3. Install dependencies `yarn`
4. launch the dev server `yarn run start`. It should open a browser at localhost:8080 or next best
5. You should see a blank page with two inputs. one for avatar mode and one for free mode

## How to use in MP

You ought to be able to replace the existing view inside the form tags with this react app prtty easily.

Seed your html page with a window.formData property containing all of the prefill info.

See `src/index.js` and `src/data/formData.js` for how I've done it here for demo purposes, but you'll want to delete that area of index .js and just a `<script>` tag directly to the html view.

The page should submit with the identical signature as before.
