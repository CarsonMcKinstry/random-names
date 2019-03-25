export default function african_americans() {
  let rnd;
  let rnd2;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Acqwon', 'A\'darrion', 'Ademar', 'A\'dez', 'A\'dré', 'Akia', 'A\'lamar', 'Allvince', 'Amanté', 'Anderius', 'Andres', 'Anjawon', 'Antez', 'Antonne', 'Aquintis', 'Ario', 'Arkell', 'Armel', 'Arris', 'Asaad', 'Aston', 'Audell', 'Avondré', 'Ayren', 'Bankston', 'Barrell', 'Basim', 'Bayden', 'Belal', 'Bentram', 'Berton', 'Blake', 'Bobbie', 'Brackston', 'Bravon', 'Briceson', 'Bronte', 'Burley', 'Cévon', 'Cain', 'Calvon', 'Cardarion', 'Carston', 'Cary', 'CeeCee', 'Cevonté', 'Chachi', 'Chamaun', 'Chaquille', 'Char\'quez', 'Chaylen', 'Clévon', 'Clayton', 'Dace', 'Dacquan', 'Daevion', 'Dailyn', 'Da\'jonte', 'Da\'kuan', 'Dallevante', 'Damarco', 'Damarko', 'Dameon', 'Dandre', 'Danez', 'Dannell', 'D\'Ante', 'Dantrell', 'Da\'quintin', 'Daran', 'Dareion', 'Da\'rion', 'Darius', 'Darkeem', 'Daronté', 'Darrell', 'Darriel', 'Darryon', 'Darterrius', 'Dasante', 'Dashaud', 'Dashonte', 'Datreon', 'Da\'vante', 'Davarius', 'Da\'vion', 'Da\'wan', 'Dazhawn', 'DeAnté', 'DeShea', 'Debony', 'Decovon', 'Dejerius', 'Dekion', 'DelVonte', 'Delashaun', 'Delmetrice', 'Demarien', 'Demondre', 'Denaris', 'Denton', 'Deqavious', 'Dequinn', 'Dereece', 'Derreck', 'Desharious', 'Destin', 'Devajee', 'Deveron', 'Devoreaux', 'Dhorian', 'Dimetrice', 'Diontray', 'D\'Mario', 'Dmitry', 'Dominique', 'Donjae', 'Dontrall', 'Doran', 'D\'Quan', 'Dremonte', 'Dubois', 'Dushane', 'Dwane', 'Dyonte', 'Earnell', 'Eddison', 'Efrem', 'Elcee', 'Eliyah', 'Elvan', 'Emiel', 'Ericson', 'Ethridge', 'Everson', 'Ezrah', 'Farrell', 'Fedarius', 'Ferando', 'Finton', 'Furnell', 'Garence', 'Garrell', 'Geffery', 'Georgy', 'Ghalen', 'Giovante', 'Grady', 'Gwindell', 'Hakim', 'Hampton', 'Harden', 'Harmen', 'Hazell', 'Herold', 'Irvin', 'Ishaq', 'Isiah', 'Itrez', 'Jévon', 'JaKhel', 'JaTaveon', 'Jaboris', 'Jacaubré', 'Jacody', 'Jafaris', 'Jahkay', 'Jahmiah', 'Jaimeson', 'Jaivon', 'Jakobe', 'Jalal', 'Jamaad', 'Jamarico', 'Jamerrell', 'Jamichael', 'Jamyron', 'Jaquann', 'Jaquon', 'Jarmal', 'Jaronte', 'Jasen', 'Javari', 'Javion', 'Jaydee', 'Jaymore', 'Jazeel', 'Jekeil', 'Jeoffrey', 'Jerquis', 'Jervonte', 'Jevonne', 'Jimar', 'Jirani', 'Jocquise', 'Johmarcus', 'Johntey', 'Jonell', 'Jontray', 'Jori', 'Jowuan', 'Jumon', 'Jurdel', 'Juvante', 'J\'waun', 'Jyreese', 'Késhaun', 'KaRon', 'Kadaris', 'Kadrick', 'Kaenan', 'Kahlil', 'Kaiman', 'Ka\'jai', 'Kaleem', 'Kamar', 'Kamoni', 'Kaprice', 'Ka\'ron', 'Karver', 'K\'aunté', 'Kavion', 'Kaydron', 'KeAndre', 'Keantay', 'Keenan', 'Keifon', 'Kejuan', 'Kelford', 'Kemal', 'Keon', 'Kendrich', 'Kennin', 'Kenvante', 'K\'eon', 'Kerderius', 'Kerrel', 'Kesean', 'Keylon', 'Keywon', 'Khalan', 'Khyree', 'Kiante', 'Killion', 'Kincade', 'Kione', 'Kivon', 'Kordell', 'Kreighton', 'Kunal', 'Kwanzaa', 'K\'yeon', 'Kyrton', 'LaDorian', 'Labron', 'Ladarrell', 'Laelim', 'Lamarcus', 'Laquez', 'Latrelle', 'LeMaun', 'Leeshawn', 'Lemond', 'Leonell', 'Leroyce', 'Levell', 'Liddell', 'Linzell', 'Louvell', 'Lyman', 'Lyonel', 'Mahlik', 'Markael', 'Markeys', 'Marqués', 'Marquise', 'Marteese', 'Maury', 'Maynard', 'Mordell', 'NaQuian', 'Naheim', 'Najeem', 'Narquise', 'Nassau', 'Navier', 'Neari', 'Nemiah', 'Neville', 'Niram', 'Oday', 'Ohan', 'Olin', 'Oman', 'Omonteez', 'Ontrel', 'Orien', 'Ornell', 'Parelle', 'Pheonté', 'Prenell', 'Prevan', 'Purcell', 'Qasim', 'Qoree', 'Quadell', 'Qualeek', 'Quandell', 'Quantell', 'Qua\'sean', 'Quavean', 'Quedell', 'Quillin', 'Quinell', 'Quintrell', 'Qu\'wan', 'Qwantez', 'Réquan', 'Ra\'aed', 'Raden', 'Raffiel', 'Rahil', 'Rahsaan', 'Rain', 'Rakeem', 'Rakkan', 'Ramello', 'Ramon', 'Randarious', 'Rannier', 'Rasaun', 'Rashed', 'Raylon', 'Readale', 'Reginal', 'Reilly', 'Remington', 'Renell', 'Reno', 'Reshard', 'Reuban', 'Rhad', 'Rhyland', 'Richmond', 'Riguel', 'Rion', 'Rodnell', 'Romain', 'Rontay', 'Ry\'mone', 'Sévon', 'Sabian', 'Sakeem', 'Sammy', 'Santrell', 'Sequan', 'Shadrias', 'Shakur', 'Sha\'quan', 'Sharquay', 'Shawnee', 'Shiloh', 'Shovon', 'Somondre', 'Stefon', 'Taevion', 'Takeo', 'Talik', 'Tamonte', 'Tario', 'Tashard', 'Tavell', 'Taylen', 'Tazwell', 'Teion', 'Telvis', 'Teonce', 'Terek', 'Terryl', 'Tevari', 'Tevoris', 'Thaireee', 'Thayne', 'Therman', 'Threston', 'Tijani', 'Timetric', 'Tiontay', 'Tivonte', 'Tonell', 'Travone', 'TreKell', 'Tremon', 'Trever', 'Trivelle', 'Troylen', 'Tycen', 'Tykeim', 'Tyndall', 'Tyrice', 'Tyzee', 'Udonavon', 'Ukeme', 'Unyque', 'Urelles', 'Urick', 'Uterius', 'Uzzia', 'Varnan', 'Varrien', 'Vennie', 'Vequain', 'Veshone', 'Vondell', 'Voshon', 'Vytal', 'Wakee', 'Wendall', 'Wyees', 'Xaevan', 'Xaryus', 'Xavion', 'Xeric', 'Yadean', 'Yaheem', 'Yajeel', 'Yamen', 'Yardley', 'Yazen', 'Yiannis', 'Yorell', 'Zédarius', 'Zahair', 'Zakari', 'Zalen', 'Zamari', 'Zaniel', 'Zaquan', 'Zareen', 'Zawnté', 'Zean', 'Zebulee', 'Zeeshan', 'Zephan', 'Zhaire', 'Zharvis', 'Zilton', 'Zishan', 'Zohn', 'Zuberi', 'Zyrell'];
  const nm2 = ['Aarthi', 'Abelina', 'Abony', 'Abryann', 'Acura', 'Addrian', 'Adelae', 'Adilene', 'Adlynn', 'Adreene', 'Adrion', 'Afra', 'Ahanti', 'Aikira', 'Aillen', 'Airele', 'Akeely', 'A\'kierra', 'Aksa', 'Alaia', 'Alante', 'Alberaneshia', 'Aleigha', 'Alexann', 'Alima', 'Allacia', 'Allontae', 'Alondra', 'Amara', 'Amberle', 'Ammber', 'Anber', 'Andreaka', 'Anijah', 'Anjanae', 'Anndee', 'Anrea', 'Anya', 'Ardyce', 'Arionna', 'Arleen', 'Arnedra', 'Ashanique', 'Ashkira', 'Athena', 'Aundi', 'Avarie', 'Avishan', 'Ayleanna', 'Banne', 'Baylea', 'B\'onca', 'Braelin', 'Brandisha', 'Brayonna', 'Breechelle', 'Breyann', 'Brinique', 'B\'shara', 'Cabrina', 'Cailyn', 'Callen', 'Calneshia', 'Camella', 'Candance', 'Capria', 'Carline', 'Carmalita', 'Carnise', 'Carrina', 'Cashea', 'Cassandrea', 'Catlynne', 'Cayden', 'Cearra', 'Cedrica', 'Cenisa', 'Ceyonne', 'Chalise', 'Chanara', 'Chanita', 'Cha\'relle', 'Charlenae', 'Charmita', 'Chaundrise', 'Chaybree', 'Cheakina', 'Chekilla', 'Chelease', 'Cherlynn', 'Chesiree', 'Chineka', 'Chivonn', 'Chriscinda', 'Clairice', 'Clemecia', 'Coleen', 'Coniqua', 'Corecia', 'Cortisha', 'Curlene', 'Cycelea', 'Cynda', 'Cynthis', 'D\'Andrea', 'Daione', 'D\'aja', 'Dakala', 'Dalanie', 'Daliana', 'Dallas', 'Dandria', 'Daniella', 'Dannisha', 'Darby', 'Darelle', 'Darionne', 'Darnique', 'Darrisha', 'Dashanique', 'Davea', 'Davisa', 'Dawnesha', 'Dayjane', 'Dayshia', 'Dazzline', 'Deana', 'Deanira', 'Dedriana', 'Dejuante', 'Delanna', 'Deliana', 'Deliza', 'Delonda', 'Delray', 'Demi', 'Demrah', 'Denique', 'Denosha', 'Deoshia', 'Derivia', 'Deshondra', 'Destini', 'Devanta', 'Devon', 'Deyadria', 'Dharia', 'Diauna', 'Dijonae', 'Dina', 'D\'lynne', 'Dominica', 'Doniece', 'Dontae', 'Dreneisha', 'Dustina', 'Dymin', 'Dyshelle', 'Earlecia', 'Edith', 'Eilane', 'Elaena', 'Elayah', 'Elidee', 'Emarald', 'Emilynn', 'Erickah', 'Esdee', 'Ezra', 'Fahey', 'Fayth', 'Feleysa', 'Ferlisha', 'Fionna', 'Flynn', 'Garrika', 'Gelicia', 'Genecia', 'Geosha', 'Gerrika', 'Gladys', 'Glovanna', 'Gracine', 'Grecia', 'Hadleigh', 'Hanita', 'Heleena', 'Herneisha', 'Holleena', 'Ida', 'Ireena', 'Isa', 'Ishawna', 'Iveanna', 'Iza', 'Jaborah', 'Jabrielle', 'Jaclynn', 'Jadonna', 'Jahtoya', 'Jakeline', 'Jalanda', 'Jalessica', 'Jametta', 'Jaquoya', 'Jarnesha', 'Jashanna', 'Jaslene', 'Javan', 'Jaynie', 'Jazzra', 'Jeimy', 'Jelinda', 'Jemisha', 'Jeneice', 'Jerilene', 'Jesalynn', 'Jewanna', 'Jillian', 'JoLee', 'Joisha', 'Jolena', 'Jomary', 'Joniqua', 'Jordina', 'Jorrie', 'Joslin', 'Jovaniche', 'Joya', 'Joynisha', 'Jube', 'Juelle', 'Jumana', 'Jushawn', 'Justyne', 'Jyanette', 'Kaala', 'Kadasha', 'Kadejah', 'Kadrea', 'Kaeja', 'Kahley', 'Kailanni', 'Kala', 'Kalela', 'Kaliope', 'Kalona', 'Kamen', 'Kamley', 'Karah', 'Karenna', 'Karis', 'Karleshia', 'Karolanne', 'Kashayla', 'Kassidy', 'Katarina', 'Katheen', 'Kavayanna', 'Kaydon', 'Kazie', 'Keandra', 'Keavna', 'Keeara', 'Keeshana', 'Keineikia', 'Kellece', 'Kelsey', 'Kenadee', 'Kendasha', 'Kendyll', 'Kennisha', 'Keoshae', 'Ketria', 'Keyarra', 'Keyshia', 'Khinara', 'Kiandra', 'Kileyna', 'Kinsey', 'Kishana', 'Kizzie', 'Kolbie', 'Korah', 'Krisella', 'Krystol', 'Kwashay', 'Kymbrea', 'Kyron', 'Lacara', 'Ladell', 'Lafyette', 'Lakedra', 'Lakesia', 'Lalique', 'Laquita', 'Larieka', 'Larriel', 'Lashaya', 'Latavia', 'Latresia', 'Leelannee', 'Leisley', 'Lenecia', 'Leonetta', 'Leslee', 'Liana', 'Lishcelle', 'Lonquille', 'Lorraine', 'Louvenia', 'Lucinda', 'Luvleen', 'Mackenna', 'Madeine', 'Magdalena', 'Malaya', 'Malinda', 'Malynne', 'Marcellette', 'Mariena', 'Markeshia', 'Marlowe', 'Marrielle', 'Marviana', 'Matavia', 'May', 'Melah', 'Melicia', 'Melviena', 'Mequashia', 'Meridian', 'Merryll', 'Micaella', 'Michella', 'Mierra', 'Mikita', 'Mirita', 'Mizett', 'Monique', 'Mykisha', 'Mystelle', 'Naida', 'Nakala', 'Nakeitra', 'Naleisa', 'Nandi', 'Nariah', 'Natroya', 'Nayshya', 'Nedaara', 'Nekeisha', 'Nerriah', 'Niambra', 'Nikelie', 'Nina', 'Nishay', 'Noel', 'Norchelle', 'Novanna', 'Nykee', 'Ocea', 'Odessa', 'O\'kevia', 'Olishia', 'Omeika', 'Ontario', 'Orena', 'Orlena', 'Osheena', 'Paetra', 'Parece', 'Patriciana', 'Pavlina', 'Pearlina', 'Phenicia', 'Phylicity', 'Pravleen', 'Qeelin', 'Quadejah', 'Quanesha', 'Quanshay', 'Quashara', 'Quatesia', 'Queenetta', 'Quetta', 'Quinshay', 'Quivia', 'Qwanisha', 'Raechell', 'Raenia', 'Raileigh', 'Rajanece', 'Ralecia', 'Ramona', 'Ranisha', 'Rashanique', 'Rejanee', 'Remy', 'Reniece', 'Rhaelyn', 'Rhianna', 'Ricca', 'Ricklee', 'Rihanni', 'Riorose', 'Ronna', 'Rynnelle', 'Sabella', 'Sachine', 'Safa', 'Salenna', 'Samuella', 'Saquita', 'Sarena', 'Seaira', 'Senedra', 'Shacora', 'Shadenda', 'Shakenya', 'Shaleigh', 'Shamone', 'Shaniqua', 'Shantana', 'Shaquira', 'Sharonda', 'Shaunee', 'Shawnta', 'Shealynn', 'Shekita', 'Shemika', 'Sheylinn', 'Shonice', 'Shyrece', 'Sissell', 'Solette', 'Soraya', 'Steevie', 'Stylisha', 'Susanna', 'Sylvanna', 'Sytira', 'Taccarra', 'Taiquana', 'Takosha', 'Tallah', 'Tamasin', 'Tamicka', 'Tamytrice', 'Tangilique', 'Tasheka', 'Tasia', 'Tavena', 'Taylor', 'Teagen', 'Tehilalla', 'Telah', 'Tembi', 'Teonnie', 'Terri', 'Texra', 'Tichina', 'Tilisha', 'Timone', 'Tirrell', 'Toiana', 'Tomesia', 'Torielle', 'Toshina', 'Tramecia', 'Trashae', 'Traynesha', 'Trenasha', 'Trinee', 'Trissa', 'Troya', 'Trystan', 'Tykera', 'Tylissa', 'Tynice', 'Tyqueria', 'Uneek', 'Uquinta', 'Usha', 'Vakala', 'Vaniqua', 'Vantrice', 'Vashanique', 'Veeona', 'Veneshia', 'Veora', 'Verniqua', 'Vertasha', 'Vienna', 'Violet', 'Vishay', 'Vonessia', 'Wadline', 'Wallica', 'Waneesa', 'Wasylena', 'Wedline', 'Wesley', 'Willisa', 'Winslow', 'Worth', 'Wyleisha', 'Xaranda', 'Xemena', 'Yaashika', 'Yahoska', 'Yakeiva', 'Yalonda', 'Yanaye', 'Yanine', 'Yazmeen', 'Yikeria', 'Yucera', 'Zackeira', 'Zahiran', 'Zaire', 'Zaketa', 'Zalinia', 'Zarela', 'Zaviana', 'Zekera', 'Zeniqua', 'Zeva', 'Zhaniece', 'Zima', 'Zoerina', 'Zorana', 'Zulema', 'Zyeasha'];
  const nm3 = ['Adams', 'Alexander', 'Allen', 'Alston', 'Anderson', 'Andrews', 'Anthony', 'Armstrong', 'Arnold', 'Atkins', 'Austin', 'Bailey', 'Baker', 'Baldwin', 'Banks', 'Barber', 'Barnes', 'Barnett', 'Barrett', 'Bass', 'Bates', 'Battle', 'Beasley', 'Bell', 'Benjamin', 'Bennett', 'Benson', 'Berry', 'Bishop', 'Black', 'Blackwell', 'Blake', 'Bolden', 'Bonner', 'Booker', 'Boone', 'Bowman', 'Boyd', 'Bradford', 'Bradley', 'Branch', 'Brewer', 'Bridges', 'Brooks', 'Brown', 'Bryant', 'Bullock', 'Burgess', 'Burnett', 'Burns', 'Burton', 'Bush', 'Butler', 'Byrd', 'Caldwell', 'Calhoun', 'Campbell', 'Cannon', 'Carr', 'Carroll', 'Carson', 'Carter', 'Chambers', 'Chandler', 'Chapman', 'Charles', 'Chatman', 'Cherry', 'Christian', 'Clark', 'Clarke', 'Clay', 'Clayton', 'Cobb', 'Cole', 'Coleman', 'Collier', 'Collins', 'Cook', 'Cooper', 'Copeland', 'Cotton', 'Covington', 'Cox', 'Craig', 'Crawford', 'Cross', 'Cummings', 'Cunningham', 'Curry', 'Curtis', 'Daniel', 'Daniels', 'Davenport', 'Davis', 'Dawson', 'Dean', 'Dennis', 'Dickerson', 'Dillard', 'Dixon', 'Dorsey', 'Douglas', 'Duncan', 'Dunn', 'Edwards', 'Elliott', 'Ellis', 'Ellison', 'Epps', 'Evans', 'Farmer', 'Ferguson', 'Fields', 'Fisher', 'Fleming', 'Fletcher', 'Flowers', 'Floyd', 'Ford', 'Foster', 'Fowler', 'Francis', 'Franklin', 'Frazier', 'Freeman', 'Fuller', 'Gaines', 'Gamble', 'Gardner', 'Garner', 'Garrett', 'George', 'Gibbs', 'Gibson', 'Gilbert', 'Gilmore', 'Glenn', 'Glover', 'Goodwin', 'Gordon', 'Graham', 'Grant', 'Graves', 'Gray', 'Green', 'Greene', 'Greer', 'Gregory', 'Griffin', 'Hairston', 'Hall', 'Hamilton', 'Hampton', 'Hardy', 'Harmon', 'Harper', 'Harrell', 'Harris', 'Harrison', 'Hart', 'Harvey', 'Hawkins', 'Hayes', 'Haynes', 'Heard', 'Henderson', 'Henry', 'Hicks', 'Hill', 'Hines', 'Hinton', 'Hodge', 'Hodges', 'Holland', 'Holloway', 'Holmes', 'Holt', 'Hopkins', 'Horton', 'Houston', 'Howard', 'Howell', 'Hubbard', 'Hudson', 'Hughes', 'Hunt', 'Hunter', 'Ingram', 'Jackson', 'Jacobs', 'James', 'Jefferson', 'Jenkins', 'Jennings', 'Johnson', 'Jones', 'Jordan', 'Joseph', 'Joyner', 'Kelley', 'Kelly', 'Kennedy', 'King', 'Knight', 'Knox', 'Lane', 'Lawrence', 'Lawson', 'Lee', 'Leonard', 'Lewis', 'Lindsey', 'Little', 'Lloyd', 'Logan', 'Long', 'Love', 'Lowe', 'Lucas', 'Lynch', 'Lyons', 'Mack', 'Malone', 'Manning', 'Marshall', 'Martin', 'Mason', 'Mathis', 'Matthews', 'Maxwell', 'Mays', 'Mcbride', 'Mccall', 'Mcclain', 'Mccoy', 'Mccray', 'Mcdaniel', 'Mcdonald', 'Mcdowell', 'Mcgee', 'Mckenzie', 'Mckinney', 'Mcneil', 'Miles', 'Miller', 'Mills', 'Mitchell', 'Monroe', 'Montgomery', 'Moody', 'Moore', 'Morgan', 'Morris', 'Morrison', 'Morton', 'Moses', 'Mosley', 'Moss', 'Muhammad', 'Murphy', 'Murray', 'Myers', 'Nash', 'Neal', 'Nelson', 'Newton', 'Nichols', 'Norman', 'Norris', 'Oliver', 'Oneal', 'Owens', 'Page', 'Palmer', 'Parker', 'Parks', 'Patrick', 'Patterson', 'Patton', 'Paul', 'Payne', 'Pearson', 'Perkins', 'Perry', 'Peters', 'Peterson', 'Phillips', 'Pierce', 'Pierre', 'Pittman', 'Pitts', 'Polk', 'Poole', 'Pope', 'Porter', 'Powell', 'Price', 'Prince', 'Ramsey', 'Randolph', 'Ray', 'Reed', 'Reese', 'Reeves', 'Reid', 'Reynolds', 'Rhodes', 'Rice', 'Richard', 'Richards', 'Richardson', 'Riley', 'Rivers', 'Roberson', 'Roberts', 'Robertson', 'Robinson', 'Rodgers', 'Rogers', 'Rose', 'Ross', 'Rucker', 'Ruffin', 'Russell', 'Sanders', 'Saunders', 'Scott', 'Shaw', 'Shelton', 'Simmons', 'Simon', 'Simpson', 'Sims', 'Singleton', 'Small', 'Smith', 'Solomon', 'Spencer', 'Stanley', 'Starks', 'Steele', 'Stephens', 'Stevens', 'Stevenson', 'Stewart', 'Stokes', 'Stone', 'Sullivan', 'Sutton', 'Tate', 'Taylor', 'Terrell', 'Terry', 'Thomas', 'Thompson', 'Thornton', 'Tillman', 'Tolbert', 'Townsend', 'Tucker', 'Turner', 'Tyler', 'Tyson', 'Vaughn', 'Wade', 'Walker', 'Wallace', 'Walton', 'Ward', 'Ware', 'Warren', 'Washington', 'Waters', 'Watkins', 'Watson', 'Watts', 'Weaver', 'Webb', 'Webster', 'Wells', 'West', 'Wheeler', 'Whitaker', 'White', 'Whitfield', 'Wiggins', 'Wiley', 'Wilkerson', 'Wilkins', 'Williams', 'Williamson', 'Willis', 'Wilson', 'Winston', 'Wood', 'Woodard', 'Woods', 'Wright', 'Young'];
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]}  ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]}  ${nm3[rnd2]}`;
    }
    return names;
  }
}
