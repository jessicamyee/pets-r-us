# Pets-Я-Us

- Front-End deployed via [Netlify](Links fourthcoming).
- Back-End deployed via [Heroku](Links fourthcoming).

1. **Schema**: Below please find our Schema that drives this collaboration and project.

```
const Pets = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    price: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true }
)

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
)
```

2.  **Whimsical Diagram**: 
[Whimsical Diagram](https://whimsical.com/pets-r-us-BYYb4aEnZ6ZQp5euw1pyeM)
3. **Team Expectations**: 
- Please follow our Team Expectation document at the following link:
[Team Expectations](https://docs.google.com/document/d/1eA6QCDwI73bZnpWVY_Xw4I9eVHkmDq72QwM7xrcqa0I/edit?usp=sharing)

4. **Overview:** PetsЯUs is a full (Mongo/Express/React/Node) MERN stack application that allows local animal adoption agencies to post their adorable animals. Every year, thousands of animals are displaced and live without a home. It is our belief that every pet deserves a home. The following is a list of the features: our application has full CRUD on the back, and utilizing the React framework on the front end. 

5. **MVP:** [GitHub Projects](https://github.com/jessicamyee/pets-r-us/projects/1)
- Create database using Mongo and express to fetch data about adoptable pets
- Read in the adoptable pet records 
- Update/Delete record after verifying user authentication
- Rendering different routes based on user credentials
- Use React to create our wireframes
- Implement search feature by animal type
- Develop carousel on landing page
- Responsive design on mobile and desktop devices

6. **Post-MVP:** 
- Implementing "paw-like" feature using back-end updating Schema to include array of "likes"
- Additional sort capabilities (price, breed, size, hypoallergenic) 
- Add another user/buyer then we become the marketplace aka the Amazon of pets and creatures
- Develop carousel on animals page

7. **Post-Post-MVP:**
- Create "pet-recommendation" algorithm based on user preferences (geo-tag animals, size, type, etc.)

## Change Log
