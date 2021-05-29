import { sample } from 'lodash-es';

export default function nymphs() {
  let names;
  const nm1 = ['Aba', 'Abalise', 'Abeia', 'Acalephia', 'Acatea', 'Achaeia', 'Achilia', 'Acotali', 'Actaea', 'Actaia', 'Actalphia', 'Actina', 'Admete', 'Adomeite', 'Adrasteia', 'Aegenia', 'Aegina', 'Aeleora', 'Aethelsa', 'Aethisia', 'Aethria', 'Aethusa', 'Aia', 'Aigale', 'Aigle', 'Aiglise', 'Akirea', 'Akiria', 'Akitai', 'Akraia', 'Aktaie', 'Aktarise', 'Alacine', 'Alcinne', 'Alcinoe', 'Alcinohre', 'Alciphei', 'Alcippe', 'Aleiki', 'Aleina', 'Alethrise', 'Alexidoe', 'Alexiroe', 'Alexise', 'Alke', 'Alokea', 'Alsira', 'Amalithea', 'Amalthea', 'Amalthelia', 'Amatheia', 'Ambirose', 'Ambirosi', 'Ambrosia', 'Amete', 'Amethelia', 'Amiphite', 'Amithelia', 'Amphilio', 'Amphinome', 'Amphinomis', 'Amphiomise', 'Amphiris', 'Amphiro', 'Amphise', 'Amphite', 'Amphithoe', 'Amphitrite', 'Amymone', 'Amymonei', 'Anithea', 'Anithraci', 'Anphia', 'Anteopi', 'Anthe', 'Anthracia', 'Anthrecea', 'Antiope', 'Antiropheu', 'Anuthei', 'Anymine', 'Aora', 'Aphithea', 'Arasine', 'Arastea', 'Arastellia', 'Arethisia', 'Arethiusei', 'Arethusa', 'Aria', 'Aroara', 'Arsinoe', 'Arsinolphi', 'Asea', 'Asia', 'Asitrise', 'Asteli', 'Astelle', 'Astellodia', 'Asteodia', 'Asteria', 'Asterodia', 'Asterope', 'Astirise', 'Astrina', 'Astris', 'Astropea', 'Atehrea', 'Atiliana', 'Atlantia', 'Atlentea', 'Axichis', 'Axioche', 'Axiphiche', 'Bateia', 'Bateilla', 'Batellia', 'Bolina', 'Bolionei', 'Bollinea', 'Bormea', 'Brentisa', 'Bretiax', 'Brettia', 'Bromia', 'Brumisia', 'Caigenia', 'Caliadne', 'Calidanea', 'Caligeina', 'Calipsyse', 'Calirianne', 'Caliroesis', 'Calligenia', 'Calliroe', 'Calonia', 'Calypise', 'Calypso', 'Canea', 'Canossila', 'Caronise', 'Castalia', 'Casteilise', 'Castelis', 'Celaeno', 'Celano', 'Celareino', 'Cerionis', 'Chaicilo', 'Chamine', 'Chania', 'Chanilla', 'Charellis', 'Chariclo', 'Chilane', 'Chione', 'Chryseis', 'Chrysesis', 'Chrysise', 'Chrysopeleia', 'Chrysoplei', 'Chyseleia', 'Cirilha', 'Cirohsa', 'Cirrha', 'Claironei', 'Clanea', 'Clonia', 'Clymene', 'Clymenti', 'Clymoni', 'Cnassea', 'Cnossia', 'Cordelia', 'Coridella', 'Coronis', 'Corstelis', 'Creamis', 'Creasi', 'Crephusa', 'Cretheis', 'Creusa', 'Criamisa', 'Crimisa', 'Crothesis', 'Crotheise', 'Daeira', 'Daleira', 'Dalleira', 'Danais', 'Danalise', 'Danallis', 'Daphine', 'Daphines', 'Daphne', 'Dercetis', 'Dexamene', 'Dexane', 'Deximenis', 'Diapatri', 'Digonia', 'Diogenia', 'Diolenia', 'Diomis', 'Dione', 'Dionele', 'Diopatra', 'Dopiara', 'Dorceti', 'Dorcetise', 'Doris', 'Dorissis', 'Doryse', 'Echellia', 'Echemeia', 'Echemellia', 'Echise', 'Echo', 'Ecirane', 'Ecole', 'Ecrintise', 'Edothei', 'Edothise', 'Egeria', 'Egoria', 'Eidothea', 'Eidyia', 'Electria', 'Elektra', 'Eletea', 'Elidia', 'Elidy', 'Elimenise', 'Elinoire', 'Elophis', 'Eludora', 'Eludore', 'Eluno', 'Elunore', 'Endeis', 'Enideise', 'Enodeis', 'Ephemei', 'Eralato', 'Erato', 'Eriato', 'Eriophai', 'Eriphia', 'Eriphise', 'Eryone', 'Ethemea', 'Ethimei', 'Ethimelle', 'Eucrante', 'Eudora', 'Eulimene', 'Eulimenei', 'Eunoe', 'Eunoite', 'Eunosise', 'Eunoste', 'Eupheme', 'Euphymes', 'Eurynome', 'Eurynomile', 'Euthami', 'Euthemia', 'Euthemilia', 'Evadne', 'Evidone', 'Evodine', 'Galaphaura', 'Galatea', 'Galaxaura', 'Galeine', 'Galene', 'Galine', 'Galixera', 'Gatalea', 'Glatealle', 'Hairiko', 'Halia', 'Halira', 'Halisa', 'Hariklo', 'Harilora', 'Harimoni', 'Harmeni', 'Harmonia', 'Harphinia', 'Harpina', 'Harponi', 'Hegetoria', 'Heila', 'Helgoria', 'Helia', 'Helike', 'Helikei', 'Heliria', 'Helleori', 'Holikei', 'Hylliphis', 'Hyllis', 'Hyllisei', 'Iaira', 'Ianassa', 'Ianeira', 'Ianisse', 'Ianithise', 'Ianthe', 'Iaosise', 'Iasis', 'Ida', 'Idahria', 'Idaia', 'Idaise', 'Idaphise', 'Ideia', 'Idophia', 'Ihrone', 'Ilaira', 'Ilanaera', 'Ilanara', 'Ilara', 'Ileneira', 'Ilo', 'Ione', 'Iosise', 'Iphanthei', 'Iphise', 'Isameine', 'Ismanise', 'Ismene', 'Isonei', 'Kaephei', 'Kahliste', 'Kaliphaia', 'Kalise', 'Kalleira', 'Kallianassa', 'Kallianeira', 'Kallianisse', 'Kallinei', 'Kalliphae', 'Kalliphaeia', 'Kalliste', 'Kalyphise', 'Kalypise', 'Kalypso', 'Kapheira', 'Kaphelirea', 'Karilya', 'Kariye', 'Karya', 'Kelaria', 'Kelleia', 'Kerkeis', 'Kerleise', 'Kerokeis', 'Kianise', 'Kimopola', 'Kiseise', 'Kisseis', 'Kissise', 'Klaia', 'Kleadorise', 'Kleeia', 'Kleia', 'Kleodora', 'Kleokhareia', 'Kleora', 'Kleorei', 'Klepheia', 'Klokharei', 'Klymeina', 'Klymene', 'Klymentise', 'Klyphotise', 'Klytea', 'Klytie', 'Kylomopeilia', 'Kymopoleia', 'Kyreanes', 'Kyrene', 'Kyrenise', 'Lamedesa', 'Lametisa', 'Lamiphelia', 'Lampetia', 'Laomedeia', 'Laripha', 'Larishae', 'Larissa', 'Laromedia', 'Lephice', 'Leuce', 'Leuciphi', 'Leuciphia', 'Leucippe', 'Leucise', 'Libeias', 'Liberi', 'Libethrias', 'Lilaia', 'Lilias', 'Liliope', 'Limnoreia', 'Limnorelia', 'Limorei', 'Liriope', 'Liropei', 'Lollaia', 'Lysianassa', 'Lysiasse', 'Lysiniassi', 'Maia', 'Maira', 'Mairia', 'Malia', 'Malilia', 'Malyra', 'Marilia', 'Marina', 'Mariphine', 'Marynae', 'Medeia', 'Meilira', 'Meilitae', 'Melaenia', 'Melaina', 'Melaniphi', 'Melanippe', 'Melia', 'Melinai', 'Meliphia', 'Melita', 'Melite', 'Mellaniphe', 'Melliata', 'Melorope', 'Melphite', 'Meltise', 'Mendeis', 'Menideis', 'Menidise', 'Meniphei', 'Meniphis', 'Menippe', 'Menodiace', 'Menodice', 'Menolorice', 'Mephite', 'Merily', 'Merope', 'Merophise', 'Meryl', 'Merylle', 'Messeis', 'Messelise', 'Messise', 'Metioche', 'Metiophei', 'Metiphoche', 'Metis', 'Metisis', 'Mideia', 'Midelia', 'Minithe', 'Minthe', 'Monithei', 'Morea', 'Morelia', 'Morella', 'Moria', 'Morilia', 'Myressei', 'Myritoesa', 'Myrtoessa', 'Mysteise', 'Mystis', 'Mystise', 'Nacoile', 'Nacole', 'Naicolei', 'Naise', 'Nasille', 'Nasiphe', 'Neaira', 'Neamertise', 'Neda', 'Nedali', 'Nekaia', 'Nelaira', 'Nelairi', 'Nelida', 'Nemea', 'Nemelphia', 'Nementia', 'Nemertes', 'Nemertise', 'Neomerilis', 'Neomeris', 'Neomorise', 'Nepheilise', 'Nephele', 'Nephilis', 'Nerin', 'Nerince', 'Nerinphe', 'Nerisei', 'Nerisha', 'Nerissa', 'Nesaea', 'Nesallea', 'Nesilia', 'Nikaia', 'Nikalia', 'Nixie', 'Nixilei', 'Nomia', 'Nomilia', 'Nomira', 'Nonakris', 'Nonakryse', 'Noniarise', 'Nylisa', 'Nysa', 'Nysali', 'Nyxie', 'Oenoe', 'Oinoie', 'Oinone', 'Oiolyka', 'Oiolyphei', 'Okyrhoe', 'Olenoe', 'Olenore', 'Olinophe', 'Olione', 'Oluania', 'Olurainise', 'Olyrei', 'Ophinoie', 'Ophiolyse', 'Ophyroe', 'Opiris', 'Opis', 'Opysis', 'Oreilhya', 'Oreithyia', 'Orethylia', 'Orinia', 'Oriphine', 'Oriphone', 'Ornia', 'Oronia', 'Orphne', 'Orseis', 'Orselise', 'Orsenise', 'Ortogise', 'Ortygia', 'Ortylia', 'Othreis', 'Othrephis', 'Othresise', 'Ourania', 'Palacia', 'Paleine', 'Pallene', 'Panelophi', 'Paphia', 'Paphila', 'Paphilia', 'Pareia', 'Pareila', 'Parila', 'Pasithea', 'Pasithelle', 'Pasithoe', 'Pasthera', 'Pasthilei', 'Penelope', 'Penolopei', 'Pereisis', 'Peria', 'Periboia', 'Periola', 'Periphoia', 'Perseis', 'Perseisise', 'Petiare', 'Petira', 'Petoria', 'Petra', 'Petraea', 'Petrallea', 'Phaethosia', 'Phaethusa', 'Phaino', 'Phaio', 'Phaisyle', 'Phalinio', 'Phalino', 'Phalisyle', 'Phanethusi', 'Phanio', 'Phaphino', 'Phebei', 'Phelousa', 'Pherolusei', 'Pherousa', 'Phiale', 'Phialyra', 'Philia', 'Philiale', 'Philiasei', 'Philise', 'Philyra', 'Philyrea', 'Phiolle', 'Phiriaxi', 'Phisylei', 'Phoebe', 'Pholebis', 'Pholora', 'Phonia', 'Phosithonia', 'Phosthonia', 'Phrixa', 'Phrixia', 'Physadeia', 'Physadelia', 'Physali', 'Pialleni', 'Piareili', 'Piasithole', 'Pilyphei', 'Pireini', 'Pirene', 'Pirenei', 'Plataea', 'Platalea', 'Plateila', 'Pleidone', 'Pleione', 'Plephione', 'Polhyno', 'Polixio', 'Polphymino', 'Polydiora', 'Polydora', 'Polyhymno', 'Polynome', 'Polynomise', 'Polyphe', 'Polyphise', 'Polyphoe', 'Polyxio', 'Polyxo', 'Pomedosa', 'Pontomedise', 'Pontomedousa', 'Pontoporeia', 'Pontoreisa', 'Pontropeira', 'Poreile', 'Praxithea', 'Praxithelia', 'Praxithise', 'Promidea', 'Prosymeina', 'Prosymina', 'Prosymna', 'Protomedea', 'Protomedelia', 'Psalacantha', 'Psalicanthise', 'Psamaphine', 'Psamathe', 'Psamiaphe', 'Pteili', 'Ptelea', 'Ptelera', 'Rhaenise', 'Rhalanise', 'Rhanis', 'Rhene', 'Rhenei', 'Rhenelis', 'Rhephila', 'Rhetia', 'Rhetila', 'Rhodia', 'Rhodiophe', 'Rhodisa', 'Rhodope', 'Rhodophine', 'Rhodys', 'Sabeana', 'Sabrina', 'Sabrinei', 'Sagariphis', 'Sagaritis', 'Sagitise', 'Salamis', 'Salaphise', 'Salomise', 'Samia', 'Samilea', 'Samisia', 'Sapharnia', 'Savarinea', 'Savarna', 'Selestia', 'Semestra', 'Semistrea', 'Silopei', 'Siniophe', 'Sinope', 'Solise', 'Sose', 'Soseilis', 'Speiliro', 'Speio', 'Spelino', 'Steiropi', 'Steliope', 'Sterope', 'Stirophia', 'Stophila', 'Strophia', 'Sylilis', 'Syllis', 'Sylphise', 'Symaithis', 'Symithia', 'Symithise', 'Synallasis', 'Synallia', 'Synallis', 'Syrianix', 'Syrinix', 'Syrinx', 'Talila', 'Talula', 'Tanagra', 'Taniara', 'Tanigrei', 'Taphiula', 'Teledice', 'Teledike', 'Teleidice', 'Telidaki', 'Telodice', 'Telphedice', 'Tereine', 'Terenei', 'Terephine', 'Thaleia', 'Thalenia', 'Thalice', 'Theamise', 'Theanole', 'Theanore', 'Thebe', 'Thebesi', 'Theisi', 'Theliphe', 'Thelphise', 'Themis', 'Themise', 'Themistae', 'Themisto', 'Themistoli', 'Theonoe', 'Thero', 'Theroli', 'Therolis', 'Thesipha', 'Thespia', 'Thespilia', 'Thetis', 'Thiosa', 'Thisbe', 'Thisei', 'Thisobei', 'Tholosa', 'Thoniphe', 'Thoosa', 'Thosei', 'Thousa', 'Thousia', 'Thrasise', 'Thrassa', 'Thronie', 'Thronise', 'Throssia', 'Thyia', 'Thyliase', 'Thyxia', 'Trilleia', 'Triteia', 'Tritelipha', 'Tykhe', 'Tykiphe', 'Tyriphe', 'Xaniphe', 'Xanthe', 'Zelipea', 'Zephixo', 'Zeuxipia', 'Zeuxippe', 'Zeuxise', 'Zeuxoli'];
  {
    names = sample(nm1);
    return names;
  }
}
