import { sample } from 'lodash';

export default function sinhaleses() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aberathna',
        'Abesekara',
        'Abeykoon',
        'Abeysekara',
        'Abeysinghe',
        'Abheeth',
        'Adeetha',
        'Adikari',
        'Adithya',
        'Aloka',
        'Aluthge',
        'Amarakoon',
        'Amarasekara',
        'Amarathunge',
        'Ambegoda',
        'Amila',
        'Amilajith',
        'Amithnal',
        'Anuhas',
        'Aravinda',
        'Ariyarathna',
        'Ariyarathne',
        'Arwinda',
        'Asanka',
        'Asanke',
        'Ashan',
        'Asiri',
        'Asith',
        'Athukorala',
        'Athurugiri',
        'Attanayake',
        'Atula',
        'Awantha',
        'Ayesh',
        'Balasooriya',
        'Bandara',
        'Binoy',
        'Binuka',
        'Chalaka',
        'Chamara',
        'Chaminda',
        'Chamli',
        'Chanaka',
        'Chandrasiri',
        'Charaka',
        'Chathura',
        'Chathuranga',
        'Chathurani',
        'Cherith',
        'Chinthaka',
        'Chiranjaya',
        'Chithranga',
        'Damien',
        'Damith',
        'Dananjaya',
        'Danasooriya',
        'Danuka',
        'Darmarathna',
        'Dayaprathapa',
        'Dayarathne',
        'Deepal',
        'Dehideniya',
        'Deshan',
        'Desith',
        'Dewmal',
        'Dhammika',
        'Dhananjaya',
        'Dhanasoorya',
        'Dhanuka',
        'Dhanul',
        'Dharashan',
        'Dilan',
        'Dilanka',
        'Dilip',
        'Diluka',
        'Dimuthu',
        'Dines',
        'Dinith',
        'Disanayaka',
        'Dissanayaka',
        'Dissanayake',
        'Diyon',
        'Dulanjari',
        'Duleepa',
        'Duminda',
        'Dumindhu',
        'Dumindu',
        'Dushan',
        'Edirisingha',
        'Edirisooriya',
        'Ekanayake',
        'Eranda',
        'Eranga',
        'Ershala',
        'Eshan',
        'Fernando',
        'Gajanayake',
        'Gamage',
        'Gamalath',
        'Gamlath',
        'Ganepola',
        'Gayan',
        'Gayashan',
        'Gayeshan',
        'Geeshapathi',
        'Geeth',
        'Geethan',
        'Gihan',
        'Gnanathilaka',
        'Goonathilaka',
        'Goonathilake',
        'Gunarathna',
        'Gunaratne',
        'Gunasekara',
        'Gunasena',
        'Gunathilaka',
        'Gunathilake',
        'Gunatilleka',
        'Gunith',
        'Handun',
        'Hansamal',
        'Harendra',
        'Harishchandra',
        'Harshaka',
        'Hashan',
        'Hasinth',
        'Hasintha',
        'Hasitha',
        'Herath',
        'Hewage',
        'Hewawasam',
        'Himal',
        'Hiran',
        'Hirantha',
        'Igalavithana',
        'Illangage',
        'Imbulana',
        'Indeewari',
        'Insith',
        'Inunil',
        'Iresh',
        'Iresha',
        'Irroshan',
        'Irugalbandara',
        'Isuru',
        'Janashantha',
        'Jayakody',
        'Jayamanne',
        'Jayampathi',
        'Jayanath',
        'Jayaneth',
        'Jayaranga',
        'Jayarathna',
        'Jayasekara',
        'Jayashan',
        'Jayasinghe',
        'Jayasoorya',
        'Jayasundara',
        'Jayasuriya',
        'Jayawickrama',
        'Kamal',
        'Kannangara',
        'Kapil',
        'Kapilarathna',
        'Karalliyadda',
        'Kariyawasam',
        'Karunadasa',
        'Karunarathna',
        'Karunathilaka',
        'Kasun',
        'Kavimal',
        'Kavinga',
        'Kaweendra',
        'Keerthigama',
        'Keerthirathne',
        'Khalinga',
        'Kindelpitiya',
        'Kishan',
        'Kithmal',
        'Kobiraj',
        'Kodikara',
        'Kollure',
        'Krishan',
        'Kularathna',
        'Kumarage',
        'Kumarasri',
        'Kumburuthenne',
        'Kumudu',
        'Kumudusena',
        'Lahiru',
        'Lakmal',
        'Lakshan',
        'Lakshmen',
        'Lalantha',
        'Lalinda',
        'Lankey',
        'Lansakara',
        'Lasantha',
        'Lasindu',
        'Lasitha',
        'Leelanka',
        'Lesantha',
        'Liyanaarachchi',
        'Liyanage',
        'Lokunarangoda',
        'Madampe',
        'Maddumahewage',
        'Madhushanke',
        'Maduranga',
        'Madurawala',
        'Madusanka',
        'Madushan',
        'Mahadewa',
        'Mahanama',
        'Mahawattage',
        'Mahendra',
        'Mahesh',
        'Mahinda',
        'Malaka',
        'Malinda',
        'Malintha',
        'Malith',
        'Mallikage',
        'Malsha',
        'Malshan',
        'Malweena',
        'Manoj',
        'Mapitigama',
        'Marasingha',
        'Marlon',
        'Medagedara',
        'Meeriyagalla',
        'Mihindu',
        'Mihiran',
        'Mirihagalle',
        'Mirihana',
        'Mithuro',
        'Miyushan',
        'Moditha',
        'Mohindra',
        'Mudannayake',
        'Muditha',
        'Munasinghe',
        'Nalaka',
        'Namal',
        'Nanayakkara',
        'Nandamuni',
        'Napawala',
        'Narada',
        'Navoda',
        'Nayanajith',
        'Nayananda',
        'Nehan',
        'Neil',
        'Nelaka',
        'Nelith',
        'Neranjan',
        'Neville',
        'Nihil',
        'Nilaksha',
        'Nilan',
        'Nilanga',
        'Nilantha',
        'Nilesh',
        'Nilushan',
        'Nimal',
        'Niran',
        'Niranga',
        'Nirmal',
        'Nisal',
        'Nishal',
        'Nishan',
        'Nishanga',
        'Nissan',
        'Niwunhalla',
        'Niwunhella',
        'Numen',
        'Nunasinghe',
        'Nushan',
        'Nuwan',
        'Nuwanga',
        'Padmakumara',
        'Palihana',
        'Palitha',
        'Pamu',
        'Pankaja',
        'Pannala',
        'Pasan',
        'Pathirana',
        'Pathirara',
        'Peiris',
        'Pelpola',
        'Perera',
        'Pilapitiya',
        'Pothupitiya',
        'Prabath',
        'Prabodhi',
        'Pradeep',
        'Prageeth',
        'Pramith',
        'Pranama',
        'Praneeth',
        'Prasad',
        'Prasangi',
        'Prasanna',
        'Prasantha',
        'Preyalal',
        'Priyanath',
        'Priyankara',
        'Priyashantha',
        'Psindu',
        'Pubudu',
        'Pulasthi',
        'Pushpakumara',
        'Rajakaruna',
        'Rajapakse',
        'Ramanayake',
        'Ranasingha',
        'Ranasinghe',
        'Ranathunga',
        'Ranawaka',
        'Ranawakkage',
        'Ranaweera',
        'Ranga',
        'Ransara',
        'Ransilu',
        'Rathnajeewa',
        'Rathnasekara',
        'Rathnayaka',
        'Rathnayake',
        'Rathunga',
        'Ratnayaka',
        'Ravihansa',
        'Ravinath',
        'Ravindu',
        'Ravishan',
        'Reiva',
        'Rmadurapperuma',
        'Rodni',
        'Rodrigo',
        'Rohan',
        'Roshan',
        'Roshen',
        'Ruban',
        'Rubathas',
        'Rukman',
        'Ruparathna',
        'Rupasinghe',
        'Ruwanari',
        'Sachethana',
        'Sachinda',
        'Sachindra',
        'Sachith',
        'Sahan',
        'Sajith',
        'Saman',
        'Samarakoon',
        'Samarathna',
        'Samaraweera',
        'Samith',
        'Sampath',
        'Sanath',
        'Sandaruwan',
        'Sandeepa',
        'Sangakkara',
        'Sanjeewa',
        'Sanjeewan',
        'Sanjeewanie',
        'Sanka',
        'Sankalpa',
        'Saseth',
        'Sasiri',
        'Saveen',
        'Savin',
        'Senadheera',
        'Senaka',
        'Senanayake',
        'Senarathne',
        'Senaratne',
        'Serasinghe',
        'Shalika',
        'Shanaka',
        'Shanil',
        'Shashiman',
        'Shehan',
        'Sheron',
        'Silva',
        'Sirimanne',
        'Siriwardhana',
        'Sitheera',
        'Solanga',
        'Soraj',
        'Sovis',
        'Srimal',
        'Srithilake',
        'Subasinghe',
        'Suchiritha',
        'Sudath',
        'Sugath',
        'Sujee',
        'Sulaj',
        'Sumudu',
        'Sunanda',
        'Suneshka',
        'Suneth',
        'Sunith',
        'Supun',
        'Suraj',
        'Suraji',
        'Suraweera',
        'Suresh',
        'Susara',
        'Susil',
        'Suvik',
        'Tennakoon',
        'Terans',
        'Thalagala',
        'Thalpawila',
        'Tharangani',
        'Tharindu',
        'Tharuka',
        'Thehan',
        'Thilakarathna',
        'Thilakarathne',
        'Thimira',
        'Thivanka',
        'Thrana',
        'Thuzitha',
        'Udara',
        'Udash',
        'Udaya',
        'Udayanga',
        'Udayangani',
        'Udesh',
        'Udugama',
        'Udugampala',
        'Upali',
        'Upalli',
        'Upul',
        'Uvindu',
        'Uyangoda',
        'Venura',
        'Viduranga',
        'Vihangha',
        'Viharagoda',
        'Vijay',
        'Vipulasena',
        'Viranga',
        'Vishwa',
        'Visvadinu',
        'Wajira',
        'Wanninayaka',
        'Wardhana',
        'Wasala',
        'Wasana',
        'Wasundara',
        'Weddagala',
        'Weerakoon',
        'Weerasinghe',
        'Weerasooriya',
        'Weerawardhana',
        'Wellala',
        'Wickramasinghe',
        'Wijeekon',
        'Wijeesundara',
        'Wijerathna',
        'Wijesinghe',
        'Wijesundara',
        'Wijethilake',
        'Wirasinha',
        'Wishwa',
        'Withanage',
        'Yaeshan',
        'Yasas',
        'Yasendra',
        'Yasi',
        'Yasindu',
        'Yasiru',
        'Yuresh',
        'Zoysa',
    ];
    const nm2 = [
        'Achini',
        'Ajanthi',
        'Ajitha',
        'Akila',
        'Amaali',
        'Amalee',
        'Amalie',
        'Amalka',
        'Amanda',
        'Amani',
        'Amitha',
        'Amodha',
        'Anjali',
        'Anjana',
        'Anupama',
        'Anuradha',
        'Anuruddhika',
        'Anushika',
        'Aruna',
        'Aruni',
        'Asela',
        'Asha',
        'Ashansa',
        'Ashaya',
        'Ashnika',
        'Asitha',
        'Ayanthi',
        'Ayesha',
        'Ayodya',
        'Bhagya',
        'Bhalini',
        'Bimali',
        'Binesha',
        'Biyanka',
        'Buddhimali',
        'Buddihika',
        'Budika',
        'Chadisha',
        'Chamali',
        'Chamalka',
        'Chamari',
        'Chameera',
        'Chamika',
        'Chamila',
        'Chamindi',
        'Chaminya',
        'Chammi',
        'Chamodi',
        'Chandana',
        'Chandrika',
        'Charitha',
        'Chathurangi',
        'Chinthana',
        'Chulakshi',
        'Darshana',
        'Darshani',
        'Dasuni',
        'Deepthi',
        'Dereesha',
        'Deshadhi',
        'Deshani',
        'Deshappriya',
        'Deshika',
        'Devika',
        'Dhananja',
        'Dhanoja',
        'Dhanuji',
        'Dhanushka',
        'Dharani',
        'Dheeravi',
        'Dilaksha',
        'Dilana',
        'Dilka',
        'Dilpika',
        'Dilshana',
        'Dilshani',
        'Dilumi',
        'Dimeshi',
        'Dinesha',
        'Dineshika',
        'Dinini',
        'Dinithi',
        'Dinuli',
        'Dinusha',
        'Dinushika',
        'Dinushka',
        'Dishantha',
        'Diyana',
        'Dulangi',
        'Dulani',
        'Dulanki',
        'Duleeshika',
        'Dulmini',
        'Dushyanthi',
        'Erandi',
        'Gaya',
        'Gayani',
        'Gayathiri',
        'Gayesha',
        'Geeshani',
        'Gihani',
        'Gimhani',
        'Gothami',
        'Hakmana',
        'Hamkana',
        'Hansani',
        'Hansi',
        'Hansika',
        'Harsha',
        'Harshana',
        'Harshani',
        'Harshi',
        'Harshika',
        'Hasani',
        'Hasara',
        'Hashni',
        'Himali',
        'Himashi',
        'Hiranya',
        'Hiranyamali',
        'Hiruni',
        'Hirunika',
        'Imali',
        'Imashini',
        'Imeshi',
        'Indika',
        'Indu',
        'Indumini',
        'Inoka',
        'Iranthi',
        'Iroshika',
        'Iroshini',
        'Ishari',
        'Ishmi',
        'Isura',
        'Janaka',
        'Janani',
        'Janitha',
        'Januka',
        'Jayami',
        'Jayamini',
        'Jayani',
        'Jayashani',
        'Jeewani',
        'Jeewanthra',
        'Kalani',
        'Kalhari',
        'Kalinga',
        'Kalpani',
        'Kanchana',
        'Kapila',
        'Kasumi',
        'Kaushalya',
        'Kaushi',
        'Kavith',
        'Khushi',
        'Kiyoma',
        'Krishani',
        'Kuaumadie',
        'Kulna',
        'Kumara',
        'Kumari',
        'Lakmali',
        'Lakmih',
        'Lakmini',
        'Lakprabha',
        'Lakshika',
        'Lakshini',
        'Lakshitha',
        'Lalitha',
        'Lankani',
        'Lasika',
        'Lihini',
        'Liyangani',
        'Liyoni',
        'Lochana',
        'Luwina',
        'Madeera',
        'Madhavi',
        'Madhubhashini',
        'Madhuka',
        'Madhupani',
        'Madubashine',
        'Maduka',
        'Madumali',
        'Madurika',
        'Madushani',
        'Madushi',
        'Maduwanthi',
        'Maheshika',
        'Malithi',
        'Malka',
        'Maneesha',
        'Mangala',
        'Manisha',
        'Manju',
        'Manori',
        'Manuja',
        'Mayomi',
        'Medha',
        'Melani',
        'Menaka',
        'Menuka',
        'Mihirani',
        'Minrada',
        'Monika',
        'Nadeeja',
        'Nadeeka',
        'Nadeesha',
        'Nadeeshani',
        'Namalee',
        'Natharie',
        'Navarathna',
        'Navodini',
        'Nayana',
        'Nayanadini',
        'Nayanathula',
        'Nayomi',
        'Nayomika',
        'Neelanga',
        'Neja',
        'Nelum',
        'Nethaka',
        'Nethranjali',
        'Nevindie',
        'Nevinka',
        'Nilakshi',
        'Nileshi',
        'Nilmini',
        'Niluka',
        'Nilusha',
        'Nilushana',
        'Nimali',
        'Nimasha',
        'Nimeshika',
        'Nimna',
        'Nimthaki',
        'Ninithi',
        'Nipuni',
        'Niranjana',
        'Niranji',
        'Nirasha',
        'Nirisha',
        'Nirmala',
        'Nirodha',
        'Niroshi',
        'Niroshiani',
        'Nisanka',
        'Nisansala',
        'Nishadi',
        'Nishani',
        'Nishanka',
        'Nishantha',
        'Nishshanka',
        'Nivodini',
        'Niwanthi',
        'Nurani',
        'Nuveena',
        'Nuwandi',
        'Nuwanthi',
        'Omeshi',
        'Oshadhi',
        'Parami',
        'Pavithra',
        'Peshila',
        'Piriyangi',
        'Piumi',
        'Poornima',
        'Prabha',
        'Prabhalini',
        'Prabhashani',
        'Prabhashi',
        'Pradeepanie',
        'Pramila',
        'Prasadi',
        'Prasadika',
        'Prasandhika',
        'Prasanga',
        'Priya',
        'Priyana',
        'Priyanka',
        'Priyanthini',
        'Purnima',
        'Ragani',
        'Rajitha',
        'Randika',
        'Rangani',
        'Rangi',
        'Ranuga',
        'Rasanjali',
        'Rashani',
        'Rashini',
        'Rasika',
        'Raveena',
        'Rinooza',
        'Rizhara',
        'Rohana',
        'Roshni',
        'Ruchira',
        'Ruklanthi',
        'Rukshala',
        'Ruvini',
        'Ruwani',
        'Ruwanthika',
        'Sachini',
        'Saduni',
        'Samadhi',
        'Samali',
        'Samanthi',
        'Samanthika',
        'Sameera',
        'Samindi',
        'Samitha',
        'Samithra',
        'Samodha',
        'Samudri',
        'Sandali',
        'Sandika',
        'Sanduni',
        'Sandunmali',
        'Sanjaya',
        'Sansuka',
        'Sanuja',
        'Sanuthi',
        'Sarah',
        'Saranga',
        'Saritha',
        'Sarojani',
        'Sasanka',
        'Sashika',
        'Sasrutha',
        'Sathie',
        'Saummika',
        'Saumya',
        'Semini',
        'Sewwandi',
        'Shaami',
        'Shakila',
        'Shamika',
        'Shamindri',
        'Shanika',
        'Shanka',
        'Shashi',
        'Shashika',
        'Shashirangana',
        'Shasipraba',
        'Shehani',
        'Sheno',
        'Shyamali',
        'Sithara',
        'Sithumini',
        'Srinika',
        'Subhashi',
        'Subodha',
        'Sucharitha',
        'Suchithrangie',
        'Sudammi',
        'Sudarshana',
        'Sudharma',
        'Sudheera',
        'Sugandi',
        'Sugandika',
        'Sujani',
        'Sumandani',
        'Sumangi',
        'Sumithra',
        'Sunali',
        'Sunara',
        'Sunari',
        'Suranga',
        'Surangi',
        'Surani',
        'Sureni',
        'Sushara',
        'Tanya',
        'Tecla',
        'Thakshala',
        'Thakshila',
        'Thalatha',
        'Thanuja',
        'Tharaka',
        'Tharanga',
        'Tharindi',
        'Tharshani',
        'Tharushi',
        'Thathsari',
        'Theepa',
        'Therunika',
        'Thilina',
        'Thilini',
        'Thineksha',
        'Thinesha',
        'Thulya',
        'Thusitha',
        'Tiroshi',
        'Udeesha',
        'Udeni',
        'Udeshika',
        'Ujani',
        'Umashi',
        'Upeksha',
        'Upesksha',
        'Uthpala',
        'Vasana',
        'Vasula',
        'Vidharshi',
        'Vidhura',
        'Vidu',
        'Vidumini',
        'Vidusahani',
        'Vindani',
        'Vindya',
        'Virangika',
        'Viranthi',
        'Vishaka',
        'Wageesha',
        'Waruni',
        'Waseega',
        'Wathsala',
        'Yahani',
        'Yamuna',
        'Yasami',
        'Yashara',
        'Yashodha',
        'Yashoraa',
    ];
    const nm3 = [
        'Abayaratne',
        'Abeyesundere',
        'Abeynaike',
        'Abeysekera',
        'Abeywickrama',
        'Addararachchi',
        'Amaradeva',
        'Amarasekara',
        'Amarashinghe',
        'Amarasinghe',
        'Anula',
        'Atapattu',
        'Athulathmudali',
        'Attygale',
        'Attygalle',
        'Balasuriya',
        'Banda',
        'Bandara',
        'Bandaranaike',
        'Bandaranayake',
        'Buddhika',
        'Chandawimala',
        'Chandrasiri',
        'Cooray',
        'Corea',
        'Dahanayake',
        'Deraniyagala',
        'Devapriya',
        'Devenampiyatissa',
        'Dewasiri',
        'Dhanapala',
        'Dharmagunawardhana',
        'Dharmapala',
        'Dharsha',
        'Dissanayake',
        'Dodangoda',
        'Dutugemunu',
        'Edirisinghe',
        'Ekanayake',
        'Fernando',
        'Fonseca',
        'Fonseka',
        'Gabadamudalige',
        'Gajabahu',
        'Gamage',
        'Gnanananda',
        'Goonatilake',
        'Gooneratne',
        'Goonesekara',
        'Goonesena',
        'Goonewardena',
        'Gopallawa',
        'Gunananda',
        'Gunapala',
        'Gunaratne',
        'Gunasekara',
        'Gunasekera',
        'Gunawardena',
        'Gunewardena',
        'Gunewardene',
        'Guruge',
        'Hegoda',
        'Hemantha',
        'Herath',
        'Hettige',
        'Hewavitharana',
        'Illangasinghe',
        'Iriyagolla',
        'Jagath',
        'Jararatne',
        'Jayakody',
        'Jayamaha',
        'Jayamanne',
        'Jayaratne',
        'Jayasena',
        'Jayasinghe',
        'Jayasinha',
        'Jayasuriya',
        'Jayatilleka',
        'Jayatilleke',
        'Jayatissa',
        'Jayawardena',
        'Jayawardene',
        'Jayaweera',
        'Jayawickrama',
        'Jayewardene',
        'Jinavamsa',
        'Jothipala',
        'Kalupahana',
        'Kanakeratne',
        'Kannangara',
        'Kapuga',
        'Karannagoda',
        'Karunaratne',
        'Kehelgamuwa',
        'Khemadasa',
        'Kobbekaduwa',
        'Kotelawala',
        'Kotiduwakku',
        'Kularatne',
        'Kulasinghe',
        'Kulatunga',
        'Kumarage',
        'Kumaranatunga',
        'Kumaratunga',
        'Lankage',
        'Lilavati',
        'Madugalle',
        'Mahanama',
        'Maitreya',
        'Malewana',
        'Malinga',
        'Mallawarachchi',
        'Medhalankara',
        'Medhananda',
        'Mendis',
        'Moonesinghe',
        'Nanananda',
        'Nanarama',
        'Nandasiri',
        'Niroshan',
        'Nissanka',
        'Obeyesekere',
        'Obeysekera',
        'Palihapitiya',
        'Pannaseeha',
        'Paranavithana',
        'Pathiraja',
        'Pathirana',
        'Peiris',
        'Perera',
        'Ponnamperuma',
        'Prasanna',
        'Premadasa',
        'Premaratne',
        'Priyantha',
        'Rahula',
        'Rajapaksa',
        'Ranaweera',
        'Ranwala',
        'Rathnayake',
        'Samarakoon',
        'Samaranayake',
        'Samarasinghe',
        'Samaraweera',
        'Sangakkara',
        'Saranankara',
        'Seelalankara',
        'Senanayake',
        'Senarath',
        'Seneviratne',
        'Serasinghe',
        'Shantha',
        'Silu',
        'Silva',
        'Sirisena',
        'Siriwardena',
        'Sumangala',
        'Suriyasena',
        'Thotawatte',
        'Tilakaratna',
        'Vijaya',
        'Vikkamabahu',
        'Vimukthi',
        'Vithanage',
        'Walpola',
        'Weerakoon',
        'Weeramantry',
        'Weeraratne',
        'Weerasekara',
        'Weerasinghe',
        'Weerathunga',
        'Wichramasinghe',
        'Wickrema',
        'Wickremanayake',
        'Wickremasinghe',
        'Wijemanne',
        'Wijeratne',
        'Wijetunge',
        'Wijewardene',
        'Wimaladharma',
        'Wimalaratne',
        'Wimalasuriya',
        'Wipulasara',
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
