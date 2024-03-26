import { sample } from 'lodash-es';

export default function birdOfPreys() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Ace',
        'Achilles',
        'Admiral',
        'Ajax',
        'Ammo',
        'Apache',
        'Apollo',
        'Aquila',
        'Arcane',
        'Archer',
        'Argos',
        'Artemis',
        'Ash',
        'Atlas',
        'Avalanche',
        'Awe',
        'Bandit',
        'Bane',
        'Blaze',
        'Blight',
        'Blitz',
        'Blood',
        'Bolt',
        'Bones',
        'Boon',
        'Brawn',
        'Brutus',
        'Buck',
        'Bullet',
        'Bullseye',
        'Butch',
        'Buzz',
        'Caine',
        'Champ',
        'Chaos',
        'Chase',
        'Cloud',
        'Coal',
        'Comet',
        'Courage',
        'Dagger',
        'Darth',
        'Diablo',
        'Doom',
        'Drake',
        'Dread',
        'Duke',
        'Dusk',
        'Dust',
        'Echo',
        'Eclipse',
        'Edge',
        'Force',
        'Frenzy',
        'Fury',
        'Genghis',
        'Ghost',
        'Goliath',
        'Gray',
        'Griffin',
        'Grim',
        'Gunner',
        'Hades',
        'Hannibal',
        'Havock',
        'Hawke',
        'Hawkeye',
        'Hector',
        'Hero',
        'Hooch',
        'Hulk',
        'Hunter',
        'Hyde',
        'Ice',
        'Jax',
        'Jeckyll',
        'Judge',
        'Khan',
        'Kindle',
        'King',
        'Lecter',
        'Legend',
        'Loki',
        'Lucifer',
        'Magnum',
        'Maverick',
        'Mayhem',
        'Merlin',
        'Midnight',
        'Mirage',
        'Myst',
        'Nemesis',
        'Neo',
        'Nero',
        'Nightmare',
        'Nyx',
        'Obsidian',
        'Onyx',
        'Orion',
        'Pandora',
        'Panther',
        'Pepper',
        'Phantom',
        'Phoenix',
        'Pride',
        'Pyro',
        'Rage',
        'Rampage',
        'Ranger',
        'Raven',
        'Razor',
        'Reaper',
        'Rebel',
        'Ripley',
        'Riptide',
        'Rogue',
        'Ryder',
        'Sabath',
        'Saber',
        'Sable',
        'Savage',
        'Scandal',
        'Scourge',
        'Shade',
        'Shadow',
        'Shiv',
        'Sky',
        'Slate',
        'Sly',
        'Sniper',
        'Snow',
        'Steele',
        'Storm',
        'Striker',
        'Surge',
        'Talon',
        'Tank',
        'Terror',
        'Thunder',
        'Titan',
        'Titanium',
        'Torment',
        'Triumph',
        'Vapor',
        'Viper',
        'Vlad',
        'Whisper',
        'Wicked',
        'Wrath',
        'Xerxes',
    ];
    const nm2 = [
        'Acadia',
        'Alexis',
        'Alibi',
        'Amazone',
        'Amber',
        'Angel',
        'Aphrodite',
        'Arcane',
        'Ares',
        'Ash',
        'Ashes',
        'Astral',
        'Athena',
        'Aura',
        'Aurora',
        'Azure',
        'Banshee',
        'Blaze',
        'Blitz',
        'Bones',
        'Calypso',
        'Charity',
        'Clemency',
        'Cleo',
        'Cleopatra',
        'Codex',
        'Dahlia',
        'Dakota',
        'Dawn',
        'Diva',
        'Ebony',
        'Echo',
        'Eclipse',
        'Eve',
        'Faith',
        'Faye',
        'Fire',
        'Gidget',
        'Ginger',
        'Grace',
        'Harmony',
        'Hazel',
        'Helena',
        'Hope',
        'Huntress',
        'Ice',
        'Ivory',
        'Jade',
        'Jewel',
        'Jinx',
        'Justice',
        'Jynx',
        'Karma',
        'Labyrinth',
        'Lady',
        'Liberty',
        'Love',
        'Luna',
        'Maiden',
        'Maya',
        'Medusa',
        'Melancholy',
        'Mercy',
        'Midnight',
        'Mischief',
        'Mistress',
        'Moone',
        'Myst',
        'Mystique',
        'Nighte',
        'Nova',
        'Nyx',
        'Olympia',
        'Onyxia',
        'Ozone',
        'Pandora',
        'Patience',
        'Phoenix',
        'Princess',
        'Raine',
        'Raven',
        'Rebel',
        'Ribbon',
        'Ripley',
        'Robin',
        'Rogue',
        'Ruby',
        'Rune',
        'Ruth',
        'Sable',
        'Sabre',
        'Sanguine',
        'Scarlett',
        'Serenity',
        'Shade',
        'Shadow',
        'Shaye',
        'Siren',
        'Skye',
        'Snow',
        'Storm',
        'Termina',
        'Truce',
        'Twilight',
        'Tyra',
        'Vanity',
        'Velvet',
        'Victoria',
        'Violet',
        'Vixen',
        'Wilde',
        'Willow',
        'Winter',
        'Xena',
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
