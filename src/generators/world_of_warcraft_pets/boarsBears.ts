import { sample } from 'lodash';

export default function boarsBears() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'BearlockHolmes',
        'Aloysius',
        'Ancient',
        'Arcadia',
        'Arcadius',
        'Ardal',
        'Arkadios',
        'Arkadios',
        'Arktophonos',
        'Armel',
        'Art',
        'Artair',
        'Artan',
        'Arthfael',
        'Arthmael',
        'Arthur',
        'Artie',
        'Arto',
        'Artorius',
        'Arttu',
        'Artturi',
        'Artur',
        'Arturas',
        'Arturo',
        'Asbjorn',
        'Auberon',
        'Avonaco',
        'Bagelmelt',
        'Bare',
        'Barney',
        'Barvam',
        'Bearbeque',
        'Bearenstein',
        'Bearnard',
        'Bentclaw',
        'Beorn',
        'Beornheard',
        'Ber',
        'Berdine',
        'Berend',
        'Berengar',
        'Berengari',
        'Berengaria',
        'Berengarius',
        'Berenger',
        'Berenguer',
        'Beringar',
        'Beringarius',
        'Bern',
        'Bernadett',
        'Bernadette',
        'Bernadine',
        'Bernard',
        'Bernarde',
        'Bernardetta',
        'Bernardette',
        'Bernardine',
        'Bernardino',
        'Bernardita',
        'Bernardo',
        'Bernardus',
        'Bernat',
        'Bernd',
        'Berndt',
        'Bernhard',
        'Bernhardt',
        'Bernie',
        'Bernt',
        'BigPete',
        'Biorna',
        'Bjarne',
        'Bjarni',
        'Bjorn',
        'Blackfell',
        'Blackjack',
        'Bloodmaw',
        'Bloodymuzzle',
        'Booboo',
        'Boris',
        'Briarsting',
        'Brokenfang',
        'Burney',
        'Cannibear',
        'Care',
        'Carebear',
        'Cassanova',
        'ChicagoCubs',
        'Chomper',
        'Clicktooth',
        'CocaCola',
        'Cupcake',
        'Deathclaw',
        'Deathmaw',
        'Dov',
        'Esben',
        'Espen',
        'Flopper',
        'ForestFires',
        'Fred',
        'Frigidaire',
        'Frostpaw',
        'FrostyPaws',
        'FuzzyWuzzy',
        'Gerben',
        'Gnawbone',
        'GrinAnd',
        'Grumpy',
        'Gullet',
        'Hallbjorn',
        'Hambeargler',
        'Helpimadruid',
        'Honeyfarmer',
        'Hookpaw',
        'Huslu',
        'Hybernator',
        'Icy',
        'Kiasax',
        'Kuma',
        'Largepaw',
        'Lashpaw',
        'Lockjaw',
        'Longfang',
        'Mahon',
        'Makwa',
        'Manitou',
        'Marshmallow',
        'Mathuin',
        'Mato',
        'Misha',
        'Nanook',
        'Nanuk',
        'Nanuq',
        'Napowsa',
        'Necessities',
        'Nightrunner',
        'Nita',
        'Oberon',
        'Oink',
        'Oinker',
        'Oinkinstien',
        'Orbiorn',
        'Orbjorn',
        'Orsen',
        'Orsin',
        'Orsina',
        'Orsino',
        'Orso',
        'Orsola',
        'Orsolya',
        'Orson',
        'Osbeorn',
        'Osborn',
        'Osbourne',
        'Otso',
        'Pandaman',
        'Panzer',
        'Patapych',
        'Petdruid',
        'Pink',
        'Plague',
        'Polaar',
        'Pooh',
        'PoohBear',
        'PowderKeg',
        'Preben',
        'Predbjorn',
        'Pridbjorn',
        'Quickfang',
        'Raeb',
        'Rainbow',
        'Render',
        'Ripmaw',
        'Ripper',
        'Riven',
        'Rumblebelly',
        'Sharptooth',
        'Sherman',
        'Smokey',
        'Snowball',
        'Snowbrawl',
        'Spoink',
        'Squee',
        'Stanis',
        'Starjumper',
        'Stonepaw',
        'Taiomah',
        'Tarben',
        'Tarlo',
        'Teddiursa',
        'Thorben',
        'Thorbern',
        'Thorbernus',
        'Thorbjorn',
        'Thorburn',
        'Titus',
        'Torben',
        'Torbern',
        'Torbernus',
        'Torbjorn',
        'Trotsky',
        'Trotter',
        'Unbearable',
        'Urs',
        'Ursa',
        'Ursala',
        'Ursaring',
        'Ursel',
        'Ursella',
        'Ursina',
        'Ursine',
        'Ursinus',
        'Urska',
        'Ursula',
        'Ursule',
        'Ursus',
        'Urszula',
        'Uschi',
        'Uther',
        'Uzumati',
        'Warfrost',
        'Winnie',
        'Wojtek',
        'Yogi',
        'Zhukov',
        'Ziggy',
    ];
    const nm2 = [
        'Al',
        'Amber',
        'Angrybacon',
        'Arnold',
        'Aylott',
        'Babe',
        'BackBacon',
        'Bacobit',
        'Bacon',
        'Bacon',
        'BaconButty',
        'Baconbits',
        'Baeddan',
        'Bailey',
        'Bebop',
        'Beebee',
        'Behemoth',
        'Bentley',
        'Betty',
        'BigMumma',
        'BillieJo',
        'Binney',
        'Blitzkrieg',
        'Boarhead',
        'Boartle',
        'Bore',
        'Breakfast',
        'Brian',
        'Bristle',
        'Brokentusk',
        'Chili',
        'Chitlins',
        'Chops',
        'Clarice',
        'Cledus',
        'Culhwch',
        'DaisyMae',
        'Death',
        'Deathgore',
        'Deliverance',
        'Dinner',
        'Eoforhild',
        'Evert',
        'Fatback',
        'Freighttrain',
        'Goretusk',
        'GoyelyPig',
        'Granny',
        'Groucho',
        'Gullinborsti',
        'Halitosis',
        'Hamilton',
        'Hamlet',
        'Hamlet',
        'Hammy',
        'Hannah',
        'HermioneHamhock',
        'Hildesvini',
        'Hobeu',
        'Hogzilla',
        'Ironhide',
        'James',
        'Jessie',
        'JimmyDean',
        'Kermitsgirl',
        'KevinBacon',
        'Kombat',
        'Kosher',
        'Links',
        'MagnumPIG',
        'Major',
        'Mamoswine',
        'Meatrocket',
        'Meatwagon',
        'Mel',
        'Melvin',
        'Milinko',
        'MissPiggy',
        'Morgan',
        'Napoleon',
        'Nestor',
        'Obelisk',
        'Oinkers',
        'OlBristley',
        'Olive',
        'Onyx',
        'Oreo',
        'Orson',
        'Pabio',
        'Pace',
        'Panzer',
        'Patty',
        'Pearls',
        'Penelope',
        'Petunia',
        'PigglesworthSnortimer',
        'Piggy',
        'PiggySue',
        'PiggyBank',
        'Piloswine',
        'Pink',
        'Pinky',
        'Pippin',
        'PoPo',
        'Pookie',
        'Popeye',
        'Poppy',
        'Porco',
        'Porkchop',
        'Porkchop',
        'Porkchops',
        'Porker',
        'Porkmeister',
        'Porko',
        'Porky',
        'Potbelly',
        'Princess',
        'PrincessFiona',
        'Pumba',
        'Pumbaa',
        'Ram-bore',
        'Rammswine',
        'Razorback',
        'Ribs',
        'Ringo',
        'Rosco',
        'Rosie',
        'RumpledPigskin',
        'RunningBacon',
        'Sam',
        'Sammy',
        'Sausage',
        'Scarlet',
        'SergeantPork',
        'SgtPork',
        'Skane',
        'Skeith',
        'Slim',
        'SmellMyCrit',
        'SmokedPork',
        'Smokey',
        'Snore',
        'Snouts',
        'Snowball',
        'Soooeee',
        'SpamelaAnderson',
        'Sparerib',
        'Spiderpig',
        'Squishy',
        'Sweathog',
        'Sweetie',
        'Swinub',
        'TammySwinette',
        'Tenderloin',
        'Toby',
        'Triath',
        'Tristan',
        'Truffles',
        'Tubby',
        'Tui',
        'Twrch',
        'VanCleef',
        'WTFBBQ',
        'Warpig',
        'WhiteMeat',
        'Wilbur',
        'Ziggy',
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
