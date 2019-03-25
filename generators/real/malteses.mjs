export default function malteses() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ċensu', 'Ċikku', 'Ġan', 'Ġann', 'Ġanni', 'Ġerardo', 'Ġesù',
    'Ġiljan', 'Ġorġ', 'Ġovanni', 'Ġużè', 'Ġużepp', 'Ġużeppi', 'Ġużi', 'Ġulju',
    'Ġwakkin', 'Ġwann', 'Ġwanni', 'Żaren', 'Żaru', 'Abram', 'Adam', 'Aiden',
    'Alec', 'Alessandro', 'Alessandru', 'Alexander', 'Alfred', 'Alwiġi',
    'Alwigi', 'Anġlu', 'Anard', 'Andre', 'Andreas', 'Andrew', 'Andrija',
    'Andy', 'Anglu', 'Annibale', 'Antnin', 'Anton', 'Antonio', 'Arturo',
    'Ayden', 'Baldassar', 'Bastjan', 'Ben', 'Benard', 'Benjamin', 'Beppe',
    'Bernard', 'Bert', 'Bertu', 'Carmelo', 'Censu', 'Charlu', 'Cikku ',
    'DAnjel', 'Dan', 'Daniel', 'Danil', 'Danjel', 'Danzel', 'Denzel',
    'Denzilee', 'Dom', 'Duminku', 'Dumniku', 'Dwardu', 'Edwardu', 'Elija',
    'Emmanwel', 'Emvin', 'Erin', 'Ewgenju', 'Federiku', 'Feliċ', 'Fernardu',
    'Filippu', 'Fonzu', 'Franġisk', 'Franġisku', 'Frangisk', 'Fredu', 'Frenċ',
    'Frenc', 'Gabriel', 'Gabrijel', 'Gabryl', 'Gamri', 'Gan', 'Gann', 'Ganni',
    'Gavino', 'Gejtan', 'Gelormo', 'Gerardu', 'Giljan', 'Girgor', 'Giuseppe',
    'Gorg', 'Gori', 'Govanni', 'Grazzju', 'Grezzju', 'Guiliano', 'Gulju',
    'Guzè', 'Guze', 'Guzeppi', 'Guzi', 'Gwakkin', 'Gwann', 'Gwanni', 'Hugues',
    'Indri', 'Indrija', 'Ino', 'Isaac', 'Izaak', 'Jack', 'Jackson', 'Jacob',
    'Jacques', 'Jaden', 'Jadon', 'Jake', 'James', 'Jamie', 'Jarad', 'Jayden',
    'Jayme', 'Jean', 'John', 'Jonathan', 'Josef', 'Joseph', 'Juan', 'Julian',
    'Julien', 'Kai', 'Kaiden', 'Kail', 'Kalċidon', 'Kalcidon', 'Karistu',
    'Karlu', 'Karm', 'Karmenu', 'Karmnu', 'Kayden', 'Keiran', 'Kelinu',
    'Klement', 'Konstantinu', 'Konsu', 'Krispin', 'Kristofru', 'Kyle',
    'Kyran', 'Lażżru', 'Lawrent', 'Lawrenz', 'Leli', 'Leon', 'Leonardo',
    'Leonardu', 'Lewis', 'Liam', 'Lionel', 'Luca', 'Lucas', 'Luke', 'Luwiġi',
    'Lwiġi', 'Maison', 'Manwel', 'Marċell', 'Marjanu', 'Marju', 'Mark',
    'Marku', 'Mason', 'Massimiljanu', 'Massiminu', 'Matteo', 'Matthew',
    'Matthias', 'Mawru', 'Michael', 'Miguel', 'Mikhail', 'Mikiel', 'Mosè',
    'Nathan', 'Nathaniel', 'Nazarenu', 'Nazzarenu', 'Nestu', 'Nicholas',
    'Nick', 'Nicolai', 'Nikola', 'Ninu', 'Noah', 'Noe', 'Nosi', 'Nunzio',
    'Nunzju', 'Oliver', 'Oreste', 'Oskar', 'Patrizju', 'Patrizju ', 'Pawl',
    'Pawlinu', 'Pawlu', 'Peppi', 'Pietru', 'Piju', 'Pinu', 'Porfilju',
    'Publju', 'Redent', 'Redentur', 'Rikkardu', 'Robert', 'Rokku', 'Ruzar',
    'Salvinu', 'Salvu', 'Sam', 'Samuel', 'Saver', 'Saverju', 'Sebastjan',
    'Spiru', 'Stiefnu', 'Temi', 'Thomas', 'Tinu', 'Tommas', 'Tommy', 'Tumas',
    'Turu', 'Valent', 'Valent ', 'Valentin', 'Valentinu', 'Varist', 'Vestru',
    'Vinċenz', 'Vittor', 'Wenzu', 'Wiġi', 'William', 'Wistin', 'Xand',
    'Xandru', 'Yan', 'Yannick', 'Zachary', 'Zack', 'Zak', 'Zakkarija',
    'Zakkarija ', 'Zaren', 'Zaru', 'Zazu'];
  const nm2 = ['Ċassidy', 'Ċensa', 'Ċensina', 'Ċettina', 'Ċikka', 'Ġannina',
    'Ġiżimina', 'Ġilju', 'Ġuża', 'Ġużeppa', 'Ġużeppina', 'Ħilda', 'Aaliyah',
    'Agnese', 'Aimee', 'Alaya', 'Alessia', 'Alexandra', 'Alexia', 'Alice',
    'Alicia', 'Alison', 'Aly', 'Alyssa', 'Amber', 'Amberley', 'Amy', 'Angela',
    'Anjeze', 'Ann', 'Anna', 'Annibale', 'Beatriċi', 'Carla', 'Carly',
    'Catherine', 'Censa', 'Censina', 'Cettina', 'Chanel', 'Chloe', 'Christa',
    'Christabel', 'Christina', 'Cikka', 'Claire', 'Clara', 'Clarisse',
    'Dolor', 'Duminka', 'Elanua', 'Elena', 'Elenia', 'Elisa', 'Elise',
    'Eliza', 'Elizabeth', 'Elizabetta', 'Ella', 'Ema', 'Emelie', 'Emilia',
    'Emily', 'Emma', 'Emmanuela', 'Ester', 'Eva ', 'Faith', 'Fawstina',
    'Filomena', 'Francesca', 'Ganna', 'Gejta', 'Geriet', 'Gerit', 'Giada',
    'Giuseppina', 'Gizimina', 'Gjacinta', 'Goma', 'Grazzja', 'Grezzja',
    'Grezzja ', 'Gulina', 'Guza ', 'Guzeppina', 'Hailee', 'Hailey', 'Hannah',
    'Hayleigh', 'Helena', 'Hilda', 'Ineż', 'Jade', 'Jasmine', 'Julia',
    'Julianne', 'Kai', 'Kailey', 'Kaleigh', 'Karla', 'Karmena', 'Karmni',
    'Katarina', 'Kate', 'Katerin', 'Katerina', 'Katrina', 'Katya', 'Keira',
    'Kekkin', 'Kelina', 'Khloe', 'Klawdja', 'Konċetta', 'Koncetta', 'Konsa',
    'Krystle', 'Kyra', 'Lea', 'Leah', 'Leia', 'Lela', 'Leonarda', 'Lexi',
    'Liena', 'Lini', 'Lola', 'Lonza', 'Lora', 'Lorenza', 'Luċija', 'Lunzjata',
    'Makaila', 'Manwela', 'Margerita', 'Mari', 'Maria', 'Mariah', 'Marie',
    'Marija', 'Marthese', 'Martina', 'Martine', 'Maya', 'Melita', 'Mellieha',
    'Mia', 'Michelle', 'Mikela', 'Mikiela', 'Monika', 'Myah', 'Nicky',
    'Nicola', 'Nicole', 'Nina', 'Pawla', 'Pawlina', 'Pietra', 'Pina',
    'Pompea ', 'Pompea', 'Rachel', 'Raquel', 'Reġina', 'Regina', 'Rena',
    'Rita', 'Rożarja', 'Rocka', 'Rosa', 'Rozarja', 'Rozina', 'Ruza',
    'Salvina', 'Shanelle', 'Skolastika', 'Sofana', 'Sofija', 'Sophia',
    'Sophie', 'Spira', 'Stella', 'Tereża', 'Tere', 'Tereza', 'Tessie',
    'Trezza', 'Vitor', 'Vitorina', 'Vitorja', 'Vittorja', 'Wena', 'Wenza',
    'Yasmeen', 'Yasmine', 'Ylenia', 'Yulia', 'Zeza'];
  const nm3 = ['Abdilla', 'Abela', 'Adam', 'Adami', 'Agius', 'Alagona', 'Alard',
    'Albanese', 'Albano', 'Albertis', 'Alden', 'Alessandro', 'Alessi',
    'Alfard', 'Alferan', 'Algaria', 'Allegritto', 'Aloisio', 'Altair',
    'Amadeo', 'Amaira', 'Amairo', 'Amato', 'Ambrogio', 'Amico', 'Amodeo',
    'Amore', 'Anastasi', 'Anguillone', 'Annati', 'Antignolo', 'Antonelli',
    'Apap', 'Aquilina', 'Aquino', 'Aragona', 'Ardoino', 'Arena', 'Armellini',
    'Armenia', 'Arnaldo', 'Arnold', 'Arpa', 'Arrigo', 'Asciak', 'Assenso',
    'Assenza', 'Astarita', 'Asti', 'Attard', 'Attardo', 'Audibert', 'Auola',
    'Aveta', 'Axiaq', 'Axisa', 'Azzarello', 'Azzilla', 'Azzopardi', 'Bajada',
    'Bajjada', 'Balbi', 'Baldacchino', 'Balzan', 'Balzano', 'Barbara',
    'Barbaro', 'Barbera', 'Barberi', 'Barbiere', 'Barbieri', 'Bardon',
    'Barra', 'Bartoli', 'Bartolo', 'Battaglia', 'Battaille', 'Beck',
    'Bellanti', 'Bellia', 'Bellizzi', 'Bellotti', 'Belluti', 'Benaglia',
    'Bencini', 'Benett', 'Benjacar', 'Berido', 'Bernard', 'Bezzina',
    'Biancardi', 'Bianchi', 'Bianco', 'Biasini', 'Billion', 'Bilocca',
    'Binett', 'Bione Boffa', 'Bisazza', 'Boffa', 'Bologna', 'Bonaci',
    'Bonanno', 'Bonavia', 'Bonavita', 'Bondi', 'Bondin', 'Bonell', 'Bonello',
    'Bonett', 'Bongailas', 'Bonici', 'Bonnet', 'Bonnett', 'Bonnici', 'Bons',
    'Bontardini', 'Borda', 'Borg', 'Born', 'Borne', 'Borria', 'Bosco',
    'Bosio', 'Bourgion', 'Bres', 'Brest', 'Briffa', 'Brignone', 'Brincat',
    'Bruno', 'Bugeja', 'Bugelli', 'Buhagiar', 'Buontempo', 'Burlo',
    'Busietta', 'Busuttil', 'Buttigieg', 'Cachia', 'Caffari', 'Cagliares',
    'Cagliari', 'Calafato', 'Calafiore', 'Calamatta', 'Cali', 'Calleja',
    'Callus', 'Camenzuli', 'Camilleri', 'Cannataci', 'Carabott', 'Caracas',
    'Carbonaro', 'Carbone', 'Cardona', 'Caruana', 'Casan', 'Cascun', 'Casha',
    'Casolani', 'Cassar', 'Cassia', 'Cassola', 'Castagna', 'Castagnia',
    'Castaldi', 'Castelletti', 'Castillo', 'Catania', 'Catro', 'Cauchi',
    'Cavaretta', 'Cavarra', 'Ceci', 'Cefai', 'Cefalo', 'Ceravolo', 'Cesal',
    'Cesareo', 'Chapelle', 'Chetcuti', 'Chetcutti', 'Chevalier', 'Chircop',
    'Ciancio', 'Ciantar', 'Ciappara', 'Ciarlo', 'Ciccalo', 'Cilia', 'Cini',
    'Cipriott', 'Coleiro', 'Colonna', 'Consiglio', 'Conti', 'Coppini',
    'Cordina', 'Cordina Cortis', 'Corso', 'Cortis', 'Cost', 'Costa', 'Cousin',
    'Cremona', 'Crescimanno', 'Crescimano', 'Criminale', 'Crispo',
    'Cristiano', 'Critien', 'Cumbo', 'Curmi', 'Cuschieri', 'Custo', 'Cutajar',
    'Cutruffo', 'Cutugno', 'D\'Amato', 'D\'Amico', 'D\'Emanuele', 'Dalli',
    'Dalmas', 'Dandria', 'Danza', 'Darmanin', 'Darmenia', 'De Barro',
    'De Battista', 'De Carlo', 'De Caro', 'De Celis', 'De Cesare',
    'De Domenico', 'De Fremaux', 'De Gabriele', 'De Gaetano', 'De Giorgio',
    'De Giovanni', 'De Lorenzo', 'De Lucca', 'De Manuele', 'De Marco',
    'De Maria', 'De Martino', 'De Micoli', 'De Pares', 'De Pasquale',
    'De Petri', 'De Piro', 'De Sain', 'De Sayn', 'Debarro', 'Debatista',
    'Debattista', 'Debono', 'Debrincat', 'Decandia', 'Decarlo', 'Decaro',
    'Decelis', 'Decesare', 'Dedomenico', 'Defournier', 'Defremaux',
    'Degabriele', 'Degaetano', 'Degiorgio', 'Degiovanni', 'Deguanez',
    'Deguara', 'Deidun', 'Delali', 'Delia', 'Delicata', 'Delorenzo',
    'Delucca', 'Demajo', 'Demanuele', 'Demarco', 'Demaria', 'Demartino',
    'Demicoli', 'Denaro', 'Denicola', 'Depares', 'Depasquale', 'Depetri',
    'Depiro', 'Desain', 'Desalvo', 'Desira', 'Despot', 'Despott', 'Diacono',
    'Diamantino', 'Diedo', 'Difesa', 'Dimech', 'Dingli', 'Dolivier',
    'Doublesin', 'Doublet', 'Dougall', 'Drago', 'Duca', 'Dupont', 'Ebejer',
    'Efner', 'Ellul', 'Engerer', 'England', 'Enriquez', 'Eradi', 'Erardi',
    'Esposito', 'Eynaud', 'Fabri', 'Facciol', 'Faenza', 'Falzon', 'Famucelli',
    'Famularo', 'Fantino', 'Faraci', 'Farina', 'Farr', 'Farrigiani',
    'Farrugia', 'Fasanelli', 'Faure', 'Fauzza', 'Fava', 'Favray', 'Fedele',
    'Felice', 'Fenech', 'Fernadez', 'Ferrante', 'Ferreri', 'Ferriggi',
    'Ferris', 'Ferris Ferro', 'Ferro', 'Figera', 'Filetti', 'Filletti',
    'Fiorentino', 'Fiorini', 'Fiteni', 'Flamingo', 'Fleri', 'Flores',
    'Florida', 'Floridia', 'Fontana', 'Formosa', 'Forno', 'Fournier',
    'Fracchi', 'Francalanza', 'Francica', 'Franco', 'Frendo', 'Friggieri',
    'Fsadni', 'Gabaretta', 'Gabarretta', 'Gabriele', 'Gaetani', 'Gafà',
    'Gafa', 'Gaffiero', 'Galdes', 'Galdies', 'Galea', 'Galizia', 'Gallo',
    'Gambin', 'Ganado', 'Garcia', 'Gargani', 'Gargin', 'Garrone', 'Garroni',
    'Garzia', 'Gasan', 'Gasciulli', 'Gatt', 'Gatto', 'Gauci', 'Gellel',
    'Genius', 'Genovese', 'Gerada', 'Geraldi', 'Gerardi', 'German', 'Ghigo',
    'Ghio', 'Giacomotto', 'Gialanze', 'Giammalva', 'Giardina', 'Giardino',
    'Giglio', 'Ginies', 'Ginius', 'Giodimaina', 'Giojoso', 'Giordano',
    'Giordimania', 'Giorgio', 'Giudica', 'Giudice', 'Giusti', 'Glavina',
    'Glevau', 'Gonzi', 'Gouder', 'Gravagna', 'Gravina', 'Gravino', 'Gray',
    'Grech', 'Grilleet', 'Grillo', 'Grima', 'Grimaud', 'Grioli', 'Griscti',
    'Grixti', 'Grungo', 'Gruniet', 'Guerrera', 'Guillaumier', 'Gulia',
    'Gusman', 'Haber', 'Herrera', 'Hili Huber', 'Hyzler', 'Imbroll',
    'Inglott', 'Inguanez', 'Ittar', 'Izzo', 'La Bordon', 'La Porta',
    'La Rosa Larosa', 'Labadie', 'Laferla', 'Lagana', 'Lagriscti', 'Laivira',
    'Lando', 'Lanfranco', 'Lanzon', 'Lapira', 'Laspina', 'Lateo', 'Latteo',
    'Lauron', 'Laus', 'Lavera', 'Laviera', 'Lazzari', 'Lazzarini', 'Le Brun',
    'Lebrun', 'Leonardi', 'Leonardini', 'Leonardis', 'Leone', 'Letard',
    'Levanzin', 'Lewis', 'Lia', 'Libreri', 'Lisano', 'Locano', 'Lombardi',
    'Lombardo', 'Lopez', 'Lorino', 'Losco', 'Lubrano', 'Lucchese', 'Luchero',
    'Lupi', 'Madiona', 'Maempel', 'Magri', 'Magro', 'Maistre', 'Malfiggiani',
    'Mallia', 'Malosa', 'Mamo', 'Manara', 'Manche', 'Manduca', 'Mangani',
    'Mangion', 'Mannarino', 'Manzoni', 'Marchesan', 'Maresca', 'Marguerat',
    'Mariani', 'Marmara', 'Marshall', 'Martin', 'Martino', 'Martorello',
    'Masco', 'Massa', 'Matrenza', 'Mattei', 'Maurin', 'Mazzelli', 'Medati',
    'Meilak', 'Meilaq', 'Meli', 'Mercieca', 'Merino', 'Messina', 'Metropoli',
    'Metrovich', 'Micallef', 'Miceli', 'Micelli', 'Michele', 'Mifsud',
    'Miggiani', 'Milanese', 'Miller', 'Minaldi', 'Mintof', 'Mintoff',
    'Mirabelli', 'Mirabita', 'Mirabitur', 'Mirasole', 'Mirasuli', 'Misura',
    'Mizzi', 'Molinari', 'Mompalao', 'Montaldo', 'Montalto', 'Montanaro',
    'Montano', 'Montebello', 'Monteforte', 'Montesin', 'Montezin', 'Montfort',
    'Moore', 'Moroni', 'Mula', 'Mula ', 'Muscat', 'Musci', 'Musu', 'Musumeci',
    'Nabili', 'Naici', 'Nais', 'Naizer', 'Nani', 'Napoleone', 'Natale',
    'Naudi', 'Navarro', 'Nax', 'Niceforo', 'Nicolai', 'Nicolas', 'Nicosia',
    'Nuner', 'Nuzzo', 'Odoart', 'Oletta', 'Oliva', 'Olivier', 'Olivieri',
    'Oliviero', 'Ondini', 'Onofrio', 'Opertis', 'Orlan', 'Orland', 'Orlandez',
    'Orlando', 'Ortina', 'Pace', 'Padovani', 'Paias', 'Palma', 'Palmier',
    'Pampanella', 'Pandolfino', 'Pantalleresco', 'Panzavecchia',
    'Papagiorcopolo', 'Papagiorcopulo', 'Parascandalo,Paretti', 'Pariente',
    'Paris', 'Parisi', 'Parlar', 'Parnis', 'Parodi', 'Parretti', 'Parteca',
    'Pasquina', 'Patiniott', 'Pavia', 'Pellegrini', 'Pellerano', 'Pellicano',
    'Penza', 'Peplow', 'Peralta', 'Peresso', 'Perez', 'Perini', 'Periolo',
    'Perisco', 'Perisso', 'Perotti', 'Perrett', 'Pesci', 'Petit', 'Petralita',
    'Petre', 'Petrone', 'Petroni', 'Petruzza', 'Piccinino', 'Piot', 'Pirera',
    'Pirotta', 'Pisani', 'Piscopo', 'Pitre', 'Pizani', 'Pizzuto', 'Podesta',
    'Polidano', 'Pollacco', 'Pons', 'Pontegue', 'Pontremoli', 'Ponz',
    'Porsella', 'Portanier', 'Portelli', 'Portughes', 'Portughese', 'Preca',
    'Presciani', 'Preziosi', 'Psaila', 'Puglisevich', 'Puli', 'Pulis',
    'Pulito', 'Pullicino', 'Pulo', 'Quattromani', 'Querci', 'Quintana',
    'Quintano', 'Quirinale', 'Rabanti', 'Radmilli', 'Raffaele', 'Raggi',
    'Raggio', 'Ramo', 'Randon', 'Randun', 'Rapa', 'Rapinett', 'Rata', 'Rausi',
    'Ravani', 'Re', 'Rebgha', 'Refalo', 'Rei', 'Reynaud', 'Ricca', 'Riccardi',
    'Rigo', 'Rigord', 'Rigos', 'Ringano', 'Rioli', 'Riolo', 'Ripard',
    'Risiott', 'Rizzo', 'Robba', 'Robert', 'Robinich', 'Robles', 'Rocco',
    'Rodenas', 'Roggero', 'Role', 'Rolini', 'Romano', 'Romato', 'Romolo',
    'Roncali', 'Rosignaud', 'Ross', 'Rosselli', 'Rossetti', 'Rossi', 'Rosso',
    'Roull', 'Ruggier', 'Rull', 'Rutter', 'Sabatier', 'Saccasan', 'Sacco',
    'Saetta', 'Sagnano', 'Saguna', 'Said', 'Saidon', 'Sajan', 'Sajjan',
    'Salerno', 'Saliba', 'Salinos', 'Salomone', 'Salvaloco', 'Sammut',
    'Samuel', 'Samuele', 'Samut', 'San Filippo', 'Sant', 'Sant\'Angelo',
    'Santa Sofia', 'Santucci', 'Sapiano', 'Sapienza', 'Saraceno', 'Saracuna',
    'Saraga', 'Sare', 'Sarreo', 'Satariano', 'Saura', 'Savona', 'Scalpello',
    'Scaricordi', 'Scarlata', 'Scarpello', 'Sceberras', 'Scerri', 'Schembri',
    'Schiano', 'Schiavone', 'Schieda', 'Schinas', 'Schranz', 'Schumacher',
    'Sciberras', 'Scicluna', 'Scifo', 'Sciortino', 'Sciriha', 'Scolaro',
    'Scolesi', 'Scopinich', 'Scordato', 'Scorfa', 'Scorfna', 'Scotto',
    'Segond', 'Seguna', 'Seichel', 'Seicher', 'Seisun', 'Selvatico', 'Semini',
    'Seracino', 'Serafin', 'Seralta', 'Serge', 'Serieux', 'Serpina', 'Serra',
    'Serracino', 'Sesino', 'Sevasta', 'SeychelL', 'Seychell', 'Sghendo',
    'Sillato', 'Simiana', 'Simler', 'Sinclair', 'Sinerco', 'Sirocca',
    'Sisner', 'Sison', 'Slythe', 'Smith', 'Soler', 'Solimella', 'Somerville',
    'Souchet', 'Souchett', 'Spadaro', 'Spagna', 'Spagnol',
    'Spagnol. Spagniol', 'Speranza', 'Spiteri', 'Sposito', 'St.John',
    'Stafrace', 'Staines', 'Starita', 'Stefanin', 'Stellini', 'Stieni',
    'Stilon', 'Stivala', 'Storace', 'Strickland', 'Struzzini', 'Stuzzin',
    'Suain', 'Suban', 'Suda', 'Sultana', 'Surdo', 'Susani', 'Susano', 'Swain',
    'Tabone', 'Tabone Tagliaferro', 'Talavera', 'Taliana', 'Tanti',
    'Tarroglia', 'Tarssia', 'Tartaglia', 'Taylor', 'Tedesco', 'Tellus',
    'Terreni', 'Terribile', 'Testa', 'Testaferrata', 'Teuma', 'Theuma',
    'Thewma', 'They', 'Tirchett', 'Tirekett', 'Tiroll', 'Toglia', 'Toledano',
    'Toledo', 'Tolossenti', 'Tomani', 'Tomasi', 'Tonna', 'Torpiano',
    'Torreggiani', 'Torregiani', 'Torrepiano', 'Torres', 'Tortell',
    'Tragalione', 'Tramblet', 'Trapani', 'Travisano', 'Trenciant', 'Trevisan',
    'Triesten', 'Triganza', 'Triolo', 'Trionfi', 'Triosi', 'Troise', 'Troisi',
    'Tumblett', 'Turcis', 'Turkett', 'Ubaldini', 'Ullo', 'Urpani', 'Utrana',
    'Uzzino', 'Vaccaro', 'Valente', 'Valenti', 'Valentino', 'Valenza',
    'Valenzia', 'Valenzin', 'Valletta', 'Vanuolo', 'Vasco', 'Vassallo',
    'Velesco', 'Vella', 'Ventura', 'Verzin', 'Vial', 'Vincenti', 'Viola',
    'Violante', 'Virtu', 'Visanich', 'Visinch', 'Vitale', 'Vizzari', 'Volpe',
    'Wettinger', 'Wirth', 'Wismajer', 'Wismayer', 'Wizzino', 'Xabica',
    'Xerri', 'Xiberras', 'Xiriha', 'Xrieha', 'Xriha', 'Xuereb', 'Zagami',
    'Zahra', 'Zammit', 'Zampa', 'Zarb', 'Zerafa'];
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    nm3.splice(rnd2, 1);
    return names;
  }
}
