export default function kurdishs() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Çêker', 'Çêner', 'Çîmen', 'Çûçê', 'Çakîn', 'Çavşîn', 'Çavgeş',
    'Çavreş', 'Çawgeş', 'Çawrê', 'Çekan', 'Çekdar', 'Çeko', 'Çelek', 'Çeleng',
    'Çemê', 'Çengzêr', 'Çerîn', 'Çeto', 'Çildar', 'Çilo', 'Çinûr', 'Çinar',
    'Çirîsk', 'Çirûsk', 'Çira', 'Çistê', 'Çiya', 'Çiyako', 'Çoman', 'Çorîn',
    'Şêr', 'Şêrdil', 'Şêrefxan', 'Şêrko', 'Şêro', 'Şêrvan', 'Şêrwan',
    'Şêrzad', 'Şêrzat', 'Şînwar', 'Şûrbaz', 'Şabal', 'Şadî', 'Şadman',
    'Şagird', 'Şahîn', 'Şaho', 'Şalîl', 'Şalûl', 'Şano', 'Şaxan', 'Şaxewan',
    'Şayan', 'Şeda', 'Şehîd', 'Şehbaz', 'Şemal', 'Şemdîn', 'Şemo', 'Şemzîn',
    'Şengal', 'Şenger', 'Şergir', 'Şervan', 'Şerwan', 'Şevder', 'Şikak',
    'Şirwan', 'Şivan', 'Şiwan', 'Şiyar', 'Şoriş', 'Aşûr', 'Aşid', 'Aşina',
    'Aştî', 'Aştîxwaz', 'Aşti', 'Aşvan', 'Afrîn', 'Afran', 'Agah', 'Agirî',
    'Agir', 'Agrîn', 'Ajar', 'Ajda', 'Ajeng', 'Akam', 'Akar', 'Ako', 'Akrê',
    'Alîkar', 'Ala', 'Alan', 'Alaz', 'Alwan', 'Amêdî', 'Amûd', 'Amanc',
    'Amed', 'Amez', 'Amojgar', 'Amraz', 'Arêz', 'Arî', 'Arûn', 'Arûng',
    'Aram', 'Aran', 'Ararat', 'Aras', 'Araz', 'Ardî', 'Ardan', 'Ardelan',
    'Areen', 'Arhat', 'Ariyan', 'Arjîn', 'Armanc', 'Artîn', 'Artûş', 'Aryan',
    'Asan', 'Asin', 'Aso', 'Asos', 'Astû', 'Asus', 'Avî', 'Avşîn', 'Ava',
    'Avan', 'Avdî', 'Avdar', 'Avdel', 'Avzêl', 'Avzer', 'Awar', 'Aware',
    'Awat', 'Awdar', 'Awdel', 'Awdil', 'Awedan', 'Awir', 'Awreng', 'Axa',
    'Azî', 'Aza', 'Azad', 'Azwer', 'Bêbaş', 'Bêbak', 'Bêcan', 'Bêdad',
    'Bêdar', 'Bêdeng', 'Bêhawta', 'Bêjen', 'Bêjewan', 'Bêkes', 'Bêlan',
    'Bêmal', 'Bênav', 'Bênaw', 'Bênaz', 'Bênewa', 'Bêrî', 'Bêrîcan', 'Bêrîn',
    'Bêrîvan', 'Bêrtî', 'Bêsaran', 'Bêwar', 'Bêxal', 'Bêzar', 'Bîşeng',
    'Bînahî', 'Bîrdar', 'Bîrhat', 'Bûban', 'Bûken', 'Baçîn', 'Başin', 'Babîr',
    'Babûr', 'Badîn', 'Bad', 'Badil', 'Bado', 'Bager', 'Bagerd', 'Bagir',
    'Bagok', 'Bagro', 'Baha', 'Bahar', 'Baho', 'Bahoz', 'Bajen', 'Bakûr',
    'Balî', 'Balîxan', 'Bala', 'Balaban', 'Balber', 'Baldar', 'Balnexşîn',
    'Banê', 'Banî', 'Bangîn', 'Bapîr', 'Barî', 'Barîn', 'Baram', 'Baran',
    'Baraw', 'Bareş', 'Bargiran', 'Barnas', 'Barsaz', 'Barzan', 'Basam',
    'Bawan', 'Bawer', 'Bawerd', 'Baxewan', 'Bayiz', 'Bazê', 'Bazî', 'Bazît',
    'Baz', 'Bazan', 'Baziyan', 'Bazo', 'Bazyan', 'Beşat', 'Bedlîs', 'Befrîn',
    'Befraw', 'Begîxan', 'Behêz', 'Behî', 'Behat', 'Behdîn', 'Behmen',
    'Behoş', 'Behram', 'Behremend', 'Behwan', 'Bejndar', 'Bejno', 'Belên',
    'Belîcan', 'Belalûk', 'Belengaz', 'Belqis', 'Bemo', 'Benav', 'Benaw',
    'Bendî', 'Bendewar', 'Bendo', 'Bengîn', 'Beng', 'Berêz', 'Berbest',
    'Berbijîn', 'Berdar', 'Berdil', 'Berevan', 'Berfan', 'Berhem', 'Berhev',
    'Berhevdar', 'Berkar', 'Berken', 'Bernas', 'Berpa', 'Berpal', 'Bersîn',
    'Berwan', 'Berwar', 'Berxo', 'Berxwedan', 'Berz', 'Berzan', 'Berzenc',
    'Berzend', 'Berzo', 'Besê', 'Besam', 'Bestî', 'Bestin', 'Betîn', 'Bexşîn',
    'Bexşan', 'Bextewar', 'Bextiyar', 'Beyanî', 'Beyan', 'Beyar', 'Beybîn',
    'Beybûn', 'Bezîn', 'Bezav', 'Bişkoj', 'Bişkurîn', 'Bihar', 'Bijîn',
    'Bijûn', 'Bijar', 'Bijwên', 'Bilêse', 'Bilind', 'Binar', 'Binav',
    'Binevş', 'Binyat', 'Birîndar', 'Birûsk', 'Biradost', 'Birwa', 'Biryar',
    'Birzo', 'Biyan', 'Bizan', 'Blîmet', 'Bohar', 'Boran', 'Botan', 'Bozo',
    'Cîgerxwîn', 'Cîhan', 'Cîran', 'Cûdî', 'Canê', 'Canan', 'Cango', 'Cano',
    'Cawîdan', 'Ceger', 'Cejnî', 'Cembelî', 'Cengî', 'Cengo', 'Cerê', 'Cewê',
    'Cewher', 'Cigerxîn', 'Ciwanê', 'Ciwanî', 'Ciwan', 'Ciwangul', 'Ciwannaz',
    'Ciwanrû', 'Coban', 'Comerd', 'Cotkar', 'Cotyar', 'Dêber', 'Dêrsim',
    'Dîdem', 'Dîlan', 'Dîlman', 'Dîmen', 'Dîristan', 'Dîroka', 'Daban',
    'Dadyar', 'Dager', 'Dalaho', 'Damaw', 'Dana', 'Daner', 'Danya', 'Danyar',
    'Darçîn', 'Darîn', 'Dara', 'Daran', 'Daristan', 'Dastan', 'Dejin',
    'Delal', 'Dengîn', 'Dengdar', 'Derav', 'Derbest', 'Dersim', 'Derwêş',
    'Derzîn', 'Desmal', 'Devken', 'Deza', 'Dijle', 'Dijwar', 'Dilê', 'Dilêr',
    'Dilîn', 'Dilşad', 'Dilaram', 'Dilare', 'Dilawaz', 'Dilawer', 'Dilber',
    'Dilbirîn', 'Dilcan', 'Dilciwan', 'Dildar', 'Dilgeş', 'Dilger', 'Dilgerm',
    'Dilistan', 'Diljen', 'Dilkanî', 'Dilnaz', 'Dilo', 'Dilodîn', 'Dilok',
    'Dilovan', 'Dilron', 'Dilsoz', 'Dilvîn', 'Dilxoş', 'Dilxwaz', 'Dilxweş',
    'Dindik', 'Dirê', 'Dirsîm', 'Dixaz', 'Diyadîn', 'Diyako', 'Diyarî',
    'Diyar', 'Doman', 'Dukan', 'Dylan', 'Efo', 'Egîd', 'Egît', 'Ejder',
    'Elend', 'Elind', 'Elwand', 'Erdehan', 'Erdelan', 'Erdem', 'Erdewan',
    'Erez', 'Esmê', 'Esma', 'Esmerxan', 'Espar', 'Estêre', 'Evîn', 'Evîndar',
    'Evraz', 'Ewîndar', 'Ewrîn', 'Exter', 'Eyşan', 'Eyaz', 'Ezcan', 'Fîdan',
    'Felek', 'Fener', 'Feraşîn', 'Ferhad', 'Ferhat', 'Ferman', 'Fero',
    'Filît', 'Firya', 'Gêlas', 'Gûzê', 'Gare', 'Gazî', 'Gazîn', 'Geşê',
    'Gelî', 'Gelavêj', 'Gelawêj', 'Gerdîn', 'Gerdûn', 'Gerden', 'Gerdengaz',
    'Gewher', 'Gewrê', 'Gezing', 'Gherîb', 'Girav', 'Glare', 'Goran',
    'Govend', 'Gozê', 'Gozel', 'Grîvan', 'Guhtem', 'Gulçîn', 'Gulê', 'Gulî',
    'Gulîk', 'Gulîn', 'Gulîstan', 'Gulîxan', 'Gulîzêr', 'Gulşênî', 'Gulşen',
    'Gul', 'Gulabax', 'Gulale', 'Gulan', 'Gulasor', 'Gulav', 'Gulazêr',
    'Gulbehar', 'Gulbihar', 'Gulcan', 'Gulda', 'Guldan', 'Gulnîşan', 'Gulnam',
    'Gulnar', 'Gulnaz', 'Gulperî', 'Gulroj', 'Gulsînem', 'Hêdî', 'Hêja',
    'Hêlîn', 'Hêlan', 'Hêmen', 'Hêmin', 'Hêra', 'Hêriş', 'Hêro', 'Hêva',
    'Hîran', 'Hîvî', 'Hîvîdar', 'Hîwa', 'Hanîs', 'Hana', 'Harun', 'Hatîcan',
    'Hatin', 'Havîn', 'Hawar', 'Hawrê', 'Hawrama', 'Hawraz', 'Haydar', 'Hazo',
    'Hejîn', 'Hejar', 'Hekar', 'Helal', 'Helat', 'Helbîn', 'Helez', 'Helgurd',
    'Heliz', 'Helkewt', 'Helmet', 'Helo', 'Helvîn', 'Hemayîl', 'Hemreş',
    'Henar', 'Hendrên', 'Herdî', 'Herdem', 'Hermê', 'Hetav', 'Hetaw', 'Hevîn',
    'Heval', 'Hevdem', 'Hevgin', 'Hevjîn', 'Hevovê', 'Hevrê', 'Hevta',
    'Hewîn', 'Hewal', 'Hewar', 'Hewaxan', 'Hewdem', 'Hewrê', 'Hewram',
    'Hewraz', 'Hewreman', 'Heycan', 'Heynar', 'Hezar', 'Hezo', 'Hişyar',
    'Hilkar', 'Hinar', 'Hindirîn', 'Hoşeng', 'Hogir', 'Hojîn', 'Homer',
    'Hoybûn', 'Hozan', 'Hugir', 'Huner', 'Hunermend', 'Iman', 'Jêhat',
    'Jîlemo', 'Jîlwan', 'Jîman', 'Jînê', 'Jînda', 'Jîndar', 'Jîno', 'Jîrê',
    'Jîr', 'Jîvîn', 'Jîwan', 'Jîwar', 'Jarê', 'Jawero', 'Jiwan', 'Jiyan',
    'Jiyar', 'Jwan', 'Kîka', 'Kîstan', 'Kaban', 'Kahîn', 'Kajîn', 'Kajaw',
    'Kamîran', 'Kanîk', 'Kani', 'Kardo', 'Kardox', 'Kardux', 'Karmend',
    'Karox', 'Karsaz', 'Karwan', 'Karza', 'Karzan', 'Kawê', 'Kawa', 'Kawar',
    'Kawe', 'Kazêwe', 'Kejê', 'Kejal', 'Kejo', 'Kekan', 'Keko', 'Kendal',
    'Keser', 'Kesra', 'Kevî', 'Kevîr', 'Kevok', 'Kewser', 'Keya', 'Keyo',
    'Kezêban', 'Kezîzer', 'Kinê', 'Kinêr', 'Kinar', 'Kirîstan', 'Koçber',
    'Koçer', 'Koban', 'Komas', 'Koser', 'Kosret', 'Koyo', 'Kulîlk', 'Kumar',
    'Kurdê', 'Kurdu', 'Kuvan', 'Kvrîn', 'Lêzan', 'Laçîn', 'Lajin', 'Las',
    'Lawçak', 'Lawîn', 'Leşker', 'Lesar', 'Lewend', 'Lezgîn', 'Lolan',
    'Loran', 'Mêhvan', 'Mêrxas', 'Mîlan', 'Mîr', 'Mîran', 'Mîrhem', 'Mîrko',
    'Mîro', 'Mîrxan', 'Mîrza', 'Mîzan', 'Mûnzir', 'Mako', 'Malat', 'Malmal',
    'Mardîn', 'Mazîn', 'Mem', 'Memo', 'Memu', 'Mendo', 'Merîwan', 'Merd',
    'Merdan', 'Merdem', 'Merdo', 'Merdox', 'Mergewer', 'Mertal', 'Merwan',
    'Metîn', 'Meywan', 'Mezdar', 'Mezin', 'Milet', 'Miraz', 'Mirzan',
    'Mizgîn', 'Mukrî', 'Nêçîrvan', 'Nêçîrwan', 'Nîbar', 'Nîhad', 'Nîwar',
    'Nîyat', 'Nîyaz', 'Nûşen', 'Nûjen', 'Nûzad', 'Nalî', 'Nalîn', 'Namo',
    'Narî', 'Nasîko', 'Naso', 'Nasr', 'Nasraw', 'Navîn', 'Navda', 'Navdar',
    'Navdest', 'Nawdar', 'Neşwan', 'Nebez', 'Nedyar', 'Nehroz', 'Nekeroz',
    'Nemrût', 'Nerev', 'Neshwan', 'Nesrew', 'Newşîrwan', 'Newroz', 'Newzad',
    'Nezar', 'Nijdar', 'Nijyar', 'Nisko', 'Nizar', 'Nozer', 'Olan', 'Omêd',
    'Pêşêw', 'Pêşeng', 'Pêşewa', 'Pêşkeş', 'Pêşrev', 'Pêşrew', 'Pêdvî',
    'Pêjan', 'Pêskeft', 'Pîran', 'Pîrmûs', 'Pîrmos', 'Pîro', 'Palîn', 'Palan',
    'Paldar', 'Pale', 'Palewan', 'Pankîsar', 'Parêz', 'Paraw', 'Partî',
    'Partîzan', 'Pawan', 'Payan', 'Payedar', 'Pejan', 'Pejar', 'Pelewan',
    'Perik', 'Perwer', 'Pesar', 'Peyman', 'Pişko', 'Piştîvan', 'Piştîwan',
    'Piling', 'Pola', 'Polan', 'Qûto', 'Qareman', 'Qasimlo', 'Qeçax',
    'Qehreman', 'Qenco', 'Qendîl', 'Rêbîn', 'Rêbar', 'Rêbaz', 'Rêbend',
    'Rêber', 'Rêbwar', 'Rêdîr', 'Rêdûr', 'Rêdan', 'Rêkan', 'Rêkewt', 'Rênas',
    'Rêncber', 'Rêving', 'Rêwan', 'Rêzan', 'Rîbar', 'Rûşen', 'Rûbar', 'Raber',
    'Ragir', 'Rajan', 'Rajo', 'Raman', 'Ramyar', 'Rangar', 'Rastî', 'Rawand',
    'Reşo', 'Reben', 'Rehwan', 'Reman', 'Reswan', 'Revend', 'Rewan', 'Rewaz',
    'Rewez', 'Ribat', 'Rindo', 'Ristem', 'Rizgan', 'Rizgar', 'Roşan', 'Rodî',
    'Rodaw', 'Rohat', 'Roj', 'Rojan', 'Rojdar', 'Rojen', 'Rojhat', 'Rojko',
    'Rojo', 'Rojwan', 'Rojyar', 'Romet', 'Ronî', 'Ronas', 'Ronga', 'Rostem',
    'Rozad', 'Ruîbar', 'Rubad', 'Sêvê', 'Sêvdîn', 'Sîdar', 'Sîpan', 'Sîrwan',
    'Sîto', 'Sîyar', 'Sakar', 'Sako', 'Salar', 'Samal', 'Saman', 'Samrend',
    'Sanaw', 'Sangar', 'Saro', 'Sazan', 'Sefîn', 'Semedar', 'Semyan',
    'Sengaw', 'Senger', 'Sepan', 'Serçil', 'Seraw', 'Serbaz', 'Serbest',
    'Serbilind', 'Serdar', 'Serdeşt', 'Serfiraz', 'Serger', 'Sergewaz',
    'Serhat', 'Serhed', 'Serheng', 'Serhing', 'Seriyas', 'Serkar', 'Serkeft',
    'Serket', 'Serkewt', 'Sermend', 'Sertac', 'Sertan', 'Serwer', 'Serxwebun',
    'Seywan', 'Silîvî', 'Silav', 'Simiko', 'Simko', 'Simku', 'Sinor', 'Siwar',
    'Siyabend', 'Siyamend', 'Siyawiş', 'Soran', 'Soraw', 'Soro', 'Sozda',
    'Spîndar', 'Suran', 'Têkoşan', 'Têkoşer', 'Tîşk', 'Tîrêj', 'Tîrvan',
    'Tajdîn', 'Takî', 'Talan', 'Talla', 'Talor', 'Taro', 'Temer', 'Temo',
    'Tenya', 'Terxan', 'Tewran', 'Tomar', 'Torevan', 'Umêd', 'Vîndar', 'Vana',
    'Vedêr', 'Vegêr', 'Vehêl', 'Vejen', 'Wan', 'Wanyar', 'Warhêl', 'Welat',
    'Werzêr', 'Werzan', 'Wirya', 'Xîzan', 'Xabûr', 'Xakî', 'Xanî', 'Xastî',
    'Xawên', 'Xebat', 'Xelat', 'Xemgîn', 'Xemu', 'Xerîk', 'Xerdel', 'Xerzan',
    'Xetîr', 'Xoşevî', 'Xoşnav', 'Xoşnaw', 'Xoştivî', 'Xogir', 'Xonas',
    'Xorto', 'Xoybûv', 'Xoybon', 'Xozan', 'Xudêda', 'Xurt', 'Xurto', 'Xwên',
    'Xwedêda', 'Yadgar', 'Yado', 'Yekbon', 'Yekta', 'Yezdîn', 'Yezda',
    'Yezdanşêr', 'Yezdan', 'Zêbar', 'Zêdan', 'Zêmar', 'Zêrîn', 'Zêrevan',
    'Zêwer', 'Zîlan', 'Zîndan', 'Zîrek', 'Zîver', 'Zagros', 'Zal', 'Zamo',
    'Zana', 'Zanist', 'Zaniyar', 'Zanyar', 'Zarî', 'Zar', 'Zarav', 'Zargo',
    'Zaro', 'Zaxo', 'Zaza', 'Zendîn', 'Zend', 'Zendo', 'Zengî', 'Zengo',
    'Zerdeşt', 'Zerdo', 'Zimnako', 'Zinar', 'Zirav', 'Zirya', 'Ziryan',
    'Zivêr', 'Zorab', 'Zoran', 'Zorav', 'Zoro', 'Zozik'];
  const nm2 = ['Çêker', 'Çîmen', 'Çûçê', 'Çakîn', 'Çavşîn', 'Çavgeş', 'Çavreş',
    'Çawcuwan', 'Çawgeş', 'Çawrê', 'Çawreş', 'Çeleng', 'Çemê', 'Çeman',
    'Çengzêr', 'Çerîn', 'Çilo', 'Çinûr', 'Çinar', 'Çirîsk', 'Çirûsk', 'Çiro',
    'Çistê', 'Çopî', 'Çorîn', 'Çuwan', 'Şêlaz', 'Şîlan', 'Şînî', 'Şîwen',
    'Şadîman', 'Şadan', 'Şagul', 'Şala', 'Şana', 'Şanaz', 'Şaneşîn', 'Şayan',
    'Şehla', 'Şehnaz', 'Şehrîban', 'Şehrîvan', 'Şelal', 'Şemam', 'Şengê',
    'Şengîn', 'Şengal', 'Şepal', 'Şepirze', 'Şepol', 'Şermîn', 'Şevîn',
    'Şevba', 'Şewba', 'Şewnim', 'Şewran', 'Şeyda', 'Şilêr', 'Şilove', 'Şine',
    'Şino', 'Şirîn', 'Şirînnaz', 'Şoreş', 'Şoxan', 'Şulker', 'Şureş', 'Aşna',
    'Aştî', 'Adan', 'Adar', 'Agirîn', 'Agrîn', 'Ahîn', 'Aheng', 'Ajîn',
    'Ajda', 'Ajna', 'Ajwan', 'Alê', 'Alîn', 'Alûs', 'Ala', 'Alal', 'Alik',
    'Alva', 'Aman', 'Arêz', 'Arîman', 'Arîn', 'Ara', 'Aran', 'Araz', 'Arazoo',
    'Arda', 'Ardil', 'Areen', 'Arezu', 'Ariya', 'Ariyan', 'Arjen', 'Asê',
    'Asan', 'Ashti', 'Askê', 'Aska', 'Astan', 'Asteng', 'Avêsta', 'Avêste',
    'Avîn', 'Avşîn', 'Avan', 'Avbîn', 'Aveen', 'Avreng', 'Avzêl', 'Avzen',
    'Awîng', 'Awat', 'Awaz', 'Awing', 'Awira', 'Axîn', 'Axînk', 'Azîn', 'Azû',
    'Azadî', 'Azade', 'Azrîn', 'Bêdar', 'Bêjîn', 'Bêlîm', 'Bêmal', 'Bênaw',
    'Bênaz', 'Bêrî', 'Bêrîcan', 'Bêrîn', 'Bêrîvan', 'Bêrîwan', 'Bêwîjan',
    'Bêxal', 'Bêzar', 'Bîşeng', 'Bînahî', 'Bûken', 'Bada', 'Badil', 'Bahar',
    'Bahoz', 'Bajîlan', 'Balnexşîn', 'Banê', 'Baneşîn', 'Barêz', 'Barîn',
    'Barûve', 'Baran', 'Bawan', 'Baweşîn', 'Baweşen', 'Bazê', 'Bazîn',
    'Baziyan', 'Bedew', 'Bedewcan', 'Befrî', 'Befrîn', 'Befraw', 'Begî',
    'Begîxan', 'Behêz', 'Behar', 'Bejîn', 'Bejnê', 'Bejna', 'Belên',
    'Belîban', 'Belîcan', 'Belalûk', 'Belar', 'Belqis', 'Benaw', 'Bendan',
    'Benden', 'Bendewa', 'Bendewan', 'Benewş', 'Bengîn', 'Berçem', 'Berî',
    'Berîn', 'Berîxan', 'Berafîn', 'Beraw', 'Berbang', 'Berbijîn', 'Berdar',
    'Berdil', 'Berem', 'Berfîn', 'Berfende', 'Berhem', 'Berken', 'Berma',
    'Bermalî', 'Bermal', 'Bersîn', 'Berwar', 'Berzê', 'Besê', 'Besna',
    'Bestin', 'Bewran', 'Bexşîn', 'Bexşan', 'Beyan', 'Beybîn', 'Beybûn',
    'Beysos', 'Bezîn', 'Bezma', 'Bişkoj', 'Bişkuj', 'Bişkurîn', 'Bihar',
    'Biheşt', 'Bijîn', 'Bijarde', 'Bijew', 'Bijwên', 'Bijya', 'Bilêse',
    'Binar', 'Binav', 'Binefş', 'Binevş', 'Birca', 'Birwa', 'Biwar', 'Biyan',
    'Boran', 'Cîhan', 'Cîran', 'Canê', 'Can', 'Canan', 'Cawîdan', 'Cerê',
    'Cewê', 'Cewher', 'Ciwanê', 'Ciwanî', 'Ciwana', 'Ciwancan', 'Ciwangul',
    'Ciwannaz', 'Ciwanrû', 'Dêrsim', 'Dîana', 'Dîdar', 'Dîlan', 'Dîlber',
    'Dîlok', 'Dîmen', 'Dîristan', 'Dîroka', 'Dîwan', 'Daban', 'Damaw',
    'Dangar', 'Darçîn', 'Darîn', 'Daristan', 'Dastan', 'Daxaz', 'Delal',
    'Demgul', 'Dengîn', 'Derav', 'Derman', 'Dersima', 'Derzîn', 'Desmal',
    'Dever', 'Devken', 'Dewken', 'Dicle', 'Dihok', 'Dilê', 'Dilîn', 'Dilşên',
    'Dilşa', 'Dila', 'Dilan', 'Dilar', 'Dilara', 'Dilaram', 'Dilare',
    'Dilawaz', 'Dilba', 'Dilbaz', 'Dilber', 'Dilcan', 'Dildar', 'Dilgerm',
    'Dilistan', 'Dilkanî', 'Dilmest', 'Dilnîgar', 'Dilnaz', 'Dilniya',
    'Dilocan', 'Dilok', 'Dilorîn', 'Dilovan', 'Dilpak', 'Dilron', 'Dilsoz',
    'Dilvîn', 'Dilvan', 'Dilxoş', 'Dilxwaz', 'Dilxweş', 'Dindik', 'Dirê',
    'Dixaz', 'Diyana', 'Diyarî', 'Diyar', 'Doman', 'Edgar', 'Efsan', 'Elegez',
    'Elind', 'Elmas', 'Enwa', 'Erdelan', 'Erdem', 'Ernewaz', 'Erzen', 'Erzo',
    'Esmê', 'Esmîxan', 'Esma', 'Esmer', 'Esmercan', 'Esmerxan', 'Esrîn',
    'Estê', 'Estêr', 'Estêre', 'Etûn', 'Evîn', 'Evser', 'Ewîn', 'Ewaz',
    'Ewrîn', 'Exter', 'Eyşan', 'Ezîn', 'Ezcan', 'Ezma', 'Ezo', 'Fênik',
    'Fîdan', 'Fîlya', 'Fîrya', 'Felek', 'Fener', 'Feraşîn', 'Ferman', 'Ferzê',
    'Ferzîne', 'Firmêsk', 'Firyal', 'Gêlas', 'Gûzê', 'Gazî', 'Gazîn', 'Geşê',
    'Geşîn', 'Geşa', 'Gelavêj', 'Gelawêj', 'Gelaz', 'Gerdîn', 'Gerdûn',
    'Gerdan', 'Gerdana', 'Gerdangaz', 'Gerden', 'Gerdengaz', 'Gerdew',
    'Gever', 'Gewher', 'Gewrê', 'Gezîne', 'Gezîza', 'Gezing', 'Gilêne',
    'Gilya', 'Gilyaz', 'Girav', 'Giraw', 'Giyabent', 'Gizing', 'Glare',
    'Govend', 'Gozê', 'Gozel', 'Grîvan', 'Guhdar', 'Guhtem', 'Gulçîn', 'Gulê',
    'Gulîşa', 'Gulî', 'Gulîk', 'Gulîn', 'Gulîstan', 'Gulîxan', 'Gulîzêr',
    'Gulîzar', 'Gulîzer', 'Gulşênî', 'Gulşîn', 'Gulşa', 'Gulşen', 'Gulşirîn',
    'Gul', 'Gulabax', 'Gulal', 'Gulale', 'Gulan', 'Gulasor', 'Gulavî',
    'Gulav', 'Gulaw', 'Gulazêr', 'Gulbîn', 'Gulbahar', 'Gulbanû', 'Gulbarîn',
    'Gulbaran', 'Gulbawan', 'Gulbax', 'Gulbeden', 'Gulbehar', 'Gulbejn',
    'Gulbent', 'Gulberîn', 'Gulberoj', 'Gulbeser', 'Gulbest', 'Gulbihar',
    'Gulcan', 'Gulda', 'Guldan', 'Guldar', 'Gulferî', 'Gulfiroş', 'Gulistan',
    'Gulnîşan', 'Gulnam', 'Gulnar', 'Gulnav', 'Gulnaz', 'Gulperî', 'Gulreng',
    'Gulroj', 'Gulsînem', 'Gulveda', 'Gulxatûn', 'Gulxoş', 'Gulzar', 'Guvend',
    'Hêja', 'Hêlîn', 'Hêlan', 'Hêmin', 'Hêra', 'Hêro', 'Hêvî', 'Hêva',
    'Hîran', 'Hîvî', 'Hîvîdar', 'Hîvan', 'Hana', 'Hatîcan', 'Havîn', 'Hawîn',
    'Hawdem', 'Hawdil', 'Hawjîn', 'Hawnaz', 'Hawniyaz', 'Heîv', 'Hedar',
    'Hejîn', 'Helal', 'Helale', 'Helat', 'Helbîn', 'Helbest', 'Helez',
    'Heliz', 'Helvîn', 'Hemayîl', 'Hemyan', 'Henar', 'Hermê', 'Hermîn',
    'Hetav', 'Hetaw', 'Hevîn', 'Hevdem', 'Hevjîn', 'Hevovê', 'Hevrê', 'Hevta',
    'Hewîn', 'Hewar', 'Hewaxan', 'Hewrê', 'Hewraz', 'Hewsa', 'Heycan',
    'Heynar', 'Hezar', 'Hilbîn', 'Hinar', 'Hizar', 'Hoşeng', 'Hojîn', 'Hozan',
    'Huzan', 'Jêlî', 'Jêla', 'Jêlyan', 'Jîlwan', 'Jîman', 'Jînê', 'Jîn',
    'Jînda', 'Jînewer', 'Jîno', 'Jîrê', 'Jîvîn', 'Jîyan', 'Jale', 'Jarê',
    'Jiwan', 'Jiyan', 'Jiyar', 'Kîstan', 'Kaban', 'Kahîn', 'Kajîn', 'Kaja',
    'Kalê', 'Kanî', 'Kanîk', 'Karîn', 'Kawê', 'Kejê', 'Kejal', 'Kejaw',
    'Keser', 'Kesrewan', 'Kevî', 'Kevok', 'Kewer', 'Kewser', 'Keyna',
    'Kezîban', 'Kezîzer', 'Kilda', 'Kinê', 'Kinêr', 'Kirîstan', 'Koçer',
    'Koser', 'Kuçer', 'Kubar', 'Kulîlk', 'Kurdê', 'Kurdistan', 'Kvrîn',
    'Kwêstan', 'Lêlav', 'Lêvken', 'Lîlyan', 'Lîza', 'Laleş', 'Lale',
    'Lalebend', 'Lalezar', 'Lawîn', 'Lawlaw', 'Leman', 'Lence', 'Lerzan',
    'Lewken', 'Leylê', 'Leylan', 'Leymîn', 'Lezîn', 'Lolav', 'Lorî',
    'Lorîcan', 'Lorîn', 'Lorkê', 'Mêmê', 'Mêrdîn', 'Mêxek', 'Mîdya', 'Mîna',
    'Mîran', 'Maşa', 'Mahabad', 'Malîn', 'Mangeşew', 'Mebest', 'Medya',
    'Mehabad', 'Mehrîban', 'Mehrîcan', 'Mehrîvan', 'Mejbîr', 'Memyan',
    'Mendê', 'Mendal', 'Merîvan', 'Mercam', 'Mercan', 'Mest', 'Mestan',
    'Meyfroş', 'Meyro', 'Mirarî', 'Mirarîxan', 'Mircan', 'Miryem', 'Mizgîn',
    'Nêrîn', 'Nêrgiz', 'Nêzîk', 'Nîşan', 'Nîştîman', 'Nîştman', 'Nîdar',
    'Nîgaar', 'Nîgar', 'Nîna', 'Nîroj', 'Nîruj', 'Nîyan', 'Nûşîn', 'Nûcan',
    'Nûjen', 'Nalîn', 'Narê', 'Narîman', 'Narîn', 'Narîncan', 'Naskê',
    'Naskol', 'Navbihar', 'Nawnaz', 'Nawxoş', 'Nazê', 'Naz', 'Naza', 'Nazdar',
    'Nazenîn', 'Nazgul', 'Nazik', 'Naznaz', 'Neşmîl', 'Neşmîn', 'Nefel',
    'Nemal', 'Nermê', 'Nermîn', 'Nesrîn', 'Nevîn', 'Newîn', 'Newal',
    'Newbohar', 'Newroz', 'Nexşîn', 'Nilufer', 'Niyan', 'Niyaz', 'Norcan',
    'Novîn', 'Nuşa', 'Nujîn', 'Nuroj', 'Omed', 'Orfa', 'Pêlîn', 'Pêrûz',
    'Pîşeng', 'Pîroz', 'Pakîze', 'Pakdil', 'Peîman', 'Pejna', 'Pelşî',
    'Pelşîn', 'Pelek', 'Pepole', 'Perçem', 'Perîşan', 'Perî', 'Perîgul',
    'Perînaz', 'Perîxan', 'Pergul', 'Perjîn', 'Pervîn', 'Perwîn', 'Perwane',
    'Pexşan', 'Peyam', 'Peyman', 'Pirşing', 'Pirjîn', 'Pirnaz', 'Porşeng',
    'Pore', 'Qeşem', 'Qumrî', 'Rêhan', 'Rêjîn', 'Rêjne', 'Rêzîn', 'Rêzan',
    'Rîhan', 'Rîken', 'Rûciwan', 'Rûgeş', 'Rûken', 'Rûna', 'Rûnak', 'Rûzerîn',
    'Rana', 'Ranye', 'Raperîn', 'Rawezh', 'Razaw', 'Reben', 'Rehzna', 'Rejnê',
    'Rendê', 'Rengîn', 'Revîn', 'Revend', 'Rewşa', 'Rewşen', 'Rewan',
    'Rexşan', 'Rihan', 'Rindê', 'Robîn', 'Robar', 'Rojê', 'Rojîn', 'Roj',
    'Rojawelat', 'Rojbîn', 'Rojda', 'Rojgar', 'Rojgul', 'Rojhat', 'Rojhelat',
    'Rona', 'Ronahî', 'Ronak', 'Rondik', 'Roza', 'Rozerîn', 'Runahî',
    'Rundik', 'Sêwê', 'Sîbel', 'Sîber', 'Sîlav', 'Sîmal', 'Sînem', 'Sînemxan',
    'Sîpel', 'Sîsê', 'Sîsik', 'Sîsin', 'Sîtav', 'Sîvan', 'Sîwan', 'Sûlav',
    'Sabryia', 'Sarê', 'Sara', 'Sazan', 'Seîran', 'Selwer', 'Semîan', 'Sema',
    'Semen', 'Serçinar', 'Sera', 'Seran', 'Serav', 'Serbar', 'Sercan',
    'Serfiraz', 'Sergul', 'Serpîl', 'Seryal', 'Sewza', 'Seyran', 'Sikala',
    'Silîva', 'Sindis', 'Sitî', 'Sitîxan', 'Sokar', 'Solîn', 'Soma', 'Sorê',
    'Sorgul', 'Sosin', 'Sozan', 'Spêda', 'Spehî', 'Srûşt', 'Srwe', 'Stêrê',
    'Stêrk', 'Stran', 'Suma', 'Suz', 'Suzan', 'Têkoşîn', 'Têlîcan', 'Têlîxan',
    'Tîroj', 'Tûjîn', 'Taban', 'Tablo', 'Tajev', 'Talar', 'Tanya', 'Tara',
    'Tatiana', 'Tavîn', 'Telar', 'Tenya', 'Teyrê', 'Tilove', 'Trîfa', 'Vîan',
    'Vînê', 'Vîn', 'Vejîn', 'Vejan', 'Veman', 'Viyan', 'Waja', 'Warşênî',
    'Werîna', 'Wesîla', 'Xêlîcan', 'Xîsar', 'Xacê', 'Xanê', 'Xanem', 'Xanim',
    'Xanzad', 'Xatîn', 'Xatûn', 'Xebat', 'Xecê', 'Xelat', 'Xemê', 'Xemşîn',
    'Xemgîn', 'Xemlîn', 'Xerman', 'Xewn', 'Xeyal', 'Xezêm', 'Xezal', 'Xifşê',
    'Xoşeng', 'Xonçe', 'Xonaw', 'Xoxê', 'Xozge', 'Xunaw', 'Xuzî', 'Yar',
    'Yardil', 'Yargul', 'Yasemîn', 'Yekber', 'Yekcan', 'Yekmal', 'Yekser',
    'Yekta', 'Zêbazê', 'Zêrê', 'Zêrîn', 'Zîlan', 'Zînê', 'Zîn', 'Zînet',
    'Zîv', 'Zîvan', 'Zarîn', 'Zara', 'Zayele', 'Zelal', 'Zemrîd', 'Zende',
    'Zerê', 'Zerî', 'Zerîn', 'Zerîxan', 'Zera', 'Zergul', 'Zernîşan', 'Zerya',
    'Zerzan', 'Zevîn', 'Zeyno', 'Zeytîn', 'Zeytûn', 'Zilfê', 'Zoya', 'Zozan'];
  {
    rnd2 = Math.floor(Math.random() * nm1.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm1[rnd2]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm1[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    nm1.splice(rnd2, 1);
    return names;
  }
}
