const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;
const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLElement;
const displayUser = document.querySelector("#user") as HTMLElement;

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: boolean
) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total" + " " + "" + value.toString() + " " + "last review by" + " ";
  reviewer + iconDisplay;
}

export function populatedUser(userName: string, isReturning: boolean) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  displayUser.innerHTML = userName;
}
