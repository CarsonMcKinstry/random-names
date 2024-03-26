import { sample } from 'lodash-es';

export default function scythes() {
    let names: string;
    const nm1 = [
        'Adjudicator',
        'Alpha',
        'Amnesia',
        'Angerfang',
        'Anguish',
        'Perdition',
        'Purgatory',
        'The Undertaker',
        'Hindscythe',
        'Annihilation',
        'Annihilator',
        'Apathy',
        'Avenger',
        'Avian Claw',
        'Backscythe',
        'Bad Break Up',
        'Bane',
        'Barbara',
        'Betrayal',
        'Betrayer',
        'Blackened Heart',
        'Blackest Heart',
        'Blackfury',
        'Blackheart',
        'Blackout',
        'Blight',
        'Blind Justice',
        'Blindscythe',
        'Bloodfall',
        'Bonestrike',
        'Break Up',
        'Broken Promise',
        'Caretaker',
        'Carver',
        'Celeste',
        'Chaos',
        'Chillspike',
        'Closure',
        'Collector',
        'Compassion',
        'Conclusion',
        'Consequence',
        'Corruption',
        'Coup de Grace',
        'Crescent Moon',
        'Cruelty',
        'Dark Intent',
        'Dark Reaper',
        'Darkest Claw',
        'Darkfury',
        'Darkness',
        'Deadline',
        'Death Crown',
        "Death's Claw",
        "Death's Curve",
        "Death's Fang",
        "Death's Grasp",
        "Death's Reach",
        "Death's Resolve",
        "Death's Scalpel",
        "Death's Touch",
        "Death's Windmill",
        'Deathraze',
        'Decapitation',
        'Demilune',
        'Demise',
        'Despair',
        'Dignity',
        'Discontinued',
        'Downfall',
        'Due Diligence',
        'Ebon Claw',
        'Ebon Fang',
        'Ebon Tusk',
        'Ebonblade',
        'Ebonfury',
        'Echo',
        'Empathy',
        'Endbringer',
        'Epilogue',
        'Eradicate',
        'Eradication',
        'Eternal Rest',
        'Eternal Sleep',
        'Eternity',
        'Euthanasia',
        'Execution',
        'Expiration',
        'Expired',
        'Extinction',
        'Extraction',
        'Extractor',
        'Eyegouger',
        'Final Achievement',
        'Final Critic',
        'Fleshrender',
        'Forscythe',
        'Frenzy',
        'Grace',
        'Grasscutter',
        'Grave Filler',
        'Gravescythe',
        'Great Finale',
        'Grieving Blade',
        'Grim Reaper',
        'Gutrender',
        'Harvester',
        "Hell's Curve",
        "Hell's Fang",
        "Hell's Slice",
        'Hellreaver',
        "Hope's End",
        'Hoperender',
        'Howler',
        'Hunger',
        'Hungerer',
        'Hush',
        'Impaler',
        'Inscythe',
        'Interruption',
        'Iron Crown',
        'Iron Curtain',
        'Isolation',
        'Justice',
        'Kinslayer',
        'Lance',
        'Last Favor',
        'Last Rites',
        'Last Slice',
        'Last Words',
        "Life's Interruption",
        "Life's Limit",
        'Limbo',
        'Locust',
        'Malice',
        'Mantis',
        'Marrowstrike',
        'Massacre',
        'Meniscus',
        'Mercy',
        "Misery's End",
        'Muffler',
        'Narrowstrike',
        'Necrosis',
        'Nethersbane',
        "Night's Fall",
        'Nightbane',
        'Nightfall',
        'Nightmare',
        'Oathbinder',
        'Oathkeeper',
        'Oblivion',
        'Omega',
        'Outscythe',
        'Peacemaker',
        'Perfect Execution',
        'Piece Maker',
        'Pincer',
        'Predator',
        'Quarantine',
        'Razor',
        'Razorblade',
        "Reaper's Claw",
        "Reaper's Fang",
        "Reaper's Touch",
        'Reconciler',
        'Remorse',
        "Reapar's Reach",
        'Rigormortis',
        'Scalpel',
        'Scytheburn',
        'Seethe',
        'Seperation',
        'Severance',
        'Severus',
        'Shepherd',
        'Shiverspine',
        'Silence',
        'Sinister',
        'Skewer',
        'Slash',
        'Sleep',
        'Slice of Life',
        'Solitary',
        'Solitude',
        'Soulbreaker',
        'Souldrinker',
        'Splitter',
        'Spur',
        'Subscythe',
        'Suspension',
        'Swan Song',
        'Sympathy',
        'Termination',
        'The Culling',
        'The End',
        'The Facelifter',
        'The Inevitable',
        'The Judge',
        'The Warden',
        'Tranquillizer',
        'Unholy Might',
        'Valkyrie',
        'Vanquisher',
        'Widowblight',
        'Widowmaker',
        'Willbreaker',
    ];
    const nm2 = [
        'Ancient',
        "Anguish'",
        'Annihilation',
        'Antique',
        'Apocalypse',
        'Apocalyptic',
        'Arcane',
        'Arched',
        'Assassination',
        'Atuned',
        'Baneful',
        'Banished',
        'Battleworn',
        'Blazefury',
        'Blood Infused',
        'Blood-Forged',
        'Bloodcursed',
        'Bloodied',
        "Bloodlord's",
        'Bloodsurge',
        'Bloodvenom',
        'Bonecarvin',
        'Brutal',
        'Burnished',
        'Cataclysm',
        'Cataclysmic',
        'Cold-Forged',
        'Corroded',
        'Corrupted',
        'Crazed',
        'Crying',
        'Cursed',
        'Curved',
        'Dancing',
        'Dark',
        'Darkness',
        'Decapitating',
        'Defiled',
        'Defiling',
        'Deluded',
        'Demonic',
        'Deserted',
        "Desire's",
        'Desolation',
        "Destiny's",
        'Diabolical',
        'Dire',
        'Doom',
        "Doom's",
        'Eerie',
        'Enchanted',
        'Engraved',
        'Eternal',
        'Executing',
        'Exiled',
        'Extinction',
        "Faith's",
        'Faithful',
        'Fearful',
        'Feral',
        'Ferocious',
        'Fierce',
        'Fiery',
        'Fire Infused',
        'Firesoul',
        'Firestorm',
        'Flaming',
        'Flimsy',
        'Forsaken',
        "Fortune's",
        'Foul',
        'Frenzied',
        'Frost',
        'Frozen',
        'Furious',
        'Fusion',
        'Ghastly',
        'Ghost-Forged',
        'Ghostly',
        'Gladiator',
        "Gladiator's",
        'Gleaming',
        'Glinting',
        'Greedy',
        'Grieving',
        'Grim',
        "Guard's",
        "Guardian's",
        'Hailstorm',
        'Hateful',
        'Haunted',
        'Heartless',
        'Heinous',
        'Hollow',
        'Holy',
        'Honed',
        'Hopeless',
        'Howling',
        'Hungering',
        'Improved',
        'Impure',
        'Incarnated',
        'Infused',
        'Inherited',
        'Jade Infused',
        'Judgement',
        "Liar's",
        'Lich',
        'Lightning',
        'Lonely',
        'Loyal',
        'Lustful',
        'Lusting',
        "Mage's",
        'Malevolent',
        'Malicious',
        'Malificent',
        'Malignant',
        'Massive',
        'Mended',
        'Military',
        "Misfortune's",
        'Misty',
        'Moonlit',
        'Mourning',
        'Nightmare',
        'Ominous',
        'Peacekeeper',
        'Phantom',
        'Polished',
        'Possessed',
        "Pride's",
        'Prideful',
        'Primitive',
        'Promised',
        "Protector's",
        'Proud',
        'Pure',
        'Putrid',
        'Raging',
        'Reforged',
        'Reincarnated',
        'Relentless',
        'Remorseful',
        'Renewed',
        'Renovated',
        'Replica',
        'Restored',
        'Retribution',
        'Ritual',
        'Roaring',
        'Ruby Infused',
        'Rune-Forged',
        'Rusty',
        'Savage',
        'Shadow',
        'Sharpened',
        'Silent',
        'Singed',
        'Singing',
        'Sinister',
        'Skeletal',
        'Skullforge',
        'Skyfall',
        'Smooth',
        "Solitude's",
        "Sorrow's",
        'Soul',
        'Soul Infused',
        'Soul-Forged',
        'Soulcursed',
        'Soulless',
        'Spectral',
        'Spectral-Forged',
        'Spiteful',
        'Storm',
        'Storm-Forged',
        'Stormfury',
        'Stormguard',
        'Terror',
        'Thirsting',
        'Thirsty',
        'Thunder',
        'Thunder-Forged',
        'Thunderfury',
        'Thundersoul',
        'Thunderstorm',
        'Timeworn',
        'Tormented',
        "Trainee's",
        "Treachery's",
        'Twilight',
        "Twilight's",
        'Twisted',
        'Tyrannical',
        'Undead',
        'Unholy',
        'Vengeance',
        'Vengeful',
        'Venom',
        'Vicious',
        'Vile',
        'Vindication',
        'Vindictive',
        'Void',
        'Volcanic',
        'Vowed',
        'War-Forged',
        "Warlord's",
        'Warp',
        'Warped',
        'Whistling',
        'Wicked',
        "Wind's",
        'Wind-Forged',
        'Windsong',
        'Woeful',
        'Wrathful',
        'Wretched',
        'Yearning',
        'Zealous',
    ];
    const nm3 = [
        'Adamantite',
        'Mithril',
        'Obsidian',
        'Silver',
        'Skeletal',
        'Steel',
        'Ebon',
        'Ivory',
        'Ironbark',
        'Oak',
        'Maple',
        'Yew',
        'Ashwood',
        'Warpwood',
        'Ebonsteel',
        'Demonic',
        'Demonsteel',
        'Ebony',
        'Onyx',
        'Shadowsteel',
        'Phantomsteel',
    ];
    const nm4 = [
        'Battlescythe',
        'Blade',
        'Edge',
        'Glaive',
        'Gouger',
        'Impaler',
        'Razor',
        'Reaper',
        'Reaver',
        'Ripper',
        'Scalpel',
        'Scythe',
        'Slash',
        'Slicer',
        'Sickle',
        'Spine',
        'Striker',
        'Warblade',
        'Warglaive',
        'Warscythe',
    ];
    const nm5 = [
        'Annihilation',
        'Battlescythe',
        'Betrayer',
        'Blade',
        'Blessed Blade',
        'Blood Blade',
        'Bond',
        'Boon',
        'Breaker',
        'Bringer',
        'Butcher',
        'Call',
        'Carver',
        'Champion',
        'Cry',
        'Cunning',
        'Dark Blade',
        'Dawn',
        'Defiler',
        'Destroyer',
        'Doomblade',
        'Ebonblade',
        'Edge',
        'Ender',
        'Etcher',
        'Executioner',
        'Favor',
        'Foe',
        'Gift',
        'Glaive',
        'Glory',
        'Gouger',
        'Guardian',
        'Heirloom',
        'Hope',
        'Impaler',
        'Incarnation',
        'Jaw',
        'Last Hope',
        'Last Stand',
        'Legacy',
        'Memory',
        'Might',
        'Oath',
        'Pact',
        'Pledge',
        'Promise',
        'Protector',
        'Quickblade',
        'Ravager',
        'Razor',
        'Reach',
        'Reaper',
        'Reaver',
        'Ripper',
        'Runed Blade',
        'Saber',
        'Savagery',
        'Scalpel',
        'Sculptor',
        'Scythe',
        'Secret',
        'Sickle',
        'Skewer',
        'Slash',
        'Slayer',
        'Slicer',
        'Soul',
        'Spellblade',
        'Spine',
        'Striker',
        'Swiftblade',
        'Terror',
        'Token',
        'Tribute',
        'Vengeance',
        'Voice',
        'Warblade',
        'Warglaive',
        'Warscythe',
        'Whisper',
        'Wit',
    ];
    const nm6 = [
        'of Agony',
        'of Ancient Power',
        'of Anguish',
        'of Ashes',
        'of Assassins',
        'of Black Magic',
        'of Blessed Fortune',
        'of Blessings',
        'of Blight',
        'of Blood',
        'of Bloodlust',
        'of Broken Bones',
        'of Broken Dreams',
        'of Broken Families',
        'of Burdens',
        'of Chaos',
        'of Closing Eyes',
        'of Conquered Worlds',
        'of Corruption',
        'of Cruelty',
        'of Cunning',
        'of Dark Magic',
        'of Dark Souls',
        'of Darkness',
        'of Decay',
        'of Deception',
        'of Degradation',
        'of Delusions',
        'of Denial',
        'of Desecration',
        'of Diligence',
        'of Dismay',
        'of Dragonsouls',
        'of Due Diligence',
        'of Echoes',
        'of Ended Dreams',
        'of Ending Hope',
        'of Ending Misery',
        'of Eternal Bloodlust',
        'of Eternal Damnation',
        'of Eternal Glory',
        'of Eternal Justice',
        'of Eternal Rest',
        'of Eternal Sorrow',
        'of Eternal Struggles',
        'of Eternity',
        'of Executions',
        'of Faded Memories',
        'of Fallen Souls',
        'of Fools',
        'of Frost',
        'of Frozen Hells',
        'of Fury',
        'of Giants',
        'of Giantslaying',
        'of Grace',
        'of Grieving Widows',
        'of Hate',
        'of Hatred',
        "of Hell's Games",
        'of Hellish Torment',
        'of Heroes',
        'of Holy Might',
        'of Honor',
        'of Hope',
        'of Horrid Dreams',
        'of Horrors',
        'of Illuminated Dreams',
        'of Illumination',
        'of Immortality',
        'of Inception',
        'of Infinite Trials',
        'of Insanity',
        'of Invocation',
        'of Justice',
        "of Light's Hope",
        'of Lost Comrades',
        'of Lost Hope',
        'of Lost Voices',
        'of Lost Worlds',
        'of Magic',
        'of Mercy',
        'of Misery',
        'of Mountains',
        'of Mourning',
        'of Mystery',
        'of Necromancy',
        'of Nightmares',
        'of Oblivion',
        'of Perdition',
        'of Phantoms',
        'of Power',
        'of Pride',
        "of Pride's Fall",
        'of Putrefaction',
        'of Reckoning',
        'of Redemption',
        'of Regret',
        'of Riddles',
        'of Secrecy',
        'of Secrets',
        'of Shadow Strikes',
        'of Shadows',
        'of Shifting Sands',
        'of Shifting Worlds',
        'of Silence',
        'of Slaughter',
        'of Souls',
        'of Stealth',
        'of Storms',
        'of Subtlety',
        'of Suffering',
        "of Suffering's End",
        'of Summoning',
        'of Terror',
        'of Thunder',
        'of Time-Lost Memories',
        'of Timeless Battles',
        'of Titans',
        'of Torment',
        'of Traitors',
        'of Trembling Hands',
        'of Trials',
        'of Truth',
        "of Twilight's End",
        'of Twisted Visions',
        'of Unholy Blight',
        'of Unholy Might',
        'of Vengeance',
        'of Visions',
        'of Wasted Time',
        'of Widows',
        'of Wizardry',
        'of Woe',
        'of Wraiths',
        'of Zeal',
        'of the Ancients',
        'of the Banished',
        'of the Basilisk',
        'of the Beast',
        'of the Blessed',
        'of the Breaking Storm',
        'of the Brotherhood',
        'of the Burning Sun',
        'of the Caged Mind',
        'of the Cataclysm',
        'of the Champion',
        'of the Claw',
        'of the Corrupted',
        'of the Covenant',
        'of the Crown',
        'of the Damned',
        'of the Daywalker',
        'of the Dead',
        'of the Depth',
        'of the Dreadlord',
        'of the Earth',
        'of the East',
        'of the Emperor',
        'of the Empty Void',
        'of the End',
        'of the Enigma',
        'of the Fallen',
        'of the Falling Sky',
        'of the Flame',
        'of the Forest',
        'of the Forgotten',
        'of the Forsaken',
        'of the Gladiator',
        'of the Harvest',
        'of the Immortal',
        'of the Incoming Storm',
        'of the Insane',
        'of the King',
        'of the Lasting Night',
        'of the Leviathan',
        'of the Light',
        'of the Lion',
        'of the Lionheart',
        'of the Lone Victor',
        'of the Lone Wolf',
        'of the Lost',
        'of the Moon',
        'of the Moonwalker',
        'of the Night Sky',
        'of the Night',
        'of the Nightstalker',
        'of the North',
        'of the Occult',
        'of the Oracle',
        'of the Phoenix',
        'of the Plague',
        'of the Prince',
        'of the Protector',
        'of the Queen',
        'of the Serpent',
        'of the Setting Sun',
        'of the Shadows',
        'of the Sky',
        'of the South',
        'of the Stars',
        'of the Storm',
        'of the Summoner',
        'of the Sun',
        'of the Sunwalker',
        'of the Talon',
        'of the Undying',
        'of the Victor',
        'of the Void',
        'of the West',
        'of the Whispers',
        'of the Wicked',
        'of the Wind',
        'of the Wolf',
        'of the World',
        'of the Wretched',
    ];
    const nm7 = [
        'Adjudicator',
        'Alpha',
        'Amnesia',
        'Angerfang',
        'Anguish',
        'Perdition',
        'Purgatory',
        'The Undertaker',
        'Annihilation',
        'Annihilator',
        'Apathy',
        'Avenger',
        'Avian Claw',
        'Backscythe',
        'Bane',
        'Barbara',
        'Betrayal',
        'Betrayer',
        'Blackened Heart',
        'Blackest Heart',
        'Blackfury',
        'Blackheart',
        'Blackout',
        'Blight',
        'Blind Justice',
        'Blindscythe',
        'Bloodfall',
        'Bonestrike',
        'Break Up',
        'Broken Promise',
        'Caretaker',
        'Carver',
        'Celeste',
        'Chaos',
        'Chillspike',
        'Closure',
        'Collector',
        'Compassion',
        'Conclusion',
        'Consequence',
        'Corruption',
        'Crescent Moon',
        'Cruelty',
        'Dark Reaper',
        'Darkfury',
        'Darkness',
        'Deadline',
        'Death Crown',
        "Death's Claw",
        "Death's Curve",
        "Death's Fang",
        "Death's Grasp",
        "Death's Reach",
        "Death's Resolve",
        "Death's Scalpel",
        "Death's Touch",
        'Deathraze',
        'Decapitation',
        'Demilune',
        'Demise',
        'Downfall',
        'Due Diligence',
        'Ebon Claw',
        'Ebon Fang',
        'Ebon Tusk',
        'Ebonblade',
        'Ebonfury',
        'Echo',
        'Empathy',
        'Endbringer',
        'Epilogue',
        'Eternal Rest',
        'Eternal Sleep',
        'Eternity',
        'Euthanasia',
        'Execution',
        'Expiration',
        'Expired',
        'Extinction',
        'Extraction',
        'Extractor',
        'Eyegouger',
        'Fleshrender',
        'Forscythe',
        'Frenzy',
        'Grace',
        'Grasscutter',
        'Gravescythe',
        'Grieving Blade',
        'Grim Reaper',
        'Gutrender',
        'Harvester',
        "Hell's Curve",
        "Hell's Fang",
        "Hell's Slice",
        'Hellreaver',
        'Hindscythe',
        "Hope's End",
        'Hoperender',
        'Howler',
        'Hunger',
        'Hungerer',
        'Hush',
        'Impaler',
        'Inscythe',
        'Interruption',
        'Iron Crown',
        'Iron Curtain',
        'Isolation',
        'Justice',
        'Kinslayer',
        'Lance',
        'Last Favor',
        'Last Rites',
        'Last Slice',
        'Last Words',
        'Limbo',
        'Locust',
        'Malice',
        'Mantis',
        'Marrowstrike',
        'Massacre',
        'Meniscus',
        'Mercy',
        "Misery's End",
        'Muffler',
        'Narrowstrike',
        'Necrosis',
        'Nethersbane',
        "Night's Fall",
        'Nightbane',
        'Nightfall',
        'Nightmare',
        'Oathbinder',
        'Oathkeeper',
        'Oblivion',
        'Omega',
        'Outscythe',
        'Peacemaker',
        'Piece Maker',
        'Pincer',
        'Predator',
        'Quarantine',
        'Razor',
        'Razorblade',
        'Reconciler',
        'Remorse',
        'Rigormortis',
        'Scalpel',
        'Scytheburn',
        'Seethe',
        'Seperation',
        'Severance',
        'Severus',
        'Shepherd',
        'Shiverspine',
        'Silence',
        'Sinister',
        'Skewer',
        'Slash',
        'Sleep',
        'Solitary',
        'Solitude',
        'Soulbreaker',
        'Souldrinker',
        'Splitter',
        'Spur',
        'Subscythe',
        'Suspension',
        'Swan Song',
        'Sympathy',
        'Termination',
        'The Culling',
        'The End',
        'The Facelifter',
        'The Inevitable',
        'The Judge',
        'The Warden',
        'Tranquillizer',
        'Unholy Might',
        'Valkyrie',
        'Vanquisher',
        'Widowblight',
        'Widowmaker',
        'Willbreaker',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 3) {
            names = sample(nm1);
        } else if (i < 5) {
            names = `${sample(nm2)} ${sample(nm4)}`;
        } else if (i < 7) {
            names = `${sample(nm2)} ${sample(nm3)} ${sample(nm4)}`;
        } else {
            names = `${sample(nm7)}, ${sample(nm5)} ${sample(nm6)}`;
        }
        return names;
    }
}
