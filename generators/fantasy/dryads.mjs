import sample from 'lodash/sample';

export default function dryads() {
  let names;
  const nm1 = ['Aba', 'Abalise', 'Abeia', 'Acalephia', 'Acatea', 'Achaeia', 'Achilia', 'Acotali', 'Actaea', 'Actaia', 'Actalphia', 'Actina', 'Admete', 'Adomeite', 'Adrasteia', 'Aegenia', 'Aegina', 'Aeleora', 'Aethelsa', 'Aethisia', 'Aethria', 'Aethusa', 'Aia', 'Aigale', 'Aigle', 'Aiglise', 'Akirea', 'Akiria', 'Akitai', 'Akraia', 'Aktaie', 'Aktarise', 'Alacine', 'Alcinne', 'Alcinoe', 'Alcinohre', 'Alciphei', 'Alcippe', 'Aleiki', 'Aleina', 'Alethrise', 'Alexidoe', 'Alexiroe', 'Alexise', 'Alke', 'Alokea', 'Alsira', 'Amalithea', 'Amalthea', 'Amalthelia', 'Amatheia', 'Ambirose', 'Ambirosi', 'Ambrosia', 'Amete', 'Amethelia', 'Amiphite', 'Amithelia', 'Amphilio', 'Amphinome', 'Amphinomis', 'Amphiomise', 'Amphiris', 'Amphiro', 'Amphise', 'Amphite', 'Amphithoe', 'Amphitrite', 'Amymone', 'Amymonei', 'Anithea', 'Anithraci', 'Anphia', 'Anteopi', 'Anthe', 'Anthracia', 'Anthrecea', 'Antiope', 'Antiropheu', 'Anuthei', 'Anymine', 'Aora', 'Aphithea', 'Arasine', 'Arastea', 'Arastellia', 'Arethisia', 'Arethiusei', 'Arethusa', 'Aria', 'Aroara', 'Arsinoe', 'Arsinolphi', 'Asea', 'Asia', 'Asitrise', 'Asteli', 'Astelle', 'Astellodia', 'Asteodia', 'Asteria', 'Asterodia', 'Asterope', 'Astirise', 'Astrina', 'Astris', 'Astropea', 'Atehrea', 'Atiliana', 'Atlantia', 'Atlentea', 'Axichis', 'Axioche', 'Axiphiche', 'Bateia', 'Bateilla', 'Batellia', 'Bolina', 'Bolionei', 'Bollinea', 'Bormea', 'Brentisa', 'Bretiax', 'Brettia', 'Bromia', 'Brumisia', 'Caigenia', 'Caliadne', 'Calidanea', 'Caligeina', 'Calipsyse', 'Calirianne', 'Caliroesis', 'Calligenia', 'Calliroe', 'Calonia', 'Calypise', 'Calypso', 'Canea', 'Canossila', 'Caronise', 'Castalia', 'Casteilise', 'Castelis', 'Celaeno', 'Celano', 'Celareino', 'Cerionis', 'Chaicilo', 'Chamine', 'Chania', 'Chanilla', 'Charellis', 'Chariclo', 'Chilane', 'Chione', 'Chryseis', 'Chrysesis', 'Chrysise', 'Chrysopeleia', 'Chrysoplei', 'Chyseleia', 'Cirilha', 'Cirohsa', 'Cirrha', 'Claironei', 'Clanea', 'Clonia', 'Clymene', 'Clymenti', 'Clymoni', 'Cnassea', 'Cnossia', 'Cordelia', 'Coridella', 'Coronis', 'Corstelis', 'Creamis', 'Creasi', 'Crephusa', 'Cretheis', 'Creusa', 'Criamisa', 'Crimisa', 'Crothesis', 'Crotheise', 'Daeira', 'Daleira', 'Dalleira', 'Danais', 'Danalise', 'Danallis', 'Daphine', 'Daphines', 'Daphne', 'Dercetis', 'Dexamene', 'Dexane', 'Deximenis', 'Diapatri', 'Digonia', 'Diogenia', 'Diolenia', 'Diomis', 'Dione', 'Dionele', 'Diopatra', 'Dopiara', 'Dorceti', 'Dorcetise', 'Doris', 'Dorissis', 'Doryse', 'Echellia', 'Echemeia', 'Echemellia', 'Echise', 'Echo', 'Ecirane', 'Ecole', 'Ecrintise', 'Edothei', 'Edothise', 'Egeria', 'Egoria', 'Eidothea', 'Eidyia', 'Electria', 'Elektra', 'Eletea', 'Elidia', 'Elidy', 'Elimenise', 'Elinoire', 'Elophis', 'Eludora', 'Eludore', 'Eluno', 'Elunore', 'Endeis', 'Enideise', 'Enodeis', 'Ephemei', 'Eralato', 'Erato', 'Eriato', 'Eriophai', 'Eriphia', 'Eriphise', 'Eryone', 'Ethemea', 'Ethimei', 'Ethimelle', 'Eucrante', 'Eudora', 'Eulimene', 'Eulimenei', 'Eunoe', 'Eunoite', 'Eunosise', 'Eunoste', 'Eupheme', 'Euphymes', 'Eurynome', 'Eurynomile', 'Euthami', 'Euthemia', 'Euthemilia', 'Evadne', 'Evidone', 'Evodine', 'Galaphaura', 'Galatea', 'Galaxaura', 'Galeine', 'Galene', 'Galine', 'Galixera', 'Gatalea', 'Glatealle', 'Hairiko', 'Halia', 'Halira', 'Halisa', 'Hariklo', 'Harilora', 'Harimoni', 'Harmeni', 'Harmonia', 'Harphinia', 'Harpina', 'Harponi', 'Hegetoria', 'Heila', 'Helgoria', 'Helia', 'Helike', 'Helikei', 'Heliria', 'Helleori', 'Holikei', 'Hylliphis', 'Hyllis', 'Hyllisei', 'Iaira', 'Ianassa', 'Ianeira', 'Ianisse', 'Ianithise', 'Ianthe', 'Iaosise', 'Iasis', 'Ida', 'Idahria', 'Idaia', 'Idaise', 'Idaphise', 'Ideia', 'Idophia', 'Ihrone', 'Ilaira', 'Ilanaera', 'Ilanara', 'Ilara', 'Ileneira', 'Ilo', 'Ione', 'Iosise', 'Iphanthei', 'Iphise', 'Isameine', 'Ismanise', 'Ismene', 'Isonei', 'Kaephei', 'Kahliste', 'Kaliphaia', 'Kalise', 'Kalleira', 'Kallianassa', 'Kallianeira', 'Kallianisse', 'Kallinei', 'Kalliphae', 'Kalliphaeia', 'Kalliste', 'Kalyphise', 'Kalypise', 'Kalypso', 'Kapheira', 'Kaphelirea', 'Karilya', 'Kariye', 'Karya', 'Kelaria', 'Kelleia', 'Kerkeis', 'Kerleise', 'Kerokeis', 'Kianise', 'Kimopola', 'Kiseise', 'Kisseis', 'Kissise', 'Klaia', 'Kleadorise', 'Kleeia', 'Kleia', 'Kleodora', 'Kleokhareia', 'Kleora', 'Kleorei', 'Klepheia', 'Klokharei', 'Klymeina', 'Klymene', 'Klymentise', 'Klyphotise', 'Klytea', 'Klytie', 'Kylomopeilia', 'Kymopoleia', 'Kyreanes', 'Kyrene', 'Kyrenise', 'Lamedesa', 'Lametisa', 'Lamiphelia', 'Lampetia', 'Laomedeia', 'Laripha', 'Larishae', 'Larissa', 'Laromedia', 'Lephice', 'Leuce', 'Leuciphi', 'Leuciphia', 'Leucippe', 'Leucise', 'Libeias', 'Liberi', 'Libethrias', 'Lilaia', 'Lilias', 'Liliope', 'Limnoreia', 'Limnorelia', 'Limorei', 'Liriope', 'Liropei', 'Lollaia', 'Lysianassa', 'Lysiasse', 'Lysiniassi', 'Maia', 'Maira', 'Mairia', 'Malia', 'Malilia', 'Malyra', 'Marilia', 'Marina', 'Mariphine', 'Marynae', 'Medeia', 'Meilira', 'Meilitae', 'Melaenia', 'Melaina', 'Melaniphi', 'Melanippe', 'Melia', 'Melinai', 'Meliphia', 'Melita', 'Melite', 'Mellaniphe', 'Melliata', 'Melorope', 'Melphite', 'Meltise', 'Mendeis', 'Menideis', 'Menidise', 'Meniphei', 'Meniphis', 'Menippe', 'Menodiace', 'Menodice', 'Menolorice', 'Mephite', 'Merily', 'Merope', 'Merophise', 'Meryl', 'Merylle', 'Messeis', 'Messelise', 'Messise', 'Metioche', 'Metiophei', 'Metiphoche', 'Metis', 'Metisis', 'Mideia', 'Midelia', 'Minithe', 'Minthe', 'Monithei', 'Morea', 'Morelia', 'Morella', 'Moria', 'Morilia', 'Myressei', 'Myritoesa', 'Myrtoessa', 'Mysteise', 'Mystis', 'Mystise', 'Nacoile', 'Nacole', 'Naicolei', 'Naise', 'Nasille', 'Nasiphe', 'Neaira', 'Neamertise', 'Neda', 'Nedali', 'Nekaia', 'Nelaira', 'Nelairi', 'Nelida', 'Nemea', 'Nemelphia', 'Nementia', 'Nemertes', 'Nemertise', 'Neomerilis', 'Neomeris', 'Neomorise', 'Nepheilise', 'Nephele', 'Nephilis', 'Nerin', 'Nerince', 'Nerinphe', 'Nerisei', 'Nerisha', 'Nerissa', 'Nesaea', 'Nesallea', 'Nesilia', 'Nikaia', 'Nikalia', 'Nixie', 'Nixilei', 'Nomia', 'Nomilia', 'Nomira', 'Nonakris', 'Nonakryse', 'Noniarise', 'Nylisa', 'Nysa', 'Nysali', 'Nyxie', 'Oenoe', 'Oinoie', 'Oinone', 'Oiolyka', 'Oiolyphei', 'Okyrhoe', 'Olenoe', 'Olenore', 'Olinophe', 'Olione', 'Oluania', 'Olurainise', 'Olyrei', 'Ophinoie', 'Ophiolyse', 'Ophyroe', 'Opiris', 'Opis', 'Opysis', 'Oreilhya', 'Oreithyia', 'Orethylia', 'Orinia', 'Oriphine', 'Oriphone', 'Ornia', 'Oronia', 'Orphne', 'Orseis', 'Orselise', 'Orsenise', 'Ortogise', 'Ortygia', 'Ortylia', 'Othreis', 'Othrephis', 'Othresise', 'Ourania', 'Palacia', 'Paleine', 'Pallene', 'Panelophi', 'Paphia', 'Paphila', 'Paphilia', 'Pareia', 'Pareila', 'Parila', 'Pasithea', 'Pasithelle', 'Pasithoe', 'Pasthera', 'Pasthilei', 'Penelope', 'Penolopei', 'Pereisis', 'Peria', 'Periboia', 'Periola', 'Periphoia', 'Perseis', 'Perseisise', 'Petiare', 'Petira', 'Petoria', 'Petra', 'Petraea', 'Petrallea', 'Phaethosia', 'Phaethusa', 'Phaino', 'Phaio', 'Phaisyle', 'Phalinio', 'Phalino', 'Phalisyle', 'Phanethusi', 'Phanio', 'Phaphino', 'Phebei', 'Phelousa', 'Pherolusei', 'Pherousa', 'Phiale', 'Phialyra', 'Philia', 'Philiale', 'Philiasei', 'Philise', 'Philyra', 'Philyrea', 'Phiolle', 'Phiriaxi', 'Phisylei', 'Phoebe', 'Pholebis', 'Pholora', 'Phonia', 'Phosithonia', 'Phosthonia', 'Phrixa', 'Phrixia', 'Physadeia', 'Physadelia', 'Physali', 'Pialleni', 'Piareili', 'Piasithole', 'Pilyphei', 'Pireini', 'Pirene', 'Pirenei', 'Plataea', 'Platalea', 'Plateila', 'Pleidone', 'Pleione', 'Plephione', 'Polhyno', 'Polixio', 'Polphymino', 'Polydiora', 'Polydora', 'Polyhymno', 'Polynome', 'Polynomise', 'Polyphe', 'Polyphise', 'Polyphoe', 'Polyxio', 'Polyxo', 'Pomedosa', 'Pontomedise', 'Pontomedousa', 'Pontoporeia', 'Pontoreisa', 'Pontropeira', 'Poreile', 'Praxithea', 'Praxithelia', 'Praxithise', 'Promidea', 'Prosymeina', 'Prosymina', 'Prosymna', 'Protomedea', 'Protomedelia', 'Psalacantha', 'Psalicanthise', 'Psamaphine', 'Psamathe', 'Psamiaphe', 'Pteili', 'Ptelea', 'Ptelera', 'Rhaenise', 'Rhalanise', 'Rhanis', 'Rhene', 'Rhenei', 'Rhenelis', 'Rhephila', 'Rhetia', 'Rhetila', 'Rhodia', 'Rhodiophe', 'Rhodisa', 'Rhodope', 'Rhodophine', 'Rhodys', 'Sabeana', 'Sabrina', 'Sabrinei', 'Sagariphis', 'Sagaritis', 'Sagitise', 'Salamis', 'Salaphise', 'Salomise', 'Samia', 'Samilea', 'Samisia', 'Sapharnia', 'Savarinea', 'Savarna', 'Selestia', 'Semestra', 'Semistrea', 'Silopei', 'Siniophe', 'Sinope', 'Solise', 'Sose', 'Soseilis', 'Speiliro', 'Speio', 'Spelino', 'Steiropi', 'Steliope', 'Sterope', 'Stirophia', 'Stophila', 'Strophia', 'Sylilis', 'Syllis', 'Sylphise', 'Symaithis', 'Symithia', 'Symithise', 'Synallasis', 'Synallia', 'Synallis', 'Syrianix', 'Syrinix', 'Syrinx', 'Talila', 'Talula', 'Tanagra', 'Taniara', 'Tanigrei', 'Taphiula', 'Teledice', 'Teledike', 'Teleidice', 'Telidaki', 'Telodice', 'Telphedice', 'Tereine', 'Terenei', 'Terephine', 'Thaleia', 'Thalenia', 'Thalice', 'Theamise', 'Theanole', 'Theanore', 'Thebe', 'Thebesi', 'Theisi', 'Theliphe', 'Thelphise', 'Themis', 'Themise', 'Themistae', 'Themisto', 'Themistoli', 'Theonoe', 'Thero', 'Theroli', 'Therolis', 'Thesipha', 'Thespia', 'Thespilia', 'Thetis', 'Thiosa', 'Thisbe', 'Thisei', 'Thisobei', 'Tholosa', 'Thoniphe', 'Thoosa', 'Thosei', 'Thousa', 'Thousia', 'Thrasise', 'Thrassa', 'Thronie', 'Thronise', 'Throssia', 'Thyia', 'Thyliase', 'Thyxia', 'Trilleia', 'Triteia', 'Tritelipha', 'Tykhe', 'Tykiphe', 'Tyriphe', 'Xaniphe', 'Xanthe', 'Zelipea', 'Zephixo', 'Zeuxipia', 'Zeuxippe', 'Zeuxise', 'Zeuxoli'];
  const nm2 = ['Abelia', 'Abeliophy', 'Abies', 'Absinthis', 'Acalypha', 'Achillea', 'Acoris', 'Actaea', 'Acuminata', 'Adina', 'Aemula', 'Aerea', 'Agarista', 'Agava', 'Ageratina', 'Ailanthis', 'Ajuga', 'Akebia', 'Alata', 'Alatum', 'Alba', 'Albizia', 'Albuca', 'Alcea', 'Alchemilla', 'Aletris', 'Alisma', 'Allamanda', 'Allium', 'Alnifolia', 'Aloysia', 'Amabalis', 'Amabilis', 'Amara', 'Amaranthis', 'Amaryllis', 'Amblyantha', 'Amianthium', 'Ammi', 'Amorpha', 'Amsonia', 'Amuremsis', 'Amurense', 'Anaphalis', 'Anchusa', 'Andromeda', 'Anemone', 'Anemonella', 'Anethum', 'Angelica', 'Angelonia', 'Angularis', 'Anisatum', 'Anisum', 'Anomala', 'Aparine', 'Aphylla', 'Aquilegia', 'Aralia', 'Araujia', 'Arborea', 'Ardisia', 'Arenaria', 'Arenaris', 'Arethusa', 'Aristolochia', 'Aristosa', 'Armeria', 'Aromatica', 'Aronia', 'Artemesia', 'Artemisia', 'Arundinaera', 'Asari', 'Asarifolia', 'Asimina', 'Asperata', 'Aster', 'Aucuparia', 'Auricoma', 'Aurinia', 'Avellana', 'Axillaris', 'Azolla', 'Azurea', 'Babiana', 'Baccata', 'Balsamina', 'Balsamita', 'Baumea', 'Bealei', 'Begonia', 'Belamcanda', 'Belladonna', 'Bellis', 'Berberis', 'Bergenia', 'Bessera', 'Bignonia', 'Bilireana', 'Biloba', 'Blanda', 'Bletilla', 'Borbonia', 'Brasenia', 'Brassica', 'Briza', 'Brodiaea', 'Bumelia', 'Bungeana', 'Caerulea', 'Calamis', 'Calendula', 'Calomis', 'Caltha', 'Camara', 'Camassia', 'Canescens', 'Canna', 'Cannabinum', 'Capillaris', 'Caprea', 'Carvi', 'Carya', 'Cassia', 'Cassine', 'Cedrela', 'Celastris', 'Celosia', 'Celsa', 'Celtis', 'Cembra', 'Cerifera', 'Chelone', 'Ciliaris', 'Cinerea', 'Claytonia', 'Cleome', 'Clethra', 'Clifonia', 'Clivia', 'Conferta', 'Conradina', 'Copallina', 'Corda', 'Cordata', 'Cordifolia', 'Cornuta', 'Coronaria', 'Crenata', 'Cuphea', 'Cydonia', 'Cylindrica', 'Cymosa', 'Cyrilla', 'Daelbata', 'Dahlia', 'Damascena', 'Dammeri', 'Danae', 'Datura', 'Davidia', 'Decumaria', 'Delavayi', 'Dentala', 'Dentaria', 'Dentata', 'Deodara', 'Deparia', 'Dianthis', 'Diascia', 'Didyma', 'Diodia', 'Dioica', 'Dionaea', 'Diphylla', 'Diptera', 'Drosera', 'Duranta', 'Dyssodia', 'Eacharis', 'Ecrosia', 'Edulis', 'Ehretia', 'Eichornia', 'Elata', 'Elliptica', 'Ensata', 'Eophorbia', 'Epigaea', 'Erosin', 'Esula', 'Eucomis', 'Eucommia', 'Euptellea', 'Exima', 'Farinosa', 'Fatsia', 'Fauriei', 'Ferox', 'Festuca', 'Flammula', 'Fragaria', 'Freseri', 'Fuchsia', 'Gaura', 'Gazania', 'Geminata', 'Genista', 'Gentiana', 'Gepatica', 'Gerardia', 'Gerbera', 'Germanica', 'Ginnala', 'Gloriosa', 'Goldiana', 'Gordonia', 'Gratiola', 'Habenaria', 'Halesia', 'Halliana', 'Hedera', 'Helenium', 'Hesperis', 'Hirsuta', 'Hispida', 'Hovenia', 'Humile', 'Iberis', 'Ilex', 'Incana', 'Indica', 'Innoxia', 'Inula', 'Ipomea', 'Iris', 'Ixia', 'Julianae', 'Kalmia', 'Krigia', 'Laevis', 'Lagenaria', 'Lantana', 'Latifolia', 'Lavalleri', 'Lavandula', 'Liliago', 'Liliflora', 'Lilifolia', 'Lilium', 'Linaria', 'Lindera', 'Lineare', 'Lizei', 'Luciliae', 'Lutea', 'Lydia', 'Magnolia', 'Mahonia', 'Mariana', 'Matelea', 'Meadia', 'Mediola', 'Melia', 'Melica', 'Mentha', 'Metensia', 'Milla', 'Moraea', 'Myrica', 'Nandina', 'Nassella', 'Neillia', 'Nemesia', 'Nepeta', 'Nepta', 'Nerine', 'Neviusia', 'Nitida', 'Nivalis', 'Nobile', 'Nubigena', 'Nyssa', 'Odora', 'Odorata', 'Oenethera', 'Oleracea', 'Ovalis', 'Ovata', 'Paeonia', 'Pallida', 'Pandorea', 'Patula', 'Pavia', 'Pendula', 'Pennata', 'Perenne', 'Perilla', 'Persea', 'Persica', 'Phacelia', 'Pileata', 'Pinnata', 'Piperita', 'Primula', 'Prunella', 'Ptelea', 'Pteris', 'Pumila', 'Punica', 'Punicea', 'Pyracantha', 'Pyrola', 'Pyrrosia', 'Pyrus', 'Quinata', 'Ramnella', 'Ravannae', 'Ravennae', 'Rhexia', 'Robinia', 'Rosa', 'Rosea', 'Rostrata', 'Rubella', 'Rubra', 'Ruellia', 'Russelia', 'Ruta', 'Sabatia', 'Sabina', 'Sagittaria', 'Salicaria', 'Salmiana', 'Sanguinea', 'Santolina', 'Sarracenia', 'Scaevola', 'Scariosa', 'Scilla', 'Sclarea', 'Selloana', 'Serissa', 'Serotina', 'Serrata', 'Serrula', 'Serrulata', 'Sessile', 'Silene', 'Sinata', 'Sinense', 'Solitaria', 'Sororia', 'Spiraea', 'Stellaria', 'Sutera', 'Sylvatica', 'Sylvestris', 'Syriaca', 'Syringa', 'Taeda', 'Tamarix', 'Tecomaria', 'Thalia', 'Tiarella', 'Tilia', 'Tinctoria', 'Tipularia', 'Tithonia', 'Tobira', 'Torenia', 'Tricorne', 'Tulipa', 'Typha', 'Typhina', 'Valeriana', 'Verbana', 'Veris', 'Verna', 'Vilarri', 'Villosa', 'Villosis', 'Viola', 'Viticella', 'Wallerana', 'Webbiana', 'Wisteria', 'Xyris', 'Zinnia', 'Zizia'];
  const nm3 = ['Aconi', 'Aconis', 'Aconite', 'Alderis', 'Aldis', 'Aldoris', 'Almonia', 'Almonis', 'Almoris', 'Ambrose', 'Ambrosia', 'Ambrosis', 'Annae', 'Annoris', 'Apricis', 'Apricoria', 'Apricoris', 'Arfajia', 'Arfajis', 'Ash', 'Ashae', 'Ashia', 'Azolata', 'Azolla', 'Azollae', 'Azollava', 'Baeye', 'Bambolis', 'Bambula', 'Barbara', 'Barbarea', 'Barbarina', 'Bay', 'Baye', 'Belladonna', 'Belladophi', 'Belladoris', 'Berrilis', 'Berrypha', 'Birches', 'Birchina', 'Birchis', 'Boaba', 'Boababis', 'Boabaya', 'Brier', 'Brierina', 'Brieris', 'Brierra', 'Buxia', 'Buxiana', 'Buxinae', 'Buxise', 'Cinnamae', 'Cinnamis', 'Cinnamonia', 'Cinnamoris', 'Clovae', 'Clovara', 'Clovea', 'Clovelia', 'Cloverae', 'Cloverica', 'Cloveris', 'Cornelae', 'Cornelia', 'Cornelis', 'Corneloris', 'Corydalae', 'Corydalis', 'Corydoris', 'Corydosia', 'Cottollis', 'Cottonae', 'Cottonia', 'Daisae', 'Daisia', 'Daisis', 'Daisy', 'Dindelia', 'Dindellis', 'Dindora', 'Dindoris', 'Duscae', 'Dusceliphe', 'Duscellis', 'Duscenia', 'Eucalia', 'Eucaloris', 'Eucalyphis', 'Eucalyptia', 'Eucolonia', 'Eytelia', 'Eyteliana', 'Eytelira', 'Eytelis', 'Fellelone', 'Fennelis', 'Fennelore', 'Fenneltis', 'Ferne', 'Fernia', 'Fernis', 'Fernoris', 'Fernosia', 'Flaxae', 'Flaxia', 'Flaxoris', 'Gallae', 'Gallia', 'Galloris', 'Gallosia', 'Galya', 'Gargetha', 'Gargetine', 'Gargetis', 'Geranae', 'Geranara', 'Gerania', 'Geranis', 'Geranoris', 'Gillia', 'Gilliphae', 'Gilliphis', 'Haldi', 'Haldia', 'Haldine', 'Haldiphe', 'Haldis', 'Harlequine', 'Harlequinia', 'Harlequinis', 'Helleboris', 'Hellobolis', 'Hellobonia', 'Hellobora', 'Hempae', 'Hempe', 'Hempea', 'Hempera', 'Hemponia', 'Hibibiscra', 'Hibiscae', 'Hibiscea', 'Hibiscis', 'Hollae', 'Hollia', 'Hollis', 'Holly', 'Iphy', 'Ivis', 'Ivy', 'Juniper', 'Junipera', 'Juniperis', 'Junipher', 'Laurel', 'Laurelena', 'Laurelia', 'Laurelis', 'Laurenia', 'Lavendea', 'Lavender', 'Lavendera', 'Lavenderis', 'Lavendia', 'Lavendoris', 'Lilacia', 'Lilacoris', 'Lilea', 'Lilia', 'Lilise', 'Lily', 'Lotus', 'Lotusia', 'Mahoganaea', 'Mahoganea', 'Mahogania', 'Mahoganis', 'Mapelia', 'Mapelis', 'Mapeloris', 'Maple', 'Nettala', 'Nettelia', 'Nettelis', 'Oake', 'Oakia', 'Olivae', 'Olive', 'Olivea', 'Olivis', 'Osage', 'Osagea', 'Osagia', 'Osegina', 'Pellitea', 'Pellitoria', 'Pellitorina', 'Pellitoris', 'Pinea', 'Pinera', 'Poinsenia', 'Poinsetia', 'Poinsetta', 'Poinsettis', 'Poppinia', 'Poppiri', 'Poppiris', 'Poppy', 'Pudina', 'Pudinaea', 'Pudinea', 'Pudinera', 'Rose', 'Rosea', 'Rosemanis', 'Rosemarinia', 'Rosemaris', 'Rosemary', 'Rosenea', 'Rosenia', 'Roseris', 'Saffronea', 'Saffronia', 'Saffronis', 'Sage', 'Sanguinea', 'Sanguinia', 'Sanguinis', 'Sycamonia', 'Sycamorea', 'Sycamoris', 'Tansae', 'Tansea', 'Tansya', 'Tasselia', 'Tasselis', 'Tasseloris', 'Thymae', 'Thyme', 'Thymea', 'Trillia', 'Trilliaris', 'Trillioris', 'Trillis', 'Tulip', 'Tulipea', 'Tuliphis', 'Willoa', 'Willonia', 'Willoris', 'Willow', 'Zinnia'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 2) {
      names = sample(nm1);
    } else if (i < 6) {
      names = sample(nm2);
    } else {
      names = sample(nm3);
    }
    return names;
  }
}
