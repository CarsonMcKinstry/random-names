export default function usernames() {
    let names: string;
    let rnd;
    let rnd2;
    const names1 = [
        'Pixelephant',
        'Ninjavu',
        'Pignorant',
        'Plazy',
        'Pandaily',
        'Tweetail',
        'Coillness',
        'Evillan',
        'Lazyhazy',
        'Sniperil',
        'Accentaur',
        'Aggrobot',
        'Alfairy',
        'Alpaking',
        'Alphairy',
        'Alphantom',
        'Amighost',
        'Amigod',
        'Amigoliath',
        'Annaconda',
        'Antelopez',
        'Antiger',
        'Apeshifter',
        'Apexecutioner',
        'Aquasp',
        'ArchLizard',
        'Armydillo',
        'Aromaster',
        'Asprince',
        'Asprincess',
        'Autoad',
        'Babeast',
        'Baboom',
        'Babuccaneer',
        'Bachelord',
        'Baconjurer',
        'Baconqueror',
        'Badept',
        'Badgericho',
        'Bambinosaur',
        'Bambooccaneer',
        'Bamboozle',
        'Banditch',
        'Banditto',
        'Bandroid',
        'Bansheep',
        'Barnaclue',
        'Baroqueen',
        'Barracupid',
        'Barrycuda',
        'Basalamander',
        'Bassassin',
        'Basshopper',
        'BearCrawl',
        'BearGills',
        'Bearry',
        'BeastLee',
        'Beastern',
        'Beauty-Rex',
        'Beezenees',
        'Behemote',
        'Binghost',
        'Bingoblin',
        'Bingod',
        'Bingoddess',
        'Bingoliath',
        'Blazebra',
        'Bluffalo',
        'Boaris',
        'Bombeast',
        'Bonghost',
        'Bongoliath',
        'Bonsiren',
        'Boohooligan',
        'Brassassin',
        'Brasshopper',
        'Broncoco',
        'Brutea',
        'Brutee-Rex',
        'BuffaLou',
        'Buffaloris',
        'Bullfrogert',
        'BumbleBeast',
        'BumbleBeetle',
        'BumblingBee',
        'BunBunny',
        'Butcherry',
        'Butterflight',
        'Butterflux',
        'C-Horse',
        'C-Lion',
        'Calamarauder',
        'Camella',
        'Camperor',
        'Candroid',
        'Capeshifter',
        'Caribooboo',
        'Cariboohoo',
        'Caterpixie',
        'Caterpolaris',
        'Catnip',
        'Celestiger',
        'Centaura',
        'Centaurora',
        'Champeon',
        'Cheatah',
        'Chieftaint',
        'Chimpanther',
        'Chimpantzer',
        'Chimpanzer',
        'Chimpanzy',
        'Chinchillax',
        'Chinchilling',
        'Chipmunkey',
        'Chosenpai',
        'Cicadaemon',
        'Cinnamonster',
        'Civillain',
        'Classhopper',
        'Cloverlord',
        'Cloverseer',
        'Coalossus',
        'Cobrag',
        'Cobrass',
        'Cobrawl',
        'Cocowboy',
        'Cocowgirl',
        'Colossubs',
        'Commandrogenic',
        'Commandroid',
        'Conjursa',
        'Conquerogue',
        'Conquerry',
        'Consoldier',
        'Consoul',
        'Controll',
        'Corsairier',
        'Corsairway',
        'Cougarfield',
        'Cougarry',
        'Cowhale',
        'Coyotea',
        'Coyoteerex',
        'Creaturret',
        'Crickettle',
        'Criminail',
        'Critturtle',
        'Croccultist',
        'Crocodino',
        'Crocodoom',
        'Crocodoris',
        'Cubeast',
        'Cyaninja',
        'Cybora',
        'Cybork',
        'Cyborne',
        'Cycloth',
        'Daemonk',
        'Daemonkey',
        'Daemonster',
        'Decorsair',
        'Delhiminate',
        'Demonkey',
        'Demonster',
        'Devile',
        'Devillain',
        'Dimwitch',
        'Dingoal',
        'Dingopher',
        'Dinomite',
        'Dinosause',
        'Dinoscythe',
        'Dinosoaring',
        'Dismage',
        'Dismaiden',
        'Dismister',
        'Diwrecktor',
        'Dolphine',
        'Dolphinkle',
        'Domignome',
        'DonKiwi',
        'Donkeychain',
        'Draccoon',
        'Dragonflight',
        'Dragonightmare',
        'Drummingbird',
        'Duelf',
        'Duskunk',
        'Dwarvo',
        'Dwarvos',
        'Eggcecutioner',
        'Elephantom',
        'Eliminature',
        'Eliminatured',
        'Emoo',
        'Emperoar',
        'Emprescue',
        'Emufasa',
        'Emufassa',
        'Emutant',
        'Enchantra',
        'Essaint',
        'Eurobot',
        'ExTermite',
        'Executie',
        'Eyewearwolf',
        'Falconartist',
        'Falcondor',
        'Falconjure',
        'Falconjurer',
        'Fearkat',
        'Fellama',
        'Festivalkyrie',
        'Fiendure',
        'Flaminghost',
        'Flamingoal',
        'Flamingoat',
        'Flamingopher',
        'Flexecutioner',
        'Fowlee',
        'Frenchanter',
        'Froghurt',
        'Frostrich',
        'Fuguru',
        'Gamercenary',
        'Gamermaid',
        'Gamerman',
        'Gangstereo',
        'Gangsteroids',
        'Geckoco',
        'Geishadow',
        'Gerbilbo',
        'Ghostrich',
        'GiantPandaisy',
        'GiantPandame',
        'GiantPandamonium',
        'Giantics',
        'Gibbonbon',
        'Gigangster',
        'Giraffiki',
        'Giraffle',
        'Gladiablo',
        'Glamorc',
        'Glasshopper',
        'Globster',
        'Gnunou',
        'Goath',
        'Gobling',
        'Goghost',
        'Goliatlas',
        'Gooze',
        'Gopherrel',
        'Gorillala',
        'Gorillamp',
        'Gorillax',
        'Gorrilag',
        'Gorrilava',
        'Grammarauder',
        'Grampaladin',
        'Grapeshifter',
        'Grasshiphopper',
        'Griffinish',
        'Griffinished',
        'Griffinite',
        'Griffinkle',
        'Griminal',
        'Grincubus',
        'Gringoblin',
        'Gringoliath',
        'GuacaMole',
        'GuineaPiggy',
        'GuineaPiglet',
        'Guruse',
        'Hamsteroids',
        'Harlequill',
        'Havoccultist',
        'Hawkeye',
        'Hawkward',
        'Hedgehawk',
        'Hedgehoax',
        'Hedgehog',
        'Hedgehogger',
        'Herobot',
        'Herogue',
        'Herose',
        'Herover',
        'Herringmaster',
        'Hexecutioner',
        'Hijackal',
        'Hippolice',
        'Hippony',
        'Hippopotamouse',
        'Hitmanatee',
        'Hitmantis',
        'Hobogre',
        'HoneyBeetle',
        'HoneyBeezenees',
        'Hornettle',
        'Hoverlord',
        'Hydroid',
        'Hydrone',
        'Hyenada',
        'Hyenanana',
        'Hypnotastic',
        'Hypnotwist',
        'Hypogre',
        'Ibiscuit',
        'Ibiscus',
        'Iconjurer',
        'Impaladin',
        'Incubugs',
        'Incubuzz',
        'Indighost',
        'Indigoliath',
        'Infergnome',
        'Jackalf',
        'Jaguardo',
        'Jaguwar',
        'Jalapegnome',
        'Javampire',
        'Jellyfists',
        'Jollygator',
        'Judgenie',
        'Judgerm',
        'Kangaroar',
        'Kangaroodle',
        'Kangarookie',
        'Kappaladin',
        'Karmagician',
        'Kegnome',
        'Kimognome',
        'Knightclub',
        'Knighthawk',
        'Knightingale',
        'Knightlife',
        'Knightmare',
        'Knightshade',
        'Knighttime',
        'Koalala',
        'Koalarry',
        'Koalassy',
        'Koalava',
        'KomodoreDragon',
        'Komodough',
        'Komodozer',
        'Lamagician',
        'Lamaster',
        'Laserpent',
        'Lassassin',
        'Latignome',
        'Lavampire',
        'Lemonster',
        'Lemurmur',
        'Leopardon',
        'Leoparty',
        'Leprecocoa',
        'Leprecorn',
        'Leviatank',
        'Liquidathor',
        'Liquidatorus',
        'Llamaths',
        'Lobsteroid',
        'Lobsteroids',
        'Lockroach',
        'Locustard',
        'Loghost',
        'Macaward',
        'Madept',
        'Magmaster',
        'Magpiechart',
        'MammothMoth',
        'Manateerex',
        'Manghost',
        'Mantissue',
        'Marauderby',
        'Masteroid',
        'MatriarchAngel',
        'MatriarchMage',
        'Mavericksha',
        'Maybeast',
        'Meerkatnip',
        'Megangster',
        'Metrobot',
        'Minerd',
        'Misteroid',
        'Mobsteroid',
        'Mobsteroids',
        'Mockroach',
        'Monkeyno',
        'Monkiwi',
        'Mosquiche',
        'Mosquitar',
        'Mosquite',
        'Mosquitoxic',
        'Muskunk',
        'Mutantra',
        'Napaladin',
        'Ninja',
        'Ninjafar',
        'Ninjava',
        'Nitrobot',
        'Nitrogue',
        'Nitrover',
        'Nitwitch',
        'Numbat',
        'Ocelotus',
        'Octopirate',
        'Octopixy',
        'Octopuds',
        'Octopuppy',
        'Ogremlin',
        'Omegangster',
        'Omenforcer',
        'Orangutangle',
        'Orangutango',
        'Orangutank',
        'Orangutitan',
        'Origamister',
        'Ostricheyrich',
        'Ostritches',
        'Otterminate',
        'Otterror',
        'Ownerd',
        'OysterSauce',
        'Oysterminate',
        'Oystrich',
        'Paladino',
        'Pandaisy',
        'Pandame',
        'Pandamonium',
        'Pandata',
        'Panthermal',
        'Panthermic',
        'Paparazzombie',
        'Parascythe',
        'Parasike',
        'Parasyclops',
        'Parrotting',
        'PatriachAngel',
        'PatriarchMage',
        'Patrio',
        'Patriode',
        'Patroll',
        'Peafowlet',
        'Pedroid',
        'Pelgriminal',
        'Pelgrimp',
        'Pelicancan',
        'Pelicandy',
        'Pelicanine',
        'Pelicannon',
        'Penguinee',
        'Phantomahawk',
        'Phantomato',
        'Phantomb',
        'Phantomboy',
        'Phantomcat',
        'Phantomfool',
        'Pheasantics',
        'Phoenexus',
        'Phoenixia',
        'Piagnome',
        'Pigloo',
        'Pignite',
        'Pillagerman',
        'Pionearly',
        'Pitapatriot',
        'Pixelf',
        'Pixigh',
        'Poltergeisha',
        'Ponylon',
        'Ponymph',
        'Porcupid',
        'Porcupie',
        'Porcupike',
        'Porcupint',
        'Porcupity',
        'Porcupixel',
        'Porpoison',
        'Potatoad',
        'Preaster',
        'Prepatriarch',
        'Priestar',
        'Priestyle',
        'Proccultist',
        'Proctopus',
        'Pupillager',
        'Pygmeanie',
        'Pyrobot',
        'Pyrogre',
        'Pyrogue',
        'Quailment',
        'Rabbite',
        'Rabbyte',
        'Rangerman',
        'Raptortilla',
        'Raptortoise',
        'Rascalf',
        'Rebelf',
        'Reconjurer',
        'Recyclops',
        'RedHerring',
        'RedPandaisy',
        'RedPandame',
        'Rerunner',
        'Rerunt',
        'Retrobot',
        'Retrogue',
        'Revenano',
        'Rhignome',
        'Rhinocerious',
        'Rhinosaur',
        'Rivalkyrie',
        'Robottom',
        'Roguerrilla',
        'Roverlord',
        'Roverseer',
        'Sailorc',
        'Sailord',
        'Sailore',
        'Sailoreal',
        'Saladiator',
        'Salamaniac',
        'Salamantis',
        'Salmonkey',
        'Salmonster',
        'Samuraider',
        'Sardiner',
        'Sasquire',
        'Sassassin',
        'Scampirate',
        'Scarabyte',
        'Scentaur',
        'Scorpeon',
        'Scraptor',
        'SeaLionness',
        'Sealectric',
        'Sealite',
        'Sealixir',
        'Sellamander',
        'Sewarlock',
        'Irrelephant',
        'Sha-Doh',
        'Shadept',
        'Sharcade',
        'Sharctic',
        'Sheeple',
        'Sincubus',
        'Sirenforcer',
        'Sirental',
        'Sitcommander',
        'Slayerk',
        'Slother',
        'Slotherworld',
        'Slotherworldly',
        'SnailMail',
        'Snailment',
        'Snakebab',
        'Sniperipheral',
        'Sniperks',
        'Sniperv',
        'Snowmanta',
        'Snowmantis',
        'Sockroach',
        'Soyster',
        'Spaladin',
        'Sparasite',
        'Sparrowling',
        'Specterminate',
        'Spiderby',
        'Spillager',
        'Spookworm',
        'Spreest',
        'Spright',
        'Squidiot',
        'Squidle',
        'Squidol',
        'Starfishht',
        'Starfissure',
        'Starfist',
        'Stenchanter',
        'StingRaymond',
        'Stingraider',
        'StingrayCharles',
        'Stinkbuggy',
        'Stoutlaw',
        'Succubusted',
        'Sukiyaking',
        'Sultank',
        'Sultantrum',
        'Sumogre',
        'Sundaemon',
        'Sunraider',
        'SwallowRider',
        'Tabooccaneer',
        'Tabutcher',
        'Tangoddess',
        'Techgnome',
        'Teriyaking',
        'Termight',
        'Termime',
        'Termitis',
        'Thortoise',
        'Titank',
        'Tomatoad',
        'Totemperor',
        'Totemplar',
        'Toucancan',
        'Toucandy',
        'Toucane',
        'Toucannon',
        'Toucanoe',
        'Tourtoise',
        'Trollout',
        'Troutlaw',
        'Troutwards',
        'Tsardine',
        'Turbandit',
        'Turbanshee',
        'Turbogre',
        'Turkiwi',
        'Twilightingale',
        'Typogre',
        'Unbandit',
        'Unbanshee',
        'Uniqueen',
        'Urchinchilla',
        'Valord',
        'Vanillama',
        'Vertighost',
        'Victorc',
        'Videogre',
        'Vikingkong',
        'Vikingpin',
        'Vipersia',
        'Volcagnome',
        'Vulturret',
        'Wahooligan',
        'Wallaby',
        'Walruse',
        'Warachnid',
        'Warhawk',
        'Warlocket',
        'Warthawk',
        'Waspear',
        'Weaselfie',
        'Wenchanter',
        'Wincubus',
        'Windighost',
        'Witchy',
        'Wizart',
        'Wolferal',
        'Wolfire',
        'Wolveriot',
        'Wolverival',
        'Wombait',
        'Wombattalion',
        'Wombattle',
        'Womblast',
        'Woodpecan',
        'Woodpecs',
        'Wrathhawk',
        'Wrathhog',
        'Yahooligan',
        'Yakar',
        'Yetea',
        'Zebrag',
        'Zebrass',
        'Zebrawl',
        'Zerobot',
    ];
    const names2 = [
        'Acrobatic',
        'Acting',
        'Action',
        'Active',
        'Adorable',
        'Advice',
        'Advise',
        'Afternoon',
        'Agile',
        'Air',
        'Alien',
        'Amazing',
        'Amused',
        'Amusing',
        'Ancient',
        'Angel',
        'Angelic',
        'Anger',
        'Angry',
        'Antique',
        'Aqua',
        'Arch',
        'Arctic',
        'Artistic',
        'Ash',
        'Asking',
        'Attack',
        'Attractive',
        'Aunt',
        'Authority',
        'Autumn',
        'Awesome',
        'Awful',
        'Awkward',
        'Baby',
        'Bad',
        'Baking',
        'Balance',
        'Balloon',
        'Bath',
        'Battle',
        'Beautiful',
        'Bed',
        'Big',
        'BigBad',
        'Bitter',
        'Black',
        'Blade',
        'Bland',
        'Blind',
        'Blood',
        'Blue',
        'Blushing',
        'Bold',
        'Bony',
        'Bouncing',
        'Bouncy',
        'Box',
        'Brave',
        'Breakfast',
        'Bright',
        'Broken',
        'Bronze',
        'Brother',
        'Brown',
        'Bruised',
        'Brutish',
        'Bubble',
        'Bubbly',
        'Calm',
        'Candid',
        'Candy',
        'Cannon',
        'Careful',
        'Careless',
        'Caring',
        'Chain',
        'Change',
        'Charge',
        'Charming',
        'Cheap',
        'Cheat',
        'Cheating',
        'Cheerful',
        'Cheery',
        'Chief',
        'Chill',
        'Chilly',
        'Classic',
        'Clean',
        'Clever',
        'Club',
        'Clueless',
        'Clumsy',
        'Coach',
        'Cold',
        'Color',
        'Colorful',
        'Complex',
        'Computer',
        'Confused',
        'Consult',
        'Control',
        'Cooking',
        'Cool',
        'Copper',
        'Corny',
        'Corrupt',
        'Country',
        'Covert',
        'Crafty',
        'Crash',
        'Crazy',
        'Creative',
        'Creepy',
        'Criminal',
        'Crooked',
        'Crown',
        'Cruel',
        'Cuddly',
        'Curly',
        'Cute',
        'Dance',
        'Dancing',
        'Dapper',
        'Dark',
        'Darling',
        'Daughter',
        'Daydream',
        'Dazzling',
        'Dead',
        'Death',
        'Defiant',
        'Delirious',
        'Desert',
        'Design',
        'Diet',
        'Digital',
        'Dim',
        'Dinner',
        'Dirty',
        'Discrete',
        'Dizzy',
        'Doctor',
        'Doom',
        'Dopey',
        'Dream',
        'Droopy',
        'Dust',
        'Eager',
        'Ecstatic',
        'Elder',
        'Electric',
        'Elegant',
        'Embarrased',
        'Emotional',
        'Enchanted',
        'Enchanting',
        'Enormous',
        'Enraged',
        'Euphoric',
        'Evening',
        'Evil',
        'Excited',
        'Exotic',
        'Expert',
        'Fabulous',
        'Fact',
        'Fake',
        'False',
        'Family',
        'Famous',
        'Fancy',
        'Fantastic',
        'Farm',
        'Fast',
        'Fat',
        'Father',
        'Fearless',
        'Feisty',
        'Fickle',
        'Fiery',
        'Filthy',
        'Fire',
        'First',
        'Flamboyant',
        'Flame',
        'Flashy',
        'Flawless',
        'Flimsy',
        'Fluffy',
        'Foolish',
        'Force',
        'Forest',
        'Formal',
        'Forsaken',
        'Free',
        'Fresh',
        'Friendly',
        'Frightened',
        'Frightening',
        'Frizzy',
        'Frosty',
        'Frozen',
        'Fruit',
        'Funny',
        'Fur',
        'Furry',
        'Fuzzy',
        'Game',
        'Gamer',
        'Gaming',
        'Garden',
        'Gentle',
        'Ghost',
        'Giant',
        'Gifted',
        'Glamorous',
        'Glass',
        'Glittering',
        'Gloomy',
        'Glorious',
        'Golden',
        'Good',
        'Gorgeous',
        'Gothic',
        'Graceful',
        'Gracious',
        'Grand',
        'Grass',
        'Grave',
        'Gray',
        'Great',
        'Greedy',
        'Green',
        'Grim',
        'Grizzly',
        'Ground',
        'Grumpy',
        'Gummy',
        'Hairy',
        'Hammer',
        'Handsome',
        'Happy',
        'Harmless',
        'Harsh',
        'Haunted',
        'Haunting',
        'Healthy',
        'Heart',
        'Heavy',
        'Helpful',
        'Hidden',
        'Hilarious',
        'History',
        'Hollow',
        'Home',
        'Honest',
        'Honor',
        'Hope',
        'Horrible',
        'Huge',
        'Hugging',
        'Humble',
        'Humor',
        'Hungry',
        'Icky',
        'Icy',
        'Identical',
        'Idiotic',
        'Idle',
        'Illegal',
        'Imaginary',
        'Impossible',
        'Impulse',
        'Incredible',
        'Infamous',
        'Infernal',
        'Innocent',
        'Insecure',
        'Intelligent',
        'Iron',
        'Island',
        'Jealous',
        'Jelly',
        'Joke',
        'Jolly',
        'Journey',
        'Jumbo',
        'Jungle',
        'Junior',
        'Keyboard',
        'Kind',
        'Kissy',
        'Knowledge',
        'Lake',
        'Land',
        'Laser',
        'Laughing',
        'Lazy',
        'Light',
        'Lightning',
        'Liquid',
        'Little',
        'Lone',
        'Lonely',
        'Lost',
        'Loud',
        'Lovable',
        'Love',
        'Loyal',
        'Lucky',
        'Lunch',
        'Mad',
        'Magic',
        'Magical',
        'Magma',
        'Majestic',
        'Marble',
        'Marsh',
        'Masked',
        'Mean',
        'Mega',
        'Mellow',
        'Memory',
        'Merry',
        'Messy',
        'Midnight',
        'Mild',
        'Mimic',
        'Mini',
        'Money',
        'Morning',
        'Mother',
        'Mountain',
        'Mud',
        'Mushy',
        'Music',
        'Musical',
        'Mysterious',
        'Mystery',
        'Naive',
        'Naughty',
        'Needy',
        'Nervous',
        'Night',
        'Nightmare',
        'Nimble',
        'Ninja',
        'Nutty',
        'Obvious',
        'Ocean',
        'Odd',
        'Old',
        'Opinion',
        'Orange',
        'Ordinary',
        'Original',
        'Pale',
        'Paper',
        'Parallel',
        'Party',
        'Peace',
        'Peaceful',
        'Perfect',
        'Perfumed',
        'Perky',
        'Pesky',
        'Phantom',
        'Phony',
        'Pink',
        'Plastic',
        'Play',
        'Playful',
        'Plush',
        'Poison',
        'Polite',
        'Poor',
        'Posh',
        'Positive',
        'Pretty',
        'Prime',
        'Prison',
        'Proud',
        'Puny',
        'Pure',
        'Quick',
        'Quiet',
        'Quirky',
        'Radioactive',
        'Rain',
        'Rapid',
        'Rare',
        'Reckless',
        'Record',
        'Recording',
        'Red',
        'Respect',
        'Rhythm',
        'Rich',
        'Riddle',
        'River',
        'Road',
        'Rock',
        'Room',
        'Rotten',
        'Royal',
        'Rude',
        'Rusty',
        'Sad',
        'Sand',
        'Scared',
        'Scary',
        'Scented',
        'School',
        'Science',
        'Sea',
        'Secret',
        'Selfish',
        'Serene',
        'Shadow',
        'Shady',
        'Shallow',
        'Shiny',
        'Short',
        'Show',
        'Shy',
        'Silent',
        'Silk',
        'Silly',
        'Silver',
        'Simple',
        'Sister',
        'Sleep',
        'Sleeping',
        'Sleepy',
        'Slow',
        'Small',
        'Smart',
        'Smiling',
        'Smooth',
        'Smug',
        'Sneaky',
        'Snow',
        'Soft',
        'Son',
        'Song',
        'Sour',
        'Spooky',
        'Spotless',
        'Spotted',
        'Spring',
        'Stark',
        'Steam',
        'Steel',
        'Storm',
        'Strange',
        'Strong',
        'Stylish',
        'Subtle',
        'Sugar',
        'Summer',
        'Surprise',
        'Swamp',
        'Swift',
        'Tall',
        'Terrific',
        'Throne',
        'Thunder',
        'Time',
        'Tiny',
        'Tired',
        'Trained',
        'Travel',
        'Troubled',
        'Trusty',
        'Twin',
        'Ugly',
        'Uncle',
        'Unique',
        'Unusual',
        'Upset',
        'Vague',
        'Vain',
        'Venom',
        'Vicious',
        'Violent',
        'Violet',
        'Virtual',
        'Volcano',
        'Voyage',
        'War',
        'Water',
        'Wax',
        'Weird',
        'White',
        'Wiggly',
        'Wild',
        'Wind',
        'Winter',
        'Wise',
        'Witty',
        'Worthy',
        'Writer',
        'Writing',
        'Wrong',
        'Yellow',
        'Young',
    ];
    const names3 = [
        'Albatross',
        'Alien',
        'Alligator',
        'Almond',
        'Alpaca',
        'Android',
        'Angel',
        'Ant',
        'Antelope',
        'Ape',
        'Apple',
        'Apricot',
        'Armadillo',
        'Arrow',
        'Assassin',
        'Avocado',
        'Baboon',
        'Baby',
        'Badger',
        'Ball',
        'Banana',
        'Bandit',
        'Banshee',
        'Barracuda',
        'Bat',
        'Bear',
        'Beaver',
        'Bee',
        'Beetle',
        'Berry',
        'Birdie',
        'Bison',
        'Blackberry',
        'Blizzard',
        'BloodElf',
        'Blossom',
        'Blueberry',
        'Boar',
        'Boomer',
        'Bot',
        'Boulder',
        'Boy',
        'Bronco',
        'Brownie',
        'Bruiser',
        'Buffalo',
        'Bug',
        'Bull',
        'Bullet',
        'Bullfrog',
        'Buster',
        'Butterfly',
        'Cake',
        'Calf',
        'Camel',
        'Candy',
        'Captain',
        'Caribou',
        'Cat',
        'Caterpillar',
        'Centaur',
        'Champ',
        'Champion',
        'Charger',
        'Cheetah',
        'Cherry',
        'Chick',
        'Chicken',
        'Chief',
        'Chimera',
        'Chimp',
        'Chimpanzee',
        'Chomper',
        'Clam',
        'Cobra',
        'Coconut',
        'Cod',
        'Coffee',
        'Colonel',
        'Colt',
        'Conqueror',
        'Cookie',
        'Cow',
        'Coyote',
        'Cranberry',
        'Crane',
        'Crocodile',
        'Crow',
        'Cruncher',
        'Crusader',
        'Cub',
        'Custard',
        'Cyborg',
        'Cyclops',
        'Daemon',
        'Deer',
        'Defender',
        'Demon',
        'Dessert',
        'Devil',
        'Dino',
        'Dinosaur',
        'Diva',
        'Dog',
        'Doggy',
        'Dolphin',
        'Donkey',
        'Dots',
        'Doughnut',
        'Dove',
        'Dragon',
        'Dragonfly',
        'Drake',
        'Droid',
        'Drummer',
        'Duck',
        'Duckling',
        'Duke',
        'Dunker',
        'Dutchess',
        'Dwarf',
        'Eagle',
        'Eel',
        'Eland',
        'Elephant',
        'Elf',
        'Emu',
        'Enigma',
        'Fairy',
        'Falcon',
        'Fawn',
        'Fay',
        'Ferret',
        'Fiend',
        'Fig',
        'Figure',
        'Fish',
        'Fishy',
        'Flamingo',
        'Flash',
        'Fledgling',
        'Flower',
        'Fly',
        'Foal',
        'Fortune',
        'Fowl',
        'Fox',
        'Frog',
        'Frogger',
        'Froglet',
        'Fry',
        'Furry',
        'Fury',
        'Gangster',
        'General',
        'Genie',
        'Gerbil',
        'Ghost',
        'Giant',
        'Giraffe',
        'Girl',
        'Gnoll',
        'Gnu',
        'Goat',
        'Goblin',
        'God',
        'Goddess',
        'Goldfish',
        'Goliath',
        'Goose',
        'Grape',
        'Grapefruit',
        'Grasshopper',
        'Griffin',
        'Grin',
        'Guardian',
        'GuineaPig',
        'Gull',
        'Guy',
        'Halfling',
        'Hamster',
        'Hare',
        'Harpy',
        'Hatchling',
        'Haunt',
        'Hawk',
        'Hazelnut',
        'Hedgehog',
        'Hero',
        'Heroine',
        'Herring',
        'Hippo',
        'Hobbit',
        'Hoglet',
        'Hooper',
        'Hopper',
        'Horse',
        'Hound',
        'Hummingbird',
        'Hunter',
        'Hurricane',
        'Hydra',
        'Hyena',
        'Ibis',
        'Idol',
        'Immortal',
        'Imp',
        'Incubus',
        'Infant',
        'Jackal',
        'Jaguar',
        'Jellyfish',
        'Judge',
        'Juniper',
        'Juvenile',
        'Kangaroo',
        'Khajiit',
        'King',
        'Kingfisher',
        'Kit',
        'Kitten',
        'Kitty',
        'Kiwi',
        'Knight',
        'Koala',
        'KomodoDragon',
        'Kraken',
        'Lady',
        'Lamb',
        'Lark',
        'Larva',
        'Leaf',
        'Leech',
        'Lemon',
        'Lemur',
        'Leopard',
        'Leprechaun',
        'Lice',
        'Lime',
        'Lion',
        'Lizard',
        'Llama',
        'Lobster',
        'Locust',
        'Lord',
        'Lynx',
        'Macaw',
        'Machine',
        'Mage',
        'Maggot',
        'Magician',
        'Magpie',
        'Maiden',
        'Mallard',
        'Mammoth',
        'Manatee',
        'Mandarin',
        'Mango',
        'Mantis',
        'Maple',
        'Maverick',
        'Meerkat',
        'Melon',
        'Mermaid',
        'Merman',
        'Minotaur',
        'Mite',
        'Mobster',
        'Mole',
        'Mongoose',
        'Monk',
        'Monkey',
        'Monster',
        'Moose',
        'Mosquito',
        'Mouse',
        'Mule',
        'Muppet',
        'Mutant',
        'Necromancer',
        'Nestling',
        'Newt',
        'NightElf',
        'Nightingale',
        'Ninja',
        'Nova',
        'Nugget',
        'Nut',
        'Nymph',
        'Oak',
        'Ocelot',
        'Octopus',
        'Ogre',
        'Okapi',
        'Olive',
        'Oracle',
        'Orange',
        'Orangutan',
        'Orc',
        'Ostrich',
        'Otter',
        'Owl',
        'Owlet',
        'Ox',
        'Oyster',
        'Paladin',
        'Palm',
        'Panda',
        'Panther',
        'Papaya',
        'Parrot',
        'Patriot',
        'Pattern',
        'Peafowl',
        'Peanut',
        'Pear',
        'Pecan',
        'Pegasus',
        'Pelican',
        'Penguin',
        'Pepper',
        'Petal',
        'Phantasm',
        'Phantom',
        'Pheasant',
        'Phoenix',
        'Pie',
        'Pig',
        'Pigeon',
        'Piggy',
        'Piglet',
        'Pineapple',
        'Pirate',
        'Pixie',
        'Plum',
        'Pony',
        'Porcupine',
        'Porpoise',
        'Potato',
        'Predator',
        'Priest',
        'Priestess',
        'Prince',
        'Princess',
        'Prophet',
        'Prowler',
        'Pug',
        'Puggle',
        'Pumpkin',
        'Pup',
        'Puppy',
        'Pygmy',
        'Python',
        'Quail',
        'Queen',
        'Rabbit',
        'Raccoon',
        'Raider',
        'Ram',
        'Ranger',
        'Raptor',
        'Rascal',
        'Raspberry',
        'Rat',
        'RedPanda',
        'Reindeer',
        'Revenant',
        'Rhino',
        'Rhinoceros',
        'Roach',
        'Robot',
        'Rock',
        'Rogue',
        'Rose',
        'Rover',
        'Runner',
        'Sage',
        'Sailor',
        'Saint',
        'Salamander',
        'Salmon',
        'Sardine',
        'Satyr',
        'Scorpion',
        'SeaLion',
        'SeaUrchin',
        'Seahorse',
        'Seal',
        'Seer',
        'Serpent',
        'Shade',
        'Shadow',
        'Shark',
        'Sheep',
        'Shifter',
        'Siren',
        'Skeleton',
        'Skunk',
        'Slider',
        'Slingshot',
        'Sloth',
        'Smile',
        'Smirk',
        'Snail',
        'Snake',
        'Snowman',
        'Soldier',
        'Soul',
        'Sparkle',
        'Sparks',
        'Sparrow',
        'Specter',
        'Sphinx',
        'Spider',
        'Spike',
        'Spirit',
        'Spook',
        'Sprite',
        'Squab',
        'Squid',
        'Squire',
        'Squirrel',
        'Stalker',
        'Starfish',
        'Stingray',
        'Stinkbug',
        'Stitches',
        'Stomper',
        'Stork',
        'Storm',
        'Strawbery',
        'Stripes',
        'Succubus',
        'Sunflower',
        'Swallow',
        'Swan',
        'T-Rex',
        'Tadpole',
        'Tauren',
        'Tea',
        'Techy',
        'Termite',
        'Terror',
        'Thief',
        'Thunder',
        'Tiger',
        'Titan',
        'Toad',
        'Toffee',
        'Tomato',
        'Tortoise',
        'Toucan',
        'Troll',
        'Trooper',
        'Trout',
        'Tucan',
        'Tulip',
        'Tumbler',
        'Turkey',
        'Turtle',
        'Twin',
        'Twinkle',
        'Twinkles',
        'Unicorn',
        'Urchin',
        'Valkyrie',
        'Vampire',
        'Vanilla',
        'Viking',
        'Villain',
        'Viper',
        'Void',
        'Vulture',
        'Walker',
        'Wallaby',
        'Walrus',
        'Warhawk',
        'Warhog',
        'Warlock',
        'Warrior',
        'Warthog',
        'Wasp',
        'Watermelon',
        'Weasel',
        'Werewolf',
        'Whale',
        'Whelp',
        'Willow',
        'Witch',
        'Wizard',
        'Wolf',
        'Wolverine',
        'Wombat',
        'Woodpecker',
        'Worm',
        'Wraith',
        'Wrecker',
        'Yak',
        'Yeti',
        'Yew',
        'Zebra',
        'Zombie',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 4) {
            rnd = Math.floor(Math.random() * names1.length);
            names = names1[rnd];
        } else {
            rnd = Math.floor(Math.random() * names2.length);
            rnd2 = Math.floor(Math.random() * names3.length);
            names = names2[rnd] + names3[rnd2];
        }
        return names;
    }
}
