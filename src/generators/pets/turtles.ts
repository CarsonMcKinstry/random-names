import { sample } from 'lodash';

export default function turtles() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Abraham',
        'Acel',
        'Achilles',
        'Adalson',
        'Addison',
        'Adley',
        'Admant',
        'Aghamore',
        'Aj',
        'Aldrik',
        'Alduin',
        'Alphonsus',
        'Altair',
        'Alvaro',
        'Anakin',
        'Andra',
        'Anthony',
        'Archer',
        'Armada',
        'Attwell',
        'Aurelio',
        'Autumn',
        'Azrael',
        'Baldrik',
        'Balloch',
        'Bard',
        'Barley',
        'Barney',
        'Bartley',
        'Baxter',
        'Beamer',
        'Beanie',
        'Ben',
        'Bennie',
        'Bently',
        'Bernard',
        'Bevis',
        'Billie',
        'Bjorn',
        'Blaine',
        'Blakey',
        'Blayze',
        'Blaze',
        'Blitzer',
        'Blizzard',
        'Bobby',
        'Bolt',
        'Boom',
        'Boomer',
        'Boono',
        'Bowen',
        'Boyden',
        'Brandon',
        'Brick',
        'Brock',
        'Broderick',
        'Bubba',
        'Bubbles',
        'Bubo',
        'Buch',
        'Buddy',
        'Bullet',
        'Bummer',
        'Buster',
        'Caliber',
        'Cameo',
        'Casper',
        'Ceith',
        'Charles',
        'Charleson',
        'Charlie',
        'Chase',
        'Chayne',
        'Chess',
        'Chester',
        'Chief',
        'Chips',
        'Chitter',
        'Cigaweed',
        'Clayborne',
        'Clint',
        'Cloud',
        'Clyve',
        'Cody',
        'Colby',
        'Colonel',
        'Colt',
        'Colten',
        'Coltrane',
        'Conny',
        'Cooney',
        'Cooper',
        'Cormic',
        'Coryn',
        'Coyle',
        'Crash',
        'Crush',
        'Curtis',
        'Dacey',
        'Dan',
        'Darnell',
        'Darvell',
        'Dawson',
        'Dax',
        'Derrik',
        'Derwin',
        'Devon',
        'Dexter',
        'Dharen',
        'Dino',
        'Dizzie',
        'Donatello',
        'Donna',
        'Donnel',
        'Donny',
        'Dougal',
        'Drake',
        'Duff',
        'Duke',
        'Dumont',
        'Dwayne',
        'Dwight',
        'Earl',
        'Edwyn',
        'Einstein',
        'Eliott',
        'Elmer',
        'Elvis',
        'Elvyn',
        'Enchalada',
        'Erkel',
        'Ethan',
        'Eugene',
        'Explorer',
        'Fengo',
        'Fidel',
        'Filbert',
        'Fitz',
        'Flash',
        'Flynt',
        'Forbes',
        'Franklin',
        'Fred',
        'Garnell',
        'Gavyn',
        'Gilbert',
        'Gilford',
        'Glenn',
        'Glynn',
        'Gonzo',
        'Grant',
        'Greenback',
        'Gren',
        'Griffon',
        'Gunner',
        'Gus',
        'Gwain',
        'Halo',
        'Hamlet',
        'Hank',
        'Hanz',
        'Henry',
        'Herbert',
        'Hercules',
        'Hermit',
        'Hero',
        'Herse',
        'Hoel',
        'Honor',
        'Hoover',
        'Hover',
        'Hulk',
        'Humphrey',
        'Hunter',
        'Jaden',
        'James',
        'Janko',
        'Janook',
        'Jared',
        'Jay Jay',
        'Jeffers',
        'Jerold',
        'Jesse',
        'Jester',
        'Jimmie',
        'Jo',
        'Joey',
        'Johan',
        'John',
        'Jose',
        'Justin',
        'Kamil',
        'Kane',
        'Kantar',
        'Keene',
        'Kelvin',
        'Kemp',
        'Kenny',
        'Kermit',
        'Kevin',
        'King',
        'Kong',
        'Lance',
        'Lang',
        'Lennie',
        'Leod',
        'Leonardo',
        'Lester',
        'Leverett',
        'Levi',
        'Linus',
        'Little',
        'Logan',
        'Lola',
        'Louie',
        'Lucus',
        'Luigi',
        'Luke',
        'Luthor',
        'MacFly',
        'Mack',
        'Malak',
        'Malakai',
        'Marshmallow',
        'Martyn',
        'Matthew',
        'Maxwell',
        'Mayer',
        'Mayor',
        'McLoid',
        'Merlin',
        'Micheal',
        'Michelangelo',
        'Milo',
        'Mitchie',
        'Mitz',
        'Moe',
        'Molly',
        'Montey',
        'Morgan',
        'Mort',
        'Morty',
        'Myrtle',
        'Nanook',
        'Nate',
        'Neason',
        'Nicholas',
        'Nickle',
        'Nicodemus',
        'Nicolas',
        'Nikodemos',
        'Nikolas',
        'Nikomedes',
        'Nikostratos',
        'Nills',
        'Nippie',
        'Nishtook',
        'Noah',
        'Norvin',
        'Odin',
        'Odysseus',
        'Oliver',
        'Ollie',
        'Onyx',
        'Orestes',
        'Orion',
        'Ormund',
        'Orwell',
        'Oscar',
        'Otis',
        'Ozone',
        'Ozzy',
        'Paladin',
        'Parker',
        'Parley',
        'Pascal',
        'Payton',
        'Peanut',
        'Pebbles',
        'Perekin',
        'Peter',
        'Philander',
        'Philemon',
        'Philo',
        'Phoenix',
        'Phthisis',
        'Pierce',
        'Pirro',
        'Plato',
        'Pluto',
        'Pokey',
        'Pokie',
        'Pollux',
        'Polynices',
        'Pontus',
        'Pooch',
        'Pookie',
        'Porfirio',
        'Poseidon',
        'President',
        'Prince',
        'Pubert',
        'Pudding',
        'Puddles',
        'Pudge',
        'Quinn',
        'Rafiki',
        'Ragnar',
        'Ragnaros',
        'Rainbow',
        'Ralphie',
        'Rambo',
        'Raphael',
        'Raskel',
        'Reese',
        'Reggie',
        'Reggy',
        'Reginald',
        'Ricardo',
        'Ringo',
        'Roader',
        'Rocko',
        'Rocky',
        'Rodd',
        'Rodeo',
        'Rodrick',
        'Rogan',
        'Romeo',
        'Rowdy',
        'Roy',
        'Rubble',
        'Rufus',
        'Rupert',
        'Salvadore',
        'Sammy',
        'Scout',
        'Sean',
        'Shaun',
        'Sheldon',
        'Shell Shock',
        'Shellbie',
        'Shellby',
        'Shelldon',
        'Shelly',
        'Sherlok',
        'Sherman',
        'Shield',
        'Shiner',
        'Simba',
        'Simon',
        'Skipper',
        'Skittles',
        'Slowly',
        'Snapper',
        'Snickers',
        'Sonny',
        'Soren',
        'Spartacus',
        'Speedy',
        'Spencer',
        'Spirit',
        'Splinter',
        'Squirt',
        'Stephan',
        'Stillman',
        'Storm',
        'Straps',
        'Stu',
        'Stuart',
        'Stud',
        'Tahbert',
        'Tank',
        'Tate',
        'Taz',
        'Ted',
        'Tegan',
        'Tevin',
        'Thatcher',
        'Thomas',
        'Thor',
        'Thunder',
        'Tinsley',
        'Tipper',
        'Tippers',
        'Toby',
        'Tod',
        'Todd',
        'Tomm',
        'Tommy',
        'Tony',
        'Tortilla',
        'Trace',
        'Trevon',
        'Tridant',
        'Tristan',
        'Triton',
        'Trojan',
        'Troy',
        'Tryton',
        'Tucker',
        'Turbo',
        'Turiel',
        'Turner',
        'Turquoise',
        'Tyrell',
        'Tyrone',
        'Vader',
        'Valkyrie',
        'Walter',
        'Wayson',
        'Webster',
        'Weldon',
        'Wester',
        'Wheatley',
        'Winborne',
        'Winter',
        'Wolfgang',
        'Wolfrik',
        'Woolsey',
        'Wyatt',
        'Yertle',
        'Yoda',
        'Yohan',
        'Yoshi',
        'Zac',
        'Zacharie',
        'Zeke',
        'Zeus',
        'Zorro',
    ];
    const nm2 = [
        'Abby',
        'Adah',
        'Adela',
        'Adene',
        'Ailey',
        'Aislynn',
        'Alda',
        'Aleigh',
        'Alene',
        'Aleta',
        'Alexa',
        'Alexys',
        'Alice',
        'Alicia',
        'Alina',
        'Almira',
        'Alysha',
        'Amanda',
        'Amie',
        'Amira',
        'Andrea',
        'Anemone',
        'Angela',
        'Ani',
        'Anita',
        'Anna',
        'Annette',
        'April',
        'Aquilana',
        'Arabelle',
        'Ariel',
        'Arla',
        'Arleen',
        'Ashley',
        'Atire',
        'Audree',
        'Azia',
        'Babbie',
        'Barrymore',
        'Bay',
        'Baylie',
        'Beauty',
        'Bertha',
        'Beryl',
        'Betsy',
        'Bettsy',
        'Blue',
        'Bonnie',
        'Breezy',
        'Brettany',
        'Brianne',
        'Briella',
        'Brina',
        'Brylie',
        'Bubbles',
        'Bubbly',
        'Caidance',
        'Caitie',
        'Caliana',
        'Callie',
        'Callista',
        'Calypso',
        'Candi',
        'Caprina',
        'Carlie',
        'Carlita',
        'Carly',
        'Caroline',
        'Casey',
        'Catlin',
        'Caylona',
        'Celandine',
        'Celosia',
        'Cenobia',
        'Charlize',
        'Chelsea',
        'Chelsie',
        'Cherryl',
        'Christina',
        'Clare',
        'Clarrisa',
        'Cleo',
        'Colleen',
        'Consuela',
        'Cora',
        'Coral',
        'Crash',
        'Crescent',
        'Cup',
        'Daisy',
        'Dana',
        'Danele',
        'Daria',
        'Daryn ',
        'Dasha  ',
        'Deianira',
        'Delia ',
        'Delora',
        'Delores',
        'Delpha ',
        'Delta',
        'Demetria ',
        'Denia',
        'Desdemona ',
        'Desilyn',
        'Desire',
        'Devana',
        'Dina',
        'Dixie',
        'Dora',
        'Dorothy',
        'Drew',
        'Duffie',
        'Ebony',
        'Edna',
        'Edrys',
        'Eirpne ',
        'Elaine',
        'Eleanor',
        'Electra',
        'Elidi ',
        'Eliora',
        'Ellesea',
        'Elora',
        'Elsa',
        'Emily',
        'Emma',
        'Emmy',
        'Enola',
        'Erin',
        'Estella',
        'Fedora ',
        'Fergie',
        'Fiona',
        'Flippers',
        'Florina',
        'Freya',
        'Galia',
        'Gamma ',
        'Genevie',
        'Gilberta',
        'Ginger',
        'Giselle',
        'Greta',
        'Halo',
        'Hattie',
        'Hayleigh',
        'Heidi',
        'Helga',
        'Honey',
        'Iggy',
        'Ilene',
        'Isabelle',
        'Isane',
        'Ivory',
        'Ivyanne',
        'Iyanna',
        'Izzy',
        'Jackie',
        'Jaimee',
        'Jana',
        'Janet',
        'Jasmin',
        'Jaycee',
        'Jeanette',
        'Jenise',
        'Jenni',
        'Jeovanna',
        'Jillian',
        'Joceline',
        'Jolena',
        'Joli',
        'Joscelyn',
        'Juliet',
        'Kady',
        'Kaley',
        'Kalila',
        'Kalina',
        'Karol',
        'Kasandra',
        'Kassadi',
        'Katharina',
        'Katja',
        'Kayleigh',
        'Kayley',
        'Kaysea',
        'Keiki',
        'Kellsea',
        'Kerrie',
        'Kerry',
        'Kimiko',
        'Kivi',
        'Kyra',
        'Laughlin',
        'Layla',
        'Leanna',
        'Lennox',
        'Lexy',
        'Lilleath',
        'Lilly',
        'Lily',
        'Linette',
        'Liz',
        'Lizzie',
        'Lizzy',
        'Loraine',
        'Lorena',
        'Lorene',
        'Lucky',
        'Lulu',
        'Luna',
        'Lyla',
        'Madelene',
        'Maggie',
        'Majesty',
        'Maranda',
        'Margo',
        'Maria',
        'Marie',
        'Matilda',
        'Megan',
        'Mel',
        'Mercedis ',
        'Mermaid',
        'Mervina',
        'Mia ',
        'Mia',
        'Miki',
        'Mikkah',
        'Miriam',
        'Mo',
        'Mona',
        'Monica',
        'Mrs Turtle',
        'Nadette',
        'Nadia',
        'Nancey',
        'Neleh',
        'Nellie',
        'Nemo',
        'Nikita',
        'Nina',
        'Nye',
        'Ocean',
        'Olivia',
        'Oralie',
        'Penleigh',
        'Pickle',
        'Pickles',
        'Pippa',
        'Princess',
        'Rachelle',
        'Raindrop',
        'Rashell',
        'Remi',
        'Revy',
        'Roshell',
        'Ruby',
        'Ruth',
        'Sadie',
        'Sally',
        'Samantha',
        'Sandy',
        'Savannah',
        'Scarlet',
        'Seashell',
        'Sheilah',
        'Shelby ',
        'Shelby',
        'Shella',
        'Shellbeigh',
        'Shellbie',
        'Shellby (Shelbie',
        'Shellby',
        'Shelle',
        'Shelley',
        'Shellie',
        'Shellisa',
        'Shelly ',
        'Shelly',
        'Snappy',
        'Solaina',
        'Sophie',
        'Squirt',
        'Stormy',
        'Sunny',
        'Sunshine',
        'Susie',
        'Suzie',
        'Sylphia',
        'Sylvie',
        'Tabora',
        'Tag',
        'Talori',
        'Tammy',
        'Tansy',
        'Tanya',
        'Tasha',
        'Tauna',
        'Teal',
        'Tillie',
        'Tilly',
        'Tory',
        'Turquoise',
        'Turtsy',
        'Tutie',
        'Velvet',
        'Veronica',
        'Virginia',
        'Wenona',
        'Wilone',
        'Wuti',
        'Xena ',
        'Xena',
        'Yaffa',
        'Yertle',
        'Zemirah',
        'Zina',
        'Zoe',
        'Zoey',
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
