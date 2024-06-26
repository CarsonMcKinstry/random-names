import { sample } from 'lodash';

export default function twins() {
    let names: string;
    const nm1 = [
        'Abbie - Eibba',
        'Abigail - Liagiba',
        'Abram - Marba',
        'Acceber - Rebecca',
        'Acinom - Monica',
        'Adair - Riada',
        'Adaj - Jada',
        'Adam - Mada',
        'Adela - Aleda',
        'Adelaide - Edialeda',
        'Adia - Aida',
        'Adiel - Leida',
        'Adnerb - Brenda',
        'Adrea - Aerda',
        'Adrian - Nairda',
        'Agnes - Senga',
        'Ahsila - Alisha',
        'Aicats - Stacia',
        'Aida - Adia',
        'Aidan - Nadia',
        'Aidualc - Claudia',
        'Ailuj - Julia',
        'Aiphos - Sophia',
        'Airam - Maria',
        'Airotciv - Victoria',
        'Aivilo - Olivia',
        'Ajani - Inaja',
        'Alan - Nala',
        'Alani - Inala',
        'Alec - Cela',
        'Alex - Xela',
        'Alexi - Ixela',
        'Ali - Ila',
        'Allebasi - Isabella',
        'Allen - Nella',
        'Ameer - Reema',
        'Amin - Nima',
        'Amir - Rima',
        'Amirah - Harima',
        'Amla - Alma',
        'Amme - Emma',
        'Anaili - Iliana',
        'Anali - Ilana',
        'Angie - Eigna',
        'Ani - Ina',
        'Annika - Akinna',
        'Arabrab - Barbara',
        'Arden - Nedra',
        'Ardnas - Sandra',
        'Ares - Sera',
        'Ari - Ira',
        'Ariadne - Endaria',
        'Aric - Cira',
        'Arica - Acira',
        'Ariel - Leira',
        'Arik - Kira',
        'Ariyah - Hayira',
        'Aron - Nora',
        'Arrec - Cerra',
        'Ashley - Yelhsa',
        'Ashley - Yelsha',
        'Assenav - Vanessa',
        'Assilem - Melissa',
        'Aven - Neva',
        'Avi - Iva',
        'Axel - Lexa',
        'Ayah - Haya',
        'Aydan - Nadya',
        'Aylie - Eliya',
        'Azure - Ezura',
        'Billy - Yllib',
        'Boris - Sirob',
        'Brin - Nirb',
        'Byron - Noryb',
        'Caleb - Belac',
        'Callie - Eillac',
        'Cameron - Noremac',
        'Carlos - Solrac',
        'Carol - Lorac',
        'Carrie - Eirrac',
        'Carter - Retrac',
        'Casey - Yesac',
        'Cecile - Elicec',
        'Chris - Sirch',
        'Cierra - Arreic',
        'Cindy - Ydnic',
        'Cohen - Nehoc',
        'Cole - Eloc',
        'Coleman - Nameloc',
        'Colin - Niloc',
        'Colleen - Neelloc',
        'Cora - Aroc',
        'Cory - Yroc',
        'Crie - Eric',
        'Damon - Nomad',
        'Dan - Nad',
        'Dana - Anad',
        'Daniel - Leinad',
        'Danielle - Elleinad',
        'Darla - Alrad',
        'Darren - Nerrad',
        'Dave - Evad',
        'David - Divad',
        'Dean - Naed',
        'Delia - Ailed',
        'Deraj - Jared',
        'Derek - Kered',
        'Derfla - Alfred',
        'Devin - Nived',
        'Diana - Anaid',
        'Divad - David',
        'Dlanor - Ronald',
        'Dnomyar - Raymond',
        'Dolores - Serolod',
        'Donna - Annod',
        'Dora - Arod',
        'Doyle - Elyod',
        'Droffilc - Clifford',
        'Duncan - Nacnud',
        'Dustin - Nitsud',
        'Dylan - Nalyd',
        'Ecnerwal - Lawrence',
        'Ecynaj - Janyce',
        'Edward - Drawde',
        'Eibbed - Debbie',
        'Eilatan - Natalie',
        'Eileen - Neelie',
        'Eilsel - Leslie',
        'Eiram - Marie',
        'Eirloav - Valorie',
        'Eirrehs - Sherrie',
        'Eissej - Jessie',
        'Elaine - Eniale',
        'Eleanor - Ronaele',
        'Eliza - Azile',
        'Ella - Alle',
        'Ellen - Nelle',
        'Ellis - Sille',
        'Elohc - Chole',
        'Elohcin - Nichole',
        'Emily - Ylime',
        'Emma - Amme',
        'Emmalyn - Nylamme',
        'Emmet - Temme',
        'Enaj - Jane',
        'Enegue - Eugene',
        'Ener - Rene',
        'Eniledam - Madeline',
        'Enilorac - Caroline',
        'Enilrae - Earline',
        'Ennaoj - Joanne',
        'Ennazus - Suzanne',
        'Eric - Cire',
        'Eric-Cire',
        'Erica - Acire',
        'Ettolrahc - Charlotte',
        'Eva - Ave',
        'Evangeline - Enilegnave',
        'Evelyn - Nyleve',
        'Evilo - Olive',
        'Eyak - Kaye',
        'Fallon - Nollaf',
        'Fanny - Ynnaf',
        'Farrah - Harraf',
        'Felix - Xilef',
        'Flor - Rolf',
        'Flora - Arolf',
        'Floyd - Dyolf',
        'Freida - Adierf',
        'Gabriella - Alleirbag',
        'Gary - Yrag',
        'Gem - Meg',
        'Giles - Selig',
        'Gillian - Naillig',
        'Greg - Gerg',
        'Hacim - Micah',
        'Haela - Aleah',
        'Haidan - Nadiah',
        'Haidran - Nadriah',
        'Hairam - Mariah',
        'Haley - Yelah',
        'Halie - Eilah',
        'Haon - Noah',
        'Haras - Sarah',
        'Harobed - Deborah',
        'Harold - Dlorah',
        'Haron - Norah',
        'Harry - Yrrah',
        'Harvey - Yevrah',
        'Hayes - Seyah',
        'Hazel - Lezah',
        'Henry - Yrneh',
        'Hpesoj - Joseph',
        'Htebazile - Elizabeth',
        'Htennek - Kenneth',
        'Hunter - Retnuh',
        'Ida - Adi',
        'Iman - Nami',
        'Imogene - Enegomi',
        'Iort - Tori',
        'Ira - Ari',
        'Iris - Siri',
        'Irving - Gnivri',
        'Isaac - Caasi',
        'Isabel - Lebasi',
        'Ised - Desi',
        'Issac - Cassi',
        'Ivan - Navi',
        'Jamal - Lamaj',
        'Jan - Naj',
        'Jared - Deraj',
        'Jason - Nosaj',
        'Jesse - Essej',
        'Jordan - Nadroj',
        'Kaasi - Isaak',
        'Kara - Arak',
        'Karen - Narek',
        'Kassie - Eissak',
        'Kate - Etak',
        'Katerina - Aniretak',
        'Katie - Eitak',
        'Kavon - Novak',
        'Kayla - Alyak',
        'Kcirtap - Patrick',
        'Kcuhc - Chuck',
        'Kelly - Yellek',
        'Kendall - Lladnek',
        'Kevin - Nivek',
        'Kim - Mik',
        'Kram - Mark',
        'Kris - Sirk',
        'Kyle - Elyk',
        'Lamaj - Jamal',
        'Larc - Carl',
        'Larry - Yrral',
        'Laup - Paul',
        'Laura - Arual',
        'Lauren - Nerual',
        'Layla - Alyal',
        'Leahcim - Michael',
        'Lehcar - Rachel',
        'Leinad - Daniel',
        'Leira - Ariel',
        'Leonard - Dranoel',
        'Lestor - Rotsel',
        'Lexa - Axel',
        'Lezah - Hazel',
        'Lila - Alil',
        'Lina - Anil',
        'Linda - Adnil',
        'Lisa - Asil',
        'Llib - Bill',
        'Lorna - Anrol',
        'Lowell - Llewol',
        'Luanne - Ennaul',
        'Lucas - Sacul',
        'Luke - Ekul',
        'Lydia - Aidyl',
        'Mac - Cam',
        'Madeline-Eniledam',
        'Mailliw - William',
        'Mallory - Yrollam',
        'Mara - Aram',
        'Margaret - Teragram',
        'Maria - Airam',
        'Marion - Noiram',
        'Marsha - Ahsram',
        'Martha - Ahtram',
        'Matthias - Saihttam',
        'Max - Xam',
        'Melora - Arolem',
        'Miah - Haim',
        'Mika - Akim',
        'Mikah - Hakim',
        'Miles - Selim',
        'Millie - Eillim',
        'Milly - Yllim',
        'Milo - Olim',
        'Miranda - Adnarim',
        'Misha - Ahsim',
        'Missy - Yssim',
        'Moira - Ariom',
        'Nadia - Aidan',
        'Naed - Dean',
        'Nagol - Logan',
        'Naima - Amian',
        'Nairb - Brian',
        'Naj - Jan',
        'Nala - Alan',
        'Naleac - Caelan',
        'Nalla - Allan',
        'Naomi - Imoan',
        'Nasoj - Josan',
        'Nasus - Susan',
        'Natasha - Ahsatan',
        'Nate - Etan',
        'Nathe - Ethan',
        'Nav - Van',
        'Naya - Ayan',
        'Nedac - Caden',
        'Nedaj - Jaden',
        'Nedyaj - Jayden',
        'Nedyarb - Brayden',
        'Neelia - Aileen',
        'Nehpets - Stephen',
        'Nelaj - Jalen',
        'Nelg - Glen',
        'Nell - Llen',
        'Nerys - Syren',
        'Netsirk - Kristen',
        'Nevah - Haven',
        'Neville - Elliven',
        'Newo - Owen',
        'Nibot - Tobin',
        'Nikki - Ikkin',
        'Nire - Erin',
        'Nitsuj - Justin',
        'Noa - Aon',
        'Noah - Haon',
        'Noah - Hoan',
        'Nodlehs - Sheldon',
        'Nodnarb - Brandon',
        'Noel - Leon',
        'Nola - Alon',
        'Noryb - Byron',
        'Nosidam - Madison',
        'Nosidda - Addison',
        'Nosilla - Allison',
        'Noskcaj - Jackson',
        'Nosredna - Anderson',
        'Nova - Avon',
        'Nya - Ayn',
        'Nylava - Avalyn',
        'Nyleve - Evelyn',
        'Olivia - Aivilo',
        'Om - Mo',
        'Opal - Lapo',
        'Oprah - Harpo',
        'Orimar - Ramiro',
        'Owen - Newo',
        'Paula - Aluap',
        'Penny - Ynnep',
        'Peyton - Notyep',
        'Phelix - Xilehp',
        'Piper - Repip',
        'Ramaj - Jamar',
        'Ramon - Nomar',
        'Rauol-Louar',
        'Reese - Eseer',
        'Refinnej - Jennifer',
        'Regue - Euger',
        'Rehtra - Arther',
        'Retep - Peter',
        'Retnuh - Hunter',
        'Revilo - Oliver',
        'Rhie - Eihr',
        'Rita - Atir',
        'Rob - Bor',
        'Robert - Trebor',
        'Roberta - Atrebor',
        'Robin - Nibor',
        'Roger - Regor',
        'Rolyat - Taylor',
        'Roman - Namor',
        'Ronald - Dlanor',
        'Rosa - Asor',
        'Rosalie - Eilasor',
        'Rosalyn - Nylasor',
        'Ruby - Ybur',
        'Ruhtra - Arthur',
        'Russell - Llessur',
        'Ryan - Nayr',
        'Ryne - Enyr',
        'Sabrina - Anirbas',
        'Sadie - Eidas',
        'Sally - Yllas',
        'Sarah - Haras',
        'Sasha - Ahsas',
        'Sawyer - Reywas',
        'Sean - Naes',
        'Selena - Aneles',
        'Selim - Miles',
        'Selma - Amles',
        'Selrahc - Charles',
        'Semaj - James',
        'Siana - Anais',
        'Silas - Salis',
        'Sillyph - Phyllis',
        'Sinned - Dennis',
        'Siri - Iris',
        'Sito - Otis',
        'Sivart - Travis',
        'Socram - Marcos',
        'Stanley - Yelnats',
        'Steven - Nevets',
        'Stuart - Trauts',
        'Susan - Nasus',
        'Susie - Eisus',
        'Sven - Nevs',
        'Sylvia - Aivlys',
        'Tamara - Aramat',
        'Tara - Arat',
        'Tenaj - Janet',
        'Terbor - Robert',
        'Terri - Irret',
        'Tessa - Asset',
        'Tiana - Anait',
        'Tiffany - Ynaffit',
        'Tilly - Yllit',
        'Tnilc - Clint',
        'Tommy - Ymmot',
        'Tori - Irot',
        'Tracy - Ycart',
        'Trauts - Stuart',
        'Trevor - Rovert',
        'Troy - Yort',
        'Tsenre - Ernest',
        'Ttocs - Scott',
        'Velma - Amlev',
        'Veronica - Acinorev',
        'Virgil - Ligriv',
        'Vivian - Naiviv',
        'Wehtam - Mathew',
        'Werdan - Andrew',
        'Werdna - Andrew',
        'Xela - Alex',
        'Yar - Ray',
        'Ybbor - Robby',
        'Ycart - Tracy',
        'Ydurt - Trudy',
        'Yenaled - Delaney',
        'Yenetruoc - Courteney',
        'Yerffej - Jeffrey',
        'Yhtorod - Dorothy',
        'Ylrebmik - Kimberly',
        'Ynitsed - Destiny',
        'Ynnej - Jenny',
        'Yor - Roy',
        'Yret - Tery',
        'Yrloav - Valory',
        'Yrret - Terry',
        'Zaid - Diaz',
        'Zeni - Inez',
        'Zil - Liz',
        'Zoey - Yeoz',
    ];
    {
        names = sample(nm1);
        return names;
    }
}
