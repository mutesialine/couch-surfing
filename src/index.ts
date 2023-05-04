const reviewTotalDisplay = document.querySelector("#reviews") as InnerHTML;
const userNameDisplay = document.querySelector("#user");
const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function showReviewTotal(value: number, reviewer: string) {
  reviewTotalDisplay.innerHTML =
    "review total" + value.toString() + "last review bby" + reviewer;
}
showReviewTotal(reviews.length, reviews[0].name);
