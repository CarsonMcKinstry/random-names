import { sample } from 'lodash';

export default function sumerians() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Aanepada',
        'Aanepada',
        'Abdi-arah',
        'Abi-eshu',
        'Abiditan',
        'Abiyamuta',
        'Abuwaqar',
        'Ad-mat-ili',
        'Adad',
        'Adad',
        'Adda-kalla',
        'Addi-liblut',
        'Agga',
        'Agga',
        'Ah-kalla',
        'Aham-nishi',
        'Ahatiwaqrat',
        'Ahi-shagish',
        'Ahikibani',
        'Ahu-shina',
        'Ahum',
        'Ahum-waqar',
        'Ahuratum',
        'Akalamdug',
        'Akalamdug',
        'Akiya',
        'Alalngar',
        'Ali-ellati',
        'Allala',
        'Alulim',
        'Ama-sin',
        'Amar-Sin',
        'Amar-Sin',
        'Amar-Suena',
        'Ammi-ditana',
        'Amnanu',
        'An',
        'Anba',
        'Anbu',
        'Anu',
        'Anunnaki',
        'Anunnaki',
        'Apil-ashnan',
        'Apil-ilishu',
        'Apilkin',
        'Apilsha',
        'Apiyatum',
        'Appanili',
        'Aradegi',
        'Aradlugal',
        'Arammadara',
        'Argandea',
        'Arwium',
        'Ashi-qurud',
        'Ashmadu',
        'Askur-addu',
        "Assur-na'da",
        'Assur-susuli',
        'Assur-taklaku',
        'Atab',
        'Atra-hasis',
        'Atraharsis',
        'Atraharsis',
        'Awil-aya',
        'Awil-ishtar',
        'Awil-shamash',
        'Awil-sin',
        'Awiliya',
        'Ayar-ilum',
        'Baba',
        'Babati',
        'Babum',
        'Bakshishum',
        'Balih',
        'Balulu',
        'Baqqanum',
        'Barsal-nuna',
        'Bazi',
        'Belanum',
        'Beli-Ashared',
        'Belit-Sheri',
        'Belit-Sheri',
        'Belshunu',
        'Buhazum',
        'Bunu-ishtar',
        'Bur-Suen',
        'Burrukam',
        'Buttatum',
        'Dada',
        'Dadanum',
        'Dadasig',
        'Dadazig',
        'Dagon',
        'Dagon',
        'Damqi-ilishu',
        'Damuzi',
        'Damuzi',
        'Dazuzum',
        'Ditanu',
        'Dudu',
        'Dumuzid',
        'Dungi',
        'Dungi',
        'Duququm',
        'Dur-rimush',
        'Ea-nasir',
        'Eanatum',
        'Eanatum',
        'Eannatum',
        'Eannatum',
        'Eikuppi-adad',
        'Ekur',
        'Ekur',
        'Ellu-mushu',
        'Elulu',
        'Eluti',
        'En-me-barage-si',
        'En-me-nuna',
        'En-men-dur-ana',
        'En-men-gal-ana',
        'En-men-lu-ana',
        'En-nun-tarah-ana',
        'En-shag-kush-ana',
        'En-sipad-zid-ana',
        'En-tarah-ana',
        'Endukagga',
        'Endukagga',
        'Enki',
        'Enki',
        'Enkidu',
        'Enkidu',
        'Enlil',
        'Enlil',
        'Enlil-bani',
        'Enlil-ennam',
        'Enlil-kurgalani',
        'Enlil-zi-shagal',
        'Enmebaragisi',
        'Enmebaragisi',
        'Enmerkar',
        'Enmerkar',
        'Enmul',
        'Enmul',
        'Ennam-belum',
        'Ennugi',
        'Ennugi',
        'Entana',
        'Erra-imitti',
        'Eshtar-muti',
        'Etana',
        'Etana',
        'Etel-pi-sharrim',
        'Etel-pisha',
        'Etirum',
        'Etum',
        'Gazualum',
        'Gilgamesh',
        'Gimil-lum',
        'Gimil-ninurta',
        'Gudea',
        'Gudea',
        'Hablum',
        'Hadanish',
        'Hanish',
        'Hanish',
        'Heana',
        'Hudu-libbi',
        'Humbaba',
        'Humbaba',
        'Humwawa',
        'Humwawa',
        'Hunhalbida',
        'Huttupum',
        'Ibal-pi-el',
        'Ibbi-Suen',
        'Ibbi-adad',
        'Ibbi-shahan',
        'Ibi',
        'Ibi-Sin',
        'Ibi-Sin',
        'Iblinum',
        'Ibnatum',
        'Ibni-amurru',
        'Ibranum',
        'Iddin-Dagan',
        'Iddin-enlil',
        'Iddin-ilum',
        'Iddin-ninshubur',
        'Igmilum',
        'Ikuppi-adad',
        'Ila-kabkabu',
        'Ilanum',
        'Ili-alum',
        'Ili-idinnam',
        'Ili-iqisham',
        'Ilku',
        'Illuratum',
        'Ilshu-abushu',
        'Ilshubani',
        'Iltasadum',
        'Ilu-asu',
        'Ilulu',
        'Ilum-aha',
        'Imdi-ilum',
        'Imgua',
        'Imgur-sin',
        'Imi',
        'Inbusha',
        'Inim-shara',
        'Inkishush',
        'Iphur-kishi',
        'Ipqatum',
        'Ipqu-adad',
        'Ipqu-annunitum',
        'Ipqu-aya',
        'Iptiyamuta',
        'Ir-Nanna',
        'Irarum',
        'Irgigi',
        'Irra',
        'Irrara',
        'Ishbi-Erra',
        'Ishhi-addu',
        'Ishme-Dagan',
        'Ishme-Dagan',
        'Ishme-Ea',
        'Ishme-Shamash',
        'Ishme-adad',
        'Ishme-dagan',
        'Ishme-karab',
        'Ishtup-sin',
        'Ishu-Il',
        'Ishullana',
        'Iter-pisha',
        'Jushur',
        'Kalbum',
        'Kalibum',
        'Kalumum',
        'Kikuid',
        'Ku-enlila',
        'Ku-inanna',
        'Ku-ningal',
        'Kubburum',
        'Kuda',
        'Kudiya',
        'Kug-Bau',
        'Kullassina-bel',
        'Kur',
        'Kurhitti-mushtesher',
        'Kurum',
        'Kurumtum',
        'Kuwari',
        "La'um",
        "La-ba'shum",
        'La-erabum',
        'Laliya',
        'Lamusa',
        'Limer',
        'Lipit-Enlil',
        'Lipit-Eshtar',
        'Lipit-ea',
        'Lipit-enlil',
        'Lipit-ishtar',
        'Lipit-tishpak',
        'Lu-amar-suenaka',
        'Lu-bau',
        'Lu-dingira',
        'Lu-enlila',
        'Lu-inana',
        'Lu-nanna',
        'Lu-nin-ilduma',
        'Lu-ninurta',
        'Lu-shalim',
        'Ludari',
        'Luga',
        'Lugal-azida',
        'Lugal-kinishe-dudu',
        'Lugal-kitun',
        'Lugal-ure',
        'Lugal-urudu',
        'Lugal-zage-si',
        'Lugal-zaggisi',
        'Lugal-zaggisi',
        'Lugalbanda',
        'Lugalkam',
        'Lugalngu',
        'Lugatum',
        'Lugulbanda',
        'Lugulbanda',
        'Luninni',
        'Mageshgetil',
        'Malgum-liblut',
        'Mamagal',
        'Man-ishtishu',
        'Mannum-ki-iliya',
        'Mar-iltum',
        'Marduk-asir',
        'Mari-ersetim',
        'Maru-yatum',
        'Mashda',
        'Mattaki',
        'Melem-Kish',
        'Melem-ana',
        'Men-nuna',
        'Mesanepada',
        'Mesanepada',
        'Mesannipadda',
        'Mesannipadda',
        'Mesh-Ane-pada',
        'Mesh-he',
        'Mesh-ki-ang-Nuna',
        'Mesi-ilum',
        'Meskalam-dug',
        'Meskalam-dug',
        'Meskalamdug',
        'Mezizi',
        'Milki-la-el',
        'Minninum',
        'Mukannishum',
        'Munawirtum',
        'Mut-kabid',
        'Mutu-bisir',
        'Nabi-enlil',
        'Nabi-sin',
        'Namhu',
        'Nammahani',
        'Namtar',
        'Namtar',
        'Namzu',
        'Nangishlishma',
        'Nanna',
        'Nanna-mansum',
        'Nanna-sig',
        'Nanni',
        'Nanum',
        'Naram-Sin',
        'Naram-sin',
        'Narubtum',
        'Nasha',
        'Nawirum-ili',
        'Nergal',
        'Nergal',
        'Neti',
        'Nidnatum',
        'Nin-unumun-ki-ag',
        'Ninazu',
        'Ninazu',
        'Ningirsu',
        'Ningizzida',
        'Ninurta',
        "Ninurta-ra'im-zerim",
        'Nur-ishtar',
        'Nur-kubi',
        'Nur-shamash',
        'Palusum',
        'Pirhum',
        'Pu-balum',
        'Pu-dagan',
        'Puannum',
        'Pushu-ken',
        'Puzrish-dagan',
        'Puzu',
        'Puzur-Amurri',
        'Puzur-Amurri',
        'Puzur-Nirah',
        'Puzur-Suen',
        'Puzur-assur',
        'Puzur-erra',
        'Puzur-ili',
        'Puzur-ishtar',
        'Qisht-ea',
        'Qishti-ilabrat',
        'Rabi-sillashu',
        'Rigiljo',
        'Rigiljo',
        'Rish-shamash',
        'Sabium',
        'Sabum',
        'Sagil-zimu',
        'Samsi-addu',
        'Samum',
        'Samuqan',
        'Samuqan',
        'Sangasu',
        'Sangasu',
        'Sargon',
        'Ses-kalla',
        'Shalanum',
        'Shalim-tehhushu',
        'Shallurum',
        'Shamash-andulli',
        'Shamash-gamil',
        'Shamash-hazir',
        'Shamash-nasir',
        'Shamshi-addu',
        'Shar-kali-sharri',
        'Sharrum-iter',
        'Shatamurrim',
        'Shep-sin',
        'Sherum-ili',
        'Shesh-kalla',
        'Shu-Durul',
        'Shu-Ilishu',
        'Shu-Suen',
        'Shu-bad',
        'Shu-mama',
        'Shubnalu',
        'Shulgi',
        'Shullat',
        'Shulpae',
        'Shulpae',
        'Shummanla-shamash',
        'Shuqallilum',
        'Sidu',
        'Sig-ersetim',
        'Silli-emah',
        'Silli-ishtar',
        'Silli-shamash',
        'Silli-sin',
        'Sillush-dagan',
        'Sin',
        'Sin-alshu',
        'Sin-gamil',
        'Sin-idinnam',
        'Sin-imgurani',
        'Sin-ishmeni',
        'Sin-kashid',
        'Sin-lidish',
        'Sin-magir',
        'Sin-mushtal',
        'Sin-nadin-shumi',
        'Sin-nasir',
        'Sinnashi',
        'Sisuthros',
        'Sisuthros',
        'Stanley',
        'Suen-magir',
        'Sumalika',
        'Sumu-abum',
        'Sumu-la-el',
        'Susuda',
        'Taribat-sin',
        'Taribatum',
        'Taribum',
        'Tirigan',
        'Tizqar',
        'Tubityamuta',
        'Tuge',
        'Ubar-sin',
        'Ubara-Tutu',
        'Ubara-Tutu',
        'Ubarum',
        'Udama',
        'Udish',
        'Udul-kalama',
        'Ugazum',
        'Undalulu',
        'Unzi',
        'Ur-Nammu',
        'Ur-Nammu',
        'Ur-Ninurta',
        'Ur-Nungal',
        'Ur-Zababa',
        'Ur-du-kuga',
        'Ur-dumizida',
        'Ur-gigir',
        'Ur-gula',
        'Ur-lama',
        'Ur-ningin',
        'Ur-shubula',
        'Ur-shulpae',
        'Urshanabi',
        'Urur',
        'Uselli',
        'Usi-watar',
        'Ut-napishtim',
        'Ut-napishtim',
        'Uta-misharam',
        'Utu',
        'Utu',
        'Utul-ishtar',
        'Warad-enlil',
        'Warad-iliya',
        'Warad-ishtar',
        'Warad-kubi',
        'Warad-murrim',
        'Warad-shamash',
        'Warad-sin',
        'Warassuni',
        'Wardum',
        'Watrum',
        'Wusum-beli',
        'Xisuthros',
        'Xisuthros',
        'Yaggit-lim',
        'Yahdun-lim',
        'Yahurum',
        'Yamquzzuhalamma',
        'Yarim-lim',
        'Yarlagab',
        'Yarlaganda',
        'Yarlangab',
        'Yashub-yahad',
        'Yasmah-addu',
        'Yassur-addu',
        'Yayatum',
        'Zababa-il',
        'Zamaranum',
        'Zambiya',
        'Zamug',
        'Zaninum',
        'Zarlagab',
        'Zimri-dagan',
        'Zimudar',
        'Ziusudra',
        'Ziyatum',
        'Zizi',
        'Zizi of Mari',
        'Zummabu',
        'Zuqaqip',
        'Zuzu',
    ];
    const nm2 = [
        'Abi-simti',
        'Aea',
        'Aea',
        'Ahassunu',
        'Ahatiwaqrat',
        'Ahunatum',
        'Ali-ahhusha',
        'Alittum',
        'Amare',
        'Amarenzu',
        'Amarezen',
        'Amarsin',
        'Amurritum',
        'Antum',
        'Antum',
        'Anu',
        'Anu',
        'Anunit',
        'Aruru',
        'Aruru',
        'Arwi-a',
        'Asharru',
        'Asharru',
        'Ashusikildigir',
        'Ashusikildigir',
        'Aya',
        'Aya',
        'Bau',
        'Bauninsheg',
        'Belessunu',
        'Beletum',
        'Bikku-lum',
        'Bittatum',
        'Daqqartum',
        'Delondra',
        'Delondra',
        'Ealamassi',
        'Elutil',
        'En-hedu-anna',
        'En-hedu-anna',
        'Enanatuma',
        'Enanatuma',
        'Enheduana',
        'Ereshkigal',
        'Ereshkigal',
        'Eshargamelat',
        'Eulli',
        'Gemekala',
        'Gemekala',
        'Gemeshega',
        'Gesthinanna',
        'Habannatum',
        'Humusi',
        'Hunabatum',
        'Iltani',
        'Ilusha-hegal',
        'Inanna',
        'Inanna',
        'Irkalla',
        'Irkalla',
        'Ishtar',
        'Ishtar-belessa',
        'Ishtar-gamelat',
        'Ishtar-ibbi',
        'Ishtar-rabi-at',
        'Istar',
        'Kammani',
        'Kishar',
        'Ku-aya',
        'Lahamu',
        'Lilith',
        'Lilith',
        'Liwwir-esagil',
        'Lugalme',
        'Lugulbanda',
        'Lugulbanda',
        'Mammetum',
        'Mammetum',
        'Manatum',
        'Meania',
        'Mesh-he',
        'Munawirtum',
        'Nakurtum',
        'Nammu',
        'Nanna',
        'Nanna',
        'Nigbau',
        'Nigbau',
        'Nin',
        'Nin-dada',
        'Nin-imma',
        'Nin-kagina',
        'Ninbanda',
        'Ninbanda',
        'Nindukugga',
        'Nindukugga',
        'Ninedinni',
        'Ningal',
        'Ningal',
        'Ningikuga',
        'Ninhursag',
        'Ninhursag',
        'Ninil',
        'Ninki',
        'Ninki',
        'Ninkurra',
        'Ninlil',
        'Ninlil',
        'Ninsar',
        'Ninshubur',
        'Ninshuel',
        'Ninsun',
        'Ninsun',
        'Nintuda',
        'Nisaba',
        'Nisaba',
        'Nuratum',
        'Puabi',
        'Puabi',
        'Puzur-Nirah',
        'Radjni',
        'Radjni',
        'Sabit',
        'Sabit',
        'Sapurtum',
        'Semiramis',
        'Shagshag',
        'Shagshag',
        'Sharrat-sippar',
        'Shat-sin',
        'Shatu-murrim',
        'Shiptu',
        'Shub-ad',
        'Shub-ad',
        'Shubure',
        'Shubure',
        'Siduri',
        'Siduri',
        'Silili',
        'Silili',
        'Sin-nada',
        'Summirat-ishtar',
        'Tabni-ishtar',
        'Takurtum',
        'Taram-uram',
        'Tiamat',
        'Ummi-waqrat',
        'Urbau',
        'Urnina',
        'Uttu',
        'Yadidatum',
        'Zimu',
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
