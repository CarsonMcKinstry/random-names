import { sample } from 'lodash-es';

export default function romanTowns() {
  let names;
  const nm1 = ['Aballava', 'Aballo', 'Aballum', 'Abbatis Villa', 'Abdera', 'Abellinum', 'Abrittus', 'Abritus', 'Abudiacum', 'Abula', 'Abusina', 'Acci', 'Acinipo', 'Acrae', 'Acyra', 'Ad Aesim', 'Ad Anisum', 'Ad Flexum', 'Ad Iuvense', 'Ad Martis', 'Ad Mauros', 'Ad Mediam', 'Ad Novas', 'Ad Pontes', 'Ad Statuas', 'Adana', 'Ader', 'Adraa', 'Adramyttium', 'Aecae', 'Aeclanum', 'Aelia Capitolina', 'Aelium Cetium', 'Aeminium', 'Aemona', 'Aenus', 'Aequinoctium', 'Aesernia', 'Aesica', 'Aesis', 'Agathe', 'Agedincum', 'Aginnum', 'Agrigentum', 'Agrippina', 'Agrippina Romanorum', 'Aguntum', 'Ala Nova', 'Alalia', 'Alba Fucens', 'Alba Longa', 'Alba Regia', 'Albaniana', 'Albanum', 'Albiga', 'Albintemelium', 'Almus', 'Altinum', 'Ambiani', 'Ambracia', 'Ameria', 'Amida', 'Amiternum', 'Ammaia', 'Ammurianum', 'Anavio', 'Anazarbus', 'Anchialus', 'Ancona', 'Anderida', 'Anhialo', 'Anicium', 'Anio', 'Antino?s', 'Antioch', 'Antipolis', 'Antium', 'Apamea', 'Aphrodisias', 'Apollonia', 'Apollonia Pontica', 'Apua', 'Apulum', 'Aqua Viva', 'Aquae Armenetiae', 'Aquae Arnemetiae', 'Aquae Cutiliae', 'Aquae Flaviae', 'Aquae Gratianae', 'Aquae Helveticae', 'Aquae Mattiacae', 'Aquae Mattiacorum', 'Aquae Originis', 'Aquae Pannonicae', 'Aquae Sextiae', 'Aquae Sulis', 'Aquileia', 'Aquilonia', 'Aquincum', 'Aquis Voconis', 'Aquisgranium', 'Aquitania', 'Arabona', 'Arausio', 'Arbeia', 'Arbor Felix', 'Arcadiopolis', 'Arcidava', 'Arconisium', 'Ardotalia', 'Arelape', 'Arelate', 'Argentoratum', 'Aricia', 'Ariminium', 'Ariminum', 'Armorica', 'Arpinum', 'Arrabona', 'Arretium', 'Arsinoe', 'Arverni', 'Ascalon', 'Asisium', 'Asturica', 'Asturica Augusta', 'Aternum', 'Athenae', 'Atrans', 'Atrebatum', 'Atuatuca Tungrorum', 'Augusta Argentorate', 'Augusta Emerita', 'Augusta Praetoria', 'Augusta Raurica', 'Augusta Suessionum', 'Augusta Taurinorum', 'Augusta Traiana', 'Augusta Trajana', 'Augusta Trebecorum', 'Augusta Treverorum', 'Augusta Trevirorum', 'Augusta Vangiorum', 'Augusta Vindelicorum', 'Augusta Viromanduorum', 'Augustadorum', 'Augustianis', 'Augustobona', 'Augustodunum', 'Augustodurum', 'Augustomagus', 'Augustonementum', 'Augustonemetum', 'Augustoritum', 'Aurelia', 'Aurelia Aquensi', 'Aurelianorum', 'Aurelianum', 'Autricum', 'Avaricum', 'Avenio', 'Avennio', 'Aventicum', 'Baeloe', 'Baeterrae', 'Baetulo', 'Bagacum', 'Bagradas', 'Baiae', 'Bannaventa', 'Barcino', 'Barduli', 'Barium', 'Basilea', 'Basilia', 'Basti', 'Batavis', 'Bauzanum', 'Bedriacum', 'Belgica', 'Belginum', 'Bellunum', 'Beneventum', 'Bergomum', 'Bergula', 'Beroe Augusta Trajana', 'Berytus', 'Berzobis', 'Besontio', 'Bethar', 'Bilachinium', 'Bilbilis', 'Bilbilis Italica', 'Bisanthe', 'Blariacum', 'Bobium Ebovium', 'Bona', 'Bonna', 'Bononia', 'Bononia Malata', 'Boreana', 'Bosona', 'Bostra', 'Bracara Augusta', 'Bremetennacum Veteranorum', 'Brigantium', 'Brigetio', 'Britannia', 'Brivas', 'Brixellum', 'Brixia', 'Brundisium', 'Budalia', 'Bulla Regia', 'Burdigala', 'Burrium', 'Butunti', 'Byblus', 'Byzantium', 'Caenophrurium', 'Caere', 'Caesaraugusta', 'Caesarea', 'Caesarea Maritima', 'Caesarea Mazaca', 'Caesarodunum', 'Caesaromagus', 'Caesena', 'Calagurris', 'Calagurris Iulia Nasica', 'Calcaria', 'Calceus Herculis', 'Caledonia', 'Callatis', 'Calleva Atrebatum', 'Camaracum', 'Camasiacum', 'Cambria', 'Camerinum', 'Campi Catalaunii', 'Campona', 'Campus vassorum', 'Camulodunum', 'Canatha', 'Cannabiaca', 'Cannae', 'Cantabrigia', 'Canusium', 'Canusum', 'Capena', 'Caprae', 'Capreae', 'Caprera', 'Capsa', 'Capua', 'Carales', 'Caralis', 'Caranusca', 'Carcaso', 'Carmo', 'Carmona', 'Carnotum', 'Carnuntum', 'Caromago', 'Carrhae', 'Carsioli', 'Carsulae', 'Carteia', 'Cartennae', 'Carthago', 'Carthago Nova', 'Cascantum', 'Casilinum', 'Casinum', 'Castellum Flevum', 'Castellum apud Confluentes', 'Castra Batava', 'Castra Batavorum', 'Castra Bonnensia', 'Castra Devana', 'Castra Martis', 'Castra Nicia', 'Castra Nova', 'Castra Regina', 'Castra Taurinorum', 'Castra Vetera', 'Castra ad Herculem', 'Castri locus', 'Castrum Deutonis', 'Castrum Octavianum', 'Castulo', 'Catania', 'Cataractonium', 'Cauca', 'Caudium', 'Caurium', 'Causennae', 'Celaenae', 'Celeia', 'Celsa', 'Cenabum', 'Cenabum Aureliani', 'Cenebelum', 'Centum Cellae', 'Centumcellai', 'Ceuniacum', 'Chalcedon', 'Chrysopolis', 'Chullu', 'Cibalae', 'Cidamus', 'Cillium', 'Cilurnum', 'Circesium', 'Cirpi', 'Cirta', 'Civitas Nerviorum', 'Civitas Sancti Romuli', 'Claudiopolis', 'Clausentum', 'Clotagenium', 'Clunia', 'Clupea', 'Clusium', 'Colonia Agrippina', 'Colonia Agrippina(e)', 'Colonia Agrippinensium', 'Colonia Antiocheia', 'Colonia Augusta Emerita', 'Colonia Baelo Claudia', 'Colonia Caecilia Metellinum', 'Colonia Caesar Augusta', 'Colonia Claudia Savaria', 'Colonia Flavia Scupi', 'Colonia Forum Segusiavorum', 'Colonia Iulia Equestris', 'Colonia Iulia Gemella Acci', 'Colonia Iulia Illici Augusta', 'Colonia Iulia Romula', 'Colonia Julia Carthago', 'Colonia Nemausa', 'Colonia Norba Caesarina', 'Colonia Patricia', 'Colonia Ulpia Traiana', 'Colonia Victrix Iulia Celsa', 'Colonia Victrix Iulia Lepida', 'Comagena', 'Complutum', 'Comum', 'Concangis', 'Concordia Sagittaria', 'Condate', 'Condate Redones', 'Condate Redonum', 'Condate Riedonum', 'Condatomagus', 'Conimbriga', 'Consentia', 'Constantia', 'Constantinopolis', 'Corcyra', 'Corduba', 'Corfinium', 'Coria', 'Coriallum', 'Corinium', 'Corinium Dobunnorum', 'Coriovallum', 'Corisopitum', 'Coristopitum', 'Cornelii', 'Corstopitum', 'Cortona', 'Cortoriacum', 'Corvinium', 'Cosa', 'Cremona', 'Croton', 'Crotona', 'Cuicul', 'Cularo', 'Cumae', 'Cunetio', 'Curia', 'Cydamae', 'Cyrene', 'Danaster', 'Danum', 'Danuvius', 'Darioritum', 'Decem Pagi', 'Derthona', 'Dertona', 'Dertosa', 'Derventio', 'Deva', 'Dianinum', 'Dierna', 'Dimale', 'Dimum', 'Diocletianopolis', 'Dionysopolis', 'Divio', 'Divodurum', 'Drepana', 'Drepanum', 'Drobeta', 'Drusus', 'Duacum', 'Dubris', 'Dumatha', 'Dunum', 'Duranius', 'Durnovaria', 'Durobrivae', 'Durocatalaunum', 'Durocobrivis', 'Durocornovium', 'Durocorotum', 'Durocortorum', 'Durocortorum Remorum', 'Durolipons', 'Durolitum', 'Durostorum', 'Durovernon', 'Durovernum', 'Durovernum Cantiacorum', 'Durovigutum', 'Dyrrachium', 'Dyrrhachium', 'Eboracum', 'Ebrus', 'Eburacum', 'Eburodunum', 'Ecnomus', 'Egara', 'Egnatia', 'Emerita', 'Emerita Augusta', 'Emesa', 'Emona', 'Emporiae', 'Epidamnus', 'Eporedia', 'Eryx', 'Evidensca', 'Fabiranum', 'Faesulae', 'Falerii Novi', 'Fanum Fortunae', 'Faventia', 'Favianis', 'Firmum', 'Flavia Solva', 'Florentia', 'Formiae', 'Forum Claudii Vallensium', 'Forum Hadriani', 'Forum Iulii', 'Forum Livii', 'Forum Lulii', 'Forum Popilii', 'Fulginiae', 'Fundi', 'Gades', 'Gandava', 'Gariannonum', 'Garrianonum', 'Garumna', 'Geminiacum', 'Genava', 'Geneva', 'Genua', 'Gerasa', 'Germania', 'Gerontium', 'Gerulata', 'Gesoriacum', 'Gigia', 'Glannaventa', 'Glevum', 'Glevum Colonia', 'Gorsium', 'Graccurris', 'Gratianopolis', 'Hadria', 'Hadrianopolis', 'Hadrianutherae', 'Hadrumetum', 'Haenna', 'Haga-Comitis', 'Hasta', 'Heliopolis', 'Heraclea', 'Heraclea Lyncestis', 'Herculaneum', 'Herculea', 'Herdonia', 'Hibernia', 'Hierosolyma', 'Hippo Diarrhytus', 'Hippo Regius', 'Hippo Zarytus', 'Hispalis', 'Hispellum', 'Histria', 'Hoius Vicus', 'Hortonium', 'Hydruntum', 'Iaurinum', 'Iberia', 'Iculisma', 'Iguvium', 'Ilerda', 'Illici', 'Iluro', 'Interamna Nahars', 'Interamnia Praetutiana', 'Intercisa', 'Ioviacum', 'Isara', 'Isca', 'Isca Augusta', 'Isca Dumnoniorum', 'Istropolis', 'Istrus', 'Isurium', 'Isurium Brigantum', 'Italica', 'Iuenna', 'Iulia Concordia', 'Iulia Traducta', 'Iulium Carnicum', 'Juliobona', 'Juliobriga', 'Juliomagus', 'Juvavum', 'Labacum', 'Labellum', 'Lactodorum', 'Lagentium', 'Lambaesis', 'Lanuvium', 'Lapurdum', 'Lascuta', 'Latopolis', 'Lauriacum', 'Lavatrae', 'Lederata', 'Legentium', 'Legio', 'Lemincum', 'Lemonum', 'Lentia', 'Lentie', 'Leptis Magna', 'Letocetum', 'Leucarum', 'Liberalitas Julia', 'Liburnum', 'Liger', 'Lihnidos', 'Lilybaeum', 'Limonum', 'Lincium', 'Lindinis', 'Lindum', 'Lindum Colonia', 'Liniacum', 'Londinium', 'Lousanna', 'Luca', 'Lucentum', 'Luceria', 'Lucus Augusti', 'Luentinum', 'Lugdunum', 'Lugdunum Batavorum', 'Lugio', 'Luguvalium', 'Luguvallum', 'Luna', 'Lupiae', 'Lusitania', 'Lusonum', 'Lussonium', 'Lutetia', 'Lutetia Parisiorum', 'Lutonium', 'Madauros', 'Magador', 'Malaca', 'Malata Bonenia', 'Mamucium', 'Mancunium', 'Manduessedum', 'Mantua', 'Marcianopolis', 'Maromago', 'Marsonia', 'Massilia', 'Matrica', 'Mattium', 'Mauriciacum', 'Mazaca', 'Mediolanum', 'Mediolanum Aulercorum', 'Mediolanum Santonum', 'Melitene', 'Melta', 'Messambria', 'Messana', 'Metapontum', 'Metellinum', 'Metheola', 'Metis', 'Mevania', 'Minturnae', 'Misenum', 'Moenum', 'Mogentianae', 'Mogontiacum', 'Moguntiacum', 'Mons Bellona', 'Montana', 'Moridunum', 'Mosa Trajectum', 'Municipium Augusta Bilbilis', 'Mursa', 'Mutina', 'Naissus', 'Napoca', 'Narbo', 'Narbo Martius', 'Navio', 'Neapolis', 'Nemausus', 'Nemetacum Atrebatum', 'Nepte', 'Nequinum', 'Neropolis', 'Nervia Glevensium', 'Neviodunum', 'Nevirnum', 'Nicaea', 'Nicopolis', 'Nidum', 'Nola', 'Nora', 'Norba', 'Noreia', 'Novae', 'Novaesium', 'Novaria', 'Noviodunum', 'Noviodunum Aeduorum', 'Noviomagus', 'Noviomagus Batavodurum', 'Noviomagus Cantiacorum', 'Noviomagus Reginorum', 'Novioritum', 'Novodunum', 'Numantia', 'Nursia', 'Obulco', 'Ocriculum', 'Octodurum', 'Octodurus', 'Odessus', 'Oea', 'Oenipons', 'Oenipontum', 'Olicana', 'Olisipo', 'Olmedum', 'Onuba', 'Opitergium', 'Oppidum Atuaticorum', 'Oppidum Batavorum', 'Oppidum Ubiorum', 'Orolaunum', 'Osca', 'Osset', 'Ossonoba', 'Ostia', 'Ostia Aterni', 'Ostium', 'Ovilava', 'Padus', 'Paestum', 'Palmyra', 'Panormus', 'Paraetonium', 'Parentium', 'Patavium', 'Pautalia', 'Pax Iulia', 'Perinthus', 'Perusia', 'Pharos', 'Philadelphia', 'Philippopolis', 'Pisa', 'Pisae', 'Pisaurum', 'Pistorium', 'Placentia', 'Podium Aniciense', 'Poetovio', 'Pola', 'Pollentia', 'Pompaelo', 'Pompeii', 'Pons Aelius', 'Pons Saravi', 'Pons aelii', 'Pontus Fractus', 'Populonium', 'Portus', 'Portus Adurni', 'Portus Cale', 'Portus Felix', 'Portus Itius', 'Portus Lemanis', 'Portus Magnus', 'Portus Namnetus', 'Portus Naonis', 'Posonium', 'Potaissa', 'Potentia', 'Praeneste', 'Praesidium', 'Praesidium Iulium', 'Praetorium', 'Praetorium Agrippinae', 'Praetorium Latobicorum', 'Ptolemais', 'Pumbedita', 'Puteoli', 'Quinque-Ecclesiis', 'Radasbona', 'Raetinium', 'Ragusa', 'Ragusa Ibla', 'Raphae', 'Ratae Corieltauvorum', 'Ratae Coritanorum', 'Ratea Colitanorum', 'Ratiara', 'Ravenna', 'Reginca', 'Regium Lepidi', 'Regium Lepidum', 'Regnum', 'Regulbium', 'Resapha', 'Rhaedestus', 'Rhegium', 'Rhegium Julium', 'Rhenus', 'Rhodanos', 'Ricciacum', 'Rigomagus', 'Risinium', 'Roma', 'Rothnacum', 'Rotomagus', 'Rusaddir', 'Rusicade', 'Rutupiae', 'Sabaria', 'Sabratha', 'Saena Julia', 'Saenna Julia', 'Saetabis', 'Saguntum', 'Saldae', 'Salduba', 'Salernum', 'Salinae', 'Salmantica', 'Salodurum', 'Salonae', 'Salva', 'Samarobriva', 'Samarobriva Ambianorum', 'Sarmizegethusa', 'Savaria', 'Savo', 'Savona', 'Scallabis', 'Scarbantia', 'Scupi', 'Scylacium', 'Segobriga', 'Segontium', 'Segovia', 'Segusio', 'Seleucia', 'Selymbria', 'Sempronium', 'Senones', 'Serdica', 'Sergiopolis', 'Sexaginta Prista', 'Sicca Veneria', 'Silvium', 'Simitthu', 'Singidunum', 'Sinope', 'Sinuessa', 'Sipontum', 'Sippar', 'Sirmium', 'Siscia', 'Sitifis', 'Solva', 'Sopianae', 'Sora', 'Sorviodunum', 'Sorviodurum', 'Sozopolis', 'Spalatum', 'Spoletium', 'Stabiae', 'Stirpiacum', 'Stobi', 'Storgozia', 'Suasa', 'Sucidava', 'Sufetula', 'Sulloniacis', 'Superiacum', 'Sutrium', 'Sybaris', 'Syene', 'Syracusae', 'Taginae', 'Taparura', 'Tarentum', 'Tarquinii', 'Tarracina', 'Tarraco', 'Tarvisium', 'Taurinum', 'Tauromenium', 'Teate Marrucinorum', 'Telo Martius', 'Tenedo', 'Tentyra', 'Tergeste', 'Tergestum', 'Teurnia', 'Thamugadi', 'Thermae Himerenses', 'Theveste', 'Thuburbo Maius', 'Thugga', 'Thysdrus', 'Tibur', 'Ticinum', 'Ticinum Papiae', 'Tifernum Tiberinum', 'Tigurum', 'Tingi', 'Tolbiacum', 'Toletum', 'Tolosa', 'Tomis', 'Tornacum', 'Traiectum Eriditum', 'Traiectum ad Mosam', 'Trajectum ad Rhenum', 'Trapezus', 'Trebizond', 'Tres Tabernae', 'Treviri', 'Tricciana', 'Tricensimae', 'Tridentum', 'Trimontium', 'Tripolis', 'Tripontium', 'Tropaeum Traiani', 'Tuder', 'Tullum Leucorum', 'Tupusuctu', 'Turiaso', 'Turiaso Silbis', 'Turicim', 'Turicum', 'Turnacum Nerviorum', 'Tusculum', 'Tyrus', 'Ugernum', 'Ulcisia Castra', 'Ulpia Novomagus', 'Umbracum', 'Urbinum Hortense', 'Urbinum Mataurense', 'Urbs Victrix Osca', 'Uria', 'Utina', 'Utinum', 'Vagniacea', 'Valcum', 'Valentia', 'Valentia Edetanorum', 'Valentianae', 'Varadinum', 'Vasio Vocontiorum', 'Vectis', 'Vedinum', 'Veii', 'Veldidena', 'Velia', 'Velitrae', 'Venetiae', 'Venta Belgarum', 'Venta Icenorum', 'Venta Silurum', 'Venusia', 'Veralamium', 'Vercellae', 'Vernementum', 'Verodunum', 'Verona', 'Verulamium', 'Vesuna', 'Vesunna', 'Vetera', 'Vetulonia', 'Vezeliacum', 'Vibo Valentia', 'Vicentia', 'Vicus Belginum', 'Vicus Elbii', 'Vicus Leodicus', 'Vienna', 'Vigiliae', 'Viglebanum', 'Vigueria', 'Viminiacum', 'Vindinium', 'Vindobona', 'Vindolanda', 'Vindomora', 'Vindonissa', 'Vinovia', 'Vinovium', 'Vipitenum', 'Viroconium', 'Viroconium Cornoviorum', 'Viroviacum', 'Virunum', 'Vitudurum', 'Vizeliacum', 'Volaterrae', 'Volsinii', 'Volsinii Novi', 'Volubilis', 'Vorgium', 'Vuenteka super fluvium Therma', 'Vulci', 'Xanthus', 'Zaitha', 'Zama Regia', 'Zela', 'Zeugma'];
  {
    names = sample(nm1);
    return names;
  }
}
