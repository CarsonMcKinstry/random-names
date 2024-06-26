import { sample } from 'lodash';

export default function cajuns() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aaron',
        'Abélard',
        'Abel',
        'Abraham',
        'Acace',
        'Achille',
        'Adam',
        'Adhémar',
        'Adrien',
        'Aimé',
        'Aimable',
        'Alain',
        'Albéric',
        'Alban',
        'Albert',
        'Albin',
        'Aldo',
        'Alex',
        'Alexandre',
        'Alexis',
        'Alfred',
        'Alonso',
        'Aloysius',
        'Alphonse',
        'Amédée',
        'Amaël',
        'Amand',
        'Ambroise',
        'Amos',
        'Amoury',
        'Anastase',
        'Anatole',
        'Andoche',
        'André',
        'Anicet',
        'Anselme',
        'Anthelme',
        'Anthony',
        'Antoine',
        'Antonin',
        'Apollinaire',
        'Apollos',
        'Arcadius',
        'Arcady',
        'Archibald',
        'Aristide',
        'Armand',
        'Armel',
        'Arnaud',
        'Arnold',
        'Arnould',
        'Arsène',
        'Arthur',
        'Athanase',
        'Aubert',
        'Aubin',
        'Auguste',
        'Augustin',
        'Aurélien',
        'Avit',
        'Axel',
        'Aymar',
        'Aymeric',
        'Bérenger',
        'Balthazar',
        'Baptiste',
        'Barnabé',
        'Barnard',
        'Barthélémy',
        'Bartolomé',
        'Basile',
        'Bastien',
        'Baudouin',
        'Benjamin',
        'Benoît',
        'Bernard',
        'Bernardin',
        'Bertrand',
        'Billy',
        'Blaise',
        'Bonaventure',
        'Boniface',
        'Boris',
        'Briac',
        'Brice',
        'Brieuc',
        'Bruno',
        'Cédric',
        'Célestin',
        'Césaire',
        'César',
        'Candide',
        'Carl',
        'Carlos',
        'Casimir',
        'Charles',
        'Charley',
        'Charly',
        'Christian',
        'Christophe',
        'Clément',
        'Claudius',
        'Clovis',
        'Colin',
        'Colomban',
        'Conrad',
        'Constant',
        'Constantin',
        'Corentin',
        'Crépin',
        'Cyprien',
        'Cyriaque',
        'Cyrille',
        'Désiré',
        'Damien',
        'Daniel',
        'David',
        'Davy',
        'Denis',
        'Diègo',
        'Didier',
        'Dietrich',
        'Dieudonné',
        'Dimitri',
        'Dirk',
        'Domnin',
        'Donald',
        'Donatien',
        'Dorian',
        'Edgar',
        'Edmond',
        'Edouard',
        'Elfried',
        'Elie',
        'Eloi',
        'Emeric',
        'Emile',
        'Emilien',
        'Emmanuel',
        'Enrique',
        'Eric',
        'Erich',
        'Ernest',
        'Erwan',
        'Erwin',
        'Esteban',
        'Etienne',
        'Eugène',
        'Eusèbe',
        'Eustache',
        'Evariste',
        'Everard',
        'Félicien',
        'Félix',
        'Fabien',
        'Fabrice',
        'Faustin',
        'Ferdinand',
        'Fernand',
        'Firmin',
        'Flavien',
        'Florent',
        'Florentin',
        'Florian',
        'Frédéric',
        'François',
        'Francelin',
        'Francis',
        'Franck',
        'Frankie',
        'Franz',
        'Freddy',
        'Fulbert',
        'Gérald',
        'Gérard',
        'Géraud',
        'Géry',
        'Gaétan',
        'Gaël',
        'Gabin',
        'Gabriel',
        'Gaby',
        'Gaspard',
        'Gaston',
        'Gatien',
        'Gautier',
        'Geoffrey',
        'Geoffroy',
        'Georges',
        'Germain',
        'Gervais',
        'Ghislain',
        'Gilbert',
        'Gildas',
        'Gilles',
        'Gino',
        'Giraud',
        'Godefroy',
        'Gontran',
        'Gonzague',
        'Goulven',
        'Grégoire',
        'Grégori',
        'Grégory',
        'Guénolé',
        'Guerric',
        'Guewen',
        'Guillaume',
        'Gustave',
        'Guy',
        'Gwénaël',
        'Habib',
        'Hans',
        'Harold',
        'Harry',
        'Hartmann',
        'Hector',
        'Henri',
        'Herbert',
        'Hermès',
        'Hermann',
        'Hervé',
        'Hilaire',
        'Hilarion',
        'Hippolyte',
        'Honoré',
        'Hubert',
        'Hugo',
        'Hugues',
        'Humbert',
        'Idir',
        'Ignace',
        'Igor',
        'Isaac',
        'Isidore',
        'Ivan',
        'Jérémie',
        'Jérôme',
        'Jack',
        'Jacky',
        'Jacob',
        'Jacques',
        'James',
        'Jaouen',
        'Jean',
        'Jean-Baptiste',
        'Jean-François',
        'Jean-Marie',
        'Jessy',
        'Jesus',
        'Jim',
        'Joévin',
        'Joël',
        'Joachim',
        'John',
        'Johnny',
        'Joris',
        'José',
        'Joseph',
        'Joseph-Marie',
        'Josse',
        'Judicaël',
        'Jules',
        'Julien',
        'Juste',
        'Justin',
        'Juvénal',
        'Kévin',
        'Kurt',
        'Léger',
        'Léo',
        'Léon',
        'Léonard',
        'Léonce',
        'Léopold',
        'Ladislas',
        'Lambert',
        'Landry',
        'Laurent',
        'Lazare',
        'Lilian',
        'Lionel',
        'Loïc',
        'Loïck',
        'Loïs',
        'Louis',
        'Loup',
        'Luc',
        'Luca',
        'Lucas',
        'Lucien',
        'Ludovic',
        'Ludwig',
        'Lufroid',
        'Lusignan',
        'Médéric',
        'Médard',
        'Mériadec',
        'Maël',
        'Magloire',
        'Malo',
        'Manoël',
        'Manuel',
        'Marc',
        'Marceau',
        'Marcel',
        'Marcellin',
        'Marcien',
        'Marien',
        'Marin',
        'Marius',
        'Mars',
        'Martial',
        'Martin',
        'Martinien',
        'Mathurin',
        'Matthias',
        'Matthieu',
        'Maurice',
        'Max',
        'Maxime',
        'Maximilien',
        'Maximin',
        'Melaine',
        'Merlin',
        'Michel',
        'Mickaël',
        'Miloud',
        'Moïse',
        'Modeste',
        'Morvan',
        'Narcisse',
        'Nathanaël',
        'Nello',
        'Nestor',
        'Nicolas',
        'Nikita',
        'Nils',
        'Noé',
        'Noël',
        'Norbert',
        'Octave',
        'Octavien',
        'Odilon',
        'Olaf',
        'Olivier',
        'Omer',
        'Onésime',
        'Oscar',
        'Oswald',
        'Otmar',
        'Ovide',
        'Pablo',
        'Pacôme',
        'Paco',
        'Paquito',
        'Parfait',
        'Pascal',
        'Patrice',
        'Patrick',
        'Paul',
        'Paulin',
        'Peter',
        'Philémon',
        'Philibert',
        'Philippe',
        'Pierre',
        'Pierrick',
        'Placide',
        'Pol',
        'Prismaël',
        'Prosper',
        'Quentin',
        'Réginald',
        'Régis',
        'Régnault',
        'Rémi',
        'Rénald',
        'Rachilde',
        'Rainier',
        'Ralph',
        'Raoul',
        'Raphaël',
        'Raymond',
        'René',
        'Renaud',
        'Richard',
        'Robert',
        'Robin',
        'Robinson',
        'Roch',
        'Rodolphe',
        'Rodrigue',
        'Rogatien',
        'Roger',
        'Roland',
        'Roméo',
        'Romain',
        'Romaric',
        'Romuald',
        'Ronald',
        'Ronan',
        'Roparz',
        'Roxan',
        'Rudy',
        'Rufin',
        'Sébastien',
        'Séraphin',
        'Séverin',
        'Salomon',
        'Salvatore',
        'Samson',
        'Samuel',
        'Samy',
        'Saturnin',
        'Serge',
        'Servan',
        'Siegfried',
        'Silvère',
        'Siméon',
        'Simon',
        'Stanislas',
        'Sylvain',
        'Sylvestre',
        'Sylvian',
        'Symphorien',
        'Téofil',
        'Tanguy',
        'Teddy',
        'Théodore',
        'Théophile',
        'Thaddee',
        'Thiébaud',
        'Thibaut',
        'Thierry',
        'Thomas',
        'Tino',
        'Trefflé',
        'Tudal',
        'Ulrich',
        'Urbain',
        'Valère',
        'Valéry',
        'Valentin',
        'Vassili',
        'Vencelas',
        'Victor',
        'Victorien',
        'Victorin',
        'Vincent',
        'Virgile',
        'Vital',
        'Vivian',
        'Vivien',
        'Vladimir',
        'Walter',
        'Wenceslas',
        'Werner',
        'Wilfried',
        'William',
        'Winnoc',
        'Wolfgang',
        'Wulfran',
        'Xavier',
        'Yann',
        'Yannick',
        'Youri',
        'Yvan',
        'Yves',
        'Yvon',
        'Zéphirin',
        'Zéphyrin',
        'Zacharie',
    ];
    const nm2 = [
        'Abélia',
        'Abdélina',
        'Abella',
        'Abondance',
        'Adèle',
        'Adélaïde',
        'Ada',
        'Adeline',
        'Adnette',
        'Adrienne',
        'Agathe',
        'Aglaé',
        'Agnès',
        'Aimée',
        'Albane',
        'Alberta',
        'Alberte',
        'Albertine',
        'Alda',
        'Aldegonde',
        'Alette',
        'Alexandra',
        'Alexandrine',
        'Alexia',
        'Alexiane',
        'Aleyde',
        'Alfreda',
        'Alice',
        'Alida',
        'Aline',
        'Aloïs',
        'Alphonsine',
        'Amélie',
        'Amance',
        'Amandine',
        'Amilton',
        'Anaïs',
        'Anastasia',
        'Anastasie',
        'Andrée',
        'Angèle',
        'Angéline',
        'Angélique',
        'Ange',
        'Anita',
        'Anna',
        'Annabelle',
        'Anne',
        'Anne-Marie',
        'Annette',
        'Annick',
        'Annie',
        'Annonciade',
        'Anouchka',
        'Anouck',
        'Antoinette',
        'Apolline',
        'Appoline',
        'Arabelle',
        'Ariane',
        'Arielle',
        'Arlette',
        'Armande',
        'Armelise',
        'Armelle',
        'Astrid',
        'Auberi',
        'Aude',
        'Audrey',
        'Augusta',
        'Augustine',
        'Aurélia',
        'Aurélie',
        'Aure',
        'Aurore',
        'Ava',
        'Axelle',
        'Aymone',
        'Béatrice',
        'Bénédicte',
        'Bérénice',
        'Bérengère',
        'Babette',
        'Babine',
        'Babita',
        'Balbine',
        'Barbara',
        'Barbe',
        'Barberine',
        'Bastienne',
        'Bathilde',
        'Beatrix',
        'Benjamine',
        'Benoîte',
        'Bernadette',
        'Berthe',
        'Bertille',
        'Bettina',
        'Betty',
        'Bienvenue',
        'Blanche',
        'Blandine',
        'Bluette',
        'Brigitte',
        'Cécile',
        'Céleste',
        'Célia',
        'Céline',
        'Césarine',
        'Camilla',
        'Capucine',
        'Carine',
        'Carmen',
        'Carole',
        'Caroline',
        'Catherine',
        'Cecilia',
        'Celesie',
        'Chantal',
        'Charlotte',
        'Chloé',
        'Christelle',
        'Christiane',
        'Christine',
        'Clélia',
        'Clémence',
        'Clémentine',
        'Claire',
        'Clara',
        'Clarisse',
        'Claudette',
        'Claudie',
        'Claudine',
        'Clotilde',
        'Colette',
        'Colombe',
        'Constance',
        'Cora',
        'Coralie',
        'Corentine',
        'Corinne',
        'Déborah',
        'Délina',
        'Désirée',
        'Dahlia',
        'Daisy',
        'Danièle',
        'Danielle',
        'Danitza',
        'Dany',
        'Daphné',
        'Daria',
        'Dauveline',
        'Delphine',
        'Denise',
        'Diane',
        'Dolorès',
        'Domitille',
        'Donatienne',
        'Dora',
        'Doria',
        'Doriane',
        'Dorine',
        'Doris',
        'Dorothée',
        'Edda',
        'Edith',
        'Edmée',
        'Edma',
        'Edouardine',
        'Edwige',
        'Eglantine',
        'Eléonore',
        'Elena',
        'Eliane',
        'Eliette',
        'Eline',
        'Elisabeth',
        'Elise',
        'Eliska',
        'Ellénita',
        'Ella',
        'Elodia',
        'Elodie',
        'Elosida',
        'Elsa',
        'Elsy',
        'Elvire',
        'Emeline',
        'Emilie',
        'Emilienne',
        'Emma',
        'Emmanuelle',
        'Emmelia',
        'Erika',
        'Ernestine',
        'Estelle',
        'Esther',
        'Eugénie',
        'Eurielle',
        'Eva',
        'Eve(f)',
        'Evelyne',
        'Félicie',
        'Félicienne',
        'Félicité',
        'Fabienne',
        'Fabiola',
        'Fanchon',
        'Fanny',
        'Faustine',
        'Fernande',
        'Fiacre',
        'Flavie',
        'Flora',
        'Florence',
        'Florentine',
        'Florine',
        'Frédérique',
        'François-Xavier',
        'Françoise',
        'France',
        'Franceline',
        'Francette',
        'Francine',
        'Frida',
        'Géraldine',
        'Géronima',
        'Gaétane',
        'Gaëlle',
        'Gabrielle',
        'Galiane',
        'Geneviève',
        'Georgette',
        'Georgia',
        'Georgina',
        'Georgine',
        'Germaine',
        'Gersende',
        'Gertrude',
        'Gervaise',
        'Ghislaine',
        'Gilberte',
        'Gina',
        'Ginette',
        'Gisèle',
        'Gladys',
        'Grâce',
        'Gracianne',
        'Gracieuse',
        'Graziella',
        'Guillaumette',
        'Gwénola',
        'Gwenaëlle',
        'Gwendoline',
        'Gwenn',
        'Hélène',
        'Hélièna',
        'Héloïse',
        'Hélyette',
        'Henriette',
        'Hermance',
        'Hermine',
        'Hilda',
        'Hildegarde',
        'Honorine',
        'Hortense',
        'Huberte',
        'Huguette',
        'Hyacinthe',
        'Iadine',
        'Ida',
        'Inès',
        'Ingrid',
        'Irènée',
        'Irène',
        'Iris',
        'Irma',
        'Isabau',
        'Isabelle',
        'Isaure',
        'Ivanne',
        'Jézabel',
        'Jacinthe',
        'Jackie',
        'Jacqueline',
        'Jacquette',
        'Jacquine',
        'Jacquotte',
        'Jasmine',
        'Jeanne',
        'Jeannine',
        'Jenny',
        'Jessica',
        'Joëlle',
        'Johanne',
        'Jordane',
        'Joséphine',
        'Josette',
        'Josiane',
        'Juanita(f)',
        'Judith',
        'Julia',
        'Julie',
        'Julienne',
        'Juliette',
        'Justine',
        'Karelle',
        'Karin',
        'Karine',
        'Karren',
        'Katel',
        'Katia',
        'Katy',
        'Ketty',
        'Léïla',
        'Léa',
        'Léane',
        'Léna',
        'Léocadie',
        'Léone',
        'Léonie',
        'Léonilde',
        'Léontine',
        'Léopoldine',
        'Laétitia',
        'Laodicie',
        'Lara',
        'Larissa',
        'Laure',
        'Laurence',
        'Laurentine',
        'Laurette',
        'Laurie',
        'Leslie',
        'Lidwine',
        'Lila',
        'Liliane',
        'Lily',
        'Linda',
        'Line',
        'Lisa',
        'Lisbeth',
        'Lise',
        'Lisette',
        'Lizzie',
        'Lola',
        'Lolita',
        'Lore',
        'Lorraine',
        'Louise',
        'Louisiane',
        'Lousiane',
        'Luce',
        'Lucette',
        'Lucie',
        'Lucienne',
        'Lucille',
        'Lucrèce',
        'Ludivine',
        'Ludmilla',
        'Lutgarde',
        'Lydiane',
        'Lydie',
        'Lysiane',
        'Mélanie',
        'Mélissa',
        'Maëlle',
        'Maïté',
        'Maÿllis',
        'Maddy',
        'Madeleine',
        'Magali',
        'Maggy',
        'Manon',
        'Manuelle',
        'Marcelite',
        'Marcelle',
        'Marcelline',
        'Marguerite',
        'Maria',
        'Mariam',
        'Marianne',
        'Mariannick',
        'Marie',
        'Marie-Amable',
        'Marie-Angélique',
        'Marie-Anne',
        'Marie-Antoinette',
        'Marie-Archange',
        'Marie-Catherine',
        'Marie-Charlotte',
        'Marie-Elie',
        'Marie-Elisabeth',
        'Marie-Françoise',
        'Marie-Geneviève',
        'Marie-Josèphe',
        'Marie-Louise',
        'Marie-Madeleine',
        'Marie-Marguerite',
        'Marie-Thérèse',
        'Marielle',
        'Marietta',
        'Mariette',
        'Marilyne',
        'Marina',
        'Marine',
        'Marinette',
        'Marion',
        'Marjolaine',
        'Marjorie',
        'Marlène',
        'Marthe',
        'Martine',
        'Marylène',
        'Marylin',
        'Marylise',
        'Maryse',
        'Maryvonne',
        'Mathilde',
        'Maud',
        'Mauricette',
        'Maximilienne',
        'May',
        'Mercédès',
        'Michèle',
        'Micheline',
        'Milène',
        'Mireille',
        'Mirthie',
        'Monique',
        'Muriel',
        'Myriam',
        'Myrtille',
        'Nadège',
        'Nadette',
        'Nadia',
        'Nadine',
        'Nancy',
        'Nastasia',
        'Natacha',
        'Nathalie',
        'Nathanaëlle',
        'Nelly',
        'Nicole',
        'Nicoletta',
        'Nina',
        'Ninon',
        'Noémie',
        'Noëlle',
        'Noëllie',
        'Noelie',
        'Nolwenn',
        'Nora',
        'Octavie',
        'Odalie',
        'Odette',
        'Odile',
        'Olga',
        'Olive',
        'Olivia',
        'Olphida',
        'Ombeline',
        'Orianne',
        'Pâquerette',
        'Pélagie',
        'Péroline',
        'Pétronille',
        'Paméla',
        'Paola',
        'Paquita',
        'Pascale',
        'Pascaline',
        'Patricia',
        'Paula',
        'Paule',
        'Paulette',
        'Pauline',
        'Peggy',
        'Perlette',
        'Pernelle',
        'Perpetue',
        'Perrette',
        'Perrine',
        'Pervenche',
        'Philiberte',
        'Philomène',
        'Pierrette',
        'Prisca',
        'Priscilla',
        'Prudence',
        'Régine',
        'Réjane',
        'Raïssa',
        'Rachel',
        'Radegonde',
        'Raphaëlle',
        'Raymonde',
        'Rebecca',
        'Reine',
        'Renée',
        'Rita',
        'Roberte',
        'Rolande',
        'Rosa',
        'Rosalie',
        'Rosaline',
        'Rose',
        'Roseline',
        'Rosemonde',
        'Rosette',
        'Rosine',
        'Rosita',
        'Rosy',
        'Roxanne',
        'Rozenn',
        'Sébastienne',
        'Ségolène',
        'Séverine',
        'Saberrah',
        'Sabine',
        'Sabrina',
        'Sakina',
        'Sandie',
        'Sandra',
        'Sandrine',
        'Sara',
        'Selma',
        'Sergine',
        'Servane',
        'Sheila',
        'Sibille',
        'Sidonie',
        'Sigolène',
        'Simone',
        'Soizic',
        'Solange',
        'Solenne',
        'Soline',
        'Sonia',
        'Sophie',
        'Stéphanie',
        'Stella',
        'Suzanne',
        'Suzette',
        'Suzon',
        'Suzy',
        'Sveltana',
        'Sylvaine',
        'Sylvette',
        'Sylvianne',
        'Sylvie',
        'Térésa',
        'Tamara',
        'Tania',
        'Tatiana',
        'Tatienne',
        'Telside',
        'Tessa',
        'Thècle',
        'Théophane',
        'Thérèse',
        'Théroigne',
        'Tilma',
        'Tiphaine',
        'Uranie',
        'Urielle',
        'Ursula',
        'Ursule',
        'Véra',
        'Vérane',
        'Véronique',
        'Valérie',
        'Valentine',
        'Vanessa',
        'Vanica',
        'Victoire',
        'Victoria',
        'Victorine',
        'Vincianne',
        'Violaine',
        'Violette',
        'Virginie',
        'Viridiana',
        'Viviane',
        'Vivienne',
        'Wilfrede',
        'Xavière',
        'Yoann',
        'Yolande',
        'Yvette',
        'Yvonne',
        'Zita',
        'Zoé',
    ];
    const nm3 = [
        'Achee',
        'Allain',
        'Arceneaux',
        'Arsenault',
        'Arseneau',
        'Aubin-Mignault',
        'Aucoin',
        'Aury',
        'Authement',
        'Babin',
        'Babineau',
        'Babineaux',
        'Barillot',
        'Barnabe',
        'Barrilleaux',
        'Bastarache',
        'Beaumont',
        'Belanger',
        'Beliveau',
        'Bellefontaine',
        'Benoit',
        'Bergeron',
        'Bernard',
        'Bertrand',
        'Bideau',
        'Blanchard',
        'Blanchard ',
        'Blondin',
        'Blou',
        'Boisseau',
        'Bonvillain',
        'Bordelon',
        'Boucher',
        'Boudreau',
        'Boudreaux',
        'Bourg',
        'Bourgeois',
        'Bourque',
        'Boutin',
        'Breau',
        'Breaux',
        'Breton',
        'Broussard',
        'Brun',
        'Cadet',
        'Caissy',
        'Cambre',
        'Carre',
        'Champagne',
        'Chauff',
        'Chauvert',
        'Chauvin',
        'Chiasson',
        'Clemenceau',
        'Comeau',
        'Cormier',
        'Corporon',
        'Cosse',
        'Cyr',
        "D'Entremont",
        'Daigle',
        'Damboue',
        'Darois',
        'David',
        'De Bellisle',
        'Denis',
        'Desaulniers',
        'Devaux',
        'Doiron',
        'Donat',
        'Douaron',
        'Doucet',
        'Dubois',
        'Dugas',
        'Duhon',
        'Dumont',
        'Dupeux',
        'Dupuis',
        'Emmanuel',
        'Eschete',
        'Fontenot',
        'Forest',
        'Foret',
        'Fournier',
        'Frederick',
        'Fruge',
        'Fuselier',
        'Gallant',
        'Gareau',
        'Gaudet',
        'Gauterot',
        'Gauthier',
        'Gautreaux',
        'Gentil',
        'Giroir',
        'Girouard',
        'Godin ',
        'Gourdeau',
        'Gousille',
        'Granger',
        'Gravois',
        'Guerin',
        'Guidry',
        'Guilbaut',
        'Guilbeau',
        'Guillot',
        'Hache',
        'Hebert',
        'Henry',
        'Herpin',
        'Huval',
        'Jasmin',
        'Jeanmard',
        'Jeansonne',
        'Johnson',
        "L'Esperance",
        'Labarre',
        'Labauve',
        'Lafont',
        'Lagasse',
        'Lalande',
        'Laliberte',
        'Lambert',
        'Lamontagne',
        'Landry',
        'Langlois',
        'Lanoue',
        'Lanoux',
        'Lapierre',
        'Lapierre  ',
        'Latour',
        'Laurier',
        'Lavache',
        'Lavallee',
        'Lavergne',
        'Lavernge',
        'Lebasque',
        'Leblanc',
        'Leboeuf',
        'Lebreton',
        'Lecompte',
        'Leger',
        'Lejeune',
        'Lemaistre',
        'Lemarquis',
        'Leprince',
        'Lessoile',
        'Levron',
        'Longuepee',
        'Lort',
        'Louviere',
        'Lyonnais',
        'Maillard',
        'Maillet',
        'Maisonnat',
        'Manceau',
        'Marcel',
        'Martin',
        'Matherne',
        'Mazerolle',
        'Melancon',
        'Melanson',
        'Mercier',
        'Michaud',
        'Michel',
        'Millet',
        'Mirande',
        'Morin',
        'Mouton',
        'Moyse',
        'Naquin',
        'Nuirat',
        'Olivier',
        'Ondy',
        'Orry',
        'Ory',
        'Oubre',
        'Ouellette',
        'Paris',
        'Parisien',
        'Pellerin',
        'Petitpas',
        'Picou',
        'Pinet',
        'Pitre',
        'Poirier',
        'Pothier',
        'Prejean',
        'Raymond',
        'Richard',
        'Rimbaut',
        'Rivet',
        'Rivette',
        'Robichau',
        'Robichaud',
        'Rodrigue',
        'Roger',
        'Rome',
        'Rommel',
        'Rossette',
        'Roy',
        'Saint-Scene',
        'Samson',
        'Saulnier',
        'Savary',
        'Savoie',
        'Savoy',
        'Schexnayder',
        'Semer',
        'Simon',
        'Simoneaux',
        'Surette',
        'Tassin',
        'Terriau',
        'Theriault',
        'Theriot',
        'Thibault',
        'Thibeau',
        'Thibodeau',
        'Thibodeaux',
        'Tourangeau',
        'Toussaint',
        'Trahan',
        'Tregre',
        'Veco',
        'Vilatte',
        'Vincent',
        'Voyer',
        'Yvon',
    ];
    {
        if (type === 1) {
            names = `${sample(nm2)} ${sample(nm3)}`;
        } else {
            names = `${sample(nm1)} ${sample(nm3)}`;
        }
        return names;
    }
}
