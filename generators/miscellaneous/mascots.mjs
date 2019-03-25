export default function mascots() {
  let rnd2;


  let names;

  const names1 = ['Adorable', 'Agile', 'Alien', 'Amazing', 'Amusing', 'Angelic', 'Angry', 'Awesome', 'Baby', 'Beautiful', 'Big', 'Big Bad', 'Black', 'Blue', 'Bouncy', 'Brave', 'Bronze', 'Brown', 'Brutish', 'Bubbly', 'Cheery', 'Chilly', 'Clumsy', 'Crazy', 'Cuddly', 'Curly', 'Cute', 'Dapper', 'Dirty', 'Elegant', 'Excited', 'Exotic', 'Fabulous', 'Fancy', 'Fantastic', 'Fast', 'Fearless', 'Fiery', 'Fluffy', 'Friendly', 'Frozen', 'Gentle', 'Glittering', 'Glorious', 'Golden', 'Gorgeous', 'Graceful', 'Gracious', 'Grand', 'Gray', 'Great', 'Green', 'Gummy', 'Hairy', 'Happy', 'Harmless', 'Healthy', 'Hilarious', 'Honest', 'Humble', 'Hungry', 'Icy', 'Incredible', 'Innocent', 'Iron', 'Jolly', 'Jumbo', 'Kind', 'Lazy', 'Light', 'Little', 'Lonely', 'Loud', 'Lovable', 'Lucky', 'Mad', 'Magic', 'Magical', 'Mean', 'Merry', 'Mini', 'Mysterious', 'Naughty', 'Needy', 'Nervous', 'Nice', 'Nutty', 'Orange', 'Peaceful', 'Pink', 'Polite', 'Positive', 'Proud', 'Quiet', 'Rapid', 'Red', 'Royal', 'Rude', 'Scared', 'Scary', 'Shady', 'Shy', 'Silent', 'Silly', 'Silver', 'Sleepy', 'Sneaky', 'Storm', 'Strong', 'Swift', 'Terrific', 'Thunder', 'Tiny', 'White', 'Wild', 'Wise'];
  const names2 = ['Albatross', 'Alien', 'Alligator', 'Alpaca', 'Anaconda', 'Android', 'Angel', 'Ant', 'Anteater', 'Antelope', 'Ape', 'Armadillo', 'Baboon', 'Badger', 'Barnacle', 'Barracuda', 'Bat', 'Bear', 'Beast', 'Beaver', 'Bee', 'Beetle', 'Bison', 'Boar', 'Bronco', 'Buccanneer', 'Buffalo', 'Bullfrog', 'Bumble Bee', 'Bunny', 'Butterfly', 'Camel', 'Cannon', 'Capybara', 'Caribou', 'Cat', 'Caterpillar', 'Cheetah', 'Chicken', 'Chimpanzee', 'Chinchilla', 'Chipmunk', 'Clam', 'Cobra', 'Cockroach', 'Cod', 'Cougar', 'Cowboy', 'Cowgirl', 'Coyote', 'Crab', 'Crane', 'Creature', 'Cricket', 'Crocodile', 'Crow', 'Deer', 'Demon', 'Devil', 'Dingo', 'Dino', 'Dinosaur', 'Dog', 'Dolphin', 'Donkey', 'Dove', 'Dragon', 'Dragonfly', 'Duck', 'Dwarf', 'Eagle', 'Eel', 'Eland', 'Elephant', 'Elf', 'Elk', 'Emu', 'Fairy', 'Falcon', 'Ferret', 'Fish', 'Flamingo', 'Fly', 'Fowl', 'Fox', 'Frog', 'Gazelle', 'Gecko', 'Gerbil', 'Ghost', 'Giant', 'Giant Panda', 'Gibbon', 'Giraffe', 'Gladiator', 'Gnu', 'Goat', 'Goblin', 'Goldfish', 'Goose', 'Gopher', 'Gorilla', 'Grasshopper', 'Griffin', 'Guinea Pig', 'Hammer', 'Hamster', 'Hare', 'Hawk', 'Hedgehog', 'Herring', 'Hippo', 'Hippopotamus', 'Hog', 'Honey Bee', 'Hornet', 'Horse', 'Hound', 'Hummingbird', 'Hyena', 'Ibis', 'Imp', 'Jackal', 'Jaguar', 'Jellyfish', 'Kangaroo', 'King', 'Kingfisher', 'Knight', 'Koala', 'Komodo Dragon', 'Lark', 'Lemur', 'Leopard', 'Lion', 'Lizard', 'Llama', 'Lobster', 'Locust', 'Lynx', 'Macaw', 'Magician', 'Magpie', 'Maiden', 'Mallard', 'Mammoth', 'Manatee', 'Mantis', 'Maverick', 'Meerkat', 'Mole', 'Mongoose', 'Monkey', 'Monster', 'Moose', 'Mosquito', 'Mouse', 'Mule', 'Newt', 'Nightingale', 'Ocelot', 'Octopus', 'Okapi', 'Orang-utan', 'Orc', 'Ostrich', 'Otter', 'Owl', 'Ox', 'Oyster', 'Panda', 'Panther', 'Parrot', 'Patriot', 'Peafowl', 'Pelican', 'Penguin', 'Phantom', 'Pheasant', 'Phoenix', 'Pig', 'Pigeon', 'Pirate', 'Pony', 'Porcupine', 'Porpoise', 'Quail', 'Queen', 'Rabbit', 'Raccoon', 'Raider', 'Ram', 'Raptor', 'Rat', 'Red Panda', 'Reindeer', 'Rhino', 'Rhinoceros', 'Robot', 'Runner', 'Sailor', 'Saint', 'Salamander', 'Salmon', 'Sardine', 'Scorpion', 'Sea Lion', 'Sea Urchin', 'Seahorse', 'Seal', 'Shark', 'Sheep', 'Skunk', 'Sloth', 'Snail', 'Snake', 'Snowman', 'Soldier', 'Sparrow', 'Spider', 'Squid', 'Squire', 'Squirrel', 'Starfish', 'Stingray', 'Stinkbug', 'Stork', 'Swallow', 'Swan', 'T-Rex', 'Termite', 'Terror', 'Tiger', 'Toad', 'Tortoise', 'Toucan', 'Trout', 'Tucan', 'Turkey', 'Turtle', 'Urchin', 'Viking', 'Viper', 'Vulture', 'Wallaby', 'Walrus', 'Warrior', 'Warthog', 'Wasp', 'Weasel', 'Whale', 'Wings', 'Wolf', 'Wolverine', 'Wombat', 'Woodpecker', 'Worm', 'Yak', 'Yeti', 'Zebra'];
  const names3 = ['Ace', 'Alfa', 'Alpha', 'Aristocat', 'Arrow', 'Athena', 'Barrel', 'Beaker', 'Big Blue', 'Bingo', 'Black Jack', 'Blaze', 'Blitz', 'Blizzard', 'Blondey', 'Blue', 'Boomboom', 'Boomer', 'Bronco', 'Bruiser', 'Bubbles', 'Bullet', 'Bumble', 'Buster', 'Captain', 'Champ', 'Charger', 'Chompers', 'Claws', 'Clutch', 'Colonel', 'Cosmo', 'Crunch', 'Cruncher', 'Crusader', 'Curly', 'Dazzle', 'Dino', 'Drummer', 'Dunker', 'Electro', 'Enigma', 'Flash', 'Flex', 'Frogger', 'General', 'Ghost', 'Gnarl', 'Gust', 'Hawk', 'Hercules', 'Hooper', 'Hoot', 'Howl', 'Hunter', 'Hurricane', 'Ivy', 'Judge', 'Jumbo', 'Junior', 'King', 'Leprechaun', 'Lightning', 'Loki', 'Lucky', 'Luna', 'Magician', 'Mamba', 'Maverick', 'Mumble', 'Mumbo', 'Muppet', 'Nova', 'Nugget', 'Odin', 'Orbit', 'Paws', 'Peanut', 'Phantom', 'Phoenix', 'Pinch', 'Poison', 'Poseidon', 'Pouncer', 'Predator', 'Prowler', 'Punch', 'Raider', 'Ranger', 'Red', 'Red Rage', 'Roar', 'Roary', 'Rocky', 'Rose', 'Rover', 'Sabretooth', 'Scorch', 'Scrappy', 'Scraps', 'Screech', 'Shadow', 'Siren', 'Skyhawk', 'Slapshot', 'Slide', 'Slider', 'Slingshot', 'Slug', 'Slush', 'Smokey', 'Snoops', 'Spark', 'Sparkle', 'Sparks', 'Spike', 'Spot', 'Stalker', 'Steele', 'Sting', 'Stinger', 'Stitch', 'Stitches', 'Stomper', 'Storm', 'Stripes', 'Sugar', 'Sweeper', 'Techy', 'Thor', 'Tic-Toc', 'Ticker', 'Timber', 'Tiny', 'Titan', 'Tooth', 'Tooths', 'Trash', 'Tresher', 'Tritot', 'Twinkles', 'Venom', 'Viper', 'Void', 'Warhawk', 'Warhog', 'Wildwing', 'Wrathhog', 'Wreckage', 'Wrex'];


  const i = Math.floor(Math.random() * 10);
  {
    if (i < 6) {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      names = `The ${names1[rnd]} ${names2[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * names3.length);
      names = names3[rnd];
    }
    return names;
  }
}
