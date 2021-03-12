const db = require("../db/connection");
const Pet = require("../models/pet");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const user1 = new User({
    username: "username",
    email: "user1@gmail.com",
    password_digest: "password",
    pets: [],
  });
  await user1.save();

  const pets = [
    {
      name: "Casper",
      breed: "American Bulldog Mix",
      age: "5 years",
      gender: "Male",
      price: "350",
      link:
        "http://petharbor.com/detail.asp?ID=A274831&LOCATION=BSTN&searchtype=ADOPT&start=3&stylesheet=http://www.arlboston.dbrowne.net/default1.css&friends=1&samaritans=1&nosuccess=0&rows=10&imght=160&imgres=thumb&tWidth=200&view=sysadm.v_bstn&fontface=arial&fontsize=10&zip=02116&miles=100&shelterlist=%27BSTN%27,%27BSTN1%27,%27BSTN3%27&atype=&where=type_DOG",
      description:
        "Casper is a 5-year-old neutered male American Bulldog mix who is ready for a fresh start. Look at his handsome face and bi-color eyes! Casper is deaf, so he is looking for a special home that can accommodate his needs. Casper is looking for an adult only home with a fenced in yard, and no other animals. While owning a deaf dog may present some challenges, he is learning sign language during his visit at the shelter so his adopter will have an easier time communicating with him! Casper is so smart, and loves playing fetch SO MUCH, which makes training is a breeze with this guy! Casper takes time to warm up to people, but once he does, he loves attention and will be the perfect hangout buddy! Though Casper enjoys romping around a yard for a bit, he is quite the couch potato. Could Casper be the dog for you? This animal is currently up to date on all vaccinations, has been neutered, microchipped and been seen by our vet team. ",
      imgURL:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50708836/1/?bust=1615398914&width=1080",
      type: "Dog",
      userId: user1,
    },
    {
      name: "Odie",
      breed: " Pit Bull Terrier Mix",
      age: "7 weeks",
      gender: "Male",
      price: "300",
      link:
        "https://www.petfinder.com/dog/odie-50829869/tx/cypress/big-love-rescue-tx2426/",
      description:
        "Odie is a chill and sweet little boy. He likes snuggles and playing with his toys. He's a 7 week old pitbull mix and expected to be over 45lbs when full grown. He's a happy and healthy boy who's learning and exploring.",
      imgURL:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829869/2/?bust=1615479317&width=1080",
      type: "Dog",
      userId: user1,
    },
    {
      name: "Ollie",
      breed: "Tabby",
      age: "1 year",
      gender: "Male",
      price: "100",
      link:
        "https://www.petfinder.com/cat/ollie-50176975/ny/huntington/golden-paw-society-inc-ny1142/?referrer_id=43175718-802f-4330-b820-5409ad5d909e",
      description:
        "1yo with vaccinations up to date, spayed / neutered. He has been in the shelter for three months. This little guy is a bit nervous but is very ready for that to change!",
      imgURL:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50176975/6/?bust=1615350995&width=1080",
      type: "Cat",
      userId: user1,
    },
    {
      name: "Blue",
      breed: "Chow-chow",
      age: "6 years",
      gender: "Male",
      price: "500",
      link:
        "https://www.petfinder.com/dog/blue-48885469/me/biddeford/when-the-going-gets-ruff-animal-rescue-me168/",
      description:
        "Blue is one of the most beautiful Chows we ever did see. We don't know much about her past, but we can tell by her demeanor that she likely has a pretty horrible story to tell. If only dogs could speak to us. We pulled Blue from South Carolina at the beginning of the year. We were told she was food aggressive, but that didn't scare us because we have worked with that many times before. We don't know if the traveling north changed her (sometimes the trip can traumatize a dog) or if the previous shelter was not completely truthful about her behaviors. The first few days we had her we could not safely touch her. She never bit us, but we also didn't give her the chance to. We could tell by her body language that she wanted nothing to do with us. We decided to give her a few days to decompress because sometimes that is all a dog needs. She did get better after a few days. She began letting us slip lead her and we were learning to understand her body language better. Her play often appeared aggressive to us, so we had to learn how to tell the difference. She was a bad cage fighter and would freak out in her kennel if she had food and someone walked by. One time she did bite one of our employees when we were putting her food down for her. Thankfully it was more of a warning bite and she didn't break skin. She immediately released and backed up because she knew she had done something wrong. It was at this point that we realized her only hope was a professional trainer. Thankfully she got extremely comfortable with our director. Our director could handle her without a problem, feed her, bathe her, and really do anything to her. This showed us that there is hope for this sweet girl. She just needed to learn that life isn't as scary as she thinks.",
      imgURL:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48885469/1/?bust=1614728729&width=720",
      type: "Dog",
      userId: user1,
    },
    {
      name: "Hollis",
      breed: "Dwarf-Mix",
      age: "Adult",
      gender: "Male",
      price: "90",
      link:
        "https://www.petfinder.com/rabbit/hollis-50728140/ny/great-neck/long-island-rabbit-rescue-group-ny669/",
      description:
        "All of our adoptable rabbits are spayed/neutered, health-checked by rabbit-savvy vets and fostered in private homes.",
      imgURL:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50728140/1/?bust=1615344492&width=1080",
      type: "Rabbit",
      userId: user1,
    },
  ];

  await Pet.insertMany(pets);
  console.log("Ready for my furever home!");

  user1.pets = await Pet.find({ userId: user1 });
  await user1.save();
};

const run = async () => {
  await main();
  db.close();
};

run();
