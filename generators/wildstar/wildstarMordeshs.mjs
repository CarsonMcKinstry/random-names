export default function wildstarMordeshs() {
  let name;
  let lname;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Alexi', 'Bajko', 'Belos', 'Biljan', 'Biser', 'Blago',
    'Blagojce', 'Blagoje', 'Blagoy', 'Blagun', 'Blahos', 'Boban', 'Bogdan',
    'Bogom', 'Bogomil', 'Bogumil', 'Bohdan', 'Bohum', 'Bohumer', 'Bohumil',
    'Bojan', 'Bojek', 'Bojidar', 'Bolek', 'Boro', 'Borce', 'Borek', 'Borik',
    'Boril', 'Boris', 'Borko', 'Borno', 'Borut', 'Bosko', 'Boyan', 'Boyko',
    'Bozan', 'Bozhil', 'Bozhin', 'Bozidar', 'Bozo', 'Bozydar', 'Brajko',
    'Branek', 'Branik', 'Branko', 'Brencis', 'Bretik', 'Budek', 'Budim',
    'Bujanek', 'Burian', 'Casim', 'Dalibor', 'Damek', 'Dane', 'Danil',
    'Danko', 'Dare', 'Darin', 'Darko', 'Daro', 'Davor', 'Davorin', 'Davorko',
    'Dejan', 'Delcho', 'Delyan', 'Derwan', 'Desim', 'Deyan', 'Divan',
    'Dmitri', 'Dobri', 'Dobrin', 'Domard', 'Donat', 'Dragan', 'Dragi',
    'Dragiso', 'Drago', 'Draho', 'Drahos', 'Drazo', 'Drazan', 'Drazen',
    'Drziho', 'Durko', 'Dusan', 'Duscho', 'Dusek', 'Dusko', 'Elyo', 'Fadey',
    'Gavril', 'Gniewko', 'Gojko', 'Goran', 'Gorazd', 'Grozdan', 'Grubiso',
    'Gvozden', 'Honzo', 'Igor', 'Iskren', 'Jadran', 'Jadranko', 'Jakso',
    'Jarek', 'Jarom', 'Jaromer', 'Jaromil', 'Jaros', 'Jarousek', 'Jasen',
    'Jasenko', 'Javor', 'Jovan', 'Jugos', 'Kalin', 'Kamen', 'Kardo', 'Kazim',
    'Kazimierz', 'Klatko', 'Klonim', 'Kole', 'Kolyo', 'Kostyo', 'Krasim',
    'Krastan', 'Krastyo', 'Kresim', 'Kresnik', 'Kreso', 'Krsevan', 'Krzesim',
    'Kvetos', 'Lachezar', 'Ladis', 'Lado', 'Lechos', 'Leszek', 'Lubo',
    'Lubek', 'Lubom', 'Lubor', 'Luborek', 'Lubos', 'Lubosek', 'Ludos', 'Luko',
    'Lyuben', 'Lyubom', 'Lyubos', 'Lyudmil', 'Malin', 'Matejo', 'Mecek',
    'Mecik', 'Mecis', 'Mijom', 'Miladin', 'Milan', 'Milanko', 'Milcho',
    'Mile', 'Milen', 'Milenko', 'Mileti', 'Milic', 'Miliduch', 'Milivoj',
    'Milivoje', 'Miljan', 'Miljenko', 'Milko', 'Milo', 'Miloje', 'Milon',
    'Milorad', 'Milos', 'Milosz', 'Milovan', 'Milush', 'Milutin', 'Miodrag',
    'Misko', 'Mjecis', 'Mladen', 'Momchil', 'Momcilo', 'Muncel', 'Mutim',
    'Myslik', 'Nado', 'Naum', 'Nayden', 'Nebojso', 'Nedelcho', 'Nenad',
    'Nepomuk', 'Neven', 'Niko', 'Obrad', 'Obren', 'Ognian', 'Ognjen',
    'Ognyan', 'Oleg', 'Orlin', 'Ozren', 'Parvan', 'Perun', 'Plamen', 'Pomuk',
    'Predrag', 'Premek', 'Premysl', 'Pres', 'Pribo', 'Pribik', 'Prodan',
    'Radacek', 'Radan', 'Rade', 'Radek', 'Radi', 'Radik', 'Radim', 'Radko',
    'Radmilo', 'Rado', 'Radoje', 'Radom', 'Radomer', 'Rados', 'Radovan',
    'Radoy', 'Raicho', 'Rajan', 'Rajke', 'Rajko', 'Rajo', 'Ranko', 'Ratim',
    'Ratko', 'Rato', 'Ratom', 'Rayko', 'Razvigor', 'Roscis', 'Rosen', 'Rosto',
    'Rostek', 'Rosticek', 'Rostik', 'Rostis', 'Rumen', 'Sambor', 'Sian',
    'Siniso', 'Siso', 'Slobodan', 'Smiljan', 'Snjesko', 'Sobek', 'Sobes',
    'Sobies', 'Sobik', 'Sokol', 'Soljub', 'Spasoje', 'Spomenko', 'Srdjan',
    'Srebrenko', 'Srecko', 'Sredoje', 'Sreten', 'Stano', 'Stando', 'Stane',
    'Stanek', 'Stani', 'Stanicek', 'Stanij', 'Stanik', 'Stanim', 'Stanis',
    'Stanko', 'Stesho', 'Stoil', 'Stojan', 'Stoyan', 'Stoycho', 'Stoyko',
    'Stracim', 'Strahil', 'Strahim', 'Sudan', 'Sudanek', 'Sulis', 'Svatom',
    'Svatos', 'Svetlan', 'Svetlin', 'Svetos', 'Svetozar', 'Svilen', 'Svyatos',
    'Swietos', 'Techom', 'Techos', 'Tihom', 'Tihomil', 'Tijan', 'Tjesim',
    'Tomis', 'Tomo', 'Toplico', 'Traicho', 'Traiko', 'Troian', 'Trpim',
    'Tsvetan', 'Tsvetom', 'Tugom', 'Vacek', 'Vadim', 'Valko', 'Vanyo',
    'Varban', 'Vasek', 'Vassko', 'Vatros', 'Veces', 'Vedran', 'Vekos', 'Velo',
    'Velek', 'Veles', 'Velibor', 'Velichko', 'Veliko', 'Velim', 'Velin',
    'Velis', 'Velizar', 'Veljko', 'Velko', 'Velousek', 'Vences', 'Venousek',
    'Ventses', 'Ventsis', 'Veran', 'Veselin', 'Veselko', 'Vesselin', 'Vidos',
    'Vihren', 'Vises', 'Vitom', 'Vjekos', 'Vjences', 'Vjeran', 'Vlad',
    'Vlade', 'Vladico', 'Vladim', 'Vladis', 'Vlado', 'Vlastim', 'Vlastimil',
    'Vlatko', 'Vojis', 'Vojkan', 'Vojm', 'Vojmil', 'Vojnom', 'Vojto',
    'Vojtech', 'Vojteh', 'Vojtik', 'Vojtisek', 'Volen', 'Vsevolod', 'Vukosav',
    'Vukoto', 'Vuksan', 'Vuksho', 'Vyaches', 'Wenzel', 'Wies', 'Wladys',
    'Wojs', 'Wojtek', 'Wszebor', 'Yakov', 'Yaros', 'Yasen', 'Yavor', 'Zan',
    'Zarko', 'Zawiszo', 'Zelek', 'Zelik', 'Zelim', 'Zelis', 'Zeljko',
    'Zelousek', 'Zhelyazko', 'Zhivko', 'Ziemowit', 'Zitek', 'Zitom',
    'Zitousek', 'Zivadin', 'Zivan', 'Zivanek', 'Zivek', 'Zivko', 'Zivojin',
    'Zivorad', 'Zivoto', 'Zlatan', 'Zlatek', 'Zlaticek', 'Zlatik', 'Zlatko',
    'Zlatom', 'Zlatousek', 'Zoran', 'Zoris', 'Zrinko', 'Zrinos', 'Zvezdan',
    'Zvonim'];
  const nm2 = ['Alena', 'Alexi', 'Alina', 'Anca', 'Ania', 'Baritza', 'Bela',
    'Beloslava', 'Berislava', 'Beyla', 'Biljana', 'Bilyana', 'Bisera',
    'Biserka', 'Bistra', 'Blaga', 'Blagica', 'Blaguna', 'Bogdana', 'Bogna',
    'Bojana', 'Bojka', 'Bolena', 'Bolerka', 'Boriana', 'Borka', 'Boyana',
    'Boyka', 'Boza', 'Bozana', 'Bozena', 'Bozhana', 'Bozica', 'Bozka',
    'Brana', 'Branka', 'Bretka', 'Brona', 'Bronicka', 'Bronka', 'Buga',
    'Caterina', 'Cedna', 'Chesna', 'Chessa', 'Cvetka', 'Cvijeta', 'Cvita',
    'Dana', 'Danica', 'Danika', 'Danitza', 'Danka', 'Dara', 'Daria', 'Darina',
    'Darka', 'Darva', 'Davorka', 'Dejana', 'Denica', 'Desa', 'Desislava',
    'Divna', 'Dobra', 'Dobrali', 'Dragana', 'Dragica', 'Draha', 'Draza',
    'Drazenka', 'Dubravka', 'Dunja', 'Dunya', 'Dusa', 'Dusana', 'Duscha',
    'Dusicka', 'Duska', 'Elina', 'Elka', 'Elya', 'Evelina', 'Evonnia',
    'Gorana', 'Goranka', 'Grozda', 'Hrvatina', 'Hrvoja', 'Hrvojka', 'Idania',
    'Irina', 'Iryna', 'Iskra', 'Iva', 'Ivana', 'Jadrana', 'Jadranka',
    'Jalena', 'Jana', 'Janika', 'Janina', 'Janitza', 'Jarka', 'Jarmila',
    'Jasenka', 'Jasna', 'Jelena', 'Jitka', 'Jola', 'Jolanda', 'Jovana',
    'Jovanna', 'Kalina', 'Katia', 'Kisha', 'Kolina', 'Kveta', 'Kvetka',
    'Kvetuska', 'Lada', 'Lana', 'Larya', 'Lenka', 'Liba', 'Lida', 'Lidka',
    'Lonna', 'Luba', 'Lubena', 'Lubina', 'Lubka', 'Luka', 'Lumina', 'Lyuba',
    'Malina', 'Mara', 'Marija', 'Marina', 'Marta', 'Marzanna', 'Masha',
    'Maslinka', 'Mateja', 'Mecka', 'Melina', 'Merana', 'Miglena', 'Mila',
    'Miladena', 'Miladka', 'Milana', 'Milanka', 'Milena', 'Milenka', 'Milica',
    'Militsa', 'Milja', 'Miljana', 'Miljenka', 'Milka', 'Miluska', 'Mira',
    'Mircea', 'Miriana', 'Mirjana', 'Mirka', 'Mirna', 'Miruna', 'Miruska',
    'Mislava', 'Mojmira', 'Mora', 'Morana', 'Nada', 'Nadia', 'Natalya',
    'Natashia', 'Navenka', 'Neda', 'Nedda', 'Nedelya', 'Neva', 'Nevena',
    'Nevenka', 'Nika', 'Oksana', 'Olena', 'Olga', 'Olya', 'Ona', 'Panya',
    'Probka', 'Rada', 'Radka', 'Raina', 'Raja', 'Rajana', 'Rajka', 'Ralica',
    'Ranka', 'Ratka', 'Rosica', 'Rosta', 'Rumena', 'Rumiana', 'Ruza',
    'Ruzica', 'Sana', 'Sanya', 'Senka', 'Slavica', 'Slavina', 'Slavka',
    'Snezana', 'Snjeska', 'Sobena', 'Sobeska', 'Sonia', 'Spasena', 'Stana',
    'Stojana', 'Sveta', 'Svetla', 'Svilena', 'Tanya', 'Tara', 'Tasya', 'Taya',
    'Tesla', 'Tihana', 'Triska', 'Vaclava', 'Valeska', 'Vanya', 'Varvara',
    'Vedrana', 'Vela', 'Velika', 'Velina', 'Velinka', 'Velka', 'Vena',
    'Venka', 'Vera', 'Verka', 'Vesela', 'Vesna', 'Viara', 'Vida', 'Vierka',
    'Vihra', 'Vlasta', 'Vlatka', 'Yanka', 'Yeva', 'Yuliana', 'Zhivka',
    'Zitka', 'Ziva', 'Zivka', 'Zlata', 'Zoila', 'Zoja', 'Zora', 'Zorana',
    'Zorica', 'Zorina', 'Zorka', 'Zrina', 'Zrinka', 'Zuzana', 'Zvonka',
    'Zwisa'];
  const nm3 = ['b', 'br', 'c', 'ch', 'd', 'g', 'gr', 'j', 'k', 'kr', 'l', 'm',
    'p', 'pr', 'r', 's', 't', 'v'];
  const nm4 = ['a', 'e', 'i', 'o', 'u', 'a', 'o', 'a', 'e', 'i', 'o', 'u', 'a',
    'o', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'a', 'e', 'i', 'o', 'u', 'a', 'o',
    'a', 'e', 'i', 'o', 'u', 'a', 'o', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'a',
    'e', 'i', 'o', 'u', 'a', 'o', 'a', 'e', 'i', 'o', 'u', 'a', 'o', 'ie',
    'y', 'ui', 'ou', 'ee', 'ei', 'ia'];
  const nm5 = ['b', 'bk', 'c', 'ch', 'd', 'dn', 'fk', 'g', 'h', 'hm', 'j', 'k',
    'l', 'lg', 'll', 'lm', 'm', 'n', 'nd', 'nk', 'nt', 'r', 'rb', 'rg', 'rk',
    'rl', 'rn', 'rp', 'rsh', 'rt', 's', 'sk', 'st', 'tr', 'tv', 'tz', 'v',
    'vc', 'vk', 'vr', 'vsk', 'w', 'wk', 'z', 'zl', 'b', 'c', 'd', 'g', 'h',
    'j', 'k', 'l', 'm', 'n', 'r', 's', 'v', 'z', 'b', 'c', 'd', 'g', 'h', 'j',
    'k', 'l', 'm', 'n', 'r', 's', 'v', 'z', 'b', 'c', 'd', 'g', 'h', 'j', 'k',
    'l', 'm', 'n', 'r', 's', 'v', 'z', 'b', 'c', 'd', 'g', 'h', 'j', 'k', 'l',
    'm', 'n', 'r', 's', 'v', 'z'];
  const nm6 = ['c', 'ch', 'cz', 'k', 'l', 'll', 'n', 'rz', 's', 'ts', 'tz', 'v',
    'w'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm3.length);
    rnd2 = Math.floor(Math.random() * nm4.length);
    rnd3 = Math.floor(Math.random() * nm5.length);
    rnd4 = Math.floor(Math.random() * nm4.length);
    rnd5 = Math.floor(Math.random() * nm6.length);
    if (i % 2 === 0) {
      lname = nm3[rnd] + nm4[rnd2] + nm5[rnd3] + nm4[rnd4] + nm6[rnd5];
    } else {
      rnd6 = Math.floor(Math.random() * nm5.length);
      rnd7 = Math.floor(Math.random() * nm4.length);
      lname = nm3[rnd] + nm4[rnd2] + nm5[rnd3] + nm4[rnd4] + nm5[rnd6] + nm4[rnd7] + nm6[rnd5];
    }
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      name = `${nm2[rnd]} ${lname}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      name = `${nm1[rnd]} ${lname}`;
    }
    return name;
  }
}
