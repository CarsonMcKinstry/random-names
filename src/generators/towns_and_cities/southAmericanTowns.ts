import { sample } from 'lodash';

export default function southAmericanTowns() {
    let names: string;
    /* Argentina */
    const nm1 = [
        'Aña',
        'A',
        'Adro',
        'Agui',
        'Al',
        'Alba',
        'Albar',
        'Alde',
        'Ari',
        'Aris',
        'Arro',
        'Ave',
        'Azu',
        'Ba',
        'Barra',
        'Barran',
        'Bue',
        'Cór',
        'Caña',
        'Ca',
        'Cale',
        'Cam',
        'Capi',
        'Car',
        'Carca',
        'Cas',
        'Casi',
        'Caste',
        'Cau',
        'Cen',
        'Cente',
        'Cha',
        'Chaca',
        'Chaja',
        'Chara',
        'Chi',
        'Chile',
        'Chim',
        'Chivi',
        'Cin',
        'Cipo',
        'Cole',
        'Como',
        'Conce',
        'Cor',
        'Coro',
        'Cos',
        'Cre',
        'Cres',
        'Cru',
        'Cu',
        'Curu',
        'Cut',
        'Do',
        'Dolo',
        'Em',
        'Emba',
        'Embar',
        'Es',
        'Espe',
        'Esqui',
        'Fa',
        'Fama',
        'Fe',
        'Fede',
        'Fir',
        'Fon',
        'For',
        'Gá',
        'Gál',
        'Go',
        'Gobe',
        'Gra',
        'Grana',
        'Gua',
        'Guale',
        'Ja',
        'Jar',
        'Joa',
        'Lin',
        'Lu',
        'Ma',
        'Macha',
        'Men',
        'Mendo',
        'Mer',
        'Mo',
        'Mon',
        'Ne',
        'Neco',
        'Neu',
        'Obe',
        'Ola',
        'Olava',
        'Pé',
        'Pa',
        'Pal',
        'Palpa',
        'Para',
        'Pe',
        'Per',
        'Perga',
        'Pi',
        'Pira',
        'Plo',
        'Po',
        'Poci',
        'Posa',
        'Qui',
        'Quiti',
        'Ra',
        'Re',
        'Recon',
        'Resi',
        'Ro',
        'Rosa',
        'Ru',
        'Rufi',
        'Sa',
        'Sal',
        'Sala',
        'San An',
        'San Ca',
        'San Car',
        'San Fe',
        'San Fer',
        'San Fra',
        'San Isi',
        'San Ja',
        'San Jo',
        'San Jor',
        'San Ju',
        'San Jua',
        'San Lo',
        'San Lore',
        'San Mar',
        'San Mi',
        'San Ni',
        'San Nico',
        'San Pe',
        'San Ra',
        'San Sal',
        'San Vi',
        'Su',
        'Sun',
        'Suncha',
        'Ta',
        'Tan',
        'Tar',
        'Tarta',
        'Te',
        'Ter',
        'Ti',
        'Tre',
        'Un',
        'Unqui',
        'Ve',
        'Vei',
        'Vein',
        'Vena',
        'Zá',
        'Zára',
        'Za',
        'Zapa',
    ];
    const nm2 = [
        'bas',
        'buco',
        'bulo',
        'cación',
        'cero',
        'cete',
        'chea',
        'ción',
        'cia',
        'cinco',
        'cito',
        'co',
        'coy',
        'dón',
        'da',
        'das',
        'dero',
        'des',
        'dia',
        'dil',
        'do',
        'doba',
        'doro',
        'doza',
        'fino',
        'gai',
        'gal',
        'gano',
        'giales',
        'go',
        'gué',
        'guay',
        'guel',
        'huaia',
        'ján',
        'jarí',
        'lares',
        'laye',
        'legos',
        'len',
        'lende',
        'les',
        'leta',
        'lew',
        'li',
        'lipi',
        'lo',
        'lores',
        'los',
        'mante',
        'mas',
        'mat',
        'mes',
        'mino',
        'mosa',
        'nín',
        'na',
        'nado',
        'nando',
        'nario',
        'neda',
        'nel',
        'no',
        'nos',
        'palá',
        'pala',
        'pana',
        'po',
        'quén',
        'quín',
        'quel',
        'queras',
        'quillo',
        'quina',
        'quista',
        'rá',
        'ría',
        'rón',
        'rañá',
        'ra',
        'ral',
        'raná',
        'rané',
        'ranza',
        'ras',
        'rata',
        'rate',
        'res',
        'retes',
        'rez',
        'ria',
        'riel',
        'rio',
        'ros',
        'rupá',
        'ruzú',
        'són',
        'sadas',
        'sario',
        'spn',
        'ta',
        'tagal',
        'tana',
        'tas',
        'te',
        'telli',
        'tencia',
        'tes',
        'tiago',
        'tier',
        'tiro',
        'to',
        'tuya',
        'va',
        'vedra',
        'vez',
        'vier',
        'ya',
        'yito',
        'yo',
        'yos',
        'zú',
        'za',
    ];
    /* Bolivia */
    const nm3 = [
        'Aba',
        'Acha',
        'Ai',
        'Aiqui',
        'Ali',
        'Ama',
        'An',
        'Ara',
        'Asce',
        'Ascen',
        'Ato',
        'Ba',
        'Bata',
        'Batal',
        'Be',
        'Beta',
        'Betan',
        'Bo',
        'Bue',
        'Caña',
        'Ca',
        'Cama',
        'Cami',
        'Capi',
        'Caya',
        'Cha',
        'Chaka',
        'Challa',
        'Chara',
        'Chi',
        'Chim',
        'Cho',
        'Chu',
        'Chulu',
        'Cli',
        'Co',
        'Cobi',
        'Cocha',
        'Col',
        'Colcha',
        'Colo',
        'Colque',
        'Colqui',
        'Colu',
        'Coma',
        'Copa',
        'Cor',
        'Cori',
        'Coroi',
        'Coto',
        'Cul',
        'Culpi',
        'Cura',
        'Epi',
        'Eu',
        'Euca',
        'Gua',
        'Guaya',
        'Hua',
        'Huari',
        'Huata',
        'Huer',
        'Ipa',
        'Ir',
        'Joro',
        'Ju',
        'Juchu',
        'Juku',
        'Ka',
        'Kas',
        'Kata',
        'La',
        'Lahua',
        'Lam',
        'Lampa',
        'Li',
        'Limon',
        'Lla',
        'Llalla',
        'Lu',
        'Luyu',
        'Ma',
        'Macha',
        'Mai',
        'Mapi',
        'Mi',
        'Mine',
        'Miz',
        'Mon',
        'Monte',
        'Mu',
        'O',
        'Oki',
        'Oru',
        'Pa',
        'Padi',
        'Pai',
        'Pata',
        'Pau',
        'Po',
        'Porta',
        'Poto',
        'Pu',
        'Puna',
        'Qui',
        'Re',
        'Ribe',
        'Ro',
        'Robo',
        'Ru',
        'Rurre',
        'Sa',
        'Samai',
        'San Bo',
        'San Bor',
        'San Ca',
        'San Car',
        'San Cri',
        'San Igna',
        'San Ju',
        'San Mi',
        'San Pa',
        'San Pe',
        'Se',
        'Sehue',
        'Sehuen',
        'Si',
        'So',
        'Sora',
        'Tam',
        'Tambi',
        'Tar',
        'Tara',
        'Tari',
        'Ti',
        'Tia',
        'Tiahua',
        'Tira',
        'To',
        'Toto',
        'Tri',
        'Trini',
        'Uru',
        'Uya',
        'Ve',
        'Vela',
        'Vilo',
        'Wa',
        'War',
        'Ya',
        'Yacui',
        'Yu',
        'Yuma',
    ];
    const nm4 = [
        'bamba',
        'baque',
        'bija',
        'billo',
        'buco',
        'cachi',
        'camarca',
        'camaya',
        'cas',
        'cha',
        'chaca',
        'chani',
        'chi',
        'chito',
        'chuc',
        'chuelo',
        'chuy',
        'ción',
        'cillas',
        'cito',
        'cuiba',
        'dilla',
        'gua',
        'huanaca',
        'huara',
        'ja',
        'jama',
        'jata',
        'kumari',
        'lón',
        'lagua',
        'las',
        'liptus',
        'lomi',
        'luyo',
        'luyu',
        'mani',
        'marca',
        'margo',
        'mari',
        'maya',
        'mayu',
        'me',
        'merín',
        'mi',
        'miri',
        'moré',
        'muri',
        'naco',
        'nata',
        'nawa',
        'neros',
        'nes',
        'ni',
        'nota',
        'nuni',
        'pó',
        'paso',
        'pata',
        'pina',
        'piri',
        'piza',
        'que',
        'quile',
        'quiri',
        'rín',
        'ragua',
        'ral',
        'ralta',
        'ramerín',
        'rana',
        'rani',
        'rapa',
        'raque',
        'rata',
        'rete',
        'ri',
        'rija',
        'rillos',
        'rina',
        'rito',
        'ro',
        'roico',
        'ros',
        'ruro',
        'sí',
        'sar',
        'ta',
        'tajata',
        'tero',
        'to',
        'toca',
        'tora',
        'toral',
        'tosí',
        'tus',
        'ya',
        'yu',
        'yuibe',
        'za',
        'zana',
        'zos',
    ];
    /* Brazil */
    const nm5 = [
        'Ala',
        'Alagoi',
        'Ame',
        'Aná',
        'An',
        'Ana',
        'Anani',
        'Ananin',
        'Apa',
        'Apere',
        'Araça',
        'Ara',
        'Araca',
        'Arai',
        'Arapi',
        'Arara',
        'Ato',
        'Ba',
        'Bar',
        'Barba',
        'Barrei',
        'Bau',
        'Be',
        'Bel',
        'Beto',
        'Blu',
        'Blume',
        'Bo',
        'Botu',
        'Bra',
        'Braga',
        'Ca',
        'Cachoei',
        'Cam',
        'Cama',
        'Canoa',
        'Cara',
        'Carua',
        'Cas',
        'Casca',
        'Casta',
        'Castan',
        'Cau',
        'Cauca',
        'Caxia',
        'Cha',
        'Chape',
        'Co',
        'Colo',
        'Con',
        'Consel',
        'Conta',
        'Cri',
        'Cu',
        'Cuba',
        'Cuia',
        'Curi',
        'Dia',
        'Divi',
        'Dou',
        'Doura',
        'Du',
        'Fei',
        'Flo',
        'Floria',
        'For',
        'Forta',
        'Fra',
        'Goiâ',
        'Gra',
        'Grava',
        'Gua',
        'Guaru',
        'Hor',
        'Horto',
        'Ibi',
        'Il',
        'Impe',
        'Indaia',
        'Ipa',
        'Ita',
        'Itabo',
        'Itape',
        'Itaqua',
        'Ja',
        'Jaboa',
        'Jaca',
        'Jan',
        'Jandi',
        'Jara',
        'Je',
        'Jiu',
        'Jua',
        'Jun',
        'Jundi',
        'Lau',
        'Li',
        'Limei',
        'Lon',
        'Londri',
        'Lu',
        'Luziâ',
        'Ma',
        'Maca',
        'Marí',
        'Mara',
        'Maro',
        'Marom',
        'Mom',
        'Mos',
        'Na',
        'Ni',
        'Niló',
        'Nite',
        'Oli',
        'Osa',
        'Pa',
        'Pai',
        'Pal',
        'Par',
        'Para',
        'Parna',
        'Pelo',
        'Petro',
        'Pin',
        'Pinda',
        'Pira',
        'Po',
        'Pre',
        'Quei',
        'Re',
        'Reci',
        'Rese',
        'Ribei',
        'Ron',
        'Rondo',
        'São Be',
        'São Ber',
        'São Ca',
        'São Cae',
        'São Car',
        'São Jo',
        'São Le',
        'São Leo',
        'São Lu',
        'São Pa',
        'São Pau',
        'São Vi',
        'Sal',
        'Sapu',
        'Se',
        'Ser',
        'Si',
        'So',
        'Sobra',
        'Soro',
        'Su',
        'Suma',
        'Suza',
        'Ta',
        'Tau',
        'Tere',
        'Ti',
        'To',
        'Tole',
        'Ube',
        'Va',
        'Var',
        'Via',
        'Vo',
        'Vol',
    ];
    const nm6 = [
        'çari',
        'bá',
        'ba',
        'baia',
        'bara',
        'bo',
        'boraí',
        'bral',
        'buna',
        'cária',
        'có',
        'caé',
        'ca',
        'caba',
        'caia',
        'caju',
        'cana',
        'capá',
        'catu',
        'cavel',
        'ceió',
        'cena',
        'cerica',
        'cetuba',
        'ciúma',
        'cicaba',
        'cida',
        'cife',
        'co',
        'cuíba',
        'da',
        'dares',
        'dema',
        'deua',
        'diaí',
        'dira',
        'dor',
        'dos',
        'drina',
        'gá',
        'gaba',
        'gança',
        'gem',
        'gi',
        'ginha',
        'goinhas',
        'guá',
        'hais',
        'hal',
        'hangaba',
        'heiro',
        'hoça',
        'hos',
        'jaí',
        'lém',
        'ledo',
        'leza',
        'lia',
        'lina',
        'lis',
        'lista',
        'lombo',
        'lotas',
        'mão',
        'mados',
        'maré',
        'mas',
        'meira',
        'menau',
        'mirim',
        'mon',
        'naú',
        'na',
        'nador',
        'naguá',
        'nau',
        'naus',
        'neiro',
        'nia',
        'ninga',
        'noas',
        'nop',
        'pecó',
        'pevi',
        'pina',
        'pinas',
        'po',
        'poldo',
        'polis',
        'pos',
        'puava',
        'quara',
        'que',
        'quié',
        'rão',
        'ró',
        'rói',
        'raba',
        'raca',
        'rados',
        'raguá',
        'rato',
        'raz',
        'reiras',
        'rem',
        'ria',
        'rica',
        'ricana',
        'rim',
        'rinha',
        'ru',
        'ruaru',
        'rueri',
        'sília',
        'sa',
        'sende',
        'sina',
        'soró',
        'tão',
        'tagem',
        'tal',
        'tanhal',
        'tano',
        'tas',
        'tes',
        'tia',
        'tiba',
        'tim',
        'tinga',
        'tininga',
        'tos',
        'triz',
        'tuba',
        'va',
        'vador',
        'vel',
        'xias',
        'zano',
        'zea',
        'zeiro',
        'zia',
    ];
    /* Chile */
    const nm7 = [
        'An',
        'Anto',
        'Arau',
        'Ari',
        'Bu',
        'Bui',
        'Bul',
        'Cañe',
        'Ca',
        'Cab',
        'Cabre',
        'Cala',
        'Calbu',
        'Cale',
        'Car',
        'Cara',
        'Carta',
        'Cas',
        'Cau',
        'Cauque',
        'Chai',
        'Chi',
        'Chicu',
        'Chigua',
        'Chim',
        'Chimba',
        'Cho',
        'Chon',
        'Co',
        'Coch',
        'Coi',
        'Col',
        'Colli',
        'Con',
        'Consti',
        'Copia',
        'Coqui',
        'Coquim',
        'Cor',
        'Coro',
        'Cura',
        'Curi',
        'Frei',
        'Fru',
        'Futa',
        'Gra',
        'Grane',
        'Ha',
        'Hacie',
        'Han',
        'Hui',
        'Illa',
        'Iqui',
        'La Ami',
        'La En',
        'La Ense',
        'La Ju',
        'La Jun',
        'La La',
        'La Li',
        'La Pi',
        'La Pin',
        'La Se',
        'La Sere',
        'Lam',
        'Lau',
        'Le',
        'Li',
        'Lima',
        'Lina',
        'Llai',
        'Lo',
        'Lon',
        'Ma',
        'Macha',
        'Me',
        'Meli',
        'Mo',
        'Moli',
        'Mon',
        'Mul',
        'Na',
        'Naci',
        'Nue',
        'Oso',
        'Osor',
        'Ova',
        'Pa',
        'Pai',
        'Pale',
        'Pangui',
        'Par',
        'Peña',
        'Pe',
        'Pen',
        'Pu',
        'Pun',
        'Purra',
        'Purran',
        'Puye',
        'Puyu',
        'Quil',
        'Ran',
        'Ranca',
        'Rau',
        'Re',
        'Ren',
        'Sala',
        'Ta',
        'Tal',
        'Tala',
        'Talca',
        'Talta',
        'Te',
        'Temu',
        'To',
        'Tooc',
        'Tor',
        'Trai',
        'Va',
        'Val',
        'Valdi',
        'Valle',
        'Valpa',
        'Vi',
        'Vic',
        'Vicu',
        'Vil',
        'Vue',
        'Yu',
        'Yum',
    ];
    const nm8 = [
        'bún',
        'barongo',
        'bel',
        'bo',
        'bu',
        'buco',
        'có',
        'cón',
        'ca',
        'cabuco',
        'cagua',
        'chalí',
        'che',
        'chi',
        'ción',
        'co',
        'coche',
        'cud',
        'cura',
        'cureo',
        'da',
        'dal',
        'divia',
        'do',
        'dor',
        'flor',
        'ga',
        'gante',
        'gas',
        'gasta',
        'gaví',
        'gena',
        'gol',
        'guén',
        'gua',
        'haique',
        'huano',
        'huapi',
        'hue',
        'hueco',
        'huin',
        'lán',
        'lí',
        'lón',
        'lahue',
        'lal',
        'lama',
        'lapel',
        'lar',
        'lay',
        'le',
        'lena',
        'lenar',
        'leta',
        'lina',
        'lipe',
        'los',
        'lota',
        'mache',
        'mana',
        'manca',
        'mas',
        'miento',
        'muco',
        'nada',
        'nal',
        'nares',
        'nas',
        'negas',
        'nel',
        'neros',
        'nes',
        'nio',
        'no',
        'pó',
        'pa',
        'pel',
        'piapó',
        'pilla',
        'pulli',
        'quén',
        'que',
        'quenes',
        'quilo',
        'quique',
        'raíso',
        'rahue',
        'ral',
        'rane',
        'ranque',
        'ras',
        'rena',
        'reo',
        'rero',
        'res',
        'ria',
        'ricó',
        'rica',
        'ro',
        'ronel',
        'rongo',
        'ropa',
        'ros',
        'stad',
        'tén',
        'ta',
        'tagena',
        'tal',
        'tana',
        'taro',
        'tel',
        'tillar',
        'to',
        'tro',
        'ví',
        'va',
        'via',
        'vier',
        'yante',
        'yehue',
    ];
    /* Paraguay */
    const nm9 = [
        'Ña',
        'Ñacu',
        'Ñacun',
        'Ñu',
        'Aba',
        'Aca',
        'Al',
        'Albo',
        'An',
        'Ante',
        'Ar',
        'Are',
        'Arqui',
        'Arro',
        'Aty',
        'Ayo',
        'Be',
        'Bel',
        'Ben',
        'Bue',
        'Caa',
        'Caapu',
        'Caaza',
        'Camby',
        'Capi',
        'Capia',
        'Car',
        'Cara',
        'Cer',
        'Ciu',
        'Colo',
        'Coro',
        'Des',
        'Desmo',
        'Ede',
        'Embo',
        'En',
        'Encar',
        'Esco',
        'Eu',
        'Euse',
        'Fé',
        'Fas',
        'Fassa',
        'Fer',
        'Fi',
        'Fila',
        'Fra',
        'Fue',
        'Fuer',
        'Gua',
        'Guara',
        'Guaya',
        'Guazu',
        'Ho',
        'Hohe',
        'Hor',
        'Horque',
        'Ita',
        'Itana',
        'Itaqu',
        'Itur',
        'Lau',
        'Lea',
        'Lean',
        'Li',
        'Lim',
        'Lo',
        'Ma',
        'Mbo',
        'Mboca',
        'Mbu',
        'Mbuya',
        'Na',
        'Nana',
        'Nara',
        'Naran',
        'Nata',
        'Nem',
        'Obli',
        'Pa',
        'Para',
        'Pi',
        'Piri',
        'Pre',
        'Pri',
        'Re',
        'Repa',
        'San Al',
        'San An',
        'San Be',
        'San Ber',
        'San Ca',
        'San Car',
        'San Co',
        'San Cos',
        'San Isi',
        'San Jo',
        'San Joa',
        'San Jua',
        'San Lo',
        'San Mi',
        'San Pa',
        'San Pe',
        'San Ra',
        'Sapu',
        'Ta',
        'Tacua',
        'Tebi',
        'Toba',
        'Tri',
        'Trini',
        'Vale',
        'Valen',
        'Yabe',
        'Yagua',
        'Yatai',
        'Yby',
        'Ye',
        'Yga',
        'Ypa',
        'Yu',
    ];
    const nm10 = [
        'bí',
        'baí',
        'baré',
        'bar',
        'batí',
        'bebuy',
        'bi',
        'by',
        'byry',
        'caí',
        'carai',
        'chado',
        'ción',
        'cia',
        'ciel',
        'cinco',
        'cuá',
        'cuí',
        'cuaras',
        'cuary',
        'cuatí',
        'cunday',
        'cupé',
        'curubí',
        'dad',
        'day',
        'dencia',
        'dente',
        'do',
        'dro',
        'foa',
        'gado',
        'go',
        'guá',
        'guarí',
        'guatay',
        'guazú',
        'guyry',
        'hay',
        'ja',
        'jal',
        'lén',
        'la',
        'lar',
        'las',
        'lena',
        'les',
        'licio',
        'ligado',
        'lio',
        'lira',
        'lomas',
        'mí',
        'mín',
        'ma',
        'mas',
        'men',
        'mena',
        'mero',
        'na',
        'nara',
        'nawa',
        'nel',
        'nia',
        'pá',
        'pé',
        'púa',
        'peguá',
        'pio',
        'pucú',
        'pus',
        'quera',
        'queta',
        'quyó',
        'ra',
        'rai',
        'ranjal',
        'rapo',
        'ras',
        'rayú',
        'reles',
        'retá',
        'rica',
        'ro',
        'rubí',
        'sardi',
        'scada',
        'tá',
        'tán',
        'tí',
        'tay',
        'tecto',
        'tiago',
        'tora',
        'tos',
        'tuy',
        'ty',
        'wa',
        'yó',
        'yaó',
        'yapey',
        'yaty',
        'yaybi',
        'yos',
        'zapá',
    ];
    /* Peru */
    const nm11 = [
        'Aba',
        'Aban',
        'Aco',
        'Acol',
        'Agua',
        'Am',
        'Anda',
        'Are',
        'As',
        'Asco',
        'Aya',
        'Azá',
        'Azán',
        'Ba',
        'Bam',
        'Bamba',
        'Bar',
        'Barra',
        'Bue',
        'Ca',
        'Caja',
        'Cal',
        'Cam',
        'Cama',
        'Campo',
        'Cará',
        'Car',
        'Carhua',
        'Cata',
        'Ce',
        'Cele',
        'Celen',
        'Ch',
        'Cha',
        'Chacha',
        'Chan',
        'Chau',
        'Chaupi',
        'Chazu',
        'Chi',
        'Chil',
        'Chin',
        'Cho',
        'Choco',
        'Chon',
        'Chongo',
        'Chosi',
        'Chu',
        'Chulu',
        'Chupa',
        'Co',
        'Coca',
        'Coi',
        'Con',
        'Conta',
        'Cora',
        'Cus',
        'Fe',
        'Ferre',
        'Gua',
        'Guada',
        'Ha',
        'Hacie',
        'Huá',
        'Huánu',
        'Hua',
        'Hual',
        'Huama',
        'Huan',
        'Huanca',
        'Huar',
        'Huara',
        'Hui',
        'Huicu',
        'Ila',
        'Iqui',
        'Jau',
        'Je',
        'Jepe',
        'Ju',
        'Jua',
        'La',
        'La Bre',
        'La Brei',
        'La Hu',
        'La Hua',
        'La O',
        'La Oro',
        'La Pe',
        'La Ri',
        'La Rin',
        'La U',
        'Lagu',
        'Lam',
        'Lamba',
        'Lare',
        'Li',
        'Má',
        'Mán',
        'Mó',
        'Mór',
        'Ma',
        'Mar',
        'Marca',
        'Maza',
        'Mi',
        'Mo',
        'Mochu',
        'Mol',
        'Molle',
        'Monse',
        'Moque',
        'Moro',
        'Morro',
        'Motu',
        'Moyo',
        'Naz',
        'Nue',
        'Ol',
        'Otu',
        'Oxa',
        'Pa',
        'Paca',
        'Pacan',
        'Pacas',
        'Paco',
        'Pai',
        'Pan',
        'Para',
        'Pati',
        'Pere',
        'Pic',
        'Pico',
        'Pil',
        'Pilco',
        'Pime',
        'Pimen',
        'Pis',
        'Piu',
        'Pu',
        'Puca',
        'Pucal',
        'Pun',
        'Puti',
        'Que',
        'Quere',
        'Qui',
        'Quil',
        'Quilma',
        'Quiru',
        'Re',
        'Rio',
        'Sala',
        'Salave',
        'Sali',
        'Saline',
        'San Cle',
        'San Cleme',
        'San I',
        'San Igna',
        'San Isi',
        'San Je',
        'San Ju',
        'San Jua',
        'San Mi',
        'San Pe',
        'San Ra',
        'San Vi',
        'Sapo',
        'Sati',
        'Se',
        'Sechu',
        'Si',
        'Sica',
        'Sicua',
        'So',
        'Sori',
        'Su',
        'Subta',
        'Sul',
        'Sulla',
        'Sur',
        'Tú',
        'Túcu',
        'Ta',
        'Taba',
        'Tac',
        'Tala',
        'Tam',
        'Tambo',
        'Tar',
        'Ti',
        'Tin',
        'To',
        'Toca',
        'Tora',
        'Tru',
        'Truji',
        'Tum',
        'Uru',
        'Vi',
        'Ya',
        'Yana',
        'Yau',
        'Yun',
        'Yungu',
        'Yuri',
        'Za',
        'Zaru',
        'Zorri',
    ];
    const nm12 = [
        'ba',
        'bamba',
        'bes',
        'bo',
        'bopata',
        'bote',
        'ca',
        'cabamba',
        'cache',
        'cama',
        'canas',
        'cancha',
        'canga',
        'caos',
        'cay',
        'caya',
        'cayo',
        'cha',
        'chacra',
        'che',
        'cho',
        'chuco',
        'chura',
        'cio',
        'co',
        'cocha',
        'colla',
        'comay',
        'cope',
        'cora',
        'cota',
        'cuani',
        'cucho',
        'cume',
        'cungo',
        'dín',
        'do',
        'garo',
        'goa',
        'goyape',
        'gua',
        'guas',
        'gunas',
        'guyo',
        'huamayo',
        'huaylas',
        'ján',
        'ja',
        'jalla',
        'jes',
        'jillo',
        'juí',
        'la',
        'lacio',
        'lana',
        'lao',
        'lara',
        'las',
        'lave',
        'lavera',
        'layo',
        'lendo',
        'liaca',
        'lica',
        'losos',
        'lupe',
        'ma',
        'maguas',
        'maná',
        'mana',
        'marca',
        'mari',
        'mas',
        'may',
        'mayo',
        'mente',
        'mentel',
        'mey',
        'monga',
        'mos',
        'na',
        'nas',
        'nera',
        'nimo',
        'no',
        'nuco',
        'pén',
        'pón',
        'pa',
        'paca',
        'pampa',
        'pata',
        'pe',
        'poyas',
        'que',
        'quio',
        'quipa',
        'rás',
        'rú',
        'ra',
        'ral',
        'ranca',
        'rata',
        'raz',
        'redo',
        'rené',
        'rial',
        'ritor',
        'ritos',
        'ro',
        'ropón',
        'rope',
        'ruro',
        'si',
        'sica',
        'ta',
        'tamana',
        'tel',
        'tillo',
        'tina',
        'tipo',
        'tos',
        'tupe',
        'velica',
        'vera',
        'verde',
        'verry',
        'vilca',
        'viri',
        'vista',
        'ya',
        'yape',
        'yas',
        'yeque',
        'za',
        'zuta',
    ];
    /* Uruguay */
    const nm13 = [
        'Ace',
        'Ai',
        'Aqua',
        'Arti',
        'At',
        'Atlá',
        'Ba',
        'Bal',
        'Bar',
        'Be',
        'Bel',
        'Bla',
        'Blan',
        'Ca',
        'Cane',
        'Car',
        'Cardo',
        'Carme',
        'Cas',
        'Casti',
        'Casu',
        'Ce',
        'Cebo',
        'Cer',
        'Chu',
        'Co',
        'Colo',
        'Cur',
        'Del',
        'Die',
        'Diecio',
        'Do',
        'Dolo',
        'Du',
        'Dura',
        'Eci',
        'Ecil',
        'Em',
        'Empa',
        'Flo',
        'Fray',
        'Gui',
        'Isi',
        'Joa',
        'La',
        'Las',
        'Li',
        'Ma',
        'Mal',
        'Maldo',
        'Mari',
        'Mer',
        'Mi',
        'Mon',
        'Nue',
        'Om',
        'Pa',
        'Pal',
        'Pan',
        'Pay',
        'Paysan',
        'Pi',
        'Pie',
        'Piriá',
        'Por',
        'Porve',
        'Pro',
        'Qie',
        'Ra',
        'Ro',
        'Rodrí',
        'Rosa',
        'Rove',
        'Sa',
        'San An',
        'San Ba',
        'San Bau',
        'San Ca',
        'San Car',
        'San Fe',
        'San Ja',
        'San Jo',
        'San Ra',
        'Sara',
        'Sp',
        'Sproa',
        'Ta',
        'Tacua',
        'Tara',
        'To',
        'Tole',
        'Tra',
        'Tran',
        'Trei',
        'Tri',
        'Trini',
        'Tu',
        'Tupa',
        'Velá',
        'Veláz',
        'Vi',
        'Vicha',
    ];
    const nm14 = [
        'búes',
        'baé',
        'bracho',
        'cano',
        'cas',
        'cedes',
        'chón',
        'cha',
        'cho',
        'cio',
        'ciocho',
        'co',
        'da',
        'dal',
        'dero',
        'do',
        'dona',
        'doro',
        'dras',
        'fael',
        'gas',
        'guá',
        'guas',
        'gues',
        'guez',
        'jas',
        'lén',
        'lís',
        'la',
        'latí',
        'ledo',
        'lix',
        'lo',
        'lones',
        'lonia',
        'lores',
        'los',
        'món',
        'me',
        'melo',
        'mitas',
        'nas',
        'nes',
        'nia',
        'nicó',
        'nio',
        'nir',
        'no',
        'palme',
        'quín',
        'queras',
        'quez',
        'quillo',
        'ras',
        'rasco',
        'razno',
        'rembó',
        'rencio',
        'res',
        'reso',
        'resta',
        'riano',
        'rida',
        'rio',
        'ro',
        'sandú',
        'sar',
        'sario',
        'scala',
        'supá',
        'tas',
        'tasar',
        'tes',
        'tiago',
        'tida',
        'tigas',
        'tillos',
        'tina',
        'tista',
        'va',
        'venir',
        'vera',
        'vo',
    ];
    const i = Math.floor(Math.random() * 14);
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
        } else {
            names = sample(nm13) + sample(nm14);
        }
        return names;
    }
}
