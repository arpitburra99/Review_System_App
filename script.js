const form = document.querySelector("form");
const rating = document.querySelector("#rating");
const review = document.querySelector("#review");
const listGroup = document.querySelector("ul");

const saveRating = (e) => {
  e.preventDefault();
  let reviewCard = document.createElement("li");
  let ratingText = document.createElement("h1");
  let reviewText = document.createElement("h1");
  let delBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  reviewCard.className = "list-group-item";
  ratingText.className = "display-5";
  ratingText.innerText = "Rating : " + rating.value;
  reviewText.className = "display-6";
  reviewText.innerText = "Review : " + review.value;
  delBtn.className = "btn btn-danger float-end";
  delBtn.innerText = "Delete";
  editBtn.className = "btn btn-warning mx-2 float-end";
  editBtn.innerText = "Edit";
  reviewCard.appendChild(ratingText);
  reviewCard.appendChild(reviewText);
  reviewCard.appendChild(delBtn);
  reviewCard.appendChild(editBtn);
  listGroup.appendChild(reviewCard);
  form.reset();
};
form.addEventListener("submit", saveRating);

const deleteReview = (e) => {
  if (e.target.className.includes("btn-danger")) {
    let li = e.target.parentElement;
    if (window.confirm("Are You Sure!")) {
      listGroup.removeChild(li);
    }
  }
};
listGroup.addEventListener("click", deleteReview);
