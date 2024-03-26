import { sample } from 'lodash';

export default function futuristics() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aarav',
        'Aarom',
        'Abbrahan',
        'Abrahan',
        'Ace',
        'Acsel',
        'Adahm',
        'Adahn',
        'Adit',
        'Adone',
        'Adran',
        'Adrihan',
        'Adrihel',
        'Adrihen',
        'Adriyel',
        'Adriyen',
        'Adryan',
        'Adryel',
        'Aebram',
        'Aedan',
        'Aedar',
        'Aedard',
        'Aeden',
        'Aedyn',
        'Aeraf',
        'Aerav',
        'Aeron',
        'Agost',
        'Agust',
        'Ahbel',
        'Ahlan',
        'Ahlex',
        'Ahlwin',
        'Ahron',
        'Aibel',
        'Aibram',
        'Aice',
        'Aiden',
        'Aisaak',
        'Aksel',
        'Alber',
        'Aldoh',
        'Aldohr',
        'Aldon',
        'Aldone',
        'Alecx',
        'Alefret',
        'Alexand',
        'Alexin',
        'Alezand',
        'Alezander',
        'Alhan',
        'Alifred',
        'Alin',
        'Alix',
        'Alixandr',
        'Alixer',
        'Allan',
        'Alren',
        'Andere',
        'Anderz',
        'Andie',
        'Andret',
        'Andrex',
        'Andry',
        'Anedre',
        'Anthonis',
        'Anthonix',
        'Antoin',
        'Antoniye',
        'Antorn',
        'Apollox',
        'Arhun',
        'Arihan',
        'Arion',
        'Aris',
        'Ariyan',
        'Arjun',
        'Arlox',
        'Arman',
        'Armanis',
        'Armanix',
        'Arnaf',
        'Arnav',
        'Arthir',
        'Artuhr',
        'Aryan',
        'Asa',
        'Asan',
        'Asher',
        'Ashir',
        'Ashr',
        'Ashtin',
        'Ashtom',
        'Astin',
        'Atticas',
        'Augun',
        'Augus',
        'Austim',
        'Austyn',
        'Averyx',
        'Axtin',
        'Ayaan',
        'Aybram',
        'Aydan',
        'Ayden',
        'Aydin',
        'Barreth',
        'Beckhan',
        'Bekn',
        'Benja',
        'Benjam',
        'Bentlae',
        'Bentleye',
        'Bentlix',
        'Bentom',
        'Billis',
        'Billix',
        'Blaike',
        'Blayne',
        'Blayse',
        'Bobbis',
        'Bobbyx',
        'Bohin',
        'Bouwen',
        'Brack',
        'Bracken',
        'Braddy',
        'Bradger',
        'Bradlix',
        'Braeden',
        'Braedy',
        'Braedyn',
        'Braidn',
        'Brandon',
        'Brantom',
        'Brax',
        'Braydan',
        'Braydn',
        'Brayeden',
        'Braylin',
        'Brayln',
        'Breckett',
        'Brenden',
        'Brensom',
        'Brigan',
        'Brindan',
        'Brindon',
        'Briyan',
        'Briyce',
        'Brodin',
        'Brodrik',
        'Brodyn',
        'Broggs',
        'Brunnos',
        'Bruwes',
        'Bruwno',
        'Bryce',
        'Caerson',
        'Cahlun',
        'Callam',
        'Callin',
        'Calrin',
        'Calwin',
        'Camden',
        'Camdon',
        'Camran',
        'Camren',
        'Camrin',
        'Camryn',
        'Canning',
        'Canrad',
        'Carbin',
        'Carliyel',
        'Carsin',
        'Cartr',
        'Cayeden',
        'Cayedn',
        'Cayen',
        'Cayne',
        'Caze',
        'Cedrix',
        'Cedroc',
        'Charle',
        'Charliye',
        'Chindler',
        'Chindlr',
        'Christover',
        'Chrix',
        'Clarx',
        'Claye',
        'Claytin',
        'Clintom',
        'Codex',
        'Codix',
        'Cohlin',
        'Cohren',
        'Colbix',
        'Colemin',
        'Colrin',
        'Coltan',
        'Coltin',
        'Conr',
        'Corly',
        'Coup',
        'Crag',
        'Craix',
        'Crayg',
        'Crew',
        'Cristover',
        'Crux',
        'Cullin',
        'Curtix',
        'Cyris',
        'Cyrox',
        'Daerryl',
        'Daltom',
        'Damari',
        'Damaris',
        'Damiran',
        'Damiron',
        'Damiyen',
        'Danirel',
        'Danom',
        'Darilan',
        'Darinell',
        'Dariox',
        'Dariux',
        'Darren',
        'Darwon',
        'Daryen',
        'Daviad',
        'Davian',
        'Daviron',
        'Davith',
        'Davix',
        'Davon',
        'Dawson',
        'Dax',
        'Dayne',
        'Derix',
        'Derock',
        'Deron',
        'Derril',
        'Desmon',
        'Devan',
        'Dexton',
        'Dismon',
        'Doriyan',
        'Dorrinell',
        'Doryen',
        'Draex',
        'Drav',
        'Drax',
        'Drayk',
        'Drick',
        'Duglas',
        'Edam',
        'Edan',
        'Edard',
        'Edvin',
        'Elber',
        'Elden',
        'Elex',
        'Eligah',
        'Elijea',
        'Elliat',
        'Elrin',
        'Elriot',
        'Elyot',
        'Emberson',
        'Emerton',
        'Emerys',
        'Emeryx',
        'Emex',
        'Emmed',
        'Emorson',
        'Ender',
        'Enders',
        'Enderson',
        'Erix',
        'Erock',
        'Ethin',
        'Flyx',
        'Francole',
        'Frankin',
        'Frankyl',
        'Fransix',
        'Fynn',
        'Fynnegun',
        'Fyster',
        'Gabryel',
        'Gaerry',
        'Garreth',
        'Gav',
        'Gavryn',
        'Gayel',
        'Gayge',
        'Gayle',
        'Geral',
        'Geremy',
        'Gideron',
        'Graeham',
        'Graeme',
        'Graesen',
        'Graeyam',
        'Graezzon',
        'Grald',
        'Grayham',
        'Gzad',
        'Haral',
        'Harlin',
        'Harp',
        'Harris',
        'Harryx',
        'Harvel',
        'Hectrr',
        'Hendrix',
        'Hoard',
        'Horris',
        'Horrison',
        'Hueson',
        'Ifan',
        'Ilex',
        'Jaden',
        'Jadirel',
        'Jaecob',
        'Jaeden',
        'Jaedon',
        'Jaek',
        'Jaeke',
        'Jael',
        'Jaggex',
        'Jagx',
        'Jame',
        'Jardan',
        'Jareth',
        'Jariden',
        'Jaro',
        'Jasih',
        'Jastin',
        'Jax',
        'Jaxer',
        'Jaxon',
        'Jaxson',
        'Jaxtom',
        'Jaycobe',
        'Jayecob',
        'Jayedn',
        'Jayme',
        'Jaze',
        'Jazon',
        'Jefry',
        'Jefrye',
        'Jenzen',
        'Jezper',
        'Jezzy',
        'Johnath',
        'Jordein',
        'Jordyen',
        'Juliran',
        'Julyen',
        'Justan',
        'Kade',
        'Kaeler',
        'Kai',
        'Kamern',
        'Kamron',
        'Kartr',
        'Karzen',
        'Kase',
        'Kaydn',
        'Kayel',
        'Kaze',
        'Khal',
        'Kiran',
        'Knox',
        'Koale',
        'Koba',
        'Kodyn',
        'Kohner',
        'Kohren',
        'Kolb',
        'Kold',
        'Kolt',
        'Koltn',
        'Korb',
        'Korey',
        'Krastin',
        'Krish',
        'Kurson',
        'Kyel',
        'Kyeler',
        'Kyllan',
        'Kyllen',
        'Kyman',
        'Kyre',
        'Kyris',
        'Laenard',
        'Laene',
        'Landan',
        'Landn',
        'Larrence',
        'Larris',
        'Lasson',
        'Layne',
        'Laytn',
        'Leeroye',
        'Lennox',
        'Lero',
        'Leviye',
        'Liyam',
        'Luekas',
        'Lushian',
        'Maddax',
        'Madn',
        'Maeck',
        'Maerlon',
        'Maikle',
        'Malahki',
        'Malakye',
        'Malax',
        'Malcalm',
        'Martn',
        'Marwin',
        'Matzen',
        'Mauris',
        'Maverock',
        'Maxtn',
        'Maxtom',
        'Maxwill',
        'Mayzon',
        'Mazen',
        'Mikl',
        'Moargan',
        'Morgn',
        'Myles',
        'Naethan',
        'Nathanael',
        'Nathn',
        'Nayel',
        'Niklas',
        'Nix',
        'Nyco',
        'Olver',
        'Orin',
        'Orlan',
        'Oron',
        'Own',
        'Ozcar',
        'Pabl',
        'Patrack',
        'Patrock',
        'Pax',
        'Paxt',
        'Paxtn',
        'Payeton',
        'Phenix',
        'Philp',
        'Rafel',
        'Ragan',
        'Randis',
        'Raydn',
        'Rober',
        'Roberd',
        'Roderock',
        'Rodneye',
        'Rodrick',
        'Rodrock',
        'Rogr',
        'Rohn',
        'Roys',
        'Rube',
        'Rusl',
        'Ryder',
        'Ryker',
        'Rylan',
        'Rymond',
        'Sawyir',
        'Sawyr',
        'Shaene',
        'Shaw',
        'Shayn',
        'Skylr',
        'Solmon',
        'Soren',
        'Stevn',
        'Sulvan',
        'Sylas',
        'Taelor',
        'Taln',
        'Tann',
        'Tanr',
        'Tatm',
        'Teag',
        'Ternce',
        'Thadd',
        'Thoms',
        'Timoth',
        'Tobis',
        'Tobs',
        'Ton',
        'Tray',
        'Traze',
        'Trephor',
        'Treye',
        'Tristen',
        'Tristiran',
        'Tristn',
        'Trum',
        'Tryst',
        'Tyse',
        'Tyze',
        'Victr',
        'Vycter',
        'Vyctor',
        'Waelon',
        'Waerren',
        'Walkr',
        'Wallon',
        'Waltr',
        'Wayde',
        'Wayn',
        'Wilm',
        'Wils',
        'Winson',
        'Wye',
        'Xan',
        'Xandr',
        'Xav',
        'Xavis',
        'Xavix',
        'Ximon',
        'Xzav',
        'Xzavis',
        'Yael',
        'Yahr',
        'Yan',
        'Yce',
        'Yos',
        'Ysaac',
        'Zaeden',
        'Zaen',
        'Zaid',
        'Zan',
        'Zand',
        'Zandr',
        'Zav',
        'Zavir',
        'Zavis',
        'Zavr',
        'Zavyr',
        'Zax',
        'Zaxary',
        'Zayre',
        'Zimeon',
        'Zimon',
        'Zyre',
    ];
    const nm2 = [
        'Abbigael',
        'Abbil',
        'Abbyl',
        'Abgale',
        'Abrielle',
        'Abril',
        'Adley',
        'Adlyn',
        'Adlynn',
        'Adrana',
        'Adriaenne',
        'Adriannae',
        'Aebby',
        'Aedele',
        'Aekira',
        'Aelani',
        'Aeliyah',
        'Aellana',
        'Aellice',
        'Aellyce',
        'Aemmalee',
        'Aera',
        'Aerora',
        'Aesha',
        'Aevangel',
        'Aevangelina',
        'Aeyana',
        'Aileene',
        'Akyra',
        'Alaegha',
        'Alaena',
        'Alaina',
        'Alaysia',
        'Aleigha',
        'Alestra',
        'Alestrandra',
        'Alextra',
        'Allany',
        'Alyce',
        'Amaera',
        'Amaeri',
        'Amelise',
        'Amelix',
        'Anahi',
        'Anastase',
        'Anaya',
        'Anbel',
        'Andraea',
        'Aneya',
        'Angique',
        'Anka',
        'Anlise',
        'Annalisa',
        'Aracelle',
        'Arana',
        'Arbelle',
        'Arelle',
        'Arly',
        'Arlyse',
        'Aryana',
        'Aryanna',
        'Aubriena',
        'Aubrina',
        'Avae',
        'Avaeana',
        'Avalynn',
        'Avry',
        'Ayana',
        'Aymee',
        'Ayna',
        'Azarea',
        'Azyriah',
        'Baeleigh',
        'Baelleigh',
        'Baely',
        'Baethany',
        'Balee',
        'Banca',
        'Barba',
        'Belenne',
        'Beraelyn',
        'Betrice',
        'Brae',
        'Braealyn',
        'Braelley',
        'Braeylee',
        'Braley',
        'Breaenna',
        'Brennya',
        'Breyanna',
        'Brialea',
        'Brialeagh',
        'Brialey',
        'Bridgeth',
        'Brisea',
        'Britella',
        'Briya',
        'Briyanna',
        'Briyelle',
        'Bryaleigh',
        'Byenca',
        'Caedence',
        'Caelia',
        'Caemron',
        'Caera',
        'Caeryssa',
        'Cambrisa',
        'Camla',
        'Camryn',
        'Carline',
        'Carlisa',
        'Casdy',
        'Cassana',
        'Cassanra',
        'Catalea',
        'Cathrise',
        'Catlea',
        'Cayelyn',
        'Cayetlin',
        'Ceilia',
        'Celethe',
        'Chaeya',
        'Charleagh',
        'Charlise',
        'Charliza',
        'Charlo',
        'Chlo',
        'Claissa',
        'Claudira',
        'Corlina',
        'Dafnea',
        'Danice',
        'Daniyela',
        'Daniyelle',
        'Danuella',
        'Danyka',
        'Daphnea',
        'Dayana',
        'Deabora',
        'Denice',
        'Desree',
        'Deyanna',
        'Diyana',
        'Dlaney',
        'Dlilah',
        'Dmi',
        'Dnise',
        'Elaena',
        'Eleine',
        'Eleno',
        'Elenoh',
        'Ellayina',
        'Emelisa',
        'Emelyse',
        'Emery',
        'Emesyn',
        'Emilea',
        'Emilisa',
        'Emiliye',
        'Emilyse',
        'Emson',
        'Erinne',
        'Erisha',
        'Eriska',
        'Erixa',
        'Evaelyn',
        'Evanline',
        'Evleyen',
        'Evlyn',
        'Eyleene',
        'Fyna',
        'Fyonae',
        'Galea',
        'Galya',
        'Giana',
        'Giuiana',
        'Giyana',
        'Gloriya',
        'Graece',
        'Gyanna',
        'Haelee',
        'Haeleigh',
        'Haellen',
        'Haennah',
        'Haerlo',
        'Haylay',
        'Haylea',
        'Helna',
        'Henna',
        'Herlee',
        'Idelle',
        'Ilana',
        'Isbel',
        'Isbelle',
        'Islae',
        'Islea',
        'Iveanne',
        'Iyleen',
        'Izbella',
        'Jacquine',
        'Jaelah',
        'Jaelyne',
        'Jaemma',
        'Jaenelle',
        'Jaesmin',
        'Jaessa',
        'Jaezmina',
        'Jaiya',
        'Jaleah',
        'Janae',
        'Janiah',
        'Jasemine',
        'Jasmina',
        'Jayda',
        'Jayla',
        'Jaynelle',
        'Jazmi',
        'Jazzly',
        'Jemna',
        'Jennife',
        'Jennix',
        'Jexa',
        'Jexica',
        'Jilleane',
        'Jordyna',
        'Jordynia',
        'Joselane',
        'Juith',
        'Juliasa',
        'Julisa',
        'Julith',
        'Jynna',
        'Kaedn',
        'Kaela',
        'Kaeleen',
        'Kaelia',
        'Kaelyn',
        'Kaence',
        'Kaerine',
        'Kaeya',
        'Kalyah',
        'Kamryn',
        'Karina',
        'Karise',
        'Karsyne',
        'Kasdy',
        'Kasra',
        'Katlina',
        'Kaya',
        'Kayelin',
        'Kayetlyn',
        'Kayi',
        'Keana',
        'Keaya',
        'Kelya',
        'Kelyn',
        'Kily',
        'Kimbr',
        'Kimly',
        'Kimra',
        'Kira',
        'Kirsen',
        'Kirst',
        'Kora',
        'Krissa',
        'Kyndle',
        'Laeila',
        'Laera',
        'Lainesy',
        'Laryse',
        'Layala',
        'Laylah',
        'Leshi',
        'Leski',
        'Liala',
        'Lilea',
        'Lillya',
        'Lilya',
        'Lolea',
        'Loriya',
        'Lorlea',
        'Lucira',
        'Lylah',
        'Madlyn',
        'Maecey',
        'Maecy',
        'Maelana',
        'Maelynn',
        'Maenzee',
        'Maesin',
        'Maev',
        'Maeve',
        'Maianna',
        'Makenna',
        'Makenze',
        'Mareana',
        'Marina',
        'Marixah',
        'Marsa',
        'Marza',
        'Mayve',
        'Meado',
        'Medo',
        'Medow',
        'Megn',
        'Meldy',
        'Melnie',
        'Melo',
        'Meriya',
        'Mikaela',
        'Mikayla',
        'Milaia',
        'Milaya',
        'Mirah',
        'Misah',
        'Miya',
        'Moriyah',
        'Myha',
        'Nadira',
        'Nahla',
        'Nathly',
        'Natlea',
        'Natlee',
        'Natlia',
        'Nayea',
        'Nayla',
        'Nayli',
        'Nyala',
        'Rachle',
        'Raelle',
        'Raeyan',
        'Raielyn',
        'Rane',
        'Rayegan',
        'Rayely',
        'Rayelyn',
        'Rayina',
        'Raynia',
        'Rayven',
        'Rebexa',
        'Rebexi',
        'Reegan',
        'Reesha',
        'Reighley',
        'Reina',
        'Reiyna',
        'Renaya',
        'Renette',
        'Rianara',
        'Riya',
        'Roemary',
        'Rosae',
        'Rosaliya',
        'Roselyna',
        'Roseya',
        'Rosha',
        'Ryleegh',
        'Ryliane',
        'Ryliea',
        'Saavi',
        'Sabrya',
        'Saedi',
        'Saera',
        'Saeva',
        'Saevi',
        'Sanya',
        'Sanyah',
        'Saraia',
        'Saria',
        'Sarina',
        'Scarleth',
        'Scarlex',
        'Sealena',
        'Seliah',
        'Seliena',
        'Sereya',
        'Sirah',
        'Soaph',
        'Sofia',
        'Soniya',
        'Taeliyah',
        'Taelor',
        'Taera',
        'Taiana',
        'Talira',
        'Tamira',
        'Taraia',
        'Taryne',
        'Tatum',
        'Temrance',
        'Thalira',
        'Tira',
        'Tiyana',
        'Ulivia',
        'Vaessa',
        'Valria',
        'Valrie',
        'Valriya',
        'Viliana',
        'Wyla',
        'Wylo',
        'Wylow',
        'Ylena',
        'Ylivea',
        'Yrenea',
        'Yve',
        'Zaera',
        'Zaiyah',
        'Zarilah',
        'Zarina',
        'Zarinah',
        'Ziahra',
    ];
    {
        if (type === 1) {
            names = sample(nm2);
        } else {
            names = sample(nm1);
        }
        return names;
    }
}
