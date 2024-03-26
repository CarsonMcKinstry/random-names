import { sample } from 'lodash-es';

export default function boardGames() {
    let names: string;
    const nm1 = [
        'Abduction',
        'Adrift',
        'Agency',
        'Alarm',
        'Ambush',
        'Analyze',
        'Anarchy',
        'Anticipation',
        'Ashes to Ashes',
        'Assassins',
        'Assemble',
        'At Sea',
        'Avant-Garde',
        'Ax to Grind',
        'Backbone',
        'Bad Manners',
        'Bankroll',
        'Bankrupt',
        'Beat the System',
        'Bed of Roses',
        'Beef Up',
        'Best Guess',
        'Big Hit',
        'Biohazard',
        'Black Arts',
        'Black Market',
        'Blessings',
        'Blitzkreig',
        'Blizzard',
        'Bloodborn',
        'Bolster',
        'Bombardment',
        'Bonedust',
        'Boundaries',
        'Brawl',
        'Break Down',
        'Breakdown',
        'Brother Bother',
        'Buccaneers',
        "Bull's Eye",
        'Burrow',
        'Buzz',
        'Carnage',
        'Cast Down',
        'Cat Burglar',
        'Cat and Mouse',
        'Champions',
        'Charge',
        'Chime In',
        'Cipher',
        'Clamor',
        'Clandestine',
        'Clash',
        'Classified',
        'Clear As Day',
        'Cloak and Dagger',
        'Cloud Nine',
        'Cloudburst',
        'Coffee Break',
        'Coincidence',
        'Collapse',
        'Collision',
        'Compass',
        'Complot',
        'Confinement',
        'Conquest',
        'Contrast',
        'Cookie Crumbles',
        'Counterplot',
        'Countersign',
        'Cross Swords',
        'Crusade',
        'Cryptic Crypts',
        'Crystals',
        'Cunning',
        'Cured',
        'Custody',
        'Cut Loose',
        'Daydream',
        'Delight',
        'Delusion',
        'Deserted',
        'Destiny',
        'Devolution',
        'Disclosed',
        'Disguise',
        'Dismantle',
        'Dissaray',
        'Dodge',
        'Dominion',
        'Double Trouble',
        'Down the Drain',
        'Dragon Slayer',
        'Dreamland',
        'Dynamite',
        'Eclipse',
        'Effigy',
        'Eggs in One Basket',
        'Embezzler',
        'Emergency',
        'Empower',
        'Enchantments',
        'Endurance',
        'Enigma',
        'Entangled',
        'Entity',
        'Envision',
        'Escape',
        'Espionage',
        'Evolution',
        'Exorcism',
        'Expedition',
        'Extermination',
        'Extinction',
        'False Pretense',
        'Fame',
        'Fame and Fortune',
        'Fata Morgana',
        'Fifty Fifty',
        'Fighting Chance',
        'Figments',
        'Flabbergasted',
        'Flourish',
        'Fluke',
        'Flush Out',
        'Flying Colors',
        'Focal Point',
        'Foiled',
        "Fool's Paradise",
        'Forfeit',
        'Forsaken',
        'Foundations',
        'Fracas',
        'Gambol',
        'Gem Jam',
        'Generations',
        'Getaway',
        'Ghost Whisperer',
        'Go For Broke',
        'Go Under',
        'Good Times',
        'Gophers',
        'Grand Slam',
        'Grapple',
        'Groundwork',
        'Guerrilla',
        'Guesstimation',
        'Haphazard',
        'Harmonize',
        'Have a Look',
        'Havoc',
        'Hazard',
        'Heat',
        'Heave Ho',
        'Heckler',
        'Heirlooms',
        'Held Captive',
        'Hijacked',
        'Hone In',
        'Honesty',
        'Horse Around',
        'Hot Potato',
        'Hunting Grounds',
        'Hush Hush',
        'Ignorance is Bliss',
        'Illusions',
        'Immunity',
        'Impersonate',
        'Impulse',
        'In the Cards',
        'Incognito',
        'Inferno',
        'Ingenuity',
        'Inquire',
        'Inside Out',
        'Interference',
        'Interruption',
        'Intrusion',
        'Invasion',
        'Isolation',
        'Jabber',
        'Jackpot',
        'Jaw Dropper',
        'Jingle Jangle',
        'Karma',
        'Keep in Sight',
        'Key Word',
        'Kiss Goodbye',
        'Knock Off',
        'Knuckle Down',
        'Lap of Luxury',
        'Let Loose',
        'Life Spark',
        'Lightspeed',
        'Lightyear',
        'Limbo',
        'Limelight',
        'Loan Shark',
        'Long Con',
        'Long Shot',
        'Loophole',
        'Loyalty',
        'Magic Number',
        'Mania',
        'Manipulation',
        'Massacre',
        'Mastery',
        'Medium',
        'Memento',
        'Menace',
        'Metamorphose',
        'Miracles',
        'Mismatch',
        'Mithril',
        'Mix It Up',
        'Monarchy',
        'Monkey Business',
        'Morale',
        'Morality',
        'Mortal Beings',
        'Moxie',
        'Multiply',
        'Mutation',
        'Mystical Myths',
        'Negotiations',
        'Neutralize',
        'Nightowl',
        'No Prisoners',
        'Nonsense',
        'Nourish',
        'Obliterate',
        'Oblivion',
        'Obscurity',
        'Obsidian',
        'Obsolete',
        'Occult',
        'Offhand',
        'On The Rocks',
        'On the Line',
        'On the Prowl',
        'One-Track Mind',
        'Oomph',
        'Open Sesame',
        'Operator',
        'Opposition',
        'Oracle',
        'Orbit',
        'Order',
        'Out of View',
        'Out the Window',
        'Overpower',
        'Overthrow',
        'Paradise',
        'Password',
        'Patterns',
        'Peasants',
        'Penumbra',
        'Peons',
        'Peril',
        'Perish',
        'Persistence',
        'Phantom',
        'Phobia',
        'Pickpocket',
        'Pilgrimage',
        'Pitfall',
        'Platform',
        'Play With Fire',
        'Plunge',
        'Poppycock',
        'Probe',
        'Prodigy',
        'Promotion',
        'Prospects',
        'Prosperity',
        'Puppet Master',
        'Pursuit',
        'Quads',
        'Quarrel',
        'Quest',
        'Rack and Ruin',
        'Raise Dough',
        'Rapture',
        'Redemption',
        'Reign',
        'Reinforcements',
        'Rejuvenate',
        'Relics',
        'Resources',
        'Revelations',
        'Rifts',
        'Risky Business',
        'Road to Ruin',
        'Roll Back',
        'Rope In',
        'Safeguard',
        'Savvy',
        'Scot-Free',
        'Scraps',
        'Scrapyard',
        'Scrimmage',
        'Seasons',
        'Secure',
        'Sensations',
        'Sentinels',
        'Sequence',
        'Serendipity',
        'Set Sail',
        'Set Up',
        'Setback',
        'Shackled',
        'Shift Gears',
        'Shipwreck',
        'Shock Phase',
        'Shore Up',
        'Shortstop',
        'Shot in the Dark',
        'Show Off',
        'Sidestep',
        'Signal',
        'Skirmish',
        'Sleight of Hand',
        'Sorcery',
        'Speculation',
        'Spotlight',
        'Squires',
        'Staged',
        'Stay the Course',
        'Steamroll',
        'Stocks',
        'Stones Unturned',
        'Storm',
        'Straitjacket',
        'Streak of Luck',
        'Strife',
        'Stroke of Luck',
        'Stupefy',
        'Stupidity',
        'Submerged',
        'Subtlety',
        'Surrender',
        'Suspense',
        'Suspension of Disbelief',
        'Sustenance',
        'Swamps',
        'Swindle',
        'Swindled',
        'Switched',
        'Tact',
        'Take Away',
        'Tempt Fate',
        'Termination',
        'Terra Form',
        'The Shattering',
        'The Skids',
        'The Void',
        'Thin Ice',
        'Time Out',
        'Top Secret',
        'Torpedo',
        'Tragedy',
        'Train of Thought',
        'Treachery',
        'Tread the Boards',
        'Treason',
        'Trespasser',
        'Trials and Tribulations',
        'Trigger Finger',
        'Trigger Happy',
        'Trio',
        'Triumph',
        'Tug of War',
        'Turn of the Cards',
        'Twilight',
        'Tycoons',
        'Umbrage',
        'Undead',
        'Under Wraps',
        'Under the Table',
        'Undercover',
        'Underground',
        'Unforeseen',
        'Utopia',
        'Vanish',
        'Venture',
        'Voodoo',
        'Wager',
        'Wait Out',
        'Way of Life',
        'Wayward',
        'Wildcat',
        'Wipe Out',
        'Wisdom',
        'Wit',
        'Without a Trace',
        'Wrecking Ball',
        'Wriggle Room',
        'Yakkety Yak',
        'Yields',
        'Zoom In',
    ];
    {
        names = sample(nm1);
        return names;
    }
}
