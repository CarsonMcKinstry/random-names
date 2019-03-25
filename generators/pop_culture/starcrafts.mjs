export default function starcrafts() {
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let
    rnd7;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'd', 'dh', 'f', 'g', 'gh', 'h', 'k', 'kh', 'n', 'm', 't', 'x', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'io', 'ia'];
  const nm3 = ['d', 'g', 'm', 'n', 'r', 't', 'd', 'g', 'm', 'n', 'r', 't', 'd', 'g', 'm', 'n', 'r', 't', 'd', 'dr', 'g', 'gd', 'gr', 'ld', 'ldr', 'm', 'n', 'nd', 'ndr', 'r', 'rk', 'rt', 'rx', 'rz', 'ss', 't', 'tr', 'tg', 'xx', 'zr'];
  const nm4 = ['ch', 'l', 'n', 'r', 's', 'th', 'x'];
  const nm5 = ['', '', '', '', '', 'dh', 'f', 'g', 'gh', 'h', 'k', 'm', 'n', 'r', 's', 't', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'ea', 'ia'];
  const nm7 = ['d', 'g', 'll', 'n', 'r', 't', 'd', 'g', 'll', 'n', 'r', 't', 'd', 'g', 'n', 'r', 't', 'd', 'g', 'gn', 'gd', 'll', 'ld', 'ldr', 'ln', 'lg', 'lz', 'nd', 'nz', 'ng', 'ndr', 'r', 'rz', 'rs', 't', 'x', 'sz', 'sr', 'zs', 'zr'];
  const nm8 = ['', '', '', '', '', 'h', 'l', 'n', 's', 'th'];
  const nm9 = ['br', 'bh', 'd', 'dr', 'fr', 'g', 'gr', 'gh', 'k', 'kr', 'kh', 'm', 'n', 'r', 'sl', 'sr', 'sz', 'th', 'tr', 'thr', 'y', 'z', 'zr'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'a', 'e', 'i', 'o', 'u', 'y', 'au', 'ai'];
  const nm11 = ['b', 'd', 'f', 'g', 'h', 'k', 'l', 'r', 's', 'v', 'z', 'b', 'd', 'g', 'h', 'k', 'r', 's', 'v', 'z', 'b', 'd', 'g', 'h', 'k', 'r', 's', 'v', 'z', 'b', 'br', 'bv', 'd', 'dd', 'dv', 'dr', 'f', 'fr', 'g', 'gr', 'gdr', 'gz', 'h', 'k', 'kr', 'khr', 'kt', 'l', 'ls', 'lg', 'lk', 'lkr', 'r', 'rv', 's', 'skr', 'sgr', 'sz', 'szr', 'sr', 'th', 'thr', 'v', 'vr', 'z', 'zr', 'zsr', 'szr', 'zsh'];
  const nm12 = ['k', 'kk', 'l', 'n', 'r', 'rn', 'rk', 's', 'sh', 'th'];
  const nm13 = ['Hanwyn', 'Lucan', 'Martius', 'Martus', 'Orsond', 'Romian', 'Sambrose', 'Tarius', 'Varius', 'Varianus', 'Lindon', 'Aaron', 'Abel', 'Abraham', 'Abram', 'Ackerley', 'Ackley', 'Acton', 'Adam', 'Adan', 'Addisen', 'Addison', 'Aden', 'Adger', 'Adison', 'Adrian', 'Adriel', 'Adrien', 'Agustin', 'Aidan', 'Aiden', 'Aiken', 'Ailen', 'Alan', 'Albert', 'Alcot', 'Alcott', 'Alden', 'Alder', 'Aldred', 'Aldren', 'Aldrich', 'Aldridge', 'Aldrych', 'Alec', 'Alex', 'Alexander', 'Alexzander', 'Alf', 'Alfie', 'Alfred', 'Alfredo', 'Alfric', 'Alfrid', 'Allan', 'Allard', 'Allen', 'Allie', 'Allston', 'Alton', 'Alvertos', 'Alvin', 'Alwyn', 'Amsden', 'Anderson', 'Andre', 'Andrew', 'Andy', 'Ansley', 'Anthony', 'Antony', 'Arden', 'Arledge', 'Arley', 'Arlo', 'Armstrong', 'Arnold', 'Aron', 'Arthur', 'Arundel', 'Ashley', 'Ashton', 'Athelstan', 'August', 'Augustus', 'Austen', 'Austin', 'Austyn', 'Averill', 'Awarnach', 'Axel', 'Ayden', 'Bailey', 'Ballard', 'Bancroft', 'Barclay', 'Barden', 'Barklay', 'Barkley', 'Barks', 'Barksdale', 'Barnet', 'Barnett', 'Baron', 'Barr', 'Barret', 'Barrett', 'Barron', 'Barry', 'Beacher', 'Beaman', 'Beardsley', 'Bede', 'Beldon', 'Ben', 'Benjamin', 'Bennett', 'Benny', 'Bentley', 'Bergen', 'Bergess', 'Berkeley', 'Berkley', 'Bernard', 'Bert', 'Berton', 'Berty', 'Billy', 'Birch', 'Blade', 'Blake', 'Blaze', 'Bo', 'Bob', 'Bobby', 'Bolton', 'Bond', 'Booker', 'Booth', 'Boothe', 'Bordan', 'Borden', 'Brad', 'Braden', 'Bradford', 'Bradley', 'Bradly', 'Bradney', 'Brady', 'Braeden', 'Braedon', 'Braid', 'Bran', 'Brand', 'Branden', 'Brandon', 'Branford', 'Brant', 'Braxton', 'Bray', 'Brayan', 'Brayden', 'Braydon', 'Brayton', 'Brendan', 'Brenden', 'Brendon', 'Brennan', 'Brennen', 'Brent', 'Brentan', 'Bret', 'Brett', 'Brewster', 'Brian', 'Brigham', 'Brinley', 'Brock', 'Brocton', 'Brod', 'Broderick', 'Brodie', 'Brody', 'Bromley', 'Bromwell', 'Bromwood', 'Bronson', 'Bronwen', 'Bronwyn', 'Brook', 'Brooks', 'Bruce', 'Bruno', 'Bryan', 'Bryant', 'Bryce', 'Brycen', 'Bryson', 'Buckley', 'Bud', 'Burg', 'Burgess', 'Burley', 'Burne', 'Burns', 'Burt', 'Burton', 'Buster', 'Byrne', 'Byron', 'Cade', 'Caden', 'Cadwell', 'Cael', 'Cal', 'Calder', 'Caldwell', 'Cale', 'Calhoun', 'Calvert', 'Calvin', 'Cameron', 'Camren', 'Camron', 'Carden', 'Carl', 'Carleton', 'Carlisle', 'Carlo', 'Carlos', 'Carlton', 'Carlyle', 'Carrington', 'Carson', 'Carter', 'Carvell', 'Carver', 'Casey', 'Cason', 'Catcher', 'Caulder', 'Cayden', 'Cedric', 'Chad', 'Chadwick', 'Chance', 'Chandler', 'Channing', 'Chapman', 'Charles', 'Charley', 'Charlie', 'Charlton', 'Chase', 'Chaz', 'Chevy', 'Chilton', 'Chip', 'Chris', 'Chuck', 'Claiborne', 'Clarence', 'Clark', 'Clay', 'Clayton', 'Cleavon', 'Cleve', 'Cleveland', 'Cliff', 'Clifford', 'Clifton', 'Clint', 'Clinton', 'Clive', 'Coby', 'Cody', 'Colbert', 'Colborn', 'Colby', 'Cole', 'Coleman', 'Colin', 'Collin', 'Colt', 'Colten', 'Colter', 'Colton', 'Conner', 'Connor', 'Conor', 'Conrad', 'Cooper', 'Copper', 'Corey', 'Corin', 'Cory', 'Courtland', 'Craig', 'Crawford', 'Creighton', 'Cristian', 'Cromwell', 'Cruz', 'Cullen', 'Currier', 'Curtis', 'Cynric', 'Cyrus', 'Dakota', 'Dale', 'Dallas', 'Dallin', 'Dalton', 'Damian', 'Damien', 'Damion', 'Damon', 'Dane', 'Daniel', 'Danny', 'Darnell', 'Darrel', 'Darrell', 'Darren', 'Darrin', 'Darrion', 'Darrius', 'Darryl', 'Darryll', 'Darwin', 'Darwyn', 'Daryl', 'Daryll', 'Dashawn', 'David', 'Davin', 'Davion', 'Davis', 'Dayton', 'Dean', 'Declan', 'Dempster', 'Dennis', 'Denton', 'Denver', 'Derek', 'Derick', 'Derrick', 'Derwood', 'Desmond', 'Desmund', 'Deven', 'Devin', 'Devon', 'Devyn', 'Dexter', 'Dicken', 'Dickens', 'Dickenson', 'Dickinson', 'Digby', 'Dillan', 'Dillon', 'Dion', 'Dix', 'Dixie', 'Dixon', 'Dob', 'Dobbs', 'Domenic', 'Dominic', 'Dominick', 'Dominik', 'Dominique', 'Don', 'Donald', 'Donavan', 'Donny', 'Donovan', 'Dorian', 'Dorset', 'Dorsey', 'Douglas', 'Dover', 'Doyle', 'Doyt', 'Drake', 'Drew', 'Dudley', 'Dudly', 'Duncan', 'Dunstan', 'Durwald', 'Durward', 'Durwin', 'Durwood', 'Dustin', 'Dwayne', 'Dwenn', 'Dwennon', 'Dwight', 'Dwighte', 'Dwite', 'Dwyght', 'Dwyghte', 'Dwyte', 'Dylan', 'Dylon', 'Earl', 'Eaton', 'Ed', 'Eddie', 'Eddy', 'Edgar', 'Edmund', 'Edsel', 'Eduard', 'Eduardo', 'Edvard', 'Edward', 'Edwardo', 'Edwards', 'Edwardson', 'Edwin', 'Egerton', 'Elbridge', 'Elden', 'Elder', 'Eldon', 'Eldridge', 'Elfred', 'Elijah', 'Elliot', 'Elliott', 'Elman', 'Elmar', 'Elmer', 'Elmore', 'Elroy', 'Elten', 'Elton', 'Elvin', 'Elvis', 'Emersen', 'Emerson', 'Emmerson', 'Emmett', 'Emmyrson', 'Emyrson', 'Eric', 'Erick', 'Erik', 'Ernest', 'Erskine', 'Escott', 'Esmond', 'Esmund', 'Ethan', 'Ethen', 'Eugene', 'Evan', 'Everett', 'Ewart', 'Ewing', 'Fairfax', 'Fairleigh', 'Fairley', 'Farland', 'Farley', 'Farly', 'Farrell', 'Felix', 'Fielding', 'Fleming', 'Floyd', 'Forbes', 'Ford', 'Forrest', 'Francis', 'Frank', 'Frankie', 'Franklin', 'Fred', 'Freddie', 'Freddy', 'Frederick', 'Fredrick', 'Free', 'Fuller', 'Fulton', 'Gabriel', 'Gael', 'Gannon', 'Garett', 'Garfield', 'Garret', 'Garrett', 'Garrick', 'Garrison', 'Garryson', 'Gary', 'Garyson', 'Gaven', 'Gavin', 'Gavyn', 'Geoffrey', 'George', 'Gerald', 'Gerard', 'Gilbert', 'Gilford', 'Glen', 'Glenn', 'Goldman', 'Gordon', 'Gower', 'Grady', 'Graham', 'Granger', 'Grant', 'Gray', 'Grayson', 'Gregory', 'Greyson', 'Griffin', 'Gunner', 'Hadden', 'Hadley', 'Hagley', 'Halbert', 'Haley', 'Hall', 'Hallam', 'Halsey', 'Halton', 'Hamilton', 'Hannibal', 'Harden', 'Hardy', 'Harlan', 'Harman', 'Harmon', 'Harold', 'Harrison', 'Harry', 'Harv', 'Harvey', 'Hastings', 'Hawk', 'Hawthorne', 'Hayden', 'Hayes', 'Haywood', 'Hector', 'Hedley', 'Hendrick', 'Henley', 'Henry', 'Herbert', 'Hilton', 'Holden', 'Hollis', 'Horton', 'Houston', 'Howard', 'Hudson', 'Huey', 'Hugh', 'Hugo', 'Hulk', 'Humphrey', 'Hunt', 'Hunter', 'Huntley', 'Hutton', 'Hyatt', 'Ian', 'Irvin', 'Irving', 'Ivan', 'Ives', 'Jack', 'Jackson', 'Jacob', 'Jacoby', 'Jaden', 'Jadon', 'Jadyn', 'Jaeden', 'Jagger', 'Jaiden', 'Jaime', 'Jake', 'Jakob', 'James', 'Jameson', 'Jamie', 'Jared', 'Jarman', 'Jarod', 'Jarred', 'Jarrett', 'Jarrod', 'Jarvis', 'Jason', 'Jasper', 'Jaxon', 'Jaxson', 'Jay', 'Jayson', 'Jean', 'Jeff', 'Jeffery', 'Jeffrey', 'Jeremy', 'Jerome', 'Jerry', 'Jesse', 'Jessie', 'Jett', 'Jimmy', 'Joe', 'Joel', 'Joey', 'Johan', 'John', 'Johnny', 'Jon', 'Jonah', 'Jonas', 'Jordan', 'Jorden', 'Jordon', 'Jordy', 'Josef', 'Joseph', 'Josh', 'Joshua', 'Jude', 'Julian', 'Julien', 'Junior', 'Justin', 'Justus', 'Justyn', 'Kameron', 'Kamron', 'Kane', 'Karl', 'Kasey', 'Kayden', 'Keanu', 'Keaton', 'Keegan', 'Keenan', 'Keith', 'Kelvin', 'Kenelm', 'Kenley', 'Kennedy', 'Kenny', 'Kent', 'Kenton', 'Keven', 'Kevin', 'Kevon', 'Keyon', 'Kim', 'Kimberley', 'King', 'Kingsley', 'Kinnard', 'Kinnell', 'Kinsey', 'Kipp', 'Kipper', 'Kippy', 'Kirk', 'Knox', 'Kobe', 'Koby', 'Kody', 'Kole', 'Korey', 'Kory', 'Kurt', 'Kyle', 'Lance', 'Landan', 'Landen', 'Landon', 'Lang', 'Larry', 'Lawrence', 'Lawson', 'Layton', 'Lee', 'Legolas', 'Leigh', 'Leland', 'Leo', 'Leon', 'Leonard', 'Leroy', 'Lewis', 'Liam', 'Lincoln', 'Lind', 'Linden', 'Linwood', 'Litton', 'Llewellyn', 'Logan', 'Louis', 'Luc', 'Lucas', 'Lukas', 'Luke', 'Lyndon', 'Lyre', 'Lytton', 'Mace', 'Madison', 'Maitland', 'Malcolm', 'Manley', 'Manning', 'Mansfield', 'Manton', 'Marc', 'Marcel', 'Marco', 'Marcus', 'Marden', 'Mardyth', 'Mark', 'Markus', 'Marland', 'Marley', 'Marlo', 'Marlon', 'Marlow', 'Marlowe', 'Marsden', 'Marsdon', 'Marshall', 'Marston', 'Martin', 'Marvin', 'Marwood', 'Mather', 'Mathew', 'Matthew', 'Maurice', 'Maverick', 'Max', 'Maxim', 'Maxwell', 'Mead', 'Melton', 'Melville', 'Melvin', 'Michael', 'Micheal', 'Mike', 'Miles', 'Millard', 'Miller', 'Mills', 'Millson', 'Milt', 'Milten', 'Milton', 'Milty', 'Mitchel', 'Morgan', 'Morven', 'Myles', 'Nash', 'Nathan', 'Nathanael', 'Nathanial', 'Nathaniel', 'Nathen', 'Neal', 'Nealson', 'Ned', 'Neddie', 'Neddy', 'Nedes', 'Neil', 'Neilson', 'Nellie', 'Nelly', 'Nelson', 'Neuman', 'Neumann', 'Newall', 'Newbold', 'Newell', 'Newgate', 'Newland', 'Newlin', 'Newman', 'Newmie', 'Newton', 'Nicholas', 'Nick', 'Nickolas', 'Nico', 'Nicolas', 'Nigel', 'Nikolas', 'Nilson', 'Noah', 'Noel', 'Nolan', 'Norm', 'Normal', 'Norman', 'Normand', 'Normie', 'Norris', 'North', 'Norton', 'Norville', 'Norvin', 'Norward', 'Norwell', 'Norwin', 'Norwood', 'Norwyn', 'Nowles', 'Numen', 'Nyle', 'Oakley', 'Ogden', 'Olin', 'Oliver', 'Orlando', 'Orman', 'Osbert', 'Osborn', 'Osborne', 'Oscar', 'Osmar', 'Osmond', 'Ossie', 'Oswald', 'Oswall', 'Oswell', 'Oswin', 'Owen', 'Oxford', 'Oxon', 'Oxton', 'Ozzie', 'Packard', 'Palmer', 'Park', 'Parke', 'Parker', 'Parkley', 'Parks', 'Parr', 'Parry', 'Pat', 'Paton', 'Patrick', 'Patten', 'Pattin', 'Patton', 'Paul', 'Paxton', 'Payton', 'Pearson', 'Pelham', 'Pell', 'Pelton', 'Penley', 'Penn', 'Perry', 'Peter', 'Peyton', 'Philip', 'Phillip', 'Phoenix', 'Pierce', 'Pierson', 'Prescott', 'Presley', 'Preston', 'Priest', 'Priestley', 'Priestly', 'Prince', 'Putnam', 'Putney', 'Quinn', 'Quinten', 'Quintin', 'Quinton', 'Rab', 'Rabbit', 'Rad', 'Radcliff', 'Radcliffe', 'Radclyf', 'Radclyffe', 'Radford', 'Radley', 'Radnor', 'Rae', 'Raff', 'Raffi', 'Raghnall', 'Rai', 'Raleigh', 'Ralf', 'Ralph', 'Ralston', 'Ramsay', 'Ramsey', 'Randy', 'Ransden', 'Ransford', 'Ransley', 'Ransom', 'Raoul', 'Raul', 'Raven', 'Ravi', 'Ravinger', 'Ravinia', 'Rawley', 'Rawlings', 'Rawlins', 'Rawls', 'Rawly', 'Rawson', 'Ray', 'Rayburn', 'Rayfield', 'Rayford', 'Raymond', 'Read', 'Reade', 'Reading', 'Red', 'Redd', 'Redding', 'Redfield', 'Redford', 'Redgrave', 'Redman', 'Redwald', 'Reed', 'Reg', 'Reggie', 'Reggy', 'Reginald', 'Regnauld', 'Reid', 'Reinald', 'Reinhold', 'Reinwald', 'Rell', 'Remington', 'Remme', 'Remmie', 'Remmy', 'Remy', 'Renato', 'Renault', 'Rene', 'Reuben', 'Rey', 'Reynold', 'Reynolds', 'Rhett', 'Richard', 'Rick', 'Rider', 'Ridley', 'Rigby', 'Riley', 'Rinaldo', 'Riobard', 'Rip', 'Ripley', 'Rishley', 'Riston', 'Rob', 'Robben', 'Robbie', 'Robbins', 'Robby', 'Rober', 'Robert', 'Roberto', 'Robey', 'Robin', 'Robinson', 'Rochester', 'Rod', 'Roddy', 'Roderick', 'Rodman', 'Rodney', 'Roger', 'Rohan', 'Roland', 'Rolf', 'Rolph', 'Ronald', 'Ronnie', 'Ross', 'Rowan', 'Roy', 'Ruben', 'Rubert', 'Ruddy', 'Rudy', 'Rudyard', 'Rupert', 'Russell', 'Rutherford', 'Ruthren', 'Ryan', 'Rycroft', 'Ryder', 'Rylan', 'Ryland', 'Ryle', 'Rylee', 'Ryley', 'Ryman', 'Rypley', 'Ryton', 'Sam', 'Sammy', 'Samson', 'Sanborn', 'Sandford', 'Sandon', 'Sandy', 'Sanford', 'Sawyer', 'Scot', 'Scott', 'Scottie', 'Scotty', 'Seabert', 'Seabright', 'Seabrook', 'Seabury', 'Sean', 'Seberg', 'Sebert', 'Seth', 'Severn', 'Seward', 'Sewell', 'Shane', 'Shaun', 'Shaw', 'Shawn', 'Shayne', 'Sheldon', 'Shell', 'Shelley', 'Shelli', 'Shelly', 'Shep', 'Shepard', 'Shepherd', 'Shepley', 'Sheppard', 'Sherborne', 'Sherlock', 'Sherm', 'Sherman', 'Sherwin', 'Sherwood', 'Shipley', 'Siddel', 'Sidwell', 'Simon', 'Skylar', 'Skyler', 'Slade', 'Snowden', 'Snowdun', 'Solomon', 'Sonny', 'Speck', 'Spence', 'Spencer', 'Spenser', 'Spike', 'Stanberry', 'Stanbury', 'Stanfield', 'Stanford', 'Stanhope', 'Stanleigh', 'Stanley', 'Stanly', 'Stanmore', 'Stanton', 'Stanway', 'Stanwick', 'Stanwyck', 'Stefan', 'Stephan', 'Stephen', 'Stephon', 'Steve', 'Steven', 'Stockman', 'Stockton', 'Stockwell', 'Stokley', 'Stroud', 'Stuart', 'Studs', 'Sullivan', 'Sydell', 'Tanner', 'Tate', 'Taylor', 'Ted', 'Teddie', 'Telford', 'Terrance', 'Terrel', 'Terrell', 'Terrence', 'Terrill', 'Terris', 'Terry', 'Thane', 'Thatcher', 'Theodore', 'Thomas', 'Thorald', 'Thorbert', 'Thorburn', 'Thorley', 'Thormond', 'Thorn', 'Thorndyke', 'Thornton', 'Thorne', 'Thornley', 'Thorpe', 'Thurber', 'Thurlow', 'Thurman', 'Thurmon', 'Thurmond', 'Timothy', 'Tirell', 'Tito', 'Titus', 'Tobias', 'Toby', 'Todd', 'Tomas', 'Tomkin', 'Tomlin', 'Tommy', 'Tompkin', 'Tony', 'Torold', 'Tostig', 'Towne', 'Townes', 'Townley', 'Townsend', 'Trace', 'Tranter', 'Travis', 'Travon', 'Trent', 'Trever', 'Trevon', 'Trevor', 'Trey', 'Tripp', 'Tristan', 'Tristen', 'Tristin', 'Triston', 'True', 'Trueman', 'Truesdale', 'Truman', 'Trystan', 'Tucker', 'Turner', 'Ty', 'Tye', 'Tyler', 'Tyne', 'Tyrell', 'Vance', 'Victor', 'Vincent', 'Wade', 'Waggoner', 'Wake', 'Wakefield', 'Wakeley', 'Wakeman', 'Walcot', 'Walcott', 'Walker', 'Wallace', 'Wallach', 'Wallas', 'Waller', 'Wallie', 'Wallis', 'Wally', 'Walsh', 'Walter', 'Walton', 'Ward', 'Wardell', 'Warden', 'Wardley', 'Warfield', 'Warford', 'Warley', 'Warmond', 'Warren', 'Warton', 'Warwick', 'Washington', 'Watkins', 'Watson', 'Watt', 'Waverly', 'Way', 'Wayland', 'Waylon', 'Wayne', 'Webb', 'Weber', 'Webley', 'Webster', 'Welborne', 'Welby', 'Welch', 'Weldon', 'Welford', 'Weller', 'Welles', 'Wells', 'Welsh', 'Welton', 'Wes', 'Wesley', 'Wess', 'Wessely', 'West', 'Westbrook', 'Westby', 'Westcott', 'Westleigh', 'Weston', 'Wetherby', 'Wheaton', 'Wheeler', 'Whit', 'Whitby', 'Whitcomb', 'Whitelaw', 'Whitfield', 'Whitford', 'Whitley', 'Whitlock', 'Whitman', 'Whitmore', 'Whittaker', 'Wiley', 'Wilfred', 'Wilfrid', 'Wilfried', 'Will', 'William', 'Willie', 'Wilson', 'Winchell', 'Windham', 'Windsor', 'Winfield', 'Winfred', 'Winfrey', 'Wingate', 'Winslow', 'Winston', 'Winthrop', 'Winton', 'Winward', 'Woodie', 'Woodrow', 'Woodruff', 'Woodward', 'Woody', 'Wright', 'Wylie', 'Wyn', 'Wyndam', 'Wynton', 'Xander', 'Xavier', 'Xzavier', 'Zachary', 'Zachery', 'Zack', 'Zackary', 'Zackery', 'Zavier'];
  const nm14 = ['Alana', 'Anita', 'Aria', 'Arietta', 'Ashlynne', 'Cadence', 'Catarina', 'Elanora', 'Ellyn', 'Fanny', 'Felicia', 'Goldie', 'Gretchen', 'Halley ', 'Hylee', 'Ira', 'Isabelle', 'Joan-Marie', 'Johanna', 'Junisa', 'Kenite', 'Kyla', 'Lillyn', 'Luana', 'Lucilla', 'Marcielle', 'Marigold', 'Marsha', 'Merry', 'Mianna', 'Mirabelle', 'Norae', 'Peyton', 'Prima', 'Robyn', 'Rosamund', 'Rowena', 'Scarlett', 'Shahana', 'Sophietta', 'Vivianne', 'Wihnhilda', 'Arenya', 'Calissa', 'Doreese', 'Estina', 'Falline', 'Indra', 'Kantrilla', 'Marcine', 'Mariella', 'Sarise', 'Valena', 'Arlissa', 'Ariella', 'Sybil', 'Abagail', 'Abbey', 'Abbie', 'Abbigail', 'Abby', 'Abigail', 'Abigale', 'Abigayle', 'Addison', 'Adeline', 'Adriana', 'Adrianna', 'Adrienne', 'Afton', 'Agrona', 'Aida', 'Aileen', 'Aimee', 'Aislinn', 'Alcott', 'Alden', 'Aldercy', 'Alena', 'Alex', 'Alexa', 'Alexia', 'Alexis', 'Alexus', 'Alexys', 'Alia', 'Alice', 'Alicia', 'Alina', 'Alisa', 'Alisha', 'Alison', 'Alissa', 'Aliya', 'Aliyah', 'Aliza', 'Alize', 'Allie', 'Allison', 'Ally', 'Allyson', 'Allyssa', 'Alvina', 'Alycia', 'Alysa', 'Alysha', 'Alyson', 'Alyssa', 'Amanda', 'Amber', 'Amberjill', 'Amelia', 'Amy', 'Ana', 'Anabel', 'Anastasia', 'Andrea', 'Angela', 'Angelica', 'Angelina', 'Angeline', 'Angelique', 'Angie', 'Anissa', 'Anita', 'Ann', 'Anna', 'Annabel', 'Annabella', 'Annabelle', 'Anne', 'Annette', 'Annie', 'Annika', 'Ansley', 'Antonia', 'Arantxa', 'Aria', 'Ariana', 'Arianna', 'Ariel', 'Arielle', 'Arleigh', 'Arlene', 'Armani', 'Aryanna', 'Ash', 'Ashby', 'Ashe', 'Ashford', 'Ashi', 'Ashlan', 'Ashlee', 'Ashleigh', 'Ashley', 'Ashli', 'Ashlie', 'Ashlin', 'Ashling', 'Ashly', 'Ashlyn', 'Ashlynn', 'Aspen', 'Astrid', 'Athena', 'Aubree', 'Aubrey', 'Aubrie', 'Audery', 'Audey', 'Audie', 'Audra', 'Audrey', 'Audry', 'Aurora', 'Autumn', 'Ava', 'Avery', 'Avon', 'Ayana', 'Ayanna', 'Ayla', 'Aylin', 'Bailee', 'Bailey', 'Barbara', 'Baxter', 'Baylee', 'Belen', 'Bella', 'Berenice', 'Bert', 'Berta', 'Berthe', 'Bertie', 'Bethany', 'Bev', 'Beverely', 'Beverley', 'Beverly', 'Bianca', 'Blaine', 'Blanca', 'Blossom', 'Blythe', 'Bobbi', 'Bobbie', 'Bobby', 'Brandi', 'Brandy', 'Brea', 'Breana', 'Breanna', 'Brenda', 'Brenna', 'Breonna', 'Bria', 'Briana', 'Brianna', 'Brianne', 'Bridget', 'Brielle', 'Brionna', 'Brisa', 'Britney', 'Brittany', 'Brittney', 'Brook', 'Brooke', 'Brookes', 'Brooks', 'Bryana', 'Bryanna', 'Buffy', 'Cady', 'Caitlin', 'Caitlyn', 'Cali', 'Calista', 'Callie', 'Cam', 'Cameron', 'Camila', 'Camille', 'Camm', 'Cammie', 'Camyron', 'Cara', 'Carina', 'Carissa', 'Carla', 'Carlee', 'Carley', 'Carli', 'Carlie', 'Carling', 'Carly', 'Carmen', 'Carol', 'Carolina', 'Caroline', 'Carolyn', 'Carrie', 'Carson', 'Casandra', 'Casey', 'Cassandra', 'Cassidy', 'Cassie', 'Catalina', 'Catherine', 'Cayla', 'Cecelia', 'Cecilia', 'Celeste', 'Celia', 'Celina', 'Celine', 'Chana', 'Charity', 'Charlotte', 'Chasity', 'Chaya', 'Chelsea', 'Chelsey', 'Chelsie', 'Cheyanne', 'Cheyenne', 'Chloe', 'Christa', 'Christian', 'Christiana', 'Christina', 'Christine', 'Christy', 'Cindy', 'Claiborne', 'Claire', 'Clara', 'Clare', 'Clarissa', 'Claudia', 'Clothilde', 'Clotilde', 'Clovis', 'Colleen', 'Columbia', 'Cora', 'Corinne', 'Corliss', 'Courtney', 'Cristal', 'Cristina', 'Crystal', 'Cynthia', 'Daisey', 'Daisy', 'Dakota', 'Damie', 'Dana', 'Dania', 'Daniela', 'Daniella', 'Danielle', 'Danna', 'Daphne', 'Daralis', 'Darlene', 'Dasia', 'Dawn', 'Deborah', 'Delilah', 'Demelza', 'Demie', 'Denise', 'Denisse', 'Desirae', 'Desiree', 'Destinee', 'Destiney', 'Destini', 'Destiny', 'Devon', 'Diana', 'Diane', 'Dianna', 'Dominique', 'Donna', 'Dorothy', 'Eartha', 'Easter', 'Ebony', 'Eda', 'Edda', 'Eden', 'Edith', 'Edlyn', 'Edolie', 'Edsel', 'Eileen', 'Elaina', 'Elaine', 'Eleanor', 'Elena', 'Eliana', 'Elisa', 'Elisabeth', 'Elise', 'Elissa', 'Eliza', 'Elizabeth', 'Ella', 'Elle', 'Ellen', 'Ellie', 'Elsa', 'Elyse', 'Elyssa', 'Ember', 'Emely', 'Emerson', 'Emilee', 'Emilia', 'Emilie', 'Emily', 'Emma', 'Ena', 'Enna', 'Erica', 'Ericka', 'Erika', 'Erin', 'Esther', 'Ethel', 'Eva', 'Eve', 'Evelin', 'Evelyn', 'Faith', 'Farrah', 'Fearn', 'Fearne', 'Felicia', 'Felicity', 'Fern', 'Ferne', 'Fernly', 'Fiona', 'Fleta', 'Gabriela', 'Gabriella', 'Gabrielle', 'Gail', 'Gale', 'Gayle', 'Genevieve', 'Gia', 'Giana', 'Gianna', 'Gillian', 'Gina', 'Gioa', 'Giselle', 'Gisselle', 'Gleda', 'Gloria', 'Godiva', 'Golda', 'Goldie', 'Grace', 'Gracie', 'Gretchen', 'Gwendolyn', 'Gypsy', 'Gytha', 'Hadley', 'Hailee', 'Hailey', 'Hailie', 'Haleigh', 'Haley', 'Halie', 'Halle', 'Hallie', 'Halsey', 'Hana', 'Hanna', 'Hannah', 'Harley', 'Harmony', 'Harva', 'Harvelle', 'Harvina', 'Harvine', 'Hayden', 'Haylee', 'Hayleigh', 'Hayley', 'Haylie', 'Hazel', 'Heather', 'Hedwig', 'Heidi', 'Helen', 'Helena', 'Hertha', 'Hollace', 'Hollee', 'Holli', 'Hollie', 'Holly', 'Hollye', 'Honey', 'Hope', 'Ida', 'Idina', 'Iliana', 'Ingrid', 'Irene', 'Iris', 'Isabel', 'Isabela', 'Isabell', 'Isabella', 'Isabelle', 'Isolda', 'Ivy', 'Izabella', 'Jacey', 'Jackeline', 'Jaclyn', 'Jacqueline', 'Jacquelyn', 'Jada', 'Jade', 'Jaden', 'Jadyn', 'Jaelyn', 'Jaida', 'Jaiden', 'Jaidyn', 'Jailyn', 'Jaime', 'Jamie', 'Jana', 'Janae', 'Jane', 'Janet', 'Janice', 'Janie', 'Jaquelin', 'Jaqueline', 'Jasmin', 'Jasmine', 'Jasmyn', 'Jayda', 'Jayde', 'Jayden', 'Jayla', 'Jaylene', 'Jaylin', 'Jaylyn', 'Jaylynn', 'Jazlyn', 'Jazmin', 'Jazmine', 'Jazmyn', 'Jazmyne', 'Jeanette', 'Jena', 'Jenifer', 'Jenna', 'Jennifer', 'Jenny', 'Jessica', 'Jessie', 'Jill', 'Jillian', 'Joana', 'Joanna', 'Jocelyn', 'Joelle', 'Johana', 'Johanna', 'Joia', 'Joie', 'Jolie', 'Jonesy', 'Joselyn', 'Josephine', 'Josie', 'Joslyn', 'Journey', 'Joy', 'Joyce', 'Judith', 'Julia', 'Juliana', 'Julianna', 'Julianne', 'Julie', 'Juliet', 'Juliette', 'Justine', 'Kacie', 'Kaela', 'Kaelyn', 'Kaila', 'Kailee', 'Kailey', 'Kailyn', 'Kaitlin', 'Kaitlyn', 'Kaitlynn', 'Kaiya', 'Kaleigh', 'Kaley', 'Kali', 'Kaliyah', 'Kallie', 'Kalyn', 'Kara', 'Karen', 'Kari', 'Karla', 'Karlee', 'Karley', 'Karli', 'Karlie', 'Karly', 'Kasandra', 'Kasey', 'Kassandra', 'Kassidy', 'Katarina', 'Kate', 'Katelin', 'Katelyn', 'Katelynn', 'Katerina', 'Katharine', 'Katherine', 'Kathleen', 'Kathryn', 'Kathy', 'Katie', 'Katlyn', 'Katrina', 'Katy', 'Kayla', 'Kaylah', 'Kaylee', 'Kayleigh', 'Kayley', 'Kayli', 'Kaylie', 'Kaylin', 'Kaylyn', 'Kaylynn', 'Keeley', 'Keely', 'Keila', 'Keira', 'Kelli', 'Kellie', 'Kelly', 'Kelsey', 'Kelsi', 'Kelsie', 'Kelsy', 'Kemble', 'Kendra', 'Kenya', 'Kenzie', 'Keyla', 'Kiana', 'Kianna', 'Kiara', 'Kiera', 'Kierra', 'Kiersten', 'Kiley', 'Kim', 'Kimball', 'Kimbell', 'Kimberley', 'Kimberly', 'Kimble', 'Kimby', 'Kimmey', 'Kimmi', 'Kimmie', 'Kimmy', 'Kira', 'Kirsten', 'Kiya', 'Kourtney', 'Krista', 'Kristen', 'Kristin', 'Kristina', 'Kya', 'Kyla', 'Kylee', 'Kyleigh', 'Kylie', 'Kym', 'Kymberly', 'Kyra', 'Lacey', 'Laila', 'Lana', 'Laney', 'Lara', 'Larissa', 'Laura', 'Laurel', 'Lauren', 'Lauryn', 'Layla', 'Lea', 'Leah', 'Lee', 'Leigh', 'Leila', 'Leslie', 'Lexi', 'Lexie', 'Liana', 'Libby', 'Liberty', 'Lila', 'Lilian', 'Liliana', 'Lillian', 'Lilliana', 'Lillie', 'Lilly', 'Lily', 'Lina', 'Linda', 'Lindsay', 'Lindsey', 'Lisa', 'Lisbeth', 'Lizbeth', 'Lizeth', 'Lizette', 'Locke', 'Loella', 'Loren', 'Lorena', 'Louella', 'Love', 'Lovie', 'Lucia', 'Lucy', 'Luella', 'Luelle', 'Lydia', 'Lyndsey', 'Lyric', 'Macey', 'Maci', 'Macie', 'Mackenzie', 'Macy', 'Madalyn', 'Madalynn', 'Maddison', 'Madeleine', 'Madeline', 'Madelyn', 'Madelynn', 'Madilyn', 'Madisen', 'Madison', 'Madisyn', 'Mady', 'Madyson', 'Maegan', 'Maeve', 'Maggie', 'Maia', 'Maida', 'Maidel', 'Maidie', 'Maidy', 'Maisie', 'Maitane', 'Makaila', 'Makayla', 'Makenzie', 'Mallory', 'Manda', 'Mandy', 'Manhattan', 'Manny', 'Margaret', 'Margarita', 'Maria', 'Mariah', 'Mariam', 'Mariana', 'Marianna', 'Maribel', 'Marie', 'Mariela', 'Marilyn', 'Marina', 'Marisa', 'Marissa', 'Marlee', 'Marlene', 'Marley', 'Martha', 'Mary', 'Maya', 'Mayda', 'Mckayla', 'Mckenna', 'Mckenzie', 'Meadow', 'Meagan', 'Meaghan', 'Megan', 'Meghan', 'Melanie', 'Melany', 'Melina', 'Melinda', 'Melissa', 'Melody', 'Meredith', 'Mia', 'Miah', 'Michelle', 'Mina', 'Miracle', 'Miranda', 'Miriam', 'Mirth', 'Missie', 'Missy', 'Missye', 'Mistee', 'Mistey', 'Misty', 'Miya', 'Mollie', 'Molly', 'Monica', 'Monique', 'Montana', 'Morgan', 'Mya', 'Myah', 'Myra', 'Nadia', 'Nancy', 'Naomi', 'Nara', 'Natalia', 'Natalie', 'Nataly', 'Natasha', 'Nathalie', 'Nia', 'Nichole', 'Nicole', 'Nikki', 'Nina', 'Nora', 'Nya', 'Nyah', 'Olivia', 'Paige', 'Palma', 'Palmiera', 'Palmira', 'Palmyra', 'Pamela', 'Parker', 'Patience', 'Patricia', 'Paula', 'Paulina', 'Penelope', 'Phoebe', 'Piper', 'Poppy', 'Priscila', 'Priscilla', 'Pyper', 'Queena', 'Rachel', 'Radella', 'Raven', 'Reanna', 'Rebeca', 'Rebecca', 'Rebekah', 'Reese', 'Regina', 'Reilly', 'Renee', 'Reyna', 'Riley', 'Rita', 'Riya', 'Robbin', 'Roberta', 'Robin', 'Robina', 'Robinette', 'Robyn', 'Rosa', 'Rose', 'Rosemary', 'Roxana', 'Ruby', 'Ruperta', 'Ruth', 'Rylee', 'Ryleigh', 'Rylie', 'Sabrina', 'Sage', 'Saige', 'Sally', 'Samantha', 'Samara', 'Sandra', 'Sandy', 'Sara', 'Sarah', 'Sasha', 'Scarlet', 'Scarlett', 'Selby', 'Selden', 'Seldon', 'Selena', 'Selina', 'Selwin', 'Selwyn', 'Serena', 'Serenity', 'Shandy', 'Shannon', 'Sharon', 'Sheila', 'Sherey', 'Sherlie', 'Shir', 'Shirl', 'Shirlee', 'Shirleen', 'Shirleigh', 'Shirley', 'Shurl', 'Shurlie', 'Sidney', 'Simone', 'Sky', 'Skye', 'Skyla', 'Skylar', 'Skyler', 'Sofia', 'Sonia', 'Sonya', 'Sophia', 'Sophie', 'Stacey', 'Stacy', 'Stella', 'Stephanie', 'Stephany', 'Storm', 'Storme', 'Stormie', 'Stormy', 'Summer', 'Susan', 'Susana', 'Sydnee', 'Sydney', 'Sydni', 'Sydnie', 'Sylvia', 'Tait', 'Taite', 'Taitum', 'Talia', 'Tamara', 'Tamia', 'Tania', 'Taniya', 'Tanya', 'Tara', 'Tat', 'Tatiana', 'Tatum', 'Tatyana', 'Tavia', 'Taya', 'Tayler', 'Tayte', 'Teresa', 'Tess', 'Tessa', 'Thalia', 'Theresa', 'Thistle', 'Tia', 'Tiana', 'Tianna', 'Tiffany', 'Tina', 'Tori', 'Tracy', 'Trinity', 'Trudy', 'Tuesday', 'Ulla', 'Vala', 'Valentina', 'Valeria', 'Valerie', 'Vanesa', 'Vanessa', 'Veronica', 'Victoria', 'Violet', 'Virginia', 'Vivian', 'Viviana', 'Wendy', 'Whitney', 'Willow', 'Wilona', 'Winifred', 'Winter', 'Yasmin', 'Yasmine', 'Yazmin', 'Yedda', 'Yetta', 'Yolanda', 'Yuliana', 'Yvette', 'Yvonne', 'Zaria', 'Zoe', 'Zoey', 'Zoie'];
  const nm15 = ['Abram', 'Acton', 'Addington', 'Adlam', 'Ainsworth', 'Alby', 'Alden', 'Allerton', 'Alston', 'Altham', 'Alvingham', 'Anderton', 'Appleton', 'Asheton', 'Ashley', 'Ashton', 'Astley', 'Atherton', 'Atterton', 'Barclay', 'Barlow', 'Barney', 'Barrie', 'Barton', 'Beasant', 'Beckwith', 'Benson', 'Bentham', 'Bentley', 'Berkeley', 'Beverly', 'Bing', 'Birkenhead', 'Blackwood', 'Blakemore', 'Blankley', 'Blythe', 'Bourne', 'Bradford', 'Bradley', 'Bradly', 'Bradshaw', 'Brady', 'Brandon', 'Branson', 'Braxton', 'Breeden', 'Brent', 'Bristol', 'Brooks', 'Brown', 'Browning', 'Brownrigg', 'Buckley', 'Bunce', 'Burbridge', 'Burlingame', 'Burton', 'Bush', 'Byron', 'Camden', 'Carlisle', 'Carlton', 'Carlyle', 'Charlton', 'Chatham', 'Cheek', 'Chester', 'Cholmondeley', 'Churchill', 'Clapham', 'Clare', 'Claridge', 'Clark', 'Clayden', 'Clayton', 'Clemons', 'Clifford', 'Clifton', 'Clinton', 'Clive', 'Colby', 'Colton', 'Compton', 'Coombs', 'Cooper', 'Copeland', 'Cotton', 'Crawford', 'Crompton', 'Cromwell', 'Crowder', 'Crutchley', 'Currington', 'Dalton', 'Darby', 'Davenport', 'Dawson', 'Dayton', 'Deighton', 'Denholm', 'Digby', 'Dryden', 'Dudley', 'Duke', 'Dukes', 'Earle', 'Eastaughffe', 'Eastoft', 'Elton', 'Emsworth', 'England', 'Farnham', 'Fawcett', 'Fisc', 'Fiske', 'Fletcher', 'Foy', 'Fulton', 'Gale', 'Garfield', 'Garrick', 'Garside', 'Garthside', 'Gartside', 'Gladstone', 'Godwin', 'Goodwin', 'Graeme', 'Graham', 'Gresham', 'Hackney', 'Hailey', 'Hale', 'Haley', 'Hallewell', 'Hamet', 'Hamilton', 'Hammett', 'Hampton', 'Harding', 'Harley', 'Harrington', 'Harrison', 'Hartford', 'Hastings', 'Hayden', 'Hayes', 'Hayhurst', 'Hayley', 'Helton', 'Hildom', 'Holt', 'Holton', 'Home', 'Hornsby', 'Huckabee', 'Huxley', 'Johnson', 'Keats', 'Kelsey', 'Kendal', 'Kendall', 'Kent', 'Kimberley', 'Kimberly', 'Kirby', 'Knotley', 'Knottley', 'Lancaster', 'Landon', 'Langdon', 'Langley', 'Law', 'Lea', 'Lee', 'Leighton', 'Lester', 'Lincoln', 'Lindsay', 'Lindsey', 'Livingstone', 'Luxford', 'Mabbott', 'Marlowe', 'Melling', 'Melton', 'Mendenhall', 'Merton', 'Middleton', 'Mildenhall', 'Milton', 'Mitchell', 'Morley', 'Morton', 'Myerscough', 'Nash', 'Netley', 'Newberry', 'Newbery', 'Newbury', 'Nibley', 'Noonan', 'Norton', 'Notleigh', 'Notley', 'Nottley', 'Nunnally', 'Nutlea', 'Nutlee', 'Oakley', 'Ogden', 'Oldham', 'Outerbridge', 'Paddle', 'Paddley', 'Padley', 'Payton', 'Peddle', 'Penney', 'Penny', 'Perry', 'Peyton', 'Pickering', 'Pinkerton', 'Prescott', 'Presley', 'Preston', 'Ramsay', 'Ramsey', 'Read', 'Reed', 'Reeve', 'Reeves', 'Reid', 'Remington', 'Richmond', 'Ridley', 'Riley', 'Rischer', 'Rivers', 'Rodney', 'Roscoe', 'Rowley', 'Royal', 'Royston', 'Rudge', 'Rudges', 'Rutherford', 'Rutland', 'Rylan', 'Sagar', 'Sampson', 'Sharman', 'Shearman', 'Shelby', 'Sheldon', 'Shelley', 'Shelly', 'Sherman', 'Sherwood', 'Shirley', 'Shurman', 'Sidney', 'Smit', 'Smith', 'Smithe', 'Smither', 'Smithers', 'Smithies', 'Smithy', 'Smyth', 'Smythe', 'Snape', 'Snowdon', 'Soames', 'Southey', 'Spalding', 'Spaulding', 'Spooner', 'Springfield', 'Stafford', 'Stamper', 'Stampes', 'Stanford', 'Stanley', 'Stansfield', 'Stanton', 'Stevens', 'Stevenson', 'Stonebridge', 'Stratford', 'Sutherland', 'Sutton', 'Swail', 'Swailes', 'Swale', 'Swales', 'Sweat', 'Sweet', 'Sweete', 'Swet', 'Swett', 'Sydney', 'Tattersall', 'Thackeray', 'Thorne', 'Thornton', 'Thorp', 'Thorpe', 'Tindall', 'Torp', 'Townend', 'Townsend', 'Trollope', 'Twynam', 'Tyndall', 'Upton', 'Ward', 'Watt', 'Webb', 'Whatley', 'Wheatleigh', 'Wheatley', 'Whiteley', 'Whitley', 'Whitney', 'Williams', 'Wither', 'Withers', 'Wyther', 'Yardley', 'Yeardley'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 3) {
        while (rnd < 5) {
          rnd = Math.floor(Math.random() * nm1.length);
        }
        names = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd5];
      }
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 5) {
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[rnd7] + nm8[rnd5];
      }
    } else if (type === 3) {
      rnd = Math.floor(Math.random() * nm9.length);
      rnd2 = Math.floor(Math.random() * nm10.length);
      rnd5 = Math.floor(Math.random() * nm12.length);
      if (i < 3) {
        while (rnd < 5) {
          rnd = Math.floor(Math.random() * nm9.length);
        }
        names = nm9[rnd] + nm10[rnd2] + nm12[rnd5];
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm11.length);
        rnd4 = Math.floor(Math.random() * nm10.length);
        names = nm9[rnd] + nm10[rnd2] + nm11[rnd3] + nm10[rnd4] + nm12[rnd5];
      } else {
        rnd3 = Math.floor(Math.random() * nm11.length);
        rnd4 = Math.floor(Math.random() * nm10.length);
        rnd6 = Math.floor(Math.random() * nm11.length);
        rnd7 = Math.floor(Math.random() * nm10.length);
        names = nm10[rnd2] + nm11[rnd3] + nm10[rnd4] + nm11[rnd6] + nm10[rnd7] + nm12[rnd5];
      }
    } else if (type === 4) {
      rnd = Math.floor(Math.random() * nm13.length);
      rnd2 = Math.floor(Math.random() * nm15.length);
      names = `${nm13[rnd]} ${nm15[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm14.length);
      rnd2 = Math.floor(Math.random() * nm15.length);
      names = `${nm14[rnd]} ${nm15[rnd2]}`;
    }
    return names;
  }
}
