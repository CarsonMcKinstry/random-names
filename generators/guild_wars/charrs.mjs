export default function charrs() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['D', 'R', 'T', 'G', 'K', 'Al', 'As', 'V', 'W'];
  const nm2 = ['a', 'o', 'u', 'i', 'a', 'o', 'u', 'e', 'ar', 'or', 'ur', 'ak',
    'ok', 'uk', 'ud', 'ad', 'od', 'y', 'yt', '', ''];
  const nm3 = ['ada', 'adda', 'addo', 'addu', 'adna', 'adni', 'adnu', 'ado',
    'adu', 'al', 'anda', 'ando', 'andu', 'ara', 'arra', 'da', 'di', 'do',
    'du', 'fa', 'fo', 'fu', 'ga', 'gai', 'gei', 'go', 'gou', 'gu', 'la',
    'laa', 'lo', 'loo', 'lu', 'ma', 'mo', 'mu', 'na', 'no', 'nu', 'ol', 'ora',
    'orra', 'ra', 'ri', 'ro', 'ru', 'ta', 'tara', 'taro', 'tarra', 'tarro',
    'tarru', 'taru', 'to', 'tu', 'tura', 'turo', 'turra', 'turro', 'turru',
    'turu', 'uda', 'udda', 'uddo', 'uddu', 'udo', 'udu', 'ul', 'ura', 'urra'];
  const nm4 = ['n', 'm', 'f', 't', 'd', 'k', 'r', 'g', 'rg', 'rk', 'rn', 'rm',
    'nk', 'lk', 'ld', 'ck', 'z', 'zz', 'w'];
  const nm5 = ['Bael', 'Bass', 'Blade', 'Blight', 'Brim', 'Broken', 'Burn',
    'Burnt', 'Chain', 'Coin', 'Cowl', 'Dark', 'Deep', 'Dome', 'Doom',
    'Dragon', 'Drake', 'Ember', 'Fair', 'Faith', 'Far', 'Fiend', 'Fierce',
    'Forge', 'Gear', 'Ghost', 'Gore', 'Grizzle', 'Gut', 'Havoc', 'Hawk',
    'Head', 'Jaw', 'Keen', 'Legion', 'Near', 'Pain', 'Poison', 'Poisons',
    'Porter', 'Pyre', 'Rage', 'Rapid', 'Relic', 'Rip', 'Roan', 'Ruin',
    'Scorch', 'Scrap', 'Scribe', 'Shadow', 'Shadows', 'Sharp', 'Silver',
    'Slap', 'Sorrow', 'Spar', 'Spirit', 'Steam', 'Steel', 'Strained',
    'Stripe', 'Strong', 'Swift', 'Sword', 'Timber', 'Wild', 'Wood'];
  const nm6 = ['axe', 'bearer', 'blade', 'bound', 'breaker', 'bringer',
    'caller', 'catcher', 'clash', 'claw', 'coin', 'dancer', 'eye', 'fang',
    'firre', 'foe', 'fur', 'grace', 'guard', 'hammer', 'heart', 'hunter',
    'justice', 'maker', 'mauler', 'mind', 'mouth', 'muzzle', 'paw', 'razor',
    'reave', 'reign', 'rend', 'ripper', 'saw', 'seeker', 'sharp', 'shield',
    'shot', 'singer', 'sinner', 'slayer', 'smoke', 'soul', 'specter', 'spire',
    'splitter', 'step', 'stone', 'storm', 'strike', 'striker', 'tongue',
    'tooth', 'tracker', 'walker', 'weld', 'welder', 'will', 'wrencher'];
  const nm7 = ['Abercius', 'Abito', 'Aburius', 'Acacius', 'Acaunus', 'Accius',
    'Accoleius', 'Achaicus', 'Acilianus', 'Acilius', 'Adauctus', 'Adepphius',
    'Adranos', 'Adventus', 'Aeacus', 'Aebutius', 'Aebutus', 'Aedinius',
    'Aelius', 'Aemilius', 'Aetius', 'Agaptus', 'Agatopus', 'Agelastus',
    'Agorix', 'Agricola', 'Agrippa', 'Agustalis', 'Ahala', 'Albanius',
    'Albanus', 'Albatius', 'Albinius', 'Albinus', 'Albucius', 'Alethius',
    'Allectius', 'Allectus', 'Aloysius', 'Aluredes', 'Alypius', 'Amandus',
    'Amantius', 'Amatius', 'Ambrosius', 'Amor', 'Amphion', 'Amulius',
    'Anatolius', 'Ancus', 'Andronicus', 'Angelus', 'Annius', 'Antistius',
    'Antius', 'Antonius', 'Anullinus', 'Apelles', 'Apellinus', 'Aponius',
    'Appius', 'Appuleius', 'Aquila', 'Aquilius', 'Aquillius', 'Aratus',
    'Arcadius', 'Arcavius', 'Archarius', 'Arius', 'Armenius', 'Armiger',
    'Arminus', 'Arpagius', 'Arrianus', 'Arrius', 'Arruns', 'Arruntius',
    'Arsinius', 'Artorius', 'Aruns', 'Arvina', 'Asellio', 'Asina', 'Asinius',
    'Asprenas', 'Asprenus', 'Assanius', 'Ateius', 'Atilius', 'Atius',
    'Atrius', 'Atronius', 'Attius', 'Audaios', 'Audens', 'Aufidius',
    'Augendus', 'Augurius', 'Augurnus', 'Augustalis', 'Augustanus',
    'Augustus', 'Auila', 'Aulus', 'Aurelianus', 'Aurelius', 'Aurius',
    'Ausonius', 'Auspex', 'Auxentius', 'Auxientius', 'Auxilius', 'Avidius',
    'Avienus', 'Avitus', 'Axius', 'Babudius', 'Baebius', 'Balbillus',
    'Balbus', 'Balduinus', 'Balventius', 'Bambalio', 'Bamballio',
    'Banquerius', 'Bantius', 'Barbatius', 'Barbatus', 'Baro', 'Barrius',
    'Bassus', 'Bato', 'Belenus', 'Belisarius', 'Bellator', 'Belletor',
    'Bellicus', 'Bellus', 'Bestia', 'Betilienus', 'Betto', 'Betucius',
    'Bibaculus', 'Bibulus', 'Bitucus', 'Blandius', 'Blandus', 'Blossius',
    'Bodenius', 'Bolanus', 'Bonosus', 'Brocchus', 'Bromidus', 'Bruccius',
    'Brucetus', 'Bruscius', 'Bruttius', 'Brutus', 'Bubo', 'Buccio',
    'Bucculeius', 'Bulla', 'Burcanius', 'Burrienus', 'Burrus', 'Buteo',
    'Caecilianus', 'Caecilius', 'Caecina', 'Caecius', 'Caecus', 'Caedicius',
    'Caelestius', 'Caelianus', 'Caelinus', 'Caelistis', 'Caelius', 'Caelus',
    'Caeparius', 'Caepasius', 'Caepio', 'Caerellius', 'Caesar', 'Caesennius',
    'Caesetius', 'Caesius', 'Caeso', 'Caesonius', 'Caesulenus', 'Caetronius',
    'Caius', 'Calacicus', 'Calatinus', 'Calavius', 'Caldus', 'Calenus',
    'Calerus', 'Caletus', 'Calidius', 'Caligula', 'Callisunus', 'Calogerus',
    'Calpornius', 'Calpurnianus', 'Calpurnis', 'Calpurnius', 'Calventius',
    'Calvinus', 'Calvisius', 'Calvus', 'Camelius', 'Camerius', 'Camilius',
    'Camillius', 'Camillus', 'Campanus', 'Candidianus', 'Candidius',
    'Candidus', 'Canidius', 'Caninius', 'Canio', 'Canisius', 'Canius',
    'Cantaber', 'Cantilius', 'Cantius', 'Canuleius', 'Canus', 'Canutius',
    'Capito', 'Capiton', 'Caprarius', 'Caprenius', 'Caracturus', 'Carantus',
    'Carbo', 'Carinus', 'Caristanius', 'Carius', 'Carnifex', 'Carus',
    'Carvilius', 'Casca', 'Cassianus', 'Cassius', 'Castinus', 'Castorius',
    'Castus', 'Catianus', 'Catilina', 'Cato', 'Catonius', 'Catullus',
    'Catulus', 'Catus', 'Cecilianus', 'Ceionius', 'Celatus', 'Celer',
    'Celsus', 'Cenaeus', 'Cencius', 'Censorinus', 'Censorius', 'Centumalus',
    'Cerialis', 'Cerinthus', 'Cerularius', 'Cervianus', 'Cervidus',
    'Cethegus', 'Chlorus', 'Christianus', 'Cicereius', 'Cicero', 'Cico',
    'Cilnius', 'Cimber', 'Cincius', 'Cinna', 'Cinnianus', 'Cispius', 'Cita',
    'Cittinus', 'Civilis', 'Clarus', 'Classicianus', 'Claudianus', 'Claudius',
    'Clemens', 'Clement', 'Clodian', 'Clodianus', 'Clodius', 'Cloelius',
    'Clovius', 'Cluilius', 'Cluntius', 'Cnaeus', 'Cocceius', 'Cogitatus',
    'Coiedius', 'Colias', 'Collatinus', 'Columbanus', 'Columella', 'Comes',
    'Cominius', 'Comitianus', 'Comitinus', 'Commidius', 'Commidus', 'Commius',
    'Commodus', 'Concessus', 'Congrio', 'Consentius', 'Considius', 'Constans',
    'Constantius', 'Corbulo', 'Cordius', 'Cordus', 'Cornelius', 'Cornix',
    'Cornutus', 'Coruncanius', 'Corvinus', 'Corvus', 'Cosconius', 'Cosmas',
    'Cossus', 'Cotentinus', 'Cotta', 'Crassus', 'Cremutius', 'Crescentius',
    'Cresces', 'Crispian', 'Crispin', 'Crispus', 'Crito', 'Crotilo',
    'Cucuphas', 'Culleolus', 'Cumanus', 'Cunobarrus', 'Cupitas', 'Curio',
    'Curius', 'Curtius', 'Cyprianus', 'Cyprias', 'Cyricus', 'Dacien',
    'Dalmatius', 'Dama', 'Damasippus', 'Damasus', 'Damian', 'Dannicus',
    'Dardanius', 'Dardanus', 'Decentius', 'Decianus', 'Decimus', 'Decius',
    'Decmitius', 'Decmus', 'Decumius', 'Desticius', 'Dexion', 'Dexippus',
    'Dexsius', 'Didicus', 'Didius', 'Dignus', 'Dillius', 'Dio',
    'Diocletianus', 'Diocourides', 'Disertus', 'Docilinus', 'Docilus',
    'Dolabella', 'Dominicus', 'Domitianus', 'Domitius', 'Donatianus',
    'Donatus', 'Donicus', 'Dorotheus', 'Dossenius', 'Draco', 'Drusillus',
    'Drusus', 'Dubitatius', 'Duccius', 'Dulcitius', 'Durio', 'Duronius',
    'Durus', 'Duvianus', 'Eborius', 'Eburnus', 'Ecdicius', 'Eclectus',
    'Egbuttius', 'Egnatius', 'Elerius', 'Eliphas', 'Elpidius', 'Elvorix',
    'Emeritus', 'Encratis', 'Ennecus', 'Ennius', 'Ennodius', 'Eonus',
    'Epidianus', 'Epidius', 'Epimachus', 'Epolonius', 'Equitius', 'Erasinus',
    'Esdras', 'Eudomius', 'Eudoxius', 'Eugenius', 'Eugenus', 'Eulogius',
    'Eumenius', 'Eunapius', 'Euphemius', 'Eustacius', 'Eutherius', 'Evodius',
    'Excingus', 'Exsupereus', 'Exupertus', 'Fabianus', 'Fabillus', 'Fabius',
    'Facilis', 'Fadius', 'Fadus', 'Faenius', 'Fagus', 'Falco', 'Falconius',
    'Falerius', 'Falx', 'Famia', 'Familiaris', 'Farus', 'Fastidius',
    'Faustillus', 'Faustinianus', 'Faustinius', 'Faustus', 'Faventinus',
    'Favonius', 'Felicissimus', 'Felissimus', 'Felix', 'Ferentinus',
    'Ferreolius', 'Festinius', 'Festus', 'Fidelis', 'Figulus', 'Fimbria',
    'Fimus', 'Firminus', 'Firmus', 'Flaccus', 'Flavian', 'Flavianus',
    'Flavillus', 'Flavinius', 'Flavinus', 'Flavius', 'Flavonius', 'Florens',
    'Florentius', 'Florianus', 'Floridius', 'Florius', 'Floronius', 'Florus',
    'Forianus', 'Fortunatus', 'Fraucus', 'Fredisius', 'Frigidian',
    'Frontalis', 'Frontinus', 'Fronto', 'Fructosis', 'Frugi', 'Frugius',
    'Frumentius', 'Fufius', 'Fulcinius', 'Fullofaudes', 'Fulvianus',
    'Fulvius', 'Fundanus', 'Furius', 'Fuscinus', 'Fuscus', 'Gabinius',
    'Gaianus', 'Gaius', 'Gala', 'Galarius', 'Galenus', 'Galerius', 'Galerus',
    'Gallio', 'Gallus', 'Galvisius', 'Garilianus', 'Gaurus', 'Gavius',
    'Gavros', 'Gavrus', 'Geganius', 'Gelasius', 'Gellius', 'Gemellus',
    'Geminianus', 'Generidus', 'Genesius', 'Genialis', 'Gennadius',
    'Gerardus', 'Germanicus', 'Germanus', 'Gessius', 'Geta', 'Getha',
    'Glabrio', 'Glaucia', 'Globulus', 'Gluvias', 'Glycia', 'Gnaeus',
    'Gordian', 'Gordianus', 'Gordio', 'Gorgonius', 'Gracchus', 'Gracilis',
    'Granius', 'Gratian', 'Gratidianus', 'Gratidius', 'Gratius', 'Grattus',
    'Gregorius', 'Grumio', 'Gryllus', 'Gualterus', 'Habitus', 'Hadrianus',
    'Hardalio', 'Haterius', 'Helvetius', 'Helvius', 'Herculius', 'Herennius',
    'Herenus', 'Herius', 'Herma', 'Hermina', 'Herminius', 'Hesychius',
    'Hiberus', 'Hilario', 'Hilaris', 'Hilarius', 'Hirpinius', 'Hirrus',
    'Hirtius', 'Homullus', 'Honoratus', 'Horatius', 'Hortensis', 'Hortensius',
    'Hortensus', 'Hosidius', 'Hostilius', 'Hostus', 'Humilus', 'Hybrida',
    'Iacomus', 'Ianuarius', 'Iavolenus', 'Icilius', 'Igennus', 'Ignatius',
    'Indaletius', 'Indus', 'Ingenuus', 'Ingenvinus', 'Insteius', 'Iocundus',
    'Iovinianus', 'Iovinus', 'Iovius', 'Irenaeus', 'Isatis', 'Isauricus',
    'Italicus', 'Iuba', 'Iulian', 'Iulianus', 'Iuncinus', 'Iuncus',
    'Iunianus', 'Iustianus', 'Iustinianus', 'Iustinus', 'Iustus', 'Iuvenlis',
    'Ivmarus', 'Julianus', 'Julius', 'Junius', 'Juventius', 'Kaeso',
    'Laberius', 'Labienus', 'Lactantius', 'Laeca', 'Laelius', 'Laenas',
    'Laetinianus', 'Laetorius', 'Laevinus', 'Lafrenius', 'Lampronius', 'Lar',
    'Larcius', 'Lars', 'Lartius', 'Lateranus', 'Latinius', 'Laurentius',
    'Leddicus', 'Lentullus', 'Lentulus', 'Leon', 'Leontius', 'Lepidus',
    'Lepontus', 'Leptis', 'Libanius', 'Liberalis', 'Libo', 'Liburnius',
    'Licinianus', 'Licinius', 'Ligur', 'Ligustinus', 'Limetanus', 'Linus',
    'Litorius', 'Littera', 'Litumaris', 'Livianus', 'Livigenus', 'Livius',
    'Lollius', 'Longinius', 'Longinus', 'Loreius', 'Lovernianus', 'Lovernius',
    'Lucan', 'Lucanus', 'Lucceius', 'Luccius', 'Lucianus', 'Lucilianus',
    'Lucilius', 'Lucius', 'Lucretius', 'Luctacus', 'Lucullus', 'Lunaris',
    'Luonercus', 'Lupercus', 'Lupicinus', 'Lupinus', 'Lupis', 'Lurco',
    'Lurio', 'Lusius', 'Lutatius', 'Lutherius', 'Lutorius', 'Maccalus',
    'Macrinius', 'Macrinus', 'Macro', 'Macrobius', 'Mactator', 'Maecenus',
    'Maecilius', 'Maecius', 'Maelius', 'Magnentius', 'Magnus', 'Magunnus',
    'Maius', 'Major', 'Majus', 'Malchus', 'Mallius', 'Mallus', 'Maltinus',
    'Mamercus', 'Mamilius', 'Mancinus', 'Manilius', 'Manius', 'Manlius',
    'Mansuetus', 'Marcallas', 'Marcellinus', 'Marcellus', 'Marcialis',
    'Marcipor', 'Marcius', 'Marcus', 'Margarita', 'Marinianus', 'Marinus',
    'Maritialis', 'Maritimus', 'Marius', 'Maro', 'Marsallas', 'Marsicus',
    'Marsus', 'Marsyas', 'Martial', 'Martialis', 'Martianus', 'Martinus',
    'Martius', 'Martyrius', 'Marullinus', 'Marullus', 'Maternus', 'Matho',
    'Matius', 'Mauricius', 'Maursus', 'Maximian', 'Maximianus', 'Maximinius',
    'Maximinus', 'Maximius', 'Maximus', 'Medullinus', 'Megellus', 'Melissus',
    'Melitus', 'Mellitus', 'Melus', 'Meminius', 'Memmius', 'Memor',
    'Menenius', 'Mercator', 'Mercurialis', 'Mercurinus', 'Merula', 'Messala',
    'Messienus', 'Messor', 'Metellus', 'Metilius', 'Mettius', 'Metunus',
    'Micianus', 'Mico', 'Micon', 'Milonius', 'Minervalis', 'Minianus',
    'Minicianus', 'Minicius', 'Minucius', 'Moderatus', 'Modius', 'Molacus',
    'Momus', 'Montanus', 'Montaus', 'Mordanticus', 'Mucianus', 'Mucius',
    'Muco', 'Munatius', 'Muncius', 'Munius', 'Murena', 'Murrius', 'Mus',
    'Musa', 'Musicus', 'Mutilus', 'Mutius', 'Nabor', 'Naevius', 'Narcissus',
    'Narses', 'Nasennius', 'Nasica', 'Naso', 'Natalinus', 'Natalis',
    'Naucratius', 'Nazarius', 'Nectaridus', 'Nelius', 'Nemesianus',
    'Nemetorius', 'Nemnogenus', 'Neneus', 'Nennius', 'Nepius', 'Nepos',
    'Nero', 'Nertomarus', 'Nerva', 'Nicasius', 'Nicetius', 'Nigellus',
    'Niger', 'Nigidius', 'Nigilius', 'Nigrinus', 'Ninnius', 'Nipius',
    'Niraemius', 'Nolus', 'Nonius', 'Nonus', 'Norbanus', 'Noster', 'Novation',
    'Novellius', 'Novius', 'Numerianus', 'Numerius', 'Numonis', 'Oceanus',
    'Octavian', 'Octavianus', 'Octavius', 'Octobrianus', 'Olcinius',
    'Olennius', 'Olympicus', 'Opilio', 'Opimius', 'Opis', 'Opiter', 'Oppius',
    'Opsius', 'Optatus', 'Oranius', 'Ordius', 'Orientalis', 'Orientius',
    'Orissus', 'Orosius', 'Osterianus', 'Otacilius', 'Otho', 'Ovidus',
    'Pacatianus', 'Pachomius', 'Pacuvianus', 'Paenula', 'Paesentius',
    'Paetinus', 'Paetus', 'Palicamus', 'Palpellius', 'Pamphilius',
    'Panaetius', 'Pansa', 'Pantensus', 'Pantera', 'Panthera', 'Papinian',
    'Papinius', 'Papirius', 'Papius', 'Papus', 'Paratus', 'Parnesius',
    'Pascentius', 'Pastor', 'Paterculus', 'Paternus', 'Patiens', 'Patricius',
    'Paulinus', 'Paullus', 'Paulus', 'Pavo', 'Pedius', 'Pelagius',
    'Peltrasius', 'Pennus', 'Peregrinus', 'Perennis', 'Perpenna', 'Perperna',
    'Pertacus', 'Pertinax', 'Pescennius', 'Petasius', 'Petellius', 'Petilius',
    'Petillius', 'Petreius', 'Petronax', 'Petronius', 'Petrus', 'Philippus',
    'Photius', 'Pictor', 'Pilatus', 'Pilus', 'Pinarius', 'Piscius',
    'Pisentius', 'Piso', 'Pius', 'Placidius', 'Placidus', 'Placus', 'Planta',
    'Plautis', 'Plautius', 'Plautus', 'Pleminius', 'Plinius', 'Plotius',
    'Pollienus', 'Pollio', 'Pollius', 'Polus', 'Polybius', 'Pompeius',
    'Pompilius', 'Pompolussa', 'Pomponius', 'Pomptinus', 'Pontidius',
    'Pontius', 'Popidius', 'Poplicola', 'Porcus', 'Porphyrius', 'Portius',
    'Postumianus', 'Postumius', 'Postumus', 'Potitius', 'Potitus',
    'Praetextus', 'Prilidianus', 'Primanus', 'Primulus', 'Primus', 'Prisca',
    'Priscian', 'Priscus', 'Probus', 'Processus', 'Proceus', 'Proclus',
    'Proculus', 'Procyon', 'Profuterius', 'Propertius', 'Protacius', 'Protus',
    'Proxsimus', 'Publianus', 'Publicius', 'Publicola', 'Publicus', 'Publius',
    'Pudens', 'Pudentius', 'Pulcher', 'Pulcherius', 'Pullo', 'Pullus',
    'Pupius', 'Pusinnus', 'Pustula', 'Quartinus', 'Quarto', 'Quatruus',
    'Quentin', 'Quietus', 'Quinctilius', 'Quinctius', 'Quintilius',
    'Quintillius', 'Quintillus', 'Quintis', 'Quintus', 'Quiriac', 'Quiricus',
    'Quirinalis', 'Quirinius', 'Rabirius', 'Ramio', 'Ramirus', 'Ravilla',
    'Reburrus', 'Receptus', 'Rectus', 'Regillus', 'Reginus', 'Regulus',
    'Remigius', 'Remus', 'Renatus', 'Respectus', 'Restitutus', 'Rex',
    'Rhesus', 'Ripanus', 'Rogatus', 'Rogelius', 'Romanus', 'Romulianus',
    'Romulus', 'Roscius', 'Rufinianus', 'Rufinus', 'Rufius', 'Rufrius',
    'Rufus', 'Rullus', 'Ruricius', 'Ruso', 'Rusonius', 'Rusticus',
    'Rutilianus', 'Rutilius', 'Sabellius', 'Sabinianus', 'Sabinus',
    'Sabucius', 'Sacerdos', 'Saenus', 'Salinator', 'Sallustius', 'Salonianus',
    'Saloninus', 'Salonius', 'Salvian', 'Salvianus', 'Salvius', 'Sanctus',
    'Sandilianus', 'Sanga', 'Sarimarcus', 'Sarrius', 'Saturninus', 'Saunio',
    'Scaevola', 'Scapula', 'Scaro', 'Scato', 'Scaurus', 'Schlerus', 'Scipio',
    'Scribonius', 'Scrofa', 'Sebastianus', 'Secundas', 'Secundinius',
    'Secundius', 'Secundus', 'Segestes', 'Seius', 'Sejanus', 'Sellic',
    'Sempronius', 'Seneca', 'Senecianus', 'Senecio', 'Senilis', 'Senna',
    'Sennius', 'Senopianus', 'Sentius', 'Septimianus', 'Septimius',
    'Septimus', 'Sepunius', 'Sepurcius', 'Sergius', 'Serranus', 'Sertorius',
    'Servanus', 'Servatius', 'Servilius', 'Servius', 'Sestius', 'Seuso',
    'Severlinus', 'Severus', 'Sevso', 'Sextilius', 'Sextius', 'Sextus',
    'Siculus', 'Sidonius', 'Sigilis', 'Silanus', 'Silius', 'Silo', 'Silus',
    'Silvanus', 'Similis', 'Simo', 'Simplex', 'Siricus', 'Sisenna',
    'Sisinnius', 'Sita', 'Sittius', 'Socellius', 'Sollemnis', 'Sorex',
    'Sorio', 'Sornatius', 'Sosius', 'Sotericus', 'Soulinus', 'Sparticus',
    'Spendius', 'Speratus', 'Spurius', 'Statilius', 'Statius', 'Stertinius',
    'Stichus', 'Strabo', 'Sudrenus', 'Suedius', 'Suilius', 'Sulinus', 'Sulla',
    'Sulpicius', 'Super', 'Superbus', 'Superstes', 'Sura', 'Surinus',
    'Surius', 'Surus', 'Sylla', 'Sylvian', 'Sylvius', 'Symmachus',
    'Symphorian', 'Sympronian', 'Synistor', 'Synnodus', 'Tacitus', 'Tadius',
    'Taenaris', 'Talmudius', 'Tancinus', 'Tanicius', 'Tanicus', 'Tarquinius',
    'Tarsicius', 'Tasius', 'Tatian', 'Taurinus', 'Telesinus', 'Terenteianus',
    'Tertinius', 'Tertius', 'Tertullian', 'Tertullianus', 'Tertulus',
    'Tetricus', 'Tettidius', 'Tettienus', 'Tettius', 'Tetullianus', 'Thrasea',
    'Thurinus', 'Tiberillus', 'Tiberinus', 'Tiberius', 'Tibullus', 'Tiburs',
    'Tiburtius', 'Ticinius', 'Titianus', 'Titiedius', 'Titillus', 'Titinius',
    'Titius', 'Titus', 'Torquatus', 'Toutius', 'Traianus', 'Trailus',
    'Tranio', 'Tranquillus', 'Trebatius', 'Trebellius', 'Trebius',
    'Treblanus', 'Trebonianus', 'Trebonius', 'Tremellius', 'Tremerus',
    'Tremorinus', 'Trenico', 'Trenus', 'Triarius', 'Trifer', 'Triferus',
    'Trimalchio', 'Trogus', 'Trupo', 'Tuccianus', 'Tuccius', 'Tuditanus',
    'Tullas', 'Tullius', 'Tullus', 'Turibius', 'Turpilianus', 'Turpilias',
    'Turpilinus', 'Turullius', 'Tuticanus', 'Tutor', 'Typhoeus', 'Tyranus',
    'Ulfila', 'Ulixes', 'Ulpianus', 'Ulpius', 'Umbonius', 'Umbrenius',
    'Umbrius', 'Ummidius', 'Urbicus', 'Urgulanius', 'Ursacius', 'Ursinus',
    'Ursus', 'Uticensis', 'Uulius', 'Vagennius', 'Vagionius', 'Vagnius',
    'Vala', 'Valens', 'Valentinian', 'Valentinus', 'Valerian', 'Valerianus',
    'Valerius', 'Varialus', 'Varius', 'Varro', 'Varus', 'Vassenius', 'Vatia',
    'Vatinius', 'Vedius', 'Vedrix', 'Vegetius', 'Vel', 'Velius', 'Velus',
    'Venantius', 'Venator', 'Ventor', 'Venustinius', 'Vepgenus', 'Veranius',
    'Verecundius', 'Verecundus', 'Vergilius', 'Verginius', 'Verinus',
    'Verres', 'Verrucosis', 'Verullus', 'Verulus', 'Verus', 'Vesnius',
    'Vespasianus', 'Vespillo', 'Vestinus', 'Vestorius', 'Vesuvius',
    'Vetranio', 'Vettonianus', 'Veturius', 'Viator', 'Vibenius', 'Vibennis',
    'Vibidius', 'Vibius', 'Vibullius', 'Victor', 'Victorinus', 'Victricius',
    'Viducius', 'Vincentius', 'Vindex', 'Vinicianus', 'Vinicius', 'Vipsanius',
    'Vipstanus', 'Virginius', 'Viridio', 'Viridius', 'Virilis', 'Virius',
    'Virnius', 'Visellius', 'Vitalinus', 'Vitalion', 'Vitalis', 'Vitellius',
    'Vitoricus', 'Vitruvius', 'Vitulus', 'Vitus', 'Vocula', 'Volaginius',
    'Volcatius', 'Volturcius', 'Volumnius', 'Volusenna', 'Volusenus',
    'Volusianus', 'Volusius', 'Vonones', 'Vopiscus', 'Vorenius', 'Voteporix',
    'Vulso', 'Zeno', 'Zoilus', 'Zosimus'];
  const nm8 = ['C', 'L', 'S', 'Z', 'El', 'E', 'M', 'G', 'V', 'W', 'Al'];
  const nm9 = ['a', 'o', 'u', 'i', 'a', 'o', 'u', 'e', 'ar', 'or', 'ur', 'ak',
    'ok', 'uk', 'ud', 'ad', 'od', 'y', 'yt', '', ''];
  const nm10 = ['ada', 'adda', 'addo', 'addu', 'adna', 'adni', 'adnu', 'ado',
    'adu', 'al', 'anda', 'ando', 'andu', 'ara', 'arra', 'da', 'di', 'do',
    'du', 'fa', 'fo', 'fu', 'ga', 'gai', 'gei', 'go', 'gou', 'gu', 'la',
    'laa', 'lo', 'loo', 'lu', 'ma', 'mo', 'mu', 'na', 'no', 'nu', 'ol', 'ora',
    'orra', 'ra', 'ri', 'ro', 'ru', 'ta', 'tara', 'taro', 'tarra', 'tarro',
    'tarru', 'taru', 'to', 'tu', 'tura', 'turo', 'turra', 'turro', 'turru',
    'turu', 'uda', 'udda', 'uddo', 'uddu', 'udo', 'udu', 'ul', 'ura', 'urra'];
  const nm11 = ['d', 'f', 'g', 'ga', 'go', 'gu', 'k', 'la', 'lice', 'lo', 'lu',
    'm', 'ma', 'mo', 'mu', 'n', 'na', 'no', 'nu', 'r', 'ra', 'ro', 'ru', 't',
    'w', 'wa', 'wo', 'wu', 'za', 'zo', 'zu'];
  const nm12 = ['Abercia', 'Abito', 'Aburia', 'Acacia', 'Acauna', 'Accia',
    'Accoleia', 'Achaica', 'Acilia', 'Aciliana', 'Adaucta', 'Adepphia',
    'Adjutor', 'Adranos', 'Adventa', 'Aeaca', 'Aebuta', 'Aebutia', 'Aedinia',
    'Aelia', 'Aemilia', 'Aemiliana', 'Aetia', 'Afer', 'Agapta', 'Agatopa',
    'Agelasta', 'Agorix', 'Agricola', 'Agrippa', 'Agustalis', 'Ahala',
    'Ahenobarba', 'Albana', 'Albania', 'Albatia', 'Albina', 'Albinia',
    'Albucia', 'Alethia', 'Allecta', 'Allectia', 'Aloysia', 'Aluredes',
    'Alypia', 'Amanda', 'Amantia', 'Amatia', 'Ambrosia', 'Amor', 'Amphion',
    'Anatolia', 'Anca', 'Andronica', 'Angela', 'Annia', 'Antia', 'Antistia',
    'Antonia', 'Anullina', 'Apelles', 'Apellina', 'Aper', 'Apollonaria',
    'Aponia', 'Appuleia', 'Aquila', 'Aquilia', 'Aquillia', 'Arata', 'Arcadia',
    'Arcavia', 'Archaria', 'Aria', 'Armenia', 'Armiger', 'Armina', 'Arpagia',
    'Arria', 'Arriana', 'Arruntia', 'Arsinia', 'Artoria', 'Aruns', 'Arvina',
    'Asellio', 'Asina', 'Asinia', 'Asprena', 'Asprenas', 'Assania', 'Ateia',
    'Atia', 'Atilia', 'Atria', 'Atronia', 'Attia', 'Audaios', 'Audens',
    'Aufidia', 'Augenda', 'Auguria', 'Augurna', 'Augusta', 'Augustalis',
    'Augustana', 'Auila', 'Aurelia', 'Aureliana', 'Auria', 'Ausonia',
    'Auspex', 'Auxentia', 'Auxientia', 'Auxilia', 'Avidia', 'Aviena', 'Avita',
    'Axia', 'Babudia', 'Baebia', 'Balba', 'Balbilla', 'Balduina', 'Balventia',
    'Bambalio', 'Bamballio', 'Banqueria', 'Bantia', 'Barbata', 'Barbatia',
    'Baro', 'Barria', 'Bassa', 'Bato', 'Belena', 'Belisaria', 'Bella',
    'Bellator', 'Belletor', 'Bellica', 'Bestia', 'Betiliena', 'Betto',
    'Betucia', 'Bibacula', 'Bibula', 'Bituca', 'Blanda', 'Blandia', 'Blossia',
    'Bodenia', 'Bolana', 'Bona', 'Bonifatia', 'Bonosa', 'Bradua',
    'Britannica', 'Broccha', 'Bromida', 'Bruccia', 'Bruceta', 'Bruscia',
    'Bruta', 'Bruttia', 'Bubo', 'Buccio', 'Bucculeia', 'Bulla', 'Burcania',
    'Burra', 'Burriena', 'Buteo', 'Caeca', 'Caecia', 'Caecilia', 'Caeciliana',
    'Caecina', 'Caedicia', 'Caelestia', 'Caelia', 'Caeliana', 'Caelina',
    'Caelistis', 'Caeparia', 'Caepasia', 'Caepio', 'Caerellia', 'Caesar',
    'Caesennia', 'Caesetia', 'Caesia', 'Caesonia', 'Caesulena', 'Caetronia',
    'Calacica', 'Calatina', 'Calavia', 'Calda', 'Calena', 'Calera', 'Caleta',
    'Calidia', 'Caligula', 'Callisuna', 'Calogera', 'Calpornia', 'Calpurnia',
    'Calpurniana', 'Calpurnis', 'Calva', 'Calventia', 'Calvina', 'Calvisia',
    'Camelia', 'Cameria', 'Camilia', 'Camilla', 'Camillia', 'Campana',
    'Candida', 'Candidia', 'Candidiana', 'Cania', 'Canidia', 'Caninia',
    'Canio', 'Canisia', 'Cantaber', 'Cantia', 'Cantilia', 'Canuleia',
    'Canutia', 'Capito', 'Capiton', 'Capraria', 'Caprenia', 'Cara',
    'Caractura', 'Caranta', 'Carbo', 'Caria', 'Carina', 'Caristania',
    'Carnifex', 'Carvilia', 'Casca', 'Cassia', 'Cassiana', 'Casta', 'Castina',
    'Castoria', 'Cata', 'Catiana', 'Catilina', 'Cato', 'Catonia', 'Catula',
    'Catulla', 'Ceciliana', 'Ceionia', 'Celata', 'Celer', 'Celsa', 'Cenaea',
    'Cencia', 'Censoria', 'Censorina', 'Centumala', 'Cerialis', 'Cerintha',
    'Cerularia', 'Cerviana', 'Cervida', 'Cethega', 'Chlora', 'Christiana',
    'Cicereia', 'Cicero', 'Cico', 'Cilnia', 'Cimber', 'Cincia', 'Cinna',
    'Cinniana', 'Cispia', 'Cita', 'Cittina', 'Civilis', 'Clara',
    'Classiciana', 'Claudia', 'Claudiana', 'Clemens', 'Clement', 'Clodia',
    'Clodian', 'Clodiana', 'Cloelia', 'Clovia', 'Cluilia', 'Cluntia',
    'Cocceia', 'Cogitata', 'Coiedia', 'Colias', 'Collatina', 'Columbana',
    'Columella', 'Comes', 'Cominia', 'Comitiana', 'Comitina', 'Commia',
    'Commida', 'Commidia', 'Commoda', 'Concessa', 'Congrio', 'Consentia',
    'Considia', 'Constans', 'Constantia', 'Corbulo', 'Corda', 'Cordia',
    'Cornelia', 'Cornix', 'Cornuta', 'Coruncania', 'Corva', 'Corvina',
    'Cosconia', 'Cosmas', 'Cotentina', 'Cotta', 'Crassa', 'Cremutia',
    'Crescentia', 'Cresces', 'Crispa', 'Crispian', 'Crispin', 'Crito',
    'Crotilo', 'Cucuphas', 'Culleola', 'Cumana', 'Cunobarra', 'Cupitas',
    'Curia', 'Curio', 'Curtia', 'Cypriana', 'Cyprias', 'Cyrica', 'Dacien',
    'Dalmatia', 'Dama', 'Damasa', 'Damasippa', 'Damian', 'Dannica', 'Dardana',
    'Dardania', 'Decentia', 'Deciana', 'Decma', 'Decmitia', 'Decumia',
    'Desticia', 'Dexion', 'Dexippa', 'Dexsia', 'Didia', 'Didica', 'Digna',
    'Dillia', 'Dio', 'Diocletiana', 'Diocourides', 'Diserta', 'Docila',
    'Docilina', 'Dolabella', 'Dominica', 'Domitia', 'Domitiana', 'Donata',
    'Donatiana', 'Donica', 'Dorothea', 'Dossenia', 'Draco', 'Drusilla',
    'Drusus', 'Dubitatia', 'Duccia', 'Dulcitia', 'Dura', 'Durio', 'Duronia',
    'Duviana', 'Eboria', 'Eburna', 'Ecdicia', 'Eclecta', 'Egbuttia',
    'Egnatia', 'Eleria', 'Eliphas', 'Elpidia', 'Elvorix', 'Emerita',
    'Encratis', 'Enneca', 'Ennia', 'Ennodia', 'Eona', 'Epidia', 'Epidiana',
    'Epimacha', 'Epolonia', 'Equitia', 'Erasina', 'Esdras', 'Eudomia',
    'Eudoxia', 'Eugena', 'Eugenia', 'Eulogia', 'Eumenia', 'Eunapia',
    'Euphemia', 'Eustacia', 'Eutheria', 'Evodia', 'Excinga', 'Exsuperea',
    'Exuperta', 'Fabia', 'Fabiana', 'Fabilla', 'Facilis', 'Fada', 'Fadia',
    'Faenia', 'Faga', 'Falco', 'Falconia', 'Faleria', 'Falx', 'Famia',
    'Familiaris', 'Fara', 'Fastidia', 'Fausta', 'Faustilla', 'Faustinia',
    'Faustiniana', 'Faventina', 'Favonia', 'Felicissima', 'Felissima',
    'Felix', 'Ferentina', 'Ferreolia', 'Festa', 'Festinia', 'Fidelis',
    'Figula', 'Fima', 'Fimbria', 'Firma', 'Firmina', 'Flacca', 'Flavia',
    'Flavian', 'Flaviana', 'Flavilla', 'Flavina', 'Flavinia', 'Flavonia',
    'Flora', 'Florens', 'Florentia', 'Floria', 'Floriana', 'Floridia',
    'Floronia', 'Foriana', 'Fortunata', 'Frauca', 'Fredisia', 'Frigidian',
    'Frontalis', 'Frontina', 'Fronto', 'Fructosis', 'Frugi', 'Frugia',
    'Frumentia', 'Fufia', 'Fulcinia', 'Fullofaudes', 'Fulvia', 'Fulviana',
    'Fundana', 'Furia', 'Fusca', 'Fuscina', 'Gabinia', 'Gaia', 'Gaiana',
    'Gala', 'Galaria', 'Galena', 'Galera', 'Galeria', 'Galla', 'Gallio',
    'Galvisia', 'Gariliana', 'Gaura', 'Gavia', 'Gavra', 'Gavros', 'Gegania',
    'Gelasia', 'Gellia', 'Gemella', 'Geminiana', 'Generida', 'Genesia',
    'Genialis', 'Gennadia', 'Gerarda', 'Germana', 'Germanica', 'Gessia',
    'Geta', 'Getha', 'Glabrio', 'Glaucia', 'Globula', 'Gluvias', 'Glycia',
    'Gordian', 'Gordiana', 'Gordio', 'Gorgonia', 'Graccha', 'Gracilis',
    'Grania', 'Gratia', 'Gratian', 'Gratidia', 'Gratidiana', 'Gratta',
    'Gregoria', 'Grumio', 'Grylla', 'Gualtera', 'Habita', 'Hadriana',
    'Hardalio', 'Hateria', 'Helvetia', 'Helvia', 'Herculia', 'Herena',
    'Herennia', 'Herma', 'Hermina', 'Herminia', 'Hesychia', 'Hibera',
    'Hilaria', 'Hilario', 'Hilaris', 'Hirpinia', 'Hirra', 'Hirtia', 'Homulla',
    'Honorata', 'Horatia', 'Hortensa', 'Hortensia', 'Hortensis', 'Hosidia',
    'Hostilia', 'Humila', 'Hybrida', 'Iacoma', 'Ianuaria', 'Iavolena',
    'Icilia', 'Igenna', 'Ignatia', 'Inda', 'Indaletia', 'Ingenua',
    'Ingenvina', 'Insteia', 'Iocunda', 'Iovia', 'Iovina', 'Ioviniana',
    'Irenaea', 'Isatis', 'Isaurica', 'Italica', 'Iuba', 'Iulian', 'Iuliana',
    'Iunca', 'Iuncina', 'Iuniana', 'Iusta', 'Iustiana', 'Iustina',
    'Iustiniana', 'Iuvenlis', 'Ivmara', 'Julia', 'Junia', 'Juventia',
    'Laberia', 'Labiena', 'Lactantia', 'Laeca', 'Laelia', 'Laenas',
    'Laetiniana', 'Laetoria', 'Laevina', 'Lafrenia', 'Lampronia', 'Larcia',
    'Lartia', 'Laterana', 'Latinia', 'Laurentia', 'Leddica', 'Lentula',
    'Lentulla', 'Leon', 'Leontia', 'Lepida', 'Leponta', 'Leptis', 'Libania',
    'Liberalis', 'Libo', 'Liburnia', 'Licinia', 'Liciniana', 'Ligur',
    'Ligustina', 'Limetana', 'Lina', 'Litoria', 'Littera', 'Litumaris',
    'Livia', 'Liviana', 'Livigena', 'Lollia', 'Longina', 'Longinia', 'Loreia',
    'Lovernia', 'Loverniana', 'Lucan', 'Lucana', 'Lucceia', 'Luccia', 'Lucia',
    'Luciana', 'Lucilia', 'Luciliana', 'Lucretia', 'Luctaca', 'Luculla',
    'Lunaris', 'Luonerca', 'Luperca', 'Lupicina', 'Lupina', 'Lupis', 'Lurco',
    'Lurio', 'Lusia', 'Lutatia', 'Lutheria', 'Lutoria', 'Ma', 'Maccala',
    'Macrina', 'Macrinia', 'Macro', 'Macrobia', 'Mactator', 'Maecena',
    'Maecia', 'Maecilia', 'Maelia', 'Magna', 'Magnentia', 'Magunna', 'Maia',
    'Maja', 'Major', 'Malcha', 'Malla', 'Mallia', 'Maltina', 'Mamilia',
    'Mancina', 'Manilia', 'Manlia', 'Mansueta', 'Marcallas', 'Marcella',
    'Marcellina', 'Marcia', 'Marcialis', 'Marcipor', 'Margarita', 'Maria',
    'Marina', 'Mariniana', 'Maritialis', 'Maritima', 'Maro', 'Marsa',
    'Marsallas', 'Marsica', 'Marsyas', 'Martia', 'Martial', 'Martialis',
    'Martiana', 'Martina', 'Martyria', 'Marulla', 'Marullina', 'Materna',
    'Matho', 'Matia', 'Mauricia', 'Maursa', 'Maxima', 'Maximia', 'Maximian',
    'Maximiana', 'Maximina', 'Maximinia', 'Medullina', 'Megella', 'Mela',
    'Melissa', 'Melita', 'Mellita', 'Meminia', 'Memmia', 'Memor', 'Menenia',
    'Mercator', 'Mercurialis', 'Mercurina', 'Merula', 'Messala', 'Messiena',
    'Messor', 'Metella', 'Metilia', 'Metuna', 'Miciana', 'Mico', 'Micon',
    'Milonia', 'Minervalis', 'Miniana', 'Minicia', 'Miniciana', 'Minucia',
    'Moderata', 'Modia', 'Molaca', 'Moma', 'Montaa', 'Montana', 'Mordantica',
    'Mucia', 'Muciana', 'Muco', 'Munatia', 'Muncia', 'Munia', 'Murena',
    'Murria', 'Musa', 'Musica', 'Mutia', 'Mutila', 'Nabor', 'Naevia',
    'Narcissa', 'Narses', 'Nasennia', 'Nasica', 'Naso', 'Natalina', 'Natalis',
    'Naucratia', 'Nazaria', 'Nectarida', 'Nelia', 'Nemesiana', 'Nemetoria',
    'Nemnogena', 'Nenea', 'Nennia', 'Nepia', 'Nepos', 'Nero', 'Nertomara',
    'Nerva', 'Nicasia', 'Nicetia', 'Nigella', 'Niger', 'Nigidia', 'Nigilia',
    'Nigrina', 'Ninnia', 'Nipia', 'Niraemia', 'Nola', 'Nonia', 'Norbana',
    'Noster', 'Novation', 'Novellia', 'Novia', 'Numeria', 'Numeriana',
    'Numonis', 'Oceana', 'Octavia', 'Octavian', 'Octaviana', 'Octobriana',
    'Olcinia', 'Olennia', 'Olympica', 'Opilio', 'Opimia', 'Opis', 'Oppia',
    'Opsia', 'Optata', 'Orania', 'Ordia', 'Orientalis', 'Orientia', 'Orissa',
    'Orosia', 'Osteriana', 'Otacilia', 'Otho', 'Ovida', 'Pacatiana',
    'Pachomia', 'Pacuviana', 'Paenula', 'Paesentia', 'Paeta', 'Paetina',
    'Palicama', 'Palpellia', 'Pamphilia', 'Panaetia', 'Pansa', 'Pantensa',
    'Pantera', 'Panthera', 'Papa', 'Papia', 'Papinia', 'Papinian', 'Papiria',
    'Parata', 'Parnesia', 'Pascentia', 'Pastor', 'Patercula', 'Paterna',
    'Patiens', 'Patricia', 'Paulina', 'Paulla', 'Pavo', 'Pedia', 'Pelagia',
    'Peltrasia', 'Penna', 'Peregrina', 'Perennis', 'Perpenna', 'Perperna',
    'Pertaca', 'Pertinax', 'Pescennia', 'Petasia', 'Petellia', 'Petilia',
    'Petillia', 'Petra', 'Petreia', 'Petronax', 'Petronia', 'Philippa',
    'Photia', 'Pia', 'Pictor', 'Pila', 'Pilata', 'Pinaria', 'Piscia',
    'Pisentia', 'Piso', 'Placida', 'Placidia', 'Planta', 'Plauta', 'Plautia',
    'Plautis', 'Pleminia', 'Plinia', 'Plotia', 'Pola', 'Pollia', 'Polliena',
    'Pollio', 'Polybia', 'Pompeia', 'Pompilia', 'Pompolussa', 'Pomponia',
    'Pomptina', 'Pontia', 'Pontidia', 'Popidia', 'Poplicola', 'Porca',
    'Porphyria', 'Portia', 'Postuma', 'Postumia', 'Postumiana', 'Potita',
    'Potitia', 'Praetexta', 'Prilidiana', 'Prima', 'Primana', 'Primula',
    'Prisca', 'Priscian', 'Priscillian', 'Priscilliana', 'Proba', 'Procea',
    'Processa', 'Procula', 'Procyon', 'Profuteria', 'Propertia', 'Prota',
    'Protacia', 'Proxsima', 'Publiana', 'Publica', 'Publicia', 'Publicola',
    'Pudens', 'Pudentia', 'Pulcher', 'Pulcheria', 'Pulla', 'Pullo', 'Pupia',
    'Pusinna', 'Pustula', 'Quartina', 'Quarto', 'Quatrua', 'Quentin',
    'Quieta', 'Quinctia', 'Quinctilia', 'Quintilia', 'Quintiliana',
    'Quintilla', 'Quintillia', 'Quiriac', 'Quirica', 'Quirinalis', 'Quirinia',
    'Rabiria', 'Ramio', 'Ramira', 'Ravilla', 'Reburra', 'Recepta', 'Recta',
    'Regilla', 'Regina', 'Regula', 'Rema', 'Remigia', 'Renata', 'Respecta',
    'Restituta', 'Rex', 'Rhesa', 'Ripana', 'Rogata', 'Rogelia', 'Romana',
    'Romula', 'Romuliana', 'Roscia', 'Rufa', 'Rufia', 'Rufina', 'Rufiniana',
    'Rufria', 'Rulla', 'Ruricia', 'Ruso', 'Rusonia', 'Rustica', 'Rutilia',
    'Rutiliana', 'Sabellia', 'Sabina', 'Sabiniana', 'Sabucia', 'Sacerdos',
    'Saena', 'Salinator', 'Sallustia', 'Salonia', 'Saloniana', 'Salonina',
    'Salvia', 'Salvian', 'Salviana', 'Sancta', 'Sandiliana', 'Sanga',
    'Sarimarca', 'Sarria', 'Saturnina', 'Saunio', 'Scaevola', 'Scapula',
    'Scaro', 'Scato', 'Scaura', 'Schlera', 'Scipio', 'Scribonia',
    'Scriboniana', 'Scrofa', 'Sebastiana', 'Secundas', 'Secundia',
    'Secundinia', 'Segestes', 'Seia', 'Sejana', 'Sellic', 'Sempronia',
    'Seneca', 'Seneciana', 'Senecio', 'Senilis', 'Senna', 'Sennia',
    'Senopiana', 'Sentia', 'Septima', 'Septimia', 'Septimiana', 'Sepunia',
    'Sepurcia', 'Sergia', 'Seronata', 'Serrana', 'Sertoria', 'Servana',
    'Servatia', 'Servilia', 'Sestia', 'Seuso', 'Severa', 'Severlina', 'Sevso',
    'Sextia', 'Sextilia', 'Sicula', 'Sidonia', 'Sigilis', 'Sila', 'Silana',
    'Silia', 'Silo', 'Silvana', 'Similis', 'Simo', 'Simplex', 'Simpliciana',
    'Sirica', 'Sisenna', 'Sisinnia', 'Sita', 'Sittia', 'Socellia',
    'Sollemnis', 'Sorex', 'Sorio', 'Sornatia', 'Sosia', 'Soterica', 'Soulina',
    'Spartica', 'Spendia', 'Sperata', 'Spuria', 'Statia', 'Statilia',
    'Stertinia', 'Sticha', 'Strabo', 'Sudrena', 'Suedia', 'Suilia', 'Sulina',
    'Sulla', 'Sulpicia', 'Super', 'Superba', 'Superstes', 'Sura', 'Suria',
    'Surina', 'Sylla', 'Sylvia', 'Sylvian', 'Symmacha', 'Symphorian',
    'Sympronian', 'Synistor', 'Synnoda', 'Tacita', 'Tadia', 'Taenaris',
    'Talmudia', 'Tancina', 'Tanica', 'Tanicia', 'Tarquinia', 'Tarsicia',
    'Tasia', 'Tatian', 'Taurina', 'Telesina', 'Terenteiana', 'Tertia',
    'Tertinia', 'Tertula', 'Tertullian', 'Tertulliana', 'Tetrica', 'Tettia',
    'Tettidia', 'Tettiena', 'Tetulliana', 'Thrasea', 'Thurina', 'Tiberilla',
    'Tiberina', 'Tibulla', 'Tiburs', 'Tiburtia', 'Ticinia', 'Titia',
    'Titiana', 'Titiedia', 'Titilla', 'Titinia', 'Torquata', 'Toutia',
    'Traiana', 'Traila', 'Tranio', 'Tranquilla', 'Trebatia', 'Trebellia',
    'Trebia', 'Treblana', 'Trebonia', 'Treboniana', 'Tremellia', 'Tremera',
    'Tremorina', 'Trena', 'Trenico', 'Triaria', 'Trifer', 'Trifera',
    'Trimalchio', 'Troga', 'Trupo', 'Tuccia', 'Tucciana', 'Tuditana',
    'Tullas', 'Tullia', 'Turibia', 'Turpiliana', 'Turpilias', 'Turpilina',
    'Turullia', 'Tuticana', 'Tutor', 'Typhoea', 'Tyrana', 'Ulfila', 'Ulixes',
    'Ulpia', 'Ulpiana', 'Umbonia', 'Umbrenia', 'Umbria', 'Ummidia', 'Urbica',
    'Urgulania', 'Ursa', 'Ursacia', 'Ursina', 'Uticensis', 'Uulia',
    'Vagennia', 'Vagionia', 'Vagnia', 'Vala', 'Valens', 'Valentina',
    'Valentinian', 'Valeria', 'Valerian', 'Valeriana', 'Valgus', 'Vara',
    'Varia', 'Variala', 'Varro', 'Vassenia', 'Vatia', 'Vatinia', 'Vedia',
    'Vedrix', 'Vegetia', 'Vela', 'Velia', 'Venantia', 'Venator', 'Ventor',
    'Venustinia', 'Vepgena', 'Vera', 'Verania', 'Verecunda', 'Verecundia',
    'Vergilia', 'Verginia', 'Verina', 'Verres', 'Verrucosis', 'Verula',
    'Verulla', 'Vesnia', 'Vespasiana', 'Vespillo', 'Vestina', 'Vestoria',
    'Vesuvia', 'Vetranio', 'Vettoniana', 'Veturia', 'Viator', 'Vibenia',
    'Vibennis', 'Vibia', 'Vibidia', 'Vibullia', 'Victor', 'Victorina',
    'Victricia', 'Viducia', 'Vincentia', 'Vindex', 'Vinicia', 'Viniciana',
    'Vipsania', 'Vipstana', 'Virginia', 'Viria', 'Viridia', 'Viridio',
    'Virilis', 'Virnia', 'Visellia', 'Vita', 'Vitalina', 'Vitalion',
    'Vitalis', 'Vitellia', 'Vitorica', 'Vitruvia', 'Vitula', 'Vocula',
    'Volaginia', 'Volcatia', 'Volturcia', 'Volumnia', 'Volusena', 'Volusenna',
    'Volusia', 'Volusiana', 'Vonones', 'Vopisca', 'Vorenia', 'Voteporix',
    'Vulso', 'Zeno', 'Zoila', 'Zosima'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    if (type === 1) {
      if (i < 5) {
        rnd = Math.floor(Math.random() * nm12.length);
        names = `${nm12[rnd]} ${nm5[rnd5]}${nm6[rnd6]}`;
      } else {
        rnd = Math.floor(Math.random() * nm8.length);
        rnd2 = Math.floor(Math.random() * nm9.length);
        rnd3 = Math.floor(Math.random() * nm10.length);
        rnd4 = Math.floor(Math.random() * nm11.length);
        names = `${nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm11[rnd4]} ${nm5[rnd5]}${nm6[rnd6]}`;
      }
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm7.length);
      names = `${nm7[rnd]} ${nm5[rnd5]}${nm6[rnd6]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4]} ${nm5[rnd5]}${nm6[rnd6]}`;
    }
    return names;
  }
}
