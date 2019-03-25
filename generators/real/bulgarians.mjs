export default function bulgarians() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ivan', 'Dimitar', 'Miro', 'Angel', 'Deyan', 'Plamen', 'Ivailo',
    'Iliya', 'Ilko', 'Konstantin', 'Kostadin', 'Martin', 'Nikolai',
    'Radoslav', 'Stoyan', 'Georgi', 'Krum', 'Bogdan', 'Petar', 'Blagoi',
    'Atanas', 'Todor', 'Blagun', 'Bogdan', 'Bogomil', 'Bojidar', 'Boris',
    'Borislav', 'Boyko', 'Branimir', 'Desislav', 'Dragan', 'Dragomir',
    'Grozdan', 'Krasimir', 'Lyuben', 'Lyubomir', 'Milan', 'Milen', 'Miroslav',
    'Mladen', 'Momchil', 'Nayden', 'Nedelcho', 'Ognian', 'Ognyan', 'Petar',
    'Plamen', 'Radko', 'Radomir', 'Radoslav', 'Rayko', 'Stefan', 'Spas',
    'Stanimir', 'Stanislav', 'Stanko', 'Stoyan', 'Tihomir', 'Tsvetan',
    'Valko', 'Ventseslav', 'Veselin', 'Vladimir', 'Vladislav', 'Yasen',
    'Yavor', 'Zdravko', 'Zhelyazko', 'Zhivko', 'Zlatan', 'Zlatko',
    'Aleksander', 'Anghel', 'Assen', 'Andon', 'Andrey', 'Anton', 'Apostol',
    'Atanas', 'Bogdan', 'Bogomil', 'Boiko', 'Borislav', 'Boris', 'Bozhidar',
    'Damyan', 'Danail', 'Daniel', 'Desislav', 'Demitar', 'Dragomir', 'Dyakon',
    'Emil', 'Evgeni', 'Filip', 'Gavril', 'Georgi', 'Grigori', 'Gregor',
    'Hristo', 'Ilian', 'Ivailo', 'Ivo', 'Iskren', 'Kaloyan', 'Kiril',
    'Krasimir', 'Krastyo', 'Kamen', 'Lubomir', 'Ludmil', 'Lyoben', 'Lyobomir',
    'Lyudmil', 'Marko', 'Miroslav', 'Momchil', 'Mihael', 'Mitko', 'Mladen',
    'Nikola', 'Nikolai', 'Ognian', 'Penko', 'Petar', 'Pavel', 'Plamen',
    'Radko', 'Radomir', 'Radko', 'Samuil', 'Spas', 'Stanimir', 'Stanislav',
    'Stefan', 'Sasho', 'Stoyan', 'Teodor', 'Todor', 'Vasil', 'Ventsislav',
    'Viktor', 'Vladimir', 'Yanko', 'Yoan', 'Yordan', 'Zhivko', 'Zlatko',
    'Zdravko', 'Zlaten'];
  const nm2 = ['Aleksandrov', 'Anghelov', 'Assenov', 'Andonov', 'Andreev',
    'Antonov', 'Apostolov', 'Atanasov', 'Bogdanov', 'Bogomilov', 'Boikov',
    'Borislavov', 'Borisov', 'Bozhidarov', 'Damyanov', 'Danailov', 'Danielov',
    'Desislavov', 'Demitrov', 'Dragomirov', 'Dyakonov', 'Emilov', 'Evgeniev',
    'Filipov', 'Gavrilov', 'Georgiev', 'Hristov', 'Ilianov', 'Ivailov',
    'Ivov', 'Iskrenov', 'Kaloyanov', 'Kirilov', 'Krasimirov', 'Kamenov',
    'Lubomirov', 'Ludmilov', 'Lyobenov', 'Lyobomirov', 'Lyudmilov', 'Markov',
    'Miroslavov', 'Momchilov', 'Mihaelov', 'Mitkov', 'Mladenov', 'Nikolaiev',
    'Nikolov', 'Ognianov', 'Penkov', 'Petrov', 'Pavelov', 'Plamenov',
    'Radkov', 'Radomirov', 'Radkov', 'Samuilov', 'Spasov', 'Stanimirov',
    'Stanislavov', 'Stefanov', 'Sashov', 'Stoyanov', 'Teodorov', 'Todorov',
    'Vasilov', 'Vladimirov', 'Yankov', 'Yoanov', 'Yordanov', 'Zhivkov',
    'Zlatkov', 'Zdravkov', 'Zlaten'];
  const nm3 = ['Pironev', 'Zhivkov', 'Ivanov', 'Vitanov', 'Adamov', 'Hadjiev',
    'Manolev', 'Dimitrov', 'Zaikov', 'Borisov', 'Boichev', 'Cherganski',
    'Bliznakov', 'Manev', 'Manevski', 'Balkanski', 'Tsvetanov', 'Bunev',
    'Deliivanov', 'Karapetrov', 'Kostov', 'Petrova', 'Hadjiivanov',
    'Tsvetkov', 'Tinchev', 'Adamov', 'Sotirov', 'Yanev', 'Glavchev', 'Ilev',
    'Nakov', 'Savov', 'Pramatarov', 'Kochanov', 'Spasov', 'Alexov',
    'Alexandrov', 'Todorov', 'Pingov', 'Atanasov', 'Avramov', 'Antonov',
    'Bachev', 'Botev', 'Bakalov', 'Blagoev', 'Bachev', 'Borisov', 'Bukhalov',
    'Cristov', 'Dachev', 'Dimitrov', 'Dobrev', 'Dinev', 'Filipov', 'Ganev',
    'Georgiev', 'Gavrilov', 'Hristov', 'Ivankov', 'Ivanov', 'Iliev',
    'Karavelov', 'Kirilov', 'Kishishev', 'Kostov', 'Kynev', 'Lukanov',
    'Mihailov', 'Mladenov', 'Nankov', 'Nikolov', 'Petkov', 'Petrov', 'Popov',
    'Paskalev', 'Penchev', 'Romanov', 'Rysinov', 'Radulov', 'Rusev', 'Stoev',
    'Strashilov', 'Svetkov', 'Todorov', 'Tonchev', 'Tsankov', 'Tanev',
    'Valchev', 'Venev', 'Vranchev', 'Valerieva', 'Valov', 'Vanko', 'Varbanov',
    'Vasev', 'Vasilev', 'Velichkov', 'Velikov', 'Yankov', 'Zhelev',
    'Zhelyaskov'];
  const nm4 = ['Elena', 'Elis', 'Katerina', 'Ivana', 'Milena', 'Tsvetelina',
    'Tsvetina', 'Tsvetana', 'Alexandra', 'Hristina', 'Kristina', 'Borislava',
    'Magdalena', 'Tanya', 'Lilyana', 'Lilly', 'Ana-Maria', 'Valya', 'Vanya',
    'Aneliya', 'Bilyana', 'Bisera', 'Blagorodna', 'Blaguna', 'Bonislava',
    'Bogdana', 'Borislava', 'Boyana', 'Boyka', 'Bozhidara', 'Branimira',
    'Darina', 'Desislava', 'Diana', 'Gergana', 'Grozda', 'Grozdana', 'Kalina',
    'Krasimira', 'Lyudmila', 'Lyubov', 'Margarita', 'Mila', 'Milena', 'Mira',
    'Nadeja', 'Nadezhda', 'Nedelya', 'Nevena', 'Ognyana', 'Rada', 'Radina',
    'Radka', 'Radoslava', 'Rayna', 'Rayka', 'Rossitza', 'Snezhana',
    'Stanislava', 'Stanka', 'Stoyanka', 'Svetlana', 'Tsveta', 'Tsvetanka',
    'Vladimira', 'Vyara', 'Yana', 'Zhivka', 'Zora', 'Albena', 'Ana', 'Anelia',
    'Anka', 'Antonia', 'Biljana', 'Bilyana', 'Bisera', 'Bogdana', 'Bogomila',
    'Borislava', 'Boyana', 'Bozhidara', 'Branimira', 'Desislava', 'Diana',
    'Dimitra', 'Dimitrinka', 'Donka', 'Elena', 'Gabriela', 'Galina',
    'Gergana', 'Grozdana', 'Hristina', 'Hristiyana', 'Iliyana', 'Iskra',
    'Iva', 'Ivana', 'Kalina', 'Katerina', 'Krasimira', 'Lala', 'Lilyana',
    'Ljudmila', 'Luchezara', 'Lyubina', 'Lyubymira', 'Magdalena', 'Margarita',
    'Maria', 'Marina', 'Mihaela', 'Mila', 'Milka', 'Miroslava', 'Nadezhda',
    'Nevena', 'Nikolina', 'Pavlina', 'Penka', 'Rada', 'Radka', 'Radoslava',
    'Raina', 'Rositsa', 'Simona', 'Snezha', 'Snezhana', 'Sofia', 'Stanimira',
    'Stanislava', 'Stoyana', 'Svetla', 'Svetlana', 'Tanya', 'Teodora',
    'Todora', 'Tsvetanka', 'Vasilka', 'Victoria', 'Violeta', 'Vladimira',
    'Yana', 'Yoana', 'Yordanka', 'Yovka', 'Yuliana', 'Zhivka', 'Zora',
    'Zornitsa'];
  const nm5 = ['Aleksandrova', 'Anghelova', 'Assenova', 'Andonova', 'Andreyeva',
    'Antonova', 'Apostolova', 'Atanasova', 'Bogdanova', 'Bogomilova',
    'Boikova', 'Borislavova', 'Borisova', 'Bozhidarova', 'Damyanova',
    'Danailova', 'Danielova', 'Desislavova', 'Demitrova', 'Dragomirova',
    'Emilova', 'Evgenieva', 'Filipova', 'Gavrilova', 'Georgieva', 'Hristova',
    'Ilianova', 'Ivailova', 'Ivova', 'Iskrenova', 'Kaloyanova', 'Kirilova',
    'Krasimirova', 'Krasteva', 'Kamennova', 'Lubomirova', 'Ludmilova',
    'Lyobenova', 'Lyobomirova', 'Lyudmilova', 'Markova', 'Miroslavova',
    'Momchilova', 'Mihaelova', 'Mladenova', 'Nikolova', 'Nikolaieva',
    'Ognianova', 'Penkova', 'Petrova', 'Pavelova', 'Plamenova', 'Radkova',
    'Radomirova', 'Radkova', 'Samuilova', 'Spasova', 'Stanimirova',
    'Stanislavova', 'Stefanova', 'Sashova', 'Stoyanova', 'Teodorova',
    'Todorova', 'Vasilova', 'Ventsislavova', 'Vladimirova', 'Yankova',
    'Yoanova', 'Yordanova', 'Zhivkova', 'Zlatkova', 'Zdravkova', 'Zlatenova'];
  const nm6 = ['Pironeva', 'Zhivkova', 'Ivanova', 'Vitanova', 'Adamova',
    'Hadjieva', 'Manoleva', 'Dimitrova', 'Zaikova', 'Borisova', 'Boicheva',
    'Cherganska', 'Bliznakova', 'Maneva', 'Manevska', 'Balkanska',
    'Tsvetanova', 'Buneva', 'Deliivanova', 'Karapetrova', 'Kostova',
    'Petrovaa', 'Hadjiivanova', 'Tsvetkova', 'Tincheva', 'Adamova',
    'Sotirova', 'Yaneva', 'Glavcheva', 'Ileva', 'Nakova', 'Savova',
    'Pramatarova', 'Kochanova', 'Spasova', 'Alexova', 'Alexandrova',
    'Todorova', 'Pingova', 'Atanasova', 'Avramova', 'Antonova', 'Bacheva',
    'Boteva', 'Bakalova', 'Blagoeva', 'Bacheva', 'Borisova', 'Bukhalova',
    'Cristova', 'Dacheva', 'Dimitrova', 'Dobreva', 'Dineva', 'Filipova',
    'Ganeva', 'Georgieva', 'Gavrilova', 'Hristova', 'Ivankova', 'Ivanova',
    'Ilieva', 'Karavelova', 'Kirilova', 'Kishisheva', 'Kostova', 'Kyneva',
    'Lukanova', 'Mihailova', 'Mladenova', 'Nankova', 'Nikolova', 'Petkova',
    'Petrova', 'Popova', 'Paskaleva', 'Pencheva', 'Romanova', 'Rysinova',
    'Radulova', 'Ruseva', 'Stoeva', 'Strashilova', 'Svetkova', 'Todorova',
    'Toncheva', 'Tsankova', 'Taneva', 'Valcheva', 'Veneva', 'Vrancheva',
    'Valerieva', 'Valova', 'Vankova', 'Varbanova', 'Vaseva', 'Vasileva',
    'Velichkova', 'Velikova', 'Yankova', 'Zheleva', 'Zhelyaskova'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm4.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      rnd3 = Math.floor(Math.random() * nm6.length);
      names = `${nm4[rnd]} ${nm5[rnd2]} ${nm6[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      names = `${nm1[rnd]} ${nm2[rnd2]} ${nm3[rnd3]}`;
    }
    return names;
  }
}
