export default function pistols() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['Mighty Mouse', 'Bad Medicine', 'Abomination', 'Agony',
    'Allegiance', 'Alpha', 'Amigo', 'Amnesia', 'Apocalypse', 'Armageddon',
    'Ash', 'Ashes', 'Atomic Annie', 'Baby', 'Battery', 'Battlestar',
    'Betrayal', 'Betrayer', 'Big Daddy', 'Big Game', 'Birthmark', 'Blackout',
    'Bloodfury', 'Bloodmoon', 'Bloodrage', 'Bloodspiller', 'Bloodweep',
    'Bombardment', 'Boomer', 'Boomstick', 'Brass Rain', 'Brutality',
    'Brutalizer', 'Bulldog', 'Burn', 'Burp', 'Cataclysm', 'Catastrophe',
    'Chance', 'Chaos', 'Comet', 'Corpsemaker', 'Corruption', 'Cosmos',
    'Crash', 'Crimson', 'Crossfire', 'Cruiser', 'Crush', 'Cyclone', 'Daddy',
    'Damnation', 'Darkness', 'Dawn', 'Deadeye', 'Deathbringer', 'Deathraze',
    'Decimation', 'Demise', 'Desolation', 'Despair', 'Destiny', 'Destruction',
    'Devastation', 'Devotion', 'Devourer', 'Discharge', 'Disturbance',
    'Divine', 'Dominance', 'Dominion', 'Doom', 'Downpour', 'Dragonmaw',
    'Dragonstrike', 'Dreamhunter', 'Due Diligence', 'Early Retirement',
    'Echo', 'Eclipse', 'Emergency', 'End of Dreams', 'Endbringer', 'Enigma',
    'Envy', 'Epilogue', 'Equality', 'Equalizer', 'Eternal Rest', 'Eternity',
    'Eveningstar', 'Extermination', 'Extinction', 'Falcon', 'Falling Star',
    'Fate', 'Finality', 'Frankenlove', 'Frankenstein', 'Frenzy', 'Fury',
    'Gov\'ner', 'Grace', 'Harbinger', 'Harmony', 'Hatred', 'Heat',
    'Hell\'s Scream', 'Homage', 'Honor\'s Call', 'Hope\'s End', 'Infamy',
    'Infinity', 'Injection', 'Interrogator', 'Judged', 'Justice', 'Justifier',
    'King of Nines', 'Knight\'s Fall', 'Knightfall', 'Lament', 'Last Chance',
    'Last Laugh', 'Last Rites', 'Last Word', 'Last Words', 'Lazarus',
    'Legacy', 'Legionaire', 'Life\'s Limit', 'Lightning', 'Lightningflash',
    'Limbo', 'Lockjaw', 'Magma', 'Malice', 'Maneater', 'Massacre', 'Mercy',
    'Midnight', 'Misery\'s End', 'Moonsight', 'Mortality', 'Narcoleptic',
    'Night\'s Fall', 'Nightbane', 'Nightfall', 'Nightmare', 'Nighttime',
    'Nightwatch', 'Nirvana', 'Oathbreaker', 'Oathkeeper', 'Oblivion',
    'Ole Betsy', 'Omega', 'Optimist', 'Orbit', 'Party Pooper', 'Patience',
    'Peacekeeper', 'Peacemaker', 'Pendulum', 'Perfect Storm', 'Persuasion',
    'Piety', 'Popeye', 'Pride', 'Prophecy', 'Pulse', 'Punisher', 'Purifier',
    'Rage', 'Rapture', 'Rattlesnake', 'Reckoning', 'Reign', 'Remorse',
    'Requiem', 'Retirement', 'Rigormortis', 'Salvation', 'Salvo', 'Scar',
    'Serenity', 'Severance', 'Shadowfury', 'Shadowmoon', 'Silence', 'Snake',
    'Snapper', 'Soulburn', 'Sprocket', 'Stalker', 'Storm', 'Storm Breaker',
    'Storm-Weaver', 'Stormbringer', 'Stormrider', 'Sugar', 'Sunshine',
    'Supernova', 'Supremacy', 'Suspension', 'Swan Song', 'Sweetie',
    'Syndrome', 'Termination', 'The Ambassador', 'The Chancellor', 'The End',
    'The Judge', 'The Light', 'The Oculus', 'The Oracle', 'The Pig',
    'The Void', 'Thunder', 'Thundercall', 'Trauma', 'Treachery', 'Tremor',
    'Tribunal', 'Tribute', 'Trinity', 'Trouble', 'Twilight', 'Typhoon',
    'Ubiquity', 'Undoing', 'Vacancy', 'Valkyrie', 'Vanquisher', 'Vengeance',
    'Voice of Insanity', 'Voice of Reason', 'Warbringer', 'Warmonger',
    'Whispers', 'Whisperwind', 'Wicked', 'Widow Maker', 'Willbreaker',
    'Wit\'s End', 'Wolf'];
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
  const nm4 = ['Pistol', 'Gun', 'Hand Cannon', 'Revolver', 'Handgun', 'Blaster',
    'Six-Shooter', 'Flintlock', 'Shooter'];
  const nm5 = ['Allegiance', 'Annihilation', 'Betrayer', 'Bond', 'Boon',
    'Breaker', 'Bringer', 'Bruiser', 'Butcher', 'Call', 'Champion',
    'Conqueror', 'Crusader', 'Crusher', 'Cry', 'Cunning', 'Dawn', 'Defender',
    'Defiler', 'Destroyer', 'Disposer', 'Ender', 'Executioner', 'Favor',
    'Ferocity', 'Foe', 'Gift', 'Glory', 'Guardian', 'Heirloom', 'Hope',
    'Incarnation', 'Last Hope', 'Last Stand', 'Legacy', 'Memory', 'Might',
    'Oath', 'Pact', 'Pledge', 'Pounder', 'Promise', 'Prophecy', 'Protector',
    'Queller', 'Ravager', 'Reach', 'Reaper', 'Scepter', 'Sculptor', 'Secret',
    'Slayer', 'Smasher', 'Soul', 'Suppressor', 'Terror', 'Token', 'Tribute',
    'Vengeance', 'Voice', 'Whisper', 'Wit', 'Pistol', 'Gun', 'Hand Cannon',
    'Revolver', 'Handgun', 'Blaster', 'Six-Shooter', 'Flintlock', 'Shooter',
    'Emissary', 'Agent', 'Bearer', 'Carrier', 'Messenger', 'Courier', 'Crier',
    'Ambassador', 'Harbinger', 'Herald', 'Envoy', 'Dispatcher', 'Delegate'];
  const nm6 = ['of Agony', 'of Anguish', 'of Ashes', 'of Assassins',
    'of Blight', 'of Blood', 'of Bloodlust', 'of Broken Bones',
    'of Broken Dreams', 'of Broken Families', 'of Burdens', 'of Chaos',
    'of Closing Eyes', 'of Corruption', 'of Cruelty', 'of Cunning',
    'of Darkness', 'of Decay', 'of Deception', 'of Degradation',
    'of Delusions', 'of Denial', 'of Desecration', 'of Diligence',
    'of Dismay', 'of Echoes', 'of Ended Dreams', 'of Ending Hope',
    'of Ending Misery', 'of Eternal Bloodlust', 'of Eternal Damnation',
    'of Eternal Glory', 'of Eternal Justice', 'of Eternal Rest',
    'of Eternal Sorrow', 'of Eternal Struggles', 'of Eternity',
    'of Executions', 'of Faded Memories', 'of Fallen Souls', 'of Fools',
    'of Frozen Hells', 'of Fury', 'of Grace', 'of Grieving Widows', 'of Hate',
    'of Hatred', 'of Hell\'s Games', 'of Hellish Torment', 'of Heroes',
    'of Honor', 'of Hope', 'of Horrid Dreams', 'of Horrors', 'of Immortality',
    'of Inception', 'of Infinite Trials', 'of Insanity', 'of Justice',
    'of Lost Comrades', 'of Lost Hope', 'of Lost Voices', 'of Lost Worlds',
    'of Mercy', 'of Misery', 'of Mourning', 'of Mystery', 'of Nightmares',
    'of Oblivion', 'of Perdition', 'of Power', 'of Pride', 'of Pride\'s Fall',
    'of Putrefaction', 'of Reckoning', 'of Redemption', 'of Regret',
    'of Riddles', 'of Secrecy', 'of Secrets', 'of Shadows',
    'of Shifting Sands', 'of Shifting Worlds', 'of Silence', 'of Slaughter',
    'of Souls', 'of Storms', 'of Subtlety', 'of Suffering', 'of Terror',
    'of Thunder', 'of Torment', 'of Traitors', 'of Trembling Hands',
    'of Trials', 'of Truth', 'of Vengeance', 'of Widows', 'of Woe', 'of Zeal',
    'of the Banished', 'of the Beast', 'of the Blessed', 'of the Brotherhood',
    'of the Burning Sun', 'of the Caged Mind', 'of the Cataclysm',
    'of the Champion', 'of the Claw', 'of the Corrupted', 'of the Covenant',
    'of the Crown', 'of the Damned', 'of the Daywalker', 'of the Dead',
    'of the Earth', 'of the East', 'of the Emperor', 'of the Empty Void',
    'of the End', 'of the Enigma', 'of the Fallen', 'of the Forgotten',
    'of the Forsaken', 'of the Immortal', 'of the Incoming Storm',
    'of the Insane', 'of the King', 'of the Lasting Night', 'of the Lion',
    'of the Lionheart', 'of the Lone Victor', 'of the Lone Wolf',
    'of the Lost', 'of the Moon', 'of the Moonwalker', 'of the Night Sky',
    'of the Night', 'of the Nightstalker', 'of the North', 'of the Occult',
    'of the Oracle', 'of the Phoenix', 'of the Prince', 'of the Protector',
    'of the Queen', 'of the Serpent', 'of the Setting Sun', 'of the Shadows',
    'of the Sky', 'of the South', 'of the Stars', 'of the Storm',
    'of the Summoner', 'of the Sun', 'of the Sunwalker', 'of the Undying',
    'of the Victor', 'of the Void', 'of the West', 'of the Whispers',
    'of the Wicked', 'of the Wind', 'of the Wolf', 'of the World',
    'of the Wretched'];
  const i = Math.floor(Math.random() * 10); {
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
