export default function edoJapaneses() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['aki', 'ari', 'atsu', 'chika', 'fusa', 'haru', 'hide', 'hiko',
    'hira', 'hiro', 'hisa', 'ie', 'kage', 'kane', 'kata', 'katsu', 'kazu',
    'kiyo', 'kore', 'kuni', 'masa', 'michi', 'mitsu', 'mochi', 'mori', 'moro',
    'moto', 'mune', 'naga', 'naka', 'nao', 'nari', 'nobu', 'nori', 'sada',
    'sane', 'shige', 'sue', 'suke', 'tada', 'taka', 'take', 'tame', 'tane',
    'teru', 'toki', 'tomo', 'toshi', 'tsune', 'uchi', 'uji', 'yasu', 'yori',
    'yoshi', 'yuki'];
  const nm2 = ['Aguri', 'Ai', 'Aka', 'Akai', 'Aki', 'Akii', 'Ama', 'Ane', 'Asa',
    'Baba', 'Ben', 'Bin', 'Bo', 'Chiki', 'Chima', 'Chin', 'Chiyo', 'Cho',
    'Den', 'Fude', 'Fuji, Fudji', 'Fuku', 'Fume', 'Furi', 'Fusa', 'Fuso',
    'Futsu', 'Gen', 'Gin', 'Hama', 'Hana', 'Haru', 'Hatsu', 'Heya', 'Hiina',
    'Hiki', 'Hiko', 'Hime', 'Hin', 'Hinu', 'Hisa', 'Hitsu', 'Hiwa', 'Hoso',
    'Hotsu', 'Ichi', 'Iku', 'Ima', 'Ina', 'Ine', 'Ino', 'Inu', 'Iri', 'Isa',
    'Ise', 'Ishi', 'Iso', 'Ito', 'Iwa', 'Jo', 'Kachi', 'Kaku', 'Kama', 'Kame',
    'Kan', 'Kana', 'Kane', 'Kane', 'Karu', 'Kase', 'Katsu', 'Kawa', 'Kaya',
    'Kayo', 'Kesa', 'Kesai', 'Kichi', 'Kiku', 'Kin', 'Kina', 'Kinu', 'Kiri',
    'Kisa', 'Kitsu', 'Kiyo', 'Ko', 'Kogo', 'Koku', 'Koma', 'Kome', 'Kona',
    'Koro', 'Koya', 'Koyo', 'Kuchi', 'Kuma', 'Kume', 'Kuni', 'Kura', 'Kuri',
    'Kuro', 'Kusu', 'Kuu', 'Kuwa', 'Kuyo', 'Machi', 'Magi', 'Maki', 'Mako',
    'Man', 'Mane', 'Mare', 'Mari', 'Masa', 'Mashi', 'Mata', 'Mate', 'Matsu',
    'Mego', 'Mimi', 'Mina', 'Mine', 'Mino', 'Mitsu', 'Miya', 'Mochi', 'Moku',
    'Momo', 'Muma', 'Mume', 'Musu', 'Mutsu', 'Nabe', 'Nagu', 'Nai', 'Naka',
    'Nana', 'Natsu', 'Nei', 'Neko', 'Nene', 'Niga', 'Niku', 'Nino', 'Niwa',
    'Oma', 'Ona', 'Osa', 'Oshi', 'Ota', 'Oto', 'Rin', 'Riyo', 'Roku', 'Run',
    'Rusu', 'Sago', 'Sai', 'Saka', 'Saki', 'Sako', 'Saku', 'Sama', 'Same',
    'San', 'Sana', 'Sani', 'Saru', 'Satsu', 'Sawa', 'Saya', 'Sechi', 'Seki',
    'Sen', 'Senu', 'Shige', 'Shima', 'Shime', 'Shimo', 'Shina', 'Shino',
    'Shio', 'Sho', 'Shuu', 'Some', 'Sue', 'Sugi', 'Suka', 'Suke', 'Suki',
    'Suko', 'Suma', 'Sumi', 'Suna', 'Suo', 'Sute', 'Take', 'Tama', 'Tan',
    'Tane', 'Tatsu', 'Ten', 'Toku', 'Toma', 'Tome', 'Tone', 'Tora', 'Tori',
    'Totsu', 'Towa', 'Toyo', 'Tsubo', 'Tsuchi', 'Tsuji', 'Tsuka', 'Tsuma',
    'Tsuna', 'Tsune', 'Tsuru', 'Tsushi', 'Tsuta', 'Tsuya', 'Uba', 'Uma',
    'Ume', 'Uno', 'Ushi', 'Uta', 'Yama', 'Yasu', 'Yaya', 'Yen', 'Yome',
    'Yone', 'Yono', 'Yoshi', 'Yoso', 'Yote', 'Yuki', 'Yura', 'Yuri', 'Yuwa'];
  const nm3 = ['', '', '', '', '', '', '', '', '', '', '', '', '', 'ko', 'shi',
    'no', 'yo', 'me', 'mi'];
  const nm4 = ['Abe', 'Adachi', 'Akabashi', 'Akamatsu', 'Akechi', 'Akimoto',
    'Akita', 'Akiyama', 'Akizuki', 'Amago', 'Amakusa', 'Amano', 'Anayama',
    'Andou', 'Ando', 'Anenokoji', 'Aoki', 'Aoyama', 'Arai', 'Arima', 'Aso',
    'Asai', 'Asakura', 'Asano', 'Ashikaga', 'Ashina', 'Aso', 'Asukai',
    'Atagi', 'Aya', 'Ayanokouji', 'Azai', 'Boujou', 'Baba', 'Besshou', 'Bito',
    'Chousokabe', 'Chiba', 'Chikusa', 'Daidouji', 'Date', 'Doi', 'Endou',
    'Enomoto', 'Enya', 'Fuji', 'Fujii', 'Fujinami', 'Fujioji', 'Fujioka',
    'Fujita', 'Fujitani', 'Fujiwara', 'Fukui', 'Fukushima', 'Funabashi',
    'Furuta', 'Gou', 'Gamou', 'Gojou', 'Gosanke', 'Gosankyo', 'Gotou', 'Goto',
    'Houjou', 'Hojo', 'Hachisuka', 'Haga', 'Hagiwara', 'Hamuro', 'Hara',
    'Harada', 'Hasebe', 'Hasegawa', 'Hashiba', 'Hashimoto', 'Hatakeyama',
    'Hatano', 'Hayashi', 'Higashikuze', 'Higashisanjou', 'Higashizono',
    'Hijikata', 'Hiki', 'Hineno', 'Hino', 'Hiraga', 'Hirano', 'Hirata',
    'Hirohashi', 'Hisamatsu', 'Hitotsuyanagi', 'Hondou', 'Honda', 'Honjou',
    'Honma', 'Honomi', 'Hori', 'Horio', 'Hoshina', 'Hosokawa', 'Hotta',
    'Hozumi', 'Ichibashi', 'Ichijou', 'Ichijo', 'Ide', 'Ii', 'Ikeda',
    'Ikejiri', 'Ikoma', 'Imagawa', 'Imai', 'Ina', 'Inaba', 'Inagaki', 'Inoue',
    'Irie', 'Ise', 'Ishibashi', 'Ishidou', 'Ishida', 'Ishii', 'Ishikawa',
    'Ishimaki', 'Ishino', 'Ishiyama', 'Isshiki', 'Itou', 'Ito', 'Itagaki',
    'Itakura', 'Itami', 'Itsutsuji', 'Iwaki', 'Iwakura', 'Iwamura', 'Iwasaki',
    'Iwashita', 'Izumi', 'Jou', 'Jikouji', 'Jimyouin', 'Junjii', 'Kou',
    'Kouno', 'Kouriki', 'Kono', 'Kagae', 'Kagami', 'Kagawa', 'Kajiwara',
    'Kamei', 'Kamiizumi', 'Kanou', 'Kanamaru', 'Kanamori', 'Kaneko',
    'Karahashi', 'Karasumaru', 'Katou', 'Katakura', 'Katano', 'Kataoka',
    'Katsura', 'Kawabe', 'Kawada', 'Kawahire', 'Kawakami', 'Kawamura',
    'Kawguchi', 'Kikkawa', 'Kikuchi', 'Kimura', 'Kinoshita', 'Kira', 'Kiso',
    'Kitabatake', 'Kitagaki', 'Kitajo', 'Kitanokouji', 'Kiyooka', 'Kiyowara',
    'Kobayakawa', 'Kodama', 'Koga', 'Koide', 'Komatsu', 'Konishi', 'Konoe',
    'Kuchiki', 'Kudo', 'Kujou', 'Kujo', 'Kuki', 'Kumagaya', 'Kuroda',
    'Kuroki', 'Kushizu', 'Kusunoki', 'Kuzuyama', 'Kyougoku', 'Kyogoku',
    'Mouri', 'Mori', 'Maeda', 'Makino', 'Manabe', 'Matsuda', 'Matsudaira',
    'Matsui', 'Matsukura', 'Matsumae', 'Matsura', 'Matsushita', 'Matsuura',
    'Mibu', 'Mikumo', 'Minagawa', 'Minamoto', 'Miura', 'Miyabe', 'Miyake',
    'Miyoshi', 'Mizoguchi', 'Mizuno', 'Mizutani', 'Mogami', 'Momonoi', 'Mori',
    'Morikawa', 'Morioka', 'Munakata', 'Murakami', 'Murata', 'Mushanokouji',
    'Nabeshima', 'Nagai', 'Nagao', 'Nagasaki', 'Nagatani', 'Naitou',
    'Nakagawa', 'Nakajima', 'Nakamikado', 'Nakamura', 'Nakanoin', 'Nakatomi',
    'Nakayama', 'Nakazono', 'Nanba', 'Nanbu', 'Naruse', 'Nasu', 'Nawa',
    'Niiro', 'Nijou', 'Nijo', 'Nikaidou', 'Nikki', 'Nishiouji', 'Nishi',
    'Nishina', 'Nishio', 'Nishisanjou', 'Nishitouin', 'Nitta', 'Niwa',
    'Nomiya', 'Nomura', 'Ochi', 'Oda', 'Ogasawara', 'Ogawa', 'Ogura', 'Okabe',
    'Okazaki', 'Oku', 'Okuda', 'Okudaira', 'Oshinokouji', 'Otagi', 'Oyama',
    'Reizei', 'Rokkaku', 'Rokujou', 'Ryuuzouji', 'Sou', 'Souma', 'So', 'Soma',
    'Saga', 'Sagara', 'Saigou', 'Saionji', 'Saitou', 'Saito', 'Sakai',
    'Sakakibara', 'Sakuma', 'Sakurai', 'Sanada', 'Sanjou', 'Sanjo', 'Sano',
    'Sasaki', 'Satou', 'Satake', 'Satomi', 'Seikanji', 'Seki', 'Sen',
    'Sengoku', 'Shouni', 'Shiba', 'Shibata', 'Shibukawa', 'Shigenoi',
    'Shijou', 'Shimazu', 'Shimokoube', 'Shinjou', 'Shinmen', 'Soejima',
    'Sogo', 'Soga', 'Sonoda', 'Suda', 'Sue', 'Suganuma', 'Sugawara', 'Sugi',
    'Sugihara', 'Suwa', 'Suzuki', 'Toudou', 'Tachibana', 'Taguchi', 'Taira',
    'Takahashi', 'Takamatsu', 'Takanashi', 'Takano', 'Takaoka', 'Takatsuji',
    'Takatsukasa', 'Takayama', 'Takeda', 'Takenaka', 'Takeya', 'Takigawa',
    'Tamura', 'Tanaka', 'Tanegashima', 'Tani', 'Tanuma', 'Terazawa', 'Toda',
    'Togashi', 'Togawa', 'Toki', 'Tokudaiji', 'Tokugawa', 'Torii', 'Tozawa',
    'Tsuchimikado', 'Tsugaru', 'Tsukushi', 'Tsutsui', 'Uesugi', 'Ujie',
    'Ukita', 'Umewaka', 'Urakami', 'Usami', 'Utsunomiya', 'Wada', 'Wakiya',
    'Wakizaka', 'Watanabe', 'Yuuki', 'Yuki', 'Yagyuu', 'Yagyu', 'Yamada',
    'Yamagata', 'Yamaguchi', 'Yamamoto', 'Yamana', 'Yamane', 'Yamanoi',
    'Yamanouchi', 'Yamaoka', 'Yamashina', 'Yanagizawa', 'Yashiro', 'Yonezu',
    'Yoshida', 'Yoshii']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm3.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      names = `${nm4[rnd3]} ${nm2[rnd]}${nm3[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm1.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      while (rnd === rnd2) {
        rnd2 = Math.floor(Math.random() * nm1.length);
      }
      names = `${nm4[rnd3]} ${nm1[rnd]}${nm1[rnd2]}`;
    }
    return names;
  }
}
