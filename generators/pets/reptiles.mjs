export default function reptiles() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Acheron', 'Adamall', 'Adonis', 'Ajax', 'Alduin', 'Allister',
    'Amatheon', 'Amos', 'Angel', 'Anubis', 'Apollo', 'Apophis', 'Arcamedis',
    'Archer', 'Arcturus', 'Ares', 'Arnie', 'Arther', 'Athene', 'Atlas',
    'Avalanche', 'Balboa', 'Balthazar', 'Bamboo', 'Barinthus', 'Barnabas',
    'Basil', 'Basilisk', 'Bear', 'Beast', 'Beauty', 'Belt', 'Bender', 'Binx',
    'Blaine', 'Blizz', 'Blubeard', 'Bob', 'Boomer', 'Boomerang', 'Bruce',
    'Bubba', 'Buddy', 'Burt', 'Canibus', 'Carley', 'Carlos', 'Casper',
    'Chocolate', 'Chopper', 'Chowder', 'Chub', 'Chuck', 'Chuckie', 'Claws',
    'Conan', 'Cooper', 'Cornflake', 'Cornflakes', 'Cornolio', 'Crikey',
    'Crunch', 'Crusher', 'Cupid', 'Cutie', 'Cyclone', 'Cyrano', 'Damian',
    'Darwin', 'Deimos', 'Dexter', 'Dharma', 'Diablo', 'Diesel', 'Digger',
    'Dino', 'Dirk', 'Doom', 'Dopey', 'Draco', 'Dragar', 'Drago', 'Dragonbait',
    'Drake', 'Earl', 'Eddie', 'Eki', 'Elmo', 'Elvis', 'Elwood', 'Eran',
    'Eros', 'Exuro', 'Falcon', 'Fiero', 'Flame', 'Flip', 'Fluffy', 'Frankie',
    'Fred', 'Frey', 'Frost', 'Fuzzball', 'Geico', 'Gemini', 'Gerald', 'Ghost',
    'Glacier', 'Goblin', 'Gorbash', 'Grim', 'Grinch', 'Grommit', 'Grumpus',
    'Guiness', 'Guinness', 'Hades', 'Hammer', 'Hannibal', 'Harley', 'Henry',
    'Hera', 'Hero', 'Homer', 'Hoover', 'Horace', 'Horus', 'Hunter',
    'Hurcules', 'Icarus', 'Iggy', 'Igor', 'Igus', 'Imp', 'Inca', 'Indi',
    'Ishi', 'Iso', 'Ivan', 'Izzard', 'Jack', 'Jade', 'Jaden', 'Jafar',
    'Jakari', 'Jake', 'Jamie', 'Jasper', 'Jax', 'Jay', 'Jazz', 'Jelly',
    'Jeremiah', 'Jo', 'Kaa', 'Kali', 'Kane', 'Kascious', 'Keb', 'Kellog',
    'Kimba', 'King Solomon', 'King Tut', 'King', 'Kirbi', 'Kirra', 'Kisses',
    'Kiwi', 'Knot', 'Kobi', 'Kraken', 'Kuddles', 'Kumasi', 'Lantern', 'Leevi',
    'Lenny', 'Leo', 'Leonardo', 'Levi', 'Leviathan', 'Llyr', 'Loki', 'Lokki',
    'Louie', 'Lucifer', 'Lucky', 'Luigi', 'Lun', 'Mai Tai', 'Marin', 'Marley',
    'Mars', 'Max', 'Menthos', 'Mercury', 'Merk', 'Merlin', 'Merry', 'Methos',
    'Mikhail', 'Minx', 'Mitch', 'Mocha', 'Mojo', 'Moko', 'Montique',
    'Monty Python', 'Monty', 'Moses', 'Mr. Crowley', 'Mr. Slithers', 'Muchu',
    'Murphy', 'Murray', 'Naga', 'Nathen', 'Neiko', 'Nigel', 'Nofeet',
    'Noodle', 'Noodles', 'Nugget', 'Nuggz', 'O\'Malley', 'Oatmeal', 'Odder',
    'Odin', 'Ojo', 'Ollie', 'Oscar', 'Osiris', 'Oz', 'Padfoot', 'Pandora',
    'Panther', 'Peanut', 'Pepper', 'Phantom', 'Phobos', 'Phoenix', 'Phred',
    'Pink', 'Pinky', 'Pip', 'Pippin', 'Pliskin', 'Pluto', 'Pockets', 'Poe',
    'Poseidon', 'Posidion', 'Pretzel', 'Q', 'Quinn', 'Raja', 'Rajah', 'Red',
    'Regulus', 'Ren', 'Reptar', 'Requiem', 'Rex', 'Ribbon', 'Rick', 'Rico',
    'Rigel', 'Ringo', 'Rio', 'Rocky BalBoa', 'Rodrigez', 'Roger', 'Romeo',
    'Romulus', 'Roswell', 'Rowdy', 'Rubit', 'Ruby', 'Rumplesnakeskin',
    'Rupert', 'Rusty', 'Sabin', 'Salvadore', 'Sam', 'Sauron', 'Septimus',
    'Serpico', 'Severus', 'Shady', 'Shakespeare', 'Shay', 'Sherman', 'Sholto',
    'Sir Hiss', 'Sirius', 'Sizzle', 'Slap', 'Slash', 'Slick', 'Slicker',
    'Slinkster', 'Slinky', 'Slip', 'Slithers', 'Sloth', 'Slyder', 'Slyther',
    'Smee', 'Smiles', 'Smither', 'Smoo', 'Snake', 'Snakespeare', 'Snap',
    'Snape', 'Snickers', 'Sobek', 'Solomon', 'Soron', 'Sparky', 'Spaz',
    'Spazz', 'Speckles', 'Speedy', 'Spencer', 'Spike', 'Spikey', 'Spyro',
    'Star', 'Stewart', 'Stimpy', 'Streak', 'Stubby', 'Styx', 'Sully', 'Sun',
    'Sunnie', 'Sunshine', 'Suspiria', 'Sybil', 'Syther', 'Taj', 'Tangle',
    'Tango', 'Tarzan', 'Taz', 'Teranis', 'Terminator', 'Thanos', 'The Beast',
    'The Strangler', 'Thor', 'Threat', 'Tiny', 'Titan', 'Tokie', 'Tootsie',
    'Trendi', 'Trent', 'Trevor', 'Trinity', 'Trooper', 'Turkish', 'Typhon',
    'Unagi', 'Unger', 'Vega', 'Venenito', 'Veneno', 'Venom', 'Viper',
    'Vittorio', 'Wallace', 'Washee', 'Whip', 'Whiskey', 'Willow', 'Wizz',
    'Wrath', 'Xena', 'Xibalba', 'Xypher', 'Yayo', 'Yoda', 'Yoshi', 'Zack',
    'Zaffle', 'Zakk', 'Zap', 'Zeke', 'Zero', 'Zeus', 'Ziggy', 'Zippy', 'Zues'];
  const nm2 = ['Abster', 'Abstor', 'Adara', 'Aiko', 'Aimi', 'Aine', 'Aislin',
    'Akemi', 'Akiko', 'Akira', 'Aksinya', 'Amaunet', 'Amazon', 'Amber',
    'Amity', 'Amore', 'Anastasia', 'Andromeda', 'Angel', 'Anna Conda',
    'Annalyse', 'Anya', 'Aphrodite', 'Apollo', 'Aquilla', 'Ari', 'Ariel',
    'Arina', 'Arisha', 'Aspen', 'Athena', 'Audrey', 'Aurora', 'Ava', 'Azora',
    'Azula', 'Baby', 'Bamako', 'Banditt', 'Banshee', 'Basilina', 'Bastet',
    'Bella', 'Belladonna', 'Belle', 'Bobo', 'Bodicea', 'Bongo', 'Boo',
    'Butie', 'Buttercup', 'Butters', 'Callisto', 'Calypso', 'Camille', 'Cara',
    'Caramel', 'Cauda', 'Celeste', 'Chance', 'Charm', 'CheChe', 'Chino',
    'Chloe', 'Chocolate', 'Claire', 'Clarissa', 'Claws', 'Cleo', 'Cleopatra',
    'Cletis', 'Clio', 'Clover', 'Congo', 'Cookie', 'Coraline', 'Cornelia',
    'Cornsilia', 'Corny', 'Crimson', 'Crystal', 'Cuddley', 'Cutie', 'Dakota',
    'Deeno', 'Delilah', 'Demi', 'Denali', 'Denim', 'Destiny', 'Diamond',
    'Dixia', 'Dorene', 'Druantia', 'Duchess', 'Duma', 'Ebony', 'Echo', 'Eden',
    'Elixir', 'Eliza', 'Elizabeth', 'Ember', 'Emma', 'Emory', 'Envy', 'Enya',
    'Eris', 'Etoile', 'Eve', 'Evie', 'Fae', 'Faina', 'Faustine', 'Fay', 'Fey',
    'Flaminia', 'Flip', 'Florimel', 'Gao', 'Gazelle', 'Geiko', 'Gemini',
    'Geminy', 'Ginger', 'Girlizard', 'Giz', 'Gizmo', 'Gizzard', 'Gizzy',
    'Goldie', 'Gwen', 'Gwenny', 'Gypsy', 'Halo', 'Haolie', 'Harlequin',
    'Harley Quinn', 'Harley', 'Harmony', 'Haruko', 'Hatari', 'Havana',
    'Hazel', 'Hera', 'Hestia', 'Hilary', 'Hissy Fit', 'Holly', 'Honey',
    'Hydra', 'Indie', 'Indigo', 'Infinity', 'Irish', 'Isis', 'Ivory', 'Ivy',
    'Ix Chel', 'Izzy', 'Jaden', 'Jaeda', 'Jasmine', 'Jaws', 'Jezebel',
    'Jezebelle', 'Jinx', 'Julie', 'Juliet', 'Julius', 'Jynx', 'Kady',
    'Kamala', 'Kamyle', 'Kara', 'Karina', 'Karma', 'Karmel', 'Katenka',
    'Kayes', 'Keala', 'Kidal', 'Kilala', 'Kimiko', 'Kinytya', 'Koche',
    'Korbyn', 'Kota', 'Koulikoro', 'Krupa', 'Krystal', 'Lamia', 'Layla',
    'Leila', 'Lelou', 'Leo', 'Leone', 'Leyla', 'Liberty', 'Libra', 'Lila',
    'Lili', 'Lilo', 'Lily', 'Limey', 'Linnea', 'Linux', 'Lippy', 'Liquorice',
    'Liza', 'Lizzie', 'Lizzy', 'Lola', 'Lolly', 'Lucky', 'Luffy', 'Lumen',
    'Luna', 'Luxy', 'Lyca', 'Lyra', 'Mabel', 'Macy', 'Mae', 'Maeiv', 'Maeva',
    'Maggie', 'Mags', 'Malie', 'Maliki', 'Manya', 'Mark', 'Marshie',
    'Mary Jayne', 'Masha', 'Matilda', 'Meadow', 'Medusa', 'Melody',
    'Meredith', 'Merinda', 'Merlin', 'Mesina', 'Midori', 'Milena', 'Minako',
    'Minoan', 'Mirrhi', 'Miss. Hiss', 'Mistletoe', 'Misty', 'Mocha', 'Momo',
    'Monnie', 'Mooney', 'Mopti', 'Nadejda', 'Nadezhda', 'Naka', 'Nala',
    'Naoko', 'Nasha', 'Neeru', 'Nellie', 'Nemo', 'Neone', 'Nephthys', 'Nessa',
    'Nessy', 'Nettles', 'Nevada', 'Neveah', 'Niko', 'Nile', 'Noelle', 'Nora',
    'Nott', 'Nova', 'Nugget', 'Olivia', 'Ophelia', 'Oralee', 'Oreo', 'Pales',
    'Pancake', 'Pandora', 'Patches', 'Paws', 'Pearl', 'Pebbles', 'Persephone',
    'Petit Fleur', 'Phoenix', 'Pip Squeak', 'Pixie', 'Polaris', 'Ponce',
    'Pretzel', 'Prim', 'Prima', 'Primrose', 'Princess', 'Prudence',
    'Prunella', 'Pumpkin', 'Rae', 'Raider', 'Raisa', 'Razz', 'Remedy', 'Rex',
    'Rico', 'River', 'Robin', 'Rogue', 'Rosey', 'Roux', 'Roxey', 'Ruby',
    'Sabina', 'Sage', 'Sahara', 'Sam', 'Samantha', 'Sandy', 'Saphira',
    'Saphire', 'Sasha', 'Sassie', 'Scales', 'Scaley', 'Scarlet', 'Selene',
    'Serket', 'Shani', 'Sharpy', 'Shelly', 'Shiba', 'Sikasso', 'Simone',
    'Siren', 'Skittles', 'Sky', 'Skye', 'Slimey', 'Slink', 'Slinky',
    'Slithers', 'Sly', 'Snickers', 'Sonya', 'Sparkel', 'Sparkie', 'Sparkley',
    'Spira', 'Spotty', 'Sprite', 'Squirt', 'Stacey', 'Star', 'Stardust',
    'Starr', 'Stitch', 'Stormie', 'Stripe', 'Stripes', 'Sue', 'Suki',
    'Sunshine', 'Suzan', 'Suzie', 'Sveta', 'Sybil', 'Sydney', 'Takara',
    'Tamiko', 'Tanith', 'Tara', 'Tempest', 'Tink Tinkerbell', 'Tinkerbelle',
    'Tinsel', 'Tisiphone', 'Titania', 'Tom', 'Tora', 'Trinity', 'Trixie',
    'Ulysses', 'Vala', 'Valentine', 'Valkyrie', 'Vesta', 'Vivian', 'Waffle',
    'Wanda', 'Wednesday', 'Willow', 'Wynter', 'Yeva', 'Zara', 'Zelda',
    'Zhanna', 'Zilla', 'Zinoviya', 'Zippy', 'Zoe']; {
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
