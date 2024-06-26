import { sample } from 'lodash';

export default function battleAxes() {
    let names: string;
    const nm1 = [
        'Abomination',
        'Agatha',
        'Allegiance',
        'Alpha',
        'Amnesia',
        'Anduril',
        "Anger's Edge",
        'Apocalypse',
        'Armageddon',
        'Arondite',
        'Ash',
        'Ashes',
        'Ashrune',
        'Betrayal',
        'Betrayer',
        'Blackout',
        'Blazefury',
        'Blazeguard',
        "Blight's Plight",
        'Blind Justice',
        'Blinkstrike',
        'Bloodfury',
        'Bloodmoon',
        'Bloodquench',
        'Bloodrage',
        'Bloodspiller',
        'Bloodweep',
        'Bone Warden',
        'Braindead',
        'Broken Promise',
        'Brutality',
        'Brutalizer',
        'Cataclysm',
        'Catastrophe',
        'Celeste',
        'Chance',
        'Chaos',
        'Chasm',
        'Chieftain',
        'Comet',
        'Cometfall',
        'Convergence',
        'Corpsemaker',
        'Corruption',
        'Crescent Moon',
        'Crimson',
        'Cutting Response',
        'Cyclone',
        'Darkness',
        'Dawn',
        "Dawn's Edge",
        'Dawnbreaker',
        'Daytime',
        'Deathbringer',
        'Deathraze',
        'Deathspade',
        'Decimation',
        'Desolation',
        'Despair',
        'Destiny',
        'Devastation',
        'Devine',
        'Devotion',
        'Devourer',
        'Divine Light',
        'Dominance',
        'Dominion',
        'Doom',
        "Doom's Edge",
        'Doomblade',
        'Doombringer',
        'Due Diligence',
        "Dusk's Edge",
        'Early Retirement',
        'Earthquake',
        'Echo',
        'Eclipse',
        'Edge of Death',
        'Edge of Eternity',
        'Edge of Infinity',
        'Edge of Life',
        'Edge of Madness',
        'Edge of Misery',
        'Edge of Reason',
        'Edge of Ruin',
        'Edge of Time',
        'Emergency',
        'Endbringer',
        'Enigma',
        'Epilogue',
        'Eternal Rest',
        'Eternity',
        'Extermination',
        'Extinction',
        'Faithkeeper',
        'Fate',
        'Finality',
        'Fleshrender',
        "Freak's Bite",
        'Frenzy',
        'Frostbite',
        'Frostwind',
        'Fury',
        "Fury's Gaze",
        'Gatecrasher',
        'Ghost Reaver',
        'Ghostwalker',
        'Glimmer',
        'Godslayer',
        'Grieving Blade',
        'Guillotine',
        'Gutrender',
        'Harbinger',
        'Harvester',
        'Hatred',
        "Hatred's Blade",
        'Heartseeker',
        "Hell's Scream",
        'Hellfire',
        'Hellreaver',
        'Homage',
        "Honor's Call",
        "Hope's Edge",
        "Hope's End",
        'Humongous',
        'Hurricane',
        'Infamy',
        'Infinity',
        'Interrogator',
        'Justice',
        'Justifier',
        "King's Defender",
        "King's Legacy",
        'Kinslayer',
        "Knight's Fall",
        "Knight's Honor",
        'Knightfall',
        'Lament',
        'Last Chance',
        'Last Laugh',
        'Last Rites',
        'Last Words',
        'Lazarus',
        'Legacy',
        'Legionaire',
        "Life's Limit",
        "Light's Bane",
        'Lightbane',
        'Lightbringer',
        'Lightning',
        'Limbo',
        'Magma',
        'Malice',
        'Maneater',
        'Massacre',
        'Mercy',
        'Midnight',
        "Misery's Edge",
        "Misery's End",
        'Monsoon',
        'Mooncleaver',
        'Mournblade',
        'Narcoleptic',
        'Nethersbane',
        "Night's Edge",
        "Night's Fall",
        'Nightbane',
        'Nightfall',
        'Nighttime',
        'Nirvana',
        'Oathbreaker',
        'Oathkeeper',
        'Oblivion',
        'Old Age',
        'Omega',
        'Orbit',
        'Orenmir',
        'Party Pooper',
        'Peacekeeper',
        'Peacemaker',
        'Pendulum',
        'Perfect Storm',
        'Persuasion',
        'Piece Maker',
        'Piety',
        'Pork-Chopper',
        'Pride',
        'Prophecy',
        'Purifier',
        'Rage',
        'Ragnarok',
        'Rapture',
        'Reaper',
        "Reaper's Toll",
        'Reckoning',
        'Red Dwarf',
        'Reign',
        'Remorse',
        'Requiem',
        'Retirement',
        'Righteous Might',
        'Rigormortis',
        'Rising Tide',
        'Savagery',
        'Scar',
        'Scourgeborne',
        'Second Chance',
        'Seism',
        'Severance',
        'Shadow Strike',
        "Shadow's Edge",
        'Shadowfury',
        'Shadowmoon',
        'Shadowsteel',
        'Silence',
        'Skullcleaver',
        'Skullcrusher',
        'Slice of Life',
        'Soul Breaker',
        'Soul Reaper',
        'Spinefall',
        'Stalker',
        'Storm',
        'Storm Breaker',
        'Storm-Weaver',
        'Stormbringer',
        'Stormcaller',
        'Stormedge',
        'Stormrider',
        'Supernova',
        'Supremacy',
        'Suspension',
        'Swan Song',
        'Termination',
        'The Ambassador',
        'The Chancellor',
        'The Chief',
        'The Decapitator',
        'The End',
        'The Facelifter',
        'The Light',
        'The Minotaur',
        'The Oculus',
        'The Oracle',
        'The Sundering',
        'The Void',
        'The Warden',
        'Thunder',
        'Treachery',
        'Tremor',
        'Trickster',
        "Trickster's Edge",
        'Trinity',
        'Twisted',
        'Typhoon',
        'Ubiquity',
        'Undoing',
        'Vacancy',
        'Valkyrie',
        'Vanquisher',
        'Vengeance',
        'Warbringer',
        'Warmonger',
        'Whirlwind',
        'Wicked',
        'Widow Maker',
        'Willbreaker',
        'Windreaper',
        'Windslicer',
        "Winter's Bite",
        "Wit's End",
        'Witherbrand',
        'Wolf',
        'Worldbreaker',
        'Worldcarver',
        'Worldslayer',
    ];
    const nm2 = [
        'Ancient',
        'Antique',
        'Apocalypse',
        'Apocalyptic',
        'Arcane',
        'Arched',
        'Atuned',
        "Bandit's",
        'Baneful',
        'Banished',
        'Barbarian',
        'Barbaric',
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
        'Brutality',
        'Burnished',
        'Cataclysm',
        'Cataclysmic',
        'Challenger',
        "Challenger's",
        'Champion',
        "Champion's",
        'Cold-Forged',
        'Conqueror',
        "Conqueror's",
        'Corroded',
        'Corrupted',
        'Crazed',
        'Crying',
        'Cursed',
        'Curved',
        'Dancing',
        'Dark',
        'Darkness',
        'Defender',
        "Defender's",
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
        "Dragon's",
        'Dragonbreath',
        'Eerie',
        'Enchanted',
        'Engraved',
        'Enlightened',
        'Eternal',
        'Exiled',
        'Extinction',
        "Faith's",
        'Faithful',
        'Fancy',
        'Fearful',
        'Feral',
        'Ferocious',
        'Fierce',
        'Fiery',
        'Fire Infused',
        'Fireguard',
        'Firesoul',
        'Firestorm',
        'Flaming',
        'Flimsy',
        'Forsaken',
        "Fortune's",
        'Foul',
        'Fragile',
        'Frail',
        'Frenzied',
        'Frost',
        'Frozen',
        'Furious',
        'Fusion',
        'Ghastly',
        'Ghost',
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
        'Harmonized',
        'Hateful',
        'Haunted',
        'Heartless',
        'Heinous',
        'Hero',
        "Hero's",
        'Hollow',
        'Holy',
        'Honed',
        "Honor's",
        "Hope's",
        'Hopeless',
        'Howling',
        'Hungering',
        'Improved',
        'Impure',
        'Incarnated',
        'Infused',
        'Inherited',
        'Isolated',
        'Jade Infused',
        'Judgement',
        "Keeper's",
        'Knightly',
        "Knight's",
        "Legionnaire's",
        "Liar's",
        'Lich',
        'Lightning',
        'Lonely',
        'Loyal',
        'Lustful',
        'Lusting',
        'Malevolent',
        'Malicious',
        'Malificent',
        'Malignant',
        'Massive',
        'Mended',
        'Mercenary',
        'Military',
        "Misfortune's",
        'Misty',
        'Moonlit',
        'Mourning',
        'Nightmare',
        "Oathkeeper's",
        'Ominous',
        'Peacekeeper',
        "Peacekeeper's",
        'Phantom',
        'Polished',
        'Possessed',
        "Pride's",
        'Prideful',
        'Primal',
        'Prime',
        'Primitive',
        'Promised',
        "Protector's",
        'Proud',
        'Pure',
        'Putrid',
        'Raging',
        "Recruit's",
        'Refined',
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
        'Runed',
        'Rusty',
        'Savage',
        'Sentinel',
        'Shadow',
        'Shamanic',
        'Sharpened',
        'Silent',
        'Singed',
        'Singing',
        'Sinister',
        'Skyfall',
        'Smooth',
        "Soldier's",
        "Solitude's",
        "Sorcerer's",
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
        'Thunderguard',
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
        'Vanquisher',
        'Vengeance',
        'Vengeful',
        'Venom',
        'Vicious',
        'Victor',
        'Vile',
        'Vindication',
        'Vindicator',
        'Vindictive',
        'Void',
        'Volcanic',
        'Vowed',
        'War',
        'War-Forged',
        "Warden's",
        "Warlord's",
        'Warp',
        'Warped',
        'Warrior',
        "Warrior's",
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
        'Bone',
        'Bronze',
        'Bronzed',
        'Ivory',
        'Ebon',
        'Glass',
        'Golden',
        'Iron',
        'Ironbark',
        'Mithril',
        'Obsidian',
        'Silver',
        'Skeletal',
        'Steel',
        'Titanium',
    ];
    const nm4 = [
        'Battle Axe',
        'Chopper',
        'Axe',
        'Edge',
        'Crescent',
        'Cleaver',
        'Greataxe',
        'Dualblade',
        'Broadaxe',
        'Reaver',
        'War Axe',
        'Ravager',
        'Maul',
    ];
    const nm5 = [
        'Allegiance',
        'Annihilation',
        'Axe',
        'Battle Axe',
        'Betrayer',
        'Bond',
        'Boon',
        'Breaker',
        'Bringer',
        'Broadaxe',
        'Butcher',
        'Call',
        'Carver',
        'Champion',
        'Chopper',
        'Cleaver',
        'Conqueror',
        'Crescent',
        'Crusader',
        'Cry',
        'Cunning',
        'Dark Blade',
        'Dawn',
        'Defender',
        'Defiler',
        'Destroyer',
        'Doomblade',
        'Dualblade',
        'Edge',
        'Ender',
        'Etcher',
        'Executioner',
        'Favor',
        'Ferocity',
        'Foe',
        'Gift',
        'Glory',
        'Greataxe',
        'Guardian',
        'Heirloom',
        'Hope',
        'Incarnation',
        'Jaws',
        'Last Hope',
        'Last Stand',
        'Legacy',
        'Maul',
        'Memory',
        'Might',
        'Oath',
        'Pact',
        'Pledge',
        'Promise',
        'Prophecy',
        'Protector',
        'Ravager',
        'Razor',
        'Reach',
        'Reaper',
        'Reaver',
        'Runed Blade',
        'Sculptor',
        'Secret',
        'Slayer',
        'Slicer',
        'Soul',
        'Terror',
        'Token',
        'Tribute',
        'Vengeance',
        'Voice',
        'War Axe',
        'Warblade',
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
        'Abomination',
        'Agatha',
        'Allegiance',
        'Alpha',
        'Amnesia',
        'Anduril',
        'Anger�s Edge',
        'Apocalypse',
        'Armageddon',
        'Arondite',
        'Ash',
        'Ashes',
        'Ashrune',
        'Betrayal',
        'Betrayer',
        'Blackout',
        'Blazefury',
        'Blazeguard',
        'Blind Justice',
        'Blinkstrike',
        'Bloodfury',
        'Bloodmoon',
        'Bloodquench',
        'Bloodrage',
        'Bloodspiller',
        'Bloodweep',
        'Bone Warden',
        'Braindead',
        'Broken Promise',
        'Brutality',
        'Brutalizer',
        'Cataclysm',
        'Catastrophe',
        'Celeste',
        'Chance',
        'Chaos',
        'Chasm',
        'Chieftain',
        'Comet',
        'Cometfall',
        'Convergence',
        'Corpsemaker',
        'Corruption',
        'Crescent Moon',
        'Crimson',
        'Cyclone',
        'Darkness',
        'Dawn',
        "Dawn's Edge",
        'Dawnbreaker',
        'Daytime',
        'Deathbringer',
        'Deathraze',
        'Deathspade',
        'Decimation',
        'Desolation',
        'Despair',
        'Destiny',
        'Devastation',
        'Devine',
        'Devotion',
        'Devourer',
        'Divine Light',
        'Dominance',
        'Dominion',
        'Doom',
        'Doomblade',
        'Doombringer',
        'Due Diligence',
        'Earthquake',
        'Echo',
        'Eclipse',
        'Emergency',
        'Endbringer',
        'Enigma',
        'Epilogue',
        'Eternal Rest',
        'Eternity',
        'Extermination',
        'Extinction',
        'Faithkeeper',
        'Fate',
        'Finality',
        'Fleshrender',
        "Freak's Bite",
        'Frenzy',
        'Frostbite',
        'Frostwind',
        'Fury',
        "Fury's Gaze",
        'Gatecrasher',
        'Ghost Reaver',
        'Ghostwalker',
        'Glimmer',
        'Godslayer',
        'Guillotine',
        'Gutrender',
        'Harbinger',
        'Harvester',
        'Hatred',
        'Heartseeker',
        "Hell's Scream",
        'Hellfire',
        'Hellreaver',
        'Homage',
        "Honor's Call",
        "Hope's Edge",
        "Hope's End",
        'Humongous',
        'Hurricane',
        'Infamy',
        'Infinity',
        'Interrogator',
        'Justice',
        'Justifier',
        "King's Defender",
        "King's Legacy",
        'Kinslayer',
        "Knight's Fall",
        "Knight's Honor",
        'Knightfall',
        'Lament',
        'Last Chance',
        'Last Laugh',
        'Last Rites',
        'Last Words',
        'Lazarus',
        'Legacy',
        'Legionaire',
        "Life's Limit",
        "Light's Bane",
        'Lightbane',
        'Lightbringer',
        'Lightning',
        'Limbo',
        'Magma',
        'Malice',
        'Maneater',
        'Massacre',
        'Mercy',
        'Midnight',
        "Misery's Edge",
        "Misery's End",
        'Monsoon',
        'Mooncleaver',
        'Mournblade',
        'Narcoleptic',
        'Nethersbane',
        "Night's Edge",
        "Night's Fall",
        'Nightbane',
        'Nightfall',
        'Nighttime',
        'Nirvana',
        'Oathbreaker',
        'Oathkeeper',
        'Oblivion',
        'Old Age',
        'Omega',
        'Orbit',
        'Orenmir',
        'Party Pooper',
        'Peacekeeper',
        'Peacemaker',
        'Pendulum',
        'Perfect Storm',
        'Persuasion',
        'Piece Maker',
        'Piety',
        'Pork-Chopper',
        'Pride',
        'Prophecy',
        'Purifier',
        'Rage',
        'Ragnarok',
        'Rapture',
        'Reaper',
        "Reaper's Toll",
        'Reckoning',
        'Red Dwarf',
        'Reign',
        'Remorse',
        'Requiem',
        'Retirement',
        'Rigormortis',
        'Rising Tide',
        'Savagery',
        'Scar',
        'Scourgeborne',
        'Second Chance',
        'Seism',
        'Severance',
        'Shadow Strike',
        "Shadow's Edge",
        'Shadowfury',
        'Shadowmoon',
        'Shadowsteel',
        'Silence',
        'Skullcleaver',
        'Skullcrusher',
        'Slice of Life',
        'Soul Breaker',
        'Soul Reaper',
        'Spinefall',
        'Stalker',
        'Storm',
        'Storm Breaker',
        'Storm-Weaver',
        'Stormbringer',
        'Stormcaller',
        'Stormedge',
        'Stormrider',
        'Supernova',
        'Supremacy',
        'Suspension',
        'Swan Song',
        'Termination',
        'The Ambassador',
        'The Chancellor',
        'The Chief',
        'The Decapitator',
        'The End',
        'The Facelifter',
        'The Light',
        'The Minotaur',
        'The Oculus',
        'The Oracle',
        'The Sundering',
        'The Void',
        'The Warden',
        'Thunder',
        'Treachery',
        'Tremor',
        'Trickster',
        'Trinity',
        'Twisted',
        'Typhoon',
        'Ubiquity',
        'Undoing',
        'Vacancy',
        'Valkyrie',
        'Vanquisher',
        'Vengeance',
        'Warbringer',
        'Warmonger',
        'Whirlwind',
        'Wicked',
        'Widow Maker',
        'Willbreaker',
        'Windreaper',
        'Windslicer',
        "Winter's Bite",
        "Wit's End",
        'Witherbrand',
        'Wolf',
        'Worldbreaker',
        'Worldcarver',
        'Worldslayer',
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
