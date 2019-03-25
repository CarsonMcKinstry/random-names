export default function stages() {
  let rnd2;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aaron', 'Adam', 'Adrian', 'Alan', 'Albert', 'Alec', 'Alek', 'Alex', 'Alexander', 'Alfred', 'Allan', 'Allen', 'Alvin', 'Andre', 'Andrew', 'Angel', 'Anthony', 'Arnold', 'Art', 'Arthur', 'Ash', 'Ashton', 'Austin', 'Barry', 'Ben', 'Benjamin', 'Benji', 'Bennie', 'Benny', 'Bernard', 'Bert', 'Bill', 'Billie', 'Billy', 'Blake', 'Bob', 'Bobbie', 'Bobby', 'Brad', 'Bradley', 'Brandon', 'Brendan', 'Brent', 'Brett', 'Brian', 'Brody', 'Bruce', 'Bryan', 'Calvin', 'Cameron', 'Carl', 'Carter', 'Casey', 'Chad', 'Charles', 'Charley', 'Charlie', 'Chase', 'Chester', 'Chris', 'Christian', 'Christopher', 'Clyde', 'Cody', 'Cole', 'Colin', 'Collin', 'Conner', 'Connor', 'Cooper', 'Corey', 'Craig', 'Criss', 'Cristian', 'Dale', 'Damian', 'Damon', 'Dan', 'Daniel', 'Dannie', 'Danny', 'Darren', 'Darryl', 'Daryl', 'Dave', 'David', 'Dean', 'Dennis', 'Derek', 'Devin', 'Don', 'Donald', 'Donnie', 'Donny', 'Drew', 'Duane', 'Dustin', 'Dwayne', 'Dwight', 'Dylan', 'Earl', 'Ed', 'Edd', 'Eddie', 'Eddy', 'Edgar', 'Edward', 'Edwin', 'Elias', 'Eric', 'Erik', 'Ernest', 'Ethan', 'Even', 'Felix', 'Floyd', 'Francis', 'Frank', 'Frankie', 'Franklin', 'Fred', 'Freddie', 'Freddy', 'Garry', 'Gary', 'Gavin', 'Gene', 'George', 'Gerald', 'Gerard', 'Glen', 'Gordon', 'Grant', 'Greg', 'Gregory', 'Guy', 'Harold', 'Harry', 'Harvey', 'Hector', 'Henry', 'Herman', 'Hognny', 'Howard', 'Hubert', 'Hugh', 'Hunter', 'Ian', 'Irvin', 'Isaac', 'Ivan', 'Jack', 'Jackie', 'Jackson', 'Jacob', 'Jake', 'James', 'Jamie', 'Jared', 'Jason', 'Jay', 'Jeff', 'Jeffrey', 'Jeremy', 'Jerry', 'Jesse', 'Jessie', 'Jim', 'Jimmie', 'Jimmy', 'Joe', 'Joel', 'John', 'Johnathan', 'Johnnie', 'Jonah', 'Jordan', 'Joseph', 'Junior', 'Justin', 'Karl', 'Keith', 'Kevin', 'Kirk', 'Kris', 'Kurt', 'Kyle', 'Lance', 'Larry', 'Lee', 'Leo', 'Leonard', 'Leonardo', 'Leslie', 'Lester', 'Lewis', 'Liam', 'Logan', 'Louis', 'Lucas', 'Luke', 'Mack', 'Marc', 'Marcus', 'Mark', 'Martin', 'Marvin', 'Matthew', 'Max', 'Maxwell', 'Michael', 'Mike', 'Morris', 'Nathan', 'Neil', 'Nicholas', 'Nick', 'Nicolas', 'Noah', 'Oliver', 'Oscar', 'Owen', 'Patrick', 'Paul', 'Perry', 'Pete', 'Peter', 'Philip', 'Phillip', 'Ralph', 'Randy', 'Ray', 'Raymond', 'Rex', 'Richard', 'Rick', 'Ricky', 'Robert', 'Robin', 'Roger', 'Roland', 'Ronald', 'Roscoe', 'Ross', 'Ruben', 'Russell', 'Ryan', 'Sam', 'Samuel', 'Scott', 'Sean', 'Seth', 'Shane', 'Shawn', 'Stan', 'Stanley', 'Stephen', 'Steve', 'Steven', 'Stuart', 'Ted', 'Teddie', 'Teddy', 'Terrence', 'Terry', 'Theo', 'Thomas', 'Tim', 'Timmy', 'Timothy', 'Todd', 'Tom', 'Tommy', 'Tony', 'Travis', 'Trevor', 'Tyler', 'Victor', 'Vincent', 'Walter', 'Wayne', 'Will', 'William', 'Zach'];
  const nm2 = ['Abby', 'Addison', 'Adriana', 'Adrienne', 'Aimee', 'Alana', 'Alexa', 'Alexia', 'Alexis', 'Alice', 'Alicia', 'Alisha', 'Allison', 'Amanda', 'Amber', 'Amee', 'Amy', 'Ana', 'Angela', 'Angelina', 'Anita', 'Ann', 'Anna', 'Anne', 'Annie', 'Arianna', 'Ariel', 'Ashlee', 'Ashley', 'Ava', 'Avery', 'Barbara', 'Becky', 'Beth', 'Bethany', 'Betty', 'Bonnie', 'Brandy', 'Briana', 'Bridget', 'Brittany', 'Brooke', 'Caitlyn', 'Camilla', 'Carly', 'Carmen', 'Carol', 'Carolyn', 'Casey', 'Cassie', 'Cathy', 'Charlotte', 'Chelsea', 'Cheryl', 'Chloe', 'Christina', 'Christine', 'Christy', 'Cindy', 'Claire', 'Clara', 'Courtney', 'Daisy', 'Dana', 'Daniel', 'Danielle', 'Dawn', 'Debbie', 'Debra', 'Denise', 'Desiree', 'Diana', 'Diane', 'Donna', 'Dora', 'Dorothy', 'Edit', 'Eileen', 'Elizabeth', 'Elize', 'Ella', 'Ellen', 'Ellie', 'Elsie', 'Emily', 'Emma', 'Erica', 'Erika', 'Erin', 'Esther', 'Eva', 'Evelyn', 'Faith', 'Faye', 'Georgia', 'Gianna', 'Gina', 'Gloria', 'Grace', 'Gracie', 'Hailey', 'Haley', 'Hanna', 'Hannah', 'Hazel', 'Heather', 'Helen', 'Hope', 'Irene', 'Isabel', 'Iva', 'Ivy', 'Jackie', 'Jade', 'Jamie', 'Jane', 'Janet', 'Jasmin', 'Jean', 'Jenna', 'Jennie', 'Jennifer', 'Jenny', 'Jessie', 'Jo', 'Joan', 'Joanne', 'Jody', 'Jordan', 'Jordyn', 'Joy', 'Joyce', 'Judith', 'Judy', 'Julia', 'Julie', 'June', 'Kaitlyn', 'Karen', 'Karla', 'Kate', 'Katelyn', 'Kathy', 'Katie', 'Kay', 'Kaylee', 'Kelli', 'Kellie', 'Kelly', 'Kelsey', 'Kendra', 'Kerry', 'Kim', 'Kimberly', 'Kirsten', 'Krista', 'Kristen', 'Kristie', 'Kristina', 'Kristine', 'Kylie', 'Laura', 'Lauren', 'Lea', 'Leah', 'Lela', 'Lena', 'Leona', 'Lila', 'Lilian', 'Liliana', 'Lilly', 'Lily', 'Linda', 'Lindsay', 'Lindsey', 'Lisa', 'Lizzie', 'Lola', 'Lori', 'Lottie', 'Louise', 'Lucy', 'Lynda', 'Lynn', 'Madelyn', 'Madison', 'Mae', 'Maggie', 'Mandy', 'Maria', 'Mariah', 'Marie', 'Marion', 'Marisa', 'Marlene', 'Mary', 'May', 'Maya', 'Megan', 'Melinda', 'Melissa', 'Melody', 'Mia', 'Michele', 'Michelle', 'Mindy', 'Miriam', 'Misty', 'Molly', 'Monica', 'Morgan', 'Mya', 'Nancy', 'Naomi', 'Natalie', 'Nichole', 'Nicole', 'Nina', 'Nora', 'Olivia', 'Opal', 'Pamela', 'Pauline', 'Pearl', 'Peggy', 'Penny', 'Rachel', 'Raven', 'Reagon', 'Rebecca', 'Renee', 'Robin', 'Robyn', 'Rose', 'Rosie', 'Ruby', 'Ruth', 'Sally', 'Sam', 'Samantha', 'Sandra', 'Sandy', 'Sara', 'Sarah', 'Selena', 'Selene', 'Serenity', 'Shannon', 'Sharon', 'Skylar', 'Sofia', 'Sonya', 'Sophie', 'Stacey', 'Stacie', 'Stacy', 'Stefanie', 'Sue', 'Summer', 'Susan', 'Susie', 'Sydney', 'Tanya', 'Tara', 'Taylor', 'Tina', 'Tracie', 'Trinity', 'Valerie', 'Veronica', 'Vickie', 'Vicky', 'Victoria', 'Viola', 'Violet', 'Vivian', 'Wendy', 'Zoe', 'Zoey'];
  const nm3 = ['Ace', 'Adams', 'Alexander', 'Allen', 'Anderson', 'Angel', 'Apollo', 'Argo', 'Arthur', 'Ash', 'Ashley', 'Austin', 'B', 'Baker', 'Ball', 'Banks', 'Banner', 'Barrett', 'Barron', 'Barrymore', 'Bear', 'Bell', 'Bennett', 'Berrymore', 'Bert', 'Birch', 'Bishop', 'Black', 'Blade', 'Blake', 'Bloom', 'Blue', 'Bolt', 'Bone', 'Bones', 'Brandon', 'Bravo', 'Brooke', 'Brooks', 'Brown', 'Bruce', 'Button', 'Cage', 'Caine', 'Call', 'Cameron', 'Cannon', 'Carol', 'Carr', 'Carroll', 'Carter', 'Castle', 'Chandler', 'Charles', 'Chase', 'Child', 'Christy', 'Claire', 'Clare', 'Clark', 'Clay', 'Cliff', 'Cole', 'Coleman', 'Colt', 'Cooper', 'Cotton', 'Cougar', 'Coyote', 'Craig', 'Crane', 'Crash', 'Cross', 'Dale', 'Dane', 'Dare', 'Dark', 'Darrow', 'David', 'Davis', 'Dawn', 'Day', 'Dee', 'Dell', 'Diamond', 'Douglas', 'Drake', 'Dreamer', 'Duff', 'Duke', 'Duncan', 'Dusk', 'Earl', 'East', 'Edwards', 'Elliot', 'Ellis', 'Evans', 'Everett', 'Faire', 'Faith', 'Fame', 'Fawn', 'Fay', 'Fields', 'Fierce', 'Ford', 'Forrest', 'Foster', 'Fox', 'Freedom', 'Gale', 'Gates', 'Gear', 'George', 'Gibbs', 'Gibson', 'Gilmore', 'Gordon', 'Grant', 'Graves', 'Gray', 'Green', 'Griffin', 'Hale', 'Hammer', 'Hammond', 'Harris', 'Havoc', 'Hawk', 'Hill', 'Holmes', 'Holt', 'Howard', 'Hunter', 'Iris', 'Isle', 'Ivory', 'Jackson', 'James', 'Jason', 'Jay', 'Jet', 'Johnson', 'Jones', 'Jordan', 'Josh', 'Joy', 'Joyce', 'Kane', 'Keith', 'Kennedy', 'Kerry', 'Keys', 'Khan', 'Kidd', 'King', 'Kingsley', 'Kiss', 'Kitt', 'Knight', 'Kole', 'Laine', 'Lake', 'Law', 'Lawrence', 'Legend', 'Leigh', 'Leo', 'Lewis', 'Light', 'Little', 'Living', 'Livingston', 'Lloyd', 'Locke', 'Logan', 'Lord', 'Love', 'Lover', 'Lynn', 'Mac', 'Mack', 'Madison', 'Man', 'Mann', 'March', 'Mars', 'Marsh', 'Marshall', 'Martin', 'May', 'Mell', 'Mercury', 'Merrill', 'Michaels', 'Miles', 'Mill', 'Miller', 'Mitchell', 'Money', 'Moon', 'Moore', 'Morgan', 'Murray', 'Mythic', 'Nash', 'Nelson', 'Neptune', 'Nicholas', 'Nixon', 'Noble', 'Nolan', 'North', 'Nova', 'Nye', 'Ocean', 'Oliver', 'Orange', 'Oz', 'Page', 'Paige', 'Palmer', 'Park', 'Parker', 'Parrish', 'Patrick', 'Paul', 'Pearl', 'Penn', 'Perry', 'Philips', 'Phoenix', 'Pink', 'Powell', 'Powers', 'Price', 'Prince', 'Quest', 'Raine', 'Ramone', 'Ray', 'Red', 'Reed', 'Reign', 'Rex', 'Rey', 'Rhodes', 'Rich', 'Rider', 'Roads', 'Roberts', 'Robinson', 'Rock', 'Rogers', 'Rose', 'Ross', 'Roth', 'Russell', 'Ryan', 'Rye', 'Samson', 'Sawyer', 'Scott', 'Seymour', 'Shannon', 'Shawn', 'Shepherd', 'Sierra', 'Silver', 'Silvers', 'Sinclair', 'Sky', 'Skye', 'Smith', 'South', 'Spacey', 'Spencer', 'Spice', 'Springfield', 'Stanley', 'Star', 'Stark', 'Starr', 'Steele', 'Sterling', 'Stevens', 'Stewart', 'Stone', 'Storm', 'Strange', 'Strong', 'Summers', 'Swift', 'Tanner', 'Taylor', 'Tempest', 'Terris', 'Thomas', 'Thompson', 'Todd', 'Travis', 'Tucker', 'Turner', 'Tyler', 'Vale', 'Valentine', 'Vance', 'Ventura', 'Vice', 'Victor', 'Walker', 'Wallace', 'Waters', 'Wayne', 'Webb', 'Wells', 'West', 'White', 'Wilde', 'Williams', 'Winter', 'Winters', 'Wolf', 'Wood', 'Woods', 'Worth', 'Young'];
  const nm4 = ['Aaren', 'Addison', 'Aiden', 'Alex', 'Alexis', 'Ali', 'Angel', 'Ash', 'Ashley', 'Ashton', 'Aubrey', 'Avery', 'Bailey', 'Bennie', 'Bev', 'Billie', 'Billy', 'Blair', 'Blake', 'Bret', 'Brett', 'Brice', 'Brook', 'Brynn', 'Caden', 'Cameron', 'Carmen', 'Carol', 'Casey', 'Charlie', 'Chris', 'Clem', 'Cory', 'Dane', 'Danni', 'Danny', 'Denny', 'Drew', 'Eli', 'Elliot', 'Emerson', 'Erin', 'Fran', 'Frankie', 'Franky', 'Gabby', 'Gabe', 'Gail', 'Gale', 'Gene', 'Glen', 'Glenn', 'Haiden', 'Harley', 'Harper', 'Hayden', 'Jackie', 'Jaden', 'Jaime', 'Jamie', 'Jess', 'Jesse', 'Jessie', 'Jo', 'Jody', 'Jordan', 'Jude', 'Justice', 'Kai', 'Kerry', 'Kiran', 'Kit', 'Kris', 'Lane', 'Lee', 'Leigh', 'Lesley', 'Leslie', 'Logan', 'Lynn', 'Maddox', 'Marley', 'Mason', 'Mel', 'Mell', 'Morgan', 'Nicky', 'Noel', 'Phoenix', 'Quinn', 'Ray', 'Raylee', 'Reed', 'Reggie', 'Rene', 'Riley', 'River', 'Robin', 'Rory', 'Rowan', 'Rudy', 'Ryan', 'Sam', 'Sammy', 'Shay', 'Sidney', 'Silver', 'Skye', 'Skylar', 'Skyler', 'Steff', 'Tanner', 'Taylor', 'Terry', 'Tyler', 'Val', 'Vic', 'Will', 'Willy'];


  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm4.length);
      names = `${nm4[rnd]} ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
