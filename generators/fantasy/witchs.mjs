import sample from 'lodash/sample';

export default function witchs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abena', 'Abigail', 'Acacia', 'Adaire', 'Adele', 'Adeline', 'Adisa', 'Adonia', 'Aenwyn', 'Agate', 'Agatha', 'Aggie', 'Agnes', 'Ailana', 'Aileen', 'Ailey', 'Akiye', 'Alana', 'Alani', 'Albertine', 'Alecto', 'Alexa', 'Alexandra', 'Alfhild', 'Alice', 'Alicia', 'Amalia', 'Amaranth', 'Amaryllis', 'Amber', 'Amelia', 'Amelie', 'Ametrine', 'Anastasia', 'Anemone', 'Angelic', 'Angelica', 'Anise', 'Anita', 'Anna', 'Annette', 'Annika', 'Antha', 'April', 'Aqua', 'Arabella', 'Arabelle', 'Aretha', 'Aria', 'Arietta', 'Aris', 'Armina', 'Artemis', 'Artemise', 'Arwen', 'Asha', 'Ashia', 'Aspen', 'Aster', 'Astra', 'Astrid', 'Athena', 'Augusta', 'Aurelia', 'Auria', 'Aurora', 'Autumn', 'Avalon', 'Avery', 'Azalea', 'Azami', 'Azula', 'Azura', 'Beatrix', 'Belinda', 'Belladonna', 'Bellatrix', 'Bellona', 'Bernadette', 'Bernardette', 'Berthina', 'Beth', 'Bethy', 'Blossom', 'Bluebell', 'Branwen', 'Brenna', 'Briar', 'Bridget', 'Brielle', 'Brigid', 'Bronwyn', 'Bryony', 'Cadence', 'Calla', 'Callista', 'Camilla', 'Camille', 'Candice', 'Carlyn', 'Cassandra', 'Cassia', 'Catarina', 'Cedonia', 'Celeste', 'Celestia', 'Celestina', 'Celestine', 'Chandra', 'Chantal', 'Chloe', 'Christine', 'Cinnabar', 'Circe', 'Claudette ', 'Claudia', 'Cleo', 'Clio', 'Cliona', 'Cloris', 'Clover', 'Cora', 'Coral', 'Cordelia', 'Cornelia', 'Corydon', 'Cruella', 'Crystal', 'Cyrena', 'Cyrene', 'Dahlia', 'Daire', 'Daisy', 'Dalila', 'Dawn', 'Delia', 'Denise', 'Destiny', 'Devi', 'Deville', 'Dominique', 'Dorothy', 'Dot', 'Eartha', 'Ebony', 'Echo', 'Edna', 'Electra', 'Elenwen', 'Elisabeth', 'Elsa', 'Elsbeth', 'Elvira', 'Ember', 'Eowyn', 'Erika', 'Esadora', 'Esme', 'Esmeralda', 'Estelle', 'Estrella', 'Ethel', 'Euphenia', 'Eva', 'Evanora', 'Evanore', 'Eve', 'Evelyn', 'Evie', 'Faba', 'Fabula', 'Fabularis', 'Fae', 'Farina', 'Fawn', 'Fay', 'Faye', 'Feriae', 'Fern', 'Ferox', 'Ferula', 'Fidelia', 'Fidelis', 'Filix', 'Fiona', 'Fleur', 'Fortuna', 'Frances', 'Franziska', 'Gillian', 'Ginevra', 'Glenda', 'Glinda', 'Gloria', 'Glory', 'Grace', 'Gretchen', 'Gretel', 'Guinevere', 'Gwendolyn', 'Gwyneth', 'Hagatha', 'Haley', 'Harmony', 'Hattie', 'Hayley', 'Hazel', 'Hedvig', 'Helen', 'Helena', 'Helga', 'Henrietta', 'Henriette', 'Hermia', 'Hester', 'Hettie', 'Hilda', 'Holly', 'Hyacinth', 'Hylee', 'Indigo', 'Ingrid', 'Ira', 'Iris', 'Isador', 'Isidora', 'Isidore', 'Isis', 'Isobel', 'Jackie', 'Jade', 'Jasmine', 'Jemma', 'Jinx', 'Josephine', 'Juniper', 'Kalliope', 'Kamila', 'Karin', 'Keeva', 'Kerrigan', 'Kestrel', 'Kira', 'Laura', 'Lavander', 'Lavina', 'Lavinia', 'Leona', 'Levana', 'Lia', 'Lila', 'Lilac', 'Lilith', 'Lillian', 'Lillith', 'Lilly', 'Lilura', 'Lorelei', 'Louise ', 'Lucia', 'Luciana', 'Lucida', 'Lucille', 'Lucinda', 'Luna', 'Lux', 'Lydia', 'Mabel', 'Maera', 'Maescia', 'Maev', 'Magnolia', 'Malise', 'Maple', 'Mardella', 'Maria', 'Marie', 'Marigold', 'Marilla', 'Mary', 'Maud', 'Maude', 'Maura', 'Mave', 'Maya', 'Meadow', 'Medea', 'Medeia', 'Medusa', 'Melody', 'Melusina', 'Mia', 'Mildred', 'Mina', 'Minerva', 'Misty', 'Moira', 'Morena', 'Morgaine', 'Morgan', 'Morgana', 'Morrigan', 'Myrna', 'Myrtle', 'Mystia', 'Nimue', 'Nina', 'Niobe', 'Nissa', 'Norae', 'Oceana', 'October', 'Odessa', 'Olga', 'Onyx', 'Opal', 'Opalina', 'Ophelia', 'Orchid', 'Paige', 'Paris', 'Pauline', 'Pearl', 'Peony', 'Pepper', 'Petunia', 'Phoebe', 'Phoenix', 'Piper', 'Primrose', 'Queen', 'Rain', 'Raina', 'Raine', 'Raven', 'Ravyn', 'Ravynne', 'Rawena', 'Reagan', 'Regina', 'River', 'Roberta', 'Robin', 'Rose', 'Rosedriah', 'Rosina', 'Rosita', 'Rowan', 'Rowena', 'Ruby', 'Rue', 'Sabine', 'Sabrina', 'Sabrine', 'Sacha', 'Safe', 'Saffron', 'Sakura', 'Salina', 'Sally', 'Samantha', 'Samara', 'Sapphire', 'Sasha', 'Scarth', 'Selena', 'Selene', 'Serafina', 'Serafine', 'Seren', 'Serena', 'Shearah', 'Shyla', 'Sierra', 'Silvaria', 'Silver', 'Simone', 'Sirena', 'Sirene', 'Skye', 'Sophia', 'Sophie', 'Starla', 'Storm', 'Summer', 'Sybil', 'Tabitha', 'Tara', 'Tarja', 'Tatiana', 'Tempest', 'Thalia', 'Theodora', 'Tia', 'Tiara', 'Topaz', 'Tyler', 'Ulva', 'Ursa', 'Ursula', 'Valkyrie', 'Vanessa', 'Venus', 'Vest', 'Victoria', 'Violet', 'Vivian', 'Wendy', 'Wihnhilda', 'Willow', 'Winter', 'Wren', 'Xantha', 'Xena', 'Yasmin', 'Zale', 'Zaleria', 'Zaria', 'Zena', 'Zoey'];
  const nm2 = ['Addington', 'Aimes', 'Angelsin', 'Argent', 'Ash', 'Aura', 'Autumn', 'Barclay', 'Barkridge', 'Barlow', 'Black', 'Blackman', 'Blackwood', 'Blankley', 'Bloodgood', 'Bloodworth', 'Borges', 'Brack', 'Breedlove', 'Brevil', 'Calarook', 'Caligari', 'Cane', 'Carpathia', 'Chainsaw', 'Chalice', 'Christanti', 'Christian', 'Church', 'Cloven', 'Craft', 'Crane', 'Creighton', 'Crimson', 'Cromwell', 'Cross', 'Crow', 'Crowe', 'Crypt', 'Damon', 'Darkmore', 'De Vil', 'Deamonne', 'Delacroix', 'Delarosa', 'Denholm', 'Depraysie', 'Devonshire', 'Diablo', 'Diablos', 'Diamond', 'Digby', 'Discord', 'Drabek', 'Drach', 'Dread', 'Dred', 'Duke', 'Dukes', 'Dupree', 'Ebonywood', 'Everbleed', 'Evilian', 'Fade', 'Fadington', 'Fang', 'Frost', 'Geulimja', 'Gnash', 'Graeme', 'Grail', 'Graves', 'Grim', 'Grimm', 'Grimsbane', 'Grove', 'Hallewell', 'Hart', 'Helion', 'Heliot', 'Highmore', 'Hook', 'Howler', 'Hunt', 'Interfector', 'Jinx', 'Jones', 'Kane', 'Keeling', 'Killian', 'Killoran', 'Knotley', 'Kobe', 'Krauss', 'La Croix', 'Labyrinth', 'Latimer', 'Le Blank', 'Le Doux', 'Le Rouge', 'Le Torneau', 'Lestat', 'Lobo', 'Lovelace', 'Lynx', 'Maganti', 'Magnus', 'Maleficum', 'Mallor', 'Malum', 'Manglyeong', 'Marth', 'Mock', 'Monroe', 'Moonfall', 'Morelli', 'Morgan', 'Moriarty', 'Mortem', 'Murik', 'Natas', 'Naxxremis', 'Norwood', 'Nox', 'Onyx', 'Orlando', 'Panther', 'Payne', 'Periculum', 'Pickerin', 'Queen', 'Quinn', 'Rathmore', 'Raven', 'Razor', 'Redwood', 'Rex', 'Riddle', 'Ripper', 'Roseberg', 'Sangrey', 'Sanguine', 'Scarletwound', 'Sephiran', 'Serphent', 'Shackleton', 'Shade', 'Shadowend', 'Shadowmend', 'Shadowsoul', 'Shadowwalker', 'Sharpe', 'Shelley', 'Skinner', 'Snow', 'Soulton', 'Steros', 'Stocker', 'Stone', 'Storm', 'Strain', 'Talbot', 'Tempest', 'Tenebris', 'Thornheart', 'Thornton', 'Tombend', 'Trevil', 'Trevils', 'Umbra', 'Vandran', 'Vexx', 'Victor', 'Vigil', 'Villalobos', 'Vixen', 'Void', 'Von Stein', 'Vonner', 'Vossen', 'Whisper', 'White', 'Whitmore', 'Willow', 'Winter', 'Wolf', 'Wolfmoon', 'Wood', 'Woods', 'Wraith', 'Wright', 'Wyrm', 'Youngblood', 'Zayne'];
  const nm3 = ['Aaron', 'Acelin', 'Adam', 'Adar', 'Aeneas', 'Aidan', 'Ailen', 'Aindreas', 'Alaric', 'Alastair', 'Allard', 'Altair', 'Anan', 'Athan', 'Atherton', 'Azriel', 'Balder', 'Ballard', 'Bardo', 'Barrett', 'Beck', 'Bevan', 'Blaize', 'Brady', 'Bram', 'Brenainn', 'Brencis', 'Brody', 'Cade', 'Caedmon', 'Calder', 'Callum', 'Caton', 'Chalfont', 'Chalmers', 'Chay', 'Chilton', 'Conan', 'Conrad', 'Cornelius', 'Cosmo', 'Cullen', 'Cyrus', 'Daegal', 'Dallan', 'Damek', 'Dante', 'Darius', 'Darnell', 'Dashiel', 'David', 'Delano', 'Derek', 'Deron', 'Derrick', 'Derwin', 'Devin', 'Dillon', 'Dilwyn', 'Douglas', 'Draigh', 'Duncan', 'Dylan', 'Earthan', 'Einar', 'Eiran', 'Eldridge', 'Elfed', 'Eliphas', 'Elwin', 'Emlyn', 'Eoin', 'Erik', 'Ewart', 'Finn', 'Fontayne', 'Forrest', 'Freeman', 'Frewin', 'Gabriel', 'Gaian', 'Galahad', 'Galen', 'Gerard', 'Goran', 'Gunnar', 'Heath', 'Innis', 'Jasion', 'Jorah', 'Kadir', 'Kaine', 'Kaspar', 'Kayne', 'Keanu', 'Keene', 'Keith', 'Killian', 'Laramie', 'Laris', 'Lars', 'Lazar', 'Leander', 'Leif', 'Leland', 'Lucian', 'Lucius', 'Luke', 'Maddock', 'Magnus', 'Marc', 'Marden', 'Mark', 'Mars', 'Marsden', 'Merrill', 'Michael', 'Mistral', 'Mortimer', 'Name', 'Niam', 'Nicholas', 'Oberon', 'Orion', 'Osran', 'Panas', 'Paxton', 'Pilan', 'Rainer', 'Regan', 'Rehan', 'Reuben', 'Rodney', 'Rune', 'Saul', 'Seth', 'Sol', 'Tade', 'Tate', 'Thayer', 'Tierney', 'Tiordan', 'Torin', 'Trent', 'Troy', 'Ulrich', 'Vivian', 'Wade', 'Ward', 'Wayde', 'Wolfe', 'Xavier', 'Xenos', 'Zander', 'Zelig', 'Zen', 'Zion', 'Zohar'];
  {
    if (type === 1) {
      names = `${sample(nm1)} ${sample(nm2)}`;
    } else {
      names = `${sample(nm3)} ${sample(nm2)}`;
    }
    return names;
  }
}
