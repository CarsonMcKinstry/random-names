import { sample } from 'lodash-es';

export default function swiss() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aaron', 'Abi', 'Adam', 'Adrien', 'Alessandro', 'Alessio', 'Alex', 'Alexander', 'Alexandre', 'Alexis', 'Alina', 'Andrae', 'Andrea', 'Andrin', 'Arthur', 'Atreju', 'Babacar', 'Balz', 'Bastien', 'Beat', 'Beath', 'Ben', 'Bendicht', 'Benedicht', 'Benjamin', 'Benno', 'Benson', 'Bern', 'Bernhardin', 'Berti', 'Butz', 'Candid', 'Chonz', 'Chris', 'Christen', 'Christian', 'Cla', 'Conz', 'Daniel', 'Dario', 'David', 'Davide', 'Diego', 'Dumeni', 'Dylan', 'Eddie', 'Eduard', 'Elia', 'Elias', 'Elijan', 'Eliott', 'Emanuele', 'Endo', 'Enea', 'Enno', 'Enzo', 'Eric', 'Ernestin', 'Erwin', 'Ethan', 'Evan', 'Fabio', 'Federico', 'Fiete', 'Filippo', 'Finn', 'Finnian', 'Florentinus', 'Florentius', 'Florianus', 'Florin', 'Florinus', 'Florus', 'Flurin', 'Francesco', 'Franklin', 'Franzi', 'Fredo', 'Frido', 'Fridolin', 'Friedolin', 'Göpf', 'Gabriel', 'Gabriele', 'Gaetan', 'Gene', 'Giacomo', 'Gian', 'Gianin', 'Gido', 'Gilgian', 'Gillis', 'Gioele', 'Giona', 'Gustav', 'Gwer', 'Hänggi', 'Hansruedi', 'Hansueli', 'Harri', 'Heiri', 'Hias', 'Hiltwin', 'Hugo', 'Isak', 'Ivan', 'Jügen', 'Jürg', 'Jacinto', 'Jacopo', 'Jan', 'Jano', 'Jason', 'Jockel', 'Jocki', 'Jocky', 'Joder', 'Joel', 'Jonas', 'Josif', 'Jost', 'Jovin', 'Jules', 'Julian', 'Jvars', 'Jyrki', 'Karlo', 'Kevin', 'Kimo', 'Kjell', 'Léo', 'Léon', 'Laurin', 'Leandro', 'Lenny', 'Leo', 'Leon', 'Leonardo', 'Leonz', 'Levi', 'Levian', 'Levin', 'Levio', 'Liam', 'Lian', 'Linard', 'Lionel', 'Livio', 'Loan', 'Lorenzo', 'Lorian', 'Lorin', 'Loris', 'Louis', 'Luc', 'Luca', 'Lucas', 'Lugano', 'Luis', 'Lukas', 'Lyan', 'Manuel', 'Marion', 'Mark', 'Martin', 'Mathias', 'Mathis', 'Matteo', 'Mattia', 'Max', 'Maxime', 'Maximilian', 'Meinrad', 'Men', 'Mian', 'Nando', 'Nathan', 'Neil', 'Nelo', 'Nevio', 'Nias', 'Nico', 'Nicolò', 'Nicolas', 'Niel', 'Niemir', 'Nika', 'Niklas', 'Niklaus', 'Nils', 'Nino', 'Noah', 'Noel', 'Nolan', 'Nordin', 'Norin', 'Oliver', 'Orell', 'Oscar', 'Oskar', 'Othmar', 'Paschalis', 'Petri', 'Pirmin', 'Placidus', 'Purlie', 'Rätus', 'Rafael', 'Raik', 'Ramon', 'Ramun', 'Raphaël', 'Raphael', 'Rato', 'Raul', 'Rayan', 'Res', 'Retho', 'Reto', 'Riccardo', 'Rico', 'Robin', 'Rodrigo', 'Roger', 'Rolf', 'Ruedi', 'Ruven', 'Ryan', 'Samonte', 'Samuel', 'Samuele', 'Sandro', 'Sanno', 'Sebastian', 'Severin', 'Siad', 'Simon', 'Simone', 'Töbe', 'Tell', 'Théo', 'Theo', 'Thomas', 'Till', 'Timéo', 'Tim', 'Timo', 'Tommaso', 'Toni', 'Tragott', 'Ueli', 'Urban', 'Urs', 'Uto', 'Valentin', 'Vigeli', 'Vince', 'Vito', 'Vitus', 'Waldo', 'Walo', 'Wenert', 'Werner', 'William', 'Xherdan', 'Xylon'];
  const nm2 = ['Abeline', 'Ada', 'Agata', 'Agnes', 'Aila', 'Aita', 'Alessa', 'Alessia', 'Alice', 'Alicia', 'Alina', 'Allegra', 'Alyssa', 'Alyssia', 'Amélie', 'Amanda', 'Ambra', 'Amelia', 'Amelie', 'Amrei', 'Anaïs', 'Anica', 'Anna', 'Anneli', 'Anni', 'Annina', 'Arianita', 'Arianna', 'Asia', 'Asta', 'Aurora', 'Ava', 'Ayla', 'Barbara', 'Bartolina', 'Bea', 'Beatriz', 'Bella', 'Bettina', 'Binia', 'Céline', 'Camilla', 'Camille', 'Charlotte', 'Chiara', 'Chloé', 'Chloe', 'Christina', 'Ciara', 'Cilia', 'Clara', 'Cleo', 'Cloe', 'Corinne', 'Dalina', 'Daria', 'Diane', 'Dilan', 'Edda', 'Edna', 'Elea', 'Elena', 'Eleonora', 'Eliane', 'Elin', 'Elina', 'Elisa', 'Ella', 'Ellen', 'Elsa', 'Elva', 'Emelia', 'Emila', 'Emilia', 'Emilie', 'Emily', 'Emma', 'Enie', 'Enja', 'Enya', 'Erika', 'Erina', 'Eva', 'Fabiola', 'Fee', 'Feena', 'Fina', 'Fiona', 'Florina', 'Flurina', 'Franziska', 'Frida', 'Gaia', 'Gemma', 'Giada', 'Ginevra', 'Gioia', 'Giorgia', 'Giulia', 'Hanna', 'Hanni', 'Heda', 'Hedi', 'Heidi', 'Helen', 'Ila', 'Illa', 'Ilsa', 'Inès', 'India', 'Inja', 'Inna', 'Irene', 'Isa', 'Isabel', 'Isalie', 'Ivka', 'Jade', 'Jael', 'Jana', 'Jane', 'Janna', 'Jette', 'Jo', 'Jolanda', 'Judith', 'Jule', 'Julia', 'Julie', 'Juliette', 'Juna', 'Käthi', 'Kaja', 'Karoline', 'Kea', 'Kiana', 'Léa', 'Léonie', 'Ladina', 'Laila', 'Lale', 'Lana', 'Lara', 'Laura', 'Lavin', 'Lea', 'Lena', 'Leonie', 'Lia', 'Liberta', 'Lina', 'Lisa', 'Liv', 'Livia', 'Liz', 'Lola', 'Lorena', 'Lorin', 'Louise', 'Luana', 'Lucie', 'Luisa', 'Lumi', 'Luna', 'Lynn', 'Madlaina', 'Magali', 'Magalie', 'Maike', 'Maila', 'Maite', 'Malou', 'Manon', 'Mara', 'Marei', 'Margaux', 'Maria', 'Marilen', 'Marisa', 'Marla', 'Martina', 'Matea', 'Mathilde', 'Matilde', 'Maya', 'Melia', 'Melina', 'Melinda', 'Melissa', 'Mena', 'Meret', 'Meta', 'Mia', 'Michelle', 'Midja', 'Mika', 'Mila', 'Milia', 'Milla', 'Mirella', 'Moesha', 'Mona', 'Mylene', 'Nadine', 'Narin', 'Nathalie', 'Neela', 'Nela', 'Nella', 'Nicole', 'Nika', 'Nina', 'Noa', 'Noemi', 'Nola', 'Nora', 'Nova', 'Olivia', 'Pascale', 'Pauletta', 'Penelope', 'Phine', 'Pia', 'Rabia', 'Raja', 'Ramona', 'Raphaela', 'Rena', 'Rika', 'Rike', 'Rivka', 'Romy', 'Ronja', 'Runa', 'Sana', 'Sanna', 'Sara', 'Sarah', 'Selina', 'Selma', 'Seraina', 'Severine', 'Siana', 'Silia', 'Sofia', 'Sophia', 'Sophie', 'Stefanie', 'Susi', 'Tessa', 'Tine', 'Uma', 'Una', 'Ursina', 'Uschi', 'Valentina', 'Vanessa', 'Vera', 'Veronika', 'Victoria', 'Viola', 'Vita', 'Vittoria', 'Vreni', 'Vroni', 'Wilma', 'Yana', 'Yela', 'Yuna', 'Zoé', 'Zoe'];
  const nm3 = ['Abbühl', 'Abderhalden', 'Abegg', 'Abegglen', 'Abplanalp', 'Ackeret', 'Ackermann', 'Ackert', 'Adler', 'Aeberli', 'Aebersold', 'Aebi', 'Aebischer', 'Aegerter', 'Aegler', 'Aemmer', 'Aenishänslin', 'Aeppli', 'Aerne', 'Aerni', 'Aeschbacher', 'Aescher', 'Aeschimann', 'Aeschlimann', 'Affolter', 'Aickelin', 'Aklin', 'Albrecht', 'Alder', 'Alispach', 'Allebrand', 'Allemann', 'Althaus', 'Altherr', 'Amacher', 'Amacker', 'Ambühl', 'Ammann', 'Ammeter', 'Amsler', 'Amstein', 'Anderegg', 'Anderfuhren', 'Andres', 'Anker', 'Anliker', 'Anthamatten', 'Appenzeller', 'Arbenz', 'Arm', 'Arn', 'Asper', 'Ast', 'Augsburger', 'Bäbler', 'Bächi', 'Bächler', 'Bähler', 'Bänninger', 'Bänziger', 'Bär', 'Bärfuss', 'Bärlocher', 'Bärtschi', 'Bögli', 'Böhlen', 'Böni', 'Bösch', 'Bösiger', 'Büchi', 'Bühler', 'Bühlmann', 'Bührer', 'Bünzli', 'Bürgi', 'Bürki', 'Bürkli', 'Bütikofer', 'Bacher', 'Bachmann', 'Bachofner', 'Bader', 'Badertscher', 'Baggenstoss', 'Balli', 'Balmer', 'Balsiger', 'Balz', 'Balzli', 'Bangerter', 'Bartlome', 'Baschung', 'Basler', 'Bauert', 'Baumann', 'Baumer', 'Baumgartner', 'Baur', 'Bechtold', 'Beck', 'Beer', 'Beiner', 'Benoit', 'Benz', 'Berchtold', 'Berger', 'Bernegger', 'Bernhard', 'Bertschinger', 'Berweger', 'Bessan', 'Betschen', 'Bettler', 'Beutler', 'Beyeler', 'Bichsel', 'Biedermann', 'Biefer', 'Bieri', 'Bigler', 'Billeter', 'Binder', 'Bindschädler', 'Binggeli', 'Birchmeier', 'Bischoff', 'Bissegger', 'Bitterwolf', 'Bitzius', 'Bläuer', 'Blösch', 'Blank', 'Blaser', 'Blatter', 'Bleiker', 'Bleuer', 'Blum', 'Blumer', 'Bodenmann', 'Bodmer', 'Bodon', 'Bohli', 'Bohnenblust', 'Bohni', 'Boli', 'Bolleter', 'Bolliger', 'Bollinger', 'Bollmann', 'Bolt', 'Bomberger', 'Bommeli', 'Bommer', 'Bondt', 'Boni', 'Boss', 'Bosshard', 'Bräker', 'Bräm', 'Brändli', 'Bräuchi', 'Brönnimann', 'Brügger', 'Brühlmann', 'Brüllhardt', 'Bracher', 'Brack', 'Brand', 'Brassel', 'Braun', 'Brawand', 'Brechbühl', 'Brechbühler', 'Brehm', 'Brennwald', 'Brenzikofer', 'Bretscher', 'Briner', 'Brog', 'Brotbeck', 'Bruderer', 'Brugger', 'Brunner', 'Brunschweiler', 'Bruppacher', 'Bryner', 'Buchegger', 'Bucher', 'Buchmüller', 'Buchmann', 'Buck', 'Bur', 'Burgdorfer', 'Burgener', 'Burger', 'Burkhalter', 'Burkhard', 'Burn', 'Burri', 'Busenhart', 'Buser', 'Bysäth', 'Camenisch', 'Christen', 'Corradi', 'Dähler', 'Dällenbach', 'Däppen', 'Dätwyler', 'Dübi', 'Dünner', 'Dürsteler', 'Düscher', 'Dalcher', 'Dauss', 'Debrunner', 'Dennler', 'Denzler', 'Dettling', 'Diem', 'Dierauer', 'Dietrich', 'Doderer', 'Dolder', 'Doldi', 'Dorer', 'Dreier', 'Dreyer', 'Dubach', 'Dunkel', 'Durand', 'Durian', 'Durtschi', 'Dysli', 'Eberhard', 'Eberle', 'Ebersold', 'Ebneter', 'Egg', 'Eggen', 'Egger', 'Eggli', 'Egli', 'Egloff', 'Egolf', 'Ehrensperger', 'Eichenberger', 'Eichholzer', 'Eisenhut', 'Elber', 'Ellenberger', 'Elliker', 'Elmer', 'Engel', 'Engeler', 'Enggwiller', 'Engler', 'Enz', 'Erb', 'Ermel', 'Erni', 'Ernst', 'Eschler', 'Essig', 'Eugster', 'Eymann', 'Fäustlin', 'Fügi', 'Füllemann', 'Fürer', 'Fürst', 'Fack', 'Fahrni', 'Fankhauser', 'Fasnacht', 'Favre', 'Fawer', 'Feh', 'Fehlmann', 'Fehr', 'Felber', 'Feldmann', 'Felix', 'Feuz', 'Fey', 'Finger', 'Fischer', 'Flückiger', 'Flühmann', 'Flacher', 'Fluck', 'Forster', 'Foster', 'Frauchiger', 'Frehner', 'Frei', 'Frener', 'Freuler', 'Freund', 'Frey', 'Frick', 'Fricker', 'Frieden', 'Friedrich', 'Frischknecht', 'Frommenwiler', 'Frutig', 'Frutiger', 'Fuchs', 'Fuchser', 'Fuhrer', 'Fuhrimann', 'Furrer', 'Fuss', 'Fyg', 'Gähler', 'Gähwiler', 'Götschmann', 'Götz', 'Götzinger', 'Güdel', 'Gaisser', 'Gallati', 'Galli', 'Gallmann', 'Gammenthaler', 'Gammeter', 'Gander', 'Gantenbein', 'Gartmann', 'Gaschen', 'Gass', 'Gasser', 'Gassmann', 'Gassner', 'Gatschet', 'Gattiker', 'Gehri', 'Gehrig', 'Geiser', 'Geissbühler', 'Geistlich', 'Gempeler', 'Gemperle', 'Gerber', 'Germann', 'Gerstner', 'Gertsch', 'Geser', 'Gfeller', 'Gibel', 'Giezendanner', 'Giger', 'Gilgen', 'Gisin', 'Gisler', 'Glücki', 'Glanzmann', 'Glarner', 'Glaus', 'Glausen', 'Glauser', 'Gloor', 'Gnehm', 'Gobeli', 'Gossweiler', 'Gosteli', 'Gräflein', 'Gräflin', 'Grämer', 'Grünenwald', 'Grünig', 'Grütter', 'Graber', 'Graf', 'Grau', 'Grauer', 'Greber', 'Gredig', 'Greiner', 'Gretler', 'Greuter', 'Greutert', 'Griessen', 'Grimm', 'Grob', 'Gross', 'Grossen', 'Grossenbacher', 'Grossmann', 'Grubenmann', 'Grunder', 'Gubler', 'Guggisberg', 'Gurtner', 'Gut', 'Gutjahr', 'Gygi', 'Gyr', 'Gysin', 'Gysler', 'Häberle', 'Häberli', 'Häberling', 'Häderli', 'Häfeli', 'Häfliger', 'Hägele', 'Hämig', 'Hämmerli', 'Häni', 'Hänni', 'Hänsenberger', 'Häsler', 'Häusler', 'Hörler', 'Hösli', 'Hüppi', 'Hürlimann', 'Haas', 'Habegger', 'Hadorn', 'Hafen', 'Hafner', 'Hafter', 'Hagenbuch', 'Hager', 'Haid', 'Haldi', 'Haldimann', 'Haller', 'Haltiner', 'Hammer', 'Handschin', 'Hangartner', 'Hanselmann', 'Hardmeier', 'Hari', 'Hartmann', 'Haslebach', 'Hasler', 'Haueter', 'Hausammann', 'Hauser', 'Hausheer', 'Haussener', 'Hautle', 'Heeb', 'Heer', 'Hefel', 'Hefti', 'Hegetschweiler', 'Heim', 'Heiniger', 'Heinz', 'Helbling', 'Held', 'Hermann', 'Herren', 'Herrmann', 'Hersperger', 'Hertig', 'Herzig', 'Herzog', 'Hess', 'Heuberger', 'Heuscher', 'Heusi', 'Heusser', 'Hiestand', 'Hilfiker', 'Hiltbrand', 'Himmelberger', 'Hirni', 'Hirschi', 'Hirt', 'Hitz', 'Hochmuth', 'Hochrainer', 'Hochstrasser', 'Hochuli', 'Hodel', 'Hodler', 'Hofer', 'Hofmann', 'Hofmeister', 'Hofstetter', 'Holderegger', 'Hollenweger', 'Holzer', 'Holzhauer', 'Homberger', 'Hoppler', 'Horlacher', 'Hosmann', 'Hostettler', 'Hottiger', 'Hotz', 'Howald', 'Hubacher', 'Huber', 'Hubmann', 'Hubschmid', 'Hug', 'Hugener', 'Hugentobler', 'Huggler', 'Hugi', 'Hui', 'Hummel', 'Hundsberger', 'Hunger', 'Hunsperger', 'Hunziker', 'Hurni', 'Hutterli', 'Iff', 'Iller', 'Imbach', 'Imdorf', 'Inäbnit', 'Indermühle', 'Ingold', 'Ins', 'Irmiger', 'Irminger', 'Iseli', 'Isler', 'Itschner', 'Itten', 'Jäger', 'Jäggi', 'Jäggli', 'Jaggi', 'Jakob', 'Januth', 'Janz', 'Jaun', 'Jaussi', 'Jenni', 'Jenny', 'Jenta', 'Jeremias', 'Job', 'Joneli', 'Joos', 'Jordi', 'Josi', 'Joss', 'Jossi', 'Jost', 'Jucker', 'Jud', 'Jufer', 'Jung', 'Jutzeler', 'Jutzi', 'Käch', 'Kägi', 'Kähr', 'Kämpf', 'Kämpfer', 'Känzig', 'Käser', 'Käsermann', 'Kästli', 'Käufeler', 'Köchli', 'Köchlin', 'Kölla', 'Kölliker', 'König', 'Körner', 'Kübler', 'Küenzlin', 'Kühn', 'Kühni', 'Kündig', 'Künzi', 'Künzle', 'Künzler', 'Küpfer', 'Küttel', 'Kaiser', 'Kammacher', 'Kammer', 'Kappler', 'Karlen', 'Kaspar', 'Kasteler', 'Kauer', 'Kaufmann', 'Kehrer', 'Kehrli', 'Keller', 'Kellerhals', 'Kellersberger', 'Kern', 'Kernen', 'Kessler', 'Keusen', 'Kiener', 'Kihm', 'Kilcher', 'Kindler', 'Kindlimann', 'Kipfer', 'Kislig', 'Klötzli', 'Klauser', 'Kleck', 'Klee', 'Kleeli', 'Klein', 'Kleiner', 'Kleinmann', 'Klemm', 'Klingler', 'Klossner', 'Knöpfli', 'Knecht', 'Knellwolf', 'Knodel', 'Knutti', 'Kobel', 'Kobler', 'Koblet', 'Koch', 'Kocher', 'Kocherhans', 'Kofel', 'Kohler', 'Kohli', 'Koller', 'Kopp', 'Kormann', 'Krähenbühl', 'Krähling', 'Kröpfli', 'Kradolfer', 'Kramer', 'Krauss', 'Krebs', 'Kreidler', 'Kreis', 'Krist', 'Kropf', 'Kubler', 'Kuhn', 'Kummer', 'Kunz', 'Kupper', 'Kyhm', 'Kym', 'Löhrer', 'Löpfe', 'Lörtscher', 'Lüdi', 'Lüscher', 'Lüthi', 'Lütscher', 'Lützelschwab', 'Labhart', 'Lambert', 'Lamm', 'Lamprecht', 'Landert', 'Landolf', 'Lang', 'Langenauer', 'Langenbucher', 'Lanicca', 'Lanz', 'Lattmann', 'Lau', 'Laube', 'Lauener', 'Lauper', 'Laurer', 'Lavater', 'Ledermann', 'Leeger', 'Leemann', 'Legler', 'Lehmann', 'Lehner', 'Lehnherr', 'Leimbacher', 'Lendi', 'Lengacher', 'Lenzi', 'Lerch', 'Leu', 'Leubler', 'Leuenberger', 'Leumann', 'Leutenegger', 'Leuthert', 'Leuthold', 'Leuzinger', 'Levi', 'Lieber', 'Lieberherr', 'Liechti', 'Lienhard', 'Lier', 'Liggenstorfer', 'Lindenmann', 'Linder', 'Liniger', 'Lippuner', 'Lips', 'Lobsiger', 'Locher', 'Lohner', 'Looser', 'Loosli', 'Lufi', 'Luginbühl', 'Lutz', 'Luy', 'Mäder', 'Mägli', 'Mäusli', 'Mörgeli', 'Möri', 'Mühlemann', 'Mühlematter', 'Müller', 'Müllhaupt', 'Münger', 'Mützenberg', 'Maag', 'Maier', 'Majan', 'Mani', 'Marbot', 'Marchion', 'Marggi', 'Marolf', 'Marti', 'Martig', 'Mast', 'Mathys', 'Matti', 'Mauchle', 'Maurer', 'Maurhofer', 'Meckes', 'Meier', 'Meierhofer', 'Meili', 'Meister', 'Merkli', 'Merz', 'Messerli', 'Mettier', 'Mettler', 'Metzener', 'Metzger', 'Meyer', 'Michel', 'Minnig', 'Monhart', 'Moor', 'Moosheer', 'Moosimann', 'Moosmann', 'Morf', 'Morgenegg', 'Morgenthaler', 'Moroff', 'Moser', 'Mosimann', 'Mossmann', 'Mullis', 'Mumenthaler', 'Mundwiler', 'Munz', 'Murri', 'Mutti', 'Näf', 'Nägeli', 'Nägelin', 'Nüesch', 'Nüssli', 'Nadig', 'Naef', 'Naegele', 'Nagel', 'Narold', 'Nater', 'Nebiker', 'Neeser', 'Neiger', 'Nerz', 'Neuenschwander', 'Neuhaus', 'Neukom', 'Neukomm', 'Neumeister', 'Neuwirth', 'Niederer', 'Niederhauser', 'Niedermaier', 'Niedermann', 'Nievergelt', 'Nold', 'Notz', 'Nussbaum', 'Nydegger', 'Nyffenegger', 'Oberhänsli', 'Oberholzer', 'Obi', 'Obrecht', 'Ochsenbein', 'Ochsner', 'Oehrli', 'Oertli', 'Oetiker', 'Ogi', 'Oppliger', 'Osterloh', 'Osterwalder', 'Oswald', 'Ott', 'Otth', 'Ottiker', 'Ottinger', 'Pauli', 'Perrenoud', 'Perreten', 'Peter', 'Peyer', 'Pföuti', 'Pfeiffer', 'Pfeuti', 'Pfister', 'Pfund', 'Pieren', 'Portmann', 'Preisig', 'Probst', 'Pulfer', 'Rätz', 'Rösch', 'Rösli', 'Röthlisberger', 'Rückert', 'Rüdlinger', 'Rüegg', 'Rüegger', 'Rüegsegger', 'Rüesch', 'Rüfenacht', 'Rütschi', 'Rütti', 'Raas', 'Rabl', 'Ragetli', 'Rall', 'Ramsauer', 'Ramser', 'Ramseyer', 'Ramstein', 'Randegger', 'Raschle', 'Rastorfer', 'Rauch', 'Rauh', 'Reber', 'Rechsteiner', 'Redinger', 'Reich', 'Reichenbach', 'Reichmann', 'Reif', 'Reiff', 'Reimann', 'Reinhard', 'Reiser', 'Reist', 'Remund', 'Reusser', 'Rhyner', 'Richard', 'Richert', 'Rickenbach', 'Rickli', 'Rieben', 'Rieder', 'Riedwyl', 'Riekert', 'Riesen', 'Rietmann', 'Rimensberger', 'Rindlisbacher', 'Ringger', 'Ris', 'Risch', 'Ritter', 'Rohner', 'Rohr', 'Rohrbach', 'Rolli', 'Romang', 'Romer', 'Roschi', 'Rotach', 'Roth', 'Rothacher', 'Rothen', 'Rubi', 'Rubin', 'Ruch', 'Ruchti', 'Rudin', 'Ruetsch', 'Ruf', 'Rufener', 'Rufer', 'Ruffner', 'Rufibach', 'Rufner', 'Ruggli', 'Rumpf', 'Rupp', 'Rupper', 'Ruppert', 'Rutishauser', 'Rutz', 'Ryffel', 'Ryser', 'Ryter', 'Rytz', 'Süss', 'Süsstrunk', 'Saameli', 'Sager', 'Sallenbach', 'Salmen', 'Salzmann', 'Salzner', 'Saner', 'Saurenmann', 'Saurer', 'Sauter', 'Saxer', 'Schäfer', 'Schälchli', 'Schäppi', 'Schär', 'Schärer', 'Schäublin', 'Schönholzer', 'Schöni', 'Schüpbach', 'Schürch', 'Schürmann', 'Schürter', 'Schüss', 'Schütz', 'Schachtler', 'Schadegg', 'Schaffner', 'Schalcher', 'Schalker', 'Schall', 'Schallenberg', 'Schaub', 'Schaufelberger', 'Schawalder', 'Schedler', 'Schefer', 'Schellenberg', 'Scheller', 'Schelling', 'Schenk', 'Scherer', 'Scherler', 'Scherrer', 'Schertenleib', 'Scheuren', 'Scheuss', 'Schick', 'Schiefer', 'Schiegg', 'Schiess', 'Schiesser', 'Schiffer', 'Schild', 'Schilling', 'Schiltknecht', 'Schindler', 'Schirmer', 'Schläpfer', 'Schläppi', 'Schlüchter', 'Schlatter', 'Schleicher', 'Schlenker', 'Schluep', 'Schluepp', 'Schlumpf', 'Schlunegger', 'Schlup', 'Schmid', 'Schmidli', 'Schmidlin', 'Schmidt', 'Schmutz', 'Schneebeli', 'Schneider', 'Schneiter', 'Schneller', 'Schnely', 'Schnewli', 'Schober', 'Schoch', 'Schoemig', 'Schopfer', 'Schor', 'Schott', 'Schrämli', 'Schröpfer', 'Schranz', 'Schuepp', 'Schuler', 'Schulthess', 'Schwab', 'Schwaller', 'Schwank', 'Schwarz', 'Schwarzenbach', 'Schwarzentrub', 'Schweingruber', 'Schweizer', 'Schwendimann', 'Seeger', 'Seiler', 'Senn', 'Sennhauser', 'Sidler', 'Siebold', 'Siegenthaler', 'Siegfried', 'Siegmund', 'Siegrist', 'Sigerist', 'Sigg', 'Signer', 'Sigrist', 'Soder', 'Soldermann', 'Solothurnmann', 'Soltermann', 'Sommer', 'Sonderegger', 'Soom', 'Spänhauer', 'Spörri', 'Spühler', 'Spahn', 'Speich', 'Speiser', 'Spengler', 'Spiess', 'Spillmann', 'Spori', 'Sprenger', 'Spring', 'Spycher', 'Städeli', 'Stäger', 'Stäheli', 'Stähli', 'Stämpfli', 'Stöckli', 'Stücker', 'Stadelmann', 'Stadler', 'Stahel', 'Stahl', 'Stalder', 'Stamm', 'Stappung', 'Staub', 'Stauffacher', 'Stauffer', 'Stauffiger', 'Steck', 'Steffen', 'Stegmann', 'Steiger', 'Steinemann', 'Steiner', 'Steinmann', 'Sterchi', 'Stettler', 'Steudler', 'Steuri', 'Stiefel', 'Stieger', 'Stiger', 'Still', 'Stilli', 'Stockar', 'Stocker', 'Stoll', 'Stoller', 'Strähl', 'Strässler', 'Strassburger', 'Straub', 'Straubhaar', 'Streiff', 'Streit', 'Streuli', 'Streun', 'Stricker', 'Strotz', 'Stuber', 'Stucki', 'Studer', 'Sturzenegger', 'Stutz', 'Sulzer', 'Summer', 'Suter', 'Sutter', 'Tüller', 'Tüscher', 'Tanner', 'Temperli', 'Teucher', 'Teufenauer', 'Teuscher', 'Thönen', 'Thöni', 'Thaler', 'Thalmann', 'Theiler', 'Theilkäs', 'Thomann', 'Thomi', 'Thuli', 'Tinner', 'Tobler', 'Trösch', 'Trüb', 'Trübel', 'Trümpi', 'Trüssel', 'Trachsel', 'Trachsler', 'Trauffer', 'Tremp', 'Treuthard', 'Tribelhorn', 'Trub', 'Trufer', 'Truninger', 'Tschabold', 'Tschaggeny', 'Tschannen', 'Tschanz', 'Tschiegg', 'Tschiemer', 'Tschirren', 'Turtschi', 'Ubert', 'Ueltschi', 'Uhlmann', 'Ulmer', 'Ulrich', 'Ursenbacher', 'Usteri', 'Utiger', 'Völki', 'Vetter', 'Vetterli', 'Vogler', 'Vogt', 'Vollenweider', 'Volz', 'Wäber', 'Wäch', 'Wäfler', 'Wägeli', 'Wälchli', 'Wälle', 'Wälli', 'Wälti', 'Wölfli', 'Wördli', 'Würmli', 'Würsten', 'Wüst', 'Wüthrich', 'Wahlen', 'Wahli', 'Walder', 'Waldmeier', 'Waldvogel', 'Waller', 'Walser', 'Walt', 'Walter', 'Walther', 'Wampfler', 'Wanner', 'Wanzenried', 'Warth', 'Waser', 'Weber', 'Wegmüller', 'Wegmann', 'Wehle', 'Wehrli', 'Weibel', 'Weidmann', 'Weiersmüller', 'Weilenmann', 'Weiss', 'Weissbrodt', 'Weissmüller', 'Welter', 'Wenger', 'Wenk', 'Werder', 'Wermuth', 'Werren', 'Werthmüller', 'Wethli', 'Wettach', 'Wettstein', 'Wetzel', 'Weyermann', 'Wichtermann', 'Wickli', 'Widmer', 'Wiesendanger', 'Wihler', 'Wilker', 'Willenegger', 'Willi', 'Willimann', 'Wingeier', 'Winkler', 'Winterberger', 'Wintsch', 'Winzenried', 'Wipf', 'Wirth', 'Wirthlin', 'Wirz', 'Wismer', 'Wissing', 'Wittwer', 'Witzig', 'Wohlgemuth', 'Wolf', 'Wolfensberger', 'Wuhrmann', 'Wunderli', 'Wyder', 'Wydler', 'Wylenmann', 'Wyler', 'Wymann', 'Wyss', 'Wyssling', 'Zähner', 'Zöbeli', 'Zölper', 'Zünd', 'Zündel', 'Zürcher', 'Zürn', 'Züst', 'Zahler', 'Zahnd', 'Zahner', 'Zaugg', 'Zbinden', 'Zehndbauer', 'Zehnder', 'Zeiler', 'Zeiter', 'Zeller', 'Zellweger', 'Zenger', 'Zentner', 'Zesiger', 'Ziegler', 'Ziehli', 'Zimmermann', 'Zingg', 'Ziswiler', 'Zollinger', 'Zopfi', 'Zschokke', 'Zuber', 'Zuberbühler', 'Zumbach', 'Zumbrunnen', 'Zumstein', 'Zuppinger', 'Zurbrügg', 'Zurbuchen', 'Zurflüh', 'Zwahlen', 'Zweifel', 'Zwygart', 'Zybach', 'de Werdi', 'inAebnit', 'von Almen', 'von Ballmoos', 'von Bergen', 'von Dach', 'von Grünigen', 'von Gunten', 'von Herren', 'von Ins', 'von Känel', 'von Mühlenen', 'von Niederhäusern', 'von Siebenthal', 'von Tobel'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
