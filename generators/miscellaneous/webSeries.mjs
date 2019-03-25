export default function webSeries() {
  let names;
  let rnd;
  let rnd2;
  const nm1 = ['Adorable', 'Alternate', 'Ambitious', 'Angel', 'Angelic',
    'Animal', 'Anti-Social', 'Apocalypse', 'Astonishing', 'Astronomic',
    'Autumn', 'Awkward', 'Backwards', 'Beautiful', 'Bedtime', 'Bite Sized',
    'Bitten', 'Bitter', 'Bound', 'Boyfriend', 'Braindead', 'Cake', 'Candy',
    'Cardboard', 'Cat', 'Chocolate', 'Chrono', 'Clouded', 'Companion',
    'Conjured', 'Cooking', 'Cosmic', 'Costumed', 'Country', 'Couple', 'Crazy',
    'Creation', 'Cute', 'Date', 'Dating', 'Daydream', 'Dead', 'Deadly',
    'Death', 'Delicious', 'Demon', 'Demonic', 'Derpy', 'Destined',
    'Detective', 'Devil', 'Disconnected', 'Discount', 'Distant', 'Dog',
    'Donkey', 'Doodle', 'Dragon', 'Dreamy', 'Eccentric', 'Elemental',
    'Embarrasing', 'Emotional', 'Empty', 'Endearing', 'Enigma', 'Epic',
    'Error', 'Evening', 'Everyday', 'Exotic', 'Exploration', 'Fail',
    'Failure', 'Fangirl', 'Fantastic', 'Fellowship', 'Floating', 'Food',
    'Foolish', 'Forgetful', 'Fortunate', 'Fragile', 'Freaky', 'Frosty',
    'Frozen', 'Funny', 'Future', 'Galaxy', 'Game', 'Gamer', 'Gaming', 'Geeky',
    'Gentle', 'Ghost', 'Girlfriend', 'Gloomy', 'Golden', 'Grave', 'Grim',
    'Hazy', 'Heroic', 'Hidden', 'Honor', 'Horror', 'Hot', 'Humanoid',
    'Illusion', 'Immortal', 'Infinite', 'Insane', 'Insanity', 'Intense',
    'Iron', 'Ironic', 'Justice', 'Karma', 'Kawaii', 'Kitchen', 'Kitten',
    'Lazy', 'Leftover', 'Lifeless', 'Lifesize', 'Little', 'Lost', 'Love',
    'Lover', 'Lucky', 'Lunar', 'Magic', 'Maniac', 'Married', 'Maximum',
    'Mecha', 'Medieval', 'Mega', 'Melodic', 'Midnight', 'Mindbending', 'Mini',
    'Miscellaneous', 'Missing', 'Modern', 'Molten', 'Monkey', 'Monster',
    'Moon', 'Moonlight', 'Morning', 'Mortal', 'Musical', 'Naughty',
    'Neurotic', 'Nightmare', 'Odd', 'Optimistic', 'Oracle', 'Panic', 'Paper',
    'Paradox', 'Paragon', 'Parallel', 'Perfect', 'Personal', 'Phantom',
    'Phased', 'Pink', 'Pirate', 'Placebo', 'Planetary', 'Prince', 'Princess',
    'Prodigy', 'Puppy', 'Rainbow', 'Rainy', 'Rainy Day', 'Random',
    'Real Life', 'Reality', 'Reaper', 'Robot', 'Robotic', 'Roommate', 'Royal',
    'Salty', 'Samurai', 'Sandbox', 'Sarcastic', 'Scribble', 'Secret',
    'Sentient', 'Shadow', 'Shady', 'Sidekick', 'Silent', 'Silver', 'Singing',
    'Skeleton', 'Sketchbook', 'Smiling', 'Smoke', 'Smokey', 'Snowflake',
    'Snowy', 'Social', 'Socially Awkward', 'Solar', 'Soul', 'Soulless',
    'Sour', 'Space', 'Spirit', 'Spoiled', 'Spring', 'Star', 'Steamy', 'Steel',
    'Storm', 'Stray', 'Summer', 'Sun', 'Sweet', 'Terror', 'Thunder',
    'Time Travel', 'Timeless', 'Travel', 'Treehouse', 'Twisting', 'Ultimate',
    'Underground', 'Unfortunate', 'United', 'Unknown', 'Unlucky',
    'Unrestrained', 'Urban', 'Vampire', 'Villainous', 'Voodoo', 'War',
    'Warrior', 'Weekend', 'Werewolf', 'Winter', 'Wonderful', 'Yesterday\'s',
    'Zombie'];
  const nm2 = ['Comic', 'Comics', 'Story', 'Stories', 'Tales', 'Fantasy',
    'Fantasies', 'Chronicles', 'Drama', 'Adventure', 'Adventures', 'Report',
    'Romance', 'Series', 'Legend', 'Myths'];
  const nm3 = ['Abnormal', 'Adorable', 'Alternate', 'Ambitious', 'Angel',
    'Anonymous', 'Artificial', 'Awoken', 'Beautiful', 'Big Bad', 'Bite Sized',
    'Bitten', 'Bitter', 'Bound', 'Cardboard', 'Chocolate', 'Chronic',
    'Conjured', 'Cosmic', 'Costumed', 'Dangerous', 'Dark', 'Dead', 'Deadly',
    'Demon', 'Different', 'Digital', 'Discount', 'Distant', 'Divided',
    'Dragon', 'Eccentric', 'Emotional', 'Eternal', 'Euphoric', 'Exotic',
    'Fantasy', 'Foolish', 'Fragile', 'Freak', 'Frozen', 'Gamer', 'Gaming',
    'Gentle', 'Girl', 'Golden', 'Guy', 'Happy', 'Heaven\'s', 'Hell\'s',
    'Hidden', 'Human', 'Infamous', 'Infinite', 'Insane', 'Ironic', 'Kawaii',
    'Killing', 'Lifesize', 'Light', 'Lonely', 'Lucid', 'Lunar', 'Mini',
    'Mirrored', 'Missing', 'Modern', 'Monster', 'Mumbling', 'Naughty',
    'Online', 'Panic', 'Paper', 'Perfect', 'Placebo', 'Quirky', 'Random',
    'Robotic', 'Royal', 'Shady', 'Silent', 'Social', 'Somber', 'Soul',
    'Space', 'Stolen', 'Stray', 'Student', 'Stupid', 'Timeless', 'Tired',
    'Twisted', 'Ultimate', 'Underground', 'Unknown', 'Weekend', 'Weird',
    'Wicked', 'Wonderful', 'Zero'];
  const nm4 = ['Academy', 'Age', 'Ambitions', 'Blade', 'Brain', 'Cat', 'Circus',
    'Cloud', 'Companion', 'Confessions', 'Creation', 'Dates', 'Dating', 'Day',
    'Days', 'Death', 'Doodles', 'Doom', 'Dream', 'Earth', 'Edge', 'Effect',
    'Enigma', 'Everyday', 'Experience', 'Exposure', 'Fails', 'Fortune',
    'Future', 'Galaxy', 'Games', 'Genesis', 'Ghost', 'Grave', 'Guardian',
    'Guide', 'Guild', 'Heart', 'Hero', 'Hope', 'Horror', 'House', 'Journey',
    'Justice', 'Kind', 'Life', 'Love', 'Lover', 'Magic', 'March', 'Marriage',
    'Method', 'Mind', 'Miracle', 'Mode', 'Morning', 'Nature', 'Night',
    'Nightmare', 'Nonsense', 'Oracle', 'Outcast', 'Paradox', 'Parallel',
    'Party', 'Phantom', 'Planet', 'Power', 'Prodigy', 'Promises', 'Prophecy',
    'Quest', 'Reaction', 'Reality', 'Realm', 'Reaper', 'Requiem',
    'Revolution', 'Roommate', 'Saga', 'Season', 'Secrets', 'Shadows',
    'Sidekick', 'Sin', 'Sinner', 'Sleep', 'Smiles', 'Spirit', 'Summer',
    'Trial', 'Twin', 'Villain', 'Vision', 'Warrior', 'Wasteland', 'Weapons',
    'Wonders', 'World', 'Zombies'];
  const nm5 = ['Abyss', 'Alpha', 'Angel', 'Aqua', 'Ash', 'Autumn', 'Birth',
    'Bitter', 'Blind', 'Border', 'Chibi', 'Chrono', 'Class', 'Comic',
    'Crimson', 'Crystal', 'Dark', 'Dead', 'Demon', 'Doom', 'Dragon', 'Dream',
    'Echo', 'Ego', 'Ember', 'End', 'False', 'Fantasy', 'Feel', 'Field',
    'Fiery', 'Flower', 'Freak', 'Frost', 'Gamer', 'Ghost', 'Gloom', 'God',
    'Gray', 'Hallow', 'Heaven', 'Hell', 'Honey', 'Hyper', 'Immortal', 'Inner',
    'Killer', 'Knight', 'Loot', 'Lucid', 'Lunar', 'Maiden', 'Marsh', 'Mecha',
    'Metal', 'Midnight', 'Moon', 'Mortal', 'Night', 'Ocean', 'Omega', 'Onyx',
    'Outer', 'Paper', 'Phantom', 'Poison', 'Power', 'Random', 'Reaper',
    'Royal', 'Scramble', 'Scribble', 'Shadow', 'Silver', 'Solar', 'Soul',
    'Space', 'Spider', 'Spirit', 'Spring', 'Spy', 'Star', 'Storm', 'Student',
    'Sub', 'Summer', 'Sun', 'Super', 'Sweet', 'Thunder', 'Time', 'Titan',
    'Venom', 'Void', 'Vortex', 'Were', 'Winter', 'Wonder', 'Zero', 'Zombie'];
  const nm6 = ['bane', 'base', 'bash', 'bell', 'bird', 'bite', 'blade', 'blood',
    'bones', 'born', 'bot', 'bound', 'bow', 'boy', 'brain', 'cat', 'chase',
    'code', 'coil', 'crew', 'crown', 'dash', 'date', 'days', 'derp', 'dream',
    'dust', 'faire', 'fall', 'fame', 'fare', 'fire', 'flake', 'flow', 'fury',
    'games', 'gift', 'girl', 'guard', 'guild', 'heart', 'hope', 'horde',
    'house', 'keeper', 'key', 'kin', 'king', 'kiss', 'land', 'life', 'light',
    'list', 'lock', 'loop', 'luck', 'magic', 'mark', 'mind', 'myth', 'night',
    'piece', 'plane', 'point', 'pride', 'quake', 'queen', 'quest', 'realm',
    'right', 'ring', 'run', 'seal', 'shift', 'shock', 'show', 'side', 'sin',
    'slice', 'smile', 'soul', 'star', 'stone', 'strike', 'time', 'ville',
    'vision', 'voice', 'ward', 'watch', 'wing', 'wish', 'wisp', 'witch',
    'wolf', 'word', 'world', 'worth', 'wrath', 'year'];
  const i = Math.floor(Math.random() * 10); {
    if (i < 4) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd]} ${nm2[rnd2]}`;
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm3[rnd]} ${nm4[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      names = nm5[rnd] + nm6[rnd2];
    }
    return names;
  }
}
