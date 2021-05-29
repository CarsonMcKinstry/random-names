import { sample } from 'lodash-es';

export default function faroeses() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ábal', 'Ábraham', 'Ábram', 'Ádam', 'Áki', 'Álvfinnur', 'Álvgeir', 'Álvheðin', 'Álvur', 'Ámundur', 'Ánanias', 'Ánias', 'Ápraham', 'Ápram', 'Árant', 'Ári', 'Árni', 'Áron', 'Ásar', 'Ásbergur', 'Ásbjørn', 'Ásbrandur', 'Ásfinnur', 'Ásgeir', 'Ásgrímur', 'Ási', 'Áskil', 'Áslakur', 'Ásleivur', 'Ásmóður', 'Ásmundur', 'Ássvein', 'Ásvaldur', 'Ásvarður', 'Ásvar', 'Ávaldur', 'Ægir', 'Ímundur', 'Ísakur', 'Ísleivur', 'Ísmal', 'Ívar', 'Óðin', 'Óla', 'Ólavur', 'Óli', 'Ólivar', 'Óttar', 'Øgmundur', 'Øgvaldur', 'Øksur', 'Ørnolvur', 'Ørvar', 'Ørvur', 'Øssur', 'Úlvar', 'Úlvheðin', 'Úlvur', 'Aðalgeir', 'Aðalstein', 'Absalon', 'Adolf', 'Adrian', 'Aggusteinus', 'Agnar', 'Aksal', 'Aksel', 'Albert', 'Albin', 'Aleks', 'Aleksandur', 'Alfred', 'Allan', 'Alvi', 'Amadeus', 'Amos', 'Andras', 'Andri', 'Andrias', 'Ansgar', 'Antines', 'Antinis', 'Anton', 'Ari', 'Arinbjørn', 'Arnór', 'Arnaldur', 'Arnar', 'Arnbjørn', 'Arndór', 'Arnfinnur', 'Arnfríður', 'Arngrímur', 'Arni', 'Arnleygur', 'Arnljótur', 'Arnoddur', 'Arnold', 'Arnstein', 'Arnsvein', 'Aron', 'Artan', 'Artur', 'Askur', 'Atli', 'August', 'Augustinus', 'Bárður', 'Báraldur', 'Bænadikt', 'Bóas', 'Bótolvur', 'Bødvar', 'Búgvi', 'Búi', 'Baldur', 'Baldvin', 'Baltasar', 'Baraldur', 'Bartal', 'Bastian', 'Beinar', 'Beini', 'Beinir', 'Benadikt', 'Benjamin', 'Bergar', 'Bergfinnur', 'Bergfríður', 'Bergleivur', 'Bergsvein', 'Bergtór', 'Bergur', 'Berint', 'Bernar', 'Bernhard', 'Bersi', 'Bessi', 'Betuel', 'Birgar', 'Birgir', 'Birni', 'Birtir', 'Bjørgúlvur', 'Bjørgfinnur', 'Bjørgheðin', 'Bjørgolvur', 'Bjørn', 'Bjarki', 'Bjarngrímur', 'Bjarnheðin', 'Bjarni', 'Bjarnvarður', 'Bjarti', 'Bjartmar', 'Bjartur', 'Blásius', 'Boas', 'Bogi', 'Borgar', 'Brúsi', 'Bragi', 'Brandar', 'Brandur', 'Bresti', 'Brestir', 'Brialdur', 'Brian', 'Broddi', 'Broddur', 'Brosi', 'Brynjar', 'Brynjolvur', 'Brynleivur', 'Bursi', 'Dánial', 'Dánjal', 'Dávið', 'Dávi', 'Dávid', 'Dávur', 'Díðrikur', 'Dagbjørn', 'Dagbjartur', 'Dagfinnur', 'Dagur', 'Dan', 'Danjal', 'Dann', 'Demmus', 'Dennis', 'Dion', 'Ditleivur', 'Djóni', 'Dunaldur', 'Ebbi', 'Edmundur', 'Edvard', 'Edvin', 'Egi', 'Egil', 'Egin', 'Eilívur', 'Einar', 'Eindri', 'Eiri', 'Eirikur', 'Eivindur', 'Eldbjørn', 'Eli', 'Elian', 'Elias', 'Eliesar', 'Elis', 'Ellindur', 'Elmar', 'Elvar', 'Emil', 'Enokur', 'Erhard', 'Erlendur', 'Erlingur', 'Ernst', 'Esbern', 'Esekiel', 'Eskil', 'Esmar', 'Esmundur', 'Evald', 'Eyðálvur', 'Eyðbjørn', 'Eyðbjartur', 'Eyðfinnur', 'Eyðgrímur', 'Eyði', 'Eyðleivur', 'Eyðmar', 'Eyðmundur', 'Eyðolvur', 'Eyðstein', 'Eyðsvein', 'Eyðtór', 'Eyðun', 'Eyðvarður', 'Fálgeir', 'Fabian', 'Filip', 'Filippus', 'Finnbjørn', 'Finnbogi', 'Finnfríði', 'Finngeir', 'Finnleivur', 'Finnur', 'Flæmingur', 'Flóki', 'Flóvin', 'Flemmingur', 'Flosi', 'Fríðálvur', 'Fríðbjørn', 'Fríðbjartur', 'Fríðfinnur', 'Fríði', 'Fríðmundur', 'Fríðolvur', 'Fríðrikur', 'Fríður', 'Frímann', 'Fróðar', 'Fróði', 'Frank', 'Frans', 'Fridleivur', 'Frits', 'Gíslar', 'Gísli', 'Gabrial', 'Gabriel', 'Gaprial', 'Garðar', 'Geir', 'Geirbjørn', 'Geirbrandur', 'Geirfinnur', 'Geiri', 'Geirmundur', 'Geirolvur', 'Geirur', 'Georg', 'Gestur', 'Geyti', 'Gilbert', 'Gilli', 'Gilstein', 'Gissur', 'Glúmur', 'Gormundur', 'Gormur', 'Grækaris', 'Grímolvur', 'Grímur', 'Greipur', 'Grettir', 'Grias', 'Gripur', 'Guðbjartur', 'Guðbrandur', 'Guðlakur', 'Gudfinnur', 'Gudjón', 'Gudleygur', 'Gudmar', 'Gudmundur', 'Gulakur', 'Gullbrandur', 'Gundur', 'Gunnálvur', 'Gunnar', 'Gunnbjørn', 'Gunni', 'Gunnleikur', 'Gunnleivur', 'Gunnleygur', 'Gunnolvur', 'Gunnstein', 'Gunnvaldur', 'Gustav', 'Gusti', 'Gutti', 'Guttormur', 'Gylvi', 'Hábarður', 'Hákun', 'Hálvdan', 'Hámundur', 'Hárikur', 'Hástein', 'Hávarður', 'Hávar', 'Hórður', 'Hóraldur', 'Hóri', 'Høgnar', 'Høgni', 'Hørður', 'Høskuldur', 'Húnbogi', 'Húni', 'Hagbarður', 'Halgir', 'Hallbergur', 'Hallbjørn', 'Halldór', 'Hallfríður', 'Hallgeir', 'Hallgrímur', 'Hallmar', 'Hallmundur', 'Hallormur', 'Hallstein', 'Hallur', 'Hallvarður', 'Hannes', 'Hannis', 'Hannus', 'Hans', 'Hanus', 'Haraldur', 'Havgrímur', 'Havliði', 'Havstein', 'Heðin', 'Heiðrikur', 'Heimir', 'Heindrikur', 'Heini', 'Heinrikur', 'Helgi', 'Hemingur', 'Hemmingur', 'Hendrikur', 'Henningur', 'Hensar', 'Herálvur', 'Herbert', 'Herbjørn', 'Herbjartur', 'Herbrandur', 'Herfinnur', 'Herfríður', 'Hergeir', 'Hergrímur', 'Heri', 'Herjolvur', 'Herleivur', 'Herleygur', 'Hermóður', 'Hermann', 'Hermundur', 'Herningur', 'Herolvur', 'Herstein', 'Hervarður', 'Hilbert', 'Hildar', 'Hildibjørn', 'Hildibjartur', 'Hildibrandur', 'Hilmar', 'Hjálmar', 'Hjørgrímur', 'Hjørleivur', 'Hjørmundur', 'Hjørtur', 'Hjalgrímur', 'Hjalmar', 'Hjalti', 'Hjarnar', 'Hjartvar', 'Holgar', 'Hugi', 'Hugin', 'Immanuel', 'Ingálvur', 'Ingi', 'Ingibjørn', 'Ingibjartur', 'Ingileivur', 'Ingimar', 'Ingimundur', 'Ingivaldur', 'Ingjaldur', 'Ingmar', 'Ingolvur', 'Ingvaldur', 'Ingvar', 'Ivan', 'Jákup', 'Játmundur', 'Jóal', 'Jóan', 'Jóanes', 'Jóanis', 'Jóannes', 'Jóannis', 'Jóas', 'Jóel', 'Jófríður', 'Jógvan', 'Jóhan', 'Jóhann', 'Jóhannes', 'Jóhannis', 'Jóhannus', 'Jón', 'Jónar', 'Jónas', 'Jónatan', 'Jónfinnur', 'Jónhard', 'Jónheðin', 'Jóni', 'Jónleivur', 'Jónstein', 'Jónsvein', 'Jósef', 'Jóstein', 'Jósup', 'Jósvein', 'Jøkil', 'Jøkul', 'Jørgun', 'Jørmundur', 'Jørundur', 'Júlian', 'Július', 'Júst', 'Jústi', 'Jústines', 'Jústinis', 'Jústinus', 'Jafet', 'Jallgrímur', 'Jan', 'Jann', 'Janus', 'Jarleivur', 'Jarmundur', 'Jason', 'Jaspur', 'Jatmundur', 'Jatvarður', 'Jenis', 'Jens', 'Jesar', 'Johan', 'John', 'Jonn', 'Josva', 'Julian', 'Julius', 'Justi', 'Kálvur', 'Kári', 'Kai', 'Kaleb', 'Karl', 'Karstin', 'Kartni', 'Kaspar', 'Ketil', 'Kjartan', 'Kláus', 'Klæmint', 'Knútur', 'Kolbein', 'Kolbjørn', 'Kolfinnur', 'Kolgrímur', 'Kolmundur', 'Konrad', 'Koraldur', 'Kornelius', 'Kornus', 'Kristafár', 'Kristian', 'Kristin', 'Kristjan', 'Kristleivur', 'Kristmar', 'Kristmundur', 'Kristoffur', 'Kristtór', 'Kristvar', 'Kurt', 'Kyrri', 'Lávus', 'Líggjas', 'Løðar', 'Lýðar', 'Lýður', 'Laars', 'Lars', 'Larvas', 'Lassi', 'Laurus', 'Lavars', 'Lavrans', 'Leiki', 'Leivur', 'Leo', 'Leon', 'Levi', 'Loðin', 'Loftur', 'Ludvík', 'Lukas', 'Lykkir', 'Máur', 'Mækir', 'Mórits', 'Mórus', 'Móses', 'Magnar', 'Magni', 'Magnus', 'Maks', 'Malvinus', 'Mannbjørn', 'Manni', 'Margeir', 'Marius', 'Marjus', 'Markus', 'Marnar', 'Marni', 'Martin', 'Mass', 'Mats', 'Mattas', 'Matteus', 'Mattias', 'Meinar', 'Meinhard', 'Melkir', 'Melkjor', 'Mikal', 'Mikkjal', 'Milan', 'Mortan', 'Nátan', 'Nói', 'Naddoddur', 'Napoleon', 'Narvi', 'Natanael', 'Nemus', 'Niels', 'Niklái', 'Niklas', 'Nikodemus', 'Nikolas', 'Nils', 'Njál', 'Njálur', 'Norðleivur', 'Oddbjørn', 'Oddfinnur', 'Oddfríður', 'Oddgeir', 'Oddleivur', 'Oddmar', 'Oddmundur', 'Oddur', 'Oddvaldur', 'Oddvar', 'Olgar', 'Olivur', 'Onundur', 'Ormar', 'Ormstein', 'Ormur', 'Orri', 'Oskar', 'Ottar', 'Otto', 'Ovi', 'Oygrímur', 'Oyleivur', 'Oymundur', 'Oyolvur', 'Oystein', 'Oyvindur', 'Pál', 'Páll', 'Pátrikur', 'Pætur', 'Pól', 'Palli', 'Pauli', 'Per', 'Petur', 'Poli', 'Poul', 'Ríkaldur', 'Ríkin', 'Róðbjartur', 'Róðolvur', 'Róaldur', 'Róar', 'Rógvi', 'Rói', 'Rókur', 'Róland', 'Rólant', 'Rólvur', 'Rómundur', 'Rósingur', 'Røgnvaldur', 'Rúnar', 'Rúni', 'Rúnolvur', 'Ragnar', 'Ragnvaldur', 'Randver', 'Rani', 'Rasmus', 'Ravnur', 'Regin', 'Reiðar', 'Reimar', 'Reinaldur', 'Reinar', 'Rikard', 'Robert', 'Rodleivur', 'Rodmar', 'Rodmundur', 'Ronni', 'Rubekur', 'Ruben', 'Sálamon', 'Sálomon', 'Sámal', 'Sámuel', 'Sámur', 'Sæbjørn', 'Sæfinnur', 'Sæmundur', 'Sævar', 'Símeon', 'Símun', 'Sívar', 'Sólbjørn', 'Sólbjartur', 'Sólfinnur', 'Sólmundur', 'Sølmundur', 'Sølvar', 'Sølvi', 'Sørin', 'Sørkvi', 'Sørli', 'Súni', 'Súnmundur', 'Sakarias', 'Sakaris', 'Sakir', 'Saksi', 'Salmundur', 'Samson', 'Sandur', 'Sebastian', 'Selmar', 'Servin', 'Set', 'Sevrin', 'Sigbjørn', 'Sigbjartur', 'Sigbrandur', 'Sigfús', 'Sigfríður', 'Sighvatur', 'Sigmar', 'Sigmundur', 'Signar', 'Signhard', 'Signheðin', 'Sigtór', 'Sigurð', 'Sigurd', 'Sigvaldur', 'Sigvar', 'Silas', 'Sirius', 'Sjúrði', 'Sjúrður', 'Skúvur', 'Skeggi', 'Skofti', 'Snæúlvur', 'Snæbjørn', 'Snævar', 'Sniolvur', 'Snorri', 'Sofus', 'Sonnhard', 'Sonni', 'Sproti', 'Stígur', 'Stefan', 'Steffan', 'Steinar', 'Steinbjørn', 'Steinfinnur', 'Steingrímur', 'Steinmundur', 'Steinoddur', 'Steinolvur', 'Steintór', 'Steinur', 'Summaldur', 'Summarliði', 'Suni', 'Sunnleivur', 'Sunnvar', 'Svávar', 'Sveinbjørn', 'Sveinungur', 'Sveinur', 'Svenningur', 'Sverri', 'Syftun', 'Tíðrikur', 'Tístram', 'Tóki', 'Tórálvur', 'Tórður', 'Tóraldur', 'Tórarin', 'Tórhallur', 'Tórheðin', 'Tóri', 'Tórir', 'Tóroddur', 'Tórolvur', 'Tórur', 'Tóti', 'Týrur', 'Teinar', 'Teitur', 'Teodor', 'Terji', 'Tjálvi', 'Tjóðolvur', 'Tobias', 'Tollakur', 'Tonni', 'Torbergur', 'Torbjørn', 'Torbrandur', 'Torfinnur', 'Torfríður', 'Torgeir', 'Torgestur', 'Torgrímur', 'Torkil', 'Torleivur', 'Torleygur', 'Tormóður', 'Tormann', 'Tormar', 'Tormundur', 'Torri', 'Torstein', 'Torvaldur', 'Tráin', 'Tróndur', 'Trøstur', 'Treysti', 'Tristan', 'Trygvi', 'Tummas', 'Tyrni', 'Tyrnir', 'Uggi', 'Uni', 'Unnar', 'Urbanus', 'Vígúlvur', 'Vígbaldur', 'Vígbrandur', 'Víggrímur', 'Vívil', 'Vónbjartur', 'Vøggur', 'Vølundur', 'Vagnar', 'Vagnur', 'Valbergur', 'Valbjørn', 'Valbrandur', 'Valdi', 'Valdimar', 'Vensil', 'Vermundur', 'Vernar', 'Vestar', 'Veturliði', 'Vigfús', 'Viggo', 'Viktor', 'Vilbergur', 'Vilhelm', 'Vilhjálmur', 'Viljam', 'Viljormur', 'Villi', 'Villiam', 'Vilmar', 'Vilmundur', 'Vinjar', 'Vinsi', 'Virgar', 'Vitus', 'Volmar', 'Yngvar', 'Yngvi'];
  const nm2 = ['Ábria', 'Álvdis', 'Álvgerð', 'Álvheiður', 'Álvhild', 'Ánania', 'Árna', 'Ása', 'Ásbera', 'Ásbjørg', 'Ásdis', 'Ásfríð', 'Ásgerð', 'Áshild', 'Ásla', 'Ásleyg', 'Ásta', 'Ásthild', 'Ástrið', 'Ásvør', 'Æsa', 'Íðunn', 'Óluva', 'Úlvhild', 'Ýr', 'Aðalbjørg', 'Aðalborg', 'Aðalgunn', 'Aðalheiður', 'Aðallín', 'Abellóna', 'Agda', 'Agnas', 'Alberta', 'Albjørg', 'Alborg', 'Alda', 'Aldis', 'Aleksandra', 'Alfríð', 'Alisa', 'Alma', 'Alrún', 'Amalia', 'Amalja', 'Amanda', 'Andrea', 'Angela', 'Angelika', 'Anita', 'Anja', 'Anný', 'Anna', 'Annika', 'Antonia', 'Apollonia', 'Aranja', 'Arina', 'Armgarð', 'Arnóra', 'Arna', 'Arnbjørg', 'Arnborg', 'Arndis', 'Arnfríð', 'Arngerð', 'Arngunn', 'Arnheiður', 'Arnhild', 'Arnina', 'Arnleyg', 'Arnljót', 'Arnvør', 'Asta', 'Astrið', 'Ata', 'Augusta', 'Aura', 'Bára', 'Bænadikta', 'Bóthild', 'Børka', 'Barba', 'Barbara', 'Beata', 'Bedda', 'Beinta', 'Belinda', 'Benadikta', 'Benita', 'Bera', 'Bergdis', 'Bergfríð', 'Berghild', 'Bergitta', 'Bergljót', 'Bergný', 'Bergtóra', 'Bergunn', 'Berit', 'Berta', 'Bettý', 'Betta', 'Billa', 'Bina', 'Birgit', 'Birgitta', 'Birita', 'Birna', 'Birta', 'Bjølla', 'Bjørg', 'Bjørgfríð', 'Bjørghild', 'Bjørk', 'Bjørt', 'Bjalla', 'Bjarma', 'Bjarndis', 'Bjarnfríð', 'Bjarnhild', 'Bjarta', 'Borgfríð', 'Borghild', 'Borgný', 'Brá', 'Brita', 'Britt', 'Bryndis', 'Bryngerð', 'Brynhild', 'Brynja', 'Bylgja', 'Dís', 'Dóra', 'Døgg', 'Dagbjørg', 'Dagbjørt', 'Dagfríð', 'Dagmar', 'Dagný', 'Dagrún', 'Dagunn', 'Dania', 'Daniella', 'Danvør', 'Debora', 'Diana', 'Dina', 'Dinna', 'Dora', 'Doris', 'Dorotea', 'Dortea', 'Drós', 'Dropleyg', 'Durið', 'Durita', 'Duruta', 'Ebba', 'Edda', 'Edit', 'Edna', 'Eik', 'Eilin', 'Eina', 'Eir', 'Eirika', 'Eldbjørg', 'Eldrið', 'Eleonora', 'Elia', 'Elin', 'Elinbjørg', 'Elinborg', 'Elisa', 'Elisabet', 'Ella', 'Elma', 'Elna', 'Elsý', 'Elsa', 'Elsba', 'Elsbet', 'Elspa', 'Elsuba', 'Elsubet', 'Elvina', 'Elvira', 'Embla', 'Emilý', 'Emilia', 'Emma', 'Enna', 'Erika', 'Erla', 'Erna', 'Esta', 'Ester', 'Estrið', 'Estur', 'Eva', 'Eyð', 'Eyðbjørg', 'Eyðbjørt', 'Eyðdis', 'Eyðfríð', 'Eyðgerð', 'Eyðgunn', 'Eyðhild', 'Eyðleyg', 'Eyðrið', 'Eyðrun', 'Eyður', 'Eyðvør', 'Eydna', 'Fía', 'Fípa', 'Følva', 'Fanný', 'Felisia', 'Femja', 'Filippa', 'Finnbjørg', 'Finngerð', 'Finnleyg', 'Fjóla', 'Flykra', 'Fríða', 'Fríðbjørg', 'Fríðborg', 'Fríðgerð', 'Fríðhild', 'Fríðrún', 'Fríðrika', 'Fríðrun', 'Fríðunn', 'Fríðvør', 'Fróða', 'Friðgerð', 'Frida', 'Froya', 'Froydis', 'Froygerð', 'Gísleyg', 'Gabriella', 'Geira', 'Geirhild', 'Geirtrúð', 'Gerð', 'Gerda', 'Geythild', 'Giljanna', 'Gisleyg', 'Glæma', 'Glóa', 'Gloria', 'Gortra', 'Gróa', 'Greta', 'Grimhild', 'Guðbjørg', 'Guðrið', 'Guðrun', 'Gudbjørg', 'Gudfinna', 'Gudleyg', 'Gudný', 'Gudrun', 'Gudvør', 'Gullbjørg', 'Gullborg', 'Gunn', 'Gunna', 'Gunnbjørg', 'Gunnbrit', 'Gunnfríð', 'Gunngerð', 'Gunnhild', 'Gunnleyg', 'Gunnrið', 'Gunnvá', 'Gunnvør', 'Gurli', 'Gyða', 'Gylta', 'Húngerð', 'Húngunn', 'Halda', 'Halla', 'Hallbera', 'Hallbjørg', 'Halldóra', 'Halldis', 'Hallfríð', 'Hallgerð', 'Hallgunn', 'Hallvør', 'Hallveig', 'Hanna', 'Hansa', 'Hansina', 'Havdis', 'Havgerð', 'Heiða', 'Heiðdis', 'Heiðrún', 'Heiðrun', 'Heiðvík', 'Heiðvør', 'Heiðveig', 'Heidi', 'Heinina', 'Helena', 'Helga', 'Helma', 'Henný', 'Henrietta', 'Henrikka', 'Hera', 'Herbjørg', 'Herborg', 'Herdis', 'Herfríð', 'Hergerð', 'Hergunn', 'Herrið', 'Herta', 'Hervør', 'Hilda', 'Hildibjørg', 'Hildibjørt', 'Hildigarð', 'Hildigerð', 'Hildigunn', 'Hildur', 'Hilma', 'Hjørdis', 'Hjalma', 'Hjartvør', 'Hulda', 'Iðunn', 'Ida', 'Ina', 'Inga', 'Ingibjørg', 'Ingibjørt', 'Ingigerð', 'Ingilín', 'Ingileyg', 'Ingirið', 'Ingrún', 'Ingrið', 'Ingun', 'Ingunn', 'Ingvá', 'Ingvør', 'Inna', 'Irena', 'Iris', 'Irma', 'Isabella', 'Jóanna', 'Jódis', 'Jófríð', 'Jóhanna', 'Jóhild', 'Jóna', 'Jónbjørg', 'Jónfríð', 'Jóngerð', 'Jónhild', 'Jónleyg', 'Jónrið', 'Jónvá', 'Jónvár', 'Jónvør', 'Jónveig', 'Jórunn', 'Jóvør', 'Júlia', 'Jústa', 'Jútta', 'Jakoba', 'Jakobina', 'Jana', 'Janhild', 'Janita', 'Janna', 'Jansý', 'Jastrið', 'Jemima', 'Jenný', 'Jennhild', 'Jensa', 'Jensia', 'Jensina', 'Jetta', 'Jona', 'Jonna', 'Jonnhild', 'Josefina', 'Jovina', 'Judit', 'Julia', 'Julianna', 'Justa', 'Jutta', 'Kára', 'Kárunn', 'Kaia', 'Kamilla', 'Kamma', 'Karin', 'Karina', 'Karita', 'Karla', 'Karlina', 'Karolina', 'Kassandra', 'Katarina', 'Katja', 'Katla', 'Katrin', 'Katrina', 'Kirstin', 'Klára', 'Klara', 'Kolbrún', 'Kolfinna', 'Kornelia', 'Krista', 'Kristbjørg', 'Kristensa', 'Kristfríð', 'Kristhild', 'Kristianna', 'Kristin', 'Kristina', 'Kristinbjørg', 'Kristjanna', 'Kristrún', 'Kristrun', 'Kristvør', 'Lín', 'Lísbita', 'Lív', 'Lóa', 'Lý', 'Lýdia', 'Laila', 'Laura', 'Laurina', 'Lea', 'Lena', 'Leyvoy', 'Lilja', 'Lillý', 'Lina', 'Lind', 'Linda', 'Lisa', 'Lisabet', 'Lisbet', 'Liss', 'Liva', 'Lona', 'Lotta', 'Lovisa', 'Lula', 'Lusia', 'Málfríð', 'Magda', 'Magdalena', 'Magga', 'Magna', 'Magnhild', 'Maia', 'Maibrit', 'Maifríð', 'Maika', 'Maisól', 'Malan', 'Malena', 'Malfríð', 'Malja', 'Malla', 'Malvina', 'Marý', 'Margit', 'Margret', 'Margreta', 'Margunn', 'Marið', 'Maria', 'Marianna', 'Marin', 'Marit', 'Marita', 'Marja', 'Marjun', 'Marlena', 'Marna', 'Marnhild', 'Marta', 'Martina', 'Masa', 'Matilda', 'Matthild', 'Maud', 'Melania', 'Merrý', 'Metta', 'Mia', 'Mikala', 'Mildrið', 'Milja', 'Mina', 'Minna', 'Mira', 'Miriam', 'Mirja', 'Mirjam', 'Mona', 'Monika', 'Morið', 'Myrna', 'Nóra', 'Naina', 'Nanný', 'Nanna', 'Nansý', 'Naomi', 'Natalia', 'Natasja', 'Nikolina', 'Nina', 'Ninna', 'Nita', 'Nomi', 'Noomi', 'Norðbjørt', 'Nora', 'Norma', 'Oda', 'Oddbjørg', 'Oddfríð', 'Oddgerð', 'Oddleyg', 'Oddný', 'Oddrún', 'Oddvá', 'Oddvør', 'Oddveig', 'Olga', 'Olivia', 'Olivina', 'Oluffa', 'Oydis', 'Oygerð', 'Oygló', 'Oyleyg', 'Oyvør', 'Pálma', 'Píl', 'Póla', 'Pólina', 'Palma', 'Paula', 'Paulina', 'Pavla', 'Petra', 'Petrina', 'Poula', 'Poulina', 'Róða', 'Ró', 'Róa', 'Róhild', 'Rósa', 'Røskva', 'Rún', 'Rúna', 'Ragna', 'Ragnfríð', 'Ragnheiður', 'Ragnhild', 'Ragnvør', 'Rakul', 'Randarsól', 'Randfríð', 'Randið', 'Randi', 'Ranja', 'Rannfríð', 'Rannvá', 'Rannvør', 'Rannveig', 'Ravnhild', 'Rebekka', 'Reiðgunn', 'Reiðunn', 'Renata', 'Revna', 'Ria', 'Rikka', 'Rita', 'Ritva', 'Roda', 'Ronja', 'Royða', 'Rut', 'Rutt', 'Sára', 'Sæbjørg', 'Sædis', 'Sæfríð', 'Sæunn', 'Sól', 'Sólbirta', 'Sólbjørg', 'Sólbjørt', 'Sólborg', 'Sólbrá', 'Sólbrún', 'Sólbrit', 'Sóldís', 'Sóleyð', 'Sólfríð', 'Sólgerð', 'Sólja', 'Sólrið', 'Sólrun', 'Sólvá', 'Sólvør', 'Sólveig', 'Sølvá', 'Sølvør', 'Sølva', 'Súna', 'Súnbjørt', 'Súnfríð', 'Súnfríða', 'Súnhild', 'Súsanna', 'Salbjørg', 'Saldis', 'Salgerð', 'Salný', 'Saloma', 'Salvør', 'Sandra', 'Sanna', 'Saranja', 'Sarita', 'Selena', 'Selinda', 'Selma', 'Senita', 'Sesilia', 'Sigbjørg', 'Sigborg', 'Sigbrit', 'Sigfríð', 'Sigga', 'Signý', 'Signa', 'Signhild', 'Signild', 'Signuva', 'Sigrið', 'Sigrun', 'Sigurbjørg', 'Sigurgunn', 'Sigurleyg', 'Sigursól', 'Sigvør', 'Silja', 'Silrið', 'Silvia', 'Silvurlín', 'Simona', 'Sirið', 'Sissal', 'Siv', 'Smæra', 'Snæbjørg', 'Snæfríð', 'Snæleyg', 'Snjófríð', 'Sofía', 'Solveig', 'Sonja', 'Stefania', 'Steinbjarta', 'Steingerð', 'Steintóra', 'Steinunn', 'Steinvør', 'Stella', 'Stina', 'Suffía', 'Sunnbjørg', 'Sunnfríð', 'Sunnfríða', 'Sunnhild', 'Sunniva', 'Sunnleyg', 'Sunnrið', 'Sunnvá', 'Sunnvør', 'Sváva', 'Svanbjørg', 'Svanfríð', 'Svanhild', 'Svanleyg', 'Svanna', 'Sylvia', 'Tóna', 'Tóra', 'Tórhalla', 'Tórhild', 'Tórunn', 'Tóta', 'Tóva', 'Týra', 'Tabita', 'Talita', 'Tamara', 'Tanja', 'Tea', 'Teitrun', 'Tekla', 'Teresa', 'Tina', 'Tinna', 'Tita', 'Tjóðhild', 'Tomasia', 'Torbera', 'Torbjørg', 'Torbjørt', 'Torborg', 'Tordis', 'Torfinna', 'Torfríð', 'Torgerð', 'Torgunn', 'Torgunna', 'Torleyg', 'Torný', 'Torvør', 'Tova', 'Trina', 'Turið', 'Ulla', 'Una', 'Unn', 'Unna', 'Unnur', 'Urð', 'Urða', 'Vár', 'Várdis', 'Váreyð', 'Væna', 'Vígdis', 'Vón', 'Vónbjørt', 'Vagna', 'Valbjørg', 'Valborg', 'Valdis', 'Valgerð', 'Vera', 'Vióla', 'Vigdis', 'Viktoria', 'Vilbjørg', 'Vilbjørt', 'Vilborg', 'Vilgerð', 'Vinný', 'Vivia', 'Yngva', 'Yngvild', 'Yrsa', 'Yvonna'];
  const nm3 = ['Ásgeirsdóttir', 'Ólavsson', 'Aagard', 'Anderssen', 'Andreasen', 'Andreassen', 'Arge', 'Arrheboe', 'Bærentsen', 'Bóndi', 'Børresen', 'Barthel', 'Bech', 'Blak', 'Bleken', 'Bogason', 'Boman', 'Brú', 'Brattaberg', 'Brestisson', 'Broberg', 'Bronck', 'Dahl', 'Dam', 'Danielsen', 'Danjalsson', 'Debes', 'Djurhuus', 'Effersøe', 'Eidesgaard', 'Evensen', 'Finsen', 'Ganting', 'Glerfoss', 'Gulbranson', 'Háberg', 'Hátun', 'Høgnesen', 'Højgaard', 'Hammershaimb', 'Hansdóttir', 'Hansen', 'Hanusardóttir', 'Haraldsen', 'Haugaard', 'Heinason', 'Heinesen', 'Helmsdal', 'Hentze', 'Holdremyr', 'Hoydal', 'Isaksen', 'Jákupsson', 'Jógvansson', 'Jóhansen', 'Jónsson', 'Jacobsen', 'Jakobsen', 'Jensen', 'Joensen', 'Johannesen', 'Johannessen', 'Johansen', 'Justinussen', 'Kallsberg', 'Kamban', 'Kampmann', 'Kielberg', 'Kjelnæs', 'Knudsen', 'Krogh', 'Kruse', 'Lützen', 'Lamhauge', 'Landt', 'Lassen', 'Lisberg', 'Long', 'Lyngbye', 'Magnussen', 'Matras', 'Mikines', 'Mikkelsen', 'Mohr', 'Mortensen', 'Nólsoy', 'Nansen', 'Niclasen', 'Nielsen', 'Nolsøe', 'Nysted', 'Olsen', 'Oskarsson', 'Ottarsdóttir', 'Páll', 'Pálsdóttir', 'Patursson', 'Petersen', 'Pløyen', 'Poulsen', 'Rólantsson', 'Rønne', 'Rønning', 'Rasmussen', 'Reginsson', 'Reinert', 'Reistrup', 'Restorff', 'Reyni', 'Rosenmeyer', 'Ryberg', 'Sørensen', 'Schrøter', 'Sigmundsdóttir', 'Sigurðsson', 'Simonsen', 'Skarði', 'Smith', 'Stórá', 'Svabo', 'Tórgarð', 'Taalle', 'Tausen', 'Thomsen', 'Torfasen', 'Vágadal', 'Vatnhamar', 'Viderø', 'Wich', 'Ziska'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
