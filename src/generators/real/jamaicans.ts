import { sample } from 'lodash';

export default function jamaicans() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Adric',
        'Algernon',
        'Alphonse',
        'Alwan',
        'Amadom',
        'Aman',
        'Amani',
        'Amos',
        'Andre',
        'Andrew',
        'Anthone',
        'Antiere',
        'Aray',
        'Arcus',
        'Autry',
        'Azibo',
        'Baron',
        'Barrington',
        'Bartt',
        'Benton',
        'Booker',
        'Brendon',
        'Canard',
        'Carnell',
        'Casim',
        'Cavin',
        'Clarence',
        'Clayton',
        'Cleavant',
        'Cleavon',
        'Clement',
        'Clendon',
        'Clifton',
        'Clinton',
        'Cody',
        'Connor',
        'Cordell',
        'Corey',
        'Cornell',
        'Daevin',
        'Daevon',
        'Dajon',
        'Dajuan',
        'Dallan',
        'Dallen',
        'Dalton',
        'Damarco',
        'Damon',
        'Damone',
        'Dandrae',
        'Dandras',
        'Dangelo',
        'Daniel',
        'Daquain',
        'Darel',
        'Darell',
        'Darik',
        'Darius',
        'Darnay',
        'Darnel',
        'Darrian',
        'Daryn',
        'Dauntay',
        'David',
        'Davion',
        'Dayton',
        'Deandrae',
        'Deaven',
        'Dedrian',
        'Deelon',
        'Dejohn',
        'Dell',
        'Delmar',
        'Delon',
        'Delonn',
        'Delroy',
        'Demaine',
        'Demery',
        'Demonde',
        'Dennard',
        'Denzel',
        'Deon',
        'Deron',
        'Derrick',
        'Deshane',
        'Devain',
        'Deval',
        'Devan',
        'Deven',
        'Devondre',
        'Dewan',
        'Diron',
        'Dixon',
        'Dominic',
        'Donall',
        'Dontrell',
        'Duane',
        'Duron',
        'Duval',
        'Dylan',
        'Eason',
        'Ellis',
        'Elton',
        'Emmet',
        'Ennis',
        'Ernard',
        'Ervan',
        'Ethan',
        'Evander',
        'Ewan',
        'Fayard',
        'Ferric',
        'Finlay',
        'Finley',
        'Garfield',
        'Garlan',
        'Garon',
        'George',
        'Gerain',
        'Geroy',
        'Glover',
        'Godrell',
        'Grant',
        'Guyton',
        'Harvey',
        'Isaac',
        'Isiah',
        'Jacob',
        'Jamaall',
        'Jamaar',
        'Jamal',
        'Jamar',
        'Jamarco',
        'Jamarr',
        'Jamel',
        'Jamero',
        'James',
        'Jamie',
        'Janard',
        'Janile',
        'Jaquin',
        'Jared',
        'Jarek',
        'Jarel',
        'Jarell',
        'Jaric',
        'Jarmarr',
        'Jarrick',
        'Jason',
        'Jaumar',
        'Javan',
        'Jay',
        'Jemarcus',
        'Jenell',
        'Jerom',
        'Jeron',
        'Jimar',
        'Jimarcus',
        'Jorell',
        'Jovan',
        'Kai',
        'Kamau',
        'Karam',
        'Karlus',
        'Kasen',
        'Kaven',
        'Kaynard',
        'Keandre',
        'Keenan',
        'Kenard',
        'Kendell',
        'Kendrick',
        'Kenton',
        'Keon',
        'Keyair',
        'Keyon',
        'Kian',
        'Kieran',
        'Kimbel',
        'Kordal',
        'Kordell',
        'Kyle',
        'Lamar',
        'Lamark',
        'Lamarr',
        'Lamont',
        'Lance',
        'Laran',
        'Larent',
        'Larice',
        'Larmar',
        'Laron',
        'Lason',
        'Lavan',
        'Lavernus',
        'Ledell',
        'Lemar',
        'Lemarr',
        'Lemuel',
        'Leron',
        'Levon',
        'Liam',
        'Lincoln',
        'Liron',
        'Lovell',
        'Luca',
        'Lucas',
        'Luke',
        'Luther',
        'Lyron',
        'Malik',
        'Mancel',
        'Marcus',
        'Maron',
        'Marques',
        'Martel',
        'Martin',
        'Marvin',
        'Mason',
        'Max',
        'Michael',
        'Mikal',
        'Montel',
        'Montell',
        'Nelson',
        'Noah',
        'Odell',
        'Oliver',
        'Owen',
        'Radd',
        'Ramell',
        'Randall',
        'Rashan',
        'Rashard',
        'Raymone',
        'Raynard',
        'Reggie',
        'Reggis',
        'Reshay',
        'Rhashan',
        'Rodell',
        'Rodney',
        'Romon',
        'Romone',
        'Romy',
        'Rondall',
        'Rondy',
        'Samuel',
        'Santana',
        'Sayon',
        'Serek',
        'Shan',
        'Shandrel',
        'Shawnte',
        'Sheik',
        'Sherwin',
        'Sidell',
        'Simeon',
        'Smokey',
        'Spencer',
        'Talin',
        'Tameron',
        'Taye',
        'Taylan',
        'Taylor',
        'Terell',
        'Terris',
        'Thomas',
        'Tion',
        'Tom',
        'Travon',
        'Trayvon',
        'Trece',
        'Trejean',
        'Tremaine',
        'Trenton',
        'Treshaun',
        'Treven',
        'Trone',
        'Turell',
        'Tyjon',
        'Tyreck',
        'Tyree',
        'Tyreese',
        'Tyrek',
        'Tyrell',
        'Tyronne',
        'Tyrus',
        'Umar',
        'Wardell',
        'Wayan',
        'Wendell',
        'Wesley',
        'Wilburn',
        'William',
        'Winton',
    ];
    const nm2 = [
        'Abrianna',
        'Adelaide',
        'Aiesha',
        'Aimee',
        'Aleale',
        'Alicia',
        'Alisa',
        'Alisha',
        'Alisha',
        'Althea',
        'Amarika',
        'Amber',
        'Amelia',
        'Angelina',
        'Angelique',
        'Aurelia',
        'Ayana',
        'Breeon',
        'Breona',
        'Breonia',
        'Breyona',
        'Brianna',
        'Brie',
        'Briona',
        'Brione',
        'Brooke',
        'Bryah',
        'Cantrice',
        'Carsandra',
        'Caryne',
        'Cassandra',
        'Chantrelle',
        'Charlotte',
        'Chloe',
        'Chrystyna',
        'Cleona',
        'Corine',
        'Courtney',
        'Daloris',
        'Dana',
        'Danielle',
        'Dashay',
        'Davina',
        'Debara',
        'Deisha',
        'Delilah',
        'Desiree',
        'Desreta',
        'Destiny',
        'Devisha',
        'Dominique',
        'Dondrea',
        'Donna',
        'Dorsey',
        'Eleanor',
        'Eleasha',
        'Eleesha',
        'Elesha',
        'Elizabeth',
        'Ella',
        'Ellesha',
        'Elois',
        'Eloise',
        'Eve',
        'Evie',
        'Eyana',
        'Ezola',
        'Fajah',
        'Fawn',
        'Freya',
        'Gardenia',
        'Gelisa',
        'Georgia',
        'Georgina',
        'Grace',
        'Hosanna',
        'Isobel',
        'Jacinta',
        'Jacquie',
        'Jalissa',
        'Jamila',
        'Janeka',
        'Janice',
        'Jasmine',
        'Javina',
        'Jelan',
        'Jennifer',
        'Jessica',
        'Jocelyn',
        'Joelle',
        'Kalisa',
        'Kalise',
        'Kate',
        'Katherine',
        'Katie',
        'Kea',
        'Keandra',
        'Keisha',
        'Kina',
        'Kiyana',
        'Kolonda',
        'Koyana',
        'Laketta',
        'Lakitia',
        'Lakresha ',
        'Lakyta',
        'Lamesha',
        'Lameshia',
        'Lanecia',
        'Lara',
        'Lashaunta',
        'Lateia',
        'Lateica',
        'Laticia',
        'Latonya',
        'Latore',
        'Latoya',
        'Laura',
        'Lauren',
        'Leah',
        'Lecia',
        'Lela',
        'Leonda',
        'Lesia',
        'Libby',
        'Lily',
        'Machele',
        'Maisie',
        'Malene',
        'Marisha',
        'Maurita',
        'Melcia',
        'Melea',
        'Melissa',
        'Mia',
        'Millie',
        'Monette',
        'Mylandra',
        'Naomi',
        'Natalie',
        'Necie',
        'Nicole',
        'Nikkya',
        'Nyesha',
        'Olivia',
        'Ordena',
        'Ornella',
        'Paulina',
        'Quanesha',
        'Quanesia',
        'Quansha',
        'Queisha',
        'Raca',
        'Rachel',
        'Rakesha',
        'Ramerra',
        'Rasheba',
        'Rashona',
        'Rayhelle',
        'Redonna',
        'Renatta',
        'Renell',
        'Resaunna',
        'Roshawna',
        'Rosie',
        'Ruby',
        'Sakina',
        'Samantha',
        'Santianna',
        'Sarah',
        'Seanna',
        'Secoiya',
        'Serena',
        'Shakeia',
        'Shakeina',
        'Shakia',
        'Shakina',
        'Shalesia',
        'Shalonna',
        'Shamecca',
        'Shandee',
        'Shandrice',
        'Shaneta',
        'Shanise',
        'Shanish',
        'Shannel',
        'Shantair',
        'Shantaya',
        'Shantel',
        'Shantese',
        'Sharise',
        'Sharisha',
        'Sharonda',
        'Sharrita',
        'Shauna',
        'Shaundra',
        'Shekeia',
        'Shenice',
        'Sherece',
        'Sheree',
        'Shona',
        'Shonelle',
        'Shontal',
        'Shontaya',
        'Shontecia',
        'Siarah',
        'Tachell',
        'Taheisha',
        'Taisha',
        'Takecia',
        'Takeisha',
        'Takira',
        'Takola',
        'Talasia',
        'Taleisha',
        'Talicia',
        'Tameca',
        'Tamecia',
        'Tamila',
        'Tandi',
        'Tanesa',
        'Tanish',
        'Tany',
        'Tashaonda',
        'Tashelle',
        'Tashina',
        'Tasiya',
        'Tauni',
        'Tawanda',
        'Tawney',
        'Tawni',
        'Taye',
        'Tayshia',
        'Teana',
        'Teena',
        'Teja',
        'Teona',
        'Tia',
        'Tiana',
        'Tinecia',
        'Tinesha',
        'Tisha',
        'Tiyah',
        'Trae',
        'Tralena',
        'Travia',
        'Treina',
        'Tremelle',
        'Trina',
        'Trinika',
        'Trinique',
        'Tya',
        'Tyaishia',
        'Tye',
        'Tylena',
        'Tyneice',
        'Tyonna',
        'Tyshell',
        'Valeria',
        'Vantrice',
        'Velena',
        'Viera',
        'Vondra',
        'Wakeisha',
        'Wandalyn',
        'Yanika',
        'Yasmin',
        'Yevette',
        'Zara',
    ];
    const nm3 = [
        'Aguilar',
        'Alberga',
        'Alldred',
        'Allen',
        'Allerdyce',
        'Allman',
        'Alridge',
        'Alvarenga',
        'Alwood',
        'Anderson',
        'Archbold',
        'Armstrong',
        'Arnell',
        'Ascue',
        'Ashburn',
        'Ashworth',
        'Atchinson',
        'Atkins',
        'Atlay',
        'Austin',
        'Bailey',
        'Banlay',
        'Barnwell',
        'Barrett',
        'Barton',
        'Bathurst',
        'Battersby',
        'Beard',
        'Bechett',
        'Becquet',
        'Bedlow',
        'Bennett',
        'Bethune',
        'Bickerstaff',
        'Biggs',
        'Blechynden',
        'Blicknall',
        'Blitchindon',
        'Blundell',
        'Bogle',
        'Bonnett',
        'Bowes',
        'Boyns',
        'Branch',
        'Bravo',
        'Broad',
        'Broadbelt',
        'Brook',
        'Brough',
        'Brown',
        'Bullock',
        'Calder',
        'Campbell',
        'Carpenter',
        'Carvallio',
        'Cathcart',
        'Chaddock',
        'Champney',
        'Chaplain',
        'Christian',
        'Clarke',
        'Claypoole',
        'Clee',
        'Cleland',
        'Cockburn',
        'Cockley',
        'Comerford',
        'Conningham',
        'Constantine',
        'Coppell',
        'Cordova',
        'Coverdale',
        'Craddock',
        'Craskell',
        'Creighton',
        'Crombie',
        'Crosse',
        'Crymble',
        'Cuthbert',
        'Cyrus',
        'Dakers',
        'Daley',
        'Dalhouse',
        'Dallas',
        'Daly',
        'Darby',
        'Darcy',
        'Davenport',
        'Daveylder',
        'Davis',
        'DeCastillo',
        'Delmestrel',
        'Delpratt',
        'Demetres',
        'Demetries',
        'Denholm',
        'Dennie',
        'Dennis',
        'Desteruffine',
        'Develder',
        'Diamond',
        'Dias',
        'Dickons',
        'Dickson',
        'Dixon',
        'Doesebexonce',
        'Dougall',
        'Drinkwater',
        'Duany',
        'Duckenfield',
        'Duff',
        'Duffus',
        'Dugall',
        'Duhaney',
        'Eachern',
        'East',
        'Eaton',
        'Edwards',
        'Elizabeth',
        'Ellick',
        'Elliot',
        'Elliott',
        'Ellis',
        'Elough',
        'Eubank',
        'Eubanks',
        'Ewart',
        'Fagan',
        'Farmer',
        'Fennel',
        'Fennil',
        'Ferguson',
        'Fertado',
        'Fielding',
        'Finalyson',
        'Finn',
        'Fitch',
        'Flake',
        'Fleming',
        'Fooard',
        'Foot',
        'Ford',
        'Forrest',
        'Francis',
        'Fraser',
        'Freeman',
        'French',
        'Fuller',
        'Fullwood',
        'Furnell',
        'Furtado',
        'Gale',
        'Garbrand',
        'Garland',
        'Garriques',
        'Gatfield',
        'Gayle',
        'Geddes',
        'Gibbs',
        'Gilbert',
        'Gimmet',
        'Glanville',
        'Goffe',
        'Golding',
        'Golloway',
        'Gordan',
        'Gordon',
        'Goudie',
        'Graham',
        'Grant',
        'Graves',
        'Gray',
        'Green',
        'Gregory',
        'Grey',
        'Griffin',
        'Gulian',
        'Guttiame',
        'Gutzmer',
        'Guy',
        'Guyot',
        'Hall',
        'Halstead',
        'Hamilton',
        'Handmer',
        'Harding',
        'Hardy',
        'Hargrave',
        'Harris',
        'Hart',
        'Hayes',
        'Hayle',
        'Hayles',
        'Heineman',
        'Helmsley',
        'Henlay',
        'Henriques',
        'Henry',
        'Herbert',
        'Herring',
        'Higgins',
        'Hill',
        'Hindmarsh',
        'Hinton',
        'Hitchman',
        'Hogsflesh',
        'Holbrooke',
        'Holcombe',
        'Hornifer',
        'Howgate',
        'Hoy',
        'Huet',
        'Huffpove',
        'Hughes',
        'Humphrey',
        'Hutchinson',
        'Hyde',
        'Ibbott',
        'Ingles',
        'Inglish',
        'Ingram',
        'Innes',
        'Innis',
        'Inolt',
        'Isaacs',
        'Jackson',
        'Jacobs',
        'Jacobson',
        'Jacques',
        'Jaffray',
        'James',
        'Jameson',
        'Jarrett',
        'Jenkins',
        'Jeston',
        'Johnson',
        'Joliff',
        'Jones',
        'Jopp',
        'Jordan',
        'Joy',
        'Jumps',
        'Justice',
        'Keiling',
        'Keir',
        'Kellpatrick',
        'Kelly',
        'Kenda',
        'Kerby',
        'Kildare',
        'Killeman',
        'Kincaid',
        'King',
        'Kingham',
        'Kinghorn',
        'Kinkead',
        'Kirby',
        'Kirvan',
        'Knott',
        'Knowles',
        'Kuckham',
        'Lacampaigne',
        'Lackie',
        'Lacruse',
        'Lafitte',
        'Lague',
        'Laird',
        'Lamb',
        'Lanorgan',
        'Lassels',
        'Latimer',
        'Lawes',
        'Lawford',
        'Lawless',
        'Lawrence',
        'Ledwick',
        'Lee',
        'Legrasse',
        'Lekie',
        'Lendall',
        'Leveer',
        'Levi',
        'Levy',
        'Lewelling',
        'Lewis',
        'Lindo',
        'Littlejohn',
        'Lively',
        'Livingstone',
        'Llewellyn',
        'Lloyd',
        'Lockyer',
        'Lodge',
        'Lombard',
        'Long',
        'Lord',
        'Loughton',
        'Lovemore',
        'Ludlow',
        'Lumby',
        'Lumsden',
        'Luskie',
        'Lynch',
        'Lytton',
        'Maddix',
        'Maidment',
        'Mais',
        'Maitland',
        'Malabre',
        'Malcolm',
        'Mann',
        'Manning',
        'Marks',
        'Marriott',
        'Marsden',
        'Martin',
        'Martinborough',
        'Martyn',
        'Mason',
        'Matthews',
        'May',
        'Maydlow',
        'Maydwell',
        'Mayne',
        'McCarthey',
        'McClean',
        'McCormack',
        'McCullock',
        'McGhie',
        'McGill',
        'McGlashan',
        'McGlaskie',
        'McKenzie',
        'McKnight',
        'McLachlan',
        'McLarty',
        'McLeod',
        'McNight',
        'McQueen',
        'Medwinter',
        'Mendes',
        'Merchant',
        'Metcalfe',
        'Metzger',
        'Middlemost',
        'Middlesex',
        'Midwinter',
        'Milburn',
        'Miller',
        'Millward',
        'Milner',
        'Miloyd',
        'Minot',
        'Mitchelson',
        'Mixon',
        'Montgomery',
        'Moody',
        'Moon',
        'Moran',
        'Morant',
        'Morgan',
        'Morley',
        'Morrice',
        'Morris',
        'Mortimore',
        'Mumbee',
        'Munro',
        'Murdoch',
        'Mure',
        'Murrell',
        'Mutklin',
        'Nailer',
        'Napier',
        'Natty',
        'Neaves',
        'Nedica',
        'Neil',
        'Nelin',
        'Nelson',
        'Nembhard',
        'Nesbitt',
        'Netherwood',
        'Newell',
        'Newhouse',
        'Nibbs',
        'Nicholls',
        'Nicholson',
        'Nixon',
        'Norott',
        'Norton',
        'Nunes',
        'Oates',
        'Oaton',
        'Oburne',
        'Ogilvie',
        'Oldberry',
        'Oldbury',
        'Oliphant',
        'Oliver',
        'Orde',
        'Orgill',
        'Orrack',
        'Orsmby',
        'Ottery',
        'Ottey',
        'Owen',
        'Padmore',
        'Palmer',
        'Pandarvas',
        'Pantofflett',
        'Parkinson',
        'Parry',
        'Pasco',
        'Peak',
        'Peat',
        'Peate',
        'Peddard',
        'Peete',
        'Penlington',
        'Perere',
        'Perry',
        'Persaud',
        'Pessod',
        'Peterkin',
        'Pettygrove',
        'Pharoh',
        'Phillips',
        'Phipps',
        'Picairn',
        'Pickening',
        'Pierce',
        'Pink',
        'Pinnock',
        'Pipps',
        'Plato',
        'Plunkett',
        'Polson',
        'Poole',
        'Popler',
        'Potiphar',
        'Potts',
        'Powell',
        'Powell ',
        'Poynter',
        'Price',
        'Prince',
        'Prisban',
        'Prislaeu',
        'Prosser',
        'Raboteau',
        'Ram',
        'Rankin',
        'Ranschin',
        'Ratcliffe',
        'Raughtwell',
        'Rawleigh',
        'Ray',
        'Rayner',
        'Rear',
        'Rebellio',
        'Redwell',
        'Reeves',
        'Reid ',
        'Rennalls',
        'Renny',
        'Renouf',
        'Reynolds',
        'Riafsette',
        'Richards',
        'Richardson',
        'Richie',
        'Rickerby',
        'Ridley',
        'Rieviere',
        'Ripley',
        'Roan',
        'Roberts',
        'Robinson',
        'Ronaldson',
        'Rookwood',
        'Ross',
        'Rossiter',
        'Rothwell',
        'Roulet',
        'Rousselet',
        'Rowling',
        'Roxburgh',
        'Rudd',
        'Ruggles',
        'Russell',
        'Rutherford',
        'Sadler',
        'Sale',
        'Samuels',
        'Sargent',
        'Saunders',
        'Savonnett',
        'Scollary',
        'Scott',
        'Seabourne',
        'Seams',
        'Seargent',
        'Seaton',
        'Seddon',
        'Seegel',
        'Service',
        'Seton',
        'Shea',
        'Shepherd',
        'Sherlock',
        'Shillingford',
        'Shipton',
        'Shouldam',
        'Shrimpton',
        'Shuttleworth',
        'Silburn',
        'Silva',
        'Simes',
        'Simms',
        'Simpson',
        'Sirigle',
        'Slaughter',
        'Smith',
        'Smith ',
        'Snee',
        'Snelgrove',
        'Snow',
        'Somerset',
        'Sowley',
        'Speediarah',
        'Stackpole',
        'Stair',
        'Stanbury',
        'Steer',
        'Stephenson',
        'Stepney',
        'Sterling',
        'Stevenson',
        'Stewart',
        'Stillard',
        'Stobo',
        'Stoddart',
        'Stone',
        'Storrow',
        'Strachan',
        'Strawbridge',
        'Strickland',
        'Stringer',
        'Strong',
        'Strutton',
        'Stultz',
        'Sturridge',
        'Surgeon',
        'Surgil',
        'Sutherland',
        'Sutton',
        'Swymmer',
        'Tait',
        'Tapper',
        'Taylor',
        'Teate',
        'Thomas',
        'Thomas ',
        'Thompson',
        'Thwaites',
        'Tierney',
        'Tiffin',
        'Tilford',
        'Timberlake',
        'Tingling',
        'Tollman',
        'Trial',
        'Tyndell',
        'Tyrell',
        'Tyrill',
        'Uniacke',
        'Ure',
        'Urqhart',
        'Usher',
        'Uter',
        'Uton',
        'Vallett',
        'Van Hamen',
        'Vanburgh',
        'Vance',
        'Vanderbufsche',
        'Vassall',
        'Vaughan',
        'Veitch',
        'Vere',
        'Vernon',
        'Vickers',
        'Victorie',
        'Vignon',
        'Villan',
        'Villanails',
        'Vincent',
        'Vine',
        'Vineyard',
        'Vining',
        'Vylder',
        'Waddle',
        'Wade',
        'Wagstaff',
        'Wainhouse',
        'Waite',
        'Walker ',
        'Walton',
        'Waterhouse',
        'Watkinson',
        'Watson',
        'Waugh',
        'Webb',
        'Weir',
        'Wells',
        'Weston',
        'Whitcombe',
        'Whyte',
        'Wicks',
        'Wight',
        'Wignall',
        'Wignell',
        'Wilcox',
        'Wilkinson',
        'Williams',
        'Willock',
        'Wilson',
        'Wiltshire',
        'Windos',
        'Winter',
        'Wood',
        'Woodruff',
        'Woolhead',
        'Wright',
        'Wyatt',
        'Wyll',
        'Wynter',
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
