export default function frenchs() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const names1 = ['Matthieu', 'Maxence', 'Lucas', 'Gabriel', 'Natanaël',
    'Nathan', 'Maël', 'Killian', 'Igor', 'Loup', 'Ludovic', 'Pierre-Louis',
    'Pierre-Antoine', 'Fabien', 'Maxime', 'Bruno', 'Grégoire', 'Aaron',
    'Abeau', 'Abel', 'Abélard', 'Abelin', 'Abraham', 'Achille', 'Adam',
    'Adolphe', 'Adrien', 'Alain', 'Alban', 'Albert', 'Alceste', 'Alex',
    'Alexandre', 'Alexis', 'Alfred', 'Alphonse', 'Amadou', 'Amand', 'Amaury',
    'Anatole', 'André', 'Ange', 'Antoine', 'Armand', 'Armel', 'Arnaud',
    'Arsène', 'Arthur', 'Aubin', 'Auguste', 'Augustin', 'Aurélien', 'Axel',
    'Aymeric', 'Baptiste', 'Barthélemy', 'Basile', 'Bastien', 'Baudouin',
    'Benjamin', 'Benoît', 'Bernard', 'Bertrand', 'Blaise', 'Boniface',
    'Brice', 'Bruno', 'Camille', 'Cédric', 'Charles', 'Christian',
    'Christophe', 'Christopher', 'Claude', 'Clément', 'Clovis', 'Colin',
    'Côme', 'Constantin', 'Cyril', 'Cyrille', 'Damien', 'Daniel', 'Dany',
    'David', 'Davy', 'Denis', 'Désiré', 'Didier', 'Dimitri', 'Djeferson',
    'Dominique', 'Dylan', 'Edgar', 'Edmond', 'Edouard', 'Édouard', 'Égide',
    'Élie', 'Élisée', 'Éloi', 'Émeric', 'Émile', 'Émilien', 'Emmanuel',
    'Enzo', 'Éric', 'Ernest', 'Estienne', 'Étienne', 'Eugène', 'Évrard',
    'Fabien', 'Fabrice', 'Félix', 'Fernand', 'Florent', 'Florentin',
    'Florian', 'Francis', 'Franck', 'François', 'Frank', 'Frédéric',
    'Gabriel', 'Gaby', 'Gaël', 'Gaétan', 'Gaëtan', 'Gaspard', 'Gaston',
    'Gauthier', 'Gautier', 'Gaylord', 'Geoffroy', 'Georges', 'Gérald',
    'Gérard', 'Germain', 'Gérôme', 'Gervais', 'Ghislain', 'Gilbert', 'Gilles',
    'Godefroy', 'Grégoire', 'Grégory', 'Guillaume', 'Gustave', 'Guy',
    'Gwenaël', 'Hector', 'Henri', 'Henry', 'Hervé', 'Hippolyte', 'Hubert',
    'Hugo', 'Hugues', 'Ignace', 'Isaac', 'Isaïe', 'Jacob', 'Jacques',
    'Jasmin', 'Jean', 'Jean-Baptiste', 'Jean-Charles', 'Jean-Christophe',
    'Jean-Claude', 'Jean-François', 'Jean-Guy', 'Jean-Jacques', 'Jean-Joël',
    'Jean-Louis', 'Jean-Loup', 'Jean-Luc', 'Jean-Marc', 'Jean-Marie',
    'Jean-Michel', 'Jean-Noël', 'Jean-Pascal', 'Jean-Paul', 'Jean-Philippe',
    'Jean-Pierre', 'Jean-Yves', 'Jérémie', 'Jérémy', 'Jérôme', 'Jocelyn',
    'Joël', 'Jonathan', 'Jordan', 'José', 'Joseph', 'Josselin', 'Josué',
    'Jules', 'Julien', 'Justin', 'Kevin', 'Kévin', 'Ladislas', 'Lambert',
    'Laurent', 'Léo', 'Léon', 'Léonard', 'Léopold', 'Lilian', 'Lionel',
    'Loïc', 'Lou', 'Louis', 'Luc', 'Lucas', 'Lucien', 'Lucrèce', 'Ludovic',
    'Manuel', 'Marc', 'Marc-Antoine', 'Marcel', 'Marian', 'Marius', 'Martial',
    'Martin', 'Mathéo', 'Mathias', 'Mathieu', 'Mathis', 'Matthias',
    'Matthieu', 'Maurice', 'Max', 'Maxence', 'Maxime', 'Maximilien', 'Médard',
    'Michaël', 'Michel', 'Mickaël', 'Milo', 'Moïse', 'Napoléon', 'Nathan',
    'Nathanaël', 'Néo', 'Nicolas', 'Noé', 'Noël', 'Norbert', 'Olivier',
    'Omer', 'Pascal', 'Patrice', 'Patrick', 'Paul', 'Paulin', 'Phil',
    'Philibert', 'Philippe', 'Pierre', 'Pierre-Marie', 'Porthos', 'Quentin',
    'Raoul', 'Raphaël', 'Raymond', 'Régis', 'Remi', 'Rémi', 'Remy', 'Rémy',
    'Renaud', 'René', 'Richard', 'Robert', 'Robin', 'Roch', 'Rodolphe',
    'Roger', 'Roland', 'Roméo', 'Romuald', 'Sacha', 'Samuel', 'Sébastien',
    'Serge', 'Séverin', 'Silvain', 'Simon', 'Stanislas', 'Stéphane',
    'Sylvain', 'Thaddée', 'Théo', 'Théodore', 'Théophile', 'Thibaud',
    'Thibault', 'Thibaut', 'Thierry', 'Thomas', 'Timothé', 'Timothée',
    'Tobie', 'Tristan', 'Valentin', 'Valéry', 'Victor', 'Vincent', 'Vivien',
    'Wilfrid', 'Wilfried', 'William', 'Xavier', 'Yves', 'Yvon', 'Zacharie'];
  const names2 = ['Ninon', 'Nina', 'Cécile', 'Emmeline', 'Elodie', 'Chloé ',
    'Elise', 'Bélise', 'Victoria', 'Ivanna', 'Alizée ', 'Lorie', 'Eugénie',
    'Ilonna', 'Océane', 'Emilie', 'Catherine', 'Léa', 'Marie-Claire',
    'Anne-Claire', 'Claire', 'Lise', 'Mathilde', 'Harmonie', 'Gabrielle',
    'Abby', 'Abélia', 'Abelone', 'Adélaïde', 'Adèle', 'Adélie', 'Adeline',
    'Adrienne', 'Agathe', 'Agnès', 'Aimée', 'Albane', 'Alberte', 'Albertine',
    'Alexandra', 'Alexandrine', 'Alexia', 'Alicia', 'Aliénor', 'Aline',
    'Alix', 'Alphonsine', 'Amanda', 'Amandine', 'Ambre', 'Amélie', 'Ameline',
    'Anaïs', 'Anastasie', 'Andrée', 'Ange', 'Angèle', 'Angeline', 'Angélique',
    'Anita', 'Anna', 'Anne', 'Anne-Laure', 'Anne-Marie', 'Anne-Sophie',
    'Annette', 'Annick', 'Annie', 'Antoinette', 'Ariane', 'Arlette',
    'Armelle', 'Astrid', 'Aude', 'Audrey', 'Augustine', 'Aurélia', 'Aurélie',
    'Auriane', 'Aurore', 'Axelle', 'Barbara', 'Barbe', 'Béatrice',
    'Bénédicte', 'Bérangère', 'Bérengère', 'Bérénice', 'Bernadette', 'Berthe',
    'Bethsabée', 'Blanche', 'Blandine', 'Brigitte', 'Camille', 'Capucine',
    'Carine', 'Carla', 'Carmen', 'Caro', 'Carole', 'Caroline', 'Catherine',
    'Cécile', 'Cécilia', 'Céleste', 'Célia', 'Céline', 'Chantal', 'Charlène',
    'Charlotte', 'Chloé', 'Christelle', 'Christiane', 'Christine', 'Claire',
    'Clara', 'Clarisse', 'Claude', 'Claudette', 'Claudia', 'Claudie',
    'Claudine', 'Clélia', 'Clélie', 'Clémence', 'Clémentine', 'Clothilde',
    'Clotilde', 'Colette', 'Coline', 'Constance', 'Coralie', 'Corinne',
    'Cyrille', 'Danièle', 'Danielle', 'Dany', 'Débora', 'Déborah', 'Denise',
    'Désirée', 'Diane', 'Dolorès', 'Dominique', 'Dorothée', 'Édith', 'Edmée',
    'Edwige', 'Éléonore', 'Éliane', 'Élisa', 'Élisabeth', 'Élise', 'Élodie',
    'Éloïse', 'Émeline', 'Émilie', 'Émilienne', 'Emma', 'Emmanuelle',
    'Estelle', 'Esther', 'Eugénie', 'Eulalie', 'Éva', 'Ève', 'Évelyne',
    'Fabienne', 'Fanny', 'Félicité', 'Fernande', 'Fiona', 'Flora', 'Flore',
    'Florence', 'France', 'Francine', 'Françoise', 'Frédérique', 'Gabrielle',
    'Gaby', 'Gaëlle', 'Gaëtane', 'Geneviève', 'Georgette', 'Géraldine',
    'Germaine', 'Gervaise', 'Ghislaine', 'Ghyslaine', 'Gilberte', 'Ginette',
    'Gisèle', 'Giselle', 'Godeleine', 'Godeliève', 'Guillemette', 'Gwenaëlle',
    'Gwendoline', 'Haydée', 'Hélène', 'Héloïse', 'Henriette', 'Honorine',
    'Hortense', 'Huguette', 'Inès', 'Ingrid', 'Irène', 'Iris', 'Isabelle',
    'Iseult', 'Jacqueline', 'Jade', 'Janine', 'Jasmine', 'Jeanne',
    'Jeannette', 'Jeannine', 'Jennifer', 'Jessica', 'Jocelyne', 'Joëlle',
    'Josée', 'Joséphine', 'Josette', 'Josseline', 'Judith', 'Julia', 'Julie',
    'Julienne', 'Juliette', 'Justine', 'Karine', 'Katia', 'Laetitia',
    'Laëtitia', 'Lara', 'Laura', 'Laure', 'Laurence', 'Laurette', 'Laurine',
    'Léa', 'Leila', 'Léone', 'Léonie', 'Leslie', 'Lesly', 'Liliane', 'Linda',
    'Lisa', 'Lise', 'Lisette', 'Lola', 'Lorraine', 'Lou', 'Louise', 'Lucie',
    'Lucienne', 'Lucile', 'Lucille', 'Lucrèce', 'Lydia', 'Lydie', 'Madeleine',
    'Maeva', 'Maéva', 'Magali', 'Maïté', 'Manon', 'Marcelle', 'Margaux',
    'Margot', 'Marguerite', 'Maria', 'Marianne', 'Marie', 'Marie-Ange',
    'Marie-Christine', 'Marie-Claire', 'Marie-Claude', 'Marie-France',
    'Marie-Françoise', 'Marie-Hélène', 'Marie-José', 'Marie-Laure',
    'Marie-Louise', 'Marie-Madeleine', 'Marie-Noëlle', 'Marie-Paule',
    'Marie-Pierre', 'Marie-Thérèse', 'Marielle', 'Mariette', 'Marina',
    'Marine', 'Marinette', 'Marion', 'Marlène', 'Marthe', 'Martine',
    'Maryvonne', 'Mathilde', 'Maud', 'Mégane', 'Mélanie', 'Mélissa',
    'Mélodie', 'Michèle', 'Micheline', 'Michelle', 'Mireille', 'Miryam',
    'Monique', 'Morgane', 'Muriel', 'Murielle', 'Myriam', 'Nadège', 'Nadia',
    'Nadine', 'Nancy', 'Natacha', 'Nathalie', 'Nicole', 'Nicolette',
    'Nicoline', 'Nikita', 'Nina', 'Noëlle', 'Noémi', 'Noémie', 'Océane',
    'Odette', 'Odile', 'Olivia', 'Ophélie', 'Orianne', 'Paola', 'Pascale',
    'Pascaline', 'Patricia', 'Paule', 'Paulette', 'Pauline', 'Peggy',
    'Perrine', 'Philomène', 'Pierrette', 'Rachel', 'Rachelle', 'Radegonde',
    'Raphaëlle', 'Raymonde', 'Rebecca', 'Rébecca', 'Régine', 'Reine', 'Renée',
    'Roberte', 'Rolande', 'Romaine', 'Romane', 'Rosalie', 'Rose',
    'Rose-Marie', 'Roseline', 'Roselyne', 'Roxane', 'Sabine', 'Sabrina',
    'Sandra', 'Sandrine', 'Sara', 'Sarah', 'Sauvanne', 'Ségolène',
    'Séraphine', 'Séverine', 'Sigolène', 'Simone', 'Simonne', 'Solange',
    'Solène', 'Solenn', 'Solenne', 'Sonia', 'Sophie', 'Stéphane', 'Stéphanie',
    'Suzanne', 'Sylvaine', 'Sylvia', 'Sylviane', 'Sylvie', 'Tania', 'Tatiana',
    'Thaïs', 'Thècle', 'Thérèse', 'Tiphaine', 'Valentine', 'Valérie',
    'Vanessa', 'Véronique', 'Victoire', 'Victoria', 'Violaine', 'Violette',
    'Virginie', 'Viviane', 'Vivienne', 'Yolande', 'Yseult', 'Yvette',
    'Yvonne', 'Zoé'];
  const names3 = ['Édouard', 'Abadie', 'Abbadie', 'About', 'Adnet', 'Affré',
    'Alard', 'Alarie', 'Aliker', 'Allaire', 'Allais', 'Allard', 'Allemand',
    'Alméras', 'Ancel', 'Ange', 'Anouilh', 'Appell', 'Arceneaux', 'Ardouin',
    'Arsenault', 'Asselin', 'Asselineau', 'Astier', 'Auberjonois', 'Aubert',
    'Auch', 'Auclair', 'Auger', 'Auguste', 'Auvray', 'Aveline', 'Azéma',
    'Azaïs', 'Bélanger', 'Béliveau', 'Bachelet', 'Bachelot', 'Bacque',
    'Badeaux', 'Baillairgé', 'Baillieu', 'Bain', 'Ballesdens', 'Ballouhey',
    'Balzac', 'Barbeau', 'Barbet', 'Barbier', 'Bardin', 'Barnier', 'Barrande',
    'Barrault', 'Barreau', 'Barthélemy', 'Barthet', 'Baschet', 'Bassot',
    'Batteux', 'Battier', 'Baudelaire', 'Baudet', 'Baugé', 'Baumé', 'Baume',
    'Bazalgette', 'Beaubois', 'Beauchamp', 'Beaudouin', 'Beaufils',
    'Beaugendre', 'Beaulieu', 'Beaulne', 'Beaumanoir', 'Beaumont',
    'Beauregard', 'Beauvais', 'Beauvau', 'Beauvilliers', 'Beaux', 'Bechard',
    'Bellegarde', 'Belyea', 'Benett', 'Berengar', 'Berger', 'Berlioz',
    'Bernier', 'Berthelot', 'Bertillon', 'Bescond', 'Besnard', 'Bessette',
    'Besson', 'Bethune', 'Bettencourt', 'Bissonnette', 'Bittencourt',
    'Blaise', 'Blanc', 'Blanchard', 'Blanchet', 'Blondeau', 'Bocuse',
    'Boffrand', 'Boisselot', 'Boissieu', 'Boissonade', 'Bombelles',
    'Bonhomme', 'Bonnel', 'Bonnet', 'Bonnot', 'Bossuet', 'Botrel', 'Bouchard',
    'Boucher', 'Boudet', 'Boudier', 'Boudon', 'Boudreaux', 'Bougie',
    'Bouhier', 'Boulanger', 'Boulet', 'Boulle', 'Bourbeau', 'Bourcier',
    'Bourdon', 'Bourgeois', 'Bourguignon', 'Bourque', 'Bourseiller',
    'Bousquet', 'Boutet', 'Bouthillier', 'Boutin', 'Boutroux', 'Bozonnet',
    'Brassard', 'Brasseur', 'Brazier', 'Breguet', 'Brian', 'Brochard',
    'Brosseau', 'Brousseau', 'Brugière', 'Bruguière', 'Bruneau', 'Brunelle',
    'Brunet', 'Bullion', 'Bureau', 'Côté', 'Cahun', 'Caillat', 'Cailloux',
    'Calvet', 'Camille', 'Carbonneau', 'Carpentier', 'Carré', 'Carrel',
    'Carrell', 'Cartier', 'Castex', 'Cazal', 'Cazenave', 'Celice', 'Cellier',
    'Cerf', 'Cerfbeer', 'Chéreau', 'Chéron', 'Chabert', 'Chagnon', 'Chaney',
    'Chapelle', 'Chappelle', 'Chappuis', 'Chapuis', 'Charbonneau',
    'Charbonnier', 'Chardin', 'Charpentier', 'Charrier', 'Chastain',
    'Chaucer', 'Chaufourier', 'Chausson', 'Chauve', 'Chauveau', 'Chevalier',
    'Chevotet', 'Choffard', 'Chopin', 'Choquet', 'Chuquet', 'Clérico',
    'Clérisseau', 'Clair', 'Cochet', 'Colbert', 'Compere', 'Coquelin',
    'Cordonnier', 'Cormier', 'Corne', 'Corriveau', 'Cortot', 'Coulomb',
    'Courbet', 'Courbis', 'Courtet', 'Courtial', 'Courvoisier', 'Cousteau',
    'Couturier', 'Couvreur', 'Crépin', 'Crevier', 'Crozier', 'Cuvier',
    'Cuvillier', 'D\'Aboville', 'D\'Amboise', 'Darche', 'Daucourt',
    'De Guignes', 'De Saint-Pierre', 'De Verley', 'De Villepin',
    'De Villiers', 'De la Croix', 'Delacroix', 'Delafose', 'Delafosse',
    'Delannoy', 'Delaplace', 'Delaunay', 'Delcroix', 'Delisle', 'Deloffre',
    'Delon', 'Delsarte', 'Demaret', 'Dembélé', 'Deniau', 'Derocles',
    'Deschanel', 'Descombes', 'Deshaies', 'Desjardins', 'Deslys', 'Desmarais',
    'Devereaux', 'Devereux', 'Devillers', 'Didier', 'Dieudonné', 'Dieulafoy',
    'Dimont', 'Dior', 'Doisneau', 'Donnet', 'Droz', 'Du Toit', 'Dubois',
    'Dubos', 'Dubost', 'Dubuisson', 'Duchamp', 'Duchemin', 'Duclos', 'Dufour',
    'Dufresne', 'Duhamel', 'Dujardin', 'Dumont', 'Dupont', 'Dupuis', 'Dupuy',
    'Durand', 'Duret', 'Dutertre', 'Dutoit', 'Duval', 'Duverger',
    'Emmanuelli', 'Escoffier', 'Féret', 'Fétique', 'Favre', 'Figuier',
    'Flandin', 'Fouché', 'Fouquet', 'Fournier', 'Frère', 'Fresnel', 'Génin',
    'Gérald', 'Gérard', 'Gérin', 'Gérin-Lajoie', 'Gachet', 'Gagnon',
    'Gainsbourg', 'Gallois', 'Galopin', 'Gardet', 'Garnier', 'Garreau',
    'Gaubert', 'Gaudin', 'Gaudreau', 'Gaume', 'Gaumont', 'Gauthier',
    'Gavreau', 'Geffroy', 'Geiger', 'Genest', 'Genet', 'Gicquel', 'Gide',
    'Gigot', 'Gilson', 'Girard', 'Girardot', 'Giraud', 'Girault', 'Gouin',
    'Gounelle', 'Grandis', 'Grandjean', 'Granet', 'Gribelin', 'Grinda',
    'Grosjean', 'Gueguen', 'Guilbert', 'Guillaume', 'Guilloux', 'Hébras',
    'Hémery', 'Hérisson', 'Héroux', 'Hachette', 'Haillet', 'Halphen', 'Hauet',
    'Hector', 'Hennequin', 'Houdin', 'Jégou', 'Jaccoud', 'Jacquard',
    'Jacquemin', 'Jacquemoud', 'Jacquet', 'Jacquier', 'Jacquinot', 'Jaubert',
    'Jauffret', 'Jeannin', 'Joguet', 'Joubert', 'Jullien', 'Kaplan', 'Kléber',
    'Léger', 'Lémery', 'LaFromboise', 'LaRue', 'Lacan', 'Lafaille',
    'Laffitte', 'Laflèche', 'Laframboise', 'Lagarde', 'Lahaye', 'Lajoie',
    'Lalande', 'Lambert', 'Landry', 'Larousse', 'Laurens', 'Laurent',
    'Lavaud', 'Lavigne', 'Lazard', 'Le Sueur', 'Le Tonnelier', 'LeBeau',
    'LeMahieu', 'Leavitt', 'Lebas', 'Leblanc', 'Lecerf', 'Leclère', 'Leclair',
    'Lecocq', 'Lefeuvre', 'Lefrançois', 'Leloup', 'Lemaître', 'Lemaigre',
    'Lemoine', 'Leroux', 'Levasseur', 'Levett', 'Lièvremont', 'Longchambon',
    'Lortie', 'Loup', 'Loupe', 'Lozé', 'Lucroy', 'Lucy', 'Lussier',
    'Ménétries', 'Ménard', 'Mace', 'Magnier', 'Maitre', 'Malet', 'Mallet',
    'Mallette', 'Manaudou', 'Manoury', 'Marais', 'Marchal', 'Marchand',
    'Marchant', 'Maret', 'Martin', 'Massé', 'Masson', 'Matthieu', 'Maurice',
    'Mazet', 'Mesny', 'Messier', 'Michaux', 'Micheaux', 'Mignard', 'Milhaud',
    'Millet', 'Moineau', 'Moitessier', 'Monteil', 'Montgomery', 'Moreau',
    'Morel', 'Morin', 'Mossé', 'Naudé', 'Nee', 'Neri', 'Nicollier', 'Niel',
    'Noir', 'Ouvrard', 'Pélissier', 'Périer', 'Paquin', 'Parmentier',
    'Pascal', 'Pasquier', 'Passereau', 'Pasteur', 'Peletier', 'Pelletier',
    'Peltier', 'Pernet', 'Philidor', 'Philippon', 'Piaget', 'Picard',
    'Pichard', 'Pierlot', 'Pierrat', 'Pinchon', 'Plantier', 'Pleimelding',
    'Plessis', 'Plouffe', 'Poincaré', 'Pomeroy', 'Ponce', 'Popelin',
    'Portier', 'Poulin', 'Poullain', 'Poussin', 'Pretre', 'Prudhomme',
    'Pueyrredón', 'Quint', 'Rémy', 'Raoult', 'Rapace', 'Regnard', 'Renaudin',
    'Renou', 'Reverdin', 'Rigal', 'Riqueti', 'Roatta', 'Robillard',
    'Robineau', 'Robiquet', 'Rochefort', 'Rochette', 'Rodier', 'Rodin',
    'Rossignol', 'Rouanet', 'Rousseau', 'Rousselle', 'Rousselot', 'Rouzet',
    'Sadoul', 'Saint-Yves', 'Sardou', 'Sartre', 'Saunier', 'Schaeffer',
    'Serre', 'Seyrès', 'Sharpe', 'Silvestre', 'Simon', 'Solé', 'Souchon',
    'Soyer', 'Spanghero', 'Stuart', 'Subercaseaux', 'Suchet', 'Sylvestre',
    'Thévenet', 'Thibault', 'Thibodeau', 'Thibodeaux', 'Thiers', 'Tomas',
    'Touchard', 'Tourneur', 'Toussaint', 'Toutain', 'Trémaux', 'Tremblay',
    'Trintignant', 'Trottier', 'Trouvé', 'Trudeau', 'Vérany', 'Vaganay',
    'Vaillancourt', 'Vallée', 'Vallotton', 'Valluy', 'Vandame', 'Vannier',
    'Vasseur', 'Vaugeois', 'Vaugrenard', 'Veil', 'Vernier', 'Verninac',
    'Vidal', 'Vigouroux', 'Wathelet']; {
    rnd2 = Math.floor(Math.random() * names3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * names2.length);
      names = `${names2[rnd]} ${names3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * names1.length);
      names = `${names1[rnd]} ${names3[rnd2]}`;
    }
    return names;
  }
}
