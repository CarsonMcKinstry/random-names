export default function shotguns() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['Abomination', 'Agony', 'Alpha', 'Amigo', 'Amnesia',
    'Apocalypse', 'Armageddon', 'Ash', 'Ashes', 'Baby', 'Bad Medicine',
    'Barrage', 'Battery', 'Big Bertha', 'Big Boy', 'Big Daddy', 'Big Game',
    'Big Rhonda', 'Blackout', 'Blaster', 'Bloodrage', 'Bloodspiller',
    'Blunderbuss', 'Blunderbust', 'Blunderbuster', 'Bluster', 'Bolt',
    'Bombardment', 'Boomboom', 'Boomer', 'Boomstick', 'Brass Rain',
    'Brutality', 'Brutalizer', 'Brutus', 'Buckshot', 'Bugsy', 'Bulldog',
    'Burp', 'Buster', 'Cataclysm', 'Catastrophe', 'Chaos', 'Cobra', 'Comet',
    'Cosmos', 'Crash', 'Crimson', 'Crossfire', 'Crowd Control', 'Cruiser',
    'Crush', 'Cyclone', 'Daddy', 'Dawn', 'Deadeye', 'Deathbringer',
    'Deathraze', 'Decimation', 'Demise', 'Desolation', 'Despair', 'Destiny',
    'Destruction', 'Devastation', 'Devotion', 'Devourer', 'Discharge',
    'Disturbance', 'Divine', 'Dominance', 'Dominion', 'Doom',
    'Double Trouble', 'Downpour', 'Due Diligence', 'Echo', 'Eclipse',
    'Endbringer', 'Enigma', 'Envy', 'Epilogue', 'Equalizer', 'Eternity',
    'Extermination', 'Extinction', 'Falling Star', 'Featherduster',
    'Frankenstein', 'Frenzy', 'Fury', 'Fusillade', 'Gov\'ner', 'Grace',
    'Headhunter', 'Hell\'s Scream', 'Hercules', 'Homage', 'Homerun',
    'Interrogator', 'Intervention', 'Jaeger', 'Justice', 'Lazarus', 'Legacy',
    'Legionaire', 'Lightning', 'Lightningflash', 'Limbo', 'Lockjaw',
    'Longshot', 'Lucifer', 'Lupus', 'Magma', 'Malice', 'Maneater', 'Massacre',
    'Master Blaster', 'Matador', 'Mercy', 'Midnight', 'Mighty Mouse',
    'Musket', 'Nightfall', 'Nightmare', 'Nighttime', 'Nightwatch', 'Nirvana',
    'Oathbreaker', 'Oathkeeper', 'Oblivion', 'Ogre', 'Old Smoky', 'Ole Betsy',
    'Omega', 'Orbit', 'Orion', 'Party Pooper', 'Patience', 'Peacekeeper',
    'Peacemaker', 'Pendulum', 'Peppershaker', 'Perfect Storm', 'Persuasion',
    'Pulse', 'Punisher', 'Quick Fix', 'Rage', 'Ranger', 'Rapture',
    'Rattlesnake', 'Reign', 'Requiem', 'Rigormortis', 'Rosebud', 'Salvo',
    'Scar', 'Scatter', 'Seed Sower', 'Serenity', 'Shadowfury', 'Shadowmoon',
    'Silence', 'Skeeter', 'Snake', 'Snubs', 'Sprocket', 'Stakeout', 'Standby',
    'Stick', 'Sting', 'Storm', 'Stormrider', 'Sugar', 'Supernova',
    'Supremacy', 'Suspension', 'Swan Song', 'Sweeper', 'Sweetie', 'Syndrome',
    'The Ambassador', 'The Cannon', 'The Chancellor', 'The End', 'The Hammer',
    'The Judge', 'The Manager', 'The Oracle', 'The Pig', 'The Void',
    'Thumper', 'Thunder', 'Thundercall', 'Thunderstick', 'Toots', 'Trauma',
    'Tremor', 'Tribunal', 'Tribute', 'Trinity', 'Trouble', 'Twilight',
    'Valkyrie', 'Vengeance', 'Viper', 'Volley', 'Warmonger', 'Whisperwind',
    'Wicked', 'Widow Maker', 'Willbreaker', 'Wolf'];
  const nm2 = ['Apocalypse', 'Apocalyptic', 'Atuned', 'Bandit\'s', 'Baneful',
    'Banished', 'Barbaric', 'Battleworn', 'Blood Infused', 'Blood-Forged',
    'Bloodied', 'Bloodlord\'s', 'Bloodsurge', 'Brutal', 'Brutality',
    'Burnished', 'Cataclysm', 'Cataclysmic', 'Challenger', 'Challenger\'s',
    'Champion', 'Cold-Forged', 'Commando', 'Commando\'s', 'Conqueror',
    'Conqueror\'s', 'Corroded', 'Corrupted', 'Crazed', 'Dancing', 'Dark',
    'Darkness', 'Defender', 'Defender\'s', 'Defiled', 'Defiling', 'Deluded',
    'Deserted', 'Desire\'s', 'Desolation', 'Destiny\'s', 'Diabolical', 'Dire',
    'Doom', 'Doom\'s', 'Eerie', 'Engraved', 'Eternal', 'Exiled', 'Extinction',
    'Faith\'s', 'Faithful', 'Fancy', 'Fearful', 'Feral', 'Ferocious',
    'Fierce', 'Fireguard', 'Firestorm', 'Forsaken', 'Fortune\'s', 'Foul',
    'Frenzied', 'Furious', 'Fusion', 'Ghastly', 'Ghostly', 'Gladiator',
    'Gleaming', 'Glinting', 'Greedy', 'Grieving', 'Grim', 'Guard\'s',
    'Guardian\'s', 'Guerilla', 'Hateful', 'Heartless', 'Heinous', 'Hero',
    'Hero\'s', 'Honed', 'Honor\'s', 'Hopeless', 'Howling', 'Hungering',
    'Incarnated', 'Infantry', 'Infantry\'s', 'Infused', 'Inherited',
    'Judgement', 'Keeper\'s', 'Legionnaire\'s', 'Liar\'s', 'Lightning',
    'Lonely', 'Loyal', 'Lustful', 'Lusting', 'Malevolent', 'Malicious',
    'Malificent', 'Malignant', 'Massive', 'Mended', 'Mercenary', 'Military',
    'Misfortune\'s', 'Mourning', 'Nightmare', 'Oathkeeper\'s', 'Ominous',
    'Peacekeeper', 'Peacekeeper\'s', 'Phantom', 'Polished', 'Pride\'s',
    'Prideful', 'Primal', 'Prime', 'Primitive', 'Private', 'Promised',
    'Protector\'s', 'Proud', 'Pure', 'Raging', 'Recruit\'s', 'Refined',
    'Reforged', 'Reincarnated', 'Relentless', 'Remorseful', 'Renewed',
    'Renovated', 'Replica', 'Restored', 'Retribution', 'Ritual', 'Roaring',
    'Savage', 'Sentinel', 'Shadow', 'Silent', 'Singed', 'Singing', 'Sinister',
    'Smooth', 'Soldier\'s', 'Solitude\'s', 'Sorrow\'s', 'Soulless',
    'Spectral', 'Spiteful', 'Storm', 'Storm-Forged', 'Stormfury',
    'Stormguard', 'Terror', 'Thirsting', 'Thirsty', 'Thunder',
    'Thunder-Forged', 'Thunderfury', 'Thunderguard', 'Thundersoul',
    'Thunderstorm', 'Timeworn', 'Trainee\'s', 'Treachery\'s', 'Trooper',
    'Twilight', 'Twilight\'s', 'Twisted', 'Tyrannical', 'Vanquisher',
    'Vengeance', 'Vengeful', 'Veteran', 'Veteran\'s', 'Vicious', 'Victor',
    'Vile', 'Vindication', 'Vindicator', 'Vindictive', 'Void', 'Vowed', 'War',
    'War-Forged', 'Warden\'s', 'Warlord\'s', 'Warmonger', 'Warmonger\'s',
    'Warp', 'Warped', 'Warrior', 'Warrior\'s', 'Whistling', 'Wicked',
    'Windsong', 'Woeful', 'Wrathful', 'Wretched', 'Yearning', 'Zealous'];
  const nm3 = ['Bronze', 'Bronzed', 'Ivory', 'Ebon', 'Glass', 'Golden',
    'Gilded', 'Chromed', 'Iron', 'Stainless', 'Carbon', 'Brass', 'Fiberglass',
    'Ironbark', 'Mithril', 'Obsidian', 'Silver', 'Steel', 'Titanium'];
  const nm4 = ['Blunderbuss', 'Blaster', 'Shotgun', 'Shooter', 'Repeater',
    'Boomstick'];
  const nm5 = ['Blunderbuss', 'Blaster', 'Shotgun', 'Shooter', 'Repeater',
    'Boomstick', 'Allegiance', 'Annihilation', 'Betrayer', 'Bond', 'Boon',
    'Breaker', 'Bringer', 'Bruiser', 'Call', 'Champion', 'Conqueror',
    'Crusader', 'Cry', 'Cunning', 'Dawn', 'Defender', 'Defiler', 'Destroyer',
    'Destruction', 'Edge', 'Ender', 'Executioner', 'Fan', 'Favor', 'Ferocity',
    'Foe', 'Gift', 'Glory', 'Guardian', 'Heirloom', 'Hope', 'Incarnation',
    'Last Hope', 'Last Stand', 'Legacy', 'Memory', 'Might', 'Oath', 'Pact',
    'Pledge', 'Promise', 'Prophecy', 'Protector', 'Ravager', 'Reach',
    'Sculptor', 'Secret', 'Slayer', 'Soul', 'Terror', 'Token', 'Touch',
    'Tribute', 'Vengeance', 'Voice', 'Whisper', 'Wit'];
  const nm6 = ['of Agony', 'of Ancient Power', 'of Anguish', 'of Ashes',
    'of Assassins', 'of Black Magic', 'of Blessed Fortune', 'of Blessings',
    'of Blight', 'of Blood', 'of Bloodlust', 'of Broken Bones',
    'of Broken Dreams', 'of Broken Families', 'of Burdens', 'of Chaos',
    'of Closing Eyes', 'of Conquered Worlds', 'of Corruption', 'of Cruelty',
    'of Cunning', 'of Dark Magic', 'of Dark Souls', 'of Darkness', 'of Decay',
    'of Deception', 'of Degradation', 'of Delusions', 'of Denial',
    'of Desecration', 'of Diligence', 'of Dismay', 'of Dragonsouls',
    'of Due Diligence', 'of Echoes', 'of Ended Dreams', 'of Ending Hope',
    'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation',
    'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest',
    'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity',
    'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools',
    'of Frost', 'of Frozen Hells', 'of Fury', 'of Giants', 'of Giantslaying',
    'of Grace', 'of Grieving Widows', 'of Hate', 'of Hatred',
    'of Hell\'s Games', 'of Hellish Torment', 'of Heroes', 'of Holy Might',
    'of Honor', 'of Hope', 'of Horrid Dreams', 'of Horrors',
    'of Illuminated Dreams', 'of Illumination', 'of Immortality',
    'of Inception', 'of Infinite Trials', 'of Insanity', 'of Invocation',
    'of Justice', 'of Light\'s Hope', 'of Lost Comrades', 'of Lost Hope',
    'of Lost Voices', 'of Lost Worlds', 'of Magic', 'of Mercy', 'of Misery',
    'of Mountains', 'of Mourning', 'of Mystery', 'of Necromancy',
    'of Nightmares', 'of Oblivion', 'of Perdition', 'of Phantoms', 'of Power',
    'of Pride', 'of Pride\'s Fall', 'of Putrefaction', 'of Reckoning',
    'of Redemption', 'of Regret', 'of Riddles', 'of Secrecy', 'of Secrets',
    'of Shadow Strikes', 'of Shadows', 'of Shifting Sands',
    'of Shifting Worlds', 'of Silence', 'of Slaughter', 'of Souls',
    'of Stealth', 'of Storms', 'of Subtlety', 'of Suffering',
    'of Suffering\'s End', 'of Summoning', 'of Terror', 'of Thunder',
    'of Time-Lost Memories', 'of Timeless Battles', 'of Titans', 'of Torment',
    'of Traitors', 'of Trembling Hands', 'of Trials', 'of Truth',
    'of Twilight\'s End', 'of Twisted Visions', 'of Unholy Blight',
    'of Unholy Might', 'of Vengeance', 'of Visions', 'of Wasted Time',
    'of Widows', 'of Wizardry', 'of Woe', 'of Wraiths', 'of Zeal',
    'of the Ancients', 'of the Banished', 'of the Basilisk', 'of the Beast',
    'of the Blessed', 'of the Breaking Storm', 'of the Brotherhood',
    'of the Burning Sun', 'of the Caged Mind', 'of the Cataclysm',
    'of the Champion', 'of the Claw', 'of the Corrupted', 'of the Covenant',
    'of the Crown', 'of the Damned', 'of the Daywalker', 'of the Dead',
    'of the Depth', 'of the Dreadlord', 'of the Earth', 'of the East',
    'of the Emperor', 'of the Empty Void', 'of the End', 'of the Enigma',
    'of the Fallen', 'of the Falling Sky', 'of the Flame', 'of the Forest',
    'of the Forgotten', 'of the Forsaken', 'of the Gladiator',
    'of the Harvest', 'of the Immortal', 'of the Incoming Storm',
    'of the Insane', 'of the King', 'of the Lasting Night',
    'of the Leviathan', 'of the Light', 'of the Lion', 'of the Lionheart',
    'of the Lone Victor', 'of the Lone Wolf', 'of the Lost', 'of the Moon',
    'of the Moonwalker', 'of the Night', 'of the Night Sky',
    'of the Nightstalker', 'of the North', 'of the Occult', 'of the Oracle',
    'of the Phoenix', 'of the Plague', 'of the Prince', 'of the Protector',
    'of the Queen', 'of the Serpent', 'of the Setting Sun', 'of the Shadows',
    'of the Sky', 'of the South', 'of the Stars', 'of the Storm',
    'of the Summoner', 'of the Sun', 'of the Sunwalker', 'of the Talon',
    'of the Undying', 'of the Victor', 'of the Void', 'of the West',
    'of the Whispers', 'of the Wicked', 'of the Wind', 'of the Wolf',
    'of the World', 'of the Wretched'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 3) {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm4[rnd2]}`;
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm3[rnd2]} ${nm4[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      names = `${nm1[rnd]}, ${nm5[rnd2]} ${nm6[rnd3]}`;
    }
    return names;
  }
}
