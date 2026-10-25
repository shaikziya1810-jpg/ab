1const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const results = document.getElementById("results");
const statusText = document.getElementById("status");

const IMAGES_PER_SEARCH = 12;

// Feature 1: keyword search
// Feature 2: category selection
// Feature 3: empty-state and loading messages
function buildImageUrl(keyword, index) {
  // loremflickr returns a photo matching the keyword; "lock" keeps each image different and stable
  return "https://loremflickr.com/400/300/" + encodeURIComponent(keyword) + "?lock=" + index;
}

function renderImages(keyword) {
  results.innerHTML = "";

  for (let i = 1; i <= IMAGES_PER_SEARCH; i++) {
    const figure = document.createElement("figure");
    figure.className = "card";

    const img = document.createElement("img");
    img.src = buildImageUrl(keyword, i);
    img.alt = keyword + " image " + i;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = keyword;

    figure.appendChild(img);
    figure.appendChild(caption);
    results.appendChild(figure);
  }
}

function handleSearch(event) {
  event.preventDefault();

  const typed = input.value.trim();
  const category = categorySelect.value;
  const keyword = typed || category;

  if (!keyword) {
    results.innerHTML = "";
    statusText.textContent = "Please type a keyword or choose a category to search.";
    return;
  }

  // If both are given, combine them for a more specific search
  const finalKeyword = typed && category ? typed + "," + category : keyword;

  statusText.textContent = "Showing results for \"" + finalKeyword.replace(",", " + ") + "\"";
  renderImages(finalKeyword);
}

// Picking a category searches straight away
categorySelect.addEventListener("change", function () {
  form.requestSubmit();
});

form.addEventListener("submit", handleSearch);

// Initial empty state
statusText.textContent = "Search for something to see images.";