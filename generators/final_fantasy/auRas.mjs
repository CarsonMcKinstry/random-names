export default function auRas() {
  const type = Math.random() < 0.5 ? 0 : 1;
  let rnd;
  let rnd2;
  let rnd3;
  let names;
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
  const nm4 = ['Akagane', 'Akiudo', 'Bakaro', 'Benitoki', 'Buhen', 'Bunja',
    'Daisho', 'Daito', 'Edakumi', 'Fukiku', 'Furukane', 'Gakunin', 'Godo',
    'Hagane', 'Hakuuchi', 'Hatasashi', 'Ishiku', 'Ittetsu', 'Jizutsu',
    'Kabuto', 'Kaisuri', 'Kaneuchi', 'Kanshi', 'Kawanami', 'Kazarishi',
    'Kiba', 'Kurogane', 'Kusakari', 'Kusushi', 'Maibito', 'Meiken', 'Mihata',
    'Mizuhiki', 'Musa', 'Naeuri', 'Okeya', 'Oshidari', 'Rokuyari', 'Sashihai',
    'Shibunuri', 'Shirogane', 'Tabito', 'Tachikake', 'Tatewaki', 'Torioi',
    'Tosho', 'Tsurugi', 'Twusamono', 'Urabito', 'Uzuka', 'Yumishi'];
  const nm5 = ['Abaka', 'Achighhirun', 'Achujam Bugural', 'Adarkidai',
    'Adkiragh', 'Adya', 'Agasiletai', 'Agsaldai', 'Aguchu', 'Agujam', 'Ajai',
    'Ajinai', 'Ajir', 'Ajirai', 'Akhutai', 'Alagh', 'Alagh Yid', 'Alchidai',
    'Alchigh', 'Alghu', 'Aljaiemur', 'Altan', 'Altun Ashugh', 'Amal',
    'Amasandji', 'Amasar', 'Ambaghai', 'Anarba', 'Arabuccha', 'Aragibal',
    'Arasen', 'Argasar', 'Argasun Qorchi', 'Argat', 'Argun', 'Arik',
    'Arik Boge', 'Arik Buka', 'Arinasai', 'Ariq Boke', 'Ariunbold',
    'Arkhai Khasar', 'Arsi', 'Arslan', 'Aruci', 'Aruktai', 'Asha Gambu',
    'Ashighemur', 'Asugbal', 'Baasan', 'Baavgai', 'Badai', 'Bagaridai',
    'Baidar', 'Baidu', 'Baihingor', 'Baiju', 'Bala', 'Balagachi', 'Baltu',
    'Bardam', 'Bartan', 'Bartu', 'Barulatai', 'Bashimur', 'Bat', 'Bat-Erdene',
    'Bataar', 'Batachikhan', 'Batbayar', 'Bati', 'Batsaikhan', 'Batu',
    'Batukhan', 'Bayan', 'Bayan Olgei', 'Bayanaganengri', 'Bayar', 'Bede',
    'Bedes', 'Begter', 'Begugtei', 'Belgeltei', 'Belgunutei', 'Berke',
    'Besutei', 'Biger', 'Bilge', 'Bilig', 'Boal', 'Bodonchar', 'Bogarji',
    'Boge', 'Bogen', 'Bogorchu', 'Bold', 'Bolkhadar', 'Bor', 'Bora',
    'Borachu', 'Borjigidai', 'Boroghul', 'Boroldai', 'Boroldaiuyalbi',
    'Bortachikhan', 'Bortehinua', 'Bortei', 'Boshigt', 'Bucharan',
    'Bughu Khatagi', 'Bughutualji', 'Bugidai', 'Bugunutei', 'Bugurul',
    'Bujeg', 'Bujir', 'Bukha', 'Bukidai', 'Bulaqadar', 'Bultechu', 'Bultger',
    'Bulugan', 'Buqatai', 'Buri', 'Buri Bulchiru', 'Burim', 'Burkhan Khaldun',
    'Butu', 'Buyant', 'Buyantu', 'Buyirugh', 'Cagan Ebugen', 'Caikhatu',
    'Carbon', 'Chagadai', 'Chaghagan', 'Chaghagan Khoga', 'Chaghagan Uua',
    'Chagurkhai', 'Chakhurkhan', 'Chanai', 'Chanar', 'Chapar', 'Charakha',
    'Chidukhul', 'Chigu', 'Chilagun', 'Chiledu', 'Chilger', 'Chiluku',
    'Chimbai', 'Chimbai Dargan', 'Chingay', 'Chingis', 'Chingkim', 'Choban',
    'Chormakhan', 'Chuacenur', 'Chulgetei', 'Chuluun', 'Chuluunbold',
    'Cyriacus Buyirugh', 'Dagun', 'Daidukul', 'Dalantai', 'Darbai', 'Daritai',
    'Dash', 'Dayan', 'Dayir', 'Dayir Usun', 'Degei', 'Dei', 'Delbeg',
    'Delger', 'Devet Berdi', 'Dhunan', 'Dinget', 'Dobun', 'Dodai', 'Dogar',
    'Dogshin', 'Dokholkhu', 'Dologadai', 'Donoi', 'Dorbei', 'Dori Bukha',
    'Durraimur', 'Duruljiayiji', 'Duua', 'Edigu', 'Eguden Yeke', 'Elbek',
    'Eldegai', 'Eljigidei', 'Emlig', 'Enebish', 'Enkhjargal', 'Enx', 'Erdeni',
    'Erke', 'Erke Khara', 'Erketu', 'Esen Boge', 'Esenaij', 'Esenaysh',
    'Esugen', 'Gal', 'Galdan', 'Ganbaatar', 'Ganbataar', 'Ganbold', 'Gansukh',
    'Gantulga', 'Ganzorig', 'Gerel', 'Geser', 'Geser Khan', 'Geugi', 'Ghazan',
    'Ghunan', 'Guchlug', 'Guchu', 'Guchugur', 'Gughlug', 'Gugun', 'Guntomor',
    'Gur', 'Guyug', 'Harghasun', 'Hobogetur', 'Hooshal', 'Horkhudagh',
    'Hulegu', 'Huslen', 'Huslenutagt', 'Husun', 'Hutagt', 'Hychyt',
    'Idughadai', 'Ile', 'Ilugei', 'Inalchi', 'Inancha Bilge', 'Iturgen',
    'Jaghatai', 'Jajiradai', 'Jakha Gambu', 'Jali Bukha', 'Jamugha', 'Janggi',
    'Jarchigudai', 'Jebe', 'Jebeinoyan', 'Jebeioyan', 'Jebke', 'Jeder',
    'Jegu', 'Jelme', 'Jenkshi', 'Jetei', 'Jirandai', 'Jirghadai',
    'Jirghogadai', 'Jochi', 'Jochi Khasar', 'Jubkhan', 'Jungdu', 'Jungsai',
    'Jungshoi', 'Jungso', 'Jurchedei', 'Kamala', 'Kara', 'Karaekegu',
    'Ked-Buqa', 'Kekchu', 'Kepek', 'Ketboge', 'Kete', 'Keuken', 'Khünbish',
    'Khabichi', 'Khabul', 'Khachi', 'Khada', 'Khadagan',
    'Khadagan Daldurkhan', 'Khadaganasai', 'Khadagh', 'Khadan',
    'Khagatai Darmala ', 'Khaguran', 'Khaidai', 'Khaidu', 'Khaishan',
    'Khaji Kulug', 'Khajigin', 'Khal', 'Khali Kharchu', 'Khaligudar',
    'Khalja', 'Khara Gulug', 'Kharachar', 'Kharchu', 'Khasar', 'Khashi ',
    'Khashin', 'Khenbish', 'Khongkhai', 'Khongkhortai', 'Khongtaghar',
    'Khorchi', 'Khorghosun', 'Khorichar', 'Khoridai', 'Khorihilemunaisi',
    'Khorilartai', 'Khoriubechi', 'Khubilai', 'Khuchar', 'Khudu', 'Khudukha',
    'Khudus', 'Khudus Khalkhan', 'Khulan', 'Khurchakhus', 'Khuril Ashigh',
    'Khutughtu', 'Khutula', 'Khuyildar', 'Kinggiyadai Bukha', 'Kiratai',
    'Kiriltugh', 'Kishiligh', 'Kogseguabragh', 'Koko', 'Kokochu',
    'Kokochu Kirsagan', 'Kokochuebenggeri', 'Kokohos', 'Kokoongke', 'Kopek',
    'Kotyan', 'Kuchar', 'Kundek', 'Kus Bulad', 'Kutlugh', 'Kuyuk ', 'Kuzhuk',
    'Labakha', 'Ligdan', 'Luvsan', 'Mönkhbat', 'Magnai', 'Mahamu', 'Maqali',
    'Maqaudan', 'Maral', 'Masgud', 'Mauci', 'Medekhgüi', 'Megetu', 'Megujin',
    'Menggei', 'Menggetu', 'Menggulig', 'Mengu', 'Mergen', 'Mohntomor',
    'Molon', 'Mongke', 'Mongkeemur', 'Monkeemur', 'Monx', 'Morokha', 'Muge',
    'Mukhali', 'Mulkhalkhu', 'Mungetu', 'Munggugur', 'Mungke', 'Munglig',
    'Munokhoi', 'Mutugen', 'Muunokhoi', 'Myagmar', 'Nachin', 'Nakhu',
    'Naranbaatar', 'Narin', 'Narin Kegen', 'Narinogoril', 'Nayaga', 'Nayan',
    'Nayantai', 'Nekhii', 'Nekun', 'Nekunaisi', 'Nergüi', 'Nogai', 'Nongrot',
    'Odchigin', 'Odchigin Abaga', 'Ogele', 'Ogodei', 'Ogtbish', 'Okhotur',
    'Okin', 'Okin Barkhagh', 'Olai Anda', 'Olar', 'Oldaghar', 'Oljeitu',
    'Olzii', 'Olziytomor', 'Ong', 'Onggiran', 'Onggur', 'Orda',
    'Orduoronartai', 'Osol', 'Otgonbayar', 'Oyuun', 'Ozbeg', 'Qara Budang',
    'Qobolta', 'Qoribucha', 'Qoribuqa', 'Qoricarergan', 'Qoriqacha',
    'Qorisubechi', 'Sühk', 'Sacha', 'Sagra', 'Sain', 'Sanchir', 'Sartak',
    'Sechegur', 'Segerandalitu', 'Semsochi', 'Senggum', 'Shager', 'Shiban',
    'Shigi Khutukhu ', 'Shigi-Qutuqu', 'Shikigur', 'Shilugei', 'Shinghkhor',
    'Shiraghul', 'Shiramun', 'Shirgugetu', 'Sibaguchu', 'Siban', 'Sidurgu',
    'Sinkur', 'Sokhor', 'Sorkhanhira', 'Sorkhatu Jurki', 'Soyiketu',
    'Subetei', 'Sugar', 'Suke', 'Sukegei', 'Sukh', 'Sukhbataar',
    'Sukhebaatar', 'Suyiketu', 'Tömörbaatar', 'Tömörbataar', 'Tabudai',
    'Tabur', 'Tagadhur', 'Taghai', 'Tahar', 'Taichar', 'Taichu', 'Tamachag',
    'Tamachi', 'Taragai', 'Tarmashirin', 'Tartu', 'Tatar', 'Tatatunga',
    'Tayang', 'Tebengri', 'Teguder Ahmad', 'Tekuder', 'Teleboge', 'Telegetu',
    'Temuge', 'Temuge Otchigin', 'Temuge Otichigin', 'Temujin', 'Temujin Uge',
    'Temur', 'Temur Kutlugh', 'Temur Oljeitu', 'Terbish', 'Thaube',
    'Timurolie', 'Tobsakha', 'Tobukha', 'Todeongke', 'Todogen Girte',
    'Toggontomor', 'Togh', 'Toghaimur', 'Toghemur', 'Toghon', 'Toghonemur',
    'Toghoril', 'Toghtoga', 'Togosemur', 'Togtoobuh', 'Tokhta', 'Tokhtamysh',
    'Tokhuchar', 'Tokuremur', 'Tole-Buqa', 'Tolon', 'Tolui', 'Tolun',
    'Tomor Olziyt', 'Toqemur', 'Torbiashi', 'Tordung', 'Torgaljin', 'Torgan',
    'Torganira', 'Tseren', 'Tsolmon', 'Tudan', 'Tudaongke', 'Tugan', 'Tuge',
    'Tugtemur', 'Tugtomor', 'Tumbinai', 'Tumun', 'Tungge', 'Tungkhuidai',
    'Tutei', 'Tuva', 'Tuyuideger', 'Uchikin', 'Udutai', 'Uighurtai', 'Ukhuna',
    'Ukilen', 'Ulagchi', 'Uranenggui', 'Urchger', 'Urgamal', 'Uriangkadai',
    'Urus', 'Usun', 'Xangai', 'Xartsaga', 'Xorxoi', 'Yabuqa', 'Yalavech',
    'Yargai', 'Yasavur', 'Yediublugh', 'Yegu', 'Yeke', 'Yekeheren',
    'Yekehiledu', 'Yekeidun', 'Yekeouru', 'Yekiegurin', 'Yerentai', 'Yesugei',
    'Yesun', 'Yesunege', 'Yesunemur', 'Yesunge', 'Yesunuva', 'Yesuongke',
    'Yokhunan', 'Yul', 'Yurukhan', 'Zayaat', 'Zhims'];
  const nm6 = ['Alagh Yid', 'Alan', 'Alan Ghoa', 'Alaqa', 'Altan', 'Altani',
    'Altantsetseg', 'Altun', 'Barghujin', 'Battsetseg', 'Bayarma', 'Bayarmaa',
    'Berude', 'Bolormaa', 'Boragchin', 'Borte', 'Borte Jusin',
    'Botokhui Targhun', 'Budan', 'Chagur', 'Chakha', 'Chambui', 'Checheyigen',
    'Chotan', 'Cirina', 'Cota', 'Cotota', 'Dagasi', 'Dokuz Khatum', 'Dorgene',
    'Ebegei', 'Enebish', 'Enkhjargal', 'Enkhtuya', 'Enkhtuyaa',
    'Erdenechimeg', 'Erdenetungalag', 'Ergene', 'Etugen Eke', 'Ganzorig',
    'Gerelma', 'Ghoa', 'Gorbeljin', 'Gurbesu', 'Hogelun', 'Holuikhan',
    'Hongorzul', 'Hujaghur', 'Ibakha', 'Jaliqai', 'Jiguur', 'Khünbish',
    'Khadagan', 'Khenbish', 'Khogaghchin', 'Khojin', 'Khongordzol',
    'Khorijin', 'Khugurchin', 'Khulan', 'Mönkhtsetseg', 'Maa', 'Maral',
    'Medekhgüi', 'Mide', 'Mongoljin', 'Munkhtsetseg', 'Muunokhoi',
    'Narangerel', 'Narantsetseg', 'Narantuyaa', 'Narengawa', 'Nergüi',
    'Nomolun', 'Odtsetseg', 'Odval', 'Oghul', 'Ogtbish', 'Ogul',
    'Ogul Gaimysh', 'Orbei', 'Oyunbileg', 'Oyunchimeg', 'Oyuun',
    'Oyuunchimeg', 'Samga', 'Saran', 'Sarangerel', 'Sarantsatsr',
    'Sarantsatsral', 'Sarantuya', 'Sayinaral Qayag', 'Sechen',
    'Seruuntungalag', 'Silugukhan Qatakhan', 'Silun Gorgelji', 'Sokhatai',
    'Solongo', 'Sorghaghtani Beki', 'Sorkhaghtani', 'Sorocan', 'Tegusken',
    'Temulun', 'Temulun Abagai', 'Terbish', 'Togene', 'Toragana',
    'Tsetsegmaa', 'Turakina', 'Uranchimeg', 'Yesugen', 'Yesui', 'Yesuntei',
    'Yisu Qatun', 'Yisugei Qatun'];
  const nm7 = ['Adarkim', 'Angura', 'Arulaq', 'Avagnar', 'Bairon', 'Bayaqud',
    'Bolir', 'Borlaaq', 'Buduga', 'Dalamiq', 'Dataq', 'Dazkar', 'Dhoro',
    'Dotharl', 'Ejinn', 'Geneq', 'Gesi', 'Gharl', 'Goro', 'Haragin', 'Himaa',
    'Horo', 'Hotgo', 'Iriq', 'Jhungid', 'Kagon', 'Kahkol', 'Kha', 'Kharlu',
    'Khatayin', 'Malaguld', 'Malqir', 'Mankhad', 'Mierqid', 'Moks', 'Mol',
    'Noykin', 'Olkund', 'Orben', 'Oronir', 'Oroq', 'Qalli', 'Qerel', 'Qestir',
    'Sagahl', 'Torgud', 'Tumet', 'Ugund', 'Ura', 'Urumet', 'Uyagir'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        rnd = Math.floor(Math.random() * nm2.length);
        rnd2 = Math.floor(Math.random() * nm3.length);
        rnd3 = Math.floor(Math.random() * nm4.length);
        names = `${nm2[rnd] + nm3[rnd2]} ${nm4[rnd3]}`;
      } else {
        rnd = Math.floor(Math.random() * nm5.length);
        rnd2 = Math.floor(Math.random() * nm7.length);
        names = `${nm5[rnd]} ${nm7[rnd2]}`;
      }
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm1.length);
      rnd3 = Math.floor(Math.random() * nm4.length);
      while (rnd === rnd2) {
        rnd2 = Math.floor(Math.random() * nm1.length);
      }
      names = `${nm1[rnd] + nm1[rnd2]} ${nm4[rnd3]}`;
    } else {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm7.length);
      names = `${nm6[rnd]} ${nm7[rnd2]}`;
    }
    return names;
  }
}
