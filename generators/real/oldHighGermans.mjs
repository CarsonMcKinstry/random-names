export default function oldHighGermans() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Adalbero', 'Adelbrand', 'Adelgis', 'Adelhard', 'Adelhelm',
    'Adolar', 'Adolf', 'Aimar', 'Alberich', 'Albert', 'Aldo', 'Alida',
    'Alram', 'Altmann', 'Alwin', 'Anselm', 'Archibald', 'Aristeo', 'Arnfried',
    'Arnold', 'Arnulf', 'Arwin', 'Aschwin', 'Askan', 'Astolfo', 'Baldwin',
    'Bernard', 'Bernfried', 'Bernger', 'Bernward', 'Bert', 'Berthold',
    'Bertrad', 'Bertram', 'Bertrand', 'Bodo', 'Bodobert', 'Bruno', 'Burkhard',
    'Clodomiro', 'Conrad', 'Curt', 'Dagobert', 'Dankmar', 'Dankrad',
    'Degenhard', 'Deion', 'Detlev', 'Dieter', 'Dietgard', 'Dietger',
    'Diethard', 'Dietmar', 'Dietrich', 'Ebbo', 'Eckbert', 'Eckhard', 'Egmont',
    'Egon', 'Eike', 'Elmer', 'Elric', 'Emmerich', 'Engelbert', 'Erfried',
    'Erhard', 'Ernest', 'Erwin', 'Everard', 'Ewald', 'Falko', 'Farald',
    'Filibert', 'Folke', 'Frank', 'Frederick', 'Friedbert', 'Friedger',
    'Friedhelm', 'Friedwart', 'Friso', 'G�nther', 'Gangolf', 'Gaston',
    'Gebhard', 'Gerald', 'Gerard', 'Gerfried', 'Gerlach', 'Gernot', 'Gerolf',
    'Gerwig', 'Gerwin', 'Gilbert', 'Giselher', 'Gismondo', 'Godfrey',
    'Gonzalo', 'Goswin', 'Gotthard', 'Gottlieb', 'Gottschalk', 'Grimwald',
    'Guerino', 'Guido', 'Gundolf', 'Guntbert', 'Gunthard', 'Guntram',
    'Hadebrand', 'Hademar', 'Hagen', 'Harald', 'Hartbert', 'Hartmann',
    'Hartmut', 'Hartwig', 'Hartwin', 'Hasso', 'Hatto', 'Heimo', 'Heimrad',
    'Helferich', 'Helmer', 'Helmut', 'Henry', 'Herbert', 'Hermann', 'Herwig',
    'Hildebrand', 'Hildemar', 'Hilger', 'Horst', 'Hubert', 'Hugo', 'Humbert',
    'Hunfried', 'Ingbert', 'Ingmar', 'Ingo', 'Ingolf', 'Isebrand', 'Isenbert',
    'Ivo', 'Kai', 'Karl', 'Kl�ber', 'Korbinian', 'Kraft', 'Kunibald',
    'Kunibert', 'Kuno', 'Lambert', 'Lando', 'Landolf', 'Landrich', 'Lanfrank',
    'Laurin', 'Leonhard', 'Leopold', 'Liebhard', 'Liebwin', 'Lothar', 'Lubin',
    'Ludger', 'Ludolf', 'Ludwig', 'Luitwin', 'Luther', 'Major', 'Malte',
    'Manegold', 'Manfred', 'Markolf', 'Markward', 'Meinhard', 'Meinolf',
    'Meinrad', 'Mombert', 'Neidhard', 'Norbert', 'Norman', 'Notker', 'Oddone',
    'Oliver', 'Ortwin', 'Oswald', 'Ottfried', 'Ottmar', 'Otto', 'Ottokar',
    'Otwin', 'Raban', 'Ralf', 'Randolf', 'Raymond', 'Rayner', 'Reimar',
    'Reingard', 'Reinhard', 'Reinhold', 'Rembert', 'Richard', 'Richmut',
    'Rigoberto', 'Roald', 'Robert', 'Rocco', 'Roderick', 'Roger', 'Roland',
    'Romarich', 'Romuald', 'Rudolf', 'Sachso', 'Siegbald', 'Siegbert',
    'Sieger', 'Siegfried', 'Sieghard', 'Siegmar', 'Siegmund', 'Siegward',
    'Theobald', 'Thijmen', 'Thilo', 'Till', 'Ubaldo', 'Ulrich', 'Volkbert',
    'Volker', 'Volkhard', 'Volkmar', 'Waldemar', 'Walfried', 'Walo', 'Walter',
    'Waltram', 'Wedekind', 'Wendelin', 'Werner', 'Wieland', 'Wigand',
    'Wigbert', 'Wighard', 'Wigmar', 'Wilburg', 'Wilfried', 'Wilhard',
    'William', 'Willibald', 'Willibert', 'Wilmar', 'Winand', 'Winfried',
    'Witold', 'Wolf', 'Wolfgang', 'Wolfhard', 'Wolfram', 'Wunibald', 'Zelindo',
  ];
  const nm2 = ['Abelarda', 'Adalgisa', 'Adela', 'Adelgunde', 'Adelheid',
    'Adelhelma', 'Adelinde', 'Adolfa', 'Alberta', 'Alda', 'Aldona', 'Alido',
    'Almut', 'Alrun', 'Alwine', 'Amalberga', 'Anselma', 'Arda', 'Aristea',
    'Arnhild', 'Arnolda', 'Asgard', 'Aubrey', 'Belinda', 'Bernharde', 'Berta',
    'Berthild', 'Bertille', 'Bertrada', 'Bliktrud', 'Bruna', 'Brunhilde',
    'Burghild', 'Burglinde', 'Carla', 'Charlotte', 'Cressida', 'Diemut',
    'Diethild', 'Dietlinde', 'Diomira', 'Ebba', 'Edelgard', 'Edeltraud',
    'Ehrentraud', 'Eike', 'Elfrun', 'Elma', 'Eloise', 'Elva', 'Emery',
    'Engel', 'Engla', 'Ernesta', 'Everarda', 'Filiberta', 'Franka', 'Frauke',
    'Frederika', 'Friedegund', 'Geraldine', 'Gerburg', 'Gerharde', 'Gerhild',
    'Gerlinde', 'Gertrud', 'Gerwine', 'Gilberta', 'Gisela', 'Gotlinde',
    'Griselda', 'Gudrun', 'Guerina', 'Gunda', 'Gundelinde', 'Gunthilde',
    'Hedwig', 'Heilburg', 'Heilgard', 'Heilwig', 'Helmgard', 'Helmtraud',
    'Hemma', 'Henrietta', 'Herlinde', 'Hermine', 'Herta', 'Hildburg',
    'Hildegard', 'Hildegunde', 'Hildrun', 'Hiltrud', 'Huberta', 'Huguette',
    'Hulda', 'Ida', 'Inge', 'Ingfried', 'Irma', 'Irmgard', 'Irmhild',
    'Irmlinde', 'Irmtraud', 'Ishilde', 'Kai', 'Kaja', 'Kirsa', 'Klothilde',
    'Konrada', 'Kriemhild', 'Kunigunde', 'Lamberta', 'Landriche', 'Leonarda',
    'Leopoldine', 'Liebgard', 'Liebtrud', 'Linda', 'Linde', 'Lioba', 'Livina',
    'Loreley', 'Louise', 'Ludgera', 'Ludwina', 'Luitgard', 'Margund',
    'Mathilde', 'Merlind', 'Miltrud', 'Norgard', 'Nortrud', 'Notburga',
    'Ortraud', 'Ortrun', 'Ostara', 'Ottilia', 'Radegundis', 'Raina', 'Ramona',
    'Randi', 'Reinhild', 'Reinhilde', 'Riccarda', 'Richmute', 'Roberta',
    'Rochelle', 'Rodina', 'Rolanda', 'Romilda', 'Rosalinde', 'Rosamunde',
    'Roswitha', 'Rotraud', 'Runhild', 'Saskia', 'Schwanhilde', 'Sieghilde',
    'Sieglinde', 'Sigune', 'Sunna', 'Sunnhild', 'Thusnelda', 'Ubalda',
    'Ulrike', 'Ute', 'Veerle', 'Walpurga', 'Waltraud', 'Wanda', 'Wendelgard',
    'Wendelina', 'Wigberta', 'Wigburg', 'Wilfriede', 'Wilhelma', 'Wiltrud',
    'Yvonne']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
