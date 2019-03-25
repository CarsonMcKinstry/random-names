export default function elephants() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aadi', 'Aakav', 'Aakesh', 'Aakil', 'Aalok', 'Aamin', 'Aanan',
    'Aandaleeb', 'Aatmadeva', 'Aatmik', 'Abhiraja', 'Aedan', 'Aladdin',
    'Baasu', 'Babar', 'Bal', 'Bala', 'Balabhadra', 'Baldev', 'Balin',
    'Balraj', 'Basant', 'Billy', 'Bobo', 'Brian', 'Bubbles', 'Cameron',
    'Chad', 'Chaitanya', 'Champakali', 'Chance', 'Chandan', 'Chandraraj',
    'Chandresh', 'Charaka', 'Charlie', 'Charson', 'Charudata', 'Chris',
    'Christofer', 'Cody', 'Daivik', 'Daksh', 'Dalal', 'Damini', 'Damodar',
    'Danveer', 'Darshan', 'Darwin', 'Daud', 'Dayanand', 'Dayaram', 'Derek',
    'Devin', 'Dino', 'Donnie', 'Drake', 'Dumbo', 'Edward', 'Ekaanta',
    'Elephant', 'Emmett', 'Eric', 'Fahim', 'Falak', 'Falan', 'Fareed',
    'Faruq', 'Firdos', 'Frank', 'Frankie', 'Freddy', 'Ganesh', 'Gaurav',
    'Gavin', 'George', 'Greybar', 'Hansrat', 'Hanuman', 'Hari', 'Harish',
    'Harjeet', 'Horton', 'IIshim', 'Jabbar', 'Jack', 'Jagannath', 'Jagjit',
    'Jahan', 'Jaidev', 'Jaimini', 'Jainendra', 'Jairaj', 'Jake', 'Jaladhi',
    'Jameson', 'Jamie', 'Janesh', 'Jasper', 'Javas', 'Jawaharlal',
    'Jayakrishna', 'Jayant', 'Jeffery', 'Jeffrey', 'Jeffy', 'Jeremy', 'Jimmy',
    'Joey', 'Johnny', 'Jonah', 'Kabir', 'Kabr', 'Kala', 'Kaleb', 'Kalhana',
    'Kalidasa', 'Kalinga', 'Kalkin', 'Kalu', 'Kamban', 'Kantu', 'Kanu',
    'Kapila', 'Kapildev', 'Kardama', 'Karim', 'Karnak', 'Karnik', 'Kasi',
    'Kavi', 'Kavindra', 'Kedar', 'Kirk', 'Kori', 'Krys', 'Lakshman', 'Lal',
    'Larry', 'Lavanaa', 'Leo', 'Leon', 'Liam', 'Lino', 'Louie', 'Maalin',
    'Madhav', 'Mahadev', 'Maharaj', 'Mahendra', 'Mahesa', 'Mahesh', 'Mahin',
    'Mahmoud', 'Majid', 'Malik', 'Manny', 'Mansoor', 'Marshall', 'Max',
    'Mike', 'Nadim', 'Nagarjuna', 'Nalin', 'Nanak', 'Nandan', 'Nandin',
    'Narain', 'Narayana', 'Naren', 'Naresh', 'Nathan', 'Naveed', 'Navin',
    'Neel', 'Niaz', 'Nirvan', 'Nishad', 'Noor', 'Nuren', 'Omandand', 'Pach',
    'Pacho', 'Pachy', 'Pacman', 'Pactin', 'Pantni', 'Parvaiz', 'Patanjau',
    'Patches', 'Pattin', 'Peanut', 'Quincy', 'Rafiq', 'Rahim', 'Rajendra',
    'Rajesh', 'Rajiv', 'Rajnish', 'Raleigh', 'Ram', 'Ramakrishna', 'Ramnath',
    'Ranjit', 'Ratan', 'Rav', 'Ravi', 'Ravindra', 'Raza', 'Richy', 'Roimba',
    'Rozhan', 'Russel', 'Russell', 'Rusten', 'Saarik', 'Sachdev', 'Sahaj',
    'Sahen', 'Sahil', 'Sajan', 'Sajjan', 'Salmalin', 'Sammy', 'Sanjay',
    'Sanjiv', 'Santosh', 'Sarad', 'Sarik', 'Sarngin', 'Sarugin', 'Scruffy',
    'Silver', 'Simba', 'Smokey', 'Socks', 'Sonakali', 'Spencer', 'Sprinkles',
    'Squirt', 'Stevie', 'Stomp', 'Stomppers', 'Taj', 'Tanay', 'Tarik',
    'Tarun', 'Thumper', 'Tim', 'Tinkers', 'Tino', 'Tom', 'Tommy', 'Tonsofun',
    'Trunk', 'Trunky', 'Tubby', 'Tuck', 'Tucker', 'Ty', 'Tyler', 'Tyrone',
    'Uday', 'Ujala', 'Umed', 'Urvil', 'Uttam', 'Vadin', 'Valin', 'Valmiki',
    'Vandan', 'Vardhamma', 'Varen', 'Varesh', 'Varil', 'Varun', 'Vasant',
    'Vasin', 'Vasu', 'Vatsyayana', 'Vihs', 'Vijay', 'Vijayendra', 'Walter',
    'Wilbur', 'Winston', 'Yamal', 'Yasar', 'Yash', 'Yashaskar', 'Yuki',
    'Yuri', 'Aivat'];
  const nm2 = ['Aanandini', 'Abbie', 'Abby', 'Abha', 'Abigal', 'Achala',
    'Adalyn', 'Adhika', 'Adhita', 'Adita', 'Adya', 'Ahalya', 'Ahilya',
    'Allison', 'Amy', 'April', 'Azra', 'Bahaar', 'Baka', 'Bakul', 'Banht',
    'Banita', 'Bano', 'Beeja', 'Behira', 'Bel', 'Bhamini', 'Bhanumati',
    'Bharati', 'Bhavika', 'Bhuma', 'Binali', 'Blair', 'Blossom', 'Bubbles',
    'Cameron', 'Chahna', 'Chaitali', 'Chaitanya', 'Chameli', 'Chandaa',
    'Chandani', 'Chandi', 'Channa', 'Charu', 'Charumat', 'Cheesecake',
    'Cherilyn', 'Chhaya', 'Daisy', 'Dakota', 'Damayant', 'Darpitaa', 'Darsha',
    'Daru', 'Dayaa', 'Dazzles', 'Durva', 'Ehani', 'Ela', 'Elamma', 'Eleanor',
    'Elephante', 'Eliphant', 'Ella', 'Ellafun', 'Elle', 'Ellen', 'Ellie',
    'Elly', 'Elysia', 'Emily', 'Emma', 'Erin', 'Flower', 'Fulande', 'Gabby',
    'Gambhira', 'Ganesa', 'Gariana', 'Garima', 'Gauri', 'Georgiana', 'Gianna',
    'Gina', 'Grace', 'Gracee', 'Hara', 'Ichchani', 'Idaa', 'Indu', 'Isabella',
    'Jaamini', 'Jackie', 'Jalajaa', 'Jalaneeli', 'Jalini', 'Jamie', 'Janaki',
    'Jasmin', 'Jenna', 'Jennifer', 'Jessica', 'Jewel', 'Jilly', 'Jinnat',
    'Julia', 'June', 'Kaamilee', 'Kaasu', 'Kacie', 'Kailash', 'Kaite', 'Kala',
    'Kanta', 'Kasi', 'Kate', 'Katie', 'Kelly', 'Kiah', 'Kiera', 'Kieth',
    'Kiki', 'Kiran', 'Kirby', 'Kristen', 'Kusa', 'Laura', 'Lavanaa', 'Leah',
    'Leena', 'Lia', 'Lilly', 'Lisa', 'Lucy', 'Luna', 'Maddie', 'Madhavi',
    'Madhu', 'Madhulekha', 'Madison', 'Mali', 'Mamta', 'Maria', 'Marissa',
    'May', 'Maya', 'Mia', 'Mimi', 'Mimzy', 'Molly', 'Muffy', 'Nahida',
    'Natalie', 'Nelly', 'Nina', 'Paavana', 'Paavani', 'Padma', 'Patches',
    'Peanut', 'Peanuts', 'Pollyam', 'Pragyata', 'Prarthana', 'Pratibtha',
    'Prema', 'Premlata', 'Priya', 'Protima', 'Purnima', 'Puss', 'Radha',
    'Raya', 'Robyn', 'Rosealita', 'Sadhana', 'Safarie', 'Safi', 'Sagara',
    'Sakari', 'Sara', 'Shannon', 'Silver', 'Sophie', 'Sprinkles', 'Squirt',
    'Susy', 'Sweetie', 'Taya', 'Tia', 'Tina', 'Tinkers', 'Tubby', 'Tuskany',
    'Tusky', 'Twinkers', 'Twinky', 'Victoria', 'Yasmin', 'Yaya', 'Zainab',
    'Zakiyya', 'Zandara', 'Zarina', 'Zia', 'Zizi', 'Zoey']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
