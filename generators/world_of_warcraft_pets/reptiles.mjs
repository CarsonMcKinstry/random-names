export default function reptiles() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['ATuin', 'Abacuss', 'Abbashy', 'Abbe', 'Abbot', 'Abner', 'Abrak',
    'Abu', 'Admiral', 'Aikido', 'Akupara', 'Aldo', 'Alf', 'Amadeus', 'Amico',
    'Amigo', 'Amma', 'Apache', 'Aphrodite', 'Apo', 'Apollo', 'Apu',
    'Aquarius', 'Archie', 'Arkan', 'Armando', 'Arriba', 'Asimov', 'Attilla',
    'Augustus', 'Aura', 'Avalanche', 'Badges', 'Baffu', 'Bailey', 'Barney',
    'Basco', 'Bashful', 'Baxter', 'Beacon', 'Beanie', 'Beans', 'Bear',
    'Beavis', 'Ben', 'Bertus', 'Besyrwan', 'Bexter', 'Bhishma', 'BigMama',
    'Billie', 'Bingo', 'Bismarck', 'Bismark', 'Blanche', 'Blastoise',
    'Blossem', 'Blu', 'Bobert', 'Boggs', 'Boggy', 'Bojangles', 'Bomba',
    'Bono', 'Bonzo', 'Booker', 'Brock', 'Bronx', 'Brutus', 'Bryce', 'Bubba',
    'Bubbles', 'Buddy', 'Bumbles', 'Bumpkin', 'Cake', 'Calvin', 'Casey',
    'Cashew', 'Cecile', 'Chance', 'Chandler', 'Chantilly', 'Chaos', 'Chaplin',
    'Chaps', 'Charlie', 'Chaser', 'Checkers', 'Cheek', 'Cheerio', 'Cheese',
    'Chessnut', 'Chewie', 'Chukwa', 'Clancy', 'Clifford', 'Clyde', 'Comet',
    'Commander', 'Conan', 'Crush', 'Cujo', 'Cup', 'DaTank', 'Dante', 'Danu',
    'Dapper', 'Darwin', 'Dasher', 'Dazzle', 'Deacon', 'Decker', 'Dedra',
    'Delbert', 'Delores', 'Dimples', 'Dino', 'Dixie', 'Doc', 'Donatello',
    'Doodle', 'Doofus', 'Dory', 'Dude', 'Duncan', 'Echo', 'Eddie', 'Egbert',
    'Einstein', 'Elmer', 'Erconberht', 'Ernesto', 'Falcon', 'Fandango',
    'Fellow', 'Fergie', 'Fido', 'Filbert', 'Filibuster', 'Flash', 'Forrest',
    'Frankie', 'Franklin', 'Fred', 'Frog', 'Gadget', 'Galapagos', 'Galileo',
    'Gemini', 'George', 'Gidget', 'Giggles', 'Goofy', 'Granite', 'Grayson',
    'Gretta', 'Gus', 'Haggis', 'Hailie', 'Halfshell', 'Herbert', 'Herbie',
    'Hippy', 'Hobart', 'Hobbes', 'Honor', 'Hoss', 'Howie', 'Hubble', 'Hudson',
    'Hugo', 'IBite', 'Iggy', 'Ijapa', 'Ione', 'ItyBity', 'Izzy', 'Jackpot',
    'Jenna', 'Jessica', 'Jitterbug', 'Joeyson', 'Jose', 'Jukebox', 'Junior',
    'Justice', 'Kamiko', 'Kaufman', 'Kibbles', 'Kiko', 'KoopaTroopa', 'Kozmo',
    'Kritanta', 'Kurma', 'Laddie', 'Lancalot', 'Lancelot', 'Lassie',
    'Leonardo', 'Lightning', 'Lilly', 'Lizzy', 'Massika', 'Maturin', 'Maxx',
    'McDuff', 'Memphis', 'Mervin', 'Methoataske', 'Michelangelo', 'Milo',
    'Morla', 'MrTurtell', 'MrTutles', 'Muchies', 'Mudge', 'Murtle',
    'Murturtle', 'Myrtle', 'Mysty', 'Mzee', 'Navi', 'Nemo', 'Nibbles',
    'Nicole', 'Nimbus', 'Noris', 'Nugget', 'Nutmeg', 'Ohana', 'Olivia', 'Om',
    'Omega', 'Opa', 'Oscar', 'Otis', 'Ozzy', 'Pastachio', 'Pat', 'Peanut',
    'Pebbles', 'PeekaBoo', 'Peggy', 'Pepper', 'Percy', 'Peterina', 'Phantom',
    'Pistachio', 'Pluto', 'Pogo', 'Pokey', 'Prancer', 'Puck', 'Quaker',
    'Quicksilver', 'Quincy', 'Rainbow', 'Ramses', 'Raphael', 'Raven',
    'Reggie', 'Reno', 'Rinc', 'Roadkill', 'Rocco', 'Rocket', 'Rockey',
    'Rosko', 'Rufus', 'Ryan', 'Sahen', 'Sandy', 'Scead', 'Scooter', 'Scout',
    'Seamore', 'Sebastian', 'Shaka', 'Shelby', 'Sheldon', 'ShellShocked',
    'ShellShocker', 'Shellby', 'Shellie', 'Shelloholic', 'Shellton', 'Shelly',
    'Sherman', 'Shilo', 'Slowpoke', 'Snapper', 'Snappy', 'Sniper',
    'Snowflake', 'Softy', 'Sonny', 'Sophie', 'Soup', 'Sparky', 'Sparticus',
    'Speed', 'Speedster', 'Speedy', 'Spencer', 'Spret', 'Sprocket', 'Squirt',
    'Squirtle', 'Stretch', 'Stump', 'Stumpy', 'Susan', 'Swimmer', 'Tahoe',
    'Tank', 'Taz', 'Terkeles', 'Terri', 'Terry', 'Testudo', 'Thor', 'TinyTim',
    'Titana', 'Tito', 'Tmnt', 'Tokka', 'Tony', 'Tootsie', 'Tork', 'Tororo',
    'Torque', 'Tortelli', 'Tortuga', 'Travis', 'Trojan', 'Trooper', 'Tucker',
    'Turby', 'Turddy', 'Turdman', 'Turtle', 'Tyco', 'Tyrone', 'Tyson',
    'Velcro', 'Waddles', 'Wags', 'Waldorf', 'Walter', 'WarpSpeed',
    'Warturtle', 'Webster', 'Whisper', 'Wiggles', 'Wilhelmina', 'Willy',
    'Winnie', 'Wrigley', 'Yawney', 'Yertle'];
  const nm2 = ['Aboo', 'Akasha', 'Alasfan', 'Anubis', 'Apollo', 'Ariss', 'Asad',
    'Athena', 'BackStab', 'Birj', 'Blueberry', 'Boukra', 'Caligular',
    'CanOpener', 'Ceasar', 'Clack', 'Clackers', 'Claws', 'Comogues', 'Cupid',
    'Damis', 'Deathlash', 'Deca', 'Doomsting', 'Drpinchy', 'Dwayne',
    'Dwaynedouglas', 'Dwaynejohnson', 'ElPincho', 'Enkil', 'Exboyfriend',
    'Exgirlfriend', 'Fahesh', 'Fluffy', 'Frisky', 'FritoBandito', 'Gamal',
    'GeneralTsao', 'Gilgamesh', 'Girtab', 'Golgota', 'Gorkal', 'Grabandhold',
    'Grabby', 'Griper', 'Hathor', 'Hercules', 'Horoscope', 'Horrorscope',
    'ILikeToPinch', 'ILoveToGank', 'InYourShoes', 'Ipinchbutts',
    'Ipinchthings', 'Julius', 'King', 'Krellack', 'Lasher', 'Latif',
    'Leonidas', 'Licorice', 'Lucifer', 'Majeed', 'Manson', 'Marauder',
    'Mariachi', 'Meaty', 'Moco', 'Mohel', 'MrPinchy', 'Nautilus', 'Nero',
    'Nod', 'NotTheRock', 'Oddessy', 'Orionsbane', 'Orkin', 'Palpatine', 'Pea',
    'Peenchy', 'Pinchy', 'Pinpin', 'PlzDntSkinMe', 'Pmspatrol', 'PoisonBerry',
    'PoisonPie', 'Posionstrike', 'Queen', 'Riddick', 'Ringo', 'Sabah',
    'Sadek', 'Sarkoth', 'Scamper', 'Scorpidking', 'Scorpinok', 'Scorpio',
    'Scorpo', 'Scorps', 'Scorpsese', 'Scorpwnage', 'Scuttlebutt', 'Serket',
    'Seth', 'Skizzorhands', 'Skorupi', 'Snaps', 'Snuggles', 'Spanky', 'Spike',
    'Sting', 'Stingy', 'SubZero', 'Tater', 'Tex', 'Thor', 'Venom',
    'Venomclaw', 'Vicegrip', 'Virgo', 'Yabiss', 'Zeus', 'Zorom'];
  const nm3 = ['Acochtzint', 'Adamall', 'Aggro', 'Ahktar', 'Aituth', 'Akasha',
    'Akeyra', 'Al', 'Aldrea', 'AliG', 'Alice', 'AligatorAid', 'Aligatorade',
    'Allie', 'Allison', 'Allister', 'Ally', 'Alpo', 'Amatzin', 'Ambush',
    'Amenhotep', 'Amunet', 'Anippe', 'Anklebiter', 'Annihilator', 'Arbok',
    'Ardcheeth', 'Ariadnae', 'Ariluth', 'Arnie', 'Artur', 'Asnyoth', 'Athens',
    'Atzitlel', 'Ava', 'Ayolam', 'Azul', 'Badgerbadger', 'Baggage', 'Banana',
    'Barnabas', 'Beast', 'Beauty', 'Belka', 'Belt', 'Belyerath', 'Bender',
    'Bess', 'BigBoy', 'BillCrocksby', 'Biscuit', 'Blaine', 'Blit', 'Blizz',
    'Bloodjaw', 'Bloodmaw', 'Bloodymuzzle', 'BlueStreak', 'Bob', 'Boffo',
    'Bog', 'Boom', 'Boots', 'BrokeFang', 'Brokenfang', 'Bruce', 'Bubba',
    'Bubblegum', 'Buddy', 'Burt', 'Canibus', 'Carlos', 'Cauhtoctl', 'ChaCha',
    'Chewie', 'Chombo', 'Chomper', 'Chompers', 'Chopper', 'Chowder', 'Clancy',
    'Claw', 'Claws', 'Cleo', 'Cloriece', 'CobraCommander', 'Conan', 'Cooper',
    'Coral', 'Craig', 'Crapodile', 'Crikey', 'Crocky', 'Crocodilio',
    'Crocodude', 'Croconaw', 'Crunch', 'Crusher', 'Cuddles', 'Cutie',
    'CyaLater', 'Daggertooth', 'Daisy', 'Dakdor', 'Dakota', 'Damian', 'Damon',
    'Dangertalon', 'DareDevil', 'Darkfang', 'Darwin', 'DeathRoll', 'Deathjaw',
    'Deathmaw', 'Deathodile', 'Devastator', 'Devourer', 'Digger', 'Dilly',
    'Dino', 'Disaster', 'Doomjaw', 'Dopey', 'Draco', 'Dragar', 'Drago',
    'Drake', 'Dreamweaver', 'Drith', 'Dundee', 'Eachou', 'Earl', 'Eddie',
    'Eerreth', 'Ekans', 'Elaith', 'Elodth', 'Elurth', 'Elvis', 'Elwood',
    'Enyth', 'Ernie', 'Eryneth', 'Essia', 'Eve', 'Evra', 'Exboyfriend',
    'Exgirlfriend', 'FaceOff', 'Falcor', 'Featherbutt', 'Feraligatr',
    'Ferraligator', 'Fluffy', 'Foulmaw', 'Fred', 'GatorAid', 'Gatorade',
    'Gatoraid', 'Geico', 'Gladiator', 'Gloria', 'Grumpy', 'Gullet',
    'Gyarados', 'Hammer', 'Handbag', 'Hannibal', 'HarryPotter', 'Harshmaw',
    'Henry', 'Hera', 'Hiss', 'HissFit', 'Hissy', 'HissyFit', 'Hitlohtla',
    'Homer', 'Hoover', 'HunnyNut', 'Hunter', 'Hurcules', 'Husani',
    'Huutnuehl', 'Iggy', 'Igor', 'IronHide', 'Irwin', 'Isela', 'Isis', 'Issa',
    'Issus', 'Istral', 'Itzatzin', 'Ivan', 'Ixchel', 'Izzard', 'Jade',
    'Jafar', 'JakeJax', 'Jaws', 'Jibade', 'Kaa', 'Kakihara', 'Kali', 'Kasiya',
    'Keeneye', 'Khnum', 'KillerCroc', 'KingTut', 'Kingki', 'Kirby', 'Kisses',
    'Knot', 'Kraken', 'Krawk', 'Krikey', 'Kuddles', 'Lamia', 'Layla',
    'LeatherHead', 'Leevii', 'LemonPepper', 'Leonardo', 'Lerk', 'Lockjaw',
    'Lokki', 'Lollipop', 'Longbottom', 'Longfang', 'Lowground', 'Lucky',
    'Lucy', 'Lumpy', 'Lun', 'Maas', 'Madusa', 'MaiTai', 'Matilda', 'Maverick',
    'Max', 'Medusa', 'Merlin', 'Methos', 'Mikhail', 'Mini', 'Mitch',
    'Montique', 'Monty', 'Morgana', 'Mortimore', 'Moses', 'MsAnaconda',
    'Murklash', 'Murphy', 'Murray', 'Mushroom', 'Naeem', 'Naga', 'Nagendra',
    'Nagini', 'Nathen', 'Naunet', 'Nayth', 'Nefertiti', 'Neiko', 'Nephthys',
    'NewShoes', 'Nibbler', 'Nigel', 'NoImagination', 'Noodle', 'NotKaraAgain',
    'Nuba', 'Nubia', 'Odin', 'Okolo', 'Ollie', 'Ollyth', 'OnceBitten',
    'Oscar', 'Pandora', 'Panther', 'Pants', 'Peublo', 'Pink', 'Pinky',
    'Pippin', 'Pliskin', 'Pockets', 'Poloith', 'Posidion', 'Pray',
    'PrettyLights', 'Pretzel', 'Pretzyl', 'Purse', 'Quetzal', 'Quetzalcoatl',
    'Quetzinac', 'Quickfang', 'Quihtzin', 'Quinton', 'Ra', 'Raidonly',
    'Rainbow', 'Rajah', 'Red', 'RedSnappah', 'Render', 'Reptar', 'Reuben',
    'Rex', 'Ribbion', 'Rio', 'Ripjaw', 'Ripmaw', 'Ripper', 'Roarclaw',
    'Rodormuth', 'Roger', 'Romeo', 'Rose', 'Roswell', 'Ruban', 'Ruby',
    'Rufus', 'SSSSSam', 'Sage', 'Salmissra', 'Samedi', 'SammyTheSnake',
    'Sandy', 'Sapphire', 'Scales', 'Scarlett', 'Sereath', 'Serpentor',
    'Serpico', 'Severus', 'SeverusSnake', 'Seviper', 'Seymore', 'Shabaka',
    'Shady', 'Sharpeye', 'Sharptooth', 'Sheila', 'Sherman', 'Sheth', 'Shika',
    'SirHiss', 'Six', 'Sixpack', 'Sizzle', 'Skeeter', 'Slap', 'Slash',
    'Slinkster', 'Slinky', 'Slip', 'Slithers', 'Sliver', 'Slyder', 'Slyther',
    'Smiles', 'Smoo', 'Snake', 'Snakespeare', 'Snap', 'Snappah', 'Snaps',
    'Snickers', 'Snips', 'Snout', 'Snuggles', 'Sobek', 'Solomon', 'Sourscale',
    'Sparky', 'Sparkz', 'Spazz', 'Spike', 'Spits', 'Squirtgun', 'Squzzeser',
    'Star', 'Static', 'Steve', 'Stinkbreath', 'Stinkface', 'Storm', 'Streak',
    'Stryker', 'Subira', 'Suchos', 'Suitecase', 'Sun', 'Sunshine', 'Susan',
    'Suspiria', 'Swagodile', 'Swallowjaw', 'Sybil', 'Syther', 'TNT',
    'Tacklehorror', 'Tahotlac', 'Tangle', 'Tango', 'Tarzan', 'TeaBiscuit',
    'Tecaqui', 'Terminator', 'Terminus', 'Thanatos', 'TheBeast',
    'TheStrangler', 'Thor', 'Threat', 'Thunderaan', 'TickTock', 'Tilmatli',
    'Tiny', 'Tlecaxo', 'Toaster', 'Tokie', 'Tooth', 'Toothfang', 'Toothy',
    'Tootsie', 'Totodile', 'Trendi', 'Trinity', 'Trouser', 'Tsekani',
    'Tumaini', 'Turkish', 'TwiceShy', 'Tzitlatoc', 'Umbrux', 'Unger',
    'Untitled', 'Upir', 'Veneno', 'Ventus', 'Vittorio', 'Wallace', 'Wallet',
    'WallyGator', 'Whip', 'Whiskey', 'Willow', 'Xena', 'Xibalba', 'Yayo',
    'YellowTooth', 'Yig', 'Yuidenoth', 'Zack', 'Zaffle', 'Zakk', 'Zap',
    'ZapBrannigan', 'Zapdos', 'Zeke', 'Zero', 'Zeus', 'Ziggy', 'Zippy',
    'Zith', 'Zobique', 'Zoe', 'Zomglazers', 'Zuberi'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = nm1[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
