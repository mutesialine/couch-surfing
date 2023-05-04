import { showReviewTotal, populatedUser } from "./utils";
const diplaycard = document.querySelector("#properties") as HTMLElement;

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
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

const you: {
  username: string;
  isReturning: boolean;
  stayedAt: (string | number)[];
} = {
  username: "Ivad",
  isReturning: true,

  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow", 25],
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
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: "marywinkle@gmail.com",
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: "garydavis@hotmail.com",
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: "andyluger@aol.com",
    isAvailable: true,
  },
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populatedUser(you.username, you.isReturning);

for (let i = 0; i < properties.length; i++) {
  const propertyDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = properties[i].image;
  propertyDiv.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = properties[i].title;
  propertyDiv.appendChild(title);

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
