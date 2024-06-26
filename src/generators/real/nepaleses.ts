import { sample } from 'lodash';

export default function nepaleses() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aadarsh',
        'Aadesh',
        'Aadi',
        'Aaditey',
        'Aaditya',
        'Aakaash',
        'Aakarshan',
        'Aakash',
        'Aalok',
        'Aamod',
        'Aanand',
        'Aananda',
        'Aastik',
        'Abhay',
        'Abhaya',
        'Abhijeet',
        'Abhijit',
        'Abhiman',
        'Abhimanyu',
        'Abhinabhas',
        'Abhinav',
        'Abhinava',
        'Abhishek',
        'Achyut',
        'Achyuta',
        'Adesh',
        'Adhiraj',
        'Adinath',
        'Agni',
        'Ajay',
        'Ajaya',
        'Ajeet',
        'Ajendra',
        'Ajit',
        'Akaash',
        'Akash',
        'Akhilesh',
        'Akshay',
        'Akshaya',
        'Alaap',
        'Alok',
        'Amalesh',
        'Amar',
        'Ambar',
        'Amber',
        'Amir',
        'Amitabh',
        'Amod',
        'Amrit',
        'Anand',
        'Anant',
        'Ananta',
        'Anil',
        'Anjani',
        'Anjay',
        'Ankit',
        'Anniruddha',
        'Anoj',
        'Anuj',
        'Anup',
        'Anuraag',
        'Anurag',
        'Arjun',
        'Arun',
        'Ashok',
        'Ashutosh',
        'Atul',
        'Atulya',
        'Avaneesh',
        'Avanish',
        'Ayush',
        'Babu',
        'Baburam',
        'Badal',
        'Badri',
        'Badrinath',
        'Bahadur',
        'Baikuntha',
        'Bajra',
        'Balaraj',
        'Balbir',
        'Baldev',
        'Balgopal',
        'Balgovind',
        'Balkrishan',
        'Balmohan',
        'Balraj',
        'Balram',
        'Balwant',
        'Bandhu',
        'Barun',
        'Basant',
        'Basistha',
        'Basudev',
        'Bhagwan',
        'Bhairab',
        'Bhairav',
        'Bhakti',
        'Bhanu',
        'Bharadwaj',
        'Bharat',
        'Bhaskar',
        'Bhavesh',
        'Bhim',
        'Bhupendra',
        'Bhuwan',
        'Bhuwaneshwar',
        'Bibek',
        'Bibhaakar',
        'Bidur',
        'Bijay',
        'Bijendra',
        'Bijanyendra',
        'Bikash',
        'Bikesh',
        'Bikram',
        'Bimal',
        'Binay',
        'Binaya',
        'Bindeshwor',
        'Binit',
        'Binod',
        'Bipin',
        'Biplav',
        'Biraj',
        'Birbal',
        'Birendra',
        'Bishal',
        'Bishwa',
        'Bishwambhar',
        'Bishweshwar',
        'Biswa',
        'Biswajit',
        'Bodhan',
        'Brajesh',
        'Bramha',
        'Brijesh',
        'Brijmohan',
        'Buddha',
        'Byas',
        'Chakra',
        'Chakrapani',
        'Chanakya',
        'Chandan',
        'Chandeshwor',
        'Chandra',
        'Chandrashekhar',
        'Chetan',
        'Chintamani',
        'Chintan',
        'Chirag',
        'Chiranjeev',
        'Chiranjibi',
        'Chittaranjan',
        'Chudamani',
        'Damodar',
        'Danbir',
        'Danvir',
        'Dasharath',
        'Daya',
        'Dayanand',
        'Debendra',
        'Deenabandhu',
        'Deepak',
        'Deepiti',
        'Devdas',
        'Devendra',
        'Dhan',
        'Dhana',
        'Dhananjay',
        'Dharanidhar',
        'Dharma',
        'Dharmalal',
        'Dharmendra',
        'Dheer',
        'Dheerendra',
        'Dhir',
        'Dhiren',
        'Dhirendra',
        'Dhruba',
        'Dhyaneshwar',
        'Digambar',
        'Dilaram',
        'Dileep',
        'Dilip',
        'Dinakar',
        'Dinesh',
        'Dipak',
        'Dipendra',
        'Dipesh',
        'Divaj',
        'Divakar',
        'Diwakar',
        'Durgesh',
        'Ekalavya',
        'Ekaraj',
        'Fanindra',
        'Fanishwar',
        'Gagan',
        'Gajendra',
        'Ganapati',
        'Ganesh',
        'Gangadhar',
        'Gaurav',
        'Gautam',
        'Ghanashyam',
        'Giridhar',
        'Girija',
        'Giriraj',
        'Gokul',
        'Gopal',
        'Gopi',
        'Gourishankar',
        'Govinda',
        'Gunaratna',
        'Gurudutt',
        'Gyan',
        'Gyanedra',
        'Gyaneshwar',
        'Hanuman',
        'Hari',
        'Harigopal',
        'Harihar',
        'Harinarayan',
        'Harish',
        'Hasan',
        'Hem',
        'Hemachandra',
        'Hemant',
        'Himal',
        'Himanshu',
        'Hitesh',
        'Hridaya',
        'Hridayesh',
        'Iman',
        'Indra',
        'Indrajeet',
        'Indrajit',
        'Ishwar',
        'Jagadeep',
        'Jagadish',
        'Jagajeet',
        'Jagannath',
        'Jagat',
        'Jagdish',
        'Janak',
        'Janardan',
        'Jaswant',
        'Jaya',
        'Jayadev',
        'Jayant',
        'Jayanta',
        'Jeevan',
        'Jibachh',
        'Jitendra',
        'Jivan',
        'Jiwan',
        'Kabi',
        'Kabir',
        'Kaila',
        'Kailash',
        'Kalyan',
        'Kamadev',
        'Kamal',
        'Kamlesh',
        'Kanchha',
        'Kapil',
        'Karna',
        'Kashyap',
        'Kasindra',
        'Kaushal',
        'Kaushik',
        'Kavi',
        'Kedar',
        'Kesar',
        'Keshab',
        'Keshav',
        'Khagendra',
        'Khem',
        'Kiran',
        'Kishor',
        'Kishore',
        'Kripal',
        'Kris',
        'Kuber',
        'Kuldeep',
        'Kumar',
        'Kundan',
        'Lakshman',
        'Lalan',
        'Lalit',
        'Lokesh',
        'Loknath',
        'Madan',
        'Madhav',
        'Madhukar',
        'Madhur',
        'Madhusudan',
        'Mahadev',
        'Mahant',
        'Mahavir',
        'Mahendra',
        'Mahesh',
        'Maheshwar',
        'Maila',
        'Mandeep',
        'Mangal',
        'Mangesh',
        'Manish',
        'Manjeet',
        'Manjit',
        'Manjul',
        'Manmohan',
        'Manohar',
        'Manoj',
        'Milan',
        'Mithilesh',
        'Mithun',
        'Mohan',
        'Mohit',
        'Mrigendra',
        'Mukesh',
        'Mukta',
        'Mukti',
        'Murali',
        'Nabin',
        'Nagendra',
        'Nakul',
        'Nandakishor',
        'Nandan',
        'Nandlal',
        'Narahari',
        'Narayan',
        'Narendra',
        'Naresh',
        'Natwar',
        'Naveen',
        'Navin',
        'Nawal',
        'Neelambar',
        'Neeraj',
        'Niketan',
        'Nikhil',
        'Nikhilesh',
        'Niraj',
        'Niranjan',
        'Nirbhaya',
        'Nirmal',
        'Nischal',
        'Nishant',
        'Nishanta',
        'Nuraj',
        'Om',
        'Omkar',
        'Omprakash',
        'Paaras',
        'Pankaj',
        'Parakram',
        'Paramananda',
        'Parameshwar',
        'Paras',
        'Parbat',
        'Parvat',
        'Parvesh',
        'Parwesh',
        'Pasang',
        'Pavan',
        'Pawan',
        'Phanindra',
        'Phanishwar',
        'Pitambar',
        'Poonyeah',
        'Poorna',
        'Prabal',
        'Prabhakar',
        'Prabhat',
        'Prabhu',
        'Prabin',
        'Prabuddha',
        'Pradeep',
        'Pradip',
        'Prahalad',
        'Prajeet',
        'Prajit',
        'Prakash',
        'Pramesh',
        'Pramod',
        'Prasad',
        'Prashant',
        'Pratap',
        'Pratik',
        'Praval',
        'Praveen',
        'Pravin',
        'Prawal',
        'Prayag',
        'Prem',
        'Pritam',
        'Prithivi',
        'Prithvi',
        'Puneet',
        'Punit',
        'Purna',
        'Purushottam',
        'Pushkar',
        'Rabi',
        'Rabin',
        'Rabindra',
        'Raghab',
        'Raghav',
        'Raghu',
        'Rahul',
        'Raj',
        'Raja',
        'Rajan',
        'Rajaram',
        'Rajeev',
        'Rajendra',
        'Rajesh',
        'Rajiv',
        'Rajkumar',
        'Raju',
        'Rajyeshwar',
        'Rakesh',
        'Ram',
        'Raman',
        'Ramchandra',
        'Ramesh',
        'Rameshwar',
        'Ramkrishna',
        'Randhir',
        'Ranjan',
        'Ranjeet',
        'Ranjit',
        'Rashmi',
        'Ratna',
        'Ravi',
        'Ravikiran',
        'Ravindra',
        'Resham',
        'Rijan',
        'Rijendra',
        'Rishabh',
        'Rishav',
        'Rishi',
        'Rishikesh',
        'Rohan',
        'Rohit',
        'Roopak',
        'Roshan',
        'Rudra',
        'Rupak',
        'Rushav',
        'Sabin',
        'Sachin',
        'Sachindra',
        'Sagar',
        'Sahadev',
        'Sameer',
        'Samir',
        'Samrat',
        'Sandeep',
        'Sanjay',
        'Sanjeev',
        'Sanjiv',
        'Santosh',
        'Sarbagya',
        'Sarbodaya',
        'Satindra',
        'Satish',
        'Satyajit',
        'Satyanarayan',
        'Satyendra',
        'Saubhagya',
        'Saurabh',
        'Saurav',
        'Shaan',
        'Shahid',
        'Shailen',
        'Shailendra',
        'Shailesh',
        'Shakti',
        'Shambhu',
        'Shamsher',
        'Shankar',
        'Shashank',
        'Shashi',
        'Shekhar',
        'Shridhar',
        'Shrikanta',
        'Shrikrishna',
        'Shyam',
        'Shyamal',
        'Shyamsundar',
        'Siddhanta',
        'Siddhartha',
        'Sikendra',
        'Sitaram',
        'Sohan',
        'Sridhar',
        'Subas',
        'Subhas',
        'Subhash',
        'Subhodha',
        'Subodh',
        'Sudeep',
        'Sudhakar',
        'Sudheer',
        'Sudhir',
        'Sudip',
        'Suman',
        'Sumesh',
        'Sundar',
        'Sundip',
        'Sunil',
        'Suraj',
        'Suren',
        'Surendra',
        'Suresh',
        'Surya',
        'Susan',
        'Sushil',
        'Swagat',
        'Swarup',
        'Swayambhu',
        'Tej',
        'Thaila',
        'Tilak',
        'Tirtha',
        'Tribhuvan',
        'Trilochan',
        'Trilok',
        'Tsering',
        'Tushar',
        'Udit',
        'Ujwal',
        'Umesh',
        'Upendra',
        'Uttam',
        'Vajra',
        'Varun',
        'Vasant',
        'Vasishtha',
        'Vasudev',
        'Ved',
        'Vikesh',
        'Vikram',
        'Vimal',
        'Vinay',
        'Vineet',
        'Vipin',
        'Vishal',
        'Vyas',
        'Yadab',
        'Yadav',
        'Yadunath',
        'Yagya',
        'Yam',
        'Yogendra',
        'Yogesh',
        'Yuvaraj',
    ];
    const nm2 = [
        'Aadi',
        'Aakanksha',
        'Aalaap',
        'Aanchal',
        'Aaradhana',
        'Aarati',
        'Aashika',
        'Aayusha',
        'Aayushma',
        'Adesha',
        'Adhipa',
        'Agni',
        'Aishwarya',
        'Ajaya',
        'Ajeeta',
        'Alisa',
        'Alisha',
        'Ambika',
        'Ameeri',
        'Ameeta',
        'Amira',
        'Amiree',
        'Amiri',
        'Amita',
        'Amla',
        'Amrabati',
        'Amreeta',
        'Amrita',
        'Amriti',
        'Amshu',
        'Amulyaa',
        'Ananta',
        'Anila',
        'Anita',
        'Anjala',
        'Anjalee',
        'Anjali',
        'Anjanee',
        'Anjani',
        'Anju',
        'Anjula',
        'Ankita',
        'Ankur',
        'Anmol',
        'Anshu',
        'Anu',
        'Anuja',
        'Anupa',
        'Anupam',
        'Anushka',
        'Apeksha',
        'Arati',
        'Archana',
        'Arpan',
        'Aruna',
        'Arunee',
        'Aruni',
        'Aruradha',
        'Atithee',
        'Atithi',
        'Atreya',
        'Atulya',
        'Ayusha',
        'Balaji',
        'Bandana',
        'Barsha',
        'Baruna',
        'Basanta',
        'Bechani',
        'Beena',
        'Beendu',
        'Bhagirathi',
        'Bhakti',
        'Bharata',
        'Bhavana',
        'Bhawana',
        'Bhoomi',
        'Bhumeeja',
        'Bhumi',
        'Bhumija',
        'Bhuwaneshwori',
        'Bichitra',
        'Bihaani',
        'Bihanee',
        'Bihani',
        'Bijaya',
        'Bijena',
        'Bimala',
        'Bina',
        'Binaya',
        'Bindu',
        'Bindusar',
        'Binita',
        'Bipana',
        'Bishala',
        'Bishnu',
        'Buddhimaya',
        'Chaman',
        'Chameli',
        'Champa',
        'Chanda',
        'Chandan',
        'Chandra',
        'Chandrakala',
        'Chandramaya',
        'Chetana',
        'Chhhaya',
        'Chhinmaya',
        'Chitra',
        'Daksheena',
        'Dakshina',
        'Damini',
        'Darpan',
        'Daya',
        'Debika',
        'Deeksha',
        'Deepa',
        'Deepaka',
        'Deepshikha',
        'Deepsikha',
        'Deepti',
        'Deveeka',
        'Devika',
        'Dhan',
        'Dhana',
        'Dhanju',
        'Dhankumari',
        'Dhanmaya',
        'Dhatri',
        'Dhyanee',
        'Dhyani',
        'Dibya',
        'Dikchha',
        'Diksha',
        'Dipa',
        'Dipaka',
        'Dipshika',
        'Dipshikha',
        'Divya',
        'Diya',
        'Dularee',
        'Dulari',
        'Durga',
        'Dwarika',
        'Falguni',
        'Fulkumari',
        'Ganga',
        'Garima',
        'Gauri',
        'Geet',
        'Geeta',
        'Gireeja',
        'Girija',
        'Git',
        'Gita',
        'Goma',
        'Gopee',
        'Gopeeka',
        'Gopi',
        'Gopika',
        'Grishma',
        'Gulab',
        'Gunaratna',
        'Gunjan',
        'Gyani',
        'Gyanu',
        'Hans',
        'Harsa',
        'Harsha',
        'Hasana',
        'Hasmi',
        'Heena',
        'Heera',
        'Hema',
        'Hemanta',
        'Himaghna',
        'Himal',
        'Himani',
        'Hina',
        'Hira',
        'Hiranya',
        'Indra',
        'Indrakala',
        'Indraneel',
        'Isha',
        'Ishan',
        'Ishika',
        'Ishwari',
        'Iswari',
        'Jamuna',
        'Janaki',
        'Janu',
        'Jaya',
        'Jayanta',
        'Jayantee',
        'Jayanti',
        'Jeevan',
        'Jeevani',
        'Jeeya',
        'Jessica',
        'Jethi',
        'Jibachhi',
        'Jibani',
        'Jinat',
        'Jivan',
        'Jiya',
        'Junu',
        'Jyotee',
        'Jyoti',
        'Jyotshna',
        'Kabeeta',
        'Kabita',
        'Kaili',
        'Kali',
        'Kalpana',
        'Kalyani',
        'Kamala',
        'Kamaleshwori',
        'Kamana',
        'Kamini',
        'Kanchan',
        'Kanchhi',
        'Kanti',
        'Kareesma',
        'Karisma',
        'Karuna',
        'Kasis',
        'Kaushika',
        'Kaushilya',
        'Kausiki',
        'Keeran',
        'Kesari',
        'Khusbhu',
        'Kiran',
        'Kirti',
        'Komal',
        'Kopeela',
        'Kopila',
        'Kripa',
        'Krisha',
        'Krishna',
        'Kritee',
        'Kriti',
        'Kumari',
        'Kumati',
        'Kumud',
        'Kusum',
        'Kusunti',
        'Kuwari',
        'Lagan',
        'Laila',
        'Lalita',
        'Laxmi',
        'Leela',
        'Lila',
        'Lina',
        'Lochan',
        'Loleeta',
        'Lolita',
        'Madhu',
        'Madhuri',
        'Madhurima',
        'Mahadevi',
        'Maheshwari',
        'Maili',
        'Maina',
        'Mainabati',
        'Maiya',
        'Mallika',
        'Mamata',
        'Mangita',
        'Mani',
        'Manila',
        'Manisa',
        'Manisha',
        'Manjeeta',
        'Manjita',
        'Manju',
        'Manjul',
        'Manjula',
        'Mankumari',
        'Manmaya',
        'Manu',
        'Mathura',
        'Maya',
        'Mayabati',
        'Mayur',
        'Mayushi',
        'Meenku',
        'Meera',
        'Meet',
        'Meeta',
        'Menka',
        'Menku',
        'Menuka',
        'Milan',
        'Minku',
        'Mira',
        'Mit',
        'Mita',
        'Mithila',
        'Mitra',
        'Mohani',
        'Mohita',
        'Motee',
        'Moti',
        'Mukta',
        'Mukti',
        'Muna',
        'Muni',
        'Murali',
        'Murtee',
        'Murti',
        'Muzur',
        'Nabina',
        'Nabita',
        'Nageena',
        'Nagina',
        'Naina',
        'Nanda',
        'Nandan',
        'Nandanee',
        'Nandani',
        'Nanu',
        'Narayani',
        'Naveena',
        'Navina',
        'Neehal',
        'Neehar',
        'Neel',
        'Neelam',
        'Neena',
        'Neera',
        'Nihal',
        'Nihar',
        'Nikeeta',
        'Niketan',
        'Nikita',
        'Nilam',
        'Nina',
        'Nipun',
        'Nira',
        'Nirmala',
        'Nirupam',
        'Nisha',
        'Nishita',
        'Nripa',
        'Pabitra',
        'Padma',
        'Padmabati',
        'Palash',
        'Pallavee',
        'Pallavi',
        'Parbati',
        'Pareejat',
        'Parijat',
        'Parimal',
        'Partha',
        'Parvati',
        'Pavitra',
        'Peenkee',
        'Peenki',
        'Phalguni',
        'Phani',
        'Pinki',
        'Poojana',
        'Prabha',
        'Prabina',
        'Pragya',
        'Prajeeta',
        'Prajita',
        'Prakritee',
        'Prakriti',
        'Prameela',
        'Pramila',
        'Prasana',
        'Prasata',
        'Pratiksha',
        'Praveena',
        'Pravina',
        'Preeti',
        'Preeya',
        'Preeyanka',
        'Prema',
        'Premkumari',
        'Prenana',
        'Prithivi',
        'Prithvi',
        'Priti',
        'Priya',
        'Priyanka',
        'Puja',
        'Punam',
        'Puneeta',
        'Punita',
        'Punya',
        'Purnima',
        'Puspa',
        'Putali',
        'Rabina',
        'Rachana',
        'Radha',
        'Radheeka',
        'Radhika',
        'Ragini',
        'Raina',
        'Rajani',
        'Rajeshwori',
        'Rajmati',
        'Raksha',
        'Ram kumari',
        'Rama',
        'Ramabati',
        'Ramaiya',
        'Ramani',
        'Rameela',
        'Rameeta',
        'Ramila',
        'Ramita',
        'Rampyari',
        'Ranamaya',
        'Rang',
        'Rangoli',
        'Rani',
        'Ranjan',
        'Ranjana',
        'Ranjeeta',
        'Ranjita',
        'Ranju',
        'Raseela',
        'Rashmi',
        'Rasila',
        'Rasmi',
        'Ratna',
        'Ratree',
        'Ratri',
        'Ravina',
        'Reena',
        'Reenkee',
        'Reenki',
        'Reenku',
        'Reeta',
        'Reeti',
        'Reetu',
        'Reeya',
        'Rejeena',
        'Rejina',
        'Rekha',
        'Renu',
        'Renuka',
        'Resami',
        'Reshami',
        'Richa',
        'Riddhi',
        'Rina',
        'Rinki',
        'Rinku',
        'Rishi',
        'Rishika',
        'Rita',
        'Riti',
        'Ritu',
        'Riya',
        'Rohita',
        'Rojeena',
        'Rojina',
        'Roma',
        'Roshani',
        'Roshni',
        'Rosnee',
        'Rudra',
        'Rupa',
        'Sabeena',
        'Sabeeta',
        'Sabina',
        'Sabita',
        'Sabitree',
        'Sabitri',
        'Sacheta',
        'Sachina',
        'Sachita',
        'Sadhana',
        'Safala',
        'Safari',
        'Sailaja',
        'Saili',
        'Sajal',
        'Sajana',
        'Sajeeta',
        'Sajita',
        'Sakshi',
        'Samana',
        'Sameera',
        'Samira',
        'Sancheeta',
        'Sanchita',
        'Sangeeta',
        'Sangin',
        'Sangita',
        'Sanjana',
        'Sanjeela',
        'Sanjeeta',
        'Sanjibnee',
        'Sanjila',
        'Sanjita',
        'Sanjivni',
        'Sanju',
        'Santa',
        'Santoshi',
        'Sanumaya',
        'Sapana',
        'Sarala',
        'Sarang',
        'Saraswati',
        'Sareena',
        'Sareeta',
        'Sarina',
        'Sarita',
        'Sarmeela',
        'Sarmila',
        'Saroja',
        'Sarupa',
        'Saubhagya',
        'Saumya',
        'Sauvagya',
        'Seeya',
        'Seti',
        'Shakti',
        'Shamita',
        'Shanta',
        'Shantee',
        'Shanti',
        'Shashi',
        'Shasikala',
        'Shesha',
        'Shikha',
        'Shiksha',
        'Shital',
        'Shitala',
        'Shova',
        'Shreya',
        'Shreyashi',
        'Shrisha',
        'Shristi',
        'Shubha',
        'Shushila',
        'Siddha',
        'Siddhi',
        'Siddhika',
        'Simran',
        'Sita',
        'Siya',
        'Sila',
        'Sova',
        'Sreejana',
        'Srijana',
        'Subhadra',
        'Subheksha',
        'Sudha',
        'Sujaya',
        'Sujeeta',
        'Sujita',
        'Sukanta',
        'Sukriti',
        'Sukumaya',
        'Sulekha',
        'Sulochana',
        'Suman',
        'Sumeeta',
        'Sumita',
        'Suneela',
        'Suneeta',
        'Sunila',
        'Sunita',
        'Suntali',
        'Supreeya',
        'Supriya',
        'Surabi',
        'Suravee',
        'Suravi',
        'Sureeta',
        'Surita',
        'Surya',
        'Suryaa',
        'Susheela',
        'Sushila',
        'Susila',
        'Suskriti',
        'Susma',
        'Suveksha',
        'Swapan',
        'Swapnil',
        'Swechchha',
        'Sweksha',
        'Swornim',
        'Swornima',
        'Tanuja',
        'Tanushree',
        'Tara',
        'Taranee',
        'Tarini',
        'Teeka',
        'Teja',
        'Thaili',
        'Thuli',
        'Tika',
        'Tulasi',
        'Tulsi',
        'Udaya',
        'Udayaa',
        'Ujjali',
        'Ujwali',
        'Uma',
        'Umanga',
        'Urbasi',
        'Urmila',
        'Uru',
        'Utsav',
        'Varuna',
        'Vasanta',
        'Vasava',
        'Vimala',
        'Vinaya',
        'Vineeta',
        'Vumeeja',
        'Vumija',
        'Yami',
    ];
    const nm3 = [
        'Acharya',
        'Adhikari',
        'Adhikary',
        'Agarwal',
        'Agasti',
        'Agrahari',
        'Agrawal',
        'Amatya',
        'Ansari',
        'Aryal',
        'Awale',
        'Awasthi',
        'Bachhar',
        'Badal',
        'Bade',
        'Bagale',
        'Bahadur',
        'Baidhya',
        'Baidya',
        'Bajagain',
        'Bajgain',
        'Bajimaya',
        'Bajracharya',
        'Bal',
        'Bamrel',
        'Bandyopadhyay',
        'Banepali',
        'Baniya',
        'Banjade',
        'Banjara',
        'Bansal',
        'Banskota',
        'Banstola',
        'Barakoti',
        'Baral',
        'Baruwal',
        'Basnet',
        'Basnyat',
        'Bastakoti',
        'Bastakoty',
        'Bastola',
        'Basukala',
        'Basyal',
        'Bataju',
        'Batas',
        'Belbase',
        'Benjankar',
        'Bhagat',
        'Bhandari',
        'Bhansali',
        'Bhattachan',
        'Bhattacharya',
        'Bhetwal',
        'Bhujail',
        'Bhujel',
        'Bhurtel',
        'Bhusal',
        'Bhutia',
        'Bijukchhe',
        'Bimb',
        'Bisht',
        'Bist',
        'Bista',
        'Bogati',
        'Bohara',
        'Bohra',
        'Budathoki',
        'Buddhacharya',
        'Budhathoki',
        'Byanjanakar',
        'Byanjankar',
        'Byanju',
        'Chalise',
        'Chalisey',
        'Chamling',
        'Chamrel',
        'Chand',
        'Chanda',
        'Chapagain',
        'Chapai',
        'Chapain',
        'Chataut',
        'Chaudhari',
        'Chaudhary',
        'Chaudhuri',
        'Chaulagain',
        'Chitrakar',
        'Choudhary',
        'Choulagai',
        'Dahal',
        'Dangi',
        'Dangol',
        'Danuwar',
        'Darji',
        'Darlami',
        'Dawadi',
        'Deuja',
        'Devaki',
        'Devkota',
        'Dhakal',
        'Dhakwa',
        'Dhamala',
        'Dhami',
        'Dharel',
        'Dhewajoo',
        'Dhimal',
        'Dhital',
        'Dhundup',
        'Dhungana',
        'Dhungel',
        'Dolma',
        'Dongol',
        'Dulal',
        'Dutta',
        'Gadal',
        'Gadtaula',
        'Gaire',
        'Gajmer',
        'Gajurel',
        'Gartaula',
        'Gauchan',
        'Gaudel',
        'Gaundel',
        'Gautam',
        'Gazmer',
        'Ghale',
        'Ghimire',
        'Ghorasaini',
        'Giri',
        'Gnawali',
        'Gnyawali',
        'Golchha',
        'Gorkhali',
        'Goudel',
        'Gubhaju',
        'Gupta',
        'Guragai',
        'Guragain',
        'Gurung',
        'Guruwacharya',
        'Gyanwali',
        'Gyawali',
        'Hamal',
        'Himanshu',
        'Humagain',
        'Hyoju',
        'Jamarkattel',
        'Jha',
        'Jhapali',
        'Jirel',
        'Kandel',
        'Kanel',
        'Kansakar',
        'Kantha',
        'Kapali',
        'Kaphle',
        'Karkee',
        'Karki',
        'Karmacharya',
        'Karn',
        'Karna',
        'Kasaju',
        'Kashyap',
        'Kattel',
        'Kayastha',
        'Keshari',
        'Khadgi',
        'Khadka',
        'Khakurel',
        'Khan',
        'Khanal',
        'Kharel',
        'Khatioda',
        'Khatiwada',
        'Khetan',
        'Khwaounju',
        'Khwaunju',
        'Koirala',
        'Kolachapati',
        'Kshatriya',
        'Kshetri',
        'Kunwar',
        'Kunwer',
        'Lawoti',
        'Lekhak',
        'Limbu',
        'Luitail',
        'Luitel',
        'Madhikarmi',
        'Magar',
        'Maharjan',
        'Mahat',
        'Mahato',
        'Mahto',
        'Mainali',
        'Malakar',
        'Mali',
        'Malla',
        'Manandhar',
        'Mandal',
        'Marasini',
        'Maskay',
        'Maske',
        'Maskey',
        'Massali',
        'Mathema',
        'Mishra',
        'Misra',
        'Mitra',
        'Modi',
        'Moktan',
        'Mukhia',
        'Mulepati',
        'Mulmi',
        'Munakarmi',
        'Munankarmi',
        'Nagargoje',
        'Nagarkoti',
        'Nakarmi',
        'Naulakha',
        'Nayaju',
        'Nayak',
        'Nemkul',
        'Neopane',
        'Neupane',
        'Nihure',
        'Niraula',
        'Niroula',
        'Niyogi',
        'Nyachhyon',
        'Nyachyoo',
        'Nyaupane',
        'Ojha',
        'Oli',
        'Pageni',
        'Pahadi',
        'Pahari',
        'Palikhe',
        'Palikhey',
        'Panday',
        'Pande',
        'Pandey',
        'Pandeya',
        'Pandit',
        'Pangeni',
        'Pant',
        'Panta',
        'Panth',
        'Pantha',
        'Panthee',
        'Panthi',
        'Parajuli',
        'Pariyar',
        'Parsai',
        'Patel',
        'Pathak',
        'Paudel',
        'Paudyal',
        'Phuyal',
        'Piya',
        'Poddar',
        'Pokharel',
        'Pokhrel',
        'Portel',
        'Poudel',
        'Poudyal',
        'Pradhan',
        'Pradhanang',
        'Pradhananga',
        'Prajapati',
        'Prasai',
        'Prasain',
        'Pudasaini',
        'Pun',
        'Puri',
        'Pyakurel',
        'Pyakuryal',
        'Rai',
        'Rajak',
        'Rajaure',
        'Rajbanshi',
        'Rajbhandari',
        'Rajkarnikar',
        'Rana',
        'Ranjan',
        'Ranjeet',
        'Ranjit',
        'Ranjitkar',
        'Rasaili',
        'Rasaily',
        'Rauniyar',
        'Raut',
        'Rautela',
        'Raval',
        'Rawal',
        'Rawat',
        'Rayamajhi',
        'Regmi',
        'Rijal',
        'Rimal',
        'Risal',
        'Rishal',
        'Rizal',
        'Roka',
        'Rumba',
        'Sadaula',
        'Sahani',
        'Sainju',
        'Salike',
        'Sapkota',
        'Satyal',
        'Sedhain',
        'Shah',
        'Sherpa',
        'Shahi',
        'Shakya',
        'Sharma',
        'Sherchan',
        'Sherchand',
        'Sherpa',
        'Shilakar',
        'Shilpakar',
        'Shiwakoti',
        'Shreesh',
        'Shrestha',
        'Shresthacharya',
        'Shukla',
        'Sigdel',
        'Sijapati',
        'Silpakar',
        'Silwal',
        'Sindhuliya',
        'Singh',
        'Sinha',
        'Sinjali',
        'Sinkhada',
        'Sitaula',
        'Sitoula',
        'Siwakoti',
        'Sodhi',
        'Sonar',
        'Sthapit',
        'Subba',
        'Subedee',
        'Subedi',
        'Subedy',
        'Sunuwar',
        'Sunwar',
        'Suwal',
        'Syangden',
        'Syangjali',
        'Tamang',
        'Tamarkar',
        'Tammrakar',
        'Tamrakar',
        'Tandukar',
        'Thakur',
        'Thakuri',
        'Thami',
        'Thapa',
        'Thapalia',
        'Thapaliya',
        'Timalsina',
        'Timilshina',
        'Timilsina',
        'Timsina',
        'Tripathee',
        'Tripathi',
        'Tripathy',
        'Tsering',
        'Tshering',
        'Tuladhar',
        'Tumbahangphe',
        'Tumbahangphey',
        'Upadhayay',
        'Upadhya',
        'Upadhyay',
        'Upadhyaya',
        'Upreti',
        'Uprety',
        'Vaidya',
        'Vaishnav',
        'Vajracharya',
        'Verma',
        'Vidyadhar',
        'Wagle',
        'Waiba',
        'Wasti',
        'Wosti',
        'Yadav',
        'Yogi',
        'Yonjan',
        'Yonzon',
    ];
    {
        if (type === 1) {
            names = `${sample(nm2)} ${sample(nm3)}`;
        } else {
            names = `${sample(nm1)} ${sample(nm3)}`;
        }
        return names;
    }
}
