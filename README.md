# Pets-R-Us

- Front-End deployed via [Netlify](https://pets-r-us.netlify.app/).
- Back-End deployed via [Heroku](https://pets-r-us.herokuapp.com/api/pets).

**Preview of the App**
![App Preview](https://i.imgur.com/hXmCxQg.png)


1. **Overview:** Pets-R-Us is a full (Mongo/Express/React/Node) MERN stack application that allows local animal adoption agencies to post their adorable animals. Every year, thousands of animals are displaced and live without a home. It is our belief that every pet deserves a home. The following is a list of the features: our application has full CRUD on the back, and utilizing the React framework on the front end.


2. **Schema**: Below please find our Schema that drives this collaboration and project.

```
const Pet = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    price: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" }
  },
  { timestamps: true }
)

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: "pets" }],
  },
  { timestamps: true }
)
```

3. **API JSON**: Below please find our Heroku API data.

```
[
  {
    _id: "604fae144944ba0004b11709",
    name: "Casper",
    breed: "American Bulldog Mix",
    age: "5 years",
    gender: "Male",
    price: "350",
    link: "http://petharbor.com/detail.asp?ID=A274831&LOCATION=BSTN&searchtype=ADOPT&start=3&stylesheet=http://www.arlboston.dbrowne.net/default1.css&friends=1&samaritans=1&nosuccess=0&rows=10&imght=160&imgres=thumb&tWidth=200&view=sysadm.v_bstn&fontface=arial&fontsize=10&zip=02116&miles=100&shelterlist=%27BSTN%27,%27BSTN1%27,%27BSTN3%27&atype=&where=type_DOG",
    description: "Casper is a 5-year-old neutered male American Bulldog mix who is ready for a fresh start. Look at his handsome face and bi-color eyes! Casper is deaf, so he is looking for a special home that can accommodate his needs..",
    imgURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50708836/1/?bust=1615398914&width=1080",
    type: "Dog",
    userId: "604fae134944ba0004b11708",
    __v: 0,
    createdAt: "2021-03-15T18:57:24.087Z",
    updatedAt: "2021-03-15T18:57:24.087Z"
  },

  {
    _id: "604fae144944ba0004b1170a",
    name: "Odie",
    breed: " Pit Bull Terrier Mix",
    age: "7 weeks",
    gender: "Male",
    price: "300",
    link: "https://www.petfinder.com/dog/odie-50829869/tx/cypress/big-love-rescue-tx2426/",
    description: "Odie is a chill and sweet little boy. He likes snuggles and playing with his toys. He's a 7 week old pitbull mix and expected to be over 45lbs when full grown. He's a happy and healthy boy who's learning and exploring.",
    imgURL: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829869/2/?bust=1615479317&width=1080",
    type: "Dog",
    userId: "604fae134944ba0004b11708",
    __v: 0,
    createdAt: "2021-03-15T18:57:24.087Z",
    updatedAt: "2021-03-15T18:57:24.087Z"
  }
]

```


4.  **Component Hierarchy**:
![Whimsical](https://i.imgur.com/cF0CdnT.png)
[See here for a closer view on Whimsical](https://whimsical.com/pets-r-us-BYYb4aEnZ6ZQp5euw1pyeM)



5.  **Wireframes**:
![Home Screens](https://i.imgur.com/OYqfzry.png)
![Sign up and Sign in Screens](https://i.imgur.com/POd6AuQ.png)
![Pets and Pet Details Screens](https://i.imgur.com/TsYshOU.png)
![Edit and Add Screen](https://i.imgur.com/sgR0gPv.png)
![Post-MVP](https://i.imgur.com/XFMx2vW.png)
[See here for a closer view on AdobeXD](https://xd.adobe.com/view/4820e06a-5260-47cc-be25-641dc826cec1-1d73/)



## Change Log
- Implemented pagination in our "Add a Pet" form.
- For user association: rather than associating "likes" for each logged-in user, each pet is associated to a user and only the creator of the pet can edit/delete that pet.