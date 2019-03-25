export default function heros() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['The Accidental', 'The Ancient', 'The Aqua', 'The Awesome',
    'The Black', 'The Blue', 'The Brass', 'The Brave', 'The Broad',
    'The Broken', 'The Bronze', 'The Calm', 'The Clever', 'The Cold',
    'The Colossal', 'The Confident', 'The Cool', 'The Copper', 'The Crimson',
    'The Dapper', 'The Dark', 'The Defiant', 'The Dramatic', 'The Eager',
    'The Earth', 'The Earthen', 'The Electric', 'The Electron', 'The Elegant',
    'The Ethereal', 'The Fabulous', 'The Famous', 'The Fancy',
    'The Fantastic', 'The Fast', 'The Fearless', 'The Fiery', 'The Fire',
    'The Galactic', 'The Gentle', 'The Giant', 'The Gigantic', 'The Glorious',
    'The Godly', 'The Golden', 'The Good', 'The Gorgeous', 'The Gray',
    'The Green', 'The Heavenly', 'The Heavy', 'The Honorable', 'The Hot',
    'The Huge', 'The Hypnotic', 'The Ice', 'The Impossible', 'The Incredible',
    'The Infamous', 'The Intelligent', 'The Iron', 'The Jade', 'The Jolly',
    'The Kind', 'The Light', 'The Long', 'The Lucky', 'The Macho',
    'The Magical', 'The Magnificent', 'The Majestic', 'The Mammoth',
    'The Marked', 'The Marvelous', 'The Merciful', 'The Mighty', 'The Misty',
    'The Mysterious', 'The Nifty', 'The Nimble', 'The Nuclear', 'The Old',
    'The Orange', 'The Outrageous', 'The Pink', 'The Proud', 'The Purple',
    'The Quantum', 'The Quick', 'The Quiet', 'The Rapid', 'The Red',
    'The Righteous', 'The Royal', 'The Scarlet', 'The Silver', 'The Smooth',
    'The Spectacular', 'The Steel', 'The Storm', 'The Swift', 'The Terrific',
    'The Thunder', 'The Vengeful', 'The Voiceless', 'The Wacky', 'The Water',
    'The Whispering', 'The White', 'The Wise', 'The Yellow'];
  const nm2 = ['Robin', 'Owl', 'Vulture', 'Condor', 'Falcon', 'Merlin', 'Eagle',
    'Hawk', 'Swan', 'Ibis', 'Crane', 'Snipe', 'Macaw', 'Amazon', 'Nighthawk',
    'Nightowl', 'Monarch', 'Lord', 'Crow', 'Raven', 'Swallow', 'Starling',
    'Sparrow', 'Ant', 'Antman', 'Wasp', 'Phoenix', 'Waspman', 'Grasshopper',
    'Cricket', 'Beetle', 'Assassin', 'Mantis', 'Mothman', 'Moth', 'Termite',
    'Dragonfly', 'Elephantman', 'Wolf', 'Wolfman', 'Bat', 'Rhino',
    'Rhinoceros', 'Cat', 'Catman', 'Lynx', 'Gorilla', 'Leopard', 'Armadillo',
    'Bear', 'Tiger', 'Lion', 'Fox', 'Raccoon', 'Ox', 'Oxman', 'Puma',
    'Panther', 'Wolverine', 'Cheetah', 'Mongoose', 'Jackal', 'Hornet',
    'Warrior', 'Fighter', 'Angel', 'Devil', 'Guardian', 'Protector',
    'Champion', 'Defender', 'Saviour', 'Guard', 'Watcher', 'Slayer', 'Killer',
    'Soldier', 'Marksman', 'Sniper', 'Commando', 'Gunner', 'Mercenary',
    'Scout', 'Veteran', 'Sentinel', 'Shepherd', 'Warden', 'Keeper',
    'Watchman', 'Magician', 'Charmer', 'Conjurer', 'Enchanter', 'Genius',
    'Illusionist', 'Prophet', 'Seer', 'Shaman', 'Siren', 'Wizard', 'Mage',
    'Master', 'Mastermind', 'Prodigy', 'Sage', 'Wonder', 'Wonderman', 'Whiz',
    'Spectacle', 'Duke', 'Baron', 'Prince', 'Shield', 'Sword', 'Dagger',
    'Trident', 'Knuckles', 'Daggers', 'Swordsman', 'Scimitar', 'Katana',
    'Axeman', 'Scepter', 'Hammer', 'Gladiator', 'Shadow', 'Shade', 'Gloom',
    'Spy', 'Agent', 'Detective', 'Mole', 'Leader', 'Vindicator', 'Captain',
    'Chief', 'Doctor', 'General', 'Smasher', 'Spirit', 'Scorpion', 'Spider'];
  const nm3 = ['Doctor', 'Captain', 'Doctor', 'Captain', 'Lord', 'Professor',
    'Professor', 'Mister', 'Commander', 'Master', 'Agent', 'Master', 'Agent',
    'Chief', 'Warden', '', '', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink', 'Gray',
    'Dark', 'Light', 'Orange', 'Galactic', 'Black', 'White', 'Clever',
    'Famous', 'Infamous', 'Brave', 'Calm', 'Gentle', 'Proud', 'Dapper',
    'Eager', 'Jolly', 'Broad', 'Brass', 'Copper', 'Golden', 'Silver',
    'Bronze', 'Iron', 'Steel', 'Huge', 'Mammoth', 'Gigantic', 'Colossal',
    'Quiet', 'Thundering', 'Whispering', 'Ancient', 'Fast', 'Fancy',
    'Magnificent', 'Mysterious', 'Old', 'Long', 'Rapid', 'Swift', 'Quick',
    'Broken', 'Cold', 'Cool', 'Hot', 'Heavy', 'Light', 'Good', 'Eager',
    'Fiery', 'Elegent', 'Electric', 'Defiant', 'Brave', 'Accidental',
    'Ethereal', 'Dramatic', 'Awesome', 'Impossible', 'Incredible',
    'Intelligent', 'Heavenly', 'Honorable', 'Huge', 'Hypnotic', 'Gentle',
    'Giant', 'Glorious', 'Godly', 'Gorgeous', 'Fabulous', 'Fancy',
    'Fantastic', 'Fearless', 'Kind', 'Lucky', 'Macho', 'Magical', 'Majestic',
    'Marked', 'Marvelous', 'Mighty', 'Messy', 'Merciful', 'Misty', 'Nifty',
    'Nimble', 'Outrageous', 'Confident', 'Rapid', 'Righteous', 'Royal',
    'Terrific', 'Smooth', 'Spectacular', 'Wacky', 'Wise', 'Vengeful',
    'Voiceless', 'Unarmed', 'Armed', 'Nuclear', 'Scarlet', 'Quantum',
    'Electron', 'Crimson', 'Fire', 'Ice', 'Earth', 'Earthen', 'Water', 'Aqua',
    'Storm', 'Thunder'];
  const nm5 = ['Masquerade', 'Robin', 'Owl', 'Vulture', 'Condor', 'Falcon',
    'Merlin', 'Eagle', 'Hawk', 'Swan', 'Ibis', 'Phoenix', 'Crane', 'Snipe',
    'Macaw', 'Amazon', 'Nighthawk', 'Nightowl', 'Monarch', 'Lord', 'Crow',
    'Raven', 'Swallow', 'Starling', 'Sparrow', 'Ant', 'Antman', 'Wasp',
    'Waspman', 'Grasshopper', 'Cricket', 'Beetle', 'Assassin', 'Mantis',
    'Mothman', 'Moth', 'Termite', 'Dragonfly', 'Elephantman', 'Wolf',
    'Wolfman', 'Bat', 'Rhino', 'Rhinoceros', 'Cat', 'Catman', 'Lynx',
    'Gorilla', 'Leopard', 'Armadillo', 'Bear', 'Tiger', 'Lion', 'Fox',
    'Raccoon', 'Ox', 'Oxman', 'Puma', 'Panther', 'Wolverine', 'Cheetah',
    'Mongoose', 'Jackal', 'Hornet', 'Warrior', 'Fighter', 'Angel', 'Devil',
    'Guardian', 'Protector', 'Champion', 'Defender', 'Saviour', 'Watcher',
    'Slayer', 'Killer', 'Sentinel', 'Shepherd', 'Magician', 'Charmer',
    'Conjurer', 'Enchanter', 'Genius', 'Illusionist', 'Prophet', 'Mastermind',
    'Prodigy', 'Sage', 'Wonder', 'Spectacle', 'Shield', 'Sword', 'Dagger',
    'Trident', 'Knuckles', 'Daggers', 'Swordsman', 'Scimitar', 'Katana',
    'Axeman', 'Scepter', 'Hammer', 'Shadow', 'Shade', 'Gloom', 'Mole',
    'Smasher', 'Spirit', 'Scorpion', 'Spider'];
  const nm6 = ['Frost', 'Golden Hope', 'Hope', 'Elemental', 'Impossible Girl',
    'Griffin', 'Tecton', 'Captain Atomic', 'Titanio', 'Solar Flare',
    'Alley Cat', 'Snow Storm', 'Absolute Zero', 'The Great Defender',
    'Timeline', 'Skylar Storm', 'Optimo', 'Remix', 'Citadel', 'Alpha Dog',
    'Brain Matter', 'Dark Warrior', 'The Crusher', 'Owl', 'Incognito',
    'Gray Granite', 'Gamma', 'Spark Plug', 'Silver Shield', 'Quiver', 'Smoke',
    'Captain Quake', 'Icicle', 'Metanite', 'Blaze', 'Fantasia', 'Phantasm',
    'Sparks', 'Ace', 'Amethyst Heart', 'Animalia', 'Armed', 'Black Bat',
    'Black Cat', 'Black Knight', 'Black Phoenix', 'Black Star', 'Blitzfire',
    'Boler', 'Bolt', 'Brass Bison', 'Bright Shadow', 'Broken Watchman',
    'Choicemaker', 'Cleanser', 'Crazy Eight', 'Creature', 'Criss Cross',
    'Dark Flame', 'Dark Omen', 'Dark Titan', 'Dazzler', 'Deadnite',
    'Death Roach', 'Doctor Chronos', 'Doctor Dynasty', 'Doctor Juggernaut',
    'Doctor Titanium', 'Dragon Boy', 'Dragon Spectre', 'Dragonloom',
    'Dragontooth', 'Electric Arrow', 'Eltrocus', 'Ethereal Phoenix',
    'Ethereal Titan', 'Fallen Pheonix', 'Fiery Falcon', 'Firebird',
    'Freefall', 'Frozenstar', 'Galactic Gargoyle', 'Gecko', 'Griffin',
    'Heavy Step', 'Helon', 'Heloth', 'Hopewing', 'Ice Raven', 'Iron Archer',
    'Iron Assassin', 'Jade Stranger', 'King Scorp', 'Mad Manta', 'Makeshift',
    'Marked Stranger', 'Master Defiance', 'Mighty Mamba', 'Mister Penance',
    'Mister X', 'Mister Y', 'Misty Manta', 'Moon Halo', 'Moonshadow',
    'Nightbolt', 'Nightleaf', 'Nightquake', 'Nightwave', 'Orothos', 'Osa',
    'Peacebringer', 'Phantom', 'Phantom Archer', 'Phantom Kid',
    'Phantom Spectre', 'Phoen-X', 'Quantum Colossus', 'Quantum Commander',
    'Razor', 'Red Heart', 'Rosethorn', 'Saber', 'Saberleaf', 'Sage', 'Savior',
    'Scarlet Feathers', 'Scarlet Horse', 'Scarlet King', 'Scarlet Sentinel',
    'Shaden', 'Shadow', 'Shadowleaf', 'Shadowstar', 'Silver Goliath',
    'Silver Shepherd', 'Silver Wolf', 'Snow Raven', 'Spitfire', 'Spur',
    'Star Sentinel', 'Starbright', 'Stareye', 'Starlight', 'Starry Night',
    'Sunspot', 'Switcher', 'The Hunter', 'The Last One', 'Thornhead',
    'Thunder Hawk', 'Thunderclap', 'Thundering Whisper', 'Venom', 'Venombite',
    'Voiceless Stranger', 'Wi-Fire', 'Wild Tornado', 'Wildfire', 'Wildflame',
    'Karma'];
  const i = Math.floor(Math.random() * 10); {
    if (i < 4) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd]} ${nm2[rnd2]}`;
    } else if (i < 8) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      rnd3 = Math.floor(Math.random() * nm5.length);
      names = `${nm3[rnd]} ${nm4[rnd2]} ${nm5[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm6.length);
      names = nm6[rnd];
    }
    return names;
  }
}
