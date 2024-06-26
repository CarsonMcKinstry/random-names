import { sample } from 'lodash';

export default function armenians() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Abaven',
        'Abirad',
        'Adis',
        'Adom',
        'Adour',
        'Adroushan',
        'Aghan',
        'Aghasi',
        'Agheksanter',
        'Aharon',
        'Alan',
        'Alec',
        'Alexan',
        'Anag',
        'Anania',
        'Ananoun',
        'Anastas',
        'Andon',
        'Anoushavan',
        'Antog',
        'Antranig',
        'Antrias',
        'Apas',
        'Apel',
        'Apisoghom',
        'Apkar',
        'Apraham',
        'Ara',
        'Arakel',
        'Aram',
        'Aramais',
        'Aramaniag',
        'Aramazt',
        'Aran',
        'Arantsar',
        'Ararad',
        'Araz',
        'Ardag',
        'Ardashes',
        'Ardavan',
        'Ardavast',
        'Ardem',
        'Ardzroun',
        'Ared',
        'Arek',
        'Aren',
        'Arevshad',
        'Ari',
        'Aris',
        'Arisdages',
        'Arkam',
        'Arman',
        'Armen',
        'Armenag',
        'Arnag',
        'Arno',
        'Arpag',
        'Arpiar',
        'Arpoun',
        'Arsen',
        'Arshag',
        'Arshalouys',
        'Arsham',
        'Arshavir',
        'Arshen',
        'Artoun',
        'Artsan',
        'Arzouman',
        'Asadour',
        'Asbed',
        'Asbourag',
        'Asdvadzadour',
        'Ashod',
        'Askanaz',
        'Atam',
        'Atanas',
        'Atapeg',
        'Avak',
        'Avedig',
        'Avedis',
        'Ayk',
        'Azad',
        'Azaria',
        'Bab',
        'Babeg',
        'Baben',
        'Badouagan',
        'Badrig',
        'Baghdasar',
        'Bared',
        'Barkev',
        'Barouyr',
        'Barsam',
        'Bartev',
        'Bedros',
        'Berj',
        'Boghos',
        'Bsag',
        'Dajad',
        'Daron',
        'Datev',
        'Davros',
        'Dikran',
        'Diradour',
        'Diran',
        'Dirayr',
        'Dzadour',
        'Dzaghig',
        'Dzeroun',
        'Dzovag',
        'Emin',
        'Emmanouel',
        'Esahag',
        'Eshkhan',
        'Gakig',
        'Gamo',
        'Gamsar',
        'Garabed',
        'Garbis',
        'Garen',
        'Garo',
        'Gaydzag',
        'Gdridg',
        'Gharib',
        'Ghazar',
        'Ghazaros',
        'Ghevont',
        'Ghougas',
        'Ghoungyanos',
        'Giragos',
        'Gomidas',
        'Goryoun',
        'Gosdan',
        'Gosdantin',
        'Guregh',
        'Hagop',
        'Haik',
        'Hamazasb',
        'Hamparzoum',
        'Hapet',
        'Haro',
        'Harutyun',
        'Hayasdan',
        'Haygag',
        'Haygaram',
        'Haygaz',
        'Haygazoun',
        'Hayrabed',
        'Hayrig',
        'Hetoum',
        'Hmayag',
        'Hovagem',
        'Hovasap',
        'Hovhannes',
        'Hovnan',
        'Hovnatan',
        'Hovsep',
        'Hrag',
        'Hrahad',
        'Hrant',
        'Hratch',
        'Hravart',
        'Hrayr',
        'Hraztan',
        'Jannig',
        'Jirayr',
        'Jivan',
        'Kachig',
        'Kakig',
        'Kaloust',
        'Kamer',
        'Kapriel',
        'Karekin',
        'Karnig',
        'Kasbar',
        'Kazavon',
        'Kegham',
        'Keghart',
        'Keghon',
        'Kersam',
        'Kesag',
        'Kevork',
        'Khajag',
        'Khatchadour',
        'Khatcheres',
        'Khatchig',
        'Khigar',
        'Khoren',
        'Khosrov',
        'Kourken',
        'Kousan',
        'Krikor',
        'Krisdapor',
        'Kud',
        'Lernig',
        'Levon',
        'Libarid',
        'Loris',
        'Madat',
        'Madteos',
        'Magar',
        'Majag',
        'Malkhas',
        'Mamigon',
        'Mampre',
        'Manajihr',
        'Manase',
        'Mangasar',
        'Manough',
        'Manuel',
        'Mardig',
        'Mardiros',
        'Mardoun',
        'Margos',
        'Markar',
        'Mashdots',
        'Masis',
        'Matous',
        'Matsag',
        'Meghrig',
        'Mekhag',
        'Melek',
        'Melkon',
        'Meroujan',
        'Mesrob',
        'Mgrditch',
        'Mgrdoum',
        'Mher',
        'Mihran',
        'Mihrtad',
        'Mikaiel',
        'Minas',
        'Misak',
        'Mjej',
        'Mkhitar',
        'Mleh',
        'Mnatsagan',
        'Mourad',
        'Mouron',
        'Moushe',
        'Moushegh',
        'Movses',
        'Nahabed',
        'Nar',
        'Narek',
        'Natan',
        'Navasart',
        'Nazar',
        'Nazaret',
        'Nbad',
        'Nerseh',
        'Nerses',
        'Nigoghos',
        'Nigol',
        'Njteh',
        'Norayr',
        'Norhad',
        'Norvan',
        'Noubar',
        'Nourhan',
        'Noy',
        'Nshan',
        'Oda',
        'Ohan',
        'Oksen',
        'Onnig',
        'Oshakan',
        'Oshin',
        'Pagour',
        'Pakrad',
        'Panig',
        'Panos',
        'Papken',
        'Paramaz',
        'Paren',
        'Parkhoutar',
        'Parnag',
        'Parounag',
        'Parsegh',
        'Partogh',
        'Partoghimeos',
        'Paylag',
        'Peklar',
        'Pelibbos',
        'Penyamin',
        'Pertag',
        'Purad',
        'Puzant',
        'Raffi',
        'Raphael',
        'Razmig',
        'Reteos',
        'Rosdom',
        'Rupen',
        'Sahag',
        'Samson',
        'Samuel',
        'Sanasar',
        'Sanatroug',
        'Sarhad',
        'Sarkis',
        'Saro',
        'Sasoun',
        'Sebouh',
        'Semag',
        'Serj',
        'Sero',
        'Serop',
        'Serovpe',
        'Set',
        'Setrag',
        'Sevag',
        'Sevan',
        'Simon',
        'Sinan',
        'Sion',
        'Sipan',
        'Sirak',
        'Sirekan',
        'Sis',
        'Sisag',
        'Smpad',
        'Soghomon',
        'Sograd',
        'Sos',
        'Soukias',
        'Souren',
        'Sourmag',
        'Srabion',
        'Stephan',
        'Takvor',
        'Taniel',
        'Tateos',
        'Tatoul',
        'Tavit',
        'Tavtag',
        'Teotig',
        'Terenig',
        'Tevan',
        'Thomas',
        'Torkom',
        'Toros',
        'Trasdamard',
        'Tro',
        'Tsakig',
        'Tsolag',
        'Vagharsh',
        'Vagharshag',
        'Vaghenag',
        'Vahagn',
        'Vahaken',
        'Vahan',
        'Vahe',
        'Vahram',
        'Vahrej',
        'Vakhtang',
        'Van',
        'Vanadour',
        'Vanagan',
        'Vanant',
        'Vanig',
        'Vanoush',
        'Varak',
        'Varant',
        'Varaztad',
        'Varos',
        'Varoujan',
        'Vart',
        'Vartan',
        'Vartavar',
        'Varteres',
        'Vartivar',
        'Vartkes',
        'Vasag',
        'Vasbourag',
        'Vatche',
        'Vazken',
        'Vazrig',
        'Vicken',
        'Vigen',
        'Vosdanig',
        'Vosgan',
        'Vram',
        'Vrej',
        'Vrtanes',
        'Yeghiazar',
        'Yeghisheh',
        'Yeghya',
        'Yeprem',
        'Yeranos',
        'Yerimya',
        'Yervant',
        'Yesayi',
        'Yetvart',
        'Yeznig',
        'Yezras',
        'Zadig',
        'Zakariya',
        'Zareh',
        'Zarmayr',
        'Zarmig',
        'Zarzant',
        'Zaven',
        'Zohrab',
        'Zohrag',
        'Zoravar',
    ];
    const nm2 = [
        'Adrine',
        'Aghavni',
        'Aida',
        'Akabi',
        'Akac',
        'Aldz',
        'Alice',
        'Alids',
        'Alidz',
        'Alik',
        'Aline',
        'Almasd',
        'Alvart',
        'Anahid',
        'Anais',
        'Ani',
        'Ankine',
        'Anna',
        'Annman',
        'Anoush',
        'Antaram',
        'Araks',
        'Araksi',
        'Aramouhi',
        'Araz',
        'Arda',
        'Ardanoush',
        'Areknaz',
        'Arev',
        'Arevalous',
        'Arevhad',
        'Arevig',
        'Arine',
        'Arkina',
        'Armanoush',
        'Armenouhi',
        'Armine',
        'Arousyag',
        'Arpenig',
        'Arpi',
        'Arpineh',
        'Arshagouhi',
        'Arshalous',
        'Arsine',
        'Artzouig',
        'Asdghig',
        'Ashkhen',
        'Avids',
        'Azadouhi',
        'Azkanoush',
        'Azniv',
        'Barzig',
        'Baydzar',
        'Berjanoush',
        'Berjouhi',
        'Dalita',
        'Datevig',
        'Dikranouhi',
        'Dirouhi',
        'Dzaghganoush',
        'Dzaghig',
        'Dziadzan',
        'Dzovig',
        'Dzovinar',
        'Eghtsanoush',
        'Elise',
        'Eliz',
        'Emasdouhi',
        'Emma',
        'Endza',
        'Endzanoush',
        'Erato',
        'Esgouhi',
        'Euphemia',
        'Euphrosina',
        'Eva',
        'Gacia',
        'Gadar',
        'Gadarine',
        'Gaiane',
        'Gakavig',
        'Garine',
        'Gayane',
        'Ghadam',
        'Gorandoukht',
        'Goulizar',
        'Goulnaz',
        'Gumach',
        'Hagint',
        'Hamaspouyr',
        'Hamesdouhi',
        'Hasmig',
        'Haverj',
        'Hayganoush',
        'Haygouhi',
        'Heghineh',
        'Heghnar',
        'Hera',
        'Heranoush',
        'Hereknaz',
        'Hermineh',
        'Hnazant',
        'Houdit',
        'Hourher',
        'Houri',
        'Houshig',
        'Hranoush',
        'Hrantouhi',
        'Hranush',
        'Hrarpi',
        'Hratchouhi',
        'Hreghen',
        'Hripsimeh',
        'Hrout',
        'Isabel',
        'Isabella',
        'Jbdouhi',
        'Jebid',
        'Juliana',
        'Kaghtzrig',
        'Karni',
        'Kayaneh',
        'Keghanoush',
        'Keghetzig',
        'Keghouhi',
        'Keran',
        'Khatchouhi',
        'Khatoun',
        'Khngeni',
        'Khonarh',
        'Khorodig',
        'Khosrovanoush',
        'Khosrovidookht',
        'Khosrovitoughd',
        'Khoumar',
        'Khoyan',
        'Kinevart',
        'Klkhatir',
        'Knar',
        'Knkoush',
        'Kohar',
        'Koharig',
        'Lara',
        'Lelag',
        'Lena',
        'Leniya',
        'Lili',
        'Lilit',
        'Lori',
        'Lorig',
        'Louseres',
        'Lousig',
        'Lousine',
        'Lousntak',
        'Lousvart',
        'Lucy',
        'Madlene',
        'Manoushag',
        'Maral',
        'Marem',
        'Margaret',
        'Maria',
        'Marie',
        'Marineh',
        'Maritsa',
        'Mariyam',
        'Markrid',
        'Marmar',
        'Maro',
        'Marta',
        'Mayda',
        'Mayranoush',
        'Medax',
        'Meghranoush',
        'Melineh',
        'Mirna',
        'Nane',
        'Nanor',
        'Nare',
        'Nargiz',
        'Narineh',
        'Narod',
        'Nartouhi',
        'Nashkhoun',
        'Natel',
        'Nayat',
        'Nayirouhi',
        'Nayree',
        'Nazani',
        'Nazeli',
        'Nazenig',
        'Negdar',
        'Nora',
        'Noune',
        'Nouritsa',
        'Noushig',
        'Noyemi',
        'Nunuphar',
        'Nvart',
        'Nver',
        'Ovsanna',
        'Pakradouhi',
        'Palasan',
        'Parantsem',
        'Parantzem',
        'Parouhi',
        'Patil',
        'Pavagan',
        'Payl',
        'Pergrouhi',
        'Persape',
        'Pounig',
        'Pouragn',
        'Pourasdan',
        'Pouregh',
        'Raqel',
        'Razmouhi',
        'Rehan',
        'Repega',
        'Rhiphsime',
        'Rita',
        'Rouzan',
        'Rozin',
        'Rubina',
        'Sahaganoush',
        'Salpi',
        'Sanam',
        'Santoukhd',
        'Sara',
        'Satenig',
        'Selma',
        'Serig',
        'Serine',
        'Seta',
        'Sevana',
        'Sevoug',
        'Shahanig',
        'Shakeh',
        'Shamiram',
        'Sharmagh',
        'Shnorhig',
        'Shoghagat',
        'Shogher',
        'Shoghig',
        'Shoushan',
        'Shoushanig',
        'Sibyl',
        'Sima',
        'Siran',
        'Siranoush',
        'Sirarpi',
        'Siroun',
        'Sirvart',
        'Soffi',
        'Soffiya',
        'Soghome',
        'Sona',
        'Soseh',
        'Sosi',
        'Srpouhi',
        'Stepanie',
        'Stephanie',
        'Sussan',
        'Suzan',
        'Sybilla',
        'Sylva',
        "T'aguhi",
        'Takouhi',
        'Takoush',
        'Talar',
        'Taline',
        'Tamar',
        'Tangakin',
        'Tania',
        'Tarouhi',
        'Teghtsanig',
        'Teghtsoun',
        'Theodora',
        'Titer',
        'Tsangali',
        'Tsdrig',
        'Tshoghig',
        'Tsoler',
        'Tsoline',
        'Tsvig',
        'Vana',
        'Vanouhi',
        'Vanoush',
        'Varsenig',
        'Vartanoush',
        'Varteni',
        'Varteshah',
        'Vartiter',
        'Vartivar',
        'Vartouhi',
        'Varvara',
        'Varvare',
        'Vazkanoush',
        'Vehanoush',
        'Vehantsnouhi',
        'Verjin',
        'Verjouhi',
        'Verkine',
        'Vertchalous',
        'Vosgedzam',
        'Vosgehad',
        'Vosgemad',
        'Vosgetel',
        'Vosgi',
        'Yeghisapet',
        'Yeghnig',
        'Yeghsan',
        'Yeprouhi',
        'Yeranuhi',
        'Yerazig',
        'Yerchanig',
        'Yester',
        'Yeter',
        'Yeva',
        'Yevkeneh',
        'Yranig',
        'Zabel',
        'Zanazan',
        'Zapel',
        'Zarmantoukht',
        'Zarmineh',
        'Zarmouhi',
        'Zarouhi',
        'Zartar',
        'Zarvart',
        'Zepour',
        'Zmroukhd',
        'Zoulal',
        'Zvart',
    ];
    const nm3 = [
        'Aintablian',
        'Altounian',
        'Altunian',
        'Andonian',
        'Antebian',
        'Antonian',
        'Antreasian',
        'Arabian',
        'Arakelian',
        'Arakelyan',
        'Aramian',
        'Aramyan',
        'Araradian',
        'Araratian',
        'Ardashessian',
        'Ardzivian',
        'Ardzruni',
        'Aronyan',
        'Aroyan',
        'Arshaguni',
        'Arshagunian',
        'Arshakuni',
        'Arslanian',
        'Artashessian',
        'Artinian',
        'Arzumanian',
        'Asatrian',
        'Ashjian',
        'Aslanyan',
        'Assadourian',
        'Assarian',
        'Assayan',
        'Astvadzadourian',
        'Atanosian',
        'Atchabahian',
        'Avakian',
        'Avaliani',
        'Avedikian',
        'Avedissian',
        'Avetisyan',
        'Aviet',
        'Avietissian',
        'Avtomian',
        'Azadian',
        'Azarian',
        'Azatyan',
        'Azizian',
        'Aznavourian',
        'Babaian',
        'Babajanian',
        'Babayan',
        'Baboian',
        'Badalian',
        'Bagdazarian',
        'Baghdadlian',
        'Bagratuni',
        'Balabanian',
        'Balasian',
        'Balian',
        'Balikian',
        'Baltaian',
        'Bamanian',
        'Banaian',
        'Bancayan',
        'Baronian',
        'Barsamian',
        'Basmajian',
        'Bedrosian',
        'Belekdanian',
        'Berberian',
        'Bizdikian',
        'Boboian',
        'Boghosian',
        'Bogosian',
        'Boshian',
        'Boyajian',
        'Bozian',
        'Bozigian',
        'Burian',
        'Chakmakian',
        'Chilingirian',
        'Cholakian',
        'Cibrian',
        'Dadashian',
        'Dadekian',
        'Dadourian',
        'Danielian',
        'Darbinian',
        'Davidian',
        'Demirjian',
        'Derderian',
        'Dermovsesian',
        'Deukmejian',
        'Deyrmenjian',
        'Djansezian',
        'Dzaghgouni',
        'Eghian',
        'Ekizian',
        'Ekmekjian',
        'Ekshian',
        'Eskandarian',
        'Esmerian',
        'Ezzatian',
        'Fanoosian',
        'Farajian',
        'Fermanian',
        'Gabrelyan',
        'Galinyan',
        'Galoustyan',
        'Galoyan',
        'Galstanyan',
        'Galstyan',
        'Gambaryan',
        'Gamburyan',
        'Gamerikian',
        'Games',
        'Garabedian',
        'Garcha',
        'Gasparyan',
        'Gazanian',
        'Gevorgyan',
        'Gharakhanian',
        'Ghazaryan',
        'Ghukasian',
        'Ghukasyan',
        'Ginosyan',
        'Giragosian',
        'Girogosian',
        'Gogbashian',
        'Gorgodian',
        'Grigorian',
        'Gulazarian',
        'Gulbenkian',
        'Hadjetian',
        'Hagopian',
        'Hakobjanian',
        'Hakobyan',
        'Haladjian',
        'Haroutiunian',
        'Haroutunian',
        'Harpootlian',
        'Hayrapetyan',
        'Hazarapetyan',
        'Hekimyan',
        'Hintlian',
        'Horozian',
        'Houssian',
        'Hovanessian',
        'Hovhanesian',
        'Hovhannisian',
        'Hovhannisyan',
        'Hovnanian',
        'Hovnatanian',
        'Hovsepian',
        'Igityan',
        'Inguilizian',
        'Isagholian',
        'Isahakian',
        'Ishkhanian',
        'Iskenderian',
        'Ismailyan',
        'Ispiryan',
        'Israyelyan',
        'Istamboulian',
        'Istanboulian',
        'Izmirlian',
        'Jalalyan',
        'Jambazian',
        'Janikyan',
        'Jizmejian',
        'Kadoyan',
        'Kalanjian',
        'Kalousdian',
        'Kapoian',
        'Kaprielian',
        'Karadjian',
        'Karapetian',
        'Karapetyan',
        'Kardashian',
        'Karmarian',
        'Karmaryan',
        'Kasabian',
        'Kasajian',
        'Kasbarian',
        'Kasparian',
        'Kassarjian',
        'Kassouni',
        'Kazandjian',
        'Kechichian',
        'Kellejian',
        'Keosseian',
        'Kevranian',
        'Keyishian',
        'Kezerian',
        'Khachadurian',
        'Khachatourian',
        'Khachaturian',
        'Khederian',
        'Khederlarian',
        'Kherlakian',
        'Khorozian',
        'Khrlakian',
        'Kinosyan',
        'Kirakosian',
        'Klanian',
        'Kocharian',
        'Kocharyan',
        'Kostanian',
        'Kostikyan',
        'Kostoyan',
        'Kotoyan',
        'Koumjian',
        'Koundakjian',
        'Kouyoumjian',
        'Krikorian',
        'Krjalian',
        'Ksajikian',
        'Kupelian',
        'Lylozian',
        'Malkhassian',
        'Mamigonian',
        'Mamikonian',
        'Manoogian',
        'Manoukian',
        'Manukyan',
        'Manvelian',
        'Marashian',
        'Mardikian',
        'Mardirosian',
        'Margaryan',
        'Margossian',
        'Marjanian',
        'Markarian',
        'Markossian',
        'Maroutian',
        'Martirosyan',
        'Marutyan',
        'Matevosian',
        'Mechigian',
        'Melkonyan',
        'Mentsoyan',
        'Merdinian',
        'Merjanian',
        'Mesdjian',
        'Mesropian',
        'Mikaelian',
        'Mikoyan',
        'Minassian',
        'Mirakian',
        'Mirzoyan',
        'Mkhmeljian',
        'Mkrtchyan',
        'Mooskian',
        'Mouradian',
        'Mousissian',
        'Moutafian',
        'Movsesian',
        'Muratian',
        'Musaelian',
        'Musayelyan',
        'Nabavian',
        'Nadanian',
        'Nakashian',
        'Nalbandian',
        'Narcessian',
        'Naroyan',
        'Natanian',
        'Natlinian',
        'Nazaryan',
        'Nazlikian',
        'Nerguizian',
        'Nigoghosian',
        'Nigosian',
        'Ohanian',
        'Ohanyan',
        'Ojaghian',
        'Orogian',
        'Ourfalian',
        'Ovakimian',
        'Ovanesian',
        'Ovasapian',
        'Ovesian',
        'Paboojian',
        'Pakradouni',
        'Pakradounian',
        'Panoosian',
        'Panosian',
        'Papazian',
        'Parisyan',
        'Paronyan',
        'Pashayan',
        'Pashian',
        'Petrosian',
        'Petrosyan',
        'Piliposian',
        'Pilosyan',
        'Piruzian',
        'Pogosian',
        'Poponian',
        'Portoian',
        'Reizian',
        'Rodnoian',
        'Sahakian',
        'Samuelian',
        'Sandrosyan',
        'Sandruni',
        'Sarafian',
        'Sargsyan',
        'Sarian',
        'Sarkisian',
        'Sarkissian',
        'Saroyan',
        'Sasounian',
        'Sasounyan',
        'Seferian',
        'Seropian',
        'Sevan',
        'Sevhonkian',
        'Shahverdyan',
        'Sibrian',
        'Simonian',
        'Simonyan',
        'Skendarian',
        'Smoulian',
        'Smullyan',
        'Soghomonian',
        'Stepanyan',
        'Suzmeian',
        'Suzmeyan',
        'Tachdjian',
        'Takoushian',
        'Tankian',
        'Tarpinian',
        'Taslakian',
        'Tateossian',
        'Tatilian',
        'Tatiossian',
        'Tavitian',
        'Tjeknavorian',
        'Topalian',
        'Torigian',
        'Torossian',
        'Toumanian',
        'Tovmasian',
        'Trdatyan',
        'Tufenkian',
        'Tumanyan',
        'Tumasyan',
        'Vardanyan',
        'Vartanian',
        'Vartoogian',
        'Virabyan',
        'Vosgrichian',
        'Vratsyan',
        'Yardumian',
        'Yeghiayan',
        'Yeghiazarian',
        'Yeghoyan',
        'Yerevanian',
        'Yeterian',
        'Zadian',
        'Zakaryan',
        'Zakoyan',
        'Zeitunian',
        'Zeitunlian',
        'Zentuntsian',
        'Zildjian',
        'Ziririan',
        'Zohrabyan',
        'Zornakyan',
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
