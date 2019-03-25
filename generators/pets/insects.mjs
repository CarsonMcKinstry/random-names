export default function insects() {
  let rnd;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Alpha', 'Apollo', 'Aragog', 'Ash', 'Ashes', 'Asterix', 'Aztec', 'Bandit', 'Beta', 'Biggelsworth', 'Bilbo', 'Blade', 'Blitz', 'Booker', 'Boomer', 'Boots', 'Brutus', 'Buddy', 'Bugs', 'Butch', 'Buttons', 'Casper', 'Celeb', 'Chewbacca', 'Chewy', 'Chinook', 'Chuck', 'Chuckles', 'Cinder', 'Cole', 'Comet', 'Cookie', 'Cosmo', 'Critter', 'Cuddles', 'Darcy', 'Dexter', 'Doc', 'Doodle', 'Dracula', 'Echo', 'Fangs', 'Flopsie', 'Frankenstein', 'Friskie', 'Fuzz', 'Fuzzy', 'Gadget', 'Gambit', 'Ghost', 'Godzilla', 'Goliath', 'Handsome', 'Hannibal', 'Hector', 'Hercules', 'Houdini', 'Hulk', 'Hunter', 'Icky', 'Ivan', 'Jaffa', 'Jiggles', 'Jitters', 'Junior', 'Lance', 'Lancelot', 'Loki', 'Lucifer', 'Magma', 'Marble', 'Midnight', 'Mittens', 'Muffin', 'Myst', 'Nacho', 'Nemesis', 'Nightmare', 'Noodle', 'Noodles', 'Nugget', 'Omega', 'Onyx', 'Orion', 'Ozzy', 'Patches', 'Peanut', 'Pepper', 'Phantom', 'Pickles', 'Poison', 'Poppers', 'Prometheus', 'Psyche', 'Psycho', 'Punky', 'Rambo', 'Rascal', 'Rebel', 'Rex', 'Rider', 'Rufus', 'Rusty', 'Salt', 'Scooter', 'Scratch', 'Scruff', 'Scruffy', 'Shade', 'Shadow', 'Sherlock', 'Skinner', 'Skipper', 'Slinky', 'Snickers', 'Snyder', 'Sox', 'Spike', 'Spinner', 'Squeaks', 'Stitches', 'Storm', 'Striker', 'Syd', 'Sylvester', 'Symore', 'Taboo', 'Tank', 'Thor', 'Thunder', 'Tinker', 'Titan', 'Trapper', 'Tremor', 'Truffle', 'Tyson', 'Venom', 'Webster', 'Whiskers', 'Whisper', 'Wolfgang', 'Xanadu', 'Xander', 'Ziggy'];
  const nm2 = ['Aggie', 'Akeeta', 'Alexei', 'Amber', 'Angel', 'Angi', 'Arachne', 'Arack', 'Aragi', 'Arania', 'Ash', 'Athena', 'Aura', 'Aurora', 'Babe', 'Beauty', 'Becky', 'Belle', 'Bitsy', 'Bizzie', 'Blossom', 'Breeze', 'Brizzie', 'Buffy', 'Bugsy', 'Bumble', 'Buttercup', 'Button', 'Buttons', 'Calico', 'Calypso', 'Candy', 'Carmen', 'Celeb', 'Charlotte', 'Charm', 'Cheeky', 'Chica', 'Cinders', 'Clarice', 'Cleo', 'Coco', 'Cookie', 'Coraline', 'Cotton', 'Crawline', 'Creepette', 'Crystal', 'Cuddles', 'Daisy', 'Dawn', 'Delilah', 'Dodger', 'Dot', 'Dotty', 'Ebony', 'Echo', 'Eek', 'Eep', 'Ember', 'Enigma', 'Fancy', 'Fangs', 'Flopsy', 'Fluffy', 'Freckles', 'Fuzzles', 'Gadget', 'Gertrude', 'Giggles', 'Gloria', 'Happy', 'Hugsie', 'Hyve', 'Incy', 'Indi', 'Iris', 'Itsy', 'Ivory', 'Jaffa', 'Jewel', 'Jiggly', 'Jinx', 'Jitters', 'Juicy', 'Jynx', 'Kisses', 'Klaxie', 'Lacy', 'Lady', 'Legs', 'Lucky', 'Lucy', 'Lulu', 'Midnight', 'Missy', 'Mittens', 'Morticia', 'Mothrine', 'Mystique', 'Pandora', 'Paws', 'Pebble', 'Pebbles', 'Phobia', 'Pickle', 'Pickles', 'Poison', 'Princess', 'Psyche', 'Queen', 'Raven', 'Rosebud', 'Rune', 'Scarlet', 'Scruffles', 'Serenity', 'Shade', 'Shelley', 'Shelob', 'Siri', 'Skitters', 'Skittles', 'Skreech', 'Snickers', 'Snuggle', 'Snuggles', 'Socks', 'Spindle', 'Spindles', 'Spindra', 'Squiggles', 'Squiggly', 'Squirmy', 'Stingy', 'Sugar', 'Sunshine', 'Tabitha', 'Tickle', 'Tickles', 'Tilly', 'Tinkerbelle', 'Toots', 'Twilight', 'Twitchy', 'Velvet', 'Venom', 'Violet', 'Waffle', 'Webzie', 'Xena', 'Ziggy'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
