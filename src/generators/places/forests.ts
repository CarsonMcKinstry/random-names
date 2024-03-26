import { sample } from 'lodash';

export default function forests() {
    let names: string;
    const nm1 = [
        'White',
        'Black',
        'Brown',
        'Gray',
        'Majestic',
        'Pygmy',
        'Little',
        'Giant',
        'Northern',
        'Southern',
        'Eastern',
        'Western',
        'Greater',
        'Lesser',
        'Masked',
        'Grass',
        'Water',
        'Common',
        'Mountain',
        'Prairie',
        'Grassland',
        'Taiga',
        'Tundra',
        'Savanna',
        'Alpine',
        'Collared',
        'Grand',
        'Pacific',
        'Oriental',
        'Spotted',
        'Speckled',
        'Striped',
        'Dotted',
        'Rusty',
        'Maned',
        'Cloud',
        'Long-tailed',
        'Short-tailed',
        'Crowned',
        'Golden',
        'Imperial',
        'Royal',
        'Noble',
        'Laughing',
        'Lined',
        'Banded',
        'Snow',
        'Ivory',
        'Ebony',
        'Wild',
        'Reagal',
    ];
    const nm2 = [
        'Panda',
        'Gerbil',
        'Hare',
        'Hedgehog',
        'Jackal',
        'Warthog',
        'Coyote',
        'Cat',
        'Badger',
        'Hyena',
        'Jaguar',
        'Gorilla',
        'Sloth',
        'Anteater',
        'Ocelot',
        'Lion',
        'Porcupine',
        'Beaver',
        'Otter',
        'Ant',
        'Bandicoot',
        'Crocodile',
        'Alligator',
        'Treefrog',
        'Wolverine',
        'Goat',
        'Spider',
        'Mouse',
        'Snail',
        'Crab',
        'Deer',
        'Fox',
        'Lizard',
        'Toad',
        'Mole',
        'Turtle',
        'Frog',
        'Squirrel',
        'Tortoise',
        'Gazelle',
        'Panther',
        'Bear',
        'Rat',
        'Lynx',
        'Okapi',
        'Leopard',
        'Tiger',
        'Wolf',
        'Rhino',
        'Wallaby',
        'Yak',
        'Pelican',
        'Swallow',
        'Duck',
        'Eagle',
        'Hawk',
        'Falcon',
        'Vulture',
        'Sunbird',
        'Macaw',
        'Woodpecker',
        'Kingfisher',
        'Hummingbird',
        'Pygmy Owl',
        'Sandpiper',
        'Mockingbird',
    ];
    const nm3 = [
        'Forest',
        'Grove',
        'Woods',
        'Covert',
        'Woodland',
        'Thicket',
        'Forest',
        'Grove',
        'Woods',
        'Covert',
        'Woodland',
        'Wilds',
        'Wood',
        'Wood',
        'Timberland',
        'Timberland',
    ];
    const nm4 = [
        'Calm',
        'Sacred',
        'Massive',
        'Huge',
        'Teeny',
        'Tiny',
        'Puny',
        'Mammoth',
        'Gigantic',
        'Colossal',
        'Big',
        'Faint',
        'Hissing',
        'Quiet',
        'Thundering',
        'Whispering',
        'Beautiful',
        'Fancy',
        'Magnificent',
        'Mysterious',
        'Old',
        'Broken',
        'Creepy',
        'Abandoned',
        'Light',
        'Earthy',
        'Elegent',
        'Deep',
        'Enchanted',
        'Detailed',
        'Deserted',
        'Exclusive',
        'Dramatic',
        'Curious',
        'Awesome',
        'Jaded',
        'Jagged',
        'Incredible',
        'Healthy',
        'Heavenly',
        'High',
        'Hollow',
        'Huge',
        'Gentle',
        'Giant',
        'Glistening',
        'Glorious',
        'Gorgeous',
        'Groovy',
        'Free',
        'Frightened',
        'Frightening',
        'Little',
        'Lively',
        'Lonely',
        'Lush',
        'Magical',
        'Majestic',
        'Marvelous',
        'Mellow',
        'Mighty',
        'Misty',
        'Moldy',
        'Narrow',
        'Oceanic',
        'Quiet',
        'Panoramic',
        'Parallel',
        'Peaceful',
        'Plain',
        'Pleasant',
        'Precious',
        'Private',
        'Rainy',
        'Reflecting',
        'Romantic',
        'Rotten',
        'Royal',
        'Terrible',
        'Terrific',
        'Thick',
        'Thin',
        'Threatening',
        'Towering',
        'Scattered',
        'Secret',
        'Sickly',
        'Dark',
        'Shadow',
        'Simple',
        'Special',
        'Spectacular',
        'Spiritual',
        'Square',
        'Round',
        'Triangular',
        'Stormy',
        'Young',
        'Wandering',
        'Whimsical',
        'Wicked',
        'Wild',
        'Windy',
        'Wise',
        'Wretched',
        'Venomous',
        'Violent',
        'Violet',
        'Unknown',
        'Alien',
    ];
    const nm5 = [
        'Jolly',
        'Broad',
        'Brass',
        'Copper',
        'Golden',
        'Silver',
        'Bronze',
        'Massive',
        'Huge',
        'Teeny',
        'Tiny',
        'Puny',
        'Mammoth',
        'Gigantic',
        'Colossal',
        'Big',
        'Quiet',
        'Thundering',
        'Whispering',
        'Ancient',
        'Beautiful',
        'Fancy',
        'Magnificent',
        'Mysterious',
        'Old',
        'Short',
        'Heavy',
        'Light',
        'Elegent',
        'Enchanted',
        'Exclusive',
        'Exotic',
        'Dramatic',
        'Curious',
        'Aromatic',
        'Awesome',
        'Imaginary',
        'Incredible',
        'Healthy',
        'Heavenly',
        'Hollow',
        'Huge',
        'Hypnotic',
        'Gentle',
        'Giant',
        'Glistening',
        'Glorious',
        'Goofy',
        'Gorgeous',
        'Greasy',
        'Groovy',
        'Gruesome',
        'Fabulous',
        'Faded',
        'False',
        'Familiar',
        'Fancy',
        'Fantastic',
        'Fascinating',
        'Foolish',
        'Fragile',
        'Free',
        'Frightened',
        'Frightening',
        'Last',
        'Little',
        'Lonely',
        'Lush',
        'Magical',
        'Majestic',
        'Mellow',
        'Mighty',
        'Misty',
        'Minor',
        'Misty',
        'Moldy',
        'Naive',
        'Narrow',
        'Nonstalgic',
        'Quiet',
        'Peaceful',
        'Plain',
        'Pleasant',
        'Precious',
        'Private',
        'Rare',
        'Regular',
        'Reflecting',
        'Royal',
        'Tall',
        'Terrific',
        'Thick',
        'Thin',
        'Threatening',
        'Tired',
        'Towering',
        'Scattered',
        'Secret',
        'Shaggy',
        'Sickly',
        'Simple',
        'Sleepy',
        'Special',
        'Spectacular',
        'Spotless',
        'Spotted',
        'Stormy',
        'Young',
        'Waiting',
        'Wandering',
        'Whimsical',
        'Wicked',
        'Wild',
        'Windy',
        'Wise',
        'Wretched',
        'Violet',
        'Unique',
        'Unknown',
        'Unnatural',
        'Alien',
    ];
    const nm6 = [
        'Alder',
        'Ash',
        'Ash',
        'Ash',
        'Beech',
        'Birch',
        'Birch',
        'Birch',
        'Bladdernut',
        'Buckeye',
        'Cedar',
        'Chestnut',
        'Cypress',
        'Devilwood',
        'Dogwood',
        'Elderberry',
        'Elm',
        'Fir',
        'Harlequin',
        'Hemlock',
        'Hickory',
        'Holly',
        'Ironwood',
        'Jacktree',
        'Juniper',
        'Linden',
        'Locust',
        'Magnolia',
        'Maple',
        'Maple',
        'Maple',
        'Maple',
        'Musclewood',
        'Oak',
        'Oak',
        'Oak',
        'Oak',
        'Olive',
        'Palm',
        'Pawpaw',
        'Peach',
        'Pine',
        'Pine',
        'Pine',
        'Pine',
        'Apple',
        'Raspberry',
        'Plum',
        'Poplar',
        'Redbud',
        'Redwood',
        'Redwood',
        'Silverbell',
        'Spruce',
        'Spruce',
        'Spruce',
        'Spruce',
        'Sumac',
        'Tupelo',
        'Walnut',
        'Willow',
        'Willow',
        'Willow',
        'Willow',
        'Hazulnut',
        'Blueberry',
        'Chestnut',
        'Blackberry',
        'Butternut',
        'Pecan',
        'River',
        'Lake',
        'Wetland',
        'Stream',
        'Creek',
        'Brook',
        'Rivulet',
        'Basin',
        'Lagoon',
        'Loch',
        'Pond',
        'Spring',
        'Reservoir',
        'Basin',
        'Marsh',
        'Quagmire',
        'Swampland',
        'Bog',
        'Clearing',
        'Glade',
        'Field',
        'Hill',
        'Garden',
        'Range',
        'Territory',
        'Meadow',
        'Mead',
        'Grassland',
        'Bluff',
        'Cliff',
        'Highland',
        'Knoll',
        'Mound',
        'Mount',
        'Thorn',
    ];
    const nm7 = [
        'b',
        'br',
        'bl',
        'c',
        'cl',
        'cr',
        'd',
        'dr',
        'f',
        'fr',
        'fl',
        'g',
        'gr',
        'gl',
        'gn',
        'h',
        'j',
        'k',
        'kr',
        'kl',
        'kn',
        'm',
        'n',
        'p',
        'pr',
        'pl',
        'q',
        'qr',
        'ql',
        'r',
        's',
        'st',
        'sr',
        'str',
        'sl',
        't',
        'tr',
        'tl',
        'v',
        'vl',
        'vr',
        'w',
        'wr',
        'x',
        'z',
        '',
        '',
        '',
        '',
        '',
    ];
    const nm8 = ['a', 'e', 'i', 'o', 'u', 'y'];
    const nm9 = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'v',
        'w',
        'x',
        'z',
        '',
        '',
        '',
        '',
        '',
        '',
    ];
    const nm10 = ['a', 'e', 'i', 'o', 'u', 'y'];
    const nm11 = [
        'b',
        'd',
        'g',
        'gh',
        'h',
        'hr',
        'hs',
        'ht',
        'hst',
        'hsh',
        'hn',
        'hm',
        'hl',
        'hz',
        'hx',
        'hq',
        'k',
        'ks',
        'kx',
        'l',
        'll',
        'lk',
        'ln',
        'lm',
        'lz',
        'lp',
        'lt',
        'ls',
        'lst',
        'lf',
        'm',
        'mn',
        'mm',
        'mt',
        'ms',
        'n',
        'nn',
        'nt',
        'ns',
        'p',
        'ps',
        'pt',
        'ph',
        'q',
        'r',
        'rs',
        'rt',
        'rst',
        'rq',
        'rk',
        'rc',
        'rf',
        'rb',
        'rd',
        's',
        'st',
        'ss',
        'sh',
        'sk',
        'sp',
        't',
        'th',
        'ts',
        'w',
        'wth',
        'x',
        'z',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 2) {
            names = `${sample(nm5)} ${sample(nm6)} ${sample(nm3)}`;
        } else if (i < 4) {
            names = `${sample(nm4)} ${sample(nm3)}`;
        } else if (i < 6) {
            names = `${sample(nm1)} ${sample(nm2)} ${sample(nm3)}`;
        } else if (i < 8) {
            names = `${sample(nm7) + sample(nm8) + sample(nm11)} ${sample(nm3)}`;
        } else {
            names = `${sample(nm7) + sample(nm8) + sample(nm9) + sample(nm10) + sample(nm11)} ${sample(nm3)}`;
        }
        return names;
    }
}
