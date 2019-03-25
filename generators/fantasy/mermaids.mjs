export default function mermaids() {
  let rnd;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aqilus', 'Porcus', 'Nater', 'Filtys', 'Merpus ', 'Tertis', 'Osharus', 'Rimulus', 'Aberdeen', 'Aberforth', 'Adrian', 'Aeces', 'Aenon', 'Agual', 'Anchor', 'Andaman', 'Anenon', 'Aquarius', 'Aquor', 'Arroyo', 'Baltic', 'Barracudon', 'Bay', 'Beck', 'Bered', 'Bo', 'Bourne', 'Brendan', 'Brooke', 'Bruinen', 'Calder', 'Caol', 'Cari', 'Caspian', 'Cato', 'Chalakon', 'Clifford', 'Clyde', 'Coburn', 'Como', 'Conway', 'Cruise', 'Cyraenan', 'Cyraeneus', 'Cyraeni', 'Cyreus', 'Dathan', 'Davey', 'Deniz', 'Dewy', 'Dillon', 'Dorado', 'Douglas', 'Dover', 'Drake', 'Duff', 'Dune', 'Duxor', 'Dylan', 'Dylon', 'Eärendil', 'Earendil', 'Ecthelion', 'Ervin', 'Finn', 'Ford', 'Gal', 'Gar', 'Guadalupe', 'Hali', 'Hawkins', 'Hiro', 'Hurley', 'Indra', 'Irvin', 'Irving', 'Jabal', 'Jack', 'Jacques', 'Jafar', 'Jetty', 'Jonah', 'Jorah', 'Jordan', 'Jubal', 'Kae', 'Kaerio', 'Kaerius', 'Kai', 'Kailani', 'Kairius', 'Kawai', 'Keel', 'Kelvin', 'Kendall', 'Kenn', 'Krill', 'Kyle', 'Lachlan', 'Laekces', 'Laguna', 'Laiken', 'Leith', 'Leomaris', 'Leven', 'Ligurian', 'Lincoln', 'Llyr', 'Lusca', 'Lynn', 'Maggiore', 'Mako', 'Marin', 'Marinus', 'Marious', 'Marius', 'Marlin', 'Marlow', 'Marlowe', 'Marsh', 'Marshal', 'Marsious', 'Maxwell', 'Merrick', 'Mizuko', 'Moby', 'Monroe', 'Moor', 'Moore', 'Morcant', 'Morgan', 'Morrissey', 'Mortimer', 'Morven', 'Muir', 'Muiress', 'Muriel', 'Murphy', 'Murray', 'Murrissey', 'Naga', 'Nebraska', 'Neptune', 'Neres', 'Nereus', 'Nerio', 'Nerrocen', 'Noelani', 'Oceanus', 'Octopian', 'Orman', 'Orta', 'Paio', 'Pelagius', 'Peleg', 'Pike', 'Plato', 'Poseider', 'Poseidon', 'Queseon', 'Raen', 'Ran', 'Ray', 'Reif', 'Ren', 'Rio', 'Rip', 'Roan', 'Ronan', 'Ross', 'Santus', 'Seaton', 'Seirus', 'Shar', 'Skipper', 'Storm', 'Strom', 'Tack', 'Tad', 'Tamesis', 'Taron', 'Thames', 'Tide', 'Trent', 'Trenton', 'Tridenton', 'Triton', 'Tullius', 'Wade', 'Wyatt', 'Yarrow', 'Yuval', 'Zale', 'Zander'];
  const nm2 = ['Nadia', 'Vivia', 'Tyene', 'Meri', 'Riva', 'Kelby', 'Nixie', 'Doria', 'Nerissa', 'Kailani', 'Taila', 'Leena', 'Nami', 'Pavati', 'Aquina', 'Nyissa', 'Oshiera', 'Marina', 'Koia', 'Sebaysha', 'Larinia', 'Corrissa', 'Aban', 'Abenahir', 'Aberfa', 'Adella', 'Adra', 'Adrea', 'Adreanna', 'Adria', 'Adriana', 'Adriane', 'Adrianna', 'Adrianne', 'Adrie', 'Adrielle', 'Adriene', 'Adrienna', 'Adrienne', 'Adrina', 'Adva', 'Aedre', 'Aegaea', 'Aegates', 'Aerial', 'Aerwyna', 'Afshak', 'Afshaneh', 'Afshang', 'Alana', 'Allura', 'Allure', 'Amadahy', 'Amara', 'Amaria', 'Amphitrite', 'Anahita', 'Anat', 'Anath', 'Andrina', 'Aphrodite', 'Apulia', 'Aquarius', 'Aquata', 'Ara', 'Araxie', 'Ardvisura', 'Ariel', 'Arielle', 'Arista', 'Arva', 'Arvia', 'Assana', 'Assane', 'Assyria', 'Atargatis', 'Attina', 'Avalon', 'Avonmora', 'Azalea', 'Bayou', 'Beatrice', 'Beck', 'Beverlee', 'Beverley', 'Beverly', 'Bo', 'Brimlad', 'Briny', 'Brook', 'Brooke', 'Brooklyn', 'Brooklynn', 'Brooklynne', 'Bubbles', 'Calder', 'Callan', 'Camie', 'Cari', 'Caspian', 'Ceto', 'Charybdis', 'Chelsea', 'Chenelle', 'Cherith', 'Chumani', 'Coco', 'Cora', 'Coralia', 'Cordelia', 'Cotovatre', 'Coventina', 'Cragen', 'Creiddylad', 'Dalis', 'Dalit', 'Darya', 'Deema', 'Delma', 'Delmar', 'Delmara', 'Delmare', 'Delora', 'Deloras', 'Deloros', 'Deniz', 'Diana', 'Diona', 'Diondra', 'Dione', 'Dionna', 'Dionne', 'Dominique', 'Dorea', 'Doria', 'Dorian', 'Doriana', 'Dorianna', 'Dorianne', 'Dorien', 'Dorienne', 'Doris', 'Dwynwen', 'Dyesebel', 'Dylan', 'Earwine', 'Earwyn', 'Earwyna', 'Eathelin', 'Eathelyn', 'Ebba', 'Echo', 'Edlen', 'Edlin', 'Edlyn', 'Eirene', 'Eldoris', 'Emily', 'Ephyra', 'Erwina', 'Erwyna', 'Euadne', 'Fontanne', 'Gal', 'Galit', 'Geneva', 'Genevieve', 'Genna', 'Genny', 'Genoveva', 'Genowefa', 'Ginevra', 'Glan', 'Goldie', 'Guadalupe', 'Guinemere', 'Guinevere', 'Hali', 'Halimeda', 'Hama', 'Hamako', 'Hanon', 'Hecate', 'Hydra', 'Indra', 'Ingemar', 'Irvetta', 'Irvette', 'Isla', 'Itsaso', 'Jaleh', 'Jeevika', 'Jennifer', 'Jenny', 'Jennyfer', 'Jennyver', 'Jewel', 'Jharna', 'Jorah', 'Jordan', 'June', 'Jurmala', 'Kai', 'Kaia', 'Kailani', 'Kairi', 'Karen', 'Kawai', 'Kawthar', 'Kelby', 'Kelda', 'Kelde', 'Kendall', 'Kevser', 'Kishi', 'Kishiko', 'Kyla', 'Kyle', 'Lage', 'Laguna', 'Lagune', 'Laiken', 'Lamia', 'Lana', 'Laraine', 'Latine', 'Lausanne', 'Leena', 'Lethe', 'Leuconoe', 'Leucothea', 'Leucothia', 'Leven', 'Lily', 'Lin', 'Lola', 'Lorelei', 'Lorelie', 'Lorraine', 'Lucia', 'Lyn', 'Lynn', 'Lynna', 'Lynne', 'Madison', 'Malila', 'Mamia', 'Marea', 'Mareen', 'Mareena', 'Marella', 'Marena', 'Maressa', 'Maricia', 'Marilla', 'Marin', 'Marina', 'Marinda', 'Marine', 'Marinella', 'Marinelle', 'Marinna', 'Marinochka', 'Maris', 'Marisabel', 'Marissa', 'Maritza', 'Mariza', 'Marlin', 'Marlow', 'Marlowe', 'Marna', 'Martha', 'Maryn', 'Maryssa', 'Masika', 'Maya', 'Mayim', 'Melody', 'Meltem', 'Meredith', 'Meri', 'Meriel', 'Meris', 'Merise', 'Merissa', 'Mesi', 'Mica', 'Michal', 'Mira', 'Miranda', 'Mishell', 'Misty', 'Mizuko', 'Moana', 'Molly', 'Monroe', 'Moor', 'Morcan', 'Morgaine', 'Morgan', 'Morgana', 'Morgance', 'Morgane', 'Morgann', 'Morgant', 'Morgayne', 'Morwen', 'Morwenna', 'Moselle', 'Muiel', 'Muirgheal', 'Murel', 'Muriel', 'Murphy', 'Murray', 'Nadah', 'Nadia', 'Nagisa', 'Nahla', 'Naida', 'Nami', 'Nanami', 'Narissa', 'Naunet', 'Nautia', 'Nawfar', 'Nebraska', 'Nebula', 'Nebulia', 'Neha', 'Neith', 'Neptune', 'Nereida', 'Nereyda', 'Nerice', 'Nerida', 'Neried', 'Nerin', 'Nerina', 'Nerine', 'Neris', 'Nerissa', 'Nerita', 'Nimiane', 'Nimue', 'Nineve', 'Nireta', 'Nixie', 'Noelani', 'Noelle', 'Nyneve', 'Océane', 'Oceana', 'Oceane', 'Ondine', 'Oona', 'Orabel', 'Orabelle', 'Pamuya', 'Pasha', 'Pavati', 'Pearl', 'Peirene', 'Pelagia', 'Priscilla', 'Puakai', 'Raina', 'Raine', 'Rainey', 'Rainie', 'Ran', 'Rana', 'Reka', 'Ren', 'Rhode', 'Rhodos', 'Ria', 'Rilla', 'Rille', 'Rilletta', 'Rillette', 'Rillia', 'Rillie', 'Rina', 'Rio', 'Riva', 'Rive', 'River', 'Robeab', 'Rocio', 'Rudabeh', 'Sabrina', 'Sadaf', 'Sara', 'Scylla', 'Seira', 'Sereia', 'Serena', 'Serenna', 'Shabnan', 'Sheila', 'Shellina', 'Shizue', 'Siera', 'Sirena', 'Sokanon', 'Struana', 'Styx', 'Sybil', 'Tal', 'Talia', 'Talise', 'Tallulah', 'Talora', 'Talori', 'Talulah', 'Talya', 'Taura', 'Tefnut', 'Tethys', 'Thalassa', 'Thames', 'Thessalonike', 'Tishtar', 'Torlan', 'Tulia', 'Tyna', 'Tyne', 'Ula', 'Umiko', 'Una', 'Undina', 'Undine', 'Undinia', 'Vanora', 'Varina', 'Venilia', 'Venus', 'Vivian', 'Viviana', 'Viviane', 'Vivianna', 'Vivianne', 'Vivien', 'Wade', 'Waverly', 'Winnifred', 'Wynnifred', 'Yara', 'Yardenah', 'Yaritza', 'Yarrow', 'Yoki', 'Zhaleh'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
