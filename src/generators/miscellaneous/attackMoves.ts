export default function attackMoves() {
    let names: string;
    let rnd;
    const names1 = [
        'Absolve',
        'Affliction',
        'Agony',
        'Ambush',
        'Anguish',
        'Anticipate',
        'Armor Up',
        'Asphyxiate',
        'Assassinate',
        'Assault',
        'Avalanche',
        'Awakening',
        'Backstab',
        'Bad Omen',
        'Baffle',
        'Bait',
        'Bane',
        'Banish',
        'Bargain',
        'Barrage',
        'Barricade',
        'Barrier',
        'Bash',
        'Battery',
        'Bend Mind',
        'Bend Time',
        'Berserk',
        'Betray',
        'Bewitch',
        'Bind',
        'Bind Will',
        'Bite',
        'Black Out',
        'Blast',
        'Blaze',
        'Blight',
        'Blind',
        'Blitz',
        'Blizzard',
        'Block',
        'Blockade',
        'Bloodlust',
        'Bloom',
        'Blow',
        'Bluff',
        'Bolt',
        'Bomardment',
        'Bomb',
        'Bounce',
        'Break',
        'Break Out',
        'Breakout',
        'Buffet',
        'Burn',
        'Burst',
        'Butcher',
        'Cage',
        'Calamity',
        'Camouflage',
        'Cascade',
        'Cauterize',
        'Chain',
        'Chant',
        'Chaos',
        'Char',
        'Charge',
        'Charm',
        'Chastise',
        'Chill',
        'Chomp',
        'Clamp',
        'Cleanse',
        'Clear',
        'Cleave',
        'Clench',
        'Cloak',
        'Clobber',
        'Clone',
        'Collapse',
        'Combustion',
        'Command',
        'Concussion',
        'Conflagrate',
        'Confuse',
        'Conjurate',
        'Constrain',
        'Consume',
        'Corruption',
        'Counter',
        'Crash',
        'Crumble',
        'Crunch',
        'Crush',
        'Crux',
        'Cry',
        'Curse',
        'Cushion',
        'Dance',
        'Dash',
        'Daze',
        'Decay',
        'Deceit',
        'Deceive',
        'Decimate',
        'Decoy',
        'Defend',
        'Defile',
        'Delude',
        'Deluge',
        'Demolish',
        'Denounce',
        'Destroy',
        'Deter',
        'Detonate',
        'Devastate',
        'Devotion',
        'Dice',
        'Disable',
        'Disarm',
        'Discharge',
        'Disengage',
        'Disguise',
        'Disintegrate',
        'Dismantle',
        'Dispel',
        'Disperse',
        'Disrupt',
        'Dissolve',
        'Distract',
        'Disturb',
        'Dodge',
        'Dominate',
        'Doom',
        'Drain',
        'Dread',
        'Duplicate',
        'Earthquake',
        'Echo',
        'Eclipse',
        'Elation',
        'Elude',
        'Embrace',
        'Empower',
        'Energize',
        'Engage',
        'Enrage',
        'Enslave',
        'Ensnare',
        'Entangle',
        'Enthrall',
        'Eradicate',
        'Eruption',
        'Escape',
        'Euphoria',
        'Evade',
        'Excute',
        'Execute',
        'Exempt',
        'Exhaust',
        'Exhaustion',
        'Exorcise',
        'Exorcism',
        'Explode',
        'Exterminate',
        'Fade',
        'Favor',
        'Fear',
        'Feast',
        'Feed',
        'Feign',
        'Feint',
        'Fervor',
        'Fever',
        'Flare',
        'Flash',
        'Flay',
        'Flee',
        'Float',
        'Flood',
        'Fluke',
        'Flurry',
        'Fluster',
        'Fly',
        'Focus',
        'Foresee',
        'Forge',
        'Fortune',
        'Fracture',
        'Freeze',
        'Freeze Time',
        'Frenzy',
        'Funnel',
        'Fury',
        'Fusillade',
        'Gale',
        'Galvanize',
        'Garrote',
        'Genesis',
        'Glide',
        'Gnaw',
        'Good Omen',
        'Gorge',
        'Gouge',
        'Grace',
        'Grasp',
        'Grip',
        'Grow',
        'Guard',
        'Harvest',
        'Haunt',
        'Havoc',
        'Headbutt',
        'Heal',
        'Hemorrhage',
        'Hex',
        'Hibernate',
        'Howl',
        'Hug',
        'Hymn',
        'Hypnotize',
        'Hysteria',
        'Ignite',
        'Illuminate',
        'Illusion',
        'Imbue',
        'Imitate',
        'Impact',
        'Impair',
        'Imprison',
        'Incinerate',
        'Infect',
        'Infuse',
        'Innervate',
        'Insight',
        'Intercept',
        'Interrupt',
        'Intervene',
        'Intimidate',
        'Invigorate',
        'Invisibility',
        'Invocation',
        'Isolate',
        'Jab',
        'Jinx',
        'Judge',
        'Justice',
        'Karma',
        'Kick',
        'Kindle',
        'Lacerate',
        'Lance',
        'Lash',
        'Launch',
        'Leap',
        'Leech',
        'Levitate',
        'Lie',
        'Lightning Bolt',
        'Lightning Strike',
        'Luck',
        'Lurk',
        'Maim',
        'Mangle',
        'Mask',
        'Massacre',
        'Maul',
        'Meddle',
        'Meditate',
        'Melt',
        'Mend',
        'Mesmerize',
        'Metamorphose',
        'Mirror',
        'Misdirect',
        'Mislead',
        'Missile',
        'Morph',
        'Mutate',
        'Mute',
        'Mutilate',
        'Neutralize',
        'Nightmare',
        'Nourish',
        'Nova',
        'Nurture',
        'Obliterate',
        'Omen',
        'Ooze',
        'Orb',
        'Outburst',
        'Overload',
        'Overpower',
        'Overwhelm',
        'Pacify',
        'Pact',
        'Pandemic',
        'Panic',
        'Paralyze',
        'Parry',
        'Penance',
        'Phobia',
        'Pierce',
        'Piety',
        'Pillage',
        'Plague',
        'Poise',
        'Poison',
        'Pounce',
        'Pound',
        'Prey',
        'Prosecute',
        'Protect',
        'Provoke',
        'Prowl',
        'Pummel',
        'Punch',
        'Puncture',
        'Purge',
        'Purify',
        'Pursue',
        'Pursuit',
        'Putrify',
        'Puzzle',
        'Pyromania',
        'Rage',
        'Rain',
        'Rake',
        'Random',
        'Rapture',
        'Ravage',
        'Raze',
        'Read Mind',
        'Reap',
        'Rebirth',
        'Rebuke',
        'Reckoning',
        'Reflect',
        'Regenerate',
        'Reincarnate',
        'Remorse',
        'Renew',
        'Repent',
        'Resolve',
        'Restrain',
        'Restrict',
        'Retaliate',
        'Retreat',
        'Revenge',
        'Rime',
        'Rip',
        'Riptide',
        'Roar',
        'Roast',
        'Ruin',
        'Rumble',
        'Rupture',
        'Rush',
        'Sacrifice',
        'Salvo',
        'Sanctuary',
        'Scatter',
        'Scold',
        'Scorch',
        'Scratch',
        'Scream',
        'Seism',
        'Sense',
        'Sever',
        'Shackle',
        'Shatter',
        'Shell',
        'Shift',
        'Shiv',
        'Shock',
        'Shockwave',
        'Shoot',
        'Shout',
        'Shower',
        'Shred',
        'Sidestep',
        'Silence',
        'Singe',
        'Slam',
        'Slap',
        'Sleep',
        'Slice',
        'Slow',
        'Smash',
        'Smite',
        'Smolder',
        'Smother',
        'Snap',
        'Sooth',
        'Soothe',
        'Soul Burn',
        'Soul Link',
        'Soul Swap',
        'Spike',
        'Splinter',
        'Spoil',
        'Sprint',
        'Sprout',
        'Squeeze',
        'Stampede',
        'Storm',
        'Strangle',
        'Strangulate',
        'Strengthen',
        'Strike',
        'Stun',
        'Subdue',
        'Subert',
        'Subtlety',
        'Suffer',
        'Sunder',
        'Suppress',
        'Surge',
        'Suspend',
        'Swarm',
        'Swift Strike',
        'Swiftness',
        'Swipe',
        'Symbiosis',
        'Taint',
        'Tangle',
        'Taunt',
        'Teleport',
        'Temblor',
        'Tempest',
        'Terror',
        'Thrash',
        'Thunder',
        'Thunderclap',
        'Thunderstorm',
        'Thwart',
        'Torch',
        'Torment',
        'Torpedo',
        'Torture',
        'Toss',
        'Trance',
        'Transform',
        'Trap',
        'Trash',
        'Trauma',
        'Tremor',
        'Trick',
        'Truth',
        'Vanish',
        'Vengeance',
        'Vigor',
        'Vindicate',
        'Vision',
        'Volley',
        'Warcry',
        'Ward',
        'Warp Time',
        'Weaken',
        'Whack',
        'Whip',
        'Whirl',
        'Whirlwind',
        'Whiteout',
        'Will',
        'Wither',
        'Wrath',
        'Wreck',
        'Zeal',
    ];
    {
        rnd = Math.floor(Math.random() * names1.length);
        names = names1[rnd];
        return names;
    }
}
