import { sample } from 'lodash';

export default function militaryOperations() {
    let names: string;
    const nm1 = [
        'Fantasia',
        'Red Snow',
        'Llama',
        'Sandsnake',
        'Crow Nest',
        'Crossfire',
        'Resurrection',
        'Good Day',
        'Ironic Sarcasm',
        'Shoot-em-up',
        'Tropic Thunder',
        'Able Sentry',
        'Abracadabra',
        'Accolade',
        'Achilles',
        'Achilles Heel',
        'Administrator',
        'Alakazam',
        'Alamo',
        'Alpha',
        'Altercation',
        'Annihilation',
        'Anvil',
        'Apple',
        'Apricot',
        'Aquarius',
        'Argument',
        'Aries',
        'Asteroid',
        'Attorney',
        'Avalanche',
        'Axe',
        'Back Yard',
        'Backhand',
        'Bad Juju',
        'Bad News',
        'Bad Voodoo',
        'Banshee',
        'Banshee Scream',
        'Bar Brawl',
        'Barbossa',
        'Barracuda',
        'Barrage',
        'Barricade',
        'Bastion',
        'Battle Axe',
        'Beanstalk',
        'Behemoth',
        "Bells 'n Whistles",
        'Beta',
        'Big Switch',
        'Black Eye',
        'Blackjack',
        'Blackout',
        'Blackpool',
        'Blacksmith',
        "Blade's Edge",
        'Blizzard',
        'Blockade',
        'Blockbuster',
        'Blockhouse',
        'Blood Transfusion',
        'Bogeyman',
        'Bombardment',
        'Bone Picking',
        'Booby Trap',
        'Boomstick',
        'Brannigan',
        'Brass',
        'Brass Knuckle',
        'Bravo',
        'Brawl',
        'Bread and Water',
        'Breaking Point',
        'Breastplate',
        'Brimstone',
        'Bronco',
        'Bronze Medal',
        'Broomstick',
        'Buccaneer',
        'Bucking Bronco',
        'Buffalo',
        'Buffoon',
        "Bull's Eye",
        'Bulwark',
        'Bump',
        'CEO',
        'Caboose',
        'Cactus',
        'Cake Icing',
        'Camel',
        'Camouflage',
        'Cannon Ball',
        'Cannonade',
        'Capricorn',
        'Carrot Stick',
        'Carte Blanche',
        'Cartwheel',
        'Casanova',
        'Cataclysm',
        'Cattapult',
        'Champion',
        'Charger',
        'Charlie',
        'Cherry',
        'Chopstick',
        'Chopsticks',
        'Chrome',
        'Chromite',
        'Chronicle',
        'Citadel',
        'Clash of Titans',
        'Clean Slate',
        'Clean Sweep',
        'Cliffhanger',
        'Climax',
        'Close Shave',
        'Clover',
        'Cobalt',
        'Cobra',
        'Comet',
        'Constatine',
        'Cookie Crumbles',
        'Corkscrew',
        'Cottage',
        'Cougar',
        'Counselor',
        'Crack of Doom',
        'Crackpot',
        'Cricket',
        'Criss Cross',
        'Crossbow',
        'Crossroad',
        'Crossword',
        'Cruiser',
        'Curtains Down',
        'Curtains Up',
        'Custodian',
        'Cyclone',
        'Cyclops',
        'DJ',
        'Decorate',
        'Delta',
        'Desperado',
        'Disenchant',
        'Dodge',
        'Dodgeball',
        'Don Juan',
        'Double Cross',
        'Double Jeopardy',
        'Double Trouble',
        'Download',
        'Dracula',
        'Dragon',
        'Dragon Tooth',
        'Dragonbreath',
        'Dragonfire',
        'Dragoon',
        'Drawback',
        'Dreamstate',
        'Drum and Brass',
        'Dryad',
        'Dumbfounded',
        'Dust Angel',
        'Dust Demon',
        'Dust Devil',
        'Eagle Eye',
        'Eagle Feather',
        'Earthquake',
        'Echo',
        'Eclipse',
        'Elephant',
        'Encore',
        'Enigma',
        'Enlightenment',
        'Epilogue',
        'Epiphany',
        'Eureka',
        'Everglade',
        'Evil Eye',
        'Excalibur',
        'Exchange Student',
        'Excursion',
        'Extinction',
        'Extinguish',
        'Eye Opener',
        'Eye for an Eye',
        'Face Off',
        'Fairy',
        'Fairy Dust',
        'Fallout',
        'Feature Length',
        'Ferocity',
        'Fire Fighter',
        'Firework',
        'Fireworks',
        'Flapjack',
        'Flashpoint',
        'Flint',
        'Flint and Steel',
        'Flintlock',
        'Forager',
        'Four-Leaf Clover',
        'Fox',
        'Foxtrot',
        'Free Rein',
        'Freedom',
        'Fresh Pickings',
        'Friction',
        'Fruit Fly',
        'Fruitcake',
        'Full Moon',
        'Full Steam',
        'Full Swing',
        'Full Throttle',
        'Garden',
        'Gemini',
        'Ghost Zone',
        'Ghostbuster',
        'Giant',
        'Goblin',
        'Gold Medal',
        'Golf',
        'Goliath',
        'Good Citizen',
        'Good Fortune',
        'Good News',
        'Governor',
        'Grand Slam',
        'Granite',
        'Grapefruit',
        'Gravity',
        'Greenhouse',
        'Hammer',
        'Hammerhead',
        'Hanging Garden',
        'Hangover',
        'Harlequin',
        'Harmony',
        "Heaven's Gate",
        "Hell's Gate",
        'Hercules',
        'Hippopotamus',
        'Hobgoblin',
        'Hocus Pocus',
        'Home Coming',
        'Home Run',
        'Homesick',
        'Horseshoe',
        'Hot Potato',
        'Hotcake',
        'Hotdog',
        'Hotel',
        'Husky',
        'Hyperbole',
        'Ichigo',
        'Impending Doom',
        'India',
        'Ingigo',
        'Insolence',
        'Inspector',
        'Interlude',
        'Intermission',
        'Iron Oak',
        'Jack the Ripper',
        'Javelin',
        'Jeopardy',
        'Jester',
        'Jezebel',
        'Jinx',
        'Judas Kiss',
        'Judgement Day',
        'Juju',
        'Juliet',
        'Jurisdiction',
        'Just Cause',
        'Just Desserts',
        'Kaput',
        'Kilo',
        'Knife',
        'Knockdown',
        'Knockout',
        'Kudos',
        'Landslide',
        'Last Judgement',
        'Leatherback',
        'Leprechaun',
        'Lever',
        'Leverage',
        'Leviathan',
        'Libra',
        'Lilly',
        'Lima',
        'Lipstick',
        'Lumberjack',
        'Lunar Eclipse',
        'Lunatic',
        'Machete',
        'Magnet',
        'Mammoth',
        'Man Eater',
        'Maneater',
        'Maniac',
        'Marble',
        'Market Stall',
        'Mastermind',
        'Masterwork',
        'Matinee',
        'Melon',
        'Melon Ball',
        'Mermaid',
        'Mesmerize',
        'Meteor',
        'Meteoroid',
        'Midnight',
        'Mike',
        'Minced Meat',
        'Minerva',
        'Misdirect',
        'Moment of Truth',
        'Monolith',
        'Monsoon',
        'Monsoon Rain',
        'Moonlight',
        'Moonlight Serenade',
        'Morass',
        'Mousetrap',
        'Mumbo Jumbo',
        'Musketeer',
        'Mustang',
        'Myrmidon',
        'Neptune',
        'Nightmare',
        'No Mercy',
        'Nostalgia',
        'November',
        'Oak Tree',
        'Oasis',
        'Obelisk',
        'Octagon',
        'Olympia',
        'Open House',
        'Open Invite',
        'Oscar',
        'Out of Mana',
        'Overlord',
        'Overseer',
        'Overshadow',
        'Overture',
        'Overwhelm',
        'Paladin',
        'Pancake',
        'Panther',
        'Papa',
        'Parabole',
        'Paramount',
        'Patriot',
        'Phantasm',
        'Pheasant',
        'Pickpocket',
        'Pigstick',
        'Pilgrimage',
        'Pineapple',
        'Pinecone',
        'Pisces',
        'Pitfall',
        'Pixie',
        'Pixie Dust',
        'Platinum',
        'Plunder',
        'Point Blank',
        'Poker Face',
        'Poltergeist',
        'Poseidon',
        'Powder Snow',
        'Pre-Alpha',
        'Pre-Release',
        'Predator',
        "Predator 'n Prey",
        'Prelude',
        'Premium Upgrade',
        'Pressure Cooker',
        'Prodigy',
        'Prologue',
        'Promotion',
        'Pub Crawl',
        'Puma',
        'Purgatory',
        'Pyramid',
        'Python',
        'Quagmire',
        'Quebec',
        'Question Mark',
        'Quicksand',
        'Rabbid Dog',
        "Rabbit's Foot",
        'Rainbow',
        'Raven',
        'Ravenous',
        'Razor',
        'Razor Blade',
        'Redemption',
        'Retribution',
        'Revenant',
        'Rhino',
        'Rhinoceros',
        'Rhubarb',
        'Rock and Roar',
        'Rock and Roast',
        'Rock and Roll',
        'Romeo',
        'Rooster',
        'Rose',
        'Rose Bush',
        'Ruby',
        'Ruckus',
        'Rugby',
        'Saber',
        'Saberteeth',
        'Sabertooth',
        'Sagittarius',
        'Salamander',
        'Salvation',
        'Sapphire',
        'Saturate',
        'Saturation',
        'Scimitar',
        'Scorpio',
        'Scorpion',
        'Sea Angel',
        'Sea Demon',
        'Sea Devil',
        'Seism',
        'Seismic Toss',
        'Shanty',
        'Shoplift',
        'Short Stick',
        'Short-Circuit',
        'Showdown',
        'Shut Down',
        'Sidestep',
        'Siege Engine',
        'Sierra',
        'Silver Medal',
        'Siren Song',
        'Sitting Duck',
        'Skin and Bones',
        'Sledgehammer',
        "Slip 'n Slide",
        'Slip and Shake',
        'Smokescreen',
        'Smother',
        'Snow Crystal',
        'Snowfall',
        'Snowflake',
        'Snowslide',
        'Snowstorm',
        'Solar Eclipse',
        'Sourdough',
        'Sparta',
        'Special Delivery',
        'Spellbind',
        'Spellbound',
        'Stallion',
        'Steamroller',
        'Steward',
        'Stickup',
        'Strangle',
        'String Bean',
        'Stronghold',
        'Subterfuge',
        'Succubus',
        'Supercharge',
        'Superintendent',
        'Supervisor',
        'Surprise Party',
        'Talisman',
        'Talonstrike',
        'Tangerine',
        'Tango',
        'Tarzan',
        'Taurus',
        'Tear-Jerker',
        'Thin Ice',
        'Thriller',
        'Thunder',
        'Thunder Cloud',
        'Thunder Flash',
        'Thunder Storm',
        'Thunderbolt',
        'Tickle',
        'Tidal Wave',
        'Tiger',
        'Titan',
        'Tomahawk',
        'Torch',
        'Tornado',
        'Torpedo',
        'Torrent',
        'Touchdown',
        'Trash Collection',
        'Tremor',
        'Triangle',
        'Trident',
        'Trinkets',
        'Triple Cross',
        'Tsunami',
        'Twilight',
        'Twiligt Zone',
        'Twister',
        'Two to Tango',
        'Typhoon',
        'Ultimatum',
        'Ultramarine',
        'Uniform',
        'Vampire',
        'Vanguard',
        'Victor',
        'Virgo',
        'Volcano',
        'Volunteer',
        'Voodoo Vibes',
        'Warthog',
        'Watchtower',
        'Water Nymph',
        'Werewolf',
        'Whirlwind',
        'Whiskey',
        'Whistleblower',
        'Whiz Kid',
        'Wilderness',
        'Willow',
        'Windstorm',
        'Wolf',
        'Wolf Howl',
        'Womanizer',
        'Wrath Hog',
        'Wrecking Ball',
        'Wunderkind',
        'X-ray',
        'Yankee',
        'Zero Hour',
        'Zombie',
        'Zulu',
    ];
    const nm2 = [
        'Black',
        'White',
        'Blue',
        'Silver',
        'Brass',
        'Bronze',
        'Golden',
        'Blind',
        'Desert',
        'Jungle',
        'Sea',
        'Ocean',
        'Red',
        'Green',
        'Orange',
        'Purple',
        'Yellow',
        'Pink',
        'Gray',
        'Brown',
        'Hidden',
        'Urban',
        'Swamp',
    ];
    const nm3 = [
        'Angel',
        'Anvil',
        'Avalanche',
        'Axe',
        'Blade',
        'Buffalo',
        'Champion',
        'Charger',
        'Citadel',
        'Cobra',
        'Comet',
        'Cougar',
        'Demon',
        'Devil',
        'Doom',
        'Dragon',
        'Dryad',
        'Dust',
        'Eclipse',
        'Eye',
        'Eyes',
        'Fire',
        'Flake',
        'Freedom',
        'Garden',
        'Gardens',
        'Gate',
        'Ghost',
        'Giant',
        'Hammer',
        'Hand',
        'Heart',
        'Hearts',
        'Jack',
        'Jewel',
        'Knife',
        'Knight',
        'Knuckle',
        'Lilly',
        'Lion',
        'Mammoth',
        'Maniac',
        'Meteor',
        'Moon',
        'Nightmare',
        'Obelisk',
        'Paladin',
        'Phantom',
        'Pool',
        'Predator',
        'Puma',
        'Rain',
        'Redemption',
        'Rhino',
        'Salvation',
        'Scorpion',
        'Shark',
        'Snow',
        'Sun',
        'Sword',
        'Thunder',
        'Tornado',
        'Truth',
        'Vanguard',
        'Vengeance',
        'Whirlwind',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 7) {
            names = `Operation ${sample(nm1)}`;
        } else {
            names = `Operation ${sample(nm2)} ${sample(nm3)}`;
        }
        return names;
    }
}
