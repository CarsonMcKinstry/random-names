export default function professions() {
  let rnd;
  let names;
  const nm1 = ['Academic', 'Accountant', 'Acolyte', 'Acrobat', 'Actor', 'Administrator', 'Adventurer', 'Advisor', 'Alchemist', 'Almoner', 'Animal Breeder', 'Animal Handler', 'Anthropologist', 'Apothecary', 'Archaeologist', 'Archer', 'Architect', 'Archivist', 'Armorer', 'Arms Merchant', 'Artisan', 'Artist', 'Ascetic', 'Assassin', 'Astrologist', 'Astronomist', 'Baker', 'Bandit', 'Banker', 'Barber', 'Bard', 'Barkeep', 'Barmaid', 'Barrister', 'Beastmaster', 'Beekeeper', 'Beggar', 'Biologist', 'Blacksmith', 'Board Member', 'Boatman', 'Bodyguard', 'Bookbinder', 'Botanist', 'Bottler', 'Bounty Hunter', 'Brewer', 'Brick Maker', 'Bricklayer', 'Bridge Builder', 'Brigand', 'Buccaneer', 'Buckle Maker', 'Builder', 'Bureaucrat', 'Burglar', 'Butcher', 'Butler', 'Cannoneer', 'Caravan Leader', 'Carder', 'Carpenter', 'Carter', 'Cartographer', 'Cartwright', 'Chamberlain', 'Chandler', 'Charioteer', 'Cheesemaker', 'Chef', 'Chemist', 'Chirurgeon', 'Clergy', 'Cleric', 'Clerk', 'Clock Maker', 'Clothes Washer', 'Clothier', 'Clown', 'Coachman', 'Coinsmith', 'Commander', 'Con Artist', 'Conjurer', 'Cook', 'Cooper', 'Counselor', 'Courtesan', 'Courtier', 'Cowherd', 'Craftsman', 'Crossbowman', 'Crusader', 'Cutler', 'Cutpurse', 'Dairymaid', 'Dancer', 'Demonologist', 'Dentist', 'Detective', 'Diplomat', 'Distiller', 'Diver', 'Doctor', 'Drayman', 'Driver', 'Druid', 'Duchess', 'Duelist', 'Duke', 'Dyer', 'Economist', 'Enchanter', 'Engineer', 'Engraver', 'Executioner', 'Explorer', 'Falconer', 'Farmer', 'Farrier', 'Ferryman', 'Firemaker', 'Fisherman', 'Fishmonger', 'Fletcher', 'Forester', 'Fortune Teller', 'Friar', 'Furrier', 'Gambler', 'Gardener', 'Gatekeeper', 'Gemsmith', 'Geologist', 'Geomancer', 'Gladiator', 'Glassblower', 'Glazier', 'Glovemaker', 'Goldsmith', 'Gravedigger', 'Groom', 'Guard', 'Guildmaster', 'Hacker', 'Handmaiden', 'Hatter', 'Hayward', 'Healer', 'Herald', 'Herbalist', 'Herder', 'Herdsman', 'Highwayman', 'Historian', 'Horse Breeder', 'Horse Trainer', 'Hounds Master', 'Hunter', 'Illuminator', 'Innkeeper', 'Inscriptionist', 'Instructor', 'Interpreter', 'Inventor', 'Investor', 'Jailer', 'Jester', 'Jewelcrafter', 'Jeweler', 'Judge', 'Juggler', 'King', 'Knight', 'Lady', 'Lady in Waiting', 'Lantern Maker', 'Lawyer', 'Leatherworker', 'Librarian', 'Lighthouse Keeper', 'Limner', 'Linguist', 'Loanshark', 'Locksmith', 'Longbowman', 'Lord', 'Loremaster', 'Lumberjack', 'Machinist', 'Magician', 'Maid', 'Maidservant', 'Man at Arms', 'Marine', 'Marksman', 'Mason', 'Mayor', 'Mechanic', 'Mercenary', 'Merchant', 'Messenger', 'Meteorologist', 'Midwife', 'Milkmaid', 'Miller', 'Milliner', 'Mine Owner', 'Miner', 'Minion', 'Minister', 'Minstrel', 'Mirror Maker', 'Moneylender', 'Monk', 'Monster slayer', 'Mortician', 'Mourner', 'Mugger', 'Mule Driver', 'Musician', 'Necromancer', 'Nun', 'Nurse', 'Officer', 'Page', 'Painter', 'Paladin', 'Paper Maker', 'Paratrooper', 'Pastor', 'Pastry Cook', 'Pawnbroker', 'Peasant', 'Peddler', 'Perfumer', 'Pharmacist', 'Philosopher', 'Philospher', 'Photographer', 'Physician', 'Pickpocket', 'Pigkeeper', 'Pilgrim', 'Pilot', 'Pirate', 'Pit Fighter', 'Poet', 'Politician', 'Postman', 'Potter', 'Preacher', 'Priest', 'Prince', 'Princess', 'Procurer', 'Professor', 'Programmer', 'Prophet', 'Pursemaker', 'Pyromancer', 'Pyrotechnician', 'Quartermaster', 'Queen', 'Raider', 'Ranger', 'Rat-Catcher', 'Ratcatcher', 'Riflesmith', 'Rogue', 'Roofer', 'Rope Maker', 'Ropemaker', 'Royal Advisor', 'Rugmaker', 'Runecrafter', 'Saddler', 'Sage', 'Sailor', 'Salter', 'Sapper', 'Scavenger', 'Scholar', 'Scout', 'Scribe', 'Scrivener', 'Sculptor', 'Seamaster', 'Seamstress', 'Secretary', 'Seer', 'Servant', 'Shaman', 'Shepherd', 'Sheriff', 'Ship Builder', 'Ship\'s Captain', 'Ship\'s Mate', 'Shipwright', 'Shoemaker', 'Shrubber', 'Silversmith', 'Singer', 'Skinner', 'Slave', 'Slave Master', 'Slave Trader', 'Slaver', 'Smith', 'Smuggler', 'Soldier', 'Songwriter', 'Sorcerer', 'Special Forces', 'Spice Merchant', 'Spiritual Healer', 'Sportsman', 'Spy', 'Squire', 'Stable Hand', 'Stablehand', 'Stabler', 'Stevedore', 'Steward', 'Storyteller', 'Student', 'Summoner', 'Surgeon', 'Surveyor', 'Sword Smith', 'Swordsman', 'Synthesist', 'Tailor', 'Tanner', 'Tavernkeep', 'Tax Collector', 'Teacher', 'Technician', 'Templar', 'Terraformer', 'Thatcher', 'Thief', 'Timelord', 'Tinker', 'Toll Keeper', 'Torturer', 'Town Counselor', 'Town Crier', 'Tracker', 'Trader', 'Trainer', 'Trapper', 'Treasure Hunter', 'Vendor', 'Village Idiot', 'Warlock', 'Warrior', 'Watchman', 'Water Carrier', 'Weaver', 'Wetnurse', 'Wheelwright', 'Wine Merchant', 'Witch', 'Wizard', 'Wood Merchant', 'Woodcarver', 'Woodcutter', 'Zookeeper', 'Zoologist'];
  {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    return names;
  }
}
