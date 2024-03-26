import { sample } from 'lodash';

export default function reptiles() {
    let names: string;
    const type = Math.floor(Math.random() * 3.0);
    const nm1 = [
        'ATuin',
        'Abacuss',
        'Abbashy',
        'Abbe',
        'Abbot',
        'Abner',
        'Abrak',
        'Abu',
        'Admiral',
        'Aikido',
        'Akupara',
        'Aldo',
        'Alf',
        'Amadeus',
        'Amico',
        'Amigo',
        'Amma',
        'Apache',
        'Aphrodite',
        'Apo',
        'Apollo',
        'Apu',
        'Aquarius',
        'Archie',
        'Arkan',
        'Armando',
        'Arriba',
        'Asimov',
        'Attilla',
        'Augustus',
        'Aura',
        'Avalanche',
        'Badges',
        'Baffu',
        'Bailey',
        'Barney',
        'Basco',
        'Bashful',
        'Baxter',
        'Beacon',
        'Beanie',
        'Beans',
        'Bear',
        'Beavis',
        'Ben',
        'Bertus',
        'Besyrwan',
        'Bexter',
        'Bhishma',
        'BigMama',
        'Billie',
        'Bingo',
        'Bismarck',
        'Bismark',
        'Blanche',
        'Blastoise',
        'Blossem',
        'Blu',
        'Bobert',
        'Boggs',
        'Boggy',
        'Bojangles',
        'Bomba',
        'Bono',
        'Bonzo',
        'Booker',
        'Brock',
        'Bronx',
        'Brutus',
        'Bryce',
        'Bubba',
        'Bubbles',
        'Buddy',
        'Bumbles',
        'Bumpkin',
        'Cake',
        'Calvin',
        'Casey',
        'Cashew',
        'Cecile',
        'Chance',
        'Chandler',
        'Chantilly',
        'Chaos',
        'Chaplin',
        'Chaps',
        'Charlie',
        'Chaser',
        'Checkers',
        'Cheek',
        'Cheerio',
        'Cheese',
        'Chessnut',
        'Chewie',
        'Chukwa',
        'Clancy',
        'Clifford',
        'Clyde',
        'Comet',
        'Commander',
        'Conan',
        'Crush',
        'Cujo',
        'Cup',
        'DaTank',
        'Dante',
        'Danu',
        'Dapper',
        'Darwin',
        'Dasher',
        'Dazzle',
        'Deacon',
        'Decker',
        'Dedra',
        'Delbert',
        'Delores',
        'Dimples',
        'Dino',
        'Dixie',
        'Doc',
        'Donatello',
        'Doodle',
        'Doofus',
        'Dory',
        'Dude',
        'Duncan',
        'Echo',
        'Eddie',
        'Egbert',
        'Einstein',
        'Elmer',
        'Erconberht',
        'Ernesto',
        'Falcon',
        'Fandango',
        'Fellow',
        'Fergie',
        'Fido',
        'Filbert',
        'Filibuster',
        'Flash',
        'Forrest',
        'Frankie',
        'Franklin',
        'Fred',
        'Frog',
        'Gadget',
        'Galapagos',
        'Galileo',
        'Gemini',
        'George',
        'Gidget',
        'Giggles',
        'Goofy',
        'Granite',
        'Grayson',
        'Gretta',
        'Gus',
        'Haggis',
        'Hailie',
        'Halfshell',
        'Herbert',
        'Herbie',
        'Hippy',
        'Hobart',
        'Hobbes',
        'Honor',
        'Hoss',
        'Howie',
        'Hubble',
        'Hudson',
        'Hugo',
        'IBite',
        'Iggy',
        'Ijapa',
        'Ione',
        'ItyBity',
        'Izzy',
        'Jackpot',
        'Jenna',
        'Jessica',
        'Jitterbug',
        'Joeyson',
        'Jose',
        'Jukebox',
        'Junior',
        'Justice',
        'Kamiko',
        'Kaufman',
        'Kibbles',
        'Kiko',
        'KoopaTroopa',
        'Kozmo',
        'Kritanta',
        'Kurma',
        'Laddie',
        'Lancalot',
        'Lancelot',
        'Lassie',
        'Leonardo',
        'Lightning',
        'Lilly',
        'Lizzy',
        'Massika',
        'Maturin',
        'Maxx',
        'McDuff',
        'Memphis',
        'Mervin',
        'Methoataske',
        'Michelangelo',
        'Milo',
        'Morla',
        'MrTurtell',
        'MrTutles',
        'Muchies',
        'Mudge',
        'Murtle',
        'Murturtle',
        'Myrtle',
        'Mysty',
        'Mzee',
        'Navi',
        'Nemo',
        'Nibbles',
        'Nicole',
        'Nimbus',
        'Noris',
        'Nugget',
        'Nutmeg',
        'Ohana',
        'Olivia',
        'Om',
        'Omega',
        'Opa',
        'Oscar',
        'Otis',
        'Ozzy',
        'Pastachio',
        'Pat',
        'Peanut',
        'Pebbles',
        'PeekaBoo',
        'Peggy',
        'Pepper',
        'Percy',
        'Peterina',
        'Phantom',
        'Pistachio',
        'Pluto',
        'Pogo',
        'Pokey',
        'Prancer',
        'Puck',
        'Quaker',
        'Quicksilver',
        'Quincy',
        'Rainbow',
        'Ramses',
        'Raphael',
        'Raven',
        'Reggie',
        'Reno',
        'Rinc',
        'Roadkill',
        'Rocco',
        'Rocket',
        'Rockey',
        'Rosko',
        'Rufus',
        'Ryan',
        'Sahen',
        'Sandy',
        'Scead',
        'Scooter',
        'Scout',
        'Seamore',
        'Sebastian',
        'Shaka',
        'Shelby',
        'Sheldon',
        'ShellShocked',
        'ShellShocker',
        'Shellby',
        'Shellie',
        'Shelloholic',
        'Shellton',
        'Shelly',
        'Sherman',
        'Shilo',
        'Slowpoke',
        'Snapper',
        'Snappy',
        'Sniper',
        'Snowflake',
        'Softy',
        'Sonny',
        'Sophie',
        'Soup',
        'Sparky',
        'Sparticus',
        'Speed',
        'Speedster',
        'Speedy',
        'Spencer',
        'Spret',
        'Sprocket',
        'Squirt',
        'Squirtle',
        'Stretch',
        'Stump',
        'Stumpy',
        'Susan',
        'Swimmer',
        'Tahoe',
        'Tank',
        'Taz',
        'Terkeles',
        'Terri',
        'Terry',
        'Testudo',
        'Thor',
        'TinyTim',
        'Titana',
        'Tito',
        'Tmnt',
        'Tokka',
        'Tony',
        'Tootsie',
        'Tork',
        'Tororo',
        'Torque',
        'Tortelli',
        'Tortuga',
        'Travis',
        'Trojan',
        'Trooper',
        'Tucker',
        'Turby',
        'Turddy',
        'Turdman',
        'Turtle',
        'Tyco',
        'Tyrone',
        'Tyson',
        'Velcro',
        'Waddles',
        'Wags',
        'Waldorf',
        'Walter',
        'WarpSpeed',
        'Warturtle',
        'Webster',
        'Whisper',
        'Wiggles',
        'Wilhelmina',
        'Willy',
        'Winnie',
        'Wrigley',
        'Yawney',
        'Yertle',
    ];
    const nm2 = [
        'Aboo',
        'Akasha',
        'Alasfan',
        'Anubis',
        'Apollo',
        'Ariss',
        'Asad',
        'Athena',
        'BackStab',
        'Birj',
        'Blueberry',
        'Boukra',
        'Caligular',
        'CanOpener',
        'Ceasar',
        'Clack',
        'Clackers',
        'Claws',
        'Comogues',
        'Cupid',
        'Damis',
        'Deathlash',
        'Deca',
        'Doomsting',
        'Drpinchy',
        'Dwayne',
        'Dwaynedouglas',
        'Dwaynejohnson',
        'ElPincho',
        'Enkil',
        'Exboyfriend',
        'Exgirlfriend',
        'Fahesh',
        'Fluffy',
        'Frisky',
        'FritoBandito',
        'Gamal',
        'GeneralTsao',
        'Gilgamesh',
        'Girtab',
        'Golgota',
        'Gorkal',
        'Grabandhold',
        'Grabby',
        'Griper',
        'Hathor',
        'Hercules',
        'Horoscope',
        'Horrorscope',
        'ILikeToPinch',
        'ILoveToGank',
        'InYourShoes',
        'Ipinchbutts',
        'Ipinchthings',
        'Julius',
        'King',
        'Krellack',
        'Lasher',
        'Latif',
        'Leonidas',
        'Licorice',
        'Lucifer',
        'Majeed',
        'Manson',
        'Marauder',
        'Mariachi',
        'Meaty',
        'Moco',
        'Mohel',
        'MrPinchy',
        'Nautilus',
        'Nero',
        'Nod',
        'NotTheRock',
        'Oddessy',
        'Orionsbane',
        'Orkin',
        'Palpatine',
        'Pea',
        'Peenchy',
        'Pinchy',
        'Pinpin',
        'PlzDntSkinMe',
        'Pmspatrol',
        'PoisonBerry',
        'PoisonPie',
        'Posionstrike',
        'Queen',
        'Riddick',
        'Ringo',
        'Sabah',
        'Sadek',
        'Sarkoth',
        'Scamper',
        'Scorpidking',
        'Scorpinok',
        'Scorpio',
        'Scorpo',
        'Scorps',
        'Scorpsese',
        'Scorpwnage',
        'Scuttlebutt',
        'Serket',
        'Seth',
        'Skizzorhands',
        'Skorupi',
        'Snaps',
        'Snuggles',
        'Spanky',
        'Spike',
        'Sting',
        'Stingy',
        'SubZero',
        'Tater',
        'Tex',
        'Thor',
        'Venom',
        'Venomclaw',
        'Vicegrip',
        'Virgo',
        'Yabiss',
        'Zeus',
        'Zorom',
    ];
    {
        if (type === 1) {
            names = sample(nm2);
        } else if (type === 2) {
            names = sample(nm1);
        } else {
            names = sample(nm1);
        }
        return names;
    }
}
