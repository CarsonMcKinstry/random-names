export default function greeks() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aggelos', 'Andreas', 'Apostolos', 'Asteris', 'Charalampos',
    'Charis', 'Christophoros', 'Dimitris', 'Fanis', 'Ieremias', 'Kiriakos',
    'Konstantinos', 'Kostas', 'Lakis', 'Lazaros', 'Loukas', 'Michalis',
    'Nikos', 'Panagiotis', 'Petros', 'Savvas', 'Sotiris', 'Stamatis',
    'Stelios', 'Stergios', 'Takis', 'Thanasis', 'Thanos', 'Thomas', 'Titos',
    'Tolis', 'Vasilis', 'Yannis', 'Yorgos', 'Yrigoris', 'Abderus', 'Absyrtus',
    'Abydos', 'Acastus', 'Achates', 'Achelous', 'Acheron', 'Achilles',
    'Achlys', 'Acrisius', 'Actaeon', 'Acteon', 'Adelphos', 'Admes', 'Admetus',
    'Adonis', 'Adras', 'Adrastos', 'Adrastus', 'Adrian', 'Aeacus', 'Aeetes',
    'Aegeus', 'Aegis', 'Aegisthus', 'Aegyptus', 'Aeneas', 'Aeolus',
    'Aesculapius', 'Aeson', 'Aetos', 'Agamedes', 'Agamemnon', 'Agape',
    'Agatone', 'Aindreas', 'Aindriu', 'Ajax', 'Akil', 'Alasd', 'Alcander',
    'Alcinoos', 'Alcinous', 'Alcnaeon', 'Alcyoneus', 'Alddes', 'Alessandro',
    'Alex', 'Alexander', 'Alexander', 'Alexandras', 'Alexandros',
    'Alexandrukas', 'Alexei', 'Alexio', 'Alix', 'Aloeus', 'Alpheus', 'Altair',
    'Amaoebus', 'Ambrocio', 'Ambrose', 'Ambrose', 'Ambrus', 'Amphiaraus',
    'Amphion', 'Amphitryon', 'Ampyx', 'Amycus', 'Anastagio', 'Anastasio',
    'Anastasios', 'Anastasius', 'Anasztaz', 'Anatol', 'Anatole', 'Anatoli',
    'Anatolijus', 'Anatolio', 'Ancaeus', 'Anchises', 'Andor', 'Andreas',
    'Andres', 'Andreus', 'Andreus', 'Andrew', 'Andrew', 'Andries',
    'Androgeus', 'Androu', 'Anstice', 'Anstiss', 'Antaeus', 'Antares',
    'Anteros', 'Antilochus', 'Antinous', 'Antiphates', 'Anton', 'Antony',
    'Aonghas', 'Aphrodite', 'Apollo', 'Apoloniusz', 'Apostolos', 'Arcadicus',
    'Arcas', 'Arcenio', 'Archemorus', 'Ares', 'Argo', 'Argos', 'Argus',
    'Argus', 'Arion', 'Aristaeus', 'Aristo', 'Aristotle', 'Arsen', 'Arsenio',
    'Artemas', 'Artemesio', 'Artemus', 'Ascalaphus', 'Asklepios', 'Asopus',
    'Athamas', 'Athan', 'Athanasios', 'Athanasius', 'Atlas', 'Atreus',
    'Attis', 'Autolycus', 'Avernus', 'Baccaus', 'Baccus', 'Balasi',
    'Baltsaros', 'Baptiste', 'Basil', 'Basile', 'Basilio', 'Baste',
    'Bastiaan', 'Bastien', 'Baucis', 'Bazyli', 'Bellerophon', 'Bemus',
    'Biton', 'Boreas', 'Brasidas', 'Briareus', 'Brygus', 'Butades', 'Cadmus',
    'Caesare', 'Calchas', 'Calisto', 'Capaneus', 'Caseareo', 'Castor',
    'Cecrops', 'Celeus', 'Cenon', 'Cephalus', 'Cepheus', 'CerbeIus', 'Cesare',
    'Cetus', 'Ceyx', 'Charybdis', 'ChIyses', 'Chris', 'Christan', 'Christian',
    'Christian', 'Christiano', 'Christoph', 'Christopher', 'Christopher',
    'Christophoros', 'Christos', 'Christos', 'Chruse', 'Chrysostom', 'Cimon',
    'Cirio', 'Ciro', 'Claas', 'Claus', 'Cleobis', 'Cleon', 'Cleon', 'Cletus',
    'Cleytus', 'Clio', 'Cocytus', 'Coeus', 'Coireall', 'Cole', 'Colin',
    'Colum', 'Corban', 'Coridan', 'Corybantes', 'Corydon', 'Cos', 'Cosmas',
    'Cosmo', 'Cottus', 'Creon', 'Cretien', 'Cristoforo', 'Cristophe',
    'Cronus', 'Ctesippus', 'Cy', 'Cycnus', 'Cyr', 'Cyrano', 'Cyrano', 'Cyrek',
    'Cyril', 'Cyril', 'Cyrus', 'Cyryl', 'Daedalus', 'Daemon', 'Damae',
    'Damalis', 'Damaris', 'Damaskenos', 'Damaskinos', 'Damen', 'Dameon',
    'Damian', 'Damion', 'Damocles', 'Damon', 'Danaus', 'Dardanus', 'Darian',
    'Darien', 'Darion', 'Darrian', 'Darrien', 'Darrion', 'Daymon',
    'Deiphobus', 'Deke', 'Dekel', 'Dekle', 'Delbin', 'Demetre', 'Demetri',
    'Demetrios', 'Demetrius', 'Demetrius', 'Demitri', 'Demitrius',
    'Demodocus', 'Demogorgon', 'Demophon', 'Demoritus', 'Denes', 'Dennis',
    'Deo', 'Deucalion', 'Diokles', 'Diomedes', 'Dion', 'Dionysios',
    'Dionysius', 'Dionysus', 'Doran', 'Dorian', 'Dorion', 'Drakon', 'Drew',
    'Dunixi', 'Dymas', 'Eachann', 'Efterpi', 'Egidio', 'Eleftherios', 'Elek',
    'Eleutherios', 'Eli', 'Enceladus', 'Endre', 'Endymion', 'Eneas', 'Eoghan',
    'Epeius', 'Erasmus', 'Erebus', 'Erechtheus', 'Erichthonius', 'Erymanthus',
    'Erysichthon', 'Eryx', 'Estevao', 'Eteocles', 'Etor', 'Eubuleus', 'Eugen',
    'Eugene', 'Eugenio', 'Eugenios', 'Eumaeus', 'Eupeithes', 'Euphrosyne',
    'Eurus', 'Euryalus', 'Eurylochus', 'Eurymachus', 'Eurypylus',
    'Eurystheus', 'Euryton', 'Eusebius', 'Eustace', 'Eustachy', 'Eustis',
    'Evan', 'Evzen', 'Fedor', 'Feodor', 'Feodras', 'Filippo', 'Filips',
    'Flip', 'Fulop', 'Gaelan', 'Galan', 'Galen', 'Galinthias', 'Galyn',
    'Ganymede', 'Gelasius', 'Georg', 'George', 'George', 'Georges', 'Giles',
    'Glaucus', 'Goran', 'Graeae', 'Gregoire', 'Gregoly', 'Gregor', 'Gregorie',
    'Gregorior', 'Gregory', 'Gregos', 'Grigor', 'Grigorov', 'Gruev', 'Guilio',
    'Gyes', 'Gyoergy', 'Gyorgy', 'Gyuri', 'Haemon', 'Hali', 'Halirrhothius',
    'Halithersis', 'Hector', 'Helios', 'Hephaestus', 'Heraklesr', 'Hercules',
    'Hermes', 'Herodotus', 'Heron', 'Hesperos', 'Homar', 'Homer', 'Homeros',
    'Homerus', 'Hypnos', 'Iapetus', 'Iasion', 'Iason', 'Ibycus', 'Icarius',
    'Icarus', 'Icelos', 'Icos', 'Idas', 'Idomeneus', 'Ignatius', 'Igorr',
    'Inachus', 'Iorgas', 'Iphicrates', 'Iphitus', 'Isocrates', 'Istvan',
    'Ivan', 'Ivankor', 'Ixion', 'Jaison', 'Jase', 'Jasen', 'Jason', 'Jason',
    'Jayce', 'Jayr', 'Jaysen', 'Jayson', 'Jencir', 'Jeno', 'Jeroenr',
    'Jerome', 'Jerzyr', 'Jirkar', 'Jorenr', 'Julius', 'Jurgisr', 'Kadmus',
    'Kairos', 'Khristos', 'Khrystiyanr', 'Kit', 'Klaasr', 'Klaus', 'Korudon',
    'Kosmosr', 'Kratos', 'Krikor', 'Krischnan', 'Kristian', 'Kristofr',
    'Krystupasr', 'Krzysztofr', 'Kuirilr', 'Kyrillos', 'Kyrillosr', 'Kyros',
    'Ladon', 'Laertes', 'Laestrygones', 'Laius', 'Lander', 'Laocoon',
    'Laomedon', 'Leander', 'Leandro', 'Leonidas', 'Lichas', 'Linus', 'Lippio',
    'Lotus', 'Loxias', 'Luke', 'Lycaon', 'Lycomedes', 'Lycurgus', 'Lynceus',
    'Lysander', 'Marcario', 'Maurice', 'Medus', 'Melampus', 'Melancton',
    'Melanthius', 'Menelaus', 'Menoeceus', 'Mentor', 'Midas', 'Mikolas',
    'Miles', 'Milo', 'Minos', 'Momus', 'Mopsus', 'Morpheus', 'Moses', 'Myles',
    'Myron', 'Napoleon', 'Narkis', 'Nauplius', 'Nectarios', 'Neleus', 'Nemo',
    'Nemos', 'Neo', 'Nicholas', 'Nicholaus', 'Nicias', 'Nick', 'Nicodemus',
    'Nicolas', 'Nicolaus', 'Nik', 'Nike', 'Niklaus', 'Nikodem', 'Nikolai',
    'Nikolajis', 'Nikolos', 'Niles', 'Nilo', 'Nilos', 'Nisus', 'Notus',
    'Obelix', 'Obiareus', 'Oceanus', 'Ocnus', 'Odysseus', 'Oedipus', 'Oeneus',
    'Oenomaus', 'Oighrig', 'Oles', 'Orion', 'Orpheus', 'Orrin', 'Orthros',
    'Otis', 'Otos', 'Otus', 'Palaemon', 'Palamedes', 'Pan', 'Panagiotis',
    'Pancratius', 'Panos', 'Panteleimon', 'Papandrou', 'Paris', 'Parthenios',
    'Patroclus', 'Pavlos', 'Peadair', 'Peder', 'Pegeen', 'Peleus', 'Pelias',
    'Pello', 'Pelops', 'Pentheus', 'Pero', 'Perrin', 'Perseus', 'Persius',
    'Peterke', 'Petrelis', 'Petros', 'Petter', 'Phaethon', 'Phantasos',
    'Phaon', 'Phemius', 'Philemon', 'Philip', 'Philipp', 'Philippe',
    'Phillip', 'Philo', 'Philoctetes', 'Phineas', 'Phineus', 'Phlegethon',
    'Phrixus', 'Phylo', 'Piero', 'Pierro', 'Pieter', 'Pietr', 'Pietro',
    'Pilib', 'Piotr', 'Pippo', 'Pirithous', 'Pirro', 'Pittheus', 'Plato',
    'Platon', 'Plexippus', 'Plutus', 'PoIlux', 'Poseidon', 'Preben', 'Priam',
    'Priapus', 'Procrustes', 'Prokopios', 'Prometheus', 'Prophyrios',
    'Protesilaus', 'Proteus', 'Ptolemy', 'Pygmalion', 'Pyramus', 'Rasmus',
    'Rhadamanthus', 'Rhodes', 'Risto', 'Sabastian', 'Salmoneus', 'Scopas',
    'Sebasten', 'Sebastian', 'Sebastiano', 'Simon', 'Sinon', 'Socrates',
    'Sofronio', 'Soterios', 'Spyridon', 'Stamitos', 'Stavros', 'Steafan',
    'Stefan', 'Stefano', 'Stefanos', 'Stefford', 'Stefon', 'Stephano',
    'Stephanos', 'Stephen', 'Stephon', 'Steven', 'Steverino', 'Takis',
    'Talos', 'Talus', 'Tantalus', 'Tarasios', 'Teague', 'Telamon',
    'Telegonus', 'Telemachus', 'Telephus', 'Tellus', 'Teodors', 'Teofile',
    'Teuthras', 'Thad', 'Thaddeus', 'Thaddius', 'Thadeus', 'Thais',
    'Thanatos', 'Thanos', 'Thanos', 'Thaumas', 'Theo', 'TheocIymenus',
    'Theodon', 'Theodore', 'Theodore', 'Theodosios', 'Theodrekr', 'Theodric',
    'Theon', 'Theophile', 'Theophilus', 'Theron', 'Therron', 'Thersites',
    'Theseus', 'Thomas', 'Thyestes', 'Tiege', 'Tim', 'Timeus', 'Timmy',
    'Timocrates', 'Timoleon', 'Timon', 'Timotheos', 'Timothy', 'Timun',
    'Tiomoid', 'Tito', 'Titos', 'Titus', 'Tityus', 'Tivadar', 'Todor',
    'Toxeus', 'Triptolemus', 'Triton', 'Trophonius', 'Turannos', 'Tydeus',
    'Tylissus', 'Tymek', 'Tymon', 'Tymon', 'Tyndareus', 'Typhoeus', 'Typhon',
    'Tyrone', 'Tyrone', 'Ulysses', 'Uranus', 'Urian', 'Vasileios', 'Vasilios',
    'Vasilis', 'Vasos', 'VasyItso', 'Vasyklo', 'Vasyl', 'Xanthus', 'Xanthus',
    'Xeno', 'Xenophon', 'Xenos', 'Xerxes', 'Xuthus', 'Xylon', 'Yanni',
    'Yehor', 'Yuri', 'Zale', 'Zarek', 'Zelotes', 'Zeno', 'Zenobio', 'Zenon',
    'Zenos', 'Zephyr', 'Zero', 'Zerro', 'Zetes', 'Zoltan', 'Zoltar', 'Zorba',
    'Zotico'];
  const nm2 = ['Agapi', 'Aggeliki', 'Alexandra', 'Alexia', 'Amalia', 'Anna',
    'Athanasia', 'Chrysa', 'Chrysoula', 'Despoina', 'Eirini', 'Elpida',
    'Evdokia', 'Evianna', 'Fania', 'Foni', 'Georgia', 'Georgina', 'Gogo',
    'Grigoria', 'Ioanna', 'Jenny', 'Katerina', 'Kiki', 'Kiriaki',
    'Konstantina', 'Liana', 'Melina', 'Michaela', 'Nasia', 'Nerantzia',
    'Nikoleta', 'Ntalia', 'Olga', 'Panagiota', 'Paraskevi', 'Pavlina',
    'Sofia', 'Sotiria', 'Stamatia', 'Stavroula', 'Stella', 'Triantafillia',
    'Vasiliki', 'Vaso', 'Zoi', 'Zoumpoulia', 'Mirrita', 'Acacia', 'Acantha',
    'Adara', 'Ademia', 'Adonia', 'Adrienne', 'Agatha', 'Aglaia', 'Agneta',
    'Aileen', 'Airlia', 'Alala', 'Alcina', 'Aldora', 'Alena', 'Alethea',
    'Alexandra', 'Alexis', 'Alice', 'Alida', 'Althea', 'Alysa', 'Alysia',
    'Alyssa', 'Ambrosine', 'Anastasia', 'Andrea', 'Andromeda', 'Anemone',
    'Angel', 'Angela', 'Angell', 'Angell', 'Anndra', 'Anteia', 'Anthea',
    'Aphrodite', 'Apolline', 'Aretha', 'Aretina', 'Ariadne', 'Aricia',
    'Artemisia', 'Asia', 'Aspasia', 'Astra', 'Astrid', 'Athena', 'Axelia',
    'Barbara', 'Basha', 'Bellanca', 'Bernice', 'Calandra', 'Calantha',
    'Callia', 'Callidora', 'Candace', 'Cascadia', 'Cassandra', 'Cassia',
    'Casta', 'Castalia', 'Catherine', 'Celandia', 'Charisma', 'Charissa',
    'Cherise', 'Chloe', 'Christobel', 'Circe', 'Cleo Cliantha', 'Colette',
    'Cora', 'Cosima', 'Cressida', 'Cynara', 'Cynthia', 'Cyrilla', 'Damara',
    'Daphne', 'Deianira', 'Delia', 'Delphine', 'Demetria', 'Denise',
    'Desdemona', 'Despina', 'Dianthe', 'Diarria', 'Dionne', 'Dora', 'Doria',
    'Dorinda', 'Doris', 'Dorothy', 'Drew', 'Drucilla', 'Dyna', 'Ebony',
    'Eileen', 'Eirene', 'Eleanor', 'Electra', 'Elektra', 'Eleni', 'Elina',
    'Elissa', 'Elma', 'Eudocia', 'Eudora', 'Eugenia', 'Eulalia', 'Eunice',
    'Euphemia', 'Evadine', 'Evadne', 'Evangelia', 'Evangelina', 'Evangeline',
    'Fedora', 'Gelasia', 'Georgette', 'Georgia', 'Hallie', 'Helen', 'Helena',
    'Hera', 'Honna', 'Hyacinth', 'Hyancinthe', 'Hypatia', 'Ianthe', 'Idola',
    'Iona', 'Irene', 'Iris', 'Irus', 'Isadora', 'Isadorer', 'Isaura', 'Jace',
    'Jacinda ', 'Jacinta', 'Kaia', 'Kalika', 'Kara', 'Karen', 'Karena',
    'Karissa', 'Kassia', 'Kate', 'Katharyn', 'Katherine', 'Kathleen',
    'Kathryne', 'Kay', 'Kirsten', 'Kolina', 'Kristabelle', 'Kynthia', 'Laria',
    'Larissa', 'Layna', 'Leah', 'Leandra', 'Leonora', 'Letha', 'Lilah',
    'Lillian', 'Livana', 'Lizandra', 'Lydia', 'Lysandra', 'Maeve', 'Mariam',
    'Marigold', 'Marilee', 'Megan', 'Megara', 'Melaina', 'Melanctha',
    'Melanie', 'Melba', 'Melia', 'Melinda', 'Melissa', 'Melita', 'Meliza',
    'Melody', 'Minerva', 'Muriel', 'Myrtle', 'Naida', 'Narella', 'Nellie',
    'Neola', 'Neoma', 'Nerita', 'Nessa', 'Nicia', 'Nicole', 'Nicolette',
    'Nikita', 'Nora', 'Obelia', 'Odessa', 'Olympia', 'Omega', 'Ophelia',
    'Ophira', 'Pamela', 'Pandora', 'Panthea', 'Pelagia', 'Penelope', 'Peony',
    'Persephone', 'Persis', 'Petrina', 'Phedra', 'Philana', 'Philippa',
    'Philomena', 'Phoebe', 'Phoena', 'Phyllis', 'Raissa', 'Rena', 'Rhea',
    'Rhoda', 'Rita', 'Saba', 'Sandra', 'Sandrine', 'Sapphira', 'Selena',
    'Sibyl', 'Sirena', 'Sophie', 'Sophronia', 'Stacia', 'Stefania', 'Stella',
    'Tabitha', 'Talia', 'Tansy', 'Taryn', 'Teresa', 'Tess', 'Thea', 'Thelma',
    'Theodora', 'Thera', 'Theresa', 'Thomasa', 'Tia', 'Tiara', 'Timandra',
    'Timothea', 'Titania', 'Tracey', 'Tressa', 'Uriana', 'Vanessa', 'Vara',
    'Vesna', 'Voleta', 'Xandra', 'Xena', 'Xenia', 'Xylia', 'Xylina', 'Xylona',
    'Yalena', 'Yolanda', 'Zandra', 'Zanita', 'Zanthe', 'Zebina', 'Zelia',
    'Zena', 'Zenia', 'Zera', 'Zeva', 'Zinaida', 'Zoe'];
  const nm3 = ['Agnes', 'Alanis', 'Alexopoulos', 'Anagnos', 'Anastas',
    'Anastos', 'Andreadis', 'Andreas', 'Andris', 'Angelis', 'Angelopoulos',
    'Anthes', 'Anthis', 'Antonis', 'Antonios', 'Antonopoulos', 'Apostolos',
    'Apostolos', 'Argyros', 'Artinos', 'Arvanitis', 'Athanas', 'Athans',
    'Athas', 'Bakas', 'Balis', 'Ballas', 'Ballis', 'Banis', 'Barbas',
    'Barberis', 'Baris', 'Barlas', 'Baros', 'Biros', 'Booras', 'Boosalis',
    'Boulos', 'Bouras', 'Buros', 'Calis', 'Callas', 'Callis', 'Caras',
    'Carras', 'Castellanos', 'Chaconas', 'Chontos', 'Christakos',
    'Christodoulos', 'Christopoulos', 'Christos', 'Christos', 'Chronis',
    'Collias', 'Comis', 'Condos', 'Constantinides', 'Constantinos', 'Contos',
    'Cosmos', 'Costas', 'Delis', 'Dellis', 'Demetrios', 'Demos', 'Demopoulos',
    'Demos', 'Dimitrios', 'Doukas', 'Drakos', 'Drivas', 'Dukas', 'Economides',
    'Economos', 'Economos', 'Eliades', 'Elias', 'Eliopoulos', 'Floros',
    'Fotopoulos', 'Fotos', 'Frangos', 'Gabris', 'Galanis', 'Galanos',
    'Galatas', 'Gallos', 'Ganas', 'Ganis', 'Garis', 'Gekas', 'Georgas',
    'Georgiades', 'Georgiadis', 'Georgios', 'Georgopoulos', 'Geros',
    'Gianakos', 'Giannopoulos', 'Gianopoulos', 'Gikas', 'Glaros', 'Gogolas',
    'Golias', 'Goulas', 'Gounaris', 'Grivas', 'Halkias', 'Hallas', 'Hanas',
    'Harris', 'Hatzis', 'Hondros', 'Ioannos', 'Kairis', 'Kakos', 'Kalfas',
    'Kalivas', 'Kallas', 'Kallis', 'Kanas', 'Kanelos', 'Kappas', 'Karahalios',
    'Karalis', 'Karas', 'Karras', 'Katsaros', 'Kefalas', 'Kellis', 'Kollias',
    'Kondos', 'Kontos', 'Korbas', 'Kormos', 'Koskos', 'Kostas', 'Kostas',
    'Kostopoulos', 'Kotas', 'Kouris', 'Kozmas', 'Kritikos', 'Ladas',
    'Laganas', 'Lagos', 'Lambros', 'Lampros', 'Laskaris', 'Laskos', 'Lazos',
    'Lekas', 'Leos', 'Levas', 'Leventis', 'Liakos', 'Lias', 'Lillis', 'Livas',
    'Logos', 'Lois', 'Loris', 'Loukas', 'Macris', 'Maheras', 'Makos',
    'Makris', 'Malas', 'Malia', 'Mallas', 'Managos', 'Manellas', 'Mangas',
    'Maniatis', 'Manikas', 'Manis', 'Manolis', 'Manos', 'Maragos', 'Maras',
    'Marinos', 'Maris', 'Markos', 'Martis', 'Matis', 'Matranga', 'Mattas',
    'Matthias', 'Mavros', 'Melis', 'Mellas', 'Mellis', 'Menas', 'Metaxas',
    'Metros', 'Michaelides', 'Mikos', 'Milas', 'Milonas', 'Minas', 'Minas',
    'Mingas', 'Mires', 'Miskos', 'Mitros', 'Molas', 'Monas', 'Moraitis',
    'Moros', 'Mulas', 'Mundis', 'Murgas', 'Mustos', 'Mutos', 'Nanos',
    'Nassos', 'Nicolaides', 'Nicolas', 'Nicolis', 'Nicolos', 'Nikas',
    'Pagonis', 'Palamaras', 'Palas', 'Pallas', 'Panagakos', 'Panagopoulos',
    'Panagos', 'Panas', 'Panos', 'Papas', 'Papadakis', 'Papadopoulos',
    'Papageorgious', 'Papalias', 'Papandreas', 'Papas', 'Pappas', 'Pardos',
    'Pateras', 'Patras', 'Paules', 'Paulos', 'Pavlis', 'Pennas', 'Pepis',
    'Peris', 'Peris', 'Perris', 'Perros', 'Petraccas', 'Petrakis',
    'Petralias', 'Petras', 'Petrides', 'Petros', 'Petropoulos', 'Petros',
    'Petrous', 'Pipes', 'Piteras', 'Polites', 'Politis', 'Primos', 'Priscos',
    'Procopios', 'Psomas', 'Pulos', 'Rallis', 'Raptis', 'Regas', 'Rellas',
    'Remes', 'Remis', 'Resta', 'Rigas', 'Rigas', 'Rines', 'Rodas', 'Rodis',
    'Rodias', 'Rodinos', 'Rodis', 'Rokos', 'Romanos', 'Rondas', 'Rondos',
    'Rosi', 'Rossos', 'Rotas', 'Roussos', 'Rubis', 'Saccas', 'Sagonas',
    'Saittas', 'Salis', 'Sallas', 'Sallis', 'Samaras', 'Sannas', 'Sarantos',
    'Sarkis', 'Sarris', 'Savas', 'Savas', 'Scafidis', 'Scalas', 'Sicas',
    'Sideris', 'Simos', 'Siskas', 'Siskos', 'Sitas', 'Sotiropoulos', 'Soulis',
    'Spanos', 'Speros', 'Spinos', 'Spiros', 'Spiteris', 'Stamas', 'Stamatis',
    'Stamos', 'Stanis', 'Stathakis', 'Stathis', 'Stathopoulos', 'Stathos',
    'Stavropoulos', 'Stavros', 'Strakas', 'Stratis', 'Stratos', 'Takes',
    'Tantalos', 'Tassis', 'Tassos', 'Tatas', 'Tavoularis', 'Teresis',
    'Terzis', 'Thanos', 'Theodoros', 'Thomas', 'Toccis', 'Toles', 'Tomaras',
    'Totos', 'Trainos', 'Trakas', 'Tripis', 'Tripolis', 'Valis', 'Vallas',
    'Vallis', 'Vallis', 'Varelas', 'Vascos', 'Vasilakis', 'Vasilios',
    'Vassallos', 'Vassos', 'Velis', 'Vergas', 'Vidales', 'Vitalis', 'Vlachos',
    'Vlahakis', 'Vlahos', 'Xenakis', 'Xenos', 'Zacharias', 'Zanes', 'Zannis',
    'Zaros', 'Zenos', 'Zervas', 'Zervos', 'Zikas', 'Zografos', 'Zurlos'];
  const nm4 = ['Agne', 'Alani', 'Alexopoulou', 'Anagnou', 'Anasta', 'Anastou',
    'Andreadi', 'Andrea', 'Andri', 'Angeli', 'Angelopoulou', 'Anthe', 'Anthi',
    'Antoni', 'Antoniou', 'Antonopoulou', 'Apostolou', 'Apostolou', 'Argyrou',
    'Artinou', 'Arvaniti', 'Athana', 'Atha', 'Baka', 'Bali', 'Balla', 'Balli',
    'Bani', 'Barba', 'Barberi', 'Bari', 'Barla', 'Barou', 'Birou', 'Boora',
    'Boosali', 'Boulou', 'Boura', 'Burou', 'Cali', 'Calla', 'Calli', 'Cara',
    'Carra', 'Castellanou', 'Chacona', 'Chontou', 'Christakou',
    'Christodoulou', 'Christopoulou', 'Christou', 'Christou', 'Chroni',
    'Collia', 'Comi', 'Condou', 'Constantinide', 'Constantinou', 'Contou',
    'Cosmou', 'Costa', 'Deli', 'Delli', 'Demetriou', 'Demou', 'Demopoulou',
    'Demou', 'Dimitriou', 'Douka', 'Drakou', 'Driva', 'Duka', 'Economide',
    'Economou', 'Economou', 'Eliade', 'Elia', 'Eliopoulou', 'Florou',
    'Fotopoulou', 'Fotou', 'Frangou', 'Gabri', 'Galani', 'Galanou', 'Galata',
    'Gallou', 'Gana', 'Gani', 'Gari', 'Geka', 'Georga', 'Georgiade',
    'Georgiadi', 'Georgiou', 'Georgopoulou', 'Gerou', 'Gianakou',
    'Giannopoulou', 'Gianopoulou', 'Gika', 'Glarou', 'Gogola', 'Golia',
    'Goula', 'Gounari', 'Griva', 'Halkia', 'Halla', 'Hana', 'Harri', 'Hatzi',
    'Hondrou', 'Ioannou', 'Kairi', 'Kakou', 'Kalfa', 'Kaliva', 'Kalla',
    'Kalli', 'Kana', 'Kanelou', 'Kappa', 'Karahaliou', 'Karali', 'Kara',
    'Karra', 'Katsarou', 'Kefala', 'Kelli', 'Kollia', 'Kondou', 'Kontou',
    'Korba', 'Kormou', 'Koskou', 'Kosta', 'Kosta', 'Kostopoulou', 'Kota',
    'Kouri', 'Kozma', 'Kritikou', 'Lada', 'Lagana', 'Lagou', 'Lambrou',
    'Lamprou', 'Laskari', 'Laskou', 'Lazou', 'Leka', 'Leou', 'Leva',
    'Leventi', 'Liakou', 'Lia', 'Lilli', 'Liva', 'Logou', 'Loi', 'Lori',
    'Louka', 'Macri', 'Mahera', 'Makou', 'Makri', 'Mala', 'Malia', 'Malla',
    'Managou', 'Manella', 'Manga', 'Maniati', 'Manika', 'Mani', 'Manoli',
    'Manou', 'Maragou', 'Mara', 'Marinou', 'Mari', 'Markou', 'Marti', 'Mati',
    'Matranga', 'Matta', 'Matthia', 'Mavrou', 'Meli', 'Mella', 'Melli',
    'Mena', 'Metaxa', 'Metrou', 'Michaelide', 'Mikou', 'Mila', 'Milona',
    'Mina', 'Mina', 'Minga', 'Mire', 'Miskou', 'Mitrou', 'Mola', 'Mona',
    'Moraiti', 'Morou', 'Mula', 'Mundi', 'Murga', 'Mustou', 'Mutou', 'Nanou',
    'Nassou', 'Nicolaide', 'Nicola', 'Nicoli', 'Nicolou', 'Nika', 'Pagoni',
    'Palamara', 'Pala', 'Palla', 'Panagakou', 'Panagopoulou', 'Panagou',
    'Pana', 'Panou', 'Papa', 'Papadaki', 'Papadopoulou', 'Papalia',
    'Papandrea', 'Papa', 'Pappa', 'Pardou', 'Patera', 'Patra', 'Paule',
    'Paulou', 'Pavli', 'Penna', 'Pepi', 'Peri', 'Peri', 'Perri', 'Perrou',
    'Petracca', 'Petraki', 'Petralia', 'Petra', 'Petride', 'Petrou',
    'Petropoulou', 'Petrou', 'Pipe', 'Pitera', 'Polite', 'Politi', 'Primou',
    'Priscou', 'Procopiou', 'Psoma', 'Pulou', 'Ralli', 'Rapti', 'Rega',
    'Rella', 'Reme', 'Remi', 'Resta', 'Riga', 'Riga', 'Rine', 'Roda', 'Rodi',
    'Rodia', 'Rodinou', 'Rodi', 'Rokou', 'Romanou', 'Ronda', 'Rondou', 'Rosi',
    'Rossou', 'Rota', 'Roussou', 'Rubi', 'Sacca', 'Sagona', 'Saitta', 'Sali',
    'Salla', 'Salli', 'Samara', 'Sanna', 'Sarantou', 'Sarki', 'Sarri', 'Sava',
    'Sava', 'Scafidi', 'Scala', 'Sica', 'Sideri', 'Simou', 'Siska', 'Siskou',
    'Sita', 'Sotiropoulou', 'Souli', 'Spanou', 'Sperou', 'Spinou', 'Spirou',
    'Spiteri', 'Stama', 'Stamati', 'Stamou', 'Stani', 'Stathaki', 'Stathi',
    'Stathopoulou', 'Stathou', 'Stavropoulou', 'Stavrou', 'Straka', 'Strati',
    'Stratou', 'Take', 'Tantalou', 'Tassi', 'Tassou', 'Tata', 'Tavoulari',
    'Teresi', 'Terzi', 'Thanou', 'Theodorou', 'Thoma', 'Tocci', 'Tole',
    'Tomara', 'Totou', 'Trainou', 'Traka', 'Tripi', 'Tripoli', 'Vali',
    'Valla', 'Valli', 'Valli', 'Varela', 'Vascou', 'Vasilaki', 'Vasiliou',
    'Vassallou', 'Vassou', 'Veli', 'Verga', 'Vidale', 'Vitali', 'Vlachou',
    'Vlahaki', 'Vlahou', 'Xenaki', 'Xenou', 'Zacharia', 'Zane', 'Zanni',
    'Zarou', 'Zenou', 'Zerva', 'Zervou', 'Zika', 'Zografou', 'Zurlou']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm4[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
