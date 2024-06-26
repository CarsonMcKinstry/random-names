import { sample } from 'lodash';

export default function wowPets() {
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aasterinian',
        'Absinthe',
        'Acantha',
        'Acheron',
        'Acid',
        'Adira',
        'Adonis',
        'Adrasteia',
        'Agaue',
        'AhUhn',
        'Ailith',
        'Alien',
        'Ambiance',
        'Amoxtli',
        'Amrantu',
        'Ancalagon',
        'AngerClaw',
        'AngerSpike',
        'Anima',
        'Anthea',
        'Arsenic',
        'Artemis',
        'Astilabor',
        'AteFluffy',
        'Azureblip',
        'Bacchus',
        'Bahamut',
        'Bane',
        'Bellatrix',
        'Blink',
        'Blinker',
        'Blinkin',
        'Blinky',
        'Blip',
        'Bloodmaw',
        'Bloodymuzzle',
        'BobAndJoe',
        'Bouncepaw',
        'Brokenfang',
        'Brumeran',
        'Calahari',
        'Cambrian',
        'Capri',
        'CaptainSmile',
        'Carboniferous',
        'Castor',
        'CatLizard',
        'Charon',
        'Chemical',
        'Chimichanga',
        'Chomper',
        'Chronepsis',
        'Chubaka',
        'Chupathingy',
        'Claw',
        'Clawy',
        'Clotho',
        'Coszcatl',
        'Cualli',
        'Cuddles',
        'Cupcake',
        'Cyanide',
        'Deathmaw',
        'Deathspike',
        'DeePeeEs',
        'Deimos',
        'Delia',
        'Dementionisa',
        'Deuce',
        'Doble',
        'Doplet',
        'DoubleTrouble',
        'DoubleVision',
        'Dragos',
        'Drakoth',
        'Dual',
        'Duo',
        'Echo',
        'Eleuia',
        'Ellegon',
        'Elpis',
        'Encre',
        'Falazure',
        'Falte',
        'Faluzure',
        'Feathermoon',
        'Fierceheart',
        'Flameshadow',
        'Flappy',
        'Flash',
        'Fleck',
        'Flubble',
        'Fluffeh',
        'Fluffels',
        'Frostbites',
        'Fume',
        'Gaia',
        'Garyx',
        'Gelure',
        'Gemelli',
        'Gemeos',
        'Gemini',
        'Giggles',
        'Glaucus',
        'Gotzon',
        'Grassclaw',
        'Gullet',
        'Hagedis',
        'Havok',
        'Hazard',
        'Hecate',
        'Hemlock',
        'Herakles',
        'Hermes',
        'Hestia',
        'Hlal',
        'Houdini',
        'Hugs',
        'Hyperion',
        'Iacchus',
        'Icky',
        'Ilhuitl',
        'Ilithyia',
        'IllBiteU',
        'Io',
        'Itotia',
        'Jiminy',
        'Jinx',
        'Jumeaux',
        'Kahaera',
        'Kinga',
        'Kraken',
        'Largeclaw',
        'Larisa',
        'Leander',
        'Lendys',
        'Lizard',
        'Lizardbreath',
        'Lockjaw',
        'Loki',
        'Lollipop',
        'Longfang',
        'Magitail',
        'Manauia',
        'Megaera',
        'Miasma',
        'Mimic',
        'Mortis',
        'Mothra',
        'MrCuddles',
        'MrGiggles',
        'Mutalisk',
        'Namacuix',
        'Nephele',
        'Nereus',
        'Netherspike',
        'Nezahualcoyotl',
        'Nibbler',
        'NightCrawler',
        'NoArms',
        'Nowuseeme',
        'Noxious',
        'Nrarok',
        'OmNomNom',
        'Ordovician',
        'Orestes',
        'Overbite',
        'Pacman',
        'Patli',
        'Pawnter',
        'Peekaboo',
        'Pestilence',
        'Pewner',
        'Phaedra',
        'Phase',
        'Phaser',
        'Points',
        'PointyBits',
        'Pointz',
        'Poof',
        'Precious',
        'Predator',
        'PrettyLights',
        'Protego',
        'PrplGnomeEter',
        'PrplPeplEter',
        'Quickdraw',
        'Quickfang',
        'Rainbow',
        'Raisin',
        'Rampardos',
        'Razor',
        'Razorgouge',
        'Reflection',
        'Render',
        'Resonance',
        'Reverb',
        'Reverberation',
        'Rhea',
        'Ricochet',
        'Ring',
        'RipSnarl',
        'RipSpine',
        'Ripmaw',
        'Ripper',
        'Riptide',
        'Rishul',
        'Runningsoul',
        'Runzel',
        'Ryuu',
        'Samson',
        'SaphireChaser',
        'Sardior',
        'Scotty',
        'Scuttlebutt',
        'Seaspray',
        'Semele',
        'Serrate',
        'Severjaw',
        'Shadowdancer',
        'Sharptooth',
        'Shellz',
        'Shimaus',
        'Shimmer',
        'Silence',
        'Silurian',
        'Sinister',
        'Skitz',
        'SkyTear',
        'Slice',
        'Slicer',
        'Smaug',
        'Snaggletooth',
        'Snowcone',
        'Snowflake',
        'Snuggles',
        'Sparkles',
        'Spaulding',
        'Spike',
        'Spiker',
        'Spongebob',
        'Spyke',
        'Spyro',
        'Starspirit',
        'Stonesong',
        'Stormcry',
        'Sunshine',
        'Tache',
        'Tamara',
        'Teicuih',
        'Tepiltzin',
        'Tepin',
        'Terra',
        'Tetanus',
        'Thanatos',
        'Theia',
        'Thing',
        'ThornWarp',
        'Tiamat',
        'Tigger',
        'Tiha',
        'TipTap',
        'Tiros',
        'Tlacoehua',
        'Toltecatl',
        'Tuskerpint',
        'Twoface',
        'Unai',
        'Underbite',
        'Vanish',
        'Vestige',
        'Viral',
        'Virulent',
        'Vorpel',
        'Vouw',
        'Waddles',
        'Wampum',
        'WarpClaw',
        'WarpedMind',
        'Warpten',
        'Wideload',
        'Wiggles',
        'Worpel',
        'Xipilli',
        'Xochiyotl',
        'Yosu',
        'Zipactonal',
    ];
    const nm2 = [
        'Adressed',
        'Agaricus',
        'Aidec',
        'Aleera',
        'Alien',
        'Alogaria',
        'Alphonse',
        'Amanita',
        'Amethyst',
        'Angel',
        'Anoshla',
        'Aquapowder',
        'Arngrimr',
        'Athugz',
        'Atlatho',
        'Aura',
        'Aurivella',
        'Aurora',
        'Awin',
        'Azzuen',
        'Balgzr',
        'Ballon',
        'Balloon',
        'BhaBhanth',
        'Bibacr',
        'Bloodmaw',
        'Bloodymuzzle',
        'Bluestar',
        'Bluesy',
        'Blurp',
        'Brokenfang',
        'Bubbles',
        'CantCatchMe',
        'Cecirh',
        'Charles',
        'Chubaka',
        'Cibarius',
        'Cipanr',
        'Claw',
        'Coco',
        'Craseo',
        'Cthotha',
        'Cthubo',
        'Cupcake',
        'Dalal',
        'Dawn',
        'Deathmaw',
        'Deidare',
        'Destiny',
        'Dreuc',
        'Drift',
        'Drifter',
        'Dromaeo',
        'Dushan',
        'Eclipse',
        'Ecture',
        'Elania',
        'Enterprise',
        'Eseit',
        'Favardin',
        'FertileSpore',
        'Firefly',
        'Fizzle',
        'Flappy',
        'Fliptwinkle',
        'Floater',
        'Flotsam',
        'Fluffy',
        'FlyBy',
        'Flygon',
        'FlyingFungus',
        'Fontenay',
        'Fravashi',
        'Funguy',
        'Gargles',
        'Ghotha',
        'Gillcap',
        'Glider',
        'GlowStick',
        'Glowspore',
        'Grace',
        'Gullet',
        'Hibiscus',
        'Hynraic',
        'Hynryac',
        'Hyphae',
        'Iach',
        'Iarsere',
        'Iatosr',
        'Illuminos',
        'Imamu',
        'Irubleu',
        'Jasmine',
        'Kaleida',
        'Karyntha',
        'Keha',
        'Kisaki',
        'Kite',
        'Kitiara',
        'Kiwi',
        'Knuckle',
        'Kokoro',
        'KubCthothoth',
        'Lacip',
        'Laicch',
        'Laimhynr',
        'Laitpaurh',
        'Lamp',
        'Lamsor',
        'Largepaw',
        'Lasis',
        'Lei',
        'Lexius',
        'Lilia',
        'Lior',
        'Liwa',
        'Lockjaw',
        'Lollipop',
        'Longfang',
        'Lucirr',
        'Luminarah',
        'Luminarie',
        'Luminati',
        'Luminis',
        'Luminous',
        'Luna',
        'Madare',
        'MagicShroom',
        'Mango',
        'Manitou',
        'Marshlight',
        'Mist',
        'Momo',
        'Monarch',
        'Morel',
        'Mothball',
        'MrCuddles',
        'MrGlows',
        'Nana',
        'Nanao',
        'Narobita',
        'Neon',
        'Neona',
        'Nibbles',
        'NoshYothu',
        'NotYours',
        'OneUp',
        'Opal',
        'Opaline',
        'Oreo',
        'Parasol',
        'Pastel',
        'Patronus',
        'Pewner',
        'Phantasma',
        'Pickle',
        'Polyporus',
        'Powderpuffer',
        'Predator',
        'PrettyLights',
        'Puffball',
        'Quickfang',
        'Raich',
        'Raijin',
        'Rainbows',
        'Raymundo',
        'Render',
        'Reucec',
        'Ripmaw',
        'RleSothoorla',
        'Ruh',
        'Russula',
        'Ryacoer',
        'Sahara',
        'Sanara',
        'Sarina',
        'Secr',
        'Serenity',
        'Sharptooth',
        'Shimmer',
        'Shiny',
        'Shoaddith',
        'ShotSathothu',
        'Shroud',
        'Shuulmogoth',
        'Slideshow',
        'SlowMo',
        'SmokeScreen',
        'Sothaddag',
        'Sparkle',
        'Spawnie',
        'Sporebites',
        'Sporeflinger',
        'Sporeggarion',
        'Sporeggarius',
        'Sporewing',
        'Sporius',
        'Sport',
        'Spuds',
        'Squeekers',
        'Squirrel',
        'Sryridon',
        'Ssynec',
        'Star',
        'Stardust',
        'Stinky',
        'Strobestalk',
        'Summer',
        'Sunshine',
        'Sushi',
        'Tarkin',
        'Thallophyta',
        'ThantYeitha',
        'Tien',
        'Tlaitparh',
        'Tloiciac',
        'Twilight',
        'Twinkle',
        'Uilleag',
        'Uligurro',
        'Underglowyy',
        'Venia',
        'Wendigo',
        'Wiggles',
        'Willowisp',
        'Willy',
        'Yazata',
        'Ybhugr',
        'Ynremr',
        'Yormithabbi',
        'YubKadithoth',
        'Zorphax',
        'Zothath',
        'Zothogth',
    ];
    let names = '';
    if (type === 1) {
        names = sample(nm2);
    } else {
        names = sample(nm1);
    }
    return names;
}
