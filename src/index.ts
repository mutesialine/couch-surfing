const reviewTotalDisplay = document.querySelector("#reviews") as InnerHTML;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as InnerHTML;
const displayUser = document.querySelector("#user") as InnerHTML;
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

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total" + " " + "" + value.toString() + " " + "last review by" + " ";
  reviewer + iconDisplay;
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you: { username: string; isReturning: boolean } = {
  username: "Mutesi",
  isReturning: true,
};

function populatedUser(userName: string, isReturning: boolean) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "Back";
  }
  displayUser.innerHTML = userName;
}
populatedUser(you.username, you.isReturning);
