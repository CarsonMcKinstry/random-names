export default function czechs() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() < 0.5 ? 0 : 1;
  const nm1 = ['Čeněk', 'Čestmír', 'Řehoř', 'Šimon', 'Štěpán', 'Štefan', 'Adam',
    'Adolf', 'Alan', 'Albert', 'Aleš', 'Alexandr', 'Alexej', 'Alois',
    'Ambrož', 'Andrej', 'Antonín', 'Arnošt', 'Artur', 'Augustýn', 'Břetislav',
    'Bartoloměj', 'Bedřich', 'Benedikt', 'Bernard', 'Blažej', 'Blahoslav',
    'Bořek', 'Bořivoj', 'Bohdan', 'Bohumír', 'Bohumil', 'Bohuslav',
    'Boleslav', 'Bonifác', 'Borek', 'Boris', 'Bronislav', 'Bruno', 'Ctibor',
    'Ctirad', 'Dalibor', 'Dalimil', 'Daniel', 'David', 'Denis', 'Dobroslav',
    'Dominik', 'Drahoslav', 'Dušan', 'Eduard', 'Emanuel', 'Emil', 'Erik',
    'Evžen', 'Felix', 'Ferdinand', 'Filip', 'František', 'Gabriel', 'Gustav',
    'Hanuš', 'Havel', 'Herbert', 'Herman', 'Hubert', 'Hugo', 'Hynek', 'Ignác',
    'Igor', 'Ivan', 'Ivo', 'Jáchym', 'Jakub', 'Jan', 'Jarmil', 'Jaromír',
    'Jaroslav', 'Jeroným', 'Jiří', 'Jindřich', 'Jonáš', 'Josef', 'Julius',
    'Kamil', 'Karel', 'Kazimír', 'Klement', 'Kristián', 'Kryštof',
    'Květoslav', 'Kvido', 'Ladislav', 'Leoš', 'Leopold', 'Libor', 'Luboš',
    'Lubomír', 'Lubor', 'Luděk', 'Ludvík', 'Lukáš', 'Lumír', 'Marcel',
    'Marek', 'Marián', 'Martin', 'Matěj', 'Matouš', 'Matyáš', 'Maxmilián',
    'Medard', 'Melichar', 'Michal', 'Mikuláš', 'Milan', 'Miloš', 'Miloslav',
    'Miroslav', 'Mojmír', 'Nikolas', 'Norbert', 'Oldřich', 'Oleg', 'Oliver',
    'Ondřej', 'Oskar', 'Otakar', 'Otmar', 'Oto', 'Přemysl', 'Pankrác',
    'Patrik', 'Pavel', 'Petr', 'Pravoslav', 'Prokop', 'Radek', 'Radim',
    'Radomír', 'Radoslav', 'Radovan', 'René', 'Richard', 'Robert', 'Robin',
    'Roland', 'Roman', 'Rostislav', 'Rudolf', 'Samuel', 'Sebastian', 'Servác',
    'Silvestr', 'Slavomír', 'Soběslav', 'Stanislav', 'Svatopluk', 'Svatoslav',
    'Tadeáš', 'Teodor', 'Tibor', 'Tomáš', 'Václav', 'Vítězslav', 'Vít',
    'Věnceslav', 'Věroslav', 'Valdemar', 'Valentýn', 'Vavřinec', 'Vendelín',
    'Viktor', 'Vilém', 'Vincenc', 'Vladan', 'Vladimír', 'Vladislav',
    'Vlastimil', 'Vlastislav', 'Vojtěch', 'Vojtěch ', 'Vratislav', 'Zbyšek',
    'Zbyněk', 'Zdeněk', 'Zikmund'];
  const nm2 = ['Šárka', 'Šarlota', 'Štěpánka', 'Žaneta', 'Žofie', 'Adéla',
    'Adriana', 'Agáta', 'Alžběta', 'Albína', 'Alena', 'Alexandra', 'Alice',
    'Amálie', 'Anastázie', 'Anděla', 'Andrea', 'Anežka', 'Aneta', 'Anna',
    'Antonie', 'Apolena', 'Běla', 'Barbora', 'Beáta', 'Berta', 'Blažena',
    'Blanka', 'Božena', 'Bohdana', 'Bohumila', 'Bohuslava', 'Brigita',
    'Cecílie', 'Dáš', 'Dagmar', 'Dagmara', 'Dana', 'Daniela', 'Darina',
    'Darja', 'Denisa', 'Diana', 'Dita', 'Dobromila', 'Dominika', 'Dorota',
    'Doubravka', 'Drahomíra', 'Drahoslava', 'Edita', 'Elena', 'Eliška',
    'Emílie', 'Ema', 'Erika', 'Ester', 'Evženie', 'Eva', 'Evelína',
    'Františka', 'Gabriela', 'Gita', 'Gizela', 'Hana', 'Hanka', 'Hedvika',
    'Helena', 'Hermína', 'Ida', 'Ilona', 'Ingrid', 'Irena', 'Irma', 'Iva',
    'Ivana', 'Iveta', 'Ivona', 'Izabela', 'Jana', 'Jarmila', 'Jaroslava',
    'Jiřina', 'Jindřiška', 'Jitka', 'Johana', 'Jolana', 'Judita', 'Julie',
    'Justýna', 'Kamila', 'Karina', 'Karolína', 'Kateřina', 'Klára', 'Klaudie',
    'Kristýna', 'Květa', 'Květoslava', 'Lýdie', 'Lada', 'Laura', 'Lenka',
    'Leona', 'Liběna', 'Libuše', 'Liliana', 'Linda', 'Ljuba', 'Lucie',
    'Lucka', 'Ludmila', 'Magdaléna', 'Mahulena', 'Marcela', 'Mariana',
    'Marie', 'Marika', 'Marina', 'Markéta', 'Marta', 'Martina', 'Matylda',
    'Michaela', 'Milada', 'Milena', 'Miloslava', 'Miluše', 'Miriam',
    'Miroslava', 'Monika', 'Naděžda', 'Natálie', 'Nataša', 'Nela', 'Nikola',
    'Nina', 'Nora', 'Olívie', 'Oldřiška', 'Olga', 'Otýlie', 'Patricie',
    'Pavlíná', 'Pavlína', 'Pavla', 'Petra', 'Rút', 'Růžena', 'Radana',
    'Radka', 'Radmila', 'Regína', 'Renáta', 'Romana', 'Sára', 'Sáva',
    'Sabina', 'Sandra', 'Saskie', 'Silvie', 'Simona', 'Slavěna', 'Soňa',
    'Stanislava', 'Stela', 'Světlana', 'Svatava', 'Taťána', 'Tamara',
    'Tereza', 'Věra', 'Valérie', 'Vanda', 'Vendula', 'Veronika', 'Viktorie',
    'Vilma', 'Viola', 'Vladěna', 'Vlasta', 'Xenie', 'Zdeňka', 'Zdislava',
    'Zina', 'Zita', 'Zlata', 'Zoe', 'Zora', 'Zuzana'];
  const nm3 = ['Čížek', 'Čapek', 'Čech', 'Čermák', 'Černá', 'Černý', 'Čestný',
    'Říha', 'Řehák', 'Řezníček', 'Šíma', 'Šťastná', 'Šťastný', 'Ševčík',
    'Šimek', 'Šindelář', 'Šmíd', 'Špaček', 'Šrámek', 'Štěpán', 'Štěpánek',
    'Šulc', 'Švarc', 'Švec', 'Žák', 'Adámek', 'Adamček', 'Adamec', 'Bárta',
    'Bílek', 'Březina', 'Bartoš', 'Bednář', 'Beneš', 'Beránek', 'Beran',
    'Bláha', 'Blažek', 'Brabec', 'Brož', 'Brotz', 'Bureš', 'Burian',
    'Charvát', 'Daněk', 'Dlouhý', 'Dohnal', 'Doležal', 'Doskočil', 'Dostál',
    'Dušek', 'Dvořáček', 'Dvořák', 'Fišer', 'Fiala', 'Flanderka', 'Hájek',
    'Hanák', 'Hanuš', 'Haušild', 'Havel', 'Havelka', 'Havlíček', 'Havlík',
    'Hladík', 'Hlaváč', 'Hlaváček', 'Hlusička', 'Hošek', 'Holeček', 'Holub',
    'Horáček', 'Horák', 'Horváth', 'Hruška', 'Hrubá', 'Hrubý', 'Jílek',
    'Janda', 'Janeček', 'Janků', 'Janoušek', 'Jaroš', 'Jeřábek', 'Ježek',
    'Jedlička', 'Jelínek', 'Kříž', 'Křepelka', 'Křoupal', 'Kašpar', 'Kadlec',
    'Klíma', 'Klapil', 'Klimeš', 'Kočí', 'Kořínek', 'Kohout', 'Kolář',
    'Komárek', 'Kopecký', 'Kováč', 'Kovář', 'Kovařík', 'Kozák', 'Kozár',
    'Krákora', 'Král', 'Krátká', 'Krátký', 'Kratochvíl', 'Kraus', 'Krejčí',
    'Kučaj', 'Kubát', 'Kubíček', 'Kubík', 'Kuchyňka', 'Ledvina', 'Liška',
    'Lichý', 'Linhart', 'Lukeš', 'Málek', 'Máta', 'Mašek', 'Macek',
    'Macháček', 'Mach', 'Malá', 'Malík', 'Malý', 'Mareš', 'Marek', 'Martínek',
    'Matějka', 'Materna', 'Matoušek', 'Mazal', 'Mišalko', 'Michálek',
    'Moravec', 'Mrázek', 'Musil', 'Němeček', 'Němec', 'Navrátil', 'Nistor',
    'Nováček', 'Novák', 'Nový', 'Novotná', 'Novotný', 'Ošetřil', 'Opustil',
    'Přibyl', 'Panský', 'Pavelka', 'Pavlíček', 'Pavlík', 'Peřina', 'Pešek',
    'Petr', 'Pletánek', 'Podlezl', 'Pokorný', 'Poláček', 'Polášek', 'Polák',
    'Polanka', 'Pospíšil', 'Pospíchal', 'Povýšil', 'Prokop', 'Prusík',
    'Ptáček', 'Rýpal', 'Růžička', 'Rezek', 'Richter', 'Rmoutil', 'Rušil',
    'Sedláček', 'Sedlák', 'Silný', 'Skoupý', 'Sládek', 'Sláma', 'Slavík',
    'Slezák', 'Sobotka', 'Souček', 'Soukup', 'Staněk', 'Stehlík', 'Stejskal',
    'Stránská', 'Stránský', 'Straka', 'Strnad', 'Suchá', 'Suchánek', 'Suchý',
    'Svoboda', 'Tůma', 'Tatarka', 'Tesař', 'Tichá', 'Tichý', 'Tomášek',
    'Toman', 'Troufal', 'Tureček', 'Turek', 'Urbánek', 'Utěkal', 'Váňa',
    'Válek', 'Vávra', 'Vítek', 'Vašíček', 'Vacek', 'Valenta', 'Vaněk',
    'Veselá', 'Veselý', 'Vlček', 'Vlach', 'Volf', 'Vrána', 'Vrbová',
    'Vykopal', 'Vykukal', 'Zápotocký', 'Zacpal', 'Zapletal', 'Zdráhal',
    'Zelenka', 'Zeman', 'Zmeškal', 'Ztratil', 'Zukal'];
  const nm4 = ['Čapková', 'Čechová', 'Čermáková', 'Červenková', 'Červinková',
    'Říhová', 'Řeháková', 'Řezáčová', 'Řezníčková', 'Šímová', 'Šebestová',
    'Šebková', 'Ševčíková', 'Šimková', 'Šimonová', 'Šindelářová', 'Škodová',
    'Šmídová', 'Špačková', 'Šrámková', 'Štěpánková', 'Štěpánová', 'Štěrbová',
    'Šulcová', 'Švarcová', 'Švecová', 'Žáčková', 'Žižková', 'Adámková',
    'Adamcová', 'Adamová', 'Bártová', 'Bílková', 'Březinová', 'Balážová',
    'Bartáková', 'Bartíková', 'Bartoňová', 'Bartošová', 'Bauerová',
    'Bednářová', 'Bendová', 'Benešová', 'Beránková', 'Beranová', 'Berková',
    'Bezoušková', 'Bláhová', 'Blažková', 'Boháčová', 'Brožová', 'Burešová',
    'Burianová', 'Chaloupková', 'Chalupecká', 'Chalupová', 'Charvátová',
    'Coufalová', 'Daňková', 'Davidová', 'Divišová', 'Dohnalová', 'Doležalová',
    'Doleželová', 'Dostálová', 'Drábková', 'Dušková', 'Dudová', 'Dufková',
    'Dvořáčková', 'Dvořáková', 'Fišerová', 'Fojtíková', 'Formánková',
    'Francová', 'Franková', 'Gregorová', 'Hájková', 'Hamplová', 'Hanáková',
    'Hanušová', 'Haušildová', 'Havelková', 'Havlíčková', 'Havlíková',
    'Havránková', 'Hladíková', 'Hlaváčková', 'Hlaváčová', 'Hošková',
    'Hofmanová', 'Holečková', 'Holubová', 'Horáčková', 'Horáková',
    'Horváthová', 'Hovorková', 'Hrdličková', 'Hrušková', 'Jandová',
    'Janečková', 'Janková', 'Janoušková', 'Jarošová', 'Jeřábková', 'Ježková',
    'Jedličková', 'Jelínková', 'Jindrová', 'Jirásková', 'Jonatánová',
    'Křížková', 'Křížová', 'Křivánková', 'Kašparová', 'Kadlecová', 'Kalinová',
    'Karásková', 'Kasnarová', 'Kejsalová', 'Klímková', 'Klečalová',
    'Klimešová', 'Kočová', 'Kořínková', 'Kociánová', 'Kocourková',
    'Kohoutová', 'Kolářová', 'Komárková', 'Konrádová', 'Kopřivová', 'Koubová',
    'Koudelková', 'Kováčová', 'Kovářová', 'Kovaříková', 'Kozáková', 'Králová',
    'Kratochvílová', 'Krausová', 'Krejčová', 'Kroupová', 'Kučerová',
    'Kubátová', 'Kubíčková', 'Kubíková', 'Kubešová', 'Kuchařová',
    'Kulhánková', 'Kuncová', 'Kvapilová', 'Létalová', 'Linhartová',
    'Loubalová', 'Loupalová', 'Lukášová', 'Lukešová', 'Málková', 'Müllerová',
    'Mašková', 'Macháčková', 'Machová', 'Macková', 'Majerová', 'Malíková',
    'Marečková', 'Marešová', 'Marková', 'Martínková', 'Martinková',
    'Martinová', 'Matějková', 'Matoušková', 'Melicharová', 'Michálková',
    'Mikešová', 'Miková', 'Minaříková', 'Moravcová', 'Mrázková', 'Mrázová',
    'Musilová', 'Němcová', 'Němečková', 'Navrátilová', 'Nekvasilová',
    'Nosková', 'Nováčková', 'Nováková', 'Novotná', 'Ondráčková', 'Pánková',
    'Přibylová', 'Přikrylová', 'Pavelková', 'Pavlíčková', 'Pavlíková',
    'Pešková', 'Pechová', 'Petříková', 'Peterková', 'Pokorná', 'Poláčková',
    'Polášková', 'Poláková', 'Pospíšilová', 'Procházková', 'Prokešová',
    'Prokopová', 'Ptáčková', 'Pykalová', 'Růžičková', 'Radová', 'Richterová',
    'Sýkorová', 'Sedláčková', 'Sedláková', 'Sikorová', 'Skálová',
    'Sklenářová', 'Sládková', 'Slámová', 'Slavíková', 'Slezáková',
    'Slováčková', 'Smejkalová', 'Smetanová', 'Sobotková', 'Součková',
    'Soukupová', 'Stýskalová', 'Staňková', 'Stehlíková', 'Stejskalová',
    'Straková', 'Strnadová', 'Suchánková', 'Sucharová', 'Svobodová',
    'Svozilová', 'Tesařová', 'Tomášková', 'Tomanová', 'Tomková',
    'Trávníčková', 'Trojanová', 'Tučková', 'Uherková', 'Uhlířová',
    'Urbánková', 'Urbanová', 'Váňová', 'Václavíková', 'Válková', 'Vávrová',
    'Vítková', 'Vítová', 'Vaňková', 'Vašíčková', 'Vašková', 'Vacková',
    'Valentová', 'Vaníčková', 'Večeřová', 'Vlčková', 'Vlachová', 'Vlasáková',
    'Vodičková', 'Vondráčková', 'Vyvozilová', 'Zahradníková', 'Zajíčková',
    'Zajícová', 'Zapletalová', 'Zatloukalová', 'Zavadilová', 'Zelenková',
    'Zemanová'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm2[rnd]} ${nm4[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
    }
    return names;
  }
}
