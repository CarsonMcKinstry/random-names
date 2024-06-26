import { sample } from 'lodash';

export default function northEuropeanTowns() {
    let names: string;
    const nm1 = [
        'Aal',
        'Aar',
        'Alberts',
        'Balle',
        'Birke',
        'Brønd',
        'Copen',
        'Es',
        'Glad',
        'Glo',
        'Hørs',
        'Hader',
        'Hel',
        'Her',
        'Hille',
        'Hjør',
        'Hol',
        'Holste',
        'Hor',
        'Hvido',
        'Kol',
        'Lyng',
        'Næst',
        'Nørre',
        'Rødo',
        'Ring',
        'Ros',
        'Sønder',
        'Silke',
        'Sla',
        'Svend',
        'Tårn',
        'Taa',
        'Vi',
    ];
    const nm2 = [
        'bæk',
        'bæka',
        'berga',
        'bjerg',
        'borg',
        'bya',
        'gelse',
        'hagen',
        'havn',
        'holm',
        'hus',
        'kilde',
        'leva',
        'lunda',
        'nse',
        'rød',
        'ring',
        'rupa',
        'saxea',
        'sens',
        'singør',
        'slev',
        'sted',
        'strup',
        'strupa',
        'sundby',
        've',
        'ved',
        'vrea',
    ];
    /* Estonia */
    const nm3 = [
        'Ab',
        'Ant',
        'El',
        'Haap',
        'Jõge',
        'Jõh',
        'Kär',
        'Kal',
        'Kar',
        'Keh',
        'Kei',
        'Ki',
        'Kiviõ',
        'Koht',
        'Kun',
        'Kure',
        'Li',
        'Lihu',
        'Lok',
        'Mõisa',
        'Maar',
        'Must',
        'Nar',
        'Ote',
        'Pär',
        'Põl',
        'Pai',
        'Pal',
        'Rä',
        'Räpi',
        'Rak',
        'Rap',
        'Silla',
        'Sin',
        'Suur',
        'Tõr',
        'Tü',
        'Ta',
        'Tal',
        'Tam',
        'Tar',
        'Võ',
        'Võh',
        'Val',
        'Vil',
    ];
    const nm4 = [
        'de',
        'di',
        'diski',
        'duu',
        'ga',
        'geva',
        'hula',
        'ja',
        'jandi',
        'küla',
        'la',
        'lamäe',
        'li',
        'lin',
        'lingi',
        'linn',
        'luoja',
        'mäe',
        'ma',
        'me',
        'mme',
        'na',
        'ngi',
        'nu',
        'pää',
        'pa',
        'pina',
        'ra',
        'ri',
        'ru',
        'sa',
        'saare',
        'salu',
        'samaa',
        'si',
        'ski',
        'ssaare',
        'ssi',
        'ste',
        'suu',
        'tu',
        'va',
        'vee',
        'vere',
        'viõli',
        'vi',
    ];
    /* Finland */
    const nm5 = [
        'Ääne',
        'Ähtä',
        'Ala',
        'Hämeen',
        'Ha',
        'Haapa',
        'Han',
        'Harja',
        'Hauki',
        'Hei',
        'Hel',
        'Hui',
        'Hy',
        'Iisal',
        'Ikaa',
        'Ima',
        'Jäm',
        'Järven',
        'Joen',
        'Juan',
        'Jyväs',
        'Ka',
        'Kaa',
        'Kala',
        'Kan',
        'Kankaan',
        'Kark',
        'Kas',
        'Kau',
        'Kauha',
        'Ke',
        'Kemi',
        'Kera',
        'Keu',
        'Ki',
        'Kiure',
        'Kok',
        'Koke',
        'Kot',
        'Kou',
        'Kuh',
        'Kuo',
        'Kuri',
        'Kuu',
        'La',
        'Lah',
        'Lai',
        'Lappeen',
        'Liek',
        'Lo',
        'Loh',
        'Loi',
        'Män',
        'Mik',
        'När',
        'Naan',
        'Ni',
        'Nil',
        'No',
        'Nur',
        'Ori',
        'Orima',
        'Ou',
        'Outo',
        'Pa',
        'Pai',
        'Par',
        'Piek',
        'Pietar',
        'Pro',
        'Pudas',
        'Pyhä',
        'Raase',
        'Rai',
        'Riihi',
        'Rova',
        'Saari',
        'Sasta',
        'Savon',
        'Seinä',
        'Siu',
        'So',
        'Suonen',
        'Tam',
        'Tor',
        'Tur',
        'Ul',
        'Ussi',
        'Uusikau',
        'Valkea',
        'Van',
        'Var',
        'Viita',
        'Ylö',
        'Yli',
    ];
    const nm6 = [
        'hamina',
        'hava',
        'järvi',
        'joki',
        'kää',
        'kano',
        'kaupunki',
        'keli',
        'kia',
        'kila',
        'kinen',
        'ko',
        'kola',
        'koski',
        'ksa',
        'kumpu',
        'kylä',
        'lepyy',
        'linen',
        'linna',
        'mäki',
        'mi',
        'mina',
        'ni',
        'niemi',
        'nkää',
        'nola',
        'ntio',
        'pää',
        'piö',
        'pio',
        'pori',
        'pua',
        'pudas',
        'pula',
        'punki',
        'rainen',
        'ranta',
        'rava',
        'ri',
        'rina',
        'ruu',
        'sä',
        'sämäki',
        'saari',
        'siä',
        'sinki',
        'ssa',
        'suu',
        'tali',
        'tee',
        'tila',
        'tinen',
        'tra',
        'ttila',
        'ttinen',
        'vala',
        'valta',
        'vesi',
        'vieska',
        'viisa',
        'voo',
        'vus',
    ];
    /* Iceland */
    const nm7 = [
        'Álf',
        'Árbæjar',
        'Ísaf',
        'Ólafs',
        'Þórs',
        'Þin',
        'Þorláks',
        'Ak',
        'Aku',
        'Bíldu',
        'Búðar',
        'Bakka',
        'Bi',
        'Blön',
        'Bolungar',
        'Borgar',
        'Brúnah',
        'Brautar',
        'Breiðdals',
        'Byggðak',
        'Dal',
        'Djúpi',
        'Drang',
        'Eglis',
        'Eskif',
        'Eyrar',
        'Fjalla',
        'Garða',
        'Grím',
        'Greni',
        'Grinda',
        'Grundar',
        'Hó',
        'Hól',
        'Húsa',
        'Haf',
        'Hafnar',
        'Helli',
        'Hnífs',
        'Hof',
        'Hrí',
        'Hraf',
        'Hua',
        'Hvamm',
        'Hvan',
        'Hvera',
        'Hvols',
        'Inn',
        'Kópa',
        'Kópas',
        'Kefla',
        'Krist',
        'Lóns',
        'Lauga',
        'Laugar',
        'Lit',
        'Melah',
        'Mosfells',
        'Nesjah',
        'Neskau',
        'Nja',
        'Patreks',
        'Raufar',
        'Reyk',
        'Sól',
        'Sand',
        'Sauðár',
        'Sel',
        'Seltjar',
        'Seyðis',
        'Skaga',
        'Stok',
        'Stuk',
        'Sval',
        'Tálkna',
        'Tjarna',
        'Varmah',
        'Vest',
        'Vopna',
    ];
    const nm8 = [
        'tanes',
        'verfi',
        'jarhverfi',
        'fjörður',
        'vík',
        'höfn',
        'nes',
        'reyri',
        'dalur',
        'röst',
        'duós',
        'nesi',
        'nes',
        'líð',
        'holt',
        'jarni',
        'vogur',
        'snes',
        'staðir',
        'bakki',
        'bær',
        'byggð',
        'ðir',
        'ður',
        'sey',
        'verfi',
        'nir',
        'ganes',
        'sandur',
        'ssandur',
        'dalur',
        'sós',
        'nagil',
        'stangi',
        'neyri',
        'gerði',
        'völlur',
        'nes',
        'sker',
        'vogur',
        'lavik',
        'klaustur',
        'reykir',
        'rás',
        'garás',
        'vatn',
        'sandur',
        'verfi',
        'firði',
        'staður',
        'lækur',
        'höfn',
        'hólar',
        'holt',
        'jahlíð',
        'javík',
        'heimar',
        'vík',
        'gerði',
        'krókur',
        'foss',
        'narnes',
        'strönd',
        'seyri',
        'hólmur',
        'reyri',
        'seyri',
        'naeyjar',
    ];
    /* Latvia */
    const nm9 = [
        'Ai',
        'Aiz',
        'Ak',
        'Akni',
        'Alo',
        'Alu',
        'Aluk',
        'Ba',
        'Bal',
        'Baus',
        'Bro',
        'Ce',
        'Ces',
        'Dag',
        'Daugav',
        'Do',
        'Dur',
        'Es',
        'Gro',
        'Gul',
        'Ik',
        'Iluk',
        'Jaun',
        'Jekab',
        'Jel',
        'Jur',
        'Kan',
        'Kar',
        'Ke',
        'Kras',
        'Kul',
        'Li',
        'Lie',
        'Liel',
        'Ligat',
        'Lim',
        'Lu',
        'Lud',
        'Ma',
        'Maz',
        'Ol',
        'Pavi',
        'Pla',
        'Prei',
        'Prie',
        'Rezek',
        'Ri',
        'Ru',
        'Rujie',
        'Sa',
        'Sabi',
        'Sal',
        'Sala',
        'Salac',
        'Saul',
        'Se',
        'Si',
        'Skrun',
        'Smil',
        'Stai',
        'Sten',
        'Stren',
        'Su',
        'Tal',
        'Tu',
        'Val',
        'Valdemar',
        'Van',
        'Varak',
        'Vents',
        'Vi',
        'Vie',
        'Zi',
    ];
    const nm10 = [
        'škile',
        'baži',
        'bana',
        'bate',
        'bazi',
        'be',
        'bele',
        'bile',
        'bina',
        'ca',
        'cele',
        'ceni',
        'cut',
        'da',
        'dava',
        'dona',
        'done',
        'dus',
        'gaži',
        'ga',
        'gava',
        'gazilani',
        'gda',
        'griva',
        'gulda',
        'gums',
        'ja',
        'jiena',
        'kile',
        'kne',
        'kraukle',
        'ksne',
        'kste',
        'kule',
        'kums',
        'laca',
        'laine',
        'lava',
        'li',
        'loži',
        'losta',
        'lozi',
        'lsi',
        'lupe',
        'lvi',
        'mala',
        'miera',
        'naži',
        'na',
        'nas',
        'nazi',
        'nci',
        'nda',
        'nde',
        'niste',
        'paja',
        'pils',
        'pute',
        'salaca',
        'sava',
        'sis',
        'site',
        'ska',
        'skile',
        'sne',
        'sta',
        'tene',
        'tne',
        'vaine',
        'vani',
        'vinas',
        'za',
        'zekne',
    ];
    /* Lithuania */
    const nm11 = [
        'Šak',
        'Šal',
        'Šed',
        'Šiaul',
        'Šil',
        'Šir',
        'Šven',
        'Žag',
        'Žiež',
        'Ak',
        'Al',
        'Anyk',
        'Ario',
        'Bal',
        'Bir',
        'Daug',
        'Drus',
        'Duk',
        'Duset',
        'Ežer',
        'Eišis',
        'Elek',
        'Gar',
        'Garg',
        'Gel',
        'Grig',
        'Ignal',
        'Jiez',
        'Jon',
        'Jur',
        'Kaiš',
        'Kal',
        'Kaun',
        'Kavar',
        'Kaz',
        'Kedain',
        'Kel',
        'Klai',
        'Kret',
        'Kudir',
        'Kupiš',
        'Kur',
        'Kybar',
        'Laz',
        'Lent',
        'Lin',
        'Mažeik',
        'Marij',
        'Mol',
        'Nauj',
        'Ne',
        'Nemen',
        'Obel',
        'Pab',
        'Pag',
        'Pak',
        'Pal',
        'Pan',
        'Panem',
        'Panev',
        'Pas',
        'Plun',
        'Prie',
        'Rad',
        'Ramy',
        'Rasein',
        'Riet',
        'Rokiš',
        'Rudiš',
        'Sal',
        'Sed',
        'Sim',
        'Skaud',
        'Skuod',
        'Smal',
        'Subac',
        'Taur',
        'Tel',
        'Trak',
        'Troš',
        'Tytu',
        'Už',
        'Uk',
        'Ut',
        'Vabal',
        'Var',
        'Ven',
        'Ver',
        'Vie',
        'Viek',
        'Vies',
        'Vil',
        'Vir',
        'Visa',
        'Zara',
    ];
    const nm12 = [
        'šciai',
        'šenai',
        'šiadorys',
        'šiai',
        'škelis',
        'škes',
        'škis',
        'škunai',
        'šniai',
        'štas',
        'štona',
        'žai',
        'ždai',
        'žys',
        'balis',
        'barkas',
        'brade',
        'cine',
        'cininkai',
        'cioneliai',
        'cionys',
        'cius',
        'da',
        'das',
        'delus',
        'dijai',
        'dorys',
        'duva',
        'gai',
        'gala',
        'gara',
        'giai',
        'ginas',
        'jai',
        'jis',
        'joji',
        'kai',
        'kas',
        'kiai',
        'kija',
        'kininkai',
        'kis',
        'kos',
        'kruojis',
        'kule',
        'kuva',
        'lale',
        'lantai',
        'liškis',
        'liai',
        'liava',
        'lina',
        'lis',
        'lute',
        'mariai',
        'me',
        'mene',
        'merge',
        'mune',
        'na',
        'nai',
        'nas',
        'neliai',
        'nga',
        'nge',
        'niai',
        'ninka',
        'ninkai',
        'ninkas',
        'nius',
        'nta',
        'peda',
        'pole',
        'rage',
        'relis',
        'rena',
        'rkas',
        'rtai',
        'sai',
        'siejai',
        'skas',
        'skes',
        'tai',
        'tavas',
        'tena',
        'tinga',
        'toji',
        'tos',
        'trenai',
        'tus',
        'va',
        'valus',
        'varija',
        'varis',
        'vas',
        'vežys',
        'venai',
        'ventis',
        'viškis',
        'vile',
        'viliškis',
        'vintos',
        'vis',
        'zlu',
        'znas',
    ];
    /* Norway */
    const nm13 = [
        'Åkre',
        'Åle',
        'Åndal',
        'Åsgård',
        'Aren',
        'As',
        'Brønnøy',
        'Bre',
        'Brek',
        'Brumund',
        'Drø',
        'Eger',
        'El',
        'Fager',
        'Far',
        'Finn',
        'Flekke',
        'Fos',
        'Gjø',
        'Grim',
        'Høne',
        'Hal',
        'Hammer',
        'Har',
        'Hauge',
        'Hokk',
        'Holme',
        'Holms',
        'Honning',
        'Hvit',
        'Jørpe',
        'Kirke',
        'Kolve',
        'Kongs',
        'Koper',
        'Lange',
        'Lar',
        'Leir',
        'Lek',
        'Lille',
        'Lung',
        'Man',
        'Mol',
        'Mos',
        'Nam',
        'Nar',
        'Notod',
        'Or',
        'Os',
        'Pors',
        'Rju',
        'Søg',
        'Sand',
        'Sande',
        'Sarps',
        'Seter',
        'Skudenes',
        'Sogn',
        'Sort',
        'Sta',
        'Stat',
        'Stein',
        'Stjørdals',
        'Tøns',
        'Trom',
        'Trond',
        'Ulstein',
        'Vad',
        'Var',
        'Vennes',
        'Verdal',
    ];
    const nm14 = [
        'bak',
        'berg',
        'bu',
        'dal',
        'den',
        'fest',
        'fjord',
        'foss',
        'grunn',
        'halsen',
        'hammer',
        'hamn',
        'heim',
        'helle',
        'jøen',
        'kan',
        'kanger',
        'kenes',
        'kim',
        'kjer',
        'land',
        'nes',
        'reid',
        'ros',
        'rum',
        'søor',
        'søra',
        'sand',
        'ske',
        'sla',
        'snes',
        'sos',
        'stad',
        'strøm',
        'strand',
        'sund',
        'våg',
        'vanger',
        'verg',
        'vern',
        'vik',
        'vinger',
    ];
    /* Sweden */
    const nm15 = [
        'Ängel',
        'Ål',
        'Ö',
        'Öre',
        'Öst',
        'Öster',
        'Aling',
        'Ar',
        'Asker',
        'Båt',
        'Berg',
        'Björn',
        'Boll',
        'Bor',
        'Borg',
        'Dag',
        'Djurs',
        'Ek',
        'En',
        'Eskil',
        'Fager',
        'Falken',
        'Falster',
        'Fin',
        'Fol',
        'Gamle',
        'Gammal',
        'Gothen',
        'Grön',
        'Gran',
        'Härnö',
        'Hässle',
        'Höga',
        'Hag',
        'Halm',
        'Hapar',
        'Havs',
        'Helsing',
        'Hem',
        'Hudiks',
        'Husk',
        'Jön',
        'Karl',
        'Karls',
        'Kram',
        'Kungs',
        'Kväll',
        'Lands',
        'Lid',
        'Lin',
        'Lindes',
        'Lud',
        'Lyck',
        'Lyse',
        'Mar',
        'Marie',
        'Mjöl',
        'Norr',
        'Ny',
        'Nynä',
        'Oskar',
        'Oxelö',
        'Söder',
        'Sölves',
        'Sand',
        'Sig',
        'Simri',
        'Skän',
        'Ske',
        'Skog',
        'So',
        'Stock',
        'Ström',
        'Sundby',
        'Sunds',
        'Tida',
        'Tors',
        'Träd',
        'Udde',
        'Ulrice',
        'Upp',
        'Väners',
        'Väst',
        'Väster',
        'Vad',
        'Vagn',
        'Var',
        'Vax',
        'Vet',
        'Vummer',
    ];
    const nm16 = [
        'backa',
        'berg',
        'bo',
        'borg',
        'bro',
        'burg',
        'by',
        'dal',
        'fed',
        'fors',
        'gård',
        'grund',
        'hälla',
        'härad',
        'hättan',
        'hall',
        'hammar',
        'hamn',
        'holm',
        'köping',
        'kil',
        'koga',
        'krona',
        'länge',
        'land',
        'landa',
        'llefteå',
        'näs',
        'sås',
        'sand',
        'sele',
        'shamn',
        'sjö',
        'stad',
        'strand',
        'stuna',
        'sun',
        'sund',
        'tälje',
        'torp',
        'tuna',
        'vall',
        'valla',
        'vik',
        'viken',
    ];
    const i = Math.floor(Math.random() * 16);
    {
        if (i < 2) {
            names = sample(nm1) + sample(nm2);
        } else if (i < 4) {
            names = sample(nm3) + sample(nm4);
        } else if (i < 6) {
            names = sample(nm5) + sample(nm6);
        } else if (i < 8) {
            names = sample(nm7) + sample(nm8);
        } else if (i < 10) {
            names = sample(nm9) + sample(nm10);
        } else if (i < 12) {
            names = sample(nm11) + sample(nm12);
        } else if (i < 14) {
            names = sample(nm13) + sample(nm14);
        } else {
            names = sample(nm15) + sample(nm16);
        }
        return names;
    }
}
