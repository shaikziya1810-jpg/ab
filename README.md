# FrameFinder

## About the Project

FrameFinder is a responsive image search web application that helps users find images based on their interests. Users can search for images by entering keywords or by selecting a category such as Nature, City, Animals, Food, Travel or Technology.

## Features

- **Keyword search:** type any word and see a grid of matching images.
- **Category selection:** pick a category from a dropdown to search instantly.
- **Combined search:** use a keyword and a category together for a more specific result.
- **Empty and status messages:** the app tells the user what to do when nothing has been searched yet.
- **Responsive layout:** works on phones, tablets and desktops.

## Design Choices

1. **Responsive CSS Grid layout:** results use `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))`, so the number of columns adjusts automatically to the screen width without media queries for the grid itself.
2. **Dark theme with a single accent color:** a dark slate background with a sky-blue accent keeps the focus on the images, and CSS variables (`:root`) make the theme easy to change in one place.
3. **Accessible controls:** the search input and category dropdown have labels (visually hidden), and the status message uses `aria-live` so screen readers announce updates.

## Project Structure

```
index.html   - page structure, search form, results container
styles.css   - theme, responsive grid and layout
script.js    - search logic and rendering of images
README.md    - project documentation
```

## How to Run

Open `index.html` in any modern browser. No installation is needed. An internet connection is required to load images.

## Technologies

HTML5, CSS3 and vanilla JavaScript.