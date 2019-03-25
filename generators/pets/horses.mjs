import sample from 'lodash/sample';

export default function horses() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Alfie', 'Cloud', 'Flint', 'Kite', 'Mario', 'Monty', 'Peanut', 'Red', 'Sailor', 'Spirit', 'Casino', 'Chardonnay', 'Cobweb', 'Dallas', 'Diesel', 'Elvis', 'Firefly', 'Gyps', 'Harley', 'Jago', 'Maverick', 'Mojo', 'Riley', 'Taz', 'Tyson', 'Yogi', 'Abacus', 'Abel', 'Able', 'Abra', 'Abracadabra', 'Abraham', 'Ace', 'Acer', 'Achilles', 'Acker', 'Acorn', 'Adagio', 'Adam', 'Admiral', 'Afterglow', 'Agent', 'Aj', 'Al', 'Aladdin', 'Alastair', 'Alcatraz', 'Alchemy', 'Alexander', 'Alf', 'Alfalfa', 'Alfie', 'Alfred', 'Ali', 'Ali Baba', 'Alistair', 'Ally Oop', 'Almond', 'Alpha', 'Alpine', 'Altair', 'Amadeus', 'Amazon', 'Andre', 'Andy', 'Angus', 'Apollo', 'Apple', 'Apples', 'Archer', 'Archibald', 'Archie', 'Aristotle', 'Armstrong', 'Arnie', 'Arnold', 'Arther', 'Ash', 'Aspen', 'Asterix', 'Atlas', 'Augustus', 'BJ', 'Babel', 'Bach', 'Badge', 'Bagheera', 'Bailey', 'Baldwin', 'Balero', 'Balto', 'Bandit', 'Banjo', 'Barnaby', 'Barnacle', 'Barney', 'Barnie', 'Barq', 'Bartholomew', 'Basil', 'Basket', 'Baxter', 'Baz', 'Beam', 'Bear', 'Beau', 'Beauty', 'Becks', 'Beethoven', 'Ben', 'Benjy', 'Benny', 'Bentley', 'Bert', 'Biggin', 'Bill', 'Billy', 'Biscuit', 'Bishop', 'Black', 'Blackfoot', 'Blackie', 'Blade', 'Blake', 'Blitz', 'Blizzard', 'Blue', 'Blueberry', 'Bob', 'Bobby', 'Bobo', 'Bogart', 'Bogie', 'Bojangles', 'Bolt', 'Bones', 'Bono', 'BooBoo', 'Boomer', 'Boomerang', 'Boots', 'Boris', 'Bouncer', 'Bow', 'Bowie', 'Brass', 'Breeze', 'Brian', 'Brie', 'Brownie', 'Bruce', 'Bruno', 'Brutis', 'Brutus', 'Bubba', 'Bubble', 'Bubbles', 'Bubbly', 'Buck', 'Buckaroo', 'Bucky', 'Bud', 'Buddy', 'Buff', 'Bully', 'Bumper', 'Burger', 'Burgundy', 'Buster', 'Butch', 'Butler', 'Buttons', 'CJ', 'Cadet', 'Caesar', 'Cajun', 'Cal', 'Calvin', 'Calypso', 'Camembert', 'Cameo', 'Cameron', 'Cantador', 'Capone', 'Captain', 'Carl', 'Carlton', 'Carmel', 'Carrot', 'Carson', 'Casanova', 'Casper', 'Cedric', 'Cesar', 'Chad', 'Chalk', 'Champion', 'Chance', 'Chandler', 'Chant', 'Charisma', 'Charles', 'Charley', 'Charlie', 'Chaz', 'Chester', 'Chex', 'Chico', 'Chief', 'Chilli', 'Chip', 'Chips', 'Chocolate', 'Chris', 'Chuck', 'Chuckie', 'Chuckles', 'Churchill', 'Cinamon', 'Cj', 'Clark', 'Clash', 'Clearence', 'Clide', 'Cliff', 'Clifford', 'Cling', 'Cloud', 'Cloudy', 'Clubs', 'Clyde', 'Cobbles', 'Cocoa', 'Cody', 'Coke', 'Cole', 'Collin', 'Colonel', 'Colt', 'Comet', 'Conan', 'Confucius', 'Conrad', 'Cookie', 'Cooper', 'Copper', 'Cosmo', 'Cotton', 'Cottonball', 'Cow', 'Cowboy', 'Cracker', 'Crackerjack', 'Crank', 'Creed', 'Cricket', 'Crisp', 'Crocket', 'Cupid', 'Curly', 'Cyclops', 'DJ', 'DaVinci', 'Dacqueri', 'Dakhota', 'Dakota', 'Dale', 'Damian', 'Damon', 'Dancer', 'Dandy', 'Daniel', 'Danny', 'Dante', 'Darius', 'Darth', 'Daryl', 'Dave', 'Davey', 'David', 'Davy', 'Dean', 'Dee', 'Dell', 'Dennis', 'Denzel', 'Derek', 'Derrick', 'Dexter', 'Dezmond', 'Diablo', 'Diamond', 'Diddle', 'Digby', 'Dillon', 'Dinky', 'Dj ', 'Dobby', 'Doc', 'Dorito', 'Doug', 'Drummer', 'Dude', 'Duke', 'Duncan', 'Dusk', 'Dusty', 'Dylan', 'Earl', 'Echo', 'Eclipse', 'Ed or Eddy', 'Eddie', 'Eddy', 'Edgar', 'Edge', 'Edison', 'Edward', 'Eggbert', 'Einstein', 'Eldon', 'Eli', 'Elijah', 'Eliot', 'Elliot', 'Elliott', 'Elmo', 'Elroy', 'Elvis', 'Elwood', 'Emmet', 'Emperor', 'Enterprise', 'Enzo', 'Epic', 'Eric', 'Ernest', 'Esprit', 'Eureka', 'Europa', 'Everest', 'Excalibur', 'Exodus', 'Expo', 'Expresso', 'Fabian', 'Fable', 'Fairfax', 'Fanta', 'Felix', 'Ferret', 'Ferris', 'Fez', 'Fickel', 'Fido', 'Figaro', 'Filbert', 'Finley', 'Finnegan', 'Finny', 'Fire', 'Firefly', 'Firenze', 'Fizz', 'Flake', 'Flame', 'Flannel', 'Flapper', 'Flash', 'Flicker', 'Floyd', 'Fluffy', 'Flush', 'Fonz', 'Fonzie', 'Fox', 'Fozzy', 'Frank', 'Frankie', 'Franklin', 'Frasier', 'Freckles', 'Fred', 'Freddy', 'Fredrick', 'Frenchie', 'Freud', 'Frey', 'Fudge', 'Fuego', 'Fuerte', 'Fungus', 'Funky', 'Furball', 'Furr', 'Fury', 'Fuzzie', 'Fuzzy', 'Gabriel', 'Gaelic', 'Gage', 'Galileo', 'Gamble', 'Garth', 'Gavin', 'Gazpacho', 'Gecko', 'Geezer', 'Gemini', 'Genesis', 'Genie', 'George', 'Gideon', 'Gidget', 'Giggles', 'Gigi', 'Gilbert', 'Gills', 'Ginger', 'Gingersnap', 'Gizmo', 'Gobble', 'Goblin', 'Goliath', 'Gomez', 'Gonzo', 'Gooch', 'Gopher', 'Gordon', 'Grant', 'Gremlin', 'Grey', 'Gringo', 'Gulliver', 'Gumbo', 'Gunther', 'Gus', 'Gypsy', 'Haddock', 'Hail', 'Halo', 'Hamlet', 'Handel', 'Hank', 'Hardy', 'Harley', 'Harold', 'Harry', 'Hawk', 'Haze', 'Hector', 'Henry', 'Herb', 'Herbie', 'Herman', 'Hidalgo', 'Hogan', 'Hollywood', 'Homer', 'Homey', 'Hooch', 'Hooper', 'Hootie', 'Hoover', 'Horace', 'Horatio', 'Hornet', 'Hoss', 'Houdini', 'Howard', 'Howey', 'Hubert', 'Huck', 'Hudson', 'Hugh', 'Hugo', 'Hulk', 'Humphrey', 'Hunter', 'Hydra', 'Ibis', 'Ike', 'Indy', 'JJ', 'Jack', 'Jackpot', 'Jacques', 'Jaeger', 'Jamie', 'Jarvis', 'Jasper', 'Jay', 'Jazz', 'Jazz ', 'Jed', 'Jedi', 'Jeffery', 'Jekyl', 'Jelly', 'Jenkins', 'Jericho', 'Jerome', 'Jerry', 'Jersey', 'Jesse', 'Jet', 'Jethro', 'Jigsaw', 'Jim', 'Jimmy', 'Jingles', 'Jinny', 'Jinx', 'Jo', 'Jockey', 'Joe', 'Joey', 'Johny', 'Joker', 'Jonah', 'Jose', 'Josh', 'Joshua', 'Josie', 'Julian', 'Jumbo', 'Jupiter', 'Kaiser', 'Kaspa', 'Kay', 'Kazam', 'Kegan', 'Kellen', 'Kentucky', 'Kermit', 'Kernal', 'King', 'Kirk', 'Kix', 'Koda', 'Lad', 'Lakhota', 'Lambert', 'Lark', 'Larry', 'Laurel', 'Leaner', 'Lee', 'Legacy', 'Lennon', 'Lenny', 'Leo', 'Leroy', 'Lester', 'Levi', 'Lewis', 'Lexus', 'Liam', 'Lightning', 'Lil', 'Liquorice', 'Logie', 'Loki', 'Lomax', 'Looney', 'Lou', 'Luca', 'Lucian', 'Lucius', 'Lucky', 'Ludwig', 'Luigi', 'Luther', 'Mac', 'Macabee', 'Macaroni', 'Macbeth', 'Machete', 'Macintosh', 'Mack', 'Mackenzie', 'Macmillan', 'Maestro', 'Magic', 'Magnum', 'Magnus', 'Magpie', 'Mahogany', 'Major', 'Marble', 'Marcel', 'Marcus', 'Mariner', 'Marley', 'Marmalade', 'Marshmallow', 'Maverick', 'Max', 'Maximillian', 'Maxwell', 'Mcloud', 'Meatloaf', 'Meeka', 'Melvin', 'Memphis', 'Mercury', 'Merlin', 'Mickey', 'Midas', 'Midnight', 'Mint', 'Mohawk', 'Monopoly', 'Monster', 'Moonbeam', 'Moonie', 'Morgan', 'Morris', 'Moses', 'Mott', 'Mozart', 'Muddles', 'Muffin', 'Murphy', 'Mustard', 'Mutley', 'Nacho', 'Napoleon', 'Nathan', 'Ned', 'Neddy', 'Nelly', 'Nelson', 'Nemo', 'Neo', 'Neptune', 'Nero', 'Newton', 'Nibbles', 'Nicholas', 'Nick', 'Night', 'Noah', 'Noel', 'Nugget', 'Nutmeg', 'OJ', 'Odie', 'Odin', 'Oldie', 'Oliver', 'Olivier', 'Ollie', 'Onyx', 'Oreo', 'Orion', 'Orlando', 'Oscar', 'Osman', 'Oswald', 'Othello', 'Otis', 'Ottis', 'Owen', 'Oxford', 'Ozwald', 'Ozzie', 'Pablo', 'Pacino', 'Paddington', 'Paddy', 'Pain', 'Paint', 'Pal', 'Parker', 'Patch', 'Patches', 'Patrick', 'Paws', 'Peace', 'Peanut', 'Peanuts', 'Pebbles', 'Pepper', 'Pepsi', 'Percy', 'Perkins', 'Pete', 'Peter', 'Petey', 'Peyton', 'Phantom', 'Picasso', 'Pierre', 'Pieter', 'Pike', 'Piper', 'Plie', 'Poncho', 'Popcorn', 'Popeye', 'Popper', 'Presley', 'Prince', 'Professor', 'Pug', 'Pumba', 'Pumpkin', 'Punk', 'Puzzle', 'Quarts', 'Quest', 'Quiznos', 'Radar', 'Rage', 'Rain', 'Rainbow', 'Raja', 'Ralph', 'Rambo', 'Rameesh', 'Ramses', 'Ranch', 'Randall', 'Randy', 'Ranger', 'Rango', 'Raoul', 'Raphael', 'Rascal', 'Rasputin', 'Raymond', 'Rebel', 'Rebound', 'Red', 'Reggie', 'Rembrandt', 'Remus', 'Rhubarb', 'Ricky', 'Rico', 'Ridges', 'Ringo', 'Rio', 'Riptide', 'River', 'Robby', 'Rocco', 'Rocker', 'Rocket', 'Rocky', 'Rodney', 'Rogan', 'Romeo', 'Romulus', 'Roody', 'Rootbeer', 'Rory', 'Ross', 'Rowan', 'Royal', 'Ruben', 'Rudy', 'Ruffles', 'Rufus', 'Rupert', 'Russell', 'Rusty', 'Ryan', 'S\'more', 'Sabor', 'Sage', 'Sailor', 'Salty', 'Sam', 'Sam or Sammy', 'Sammy', 'Samson', 'Sandie', 'Saturn', 'Sawyer', 'Scales', 'Scooby', 'Scottie', 'Scout', 'Scrappy', 'Scraps', 'Scrooge', 'Scruffy', 'Scuba', 'Scully', 'Seamus', 'Sebastian', 'Shadow', 'Shaka', 'Shooter', 'Sid', 'Sierra', 'Sigmund', 'Simba', 'Sisco', 'Skate', 'Skip', 'Sky', 'Sky Dancer', 'Sleet', 'Smithers', 'Smoke', 'Smokey', 'Smokin', 'Smudge', 'Snapper', 'Snickers', 'Snip', 'Snowball', 'Snowy', 'Socrates', 'Sojourn', 'Soldier', 'Solomon', 'Sonny', 'Sooty', 'Sorbet', 'Spade', 'Spades', 'Sparky', 'Spartacus', 'Speed', 'Speedy', 'Spike', 'Spirit', 'Splash', 'Spook', 'Spooky', 'Spots', 'Spud', 'Spunce', 'Squeak', 'Squeaky', 'Squid', 'Stanley', 'Star', 'Steele', 'Stinger', 'Stony', 'Storm', 'Stormy', 'Strawberry', 'Stream', 'Strider', 'Stripes', 'Sugar Daddy', 'Sullivann', 'SunBurst', 'Sundance', 'Sunny', 'Swirl', 'TJ', 'Taffy', 'Tango', 'Tank', 'Taz', 'Ted', 'Tetra', 'Texas', 'Thai', 'Thor', 'Thunder', 'Titan', 'Toby', 'Toffe', 'Toffee', 'Tom', 'Tomahawk', 'Tomas', 'Topaz', 'Topcat', 'Toper', 'Toro', 'Torston', 'Tranquil', 'Tranquillity', 'Treasure', 'Trevor', 'Trey', 'Tron', 'Trouble', 'Troy', 'Trumpet', 'Tucker', 'Tuff', 'Tyson', 'Unity', 'Uno', 'Valentino', 'VanGogh', 'Vanilla', 'Vega', 'Vegas', 'Vesper', 'Vincent', 'Virgo', 'Voltage', 'Waddie', 'Wally', 'Walter', 'Wanda', 'Warren', 'Watson', 'Wave', 'Wavy', 'Wayne', 'Weasel', 'Welch', 'Wendell', 'Wesley', 'West', 'Whiskers', 'Whiskey', 'White', 'Widget', 'Wiggle', 'Wiggler', 'Wilbur', 'Wiley', 'Wilfred', 'Will', 'William', 'Willie', 'Wimpy', 'Wind', 'Windy', 'Winner', 'Winston', 'Winter', 'Wizard', 'Woody', 'Wriggler', 'X-ray', 'Xavier', 'Xtreme', 'Yang', 'Yankee', 'Yeller', 'Yin', 'Yoda', 'Yummy', 'Zach', 'Zachary', 'Zak', 'Zane ', 'Zazu', 'Zee', 'Zephyr', 'Zero', 'Zeus', 'Ziggy', 'Zip', 'Zipper', 'Zippy', 'Zoomer', 'Zorro'];
  const nm2 = ['Amber', 'Beauty', 'Fleur', 'Jem', 'Lady', 'Lulu', 'Rosie', 'Missy', 'Cleo', 'Dakota', 'Gyps', 'Kizzy', 'Lexi', 'Magpie', 'Raven', 'Riley', 'Rose', 'Roxy', 'Savanna', 'Zizou', 'Abba', 'Abby', 'Abequa', 'Abigail', 'Abigale', 'Acelin', 'Adagio', 'Adela', 'Adelina', 'Adeline', 'Adina', 'Adriana', 'Adrina', 'Afia', 'Afina', 'Afterglow', 'Aggie', 'Aina', 'Air', 'Airlia', 'Aiyana', 'Akasha', 'Akela', 'Akina', 'Alameda', 'Alberta', 'Alcatraz', 'Aldea', 'Alexandra', 'Alexandrea', 'Alexia', 'Alexis', 'Alibi', 'Alice', 'Aliz', 'Alize', 'Allegro', 'Allene', 'Ally', 'Alpine', 'Althea', 'Alyssa', 'Amadahy', 'Amalia', 'Amanda', 'Amazone', 'Amber', 'Amethyst', 'Amitola', 'Amora', 'Amy', 'Anabelle', 'Anastasia', 'Andrea', 'Angel', 'Angela', 'Angelica', 'Angelina', 'Anna', 'Annie', 'Annilee', 'Anubis', 'Anya', 'Aphrodite', 'Apple', 'April', 'Aqua', 'Aquabelle', 'Ariel', 'Arora', 'Arriana', 'Ashes', 'Ashley', 'Aspen', 'Athena', 'Augie', 'Aurora', 'Awenasa', 'Ayasha', 'Ayla', 'Ayme', 'Babbers', 'Babe', 'Babel', 'Babs', 'Babsy', 'Babushka', 'Baby', 'Badge', 'Bailey', 'Barbie', 'Barley', 'Barnacle', 'Beauty', 'Bella', 'Bellaluna', 'Belle', 'Bess', 'Bessie', 'Beth', 'Betty', 'Bianca', 'Bitsy', 'Black Widow', 'Blackie', 'Blanche', 'Blizzard', 'Blondie', 'Blossom', 'Blue', 'Blueberry', 'Bo', 'Bones', 'Bonnie', 'Bonny', 'Boots', 'Brandy', 'Breeze', 'Brie', 'Brittany', 'Brooke', 'Brownie', 'Bryani', 'Bubba', 'Bubble', 'Bubbles', 'Bubbly', 'Buffy', 'Burma', 'Buttercup', 'Butterfly', 'Button', 'Buttons', 'Callie', 'Cally', 'Calypso', 'Cameo', 'Candi', 'Candice', 'Candy', 'Capella', 'Cara', 'Caramel', 'Carla', 'Carly', 'Carolina', 'Carrie', 'Casandra', 'Casey', 'Cass', 'Cassandra', 'Cassidy', 'Cassie', 'Catelin', 'Cathy', 'Catori', 'Cha\'risa', 'Chance', 'Charisma', 'Charlie', 'Charlotte', 'Chelsea', 'Cherie', 'Cherish', 'Cherry', 'Chika', 'Chips', 'Chloe', 'Cholena', 'Chrissie', 'Chrissy', 'Chuckle', 'Chuckles', 'Cinamon', 'Cinders', 'Cindy', 'Clementine', 'Cleo', 'Cleopatra', 'Cloe', 'Cloudy', 'Clover', 'Clubs', 'Coco', 'Codi', 'Cody', 'Comet', 'Coral', 'Cosmo', 'Cotton', 'Cottonball', 'Crystal', 'Cupcake', 'Curly', 'Cutie', 'Daffodil', 'Dafny', 'Daisy', 'Dancer', 'Dandelion', 'Dani', 'Danielle', 'Danny', 'Deb', 'Debbie', 'Delilah', 'Denali', 'Devine', 'Diamond', 'Dianna', 'Diddle', 'Dinky', 'Diva', 'Dixie', 'Dolly', 'Donna', 'Donoma', 'Dory', 'Dottie', 'Dotty', 'Dozy', 'Duchess', 'Duffy', 'Ebony', 'Echo', 'Eclipse', 'Edith', 'Elipsis', 'Eliza', 'Elizabeth', 'Ella', 'Ellie', 'Elly', 'Elmo', 'Elsa', 'Emerald', 'Emily', 'Emma', 'Emmy', 'Enchant', 'Enigma', 'Enya', 'Esmerelda', 'Esprit', 'Eve', 'Evelyn', 'Evie', 'Fable', 'Faith', 'Fala', 'Fancy', 'Fantasia', 'Faun', 'Felicity', 'Fergie', 'Fifi', 'Finny', 'Fizzy', 'Flea', 'Fleur', 'Flo', 'Flora', 'Florence', 'Floss', 'Flossie', 'Flower', 'Flowers', 'Fluffy', 'Flush', 'Foxy', 'Fozzy', 'Fran', 'Frannie', 'Freckles', 'Freda', 'Freida', 'Freya', 'Friday', 'Fuchsia', 'Fungus', 'Funky', 'Furball', 'Gabriel', 'Gaelic', 'Gaia', 'Gail', 'Galilahi', 'Gecko', 'Gemini', 'Genesis', 'Georgia', 'Georgina', 'Gertrude', 'Gidget', 'Giggles', 'Gigi', 'Gilly', 'Ginger', 'Gingersnap', 'Giselle', 'Gizmo', 'Goldie', 'Goldilocks', 'Grace', 'Gracie', 'Greta', 'Gretchen', 'Guinevere', 'Gwen', 'Gwendolyn', 'Gweneth', 'Gypsy', 'Haley', 'Harmony', 'Harriet', 'Hazel', 'Heather', 'Heaven', 'Heidi', 'Heiress', 'Helen', 'Helga', 'Henrietta', 'Hessie', 'Hessiee', 'Holly', 'Honey', 'Hope', 'Hoppy', 'Huntress', 'Hydra', 'Ibis', 'Imagine', 'Irene', 'Iris', 'Isabella', 'Isabelle', 'Isis', 'Ismelda', 'Isobel', 'Issabella', 'Ivy', 'Jackie', 'Jade', 'Jamie', 'Jasmin', 'Jasmine', 'Jayde', 'Jazzie', 'Jazzy', 'Jelly', 'Jemina', 'Jenna', 'Jenny', 'Jess', 'Jesse', 'Jessie', 'Jewel', 'Jewels', 'Jillian', 'Jingles', 'Jinny', 'Jinx', 'Jojo', 'Josephine', 'Julia', 'Julie', 'Juliet', 'June', 'Kachina', 'Kahluah', 'Kasimira', 'Kateri', 'Katherine', 'Kathleen', 'Katie', 'Keiko', 'Kellendria', 'Kelly', 'Kendra', 'Kiana', 'Kiki', 'Kim', 'Kimi', 'Kitty', 'Koda', 'Krystal', 'Lace', 'Lacey', 'Lacy', 'Lady', 'Laney', 'Lassie', 'Laura', 'Lavender', 'Layla', 'Leah', 'Leila', 'Libby', 'Liberty', 'Lilac', 'Lilas', 'Lilie', 'Lily', 'Lisa', 'Lizzie', 'Lizzy', 'Lola', 'Lolly', 'Looney', 'Loretta', 'Lorraine', 'Lotta', 'Lotti', 'Lottie', 'Louise', 'Lucinda', 'Lucy', 'Lullabi', 'Lullaby', 'Lulu', 'Lulubelle', 'Luna', 'Lyka', 'Lynn', 'Lyra', 'Lysie', 'Macawi', 'Macy', 'Madame', 'Maddie', 'Madonna', 'Magenta', 'Maggie', 'Magic', 'Magnolia', 'Magpie', 'Maisy', 'Maiya', 'Marcie', 'Margaret', 'Marie', 'Marigold', 'Marilyn', 'Marissa', 'Marmalade', 'Marshmallow', 'Massie', 'Matilda', 'May', 'Maya', 'Medley', 'Medusa', 'Meg', 'Megan', 'Melanie', 'Melinda', 'Melissa', 'Melody', 'Mia', 'Mika', 'Mila', 'Millie', 'Minney', 'Minnie', 'Missy', 'Misty', 'Mocha', 'Molly', 'Momo', 'Mona', 'Mopsy', 'Morticia', 'Muddles', 'Muffin', 'Munchkin', 'Mushka', 'Mystery', 'Mystic', 'Mystique', 'Nadine', 'Natasha', 'Natty', 'Nektosha', 'Nell', 'Nellie', 'Nelly', 'Neptune', 'Nessie', 'Nibbles', 'Nicky', 'Nicole', 'Nicolette', 'Night', 'Nightgale', 'Nina', 'Nitika', 'Nugget', 'Nutmeg', 'Oasis', 'Odessa', 'Olathe', 'Olga', 'Olive', 'Olivia', 'Onyx', 'Opal', 'Ophelia', 'Orchid', 'Orenda', 'Oriel', 'Paige', 'Paisley', 'Paloma', 'Pandora', 'Paprika', 'Patch', 'Patches', 'Patsy', 'Patty', 'Paws', 'Peanuts', 'Pearl', 'Pebbles', 'Peggy', 'Penelope', 'Penny', 'Pepper', 'Petunia', 'Phantasia', 'Pheobe', 'Pip', 'Piticelle', 'Pollina', 'Polly', 'Poppy', 'Princess', 'Priscilla', 'Prissy', 'Promise', 'Prudence', 'Puddles', 'Pumpkin', 'Puzzle', 'Queen', 'Queenie', 'Quinella', 'Rachel', 'Rhonda', 'Rochelle', 'Romance', 'Rosalin', 'Rosaline', 'Rose', 'Rosey', 'Rosie', 'Rosy', 'Rowena', 'Roxanne', 'Roxy', 'Roz', 'Ruby', 'Rudi', 'Ruffles', 'Sabrina', 'Sadie', 'Sam', 'Samantha', 'Sandy', 'Saphira', 'Sara', 'Sarah', 'Sassy', 'Saturn', 'Savanah', 'Secret', 'Shadow', 'Shania', 'Shanna', 'Shelly', 'Shena', 'Sheryl', 'Shianne', 'Shiloh', 'Shy', 'Sienna', 'Skittle', 'Sky', 'Skye', 'Smudges', 'Snowball', 'Snowbelle', 'Sophia', 'Sophie', 'Spades', 'Spirit', 'Splash', 'Squeak', 'Star', 'Stardust', 'Storm', 'Stormy', 'Strawberry', 'Stripes', 'Sue', 'Sugar', 'Sugarplum', 'Susan', 'Suzanne', 'Suzie', 'Sweet Pea', 'Sweetie', 'Symphony', 'Talia', 'Tallulah', 'Talzanna', 'Tamara', 'Tammy', 'Tango', 'Tanya', 'Tanzie', 'Tasha', 'Tasmin', 'Tess', 'Tetra', 'Theresa', 'Thyme', 'Tia', 'Tillie', 'Tilly', 'Tina', 'Tinkerbelle', 'Tinsel', 'Toffee', 'Topaz', 'Tori', 'Toya', 'Trickster', 'Twilight', 'Twinkle', 'Twinkles', 'Una', 'Uno', 'Ursula', 'Vanilla', 'Velvet', 'Venus', 'Veronica', 'Vickie', 'Victoria', 'Vilma', 'Violet', 'Virgo', 'Wanda', 'Weeko', 'Wendy', 'Whiskers', 'Wiggle', 'Wiggles', 'Willow', 'Windy', 'Xena', 'Yang', 'Yin', 'Yvette', 'Zaney', 'Zelda'];
  {
    if (type === 1) {
      names = sample(nm2);
    } else {
      names = sample(nm1);
    }
    return names;
  }
}
