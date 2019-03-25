export default function cloaks() {
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let
    rnd6;
  let names;
  const nm1 = ['Ancient', 'Binding', 'Blessed', 'Blind', 'Broken', 'Burning',
    'Condemned', 'Conquered', 'Cursed', 'Damned', 'Dark', 'Demonic',
    'Distant', 'Divine', 'Doomed', 'Ending', 'Endless', 'Eternal', 'Faded',
    'Fallen', 'Fleeting', 'Frozen', 'Hallowed', 'Haunted', 'Hellish', 'Holy',
    'Imminent', 'Immortal', 'Infernal', 'Infinite', 'Lost', 'Ominous',
    'Relentless', 'Sacred', 'Shattered', 'Silent', 'Smoldering', 'Timeless',
    'Twisted', 'Unholy'];
  const nm2 = ['Ancestors', 'Bloodlust', 'Comrades', 'Damnation', 'Dreams',
    'Fire', 'Fires', 'Fortune', 'Fortunes', 'Freedom', 'Glory', 'Hell',
    'Hells', 'Honor', 'Hope', 'Illusions', 'Justice', 'Kings', 'Lands',
    'Magic', 'Memories', 'Might', 'Misery', 'Nightmares', 'Nights', 'Power',
    'Powers', 'Protection', 'Punishment', 'Sorrow', 'Souls', 'Torment',
    'Trials', 'Vengeance', 'Visions', 'Voices', 'Warlords', 'Wars',
    'Whispers', 'Worlds'];
  const nm3 = ['Ancient', 'Arcane', 'Atuned', 'Bandit\'s', 'Baneful',
    'Banished', 'Barbarian', 'Barbaric', 'Battleworn', 'Blood Infused',
    'Blood-Forged', 'Bloodcursed', 'Bloodied', 'Bloodlord\'s', 'Bloodsurge',
    'Brutal', 'Brutality', 'Burnished', 'Captain\'s', 'Cataclysm',
    'Cataclysmic', 'Challenger', 'Challenger\'s', 'Champion', 'Champion\'s',
    'Cold-Forged', 'Conqueror', 'Conqueror\'s', 'Corrupted', 'Crazed',
    'Crying', 'Cursed', 'Defender', 'Defender\'s', 'Defiled', 'Demonic',
    'Desire\'s', 'Desolation', 'Destiny\'s', 'Dire', 'Doom', 'Doom\'s',
    'Dragon\'s', 'Dragon', 'Ebon', 'Enchanted', 'Engraved', 'Eternal',
    'Exile', 'Extinction', 'Faith\'s', 'Faithful', 'Fearful', 'Feral',
    'Fierce', 'Fiery', 'Fire Infused', 'Firesoul', 'Forsaken', 'Fortune\'s',
    'Frenzied', 'Frost', 'Frozen', 'Furious', 'Fusion', 'Ghastly',
    'Ghost-Forged', 'Ghostly', 'Gladiator', 'Gladiator\'s', 'Grieving',
    'Guard\'s', 'Guardian\'s', 'Hatred', 'Haunted', 'Heartless', 'Hero',
    'Hero\'s', 'Hollow', 'Holy', 'Honed', 'Honor\'s', 'Hope\'s', 'Hopeless',
    'Howling', 'Hungering', 'Incarnated', 'Infused', 'Inherited',
    'Jade Infused', 'Judgement', 'Keeper\'s', 'Knightly', 'Legionnaire\'s',
    'Liar\'s', 'Lich', 'Lightning', 'Lonely', 'Loyal', 'Lusting',
    'Malevolent', 'Malicious', 'Malignant', 'Massive', 'Mended', 'Mercenary',
    'Military', 'Misfortune\'s', 'Mourning', 'Nightmare', 'Oathkeeper\'s',
    'Ominous', 'Peacekeeper', 'Peacekeeper\'s', 'Phantom', 'Possessed',
    'Pride\'s', 'Primal', 'Prime', 'Primitive', 'Promised', 'Protector\'s',
    'Proud', 'Recruit\'s', 'Reforged', 'Reincarnated', 'Relentless',
    'Remorse', 'Renewed', 'Renovated', 'Restored', 'Retribution', 'Ritual',
    'Roaring', 'Ruby Infused', 'Rune-Forged', 'Savage', 'Sentinel', 'Shadow',
    'Silent', 'Singing', 'Sinister', 'Soldier\'s', 'Solitude\'s', 'Sorrow\'s',
    'Soul', 'Soul Infused', 'Soul-Forged', 'Soulless', 'Spectral', 'Spite',
    'Storm', 'Storm-Forged', 'Stormfury', 'Stormguard', 'Terror', 'Thunder',
    'Thunder-Forged', 'Thunderfury', 'Thunderguard', 'Thundersoul',
    'Thunderstorm', 'Timeworn', 'Tormented', 'Trainee\'s', 'Treachery\'s',
    'Twilight', 'Twilight\'s', 'Twisted', 'Tyrannical', 'Undead', 'Unholy',
    'Vanquisher', 'Vengeance', 'Vengeful', 'Vicious', 'Victor', 'Vindication',
    'Vindicator', 'Vindictive', 'War-Forged', 'Warden\'s', 'Warlord\'s',
    'Warped', 'Warrior', 'Warrior\'s', 'Whistling', 'Wicked', 'Wind\'s',
    'Wind-Forged', 'Windsong', 'Woeful', 'Wrathful', 'Wretched', 'Yearning',
    'Zealous', '', '', '', '', '', '', '', '', ''];
  const nm4 = ['Cloth', 'Hide', 'Linen', 'Padded', 'Scaled', 'Silk', 'Wool',
    'Embroided'];
  const nm5 = ['Cloak', 'Cape', 'Shroud', 'Drape', 'Greatcloak', 'Wrap',
    'Mantle'];
  const nm6 = ['Absorption', 'Heavy Loads', 'Carrying', 'Heavy Pants',
    'Perseverance', 'Firmness', 'Stability', 'Steady Hands', 'Fidelity',
    'Silence', 'Muffled Steps', 'Fleet Feet', 'the Phoenix', 'Adventure',
    'Agony', 'Ancient Power', 'Ancient Powers', 'Anger', 'Anguish',
    'Annihilation', 'Arcane Magic', 'Arcane Power', 'Arcane Resist',
    'Archery', 'Ashes', 'Assassination', 'Assassins', 'Assaults', 'Auras',
    'Awareness', 'Barriers', 'Beginnings', 'Binding', 'Black Magic',
    'Blast Protection', 'Blessed Fortune', 'Blessed Fortunes', 'Blessings',
    'Blight', 'Blood', 'Bloodlust', 'Bloodshed', 'Bravery', 'Broken Bones',
    'Broken Dreams', 'Broken Families', 'Broken Worlds', 'Burdens', 'Carnage',
    'Cataclysms', 'Chaos', 'Clarity', 'Conquered Worlds', 'Corruption',
    'Courage', 'Creation', 'Cunning', 'Danger', 'Dark Magic', 'Dark Powers',
    'Dark Souls', 'Darkness', 'Dawn', 'Decay', 'Deception', 'Defiance',
    'Deflection', 'Delirium', 'Delusions', 'Demon Fire', 'Demons', 'Denial',
    'Desecration', 'Despair', 'Destruction', 'Devotion', 'Diligence',
    'Discipline', 'Dishonor', 'Dismay', 'Dominance', 'Domination', 'Doom',
    'Dragons', 'Dragonsouls', 'Dread', 'Dreams', 'Due Diligence', 'Duels',
    'Dusk', 'Echoes', 'Enchantments', 'Ended Dreams', 'Ending Hope',
    'Ending Misery', 'Ends', 'Eternal Bloodlust', 'Eternal Damnation',
    'Eternal Glory', 'Eternal Justice', 'Eternal Rest', 'Eternal Sorrow',
    'Eternal Struggles', 'Eternity', 'Executions', 'Extinction',
    'Faded Memories', 'Fallen Kings', 'Fallen Souls', 'Fire', 'Fire Magic',
    'Fire Power', 'Fire Protection', 'Fire Resist', 'Fools', 'Forging',
    'Fortitude', 'Fortune', 'Frost', 'Frost Power', 'Frost Resist',
    'Frozen Hells', 'Fury', 'Ghosts', 'Giants', 'Giantslaying', 'Glory',
    'Grace', 'Greed', 'Grieving Widows', 'Guardians', 'Hate', 'Hatred',
    'Healing', 'Hell', 'Hell\'s Games', 'Hellfire', 'Hellish Torment',
    'Heroes', 'Holy Might', 'Honor', 'Hope', 'Horrors', 'Ice', 'Ice Magic',
    'Illusions', 'Immortality', 'Inception', 'Infinite Trials', 'Infinity',
    'Insanity', 'Justice', 'Kings', 'Life', 'Lifemending', 'Lifestealing',
    'Light\'s Hope', 'Limbo', 'Lost Comrades', 'Lost Hope', 'Lost Souls',
    'Lost Voices', 'Lost Worlds', 'Mercy', 'Might', 'Miracles', 'Misery',
    'Mists', 'Moonlight', 'Mysteries', 'Mystery', 'Nature', 'Necromancy',
    'Nightmares', 'Oblivion', 'Paradise', 'Patience', 'Phantoms', 'Power',
    'Prayers', 'Pride', 'Pride\'s Fall', 'Prophecies', 'Protection',
    'Putrefaction', 'Reckoning', 'Recoil', 'Redemption', 'Regret', 'Regrets',
    'Resilience', 'Respect', 'Riddles', 'Ruins', 'Runes', 'Salvation',
    'Secrecy', 'Secrets', 'Serenity', 'Shadows', 'Shifting Sands', 'Silence',
    'Slaughter', 'Slaying', 'Smite', 'Solitude', 'Souls', 'Stealth', 'Stone',
    'Storms', 'Strength', 'Subtlety', 'Suffering', 'Suffering\'s End',
    'Sunfire', 'Sunlight', 'Swordbreaking', 'Tears', 'Terror', 'Terrors',
    'Thieves', 'Thorns', 'Thunder', 'Thunders', 'Titans', 'Torment',
    'Traitors', 'Trust', 'Truth', 'Truths', 'Twilight', 'Twilight\'s End',
    'Twisted Visions', 'Undoing', 'Unholy Blight', 'Unholy Might', 'Valiance',
    'Valor', 'Vengeance', 'Vigor', 'Visions', 'War', 'Whispers', 'Wisdom',
    'Woe', 'Wonders', 'Wraiths', 'Zeal', 'the Ancients', 'the Archer',
    'the Banished', 'the Basilisk', 'the Bear', 'the Beast', 'the Berserker',
    'the Blessed', 'the Boar', 'the Breaking Storm', 'the Brotherhood',
    'the Burning Sun', 'the Caged Mind', 'the Cataclysm', 'the Champion',
    'the Claw', 'the Corrupted', 'the Covenant', 'the Crown', 'the Crusader',
    'the Damned', 'the Day', 'the Daywalker', 'the Dead', 'the Depth',
    'the Depths', 'the Dragons', 'the Dreadlord', 'the Eagle', 'the Earth',
    'the East', 'the Eclipse', 'the Emperor', 'the End', 'the Enigma',
    'the Fallen', 'the Falling Sky', 'the Flames', 'the Forest',
    'the Forests', 'the Forgotten', 'the Forsaken', 'the Gargoyle',
    'the Gladiator', 'the Gods', 'the Harvest', 'the Hunter', 'the Immortal',
    'the Immortals', 'the Incoming Storm', 'the Insane', 'the Isles',
    'the King', 'the Knight', 'the Lasting Night', 'the Leviathan',
    'the Light', 'the Lion', 'the Lionheart', 'the Lone Victor',
    'the Lone Wolf', 'the Lost', 'the Mage', 'the Moon', 'the Moonwalker',
    'the Mountain', 'the Mountains', 'the Night', 'the Night Sky',
    'the Nightstalker', 'the North', 'the Occult', 'the Oracle',
    'the Phoenix', 'the Plague', 'the Prince', 'the Princess', 'the Prisoner',
    'the Prodigy', 'the Prophecy', 'the Prophet', 'the Protector',
    'the Queen', 'the Scourge', 'the Seer', 'the Serpent', 'the Setting Sun',
    'the Shadows', 'the Sky', 'the South', 'the Stars', 'the Steward',
    'the Storm', 'the Summoner', 'the Sun', 'the Sunwalker', 'the Swamp',
    'the Talon', 'the Titans', 'the Undying', 'the Victor', 'the Void',
    'the Volcano', 'the Ward', 'the Warrior', 'the West', 'the Whale',
    'the Whispers', 'the Wicked', 'the Wind', 'the Wolf', 'the World',
    'the Wretched'];
  const i = Math.floor(Math.random() * 10); {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    if (i < 2) {
      names = `${nm5[rnd5]} of ${nm1[rnd]} ${nm2[rnd2]}`;
    } else if (i < 4) {
      names = `${nm4[rnd4]} ${nm5[rnd5]} of ${nm1[rnd]} ${nm2[rnd2]}`;
    } else if (i < 7) {
      names = `${nm3[rnd3]} ${nm4[rnd4]} ${nm5[rnd5]}`;
    } else {
      names = `${nm3[rnd3]} ${nm5[rnd5]} of ${nm6[rnd6]}`;
    }
    return names;
  }
}
