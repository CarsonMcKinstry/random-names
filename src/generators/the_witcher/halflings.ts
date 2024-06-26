import { sample } from 'lodash';

export default function halflings() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Abbo',
        'Aega',
        'Ageric',
        'Aigulf',
        'Amand',
        'Andwise',
        'Anno',
        'Arnold',
        'Arnor',
        'Arnoul',
        'Arnulf',
        'Basso',
        'Baudry',
        'Bauto',
        'Bavo',
        'Benild',
        'Berchar',
        'Bernard',
        'Berno',
        'Bero',
        'Bertin',
        'Bertram',
        'Besso',
        'Bildad',
        'Blanco',
        'Bodo',
        'Bosco',
        'Boso',
        'Bovo',
        'Brice',
        'Briffo',
        'Brocard',
        'Bruno',
        'Bucca',
        'Bungo',
        'Cerdic',
        'Cheldric',
        'Chlodwig',
        'Chlotar',
        'Clodio',
        'Clovis',
        'Conrad',
        'Corbus',
        'Cotman',
        'Cottar',
        'Crassus',
        'Crispus',
        'Dado',
        'Dalfin',
        'Deagol',
        'Dodo',
        'Drogo',
        'Drogon',
        'Dudo',
        'Dudon',
        'Durand',
        'Ebbo',
        'Einhard',
        'Elfstan',
        'Emmon',
        'Erard',
        'Erling',
        'Euric',
        'Evrard',
        'Falco',
        'Faro',
        'Flambard',
        'Flavus',
        'Folco',
        'Folmar',
        'Fosco',
        'Fulbert',
        'Fulrad',
        'Gerbert',
        'Gereon',
        'Gerold',
        'Gilbert',
        'Giso',
        'Godun',
        'Griffo',
        'Grimald',
        'Grimbald',
        'Gruffo',
        'Gunthar',
        'Guntram',
        'Hagen',
        'Halfred',
        'Hamfast',
        'Harding',
        'Hartmut',
        'Hartnid',
        'Hending',
        'Hobson',
        'Holfast',
        'Holman',
        'Hubert',
        'Huebald',
        'Hugo',
        'Humbert',
        'Hunald',
        'Jago',
        'Lambert',
        'Largo',
        'Laudus',
        'Ledger',
        'Leger',
        'Leufred',
        'Longo',
        'Lothar',
        'Madoc',
        'Magnus',
        'Marco',
        'Marcoul',
        'Marcus',
        'Marroc',
        'Medard',
        'Merry',
        'Milo',
        'Minto',
        'Moro',
        'Mosco',
        'Nithard',
        'Norbert',
        'Notger',
        'Odger',
        'Olo',
        'Otker',
        'Otto',
        'Otton',
        'Pepin',
        'Pippin',
        'Polo',
        'Porro',
        'Posco',
        'Rathar',
        'Rathier',
        'Razo',
        'Remi',
        'Richer',
        'Robin',
        'Robur',
        'Rollo',
        'Rufus',
        'Sadoc',
        'Sago',
        'Samson',
        'Sichar',
        'Sunno',
        'Taurin',
        'Thierry',
        'Timba',
        'Tobas',
        'Tobold',
        'Togo',
        'Tolman',
        'Turpin',
        'Vigo',
        'Vigor',
        'Wazo',
        'Wibert',
    ];
    const nm2 = [
        'Abigail',
        'Adallinda',
        'Adda',
        'Adele',
        'Alexandra',
        'Alexis',
        'Alia',
        'Alicia',
        'Allison',
        'Alura',
        'Alyssa',
        'Amalda',
        'Amanda',
        'Amaranth',
        'Amber',
        'Amethyst',
        'Amy',
        'Andrea',
        'Angela',
        'Angelica',
        'Anna',
        'Arabella',
        'Aregund',
        'Athalia',
        'Aude',
        'Audovera',
        'Autumn',
        'Basina',
        'Begga',
        'Belba',
        'Belinda',
        'Belladonna',
        'Berenga',
        'Beretrude',
        'Bertha',
        'Berthe',
        'Bertrada',
        'Berylla',
        'Blesinde',
        'Camelia',
        'Cara',
        'Caramella',
        'Caroline',
        'Cassandra',
        'Catherine',
        'Celendine',
        'Chelsea',
        'Cheryl',
        'Cheyenne',
        'Christina',
        'Clotilde',
        'Cora',
        'Cori',
        'Daisy',
        'Delaney',
        'Deuteria',
        'Diamanda',
        'Diamond',
        'Diana',
        'Dina',
        'Donna',
        'Donnamira',
        'Dora',
        'Elanor',
        'Ellie',
        'Emma',
        'Engelberga',
        'Engelberge',
        'Erica',
        'Erin',
        'Fara',
        'Fiona',
        'Genofeva',
        'Gerda',
        'Gilly',
        'Gisela',
        'Gloriana',
        'Grimalda',
        'Haley',
        'Hatilde',
        'Herleva',
        'Hilda',
        'Hildeburg',
        'Hildegard',
        'Hildegarde',
        'Hildegund',
        'Hiltrude',
        'Hodierna',
        'Ingeltrude',
        'Ingitrude',
        'Ingoberg',
        'Iridian',
        'Jasmine',
        'Jemima',
        'Jessamine',
        'Jessica',
        'Julia',
        'Kayla',
        'Keena',
        'Keira',
        'Kymma',
        'Lalia',
        'Laura',
        'Lauren',
        'Lavinia',
        'Leesha',
        'Lenora',
        'Lily',
        'Linda',
        'Madelgarde',
        'Malva',
        'Maria',
        'Marigold',
        'Matilda',
        'Melba',
        'Melissa',
        'Menegilda',
        'Mentha',
        'Merofled',
        'Mirabella',
        'Miranda',
        'Moira',
        'Myrna',
        'Myrtle',
        'Neela',
        'Nina',
        'Nora',
        'Oda',
        'Olivia',
        'Paige',
        'Prima',
        'Primrose',
        'Primula',
        'Prisca',
        'Regina',
        'Rhoda',
        'Rosa',
        'Rosamund',
        'Rosamunda',
        'Rose',
        'Roslyn',
        'Rotrude',
        'Rowan',
        'Rylee',
        'Salvia',
        'Sarai',
        'Selina',
        'Semolina',
        'Shanna',
        'Suri',
        'Tara',
        'Taryn',
        'Tavia',
        'Theodora',
    ];
    const nm3 = [
        'Adel',
        'Alt',
        'And',
        'Ans',
        'Arm',
        'Balden',
        'Berk',
        'Biber',
        'Bil',
        'Blum',
        'Bottom',
        'Boulder',
        'Brace',
        'Bramble',
        'Brand',
        'Brod',
        'Cull',
        'Dew',
        'Edel',
        'Eisen',
        'Fair',
        'Fallo',
        'Far',
        'Fass',
        'Fein',
        'Finna',
        'Flor',
        'Gal',
        'Gam',
        'Gell',
        'Hal',
        'Ham',
        'Hand',
        'Har',
        'Hard',
        'Hay',
        'Hilde',
        'Hoch',
        'Hof',
        'Hog',
        'Knot',
        'Korn',
        'Land',
        'Lehm',
        'Lowen',
        'Mug',
        'Neu',
        'Old',
        'Rei',
        'Rosen',
        'Roth',
        'Stritt',
        'Tol',
        'Vander',
        'Wahr',
        'Weg',
        'Weide',
        'Wein',
        'Weis',
        'Whit',
    ];
    const nm4 = [
        'bach',
        'bairn',
        'bald',
        'baum',
        'beck',
        'berg',
        'berry',
        'bottom',
        'brand',
        'buck',
        'buhr',
        'burg',
        'burrow',
        'der',
        'fast',
        'fel',
        'feld',
        'felt',
        'foot',
        'gard',
        'gart',
        'gund',
        'ham',
        'hand',
        'hang',
        'hard',
        'haupt',
        'haus',
        'heimer',
        'hell',
        'hill',
        'kranz',
        'lein',
        'lich',
        'ling',
        'man',
        'meier',
        'ming',
        'mond',
        'red',
        'ric',
        'rich',
        'ring',
        'roth',
        'stein',
        'stock',
        'thal',
        'thorn',
        'thran',
        'tram',
        'veldt',
        'ville',
        'wald',
        'ward',
        'wend',
        'wich',
        'wise',
        'wort',
        'yegg',
        'zel',
    ];
    {
        if (type === 1) {
            names = `${sample(nm2)} ${sample(nm3)}${sample(nm4)}`;
        } else {
            names = `${sample(nm1)} ${sample(nm3)}${sample(nm4)}`;
        }
        return names;
    }
}
