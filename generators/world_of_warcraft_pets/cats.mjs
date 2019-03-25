export default function cats() {
  let names;

  const nm1 = ['9lives', 'Abby', 'Abster', 'Aggy', 'Ajah', 'Ajax', 'Alex', 'Alexander', 'Alexi', 'Alfie', 'Alfonzo', 'Alicia', 'Allergies', 'Amber', 'Anger', 'Annabelle', 'Anxious', 'Areli', 'Arieh', 'Arisha', 'Arnie', 'Arnold', 'Artemis', 'Asad', 'Ashelia', 'Aslan', 'Astaroth', 'Astro', 'Athena', 'Audrey', 'Avonlea', 'Axe', 'Azurisz', 'Azurys', 'Azuryz', 'Baby', 'BadOLputyTAT', 'Bahir', 'Bailey', 'Bale', 'Bambino', 'Bandit', 'Bane', 'Barney', 'Bast', 'Bastet', 'Baylor', 'Bazal', 'Bear', 'Beastie', 'Beeker', 'Begals', 'Bella', 'Belphegor', 'Bengalore', 'Bengo', 'Benny', 'Benson', 'Bentclaw', 'Bephelgor', 'Bibbles', 'BigRedKitty', 'Bigglesworth', 'Bigon', 'Billabong', 'Biscuit', 'Bisyada', 'Blackfell', 'Bleach', 'Blitz', 'Bloodmaw', 'Bloodymuzzle', 'Blueberry', 'Boannan', 'Bob', 'BobbyBoucher', 'Bonnie', 'BooBerry', 'Boots', 'Boress', 'Brendan', 'Briarsting', 'BrightEyes', 'BrokeFang', 'Brokenfang', 'Browni', 'Brownie', 'Bruno', 'Bubba', 'Bubbles', 'Buckskin', 'Buckwheat', 'Buster', 'Butter', 'Buttercup', 'Caesar', 'Callie', 'Canihasa', 'Cappu', 'CaptainHook', 'Cara', 'Carissa', 'Caroline', 'Carolyn', 'Casey', 'CatTail', 'Cataklysm', 'Catastrophe', 'CatnipAdict', 'Cato', 'Certo', 'Chadwick', 'Chairmanmao', 'Chance', 'Charles', 'Charlie', 'Charly', 'Chase', 'Cheech', 'Cheeks', 'Cheerio', 'Cheezburger', 'Chesty', 'Chewy', 'Cheyanne', 'Chico', 'Chili', 'Chino', 'Chocolate', 'Chomper', 'Chong', 'ChooChooBear', 'Chosimba', 'Chubby', 'Clam', 'Claudia', 'Cleo', 'Cletis', 'Clicktooth', 'ClippedClaw', 'Cloe', 'Cloud', 'CoCo', 'ColourBall', 'Conglin', 'Cookie', 'Corey', 'Cosmo', 'Cotton', 'CremePuff', 'Cuddles', 'Cupcake', 'Cuppa', 'DJ', 'Daisy', 'Dakki', 'Dany', 'Daphne', 'Deathfang', 'Deathmaw', 'Delcatty', 'Delilah', 'Diamond', 'Diane', 'Dinky', 'DoNotPet', 'Dog', 'Dolly', 'Domino', 'Doomclaw', 'Dora', 'Doughnut', 'Dova', 'Dream', 'Dredd', 'Duke', 'Duma', 'Duncan', 'Duo', 'Dusty', 'Dynas', 'Echo', 'Eevee', 'Einstien', 'Elephant', 'Ella', 'Elmo', 'Emerald', 'Emerson', 'Emily', 'Emma', 'Emory', 'Endmund', 'Enya', 'Espeon', 'EverRoar', 'Evie', 'Fang', 'Fangs', 'Fanny', 'Fanteriso', 'Fany', 'Fastpaw', 'Fawn', 'Feetfirst', 'Felicity', 'Felina', 'Felix', 'Fidget', 'FishFinder', 'Flame', 'Flash', 'Fletcher', 'Flora', 'Floyd', 'Flubber', 'Fluffanutter', 'Fluffy', 'Flynn', 'Fortner', 'Foster', 'Franklin', 'Frannie', 'Fred', 'Friday', 'Frisky', 'Frodo', 'Fudge', 'Furby', 'Fury', 'Fuzzy', 'Gabby', 'Galileo', 'Garfield', 'Giggles', 'Gimes', 'Gin', 'Ginger', 'Gino', 'Gizmo', 'Glacier', 'Glameow', 'Gnawbone', 'Gomez', 'Gonzales', 'Googles', 'GotUrTounge', 'Grinch', 'Grrrrreat', 'Guenhyvar', 'Gullet', 'Gulliver', 'Gus', 'Hado', 'Haidar', 'Hakuna', 'Haloe', 'Hambert', 'Hamham', 'Hamilton', 'Hamlet', 'Hammy', 'Hampton', 'Hamsta', 'Haolie', 'Hare', 'Harley', 'Harriet', 'Harry', 'Harvey', 'Haze', 'Henry', 'Hermie', 'Hippy', 'Hobart', 'Hobbes', 'Holly', 'Homer', 'Honey', 'Hooch', 'Hoppy', 'Houdini', 'HuLin', 'Hugo', 'IAteUrCookie', 'Idaho', 'ImFastURNot', 'Indy', 'Irish', 'Ivy', 'Izzy', 'Jacob', 'Jagular', 'Janguru', 'Jasmine', 'Jasper', 'Jay', 'Jeanie', 'Jeffery', 'Jemima', 'Jinx', 'Jojo', 'Josie', 'JukeBox', 'Jules', 'Julio', 'Jungle', 'Junior', 'Kamyle', 'Kara', 'Karachi', 'Kassidi', 'Katy', 'Kethai', 'Khan', 'Kilala', 'Killer', 'Kimba', 'Kirara', 'Kitkat', 'Kitteh', 'Kody', 'KoolKat', 'Kujo', 'Kurma', 'Lacy', 'Lady', 'Largepaw', 'Larson', 'Lashpaw', 'Layla', 'LeeLee', 'Leo', 'Leon', 'Leoplurd', 'Levi', 'Liam', 'Licorice', 'Liger', 'LilBit', 'LilDude', 'Lillie', 'Lily', 'LilyMay', 'Linne', 'Lionel', 'Litterbox', 'Llewelyn', 'Lloyd', 'Lockjaw', 'Loki', 'Lol', 'Lola', 'Lolcat', 'Longfang', 'Loryss', 'Lucky', 'Lucy', 'Lugs', 'Luke', 'LuoJi', 'Lux', 'Luxio', 'Luxray', 'Lycan', 'Lyla', 'Maahes', 'Mae', 'Maggie', 'Mahad', 'Mango', 'Mano', 'Marble', 'Marshmallow', 'Marvin', 'MaryJayne', 'Matata', 'Mauler', 'Max', 'Maxwell', 'Maxy', 'Maya', 'Megan', 'MeowMix', 'Meowmers', 'Meowth', 'Meowzors', 'Mesina', 'Midori', 'Mihos', 'Mila', 'Mimi', 'Minnie', 'Mirage', 'Mischa', 'Misty', 'Mittens', 'MoBo', 'Mocha', 'Moley', 'Molly', 'Morgan', 'Motley', 'MrBiggles', 'MrFuzzbutt', 'MrMagoo', 'MrMuggins', 'MrTwiggens', 'MrWhiskas', 'Muffin', 'Muffins', 'MyFishFeast', 'Nala', 'Nanook', 'Neko', 'Nemesis', 'Nermal', 'Nero', 'Nibble', 'Nichole', 'Nightrunner', 'Nikki', 'Nina', 'NineLives', 'Ninja', 'Nipsey', 'Nirgal', 'Nocturne', 'NomNomNom', 'Nora', 'Nugget', 'Nutmeg', 'Nutterbutter', 'Nyrana', 'OdaMae', 'Odies', 'Oedipuss', 'Oliver', 'Olivia', 'OneWisker', 'OompaLoompa', 'Ophelia', 'Oreo', 'Orlando', 'Othneil', 'Pacey', 'Palikeke', 'Pancake', 'PartyNugget', 'Pashmina', 'Patch', 'Pavarti', 'Paws', 'Pax', 'Peaches', 'Peanut', 'PearlTooth', 'Pebbles', 'Peewee', 'Penelope', 'Pepper', 'Pepperoni', 'Pepsi', 'Perdy', 'Pernelle', 'Perseus', 'Persian', 'Pewsy', 'Phantom', 'Phoebe', 'Pickle', 'PikyPiky', 'PingPong', 'Pipa', 'Piping', 'Pixie', 'Pnut', 'Poopsie', 'Poppet', 'Poptart', 'Pouncer', 'Precious', 'Pretty', 'Princess', 'Puff', 'Pugnacious', 'Pumpkin', 'Punkin', 'Purrdy', 'Purrina', 'Q-Tip', 'Quentynn', 'Quickfang', 'Quicksilver', 'Quillestra', 'Quilstream', 'Rahul', 'Raivi', 'Raja', 'Ramadan', 'Rambo', 'Ranger', 'Rawr', 'Rayas', 'Reaper', 'Regina', 'Render', 'Rhinestone', 'Rhino', 'RibRab', 'Riley', 'Ripmaw', 'RoadKill', 'Roca', 'Rock', 'Rocko', 'Rocky', 'Rocoso', 'Rokki', 'Rokku', 'Rolo', 'Rosie', 'Roxey', 'Roxy', 'Roy', 'Ruby', 'Rugrat', 'Ruqualash', 'Ryan', 'Saber', 'Sabrina', 'Sadie', 'Sage', 'Sagwa', 'Salim', 'Sammy', 'Sandusky', 'Sandy', 'Sanjay', 'Scabbers', 'Scaramouch', 'Schrodinger', 'Scooby', 'ScratchALot', 'ScratchFury', 'Scratches', 'Scratchy', 'Scrubbie', 'Scrumpy', 'Scurry', 'Sekhmet', 'Selena', 'Selva', 'Seraphim', 'Severance', 'Shadow', 'ShadowFang', 'Shaggy', 'Sharptooth', 'Sheba', 'Shiba', 'Shinx', 'Shiv', 'Shrapnel', 'Shredder', 'Shu', 'Sidney', 'Singh', 'SirMeowsAlot', 'Sita', 'Skip', 'Skipper', 'Skittles', 'Skitty', 'Skyler', 'Sleepy', 'Smagma', 'SmallFry', 'Smiley', 'Smirnoff', 'Smoky', 'Smudge', 'Snagglepuss', 'Snaggletooth', 'Snickers', 'Snookums', 'Snoop', 'Snoozy', 'Snowball', 'Snowy', 'Snuggles', 'Sophie', 'Sourpuss', 'Spanky', 'Sparky', 'Spaz', 'SpeedKillZ', 'Sphinx', 'Spiffy', 'Spike', 'Spot', 'Spyestra', 'Squeak', 'StalkingCat', 'Stardust', 'Starjumper', 'Stelmaria', 'Stitch', 'Storm', 'Strike', 'Stripe', 'Stripepaw', 'Striper', 'Stripes', 'Stymie', 'Sue', 'Sugar', 'Sundance', 'Sunflower', 'Sunita', 'Sunny', 'Sunshine', 'Sunshynne', 'Sutoraipu', 'Sweetie', 'Swiper', 'Swirly', 'Sylvester', 'T-Bone', 'Taco', 'Tanya', 'Tara', 'Tater', 'Tau', 'Taylor', 'Taz', 'Tazmina', 'Teddy', 'Tedward', 'Teejay', 'Thunder', 'Thunderpaw', 'TiaoWen', 'Tiberius', 'Tica', 'Tickles', 'Tiger-Eye', 'TigerLilly', 'TigerLily', 'Tigernan', 'Tigerpoo', 'Tigerwood', 'Tigger', 'Tigre', 'Tigress', 'Tike', 'Tiko', 'Tilly', 'Tink', 'Tinkerbell', 'Tiny', 'Toby', 'Tojo', 'Tommy', 'Tony', 'Tookie', 'Tora', 'Totti', 'Toturi', 'Treacle', 'Tricia', 'Trigger', 'Trixie', 'Trogdor', 'Trooper', 'Truffles', 'Tunafish', 'Tweak', 'Twinkle', 'Twister', 'Twitch', 'Tygarr', 'Tyson', 'Uhura', 'Ulysses', 'Umbreon', 'Una', 'Uzi', 'Victor', 'Violet', 'Vito', 'Waffles', 'WallaWalla', 'Walnut', 'Warfrost', 'Weetabix', 'Weslyn', 'Wheeler', 'Whipple', 'Whiskers', 'Whiskey', 'Wiggle', 'Wiley', 'Willow', 'Willy', 'Wolf', 'Wombat', 'WorldDestroyer', 'Wrath', 'Xavier', 'Xelanette', 'Xerxes', 'Yan', 'YellowTooth', 'YoYo', 'Ysondre', 'Zador', 'Zander', 'Zebra', 'Zed', 'Zeke', 'Zimba', 'Zimmer', 'Zippy', 'Zizzi', 'Zoey'];


  {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    return names;
  }
}
