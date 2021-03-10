const db = require("../db/connection");
const Pet = require("../models/pet");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const pets = [
    {
      name: "Charlie",
      breed: "Belgian Shepherd",
      age: "3 months",
      price: "2,500",
      link: "https://underworldkennels.com/product/belgian-malinois-puppy/",
      description:
        "The smart, confident, and versatile Belgian Malinois is a world-class worker who forges an unbreakable bond with his human partner. To deny a Mal activity and the pleasure of your company is to deprive him of his very reasons for being.",
      imgURL:
        "https://underworldkennels.com/wp-content/uploads/2020/01/Belgian_Malinois_puppy-e1578952894928.png",
      type: "Doggo",
    },
    {
      name: "Mittens",
      breed: "Ragdoll",
      age: "4 years",
      price: "3,000",
      link: "http://www.ragdoll-breeder.com/gallery.html",
      description:
        "The Ragdoll is a well-balanced cat with no extreme features. They are a medium to large, moderately longhaired, blue-eyed pointed cats. The point markings may be covered by a range of white overlay patterns. Ragdolls are slow maturing, reaching full coat and color at about three years of age. The Ragdoll is an affectionate and intelligent cat, giving the impression of graceful movement and subdued power, striking in appearance",
      imgURL: "http://www.ragdoll-breeder.com/graphics/gallery_files/boots.jpg",
      type: "Kitty",
    },
    {
      name: "Blue",
      breed: "Chow-chow",
      age: "6 years",
      price: "500",
      link:
        "https://www.petfinder.com/dog/blue-48885469/me/biddeford/when-the-going-gets-ruff-animal-rescue-me168/",
      description:
        "Blue is one of the most beautiful Chows we ever did see. We don't know much about her past, but we can tell by her demeanor that she likely has a pretty horrible story to tell. If only dogs could speak to us. We pulled Blue from South Carolina at the beginning of the year. We were told she was food aggressive, but that didn't scare us because we have worked with that many times before. We don't know if the traveling north changed her (sometimes the trip can traumatize a dog) or if the previous shelter was not completely truthful about her behaviors. The first few days we had her we could not safely touch her. She never bit us, but we also didn't give her the chance to. We could tell by her body language that she wanted nothing to do with us. We decided to give her a few days to decompress because sometimes that is all a dog needs. She did get better after a few days. She began letting us slip lead her and we were learning to understand her body language better. Her play often appeared aggressive to us, so we had to learn how to tell the difference. She was a bad cage fighter and would freak out in her kennel if she had food and someone walked by. One time she did bite one of our employees when we were putting her food down for her. Thankfully it was more of a warning bite and she didn't break skin. She immediately released and backed up because she knew she had done something wrong. It was at this point that we realized her only hope was a professional trainer. Thankfully she got extremely comfortable with our director. Our director could handle her without a problem, feed her, bathe her, and really do anything to her. This showed us that there is hope for this sweet girl. She just needed to learn that life isn't as scary as she thinks.",
      imgURL:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48885469/1/?bust=1614728729&width=720",
      type: "Doggo",
    },
  ];

  await Pet.insertMany(pets);
  console.log("Ready for my furever home!");
};
const run = async () => {
  await main();
  db.close();
};

run();
