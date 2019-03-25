export default function hippies() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aden', 'Aestas', 'Aiken', 'Alastair', 'Alchemy', 'Algernon',
    'Ali', 'Alma', 'Angel', 'Apollo', 'Aries', 'Aristotle', 'Arwen', 'Ash',
    'Ashby', 'Atticus', 'August', 'Baird', 'Basil', 'Bastien', 'Bear',
    'Belou', 'Birch', 'Blade', 'Blaze', 'Blu', 'Blue', 'Bowie', 'Brandon',
    'Brave', 'Breeze', 'Broderick', 'Bud', 'Burgundy', 'Carmel', 'Cedar',
    'Chakra', 'Chance', 'Chestnut', 'Christian', 'Clayton', 'Cloud',
    'Coriander', 'Cosmic', 'Crimson', 'Cullan', 'Cypress', 'Cyress', 'Dancer',
    'Danna', 'Dawn', 'Daydream', 'Desert', 'Destiny', 'Donovan', 'Drake',
    'Dream', 'Dusk', 'Dylan', 'Eagle', 'Earth', 'Echo', 'Eclipse', 'Elm',
    'Ethan', 'Ethereal', 'Evaan', 'Fall', 'Fire', 'Flame', 'Flow', 'Floyd',
    'Forbes', 'Fray', 'Free', 'Freedom', 'Gabriel', 'Garcia', 'Gemini',
    'Genesis', 'Glenn', 'Grace', 'Grainne', 'Gram', 'Griffin', 'Harbor',
    'Heart', 'Holden', 'Honest', 'Honor', 'Ideal', 'Infinity', 'Jaco',
    'Jagger', 'Jan', 'Jay', 'John', 'Jorma', 'Jude', 'Jules', 'Jupiter',
    'Justice', 'Kami', 'Karma', 'Keenak', 'Kiefer', 'Kieran', 'Korin', 'Kyle',
    'Lachlan', 'Lake', 'Landis', 'Laurel', 'Leaf', 'Leary', 'Leland',
    'Lennon', 'Liberty ', 'Light', 'Logan', 'Loki', 'Lore', 'Love', 'Lucas',
    'Lucky', 'Lyric', 'Maple', 'March', 'Marley', 'Mars', 'Marsh', 'Matthew',
    'Mercury', 'Merlin', 'Micha', 'Milo', 'Miracle', 'Mist', 'Moon',
    'Moonbean', 'Moonlight', 'Moonshine', 'Moss', 'Mountain', 'Mystery',
    'Nirvana', 'Nova', 'November', 'Nug', 'Oak', 'Ocean', 'Ode', 'Om',
    'Orion', 'Oz', 'Pan', 'Passion', 'Peace', 'Perry', 'Pheonix', 'Phoenix',
    'Polaris', 'Promise', 'Psyche', 'Quentin', 'Quest', 'Quicksilver',
    'Quincy', 'Quinn', 'Rain', 'Raine', 'Rayne', 'Rebel', 'Remi', 'River',
    'Rock', 'Roman', 'Sarin', 'Saturn', 'Shine', 'Sierra', 'Silver', 'Simon',
    'Sirius', 'Sky', 'Skye', 'Skyler', 'Smiles', 'Snow', 'Soul', 'Sparrow',
    'Star', 'Starbuck', 'Stone', 'Stoney', 'Storm', 'Strider', 'Sun',
    'Sundance', 'Sunny', 'Sunray', 'Sydney', 'Terra', 'Thunder', 'Thyme',
    'Toby', 'Tranquill', 'Trent', 'Trey', 'True', 'Truth', 'Tuesday', 'Tyler',
    'Unity', 'Van', 'Vega', 'Wesley', 'Whisper', 'Wind', 'Winter', 'Wood',
    'Xavier', 'Zachary', 'Zen', 'Zephyrus'];
  const nm2 = ['Abby', 'Aden', 'Adriana', 'Aestas', 'Alchemy', 'Alma', 'Amanda',
    'Andralyn', 'Andromeda', 'Angel', 'Angelic', 'Angelica', 'Ani',
    'Aphrodite', 'Aria', 'Ariel', 'Aries', 'Arwen', 'Ash', 'Ashley', 'Aspen',
    'Astrid', 'Athena', 'Audrey', 'Audris', 'Augie', 'Aurora', 'Autumn',
    'Avery', 'Azalea', 'Azura', 'Begonia', 'Belou', 'Beth', 'Bittersweet',
    'Blossom', 'Blu', 'Bluebell', 'Breanna', 'Breeze', 'Breezeann', 'Breezy',
    'Brianna', 'Briget', 'Brisa', 'Bronwen', 'Butterfly', 'Cady', 'Canuma',
    'Capucine', 'Carly', 'Carmel', 'Carmen', 'Casey', 'Cassandra', 'Cassidy',
    'Cassiopia', 'Cat', 'Cayenne', 'Celeste', 'Celynnen', 'Ceres', 'Chana',
    'Chance', 'Charity', 'Charleigh', 'Chelsea', 'Cherish', 'China', 'Chloe',
    'Clarity', 'Cloe', 'Cloey', 'Cloud', 'Clover', 'Coral', 'Cosmic',
    'Crystal', 'Cypress', 'Cyress', 'Dagny', 'Dahlia', 'Daisie', 'Daisy',
    'Dakota', 'Dancer', 'Danna', 'Dawn', 'Daydream', 'Dazy', 'Deja', 'Delia',
    'Delilah', 'Destiny', 'Dharma', 'Diana', 'Dream', 'Drew', 'Echo',
    'Eclipse', 'Elm', 'Ember', 'Emerald', 'Ethereal', 'Faith', 'Fall',
    'Felicity', 'Fern', 'Fiona', 'Fionan', 'Fire', 'Flame', 'Flow', 'Flower',
    'Free', 'Freedom', 'Freya', 'Gabriel', 'Gaia', 'Gardenia', 'Gemini',
    'Genesis', 'Georgia', 'Gia', 'Gloria', 'Grace', 'Gracious', 'Grainne',
    'Gretta', 'Hail', 'Hailey', 'Haley', 'Hanna', 'Hannah', 'Harmony',
    'Heady', 'Heart', 'Heather', 'Heaven', 'Henna', 'Holly', 'Honest',
    'Honesty', 'Honey', 'Honor', 'Hope', 'Ideal', 'Imogene', 'India',
    'Indica', 'Infinity', 'Iris', 'Isolde', 'Jade', 'Janis', 'Jasmine',
    'Jaya', 'Jewel', 'Jodi', 'Jorma', 'Josie', 'Journey', 'Joy', 'Julia',
    'June', 'Juniper', 'Jupiter', 'Karma', 'Kassia', 'Kaya', 'Keelin',
    'Kelsey', 'Kyley', 'Lake', 'Lana', 'Lane', 'Laurel', 'Lavender', 'Layna',
    'Leaf', 'Leary', 'Leilani', 'Lenzee', 'Liberty', 'Liberty ', 'Light',
    'Lilly', 'Lore', 'Love', 'Lucy', 'Luna', 'Lylee', 'Lyric', 'Madrah',
    'Magnolia', 'Maida', 'Mandy', 'Maple', 'Marigold', 'Marley', 'May',
    'Maya', 'Meadow', 'Melody', 'Mercury', 'Micha', 'Michaela', 'Milo',
    'Miracle', 'Mist', 'Moon', 'Moonbeam', 'Moonbean', 'Moonlight', 'Morning',
    'Moss', 'Mystery', 'Mystic', 'Natura', 'Nirvana', 'Nova', 'Ocean', 'Ode',
    'Opal', 'Orion', 'Osiris', 'Padma', 'Paisley', 'Papillon', 'Passion',
    'Patience', 'Peace', 'Peaceful', 'Petal', 'Petunia', 'Pheonix', 'Phoebe',
    'Phoenix', 'Pink', 'Poetry', 'Polaris', 'Promise', 'Prosperity',
    'Prudence', 'Psyche', 'Quest', 'Radiance', 'Rain', 'Rainbow', 'Raine',
    'Rainey', 'Rana', 'Rayne', 'Remi', 'Renee', 'River', 'Rose', 'Ruth',
    'Sadie', 'Saffron', 'Saga', 'Sage', 'Sapphire', 'Sarin', 'Saturn',
    'Scarlett', 'Season', 'Serena', 'Serenity', 'Shannon', 'Shelby', 'Shine',
    'Sidney', 'Sierra', 'Silver', 'Sky', 'Skye', 'Skylar', 'Skyler', 'Snow',
    'Solstice', 'Sparkle', 'Spirit', 'Spring', 'Star', 'Stardust',
    'Starlight', 'Starshine', 'Stella', 'Sugar', 'Summer', 'Sun', 'Sunburst',
    'Sundance', 'Sunflower', 'Sunny', 'Sunray', 'Sunshine', 'Sunstar',
    'Sydney', 'Thyme', 'Topaz', 'Tranquill', 'Trinity', 'True', 'Truth',
    'Tuesday', 'Tulip', 'Unity', 'Utopia', 'Vega', 'Velma', 'Venus', 'Violet',
    'Whisper', 'Willow', 'Wind', 'Zen'];
  const nm3 = ['Aden', 'Aestas', 'Alchemy', 'Alma', 'Angel', 'Aries', 'Arwen',
    'Ash', 'Belou', 'Blu', 'Breeze', 'Carmel', 'Chance', 'Cloud', 'Cosmic',
    'Cypress', 'Cyress', 'Dancer', 'Danna', 'Dawn', 'Daydream', 'Destiny',
    'Dream', 'Echo', 'Eclipse', 'Elm', 'Ethereal', 'Fall', 'Fire', 'Flame',
    'Flow', 'Free', 'Freedom', 'Gabriel', 'Gemini', 'Genesis', 'Grace',
    'Grainne', 'Heart', 'Honest', 'Honor', 'Ideal', 'Infinity', 'Jupiter',
    'Karma', 'Lake', 'Laurel', 'Leaf', 'Liberty ', 'Light', 'Lore', 'Love',
    'Lyric', 'Maple', 'Marley', 'Mercury', 'Micha', 'Milo', 'Miracle', 'Mist',
    'Moon', 'Moonbean', 'Moonlight', 'Moss', 'Mystery', 'Nirvana', 'Nova',
    'Ocean', 'Ode', 'Orion', 'Passion', 'Peace', 'Pheonix', 'Phoenix',
    'Polaris', 'Promise', 'Psyche', 'Quest', 'Raine', 'Rayne', 'Remi',
    'River', 'Sarin', 'Saturn', 'Shine', 'Sierra', 'Silver', 'Sky', 'Skye',
    'Skyler', 'Snow', 'Star', 'Sun', 'Sundance', 'Sunny', 'Sunray', 'Sydney',
    'Thyme', 'Tranquill', 'True', 'Truth', 'Tuesday', 'Unity', 'Vega',
    'Whisper', 'Wind', 'Zen'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = nm3[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
