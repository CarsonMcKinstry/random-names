import { sample } from 'lodash';

export default function circus() {
    let names: string;
    const nm1 = [
        'Aegis',
        'Aerial',
        'Aeris',
        'Amazing',
        'Arcana',
        'Arcane',
        'Aurora',
        'Berserk',
        'Blue Moon',
        'Botanical',
        'Brilliant',
        'Crazy',
        'Curio',
        'Curious',
        'Dapper',
        'Dazzling',
        'Delight',
        'Delirium',
        'Destiny',
        'Dream',
        'Dreamland',
        'Dreamscape',
        'Eclipse',
        'Electric',
        'Elysium',
        'Enchanted',
        'Enchanting',
        'Euphoria',
        'Exalted',
        'Exotic',
        'Extravaganza',
        'Fabulous',
        'Fantasia',
        'Fantasy',
        'Felicity',
        'Festival',
        'Flamboyant',
        'Flying',
        'Fortuna',
        'Fortune',
        'Freak',
        'Funtasia',
        'Galaxy',
        'Ghost',
        'Ghostly',
        'Gifted',
        'Grand',
        'Gravity',
        'Happy',
        'Harmonious',
        'Harmony',
        'Heavenly',
        'Hilarity',
        'Howling',
        'Humble',
        'Hypno',
        'Hypnotic',
        'Illustrious',
        'Imaginarium',
        'Imagination',
        'Incredible',
        'Infinite',
        'Infinity',
        'Intrepid',
        'Jolly',
        'Jubilant',
        'Jubilee',
        'Jumbo',
        'Living',
        'Love',
        'Luminos',
        'Magic',
        'Majestic',
        'Merry',
        'Midnight',
        'Miracle',
        'Moonlight',
        'Morgana',
        'Myriad',
        'Mystique',
        'Nirvana',
        'Pandemonium',
        'Phantom',
        'Phenomena',
        'Planet',
        'Prestigious',
        'Radiant',
        'Rainbow',
        'Regal',
        'Requiem',
        'Royal',
        'Serendipity',
        'Shadow',
        'Smirkus',
        'Spectacle',
        'Spectacular',
        'Starlight',
        'Sunset',
        'Sunshine',
        'Titan',
        'Travelling',
        'Trinity',
        'Tumble',
        'Unity',
        'Utopia',
        'Wanderlust',
        'Wayfare',
        'Whimsical',
        'Wicked',
        'Wild',
        'Wonder',
    ];
    const nm2 = [
        'Aegis',
        'Aeon',
        'Aerial',
        'Aeriform',
        'Amore',
        'Angelica',
        'Anomaly',
        'Arcadia',
        'Arcana',
        'Aurora',
        'Avalon',
        'Avian',
        'Avion',
        'Berserk',
        'Bliss',
        'Blue Moon',
        'Boggle',
        'Borealis',
        'Botanica',
        'Butterfly',
        'Cacaphony',
        'Crux',
        'Curio',
        'Curiosity',
        'Delight',
        'Delirium',
        'Destiny',
        'Discord',
        'Dreamland',
        'Dreamscape',
        'Eclipse',
        'Ecstasy',
        'Elysium',
        'Enigma',
        'Eos',
        'Epiphany',
        'Eternity',
        'Euphoria',
        'Extravaganza',
        'Fantasia',
        'Felicity',
        'Festivus',
        'Firefly',
        'Flora',
        'Fortuna',
        'Freaks',
        'Funtasia',
        'Galaxy',
        'Glee',
        'Gravitus',
        'Gravity',
        'Harmony',
        'Hullabaloo',
        'Hypno',
        'Hypnosis',
        'Illume',
        'Imaginarium',
        'Infinity',
        'Ironica',
        'Jamboree',
        'Joy',
        'Jubilee',
        'Jumbo',
        'Knickknack',
        'Luminos',
        'Luna',
        'Lunacy',
        'Magnifico',
        'Magnus',
        'Mania',
        'Marvel',
        'Memory',
        'Merriment',
        'Merry Men',
        'Miracle',
        'Morgana',
        'Myriad',
        'Mystique',
        'Nirvana',
        'Oddity',
        'Olympia',
        'Olympus',
        'Pandemonium',
        'Paradise',
        'Paradisio',
        'Phantom',
        'Phenomena',
        'Prism',
        'Prodigy',
        'Rebus',
        'Requiem',
        'Royale',
        'Serendipity',
        'Smirkus',
        'Solas',
        'Spectacle',
        'Sphinx',
        'Spirit',
        'Sputnik',
        'Stardust',
        'Starfall',
        'Sunrise',
        'Sunset',
        'Trinity',
        'Triumph',
        'Tumble',
        'Tumblus',
        'Twilight',
        'Ubiquity',
        'Universe',
        'Utopia',
        'Volant',
        'Wanderlust',
        'Wonder',
        'Wonderland',
        'Zephyr',
        'Zion',
    ];
    const nm3 = [
        'Baron',
        'Baroness',
        'Count',
        'Countess',
        'Dame',
        'Duchess',
        'Duke',
        'Frau',
        'Fraulein',
        'Herr',
        'Lord',
        'Madame',
        'Mademoiselle',
        'Maestro',
        'Miss',
        'Mister',
        'Mr.',
        'Mrs.',
        'Professor',
    ];
    const nm4 = [
        "Abbott's",
        "Acevedo's",
        "Acosta's",
        "Adams'",
        "Adkins'",
        "Aguilar's",
        "Aguirre's",
        "Albert's",
        "Alexander's",
        "Alford's",
        "Allen's",
        "Allison's",
        "Alston's",
        "Alvarado's",
        "Alvarez's",
        "Anderson's",
        "Andrews'",
        "Anthony's",
        "Armstrong's",
        "Arnold's",
        "Ashley's",
        "Atkins'",
        "Atkinson's",
        "Austin's",
        "Avery's",
        "Avila's",
        "Ayala's",
        "Ayers'",
        "Bailey's",
        "Baird's",
        "Baker's",
        "Baldwin's",
        "Ball's",
        "Ballard's",
        "Banks'",
        "Barber's",
        "Barker's",
        "Barlow's",
        "Barnes'",
        "Barnett's",
        "Barr's",
        "Barrera's",
        "Barrett's",
        "Barron's",
        "Barry's",
        "Bartlett's",
        "Barton's",
        "Bass'",
        "Bates'",
        "Battle's",
        "Bauer's",
        "Baxter's",
        "Beach's",
        "Bean's",
        "Beard's",
        "Beasley's",
        "Beck's",
        "Becker's",
        "Bell's",
        "Bender's",
        "Benjamin's",
        "Bennett's",
        "Benson's",
        "Bentley's",
        "Benton's",
        "Berg's",
        "Berger's",
        "Bernard's",
        "Berry's",
        "Best's",
        "Bird's",
        "Bishop's",
        "Black's",
        "Blackburn's",
        "Blackwell's",
        "Blair's",
        "Blake's",
        "Blanchard's",
        "Blankenship's",
        "Blevins'",
        "Bolton's",
        "Bond's",
        "Bonner's",
        "Booker's",
        "Boone's",
        "Booth's",
        "Bowen's",
        "Bowers'",
        "Bowman's",
        "Boyd's",
        "Boyer's",
        "Boyle's",
        "Bradford's",
        "Bradley's",
        "Bradshaw's",
        "Brady's",
        "Branch's",
        "Bray's",
        "Brennan's",
        "Brewer's",
        "Bridges'",
        "Briggs'",
        "Bright's",
        "Britt's",
        "Brock's",
        "Brooks'",
        "Brown's",
        "Browning's",
        "Bruce's",
        "Bryan's",
        "Bryant's",
        "Buchanan's",
        "Buck's",
        "Buckley's",
        "Buckner's",
        "Bullock's",
        "Burch's",
        "Burgess'",
        "Burke's",
        "Burks'",
        "Burnett's",
        "Burns'",
        "Burris'",
        "Burt's",
        "Burton's",
        "Bush's",
        "Butler's",
        "Byers'",
        "Byrd's",
        "Cabrera's",
        "Cain's",
        "Calderon's",
        "Caldwell's",
        "Calhoun's",
        "Callahan's",
        "Camacho's",
        "Cameron's",
        "Campbell's",
        "Campos'",
        "Cannon's",
        "Cantrell's",
        "Cantu's",
        "Cardenas'",
        "Carey's",
        "Carlson's",
        "Carney's",
        "Carpenter's",
        "Carr's",
        "Carrillo's",
        "Carroll's",
        "Carson's",
        "Carter's",
        "Carver's",
        "Case's",
        "Casey's",
        "Cash's",
        "Castaneda's",
        "Castillo's",
        "Castro's",
        "Cervantes'",
        "Chambers'",
        "Chan's",
        "Chandler's",
        "Chaney's",
        "Chang's",
        "Chapman's",
        "Charles'",
        "Chase's",
        "Chavez's",
        "Chen's",
        "Cherry's",
        "Christensen's",
        "Christian's",
        "Church's",
        "Clark's",
        "Clarke's",
        "Clay's",
        "Clayton's",
        "Clements'",
        "Clemons'",
        "Cleveland's",
        "Cline's",
        "Cobb's",
        "Cochran's",
        "Coffey's",
        "Cohen's",
        "Cole's",
        "Coleman's",
        "Collier's",
        "Collins'",
        "Colon's",
        "Combs'",
        "Compton's",
        "Conley's",
        "Conner's",
        "Conrad's",
        "Contreras'",
        "Conway's",
        "Cook's",
        "Cooke's",
        "Cooley's",
        "Cooper's",
        "Copeland's",
        "Cortez's",
        "Cote's",
        "Cotton's",
        "Cox's",
        "Craft's",
        "Craig's",
        "Crane's",
        "Crawford's",
        "Crosby's",
        "Cross'",
        "Cruz's",
        "Cummings'",
        "Cunningham's",
        "Curry's",
        "Curtis'",
        "Dale's",
        "Dalton's",
        "Daniel's",
        "Daniels'",
        "Daugherty's",
        "Davenport's",
        "David's",
        "Davidson's",
        "Davis'",
        "Dawson's",
        "Day's",
        "Dean's",
        "Decker's",
        "Dejesus'",
        "Delacruz's",
        "Delaney's",
        "Deleon's",
        "Delgado's",
        "Dennis'",
        "Diaz's",
        "Dickerson's",
        "Dickson's",
        "Dillard's",
        "Dillon's",
        "Dixon's",
        "Dodson's",
        "Dominguez's",
        "Donaldson's",
        "Donovan's",
        "Dorsey's",
        "Dotson's",
        "Douglas'",
        "Downs'",
        "Doyle's",
        "Drake's",
        "Dudley's",
        "Duffy's",
        "Duke's",
        "Duncan's",
        "Dunlap's",
        "Dunn's",
        "Duran's",
        "Durham's",
        "Dyer's",
        "Eaton's",
        "Edwards'",
        "Elliott's",
        "Ellis'",
        "Ellison's",
        "Emerson's",
        "England's",
        "English's",
        "Erickson's",
        "Espinoza's",
        "Estes'",
        "Estrada's",
        "Evans'",
        "Everett's",
        "Ewing's",
        "Farley's",
        "Farmer's",
        "Farrell's",
        "Faulkner's",
        "Ferguson's",
        "Fernandez's",
        "Ferrell's",
        "Fields'",
        "Figueroa's",
        "Finch's",
        "Finley's",
        "Fischer's",
        "Fisher's",
        "Fitzgerald's",
        "Fitzpatrick's",
        "Fleming's",
        "Fletcher's",
        "Flores'",
        "Flowers'",
        "Floyd's",
        "Flynn's",
        "Foley's",
        "Forbes'",
        "Ford's",
        "Foreman's",
        "Foster's",
        "Fowler's",
        "Fox's",
        "Francis'",
        "Franco's",
        "Frank's",
        "Franklin's",
        "Franks'",
        "Frazier's",
        "Frederick's",
        "Freeman's",
        "French's",
        "Frost's",
        "Fry's",
        "Frye's",
        "Fuentes'",
        "Fuller's",
        "Fulton's",
        "Gaines'",
        "Gallagher's",
        "Gallegos'",
        "Galloway's",
        "Gamble's",
        "Garcia's",
        "Gardner's",
        "Garner's",
        "Garrett's",
        "Garrison's",
        "Garza's",
        "Gates'",
        "Gay's",
        "Gentry's",
        "George's",
        "Gibbs'",
        "Gibson's",
        "Gilbert's",
        "Giles'",
        "Gill's",
        "Gillespie's",
        "Gilliam's",
        "Gilmore's",
        "Glass'",
        "Glenn's",
        "Glover's",
        "Goff's",
        "Golden's",
        "Gomez's",
        "Gonzales'",
        "Gonzalez's",
        "Good's",
        "Goodman's",
        "Goodwin's",
        "Gordon's",
        "Gould's",
        "Graham's",
        "Grant's",
        "Graves'",
        "Gray's",
        "Green's",
        "Greene's",
        "Greer's",
        "Gregory's",
        "Griffin's",
        "Griffith's",
        "Grimes'",
        "Gross'",
        "Guerra's",
        "Guerrero's",
        "Guthrie's",
        "Gutierrez's",
        "Guy's",
        "Guzman's",
        "Hahn's",
        "Hale's",
        "Haley's",
        "Hall's",
        "Hamilton's",
        "Hammond's",
        "Hampton's",
        "Hancock's",
        "Haney's",
        "Hansen's",
        "Hanson's",
        "Hardin's",
        "Harding's",
        "Hardy's",
        "Harmon's",
        "Harper's",
        "Harrell's",
        "Harrington's",
        "Harris'",
        "Harrison's",
        "Hart's",
        "Hartman's",
        "Harvey's",
        "Hatfield's",
        "Hawkins'",
        "Hayden's",
        "Hayes'",
        "Haynes'",
        "Hays'",
        "Head's",
        "Heath's",
        "Hebert's",
        "Henderson's",
        "Hendricks'",
        "Hendrix's",
        "Henry's",
        "Hensley's",
        "Henson's",
        "Herman's",
        "Hernandez's",
        "Herrera's",
        "Herring's",
        "Hess'",
        "Hester's",
        "Hewitt's",
        "Hickman's",
        "Hicks'",
        "Higgins'",
        "Hill's",
        "Hines'",
        "Hinton's",
        "Hobbs'",
        "Hodge's",
        "Hodges'",
        "Hoffman's",
        "Hogan's",
        "Holcomb's",
        "Holden's",
        "Holder's",
        "Holland's",
        "Holloway's",
        "Holman's",
        "Holmes'",
        "Holt's",
        "Hood's",
        "Hooper's",
        "Hoover's",
        "Hopkins'",
        "Hopper's",
        "Horn's",
        "Horne's",
        "Horton's",
        "House's",
        "Houston's",
        "Howard's",
        "Howe's",
        "Howell's",
        "Hubbard's",
        "Huber's",
        "Hudson's",
        "Huff's",
        "Huffman's",
        "Hughes'",
        "Hull's",
        "Humphrey's",
        "Hunt's",
        "Hunter's",
        "Hurley's",
        "Hurst's",
        "Hutchinson's",
        "Hyde's",
        "Ingram's",
        "Irwin's",
        "Jackson's",
        "Jacobs'",
        "Jacobson's",
        "James'",
        "Jarvis'",
        "Jefferson's",
        "Jenkins'",
        "Jennings'",
        "Jensen's",
        "Jimenez's",
        "Johns'",
        "Johnson's",
        "Johnston's",
        "Jones'",
        "Jordan's",
        "Joseph's",
        "Joyce's",
        "Joyner's",
        "Juarez's",
        "Justice's",
        "Kane's",
        "Kaufman's",
        "Keith's",
        "Keller's",
        "Kelley's",
        "Kelly's",
        "Kemp's",
        "Kennedy's",
        "Kent's",
        "Kerr's",
        "Key's",
        "Kidd's",
        "Kim's",
        "King's",
        "Kinney's",
        "Kirby's",
        "Kirk's",
        "Kirkland's",
        "Klein's",
        "Kline's",
        "Knapp's",
        "Knight's",
        "Knowles'",
        "Knox's",
        "Koch's",
        "Kramer's",
        "Lamb's",
        "Lambert's",
        "Lancaster's",
        "Landry's",
        "Lane's",
        "Lang's",
        "Langley's",
        "Lara's",
        "Larsen's",
        "Larson's",
        "Lawrence's",
        "Lawson's",
        "Leach's",
        "Leblanc's",
        "Lee's",
        "Leon's",
        "Leonard's",
        "Lester's",
        "Levine's",
        "Levy's",
        "Lewis'",
        "Lindsay's",
        "Lindsey's",
        "Little's",
        "Livingston's",
        "Lloyd's",
        "Logan's",
        "Long's",
        "Lopez's",
        "Lott's",
        "Love's",
        "Lowe's",
        "Lowery's",
        "Lucas'",
        "Luna's",
        "Lynch's",
        "Lynn's",
        "Lyons'",
        "Macdonald's",
        "Macias'",
        "Mack's",
        "Madden's",
        "Maddox's",
        "Maldonado's",
        "Malone's",
        "Mann's",
        "Manning's",
        "Marks'",
        "Marquez's",
        "Marsh's",
        "Marshall's",
        "Martin's",
        "Martinez's",
        "Mason's",
        "Massey's",
        "Mathews'",
        "Mathis'",
        "Matthews'",
        "Maxwell's",
        "May's",
        "Mayer's",
        "Maynard's",
        "Mayo's",
        "Mays'",
        "Mcbride's",
        "Mccall's",
        "Mccarthy's",
        "Mccarty's",
        "Mcclain's",
        "Mcclure's",
        "Mcconnell's",
        "Mccormick's",
        "Mccoy's",
        "Mccray's",
        "Mccullough's",
        "Mcdaniel's",
        "Mcdonald's",
        "Mcdowell's",
        "Mcfadden's",
        "Mcfarland's",
        "Mcgee's",
        "Mcgowan's",
        "Mcguire's",
        "Mcintosh's",
        "Mcintyre's",
        "Mckay's",
        "Mckee's",
        "Mckenzie's",
        "Mckinney's",
        "Mcknight's",
        "Mclaughlin's",
        "Mclean's",
        "Mcleod's",
        "Mcmahon's",
        "Mcmillan's",
        "Mcneil's",
        "Mcpherson's",
        "Meadows'",
        "Medina's",
        "Mejia's",
        "Melendez's",
        "Melton's",
        "Mendez's",
        "Mendoza's",
        "Mercado's",
        "Mercer's",
        "Merrill's",
        "Merritt's",
        "Meyer's",
        "Meyers'",
        "Michael's",
        "Middleton's",
        "Miles'",
        "Miller's",
        "Mills'",
        "Miranda's",
        "Mitchell's",
        "Molina's",
        "Monroe's",
        "Montgomery's",
        "Montoya's",
        "Moody's",
        "Moon's",
        "Mooney's",
        "Moore's",
        "Morales'",
        "Moran's",
        "Moreno's",
        "Morgan's",
        "Morin's",
        "Morris'",
        "Morrison's",
        "Morrow's",
        "Morse's",
        "Morton's",
        "Moses'",
        "Mosley's",
        "Moss'",
        "Mueller's",
        "Mullen's",
        "Mullins'",
        "Munoz's",
        "Murphy's",
        "Murray's",
        "Myers'",
        "Nash's",
        "Navarro's",
        "Neal's",
        "Nelson's",
        "Newman's",
        "Newton's",
        "Nguyen's",
        "Nichols'",
        "Nicholson's",
        "Nielsen's",
        "Nieves'",
        "Nixon's",
        "Noble's",
        "Noel's",
        "Nolan's",
        "Norman's",
        "Norris'",
        "Norton's",
        "Nunez's",
        "O'brien's",
        "O'connor's",
        "O'donnell's",
        "O'neal's",
        "O'neil's",
        "O'neill's",
        "Ochoa's",
        "Odom's",
        "Oliver's",
        "Olsen's",
        "Olson's",
        "Orr's",
        "Ortega's",
        "Ortiz's",
        "Osborn's",
        "Osborne's",
        "Owen's",
        "Owens'",
        "Pace's",
        "Pacheco's",
        "Padilla's",
        "Page's",
        "Palmer's",
        "Park's",
        "Parker's",
        "Parks'",
        "Parrish's",
        "Parsons'",
        "Pate's",
        "Patel's",
        "Patrick's",
        "Patterson's",
        "Patton's",
        "Paul's",
        "Payne's",
        "Pearson's",
        "Peck's",
        "Pena's",
        "Pennington's",
        "Perez's",
        "Perkins'",
        "Perry's",
        "Peters'",
        "Petersen's",
        "Peterson's",
        "Petty's",
        "Phelps'",
        "Phillips'",
        "Pickett's",
        "Pierce's",
        "Pittman's",
        "Pitts'",
        "Pollard's",
        "Poole's",
        "Pope's",
        "Porter's",
        "Potter's",
        "Potts'",
        "Powell's",
        "Powers'",
        "Pratt's",
        "Preston's",
        "Price's",
        "Prince's",
        "Pruitt's",
        "Puckett's",
        "Pugh's",
        "Quinn's",
        "Ramirez's",
        "Ramos'",
        "Ramsey's",
        "Randall's",
        "Randolph's",
        "Rasmussen's",
        "Ratliff's",
        "Ray's",
        "Raymond's",
        "Reed's",
        "Reese's",
        "Reeves'",
        "Reid's",
        "Reilly's",
        "Reyes'",
        "Reynolds'",
        "Rhodes'",
        "Rice's",
        "Rich's",
        "Richard's",
        "Richards'",
        "Richardson's",
        "Richmond's",
        "Riddle's",
        "Riggs'",
        "Riley's",
        "Rios'",
        "Rivas'",
        "Rivera's",
        "Rivers'",
        "Roach's",
        "Robbins'",
        "Roberson's",
        "Roberts'",
        "Robertson's",
        "Robinson's",
        "Robles'",
        "Rodgers'",
        "Rodriguez's",
        "Rodriquez's",
        "Rogers'",
        "Rojas'",
        "Rollins'",
        "Roman's",
        "Romero's",
        "Rosa's",
        "Rosales'",
        "Rosario's",
        "Rose's",
        "Ross'",
        "Roth's",
        "Rowe's",
        "Rowland's",
        "Roy's",
        "Ruiz's",
        "Rush's",
        "Russell's",
        "Russo's",
        "Rutledge's",
        "Ryan's",
        "Salas'",
        "Salazar's",
        "Salinas'",
        "Sampson's",
        "Sanchez's",
        "Sanders'",
        "Sandoval's",
        "Sanford's",
        "Santana's",
        "Santiago's",
        "Santos'",
        "Sargent's",
        "Saunders'",
        "Savage's",
        "Sawyer's",
        "Schmidt's",
        "Schneider's",
        "Schroeder's",
        "Schultz's",
        "Schwartz's",
        "Scott's",
        "Sears'",
        "Sellers'",
        "Serrano's",
        "Sexton's",
        "Shaffer's",
        "Shannon's",
        "Sharp's",
        "Sharpe's",
        "Shaw's",
        "Shelton's",
        "Shepard's",
        "Shepherd's",
        "Sheppard's",
        "Sherman's",
        "Shields'",
        "Short's",
        "Silva's",
        "Simmons'",
        "Simon's",
        "Simpson's",
        "Sims'",
        "Singleton's",
        "Skinner's",
        "Slater's",
        "Sloan's",
        "Small's",
        "Smith's",
        "Snider's",
        "Snow's",
        "Snyder's",
        "Solis'",
        "Solomon's",
        "Sosa's",
        "Soto's",
        "Sparks'",
        "Spears'",
        "Spence's",
        "Spencer's",
        "Stafford's",
        "Stanley's",
        "Stanton's",
        "Stark's",
        "Steele's",
        "Stein's",
        "Stephens'",
        "Stephenson's",
        "Stevens'",
        "Stevenson's",
        "Stewart's",
        "Stokes'",
        "Stone's",
        "Stout's",
        "Strickland's",
        "Strong's",
        "Stuart's",
        "Suarez's",
        "Sullivan's",
        "Summers'",
        "Sutton's",
        "Swanson's",
        "Sweeney's",
        "Sweet's",
        "Sykes'",
        "Talley's",
        "Tanner's",
        "Tate's",
        "Taylor's",
        "Terrell's",
        "Terry's",
        "Thomas'",
        "Thompson's",
        "Thornton's",
        "Tillman's",
        "Todd's",
        "Torres'",
        "Townsend's",
        "Tran's",
        "Travis'",
        "Trevino's",
        "Trujillo's",
        "Tucker's",
        "Turner's",
        "Tyler's",
        "Tyson's",
        "Underwood's",
        "Valdez's",
        "Valencia's",
        "Valentine's",
        "Valenzuela's",
        "Vance's",
        "Vargas'",
        "Vasquez's",
        "Vaughan's",
        "Vaughn's",
        "Vazquez's",
        "Vega's",
        "Velasquez's",
        "Velez's",
        "Villarreal's",
        "Vincent's",
        "Vinson's",
        "Wade's",
        "Wagner's",
        "Walker's",
        "Wall's",
        "Wallace's",
        "Waller's",
        "Walls'",
        "Walsh's",
        "Walter's",
        "Walters'",
        "Walton's",
        "Ward's",
        "Ware's",
        "Warner's",
        "Warren's",
        "Washington's",
        "Waters'",
        "Watkins'",
        "Watson's",
        "Watts'",
        "Weaver's",
        "Webb's",
        "Weber's",
        "Webster's",
        "Weeks'",
        "Weiss'",
        "Welch's",
        "Wells'",
        "West's",
        "Wheeler's",
        "Whitaker's",
        "White's",
        "Whitehead's",
        "Whitfield's",
        "Whitley's",
        "Whitney's",
        "Wiggins'",
        "Wilcox's",
        "Wilder's",
        "Wiley's",
        "Wilkerson's",
        "Wilkins'",
        "Wilkinson's",
        "William's",
        "Williams'",
        "Williamson's",
        "Willis'",
        "Wilson's",
        "Winters'",
        "Wise's",
        "Witt's",
        "Wolf's",
        "Wolfe's",
        "Wong's",
        "Wood's",
        "Woodard's",
        "Woods'",
        "Woodward's",
        "Wooten's",
        "Workman's",
        "Wright's",
        "Wyatt's",
        "Wynn's",
        "Yang's",
        "Yates'",
        "York's",
        "Young's",
        'Zamora',
    ];
    const nm5 = [
        'Circus',
        'Cirque',
        'Hippodrome',
        'Bazaar',
        'Big Top',
        'Circus',
        'Cirque',
        'Circus',
        'Cirque',
        'Circus',
        'Circus',
        'Circus',
        'Circus',
        'Circus',
        'Circus',
        'Circus',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 2) {
            names = `${sample(nm3)} ${sample(nm4)} ${sample(nm1)} ${sample(nm5)}`;
        } else if (i < 5) {
            names = `The ${sample(nm1)} ${sample(nm5)}`;
        } else if (i < 7) {
            names = `${sample(nm3)} ${sample(nm4)} ${sample(nm5)} ${sample(nm2)}`;
        } else {
            names = `${sample(nm5)} ${sample(nm2)}`;
        }
        return names;
    }
}
