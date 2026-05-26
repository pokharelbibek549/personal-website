function searchFunction() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  if (input.includes("about")) {
    window.location.href = "about.html";
  }

  else if (input.includes("blog")) {
    window.location.href = "blog.html";
  }

  else if (input.includes("contact")) {
    window.location.href = "contact.html";
  }

  else if (input.includes("cv")) {
    window.location.href = "cv.html";
  }

  else if (input.includes("gallery")) {
    window.location.href = "mygallery.html";
  }
}
// BLOG SEARCH
const searchInput =
document.getElementById("blogSearch");

if(searchInput){

searchInput.addEventListener("keyup", function() {

  let filter =
  searchInput.value.toLowerCase();

  let cards =
  document.querySelectorAll(".blog-card");

  cards.forEach(card => {

    let text =
    card.innerText.toLowerCase();

    if(text.includes(filter)) {

      card.style.display = "block";

    } else {

      card.style.display = "none";
    }

  });

});

}
// LIGHTBOX
const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeBtn =
document.querySelector(".close-btn");

// OPEN LIGHTBOX
galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = image.src;

  });

});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

// CLOSE WHEN CLICK OUTSIDE
lightbox.addEventListener("click", (e) => {

  if(e.target !== lightboxImg) {

    lightbox.style.display = "none";
  }

});