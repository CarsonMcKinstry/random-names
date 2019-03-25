export default function ancient_greeks() {
  let names;

  const type = Math.random() < 0.5 ? 0 : 1;

  const nm1 = ['Abantes', 'Abas', 'Abascantus', 'Abderos', 'Aberkios', 'Ablerus', 'Abreas', 'Abronychus', 'Abydos', 'Acaeus', 'Acamus', 'Acessamenus', 'Acestes', 'Aclepiades', 'Acrisias', 'Acrisius', 'Acroneos', 'Actor', 'Adeimanthos', 'Adelphius', 'Admetos', 'Adrastos', 'Adrastus', 'Adrestus', 'Aeaces', 'Aegaeon', 'Aegicoros', 'Aegisthes', 'Aegon', 'Aeimnestos', 'Aenesidemos', 'Aeolus', 'Aeropus', 'Aeschreas', 'Aesculapius', 'Aesepus', 'Aeson', 'Aesop', 'Aetes', 'Aethon', 'Aetion', 'Aetios', 'Aetolos', 'Agamedes', 'Agamemnon', 'Agapenor', 'Agapias', 'Agastrophos', 'Agathocles', 'Agathon', 'Agelaus', 'Agenor', 'Agesilaus', 'Agetos', 'Agis', 'Agrias', 'Aiantes', 'Aias', 'Aigeus', 'Airopos', 'Aischylos', 'Akadios', 'Akamas', 'Aktis', 'Aktor', 'Alastor', 'Alcaeos', 'Alcandros', 'Alcides', 'Alcimos', 'Alcinous', 'Alcmaion', 'Alcman', 'Alcon', 'Alector', 'Alektryon', 'Aleuas', 'Alexandros', 'Alexarchos', 'Alexias', 'Alexis', 'Alexon', 'Alkamenos', 'Alkestis', 'Alketas', 'Alkibiades', 'Alkides', 'Alkimachos', 'Alkiphron', 'Alkmaion', 'Aloeus', 'Alphaeus', 'Alpheos', 'Alphesiboeus', 'Alphios', 'Altes', 'Alypius', 'Amarinceus', 'Ameinias', 'Ameinokles', 'Amiantos', 'Amompharetos', 'Amopaon', 'Amphiaraos', 'Amphidamos', 'Amphimachos', 'Amphimnestus', 'Amphinomous', 'Amphion', 'Amphios', 'Amphitrion', 'Amyntas', 'Amyntor', 'Amyris', 'Amythaon', 'Anabesineos', 'Anacharsis', 'Anakletos', 'Anakreon', 'Anastasios', 'Anaxagoras', 'Anaxandridas', 'Anaxandrides', 'Anaxandros', 'Anaxarchos', 'Anaxilaus', 'Anaximander', 'Anaximenes', 'Anaxis', 'Anaxos', 'Anchialus', 'Anchimolios', 'Anchises', 'Ancus', 'Andokides', 'Andraemon', 'Andreas', 'Androbulos', 'Androcles', 'Androdamos', 'Androgeus', 'Aneristos', 'Aniketos', 'Anisodoros', 'Antaeus', 'Antagoras', 'Antemion', 'Antenor', 'Anthemion', 'Antichares', 'Antidoros', 'Antigenes', 'Antigonos', 'Antikles', 'Antilochus', 'Antinous', 'Antiochus', 'Antipatris', 'Antipatros', 'Antiphales', 'Antiphones', 'Antiphus', 'Antisthenes', 'Anytos', 'Anytus', 'Apelles', 'Apellicon', 'Aphidnos', 'Apisaon', 'Apollodoros', 'Apollophanes', 'Apollos', 'Aratus', 'Arcas', 'Arcesilaus', 'Archagoras', 'Archelaos', 'Archeptolemus', 'Archesilaus', 'Archestratidas', 'Archilochus', 'Archytas', 'Arcidamus', 'Arcturus', 'Areilycus', 'Areisius', 'Areithous', 'Argades', 'Argaeus', 'Argos', 'Aridolis', 'Arion', 'Ariphron', 'Aristaeus', 'Aristagoras', 'Aristaios', 'Aristandros', 'Aristarchos', 'Aristarchus', 'Aristides', 'Aristion', 'Aristippus', 'Aristoboulos', 'Aristobulus', 'Aristocles', 'Aristocypros', 'Aristodemos', 'Aristogeiton', 'Aristomachos', 'Ariston', 'Aristonous', 'Aristonymos', 'Aristophanes', 'Aristophantes', 'Aristos', 'Aristotles', 'Aristoxenus', 'Arrabaios', 'Arridaios', 'Arsenios', 'Artemas', 'Artemidoros', 'Artemios', 'Artemisthenes', 'Arybbas', 'Asasthenes', 'Ascalaphus', 'Ascanius', 'Aschines', 'Asius', 'Asklepios', 'Asonides', 'Asopodoros', 'Asopus', 'Asphalion', 'Assaraeus', 'Astacos', 'Aster', 'Asterion', 'Asteropaeus', 'Astrabacus', 'Astyanax', 'Athamas', 'Athenades', 'Athenaeus', 'Athenion', 'Athenodorus', 'Atiphates', 'Atreus', 'Atrometos', 'Attaginas', 'Attaginos', 'Attalos', 'Atymnius', 'Atys', 'Audax', 'Augias', 'Auletes', 'Autesion', 'Autodikos', 'Autolycus', 'Autolykos', 'Automedon', 'Autonous', 'Axylus', 'Azeus', 'Bacchides', 'Bacchios', 'Bacchylides', 'Bacenor', 'Bacis', 'Baerius', 'Balius', 'Barates', 'Bardas', 'Basileides', 'Basileios', 'Basilides', 'Bathyaes', 'Belos', 'Bendis', 'Bianor', 'Bias', 'Bion', 'Bisaltes', 'Biton', 'Blathyllos', 'Boethus', 'Borus', 'Boter', 'Briareus', 'Briarus', 'Brison', 'Brygos', 'Bucoli', 'Bulis', 'Burrhus', 'Butacidas', 'Cöon', 'Callimachus', 'Callimorphus', 'Carenos', 'Carneades', 'Carpophorus', 'Carpus', 'Casambus', 'Castor', 'Ceas', 'Cebriones', 'Celeas', 'Cephalos', 'Cepheus', 'Cephissos', 'Ceyx', 'Chabrias', 'Chaeremon', 'Chairophon', 'Chalcodon', 'Chalcon', 'Charax', 'Chares', 'Charidemos', 'Charilaus', 'Charillos', 'Charmides', 'Charon', 'Charopos', 'Cheiron', 'Chersis', 'Chileos', 'Chilon', 'Choerilos', 'Choeros', 'Chremes', 'Chremon', 'Chremonides', 'Chromis', 'Chromius', 'Chrysaor', 'Chryses', 'Chrysippos', 'Chrysogones', 'Chrysogonus', 'Chrysolorus', 'Cilix', 'Cineas', 'Cinyras', 'Cisses', 'Cisseus', 'Cleades', 'Cleandros', 'Cleathes', 'Cleisthenes', 'Cleobulus', 'Cleodaeos', 'Cleombrotos', 'Cleomenes', 'Cleon', 'Cleonicus', 'Cleonymus', 'Clinias', 'Clisthenes', 'Clonius', 'Clytius', 'Clytomedes', 'Cnoethos', 'Cobon', 'Codros', 'Coenus', 'Coeranus', 'Coes', 'Cois', 'Conon', 'Copreus', 'Cordylion', 'Coronos', 'Corydallos', 'Corydon', 'Crathis', 'Cratinus', 'Cratippus', 'Cretheus', 'Crethon', 'Cretines', 'Crios', 'Croesus', 'Cronos', 'Cteatus', 'Ctesippus', 'Cuphagoras', 'Cyberniskos', 'Cycnus', 'Cylon', 'Cynaegiros', 'Cyncus', 'Cyneas', 'Cyniscus', 'Cypselos', 'Cyrenios', 'Cytorissos', 'Dadaces', 'Daedalos', 'Daetor', 'Damasippus', 'Damasithymos', 'Damasos', 'Damastor', 'Damian', 'Damianos', 'Damiskos', 'Damoetas', 'Damon', 'Danaos', 'Danaus', 'Daphis', 'Daphnis', 'Dardanus', 'Dares', 'Davos', 'Deinias', 'Deinokrates', 'Deinomenes', 'Deiotones', 'Deiphobus', 'Deiphonous', 'Deipylus', 'Demades', 'Demaratos', 'Demarmenos', 'Demas', 'Demeas', 'Demetrios', 'Democedes', 'Democoön', 'Demodocus', 'Demokrates', 'Demoleon', 'Demonax', 'Demonous', 'Demophlos', 'Demosthenes', 'Deon', 'Derkylos', 'Deukalion', 'Dexicos', 'Dexios', 'Diactorides', 'Diadromes', 'Diadumenus', 'Diagoras', 'Dicaeus', 'Dieneces', 'Diocles', 'Diodoros', 'Diodorus', 'Diokles', 'Diomedes', 'Dionysios', 'Dionysophanes', 'Dionysos', 'Diophantus', 'Diores', 'Dioscuros', 'Diotrephes', 'Dismas', 'Dithyrambos', 'Dmetor', 'Dolon', 'Dolops', 'Doreios', 'Doreius', 'Dorian', 'Doriskos', 'Doros', 'Dorotheus', 'Doryssos', 'Dosithios', 'Drimylos', 'Dromeus', 'Dryas', 'Dryops', 'Ducetius', 'Duris', 'Dymas', 'Dymnos', 'Echëeus', 'Echekrates', 'Echelaos', 'Echemmon', 'Echemus', 'Echephron', 'Echepolus', 'Echestratos', 'Eetion', 'Eioneus', 'Eirenaios', 'Elasus', 'Elatos', 'Elatreus', 'Eleon', 'Elephenor', 'Elpenor', 'Elpides', 'Elpidius', 'Empedocles', 'Endios', 'Endymion', 'Engenes', 'Eniopus', 'Ennaeus', 'Ennomus', 'Ennychus', 'Enops', 'Eos', 'Epaenetus', 'Epaphos', 'Epaphroditus', 'Epeigeus', 'Epeius', 'Ephialtes', 'Epicurus', 'Epicydes', 'Epikrates', 'Epimenes', 'Epiphanes', 'Epistor', 'Epistrophos', 'Epitrophos', 'Epizelos', 'Erasistratus', 'Eratosthenes', 'Eratostheres', 'Erechtheus', 'Eretmenus', 'Ereuthalion', 'Erginus', 'Ergiyios', 'Erichthonius', 'Erxandros', 'Eryalus', 'Erysichton', 'Eryx', 'Eryximachos', 'Eteocles', 'Eteokles', 'Eteonous', 'Euaemon', 'Eualcidas', 'Euanthes', 'Euarestos', 'Eubalus', 'Eubulus', 'Eucarpus', 'Euchenor', 'Eucleides', 'Eudorus', 'Eudoxsus', 'Eudoxus', 'Euenius', 'Euenor', 'Euenus', 'Eugammon', 'Eugenios', 'Eugenius', 'Euhemenis', 'Euippus', 'Eukles', 'Eumaeus', 'Eumastas', 'Eumelus', 'Eumenes', 'Eumneus', 'Eumolpus', 'Euneas', 'Euonomos', 'Eupalinus', 'Euphenes', 'Euphorbos', 'Euphorion', 'Euphronios', 'Eupolos', 'Euripides', 'Euryanax', 'Eurybates', 'Eurybiades', 'Eurycliedes', 'Eurydamus', 'Eurydemon', 'Eurydemos', 'Euryhus', 'Eurykrates', 'Eurykratides', 'Euryleon', 'Eurylochos', 'Eurymachos', 'Euryphon', 'Eurypylos', 'Eurystenes', 'Eurysthenes', 'Eurystheus', 'Eurysthios', 'Eurythion', 'Eurytos', 'Eussorus', 'Euthydemos', 'Euthynos', 'Eutropios', 'Eutuches', 'Eutychides', 'Eutychus', 'Evaenetos', 'Evagoras', 'Evandros', 'Evanetus', 'Evelthon', 'Evenios', 'Evenus', 'Evios', 'Exaduis', 'Exekias', 'Faenus', 'Galenus', 'Gallus', 'Ganymedes', 'Gauanes', 'Geleon', 'Gelo', 'Gelon', 'Gennadios', 'Gerasimos', 'Giorgius', 'Glaukias', 'Glaukos', 'Glycon', 'Gnipho', 'Gordias', 'Gorgias', 'Gorgion', 'Gorgos', 'Gorgythion', 'Gregorius', 'Gryllus', 'Gurgos', 'Gylippos', 'Gyras', 'Gyrtias', 'Haemon', 'Hagias', 'Hagnon', 'Halisthertes', 'Halius', 'Harmatidas', 'Harmocydes', 'Harmodios', 'Harmon', 'Harpagos', 'Harpalion', 'Harpalos', 'Harpocras', 'Hecataeus', 'Hegesandros', 'Hegesistratos', 'Hegetoridas', 'Heirax', 'Heiron', 'Hektor', 'Helenos', 'Helgesippos', 'Helicaon', 'Heliodorus', 'Helios', 'Helle', 'Hephaestos', 'Herakleides', 'Herakleitos', 'Heraklides', 'Hermeias', 'Hermeros', 'Hermippos', 'Hermogenes', 'Hermolaos', 'Hermolycus', 'Hermon', 'Hermotimos', 'Hero', 'Herodes', 'Herodianus', 'Herodion', 'Heromenes', 'Hicetaon', 'Hiero', 'Hieronymus', 'Hipparchos', 'Hipparinos', 'Hippasus', 'Hippias', 'Hippocoön', 'Hippoklides', 'Hippokratides', 'Hippolytos', 'Hippomachos', 'Hippomenes', 'Hippon', 'Hipponax', 'Hipponicus', 'Hipponous', 'Hippotas', 'Hippothous', 'Hippotion', 'Hoiples', 'Homeros', 'Hyakinthos', 'Hylas', 'Hyllos', 'Hyllus', 'Hypatius', 'Hypeirochus', 'Hypenor', 'Hyperenor', 'Hyperion', 'Hypsenor', 'Hyrcanus', 'Hyrtacus', 'Hyrtius', 'Iakchos', 'Ialmenes', 'Iambulus', 'Iamus', 'Iasos', 'Iatragoras', 'Iatrokles', 'Ibanolis', 'Ibykos', 'Icarion', 'Icarius', 'Icarus', 'Idaeus', 'Idaios', 'Idas', 'Idomeneus', 'Ilioneus', 'Illyrius', 'Ilus', 'Imbrasus', 'Imbrius', 'Imbrus', 'Inachos', 'Inachus', 'Inaros', 'Iobates', 'Iolaos', 'Iollas', 'Ion', 'Iphiclus', 'Iphicrates', 'Iphikrates', 'Iphinous', 'Iphitos', 'Iphitus', 'Iros', 'Irus', 'Isagoras', 'Isandros', 'Ischenous', 'Isidor', 'Isidoros', 'Ision', 'Ismaros', 'Ismenios', 'Isocrates', 'Isodemos', 'Isokrates', 'Itheus', 'Itylus', 'Itys', 'Kadmos', 'Kaenas', 'Kaeneus', 'Kalchas', 'Kalesius', 'Kaletor', 'Kalliaros', 'Kallias', 'Kallikles', 'Kallikrates', 'Kallimachos', 'Kallinicus', 'Kallinos', 'Kallipides', 'Kallipos', 'Kallisthenes', 'Kallon', 'Kameirus', 'Kandaules', 'Kannadis', 'Kapaneus', 'Kapys', 'Karipos', 'Karopophores', 'Kasos', 'Kassandros', 'Kaunos', 'Kebalinos', 'Kebes', 'Kekrops', 'Keos', 'Kephalon', 'Kephalos', 'Kerameikos', 'Kerkyon', 'Keteus', 'Kimon', 'Kirphis', 'Kittos', 'Kleitos', 'Kleobis', 'Kleomenes', 'Koines', 'Koinos', 'Konon', 'Koragos', 'Korax', 'Kosmas', 'Krantor', 'Krateros', 'Kreon', 'Krinippos', 'Kristos', 'Kritias', 'Kritoboulos', 'Kritodemos', 'Kriton', 'Kroisos', 'Krokinos', 'Ktesiphon', 'Kyknos', 'Kynaegeiros', 'Kyrillos', 'Kyrios', 'Kyros', 'Labdacus', 'Labotas', 'Laertes', 'Lagos', 'Laios', 'Lamachos', 'Lampo', 'Lampon', 'Lampus', 'Lamus', 'Laodamas', 'Laodocus', 'Laogonus', 'Laomedon', 'Laphanes', 'Lasos', 'Lasthenes', 'Laureion', 'Leagros', 'Leandros', 'Learchos', 'Leicritus', 'Leitus', 'Lemnus', 'Leo', 'Leocedes', 'Leodes', 'Leon', 'Leonidas', 'Leonnatos', 'Leontiades', 'Leontis', 'Leoprepes', 'Leotychides', 'Lethos', 'Leucippus', 'Leukos', 'Lichas', 'Licymnios', 'Linus', 'Loxias', 'Lukos', 'Lycaon', 'Lycaretos', 'Lycidas', 'Lycomedes', 'Lycophon', 'Lycophron', 'Lycoris', 'Lycurgos', 'Lycus', 'Lydus', 'Lygdamis', 'Lykomedes', 'Lykon', 'Lynceus', 'Lysagoras', 'Lysandros', 'Lysanios', 'Lysias', 'Lysikles', 'Lysimachos', 'Lysippos', 'Lysippus', 'Lysis', 'Macar', 'Macarias', 'Machaon', 'Maeon', 'Maiandrios', 'Makarios', 'Maleos', 'Males', 'Mantes', 'Mantios', 'Marcion', 'Marnes', 'Maro', 'Maron', 'Marsyas', 'Mastor', 'Matullus', 'Mausolos', 'Mecistes', 'Mecistios', 'Medios', 'Medon', 'Medus', 'Megadates', 'Megakles', 'Megakreon', 'Megapenthes', 'Megareus', 'Megasthenes', 'Megathenes', 'Meges', 'Megistias', 'Meidias', 'Melampos', 'Melampus', 'Melanippos', 'Melanthios', 'Melanthos', 'Melas', 'Meleagros', 'Melegros', 'Meles', 'Meliboeus', 'Melicertes', 'Memnon', 'Menalcas', 'Menandros', 'Menares', 'Menekrates', 'Menelaos', 'Menestas', 'Menesthes', 'Menesthios', 'Menexinos', 'Menoeces', 'Menoitios', 'Mentes', 'Mentor', 'Meriones', 'Mermerus', 'Merops', 'Mesaulius', 'Mesthles', 'Methodios', 'Metiochus', 'Meton', 'Metrobius', 'Metron', 'Metrophanes', 'Meurius', 'Micythos', 'Midas', 'Midylos', 'Mikkos', 'Mikon', 'Milanion', 'Miltiades', 'Minos', 'Misenus', 'Mnasyllus', 'Mnesiphilos', 'Mnester', 'Mnesus', 'Moeris', 'Moliones', 'Molpagoras', 'Monoecus', 'Monomachus', 'Mopsius', 'Mopsus', 'Morsimus', 'Morys', 'Moschion', 'Mulius', 'Musaeus', 'Musaios', 'Mydon', 'Mygdon', 'Myrsinus', 'Myrto', 'Mys', 'Narkissos', 'Nastes', 'Naubolus', 'Naukles', 'Nausithous', 'Nauteus', 'Nearchos', 'Neleos', 'Nelpus', 'Neokles', 'Neoptolemos', 'Neritos', 'Nestor', 'Niarchos', 'Nicandros', 'Nicanor', 'Nicholas', 'Nicholaus', 'Nicias', 'Nicodromos', 'Nicolaus', 'Nicomachos', 'Nicon', 'Nikandros', 'Nikanor', 'Nikasios', 'Nikeratos', 'Nikias', 'Nikomachos', 'Nikomedes', 'Nilus', 'Nireus', 'Nisos', 'Noemon', 'Nomion', 'Nothon', 'Numa', 'Nyctinus', 'Nymphicus', 'Nymphodorus', 'Ocealus', 'Ochesius', 'Ochos', 'Ocytos', 'Odaenathus', 'Odius', 'Odysseus', 'Oeagnus', 'Oecleus', 'Oedipus', 'Oenemaus', 'Oeneus', 'Oenomaus', 'Oenopion', 'Oenops', 'Oicles', 'Oileas', 'Oliatos', 'Olus', 'Olympicus', 'Olympiodorus', 'Onamakritos', 'Onesilos', 'Onesimos', 'Onesiphorus', 'Onetas', 'Onetor', 'Onias', 'Onomastos', 'Ophelestes', 'Opites', 'Ops', 'Orcus', 'Orestes', 'Oresus', 'Orges', 'Oribasius', 'Orion', 'Orius', 'Oroites', 'Orpheus', 'Orsilochus', 'Orsiphantes', 'Orthaeus', 'Orythroneus', 'Otreus', 'Otrynteus', 'Otus', 'Paeëon', 'Paios', 'Palaechthon', 'Palaemon', 'Pallans', 'Pallas', 'Palmys', 'Pammon', 'Panaetios', 'Panaetius', 'Panares', 'Pandaros', 'Pandion', 'Panionos', 'Panites', 'Pankratios', 'Pantares', 'Panthous', 'Pantites', 'Paopeus', 'Paraebates', 'Paris', 'Parmenides', 'Parmenion', 'Parthenopaeus', 'Pasion', 'Pataicos', 'Patrobas', 'Patrobus', 'Patroclus', 'Patron', 'Pausanius', 'Pedaeus', 'Pedasus', 'Pedocles', 'Peirithous', 'Peiros', 'Peisandros', 'Peithon', 'Pelagon', 'Pelegon', 'Peleus', 'Pelias', 'Pelicles', 'Pelonus', 'Pelopidas', 'Peneleos', 'Peneus', 'Pentheus', 'Penthylos', 'Peolpidas', 'Perdikkas', 'Perdix', 'Periandros', 'Periclymenus', 'Perieeres', 'Perikles', 'Perimedes', 'Perimos', 'Periphas', 'Periphetes', 'Periscus', 'Peritas', 'Periumus', 'Peteos', 'Peukestes', 'Phaedo', 'Phaenippos', 'Phaeops', 'Phaestus', 'Phaidon', 'Phaidriades', 'Phalanthus', 'Phalces', 'Phalinos', 'Phanagoras', 'Phancis', 'Phanes', 'Phanias', 'Phantias', 'Pharnaces', 'Phausius', 'Phegeus', 'Pheidias', 'Pheidippides', 'Pheidon', 'Phemius', 'Phereclus', 'Pherecydes', 'Pheres', 'Pheronactus', 'Phidias', 'Phigaleios', 'Philagros', 'Philaon', 'Phileas', 'Philemon', 'Philetor', 'Philiskos', 'Philistos', 'Phillipos', 'Philocion', 'Philocrates', 'Philoctetes', 'Philocypros', 'Philoetius', 'Philogus', 'Philokles', 'Philokrates', 'Philolaos', 'Philologus', 'Philomen', 'Philomenes', 'Philometer', 'Philon', 'Philonikos', 'Philopoemon', 'Philostratos', 'Philostratus', 'Philotas', 'Philotectes', 'Philoxenos', 'Philpoemon', 'Phineus', 'Phintias', 'Phlaris', 'Phlegon', 'Phlios', 'Phoenix', 'Phoibus', 'Phoinix', 'Phoitios', 'Phokas', 'Phokion', 'Phorbas', 'Phorcys', 'Phormion', 'Phormos', 'Photius', 'Phrixus', 'Phrynichos', 'Phrynikos', 'Phrynon', 'Phylacus', 'Phylas', 'Pidytes', 'Pigres', 'Pinder', 'Pirithoos', 'Pisistratos', 'Pistias', 'Pittacos', 'Pittacus', 'Pittheus', 'Pixodarus', 'Plades', 'Pleistarchos', 'Pleistos', 'Plutarch', 'Podaeleirus', 'Podaleirus', 'Podalinus', 'Podarces', 'Podargos', 'Podaroes', 'Podes', 'Poeas', 'Poecas', 'Poimen', 'Polemion', 'Poliadas', 'Pollio', 'Polyas', 'Polybius', 'Polyctor', 'Polydectes', 'Polydeuces', 'Polydius', 'Polydoros', 'Polyeides', 'Polygonus', 'Polykleitos', 'Polykles', 'Polykritos', 'Polymedes', 'Polyneices', 'Polypemon', 'Polyperchon', 'Polyphemous', 'Polyphetes', 'Polyphontes', 'Polypoetes', 'Polyxeinus', 'Ponteus', 'Porphyrios', 'Porphyrius', 'Poseidon', 'Posides', 'Posidonios', 'Potamon', 'Pratinos', 'Praxilaus', 'Praxis', 'Praxiteles', 'Praxites', 'Prexinos', 'Priam', 'Prinetadas', 'Priskos', 'Procrustes', 'Proctus', 'Proetus', 'Prokles', 'Prokopios', 'Prokrustes', 'Proreus', 'Protagoras', 'Protesilaus', 'Prothoenor', 'Prothous', 'Protogenes', 'Protus', 'Proxenos', 'Prymneus', 'Prytanis', 'Ptolemaios', 'Ptolomaeus', 'Pylades', 'Pylaemenes', 'Pylaeus', 'Pylartes', 'Pylas', 'Pylenor', 'Pyris', 'Pyrrhus', 'Pythagoras', 'Pytheas', 'Pythes', 'Pythios', 'Pythogenes', 'Radamanthos', 'Rhadamanthos', 'Rhesus', 'Rhexenor', 'Ribes', 'Rizon', 'Sabas', 'Sabyllos', 'Salmoneus', 'Sarpedon', 'Satyros', 'Scaios', 'Scamandius', 'Scamandrius', 'Schedius', 'Scylax', 'Scyllias', 'Scythas', 'Sebastos', 'Seisames', 'Selagus', 'Seldomus', 'Selepos', 'Seleukos', 'Sicinnos', 'Siculus', 'Silanos', 'Silenos', 'Simmias', 'Simo', 'Simoisius', 'Simonides', 'Sinis', 'Sinon', 'Sippas', 'Siromos', 'Sisyphus', 'Skiron', 'Smindyrides', 'Smintheus', 'Socus', 'Sophanes', 'Sophokles', 'Soranus', 'Sosibios', 'Sosicles', 'Sosigines', 'Sosilus', 'Sosimenes', 'Sosipatros', 'Sosthenes', 'Sostias', 'Sostratos', 'Spertias', 'Speudon', 'Speusippos', 'Spinther', 'Spirodion', 'Stachys', 'Stentor', 'Stesagoras', 'Stesanor', 'Stesilaus', 'Sthenelaus', 'Sthenelus', 'Stichius', 'Stolos', 'Strabo', 'Strachys', 'Stratios', 'Straton', 'Strophantes', 'Strophius', 'Strymon', 'Syagros', 'Syennesis', 'Syloson', 'Synesius', 'Talaemenes', 'Talaos', 'Talaus', 'Talos', 'Talthybios', 'Tarchon', 'Taureas', 'Tebaeus', 'Tecton', 'Teiresias', 'Telamon', 'Telekles', 'Telemacho', 'Telemachos', 'Telemachus', 'Telephos', 'Telephus', 'Telesinus', 'Telesphorus', 'Telines', 'Tellias', 'Tellis', 'Telys', 'Temenos', 'Tenes', 'Tenthredon', 'Tereus', 'Terillos', 'Teucer', 'Teukros', 'Teutamos', 'Teuthranes', 'Teuthras', 'Thales', 'Thalpius', 'Thalysios', 'Tharybis', 'Thaulos', 'Thaumastus', 'Theagenes', 'Theages', 'Theas', 'Theasides', 'Themistius', 'Theoclymnius', 'Theocydes', 'Theodekles', 'Theodoros', 'Theodotus', 'Theognis', 'Theomestor', 'Theomestros', 'Theophanes', 'Theophrastos', 'Theophrastus', 'Theophylaktos', 'Theopompos', 'Theopompus', 'Theopropides', 'Theoros', 'Theos', 'Theramenes', 'Therapon', 'Theras', 'Thero', 'Theron', 'Thersandros', 'Therseandros', 'Thersilochus', 'Thersites', 'Thessalos', 'Thestor', 'Thettalos', 'Thoön', 'Thoas', 'Thon', 'Thorax', 'Thrasidaios', 'Thrasilaus', 'Thrasius', 'Thrasybulos', 'Thrasyllus', 'Thrasymedes', 'Threspotus', 'Thukydides', 'Thyestes', 'Thymoetes', 'Thymotes', 'Thyrsis', 'Thyrsos', 'Timagenidas', 'Timagoras', 'Timais', 'Timanthes', 'Timasion', 'Timasitheus', 'Timesithius', 'Timnes', 'Timoleon', 'Timon', 'Timonax', 'Timotheus', 'Timoxenos', 'Tiro', 'Tirynthius', 'Tisamenos', 'Tisandros', 'Tisias', 'Tithonius', 'Titormos', 'Tityrus', 'Tlepolemus', 'Tmolus', 'Trechus', 'Triopas', 'Triptolemus', 'Triton', 'Troezenus', 'Trophimus', 'Trophnus', 'Tros', 'Trypho', 'Turrianus', 'Tychaeus', 'Tydeides', 'Tydeus', 'Tymnes', 'Tyndareus', 'Tyndarios', 'Ucalegon', 'Vettias', 'Xanthippos', 'Xanthippus', 'Xanthos', 'Xenagoras', 'Xenokrates', 'Xenophanes', 'Xenophon', 'Xiphilinus', 'Xuthos', 'Xuthus', 'Zagreus', 'Zamolxis', 'Zenicetes', 'Zenodoros', 'Zephyrinus', 'Zethus', 'Zeuxidamos', 'Zeuxis', 'Zosimus'];
  const nm2 = ['Achaia', 'Achradina', 'Actaëe', 'Actë', 'Ada', 'Adeia', 'Aedon', 'Aegiolea', 'Aegle', 'Aerope', 'Aethre', 'Agamede', 'Aganippe', 'Agape', 'Agapia', 'Agarista', 'Agathé', 'Agathonice', 'Agave', 'Aglaia', 'Aglaurus', 'Aikaterine', 'Aithra', 'Aketa', 'Alcandre', 'Alcestis', 'Alcippe', 'Alcmene', 'Alcyone', 'Alemene', 'Alkmena', 'Althaea', 'Althaia', 'Althea', 'Amarhyllis', 'Amathea', 'Amatheia', 'Amphithoe', 'Amphitrite', 'Ampinomene', 'Amplias', 'Anais', 'Anastasia', 'Andromeda', 'Antehe', 'Anteia', 'Antheia', 'Anthousa', 'Anthusa', 'Anticleia', 'Antigone', 'Antiochis', 'Antiope', 'Anysia', 'Appollonia', 'Apseudes', 'Arete', 'Arethusa', 'Argeia', 'Ariadne', 'Arisbe', 'Aristonike', 'Aristophane', 'Arsinoe', 'Artemidora', 'Artemisia', 'Aspasia', 'Astera', 'Astyoche', 'Astyocheia', 'Atalanta', 'Atë', 'Athis', 'Auge', 'Augo', 'Autonoe', 'Auxesia', 'Axiothea', 'Barbara', 'Basiane', 'Baucis', 'Berenike', 'Bito', 'Briseis', 'Caenis', 'Caleope', 'Callianeira', 'Callianessa', 'Calliphana', 'Calypso', 'Canace', 'Castianiera', 'Charis', 'Chione', 'Chiore', 'Chloë', 'Chloris', 'Chryse', 'Chryseis', 'Chrysothemis', 'Cilissa', 'Cilla', 'Circe', 'Clio', 'Clymene', 'Clymere', 'Colubra', 'Corythia', 'Cratais', 'Creusa', 'Crisa', 'Ctimene', 'Cybele', 'Cydippe', 'Cymodoce', 'Cymothoe', 'Cyrene', 'Cythereia', 'Cytheris', 'Damaris', 'Damia', 'Danaë', 'Deianeira', 'Deineira', 'Deiphobe', 'Deipyle', 'Delias', 'Demetria', 'Demophile', 'Dexamene', 'Dianeme', 'Diomede', 'Dione', 'Dirce', 'Doris', 'Dorothea', 'Doto', 'Drosis', 'Dynamene', 'Egeria', 'Egina', 'Eidothee', 'Eileithyia', 'Elcmene', 'Electra', 'Elpir', 'Endeis', 'Enyo', 'Eos', 'Epicaste', 'Eriboea', 'Erigone', 'Eriopis', 'Eriphyle', 'Eris', 'Eucarpia', 'Eudokia', 'Eunice', 'Euodias', 'Euphro', 'Euphrosyne', 'Europa', 'Eurycleia', 'Eurydike', 'Eurynome', 'Evadne', 'Galatea', 'Glauce', 'Glyke', 'Gorgo', 'Gygaea', 'Haidee', 'Halie', 'Harmodias', 'Harmonia', 'Hecuba', 'Hekabe', 'Hekaline', 'Hekate', 'Helice', 'Helike', 'Heliodora', 'Hellanike', 'Helle', 'Hermine', 'Hermione', 'Hero', 'Herophile', 'Hesione', 'Hilaera', 'Hippodameia', 'Hippodamia', 'Hippolyta', 'Hypsipyle', 'Hyrmina', 'Iaera', 'Ianeira', 'Ianessa', 'Ianthe', 'Ino', 'Iola', 'Iolanthe', 'Iole', 'Iomene', 'Ione', 'Iphianassa', 'Iphigenia', 'Iphimedeia', 'Iphis', 'Iphitheme', 'Irene', 'Iris', 'Isadora', 'Ismene', 'Issa', 'Jocasta', 'Kallisto', 'Kallixeina', 'Kassandra', 'Katana', 'Katina', 'Kephissa', 'Kharmion', 'Khlöe', 'Khloris', 'Kleio', 'Kleopatra', 'Klymene', 'Klytemnestra', 'Koré', 'Koritto', 'Kydilla', 'Kynna', 'Kynthia', 'Kypris', 'Kyra', 'Labda', 'Lais', 'Lalage', 'Lampetie', 'Lampito', 'Lanike', 'Laodameia', 'Laodamia', 'Laodice', 'Laothoe', 'Lasthena', 'Latona', 'Leda', 'Lede', 'Leto', 'Leucothea', 'Leucothoë', 'Limnoreia', 'Lois', 'Lyra', 'Maeonia', 'Maera', 'Maia', 'Maiandria', 'Marpessa', 'Medea', 'Medesicaste', 'Megaera', 'Megara', 'Megare', 'Melanie', 'Melantho', 'Melissa', 'Melita', 'Melite', 'Menelaia', 'Merope', 'Metis', 'Metriche', 'Milo', 'Milto', 'Molpadia', 'Monima', 'Monime', 'Mykale', 'Myrine', 'Nausicaa', 'Neaera', 'Nemerte', 'Nephele', 'Nesaea', 'Nicopolis', 'Nikaia', 'Nikasepolis', 'Niko', 'Niobe', 'Nysa', 'Oenone', 'Oitane', 'Olympias', 'Omphale', 'Oreithuia', 'Oreithyia', 'Orithyia', 'Orthia', 'Otonia', 'Pales', 'Panope', 'Panora', 'Parthenia', 'Parthenope', 'Pasiphae', 'Pelopia', 'Penelope', 'Penthesilea', 'Percalus', 'Perialla', 'Periboea', 'Pero', 'Perse', 'Persephone', 'Persis', 'Pervica', 'Pervinca', 'Phaedra', 'Phaedre', 'Phaethusa', 'Phaia', 'Pherenike', 'Pherusa', 'Phigaleia', 'Philea', 'Philinna', 'Philomache', 'Philomela', 'Philona', 'Phoebe', 'Phryne', 'Phylace', 'Phylia', 'Phyllis', 'Phylo', 'Phylomedusa', 'Podarge', 'Polycaste', 'Polydamna', 'Polydora', 'Polymede', 'Polyxena', 'Procne', 'Procris', 'Prone', 'Proto', 'Protogonia', 'Psamathe', 'Psyche', 'Pylia', 'Pyrrha', 'Pythias', 'Raisa', 'Rhea', 'Rhene', 'Rhoda', 'Rhode', 'Rhodope', 'Roxane', 'Sappho', 'Scylla', 'Sebasteia', 'Semele', 'Sophia', 'Sotera', 'Speio', 'Stheneboea', 'Stratonice', 'Tecmessa', 'Telephassa', 'Thais', 'Thalassa', 'Thaleia', 'Theano', 'Thebe', 'Thelma', 'Themis', 'Theodotis', 'Theophane', 'Theophania', 'Theophano', 'Theresa', 'Thessala', 'Thessalonike', 'Thetis', 'Thisbe', 'Thoë', 'Thoösa', 'Thyia', 'Timandra', 'Timo', 'Tryphena', 'Tryphosa', 'Tyro', 'Xanthe', 'Xanthippe', 'Xantippe', 'Xene', 'Xenophile', 'Zenobia', 'Zita', 'Zoe'];


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
