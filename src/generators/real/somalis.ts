import { sample } from 'lodash-es';

export default function somalis() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aamin',
        'Abadar',
        'Abaskuul',
        'Abroon',
        'Absame',
        'Abshir',
        'Absimil',
        'Abtidoon',
        'Aflax',
        'Afrax',
        'Amadayo',
        'Arbooshe',
        'Asad',
        'Ashkir',
        'Askari',
        'Aweys',
        'Awsame',
        'Axmadeey',
        'Ayaanle',
        'Ayax',
        'Baasaweyne',
        'Baashi',
        'Bacalwaan',
        'Bahdoon',
        'Bakad',
        'Bariise',
        'Barkhad',
        'Barkhadle',
        'Barre',
        'Bashiir',
        'Bedri',
        'Beelwade',
        'Beyle',
        'Bicir',
        'Biixi',
        'Bile',
        'Birmad',
        'Bishaar',
        'Bootaan',
        'Boqol',
        'Bullaale',
        'Bulxan',
        'Buraale',
        'Burhaan',
        'Busuri',
        'Buule',
        'Buulle',
        'Caadil',
        'Caagane',
        'Caalin',
        'Caamir',
        'Caaqil',
        'Cabaas',
        'Cabdi',
        'Cabdow',
        'Cabdull',
        'Cabdulle',
        'Cabsiiye',
        'Cadceed',
        'Caddow',
        'Cagmadhige',
        'Calas',
        'Calasow',
        'Canbar',
        'Canshuur',
        'Caraale',
        'Carays',
        'Cartan',
        'Cawaale',
        'Cawad',
        'Cawil',
        'Cawke',
        'Caydiid',
        'Caynaanshe',
        'Caynab',
        'Caynanshe',
        'Ceydiid',
        'Cidey',
        'Cigaal',
        'Cigale',
        'Cige',
        'Ciiro',
        'Cilmi',
        'Cirguje',
        'Cismaan',
        'Colaad',
        'Cosoble',
        'Cubayd',
        'Culusoow',
        'Culusow',
        'Daacad',
        'Daahir',
        'Dacar',
        'Daleel',
        'Dalmar',
        'Darmaan',
        'Darwiish',
        'Dayax',
        'Deeq',
        'Deer',
        'Dhalad',
        'Dhiid',
        'Dhuubow',
        'Dhuxul',
        'Digil',
        'Diini',
        'Diiriye',
        'Dinaase',
        'Dirie',
        'Doog',
        'Dool',
        'Dubad',
        'Ducaale',
        'Durqun',
        'Faandhe',
        'Faarax',
        'Fanaxle',
        'Farxaan',
        'Fiidow',
        'Fiqi',
        'Food',
        'Gaacir',
        'Gaaciye',
        'Gaani',
        'Gaarane',
        'Gaarhaye',
        'Gabeyre',
        'Gaboose',
        'Gacal',
        'Gacayte',
        'Galaal',
        'Galad',
        'Galayax',
        'Galbeeti',
        'Galbeyte',
        'Galmaan',
        'Garaad',
        'Garaani',
        'Garaar',
        'Gari',
        'Geedi',
        'Geele',
        'Geelle',
        'Geesi',
        'Geyre',
        'Giirgiir',
        'Gobey',
        'Good',
        'Gorgor',
        'Guhaad',
        'Guntaal',
        'Gureey',
        'Gurxan',
        'Gutaale',
        'Guuce',
        'Guudle',
        'Guuleed',
        'Guure',
        'Guxaad',
        'Habane',
        'Hanad',
        'Hareeri',
        'Hayaan',
        'Haybe',
        'Hiraabe',
        'Hiraad',
        'Hiraale',
        'Horyaal',
        'Hufane Huruuse',
        'Iidle',
        'Inshaar',
        'Ishaar',
        'Jaafi',
        'Jaajuumow',
        'Jaamac',
        'Jalaqow',
        'Janaalle',
        'Janogalle',
        'Jayte',
        'Jeylaani',
        'Jeyte',
        'Jiinow',
        'Jilicow',
        'Jimcaale',
        'Jooqle',
        'Kaafi',
        'Kaafiye',
        'Kaahin',
        'Kaahiye',
        'Kaariye',
        'Kablan',
        'Kadiye',
        'Kaliil',
        'Kaynaan',
        'Keenadiid',
        'Keynaan',
        'Keynadiid',
        'Keyse',
        'Khadaafi',
        'Khadar',
        'Khaliif',
        'Khayre',
        'Kheyre',
        'Kooshin',
        'Kowtame',
        'Kulan',
        'Kulane',
        'Kulmis',
        'Kulmiye',
        'Kuluc',
        'Kunciil',
        'Liibaan',
        'Looshan',
        'Looyaan',
        'Maalin',
        'Maaxaay',
        'Maaxi',
        'Macoow',
        'Madar',
        'Magan',
        'Mahad',
        'Maslax',
        'Mataan',
        'Maxamed',
        'Maxamuud',
        'Meecaad',
        'Migil',
        'Mire',
        'Mooge',
        'Mowliid',
        'Mukhtaar',
        'Mursal',
        'Muruxo',
        'Muudeey',
        'Muudey',
        'Muxudiin',
        'Muxumed',
        'Naaleeye',
        'Nadiif',
        'Nageeye',
        'Nasteex',
        'Naxar',
        'Nimcaale',
        'Nuune',
        'Nuur',
        'Nuuradiin',
        'Nuure',
        'Obsiye',
        'Odawaa',
        'Olol',
        'Oogle',
        'Oomaar',
        'Qaaje',
        'Qaalib',
        'Qaasin',
        'Qalaad',
        'Qamaan',
        'Qanyare',
        'Qaybdiid',
        'Qays',
        'Qeyd',
        'Qorane',
        'Qorax',
        'Qoslaaye',
        'Qowdhan',
        'Quulle',
        'Raage',
        'Ramaas',
        'Rooble',
        'Saacid',
        'Saadaq',
        'Saahid',
        'Sacad',
        'Saciid',
        'Sade',
        'Sadiiq',
        'Sahal',
        'Salaad',
        'Saleebaan',
        'Salow',
        'Samaale',
        'Samaan',
        'Samakab',
        'Samatalis',
        'Samatar',
        'Samawade',
        'Samokaab',
        'Samow',
        'Sareeye',
        'Saruur',
        'Saxardiid',
        'Seed',
        'Seeraar',
        'Shaacir',
        'Shaaciye',
        'Shaafici',
        'Shankaron',
        'Shariif',
        'Sharmaake',
        'Sharmaarke',
        'Sharmarke',
        'Shidane',
        'Shido',
        'Shiino',
        'Shire',
        'Shiriye',
        'Shirwac',
        'Shooble',
        'Shuuriye',
        'Siyaad',
        'Soofe',
        'Sooraan',
        'Sooyaan',
        'Subeer',
        'Sugaal',
        'Sugule',
        'Sugulle',
        'Suudi',
        'Suufi',
        'Taajir',
        'Taakooy',
        'Tahliil',
        'Tarabi',
        'Tareey',
        'Tawakal',
        'Tiifoow',
        'Timir',
        'Toosane',
        'Tooxow',
        'Ubaxle',
        'Ugaas',
        'Urur',
        'Waaberi',
        'Wacays',
        'Wardhiigley',
        'Wardi',
        'Warfaa',
        'Warsame',
        'Wayrax',
        'Weheliye',
        'Wehliye',
        'Xaaf',
        'Xaange',
        'Xaashi',
        'Xaayow',
        'Xalane',
        'Xandulle',
        'Xarbi',
        'Xareed',
        'Xashraawi',
        'Xayd',
        'Xayir',
        'Xeef',
        'Xeeyle',
        'Xidig',
        'Xiireey',
        'Xiis',
        'Xirsi',
        'Xoosh',
        'Xukun',
        'Xuudi',
        'Xuuki',
        'Yaasiin',
        'Yabaal',
        'Yabaroow',
        'Yalaxoow',
        'Yalaxow',
        'Yaxye',
    ];
    const nm2 = [
        'Aamino',
        'Aamuun',
        'Abshiro',
        'Abyan',
        'Afraxo',
        'Amal',
        'Ammaan',
        'Amran',
        'Aniso',
        'Aragsan',
        'Ardo',
        'Arliyo',
        'Arraweello',
        'Ashkiro',
        'Asiili',
        'Askaro',
        'Asli',
        'Astur',
        'Axado',
        'Ayaan',
        'Baahila',
        'Baahilo',
        'Baar',
        'Baarliin',
        'Baaruud',
        'Baciido',
        'Bakaad',
        'Balqisa',
        'Bariido',
        'Barkhado',
        'Barni',
        'Barrey',
        'Barwaaqo',
        'Basra',
        'Basro',
        'Batuulo',
        'Baxsan',
        'Bayddan',
        'Baylaha',
        'Beegsan',
        'Beerlula',
        'Beydaan',
        'Beydan',
        'Beyruud',
        'Biciido',
        'Bilan',
        'Bilkhayr',
        'Billaddaya',
        'Bilqiis',
        'Binti',
        'Bishaaro',
        'Biyood',
        'Bogaad',
        'Boosteeya',
        'Boosteeyo',
        'Bullo',
        'Buney',
        'Butaaca',
        'Butaaco',
        'Buuxa',
        'Buuxo',
        'Caagan',
        'Caaisho',
        'Caaliyah',
        'Caanood',
        'Cabban',
        'Cabdiyo',
        'Cadar',
        'Caddey',
        'Cadey',
        'Cajabo',
        'Calaso',
        'Cambaro',
        'Canab',
        'Canbaro',
        'Carfoon',
        'Caroweelo',
        'Carraabo',
        'Carro',
        'Cartama',
        'Cartamo',
        'Carwo',
        'Casey',
        'Cawilo',
        'Cawo',
        'Cawrala�',
        'Cawrala',
        'Cawralo',
        'Caynabo',
        'Ceebla�',
        'Ceebla',
        'Ceynabo',
        'Cibaado',
        'Ciido',
        'Ciilla�',
        'Ciiltira',
        'Ciribbuuxa',
        'Cosob',
        'Cubtan',
        'Cudbi',
        'Cuddoon',
        'Cudoon',
        'Cugan',
        'Culan',
        'Culimmo',
        'Culimo',
        'Cureeji',
        'Cutiyo',
        'Daado',
        'Daaha',
        'Daawad',
        'Daggan',
        'Dahabo',
        'Dalaayad',
        'Dalaayo',
        'Dalays',
        'Dallaayad',
        'Dallaayo',
        'Dallays',
        'Damac',
        'Damman',
        'Darmaan',
        'Daruuro',
        'Dawo',
        'Dayaxo',
        'Daynabo',
        'Deeqa',
        'Deeqo',
        'Deggan',
        'Degmo',
        'Dhaayo',
        'Dhalaala',
        'Dheeh',
        'Dheeho',
        'Dhiin',
        'Dhiirran',
        'Dhikilo',
        'Dhikilo Dhimbilo',
        'Dhinbilo',
        'Dhoofa',
        'Dhoofo',
        'Dhool',
        'Dhubado',
        'Dhudi',
        'Dhuuban',
        'Dhuubo',
        'Dhuubo Dhuux',
        'Dhuulo',
        'Dhuux',
        'Dhuuxo',
        'Diiddan',
        'Diimmoon',
        'Diiran',
        'Diraaco',
        'Doonbiro',
        'Duco',
        'Duda',
        'Duddo',
        'Dugsiiya',
        'Dugsoon',
        'Dulman',
        'Duniyo',
        'Faadumo',
        'Faaiso',
        'Fahma',
        'Falis',
        'Falxado',
        'Fanaxley',
        'Farax',
        'Fariido',
        'Farxado',
        'Farxiyo',
        'Faynuus',
        'Feynuus',
        'Fiido',
        'Filad',
        'Filan',
        'Filsan',
        'Foojiga',
        'Foos',
        'Fowsio',
        'Gaadsan',
        'Gaarri',
        'Gaarriyo',
        'Gacal',
        'Gacaliso',
        'Gacalo',
        'Gaceedo',
        'Gadiido',
        'Gallado',
        'Gargaara',
        'Gargaaro',
        'Gaylamo',
        'Geeddiyo',
        'Geelo',
        'Geenyo',
        'Gefla�',
        'Geni',
        'Gobaad',
        'Gobey',
        'Gordan',
        'Gu�dhalad',
        'Guduudo',
        'Guhaado',
        'Guuleedo',
        'Haajiro',
        'Habban',
        'Habboon',
        'Haboon',
        'Habsamaan',
        'Hagarla�',
        'Hagarla',
        'Haldhaa',
        'Halgan',
        'Hani',
        'Haweeyo',
        'Heego',
        'Hibaaq',
        'Hibo',
        'Hiddo',
        'Hido',
        'Hilaac',
        'Hillaac',
        'Hira',
        'Hodan',
        'Hodman',
        'Hogol',
        'Hoobaan',
        'Hoodo',
        'Hoombarro',
        'Hufan',
        'Huryo',
        'Idil',
        'Idilo',
        'Idman',
        'Ifrax',
        'Iftiin',
        'Iftin',
        'Iido',
        'Iimaan',
        'Ikraan',
        'Ilays',
        'Ilkaag',
        'Ilroon',
        'Ilwaad',
        'Ilwad',
        'Indhadeeq',
        'Indhawroon',
        'Intisaar',
        'Iqlaas',
        'Iqra',
        'Ishaaro',
        'Isir',
        'Ismahaan',
        'Ismoog',
        'Isniino',
        'Istaahil',
        'Istar',
        'Istarliin',
        'Jalaqsan',
        'Jamaad',
        'Jamiila',
        'Jamilah',
        'Jawaahir',
        'Jeegaan',
        'Jimco',
        'Jinnow',
        'Johorad',
        'Johro',
        'Joogdheer',
        'Kaaba',
        'Kaad',
        'Kaadsoon',
        'Kaafiya',
        'Kaafiyo',
        'Kaaha',
        'Kaaho',
        'Kafeeyo',
        'Kaltuun',
        'Karuur',
        'Khaali',
        'Khadiija',
        'Khadiijo',
        'Khadro',
        'Khaladla�',
        'Khaladla',
        'Khayrto',
        'Kifaayo',
        'Kiin',
        'Kinsi',
        'Koos',
        'Korraad',
        'Kutubey',
        'Laaca',
        'Ladan',
        'Leexo',
        'Leylo',
        'Libaxo',
        'Libin',
        'Luul',
        'Maandeeq',
        'Maano',
        'Maceey',
        'Macey',
        'Magool',
        'Malabo',
        'Markabo',
        'Marwo',
        'Maryan',
        'Meelaaney',
        'Miido',
        'Milgo',
        'Miski',
        'Mulaaxo',
        'Mulki',
        'Mullaaxo',
        'Muraayo',
        'Muriyo',
        'Murriyo',
        'Muslimo',
        'Muumino',
        'Muxubo',
        'Naadiyo',
        'Naado',
        'Naciimo',
        'Nadiifo',
        'Nafiso',
        'Nagaad',
        'Nagaado',
        'Nagan',
        'Naqo',
        'Naruuro',
        'Nasteexo',
        'Nawaal',
        'Nimco',
        'Nuuro',
        'Nuurto',
        'Ogaal',
        'Oriyo',
        'Qaafo',
        'Qaayaweyn',
        'Qaladla�',
        'Qaladlo',
        'Qalanjo',
        'Qamar',
        'Qani',
        'Qarad',
        'Qoordheer',
        'Qoran',
        'Qorraxo',
        'Quman',
        'Qumman',
        'Raagsan',
        'Raaliyo',
        'Raalliyo',
        'Raaqiyo',
        'Raaxo',
        'Rako',
        'Rakuubo',
        'Raxiimo',
        'Raxmo',
        'Raydhabo',
        'Rihana',
        'Roobo',
        'Roon',
        'Rooxo',
        'Rummaan',
        'Ruqiyo',
        'Ruun',
        'Saado',
        'Saafi',
        'Saaqa',
        'Sabaad',
        'Sabtiyo',
        'Sacdiya',
        'Sacdiyo',
        'Sagal',
        'Sahwiyo',
        'Salaado',
        'Saluugla�',
        'Saluugla',
        'Samawado',
        'Samiira',
        'Samiiro',
        'Sareedo',
        'Sareeya',
        'Sarreeyo',
        'Saruuro',
        'Saxansaxo',
        'Saxarla�',
        'Saxarla',
        'Seynab',
        'Seyruuq',
        'Shaadiro',
        'Shacni',
        'Shahmaad',
        'Shamado',
        'Shamis',
        'Shamso',
        'Shankaroon',
        'Shankarroon',
        'Shaqlan',
        'Shariifo',
        'Sheegan',
        'Shifo',
        'Shoobo',
        'Shukri',
        'Shumeey',
        'Shumey',
        'Shuun',
        'Sifaad',
        'Siman',
        'Sindiya',
        'Siraad',
        'Siteey',
        'Sitey',
        'Soohan',
        'Sowda',
        'Subax',
        'Subeedo',
        'Subkan',
        'Sucaad',
        'Sucdi',
        'Suleekho',
        'Sulubo',
        'Sulugla',
        'Sundus',
        'Sureer',
        'Suuban',
        'Suubban',
        'Taajiro',
        'Tagsan',
        'Taliso',
        'Tanaad',
        'Tawllan',
        'Tigaad',
        'Timiro',
        'Tiriig',
        'Tisqaad',
        'Toolmoon',
        'Toosan',
        'Tooxey',
        'Tusmo',
        'Ubax',
        'Ubbolacag',
        'Udgoon',
        'Ugaaso',
        'Ugbaad',
        'Ugbad',
        'Ulasan',
        'Umal',
        'Umulkheyr',
        'Wacan',
        'Wanaag',
        'Wardo',
        'Warfog',
        'Waris',
        'Warl�',
        'Warla�',
        'Warmoog',
        'Warroon',
        'Warsan',
        'Wiilo',
        'Xaadsan',
        'Xaali',
        'Xabiibo',
        'Xaddiyo',
        'Xadiyo',
        'Xaliimo',
        'Xalwo',
        'Xamaro',
        'Xamdi',
        'Xamso',
        'Xanaan',
        'Xareedo',
        'Xiddo',
        'Xiisaan',
        'Xinbilo',
        'Xirsiyo',
        'Xoriyo',
        'Xorriyo',
        'Xukun',
        'Xulbado',
        'Xurmo',
        'Yaasmiin',
        'Yaryaro',
        'Yusur',
        'Yuusa',
        'Zaynab',
    ];
    {
        if (type === 1) {
            names = sample(nm2);
        } else {
            names = sample(nm1);
        }
        return names;
    }
}
