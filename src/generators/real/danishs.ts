import { sample } from 'lodash';

export default function danishs() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aage',
        'Absalon',
        'Adam',
        'Adolf',
        'Adrian',
        'Aksel',
        'Albert',
        'Alex',
        'Alexander',
        'Alf',
        'Alfred',
        'Allan',
        'Anders',
        'Andreas',
        'Anker',
        'Anton',
        'Arne',
        'Arnold',
        'Aron',
        'Arthur',
        'Arvid',
        'Asbjorn',
        'Asger',
        'Aske',
        'Asmus',
        'August',
        'Axel',
        'Bastian',
        'Bendt',
        'Benjamin',
        'Benny',
        'Bent',
        'Bernhard',
        'Bernt',
        'Bertel',
        'Berthel',
        'Bertram',
        'Birger',
        'Bjarke',
        'Bjarne',
        'Bjorn',
        'Bo',
        'Boje',
        'Borge',
        'Boye',
        'Brian',
        'Bruno',
        'Carl',
        'Carsten',
        'Casper',
        'Chresten',
        'Chris',
        'Christen',
        'Christian',
        'Christoffer',
        'Christopher',
        'Claus',
        'Dan',
        'Daniel',
        'Danni',
        'Danny',
        'David',
        'Dennis',
        'Ditlev',
        'Ebbe',
        'Edmund',
        'Edvard',
        'Edvin',
        'Egon',
        'Eigil',
        'Ejgil',
        'Ejnar',
        'Ejner',
        'Ejvind',
        'Elias',
        'Elmer',
        'Elo',
        'Emanuel',
        'Emil',
        'Erik',
        'Erland',
        'Erling',
        'Ernst',
        'Esben',
        'Eskild',
        'Evald',
        'Felix',
        'Ferdinand',
        'Filip',
        'Finn',
        'Flemming',
        'Frank',
        'Frans',
        'Freddy',
        'Frede',
        'Frederik',
        'Frithjof',
        'Frits',
        'Frode',
        'Gabriel',
        'Georg',
        'Gerhard',
        'Germund',
        'Gert',
        'Gorm',
        'Gotfred',
        'Gregers',
        'Gunnar',
        'Gunner',
        'Gustav',
        'Hans',
        'Harald',
        'Harry',
        'Helge',
        'Helmer',
        'Hemming',
        'Henning',
        'Henrik',
        'Henry',
        'Herman',
        'Hjalmar',
        'Hjalte',
        'Holger',
        'Hugo',
        'Ib',
        'Immanuel',
        'Ingolf',
        'Isak',
        'Ivan',
        'Ivar',
        'Iver',
        'Jack',
        'Jacob',
        'Jakob',
        'Jan',
        'Jannik',
        'Janus',
        'Jens',
        'Jeppe',
        'Jes',
        'Jesper',
        'Jim',
        'Jimmi',
        'Jimmy',
        'Joel',
        'Johan',
        'Johannes',
        'John',
        'Johnny',
        'Jon',
        'Jonas',
        'Jonatan',
        'Jonathan',
        'Jorgen',
        'Jorn',
        'Josef',
        'Julian',
        'Julius',
        'Just',
        'Kai',
        'Kaj',
        'Karl',
        'Karsten',
        'Kasper',
        'Keld',
        'Ken',
        'Kenneth',
        'Kent',
        'Kim',
        'Kjeld',
        'Klaus',
        'Knud',
        'Kresten',
        'Kristen',
        'Kristian',
        'Kristoffer',
        'Kurt',
        'Lars',
        'Lasse',
        'Lau',
        'Lauge',
        'Laurids',
        'Laurits',
        'Lauritz',
        'Laust',
        'Lave',
        'Leif',
        'Lennart',
        'Leo',
        'Leon',
        'Loke',
        'Lucas',
        'Ludvig',
        'Lukas',
        'Mads',
        'Magnus',
        'Malte',
        'Malthe',
        'Marc',
        'Marcus',
        'Marius',
        'Mark',
        'Markus',
        'Martin',
        'Mathias',
        'Matthias',
        'Max',
        'Michael',
        'Mikael',
        'Mike',
        'Mikkel',
        'Mogens',
        'Morten',
        'Mourits',
        'Nichlas',
        'Nick',
        'Nicki',
        'Nicklas',
        'Nicolai',
        'Nicolaj',
        'Niels',
        'Niklas',
        'Nikolai',
        'Nikolaj',
        'Nils',
        'Nis',
        'Noah',
        'Olaf',
        'Olav',
        'Ole',
        'Oliver',
        'Oluf',
        'Orla',
        'Oscar',
        'Oskar',
        'Osvald',
        'Otto',
        'Ove',
        'Palle',
        'Patrick',
        'Paul',
        'Paw',
        'Peder',
        'Per',
        'Peter',
        'Philip',
        'Phillip',
        'Poul',
        'Povl',
        'Preben',
        'Rasmus',
        'René',
        'Rene',
        'Richard',
        'Robert',
        'Robin',
        'Rolf',
        'Ronald',
        'Ronni',
        'Ronnie',
        'Rune',
        'Samuel',
        'Sebastian',
        'Severin',
        'Sigfred',
        'Sigurd',
        'Silas',
        'Simon',
        'Sofus',
        'Sonny',
        'Sophus',
        'Soren',
        'Steen',
        'Stefan',
        'Steffen',
        'Sten',
        'Stephan',
        'Stig',
        'Storm',
        'Sune',
        'Svend',
        'Tage',
        'Teddy',
        'Theis',
        'Theodor',
        'Thomas',
        'Thor',
        'Thorbjorn',
        'Thorkild',
        'Thorvald',
        'Thyge',
        'Tim',
        'Tobias',
        'Toke',
        'Tom',
        'Tomas',
        'Tommy',
        'Tonni',
        'Tonny',
        'Tony',
        'Torben',
        'Torkild',
        'Torsten',
        'Troels',
        'Tue',
        'Uffe',
        'Ulf',
        'Ulrik',
        'Vagn',
        'Valdemar',
        'Valentin',
        'Verner',
        'Victor',
        'Vidar',
        'Viggo',
        'Viktor',
        'Vilhelm',
        'Villads',
        'Villy',
        'William',
        'Willy',
        'Zacharias',
        'Zakarias',
    ];
    const nm2 = [
        'Aase',
        'Abelone',
        'Agathe',
        'Agnes',
        'Agnete',
        'Agnethe',
        'Alberte',
        'Alexandra',
        'Alice',
        'Alma',
        'Alvilda',
        'Amalie',
        'Amanda',
        'Andrea',
        'Ane',
        'Anette',
        'Anita',
        'Anja',
        'Ann',
        'Anna',
        'Anne',
        'Anne-Lise',
        'Anne-Marie',
        'Anne-Mette',
        'Anne-Sofie',
        'Annelise',
        'Annemarie',
        'Annemette',
        'Anni',
        'Annie',
        'Anny',
        'Asta',
        'Astrid',
        'Augusta',
        'Barbara',
        'Beate',
        'Benedicte',
        'Benedikte',
        'Bente',
        'Benthe',
        'Berit',
        'Bertha',
        'Betina',
        'Bettina',
        'Betty',
        'Bianca',
        'Birgit',
        'Birgith',
        'Birgitte',
        'Birte',
        'Birthe',
        'Bitte',
        'Bitten',
        'Bodil',
        'Bolette',
        'Boline',
        'Bothilde',
        'Britt',
        'Britta',
        'Camilla',
        'Carina',
        'Carla',
        'Caroline',
        'Cathrine',
        'Cecilie',
        'Charlotte',
        'Christa',
        'Christel',
        'Christiane',
        'Christina',
        'Christine',
        'Clara',
        'Conni',
        'Connie',
        'Conny',
        'Dagmar',
        'Dagny',
        'Daniella',
        'Danielle',
        'Diana',
        'Ditte',
        'Dora',
        'Doris',
        'Dorit',
        'Dorothea',
        'Dorrit',
        'Dorte',
        'Dorthe',
        'Dorthea',
        'Ebba',
        'Edel',
        'Edith',
        'Elena',
        'Eleonora',
        'Elin',
        'Elisa',
        'Elisabeth',
        'Elise',
        'Ella',
        'Ellen',
        'Ellinor',
        'Ellis',
        'Elly',
        'Elna',
        'Else',
        'Elsebeth',
        'Elvira',
        'Emilie',
        'Emily',
        'Emma',
        'Emmy',
        'Erika',
        'Erna',
        'Ester',
        'Esther',
        'Eva',
        'Fie',
        'Filippa',
        'Frederikke',
        'Freja',
        'Frida',
        'Gerd',
        'Gerda',
        'Gertrud',
        'Gitte',
        'Grete',
        'Grethe',
        'Gry',
        'Gudrun',
        'Gunda',
        'Gunhild',
        'Gunna',
        'Gurli',
        'Hanna',
        'Hannah',
        'Hanne',
        'Hansigne',
        'Hansine',
        'Harriet',
        'Hedevig',
        'Hedvig',
        'Heidi',
        'Helen',
        'Helena',
        'Helene',
        'Helga',
        'Helle',
        'Helvig',
        'Henny',
        'Henriette',
        'Henrikke',
        'Herdis',
        'Hertha',
        'Hilda',
        'Hilma',
        'Hjordis',
        'Hulda',
        'Iben',
        'Ida',
        'Ilse',
        'Ina',
        'Inga',
        'Inge',
        'Inge-Lise',
        'Ingeborg',
        'Ingelise',
        'Inger',
        'Ingerlise',
        'Ingrid',
        'Irene',
        'Iris',
        'Irma',
        'Isabel',
        'Isabella',
        'Jacobine',
        'Jakobine',
        'Jane',
        'Janne',
        'Janni',
        'Jannie',
        'Jasmin',
        'Jeanett',
        'Jeanette',
        'Jeanne',
        'Jeannette',
        'Jenny',
        'Jensigne',
        'Jensine',
        'Jessica',
        'Jette',
        'Joan',
        'Johanna',
        'Johanne',
        'Jonna',
        'Jorgine',
        'Josefine',
        'Josephine',
        'Judith',
        'Jul',
        'Julia',
        'Juliane',
        'Julie',
        'June',
        'Jytte',
        'Kamilla',
        'Kamma',
        'Karen',
        'Karin',
        'Karina',
        'Karla',
        'Karoline',
        'Kate',
        'Katharina',
        'Kathrine',
        'Katja',
        'Katrine',
        'Ketty',
        'Kirsten',
        'Kirstine',
        'Klara',
        'Krestine',
        'Krista',
        'Kristiane',
        'Kristina',
        'Kristine',
        'Laila',
        'Larsine',
        'Laura',
        'Laurine',
        'Lea',
        'Lena',
        'Lene',
        'Lilian',
        'Lilli',
        'Lillian',
        'Lilly',
        'Lina',
        'Linda',
        'Line',
        'Linette',
        'Lis',
        'Lisa',
        'Lisbet',
        'Lisbeth',
        'Lise',
        'Lise-Lotte',
        'Liselotte',
        'Lissi',
        'Lissie',
        'Lissy',
        'Liv',
        'Liva',
        'Lizzi',
        'Lizzie',
        'Lone',
        'Lotte',
        'Louise',
        'Luna',
        'Lydia',
        'Lykke',
        'Magda',
        'Magdalene',
        'Magna',
        'Mai',
        'Mai-Britt',
        'Maibrit',
        'Maibritt',
        'Maiken',
        'Maj-Britt',
        'Maja',
        'Majbrit',
        'Majbritt',
        'Malene',
        'Malou',
        'Maren',
        'Margit',
        'Margrete',
        'Margrethe',
        'Maria',
        'Mariane',
        'Marianne',
        'Marie',
        'Marina',
        'Marion',
        'Marlene',
        'Martha',
        'Martine',
        'Mary',
        'Mathilde',
        'Matilde',
        'Maya',
        'Maybrit',
        'Maybritt',
        'Melanie',
        'Merete',
        'Meta',
        'Metha',
        'Mette',
        'Mia',
        'Mie',
        'Mille',
        'Mirjam',
        'Mona',
        'Monica',
        'Monika',
        'Nadja',
        'Naja',
        'Nana',
        'Nanna',
        'Nanny',
        'Natalie',
        'Natasja',
        'Nathalie',
        'Nelly',
        'Nicoline',
        'Nielsine',
        'Nikoline',
        'Nina',
        'Ninna',
        'Nora',
        'Oda',
        'Olga',
        'Oline',
        'Olivia',
        'Patricia',
        'Paula',
        'Pauline',
        'Pernille',
        'Petra',
        'Petrea',
        'Petrine',
        'Pia',
        'Poula',
        'Pouline',
        'Ragna',
        'Ragnhild',
        'Rakel',
        'Randi',
        'Rasmine',
        'Rebecca',
        'Rebekka',
        'Regina',
        'Regine',
        'Regitze',
        'Rie',
        'Rigmor',
        'Rikke',
        'Rita',
        'Rosa',
        'Ruth',
        'Sabine',
        'Sally',
        'Sandra',
        'Sanne',
        'Sara',
        'Sarah',
        'Sascha',
        'Selma',
        'Severine',
        'Sidsel',
        'Sif',
        'Signe',
        'Sigrid',
        'Sille',
        'Simone',
        'Sine',
        'Sisse',
        'Smilla',
        'Sofia',
        'Sofie',
        'Solveig',
        'Solvej',
        'Sonja',
        'Sophia',
        'Sophie',
        'Sorine',
        'Stella',
        'Stephanie',
        'Stine',
        'Susan',
        'Susanna',
        'Susanne',
        'Sussi',
        'Sussie',
        'Sylvia',
        'Tanja',
        'Tenna',
        'Thea',
        'Theodora',
        'Therese',
        'Thora',
        'Tilde',
        'Tina',
        'Tine',
        'Tove',
        'Trine',
        'Ulla',
        'Ulrikke',
        'Valborg',
        'Vanessa',
        'Vera',
        'Vibeke',
        'Vigga',
        'Viktoria',
        'Vilhelmine',
        'Viola',
        'Vita',
        'Vivi',
        'Vivian',
        'Winnie',
        'Xenia',
        'Yrsa',
        'Yvonne',
        'Zenia',
    ];
    const nm3 = [
        'Aagaard',
        'Abildgaard',
        'Abrahamsen',
        'Adamsen',
        'Albertsen',
        'Albrechtsen',
        'Andersen',
        'Andreasen',
        'Andresen',
        'Antonsen',
        'Asmussen',
        'Axelsen',
        'Baek',
        'Bach',
        'Bak',
        'Balle',
        'Bang',
        'Bay',
        'Bech',
        'Beck',
        'Bendixen',
        'Bendtsen',
        'Bentsen',
        'Bentzen',
        'Berg',
        'Bertelsen',
        'Berthelsen',
        'Birch',
        'Birk',
        'Bisgaard',
        'Bjerg',
        'Bjerre',
        'Bjerregaard',
        'Bjorn',
        'Bloch',
        'Boesen',
        'Bonde',
        'Borg',
        'Borup',
        'Boysen',
        'Brandt',
        'Brink',
        'Brix',
        'Brodersen',
        'Brondum',
        'Bruhn',
        'Bruun',
        'Buch',
        'Buhl',
        'Bundgaard',
        'Busk',
        'Callesen',
        'Carlsen',
        'Carstensen',
        'Caspersen',
        'Christensen',
        'Christiansen',
        'Christoffersen',
        'Christophersen',
        'Clausen',
        'Clemmensen',
        'Dahl',
        'Dalgaard',
        'Dall',
        'Dalsgaard',
        'Dam',
        'Damgaard',
        'Damsgaard',
        'Danielsen',
        'Daugaard',
        'Davidsen',
        'Degn',
        'Dinesen',
        'Ditlevsen',
        'Due',
        'Duus',
        'Ebbesen',
        'Elkjær',
        'Enevoldsen',
        'Erichsen',
        'Eriksen',
        'Eskildsen',
        'Espersen',
        'Fabricius',
        'Fischer',
        'Fisker',
        'Frandsen',
        'Frank',
        'Frederiksen',
        'Friis',
        'Frost',
        'Fuglsang',
        'Gade',
        'Gram',
        'Graversen',
        'Gregersen',
        'Greve',
        'Haagensen',
        'Hald',
        'Hammer',
        'Hansen',
        'Hartmann',
        'Haugaard',
        'Hedegaard',
        'Hemmingsen',
        'Henningsen',
        'Henriksen',
        'Hermansen',
        'Hjort',
        'Hjorth',
        'Hoffmann',
        'Hogh',
        'Hoj',
        'Holm',
        'Holst',
        'Hougaard',
        'Hoyer',
        'Hviid',
        'Ibsen',
        'Ipsen',
        'Isaksen',
        'Iversen',
        'Jacobsen',
        'Jakobsen',
        'Jansen',
        'Jensen',
        'Jeppesen',
        'Jepsen',
        'Jespersen',
        'Jessen',
        'Johannesen',
        'Johannessen',
        'Johannsen',
        'Johansen',
        'Johnsen',
        'Jorgensen',
        'Juhl',
        'Justesen',
        'Juul',
        'Karlsen',
        'Kirk',
        'Kirkegaard',
        'Kjær',
        'Kjærgaard',
        'Kjærsgaard',
        'Kjeldsen',
        'Klausen',
        'Knudsen',
        'Koch',
        'Kofod',
        'Kofoed',
        'Korsgaard',
        'Kragh',
        'Kristensen',
        'Kristiansen',
        'Kristoffersen',
        'Krog',
        'Krogh',
        'Kruse',
        'Kvist',
        'Ladefoged',
        'Lange',
        'Larsen',
        'Larsson',
        'Lassen',
        'Laugesen',
        'Lauridsen',
        'Lauritsen',
        'Lauritzen',
        'Laursen',
        'Laustsen',
        'Leth',
        'Lind',
        'Lindberg',
        'Lorentzen',
        'Lorenzen',
        'Ludvigsen',
        'Lund',
        'Madsen',
        'Magnussen',
        'Marcussen',
        'Markussen',
        'Martinsen',
        'Mathiasen',
        'Mathiesen',
        'Matthiesen',
        'Meldgaard',
        'Michaelsen',
        'Michelsen',
        'Mikkelsen',
        'Mogensen',
        'Molgaard',
        'Moller',
        'Morch',
        'Mork',
        'Mortensen',
        'Mouritsen',
        'Munch',
        'Munk',
        'Nedergaard',
        'Nicolaisen',
        'Nielsen',
        'Nikolajsen',
        'Nissen',
        'Norgaard',
        'Nygaard',
        'Olesen',
        'Olsen',
        'Ottesen',
        'Ottosen',
        'Overgaard',
        'Ovesen',
        'Pallesen',
        'Paulsen',
        'Pedersen',
        'Petersen',
        'Philipsen',
        'Pihl',
        'Poulsen',
        'Povlsen',
        'Rask',
        'Rasmussen',
        'Ravn',
        'Riis',
        'Rohde',
        'Schmidt',
        'Schou',
        'Simonsen',
        'Skaarup',
        'Skou',
        'Skov',
        'Skovgaard',
        'Sloth',
        'Smidt',
        'Smith',
        'Sogaard',
        'Sommer',
        'Sondergaard',
        'Sorensen',
        'Steen',
        'Steffensen',
        'Storgaard',
        'Storm',
        'Svane',
        'Svendsen',
        'Svenningsen',
        'Therkelsen',
        'Therkildsen',
        'Thogersen',
        'Thomasen',
        'Thomassen',
        'Thomsen',
        'Thorsen',
        'Thorup',
        'Thrane',
        'Thuesen',
        'Thygesen',
        'Toft',
        'Torp',
        'Tran',
        'Troelsen',
        'Truelsen',
        'Vester',
        'Vestergaard',
        'Vilhelmsen',
        'Villadsen',
        'Villumsen',
        'Vinther',
        'Wagner',
        'Westergaard',
        'Winther',
        'Wulff',
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
