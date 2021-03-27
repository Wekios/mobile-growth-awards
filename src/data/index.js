import faker from "faker";

const createPerson = () => ({
  name: faker.name.findName(),
  image: faker.image.avatar(),
  company: faker.company.companyName(),
});

const createPeople = (numUsers = 10) => {
  return Array.from({ length: numUsers }, createPerson);
};

export const data = {
  heading: "Mobile Growth Awards",
  subheading: "Most Innovative Mobile Campaigns of 2020",
  bgImage: "https://i.imgur.com/sKdebci.png",
  mainImage: {
    url: "https://i.imgur.com/fA66Qlq.png",
    alt: "logo",
  },
  people: createPeople(),
};
