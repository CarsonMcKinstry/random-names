import { sample } from 'lodash';

export default function croatians() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Andrija',
        'Ante',
        'Adam',
        'Aleksandar',
        'Alan',
        'Antonio',
        'Branimir',
        'Boris',
        'Branko',
        'Bruno',
        'Božo',
        'Božidar',
        'Branislav',
        'Budimir',
        'Benjamin',
        'Cvjetko',
        'Dario',
        'Darko',
        'Damir',
        'Davor',
        'Dino',
        'Danijel',
        'David',
        'Denis',
        'Dominik',
        'Domagoj',
        'Duje',
        'Dražen',
        'Dubravko',
        'Dinko',
        'Dalibor',
        'Dejan',
        'Đuro',
        'Emanuel',
        'Ernest',
        'Emil',
        'Eduard',
        'Edvard',
        'Filip',
        'Franjo',
        'Florijan',
        'Gabrijel',
        'Goran',
        'Gordan',
        'Hrvoje',
        'Igor',
        'Ivan',
        'Ivo',
        'Ivica',
        'Imanuel',
        'Ilija',
        'Josip',
        'Jan',
        'Juraj',
        'Jakov',
        'Jasmin',
        'Karlo',
        'Krešimir',
        'Kristijan',
        'Luka',
        'Lucijan',
        'Ljubomir',
        'Ljudevit',
        'Mario',
        'Marko',
        'Mirko',
        'Matej',
        'Martin',
        'Marin',
        'Mladen',
        'Mislav',
        'Miroslav',
        'Matija',
        'Marijan',
        'Nikola',
        'Nenad',
        'Neven',
        'Oliver',
        'Petar',
        'Pavao',
        'Patrik',
        'Renato',
        'Robert',
        'Stjepan',
        'Silvije',
        'Saša',
        'Siniša',
        'Šime',
        'Tomislav',
        'Tihomir',
        'Toni',
        'Teo',
        'Velimir',
        'Vedran',
        'Viktor',
        'Vinko',
        'Vladimir',
        'Vanja',
        'Vedran',
        'Zdenko',
        'Zdravko',
        'Zvonimir',
        'Zvonko',
        'Zlatko',
        'Zoran',
        'Žarko',
        'Željko',
    ];
    const nm2 = [
        'Anamarija',
        'Ana',
        'Anastazija',
        'Anica',
        'Andreja',
        'Anita',
        'Antonija',
        'Anđela',
        'Anja',
        'Branka',
        'Barbara',
        'Blaženka',
        'Božica',
        'Cvijeta',
        'Danica',
        'Danijela',
        'Dijana',
        'Dora',
        'Dubravka',
        'Daria',
        'Dubravka',
        'Dorotea',
        'Đurđa',
        'Ema',
        'Ela',
        'Ena',
        'Elizabeta',
        'Eva',
        'Gabrijela',
        'Gorana',
        'Gordana',
        'Helena',
        'Hana',
        'Irena',
        'Ines',
        'Irma',
        'Ivana',
        'Izabela',
        'Jadranka',
        'Jagoda',
        'Jana',
        'Jasna',
        'Jelena',
        'Josipa',
        'Julija',
        'Katarina',
        'Klara',
        'Kristina',
        'Ksenija',
        'Kornelija',
        'Karolina',
        'Karla',
        'Lana',
        'Laura',
        'Lara',
        'Lea',
        'Lidija',
        'Lucija',
        'Leonarda',
        'Ljiljana',
        'Ljubica',
        'Marta',
        'Magdalena',
        'Marija',
        'Mia',
        'Maja',
        'Marina',
        'Martina',
        'Mateja',
        'Mirjam',
        'Mirjana',
        'Monika',
        'Nada',
        'Natalija',
        'Nevenka',
        'Nikolina',
        'Olga',
        'Petra',
        'Patricija',
        'Paula',
        'Ruža',
        'Ružena',
        'Ružica',
        'Renata',
        'Sara',
        'Sabina',
        'Sandra',
        'Sanja',
        'Stela',
        'Suzana',
        'Snježana',
        'Silvija',
        'Tea',
        'Tamara',
        'Tatjana',
        'Tina',
        'Tihana',
        'Vesna',
        'Valentina',
        'Vlatka',
        'Vanja',
        'Viktorija',
        'Veronika',
        'Vanesa',
        'Zdenka',
        'Zrinka',
        'Zlata',
        'Željka',
    ];
    const nm3 = [
        'Abramović',
        'Acinger',
        'Adamović',
        'Adžić',
        'Alajbeg',
        'Aleksić',
        'Alić',
        'Alujević',
        'Ančić',
        'Anđelić',
        'Andreškić',
        'Andrić',
        'Andrijanić',
        'Andrijašević',
        'Andrijević',
        'Anić',
        'Aničić',
        'Antić',
        'Antolić',
        'Antolović',
        'Antonijević',
        'Antunović',
        'Anušić',
        'Aračić',
        'Arambašić',
        'Arbanas',
        'Atlan',
        'Babić',
        'Bačić',
        'Badanjak',
        'Bagarić',
        'Bagić',
        'Bajamić',
        'Bajić',
        'Bajlo',
        'Bakić',
        'Baković',
        'Balaban',
        'Balen',
        'Balenović',
        'Balić',
        'Baljak',
        'Balog',
        'Ban',
        'Banić',
        'Banovac',
        'Banović',
        'Barac',
        'Barbalić',
        'Barbarić',
        'Barbor',
        'Bare',
        'Barešić',
        'Barić',
        'Baričević',
        'Barišić',
        'Bartaković',
        'Bartolić',
        'Bartolović',
        'Bartulović',
        'Barukčić',
        'Bašić',
        'Bastašić',
        'Batinić',
        'Batur',
        'Bebić',
        'Bedeković',
        'Begić',
        'Begović',
        'Bekavac',
        'Bekić',
        'Belić',
        'Beljan',
        'Belobrajdić',
        'Belošević',
        'Benčić',
        'Benić',
        'Benko',
        'Benković',
        'Bertović',
        'Bešić',
        'Bešlić',
        'Bičanić',
        'Bijelić',
        'Bikić',
        'Bilandžić',
        'Bilandžija',
        'Bilić',
        'Bilobrk',
        'Biloglav',
        'Bilonić',
        'Bionder',
        'Biondić',
        'Bišćan',
        'Biskup',
        'Bistrović',
        'Blagojević',
        'Blašković',
        'Blažeković',
        'Blažević',
        'Blažić',
        'Boban',
        'Bobić',
        'Bočina',
        'Bogdan',
        'Bogdanić',
        'Bogdanović',
        'Bogović',
        'Bojanić',
        'Bojić',
        'Boras',
        'Borić',
        'Borilović',
        'Borjanić',
        'Borojević',
        'Borovac',
        'Borović',
        'Bosak',
        'Bosanac',
        'Bošković',
        'Bosnić',
        'Bošnjak',
        'Bošnjaković',
        'Botica',
        'Bozanić',
        'Božanović',
        'Božić',
        'Božićević',
        'Božinović',
        'Bračun',
        'Bradarić',
        'Bradić',
        'Brzica',
        'Brajdić',
        'Brajković',
        'Brala',
        'Bralić',
        'Braut',
        'Brčić',
        'Brdar',
        'Brekalo',
        'Brgan',
        'Brkić',
        'Brkljačić',
        'Brković',
        'Brlek',
        'Brnabić',
        'Brnetić',
        'Brnić',
        'Brozović',
        'Brulja',
        'Brusić',
        'Bubalo',
        'Bubić',
        'Budić',
        'Budimir',
        'Bukovac',
        'Bukvić',
        'Bulat',
        'Bulić',
        'Buljan',
        'Buljubašić',
        'Bunčić',
        'Bunić',
        'Burić',
        'Burišić',
        'Buršić',
        'Bušić',
        'Butković',
        'Butorac',
        'Bazina',
        'Bužančić',
        'Buzov',
        'Čabraja',
        'Čačić',
        'Čagalj',
        'Čalić',
        'Capan',
        'Car',
        'Carević',
        'Carić',
        'Časni',
        'Čavlović',
        'Čečelja',
        'Čelina',
        'Ceranić',
        'Cesarec',
        'Čičak',
        'Čigir',
        'Cindrić',
        'Čirjak',
        'Čolak',
        'Ćolić',
        'Ćorak',
        'Čorluka',
        'Čorić',
        'Čosić',
        'Ćović',
        'Crčić',
        'Crnić',
        'Črnjak',
        'Crnković',
        'Ćuk',
        'Ćulić',
        'Čulina',
        'Čupić',
        'Curić',
        'Čurković',
        'Cvetko',
        'Cvetković',
        'Cvijanović',
        'Cvitanović',
        'Cvitković',
        'Dadić',
        'Dakić',
        'Damjanović',
        'Dasović',
        'Davidović',
        'Debeljak',
        'Dedić',
        'Dejanović',
        'Delač',
        'Delić',
        'Devčić',
        'Dević',
        'Divić',
        'Dudaš',
        'Djaković',
        'Đorđević',
        'Đukić',
        'Đurđević',
        'Đureković',
        'Đurić',
        'Đurin',
        'Đurak',
        'Đurkin',
        'Đujić',
        'Dobrić',
        'Dodig',
        'Dolenec',
        'Domazet',
        'Dominiković',
        'Domitrović',
        'Dorić',
        'Dodlek',
        'Došen',
        'Draganić',
        'Dragić',
        'Dragičević',
        'Dragojević',
        'Drašković',
        'Draženović',
        'Dražić',
        'Družeta',
        'Dubravac',
        'Dugandžić',
        'Dujić',
        'Dujmić',
        'Dujmović',
        'Dukarić',
        'Dukić',
        'Dumančić',
        'Dundović',
        'Duvnjak',
        'Džaja',
        'Erceg',
        'Ercegović',
        'Fabijanić',
        'Fabijanković',
        'Ferenčak',
        'Feretić',
        'Ferić',
        'Filičić',
        'Filipović',
        'Fotez',
        'Franić',
        'Franičević',
        'Franjić',
        'Franjković',
        'Franković',
        'Friščić',
        'Frketić',
        'Fumić',
        'Fišter',
        'Feketija',
        'Francisković',
        'Frijang',
        'Fazlić',
        'Gabrić',
        'Gajić',
        'Gajski',
        'Galić',
        'Govorčinović',
        'Gavranić',
        'Gavrilović',
        'Galjanić',
        'Galović',
        'Garić',
        'Gašljević',
        'Gaspar',
        'Gasparić',
        'Gasparović',
        'Gaus',
        'Gavran',
        'Gavrić',
        'Gavranović',
        'Glasnović',
        'Glavan',
        'Glavaš',
        'Glavić',
        'Glavica',
        'Glavinić',
        'Gledec',
        'Golub',
        'Golubić',
        'Goreta',
        'Gojak',
        'Gorički',
        'Gotal',
        'Grabar',
        'Grabovac',
        'Grabrovec',
        'Gracin',
        'Grahovac',
        'Granić',
        'Grbac',
        'Grbeša',
        'Grbić',
        'Grčić',
        'Grdenić',
        'Grdić',
        'Grđan',
        'Grdović',
        'Gregurić',
        'Gregurek',
        'Grgurić',
        'Grizelj',
        'Grubić',
        'Grubišić',
        'Grubor',
        'Grzan',
        'Gudelj',
        'Gulin',
        'Gundić',
        'Hačko',
        'Hajni',
        'Hadžić',
        'Haluzan',
        'Hanzek',
        'Hečimović',
        'Herceg',
        'Hercigonja',
        'Herman',
        'Hodak',
        'Hodžić',
        'Horvat',
        'Horvatić',
        'Hranilović',
        'Hren',
        'Hrgović',
        'Hranj',
        'Hrnjkaš',
        'Hrončić',
        'Hrsak',
        'Hrvatin',
        'Hrvojić',
        'Hrženjak',
        'Husnjak',
        'Hužjak',
        'Igrec',
        'Ilić',
        'Iličić',
        'Iskra',
        'Ivančević',
        'Ivančić',
        'Ivandić',
        'Ivanić',
        'Ivanišević',
        'Ivanušić',
        'Ivanković',
        'Ivanović',
        'Ivezić',
        'Ivić',
        'Ivković',
        'Ivošević',
        'Jagić',
        'Jagodić',
        'Jakin',
        'Jakić',
        'Jovanović',
        'Josipović',
        'Jakopović',
        'Jakovac',
        'Jaković',
        'Jakovljević',
        'Jakšić',
        'Jakus',
        'Jambrešić',
        'Jambrović',
        'Janeš',
        'Janjić',
        'Janković',
        'Jarak',
        'Jefak',
        'Jelavić',
        'Jelačić',
        'Jelčić',
        'Jelenić',
        'Jelić',
        'Jeličić',
        'Jelinić',
        'Jelušić',
        'Jerčić',
        'Jergović',
        'Jerković',
        'Jurković',
        'Jerkončić',
        'Jokić',
        'Jonjić',
        'Josić',
        'Jović',
        'Jovičić',
        'Jozić',
        'Jurilj',
        'Jug',
        'Jugović',
        'Jukić',
        'Jurak',
        'Juras',
        'Jurčević',
        'Jurčić',
        'Juretić',
        'Jurić',
        'Juričić',
        'Jurina',
        'Jurišić',
        'Jurjević',
        'Jurlina',
        'Jušić',
        'Jurakić',
        'Kadić',
        'Kalinić',
        'Kapetanović',
        'Karabatić',
        'Karabajić',
        'Karaman',
        'Karamatić',
        'Kardum',
        'Karlović',
        'Katalenić',
        'Katalinić',
        'Katavić',
        'Katušić',
        'Kavran',
        'Kekez',
        'Kelava',
        'Kelemen',
        'Kirin',
        'Kitarović',
        'Klaić',
        'Kljuić',
        'Klarić',
        'Klanac',
        'Klašić',
        'Kljajić',
        'Klaić',
        'Klobučar',
        'Knapić',
        'Knez',
        'Knežević',
        'Knežić',
        'Knezović',
        'Kocijan',
        'Kokić',
        'Kokot',
        'Kolak',
        'Kolar',
        'Kolarić',
        'Kolceg',
        'Kolić',
        'Kolonić',
        'Komadina',
        'Komar',
        'Komljenović',
        'Komušar',
        'Kopić',
        'Koprivec',
        'Koprivnjak',
        'Kordić',
        'Koren',
        'Kortizija',
        'Kos',
        'Kosanović',
        'Košić',
        'Kostelac',
        'Kostić',
        'Košutić',
        'Kovač',
        'Kovačić',
        'Kovaček',
        'Kovačević',
        'Kovarbašić',
        'Kozbašić',
        'Kozić',
        'Kozina',
        'Kozul',
        'Krajačić',
        'Krajina',
        'Krajinović',
        'Krajnović',
        'Kralj',
        'Kraljević',
        'Kraljić',
        'Kramar',
        'Kramarić',
        'Kranjčec',
        'Kranjec',
        'Krčelić',
        'Kremenić',
        'Krešić',
        'Krijan',
        'Kristić',
        'Kristo',
        'Krivić',
        'Križan',
        'Kremić',
        'Križanac',
        'Križanić',
        'Križanović',
        'Krizmanić',
        'Krmpotić',
        'Krnić',
        'Krtić',
        'Krolo',
        'Krpan',
        'Kršnik',
        'Krstić',
        'Kruljac',
        'Krznar',
        'Krznarić',
        'Kučina',
        'Kumiša',
        'Kuhar',
        'Kujundžić',
        'Kukec',
        'Kukić',
        'Kukolja',
        'Kulas',
        'Kulić',
        'Kunić',
        'Kunica',
        'Kupina',
        'Kurtović',
        'Kušić',
        'Kutleša',
        'Kuzmanić',
        'Kuzmić',
        'Kuzmanović',
        'Kvešić',
        'Labas',
        'Lacković',
        'Lalić',
        'Lang',
        'Lašić',
        'Lazar',
        'Lazić',
        'Lekić',
        'Leko',
        'Leljak',
        'Leš',
        'Lešić',
        'Leskovar',
        'Levačić',
        'Levak',
        'Lipoščak',
        'Lipovac',
        'Lisica',
        'Lisjak',
        'Ljubanović',
        'Ljubić',
        'Ljubičić',
        'Lončar',
        'Lončarveić',
        'Lončarić',
        'Lonza',
        'Lovreković',
        'Lovrenčić',
        'Lovrić',
        'Ložančić',
        'Ložić',
        'Lubina',
        'Lucić',
        'Lučić',
        'Lukac',
        'Lukačević',
        'Lukačić',
        'Luketić',
        'Lukić',
        'Lukšić',
        'Lulić',
        'Macan',
        'Maček',
        'Madunić',
        'Magdić',
        'Magić',
        'Magovac',
        'Magzan',
        'Mahovlić',
        'Majcen',
        'Majdandžić',
        'Majer',
        'Majnarić',
        'Majstorović',
        'Maksimović',
        'Malenica',
        'Maleš',
        'Maletić',
        'Malešević',
        'Malić',
        'Malnar',
        'Mamić',
        'Mandarić',
        'Mandić',
        'Manđurić',
        'Manojlović',
        'Marak',
        'Marković',
        'Maras',
        'Marasović',
        'Marčec',
        'Maretić',
        'Margetić',
        'Marić',
        'Maričić',
        'Marijanović',
        'Marinčić',
        'Marinić',
        'Marinković',
        'Marinović',
        'Marjanović',
        'Markulin',
        'Markušić',
        'Marović',
        'Maršić',
        'Martić',
        'Martinčević',
        'Martinčić',
        'Martinić',
        'Martinović',
        'Marušić',
        'Mašić',
        'Matanović',
        'Matas',
        'Matenda',
        'Matešić',
        'Matić',
        'Matijas',
        'Matijašević',
        'Matijašić',
        'Matijević',
        'Matković',
        'Matošević',
        'Matulić',
        'Mauzer',
        'Medančić',
        'Medić',
        'Medved',
        'Merkas',
        'Mesarić',
        'Mesić',
        'Meštrović',
        'Merlin',
        'Mičić',
        'Mihajlović',
        'Mihalić',
        'Mihaljević',
        'Mihelčić',
        'Mihić',
        'Mijatović',
        'Mijić',
        'Mijatović',
        'Mijić',
        'Mikačić',
        'Mikešić',
        'Mikić',
        'Mikulčić',
        'Mikulec',
        'Mikulić',
        'Milaković',
        'Milanović',
        'Milardović',
        'Milas',
        'Milašinčić',
        'Milat',
        'Milčić',
        'Miletić',
        'Milić',
        'Miličević. Miličić',
        'Milinković',
        'Milković',
        'Miloš',
        'Milošević',
        'Miočić',
        'Mirković',
        'Mišić',
        'Mišković',
        'Miškulin',
        'Mitrović',
        'Mlinac',
        'Mlinar',
        'Mlinarić',
        'Modrić',
        'Molnar',
        'Morić',
        'Markovčić',
        'Mrakuzić',
        'Mrkonjić',
        'Mršić',
        'Mušić',
        'Mustapić',
        'Mujčinović',
        'Naglić',
        'Nakić',
        'Nekić',
        'Nemet',
        'Nenadić',
        'Nerovčić',
        'Nikić',
        'Nikolić',
        'Nikšić',
        'Nimac',
        'Novačić',
        'Novak',
        'Novaković',
        'Novosel',
        'Novoselec',
        'Nurkić',
        'Nuskern',
        'Obradović',
        'Ogribić',
        'Olujić',
        'Opačak',
        'Opačić',
        'Oreški',
        'Orešković',
        'Orlić',
        'Oslić',
        'Orlović',
        'Orsluić',
        'Osojnički',
        'Ostojić',
        'Pačić',
        'Padovan',
        'Pajić',
        'Palčić',
        'Palić',
        'Pandžić',
        'Panić',
        'Panjić',
        'Papić Papratović',
        'Pašalić',
        'Pašković',
        'Paulić',
        'Pavelić',
        'Paunović',
        'Pavić',
        'Pavičić',
        'Pavković',
        'Pavlaković',
        'Pavlek',
        'Pavletić',
        'Parlov',
        'Papoči',
        'Pavlinić',
        'Pavlović',
        'Pejić',
        'Pešić',
        'Pejaković',
        'Penić',
        'Perak',
        'Perin',
        'Perčić',
        'Perdija',
        'Perić',
        'Perica',
        'Peričić',
        'Periša',
        'Perković',
        'Pernar',
        'Perović',
        'Perišić',
        'Peruško',
        'Pervan',
        'Petković',
        'Petrić',
        'Pretić',
        'Petričević',
        'Petrović',
        'Petrušić',
        'Pintar',
        'Pintarić',
        'Piškulić',
        'Plantak',
        'Plazibat',
        'Pleše',
        'Pleša',
        'Podrug',
        'Pogačić',
        'Poljić',
        'Poljak',
        'Pongrac',
        'Popić',
        'Popović',
        'Poropat',
        'Posavac',
        'Posavec',
        'Potkovac',
        'Potočki',
        'Prosinečki',
        'Požgaj',
        'Praljak',
        'Pranjić',
        'Prelošnjak',
        'Preložnjak',
        'Prgomet',
        'Pribanić',
        'Primorac',
        'Prodan',
        'Prodanović',
        'Prpić',
        'Prskalo',
        'Prugovečki',
        'Puljić',
        'Pupić',
        'Pusić',
        'Puškarić',
        'Račić',
        'Radaković',
        'Radović',
        'Radan',
        'Radanović',
        'Radetić',
        'Radić',
        'Radišić',
        'Radljević',
        'Radman',
        'Radočaj',
        'Radojčić',
        'Radolović',
        'Radoš',
        'Radonić',
        'Radošević',
        'Radovanović',
        'Radulović',
        'Raguz',
        'Rajčić',
        'Rajić',
        'Rajković',
        'Rak',
        'Rakek',
        'Rakić',
        'Ramić',
        'Rimac',
        'Ramljak',
        'Ranogajec',
        'Rašić',
        'Ratković',
        'Razum',
        'Ravlić',
        'Rebić',
        'Rebrović',
        'Rendulić',
        'Repar',
        'Rešetar',
        'Ribarić',
        'Ribić',
        'Ribičić',
        'Ristić',
        'Rodić',
        'Rodin',
        'Rogić',
        'Rogina',
        'Rogošić',
        'Roguljić',
        'Romić',
        'Rončević',
        'Rožić',
        'Rozman',
        'Rubinić',
        'Rudman',
        'Rukavina',
        'Rupčić',
        'Ružić',
        'Sabalj',
        'Sabalja',
        'Šabić',
        'Šablić',
        'Sabljak',
        'Sabljić',
        'Sabolić',
        'Šakić',
        'Šalaj',
        'Šalić',
        'Salinović',
        'Salopek',
        'Šafar',
        'Samardžija',
        'Samardžić',
        'Sambunjak',
        'Šantek',
        'Šantić',
        'Šarčević',
        'Starčević',
        'Savić',
        'Šarić',
        'Širić',
        'Sedlar',
        'Sever',
        'Šestan',
        'Sertić',
        'Šegota',
        'Sekulić',
        'Separović',
        'Šertić',
        'Šestak',
        'Šikić',
        'Šiklić',
        'Šimac',
        'Šimek',
        'Šimić',
        'Šimunec',
        'Šimičić',
        'Šimunić',
        'Šimunković',
        'Šimunović',
        'Sinković',
        'Šintić',
        'Sipek',
        'Škara',
        'Skender',
        'Škobelj',
        'Skok',
        'Škorić',
        'Škrlec',
        'Skrnjug',
        'Škrtić',
        'Skugor',
        'Škvorc',
        'Sladić',
        'Slavić',
        'Slavujević',
        'Slišković',
        'Slunjski',
        'Smičiklas',
        'Smiljanić',
        'Smolčić',
        'Smolić',
        'Sodan',
        'Sokač',
        'Sokol',
        'Sokolić',
        'Soldo',
        'Solić',
        'Sorić',
        'Sošić',
        'Šoštarić',
        'Spajić',
        'Spanić',
        'Špiljak',
        'Štrek',
        'Špehar',
        'Spicijarić',
        'Sporčić',
        'Šprem',
        'Srbljić',
        'Sršen',
        'Stančić',
        'Staničić',
        'Stanić',
        'Stanišić',
        'Stanković',
        'Štefanac',
        'Štefančić',
        'Štefanec',
        'Štefanić',
        'Stepić',
        'Stepinac',
        'Stilinović',
        'Štimac',
        'Stipanović',
        'Stipetić',
        'Stipić',
        'Stipetić',
        'Stjepanović',
        'Stojaković',
        'Stojanović',
        'Stojčević',
        'Stojić',
        'Stojković',
        'Strošić',
        'Štrbac',
        'Stričević',
        'Stulić',
        'Subotić',
        'Sučić',
        'Sudar',
        'Sunjić',
        'Supan',
        'Suprinović',
        'Šušak',
        'Sušanj',
        'Suša',
        'Šutalo',
        'Svalina',
        'Svetličić',
        'Tadić',
        'Takac',
        'Tanacković',
        'Tepeš',
        'Terzić',
        'Tkalčec',
        'Todorović',
        'Tokić',
        'Tolić',
        'Tomas',
        'Tomašević',
        'Tomašić',
        'Tomašković',
        'Tomić',
        'Tomičić',
        'Tomljanović',
        'Tomljenović',
        'Tomšić',
        'Tonković',
        'Topalović',
        'Topalčić',
        'Topić',
        'Topolovec',
        'Tošić',
        'Tot',
        'Trbojević',
        'Trobić',
        'Trstenjak',
        'Trumbetić',
        'Tunjić',
        'Turčić',
        'Turk',
        'Turkalj',
        'Turković',
        'Tušek',
        'Tutić',
        'Udovičić',
        'Ukalović',
        'Umljenović',
        'Uzelac',
        'Valčić',
        'Valentić',
        'Valjak',
        'Varga',
        'Varoščić',
        'Vedrić',
        'Vekić',
        'Velić',
        'Vidak',
        'Vidaković',
        'Vidas',
        'Vidić',
        'Vidoš',
        'Vidović',
        'Vidulić',
        'Vincek',
        'Vinčetić',
        'Vinković',
        'Višić',
        'Višković',
        'Višnjić',
        'Vitez',
        'Vlačić',
        'Vlahović',
        'Vlah',
        'Vlašić',
        'Vodopija',
        'Vojković',
        'Vojnović',
        'Vojvodić',
        'Volarević',
        'Volarić',
        'Vozetić',
        'Vrabec',
        'Vrančić',
        'Vranić',
        'Vranjić',
        'Vranješ',
        'Vranjković',
        'Vrban',
        'Vrbanec',
        'Vrbanić',
        'Vrdoljak',
        'Vrebac',
        'Vrkić',
        'Vučetić',
        'Vučić',
        'Vučina',
        'Vučinić',
        'Vučković',
        'Vugrinec',
        'Vujčić',
        'Vujević',
        'Vujić',
        'Vujnović',
        'Vuk',
        'Vukadin',
        'Vukas',
        'Vukasović',
        'Vuksan',
        'Vukelić',
        'Vukić',
        'Vukman',
        'Vukoja',
        'Vukojević',
        'Vuković',
        'Vukšić',
        'Vukušić',
        'Vuletić',
        'Vulić',
        'Volić',
        'Vušić',
        'Zagorac',
        'Zajec',
        'Žanić',
        'Žarković',
        'Zauhar',
        'Zupan',
        'Župan',
        'Zebić',
        'Zec',
        'Zečević',
        'Zekić',
        'Železnjak',
        'Želić',
        'Žilić',
        'Ženić',
        'Žeravica',
        'Žganec',
        'Žgela',
        'Žuvjivuć',
        'Židak',
        'Žižić',
        'Zlatunić',
        'Zoretić',
        'Zovko',
        'Zorić',
        'Zubak',
        'Zubčić',
        'Zubović',
        'Žugaj',
        'Žugec',
        'Zulim',
        'Zunec',
        'Žunić',
        'Županić',
        'Zuvić',
        'Žužić',
        'Zrinski',
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
