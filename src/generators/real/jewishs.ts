import { sample } from 'lodash';

export default function jewishs() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aaron',
        'Abarron',
        'Abba',
        'Abe',
        'Abel',
        'Abell',
        'Abijah',
        'Abimelech',
        'Abir',
        'Abiram',
        'Abisha',
        'Able',
        'Abner',
        'Abraham',
        'Abram',
        'Abramo',
        'Absolom',
        'Adam',
        'Adar',
        'Addai',
        'Addam',
        'Aden',
        'Aderet',
        'Adin',
        'Adir',
        'Adiv',
        'Adlai',
        'Adlai',
        'Adley',
        'Adli',
        'Admon',
        'Adniel',
        'Adon',
        'Adonai',
        'Adriel',
        'Adriyel',
        'Ager',
        'Ahab',
        'Ahsalom',
        'Aitan',
        'Akiba',
        'Akim',
        'Akiva',
        'Aksel',
        'Akub',
        'Alijah',
        'Alim',
        'Alivia',
        'Alon',
        'Alter',
        'Alva',
        'Alvah',
        'Alvan',
        'Amasa',
        'Amichai',
        'Amiel',
        'Amikam',
        'Amir',
        'Amiram',
        'Amita',
        'Amiti',
        'Ammi',
        'Ammitai',
        'Amnon',
        'Amon',
        'Amos',
        'Amram',
        'Aram',
        'Ardon',
        'Ari',
        'Arie',
        'Ariel',
        'Arion',
        'Arlan',
        'Arland',
        'Arlando',
        'Arlen',
        'Arlin',
        'Armen',
        'Armin',
        'Armon',
        'Arnan',
        'Aron',
        'Arvad',
        'Arye',
        'Aryeh',
        'Asa',
        'Asaf',
        'Asaph',
        'Asher',
        'Ashur',
        'Avi',
        'Avichai',
        'Avidan',
        'Avidan',
        'Avidor',
        'Aviel',
        'Avigdor',
        'Avimelech',
        'Avinoam',
        'Aviram',
        'Avisha',
        'Avishai',
        'Avital',
        'Avner',
        'Avniel',
        'Avraham',
        'Avsalom',
        'Avshalom',
        'Axel',
        'Azaria',
        'Azarious',
        'Azaryah',
        'Azaryahu',
        'Azriel',
        'Bama',
        'Barak',
        'Baram',
        'Barnabas',
        'Barnabe',
        'Barnaby',
        'Baron',
        'Barrak',
        'Bart',
        'Bartel',
        'Barth',
        'Bartholomew',
        'Bartley',
        'Baruch',
        'Bela',
        'Ben',
        'Benedictson',
        'Beniamino',
        'Benjamin',
        'Benjy',
        'Benkamin',
        'Benny',
        'Benoni',
        'Benroy',
        'Benson',
        'Benson',
        'Benzion',
        'Berakhiah',
        'Betzalel',
        'Binah',
        'Binyamin',
        'Boas',
        'Boaz',
        'Bogdan',
        'Bohdan',
        'Cain',
        'Cale',
        'Caleb',
        'Carmel',
        'Carmelo',
        'Carmi',
        'Carmine',
        'Chagai',
        'Chaim',
        'Chanan',
        'Chanoch',
        'Chaviv',
        'Chavivi',
        'Chayim',
        'Che',
        'Chepe',
        'Chiram',
        'Choni',
        'Dabi',
        'Dagan',
        'Dagon',
        'Dalit',
        'Dan',
        'Dane',
        'Danel',
        'Danell',
        'Dani',
        'Daniel',
        'Daniele',
        'Danil',
        'Danila',
        'Dann',
        'Dannie',
        'Dannon',
        'Danny',
        'Dantrell',
        'Danyl',
        'Dar',
        'Dave',
        'Davi',
        'David',
        'Davin',
        'Deen',
        'Deron',
        'Dor',
        'Doren',
        'Dov',
        'Dovev',
        'Eban',
        'Eben',
        'Ebenezer',
        'Eder',
        'Efraim',
        ' Efran',
        'Efrat',
        'Efrayim',
        'Efrem',
        'Efren',
        'Efron',
        'EIlis',
        'Eitan',
        'Elam',
        'Elan',
        'Elazar',
        'Elazaro',
        'Eleazar',
        'Elhanan',
        'Eli',
        'Elias',
        'Eliezer',
        'Elihu',
        'Elijah',
        'Eliot',
        'Eliseo',
        'Elishama',
        'Elisheba',
        'Elisheva',
        'Eljah',
        'Elkanah',
        'Elliott',
        'Elrad',
        'Ely',
        'Emanuel',
        'Emmanuel',
        'Enoch',
        'Ephram',
        'Ephrem',
        'Ephron',
        'Eran',
        'Eri',
        'Eron',
        'Errapel',
        'Esau',
        'Esdras',
        'Eshkol',
        'Esra',
        'Etan',
        'Ethan',
        'Evelyn',
        'Eyal',
        'Eyou',
        'Ezechiel',
        'Ezekiel',
        'Ezra',
        'Ezrah',
        'Feivel',
        'Foma',
        'Gabai',
        'Gabe',
        'Gabi',
        'Gabor',
        'Gabrian',
        'Gabriel',
        'Gabriele',
        'Gabrielo',
        'Gal',
        'Gali',
        'Gamaliel',
        'Ganit',
        'Gavi',
        'Gavriel',
        'Gedaliah',
        'Gedalya',
        'Gedalyahu',
        'Gedeon',
        'Geremia',
        'Gersham',
        'Gershom',
        'Giacomo',
        'Gian',
        'Giannes',
        'Gideon',
        'Gil',
        'Gilead',
        'Gili',
        'Gilli',
        'Gilon',
        'Giovanni',
        'Gur',
        'Guri',
        'Gurion',
        'Guy',
        'Habib',
        'Hadar',
        'Ham',
        'Hanan',
        'Hannibal',
        'Harel',
        'Harmon',
        'Harrell',
        'Harrod',
        'Hayyim',
        'Heber',
        'Heman',
        'Herschel',
        'Hershel',
        'Hezekiah',
        'Hieremias',
        'Hiram',
        'Hod',
        'Honi',
        'Hosea',
        'Hyman',
        'Iakovos',
        'Ian',
        'Iaokim',
        'Ichabod',
        'Ike',
        'Ilias',
        'Illias',
        'Imanol',
        'Ioan',
        'Ionnes',
        'Iosep',
        'Ioseph',
        'Iov',
        'Ira',
        'Iram',
        'Isaac',
        'Isaakios',
        'Isaiah',
        'Isaias',
        'Iseabail',
        'Ishmael',
        'Isiah',
        'Ismael',
        'Ismail',
        'Israel',
        'Isreal',
        'Itai',
        'Ittamar',
        'Ivrit',
        'Ixaka',
        'Izaak',
        'Izreal',
        'Izzy',
        'Jaap',
        'Jabin',
        'Jacan',
        'Jack',
        'Jacob',
        'Jacob',
        'Jacobe',
        'Jacot',
        'Jaden',
        'Jader',
        'Jadon',
        'Jaedon',
        'Jael',
        'Jaira',
        'Jairus',
        'Jake',
        'Jakeem',
        'Jakome',
        'James',
        'Jamian',
        'Jamie',
        'Jamiel',
        'Jamin',
        'Jamon',
        'Jan',
        'Jancsi',
        'Jani',
        'Janie',
        'Jankia',
        'Janko',
        'Jannes',
        'Janos',
        'Jantje',
        'Japhet',
        'Japheth',
        'Jaques',
        'Jarah',
        'Jared',
        'Jariath',
        'Jaron',
        'Jarrett',
        'Jasper',
        'Javan',
        'Javen',
        'Jaydon',
        'Jaymin',
        'Jeb',
        'Jebediah',
        'Jed',
        'Jedadiah',
        'Jedaiah',
        'Jedd',
        'Jedediah',
        'Jedi',
        'Jediah',
        'Jedidiah',
        'Jehoichin',
        'Jehu',
        'Jem',
        ' Jenda',
        'Jephtah',
        'Jerad',
        'Jerah',
        'Jered',
        'Jeremi',
        'Jeremiah',
        'Jeremias',
        'Jeremie',
        'Jeremy',
        'Jeriah',
        'Jerod',
        'Jerrah',
        'Jerrick',
        'Jerrod',
        'Jesiah',
        'Jess',
        'Jesse',
        'Jessey',
        'Jessie',
        'Jessy',
        'Jesus',
        'Jethro',
        'Jim',
        'Jimmy',
        'Joachim',
        'Job',
        'Jobe',
        'Joby',
        'Jocheved',
        'Jock',
        'Joe',
        'Joed',
        'Joel',
        'Joen',
        'Joey',
        'Johan',
        'John',
        'Johnathan',
        'Johnathon',
        'Johnny',
        'Jokin',
        'Jomar',
        'Jon',
        'Jonah',
        'Jonam',
        'Jonas',
        'Jonatan',
        'Jonathan',
        'Jonathon',
        'Jonny',
        'Joop',
        'Joosef',
        'Jopie',
        'Jorah',
        'Joram',
        'Jordain',
        'Jordan',
        'Jordell',
        'Jordi',
        'Jordy',
        'Jore',
        'Jori',
        'Jorie',
        'Jorim',
        'Jory',
        'Joseba',
        'Josef',
        'Joseph',
        'Josephus',
        'Josh',
        'Joshua',
        'Joshwa',
        'Josiah',
        'Josias',
        'Joss',
        'Josu',
        'Josue',
        'Jotham',
        'Jourdaine',
        'Jourdon',
        'Jov',
        'Joziah',
        'Jubal',
        'Jubal',
        'Jud',
        'Jud',
        'Judah',
        'Judas',
        'Judd',
        'Jude',
        'Juha',
        'Jukka',
        'Junien',
        'Jurre',
        'Jussi',
        'Kalb',
        'Kaleb',
        'Kaniel',
        'Karmel',
        'Kedem',
        'Kenaz',
        'Kobe',
        'Kuper',
        'Laban',
        'Lapidos',
        'Lapidoth',
        'Lavan',
        'Lazar',
        'Lazarus',
        'Lazzaro',
        'Leb',
        'Lemuel',
        'Lev',
        'Levey',
        'Levi',
        'Lewi',
        'Lot',
        'Machau',
        'Machum',
        'Mads',
        'Mai',
        'Maichail',
        'Makis',
        'Mal',
        'Malachi',
        'Malachy',
        'Manasses',
        'Manuel',
        'Marnin',
        'Matai',
        'Mate',
        'Mathe',
        'Mathew',
        'Mathews',
        'Matt',
        'Matthew',
        'Matthias',
        'Matthieu',
        'Mattias',
        'Matyas',
        'Matz',
        'Mayir',
        'Meilseoir',
        'Meir',
        'Melchoir',
        'Menachem',
        'Menassah',
        'Mendel',
        'Meyer',
        'Micah',
        'Michael',
        'Michel',
        'Michon',
        'Mihaly',
        'Mika',
        'Mikael',
        'Mike',
        'Mikel',
        'Mikhail',
        'Mikhalis',
        'Mikhos',
        'Mikkel',
        'Miron',
        'Misi',
        'Miska',
        'Mitchell',
        'Moeshe',
        'Mordecai',
        'Mordechai',
        'Moses',
        'Moshe',
        'Mosheh',
        'Myron',
        'Naaman',
        'Nachman',
        'Nadav',
        'Nadiv',
        'Naftali',
        'Naftalie',
        'Nahum',
        'Nat',
        'Natanael',
        'Nate',
        'Nathan',
        'Nathanael',
        'Nathanial',
        'Nathaniel',
        'Nechemya',
        'Nehemiah',
        'Nethanel',
        'Nimrod',
        'Nissim',
        'Noach',
        'Noah',
        'Noam',
        'Noe',
        'Nuri',
        'Obediah',
        'Oded',
        'Ofer',
        'Omar',
        ' Omeet',
        'Omet',
        'Omri',
        'Oren',
        'Ori',
        'Orin',
        'Oris',
        'Ornice',
        'Osip',
        'Ovadiah',
        'Ovadya',
        'Oved',
        'Ovid',
        'Ozi',
        'Ozzi',
        'Ozzie',
        'Paltel',
        'Palti',
        'Paz',
        'Pesach',
        'Pessach',
        'Phineas',
        'Raanan',
        'Radwan',
        'Rafael',
        'Rafal',
        'Rafe',
        'Ranen',
        'Rani',
        'Ranit',
        'Ranon',
        'Raphael',
        'Ravid',
        'Rechavia',
        'Reuben',
        'Reuhen',
        'Ron',
        'Roni',
        'Rouvin',
        "R'phael",
        'Ruben',
        'Rueban',
        'Saadya',
        'Sakeri',
        'Salamon',
        'Samoel',
        'Sampson',
        'Samson',
        'Samuel',
        'Sanson',
        'Sasson',
        'Saul',
        'Schmaiah',
        'Schmuel',
        'Seanan',
        'Senen',
        'Seosamh',
        'Seosaph',
        'Serafim',
        'Serafin',
        'Seraphim',
        'Set',
        'Seth',
        'Shaan',
        'Shadrach',
        'Shane',
        'Shelomo',
        'Shem',
        'Shet',
        'Shilo',
        'Shiloh',
        'Shimshon',
        'Shlomo',
        'Shubha',
        'Simao',
        'Simcha',
        'Simen',
        'Simeon',
        'Simon',
        'Simson',
        'Sinai',
        'Sinon',
        'Siomon',
        'Sivan',
        'Sol',
        'Solomon',
        'Symeon',
        'Taaveti',
        'Taavi',
        'Tab',
        'Tabor',
        'Talmai',
        'Tamas',
        'Taneli',
        'Tapani',
        'Teppo',
        'Thaddeus',
        'Thoma',
        'Thomas',
        'Tobiah',
        'Tobias',
        'Tobin',
        'Tohy',
        'Tomas',
        'Tomek',
        'Tovi',
        'Tsidhqiyah',
        'Tutyahu',
        'Tuvya',
        'Tuvya',
        'Tzadok',
        'Tzefanyah',
        'Tzefanyahu',
        'Tzion',
        'Tziyon',
        'Tzuriel',
        'Tzvi',
        'Uri',
        'Uriah',
        'Uriel',
        'Uzziah',
        'Uzziel',
        'Vaschel',
        'Venamin',
        'Veniamin',
        'Venjamin',
        'Ximen',
        'Ximon',
        'Ximun',
        'Yaakov',
        'Yadid',
        'Yagil',
        'Yago',
        'Yair',
        'Yakov',
        'Yanis',
        'Yannis',
        'Yaphet',
        'Yardane',
        'Yarema',
        'Yaremka',
        'Yaron',
        'Yavin',
        'Yedidiah',
        'Yedidyah',
        'Yeeshai',
        'Yehoash',
        'Yehonadov',
        'Yehoshua',
        'Yehuda',
        'Yehudah',
        'Yehudi',
        'Yerachmiel',
        'Yered',
        'Yerik',
        'Yerucham',
        'Yeshaya',
        'Yiftach',
        'Yigil',
        'Yigol',
        'Yisreal',
        'Yissachar',
        'Yitro',
        'Yitzchak',
        'Yoel',
        'Yonah',
        'Yosef',
        'Yosefu',
        'Yusef',
        'Yuval',
        'Zacchaeus',
        'Zach',
        'Zachaios',
        'Zachariah',
        'Zacharias',
        'Zachary',
        'Zachely',
        'Zack',
        'Zadok',
        'Zalman',
        'Zamir',
        'Zan',
        'Zane',
        'Zani',
        'Zarad',
        'Zared',
        'Zavad',
        'Zayit',
        'Zebediah',
        'Zebulon',
        'Zebulun',
        'Zechariah',
        'Zed',
        'Zedekiah',
        'Zeke',
        'Zephan',
        'Zephaniah',
        'Zevulun',
        'Zimra',
        'Ziv',
        'Zohar',
        'Zubin',
        'Zuriel',
    ];
    const nm2 = [
        'Abigail',
        'Abirit',
        'Ada',
        'Adar',
        'Adi',
        'Adina',
        'Adiva',
        'Adva',
        'Agam',
        'Agamit',
        'Ahava',
        'Ahuda',
        'Ahuva',
        'Alice',
        'Alina',
        'Aliza',
        'Alma',
        'Alona',
        'Alonit',
        'Aluma',
        'Alumit',
        'Amalia',
        'Amira',
        'Anat',
        'Anna',
        'Ariel',
        'Ariela',
        'Ariella',
        'Ateret',
        'Aviah',
        'Aviam',
        'Aviel',
        'Aviella',
        'Avigail',
        'Avior',
        'Avital',
        'Aviv',
        'Aviva',
        'Avivit',
        'Aya',
        'Ayala',
        'Ayelet',
        'Bat Sheva',
        'Bat-Chen',
        'Batel',
        'Batya',
        'Bina',
        'Bracha',
        'Bruria',
        'Carmel',
        'Carmela',
        'Carmit',
        'Chagit',
        'Chamutal',
        'Chanit',
        'Chasidah',
        'Chava',
        'Chavatzelet',
        'Chaviva',
        'Chaya',
        'Chedva',
        'Cheli',
        'Chemda',
        'Chofit',
        'Cochava',
        'Dafna',
        'Dalia',
        'Dalit',
        'Dana',
        'Daniel',
        'Daniela',
        'Daniella',
        'Danit',
        'Daria',
        'Dasha',
        'Dganit',
        'Diana',
        'Dikla',
        'Dina',
        'Dlila',
        'Dora',
        'Dorin',
        'Dorit',
        'Drora',
        'Drorit',
        'Dvorah',
        'Eden',
        'Edna',
        'Efrat',
        'Eina',
        'Einat',
        'Einav',
        'Ela',
        'Eliana',
        'Elinor',
        'Eliora',
        'Elisheva',
        'Eliza',
        'Elizabeth',
        'Ella',
        'Elmaz',
        'Emily',
        'Emma',
        'Emuna',
        'Estee',
        'Esther',
        'Etti',
        'Eva',
        'Fanni',
        'Fanya',
        'Frida',
        'Fruma',
        'Gabi',
        'Gabriel',
        'Gabriela',
        'Gal',
        'Gali',
        'Galia',
        'Galila',
        'Galina',
        'Galit',
        'Ganit',
        'Gavriel',
        'Gaya',
        'Gazit',
        'Gefen',
        'Geula',
        'Gil',
        'Gili',
        'Gilla',
        'Gillat',
        'Golda',
        'Gurit',
        'Hadar',
        'Hadas',
        'Hadasa',
        'Hannah',
        'Hela',
        'Hila',
        'Hilla',
        'Hodaya',
        'Idit',
        'Ilana',
        'Ilanit',
        'Inbal',
        'Inbar',
        'Inna',
        'Irena',
        'Irina',
        'Iris',
        'Irit',
        'Isabel',
        'Israela',
        'Izabella',
        'Kalanit',
        'Karin',
        'Karina',
        'Karmelita',
        'Karmia',
        'Karmina',
        'Karmit',
        'Keren',
        'Kineret',
        'Larissa',
        'Laura',
        'Lea',
        'Lee',
        'Lee-El',
        'Levana',
        'Levia',
        'Lia',
        'Liat',
        'Lihi',
        'Lilach',
        'Lilit',
        'Lily',
        'Limor',
        'Lin',
        'Linor',
        'Linoy',
        'Lior',
        'Liora',
        'Lital',
        'Livnat',
        'Liza',
        'Mai',
        'Mali',
        'Malka',
        'Margalit',
        'Maria',
        'Mariana',
        'Marina',
        'Mary',
        'Masha',
        'Maya',
        'Mazal',
        'Mazal-Tov',
        'Meira',
        'Meirav',
        'Meital',
        'Michaela',
        'Michal',
        'Mika',
        'Miki',
        'Mira',
        'Miri',
        'Miriam',
        'Mirit',
        'Miryam',
        "Na'ama",
        "Na'omi",
        'Natali',
        'Natalia',
        'Nava',
        'Nechama',
        'Nelly',
        'Neora',
        'Neta',
        'Netali',
        'Nicol',
        'Nili',
        'Nira',
        'Nirit',
        'Nitzan',
        'Nitzana',
        'Nitzanit',
        'Noa',
        'Noga',
        'Noy',
        'Noya',
        'Nurit',
        'Odaya',
        'Odelia',
        'Ofek',
        'Ofir',
        'Ofira',
        'Ofra',
        'Opal',
        'Or',
        'Orah',
        'Oranit',
        'Orian',
        'Orit',
        'Orli',
        'Orna',
        'Ortal',
        'Oshra',
        'Oshrat',
        'Oshrit',
        'Osnat',
        'Paz',
        'Pazit',
        'Perla',
        'Pnina',
        "Ra'aya",
        'Rachel',
        'Racheli',
        'Rakefet',
        'Ravit',
        'Rebecca',
        'Reuya',
        'Revital',
        'Riki',
        'Rina',
        'Rinat',
        'Rita',
        'Riva',
        'Rivka',
        'Rona',
        'Roni',
        'Ronit',
        'Roza',
        'Ruchama',
        'Ruma',
        'Rut',
        'Rutti',
        'Sagit',
        'Sara',
        'Sarit',
        'Sgula',
        'Shakked',
        'Sharon',
        'Sharona',
        'Shelly',
        'Sherry',
        'Shifra',
        'Shimrit',
        'Shir',
        'Shira',
        'Shirel',
        'Shiri',
        'Shirit',
        'Shirli',
        'Shlomit',
        'Shoshana',
        'Shoshi',
        'Shoval',
        'Shula',
        'Shulamit',
        'Shuli',
        'Sigal',
        'Sigalit',
        'Simona',
        'Smadar',
        'Sofia',
        'Sonia',
        'Stav',
        'Stella',
        "T'chiya",
        'Tal',
        'Tali',
        'Talia',
        'Talma',
        'Talya',
        'Tamar',
        'Tamara',
        'Tammi',
        'Tania',
        'Tatiana',
        'Tehila',
        'Tikva',
        'Tina',
        'Tova',
        'Tzilla',
        'Tziona',
        'Tzippi',
        'Tzippora',
        'Tzofia',
        'Tzofit',
        'Tzuf',
        'Tzufit',
        'Tzvia',
        'Varda',
        'Vardit',
        'Vered',
        'Veronica',
        'Victoria',
        "Ya'ara",
        "Ya'arit",
        "Ya'el",
        "Ya'ela",
        'Yafa',
        'Yafit',
        'Yahel',
        'Yam',
        'Yamit',
        'Yana',
        'Yanina',
        'Yarden',
        'Yardena',
        'Yasmin',
        'Yehudit',
        'Yifat',
        'Yocheved',
        'Yona',
        'Yonat',
        'Yonit',
        'Yulia',
        'Zahava',
        'Zehava',
        'Zehavit',
        'Zimra',
        'Ziva',
        'Zmira',
        'Zohara',
        'Zoheret',
    ];
    const nm3 = [
        'Abraham',
        'Abrams',
        'Abramsky',
        'Abramson',
        'Adler',
        'Aharoni',
        'Aidallbery',
        'Almog',
        'Alter',
        'Altman',
        'Altmann',
        'Angel',
        'Apfel',
        'Argov',
        'Aronsfeld',
        'Aronthal',
        'Ascher',
        'Asher',
        'Auerbach',
        'Bach',
        'Backer',
        'Baeck',
        'Bakstansky',
        'Baline',
        'Ballin',
        'Balsam',
        'Bamberger',
        'Barak',
        'Barak',
        'Barnato',
        'Basch',
        'Bash',
        'Bashevis',
        'Basin',
        'Baskin',
        'Baum',
        'Baumberger',
        'Bayme',
        'Beck',
        'Becker',
        'Beer',
        'Beit',
        'Ben',
        'Ben-Shahar',
        'Benisch',
        'Benski',
        'Berkovic',
        'Berlin',
        'Berlinger',
        'Bettman',
        'Bezalel',
        'Blomstein',
        'Bloom',
        'Blum',
        'Blumenfeld',
        'Bomberg',
        'Borach',
        'Braff',
        'Brann',
        'Brasch',
        'Brenner',
        'Breuer',
        'Brodetsky',
        'Bruck',
        'Buchler',
        'Cantor',
        'Cassel',
        'Chagall',
        'Chertok',
        'Chicherin',
        'Cohen',
        'Cohen',
        'Cowen',
        'Daiches',
        'Danielovitch',
        'Datz',
        'Davidson',
        'Dayan',
        'Demsky',
        'Deronda',
        'Deutsch',
        'Diamond',
        'Dienesman',
        'Dobias',
        'Dresner',
        'Dreyfuss',
        'Duchan',
        'Duchen',
        'Duchin',
        'Dukes',
        'Duzy',
        'Eban',
        'Ehrenburg',
        'Einhorn',
        'Einstein',
        'Eisen',
        'Eisner',
        'Emanuel',
        'Endelman',
        'Epstein',
        'Erlich',
        'Eshel',
        'Eshkol',
        'Farber',
        'Federman',
        'Feinstein',
        'Feldshuh',
        'Fersht',
        'Fiedler',
        'Filipowski',
        'Finestein',
        'Fishman',
        'Fleischer',
        'Fleischmann',
        'Fraenkel',
        'Frank',
        'Frankau',
        'Frankel',
        'Frankfurter',
        'Franklin',
        'Friedlander',
        'Friedman',
        'Gadi',
        'Ganani',
        'Garbacz',
        'Garfinkle',
        'Gartner',
        'Gaster',
        'Geiger',
        'Gerber',
        'Gerlis',
        'Gertler',
        'Gestetner',
        'Ginsberg',
        'Gluckstein',
        'Golan',
        'Gold',
        'Goldberg',
        'Goldberg',
        'Goldbloom',
        'Goldman',
        'Goldschmidt',
        'Goldsmid',
        'Golembo',
        'Gollancz',
        'Goni',
        'Goodman',
        'Gottesdiener',
        'Gottesman',
        'Gould',
        'Goulston',
        'Graetz',
        'Grajek',
        'Greenberg',
        'Gretz',
        'Grois',
        'Gross',
        'Grossman',
        'Grossman',
        'Grunwald',
        'Gryn',
        'Haber',
        'Hadar',
        'Halevi',
        'Halevy',
        'Hamutal',
        'Har-Zahav',
        'Harel',
        'Harpaz',
        'Hart',
        'Hartog',
        'Hefetz',
        'Heilbron',
        'Helfgott',
        'Henriques',
        'Hershon',
        'Herzl',
        'Hillman',
        'Hirschell',
        'Hirst',
        'Hodesmann',
        'Homa',
        'Horovitz',
        'Horowitz',
        'Hurwitz',
        'Hyamson',
        'Isaac',
        'Isaacs',
        'Isaacson',
        'Isaaman',
        'Ish-Shalom',
        'Iskowitch',
        'Itzik',
        'Jacob',
        'Jacobovits',
        'Jacobowitz',
        'Jacobs',
        'Jacobsen',
        'Jacobson',
        'Jakubowicz',
        'Janner',
        'Jerayesh',
        'Jessel',
        'Josephs',
        'Jung',
        'Kabotinsky',
        'Kadish',
        'Kafni',
        'Kagan',
        'Kahan',
        'Kahn',
        'Kalish',
        'Kandelcukier',
        'Kantor',
        'Kantor',
        'Kantorowitsch',
        'Kaplan',
        'Katz',
        'Kedar',
        'Kempinski',
        'Kershen',
        'Kobler',
        'Kohnstamm',
        'Kollek',
        'Kosmin',
        'Kostiner',
        'Kramer',
        'Kraushaar',
        'Krausz',
        'Krickstein',
        'Kupner',
        'Kuttab',
        'Kolmel',
        'Lachman',
        'Lahrheim',
        'Landau',
        'Landeshut',
        'Lasker',
        'Laski',
        'Latchman',
        'Lawson',
        'Lebzelter',
        'Lehmann',
        'Lehrer',
        'Lerner',
        'Levenberg',
        'Leverson',
        'Levi',
        'Levin',
        'Levine',
        'Levinsky',
        'Levinson',
        'Levinstein',
        'Levitansky',
        'Levitch',
        'Levitsky',
        'Levitt',
        'Levy',
        'Liberman',
        'Lichtman',
        'Lieberman',
        'Liebermann',
        'Lipman',
        'Liss',
        'Littauer',
        'Litvinov',
        'Livshin',
        'Loewe',
        'Lotner',
        'Luxemburg',
        'Lyons',
        'Lowy',
        'Maccoby',
        'Machuv',
        'Malbim',
        'Mandebaum',
        'Manis',
        'Manischewitz',
        'Mankowitz',
        'Mannes',
        'Margolin',
        'Margolis',
        'Marks',
        'Mattuck',
        'Matusevitch',
        'Matz',
        'Maxse',
        'Mayer',
        'Mazar',
        'Meir',
        'Meir',
        'Meldola',
        'Mendel',
        'Mendelson',
        'Mendenhall',
        'Meninsky',
        'Merton',
        'Metz',
        'Mocatta',
        'Mohilewer',
        'Monash',
        'Mond',
        'Montagu',
        'Montefiore',
        'Morgenthau',
        'Moses',
        'Mowshowitch',
        'Munk',
        'Myer',
        'Myers',
        'Nachum',
        'Nenbauer',
        'Neuberger',
        'Neumegen',
        'Novokovichi',
        'Oded',
        'Okin',
        'Okun',
        'Ophir',
        'Paliakov',
        'Pazy',
        'Pekarsky',
        'Peres',
        'Perlman',
        'Persky',
        'Pick',
        'Pinero',
        'Pinsker',
        'Pinsky',
        'Piratin',
        'Pirbright',
        'Poliakov',
        'Pollack',
        'Pomerantz',
        'Posner',
        'Poupko',
        'Prag',
        'Prais',
        'Rabbinowitz',
        'Rabin',
        'Rabinowicz',
        'Ran',
        'Reinhartz',
        'Reinharz',
        'Reiss',
        'Resnick',
        'Reuben',
        'Rivkin',
        'Rocker',
        'Romach',
        'Rose',
        'Rosen',
        'Rosenbaum',
        'Rosenberg',
        'Rosenberg',
        'Rosenstein',
        'Rosenthal',
        'Roth',
        'Rothenstein',
        'Rothschild',
        'Rothstein',
        'Rubin',
        'Rubinstein',
        'Sachar',
        'Sacher',
        'Salbstein',
        'Salomons',
        'Saltman',
        'Saltzmann',
        'Samuel',
        'Samuels',
        'Sandler',
        'Sarasohn',
        'Sarkin',
        'Sarlin',
        'Sassoon',
        'Sayar',
        'Schach',
        'Schalit',
        'Schapiro',
        'Schechter',
        'Schecter',
        'Schiff',
        'Schiller',
        'Schlesinger',
        'Schmool',
        'Schneider',
        'Schonfeld',
        'Schuster',
        'Schwab',
        'Sebag',
        'Segal',
        'Segal',
        'Segalowitch',
        'Semon',
        'Shahar',
        'Shalit',
        'Shameel',
        'Shapiro',
        'Sharansky',
        'Sharett',
        'Sharot',
        'Sherman',
        'Shiloh',
        'Shimoni',
        'Shimshelewitz',
        'Shine',
        'Shkolnik',
        'Shmerkin',
        'Shoshan',
        'Shub',
        'Shulman',
        'Sieff',
        'Silberstein',
        'Singer',
        'Singer',
        'Sklare',
        'Smashnova',
        'Sokolov',
        'Somper',
        'Spector',
        'Speyer',
        'Spiegel',
        'Spiro',
        'Spiro',
        'Spitzer',
        'Starkman',
        'Stein',
        'Steinberg',
        'Steiner',
        'Stephany',
        'Stern',
        'Sternberg',
        'Stiebel',
        'Straus',
        'Susser',
        'Sutro',
        'Sylvester',
        'Szinessy',
        'Theodores',
        'Trachtenberg',
        'Trumpelder',
        'Tschkenow',
        'Twersky',
        'Tzon',
        'Uki',
        'Ussishkin',
        'Vinchevsky',
        'Wakstok',
        'Waley',
        'Wallach',
        'Wandsworth',
        'Wassermann',
        'Watterman',
        'Weber',
        'Wechsler',
        'Weidenseld',
        'Weil',
        'Weizman',
        'Weizmann',
        'Wiener',
        'Wiezman',
        'Wigram',
        'Wirth',
        'Wolf',
        'Wolmark',
        'Woolf',
        'Worms',
        'Yadin',
        'Yakobovitch',
        'Yedidyah',
        'Yoelsen',
        'Yoffey',
        'Zahavy',
        'Zalkind',
        'Zangwill',
        'Zedner',
        'Zeev',
        'Zeiman',
        'Zlato',
        'Zoegell',
        'Zundel',
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
