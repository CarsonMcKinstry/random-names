import { sample } from 'lodash';

export default function latvians() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Adams',
        'Adolfs',
        'Adrians',
        'Agnis',
        'Agris',
        'Aigars',
        'Ainars',
        'Ainis',
        'Aivars',
        'Aivis',
        'Aksels',
        'Alberts',
        'Albins',
        'Aldis',
        'Aleksandras',
        'Aleksandrs',
        'Aleksejs',
        'Aleksis',
        'Alfons',
        'Alfreds',
        'Alfs',
        'Algirts',
        'Almants',
        'Alnis',
        'Aloizs',
        'Alvis',
        'Anatolijs',
        'Anatols',
        'Andis',
        'Andrejs',
        'Andress',
        'Andrievs',
        'Andris',
        'Andulis',
        'Andzejs',
        'Andzs',
        'Anrijs',
        'Ansis',
        'Anslavs',
        'Antis',
        'Antons',
        'Ardis',
        'Arijs',
        'Aris',
        'Arkadijs',
        'Armands',
        'Armins',
        'Arnis',
        'Arnolds',
        'Artis',
        'Arturs',
        'Arvids',
        'Arvils',
        'Arvis',
        'Askolds',
        'Atis',
        'Atvars',
        'Augusts',
        'Auseklis',
        'Austris',
        'Balvis',
        'Benedikts',
        'Berends',
        'Bernhards',
        'Bertulis',
        'Boleslavs',
        'Boriss',
        'Brencis',
        'Bronislavs',
        'Bruno',
        'Centis',
        'Dagnis',
        'Dailis',
        'Dainis',
        'Dairis',
        'Daniels',
        'Daumants',
        'Davids',
        'Davis',
        'Didzis',
        'Dins',
        'Dmitrijs',
        'Donats',
        'Drosmis',
        'Druvis',
        'Druvvaldis',
        'Dzintars',
        'Dzons',
        'Edgars',
        'Edijs',
        'Edmunds',
        'Eduards',
        'Edvards',
        'Edvins',
        'Edzus',
        'Egils',
        'Egmonts',
        'Egons',
        'Einars',
        'Eizens',
        'Elgars',
        'Eliza',
        'Elmars',
        'Elvijs',
        'Elvis',
        'Elviss',
        'Emils',
        'Endijs',
        'Eriks',
        'Ermanis',
        'Ernests',
        'Ervins',
        'Evalds',
        'Felikss',
        'Filips',
        'Fjodors',
        'Francis',
        'Fricis',
        'Fridis',
        'Fridrihs',
        'Gaidis',
        'Gaits',
        'Gastons',
        'Gatis',
        'Gederts',
        'Georgs',
        'Gintars',
        'Gintauts',
        'Gints',
        'Girts',
        'Gothards',
        'Gunars',
        'Gundars',
        'Guntars',
        'Guntis',
        'Gunvaldis',
        'Gustavs',
        'Gusts',
        'Gvido',
        'Hanss',
        'Haralds',
        'Harijs',
        'Helmuts',
        'Henrihs',
        'Henrijs',
        'Henriks',
        'Herberts',
        'Hermanis',
        'Hugo',
        'Ignats',
        'Igors',
        'Ikars',
        'Ilgmars',
        'Ilgonis',
        'Ilgvars',
        'Ilmars',
        'Ilvars',
        'Imants',
        'Inars',
        'Indrikis',
        'Indulis',
        'Inesis',
        'Ingars',
        'Ingmars',
        'Inguns',
        'Ingus',
        'Intars',
        'Ints',
        'Ivans',
        'Ivars',
        'Ivo',
        'Jakobs',
        'Janis',
        'Jannis',
        'Jans',
        'Jazeps',
        'Jekabs',
        'Jekaubs',
        'Jevgenijs',
        'Jezups',
        'Johans',
        'Jorens',
        'Julians',
        'Julijs',
        'Jurgis',
        'Juris',
        'Justs',
        'Kalvis',
        'Karlis',
        'Kaspars',
        'Kazimirs',
        'Kirils',
        'Klaudijs',
        'Klavs',
        'Knuts',
        'Konrads',
        'Konradus',
        'Konstantins',
        'Krisjanis',
        'Kriss',
        'Kristaps',
        'Kristers',
        'Kristians',
        'Krists',
        'Kurts',
        'Laimdots',
        'Laimnesis',
        'Laimonis',
        'Lauris',
        'Leo',
        'Leonards',
        'Leonids',
        'Leons',
        'Leopolds',
        'Linards',
        'Lotars',
        'Ludis',
        'Ludvigs',
        'Macs',
        'Madars',
        'Madis',
        'Magnuss',
        'Maigonis',
        'Maigurs',
        'Maikls',
        'Mairis',
        'Maksims',
        'Maksis',
        'Malvis',
        'Marcis',
        'Mareks',
        'Margers',
        'Margots',
        'Maris',
        'Marks',
        'Markuss',
        'Martins',
        'Marts',
        'Matejs',
        'Matiss',
        'Miervaldis',
        'Mihaels',
        'Mihails',
        'Mihels',
        'Mikelis',
        'Mikels',
        'Miks',
        'Mikus',
        'Mintauts',
        'Modris',
        'Monvids',
        'Muntis',
        'Nauris',
        'Niklavs',
        'Nikolajs',
        'Niks',
        'Nils',
        'Norberts',
        'Normunds',
        'Ojars',
        'Olafs',
        'Olegs',
        'Olgerts',
        'Oskars',
        'Osvalds',
        'Oto',
        'Otomars',
        'Paulis',
        'Pauls',
        'Pavels',
        'Pavils',
        'Peteris',
        'Pjotrs',
        'Raimonds',
        'Raitis',
        'Raivis',
        'Raivo',
        'Ralfs',
        'Rauls',
        'Reinholds',
        'Reinis',
        'Renars',
        'Ricards',
        'Rihards',
        'Rinalds',
        'Ringolds',
        'Ritvars',
        'Roberts',
        'Rodrigo',
        'Rolands',
        'Romans',
        'Romualds',
        'Ronalds',
        'Rudolfs',
        'Rusins',
        'Salvis',
        'Sandis',
        'Sandris',
        'Sarmis',
        'Saulvedis',
        'Sentis',
        'Sergejs',
        'Severins',
        'Sigurds',
        'Silvestrs',
        'Simanis',
        'Simons',
        'Spodris',
        'Stanislavs',
        'Stefans',
        'Svens',
        'Talis',
        'Talivaldis',
        'Talrits',
        'Tenis',
        'Teodors',
        'Tomass',
        'Toms',
        'Ugis',
        'Uldis',
        'Uvis',
        'Vairis',
        'Valdemars',
        'Valdis',
        'Valentins',
        'Valerijs',
        'Valfrids',
        'Valters',
        'Valts',
        'Varis',
        'Vasilijs',
        'Vents',
        'Verners',
        'Vidvuds',
        'Viesturs',
        'Vikentijs',
        'Viktors',
        'Vilhelms',
        'Vilips',
        'Vilis',
        'Viljams',
        'Vilmars',
        'Vilnis',
        'Vilums',
        'Vismants',
        'Visvaldis',
        'Vitalijs',
        'Vitauts',
        'Vitolds',
        'Vladimirs',
        'Vladislavs',
        'Voldemars',
        'Zanis',
        'Zemgus',
        'Ziedonis',
        'Zigfrids',
        'Zigmars',
        'Zigmunds',
        'Zigurds',
        'Zintis',
    ];
    const nm2 = [
        'Ada',
        'Adele',
        'Aelita',
        'Agate',
        'Agija',
        'Agita',
        'Agnese',
        'Agneta',
        'Agnija',
        'Agra',
        'Agrita',
        'Aiga',
        'Aija',
        'Aijas',
        'Aina',
        'Aira',
        'Airita',
        'Aiva',
        'Aivita',
        'Alda',
        'Aleksandra',
        'Aleksandrina',
        'Alida',
        'Alina',
        'Alise',
        'Alla',
        'Alma',
        'Alvina',
        'Alvine',
        'Amalija',
        'Amanda',
        'Anastasija',
        'Ance',
        'Anda',
        'Andra',
        'Andzela',
        'Andzelika',
        'Anete',
        'Angelika',
        'Anita',
        'Anna',
        'Annija',
        'Anta',
        'Antonija',
        'Antonina',
        'Antra',
        'Anzela',
        'Anzelika',
        'Arija',
        'Arita',
        'Armanda',
        'Arnita',
        'Arta',
        'Astra',
        'Astrida',
        'Ausma',
        'Austra',
        'Baba',
        'Baiba',
        'Baibas',
        'Barbara',
        'Beate',
        'Beatrise',
        'Benita',
        'Berta',
        'Betija',
        'Biruta',
        'Brigita',
        'Bronislava',
        'Dace',
        'Daces',
        'Dagmara',
        'Dagnija',
        'Daiga',
        'Daina',
        'Dainuvite',
        'Dana',
        'Daniela',
        'Darta',
        'Diana',
        'Dina',
        'Dita',
        'Doroteja',
        'Dzemma',
        'Dzidra',
        'Dzintra',
        'Eda',
        'Edite',
        'Egija',
        'Egita',
        'Eizenija',
        'Elena',
        'Eleonora',
        'Elga',
        'Elina',
        'Elinas',
        'Elita',
        'Eliza',
        'Elizabete',
        'Elma',
        'Elvira',
        'Elza',
        'Emilija',
        'Emma',
        'Enija',
        'Erika',
        'Erna',
        'Estere',
        'Eva',
        'Evelina',
        'Evija',
        'Evijas',
        'Evita',
        'Evitas',
        'Gaida',
        'Galina',
        'Genovefa',
        'Gerda',
        'Gertrude',
        'Ginta',
        'Gita',
        'Greta',
        'Grieta',
        'Guna',
        'Gunda',
        'Gundega',
        'Gunita',
        'Gunta',
        'Guntra',
        'Helena',
        'Ieva',
        'Ildze',
        'Ilga',
        'Ilma',
        'Ilona',
        'Ilonas',
        'Iluta',
        'Ilva',
        'Ilze',
        'Ilzes',
        'Ilzite',
        'Ina',
        'Inara',
        'Indra',
        'Inesa',
        'Inese',
        'Ineses',
        'Ineta',
        'Inga',
        'Ingas',
        'Ingrida',
        'Inguna',
        'Inita',
        'Inna',
        'Inta',
        'Ira',
        'Irena',
        'Irina',
        'Irisa',
        'Irita',
        'Irma',
        'Iveta',
        'Ivetas',
        'Jadviga',
        'Jana',
        'Janina',
        'Jelena',
        'Jolanta',
        'Judite',
        'Jula',
        'Jule',
        'Julija',
        'Julita',
        'Justine',
        'Juta',
        'Karina',
        'Karlina',
        'Karolina',
        'Katarina',
        'Kate',
        'Katrina',
        'Keita',
        'Kintija',
        'Kitija',
        'Klaudija',
        'Krista',
        'Kristiana',
        'Kristina',
        'Kristine',
        'Kristines',
        'Ksenija',
        'Laila',
        'Laima',
        'Laimdota',
        'Laine',
        'Lana',
        'Larisa',
        'Lasma',
        'Lauma',
        'Laura',
        'Lauras',
        'Lavize',
        'Lelde',
        'Leontine',
        'Liana',
        'Liba',
        'Lidija',
        'Liene',
        'Lienes',
        'Lienite',
        'Liesma',
        'Liga',
        'Ligas',
        'Ligita',
        'Lija',
        'Liliana',
        'Lilija',
        'Lilita',
        'Lina',
        'Linda',
        'Lindas',
        'Lita',
        'Liva',
        'Livija',
        'Liza',
        'Lizete',
        'Lolita',
        'Lonija',
        'Lucija',
        'Ludmila',
        'Luize',
        'Madara',
        'Madaras',
        'Made',
        'Maiga',
        'Maija',
        'Maira',
        'Mairita',
        'Mara',
        'Mare',
        'Margareta',
        'Margarita',
        'Margita',
        'Margrieta',
        'Marija',
        'Marika',
        'Marina',
        'Marita',
        'Marite',
        'Marta',
        'Maruta',
        'Maza',
        'Megija',
        'Milda',
        'Minna',
        'Mirdza',
        'Modra',
        'Modrite',
        'Monika',
        'Monta',
        'Mudite',
        'Nadezda',
        'Nanija',
        'Natalija',
        'Nelda',
        'Nellija',
        'Nina',
        'Nora',
        'Olga',
        'Olita',
        'Otilija',
        'Patricija',
        'Paula',
        'Paulina',
        'Raisa',
        'Raita',
        'Ramona',
        'Rasa',
        'Rasma',
        'Regina',
        'Renate',
        'Rita',
        'Rota',
        'Rudite',
        'Ruta',
        'Rute',
        'Sabine',
        'Saiva',
        'Samanta',
        'Sanda',
        'Sandra',
        'Sandras',
        'Sanita',
        'Sanitas',
        'Santa',
        'Santra',
        'Sapa',
        'Sarlote',
        'Sarma',
        'Sarmite',
        'Sigita',
        'Signe',
        'Silvija',
        'Simona',
        'Sindija',
        'Sintija',
        'Sintijas',
        'Skaidra',
        'Skaidrite',
        'Sniedze',
        'Sofija',
        'Solveiga',
        'Solvita',
        'Stanislava',
        'Taisija',
        'Tamara',
        'Tatjana',
        'Tekla',
        'Tereza',
        'Tereze',
        'Terezija',
        'Tija',
        'Tina',
        'Trine',
        'Ulla',
        'Una',
        'Undine',
        'Vaira',
        'Valda',
        'Valentina',
        'Valerija',
        'Valija',
        'Vanda',
        'Velga',
        'Velta',
        'Veneranda',
        'Vera',
        'Veronika',
        'Vesma',
        'Vija',
        'Viktorija',
        'Vilma',
        'Vineta',
        'Viola',
        'Violeta',
        'Vita',
        'Vizbulite',
        'Vizma',
        'Zaiga',
        'Zaklina',
        'Zanda',
        'Zane',
        'Zanes',
        'Zanete',
        'Zanna',
        'Zelma',
        'Zenta',
        'Zigrida',
        'Zinaida',
        'Zinta',
        'Zita',
        'Zoja',
        'Zuzanna',
    ];
    const nm3 = [
        'Adata',
        'Adatina',
        'Aditajs',
        'Aire',
        'Airite',
        'Aitina',
        'Aizgalis',
        'Aizpurs',
        'Aizpurvis',
        'Aizputnis',
        'Aizstrauts',
        'Aizupe',
        'Aizvakars',
        'Akerfelds',
        'Akls',
        'Akmens',
        'Akmentins',
        'Akmenkalns',
        'Aldermanis',
        'Alksnis',
        'Alksnitis',
        'Allikas',
        'Altbergs',
        'Amatnieks',
        'Amats',
        'Amolins',
        'Andersons',
        'Ansons',
        'Aplocins',
        'Aploks',
        'Apse',
        'Apsite',
        'Apenitis',
        'Apskalns',
        'Apsutnieks',
        'Arajs',
        'Arajums',
        'Asara',
        'Asaras',
        'Asnins',
        'Astrins',
        'Atslega',
        'Audze',
        'Auglis',
        'Augstbirze',
        'Augstkalnietis',
        'Augstkalnins',
        'Augstroze',
        'Augustovs',
        'Augskapa',
        'Aunins',
        'Auns',
        'Auseklis',
        'Austrins',
        'Austrums',
        'Auza',
        'Auzins',
        'Auzkalns',
        'Avene',
        'Avotins',
        'Avotnieks',
        'Avots',
        'Bagatais',
        'Bailitis',
        'Baldavnieks',
        'Balodis',
        'Baltais',
        'Baltaiskauls',
        'Baltakmens',
        'Baltauss',
        'Baltazoss',
        'Baltbardis',
        'Baltcepure',
        'Baltgailis',
        'Baltgalva',
        'Baltins',
        'Baltkalns',
        'Baltkaja',
        'Baltroze',
        'Baltvilks',
        'Baltvilnis',
        'Baltabols',
        'Banga',
        'Baranovskis',
        'Barotajs',
        'Baumanis',
        'Baumeisters',
        'Balkis',
        'Bebris',
        'Bedre',
        'Bedrite',
        'Bergfelds',
        'Bergmanis',
        'Bergs',
        'Bezbiksis',
        'Bezdeliga',
        'Bekeris',
        'Benkis',
        'Biezais',
        'Biezbardis',
        'Biezums',
        'Bilde',
        'Bilsons',
        'Birze',
        'Birzgalis',
        'Birzkalns',
        'Birzelis',
        'Bisenieks',
        'Bite',
        'Bitite',
        'Bikernieks',
        'Biskopis',
        'Blats',
        'Blaus',
        'Bleijs',
        'Blusins',
        'Blukis',
        'Bligzna',
        'Bligznins',
        'Blumbergs',
        'Blumkalns',
        'Blums',
        'Bodnieks',
        'Bogdanovs',
        'Bogdans',
        'Bojars',
        'Bolmanis',
        'Bondarenoks',
        'Bondars',
        'Bondarans',
        'Brants',
        'Brauns',
        'Bremmers',
        'Breners',
        'Brencevs',
        'Briedis',
        'Brieditis',
        'Briesma',
        'Briezkalns',
        'Briksnis',
        'Bralis',
        'Bralitis',
        'Brakitis',
        'Brids',
        'Brinums',
        'Britins',
        'Brivkalns',
        'Brivlauks',
        'Brivs',
        'Brivulis',
        'Brivvirs',
        'Bruklene',
        'Bruvelis',
        'Bruveris',
        'Bulte',
        'Bumbieris',
        'Bundzenieks',
        'Bundza',
        'Burins',
        'Burkans',
        'Burtnieks',
        'Burvis',
        'Busmanis',
        'Buss',
        'Balbardis',
        'Balins',
        'Barda',
        'Bardins',
        'Bartnieks',
        'Benins',
        'Bernupe',
        'Berzietis',
        'Berzins',
        'Berzkalns',
        'Berzlapa',
        'Berzmuiznieks',
        'Berznieks',
        'Berzpumpurs',
        'Berzs',
        'Berzupe',
        'Berzzemnieks',
        'Bibelnieks',
        'Buda',
        'Caune',
        'Caunite',
        'Caurums',
        'Celins',
        'Celmins',
        'Celms',
        'Ceplis',
        'Ceplitis',
        'Cepure',
        'Cepurnieks',
        'Cepurite',
        'Cerins',
        'Cers',
        'Cibulis',
        'Cibulskis',
        'Cienits',
        'Cietumnieks',
        'Cilpa',
        'Cilvecins',
        'Cilveks',
        'Cimmermanis',
        'Cirpe',
        'Cukurs',
        'Calitis',
        'Celajs',
        'Cesnieks',
        'Cirulis',
        'Cirulnieks',
        'Cukains',
        'Dadzis',
        'Dadzitis',
        'Daina',
        'Daks',
        'Dambis',
        'Dambjakalns',
        'Dambitis',
        'Dancis',
        'Daugava',
        'Daugavietis',
        'Daugavina',
        'Daugavins',
        'Dedzeklis',
        'Deglis',
        'Deguns',
        'Desmitnieks',
        'Dievaberns',
        'Dievins',
        'Diezgans',
        'Dislers',
        'Dobelnieks',
        'Dombrovskis',
        'Dovidans',
        'Draudzins',
        'Draugs',
        'Dravnieks',
        'Drosprats',
        'Druva',
        'Druvaskalns',
        'Druvenieks',
        'Drizulis',
        'Dublis',
        'Dubults',
        'Dukurs',
        'Dukatins',
        'Dukats',
        'Dumpis',
        'Duncis',
        'Dundurs',
        'Duraks',
        'Dzeguze',
        'Dzelzains',
        'Dzelzkalns',
        'Dzelzkalejs',
        'Dzelzitis',
        'Dzenis',
        'Dzenitis',
        'Dziedatajs',
        'Dzilna',
        'Dzintarnieks',
        'Dzintars',
        'Dzirkalis',
        'Dzilums',
        'Dzerve',
        'Dzervene',
        'Dalderis',
        'Dalmanis',
        'Danielsons',
        'Dargums',
        'Darzins',
        'Darznieks',
        'Davidsons',
        'Davisons',
        'Delins',
        'Didrihsons',
        'Dinstmanis',
        'Dikis',
        'Dumins',
        'Dums',
        'Durejs',
        'Egle',
        'Eglitis',
        'Eikmanis',
        'Elstins',
        'Embutnieks',
        'Ermansons',
        'Espats',
        'Ezergailis',
        'Ezerins',
        'Ezernieks',
        'Ezers',
        'Ezis',
        'Ezitis',
        'Engelis',
        'Engelitis',
        'Fedorovs',
        'Feldmanis',
        'Filipenoks',
        'Finks',
        'Fisers',
        'Fogels',
        'Freibergs',
        'Freijs',
        'Freimanis',
        'Fridrihsons',
        'Gabrielevs',
        'Gaigala',
        'Gailis',
        'Gailitis',
        'Gaisma',
        'Gaismins',
        'Gaiss',
        'Gaitnieks',
        'Gaisais',
        'Gaisums',
        'Galdins',
        'Galva',
        'Galvins',
        'Ganins',
        'Garais',
        'Gargailis',
        'Garkalns',
        'Garoza',
        'Gatvenieks',
        'Gaumigs',
        'Glaznieks',
        'Goba',
        'Gobins',
        'Godins',
        'Goldbergs',
        'Gorsvans',
        'Gotardsons',
        'Grabaza',
        'Grantkalns',
        'Grasis',
        'Graudins',
        'Grauds',
        'Grava',
        'Gravins',
        'Gredzens',
        'Greizis',
        'Grikis',
        'Grisans',
        'Grozins',
        'Grundmanis',
        'Gruntins',
        'Gruzitis',
        'Grabejs',
        'Gramatina',
        'Gramatnieks',
        'Gravkalejs',
        'Gravmalis',
        'Gravitis',
        'Grislis',
        'Grivins',
        'Gruba',
        'Gudrais',
        'Gudritis',
        'Gulbis',
        'Gultnieks',
        'Gurkis',
        'Gutmanis',
        'Guza',
        'Horunzis',
        'Iemetejs',
        'Ieva',
        'Ievenieks',
        'Ievins',
        'Igaunis',
        'Ilves',
        'Indriksons',
        'Irbe',
        'Irbitis',
        'Irklis',
        'Ivanovs',
        'Ivanans',
        'Izkapts',
        'Jansons',
        'Jaunais',
        'Jaunalksnis',
        'Jaunbalodis',
        'Jaunberzins',
        'Jaunberzs',
        'Jaungailis',
        'Jaunkalns',
        'Jaunkungs',
        'Jaunozolins',
        'Jaunozols',
        'Jaunpuce',
        'Jaunslavietis',
        'Jauntevs',
        'Jaunums',
        'Jaunvimba',
        'Jaunzemnieks',
        'Jaunzems',
        'Jegersons',
        'Josta',
        'Jucitis',
        'Jukumsons',
        'Jumala',
        'Jumikis',
        'Jumprava',
        'Jumtins',
        'Jumtnieks',
        'Jurevics',
        'Jurgensons',
        'Jurikas',
        'Jurisons',
        'Jurkans',
        'Jatnieks',
        'Jankalns',
        'Jekabjanis',
        'Jekabsons',
        'Jeritis',
        'Jurmala',
        'Juspeters',
        'Kaimins',
        'Kaktins',
        'Kalnamagone',
        'Kalnapuke',
        'Kalnarajs',
        'Kalnbirze',
        'Kalnberzins',
        'Kalnberzs',
        'Kalnenieks',
        'Kalnins',
        'Kalnozolins',
        'Kalnozols',
        'Kalnriekstins',
        'Kalns',
        'Kalnzemnieks',
        'Kalpins',
        'Kalve',
        'Kalejs',
        'Kamaldnieks',
        'Kamolins',
        'Kamols',
        'Kanelis',
        'Kapenieks',
        'Kapins',
        'Kapteins',
        'Karlovs',
        'Karogs',
        'Karstais',
        'Kartupelis',
        'Karulis',
        'Kasparovics',
        'Kasparsons',
        'Kaudze',
        'Kaulains',
        'Kaulins',
        'Kauls',
        'Kauss',
        'Kazaks',
        'Kakis',
        'Kakitis',
        'Kalkmurnieks',
        'Kalkukalns',
        'Kaneps',
        'Kaskis',
        'Kazoknieks',
        'Kazoks',
        'Kindzuls',
        'Kirsbergs',
        'Kirss',
        'Kivi',
        'Klajums',
        'Kleinbergs',
        'Kleins',
        'Klibais',
        'Klibzakis',
        'Klingeris',
        'Klucis',
        'Klavsons',
        'Kletnieks',
        'Knagis',
        'Kocins',
        'Kode',
        'Kodolitis',
        'Koks',
        'Kovalenoks',
        'Kovals',
        'Kovalskis',
        'Kozlovskis',
        'Krancins',
        'Krastins',
        'Krasts',
        'Krauklis',
        'Krauklins',
        'Kreilis',
        'Krievins',
        'Krievs',
        'Krievukalejs',
        'Krisjansons',
        'Krisans',
        'Krogzeme',
        'Krols',
        'Kronbergs',
        'Kronis',
        'Kronakalns',
        'Krustins',
        'Krustozols',
        'Krusts',
        'Kracejs',
        'Kreslins',
        'Kruklis',
        'Krumins',
        'Krums',
        'Kruze',
        'Kruzgalva',
        'Kukainis',
        'Kukulmuiznieks',
        'Kundzins',
        'Kungs',
        'Kuplais',
        'Kurlauss',
        'Kurlis',
        'Kurmis',
        'Kurmitis',
        'Kurpnieks',
        'Kurpite',
        'Kurzeme',
        'Kurzemnieks',
        'Kuzmins',
        'Kuginieks',
        'Kugis',
        'Kviesis',
        'Kviesitis',
        'Kajina',
        'Kaposts',
        'Karklis',
        'Karklins',
        'Karlsons',
        'Karo',
        'Klava',
        'Klavins',
        'Kuma',
        'Labdaris',
        'Lablaiks',
        'Laimitis',
        'Laipenieks',
        'Laiva',
        'Laivinieks',
        'Laivins',
        'Laizans',
        'Lakats',
        'Lakstigala',
        'Lapa',
        'Lapins',
        'Lapsa',
        'Lapsenite',
        'Lapsins',
        'Lasis',
        'Laukbalodis',
        'Lauks',
        'Lauksargs',
        'Launags',
        'Lauva',
        'Lazda',
        'Lazdins',
        'Laskopis',
        'Ledus',
        'Leinasars',
        'Leitis',
        'Leiskalns',
        'Leja',
        'Lejins',
        'Lejmalnieks',
        'Lejnieks',
        'Lelle',
        'Lielais',
        'Lielbiksis',
        'Lielcirulis',
        'Lieldiena',
        'Lielgaidins',
        'Lielgalva',
        'Lieljuks',
        'Lielkalns',
        'Lielkaja',
        'Lielmezs',
        'Lielozols',
        'Lielpuisis',
        'Lielpulks',
        'Lielpeteris',
        'Lielstrazds',
        'Lieltirums',
        'Lielupe',
        'Lielvards',
        'Liepa',
        'Liepins',
        'Liepkalnietis',
        'Liepkalns',
        'Liepkaja',
        'Lieplapa',
        'Lieplicis',
        'Liepuzars',
        'Lietins',
        'Lietuvietis',
        'Likums',
        'Linde',
        'Lindenbergs',
        'Linins',
        'Lisovskis',
        'Lodzins',
        'Logujanis',
        'Loze',
        'Ludzenieks',
        'Lusts',
        'Lacis',
        'Lacitis',
        'Ladite',
        'Lacgalva',
        'Lecejs',
        'Libietis',
        'Libtals',
        'Licis',
        'Licitis',
        'Lidaka',
        'Lika',
        'Likansis',
        'Likums',
        'Lusis',
        'Magons',
        'Magonitis',
        'Maisins',
        'Maizite',
        'Majors',
        'Malinovskis',
        'Mangotajs',
        'Martinovs',
        'Martinsons',
        'Matisons',
        'Maurins',
        'Mazais',
        'Mazbralis',
        'Mazinais',
        'Mazkalnins',
        'Mazkalns',
        'Mazulis',
        'Mazurs',
        'Mazzalite',
        'Mednieks',
        'Mednis',
        'Meija',
        'Meistars',
        'Melderis',
        'Melnbikses',
        'Mezakrumins',
        'Mezalacis',
        'Mezasargs',
        'Mezciems',
        'Mezgailis',
        'Mezins',
        'Mezkalnins',
        'Mezs',
        'Mezumalis',
        'Mierins',
        'Mierkalns',
        'Mierturis',
        'Miesnieks',
        'Miezis',
        'Miezitis',
        'Miezuvarpa',
        'Migla',
        'Miglins',
        'Mikasenoks',
        'Miklasevics',
        'Misins',
        'Mikelsons',
        'Mostiks',
        'Mucenieks',
        'Muitnieks',
        'Muizarajs',
        'Muizkalns',
        'Muiznieks',
        'Muzikants',
        'Makonis',
        'Malkalns',
        'Malnieks',
        'Mamina',
        'Manigs',
        'Marpuke',
        'Martindels',
        'Mernieks',
        'Mikstais',
        'Miligs',
        'Muris',
        'Murmanis',
        'Murnieks',
        'Nabadzins',
        'Nabags',
        'Namnieks',
        'Naudins',
        'Nebija',
        'Negriba',
        'Neilands',
        'Neretnieks',
        'Niedra',
        'Niedritis',
        'Nodievs',
        'Nokalns',
        'Novadnieks',
        'Numurs',
        'Natre',
        'Natrins',
        'Nave',
        'Nuja',
        'Odins',
        'Ods',
        'Odzina',
        'Oinas',
        'Olina',
        'Osis',
        'Ostrovskis',
        'Ositis',
        'Ottosons',
        'Ozolins',
        'Ozolkalns',
        'Ozolkaja',
        'Ozollapins',
        'Ozols',
        'Oskalns',
        'Oskaja',
        'Osnieks',
        'Paberzs',
        'Paeglis',
        'Pagasts',
        'Pagrabs',
        'Paipala',
        'Pakalnieks',
        'Pakalns',
        'Paladzins',
        'Papulis',
        'Papedis',
        'Papirs',
        'Paurins',
        'Pavasars',
        'Pavlovics',
        'Pavlovskis',
        'Pavars',
        'Paslaiks',
        'Peka',
        'Pele',
        'Pelekais',
        'Pelekzirnis',
        'Petrovs',
        'Pienins',
        'Pilipsons',
        'Pilskalns',
        'Pipars',
        'Pirtnieks',
        'Platacis',
        'Platais',
        'Platbardis',
        'Platgalva',
        'Platkajis',
        'Platupe',
        'Plaudis',
        'Pleiss',
        'Plikgalva',
        'Pludums',
        'Plume',
        'Plumins',
        'Podins',
        'Podnieks',
        'Pods',
        'Podzins',
        'Poikans',
        'Polis',
        'Portnojs',
        'Potite',
        'Praulis',
        'Praulins',
        'Precinieks',
        'Pretinieks',
        'Priecigs',
        'Priede',
        'Prieditis',
        'Prieks',
        'Priezukalns',
        'Princis',
        'Pramnieks',
        'Pratnieks',
        'Prusis',
        'Pudele',
        'Puika',
        'Puisans',
        'Puiselis',
        'Pulcins',
        'Pulkstenis',
        'Pulveris',
        'Pumpurins',
        'Pumpurs',
        'Pupa',
        'Purvitis',
        'Pusbardnieks',
        'Pusplatais',
        'Pusvacietis',
        'Puteklis',
        'Putenis',
        'Putnins',
        'Putns',
        'Putra',
        'Putrina',
        'Pukadruva',
        'Pukains',
        'Pukudarzs',
        'Pukukalns',
        'Pukulauks',
        'Pukuleja',
        'Pukite',
        'Puskis',
        'Parupe',
        'Parupietis',
        'Patags',
        'Peda',
        'Perkons',
        'Peterkalns',
        'Petersons',
        'Piladzis',
        'Pipe',
        'Pipkalejs',
        'Pirs',
        'Pirags',
        'Piterovs',
        'Pizelis',
        'Plava',
        'Plavasgailis',
        'Plavins',
        'Puce',
        'Pukains',
        'Pukgalva',
        'Pupols',
        'Pupedis',
        'Putejs',
        'Radzins',
        'Ragains',
        'Rags',
        'Raibacis',
        'Raibs',
        'Ratkalns',
        'Ratnieks',
        'Rebainis',
        'Reinsons',
        'Resnais',
        'Riekstins',
        'Rieksts',
        'Rikters',
        'Riters',
        'Rinkis',
        'Robeznieks',
        'Robins',
        'Romans',
        'Romancuks',
        'Ronis',
        'Roze',
        'Rozenbergs',
        'Rozenblats',
        'Rozenfelds',
        'Rozentals',
        'Rozitis',
        'Rozdarzs',
        'Rozlapa',
        'Rozukalns',
        'Rozulauks',
        'Rudzis',
        'Rudzugailis',
        'Rudzuvarpa',
        'Rudzitis',
        'Rugajs',
        'Rumbenieks',
        'Runcis',
        'Racenis',
        'Rukis',
        'Saimnieks',
        'Saitina',
        'Sakne',
        'Saknitis',
        'Saktins',
        'Sala',
        'Saldaisabols',
        'Saldums',
        'Salmins',
        'Salms',
        'Salna',
        'Salpetris',
        'Sargs',
        'Sarkanais',
        'Sarkanbardis',
        'Sarkangalva',
        'Sarkans',
        'Sarkanabols',
        'Saule',
        'Sauleskalns',
        'Saulgozis',
        'Saulitis',
        'Sausais',
        'Sausaismarcis',
        'Sausins',
        'Sausserdis',
        'Sedols',
        'Seglins',
        'Septinbralis',
        'Serzants',
        'Sesks',
        'Sidrabkalejs',
        'Sidrabs',
        'Siguldietis',
        'Siksna',
        'Silabalodis',
        'Silamednis',
        'Silamikelis',
        'Silins',
        'Siltums',
        'Simsons',
        'Sirmais',
        'Sirsnins',
        'Sivens',
        'Skaidrins',
        'Skolmeisters',
        'Skriveris',
        'Skrivulis',
        'Skudra',
        'Skuja',
        'Skujins',
        'Skurstenis',
        'Skabardis',
        'Slapjums',
        'Slava',
        'Smalcis',
        'Smalkais',
        'Smilga',
        'Smiltis',
        'Smiltins',
        'Smiltskalejs',
        'Smilguzieds',
        'Smilskalns',
        'Smukulis',
        'Sniedze',
        'Sniegs',
        'Sods',
        'Sosnovskis',
        'Spalva',
        'Spalvains',
        'Spalvins',
        'Spozums',
        'Spradzis',
        'Sprigulnieks',
        'Sproga',
        'Sprosts',
        'Sparnins',
        'Sparite',
        'Spelite',
        'Stabins',
        'Stabulite',
        'Starins',
        'Stasko',
        'Stiebrins',
        'Stienitis',
        'Stilbs',
        'Stirna',
        'Straume',
        'Straumite',
        'Strautins',
        'Strautkalns',
        'Strautnieks',
        'Strauts',
        'Strazdins',
        'Strazds',
        'Strengis',
        'Strupauss',
        'Stradnieks',
        'Strelnieks',
        'Students',
        'Stumbris',
        'Stumps',
        'Stadins',
        'Starasts',
        'Stipnieks',
        'Sturis',
        'Sturitis',
        'Sudmalnieks',
        'Sulainis',
        'Svekis',
        'Salzirnis',
        'Sars',
        'Selis',
        'Sene',
        'Sermukslis',
        'Setnieks',
        'Sika',
        'Sikstums',
        'Silis',
        'Sipols',
        'Sirups',
        'Tabaks',
        'Taisnins',
        'Tapina',
        'Taube',
        'Taurins',
        'Teivans',
        'Tenisons',
        'Tencs',
        'Teteritis',
        'Tiesnesis',
        'Tievais',
        'Tievgals',
        'Tikmers',
        'Tiltabrencis',
        'Tiltins',
        'Tomsons',
        'Treknais',
        'Tristiltins',
        'Tuksnesis',
        'Tumsais',
        'Tumss',
        'Talums',
        'Terauds',
        'Tevins',
        'Tirumnieks',
        'Tirums',
        'Ubags',
        'Upe',
        'Upene',
        'Upenieks',
        'Upeslacis',
        'Upmalis',
        'Upurs',
        'Upitis',
        'Uzkalns',
        'Vadonis',
        'Vainags',
        'Vanadzins',
        'Vanags',
        'Vasara',
        'Vasarins',
        'Vecais',
        'Vecarajs',
        'Vecbalodis',
        'Vecgailis',
        'Vecgalvins',
        'Veckalnins',
        'Veckalns',
        'Veckungs',
        'Vecozolins',
        'Vecozols',
        'Vecputns',
        'Vecpeteris',
        'Vecroze',
        'Vecums',
        'Vecvanags',
        'Vecvieta',
        'Vecziedins',
        'Vecakais',
        'Veinbergs',
        'Viduskalns',
        'Vidzemnieks',
        'Vieglais',
        'Vienrocis',
        'Vientulis',
        'Vietnieks',
        'Vijupe',
        'Vilcins',
        'Vilkauss',
        'Vilks',
        'Vilkutriceklis',
        'Vilkusavejs',
        'Vilnis',
        'Vilnitis',
        'Viltnieks',
        'Vilcuks',
        'Vimba',
        'Vircavnieks',
        'Vizulis',
        'Vilumsons',
        'Vrublevskis',
        'Vacietis',
        'Vaczemnieks',
        'Vale',
        'Valodze',
        'Varna',
        'Varpa',
        'Vartukapteins',
        'Vavere',
        'Vaverite',
        'Vejins',
        'Versis',
        'Vetra',
        'Vezis',
        'Viksna',
        'Viksnitis',
        'Vinakmens',
        'Vindedzis',
        'Vindzerajs',
        'Vinkalns',
        'Vinkoks',
        'Vinroze',
        'Vinsteins',
        'Virs',
        'Vitolins',
        'Vitols',
        'Zaldats',
        'Zaravics',
        'Zarins',
        'Zars',
        'Zakis',
        'Zakitis',
        'Zalais',
        'Zalaiskalns',
        'Zalulapa',
        'Zelenko',
        'Zeltins',
        'Zeltkalns',
        'Zelts',
        'Zeltabols',
        'Zeme',
        'Zemeskalns',
        'Zemespislis',
        'Zemgalnieks',
        'Zemgridis',
        'Zemlogs',
        'Zemnieks',
        'Zemturis',
        'Zemzaris',
        'Zemitis',
        'Zeps',
        'Zibens',
        'Ziedins',
        'Zieds',
        'Ziemelis',
        'Ziguzis',
        'Zilkalns',
        'Zinitis',
        'Zirdzins',
        'Zirnis',
        'Zivtins',
        'Znots',
        'Zobens',
        'Zommers',
        'Zoskalejs',
        'Zupa',
        'Zutis',
        'Zvaigzne',
        'Zvaigznekalns',
        'Zvaigznite',
        'Zvanitajs',
        'Zvejnieks',
        'Zviedris',
        'Zvirbulis',
        'Zvirgzdins',
        'Zvirgzds',
        'Zvirgzdugrauds',
        'Zvargulis',
        'Zabaks',
        'Zalitis',
        'Zegele',
        'Zile',
        'Zilite',
        'Zimulis',
        'Abele',
        'Abelite',
        'Abolins',
        'Abolkalns',
        'Abols',
        'Adamovics',
        'Adamovs',
        'Adamsons',
        'Amanis',
        'Amurs',
        'Argalis',
        'Arsts',
        'Azis',
        'Azitis',
        'Akis',
        'Akitis',
        'Cakste',
        'Cakstins',
        'Ciekurs',
        'Cigans',
        'Ena',
        'Erce',
        'Erglis',
        'Eriksons',
        'Ergelnieks',
        'Kiegelis',
        'Kiegelnieks',
        'Kimene',
        'Kiploks',
        'Kede',
        'Kenins',
        'Kevite',
        'Laudis',
        'Saurins',
        'Smits',
        'Sneiders',
        'Steinbergs',
        'Steins',
        'Stelmahers',
        'Svalbe',
        'Svarcs',
        'Savejs',
        'Skidra',
        'Skinkis',
        'Skele',
        'Snore',
        'Supulis',
        'Udens',
        'Udris',
        'Udritis',
        'Usins',
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
