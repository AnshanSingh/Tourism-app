// script.js
const accessKey = "wkCo3l4HS6TKxWI3ChST05Rlz3tw1xL7Im7mmobGEmI"; // <-- Replace with your Unsplash access key

function searchState() {
  const state = document.getElementById("stateInput").value.trim();

  if (state === "") {
    alert("Please enter a state name");
    return;
  }

  const url = `https://api.unsplash.com/search/photos?page=1&query=${state} india&client_id=${accessKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        const imageUrl = data.results[0].urls.regular;
        const resultDiv = document.getElementById("result");

        resultDiv.innerHTML = `
          <img src="${imageUrl}" alt="${state}" />
          <h2>Welcome to ${state}</h2>
        `;
      } else {
        alert("No images found for this state.");
      }
    })
    .catch(error => {
      console.error("Error fetching image:", error);
    });
}
