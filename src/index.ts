import { showReviewTotal, populatedUser } from "./utils";
const diplaycard = document.querySelector(".properties") as HTMLElement;
const footer = document.querySelector(".footer") as HTMLElement;

enum loyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: loyaltyUser;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: loyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: loyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: loyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];
const ADMIN = "admin";
const READ_ONLY = "read_only";

enum permissions {
  ADMIN,
  READ_ONLY,
}
const you = {
  username: "Annah",
  isReturning: true,
  permission: permissions.ADMIN,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "/images/colombia.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "andyluger@aol.com"],
    isAvailable: true,
  },
  {
    image: "/images/poland.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "/images/london.jpg",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populatedUser(you.username, you.isReturning);

for (let i = 0; i < properties.length; i++) {
  const propertyDiv = document.createElement("div");
  propertyDiv.classList.add(".card");
  const title = document.createElement("h2");
  title.textContent = properties[i].title;
  propertyDiv.appendChild(title);
  const image = document.createElement("img");
  image.src = properties[i].image;
  propertyDiv.appendChild(image);

  const price = document.createElement("p");
  price.textContent = `Price: ${properties[i].price}`;
  propertyDiv.appendChild(price);

  const location = document.createElement("p");
  location.textContent = `Location: ${properties[i].location.firstLine}, ${properties[i].location.city}, ${properties[i].location.code}, ${properties[i].location.country}`;
  propertyDiv.appendChild(location);

  const contact = document.createElement("p");
  contact.textContent = `Contact: ${properties[i].contact}`;
  propertyDiv.appendChild(contact);

  const availability = document.createElement("p");
  availability.textContent = `Available: ${
    properties[i].isAvailable ? "yes" : "no"
  }`;
  propertyDiv.appendChild(availability);
  diplaycard.appendChild(propertyDiv);
}

let currentLocation: [string, string, number] = ["Rwanda", "11:35", 23];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";
