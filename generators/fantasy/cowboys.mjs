export default function cowboys() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aaron', 'Abraham', 'Adam', 'Adolph', 'Albert', 'Alex',
    'Alexander', 'Alfred', 'Allen', 'Alonzo', 'Alva', 'Alvin', 'Amos',
    'Andrew', 'Anthony', 'Anton', 'Archie', 'Arnold', 'Arthur', 'August',
    'Ben', 'Benjamin', 'Bennie', 'Bernard', 'Bert', 'Bill', 'Calvin', 'Carl',
    'Cecil', 'Charles', 'Charley', 'Charlie', 'Chester', 'Christopher',
    'Clarence', 'Claud', 'Claude', 'Clayton', 'Cleveland', 'Clifford',
    'Clifton', 'Clinton', 'Clyde', 'Cornelius', 'Curtis', 'Dan', 'Daniel',
    'Dave', 'David', 'Dennis', 'Dewey', 'Donald', 'Earl', 'Earnest', 'Ed',
    'Eddie', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Elbert', 'Eli', 'Elijah',
    'Ellis', 'Elmer', 'Emil', 'Emmett', 'Ernest', 'Eugene', 'Everett',
    'Felix', 'Floyd', 'Francis', 'Frank', 'Franklin', 'Fred', 'Frederick',
    'Fredrick', 'George', 'Gerald', 'Gilbert', 'Glen', 'Glenn', 'Gordon',
    'Grover', 'Gus', 'Guy', 'Harley', 'Harold', 'Harrison', 'Harry', 'Harvey',
    'Henry', 'Herbert', 'Herman', 'Hiram', 'Homer', 'Horace', 'Howard',
    'Hubert', 'Hugh', 'Ira', 'Irvin', 'Irving', 'Isaac', 'Jack', 'Jacob',
    'Jake', 'James', 'Jasper', 'Jay', 'Jeff', 'Jerry', 'Jess', 'Jesse',
    'Jessie', 'Jim', 'Joe', 'John', 'Johnnie', 'Jose', 'Joseph', 'Julius',
    'Kenneth', 'Lawrence', 'Lee', 'Leo', 'Leon', 'Leonard', 'Leroy', 'Leslie',
    'Lester', 'Levi', 'Lewis', 'Lloyd', 'Lonnie', 'Louis', 'Luther', 'Mack',
    'Manuel', 'Marion', 'Mark', 'Marshall', 'Martin', 'Marvin', 'Matthew',
    'Maurice', 'Max', 'Melvin', 'Michael', 'Mike', 'Milton', 'Morris',
    'Moses', 'Nathan', 'Nelson', 'Nicholas', 'Noah', 'Norman', 'Oliver',
    'Ollie', 'Orville', 'Oscar', 'Otis', 'Otto', 'Owen', 'Patrick', 'Paul',
    'Percy', 'Perry', 'Peter', 'Philip', 'Phillip', 'Ralph', 'Ray', 'Raymond',
    'Reuben', 'Richard', 'Robert', 'Roland', 'Roscoe', 'Ross', 'Roy',
    'Rudolph', 'Rufus', 'Russell', 'Sam', 'Samuel', 'Sherman', 'Sidney',
    'Silas', 'Simon', 'Stanley', 'Stephen', 'Steve', 'Sylvester', 'Theodore',
    'Thomas', 'Timothy', 'Tom', 'Vernon', 'Victor', 'Vincent', 'Virgil',
    'Wallace', 'Walter', 'Warren', 'Wesley', 'Wilbur', 'Wiley', 'Will',
    'Willard', 'William', 'Willie', 'Willis', 'Wilson'];
  const nm2 = ['Abbie', 'Ada', 'Addie', 'Adeline', 'Agnes', 'Alberta', 'Alice',
    'Allie', 'Alma', 'Alta', 'Amanda', 'Amelia', 'Amy', 'Ann', 'Anna', 'Anne',
    'Annie', 'Augusta', 'Barbara', 'Beatrice', 'Belle', 'Bernice', 'Bertha',
    'Bertie', 'Bess', 'Bessie', 'Bettie', 'Betty', 'Beulah', 'Birdie',
    'Blanche', 'Callie', 'Caroline', 'Carrie', 'Catherine', 'Celia',
    'Charlotte', 'Christina', 'Christine', 'Clara', 'Cora', 'Cornelia',
    'Daisy', 'Delia', 'Della', 'Dollie', 'Dora', 'Doris', 'Dorothy', 'Edith',
    'Edna', 'Effie', 'Eleanor', 'Eliza', 'Elizabeth', 'Ella', 'Ellen',
    'Elsie', 'Elva', 'Emily', 'Emma', 'Erma', 'Essie', 'Estella', 'Estelle',
    'Esther', 'Ethel', 'Etta', 'Eula', 'Eunice', 'Eva', 'Evelyn', 'Fannie',
    'Fern', 'Flora', 'Florence', 'Flossie', 'Frances', 'Freda', 'Frieda',
    'Genevieve', 'Georgia', 'Gertrude', 'Gladys', 'Goldie', 'Grace', 'Hannah',
    'Harriet', 'Harriett', 'Hattie', 'Hazel', 'Helen', 'Henrietta', 'Hilda',
    'Ida', 'Ina', 'Inez', 'Irene', 'Irma', 'Isabel', 'Isabelle', 'Iva',
    'Jane', 'Janie', 'Jean', 'Jennie', 'Jessie', 'Josephine', 'Josie',
    'Julia', 'Kate', 'Katherine', 'Kathleen', 'Kathryn', 'Katie', 'Laura',
    'Leila', 'Lela', 'Lelia', 'Lena', 'Leona', 'Lillian', 'Lillie', 'Lizzie',
    'Lois', 'Lola', 'Loretta', 'Lottie', 'Lou', 'Louisa', 'Louise', 'Lucile',
    'Lucille', 'Lucy', 'Luella', 'Lula', 'Lulu', 'Lydia', 'Mabel', 'Mable',
    'Madeline', 'Mae', 'Maggie', 'Mamie', 'Margaret', 'Marguerite', 'Maria',
    'Marian', 'Marie', 'Marion', 'Marjorie', 'Martha', 'Mary', 'Mathilda',
    'Matilda', 'Mattie', 'Maud', 'Maude', 'May', 'Mayme', 'Mildred', 'Millie',
    'Minnie', 'Mollie', 'Myra', 'Myrtle', 'Nancy', 'Nannie', 'Naomi', 'Nell',
    'Nellie', 'Nettie', 'Nina', 'Nora', 'Norma', 'Ola', 'Olga', 'Olive',
    'Ollie', 'Ora', 'Pauline', 'Pearl', 'Rachel', 'Rebecca', 'Rena', 'Rhoda',
    'Rosa', 'Rose', 'Rosie', 'Roxie', 'Ruby', 'Ruth', 'Sadie', 'Sallie',
    'Sally', 'Sara', 'Sarah', 'Selma', 'Sophia', 'Sophie', 'Stella', 'Sue',
    'Susan', 'Susie', 'Sylvia', 'Thelma', 'Theresa', 'Tillie', 'Velma',
    'Vera', 'Verna', 'Victoria', 'Viola', 'Violet', 'Virgie', 'Virginia',
    'Vivian', 'Willie', 'Winifred', 'Winnie'];
  const nm3 = ['Ace High', 'Ambush', 'Angel Eyes', 'Annex', 'Arizona', 'Artist',
    'Auger', 'Backfire', 'Bad', 'Bad Egg', 'Bad Eye', 'Bad Mouth', 'Bane',
    'Bender', 'Big Bazoo', 'Big Gun', 'Bilk', 'Blood', 'Bloodlust',
    'Blowhard', 'Bog-Trotter', 'Boot-Licker', 'Brawn', 'Bull', 'Bulldozer',
    'Bullettooth', 'Bullseye', 'Bushwacker', 'Chiseler', 'Con Artist',
    'Courage', 'Coward', 'Coyote', 'Creed', 'Crimson', 'Croaker', 'Darkness',
    'Dawn', 'Dawn Rider', 'Deadbeat', 'Demon Eyes', 'Diabolic', 'Doc', 'Dusk',
    'Dusk Rider', 'Dust Devil', 'Dusty', 'Dynamite', 'Eagle', 'Eucher',
    'Evil', 'Faith', 'Feather', 'Flannel Mouth', 'Fluke', 'Friendly Face',
    'Gamble', 'Ghost', 'Glory', 'Gold Tooth', 'Golden Teeth', 'Gore',
    'Granger', 'Gravedigger', 'Gun Slinger', 'Hallow', 'Happy', 'Hard Case',
    'Have Mercy', 'Hawkeyes', 'Hazard', 'Hellrider', 'Hollow', 'Honor',
    'Hopalong', 'Horse Whisperer', 'Hunter', 'Hustler', 'Immoral',
    'Integrity', 'Jeopardy', 'Justice', 'Killer', 'Knife', 'Lasso', 'Lawful',
    'Lawless', 'Leather', 'Lone Rider', 'Lone Wolf', 'Lonesome', 'Long Shot',
    'Luck', 'Lucky', 'Merciless', 'Mercy', 'Midnight', 'Miracle', 'Money',
    'Moral', 'Mudsill', 'Muscles', 'Mystery', 'Naughty', 'Night Rider',
    'No Horse', 'No Name', 'No Teeth', 'Noose', 'Odd Stick', 'One Eye',
    'Outlaw', 'Pain', 'Painkiller', 'Phantom', 'Pistol', 'Poker Face',
    'Prancer', 'Promiscuous', 'Quick Finger', 'Quick Gun', 'Railroad',
    'Ranger', 'Raven', 'Rider', 'Rustler', 'Ryder', 'Sanguine', 'Savage',
    'Scar', 'Scarface', 'Scorpion', 'Second Life', 'Serpent', 'Shootout',
    'Shotgun', 'Sly', 'Sly Eye', 'Smiley', 'Smokes', 'Snake Eyes', 'Songbird',
    'Stab', 'Steel', 'Stormrider', 'Sundown', 'Sunrise', 'Sureshot',
    'Tracker', 'Trapper', 'Trigger Finger', 'Trustworthy', 'Truth',
    'Two Lives', 'Venom Tongue', 'Vile Mouth', 'Virtue', 'Wager', 'Whip',
    'Whiplash', 'Wicked', 'Wild', 'Wild Hog', 'Wildfire', 'Wit', 'Wolf',
    'the Angel', 'the Blind', 'the Brains', 'the Bullet', 'the Bully',
    'the Cheat', 'the Cobra', 'the Con', 'the Damned', 'the Deaf',
    'the Demon', 'the Devil', 'the Fiend', 'the Fool', 'the Friendly',
    'the Gentle', 'the Hallowed', 'the Hunter', 'the Immortal',
    'the Infamous', 'the Jester', 'the Kid', 'the Loner', 'the Merciful',
    'the Mortal', 'the Mute', 'the Oaf', 'the Predator', 'the Snake',
    'the Stalker', 'the Thinker', 'the Twin', 'the Vicious', 'the Viper'];
  const nm4 = ['Abbott', 'Adams', 'Adkins', 'Aguirre', 'Albert', 'Alexander',
    'Alford', 'Allen', 'Allison', 'Alston', 'Anderson', 'Andrews', 'Anthony',
    'Armstrong', 'Arnold', 'Ashley', 'Atkins', 'Atkinson', 'Austin', 'Avery',
    'Bailey', 'Baird', 'Baker', 'Baldwin', 'Ball', 'Ballard', 'Banks',
    'Barber', 'Barker', 'Barlow', 'Barnes', 'Barnett', 'Barr', 'Barrera',
    'Barrett', 'Barron', 'Barry', 'Bartlett', 'Barton', 'Bass', 'Bates',
    'Battle', 'Bauer', 'Baxter', 'Beach', 'Bean', 'Beard', 'Beasley', 'Beck',
    'Becker', 'Bell', 'Bender', 'Benjamin', 'Bennett', 'Benson', 'Bentley',
    'Benton', 'Berg', 'Berger', 'Bernard', 'Berry', 'Best', 'Bird', 'Bishop',
    'Black', 'Blackburn', 'Blackwell', 'Blair', 'Blake', 'Blanchard',
    'Blankenship', 'Blevins', 'Bolton', 'Bond', 'Bonner', 'Booker', 'Boone',
    'Booth', 'Bowen', 'Bowers', 'Bowman', 'Boyd', 'Boyer', 'Boyle',
    'Bradford', 'Bradley', 'Bradshaw', 'Brady', 'Branch', 'Bray', 'Brennan',
    'Brewer', 'Bridges', 'Briggs', 'Bright', 'Britt', 'Brock', 'Brooks',
    'Brown', 'Browning', 'Bruce', 'Bryan', 'Bryant', 'Buck', 'Buckley',
    'Buckner', 'Bullock', 'Burch', 'Burgess', 'Burke', 'Burks', 'Burnett',
    'Burns', 'Burris', 'Burt', 'Burton', 'Bush', 'Butler', 'Byers', 'Byrd',
    'Cain', 'Calderon', 'Caldwell', 'Callahan', 'Cameron', 'Campbell',
    'Cannon', 'Carey', 'Carlson', 'Carney', 'Carpenter', 'Carr', 'Carson',
    'Carter', 'Carver', 'Case', 'Casey', 'Cash', 'Chambers', 'Chandler',
    'Chaney', 'Chapman', 'Charles', 'Chase', 'Cherry', 'Christensen',
    'Christian', 'Church', 'Clark', 'Clarke', 'Clay', 'Clayton', 'Clements',
    'Clemons', 'Cleveland', 'Cline', 'Cobb', 'Coffey', 'Cohen', 'Cole',
    'Coleman', 'Collier', 'Collins', 'Colon', 'Combs', 'Compton', 'Conley',
    'Conner', 'Conrad', 'Conway', 'Cook', 'Cooke', 'Cooley', 'Cooper',
    'Copeland', 'Cotton', 'Cox', 'Craft', 'Craig', 'Crane', 'Crawford',
    'Crosby', 'Cross', 'Cummings', 'Cunningham', 'Curry', 'Curtis', 'Dale',
    'Dalton', 'Daniel', 'Daniels', 'Daugherty', 'Davenport', 'David',
    'Davidson', 'Davis', 'Dawson', 'Day', 'Dean', 'Decker', 'Dickerson',
    'Dickson', 'Dillard', 'Dillon', 'Dixon', 'Donaldson', 'Donovan', 'Dorsey',
    'Dotson', 'Douglas', 'Downs', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duke',
    'Duncan', 'Dunn', 'Duran', 'Durham', 'Dyer', 'Eaton', 'Edwards',
    'Elliott', 'Ellis', 'Ellison', 'Emerson', 'England', 'English',
    'Erickson', 'Evans', 'Everett', 'Ewing', 'Farley', 'Farmer', 'Farrell',
    'Faulkner', 'Ferguson', 'Ferrell', 'Fields', 'Finch', 'Finley', 'Fischer',
    'Fisher', 'Fleming', 'Fletcher', 'Flores', 'Flowers', 'Floyd', 'Flynn',
    'Foley', 'Forbes', 'Ford', 'Foreman', 'Foster', 'Fowler', 'Fox',
    'Francis', 'Franco', 'Frank', 'Franklin', 'Franks', 'Frazier',
    'Frederick', 'Freeman', 'French', 'Frost', 'Fry', 'Frye', 'Fuller',
    'Fulton', 'Gaines', 'Gallagher', 'Gallegos', 'Galloway', 'Gamble',
    'Gardner', 'Garner', 'Garrett', 'Garrison', 'Gates', 'Gay', 'Gentry',
    'George', 'Gibbs', 'Gibson', 'Gilbert', 'Giles', 'Gill', 'Gilliam',
    'Gilmore', 'Glass', 'Glenn', 'Glover', 'Goff', 'Golden', 'Good',
    'Goodman', 'Goodwin', 'Gordon', 'Graham', 'Grant', 'Graves', 'Gray',
    'Green', 'Greene', 'Greer', 'Gregory', 'Griffin', 'Griffith', 'Grimes',
    'Gross', 'Guy', 'Hale', 'Haley', 'Hall', 'Hamilton', 'Hammond', 'Hampton',
    'Hancock', 'Haney', 'Hansen', 'Hanson', 'Hardin', 'Harding', 'Hardy',
    'Harmon', 'Harper', 'Harrell', 'Harrington', 'Harris', 'Harrison', 'Hart',
    'Hartman', 'Harvey', 'Hatfield', 'Hawkins', 'Hayden', 'Hayes', 'Haynes',
    'Hays', 'Head', 'Heath', 'Hebert', 'Henderson', 'Hendricks', 'Hendrix',
    'Henry', 'Hensley', 'Henson', 'Herman', 'Herring', 'Hess', 'Hester',
    'Hewitt', 'Hickman', 'Hicks', 'Higgins', 'Hill', 'Hines', 'Hinton',
    'Hobbs', 'Hodge', 'Hodges', 'Hoffman', 'Hogan', 'Holcomb', 'Holden',
    'Holder', 'Holland', 'Holloway', 'Holman', 'Holmes', 'Holt', 'Hood',
    'Hooper', 'Hoover', 'Hopkins', 'Hopper', 'Horn', 'Horne', 'Horton',
    'House', 'Houston', 'Howard', 'Howe', 'Howell', 'Hubbard', 'Huber',
    'Hudson', 'Huff', 'Huffman', 'Hughes', 'Hull', 'Humphrey', 'Hunt',
    'Hunter', 'Hurley', 'Hurst', 'Hutchinson', 'Hyde', 'Irwin', 'Jackson',
    'Jacobs', 'Jacobson', 'James', 'Jarvis', 'Jefferson', 'Jenkins',
    'Jennings', 'Jensen', 'Johns', 'Johnson', 'Johnston', 'Jones', 'Jordan',
    'Joseph', 'Joyce', 'Justice', 'Kane', 'Keith', 'Keller', 'Kelley',
    'Kelly', 'Kennedy', 'Kent', 'Key', 'Kidd', 'King', 'Kirby', 'Kirk',
    'Kirkland', 'Knight', 'Knowles', 'Knox', 'Koch', 'Kramer', 'Lamb',
    'Lambert', 'Lancaster', 'Landry', 'Lane', 'Lang', 'Langley', 'Lara',
    'Larsen', 'Larson', 'Lawrence', 'Lawson', 'Leon', 'Leonard', 'Lester',
    'Levine', 'Levy', 'Lewis', 'Lindsay', 'Lindsey', 'Little', 'Livingston',
    'Lloyd', 'Logan', 'Long', 'Lopez', 'Lott', 'Love', 'Lowe', 'Lowery',
    'Lucas', 'Luna', 'Lynch', 'Lynn', 'Lyons', 'Macdonald', 'Mack', 'Madden',
    'Maddox', 'Maldonado', 'Malone', 'Mann', 'Manning', 'Marks', 'Marsh',
    'Marshall', 'Martin', 'Mason', 'Massey', 'Mathews', 'Mathis', 'Matthews',
    'Maxwell', 'May', 'Mayer', 'Maynard', 'Mays', 'McBride', 'McCall',
    'McCarthy', 'McCarty', 'McClain', 'McClure', 'McConnell', 'McCormick',
    'McCoy', 'McCray', 'McCullough', 'McDaniel', 'McDonald', 'McDowell',
    'McFadden', 'McFarland', 'McGee', 'McGowan', 'McGuire', 'McIntosh',
    'McIntyre', 'McKay', 'McKee', 'McKenzie', 'McKinney', 'McKnight',
    'McLaughlin', 'McLean', 'McLeod', 'McMahon', 'McMillan', 'McNeil',
    'McPherson', 'Meadows', 'Medina', 'Melton', 'Mercer', 'Merrill',
    'Merritt', 'Meyer', 'Meyers', 'Michael', 'Middleton', 'Miles', 'Miller',
    'Mills', 'Miranda', 'Mitchell', 'Monroe', 'Montgomery', 'Moody', 'Moon',
    'Mooney', 'Moore', 'Moran', 'Morgan', 'Morin', 'Morris', 'Morrison',
    'Morrow', 'Morse', 'Morton', 'Moses', 'Mosley', 'Moss', 'Mueller',
    'Mullen', 'Mullins', 'Murphy', 'Murray', 'Myers', 'Nash', 'Navarro',
    'Neal', 'Nelson', 'Newman', 'Newton', 'Nichols', 'Nicholson', 'Nielsen',
    'Nixon', 'Noble', 'Noel', 'Nolan', 'Norman', 'Norris', 'Norton',
    'O\'Brien', 'O\'Connor', 'O\'Donnell', 'O\'Neal', 'O\'Neil', 'O\'Neill',
    'Oliver', 'Olsen', 'Olson', 'Ortega', 'Ortiz', 'Osborn', 'Osborne',
    'Owen', 'Owens', 'Pace', 'Page', 'Palmer', 'Park', 'Parker', 'Parks',
    'Parrish', 'Parsons', 'Patrick', 'Patterson', 'Patton', 'Paul', 'Payne',
    'Pearson', 'Peck', 'Pena', 'Pennington', 'Perkins', 'Perry', 'Peters',
    'Petersen', 'Peterson', 'Phelps', 'Phillips', 'Pickett', 'Pierce',
    'Pittman', 'Pitts', 'Pollard', 'Poole', 'Pope', 'Porter', 'Potter',
    'Potts', 'Powell', 'Powers', 'Pratt', 'Preston', 'Price', 'Prince',
    'Puckett', 'Quinn', 'Ramsey', 'Randall', 'Randolph', 'Ray', 'Raymond',
    'Reed', 'Reese', 'Reeves', 'Reid', 'Reilly', 'Reyes', 'Reynolds',
    'Rhodes', 'Rich', 'Richard', 'Richards', 'Richardson', 'Richmond',
    'Riddle', 'Riggs', 'Riley', 'Rivera', 'Rivers', 'Roach', 'Robbins',
    'Roberson', 'Roberts', 'Robertson', 'Robinson', 'Robles', 'Rodgers',
    'Rogers', 'Rollins', 'Rose', 'Ross', 'Roth', 'Rowe', 'Rowland', 'Roy',
    'Rush', 'Russell', 'Ryan', 'Sampson', 'Sanders', 'Sanford', 'Sargent',
    'Saunders', 'Savage', 'Sawyer', 'Scott', 'Sears', 'Sellers', 'Serrano',
    'Sexton', 'Shaffer', 'Shannon', 'Sharp', 'Sharpe', 'Shaw', 'Shelton',
    'Shepard', 'Shepherd', 'Sheppard', 'Sherman', 'Shields', 'Short',
    'Simmons', 'Simon', 'Simpson', 'Sims', 'Singleton', 'Skinner', 'Slater',
    'Sloan', 'Small', 'Smith', 'Snider', 'Snow', 'Snyder', 'Sparks', 'Spears',
    'Spence', 'Spencer', 'Stafford', 'Stanley', 'Stanton', 'Stark', 'Steele',
    'Stein', 'Stephens', 'Stephenson', 'Stevens', 'Stevenson', 'Stewart',
    'Stokes', 'Stone', 'Stout', 'Strickland', 'Strong', 'Stuart', 'Sullivan',
    'Summers', 'Sutton', 'Swanson', 'Sweeney', 'Sweet', 'Sykes', 'Talley',
    'Tanner', 'Tate', 'Taylor', 'Terrell', 'Terry', 'Thomas', 'Thompson',
    'Thornton', 'Tillman', 'Todd', 'Townsend', 'Travis', 'Tucker', 'Turner',
    'Tyler', 'Tyson', 'Underwood', 'Vaughan', 'Vaughn', 'Vincent', 'Vinson',
    'Wade', 'Wagner', 'Walker', 'Wall', 'Wallace', 'Waller', 'Walls', 'Walsh',
    'Walter', 'Walters', 'Walton', 'Ward', 'Ware', 'Warner', 'Warren',
    'Washington', 'Waters', 'Watkins', 'Watson', 'Watts', 'Weaver', 'Webb',
    'Weber', 'Webster', 'Weeks', 'Wells', 'West', 'Wheeler', 'Whitaker',
    'White', 'Whitehead', 'Whitfield', 'Whitley', 'Whitney', 'Wiggins',
    'Wilcox', 'Wilder', 'Wiley', 'Wilkerson', 'Wilkins', 'Wilkinson',
    'William', 'Williams', 'Williamson', 'Willis', 'Wilson', 'Winters',
    'Wise', 'Witt', 'Wolf', 'Wolfe', 'Wood', 'Woodard', 'Woods', 'Woodward',
    'Workman', 'Wright', 'Wyatt', 'Yates', 'York', 'Young'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} '${nm3[rnd2]}' ${nm4[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = `${nm1[rnd]} '${nm3[rnd2]}' ${nm4[rnd3]}`;
    }
    return names;
  }
}
