import { sample } from 'lodash';

export default function kazakhs() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Abai',
        'Ablai',
        'Abzal',
        'Achmedjan',
        'Adil',
        'Aidos',
        'Aidyn',
        'Akhmet',
        'Akmetzhan',
        'Alen',
        'Alibek',
        'Alibi',
        'Almas',
        'Amanet',
        'Amir',
        'Aniyar',
        'Ardager',
        'Arman',
        'Askar',
        'Assyl',
        'Assylhan',
        'Ayan',
        'Ayat',
        'Azamat',
        'Bakhytzhan',
        'Baltabek',
        'Batyrkhan',
        'Baurzhan',
        'Beibitzhan',
        'Bekbolat',
        'Bekzhan',
        'Bolat',
        'Camran',
        'Daniar',
        'Daniyar',
        'Daniyarbek',
        'Dastan',
        'Daulet',
        'Dauren',
        'Dias',
        'Eric',
        'Erkin',
        'Ershat',
        'Erzhan',
        'Fauske',
        'Fomenko',
        'Garri',
        'Hojanias',
        'Iliyas',
        'Iskander',
        'Jean',
        'Kairat',
        'Kapan',
        'Kemhebek',
        'Kenes',
        'Khazretgali',
        'Kholmatzhon',
        'Kuanysh',
        'Kuanyshbek',
        'Madi',
        'Madiyar',
        'Magjan',
        'Marat',
        'Marlen',
        'Maulen',
        'Medet',
        'Mukhametkali',
        'Murat',
        'Nariman',
        'Nazer',
        'Nurbek',
        'Nurbolat',
        'Nurjigit',
        'Nurlan',
        'Nursultan',
        'Nurzhan',
        'Olzhas',
        'Oraz',
        'Rasul',
        'Ravil',
        'Ruslan',
        'Rustam',
        'Rustem',
        'Saken',
        'Samat',
        'Serik',
        'Serikbek',
        'Sultan',
        'Tahir',
        'Tair',
        'Talgat',
        'Taras',
        'Temirzhan',
        'Timour',
        'Turlan',
        'Yedil',
        'Yeldos',
        'Yerbol',
        'Yerbolat',
        'Yerik',
        'Yermek',
        'Yerzhan',
        'Zhanbolat',
        'Zhandos',
    ];
    const nm2 = [
        'Ademi',
        'Agila',
        'Aiaulym',
        'Aibala',
        'Aibanu',
        'Aibarsha',
        'Aida',
        'Aidana',
        'Aiganim',
        'Aigerim',
        'Aigoul',
        'Aigul',
        'Aikorkem',
        'Aim',
        'Aiman',
        'Aimgul',
        'Aimzhan',
        'Aina',
        'Ainagul',
        'Ainash',
        'Ainur',
        'Ainura',
        'Aisana',
        'Aisara',
        'Aisaule',
        'Aiselu',
        'Aisha',
        'Aishagul',
        'Aishat',
        'Aisulu',
        'Aizada',
        'Aizhamal',
        'Aizhan',
        'Aizharkyn',
        'Ajar',
        'Akbota',
        'Akjamal',
        'Akkenje',
        'Akmaral',
        'Aksamal',
        'Aktolkin',
        'Aktoty',
        'Alaphia',
        'Albina',
        'Alfia',
        'Alia',
        'Aliya',
        'Alma',
        'Altingul',
        'Altyn',
        'Altynai',
        'Alua',
        'Amangul',
        'Amina',
        'Anar',
        'Anargul',
        'Aquanika',
        'Arai',
        'Arailym',
        'Aray',
        'Araylim',
        'Aru',
        'Arujan',
        'Aruzhan',
        'Asel',
        'Asem',
        'Asemgul',
        'Asil',
        'Asiya',
        'Assel',
        'Assem',
        'Asyl',
        'Asylgul',
        'Auken',
        'Ayagoz',
        'Ayajan',
        'Ayazhan',
        'Ayia-Napa',
        'Aziza',
        'Bakyt',
        'Balbike',
        'Balkiya',
        'Balym',
        'Balzhan',
        'Balziya',
        'Banu',
        'Batima',
        'Bayan',
        'Bazargul',
        'Bibigul',
        'Bibinur',
        'Binagurung',
        'Bota',
        'Botagoz',
        'Botakoz',
        'Damilia​',
        'Damira',
        'Dana',
        'Danagul',
        'Daniya',
        'Dariga',
        'Dariya',
        'Diana',
        'Didar',
        'Didara',
        'Dilara',
        'Dilda',
        'Dilnara',
        'Dilya',
        'Dilyara',
        'Dina',
        'Dinara',
        'Enlik',
        'Enlik ',
        'Erke',
        'Erkejan',
        'Farida',
        'Fariza',
        'Fatiha',
        'Fatima',
        'Galiya',
        'Gaukhar',
        'Gaziza',
        'Gul',
        'Gulayim',
        'Gulbahram',
        'Gulbanu',
        'Gulbarshin',
        'Guldana',
        'Guldaria',
        'Guldariga',
        'Gulfiya',
        'Gulim',
        'Guljaina',
        'Guljan',
        'Guljazira',
        'Gulmarzhan',
        'Gulmira',
        'Gulnaz',
        'Gulnur',
        'Gulsara',
        'Gulsezim',
        'Gulshaim',
        'Gulshat',
        'Gulsim',
        'Gulzada',
        'Gulziya',
        'Hadisha',
        'Halila',
        'Halima',
        'Hamida',
        'Hanifa',
        'Hanshayim',
        'Hanym',
        'Hatima',
        'Iltipat',
        'Inabat',
        'Indira',
        'Inju',
        'Inkar',
        'Irada',
        'Jadyra',
        'Jaina',
        'Jamal',
        'Jamilya',
        'Janar',
        'Janat',
        'Jangul',
        'Janiya',
        'Janna',
        'Jansaule',
        'Jansaya',
        'Jansulu',
        'Jarkin',
        'Jarkynai',
        'Jayna',
        'Jazira',
        'Jean',
        'Jibek',
        'Juldiz',
        'Juldyz',
        'Jumagul',
        'Jumakiz',
        'Jupar',
        'Kamila',
        'Kamshat',
        'Karima',
        'Karina',
        'Kenje',
        'Klara',
        'Kulimjan',
        'Kulyan',
        'Kumis',
        'Kunsulu',
        'Leyla',
        'Luiza',
        'Lyazzat',
        'Madina',
        'Magripa',
        'Mahabbat',
        'Maira',
        'Malika',
        'Manshuk',
        'Maqpal',
        'Maral',
        'Marhabbat',
        'Maria',
        'Mariam',
        'Mariyam',
        'Marjan',
        'Marzhan',
        'Maya',
        'Meruert',
        'Meyirgul',
        'Meyramgul',
        'Mira',
        'Mirgul',
        'Munira',
        'Nagima',
        'Nasibeli',
        'Nazgul',
        'Nazim',
        'Nazira',
        'Nazym',
        'Nurai',
        'Nurbike',
        'Nurgul',
        'Nuriya',
        'Nurjamal',
        'Nurjanat',
        'Nursulu',
        'Nurziya',
        'Oryngul',
        'Perizat',
        'Qalamqas',
        'Qalima',
        'Qaljan',
        'Qamaria',
        'Qaragoz',
        'Qarashash',
        'Qarlygash',
        'Qazyna',
        'Qundyz',
        'Quralai',
        'Qymbat',
        'Rabiga',
        'Raikhan',
        'Raisa',
        'Raushan',
        'Raya',
        'Raygul',
        'Raykhan',
        'Raziya',
        'Rita',
        'Rizagul',
        'Roza',
        'Sabira',
        'Sagida',
        'Sagimgul',
        'Saida',
        'Sakypjamal',
        'Salima',
        'Saltanat',
        'Samal',
        'Sandigul',
        'Sandugash',
        'Sara',
        'Saule',
        'Saya',
        'Sayagul',
        'Sayra',
        'Senim',
        'Sezim',
        'Shahzada',
        'Shakira',
        'Shakizat',
        'Shara',
        'Shinar',
        'Sholpan',
        'Shynar',
        'Sulu',
        'Sulujan',
        'Sulushash',
        'Sveta',
        'Symbat',
        'Talshin',
        'Tamara',
        'Tansholpan',
        'Tanzilya',
        'Tatti',
        'Togjan',
        'Tolganai',
        'Tomiris',
        'Tursin',
        'Tursinai',
        'Tursingul',
        'Uazira',
        'Ulbala',
        'Ulbolsyn',
        'Uldana',
        'Uljan',
        'Umit',
        'Umitjan',
        'Venera',
        'Zaida',
        'Zamira',
        'Zamzagul',
        'Zarina',
        'Zaure',
        'Zauresh',
        'Zemfira',
        'Zere',
        'Zeyne',
        'Zeynep',
        'Zlika',
        'Zlikha',
        'Zoya',
        'Zubaira',
        'Zukhra',
        'Zulfia',
    ];
    const nm3 = [
        'Abaiev',
        'Ablaiev',
        'Abzalev',
        'Achmedjanev',
        'Adilev',
        'Aidosev',
        'Aidynev',
        'Akhmetev',
        'Akmetzhanev',
        'Alenev',
        'Alibekev',
        'Alibiev',
        'Almasev',
        'Amanetev',
        'Amirev',
        'Aniyarev',
        'Ardagerev',
        'Armanev',
        'Askarev',
        'Assylev',
        'Assylhanev',
        'Ayanev',
        'Ayatev',
        'Azamatev',
        'Bakhytzhanev',
        'Baltabekev',
        'Batyrkhanev',
        'Baurzhanev',
        'Beibitzhanev',
        'Bekbolatev',
        'Bekzhanev',
        'Bolatev',
        'Camranev',
        'Daniarev',
        'Daniyarev',
        'Daniyarbekev',
        'Dastanev',
        'Dauletev',
        'Daurenev',
        'Diasev',
        'Ericev',
        'Erkinev',
        'Ershatev',
        'Erzhanev',
        'Fauskeev',
        'Fomenkoev',
        'Garriev',
        'Hojaniasev',
        'Iliyasev',
        'Iskanderev',
        'Jeanev',
        'Kairatev',
        'Kapanev',
        'Kemhebekev',
        'Kenesev',
        'Khazretgaliev',
        'Kholmatzhonev',
        'Kuanyshev',
        'Kuanyshbekev',
        'Madiev',
        'Madiyarev',
        'Magjanev',
        'Maratev',
        'Marlenev',
        'Maulenev',
        'Medetev',
        'Mukhametkaliev',
        'Muratev',
        'Narimanev',
        'Nazerev',
        'Nurbekev',
        'Nurbolatev',
        'Nurjigitev',
        'Nurlanev',
        'Nursultanev',
        'Nurzhanev',
        'Olzhasev',
        'Orazev',
        'Rasulev',
        'Ravilev',
        'Ruslanev',
        'Rustamev',
        'Rustemev',
        'Sakenev',
        'Samatev',
        'Serikev',
        'Serikbekev',
        'Sultanev',
        'Tahirev',
        'Tairev',
        'Talgatev',
        'Tarasev',
        'Temirzhanev',
        'Timourev',
        'Turlanev',
        'Yedilev',
        'Yeldosev',
        'Yerbolev',
        'Yerbolatev',
        'Yerikev',
        'Yermekev',
        'Yerzhanev',
        'Zhanbolatev',
        'Zhandos',
        'Abaiov',
        'Ablaiov',
        'Abzalov',
        'Achmedjanov',
        'Adilov',
        'Aidosov',
        'Aidynov',
        'Akhmetov',
        'Akmetzhanov',
        'Alenov',
        'Alibekov',
        'Alibiov',
        'Almasov',
        'Amanetov',
        'Amirov',
        'Aniyarov',
        'Ardagerov',
        'Armanov',
        'Askarov',
        'Assylov',
        'Assylhanov',
        'Ayanov',
        'Ayatov',
        'Azamatov',
        'Bakhytzhanov',
        'Baltabekov',
        'Batyrkhanov',
        'Baurzhanov',
        'Beibitzhanov',
        'Bekbolatov',
        'Bekzhanov',
        'Bolatov',
        'Camranov',
        'Daniarov',
        'Daniyarov',
        'Daniyarbekov',
        'Dastanov',
        'Dauletov',
        'Daurenov',
        'Diasov',
        'Ericov',
        'Erkinov',
        'Ershatov',
        'Erzhanov',
        'Fauskeov',
        'Fomenkoov',
        'Garriov',
        'Hojaniasov',
        'Iliyasov',
        'Iskanderov',
        'Jeanov',
        'Kairatov',
        'Kapanov',
        'Kemhebekov',
        'Kenesov',
        'Khazretgaliov',
        'Kholmatzhonov',
        'Kuanyshov',
        'Kuanyshbekov',
        'Madiov',
        'Madiyarov',
        'Magjanov',
        'Maratov',
        'Marlenov',
        'Maulenov',
        'Medetov',
        'Mukhametkaliov',
        'Muratov',
        'Narimanov',
        'Nazerov',
        'Nurbekov',
        'Nurbolatov',
        'Nurjigitov',
        'Nurlanov',
        'Nursultanov',
        'Nurzhanov',
        'Olzhasov',
        'Orazov',
        'Rasulov',
        'Ravilov',
        'Ruslanov',
        'Rustamov',
        'Rustemov',
        'Sakenov',
        'Samatov',
        'Serikov',
        'Serikbekov',
        'Sultanov',
        'Tahirov',
        'Tairov',
        'Talgatov',
        'Tarasov',
        'Temirzhanov',
        'Timourov',
        'Turlanov',
        'Yedilov',
        'Yeldosov',
        'Yerbolov',
        'Yerbolatov',
        'Yerikov',
        'Yermekov',
        'Yerzhanov',
        'Zhanbolatov',
        'Zhandos',
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
