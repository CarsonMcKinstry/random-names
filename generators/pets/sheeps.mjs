import { sample } from 'lodash-es';

export default function sheeps() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ace', 'Babbit', 'Badger', 'Bambam', 'Basil', 'Biggs', 'Boomboom', 'Boomer', 'Bud', 'Buddy', 'Bullet', 'Buster', 'Butters', 'Capricorn', 'Chopper', 'Chops', 'Cloud', 'Coal', 'Cobalt', 'Coffee', 'Comet', 'Cosmo', 'Cotton', 'Cuddles', 'Dash', 'Dawson', 'Dillon', 'Dodge', 'Dodger', 'Duke', 'Fire', 'Fluff', 'Gunther', 'Hammer', 'Impact', 'Jax', 'Kramer', 'Lancelot', 'Lightning', 'Lucky', 'Maverick', 'McCloud', 'Mercury', 'Midnight', 'Monty', 'Mort', 'Murky', 'Mush', 'Nebula', 'Nibbler', 'Nibbles', 'Nibler', 'Ogre', 'Onyx', 'Orion', 'Owen', 'Patches', 'Patton', 'Phineas', 'Pillo', 'Pitch', 'Popcorn', 'Pound', 'Puff', 'Rack', 'Ragget', 'Rambo', 'Ramone', 'Ripple', 'Rock', 'Rowan', 'Rowdy', 'Ruff', 'Rufus', 'Saber', 'Salt', 'Satin', 'Sawyer', 'Scruffy', 'Scuddle', 'Sean', 'Shawn', 'Shelby', 'Silver', 'Skooter', 'Slam', 'Smokey', 'Smooch', 'Snow', 'Snowflake', 'Soots', 'Spark', 'Spartan', 'Spice', 'Sponge', 'Spot', 'Storm', 'Striker', 'Taz', 'Thunder', 'Tickles', 'Truffle', 'Tumnus', 'Tweedle', 'Twinkle', 'Vanilla', 'Walnut', 'Wellington', 'Woolsley'];
  const nm2 = ['Agnes', 'Angel', 'Aria', 'Baarbara', 'Beetle', 'Bella', 'Bitsy', 'Blue', 'Bonnie', 'Buffy', 'Bugsie', 'Bumble', 'Bunny', 'Buttercup', 'Button', 'Buttons', 'Candy', 'Capri', 'Chewe', 'Cloude', 'Clover', 'Coco', 'Cosmo', 'Cotton', 'Cream', 'Creme', 'Crystal', 'Cuddle', 'Cuddles', 'Cushion', 'Daahling', 'Daffodil', 'Daisy', 'Darling', 'Dixie', 'Dolly', 'Dora', 'Dottie', 'Ebony', 'Ewey', 'Fern', 'Flower', 'Fluffy', 'Flufkins', 'Flurry', 'Gigi', 'Ginger', 'Gloria', 'Goldilocks', 'Gorgeous', 'Honey', 'Iris', 'Ivory', 'Ivy', 'Jasmin', 'Jazzy', 'Lane', 'Lavender', 'Libby', 'Lilly', 'Linsey', 'Lucy', 'Luna', 'Lyric', 'Maggie', 'Maple', 'Marigold', 'Midge', 'Midnight', 'Minty', 'Misty', 'Molly', 'Momma', 'Muffin', 'Nell', 'Nibble', 'Nova', 'Nutmeg', 'Oreo', 'Pearl', 'Pepper', 'Petunia', 'Pickle', 'Puffle', 'Puffles', 'Raine', 'Raspberry', 'Rosemary', 'Ruth', 'Sage', 'Serenity', 'Shaggy', 'Shelly', 'Sierra', 'Silver', 'Smiley', 'Smooch', 'Smooches', 'Snowflake', 'Snuggle', 'Snuggles', 'Snugs', 'Socks', 'Speckle', 'Speckles', 'Spice', 'Strawberry', 'Sugar', 'Sweetie', 'Sweetpea', 'Teeny', 'Tinkerbell', 'Tiny', 'Tulip', 'Twinkie', 'Twinkle', 'Vanilla', 'Velvet', 'Venus'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
