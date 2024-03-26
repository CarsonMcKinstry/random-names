import { sample } from 'lodash';

export default function worgen() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Ace',
        'Agares',
        'Albert',
        'Alberto',
        'Aldo',
        'Arthur',
        'Augustine',
        'Axel',
        'Bartholomew',
        'Barts',
        'Basil',
        'Bazba',
        'Beecham',
        'Bolgan',
        'Boris',
        'Borus',
        'Brec',
        'Caesar',
        'Camus',
        'Cedric',
        'Chadli',
        'Champo',
        'Clive',
        'Clovis',
        'Colton',
        'Connell',
        'Culgan',
        'Cunngingham',
        'Dario',
        'De Boule',
        'Desmond',
        'Dios',
        'Dominic',
        'Duke',
        'Eike',
        'Elliot',
        'Eugene',
        'Fitcher',
        'Flik',
        'Franz',
        'Fred',
        'Freed',
        'Futch',
        'Geddoe',
        'Georg',
        'Gordon',
        'Goro',
        'Gorudo',
        'Granmeyer',
        'Gustav',
        'Hallec',
        'Han',
        'Hans',
        'Hauser',
        'Hugo',
        'Humphrey',
        'Jacques',
        'Jefferson',
        'Jess',
        'Jimba',
        'Jowy',
        'Juan',
        'Jude',
        'Kabocha',
        'Kahn',
        'Kidd',
        'Kinnison',
        'Klaus',
        'Lebrante',
        'Leo',
        'Leon',
        'Louis',
        'Luc',
        'Marc',
        'Marlowe',
        'Maximillian',
        'Melville',
        'Mikain',
        'Mike',
        'Mondo',
        'Nash',
        'Nicolas',
        'Percival',
        'Pesmerga',
        'Pico',
        'Picolo',
        'Prime',
        'Reed',
        'Rhett',
        'Richmond',
        'Rico',
        'Ridley',
        'Rody',
        'Roland',
        'Rowd',
        'Salome',
        'Samus',
        'Scott',
        'Shilo',
        'Sid',
        'Silverberg',
        'Simone',
        'Solon',
        'Templeton',
        'Thomas',
        'Weizen',
        'Wyatt',
        'Ouragan',
        'Yovel',
        'Bosche',
        'Valfred',
        'Beardsley',
        'Conon',
        'Fergus',
        'Darrow',
        'Gorno',
        'Meruvis',
        'Dromon',
        'Fredegund',
        'Gadburg',
        'Mourgent',
        'Quillard',
        'Gilliam',
        'Resno',
        'Ordovic',
        'Kashgar',
        'Indrik',
        'Vaslof',
        'Dirk',
        'Alhazred',
        'Bahram',
        'Luger',
        'Bastan',
        'Belcoot',
        'Bergen',
        'Dolph',
        'Marscal',
        'Mueller',
        'Norden',
        'Bolgan',
        'Volga',
        'Arion',
        'Armin',
        'Arnald',
        'Arald',
        'Aryn',
        'Arther',
        'Arnet',
        'Arric',
        'Ariston',
        'Armon',
        'Barion',
        'Barmin',
        'Barnald',
        'Barald',
        'Baryn',
        'Barther',
        'Barnet',
        'Barric',
        'Bariston',
        'Barmon',
        'Darion',
        'Darmin',
        'Darnald',
        'Darald',
        'Daryn',
        'Darther',
        'Darnet',
        'Darric',
        'Dariston',
        'Darmon',
        'Berion',
        'Bermin',
        'Bernald',
        'Berald',
        'Beryn',
        'Berther',
        'Bernet',
        'Berric',
        'Berriston',
        'Bermon',
        'Marion',
        'Marmin',
        'Marnald',
        'Marald',
        'Martyn',
        'Marther',
        'Marnet',
        'Marric',
        'Mariston',
        'Marmon',
        'Trion',
        'Trmin',
        'Trnald',
        'Trald',
        'Tryn',
        'Trther',
        'Trnet',
        'Trric',
        'Triston',
        'Trmon',
        'Ronion',
        'Ronmin',
        'Ronnald',
        'Ronald',
        'Ronyn',
        'Ronther',
        'Ronnet',
        'Ronric',
        'Roniston',
        'Ronmon',
        'Rodion',
        'Rodmin',
        'Rodnald',
        'Rodald',
        'Rodyn',
        'Rodther',
        'Rodnet',
        'Roderic',
        'Roderiston',
        'Rodmon',
        'Derion',
        'Dermin',
        'Dernald',
        'Derald',
        'Deryn',
        'Derther',
        'Dernet',
        'Derric',
        'Deriston',
        'Dermon',
        'Osion',
        'Osmin',
        'Osnald',
        'Osald',
        'Osyn',
        'Osther',
        'Osnet',
        'Osric',
        'Osiston',
        'Osmon',
        'Aarbrok',
        'Aaron',
        'Abe',
        'Abraham',
        'Adolfo',
        'Aedelwulf',
        'Aethelwulf',
        'Ahab',
        'Ahlf',
        'Alan',
        'Alexander',
        'Alf',
        'Amity',
        'Amos',
        'Anderson',
        'Andre',
        'Angel',
        'Ansel',
        'Anthony',
        'Anton',
        'Antonio',
        'Arcadio',
        'Arden',
        'Aries',
        'Armadyl',
        'Balfour',
        'Bandos',
        'Bardawulf',
        'Bardolph',
        'Bardulf',
        'Barney',
        'Ben',
        'Beorhtwulf',
        'Bergan',
        'Berhtulf',
        'Bertolf',
        'Bertulf',
        'Bess',
        'Biggs',
        'Bill',
        'Bingham',
        'Bishop',
        'Blade',
        'Borgan',
        'Boris',
        'Bowyer',
        'Brady',
        'Brass',
        'Brett',
        'Brian',
        'Brody',
        'Brogan',
        'Bruno',
        'Brutus',
        'Buck',
        'Calhoun',
        'Callum',
        'Campbell',
        'Candra',
        'Carlos',
        'Carter',
        'Chandler',
        'Charles',
        'Charlie',
        'Cheng',
        'Chris',
        'Christian',
        'Claude',
        'Clayton',
        'Clover',
        'Cluny',
        'Coinin',
        'Colby',
        'Cole',
        'Colin',
        'Collin',
        'Colton',
        'Conan',
        'Conner',
        'Connor',
        'Corey',
        'Coyote',
        'Cuetlachtli',
        'Dagger',
        'Dalton',
        'Dane',
        'Daniel',
        'Darren',
        'Dasha',
        'Davey',
        'David',
        'Dawn',
        'De Luca',
        'Decker',
        'Delmor',
        'Dennis',
        'Desmond',
        'Diego',
        'Dolph',
        'Donovan',
        'Douglas',
        'Doyle',
        'Draven',
        'Duffy',
        'Duncan',
        'Dunstan',
        'Dylan',
        'Elias',
        'Elliot',
        'Embry',
        'Enid',
        'Eric',
        'Ernest',
        'Errol',
        'Evan',
        'Faelan',
        'Faith',
        'Falcon',
        'Faolan',
        'Farrar',
        'Fausto',
        'Fay',
        'Federico',
        'Felix',
        'Fenrisulfr',
        'Fenrisulfur',
        'Fernard',
        'Fillin',
        'Forrester',
        'Frances',
        'Francisco',
        'Frank',
        'Franklin',
        'Fred',
        'Frederick',
        'Frederico',
        'Fynn',
        'Gareth',
        'Garnet',
        'Gayle',
        'George',
        'Gerwulf',
        'Gilbert',
        'Gillian',
        'Gilroy',
        'Glen',
        'Gordon',
        'Grace',
        'Grant',
        'Gregor',
        'Grey',
        'Grogan',
        'Gus',
        'Hades',
        'Hamil',
        'Hanklin',
        'Hartwell',
        'Hawes',
        'Heath',
        'Heller',
        'Hemming',
        'Hiro',
        'Hogan',
        'Hook',
        'Horace',
        'Hoshi',
        'Hrodulf',
        'Hrodwulf',
        'Hrolf',
        'Hrolfr',
        'Hugh',
        'Hunter',
        'Hyde',
        'Ian',
        'Ingolf',
        'Ingolfr',
        'Irving',
        'Isaac',
        'Ismael',
        'Ivailo',
        'Ivan',
        'Ivaylo',
        'Jack',
        'Jackal',
        'Jacob',
        'Jamil',
        'Jarom',
        'Jasmine',
        'Jason',
        'Javier',
        'Jay',
        'Jecht',
        'Jeremiah',
        'Jericho',
        'Jett',
        'Jim',
        'Jimmy',
        'Jimothy',
        'Jiro',
        'John',
        'Johnson',
        'Jon',
        'Jones',
        'Joseph',
        'Josiah',
        'Kai',
        'Kenyon',
        'Kevin',
        'Kieran',
        'Kira',
        'Koray',
        'Kurt',
        'Kyle',
        'Landon',
        'Lawrence',
        'Lawson',
        'Leo',
        'Liam',
        'Lincoln',
        'Liulfr',
        'Lobo',
        'Lonan',
        'Lope',
        'Lothian',
        'Loup',
        'Louvel',
        'Lovel',
        'Lovell',
        'Lowell',
        'Lucas',
        'Lucian',
        'Luis',
        'Luka',
        'Lupin',
        'Lupus',
        'Lycaon',
        'Lycurgus',
        'Lykaon',
        'MacLaren',
        'Mace',
        'Mackie',
        'Maclean',
        'Malcom',
        'Mano',
        'Marc',
        'Marcel',
        'Marcus',
        'Margeuse',
        'Marrok',
        'Mason',
        'Matthew',
        'Maynord',
        'McCoy',
        'Mei',
        'Merle',
        'Michael',
        'Moe',
        'Montego',
        'Morgan',
        'Morris',
        'Mort',
        'Morten',
        'Nathan',
        'Nicholas',
        'Nico',
        'Nigel',
        'Nolan',
        'Orkney',
        'Otsoa',
        'Otsoko',
        'Pablo',
        'Paul',
        'Pavel',
        'Penn',
        'Pennington',
        'Peony',
        'Percival',
        'Persephone',
        'Pete',
        'Phelan',
        'Philip',
        'Pierce',
        'Preston',
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
        'Raul',
        'Raulf',
        'Ray',
        'Reade',
        'Red',
        'Reddas',
        'Reed',
        'Remus',
        'Richard',
        'Rico',
        'Riddick',
        'Rob',
        'Robert',
        'Robin',
        'Rocky',
        'Rodolf',
        'Rodolfo',
        'Rodolph',
        'Roffe',
        'Roger',
        'Rolf',
        'Rollo',
        'Ronan',
        'Roth',
        'Roul',
        'Roy',
        'Roz',
        'Rudi',
        'Rudolf',
        'Rudolph',
        'Rudolphus',
        'Rudy',
        'Ruud',
        'Ryan',
        'Saku',
        'Sam',
        'Sandulf',
        'Sawyer',
        'Seff',
        'Seth',
        'Shane',
        'Shaun',
        'Shaw',
        'Shay',
        'Sheng',
        'Simon',
        'Smith',
        'Stephen',
        'Steven',
        'Stewart',
        'Subodh',
        'Sullivan',
        'Sven',
        'Terri',
        'Thad',
        'Theo',
        'Tibald',
        'Tony',
        'Troy',
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
        'Varg',
        'Velvel',
        'Victor',
        'Vlad',
        'Vossler',
        'Vuk',
        'Vukasin',
        'Wallace',
        'Walter',
        'Ward',
        'Wedge',
        'Welch',
        'Weldon',
        'Wench',
        'Will',
        'William',
        'Wolf',
        'Wolfe',
        'Wolffang',
        'Wolfgang',
        'Wolfgrimm',
        'Wolfgrim',
        'Wolfram',
        'Wulfric',
        'Xavier',
        'York',
        'Yuri',
        'Zeeb',
        'Zeff',
        'Zeus',
        'Zev',
        'Harland',
        'Barrett',
        'Gifford',
        'Colton',
        'Gavner',
        'Laurent',
        'Konrad',
        'Conrad',
        'Howley',
        'Herrick',
        'Kear',
        'Rusty',
        'Balrog',
        'Belmont',
        'Deegon',
        'Geegagis',
        'Mebeth',
        'Bosch',
        'Rasso',
        'Cerberus',
        'Dirge',
        'Flint',
        'Flinch',
        'Finch',
        'Ershin',
        'Garr',
        'Zog',
        'Karn',
        'Stein',
        'Kellam',
        'Virion',
        'Inigo',
        'Owain',
        'Gerome',
        'Ike',
        'Ivan',
        'Ian',
        'Greil',
        'Oscar',
        'Oskar',
        'Boyd',
        'Marth',
        'Rhys',
        'Rolf',
        'Gatrie',
        'Volke',
        'Jaggar',
        'Devdan',
        'Mordecai',
        'Ranulf',
        'Ashnard',
        'Caineghis',
        'Tibarn',
        'Tauroneo',
        'Tormod',
        'Haar',
        'Nealuchi',
        'Kurthnaga',
        'Pelleas',
        'Skrimir',
        'Gharnef',
        'Merric',
        'Ogma',
        'Camus',
        'Ewan',
        'Seth',
        'Ross',
        'Joshua',
        'Ephraim',
        'Voss',
        'Vossler',
        'Graham',
        'Abram',
        'Abraham',
        'Abe',
        'Hans',
        'Milligan',
        'Driscoll',
        'Willas',
        'Ralph',
        'Grieg',
        'Gregorio',
        'Alder',
        'Weiss',
        'Royd',
        'Gothmog',
        'Gollum',
        'Thrain',
        'Thorin',
        'Wulfrun',
        'Felgrom',
        'Kodan',
        'Larc',
        'Niccolo',
        'Groose',
        'Gaepora',
        'Ghirahim',
        'Ganon',
        'Ganondorf',
    ];
    const nm2 = [
        'Alanis',
        'Anabelle',
        'Anita',
        'Annallee',
        'Anne',
        'Barbara',
        'Belle',
        'Carrie',
        'Chris',
        'Deborah',
        'Eilie',
        'Elaine',
        'Elenor',
        'Elza',
        'Ema',
        'Emily',
        'Estella',
        'Etienne',
        'Flare',
        'Hanna',
        'Hilda',
        'Jeane',
        'Karen',
        'Kathy',
        'Lorelai',
        'Luce',
        'Lucia',
        'Lulu',
        'Martha',
        'Meg',
        'Mel',
        'Millie',
        'Nina',
        'Pilika',
        'Queen',
        'Raura',
        'Rina',
        'Sarah',
        'Shiba',
        'Sierra',
        'Valeria',
        'Viki',
        'Lathilda',
        'Diadora',
        'Savina',
        'Moana',
        'Rufa',
        'Resno',
        'Lycia',
        'Maybelle',
        'Selen',
        'Nelis',
        'Zunda',
        'Carletta',
        'Patrina',
        'Samara',
        'Bathilda',
        'Theola',
        'Sarina',
        'Glennis',
        'Glenda',
        'Glinda',
        'Daria',
        'Darla',
        'Belvina',
        'Jacqueline',
        'Josphine',
        'Gwenna',
        'Rosetta',
        'Tatiana',
        'Katharina',
        'Dayle',
        'Wynona',
        'Ramonita',
        'Keena',
        'Katreena',
        'Montenegro',
        'Delinda',
        'Sybil',
        'Paige',
        'Saige',
        'Ginger',
        'La Rue',
        'Rue',
        'Harley',
        'Lashley',
        'Tantra',
        'Ursula',
        'Sully',
        'Lucina',
        'Severa',
        'Noira',
        'Tharja',
        'Petrine',
        'Cellica',
        'Lyndis',
        'Amelia',
        'Eirika',
        'Titania',
        'Minerva',
        'Linde',
        'Mizette',
        'Jora',
        'Majora',
        'Anju',
        'Kafei',
        'Parella',
        'Sheik',
        'Tetra',
        'Abby',
        'Abe',
        'Acantha',
        'Adela',
        'Adelina',
        'Adora',
        'Ady',
        'Agatha',
        'Aldith',
        'Aldusa',
        'Alexandra',
        'Alice',
        'Alina',
        'Amanda',
        'Amethyst',
        'Amity',
        'Amoret',
        'Angel',
        'Ansel',
        'Arcadio',
        'Ariadne',
        'Aster',
        'Aura',
        'Avice',
        'Azura',
        'Baize',
        'Barbara',
        'Basilea',
        'Beatrice',
        'Bela',
        'Bellatrix',
        'Bess',
        'Betsy',
        'Blake',
        'Bonnie',
        'Bowen',
        'Brandy',
        'Bree',
        'Bridget',
        'Brooke',
        'Bruna',
        'Callum',
        'Camden',
        'Camilla',
        'Candra',
        'Carey',
        'Carline',
        'Carrie',
        'Cassandra',
        'Cecil',
        'Celestria',
        'Celina',
        'Charlie',
        'Charna',
        'Chloe',
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
        'Cybil',
        'Dalrymple',
        'Dane',
        'Danielle',
        'Darcy',
        'Dasha',
        'Dawn',
        'Deidra',
        'Delaney',
        'Dora',
        'Duffy',
        'Earlene',
        'Ebony',
        'Edith',
        'Edwina',
        'Elaine',
        'Elena',
        'Elizabeth',
        'Ember',
        'Emily',
        'Emma',
        'Enid',
        'Enya',
        'Eris',
        'Errol',
        'Estrilda',
        'Eunice',
        'Eva',
        'Faith',
        'Fay',
        'Fina',
        'Fiona',
        'Fynn',
        'Garnet',
        'Gayle',
        'Gillian',
        'Golda',
        'Grace',
        'Grecia',
        'Gundred',
        'Gunnora',
        'Gwen',
        'Gwench',
        'Hartwell',
        'Haunild',
        'Heath',
        'Heather',
        'Helen',
        'Helewise',
        'Hilda',
        'Holly',
        'Hook',
        'Hope',
        'Ida',
        'Idonea',
        'Ilona',
        'Ilya',
        'Isobel',
        'Jane',
        'Janey',
        'Janice',
        'Jasmine',
        'Jay',
        'Jean',
        'Jena',
        'Jennete',
        'Jennifer',
        'Jessica',
        'Jinelle',
        'Johanna',
        'Jones',
        'Jose',
        'Josiah',
        'Jude',
        'Juliana',
        'June',
        'Kai',
        'Kali',
        'Kari',
        'Kassidy',
        'Katelyn',
        'Kathleen',
        'Kathryn',
        'Katie',
        'Kerry',
        'Kiera',
        'Kira',
        'Kitty',
        'Kyley',
        'Lacy',
        'Lass',
        'Layla',
        'Leah',
        'Leslie',
        'Lettice',
        'Finnula',
        'Felita',
        'Jacqui',
        'Halley',
        'Helena',
        'Hellen',
        'Basia',
        'Ertha',
        'Brett',
        'Caitrin',
        'Ricca',
        'Helga',
        'Refia',
        'Liecia',
        'Lillian',
        'Linota',
        'Lisa',
        'Liz',
        'Lorelei',
        'Lorna',
        'Luana',
        'Lucretia',
        'Luna',
        'Lynn',
        'Maggie',
        'Malissa',
        'Margaret',
        'Maria',
        'Mary',
        'May',
        'Mazelina',
        'Meghan',
        'Mei',
        'Melania',
        'Melanie',
        'Mindy',
        'Morgan',
        'Morgana',
        'Morrigan',
        'Morticia',
        'Morwenna',
        'Nadine',
        'Narcissa',
        'Natasha',
        'Nathan',
        'Nesta',
        'Nia',
        'Nicky',
        'Nina',
        'Noreen',
        'Olga',
        'Opaline',
        'Ophelia',
        'Orkney',
        'Pavel',
        'Peggy',
        'Persephone',
        'Petra',
        'Phaedra',
        'Philippa',
        'Phoebe',
        'Priscilla',
        'Rachel',
        'Rain',
        'Raina',
        'Rashida',
        'Raven',
        'Rebekah',
        'Reyna',
        'Richolda',
        'Renena',
        'Robin',
        'Roesia',
        'Rona',
        'Rose',
        'Rowena',
        'Roy',
        'Rubella',
        'Ruby',
        'Rue',
        'Ruth',
        'Sabelina',
        'Sable',
        'Sadie',
        'Sandy',
        'Sarah',
        'Sawyer',
        'Sheila',
        'Shelly',
        'Sherie',
        'Sibyl',
        'Simone',
        'Sophia',
        'Steven',
        'Stewart',
        'Susannah',
        'Sylvie',
        'Tara',
        'Terri',
        'Theda',
        'Trisha',
        'Uma',
        'Valentine',
        'Valerie',
        'Victoria',
        'Vivian',
        'Whisper',
        'Wilhelmina',
        'Willow',
        'Wynne',
        'Xanthe',
        'Yolanda',
        'Nereza',
        'Senka',
        'Ilta',
        'Velvet',
        'Zephyr',
        'Aura',
        'Genevere',
        'Lirit',
        'Persephone',
        'Ashen',
        'Aura',
        'Mist',
        'Secret',
        'Scarlett',
        'Zeldalia',
        'Quistis',
        'Lulu',
        'Angeline',
        'Armenia',
        'Asema',
        'Aswang',
        'Aura',
        'Autumn',
        'Beatrix',
        'Belinda',
        'Belladonna',
        'Brie',
        'Bruxa',
        'Calamity',
        'Carmilla',
        'Carmina',
        'Cat',
        'Chalice',
        'Cherry',
        'Churel',
        'Cinder',
        'Clarita',
        'Crimson',
        'Cyan',
        'Damsel',
        'Dementia',
        'Demonia',
        'Diamanda',
        'Dream',
        'Ebony',
        'Echo',
        'Eleanore',
        'Elegia',
        'Elenor',
        'Elphina',
        'Emma',
        'Entropy',
        'Essence',
        'Eternity',
        'Fatima',
        'Floris',
        'Frita',
        'Garnet',
        'Gem',
        'Glimmer',
        'Gossamer',
        'Grimina',
        'Gwin',
        'Habitha',
        'Harley',
        'Harlot',
        'Hebkya',
        'Ilene',
        'Imeena',
        'Imperia',
        'Ivory',
        'Jayde',
        'Jezebel',
        'Jocelyn',
        'Juniper',
        'Kaige',
        'Kali',
        'Kallee',
        'Kandyl',
        'Karmin',
        'Katreena',
        'Katia',
        'Kindle',
        'Lace',
        'Lament',
        'Leeta',
        'Lilith',
        'Lillith',
        'Lithia',
        'Lorelei',
        'Lucia',
        'Lucretia',
        'Luna',
        'Lycia',
        'Magwina',
        'Maleficent',
        'Margorie',
        'Maxine',
        'Mayze',
        'Memory',
        'Mercy',
        'Mirage',
        'Misericordia',
        'Mist',
        'Moon',
        'Moonlight',
        'Morticia',
        'Mystery',
        'Narween',
        'Norway',
        'Nylora',
        'Oma',
        'Opal',
        'Ophelia',
        'Pamela',
        'Pandora',
        'Pearl',
        'Porcelain',
        'Princessa',
        'Quintessa',
        'Quota',
        'Qutie',
        'Rain',
        'Ramona',
        'Rapture',
        'Riley',
        'Rosary',
        'Rubia',
        'Sable',
        'Samantha',
        'Satin',
        'Scarlet',
        'Seraphim',
        'Severina',
        'Siouxsie',
        'Strawberri',
        'Suspiria',
        'Sybil',
        'Tabitha',
        'Theda',
        'Thistle',
        'Trik',
        'Twilight',
        'Ukara',
        'Ulsa',
        'Umona',
        'Upiorzyca',
        'Velvet',
        'Veronika',
        'Vervain',
        'Viktoria',
        'Violet',
        'Whisper',
        'Willow',
        'Winona',
        'Wish',
        'Wysteria',
        'Xenia',
        'Xoxo',
        'Xyla',
        'Yellow',
        'Yoko',
        'Yureka',
        'Zaphara',
        'Zen',
        'Zillah',
        'Zima',
        'Zofia',
        'Zolona',
        'Hortensia',
        'Ursula',
        'Sully',
        'Severa',
        'Noira',
        'Cellica',
        'Roshia',
        'Lusha',
        'Lyndis',
        'Marcia',
        'Almedha',
        'Ashera',
        'Caeda',
        'Amelia',
        'Mizette',
        'Romani',
    ];
    const nm3 = [
        'Aranas',
        'Hayward',
        'Starbeeze',
        'Crowley',
        'Nightwind',
        'Hammond',
        'Whitewall',
        'Armstead',
        'Greymane',
        'Wahl',
        'Darkwalker',
        'Derrington',
        'Chesterhill',
        'Atherton',
        'Walthorn',
        'Mollor',
        'Buckley',
        'Allen',
        'Murray',
        'Sykes',
        'Oxworth',
        'Arnes',
        'Abram',
        'Acton',
        'Addington',
        'Adlam',
        'Ainsworth',
        'Alby',
        'Alden',
        'Allerton',
        'Alston',
        'Altham',
        'Alvingham',
        'Anderton',
        'Appleton',
        'Asheton',
        'Ashley',
        'Ashton',
        'Astley',
        'Atherton',
        'Atterton',
        'Barclay',
        'Barlow',
        'Barney',
        'Barrie',
        'Barton',
        'Beasant',
        'Beckwith',
        'Benson',
        'Bentham',
        'Bentley',
        'Berkeley',
        'Beverly',
        'Bing',
        'Birkenhead',
        'Blackwood',
        'Blakemore',
        'Blankley',
        'Blythe',
        'Bourne',
        'Bradford',
        'Bradley',
        'Bradly',
        'Bradshaw',
        'Brady',
        'Brandon',
        'Branson',
        'Braxton',
        'Breeden',
        'Brent',
        'Bristol',
        'Brooks',
        'Brown',
        'Browning',
        'Brownrigg',
        'Buckley',
        'Bunce',
        'Burbridge',
        'Burlingame',
        'Burton',
        'Bush',
        'Byron',
        'Camden',
        'Carlisle',
        'Carlton',
        'Carlyle',
        'Charlton',
        'Chatham',
        'Cheek',
        'Chester',
        'Cholmondeley',
        'Churchill',
        'Clapham',
        'Clare',
        'Claridge',
        'Clark',
        'Clayden',
        'Clayton',
        'Clemons',
        'Clifford',
        'Clifton',
        'Clinton',
        'Clive',
        'Colby',
        'Colton',
        'Compton',
        'Coombs',
        'Cooper',
        'Copeland',
        'Cotton',
        'Crawford',
        'Crompton',
        'Cromwell',
        'Crowder',
        'Crutchley',
        'Currington',
        'Dalton',
        'Darby',
        'Davenport',
        'Dawson',
        'Dayton',
        'Deighton',
        'Denholm',
        'Digby',
        'Dryden',
        'Dudley',
        'Duke',
        'Dukes',
        'Earle',
        'Eastaughffe',
        'Eastoft',
        'Elton',
        'Emsworth',
        'England',
        'Farnham',
        'Fawcett',
        'Fisc',
        'Fiske',
        'Fletcher',
        'Foy',
        'Fulton',
        'Gale',
        'Garfield',
        'Garrick',
        'Garside',
        'Garthside',
        'Gartside',
        'Gladstone',
        'Godwin',
        'Goodwin',
        'Graeme',
        'Graham',
        'Gresham',
        'Hackney',
        'Hailey',
        'Hale',
        'Haley',
        'Hallewell',
        'Hamet',
        'Hamilton',
        'Hammett',
        'Hampton',
        'Harding',
        'Harley',
        'Harrington',
        'Harrison',
        'Hartford',
        'Hastings',
        'Hayden',
        'Hayes',
        'Hayhurst',
        'Hayley',
        'Helton',
        'Hildom',
        'Holt',
        'Holton',
        'Home',
        'Hornsby',
        'Huckabee',
        'Huxley',
        'Johnson',
        'Keats',
        'Kelsey',
        'Kendal',
        'Kendall',
        'Kent',
        'Kimberley',
        'Kimberly',
        'Kirby',
        'Knotley',
        'Knottley',
        'Lancaster',
        'Landon',
        'Langdon',
        'Langley',
        'Law',
        'Lea',
        'Lee',
        'Leighton',
        'Lester',
        'Lincoln',
        'Lindsay',
        'Lindsey',
        'Livingstone',
        'Luxford',
        'Mabbott',
        'Marlowe',
        'Melling',
        'Melton',
        'Mendenhall',
        'Merton',
        'Middleton',
        'Mildenhall',
        'Milton',
        'Mitchell',
        'Morley',
        'Morton',
        'Myerscough',
        'Nash',
        'Netley',
        'Newberry',
        'Newbery',
        'Newbury',
        'Nibley',
        'Noonan',
        'Norton',
        'Notleigh',
        'Notley',
        'Nottley',
        'Nunnally',
        'Nutlea',
        'Nutlee',
        'Oakley',
        'Ogden',
        'Oldham',
        'Outerbridge',
        'Paddle',
        'Paddley',
        'Padley',
        'Payton',
        'Peddle',
        'Penney',
        'Penny',
        'Perry',
        'Peyton',
        'Pickering',
        'Pinkerton',
        'Prescott',
        'Presley',
        'Preston',
        'Ramsay',
        'Ramsey',
        'Read',
        'Reed',
        'Reeve',
        'Reeves',
        'Reid',
        'Remington',
        'Richmond',
        'Ridley',
        'Riley',
        'Rischer',
        'Rivers',
        'Rodney',
        'Roscoe',
        'Rowley',
        'Royal',
        'Royston',
        'Rudge',
        'Rudges',
        'Rutherford',
        'Rutland',
        'Rylan',
        'Sagar',
        'Sampson',
        'Sharman',
        'Shearman',
        'Shelby',
        'Sheldon',
        'Shelley',
        'Shelly',
        'Sherman',
        'Sherwood',
        'Shirley',
        'Shurman',
        'Sidney',
        'Smit',
        'Smith',
        'Smithe',
        'Smither',
        'Smithers',
        'Smithies',
        'Smithy',
        'Smyth',
        'Smythe',
        'Snape',
        'Snowdon',
        'Soames',
        'Southey',
        'Spalding',
        'Spaulding',
        'Spooner',
        'Springfield',
        'Stafford',
        'Stamper',
        'Stampes',
        'Stanford',
        'Stanley',
        'Stansfield',
        'Stanton',
        'Stevens',
        'Stevenson',
        'Stonebridge',
        'Stratford',
        'Sutherland',
        'Sutton',
        'Swail',
        'Swailes',
        'Swale',
        'Swales',
        'Sweat',
        'Sweet',
        'Sweete',
        'Swet',
        'Swett',
        'Sydney',
        'Tattersall',
        'Thackeray',
        'Thorne',
        'Thornton',
        'Thorp',
        'Thorpe',
        'Tindall',
        'Torp',
        'Townend',
        'Townsend',
        'Trollope',
        'Twynam',
        'Tyndall',
        'Upton',
        'Ward',
        'Watt',
        'Webb',
        'Whatley',
        'Wheatleigh',
        'Wheatley',
        'Whiteley',
        'Whitley',
        'Whitney',
        'Williams',
        'Wither',
        'Withers',
        'Wyther',
        'Yardley',
        'Yeardley',
        'Karayan',
        'Balo',
        'Ethel',
        'Thyme',
        'Vesh',
        'Orfeo',
        'Acheron',
        'Arch',
        'Ark',
        'Morren',
        'Morden',
        'Gloom',
        'Loom',
        'Mace',
        'Lynx',
        'Synth',
        'Acheron',
        'Adam',
        'Alabaster',
        'Amaranth',
        'Antone',
        'Archer',
        'Argent',
        'Asema',
        'Ashes',
        'Bartholomew',
        'Bartram',
        'Blade',
        'Brink',
        'Bryce',
        'Carmine',
        'Chalice',
        'Chandler',
        'Chaos',
        'Charles',
        'Cloven',
        'Damien',
        'Damon',
        'Dante',
        'Darth',
        'Demien',
        'Dhampir',
        'Drachen',
        'Draegan',
        'Drake',
        'Drakkar',
        'Draven',
        'Dred',
        'Edge',
        'Eldritch',
        'Emmit',
        'Enigma',
        'Eulisses',
        'Everit',
        'Fark',
        'Forrest',
        'Frederik',
        'Fromir',
        'Gabriel',
        'Gastly',
        'Glacier',
        'Gnash',
        'Gotham',
        'Grail',
        'Granger',
        'Granite',
        'Grendel',
        'Grim',
        'Hades',
        'Hamlet',
        'Hanzel',
        'Heinrik',
        'Hitch',
        'Hunter',
        'Incubus',
        'Isaac',
        'Isaiah',
        'Jasper',
        'Jaymes',
        'Jeronimo',
        'Jett',
        'Jinx',
        'Karver',
        'Keetes',
        'Klark',
        'Labyrinth',
        'Layre',
        'Lazarus',
        'Leviathan',
        'Lore',
        'Louis',
        'Lucifer',
        'Lucius',
        'Luke',
        'Lynk',
        'Maxim',
        'Mitch',
        'Mitrik',
        'Morrow',
        'Nayte',
        'Nebula',
        'Nicholai',
        'Nightshade',
        'Noire',
        'Norman',
        'Obsidian',
        'Omar',
        'Omen',
        'Otto',
        'Panther',
        'Parch',
        'Parrish',
        'Payne',
        'Peregrine',
        'Petrik',
        'Prince',
        'Pritchard',
        'Prysm',
        'Quint',
        'Quway',
        'Quye',
        'Ragnor',
        'Rakshasas',
        'Rave',
        'Raven',
        'Redcap',
        'Requiem',
        'Richard',
        'Rogue',
        'Romulus',
        'Rumlar',
        'Sabre',
        'Salem',
        'Samuel',
        'Satan',
        'Savant',
        'Sax',
        'Shadow',
        'Shayde',
        'Smoky',
        'Steele',
        'Stone',
        'Storm',
        'Stryker',
        'Tack',
        'Talon',
        'Tempest',
        'Thorne',
        'Thunder',
        'Tristan',
        'Trixter',
        'Uberto',
        'Ulrik',
        'Umbri',
        'Upir',
        'Vail',
        'Valhalla',
        'Vance',
        'Victor',
        'Viktor',
        'Vome',
        'Puck',
        'Loki',
        'Zeus',
        'Hades',
        'Aries',
        'Thor',
        'Zelroth',
        'Zeddicus',
        'Zul',
        'Zorander',
        'Godfrey',
        'Xander',
        'Zander',
        'Zayne',
        'Zayn',
        'Zaine',
        'Zain',
        'Alistair',
        'Crowley',
        'Holmes',
        'Sherlock',
        'Theodore',
        'Theodor',
        'Theodoric',
        'Salvodore',
        'Salvodor',
        'Salvotore',
        'Salvotor',
        'Hogan',
        'Grissom',
        'Eldon',
        'Cidolfus',
        'Rassler',
        'Vaughn',
        'Rexx',
        'Vexx',
        'Lexx',
        'Lucifer',
        'Luther',
        'Lux',
        'Belzebob',
        'Balthier',
        'Larsa',
        'Bane',
        'Reks',
        'Vossler',
        'Laguna',
        'Finch',
        'Fane',
        'Gabranth',
        'Drace',
        'Vayne',
        'Law',
        'Griffin',
        'Arlin',
        'Butler',
        'Artemis',
        'Link',
        'Gail',
        'Lynk',
        'Irvine',
        'Seifer',
        'Zell',
        'Mathian',
        'Auron',
        'Tidus',
        'Firion',
        'Arc',
        'Seymour',
        'Amarant',
        'Wendell',
        'Winmore',
        'Wolf',
        'Wright',
        'Xander',
        'Xensor',
        'Xix',
        'Yao',
        'Ymo',
        'Yulis',
        'Zen',
        'Zeph',
        'Zero',
        'Zindo',
        'Zulu',
        'Vexacion',
        'Kaiser',
        'Karn',
        'Scias',
        'Sisk',
        'Chrom',
        'Kellam',
        'Virion',
        'Inigo',
        'Ike',
        'Marth',
        'Rhys',
        'Soren',
        'Kieran',
        'Reyson',
        'Devdan',
        'Camus',
        'Nealuchi',
        'Sephiran',
        'Zelgius',
        'Seth',
        'Ross',
        'Joshua',
        'Ephraim',
        'Voss',
        'Vossler',
        'Lincoln',
        'Abraham',
        'Driscoll',
        'Alder',
        'Weiss',
        'Larc',
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
