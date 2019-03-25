export default function bands() {
  let rnd;
  let rnd2;
  let names;
  const names1 = ['Absent', 'Accidental', 'Adamant', 'Adorable', 'Adventure', 'Alien', 'All Out', 'Amber', 'Ambush', 'Amp', 'Amplified', 'Animal', 'Anonymous', 'Atomic', 'Attic', 'Audio', 'Augmented', 'August', 'Aurora', 'Automated', 'Awkward', 'Bad', 'Balanced', 'Basement', 'Bass', 'Beach', 'Bitter', 'Bittersweet', 'Bizarre', 'Blessed', 'Blind', 'Blissful', 'Bloody', 'Blue', 'Blurred', 'Bold', 'Brave', 'Bright', 'Broken', 'Busted', 'Caged', 'Camouflaged', 'Candy', 'Cannibal', 'Carefree', 'Cellar', 'Century', 'Chemical', 'Cinematic', 'City', 'Clumsy', 'Cold', 'Compulsive', 'Controlled', 'Cosmic', 'Covert', 'Crazy', 'Creative', 'Crimson', 'Crooked', 'Crowded', 'Crystal', 'Cyber', 'Cybernated', 'Damned', 'Dance', 'Daydream', 'Dead', 'Delicate', 'Delirious', 'Desolate', 'Diamond', 'Digital', 'Dirty', 'Distorted', 'Dream', 'Dynamic', 'Dynamite', 'Echo', 'Echoing', 'Elaborate', 'Electric', 'Elegant', 'Elementary', 'Empty', 'Equal', 'Eternal', 'Euphoric', 'Everlasting', 'Evil', 'Expired', 'Explosive', 'Extreme', 'Faint', 'Fake', 'Fallout', 'Fantasy', 'Fiery', 'Flaming', 'Flux', 'Forever', 'Forgiven', 'Forsaken', 'Friendly', 'Frozen', 'Future', 'Garbage', 'Ghost', 'Glass', 'Golden', 'Greater', 'Green', 'Grim', 'Groove', 'Guitar', 'Handsome', 'Happy', 'Hard', 'Heroic', 'High', 'Hollow', 'Honey', 'Hot', 'Howling', 'Human', 'Humble', 'Identical', 'Idle', 'Ignored', 'Illuminated', 'Imaginary', 'Immortal', 'Indie', 'Infamous', 'Inferior', 'Infinite', 'Insane', 'Iron', 'Irregular', 'Isolated', 'Jade', 'Jovial', 'Just', 'Juvenile', 'KO', 'King\'s', 'Knockout', 'Life', 'Lightning', 'Liquid', 'Little', 'Living', 'Lonely', 'Lost', 'Lovable', 'Love', 'Low', 'Lucid', 'Lucky', 'Lunar', 'Luxury', 'Mad', 'Magic', 'Magnet', 'Marching', 'Maroon', 'Marvel', 'Melody', 'Merry', 'Midnight', 'Millennium', 'Mindless', 'Miniature', 'Mint', 'Miracle', 'Mirror', 'Modern', 'Modest', 'Molten', 'Mortal', 'Mute', 'Mystery', 'Mystic', 'Natural', 'New', 'Noble', 'Noise', 'Nuclear', 'Numb', 'Oblivious', 'Obscure', 'Operation', 'Ordinary', 'Original', 'Pajama', 'Paradise', 'Parallel', 'Paranoid', 'Parellel', 'Party', 'Passive', 'Peaceful', 'Perpetual', 'Petite', 'Phantom', 'Phase', 'Phonic', 'Pink', 'Placebo', 'Placid', 'Poison', 'Precious', 'Pretty', 'Primal', 'Prodigy', 'Provisional', 'Psychic', 'Public', 'Pure', 'Radiant', 'Radical', 'Radio', 'Random', 'Rare', 'Razor', 'Rebel', 'Red', 'Renegade', 'Republic', 'Restrained', 'Robotic', 'Royal', 'Ruthless', 'Sapphire', 'Scarlet', 'Screaming', 'Secret', 'Shadow', 'Shallow', 'Sick', 'Silk', 'Silver', 'Simple', 'Skeletal', 'Sleeping', 'Sloppy', 'Smoking', 'Smooth', 'Soft', 'Solar', 'Solid', 'Solitary', 'Sonic', 'Soundwave', 'Sour', 'Space', 'Spring', 'Stage', 'Standby', 'Static', 'Stellar', 'Stereo', 'Street', 'Suave', 'Sub', 'Summer', 'Sweet', 'Syndicate', 'Synthetic', 'Teenage', 'Temporary', 'Terrible', 'Theoretical', 'Thunder', 'Timeless', 'Toxic', 'Trance', 'Tranquil', 'Turbulent', 'Twilight', 'Twisted', 'Typical', 'Ugly', 'Uncharted', 'Uncontrolled', 'Underworld', 'Uniformed', 'Unique', 'Unknown', 'Unnamed', 'Untamed', 'Urban', 'Valiant', 'Vanilla', 'Vanished', 'Velvet', 'Venom', 'Vile', 'Violent', 'Virtual', 'Viscous', 'Voodoo', 'Weeping', 'Wicked', 'Wild', 'Winter', 'Wireless', 'Young', 'Zombie'];
  const names2 = ['Accident', 'Accord', 'Aces', 'Affairs', 'Affinity', 'Airwaves', 'Alliance', 'Anarchy', 'Androids', 'Angels', 'Animals', 'Antics', 'Army', 'Artillery', 'Aspect', 'Asylum', 'Attack', 'Aura', 'Authors', 'Awakening', 'Band', 'Bang', 'Banshees', 'Barbarian', 'Bards', 'Barrage', 'Bazaar', 'Beasts', 'Beats', 'Birds', 'Blaze', 'Blitz', 'Blossoms', 'Boys', 'Brigade', 'Broadcast', 'Brothers', 'Cavalry', 'Cavemen', 'Ceremony', 'Charm', 'Chicks', 'Choice', 'Chords', 'Circuits', 'Circus', 'Coalition', 'Coats', 'Code', 'Collapse', 'Collective', 'Comets', 'Concord', 'Connection', 'Conspiracy', 'Crash', 'Creatures', 'Creed', 'Crew', 'Crisis', 'Critters', 'Crocs', 'Crows', 'Crusade', 'Cure', 'Danger', 'Daughters', 'Dawn', 'Days', 'Decision', 'Delight', 'Department', 'Destiny', 'Destruction', 'Diary', 'Dilemma', 'Direction', 'Division', 'Doctors', 'Dolls', 'Drama', 'Dreamers', 'Dreams', 'Droids', 'Drums', 'Dudes', 'Dusk', 'Dynamite', 'Echo', 'Effigy', 'Embers', 'Embrace', 'Enemies', 'Engine', 'Enigma', 'Enterprise', 'Epoch', 'Era', 'Essence', 'Event', 'Evolution', 'Example', 'Excuse', 'Experience', 'Faces', 'Factory', 'Faith', 'Fears', 'Feeling', 'Fellow', 'Fever', 'Fiction', 'Fiends', 'Figures', 'Fire', 'Five', 'Fluke', 'Force', 'Foundry', 'Four', 'Freaks', 'Future', 'Gadgets', 'Gags', 'Game', 'Games', 'Garage', 'Generation', 'Genesis', 'Girls', 'Glamour', 'Glory', 'Gossip', 'Grace', 'Greed', 'Guests', 'Guys', 'Happening', 'Haven', 'Heads', 'Hearts', 'Hive', 'Hour', 'Hurricane', 'Hysteria', 'Image', 'Impulse', 'Influx', 'Instant', 'Instinct', 'Intern', 'Issues', 'Jacks', 'Jaws', 'Joke', 'Jokes', 'Karma', 'Knights', 'League', 'Legion', 'Lessons', 'Liberty', 'Lies', 'Life', 'Lips', 'Lunatics', 'Machine', 'Madness', 'Mammals', 'Mania', 'Maniac', 'Maniacs', 'Masks', 'Men', 'Minds', 'Mischief', 'Mission', 'Monkeys', 'Monster', 'Motions', 'Movement', 'Moves', 'Mystery', 'Nation', 'Nemesis', 'Network', 'Nexus', 'Nightmare', 'Noise', 'Nomads', 'Obsession', 'Operation', 'Operators', 'Orchestra', 'Order', 'Outcast', 'Overdose', 'Overkill', 'Panic', 'Parade', 'Paradise', 'Party', 'Passion', 'Pattern', 'Perception', 'Phenomenon', 'Phobia', 'Plan', 'Planet', 'Present', 'Pressure', 'Prestige', 'Pretender', 'Problems', 'Process', 'Program', 'Project', 'Puppets', 'Radicals', 'Rage', 'Rascal', 'Realm', 'Reasons', 'Rebirth', 'Record', 'Rejects', 'Remedy', 'Replacement', 'Residue', 'Revolution', 'Rhythm', 'Riddle', 'Riot', 'Rival', 'Robots', 'Rogues', 'Romance', 'Royale', 'Rumble', 'Rumor', 'Rush', 'Sanity', 'Savages', 'Scandal', 'Scene', 'Secrets', 'Sensation', 'Shame', 'Sharks', 'Shout', 'Show', 'Signal', 'Signs', 'Siren', 'Sisters', 'Six', 'Smash', 'Society', 'Sons', 'Souls', 'Sounds', 'Spark', 'Sparks', 'Spirits', 'Squad', 'Stars', 'Static', 'Storm', 'Strangers', 'Stripes', 'Struggle', 'Sundown', 'Sunset', 'Surge', 'Surrender', 'Symbols', 'Symphony', 'Syndrome', 'System', 'Tales', 'Tears', 'Tempest', 'Tension', 'Therapy', 'Thing', 'Things', 'Thoughts', 'Tones', 'Tragedy', 'Trio', 'Trouble', 'Twins', 'Twist', 'Union', 'Universe', 'Vibes', 'Vibration', 'Vibrations', 'Voices', 'Volley', 'Voyage', 'War', 'Wizards', 'Women', 'World', 'Wreckage', 'Zombies', 'Zoo'];
  const names3 = ['Acccessory', 'Accomplice', 'Adept', 'Age', 'Agents', 'Alliance', 'Ambassador', 'Analogy', 'Android', 'Angels', 'Animals', 'Anomaly', 'Army', 'Ashes', 'Associate', 'Association', 'Astronauts', 'Asylum', 'Attack', 'Attitude', 'Aurora', 'Author', 'Avenue', 'Awe', 'Band', 'Bandits', 'Banquet', 'Barrage', 'Basics', 'Beauty', 'Beginning', 'Birth', 'Blaze', 'Blossoms', 'Blueprint', 'Boy', 'Boys', 'Brigade', 'Brotherhood', 'Bug', 'Burst', 'Call', 'Camp', 'Century', 'Ceremony', 'Chains', 'Chamber', 'Channel', 'Charm', 'Chemistry', 'Children', 'Cipher', 'Circle', 'Code', 'Collapse', 'Comedy', 'Company', 'Connection', 'Conspiracy', 'Contest', 'Control', 'Creation', 'Creatures', 'Crew', 'Critters', 'Cure', 'Cycle', 'Dance', 'Darlings', 'Daughters', 'Dawn', 'Day', 'Disciple', 'Disco', 'Dolls', 'Domain', 'Dreams', 'Drive', 'Droid', 'Drums', 'Dust', 'Echo', 'Elements', 'Embers', 'Embrace', 'Empire', 'Enemies', 'Engine', 'Enigma', 'Envoy', 'Envy', 'Epilogue', 'Epoch', 'Eruption', 'Essence', 'Euphoria', 'Exchange', 'Experience', 'Explosion', 'Faces', 'Failure', 'Fall', 'Fantasy', 'Feature', 'Feedback', 'Feeling', 'Fever', 'Fight', 'Figment', 'Figures', 'Finale', 'Fire', 'Flashback', 'Flight', 'Flood', 'Flow', 'Fluke', 'Force', 'Format', 'Formula', 'Foundation', 'Fragment', 'Freak', 'Game', 'Garden', 'Generation', 'Genesis', 'Ghost', 'Girl', 'Girls', 'Glee', 'Glitch', 'Goodbye', 'Grace', 'Grasp', 'Groove', 'Growth', 'Guild', 'Guys', 'Hatred', 'Haven', 'Hero', 'Horrors', 'Hour', 'House', 'Impulse', 'Inception', 'Inferno', 'Initiative', 'Innocence', 'Institute', 'Invention', 'Jackpot', 'Joy', 'King', 'Kings', 'Kiss', 'Knights', 'Law', 'Legion', 'Library', 'Love', 'Lure', 'Machine', 'Marbles', 'March', 'Marvel', 'Masters', 'Meaning', 'Melody', 'Memories', 'Memory', 'Messenger', 'Method', 'Mind', 'Minions', 'Minister', 'Miracle', 'Mirror', 'Monster', 'Motions', 'Muse', 'Mutant', 'Mutiny', 'Mystery', 'Nation', 'Need', 'Network', 'Night', 'Oasis', 'Oracle', 'Order', 'Pain', 'Pantheon', 'Parade', 'Paradox', 'Part', 'Party', 'Passage', 'Passenger', 'Passion', 'Personality', 'Phoenix', 'Piece', 'Pilot', 'Pirate', 'Placebo', 'Plan', 'Poets', 'Posse', 'Premise', 'Pride', 'Prime', 'Privilege', 'Prize', 'Prodigy', 'Program', 'Project', 'Promise', 'Prototype', 'Queen', 'Queens', 'Race', 'Rainbow', 'Rapture', 'Reaction', 'Realm', 'Reflection', 'Renegade', 'Replacement', 'Revolution', 'Riddle', 'Riders', 'Right', 'Riot', 'Ritual', 'Rivals', 'Robot', 'Ruse', 'Rush', 'Salvo', 'Sanctuary', 'Satire', 'School', 'Scientist', 'Scream', 'Season', 'Secrets', 'Sense', 'Sequence', 'Servant', 'Shadow', 'Shame', 'Shouts', 'Sisterhood', 'Slave', 'Slice', 'Smuggler', 'Sons', 'Soul', 'Sound', 'Sounds', 'Spectacle', 'Spirit', 'State', 'Story', 'Strike', 'Struggle', 'Students', 'Sunset', 'Surprise', 'Surrender', 'Switch', 'Symbol', 'Syndicate', 'Syndrome', 'System', 'Taste', 'Temple', 'Theory', 'Times', 'Tool', 'Torment', 'Touch', 'Tourists', 'Trance', 'Trap', 'Tricks', 'Trilogy', 'Trio', 'Twilight', 'Twins', 'Unit', 'Villain', 'Virtue', 'Vision', 'Voices', 'Voyage', 'Warmth', 'Whip', 'Wish', 'Wizard', 'Wonder', 'Word'];
  const names4 = ['Action', 'Adventure', 'Ambiguity', 'Anarchy', 'Anxiety', 'Armageddon', 'Ash', 'Ashes', 'Bass', 'Beauty', 'Bliss', 'Blitz', 'Boogie', 'Brilliance', 'Carnage', 'Chance', 'Change', 'Chaos', 'Comedy', 'Comfort', 'Conflict', 'Confusion', 'Convenience', 'Courage', 'Crazy', 'Creation', 'Crimson', 'Cruelty', 'Crystal', 'Dance', 'Danger', 'Darkness', 'Daydreams', 'Death', 'Deceit', 'Defiance', 'Delight', 'Delusion', 'Denial', 'Design', 'Destruction', 'Diamonds', 'Digitalism', 'Dignity', 'Distortion', 'Doubt', 'Dragons', 'Drama', 'Dread', 'Dreams', 'Drums', 'Dust', 'Dynamics', 'Dynamite', 'Earth', 'Ecstasy', 'Electronics', 'Elegance', 'Embers', 'Envy', 'Eternity', 'Euphoria', 'Everything', 'Exiles', 'Fable', 'Fantasy', 'Fear', 'Felicity', 'Fiction', 'Fire', 'Flames', 'Flow', 'Flux', 'Focus', 'Fortitude', 'Freaks', 'Freedom', 'Frenzy', 'Fun', 'Funk', 'Fury', 'Games', 'Genesis', 'Giants', 'Glass', 'Glee', 'Gloom', 'Gold', 'Grace', 'Guilt', 'Habit', 'Harmony', 'Hate', 'Havoc', 'Hazard', 'Heaven', 'Heroes', 'Honor', 'Horror', 'Hustle', 'Hysteria', 'Illusion', 'Imagination', 'Infinity', 'Influence', 'Innovation', 'Insanity', 'Integrity', 'Iron', 'Jade', 'Jeopardy', 'Joy', 'Jubilation', 'Jupiter', 'Karma', 'Kings', 'Language', 'Legend', 'Liberty', 'Lies', 'Life', 'Light', 'Love', 'Luck', 'Luminance', 'Lunacy', 'Madness', 'Magnetism', 'Malice', 'Mania', 'Marvel', 'Mayhem', 'Menace', 'Midnight', 'Might', 'Miracles', 'Modesty', 'Momentum', 'Monsters', 'Motion', 'Music', 'Mystery', 'Myth', 'Nature', 'Nightmares', 'Noise', 'Nothing', 'Oblivion', 'Obscurity', 'Obsession', 'One Night', 'Outcasts', 'Overkill', 'Paradise', 'Party', 'Passion', 'Peace', 'Perfection', 'Phantasy', 'Plasma', 'Pleasure', 'Possibilities', 'Potential', 'Power', 'Prejudice', 'Pride', 'Progress', 'Protest', 'Rage', 'Rain', 'Reaction', 'Reality', 'Refusal', 'Rejection', 'Relaxation', 'Respect', 'Revenge', 'Reversal', 'Revolution', 'Rhyme', 'Rhythm', 'Riddles', 'Romance', 'Routine', 'Ruin', 'Ruins', 'Rumble', 'Rush', 'Sapphire', 'Satire', 'Satisfaction', 'Screams', 'Seconds', 'Secrets', 'Serenity', 'Shadows', 'Shuffle', 'Simplicity', 'Sin', 'Skulls', 'Slander', 'Sleep', 'Snow', 'Solitude', 'Soul', 'Sound', 'Space', 'Sparks', 'Spectacle', 'Spice', 'Spite', 'Stars', 'Steel', 'Storms', 'Strife', 'Struggle', 'Style', 'Sugar', 'Summer', 'Surrender', 'Suspense', 'Tension', 'Terror', 'Thunder', 'Time', 'Today', 'Tomorrow', 'Tonight', 'Trance', 'Tricks', 'Trouble', 'Truth', 'Tunes', 'Turmoil', 'Twilight', 'Unity', 'Unrest', 'Us', 'Utopia', 'Valentine', 'Valor', 'Velocity', 'Vengeance', 'Victory', 'Virtue', 'War', 'Winter', 'Wit', 'Woe', 'Wonder', 'Words', 'Wrath', 'Wreckage', 'Yesterday', 'You', 'Youth', 'Zombies', 'the Beat', 'the Century', 'the Dance Floor', 'the Decade', 'the Extreme', 'the Fall', 'the Future', 'the Generation', 'the Groove', 'the Inferno', 'the Moon', 'the New Sound', 'the Night', 'the Past', 'the Radio', 'the Sky', 'the Stage', 'the Stars', 'the Sun', 'the System', 'the Underground', 'the Underworld', 'the Void', 'the World', 'the Year'];
  const names5 = ['Abacus', 'Ace', 'Aeon', 'Age', 'Alien', 'Alpha', 'Ambiguity', 'Ambush', 'Amnesia', 'Anagram', 'Analog', 'Analogy', 'Anarchy', 'Android', 'Androids', 'Animus', 'Anomaly', 'Antics', 'Aria', 'Armageddon', 'Aspect', 'Assault', 'Asylum', 'Atom', 'Attitude', 'August', 'Aura', 'Aurora', 'Avenue', 'Awe', 'Axis', 'Babble', 'Baloney', 'Bane', 'Banquet', 'Banshee', 'Barrage', 'Beta', 'Bittersweet', 'Blaze', 'Bliss', 'Blitz', 'Blueprint', 'Bonanza', 'Boulevard', 'Brass', 'Bravado', 'Bribe', 'Brotherhood', 'Bug', 'Bullet', 'Buzz', 'Caliber', 'Camouflage', 'Cane', 'Canon', 'Caricature', 'Carnage', 'Cataclysm', 'Cavalry', 'Century', 'Chalk', 'Chaos', 'Charm', 'Chemistry', 'Chronicle', 'Cinder', 'Cipher', 'Circuit', 'Climax', 'Cloak', 'Clone', 'Code', 'Comet', 'Concord', 'Core', 'Courage', 'Creation', 'Creed', 'Crimson', 'Crisis', 'Critters', 'Crude', 'Cruise', 'Crumbs', 'Crunch', 'Crusade', 'Crux', 'Crypt', 'Cuddle', 'Cupid', 'Cyborg', 'Cycle', 'Cyclone', 'Darkness', 'Dawn', 'Daydream', 'Deceit', 'Decoy', 'Defiance', 'Delirious', 'Delirium', 'Deluge', 'Design', 'Destiny', 'Digital', 'Dilemma', 'Disguise', 'Distortion', 'Dodge', 'Dogma', 'Domain', 'Doubt', 'Dragons', 'Droid', 'Dusk', 'Dynamics', 'Dynamite', 'Echo', 'Ecstasy', 'Effigy', 'Ember', 'Embers', 'Embrace', 'Emissary', 'Empathy', 'Empire', 'Enigma', 'Entity', 'Envoy', 'Envy', 'Eos', 'Epilogue', 'Epoch', 'Era', 'Error', 'Essence', 'Eternity', 'Ethic', 'Euphony', 'Euphoria', 'Euphoric', 'Exclamation', 'Exiles', 'Fable', 'Factory', 'Faith', 'Fallout', 'Fate', 'Feedback', 'Feint', 'Fever', 'Fiction', 'Firm', 'Flashback', 'Flow', 'Fluke', 'Flux', 'Folly', 'Forge', 'Fortitude', 'Fortune', 'Fraud', 'Freaks', 'Frenzy', 'Fury', 'Fuse', 'Fuss', 'Gadget', 'Game', 'Garbage', 'Genesis', 'Germ', 'Gesture', 'Gimmick', 'Gizmo', 'Glamour', 'Glee', 'Glitch', 'Gloom', 'Glory', 'Gore', 'Gossip', 'Grapevine', 'Gravity', 'Greed', 'Grid', 'Grit', 'Grudge', 'Guess', 'Guest', 'Habit', 'Hallow', 'Haunt', 'Haven', 'Havoc', 'Hazard', 'Helix', 'Hitch', 'Hive', 'Hoax', 'Hollow', 'Honor', 'Hustle', 'Hyper', 'Hysteria', 'Icon', 'Impulse', 'Inception', 'Infancy', 'Inferno', 'Infinity', 'Influx', 'Insomnia', 'Invasion', 'Ire', 'Iron', 'Ironbound', 'Ironclad', 'Itch', 'Ivory', 'Jackpot', 'Jade', 'Jam', 'Jeopardy', 'Jive', 'Joy', 'Juice', 'Jupiter', 'Karma', 'Kayo', 'Knockout', 'Kudos', 'Labyrinth', 'Lava', 'Law', 'Legacy', 'Legend', 'Legion', 'Liberty', 'Lore', 'Luck', 'Lunacy', 'Lure', 'Mad', 'Magic', 'Magma', 'Magnets', 'Malady', 'Malice', 'Mania', 'Marble', 'Mars', 'Marvel', 'Mayhem', 'Maze', 'Melody', 'Memo', 'Menace', 'Mercury', 'Merit', 'Messenger', 'Metaphor', 'Method', 'Milestone', 'Minion', 'Minister', 'Miracle', 'Mirth', 'Mode', 'Mood', 'Motion', 'Moxie', 'Mutant', 'Mutiny', 'Myriad', 'Mystery', 'Myth', 'Nada', 'Naught', 'Nemo', 'Neptune', 'Nerve', 'Nether', 'Network', 'Nexus', 'Nightmare', 'Nostalgia', 'Nuclear', 'Oblivion', 'Obsidian', 'Ode', 'Omega', 'Oracle', 'Orbit', 'Overdose', 'Overkill', 'Pantheon', 'Parable', 'Paradise', 'Paradox', 'Parallel', 'Paranoid', 'Parody', 'Particle', 'Passion', 'Patience', 'Perception', 'Peril', 'Phantasm', 'Phantom', 'Phase', 'Phobia', 'Phoenix', 'Phonic', 'Pickle', 'Placebo', 'Plague', 'Plasma', 'Pluto', 'Prequel', 'Prime', 'Privilege', 'Protest', 'Pulse', 'Puppets', 'Pyrexia', 'Question', 'Quirk', 'Radical', 'Rage', 'Raid', 'Rain', 'Rainbow', 'Rapture', 'Rascal', 'Razor', 'Realm', 'Rebound', 'Recipe', 'Refuge', 'Refugee', 'Renegade', 'Residue', 'Reverse', 'Revolution', 'Rhyme', 'Rhythm', 'Riddle', 'Riddles', 'Riot', 'Rival', 'Rogue', 'Rouge', 'Routine', 'Royal', 'Rumble', 'Ruse', 'Rush', 'Rustic', 'Saga', 'Salvo', 'Sapphire', 'Sass', 'Satire', 'Saturn', 'Savage', 'Scent', 'Scrap', 'Sequel', 'Sequence', 'Serenity', 'Shenanigan', 'Shout', 'Silver', 'Siren', 'Sketch', 'Slice', 'Slug', 'Smash', 'Snuggle', 'Solitary', 'Spectacle', 'Sphinx', 'Spice', 'Spirit', 'Spite', 'Spoof', 'Spunk', 'Static', 'Storm', 'Strife', 'Strike', 'Summon', 'Sundry', 'Sunset', 'Surge', 'Surplus', 'Syndicate', 'Syndrome', 'TNT', 'Talisman', 'Temper', 'Tempest', 'Theory', 'Thesis', 'Thingamajig', 'Thunder', 'Tide', 'Timber', 'Time', 'Titan', 'Today', 'Torrent', 'Tragedy', 'Tranquility', 'Trauma', 'Trial', 'Tribute', 'Trilogy', 'Trinity', 'Triumph', 'Trouble', 'Truth', 'Turbulence', 'Turmoil', 'Twilight', 'Twist', 'Unity', 'Urgency', 'Utopia', 'Valor', 'Vanilla', 'Velvet', 'Venom', 'Vibe', 'Virtue', 'Virtuoso', 'Vision', 'Void', 'Volley', 'Voyage', 'Whip', 'Whistle', 'Wish', 'Wraith', 'Wreckage', 'Wrinkle', 'Zion', 'Zombies'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      names = `${names1[rnd]} ${names2[rnd2]}`;
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * names5.length);
      names = names5[rnd];
    } else {
      rnd = Math.floor(Math.random() * names3.length);
      rnd2 = Math.floor(Math.random() * names4.length);
      names = `${names3[rnd]} of ${names4[rnd2]}`;
    }
    return names;
  }
}
