export default function latins() {
  let rnd;
  let rnd1;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const namesMale = ['Abelus', 'Abrahamus', 'Abundantius', 'Acanthio', 'Acropolistis', 'Acroteleutium', 'Adamus', 'Adelphasium', 'Adrianus', 'Adulescens', 'Advocati', 'Agorastocles', 'Alanus', 'Albanus', 'Albertus', 'Albinus', 'Alcesimarchus', 'Alcesimus', 'Alcmena', 'Angelus', 'Antamonides', 'Anterastilis', 'Antipho', 'Aquila', 'Argyrippus', 'Aristophontes', 'Artamo', 'Artemona', 'Artotrogus', 'Aspasius', 'Astaphium', 'Augustinus', 'Aurelio', 'Aureolus', 'Auxilium', 'Bacchis', 'Baebio', 'Ballio', 'Blepharo', 'Bromia', 'Cacistus', 'Calidorus', 'Callicles', 'Callidamates', 'Callipho', 'Candidus', 'Cappadox', 'Cario', 'Chalinus', 'Charinus', 'Charmides', 'Chrysalus', 'Citrio', 'Citro', 'Cleareta', 'Cleomachus', 'Cleostrata', 'Cocus', 'Collybiscus', 'Coquus', 'Crocotium', 'Curculio', 'Cyamus', 'Cylindrus', 'Daemones', 'Delphium', 'Demaenetus', 'Demipho', 'Demiphones', 'Dinia', 'Diniarchus', 'Dionysius', 'Dordalus', 'Dorippa', 'Eleusium', 'Eligius', 'Epidicus', 'Epignomus', 'Ergalisus', 'Erotium', 'Euclio', 'Eunomia', 'Eutychus', 'Felicianus', 'Firminus', 'Franciscus', 'Fridericus', 'Gallicles', 'Gelasimus', 'Georgius', 'Giddenis', 'Godefridus', 'Gorgines', 'Gripus', 'Grumio', 'Gulielmus', 'Gymnasium', 'Hadrianus', 'Halisca', 'Hanno', 'Harpax', 'Hegio', 'Henricus', 'Iosephus', 'Isidorus', 'Labrax', 'Lampadio', 'Laurentius', 'Leaena', 'Lemniselenis', 'Lena', 'Leonida', 'Lesbonicus', 'Lorarii', 'Ludovicus', 'Luxuria', 'Lyco', 'Lyconides', 'Lycus', 'Lydus', 'Lysidamus', 'Lysimachus', 'Lystiteles', 'Martinus', 'Megadorus', 'Megaronides', 'Melaenis', 'Menaechmus', 'Messenio', 'Milphio', 'Misargyrides', 'Mnesilochus', 'Modestus', 'Mulier', 'Nicobulus', 'Nicodemus', 'Olympio', 'Paegnium', 'Palaestrio', 'Palinurus', 'Panegyris', 'Pardalisca', 'Pasicompsa', 'Pellio', 'Peniculus', 'Periphanes', 'Periplectomenus', 'Petrus', 'Phaedria', 'Phaedromus', 'Phanostrata', 'Philematium', 'Philippus', 'Philocomasium', 'Philocrates', 'Philolaches', 'Philopolemus', 'Philoxenus', 'Philto', 'Phronesium', 'Phygia', 'Piscatores', 'Pistoclerus', 'Pius', 'Planesium', 'Plesidippus', 'Pleusicles', 'Pseudolus', 'Pyrgopolinices', 'Pyrgopolynices', 'Quintinus', 'Robertus', 'Rogerius', 'Romanus', 'Sagaristio', 'Sangarinus', 'Saturio', 'Scapha', 'Sceledrus', 'Sceparnio', 'Selenium', 'Sergius', 'Severinus', 'Simo', 'Sobersides', 'Sophoclidisca', 'Sosicles', 'Soteris', 'Sparax', 'Sphaerio', 'Stadius', 'Stalagmus', 'Staphyla', 'Stasimus', 'Stephanium', 'Stephanus', 'Stratipoccles', 'Stratophanes', 'Strobilus', 'Sulpicio', 'Sycophanta', 'Syncerastus', 'Syra', 'Tedusius', 'Telestis', 'Theodorus', 'Theodosius', 'Theopropides', 'Therapontigonus', 'Toxilus', 'Trachalio', 'Tranio', 'Truculentus', 'Turbalio', 'Tycho', 'Tyndarus', 'Vincentius', 'Virgo'];
  const namesFemale = ['Aburia', 'Accia', 'Accoleia', 'Acilia', 'Adriana', 'Aebutia', 'Aedinia', 'Aelia', 'Aemilia', 'Albatia', 'Allectia', 'Amatia', 'Ampelisca', 'Angela', 'Annia', 'Antia', 'Antistia', 'Antonia', 'Appuleia', 'Aquillia', 'Armenia', 'Arria', 'Arsinia', 'Artoria', 'Asinia', 'Ateia', 'Atia', 'Atilia', 'Atria', 'Atronia', 'Attia', 'Aufidia', 'Augustina', 'Aurelia', 'Auria', 'Ausonia', 'Avidia', 'Avita', 'Axia', 'Babudia', 'Baebia', 'Balventia', 'Bantia', 'Barbatia', 'Barria', 'Beata', 'Beatrix', 'Betiliena', 'Betucia', 'Blandia', 'Blossia', 'Bruccia', 'Bruttia', 'Bucculeia', 'Burriena', 'Caecia', 'Caecilia', 'Caecina', 'Caedicia', 'Caelia', 'Caeparia', 'Caepasia', 'Caerellia', 'Caesennia', 'Caesetia', 'Caesia', 'Caesonia', 'Caesulena', 'Caetronia', 'Caia', 'Calavia', 'Calidia', 'Calpurnia', 'Calventia', 'Calvisia', 'Camelia', 'Camilia', 'Camillia', 'Cania', 'Canidia', 'Caninia', 'Cantia', 'Cantilia', 'Canuleia', 'Canutia', 'Caprenia', 'Caria', 'Caristania', 'Carvilia', 'Casina', 'Cassia', 'Ceionia', 'Cicereia', 'Cilnia', 'Cincia', 'Cispia', 'Claudia', 'Clodia', 'Cloelia', 'Clovia', 'Cluilia', 'Cluntia', 'Cocceia', 'Coiedia', 'Cominia', 'Consentia', 'Considia', 'Cordia', 'Cornelia', 'Coruncania', 'Cosconia', 'Curia', 'Curtia', 'Decumia', 'Desticia', 'Dexsia', 'Didia', 'Dillia', 'Dionysia', 'Domitia', 'Dossenia', 'Duccia', 'Duronia', 'Egnatia', 'Epidia', 'Equitia', 'Eurydice', 'Fabia', 'Fadia', 'Faenia', 'Faleria', 'Favonia', 'Feliciana', 'Felicitas', 'Festinia', 'Fides', 'Flavia', 'Flavinia', 'Flavonia', 'Floria', 'Floridia', 'Floronia', 'Francisca', 'Friderica', 'Fufia', 'Fulcinia', 'Fulvia', 'Fundana', 'Furia', 'Gabinia', 'Galeria', 'Gavia', 'Gegania', 'Gellia', 'Grania', 'Gratia', 'Gratidia', 'Helvetia', 'Helvia', 'Herennia', 'Herminia', 'Hirtia', 'Horatia', 'Hortensia', 'Hosidia', 'Hostilia', 'Icilia', 'Insteia', 'Iosepha', 'Isidora', 'Julia', 'Junia', 'Juventia', 'Laberia', 'Labiena', 'Laelia', 'Laetoria', 'Lafrenia', 'Lampronia', 'Lartia', 'Liburnia', 'Licinia', 'Livia', 'Lollia', 'Longinia', 'Loreia', 'Lucceia', 'Lucia', 'Lucilia', 'Lucretia', 'Lusia', 'Lutatia', 'Macrinia', 'Maecilia', 'Maelia', 'Mallia', 'Mamilia', 'Manilia', 'Manlia', 'Marcella', 'Marcia', 'Maria', 'Martina', 'Matia', 'Maximia', 'Memmia', 'Menenia', 'Messiena', 'Metilia', 'Milonia', 'Milphidippa', 'Minicia', 'Minucia', 'Modesta', 'Modia', 'Mucia', 'Munatia', 'Munia', 'Murria', 'Myrrhina', 'Naevia', 'Nasennia', 'Nemetoria', 'Nepia', 'Nigidia', 'Nigilia', 'Ninnia', 'Nipia', 'Norbana', 'Novia', 'Numeria', 'Octavia', 'Olcinia', 'Oppia', 'Opsia', 'Orania', 'Otacilia', 'Paesentia', 'Palaestra', 'Palpellia', 'Papia', 'Papinia', 'Papiria', 'Paula', 'Pedia', 'Peltrasia', 'Pescennia', 'Petellia', 'Petilia', 'Petillia', 'Petra', 'Petronia', 'Philaenium', 'Philippa', 'Pinaria', 'Piscia', 'Pisentia', 'Placidia', 'Plautia', 'Plinia', 'Plotia', 'Pollia', 'Pompeia', 'Pompilia', 'Pomponia', 'Pomptina', 'Pontia', 'Pontidia', 'Popidia', 'Portia', 'Postumia', 'Potitia', 'Ptolemocratia', 'Publicia', 'Pullo', 'Pupia', 'Quinctia', 'Quinctilia', 'Quirinia', 'Rabiria', 'Roberta', 'Rufia', 'Rufria', 'Rusonia', 'Rutilia', 'Sabucia', 'Sallustia', 'Salonia', 'Salvia', 'Scribonia', 'Secundia', 'Secundinia', 'Seia', 'Sempronia', 'Sennia', 'Sentia', 'Septimia', 'Sepunia', 'Sepurcia', 'Sergia', 'Sertoria', 'Servilia', 'Sestia', 'Sextia', 'Sextilia', 'Sidonia', 'Silia', 'Sittia', 'Socellia', 'Sornatia', 'Spuria', 'Statia', 'Statilia', 'Stephana', 'Stertinia', 'Suedia', 'Sulpicia', 'Tadia', 'Talmudia', 'Tanicia', 'Tedusia', 'Tertinia', 'Tettia', 'Tettidia', 'Tettiena', 'Theodora', 'Titia', 'Titiedia', 'Titinia', 'Trebatia', 'Trebellia', 'Treblana', 'Tremellia', 'Tuccia', 'Tullia', 'Turullia', 'Ulpia', 'Umbrenia', 'Umbria', 'Ummidia', 'Urgulania', 'Uulia', 'Vagennia', 'Vagionia', 'Vagnia', 'Valeria', 'Varia', 'Vassenia', 'Vatinia', 'Vedia', 'Velia', 'Verania', 'Verecundia', 'Vergilia', 'Verginia', 'Vesnia', 'Vesuvia', 'Veturia', 'Vibenia', 'Vibia', 'Vibidia', 'Victricia', 'Viducia', 'Vinicia', 'Vipsania', 'Vipstana', 'Virginia', 'Viria', 'Viridia', 'Visellia', 'Vitellia', 'Vitruvia', 'Volaginia', 'Volcatia', 'Volumnia', 'Volusena', 'Volusenna', 'Volusia', 'Vorenia'];
  const names2 = ['Abercius', 'Abito', 'Acacius', 'Acaunus', 'Achaicus', 'Acilianus', 'Adauctus', 'Adepphius', 'Adjutor', 'Adranos', 'Adventus', 'Aeacus', 'Aebutus', 'Aemilianus', 'Aetius', 'Afer', 'Agaptus', 'Agatopus', 'Agelastus', 'Agorix', 'Agricola', 'Agrippa', 'Agustalis', 'Ahala', 'Ahenobarbus', 'Albani', 'Albanus', 'Albinius', 'Albinus', 'Albucius', 'Alethius', 'Allectus', 'Aloysius', 'Aluredes', 'Alypius', 'Amandus', 'Amantius', 'Ambrosius', 'Amor', 'Amphion', 'Anatolius', 'Ancus', 'Andronicus', 'Angelus', 'Antius', 'Anullinus', 'Apelles', 'Apellinus', 'Aper', 'Apian', 'Apollonarius', 'Aponius', 'Aquila', 'Aquilius', 'Aquillius', 'Aratus', 'Arborius', 'Arcadius', 'Arcavius', 'Archarius', 'Arius', 'Armiger', 'Arminus', 'Arpagius', 'Arrianus', 'Arruntius', 'Aruns', 'Arvina', 'Asellio', 'Asina', 'Asprenas', 'Asprenus', 'Assanius', 'Audaios', 'Audens', 'Augendus', 'Augurius', 'Augurnus', 'Augustalis', 'Augustanus', 'Augustus', 'Auila', 'Aurelianus', 'Aurelius', 'Ausonius', 'Auspex', 'Auxentius', 'Auxientius', 'Auxilius', 'Avenarius', 'Aventinus', 'Avienus', 'Avitus', 'Balbillus', 'Balbus', 'Balduinus', 'Bambalio', 'Bamballio', 'Banquerius', 'Barbatus', 'Baro', 'Bassus', 'Bato', 'Belenus', 'Belisarius', 'Bellator', 'Belletor', 'Bellicus', 'Bellus', 'Bestia', 'Betto', 'Bibaculus', 'Bibulus', 'Bitucus', 'Blandus', 'Bodenius', 'Bolanus', 'Bonifatius', 'Bonosus', 'Bonus', 'Bradua', 'Britannicus', 'Brocchus', 'Bromidus', 'Bruccius', 'Brucetus', 'Bruscius', 'Brutus', 'Bubo', 'Buccio', 'Bulla', 'Burcanius', 'Burrus', 'Buteo', 'Caecilianus', 'Caecina', 'Caecus', 'Caelestius', 'Caelianus', 'Caelinus', 'Caelistis', 'Caepio', 'Caerellius', 'Caesar', 'Calacicus', 'Calatinus', 'Caldus', 'Calenus', 'Calerus', 'Caletus', 'Caligula', 'Callisunus', 'Calogerus', 'Calpornius', 'Calpurnianus', 'Calpurnis', 'Calvinus', 'Calvus', 'Camerarius', 'Camerius', 'Camillus', 'Campanus', 'Candidianus', 'Candidius', 'Candidus', 'Canio', 'Canisius', 'Cantaber', 'Capito', 'Capiton', 'Caprarius', 'Caracturus', 'Carantus', 'Carbo', 'Carinus', 'Carius', 'Carnifex', 'Carus', 'Casca', 'Cassianus', 'Castinus', 'Castorius', 'Castus', 'Catianus', 'Catilina', 'Cato', 'Catonius', 'Catullus', 'Catulus', 'Catus', 'Cecilianus', 'Celatus', 'Celer', 'Celsus', 'Cenaeus', 'Cencius', 'Censorinus', 'Censorius', 'Centumalus', 'Cerialis', 'Cerinthus', 'Cerularius', 'Cervianus', 'Cervidus', 'Cethegus', 'Chlorus', 'Christianus', 'Cicero', 'Cico', 'Cimber', 'Cinna', 'Cinnianus', 'Cita', 'Cittinus', 'Civilis', 'Clarus', 'Classicianus', 'Claudianus', 'Clemens', 'Clement', 'Clericus', 'Clodian', 'Clodianus', 'Cogitatus', 'Colias', 'Collatinus', 'Columbanus', 'Columella', 'Comes', 'Comitianus', 'Comitinus', 'Commidius', 'Commidus', 'Commius', 'Commodus', 'Concessus', 'Congrio', 'Constans', 'Constantius', 'Corbulo', 'Cordus', 'Cornix', 'Cornutus', 'Corvinus', 'Corvus', 'Cosmas', 'Cotentinus', 'Cotta', 'Crassus', 'Cremutius', 'Crescentius', 'Cresces', 'Crispian', 'Crispin', 'Crispus', 'Crito', 'Crotilo', 'Cucuphas', 'Culleolus', 'Cumanus', 'Cunobarrus', 'Cupitas', 'Curio', 'Cyprianus', 'Cyprias', 'Cyricus', 'Dacien', 'Dalmatius', 'Dama', 'Damasippus', 'Damasus', 'Damian', 'Dannicus', 'Dardanius', 'Dardanus', 'Decentius', 'Decianus', 'Decmitius', 'Decmus', 'Dexion', 'Dexippus', 'Didicus', 'Dignus', 'Dio', 'Diocletianus', 'Diocourides', 'Disertus', 'Docilinus', 'Docilus', 'Dolabella', 'Dominicus', 'Domitianus', 'Donatianus', 'Donatus', 'Donicus', 'Dorotheus', 'Draco', 'Drusillus', 'Drusus', 'Dubitatius', 'Dulcitius', 'Durio', 'Durus', 'Duvianus', 'Eborius', 'Eburnus', 'Ecdicius', 'Eclectus', 'Egbuttius', 'Egnatius', 'Elerius', 'Eliphas', 'Elpidius', 'Elvorix', 'Emeritus', 'Encratis', 'Ennecus', 'Ennius', 'Ennodius', 'Eonus', 'Epidianus', 'Epimachus', 'Epolonius', 'Erasinus', 'Esdras', 'Eudomius', 'Eudoxius', 'Eugenius', 'Eugenus', 'Eulogius', 'Eumenius', 'Eunapius', 'Euphemius', 'Eustacius', 'Eutherius', 'Evodius', 'Excingus', 'Exsupereus', 'Exuperantius', 'Exupertus', 'Faber', 'Fabianus', 'Fabillus', 'Fabricius', 'Facilis', 'Fadus', 'Fagus', 'Falco', 'Falconius', 'Falx', 'Famia', 'Familiaris', 'Farus', 'Fastidius', 'Faustillus', 'Faustinianus', 'Faustinius', 'Faustus', 'Faventinus', 'Felicissimus', 'Felissimus', 'Felix', 'Ferentinus', 'Ferreolius', 'Festus', 'Fidelis', 'Figulus', 'Fimbria', 'Fimus', 'Firminus', 'Firmus', 'Flaccus', 'Flavian', 'Flavianus', 'Flavillus', 'Flavinus', 'Florens', 'Florentius', 'Florianus', 'Florus', 'Forianus', 'Fortunatus', 'Fraucus', 'Fredisius', 'Frigidian', 'Fronius', 'Frontalis', 'Frontinus', 'Fronto', 'Fructosis', 'Frugi', 'Frugius', 'Frumentius', 'Fullofaudes', 'Fulvianus', 'Furius', 'Fuscinus', 'Fuscus', 'Gaianus', 'Gaius', 'Gala', 'Galarius', 'Galenus', 'Galerus', 'Gallio', 'Gallus', 'Galvisius', 'Garilianus', 'Gaurus', 'Gavros', 'Gavrus', 'Gelasius', 'Gellius', 'Gemellus', 'Geminianus', 'Generidus', 'Genesius', 'Genialis', 'Gennadius', 'Gerardus', 'Germanicus', 'Germanus', 'Gessius', 'Geta', 'Getha', 'Glabrio', 'Glaucia', 'Globulus', 'Gluvias', 'Glycia', 'Gordian', 'Gordianus', 'Gordio', 'Gorgonius', 'Gracchus', 'Gracilis', 'Gratian', 'Gratidianus', 'Grattus', 'Gregorius', 'Grumio', 'Gryllus', 'Gualterus', 'Habitus', 'Hadrianus', 'Hardalio', 'Haterius', 'Helvius', 'Herculius', 'Herenus', 'Herma', 'Hermina', 'Hesychius', 'Hiberus', 'Hilario', 'Hilaris', 'Hilarius', 'Hirpinius', 'Hirrus', 'Homullus', 'Honoratus', 'Horatius', 'Hortensis', 'Hortensius', 'Hortensus', 'Hosidius', 'Humilus', 'Hybrida', 'Iacomus', 'Ianuarius', 'Iavolenus', 'Igennus', 'Ignatius', 'Indaletius', 'Indus', 'Ingenuus', 'Ingenvinus', 'Iocundus', 'Iovinianus', 'Iovinus', 'Iovius', 'Irenaeus', 'Isatis', 'Isauricus', 'Italicus', 'Iuba', 'Iulian', 'Iulianus', 'Iuncinus', 'Iuncus', 'Iunianus', 'Iustianus', 'Iustinianus', 'Iustinus', 'Iustus', 'Iuvenlis', 'Ivmarus', 'Jacobi', 'Labienus', 'Lactantius', 'Laeca', 'Laenas', 'Laetinianus', 'Laevinus', 'Larcius', 'Lartius', 'Lateranus', 'Latinius', 'Laurentius', 'Leddicus', 'Lentullus', 'Lentulus', 'Leon', 'Leontius', 'Lepidus', 'Lepontus', 'Leptis', 'Libanius', 'Liberalis', 'Libo', 'Licinianus', 'Licinius', 'Ligur', 'Ligustinus', 'Limetanus', 'Linus', 'Litorius', 'Littera', 'Litumaris', 'Livianus', 'Livigenus', 'Longinus', 'Lorenzi', 'Lovernianus', 'Lovernius', 'Lucan', 'Lucanus', 'Lucceius', 'Lucci', 'Luccius', 'Luci', 'Lucianus', 'Lucilianus', 'Lucio', 'Lucioni', 'Lucius', 'Lucretius', 'Luctacus', 'Lucullus', 'Lunaris', 'Luonercus', 'Lupercus', 'Lupicinus', 'Lupinus', 'Lupis', 'Lurco', 'Lurio', 'Lutherius', 'Luti', 'Lutorius', 'Luzi', 'Maccalus', 'Macrinus', 'Macro', 'Macrobius', 'Mactator', 'Maecenus', 'Maecius', 'Magnentius', 'Magnus', 'Magunnus', 'Maius', 'Major', 'Majus', 'Malchus', 'Mallus', 'Maltinus', 'Mancinus', 'Manlius', 'Mansuetus', 'Marcallas', 'Marcellinus', 'Marcellus', 'Marcialis', 'Marcipor', 'Margarita', 'Marinianus', 'Marinus', 'Maritialis', 'Maritimus', 'Marius', 'Maro', 'Marsallas', 'Marsicus', 'Marsus', 'Marsyas', 'Martial', 'Martialis', 'Martianus', 'Martinus', 'Martius', 'Martyrius', 'Marullinus', 'Marullus', 'Maternus', 'Mathesius', 'Matho', 'Mauricius', 'Maursus', 'Maximian', 'Maximianus', 'Maximinius', 'Maximinus', 'Maximus', 'Medullinus', 'Megellus', 'Melissus', 'Melitus', 'Mellitus', 'Melus', 'Meminius', 'Memmius', 'Memor', 'Mercator', 'Mercurialis', 'Mercurinus', 'Merula', 'Messala', 'Messor', 'Metellus', 'Metilius', 'Metunus', 'Micianus', 'Mico', 'Micon', 'Milonius', 'Minervalis', 'Minianus', 'Minicianus', 'Moderatus', 'Molacus', 'Momus', 'Montanus', 'Montaus', 'Mordanticus', 'Mucianus', 'Muco', 'Muncius', 'Murena', 'Mus', 'Musa', 'Musicus', 'Mutilus', 'Mutius', 'Nabor', 'Naevius', 'Narcissus', 'Narses', 'Nasica', 'Naso', 'Natalinus', 'Natalis', 'Naucratius', 'Nazarius', 'Nectaridus', 'Nelius', 'Nemesianus', 'Nemnogenus', 'Neneus', 'Nennius', 'Nepos', 'Nero', 'Nertomarus', 'Nerva', 'Nicasius', 'Nicetius', 'Nigellus', 'Niger', 'Nigidius', 'Nigrinus', 'Niraemius', 'Nolus', 'Nonius', 'Noster', 'Novation', 'Novellius', 'Numerianus', 'Numonis', 'Oceanus', 'Octavian', 'Octavianus', 'Octobrianus', 'Olearius', 'Olennius', 'Olivarius', 'Olympicus', 'Opilio', 'Opimius', 'Opis', 'Optatus', 'Ordius', 'Orientalis', 'Orientius', 'Orissus', 'Orosius', 'Osterianus', 'Otho', 'Ovidus', 'Pacatianus', 'Pachomius', 'Pacuvianus', 'Paenula', 'Paetinus', 'Paetus', 'Palicamus', 'Pamphilius', 'Panaetius', 'Pansa', 'Pantensus', 'Pantera', 'Panthera', 'Papinian', 'Papus', 'Paratus', 'Parnesius', 'Pascentius', 'Pastor', 'Paterculus', 'Paternus', 'Patiens', 'Patricius', 'Paulinus', 'Paullus', 'Pavo', 'Pelagius', 'Pennus', 'Peregrinus', 'Perennis', 'Perpenna', 'Perperna', 'Pertacus', 'Pertinax', 'Petasius', 'Petreius', 'Petri', 'Petronax', 'Petrus', 'Philippus', 'Photius', 'Pictor', 'Pilatus', 'Pilus', 'Piscator', 'Piso', 'Pius', 'Placidus', 'Planta', 'Plautis', 'Plautius', 'Plautus', 'Pleminius', 'Pollienus', 'Pollio', 'Polus', 'Polybius', 'Pompolussa', 'Pomponius', 'Poplicola', 'Porcus', 'Porphyrius', 'Postumianus', 'Postumus', 'Potitus', 'Praetextus', 'Pratensis', 'Prilidianus', 'Primanus', 'Primulus', 'Primus', 'Prisca', 'Priscian', 'Priscillian', 'Priscillianus', 'Priscus', 'Probus', 'Processus', 'Proceus', 'Proculus', 'Procyon', 'Profuterius', 'Propertius', 'Protacius', 'Protus', 'Proxsimus', 'Publianus', 'Publicola', 'Publicus', 'Pudens', 'Pudentius', 'Pulcher', 'Pulcherius', 'Pullus', 'Pusinnus', 'Pustula', 'Quartinus', 'Quarto', 'Quatruus', 'Quentin', 'Quietus', 'Quintilianus', 'Quintilius', 'Quintillius', 'Quintillus', 'Quintus', 'Quiriac', 'Quiricus', 'Quirinalis', 'Ramio', 'Ramirus', 'Ravilla', 'Reburrus', 'Receptus', 'Rector', 'Rectus', 'Regillus', 'Reginus', 'Regulus', 'Remigius', 'Remus', 'Renatus', 'Respectus', 'Restitutus', 'Rex', 'Rhesus', 'Ripanus', 'Rogatus', 'Rogelius', 'Romanus', 'Romulianus', 'Romulus', 'Roscius', 'Rufinianus', 'Rufinus', 'Rufrius', 'Rufus', 'Rullus', 'Ruricius', 'Ruso', 'Rusticus', 'Rutilianus', 'Rutilius', 'Sabellius', 'Sabinianus', 'Sabinus', 'Sacerdos', 'Saenus', 'Salinator', 'Salonianus', 'Saloninus', 'Salonius', 'Salvian', 'Salvianus', 'Sanctus', 'Sandilianus', 'Sanga', 'Santori', 'Santoro', 'Sarimarcus', 'Sarrius', 'Sartorius', 'Saturninus', 'Saunio', 'Scaevola', 'Scapula', 'Scaro', 'Scato', 'Scaurus', 'Schlerus', 'Scipio', 'Scribonianus', 'Scrofa', 'Sebastianus', 'Secundas', 'Segestes', 'Sejanus', 'Sellic', 'Seneca', 'Senecianus', 'Senecio', 'Senilis', 'Senna', 'Senopianus', 'Sentius', 'Septimianus', 'Septimus', 'Serranus', 'Servanus', 'Servatius', 'Seuso', 'Severlinus', 'Severus', 'Sevso', 'Siculus', 'Sidonius', 'Sigilis', 'Silanus', 'Silesius', 'Silius', 'Silo', 'Silus', 'Silvanus', 'Similis', 'Simo', 'Simplex', 'Simplicianus', 'Siricus', 'Sisenna', 'Sisinnius', 'Sita', 'Sollemnis', 'Sorex', 'Sorio', 'Sosius', 'Sotericus', 'Soulinus', 'Sparticus', 'Spendius', 'Speratus', 'Statius', 'Stichus', 'Strabo', 'Sudrenus', 'Suilius', 'Sulinus', 'Sulla', 'Super', 'Superbus', 'Superstes', 'Sura', 'Surinus', 'Surius', 'Surus', 'Sylla', 'Sylvian', 'Sylvius', 'Symmachus', 'Symphorian', 'Sympronian', 'Synistor', 'Synnodus', 'Tacitus', 'Taenaris', 'Tancinus', 'Tanicus', 'Tarquinius', 'Tarsicius', 'Tasius', 'Tatian', 'Taurinus', 'Telesinus', 'Terenteianus', 'Tertius', 'Tertullian', 'Tertullianus', 'Tertulus', 'Tetricus', 'Tetullianus', 'Thrasea', 'Thurinus', 'Tiberillus', 'Tiberinus', 'Tibullus', 'Tiburs', 'Tiburtius', 'Ticinius', 'Titianus', 'Titillus', 'Torquatus', 'Toutius', 'Traianus', 'Trailus', 'Tranio', 'Tranquillus', 'Trebellius', 'Trebius', 'Trebonianus', 'Trebonius', 'Tremellius', 'Tremerus', 'Tremorinus', 'Trenico', 'Trenus', 'Triarius', 'Trifer', 'Triferus', 'Trimalchio', 'Trogus', 'Trupo', 'Tuccianus', 'Tuditanus', 'Tullas', 'Tullius', 'Turibius', 'Turpilianus', 'Turpilias', 'Turpilinus', 'Tuticanus', 'Tutor', 'Typhoeus', 'Tyranus', 'Ulfila', 'Ulixes', 'Ulpianus', 'Umbonius', 'Urbicus', 'Ursacius', 'Ursinus', 'Ursus', 'Uticensis', 'Vala', 'Valens', 'Valentinian', 'Valentinus', 'Valerian', 'Valerianus', 'Valgus', 'Varialus', 'Varro', 'Varus', 'Vatia', 'Vedrix', 'Vegetius', 'Velius', 'Velus', 'Venantius', 'Venator', 'Ventor', 'Venustinius', 'Vepgenus', 'Veranius', 'Verecundus', 'Vergilius', 'Verinus', 'Verres', 'Verrucosis', 'Verullus', 'Verulus', 'Verus', 'Vespasianus', 'Vespillo', 'Vestinus', 'Vestorius', 'Vetranio', 'Vettonianus', 'Veturius', 'Viator', 'Vibennis', 'Vibius', 'Vibullius', 'Victor', 'Victorinus', 'Victricius', 'Vincentius', 'Vindex', 'Vinicianus', 'Vipsanius', 'Virginius', 'Viridio', 'Virilis', 'Virnius', 'Vitalinus', 'Vitalion', 'Vitalis', 'Vitoricus', 'Vitulus', 'Vitus', 'Vocula', 'Volturcius', 'Volusenus', 'Volusianus', 'Vonones', 'Vopiscus', 'Voteporix', 'Vulso', 'Zeno', 'Zoilus', 'Zosimus'];
  const names1 = type === 1 ? namesFemale : namesMale;
  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd1 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd1]}`;
    return names;
  }
}
