import { sample } from 'lodash';

export default function werewolfs() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Kenyan',
        'Rudy',
        'Nikko',
        'Ralf',
        'Seff',
        'Caleb',
        'Conan',
        'Lyall',
        'Randall',
        'Randolph',
        'Raoul',
        'Thyrius',
        'Cobium',
        'Matrius',
        'Quelii',
        'Dorlus',
        'Versum',
        'Rukheim',
        'Loer',
        'Vesper',
        'Zegrath',
        'Marca',
        'Seth',
        'Lewry',
        'Gordon',
        'Roald',
        'Mac',
        'Blaze',
        'Zy',
        'Sam',
        'Joey',
        'Jake',
        'Paul',
        'Jared',
        'Quil',
        'Jackery',
        'Rex',
        'Bruno',
        'Raye',
        'Arther',
        'Aarbrok',
        'Aaron',
        'Abe',
        'Abraham',
        'Abram',
        'Ace',
        'Adolfo',
        'Aedelwulf',
        'Aethelwulf',
        'Agares',
        'Ahab',
        'Ahlf',
        'Alan',
        'Albert',
        'Alberto',
        'Alder',
        'Aldo',
        'Alexander',
        'Alf',
        'Alhazred',
        'Alrik',
        'Aluxious',
        'Amity',
        'Amos',
        'Anderson',
        'Andre',
        'Angel',
        'Ansel',
        'Anthony',
        'Anton',
        'Antonio',
        'Arald',
        'Arcadio',
        'Arden',
        'Arhein',
        'Aries',
        'Arion',
        'Ariston',
        'Armadyl',
        'Armin',
        'Armon',
        'Arnald',
        'Arnet',
        'Arric',
        'Arthur',
        'Aryn',
        'Ashnard',
        'Augustine',
        'Axel',
        'Bahram',
        'Balfour',
        'Balkin',
        'Balrog',
        'Bandos',
        'Baraek',
        'Barald',
        'Bardawulf',
        'Bardolph',
        'Bardulf',
        'Barion',
        'Bariston',
        'Barmin',
        'Barmon',
        'Barnald',
        'Barnet',
        'Barney',
        'Baronne',
        'Barrett',
        'Barretto',
        'Barric',
        'Barther',
        'Bartholomew',
        'Barts',
        'Baryn',
        'Basil',
        'Bastan',
        'Bazba',
        'Beardsley',
        'Beecham',
        'Belcoot',
        'Belmont',
        'Ben',
        'Beorhtwulf',
        'Berald',
        'Bergan',
        'Bergen',
        'Berhtulf',
        'Berion',
        'Berlin',
        'Bermin',
        'Bermon',
        'Bernald',
        'Bernet',
        'Berric',
        'Berriston',
        'Berther',
        'Bertolf',
        'Bertulf',
        'Beryn',
        'Bess',
        'Biggs',
        'Bill',
        'Bingham',
        'Bishop',
        'Blade',
        'Bodford',
        'Bolgan',
        'Borgan',
        'Boris',
        'Borus',
        'Bosch',
        'Bosche',
        'Bowyer',
        'Boyd',
        'Brady',
        'Brass',
        'Brec',
        'Brett',
        'Brian',
        'Broddi',
        'Brody',
        'Brogan',
        'Bruno',
        'Brutus',
        'Buck',
        'Caesar',
        'Caineghis',
        'Calhoun',
        'Callum',
        'Campbell',
        'Camus',
        'Candra',
        'Carlos',
        'Carter',
        'Carthel',
        'Cedric',
        'Cerberus',
        'Chadli',
        'Champo',
        'Chandler',
        'Charles',
        'Charlie',
        'Cheng',
        'Chris',
        'Christian',
        'Claude',
        'Clayton',
        'Clive',
        'Clover',
        'Clovis',
        'Cluny',
        'Coinin',
        'Colby',
        'Cole',
        'Colin',
        'Collin',
        'Colton',
        'Conan',
        'Connell',
        'Conner',
        'Connor',
        'Conon',
        'Conrad',
        'Corey',
        'Coyote',
        'Cronin',
        'Cuetlachtli',
        'Culgan',
        'Cunngingham',
        'Cyran',
        'Dagger',
        'Dalton',
        'Dane',
        'Daniel',
        'Dannan',
        'Darald',
        'Dario',
        'Darion',
        'Dariston',
        'Darmin',
        'Darmon',
        'Darnald',
        'Darnet',
        'Darren',
        'Darric',
        'Darrow',
        'Darther',
        'Daryn',
        'Dasha',
        'Davey',
        'David',
        'Dawn',
        'De Boule',
        'De Luca',
        'Decker',
        'Deegon',
        'Delco',
        'Delmor',
        'Dennis',
        'Derald',
        'Derion',
        'Deriston',
        'Dermin',
        'Dermon',
        'Dernald',
        'Dernet',
        'Derric',
        'Derrik',
        'Derther',
        'Deryn',
        'Desmond',
        'Devdan',
        'Devel',
        'Diego',
        'Dios',
        'Dirge',
        'Dirk',
        'Dolph',
        'Dominic',
        'Donovan',
        'Douglas',
        'Dowers',
        'Doyle',
        'Draven',
        'Dreven',
        'Driscoll',
        'Drogo',
        'Dromon',
        'Duffy',
        'Duke',
        'Duncan',
        'Dunstan',
        'Duradel',
        'Dylan',
        'Eifert',
        'Eike',
        'Einar',
        'Elias',
        'Elliot',
        'Elstan',
        'Embry',
        'Emron',
        'Enid',
        'Eoin',
        'Ephraim',
        'Eric',
        'Ernest',
        'Errol',
        'Ershin',
        'Eugene',
        'Evan',
        'Ewan',
        'Faelan',
        'Faith',
        'Falcon',
        'Faolan',
        'Farrar',
        'Fausto',
        'Fay',
        'Federico',
        'Felgrom',
        'Felix',
        'Fenris',
        'Fenrisulfr',
        'Fenrisulfur',
        'Fergus',
        'Fermin',
        'Fernard',
        'Fillin',
        'Finch',
        'Fitcher',
        'Flik',
        'Flinch',
        'Flint',
        'Forrester',
        'Franc',
        'Frances',
        'Francisco',
        'Frank',
        'Franklin',
        'Franz',
        'Fred',
        'Fredegund',
        'Frederick',
        'Frederico',
        'Freed',
        'Futch',
        'Fynn',
        'Gadburg',
        'Gaepora',
        'Gaius',
        'Ganon',
        'Ganondorf',
        'Gareth',
        'Garnet',
        'Garr',
        'Garske',
        'Garth',
        'Gatrie',
        'Gattas',
        'Gauss',
        'Gavner',
        'Gayle',
        'Geddoe',
        'Geegagis',
        'Georg',
        'George',
        'Gerome',
        'Gerrant',
        'Gerwulf',
        'Gharnef',
        'Ghirahim',
        'Gifford',
        'Gilbert',
        'Gilliam',
        'Gillian',
        'Gilroy',
        'Gith',
        'Glen',
        'Gollum',
        'Gordon',
        'Gorno',
        'Goro',
        'Gorudo',
        'Gossom',
        'Gothmog',
        'Grace',
        'Graham',
        'Granmeyer',
        'Grant',
        'Gregor',
        'Gregorio',
        'Greil',
        'Grey',
        'Grieg',
        'Grogan',
        'Groose',
        'Grout',
        'Grum',
        'Gus',
        'Gustav',
        'Haar',
        'Hades',
        'Hallec',
        'Hamil',
        'Han',
        'Hanklin',
        'Hans',
        'Harland',
        'Hartwell',
        'Hauser',
        'Hawes',
        'Heath',
        'Hegir',
        'Heller',
        'Hemming',
        'Herrick',
        'Heskel',
        'Hiro',
        'Hogan',
        'Hook',
        'Horace',
        'Hoshi',
        'Howley',
        'Hrodulf',
        'Hrodwulf',
        'Hrolf',
        'Hrolfr',
        'Hugh',
        'Hugo',
        'Humphrey',
        'Hunter',
        'Hyde',
        'Iago',
        'Ian',
        'Ike',
        'Indrik',
        'Ingolf',
        'Ingolfr',
        'Inigo',
        'Irving',
        'Isaac',
        'Ismael',
        'Ivailo',
        'Ivan',
        'Ivaylo',
        'Jack',
        'Jackal',
        'Jacob',
        'Jacques',
        'Jaggar',
        'Jamil',
        'Jarom',
        'Jarvald',
        'Jasmine',
        'Jason',
        'Jatix',
        'Javier',
        'Jay',
        'Jecht',
        'Jefferson',
        'Jeremiah',
        'Jericho',
        'Jess',
        'Jett',
        'Jim',
        'Jimba',
        'Jimmy',
        'Jimothy',
        'Jiro',
        'John',
        'Johnson',
        'Jon',
        'Jones',
        'Joseph',
        'Joshua',
        'Josiah',
        'Jowy',
        'Juan',
        'Jude',
        'Kabocha',
        'Kahn',
        'Kai',
        'Kapral',
        'Karn',
        'Kashgar',
        'Kear',
        'Kellam',
        'Kenway',
        'Kenyon',
        'Kevin',
        'Kidd',
        'Kieran',
        'Kinnison',
        'Kira',
        'Kirnon',
        'Klaus',
        'Klyn',
        'Kodan',
        'Konrad',
        'Koray',
        'Kortan',
        'Kragen',
        'Kurt',
        'Kurthnaga',
        'Kyle',
        'Landon',
        'Larc',
        'Laurent',
        'Lawrence',
        'Lawson',
        'Lebrante',
        'Lennix ',
        'Leo',
        'Leon',
        'Liam',
        'Lincoln',
        'Liulfr',
        'Lobo',
        'Lonan',
        'Lope',
        'Lothian',
        'Louis',
        'Loup',
        'Louvel',
        'Lovel',
        'Lovell',
        'Lowell',
        'Luc',
        'Lucas',
        'Lucian',
        'Luger',
        'Luis',
        'Luka',
        'Lupin',
        'Lupus',
        'Lycaon',
        'Lycurgus',
        'Lykaon',
        'MaGallan',
        'MacLaren',
        'Mace',
        'Mackie',
        'Maclean',
        'Malcom',
        'Mano',
        'Marald',
        'Marc',
        'Marcel',
        'Marcus',
        'Margeuse',
        'Marion',
        'Mariston',
        'Markway',
        'Marlowe',
        'Marmin',
        'Marmon',
        'Marnald',
        'Marnet',
        'Marric',
        'Marrok',
        'Marscal',
        'Marth',
        'Marther',
        'Martyn',
        'Mason',
        'Matthew',
        'Mauro',
        'Maximillian',
        'Maynord',
        'McCoy',
        'Mebeth',
        'Mei',
        'Melville',
        'Merle',
        'Merric',
        'Meruvis',
        'Michael',
        'Mikain',
        'Mike',
        'Milligan',
        'Moe',
        'Mondo',
        'Montego',
        'Mordecai',
        'Morgan',
        'Morris',
        'Mort',
        'Mortas',
        'Morten',
        'Mourgent',
        'Mueller',
        'Murray',
        'Nash',
        'Nathan',
        'Nealuchi',
        'Niccolo',
        'Nicholas',
        'Nico',
        'Nicolas',
        'Nigel',
        'Nobregas',
        'Nolan',
        'Norden',
        'Norrix',
        'Ogma',
        'Ordan',
        'Ordovic',
        'Orkney',
        'Osald',
        'Oscar',
        'Osion',
        'Osiston',
        'Oskar',
        'Osmin',
        'Osmon',
        'Osnald',
        'Osnet',
        'Osric',
        'Osther',
        'Osyn',
        'Otsoa',
        'Otsoko',
        'Ouragan',
        'Owain',
        'Pablo',
        'Paul',
        'Pavel',
        'Pelleas',
        'Penn',
        'Pennington',
        'Peony',
        'Percival',
        'Persephone',
        'Pesmerga',
        'Pete',
        'Phelan',
        'Philip',
        'Pico',
        'Picolo',
        'Pierce',
        'Preston',
        'Prime',
        'Quillard',
        'Quin',
        'Radcliffe',
        'Radulf',
        'Radulfr',
        'Raedwulf',
        'Rafe',
        'Rahl',
        'Ralf',
        'Ralph',
        'Ralphie',
        'Ranael',
        'Randal',
        'Randall',
        'Randell',
        'Randolf',
        'Randolfr',
        'Randolph',
        'Randulf',
        'Randulfr',
        'Randwulf',
        'Randy',
        'Rannulf',
        'Rannulfr',
        'Rannulfus',
        'Ransome',
        'Ranulf',
        'Ranulfr',
        'Ranulph',
        'Raoul',
        'Rassler',
        'Rasso',
        'Raul',
        'Raulf',
        'Ray',
        'Reade',
        'Red',
        'Reddas',
        'Reed',
        'Reinald',
        'Remus',
        'Resno',
        'Rhett',
        'Rhonen',
        'Rhys',
        'Richard',
        'Richmond',
        'Rico',
        'Riddick',
        'Ridley',
        'Rob',
        'Robert',
        'Robin',
        'Rocky',
        'Rodald',
        'Roderic',
        'Roderiston',
        'Rodion',
        'Rodmin',
        'Rodmon',
        'Rodnald',
        'Rodnet',
        'Rodolf',
        'Rodolfo',
        'Rodolph',
        'Rodther',
        'Rody',
        'Rodyn',
        'Roffe',
        'Roger',
        'Roland',
        'Rolayne',
        'Rolf',
        'Rollo',
        'Rommik',
        'Ronald',
        'Ronan',
        'Ronion',
        'Roniston',
        'Ronmin',
        'Ronmon',
        'Ronnald',
        'Ronnet',
        'Ronric',
        'Ronther',
        'Ronyn',
        'Ross',
        'Roth',
        'Roul',
        'Rovell',
        'Rowd',
        'Roy',
        'Royd',
        'Roz',
        'Rudi',
        'Rudolf',
        'Rudolph',
        'Rudolphus',
        'Rudy',
        'Ruston',
        'Rusty',
        'Ruud',
        'Ryan',
        'Rydel',
        'Rynders',
        'Saku',
        'Salome',
        'Sam',
        'Samus',
        'Sandulf',
        'Sawyer',
        'Scott',
        'Seff',
        'Serge',
        'Seth',
        'Shamus',
        'Shane',
        'Shaun',
        'Shaw',
        'Shay',
        'Sheng',
        'Shilo',
        'Sid',
        'Silverberg',
        'Simon',
        'Simone',
        'Skrimir',
        'Smith',
        'Solon',
        'Stein',
        'Stephen',
        'Steven',
        'Stewart',
        'Subodh',
        'Sullivan',
        'Sven',
        'Tauroneo',
        'Templeton',
        'Terri',
        'Thad',
        'Theo',
        'Thomas',
        'Thorin',
        'Thrain',
        'Tibald',
        'Tibarn',
        'Tony',
        'Tormod',
        'Trald',
        'Trento',
        'Treznor',
        'Trion',
        'Triston',
        'Trmin',
        'Trmon',
        'Trnald',
        'Trnet',
        'Troy',
        'Trric',
        'Trther',
        'Tryn',
        'Turk',
        'Tybalt',
        'Tyler',
        'Ulbrecht',
        'Ulf',
        'Ulfang',
        'Ulfgangur',
        'Ulfhrafn',
        'Ulfr',
        'Ulfric',
        'Ulfur',
        'Ulric',
        'Ulrick',
        'Valentine',
        'Valfred',
        'Valgerd',
        'Vallin',
        'Varg',
        'Vaslof',
        'Velvel',
        'Victor',
        'Virion',
        'Vlad',
        'Volga',
        'Volke',
        'Voss',
        'Vossler',
        'Vuk',
        'Vukasin',
        'Wallace',
        'Walter',
        'Ward',
        'Wedge',
        'Weiss',
        'Weizen',
        'Welch',
        'Weldon',
        'Wench',
        'Will',
        'Willas',
        'William',
        'Wolf',
        'Wolfe',
        'Wolffang',
        'Wolfgang',
        'Wolfgrim',
        'Wolfgrimm',
        'Wolfram',
        'Wulfric',
        'Wulfrun',
        'Wyatt',
        'Wyett ',
        'Xavier',
        'York',
        'Yovel',
        'Yuri',
        'Zeeb',
        'Zeff',
        'Zeus',
        'Zev',
        'Zog',
    ];
    const nm2 = [
        'Trudy',
        'Lyall',
        'Tasha',
        'Accalia',
        'Erylis',
        'Sabrione',
        'Kynthia',
        'Lynexia',
        'Mylixe',
        'Valenthia',
        'Esyn',
        'Lynede',
        'Lyndra',
        'Martine',
        'Valentina',
        'Charice',
        'Ovidia',
        'Eponine',
        'Carlotta',
        'Carmen',
        'Deja',
        'Misty',
        'Dezra',
        'Abby',
        'Abdel',
        'Abe',
        'Acantha',
        'Adela',
        'Adelina',
        'Adora',
        'Ady',
        'Agatha',
        'Alanis',
        'Aldith',
        'Aldusa',
        'Alexandra',
        'Alice',
        'Alina',
        'Allah',
        'Amanda',
        'Amelia',
        'Amethyst',
        'Amity',
        'Amoret',
        'Anabelle',
        'Angel',
        'Anita',
        'Anju',
        'Annallee',
        'Anne',
        'Annik',
        'Ansel',
        'Arcadio',
        'Ariadne',
        'Aster',
        'Aura',
        'Avice',
        'Azura',
        'Baize',
        'Barbara',
        'Basia',
        'Basilea',
        'Bathilda',
        'Beatrice',
        'Bela',
        'Bellatrix',
        'Belle',
        'Belvina',
        'Bess',
        'Betsy',
        'Blake',
        'Bonnie',
        'Bowen',
        'Brandy',
        'Brassica',
        'Bree',
        'Brett',
        'Bridget',
        'Brooke',
        'Bruna',
        'Bula',
        'Caitrin',
        'Callum',
        'Camden',
        'Camilla',
        'Candra',
        'Carey',
        'Carletta',
        'Carline',
        'Carrie',
        'Cassandra',
        'Cecil',
        'Celestria',
        'Celina',
        'Cellica',
        'Charlie',
        'Charna',
        'Chloe',
        'Chris',
        'Christine',
        'Cinder',
        'Cindy',
        'Clarice',
        'Clarisse',
        'Clayton',
        'Clover',
        'Colby',
        'Constance',
        'Consuela',
        'Cordea',
        'Cybil',
        'Dalrymple',
        'Dane',
        'Danielle',
        'Darcy',
        'Daria',
        'Darla',
        'Dasha',
        'Dawn',
        'Dayle',
        'Deborah',
        'Deidra',
        'Delaney',
        'Delinda',
        'Diadora',
        'Dora',
        'Duffy',
        'Earlene',
        'Ebony',
        'Edith',
        'Edwina',
        'Eilie',
        'Eirika',
        'Elaine',
        'Elena',
        'Elenor',
        'Elizabeth',
        'Ellamaria',
        'Elza',
        'Ema',
        'Ember',
        'Emily',
        'Emma',
        'Endwyr',
        'Enid',
        'Enya',
        'Eris',
        'Errol',
        'Ertha',
        'Estella',
        'Estrilda',
        'Etienne',
        'Eunice',
        'Eva',
        'Faith',
        'Fay',
        'Felita',
        'Fina',
        'Finnula',
        'Fiona',
        'Flare',
        'Frenita',
        'Fynn',
        'Garnet',
        'Gayle',
        'Gillian',
        'Ginger',
        'Glenda',
        'Glennis',
        'Glinda',
        'Golda',
        'Grace',
        'Grecia',
        'Gremma',
        'Grivina',
        'Gundred',
        'Gunnora',
        'Gwen',
        'Gwench',
        'Gwenna',
        'Haera',
        'Haifa',
        'Halley',
        'Hanna',
        'Harley',
        'Hartwell',
        'Haunild',
        'Hazelmere',
        'Heath',
        'Heather',
        'Hegna',
        'Helen',
        'Helena',
        'Helewise',
        'Helga',
        'Hellen',
        'Herma ',
        'Hilda',
        'Holly',
        'Hook',
        'Hope',
        'Ida',
        'Idonea',
        'Ilona',
        'Ilya',
        'Iona',
        'Iossa',
        'Isobel',
        'Jacqueline',
        'Jacqui',
        'Jane',
        'Janey',
        'Janice',
        'Jasmine',
        'Jay',
        'Jayene',
        'Jean',
        'Jeane',
        'Jena',
        'Jennella',
        'Jennete',
        'Jennifer',
        'Jessica',
        'Jinelle',
        'Johanna',
        'Jones',
        'Jora',
        'Jose',
        'Josiah',
        'Josphine',
        'Jude',
        'Juliana',
        'June',
        'Kafei',
        'Kai',
        'Kali',
        'Kardia',
        'Karen',
        'Kari',
        'Karlene',
        'Kassidy',
        'Katelyn',
        'Katharina',
        'Kathleen',
        'Kathryn',
        'Kathy',
        'Katie',
        'Katreena',
        'Keena',
        'Kenia',
        'Kerry',
        'Kiera',
        'Kinshra',
        'Kira',
        'Kitty',
        'Kivela',
        'Kyley',
        'La Rue',
        'Lacy',
        'Lashley',
        'Lass',
        'Lathilda',
        'Lavender',
        'Layla',
        'Leah',
        'Leslie',
        'Lettice',
        'Liecia',
        'Lillian',
        'Linde',
        'Linota',
        'Lisa',
        'Liz',
        'Lorelai',
        'Lorelei',
        'Lorna',
        'Luana',
        'Luce',
        'Lucia',
        'Lucina',
        'Lucretia',
        'Lulu',
        'Luna',
        'Lycia',
        'Lyndis',
        'Lynn',
        'Lyra',
        'Magdalene',
        'Maggie',
        'Majora',
        'Malissa',
        'Margaret',
        'Maria',
        'Martha',
        'Mary',
        'May',
        'Maybelle',
        'Mazelina',
        'Meg',
        'Meghan',
        'Mei',
        'Mel',
        'Melania',
        'Melanie',
        'Millie',
        'Mindy',
        'Minerva',
        'Mizette',
        'Moana',
        'Montenegro',
        'Morgan',
        'Morgana',
        'Morrigan',
        'Morticia',
        'Morwenna',
        'Myndill',
        'Nadine',
        'Narcissa',
        'Natasha',
        'Nathan',
        'Nelis',
        'Nesta',
        'Nia',
        'Nicky',
        'Nina',
        'Noira',
        'Noreen',
        'Olga',
        'Opaline',
        'Ophelia',
        'Orkney',
        'Paige',
        'Parella',
        'Patrina',
        'Pavel',
        'Peggy',
        'Peratha',
        'Persephone',
        'Petra',
        'Petrine',
        'Phaedra',
        'Philippa',
        'Phoebe',
        'Pilika',
        'Pola',
        'Priscilla',
        'Queen',
        'Rachel',
        'Rae',
        'Rain',
        'Raina',
        'Ramonita',
        'Rashida',
        'Raura',
        'Raven',
        'Rebekah',
        'Refia',
        'Relomia',
        'Renena',
        'Resno',
        'Reyna',
        'Ricca',
        'Richolda',
        'Rina',
        'Robin',
        'Roda',
        'Roesia',
        'Rona',
        'Rose',
        'Rosetta',
        'Rowena',
        'Roy',
        'Rubella',
        'Ruby',
        'Rue',
        'Rufa',
        'Ruth',
        'Sabelina',
        'Sable',
        'Sadie',
        'Saige',
        'Samara',
        'Sandy',
        'Sarah',
        'Sarina',
        'Savina',
        'Sawyer',
        'Selen',
        'Severa',
        'Sheik',
        'Sheila',
        'Shelly',
        'Sherie',
        'Shiba',
        'Sibyl',
        'Sierra',
        'Simone',
        'Sophia',
        'Steven',
        'Stewart',
        'Sully',
        'Susannah',
        'Sybil',
        'Sylvie',
        'Tantra',
        'Tara',
        'Taria',
        'Tatiana',
        'Terri',
        'Tetra',
        'Tharja',
        'Theda',
        'Theola',
        'Thessalia',
        'Titania',
        'Trisha',
        'Tuska',
        'Uma',
        'Ursula',
        'Valentine',
        'Valeria',
        'Valerie',
        'Victoria',
        'Viki',
        'Vivian',
        'Vivianne',
        'Whisper',
        'Wilhelmina',
        'Willow',
        'Wynne',
        'Wynona',
        'Xanthe',
        'Yolanda',
        'Zenesha',
        'Zunda',
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
