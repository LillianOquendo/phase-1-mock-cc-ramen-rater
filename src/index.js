// When the page loads, request the data from the server to get all the ramen objects.
//check how script is being applied and if we need a DOM content loaded
//make a variable to hold the base link from your JSON watch file then a second variable
//that connects your base url(under home) to your get item at the end of the resources link
const baseUrl = "http://localhost:3000/";
const ramenUrl = baseUrl + "ramens/";

function fetchRamen() {
  fetch(ramenUrl)
    .then((response) => response.json())
    .then((ramenData) => renderAllRamen(ramenData));
}
fetchRamen();

// Then, display the image for each of the
//ramen using an img tag inside the #ramen-menu div.
function renderAllRamen(ramenData) {
  ramenData.forEach(ramen => renderRamenImage(ramen));
}

function renderRamenImage(ramen) {
  const ramenMenuDiv = document.getElementById("ramen-menu");

  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenMenuDiv.appendChild(ramenImage);
  //Click on an image from the #ramen-menu div and see all the info about
  // that ramen displayed inside the #ramen-detail div and where it says
  // insert comment here and insert rating here.
  ramenImage.addEventListener('click', () => showRamenInfo(ramen));
  //The above listener causes the page to immediately run the function rather than wait
}

function showRamenInfo(ramen) {
    const ramenDetailDiv = document.getElementById('ramen-detail');
  
    const ramenDetailImage = document.getElementById('ramen-detail-image');
    ramenDetailImage.src = ramen.image;
  
    const ramenDetailName = document.getElementById('ramen-detail-name');
    ramenDetailName.textContent = ramen.name;
  
    const ramenDetailRestaurant = document.getElementById('ramen-detail-restaurant');
    ramenDetailRestaurant.textContent = ramen.restaurant;
  
    const ramenDetailRating = document.getElementById('ramen-detail-rating');
    ramenDetailRating.textContent = ramen.rating;
  
    const ramenDetailComment = document.getElementById('ramen-detail-comment');
    ramenDetailComment.textContent = ramen.comment;
  }
  
//create a new ramen after submitting the new ramen form
const newRamenForm = document.getElementById("new-ramen");
newRamenForm.onsubmit = (event) => {
  event.preventDefault();

  const newRamen = {
    name: newRamenForm.name.value,
    restaurant: newRamenForm.restaurant.value,
    image: newRamenForm.image.value,
    rating: newRamenForm.rating.value,
    comment: newRamenForm["new-comment"].value
  };
 renderRamenImage(newRamen);
};
