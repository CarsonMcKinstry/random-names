export default function belgians() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aäron', 'Aaron', 'Adam', 'Adil', 'Adriaan', 'Adrien', 'Alain',
    'Alan', 'Alec', 'Alessandro', 'Alessio', 'Alex', 'Alexander', 'Alexandre',
    'Alexis', 'Allan', 'Anas', 'André', 'Andrea', 'Andreas', 'Andres',
    'Andrew', 'Andy', 'Anthony', 'Antoine', 'Anton', 'Arnaud', 'Arne', 'Arno',
    'Arnout', 'Aron', 'Arthur', 'Augustin', 'Axel', 'Baptiste', 'Bart',
    'Basile', 'Basil', 'Bastien', 'Bavo', 'Beau', 'Ben', 'Benjamin', 'Benoît',
    'Benoit', 'Bert', 'Bertrand', 'Björn', 'Bjorn', 'Bradley', 'Bram',
    'Brandon', 'Brecht', 'Brent', 'Brian', 'Bruno', 'Bryan', 'Cédric',
    'Casper', 'Cedric', 'Charles', 'Chiel', 'Chris', 'Christian', 'Christoph',
    'Christophe', 'Christopher', 'Clément', 'Colin', 'Corentin', 'Cyril',
    'Daan', 'Damien', 'Damon', 'Daniel', 'Danny', 'Dany', 'David', 'Davy',
    'Dean', 'Denis', 'Dennis', 'Didier', 'Diego', 'Dieter', 'Dominique',
    'Donovan', 'Dorian', 'Douglas', 'Dries', 'Dylan', 'Edouard', 'Edward',
    'Eli', 'Elias', 'Elie', 'Emiel', 'Emile', 'Emmanuel', 'Enes', 'Enzo',
    'Eric', 'Esteban', 'Evert', 'Ewoud', 'Ewout', 'Félix', 'Fabian', 'Fabio',
    'Fabrice', 'Felix', 'Filip', 'Flavio', 'Flor', 'Florent', 'Florian',
    'Floris', 'Frédéric', 'François', 'Francesco', 'Francis', 'Frank',
    'Frederick', 'Frederik', 'Gabriel', 'Gary', 'Gauthier', 'Geoffrey',
    'Gerben', 'Gert', 'Gert-Jan', 'Gertjan', 'Giel', 'Gijs', 'Gil', 'Gill',
    'Gilles', 'Gillian', 'Gino', 'Giuseppe', 'Glen', 'Glenn', 'Grégoire',
    'Grégory', 'Gregory', 'Guillaume', 'Hadrien', 'Hans', 'Harold', 'Hendrik',
    'Henri', 'Hugo', 'Ian', 'Ilias', 'Ilyas', 'Indy', 'Ivan', 'Jérémie',
    'Jérémy', 'Jérôme', 'Jacob', 'Jakob', 'James', 'Jamie', 'Jan', 'Jannes',
    'Jannick', 'Jari', 'Jarne', 'Jarno', 'Jason', 'Jasper', 'Jean',
    'Jean-Baptiste', 'Jean-François', 'Jef', 'Jeff', 'Jeffrey', 'Jelle',
    'Jens', 'Jente', 'Jeremy', 'Jeroen', 'Jesse', 'Jessy', 'Jimmy', 'Joël',
    'Jo', 'Joeri', 'Joey', 'Joffrey', 'Johan', 'Johannes', 'John', 'Johnny',
    'Jolan', 'Jonas', 'Jonathan', 'Joni', 'Joppe', 'Joran', 'Jordan',
    'Jorden', 'Jordi', 'Jordy', 'Joren', 'Jorik', 'Joris', 'Jorn', 'Jorne',
    'Joseph', 'Joshua', 'Jules', 'Julian', 'Julien', 'Jurgen', 'Justin',
    'Kévin', 'Karel', 'Karim', 'Kasper', 'Ken', 'Kenneth', 'Kenny', 'Kevin',
    'Klaas', 'Koen', 'Kris', 'Kristof', 'Kwinten', 'Kyle', 'Kylian', 'Lander',
    'Lars', 'Laurens', 'Laurent', 'Leander', 'Lennart', 'Lennert', 'Lenny',
    'Levi', 'Liam', 'Lionel', 'Lode', 'Logan', 'Loris', 'Louis', 'Luca',
    'Lucas', 'Lukas', 'Maarten', 'Manu', 'Manuel', 'Marc', 'Marco', 'Marijn',
    'Mario', 'Martijn', 'Martin', 'Marvin', 'Mathias', 'Mathieu', 'Mathijs',
    'Mats', 'Matteo', 'Matthew', 'Matthias', 'Matthieu', 'Matthijs',
    'Mattias', 'Max', 'Maxence', 'Maxim', 'Maxime', 'Melvin', 'Michaël',
    'Michael', 'Michiel', 'Mickaël', 'Miguel', 'Mikail', 'Mike', 'Milan',
    'Mitch', 'Morgan', 'Nabil', 'Natan', 'Nathan', 'Nathanaël', 'Nicholas',
    'Nick', 'Nicky', 'Nico', 'Nicola', 'Nicolas', 'Niels', 'Nigel', 'Nils',
    'Noé', 'Oliver', 'Olivier', 'Pascal', 'Patrick', 'Paul', 'Peter',
    'Philippe', 'Pierre', 'Pieter', 'Pieter-Jan', 'Pieterjan', 'Quentin',
    'Quinten', 'Régis', 'Rémi', 'Rémy', 'Randy', 'Remco', 'Remy', 'Renaud',
    'Richard', 'Rik', 'Rob', 'Robbe', 'Robby', 'Robin', 'Robrecht', 'Roel',
    'Romain', 'Roy', 'Ruben', 'Rutger', 'Ryan', 'Sébastien', 'Sacha', 'Sam',
    'Sami', 'Sammy', 'Samuel', 'Samy', 'Sander', 'Sebastiaan', 'Sebastian',
    'Sebastien', 'Senne', 'Seppe', 'Siebe', 'Siemen', 'Simon', 'Stéphane',
    'Stan', 'Stef', 'Stefan', 'Steff', 'Steve', 'Steven', 'Stijn', 'Sven',
    'Sylvain', 'Théo', 'Thibaud', 'Thibault', 'Thibaut', 'Thierry', 'Thijs',
    'Thomas', 'Tibo', 'Tijs', 'Tim', 'Timo', 'Timothée', 'Timothy', 'Tobias',
    'Tom', 'Tomas', 'Tommy', 'Toon', 'Tristan', 'Tuur', 'Valentin', 'Vic',
    'Victor', 'Viktor', 'Vince', 'Vincent', 'Vincenzo', 'Wannes', 'Ward',
    'Wesley', 'Wietse', 'Willem', 'William', 'Wim', 'Wout', 'Wouter',
    'Xander', 'Xavier', 'Yann', 'Yannick', 'Yannis', 'Yohan', 'Yoran',
    'Yorick', 'Youri', 'Yves'];
  const nm2 = ['Adèle', 'Adeline', 'Alessandra', 'Alessia', 'Alexandra',
    'Alexia', 'Alice', 'Alicia', 'Aline', 'Alison', 'Alisson', 'Alix',
    'Alizée', 'Allison', 'Alyson', 'Alyssa', 'Alysson', 'Amélie', 'Amanda',
    'Amandine', 'Amber', 'Ambre', 'Amina', 'Amira', 'Amy', 'An', 'An-Sofie',
    'Anaëlle', 'Anaïs', 'Andréa', 'Andrea', 'Angélique', 'Anissa', 'Anke',
    'Ann', 'Ann-Sophie', 'Anna', 'Anne', 'Anne-Laure', 'Anne-Sophie',
    'Anneleen', 'Annelien', 'Annelies', 'Annelore', 'Anouck', 'Anouk',
    'Ariane', 'Ashley', 'Astrid', 'Aude', 'Audrey', 'Aurélie', 'Aurore',
    'Axana', 'Axelle', 'Aylin', 'Bénédicte', 'Babette', 'Barbara', 'Bianca',
    'Bieke', 'Birgit', 'Bo', 'Brenda', 'Britt', 'Cécile', 'Célia', 'Céline',
    'Camille', 'Caro', 'Carole', 'Carolien', 'Caroline', 'Cassandra',
    'Catherine', 'Cathy', 'Celien', 'Celine', 'Charlène', 'Charline',
    'Charlotte', 'Chelsea', 'Chelsey', 'Cheyenne', 'Chiara', 'Chloé', 'Chloë',
    'Christelle', 'Christina', 'Christine', 'Cindy', 'Clémence', 'Clémentine',
    'Claire', 'Clara', 'Clarisse', 'Claudia', 'Coline', 'Coralie', 'Coraline',
    'Cynthia', 'Déborah', 'Daisy', 'Dana', 'Daphné', 'Daphne', 'Davina',
    'Debbie', 'Debby', 'Deborah', 'Delphine', 'Demi', 'Diana', 'Diane',
    'Dilara', 'Dina', 'Dorien', 'Dounia', 'Eléonore', 'Elena', 'Elien',
    'Eline', 'Elisa', 'Elisabeth', 'Elise', 'Elke', 'Ella', 'Ellen', 'Eloïse',
    'Elodie', 'Els', 'Emelie', 'Emeline', 'Emilie', 'Emily', 'Emma',
    'Emmanuelle', 'Emmely', 'Emmy', 'Erika', 'Esra', 'Estelle', 'Esther',
    'Eva', 'Evelien', 'Eveline', 'Evelyn', 'Evelyne', 'Evi', 'Evy', 'Fanny',
    'Fauve', 'Febe', 'Femke', 'Fien', 'Fiona', 'Fleur', 'Floor', 'Flore',
    'Florence', 'Floriane', 'Florine', 'Frauke', 'Freya', 'Géraldine', 'Gwen',
    'Gwenaëlle', 'Gwendoline', 'Hélène', 'Héloïse', 'Hanane', 'Hanna',
    'Hannah', 'Hanne', 'Hannelore', 'Heleen', 'Helena', 'Hind', 'Ilke',
    'Ilona', 'Ilse', 'Imane', 'Imke', 'Inès', 'Indra', 'Ine', 'Ineke', 'Ines',
    'Inez', 'Inge', 'Inne', 'Iris', 'Isabeau', 'Isabel', 'Isabelle',
    'Isaline', 'Isaura', 'Jade', 'Jana', 'Janne', 'Jasmien', 'Jasmine',
    'Jeanne', 'Jelke', 'Jennifer', 'Jenny', 'Jente', 'Jessica', 'Jessie',
    'Jessy', 'Jill', 'Joanna', 'Jodie', 'Johanna', 'Joke', 'Jolien', 'Joni',
    'Joséphine', 'Josephine', 'Joy', 'Joyce', 'Jozefien', 'Judith', 'Julia',
    'Julie', 'Juliette', 'Justine', 'Kaat', 'Karen', 'Karlien', 'Karolien',
    'Kathleen', 'Kathy', 'Kato', 'Katrien', 'Katrijn', 'Kelly', 'Kelsey',
    'Kim', 'Kimberley', 'Kimberly', 'Kirsten', 'Léa', 'Léna', 'Lana', 'Lara',
    'Larissa', 'Laura', 'Laurane', 'Lauranne', 'Laure', 'Lauren', 'Laurence',
    'Laurie', 'Laurien', 'Laurine', 'Leen', 'Leila', 'Lena', 'Leonie',
    'Leslie', 'Leyla', 'Lien', 'Lies', 'Liesa', 'Liesbet', 'Liesbeth',
    'Liese', 'Lieselot', 'Lieselotte', 'Lieze', 'Lina', 'Linda', 'Linde',
    'Lindsay', 'Lindsey', 'Line', 'Lisa', 'Lise', 'Liselotte', 'Lissa',
    'Liza', 'Lize', 'Loes', 'Lola', 'Lore', 'Loredana', 'Lorena', 'Lotte',
    'Louise', 'Lucie', 'Ludivine', 'Luna', 'Lydie', 'Lynn', 'Mégane',
    'Mélanie', 'Mélina', 'Mélissa', 'Mélodie', 'Maaike', 'Madeline',
    'Madison', 'Madisson', 'Magali', 'Magalie', 'Mallaury', 'Mandy', 'Manon',
    'Manou', 'Mara', 'Margaux', 'Margo', 'Margot', 'Maria', 'Mariam',
    'Marianne', 'Marie', 'Marieke', 'Marijke', 'Marine', 'Marion', 'Marissa',
    'Marjolein', 'Marjorie', 'Marlies', 'Marthe', 'Mathilde', 'Maud', 'Maude',
    'Maureen', 'Maurine', 'Maxime', 'Maxine', 'Maya', 'Megan', 'Megane',
    'Melanie', 'Melina', 'Melisa', 'Melissa', 'Merel', 'Michèle', 'Michelle',
    'Mieke', 'Mona', 'Myriam', 'Myrthe', 'Nadia', 'Nancy', 'Naomi', 'Natacha',
    'Natascha', 'Natasha', 'Natasja', 'Nathalie', 'Nele', 'Nena', 'Nicky',
    'Nikki', 'Nina', 'Noémie', 'Nona', 'Nora', 'Olivia', 'Ophélie', 'Ornella',
    'Pamela', 'Paulien', 'Pauline', 'Perrine', 'Priscilla', 'Priscillia',
    'Rachel', 'Rani', 'Rebecca', 'Robin', 'Romane', 'Romina', 'Romy',
    'Rosalie', 'Roxane', 'Roxanne', 'Ruth', 'Saartje', 'Sabrina', 'Sally',
    'Sam', 'Samantha', 'Sandra', 'Sandrine', 'Sandy', 'Sanne', 'Sara',
    'Sarah', 'Saskia', 'Selin', 'Selina', 'Shana', 'Shannon', 'Shari',
    'Sharon', 'Sien', 'Sigrid', 'Silke', 'Sofia', 'Sofie', 'Sonia', 'Sophia',
    'Sophie', 'Stéphanie', 'Stacy', 'Stefanie', 'Steffi', 'Steffie',
    'Stephanie', 'Stien', 'Sylvie', 'Tamara', 'Tania', 'Tatiana', 'Tatjana',
    'Tess', 'Tessa', 'Thalia', 'Tiffany', 'Tina', 'Tine', 'Tinne', 'Tracy',
    'Valérie', 'Valentina', 'Valentine', 'Valerie', 'Vanessa', 'Veerle',
    'Vicky', 'Victoria', 'Virginie', 'Wendy', 'Yana', 'Yasemin', 'Yasmina',
    'Yasmine', 'Ysaline', 'Zoé', 'Zoë'];
  const nm3 = ['Aerts', 'Albert', 'Appelmans', 'Arijs', 'Avet', 'Baert',
    'Balcaen', 'Bauwens', 'Bekaert', 'Benoit', 'Beyls', 'Blendeman',
    'Blindeman', 'Blomme', 'Bogaert', 'Bonte', 'Borremans', 'Bosmans',
    'Calleeuw', 'Callens', 'Callewaert', 'Carette', 'Carlier', 'Carpentier',
    'Carton', 'Casier', 'Catteau', 'Christiaens', 'Claes', 'Claeys',
    'Clocheret', 'Cluysen', 'Coesens', 'Coessens', 'Coppens', 'Cornelis',
    'Cousin', 'Coussement', 'Crabbe', 'Croes', 'D’Haene', 'D’Hoe', 'D’Hondt',
    'Damiens', 'De Backer', 'De Beys', 'De Bock', 'De Boeck', 'De Clercq',
    'De Cock', 'De Coster', 'De Dobbeleer', 'De Doncker', 'De Geyndt',
    'De Gieter', 'De Greef', 'De Koninck', 'De Koster', 'De Leener',
    'De Loof', 'De Looff', 'De Maseneer', 'De Mesmaeker', 'De Meulemeester',
    'De Meyer', 'De Mulder', 'De Neve', 'De Pauw', 'De Ridder', 'De Rijck',
    'De Rijcke', 'De Roock', 'De Rooms', 'De Saeger', 'De Smedt', 'De Smet',
    'De Valck', 'De Vleeschauwer', 'De Vleeschouwer', 'De Vos', 'De Waele',
    'De Wever', 'De Wolf', 'De Zutter', 'Deboeck', 'Debruyne', 'Declerck',
    'Declercq', 'Decock', 'Deconinck', 'Decoster', 'Decraene', 'Delannoy',
    'Delbeke', 'Deleu', 'Delmote', 'Delmotte', 'Deloof', 'Delporte', 'Demets',
    'Demeulemeester', 'Demeyere', 'Demuynck', 'Depoorter', 'Depoortere',
    'Depraetere', 'Deprez', 'Deramaut', 'Deramoudt', 'Dereumaux', 'Dermaut',
    'Dermaux', 'Dermout', 'Derumaux', 'Dervaux', 'Derycke', 'Descamps',
    'Desmet', 'Desramault', 'Desramaults', 'Desramaut', 'Desramaux',
    'Desreumaux', 'Desrumaux', 'Destombes', 'Devos', 'Dewaele', 'Dewitte',
    'Dewulf', 'Dhondt', 'Dubois', 'Duesterhaus', 'Dujardin', 'Dumortier',
    'Dupont', 'Duquesne', 'Eylenbosch', 'Feys', 'Francois', 'Fremault',
    'Fremaut', 'Fremaux', 'Ghesquiere', 'Girardin', 'Glorieux', 'Goeminne',
    'Goossens', 'Gordts', 'Harnie', 'Herman', 'Heymans', 'Holvoet', 'Hoste',
    'Jacobs', 'Jans', 'Janssens', 'Lambert', 'Leclercq', 'Lefebvre',
    'Lefevre', 'Lemaire', 'Lemmens', 'Lepers', 'Lepoutre', 'Leroy',
    'Libbrecht', 'Lievens', 'Locus', 'Longin', 'Loof', 'Louage', 'Maertens',
    'Maes', 'Mahieu', 'Malfait', 'Marissens', 'Martens', 'Mather', 'Meert',
    'Mertens', 'Michiels', 'Moerman', 'Moreels', 'Mortier', 'Mostinckx',
    'Naessens', 'Nys', 'Opsomer', 'Parmentier', 'Pattyn', 'Pauwels',
    'Peeters', 'Peleriaux', 'Pelleriaux', 'Peters', 'Piat', 'Piers',
    'Pieters', 'Plas', 'Platteau', 'Poissonnier', 'Pollet', 'Putman', 'Raes',
    'Ramaut', 'Ramoudt', 'Remaut', 'Renard', 'Renson', 'Roesems', 'Roose',
    'Sabbe', 'Schalenborgh', 'Schalenbourg', 'Schoonjans', 'Schoukens',
    'Segers', 'Six', 'Speleers', 'Steenput', 'Sterckx', 'Tanghe',
    'Timmermans', 'Trogh', 'Tyberghein', 'Van Belle', 'Van Caemelbeke',
    'Van Campfort', 'Van Cutsem', 'Van Daele', 'Van Damme', 'Van De Gucht',
    'Van De Velde', 'Van Den Borre', 'Van Den Bossche', 'Van Den Driessche',
    'Van Den Houte', 'Van Der Borght', 'Van Der Elst', 'Van Der Meiren',
    'Van Der Straeten', 'Van Der Voorde', 'Van Droogenbroeck',
    'Van Isterdael', 'Van Laethem', 'Van Lierde', 'Van Moorleghem',
    'Van Moorlehem', 'Van Overstraeten', 'Van Pruisen', 'Van Roy',
    'Van Saksen-Coburg En Gotha', 'Van Schepdael', 'Van Tieghem',
    'Van Vaerenbergh', 'Vancluysen', 'Vandaele', 'Vandamme', 'Vandecasteele',
    'Vandekerckhove', 'Vandemeulebroecke', 'Vandemeulebroucke',
    'Vandenabeele', 'Vandenberghe', 'Vandenbroucke', 'Vandenbulcke',
    'Vandendriessche', 'Vandeputte', 'Vanderstraeten', 'Vandevelde',
    'Vandewalle', 'Vandewiele', 'Vanhoutte', 'Vanneste', 'Vansteenkiste',
    'Velghe', 'Verbeke', 'Vercruysse', 'Verdoodt', 'Verhaeghe', 'Verhasselt',
    'Verhelst', 'Vermaut', 'Vermeersch', 'Vermeulen', 'Vermote', 'Verplancke',
    'Verschuere', 'Verstraete', 'Veys', 'Viaene', 'Vlogaert', 'Vrammout',
    'Walravens', 'Wauters', 'Willems', 'Windels', 'Wouters', 'Zelderloo']; {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
