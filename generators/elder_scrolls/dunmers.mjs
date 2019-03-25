export default function dunmers() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Ada', 'Adav', 'Adi', 'Adil', 'Ado', 'Adon', 'Ados', 'Adr',
    'Adre', 'Adri', 'Ala', 'Alam', 'Alan', 'Ald', 'Alda', 'Aldo', 'Alds',
    'Alm', 'Alms', 'Aln', 'Alna', 'Alv', 'Alva', 'Alve', 'Alvi', 'Alvo',
    'Alvu', 'Amb', 'Amba', 'Ana', 'Anas', 'And', 'Ande', 'Andr', 'Ane',
    'Anel', 'Anes', 'Ang', 'Anga', 'Ara', 'Aras', 'Are', 'Arel', 'Aren',
    'Aret', 'Arn', 'Arna', 'Arns', 'Aro', 'Aroa', 'Aron', 'Ars', 'Arsy',
    'Arv', 'Arve', 'Arvi', 'Arvs', 'Arvy', 'Ary', 'Aryo', 'Ath', 'Atha',
    'Athe', 'Athi', 'Athy', 'Ava', 'Aval', 'Avo', 'Avon', 'Avr', 'Avro',
    'Avru', 'Avu', 'Avus', 'Aym', 'Ayma', 'Azar', 'Bal', 'Bala', 'Bale',
    'Bali', 'Balv', 'Baly', 'Ban', 'Band', 'Bano', 'Banu', 'Bar', 'Bara',
    'Bare', 'Baru', 'Bed', 'Beda', 'Bel', 'Bela', 'Beld', 'Belm', 'Belo',
    'Bels', 'Belv', 'Bely', 'Ben', 'Bena', 'Ber', 'Bera', 'Bere', 'Bert',
    'Berv', 'Bet', 'Beth', 'Bev', 'Beva', 'Bil', 'Bild', 'Bile', 'Bilo',
    'Bir', 'Bire', 'Bol', 'Bola', 'Bole', 'Boln', 'Bolo', 'Bols', 'Bolv',
    'Boly', 'Bon', 'Bong', 'Bor', 'Bory', 'Bra', 'Brad', 'Bral', 'Brar',
    'Brat', 'Brav', 'Bray', 'Bre', 'Brel', 'Brer', 'Bret', 'Brev', 'Brey',
    'Bri', 'Brir', 'Bro', 'Brod', 'Bror', 'Brot', 'Cas', 'Casi', 'Cyl',
    'Cylb', 'Dal', 'Dala', 'Dald', 'Dali', 'Dalm', 'Dalo', 'Dals', 'Dalv',
    'Dan', 'Dana', 'Dand', 'Dane', 'Dar', 'Dara', 'Dare', 'Dari', 'Darn',
    'Daro', 'Dart', 'Darv', 'Dary', 'Dat', 'Dath', 'Dav', 'Dava', 'Davi',
    'Davu', 'Day', 'Dayn', 'Ded', 'Deda', 'Del', 'Delm', 'Delo', 'Delv',
    'Der', 'Dera', 'Dero', 'Det', 'Deth', 'Dev', 'Deva', 'Dil', 'Dils', 'Din',
    'Dino', 'Dir', 'Dira', 'Dire', 'Dirv', 'Div', 'Diva', 'Dol', 'Dolm',
    'Doly', 'Don', 'Dond', 'Donu', 'Dov', 'Dovo', 'Dovr', 'Dovy', 'Dra',
    'Dral', 'Dram', 'Dran', 'Drar', 'Drat', 'Drav', 'Dre', 'Dred', 'Drel',
    'Drer', 'Drev', 'Drey', 'Dri', 'Drid', 'Drin', 'Dro', 'Drod', 'Drol',
    'Dron', 'Dror', 'Dru', 'Drul', 'Dul', 'Duld', 'Dun', 'Dune', 'Edd', 'Edr',
    'Edra', 'Edri', 'Ela', 'Elam', 'Eld', 'Eldi', 'Eldr', 'Ele', 'Elet',
    'Elm', 'Elms', 'Elo', 'Elv', 'Elva', 'Elvi', 'Ena', 'Enar', 'End', 'Enda',
    'Endr', 'Endu', 'Eno', 'Era', 'Eran', 'Ere', 'Ereb', 'Eren', 'Erer',
    'Erev', 'Eri', 'Eris', 'Ern', 'Erni', 'Erns', 'Ero', 'Eron', 'Erv',
    'Erva', 'Erve', 'Ervi', 'Eth', 'Ethe', 'Ethy', 'Evo', 'Evos', 'Evu',
    'Evul', 'Fad', 'Fadr', 'Fal', 'Fala', 'Fald', 'Fals', 'Falv', 'Far',
    'Farv', 'Farw', 'Fary', 'Fat', 'Fath', 'Fav', 'Fava', 'Fave', 'Fed',
    'Feda', 'Fedr', 'Fel', 'Fela', 'Fele', 'Feli', 'Fels', 'Felv', 'Fem',
    'Feme', 'Fen', 'Fend', 'Fer', 'Fera', 'Fere', 'Feri', 'Feru', 'Ferv',
    'Fet', 'Feth', 'Fev', 'Fevr', 'Fevu', 'Fevy', 'Fol', 'Folm', 'Folv',
    'Foly', 'Fon', 'Fons', 'Fonu', 'For', 'Forv', 'Fory', 'Fot', 'Foth',
    'Fov', 'Fove', 'Fovu', 'Fra', 'Frat', 'Gad', 'Gada', 'Gade', 'Gae',
    'Gael', 'Gal', 'Gala', 'Gald', 'Gale', 'Gali', 'Galm', 'Gals', 'Galt',
    'Gam', 'Gami', 'Gan', 'Gana', 'Ganu', 'Gar', 'Gara', 'Gare', 'Gari',
    'Garn', 'Garv', 'Gary', 'Gat', 'Gath', 'Gav', 'Gava', 'Gave', 'Gavi',
    'Gel', 'Geld', 'Gid', 'Gida', 'Gide', 'Gil', 'Gila', 'Gile', 'Gilm',
    'Gils', 'Gilu', 'Gilv', 'Gily', 'Gin', 'Gind', 'Ginu', 'Gir', 'Gira',
    'Gire', 'Giro', 'Giry', 'Gol', 'Gola', 'Gold', 'Gole', 'Gols', 'Golv',
    'Gor', 'Gora', 'Gord', 'Gore', 'Gori', 'Goro', 'Got', 'Goth', 'Gov',
    'Gova', 'Gra', 'Grag', 'Gre', 'Gren', 'Gul', 'Gulm', 'Guls', 'Gur',
    'Gure', 'Guri', 'Hel', 'Hels', 'Hla', 'Hlan', 'Hlar', 'Hle', 'Hlen',
    'Hler', 'Hlo', 'Hlor', 'Hlov', 'Hor', 'Hort', 'Idr', 'Idro', 'Ien',
    'Iena', 'Ild', 'Ildo', 'Ile', 'Ilen', 'Ilet', 'Ilv', 'Ilve', 'Ind',
    'Inda', 'Ine', 'Iner', 'Ira', 'Irar', 'Ire', 'Irer', 'Irv', 'Irve', 'Ivu',
    'Ivul', 'Jiu', 'Jiub', 'Kil', 'Kili', 'Kov', 'Kova', 'Kyl', 'Kyli', 'Lla',
    'Llaa', 'Llan', 'Llar', 'Llav', 'Lle', 'Ller', 'Llet', 'Llev', 'Lli',
    'Llir', 'Llo', 'Llod', 'Llon', 'Llor', 'Llov', 'Lyr', 'Lyri', 'Lyt',
    'Lyth', 'Mad', 'Madr', 'Mads', 'Mal', 'Mala', 'Mall', 'Mals', 'Malt',
    'Malu', 'Maly', 'Man', 'Mana', 'Mand', 'Mane', 'Mano', 'Mar', 'Mara',
    'Maro', 'Mas', 'Mast', 'Mat', 'Math', 'Mav', 'Mavi', 'Mavo', 'Mavu',
    'Med', 'Mede', 'Medy', 'Mel', 'Mela', 'Mels', 'Melu', 'Men', 'Menu',
    'Mer', 'Meri', 'Mert', 'Merv', 'Mery', 'Met', 'Meth', 'Mev', 'Meve',
    'Mevi', 'Mid', 'Mida', 'Mil', 'Mila', 'Mils', 'Mily', 'Min', 'Mine',
    'Mir', 'Miro', 'Mirv', 'Mit', 'Mith', 'Miv', 'Mivu', 'Mod', 'Modr',
    'Mody', 'Mon', 'Mond', 'Mov', 'Movi', 'Muv', 'Muvi', 'Nad', 'Nads', 'Nal',
    'Nali', 'Nalm', 'Nalo', 'Nals', 'Nalu', 'Nar', 'Nara', 'Nari', 'Nary',
    'Nat', 'Nath', 'Nav', 'Nava', 'Navi', 'Nel', 'Neld', 'Nelm', 'Nelo',
    'Nels', 'Nelv', 'Nely', 'Ner', 'Nere', 'Net', 'Neth', 'Nev', 'Nevi',
    'Nevo', 'Nid', 'Nide', 'Nil', 'Nila', 'Nilo', 'Nilp', 'Nir', 'Nira',
    'Nis', 'Niv', 'Niva', 'Nive', 'Nivo', 'Nor', 'Noru', 'Nov', 'Novo', 'Odr',
    'Odra', 'Odro', 'Ois', 'Oisi', 'Oly', 'Olyn', 'Ond', 'Onda', 'Ondr',
    'Ori', 'Orin', 'Orn', 'Orns', 'Orv', 'Orva', 'Oth', 'Othr', 'Ovi', 'Ovis',
    'Ral', 'Rala', 'Rald', 'Rale', 'Rali', 'Ralm', 'Ralo', 'Rals', 'Ralv',
    'Raly', 'Ran', 'Rane', 'Rano', 'Rar', 'Rara', 'Rari', 'Rary', 'Rat',
    'Rath', 'Rav', 'Rava', 'Ravi', 'Ravo', 'Ravy', 'Ray', 'Rayn', 'Red',
    'Reda', 'Rel', 'Rela', 'Rele', 'Relm', 'Rels', 'Relu', 'Rely', 'Rem',
    'Rema', 'Ren', 'Rend', 'Rer', 'Rern', 'Rero', 'Rerv', 'Rev', 'Revu',
    'Revy', 'Rey', 'Reyn', 'Ril', 'Rila', 'Rilo', 'Rilv', 'Rin', 'Rind',
    'Rir', 'Rirn', 'Riv', 'Riva', 'Rol', 'Roli', 'Rols', 'Rom', 'Roml', 'Ron',
    'Rone', 'Rot', 'Roth', 'Rov', 'Rovo', 'Ryt', 'Ryth', 'Sad', 'Sada',
    'Sade', 'Sadr', 'Sal', 'Sala', 'Sald', 'Sale', 'Salv', 'Saly', 'San',
    'Sanv', 'Sar', 'Sara', 'Sart', 'Sarv', 'Sary', 'Sat', 'Sath', 'Sav',
    'Savo', 'Savu', 'Sed', 'Seda', 'Sedr', 'Sel', 'Seld', 'Sele', 'Selm',
    'Selv', 'Sen', 'Send', 'Ser', 'Sera', 'Sere', 'Seru', 'Serv', 'Sery',
    'Sev', 'Seva', 'Sevi', 'Sha', 'Shal', 'Shas', 'Shur', 'Sly', 'Slyt',
    'Sod', 'Sodr', 'Son', 'Sond', 'Sor', 'Sori', 'Sort', 'Sov', 'Sovo', 'Stl',
    'Stle', 'Sul', 'Sule', 'Suli', 'Sun', 'Sune', 'Sur', 'Sury', 'Suv',
    'Suvr', 'Sva', 'Svad', 'Syn', 'Synd', 'Tad', 'Tada', 'Tal', 'Tali',
    'Talm', 'Talv', 'Tan', 'Tand', 'Tane', 'Tanu', 'Tar', 'Tara', 'Tare',
    'Taro', 'Tarv', 'Tav', 'Tave', 'Ted', 'Tedr', 'Tedu', 'Tel', 'Teld',
    'Teli', 'Tels', 'Telv', 'Tem', 'Temi', 'Ten', 'Tend', 'Tens', 'Ter',
    'Tere', 'Teri', 'Terv', 'Tev', 'Tevy', 'Tha', 'Thad', 'Than', 'Thar',
    'Thau', 'The', 'Thel', 'Ther', 'Tho', 'Thol', 'Thor', 'Thr', 'Thre',
    'Tid', 'Tidr', 'Tin', 'Tino', 'Tir', 'Tira', 'Tire', 'Tirn', 'Tirv',
    'Tiv', 'Tiva', 'Tol', 'Tole', 'Tor', 'Tori', 'Tov', 'Tova', 'Tra', 'Tral',
    'Trav', 'Tre', 'Tred', 'Trel', 'Tren', 'Trer', 'Trev', 'Tri', 'Tril',
    'Triv', 'Tul', 'Tuls', 'Tur', 'Tyt', 'Tyth', 'Ul', 'Ule', 'Ulen', 'Ulm',
    'Ulms', 'Ult', 'Ulti', 'Ulv', 'Ulve', 'Ulvi', 'Ulvo', 'Uly', 'Ulyn',
    'Une', 'Unel', 'Ura', 'Urad', 'Ure', 'Urev', 'Urn', 'Urne', 'Urv', 'Urve',
    'Ury', 'Uryn', 'Uth', 'Uthr', 'Uve', 'Uvel', 'Uvr', 'Uvre', 'Vad', 'Vade',
    'Val', 'Vale', 'Vali', 'Vals', 'Van', 'Vane', 'Vanik', 'Vanr', 'Var',
    'Vare', 'Vari', 'Varo', 'Varv', 'Vat', 'Vato', 'Vav', 'Vava', 'Vave',
    'Vavr', 'Ved', 'Veda', 'Vedr', 'Vel', 'Veli', 'Velm', 'Vely', 'Ven',
    'Vend', 'Ver', 'Vere', 'Vero', 'Vev', 'Vevo', 'Vevu', 'Vil', 'Vilu',
    'Vilv', 'Vily', 'Vir', 'Vira', 'Virv', 'Vob', 'Vobe', 'Von', 'Vond',
    'Vono', 'Vor', 'Vora', 'Voru', 'Vuv', 'Vuvi', 'Wyn', 'Wynd', 'Xio',
    'Xiom', 'Zan', 'Zir'];
  const nm2 = ['abi', 'adar', 'adas', 'aenc', 'ain', 'ak', 'al', 'alam', 'als',
    'alyn', 'am', 'ama', 'ame', 'an', 'anden', 'ane', 'anos', 'ar', 'ara',
    'aredhel', 'aren', 'aryn', 'arys', 'as', 'asa', 'ase', 'aso', 'ath',
    'ayn', 'ayne', 'ayni', 'ayth', 'ban', 'ben', 'bi', 'dar', 'das', 'dase',
    'dasi', 'del', 'delius', 'den', 'der', 'dil', 'dis', 'dol', 'dos', 'dral',
    'dram', 'dran', 'drar', 'dras', 'dren', 'dres', 'dris', 'dros', 'drose',
    'drus', 'dryn', 'ds', 'dstar', 'dur', 'dus', 'dyn', 'el', 'ela', 'ele',
    'elen', 'eliu', 'elos', 'elot', 'elus', 'elyn', 'en', 'enc', 'end',
    'endos', 'ennius', 'er', 'eryne', 'es', 'esu', 'eth', 'evul', 'far',
    'gond', 'gus', 'hal', 'han', 'has', 'he', 'helus', 'hen', 'her', 'heru',
    'hes', 'hev', 'his', 'horpa', 'hren', 'hresa', 'hus', 'hyn', 'hyna',
    'hyr', 'iban', 'ien', 'ig', 'ik', 'il', 'ilie', 'ilo', 'imal', 'imar',
    'imir', 'in', 'ion', 'is', 'isa', 'isi', 'iso', 'ius', 'kan', 'la', 'lam',
    'lar', 'las', 'layn', 'ldyn', 'le', 'len', 'ler', 'lin', 'lion', 'lis',
    'llia', 'llin', 'lo', 'los', 'ls', 'lse', 'lval', 'lvam', 'lvan', 'lyn',
    'man', 'mara', 'me', 'men', 'mil', 'mir', 'mis', 'mon', 'ms', 'mus',
    'myn', 'myne', 'nar', 'nas', 'nd', 'ndasi', 'nden', 'ndis', 'ndos',
    'ndras', 'ndris', 'ndrus', 'ndryn', 'ndur', 'ne', 'nel', 'nelen', 'nes',
    'ni', 'nil', 'nilie', 'nis', 'nniu', 'nor', 'nos', 'ns', 'nur', 'oder',
    'oi', 'ol', 'ollia', 'olos', 'on', 'ond', 'one', 'or', 'orpa', 'os',
    'osi', 'oth', 'par', 'phas', 'rak', 'ral', 'ram', 'rama', 'ran', 'rane',
    'rar', 'ras', 'rave', 'rayne', 'rayni', 're', 'redh', 'rel', 'relos',
    'reloth', 'ren', 'rer', 'res', 'resa', 'ril', 'ris', 'rius', 'ro', 'roi',
    'ron', 'ros', 'rose', 'rus', 'rvam', 'ryn', 'ryne', 'rys', 'ryth', 'sa',
    'se', 'sen', 'seth', 'shev', 'si', 'so', 'star', 'su', 'th', 'than',
    'thas', 'the', 'then', 'ther', 'theru', 'thes', 'this', 'thus', 'thyn',
    'thyr', 'tis', 'tisi', 'trius', 'ul', 'ur', 'uraver', 'ure', 'uren',
    'uril', 'us', 'use', 'usi', 'val', 'vam', 'van', 'vas', 'vasa', 'vaso',
    'vel', 'ven', 'ver', 'ves', 'vil', 'vin', 'vis', 'von', 'vos', 'vosi',
    'vs', 'vul', 'vur', 'vus', 'vyn', 'vys', 'wil', 'yan', 'yl', 'yn', 'yna',
    'ynas', 'yne', 'yni', 'ynis', 'ynos', 'yns', 'ys', 'yth'];
  const nm3 = ['Ado', 'Ados', 'Adr', 'Adru', 'Adu', 'Adur', 'Ala', 'Alar',
    'Alav', 'Ald', 'Aldy', 'Ale', 'Alen', 'Aler', 'Alf', 'Alfe', 'Alm',
    'Alms', 'Alo', 'Aloi', 'Alon', 'Alu', 'Alur', 'Alv', 'Alve', 'Alvu',
    'Aly', 'Alyn', 'Ami', 'Amil', 'And', 'Anda', 'Andi', 'Ane', 'Ang', 'Anga',
    'Ani', 'Anis', 'Aph', 'Aphi', 'Ara', 'Aral', 'Aran', 'Arar', 'Arn',
    'Arns', 'Art', 'Arti', 'Arv', 'Arva', 'Arve', 'Arvs', 'Ary', 'Aryn',
    'Ath', 'Athe', 'Avo', 'Avon', 'Avr', 'Avru', 'Bad', 'Bada', 'Bal', 'Bale',
    'Bals', 'Baly', 'Bar', 'Bare', 'Bed', 'Bede', 'Bedy', 'Bel', 'Bele',
    'Bev', 'Beve', 'Bey', 'Beyt', 'Bid', 'Bids', 'Bil', 'Bils', 'Bir', 'Bira',
    'Biv', 'Biva', 'Bod', 'Bode', 'Bods', 'Bol', 'Bold', 'Bra', 'Bral',
    'Brar', 'Brav', 'Bre', 'Bred', 'Brel', 'Brer', 'Brev', 'Bri', 'Bril',
    'Bro', 'Bron', 'Cin', 'Cind', 'Cru', 'Dal', 'Dala', 'Daln', 'Dals',
    'Daly', 'Dan', 'Dana', 'Dand', 'Dano', 'Dans', 'Dar', 'Dara', 'Dare',
    'Daro', 'Darv', 'Dav', 'Dave', 'Day', 'Dayn', 'Del', 'Deld', 'Delm',
    'Delt', 'Dely', 'Dem', 'Der', 'Dera', 'Derv', 'Dil', 'Dila', 'Dile',
    'Dilv', 'Din', 'Dina', 'Dine', 'Dinu', 'Diny', 'Dir', 'Dira', 'Dire',
    'Dol', 'Dolm', 'Dols', 'Dolv', 'Dom', 'Dome', 'Dor', 'Dori', 'Dory',
    'Dot', 'Doth', 'Dov', 'Dove', 'Dovr', 'Dra', 'Dral', 'Drar', 'Drat',
    'Drav', 'Dre', 'Dred', 'Drel', 'Dren', 'Drev', 'Drey', 'Dri', 'Dril',
    'Drir', 'Dro', 'Drol', 'Dror', 'Dru', 'Drul', 'Drur', 'Dul', 'Duld',
    'Duln', 'Edr', 'Edry', 'Eld', 'Eldr', 'Elm', 'Elme', 'Elmu', 'Elv',
    'Elva', 'Ely', 'Elyn', 'End', 'Enda', 'Endr', 'Era', 'Eral', 'Eri',
    'Erir', 'Ern', 'Erns', 'Erv', 'Erve', 'Ervo', 'Ervy', 'Eth', 'Etha',
    'Eve', 'Eves', 'Evi', 'Evil', 'Fad', 'Fada', 'Fadi', 'Fal', 'Fala',
    'Fale', 'Falu', 'Fan', 'Fana', 'Fani', 'Fanu', 'Far', 'Fara', 'Fare',
    'Faru', 'Fat', 'Fath', 'Fav', 'Fava', 'Fave', 'Favi', 'Favo', 'Fed',
    'Fedu', 'Fel', 'Feld', 'Feli', 'Felm', 'Fels', 'Fer', 'Fera', 'Feri',
    'Fero', 'Ferv', 'Fery', 'Fev', 'Feva', 'Fevi', 'Fie', 'Fier', 'Fol',
    'Fols', 'Folv', 'Fom', 'Fome', 'Fon', 'Fona', 'For', 'Forv', 'Gab',
    'Gabr', 'Gad', 'Gada', 'Gade', 'Gady', 'Gal', 'Gala', 'Gald', 'Gale',
    'Galo', 'Gals', 'Galu', 'Galv', 'Galy', 'Gan', 'Gand', 'Gar', 'Gara',
    'Gari', 'Gary', 'Gil', 'Gils', 'Gin', 'Gina', 'Gind', 'Gir', 'Gira',
    'Girv', 'Giry', 'Gli', 'Glis', 'Gol', 'Gola', 'Gole', 'Golg', 'Golm',
    'Golv', 'Gom', 'Gome', 'Gor', 'Gore', 'Gorv', 'Gul', 'Guld', 'Gule',
    'Gulv', 'Gur', 'Gure', 'Hal', 'Hale', 'Hek', 'Hla', 'Hlav', 'Hle', 'Hlen',
    'Hlev', 'Hli', 'Hlir', 'Hlo', 'Hlod', 'Ide', 'Ides', 'Idr', 'Idre',
    'Idro', 'Idu', 'Idul', 'Ien', 'Iena', 'Ild', 'Ilda', 'Ilm', 'Ilme',
    'Ilmy', 'Ind', 'Indr', 'Ine', 'Iner', 'Iri', 'Iril', 'Irn', 'Irna', 'Irv',
    'Irva', 'Irvs', 'Ive', 'Ivel', 'Iver', 'Ivr', 'Ivra', 'Ivro', 'Jen',
    'Jena', 'Kar', 'Karl', 'Lau', 'Laur', 'Lil', 'Lla', 'Llaa', 'Llan',
    'Llar', 'Llat', 'Llav', 'Llay', 'Lle', 'Lled', 'Llem', 'Llen', 'Ller',
    'Llev', 'Lli', 'Llir', 'Lliv', 'Llo', 'Llon', 'Llor', 'Llu', 'Llun',
    'Lol', 'Lua', 'Luaf', 'Mad', 'Mada', 'Madr', 'Madu', 'Mal', 'Mals',
    'Malv', 'Maly', 'Man', 'Mana', 'Mans', 'Manw', 'Mar', 'Mara', 'Mare',
    'Mari', 'Mat', 'Math', 'Med', 'Medi', 'Medr', 'Mel', 'Meli', 'Mels',
    'Melu', 'Melv', 'Men', 'Mens', 'Mer', 'Mera', 'Meri', 'Met', 'Meth',
    'Mev', 'Mevr', 'Mevu', 'Mia', 'Miar', 'Mil', 'Mila', 'Milo', 'Milu',
    'Milv', 'Min', 'Mina', 'Mind', 'Mir', 'Mira', 'Mire', 'Miri', 'Mirn',
    'Mirr', 'Miv', 'Mivr', 'Mor', 'Morn', 'Moro', 'Moru', 'Mov', 'Movi',
    'Mul', 'Muld', 'Mulv', 'Mun', 'Mund', 'Muv', 'Muvr', 'Myv', 'Myvr', 'Nad',
    'Nade', 'Nal', 'Nala', 'Nalm', 'Nals', 'Nalv', 'Nar', 'Nard', 'Nare',
    'Nari', 'Nart', 'Nat', 'Nath', 'Ned', 'Nede', 'Nel', 'Nelm', 'Nels',
    'Neph', 'Ner', 'Neri', 'Nerv', 'Nev', 'Neva', 'Neve', 'Nevr', 'Nevu',
    'Nid', 'Nida', 'Nidr', 'Nil', 'Nile', 'Nilu', 'Nilv', 'Nin', 'Nina',
    'Nir', 'Nira', 'Nire', 'Nol', 'Nold', 'Nor', 'Nora', 'Not', 'Noth', 'Nov',
    'Nove', 'Novr', 'Nul', 'Nule', 'Nur', 'Nuri', 'Olv', 'Olvy', 'Ome',
    'Omes', 'Ore', 'Orer', 'Orv', 'Orvo', 'Rad', 'Rade', 'Ral', 'Rald',
    'Rals', 'Ran', 'Rani', 'Rano', 'Rar', 'Raru', 'Rarv', 'Rat', 'Rath',
    'Rav', 'Rava', 'Rave', 'Ravo', 'Ray', 'Rayn', 'Rel', 'Rela', 'Relm',
    'Relo', 'Relv', 'Rem', 'Rema', 'Rer', 'Reri', 'Rery', 'Rey', 'Reyn',
    'Rid', 'Ride', 'Ril', 'Rila', 'Rilv', 'Rin', 'Rino', 'Rir', 'Rira', 'Rol',
    'Rola', 'Run', 'Rune', 'Rut', 'Ruth', 'Ruv', 'Ruve', 'Sad', 'Sada',
    'Sade', 'Sal', 'Sala', 'Salo', 'Saly', 'San', 'Sana', 'Sar', 'Saru',
    'Sat', 'Sath', 'Saty', 'Sav', 'Save', 'Savi', 'Sed', 'Sedr', 'Sedy',
    'Sel', 'Selv', 'Sen', 'Seni', 'Ser', 'Seri', 'Sern', 'Sery', 'Set',
    'Seth', 'Sev', 'Seva', 'Sevi', 'Sevy', 'Shel', 'Sher', 'Sod', 'Sodr',
    'Son', 'Sond', 'Sor', 'Soro', 'Sov', 'Sova', 'Sovi', 'Sul', 'Suld', 'Suv',
    'Suva', 'Syn', 'Synd', 'Tab', 'Tad', 'Tada', 'Tade', 'Tadr', 'Tal',
    'Tala', 'Talm', 'Tals', 'Talu', 'Tam', 'Tami', 'Tan', 'Tana', 'Tand',
    'Tani', 'Tanu', 'Tar', 'Tara', 'Tav', 'Tavi', 'Tavy', 'Ted', 'Tedy',
    'Tel', 'Tele', 'Telu', 'Ten', 'Tena', 'Teni', 'Ter', 'Tere', 'Teri',
    'Teru', 'Tery', 'Tha', 'Thal', 'Thav', 'The', 'Thel', 'Ther', 'Thi',
    'Thil', 'Tho', 'Thov', 'Thu', 'Thur', 'Til', 'Tile', 'Tili', 'Tilo',
    'Tils', 'Tin', 'Tina', 'Tir', 'Tira', 'Tire', 'Tiv', 'Tive', 'Tol',
    'Toli', 'Tolm', 'Tolv', 'Ton', 'Tona', 'Tor', 'Tora', 'Toro', 'Tra',
    'Tral', 'Tray', 'Tre', 'Tred', 'Trem', 'Trer', 'Tri', 'Triv', 'Tum',
    'Tums', 'Tun', 'Tuni', 'Tuv', 'Tuve', 'Ule', 'Ulen', 'Ulm', 'Ulme',
    'Ulmi', 'Ulv', 'Ulve', 'Uly', 'Ulyn', 'Und', 'Unde', 'Uni', 'Unil', 'Ura',
    'Uran', 'Urav', 'Ure', 'Uren', 'Ures', 'Urn', 'Urns', 'Urt', 'Urti',
    'Ury', 'Uryn', 'Uup', 'Uups', 'Uvi', 'Uvis', 'Uvo', 'Uvoo', 'Vad', 'Vade',
    'Vadr', 'Vadu', 'Val', 'Valv', 'Valy', 'Var', 'Vara', 'Vare', 'Varo',
    'Varv', 'Vav', 'Vave', 'Vayn', 'Ved', 'Vede', 'Vel', 'Vela', 'Vely',
    'Ven', 'Vena', 'Vend', 'Ver', 'Vera', 'Verm', 'Vev', 'Vevr', 'Vil',
    'Vilv', 'Vin', 'Vind', 'Vir', 'Vire', 'Viv', 'Vivy', 'Vol', 'Vold',
    'Vole', 'Volm', 'Von', 'Vone', 'Vul', 'Vuld', 'Vuly'];
  const nm4 = ['adeni', 'adura', 'ahran', 'al', 'ala', 'alamu', 'ale', 'alea',
    'alenu', 'ali', 'alie', 'alin', 'alo', 'alsa', 'alyn', 'ama', 'ame',
    'amea', 'ami', 'amie', 'amu', 'ana', 'anda', 'ane', 'ani', 'anu', 'ar',
    'ara', 'are', 'ari', 'aris', 'aronea', 'aru', 'as', 'asa', 'ase', 'asea',
    'asi', 'asie', 'aso', 'assa', 'asu', 'atah', 'avenya', 'ayna', 'ayne',
    'aynea', 'aynu', 'cea', 'da', 'dal', 'dala', 'damea', 'dasa', 'dasea',
    'dasu', 'dela', 'deli', 'dena', 'deni', 'denu', 'dera', 'dere', 'dhil',
    'dile', 'diri', 'dosa', 'drala', 'drale', 'drasi', 'draso', 'drela',
    'drelo', 'dreni', 'dreri', 'dresa', 'dresi', 'drila', 'drisa', 'drise',
    'droni', 'dronu', 'dryn', 'dsa', 'dsea', 'dura', 'dyne', 'dynea', 'dyni',
    'ea', 'el', 'ela', 'ele', 'elea', 'eli', 'elle', 'en', 'ena', 'ene',
    'enea', 'eneri', 'eni', 'enie', 'eno', 'enu', 'enziah', 'era', 'ere',
    'erea', 'eri', 'ero', 'eru', 'eryne', 'es', 'esa', 'ese', 'esea', 'esi',
    'esie', 'eso', 'esu', 'eth', 'ethyne', 'ethys', 'everi', 'ffyn', 'fyn',
    'ha', 'hala', 'hasa', 'hasea', 'hasi', 'heri', 'hesa', 'hesi', 'hil',
    'hise', 'hran', 'hrisu', 'hulu', 'husa', 'hyne', 'hyno', 'ia', 'iah',
    'ie', 'iella', 'il', 'ila', 'ilar', 'ile', 'ilea', 'ili', 'ilia', 'ilie',
    'illo', 'ilo', 'ilu', 'inah', 'ira', 'iri', 'is', 'isa', 'ise', 'isea',
    'isi', 'isie', 'iso', 'isu', 'ith', 'ithah', 'ivah', 'la', 'lame', 'lamu',
    'lane', 'lar', 'lasa', 'layne', 'lcea', 'lda', 'ldraso', 'ldrisa', 'le',
    'lea', 'lene', 'lenu', 'leth', 'li', 'lia', 'liah', 'lie', 'lin', 'lisi',
    'lnosu', 'lo', 'lora', 'loru', 'losa', 'losea', 'lsa', 'lse', 'lsea',
    'lu', 'lurea', 'lvamu', 'lyn', 'lyna', 'lyne', 'ma', 'me', 'mea', 'mena',
    'mene', 'meni', 'mera', 'merea', 'mesa', 'mi', 'mie', 'mila', 'misa',
    'mona', 'msa', 'mu', 'myna', 'myne', 'myni', 'na', 'nali', 'nas', 'nasa',
    'nda', 'ndile', 'ndrale', 'ndreri', 'ndresa', 'ndrisa', 'ne', 'nea',
    'nel', 'nela', 'nelea', 'neri', 'ni', 'nie', 'nila', 'nili', 'nillo',
    'nisea', 'no', 'norea', 'nosa', 'nosu', 'nsi', 'nsu', 'nu', 'nus',
    'nziah', 'obah', 'ona', 'onah', 'one', 'onea', 'oni', 'onu', 'ora', 'ore',
    'orea', 'ori', 'oru', 'os', 'osa', 'ose', 'osea', 'osi', 'oso', 'othah',
    'ra', 'rala', 'rale', 'ramea', 'ramu', 'rana', 'rara', 'rasa', 'rasea',
    'rasi', 'ravenya', 'rayna', 'rayne', 'rayni', 're', 'rela', 'rele',
    'relo', 'renea', 'reni', 'reri', 'resi', 'ri', 'ria', 'riella', 'rila',
    'rile', 'rilu', 'ris', 'risa', 'rise', 'risea', 'risu', 'ro', 'ronea',
    'roni', 'ronu', 'ros', 'rose', 'rosi', 'ru', 'rue', 'rulea', 'rusa',
    'rusea', 'rvase', 'rvyne', 'ryn', 'ryna', 'ryne', 'rynea', 'ryra', 'sa',
    'se', 'sea', 'si', 'sie', 'so', 'ssa', 'stel', 'su', 'te', 'tel', 'th',
    'tha', 'thasa', 'thise', 'thyne', 'thyno', 'tise', 'ue', 'uise', 'ulea',
    'uli', 'ulu', 'ura', 'ure', 'urea', 'uri', 'uria', 'uro', 'uru', 'us',
    'usa', 'use', 'usea', 'ussa', 'usu', 'uva', 'va', 'vala', 'valie', 'vame',
    'vamu', 'vana', 'vane', 'vani', 'vas', 'vasa', 'vase', 'vasi', 'vasie',
    'vasu', 'vela', 'velea', 'veli', 'ven', 'vene', 'veni', 'vera', 'vere',
    'veri', 'vesa', 'vese', 'veso', 'vesu', 'vilie', 'vise', 'visie', 'viso',
    'vona', 'vone', 'vonu', 'vora', 'vosa', 'vosi', 'vsa', 'vse', 'vsea',
    'vuli', 'vura', 'vure', 'vyn', 'vyna', 'vyne', 'vynea', 'vyni', 'we',
    'ya', 'yana', 'yani', 'yla', 'yn', 'yna', 'ynasa', 'yne', 'ynea', 'yni',
    'ynili', 'yno', 'ynu', 'yra', 'ysa'];
  const nm5 = ['Ada', 'Adas', 'Adl', 'Adr', 'Adra', 'Adre', 'Adry', 'Adu',
    'Adus', 'Ala', 'Alam', 'Alan', 'Alar', 'Alas', 'Ale', 'Alen', 'Alo',
    'Alor', 'Alv', 'Alve', 'Alvo', 'Amo', 'Amor', 'And', 'Anda', 'Ando',
    'Andr', 'Andu', 'Apo', 'Ara', 'Arad', 'Aral', 'Aram', 'Aran', 'Arav',
    'Are', 'Arel', 'Aren', 'Ares', 'Aret', 'Ari', 'Arin', 'Arn', 'Arns',
    'Aro', 'Arob', 'Arot', 'Arv', 'Arva', 'Ary', 'Aryo', 'Arys', 'Ath',
    'Athe', 'Athi', 'Atho', 'Athr', 'Ava', 'Aval', 'Avan', 'Ave', 'Avel',
    'Avi', 'Avil', 'Bal', 'Bale', 'Balu', 'Balv', 'Ban', 'Band', 'Bar',
    'Bara', 'Bare', 'Baro', 'Baru', 'Bary', 'Bav', 'Bava', 'Bed', 'Beda',
    'Bel', 'Bela', 'Beld', 'Bele', 'Belo', 'Bels', 'Belv', 'Bem', 'Bemi',
    'Ben', 'Bene', 'Beni', 'Ber', 'Bera', 'Bere', 'Bero', 'Bet', 'Beth',
    'Bra', 'Brad', 'Brar', 'Brav', 'Bre', 'Bren', 'Bri', 'Bril', 'Car',
    'Carv', 'Dal', 'Dala', 'Dale', 'Dali', 'Dalo', 'Dals', 'Dalv', 'Dam',
    'Damo', 'Dan', 'Dano', 'Dar', 'Dara', 'Dare', 'Daro', 'Darv', 'Dary',
    'Dat', 'Dath', 'Dav', 'Davo', 'Davu', 'Day', 'Dayn', 'Del', 'Delm',
    'Delt', 'Delv', 'Dem', 'Demn', 'Der', 'Dera', 'Dev', 'Deva', 'Dil',
    'Dilm', 'Dob', 'Doba', 'Dol', 'Dolo', 'Dor', 'Dora', 'Dore', 'Dorv',
    'Dou', 'Doua', 'Dov', 'Dove', 'Dra', 'Drad', 'Dral', 'Dran', 'Drar',
    'Drat', 'Dre', 'Dred', 'Drel', 'Dren', 'Dres', 'Dret', 'Dri', 'Dril',
    'Drin', 'Driv', 'Dro', 'Drob', 'Drol', 'Drom', 'Dror', 'Drot', 'Dru',
    'Drur', 'Dul', 'Dule', 'Dulf', 'Duln', 'Dulo', 'Dur', 'Duro', 'Ela',
    'Elar', 'Eld', 'Eldr', 'Ele', 'Elen', 'Elv', 'Elva', 'Elvu', 'Enak',
    'Ert', 'Erti', 'Evo', 'Evos', 'Fad', 'Fada', 'Fal', 'Fala', 'Fale',
    'Falo', 'Fals', 'Falv', 'Fam', 'Famo', 'Fan', 'Fand', 'Far', 'Fara',
    'Fare', 'Faro', 'Fary', 'Fat', 'Fath', 'Fav', 'Fava', 'Fave', 'Fed',
    'Fedo', 'Fel', 'Fela', 'Feld', 'Fels', 'Fen', 'Fend', 'Fer', 'Fere',
    'Fev', 'Fevu', 'Fol', 'Folv', 'Fyr', 'Gad', 'Gada', 'Gal', 'Gale', 'Gals',
    'Gar', 'Gare', 'Gari', 'Garv', 'Gat', 'Gath', 'Gav', 'Gavo', 'Gavy',
    'Gid', 'Gidr', 'Gil', 'Gila', 'Giln', 'Gilv', 'Gim', 'Gima', 'Gimo',
    'Gin', 'Gind', 'Gini', 'Gir', 'Gira', 'Gire', 'Giri', 'Giro', 'Girv',
    'Giry', 'Git', 'Gith', 'Giv', 'Givy', 'Gob', 'Gobo', 'Gol', 'Gola',
    'Gols', 'Gor', 'Gora', 'Gorv', 'Grul', 'Gul', 'Guls', 'Guv', 'Guvr',
    'Har', 'Hard', 'Hel', 'Hela', 'Helb', 'Hele', 'Heln', 'Helo', 'Helv',
    'Hen', 'Heni', 'Her', 'Hera', 'Here', 'Hero', 'Hla', 'Hlaa', 'Hlan',
    'Hlar', 'Hlas', 'Hlav', 'Hle', 'Hled', 'Hlen', 'Hler', 'Hlo', 'Hlor',
    'Idr', 'Idre', 'Ien', 'Iene', 'Ieni', 'Ient', 'Ild', 'Ildr', 'Iln',
    'Ilni', 'Ima', 'Imay', 'Imy', 'Imya', 'Ind', 'Inda', 'Indo', 'Indr',
    'Indu', 'Inl', 'Inla', 'Ira', 'Iran', 'Irat', 'Ire', 'Iret', 'Kre',
    'Kren', 'Led', 'Ledd', 'Ler', 'Lera', 'Lla', 'Llad', 'Llan', 'Llar',
    'Lle', 'Llen', 'Ller', 'Llet', 'Llo', 'Llor', 'Llot', 'Lon', 'Lona',
    'Lyt', 'Lyth', 'Mad', 'Mada', 'Madr', 'Mal', 'Mala', 'Malo', 'Malv',
    'Man', 'Mana', 'Mand', 'Mane', 'Mano', 'Mar', 'Mare', 'Marv', 'Mary',
    'Mat', 'Math', 'Mav', 'Mava', 'Mel', 'Mels', 'Men', 'Mena', 'Menc', 'Mer',
    'Mery', 'Mil', 'Mila', 'Milo', 'Mir', 'Mire', 'Moab', 'Mol', 'Molo',
    'Mor', 'Mora', 'More', 'Morv', 'Mot', 'Moth', 'Nad', 'Nadr', 'Nadu',
    'Nal', 'Naly', 'Nar', 'Naro', 'Nas', 'Nasy', 'Nav', 'Navu', 'Ned', 'Neda',
    'Nel', 'Nela', 'Nele', 'Nelo', 'Nelv', 'Ner', 'Nera', 'Nere', 'Nero',
    'Neru', 'Nerv', 'Net', 'Neth', 'Nil', 'Nile', 'Nilv', 'Nir', 'Niri',
    'Nit', 'Nith', 'Nol', 'Nola', 'Nor', 'Norv', 'Not', 'Noth', 'Nul', 'Nule',
    'Nyr', 'Nyra', 'Ofe', 'Ofem', 'Oma', 'Omal', 'Oman', 'Omar', 'Omav',
    'Omay', 'Ome', 'Omel', 'Omo', 'Omor', 'Omot', 'Ond', 'Ondy', 'Onm',
    'Onma', 'Ora', 'Oran', 'Ore', 'Orel', 'Oren', 'Ores', 'Oret', 'Orey',
    'Ori', 'Oril', 'Oth', 'Otha', 'Othr', 'Qui', 'Quin', 'R\'', 'R\'zam',
    'Rad', 'Rada', 'Rado', 'Ral', 'Rala', 'Rale', 'Rall', 'Ralo', 'Ralv',
    'Ram', 'Rama', 'Ramo', 'Ran', 'Rand', 'Rar', 'Rara', 'Rat', 'Rath', 'Rav',
    'Rave', 'Ravi', 'Red', 'Reda', 'Redo', 'Rel', 'Rela', 'Rele', 'Reln',
    'Relo', 'Relv', 'Ren', 'Rend', 'Reni', 'Rer', 'Rera', 'Rerv', 'Ret',
    'Reth', 'Rey', 'Reya', 'Ril', 'Rilv', 'Rin', 'Rind', 'Rini', 'Riv',
    'Rivu', 'Rol', 'Rolo', 'Rols', 'Rom', 'Roma', 'Romo', 'Rot', 'Roth',
    'Rur', 'Rurv', 'Ryo', 'Ryon', 'S\'th', 'Sad', 'Sada', 'Sado', 'Sadr',
    'Sadu', 'Sail', 'Sal', 'Sala', 'Sale', 'Salm', 'Salo', 'Salv', 'Sam',
    'Sama', 'Samo', 'San', 'Sand', 'Sar', 'Sara', 'Sare', 'Sari', 'Saro',
    'Sarv', 'Sary', 'Sat', 'Sath', 'Sav', 'Sava', 'Save', 'Savi', 'Sed',
    'Seda', 'Sedr', 'Sel', 'Sela', 'Sele', 'Selo', 'Selv', 'Sen', 'Send',
    'Seni', 'Seno', 'Ser', 'Sera', 'Sere', 'Seri', 'Sero', 'Serv', 'Set',
    'Seth', 'Sur', 'Suri', 'T\'riz', 'Tal', 'Tald', 'Ted', 'Teda', 'Tedr',
    'Tel', 'Tela', 'Tele', 'Tell', 'Telm', 'Teln', 'Telv', 'Ten', 'Tene',
    'Teni', 'Ter', 'Tera', 'Teri', 'Terv', 'Tha', 'Thal', 'Than', 'Thar',
    'The', 'Thel', 'Them', 'Then', 'Ther', 'Thi', 'Thil', 'Thim', 'Thin',
    'Thir', 'Til', 'Tilv', 'Tis', 'Tist', 'Tob', 'Tobo', 'Tra', 'Tran', 'Tun',
    'Tune', 'Tur', 'Ture', 'Tyr', 'Tyra', 'Ule', 'Ulen', 'Ules', 'Ulo',
    'Ulom', 'Ulv', 'Ulve', 'Urn', 'Urns', 'Urv', 'Urvo', 'Urvy', 'Uva',
    'Uval', 'Uvan', 'Uvar', 'Uvay', 'Uve', 'Uvel', 'Uven', 'Uver', 'Uvi',
    'Uvir', 'Uvu', 'Uvul', 'Vad', 'Vadr', 'Val', 'Vala', 'Vale', 'Valn',
    'Valo', 'Vam', 'Vamo', 'Van', 'Vand', 'Var', 'Vara', 'Vare', 'Vari',
    'Varo', 'Vary', 'Vav', 'Vava', 'Vavy', 'Ved', 'Veda', 'Vedr', 'Vel',
    'Vela', 'Vele', 'Veln', 'Velo', 'Ven', 'Vend', 'Veni', 'Ver', 'Vera',
    'Vere', 'Veri', 'Vero', 'Ves', 'Vess', 'Via', 'Viak', 'Vian', 'Vib',
    'Viba', 'Vid', 'Vidr', 'Vil', 'Vila', 'Vin', 'Vind', 'Vir', 'Viri', 'Vol',
    'Volo', 'Vul', 'Vule'];
  const nm6 = ['aai', 'aal', 'ador', 'adren', 'ai', 'ain', 'al', 'alas', 'alen',
    'alnim', 'alo', 'alor', 'alu', 'alvel', 'am', 'an', 'andas', 'andes',
    'andil', 'ando', 'andus', 'ani', 'ano', 'ar', 'ara', 'aram', 'aren',
    'ari', 'arian', 'aro', 'aron', 'arvel', 'arys', 'as', 'ass', 'athil',
    'athram', 'athyn', 'ato', 'avel', 'avo', 'ayn', 'ayne', 'bar', 'bruk',
    'cele', 'dar', 'das', 'dayn', 'del', 'den', 'der', 'dil', 'do', 'dor',
    'dram', 'dran', 'dren', 'dri', 'ds', 'du', 'dus', 'dyn', 'edran', 'el',
    'elas', 'ele', 'eleth', 'elnim', 'elo', 'eloth', 'elvis', 'em', 'en',
    'enar', 'endas', 'endis', 'endus', 'enim', 'eno', 'er', 'eran', 'eri',
    'erus', 'es', 'eth', 'ethan', 'ethi', 'ethran', 'ethyl', 'evanni', 'fass',
    'halen', 'halnim', 'halor', 'han', 'handas', 'handus', 'hari', 'harian',
    'has', 'helas', 'heloth', 'hen', 'hendas', 'hendis', 'heran', 'hi', 'his',
    'hrano', 'hren', 'hri', 'hrimo', 'hro', 'hryon', 'hul', 'hyron', 'ia',
    'il', 'ilnith', 'ilo', 'ilu', 'im', 'in', 'ingi', 'inith', 'ion', 'iro',
    'is', 'ishpi', 'ith', 'ke', 'lan', 'landas', 'larvel', 'las', 'layn',
    'len', 'leno', 'ler', 'les', 'leth', 'lian', 'lis', 'llian', 'lnim',
    'lnith', 'lno', 'lnor', 'lo', 'lor', 'loth', 'ls', 'lu', 'lvel', 'lvi',
    'lvis', 'lyn', 'malen', 'malvel', 'man', 'mo', 'mon', 'ms', 'myn', 'ndas',
    'ndel', 'ndes', 'ndil', 'ndo', 'ndu', 'ndus', 'nes', 'nevanni', 'ngi',
    'ni', 'nil', 'nim', 'nith', 'no', 'nor', 'nos', 'ntella', 'nur', 'obar',
    'om', 'omo', 'on', 'one', 'ones', 'oni', 'or', 'oran', 'oren', 'ori',
    'oril', 'oro', 'os', 'oth', 'othan', 'othi', 'othran', 'othren', 'othril',
    'ovas', 'ovo', 'ra', 'ral', 'ralas', 'ralen', 'ralo', 'ralu', 'ram',
    'ran', 'randus', 'rani', 'rano', 'rar', 'rara', 'ravel', 'rayn', 'rel',
    'relas', 'releth', 'relo', 'reloth', 'ren', 'renim', 'rethi', 'ri', 'ril',
    'rilo', 'rimo', 'rith', 'ro', 'robar', 'rom', 'romo', 'ron', 'rothan',
    'rothi', 'rus', 'rvayn', 'rven', 'rvi', 'rvu', 'ryn', 'ryon', 'rys',
    'sen', 'shpi', 'ssen', 'tar', 'tella', 'th', 'than', 'thas', 'then',
    'thi', 'thram', 'thran', 'thren', 'thri', 'thril', 'thro', 'thyl', 'thyn',
    'tis', 'to', 'ul', 'ules', 'ulis', 'ur', 'us', 'valo', 'vam', 'vani',
    'varen', 'vas', 'vayn', 'vayne', 'vel', 'ven', 'vi', 'vilo', 'vion', 'vo',
    'von', 'vos', 'vu', 'vulis', 'vur', 'vyn', 'yal', 'yn', 'yon', 'yoni',
    'yron', 'ys'];
  {
    rnd3 = Math.floor(Math.random() * nm5.length);
    rnd4 = Math.floor(Math.random() * nm6.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm3[rnd] + nm4[rnd2]} ${nm5[rnd3]}${nm6[rnd4]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd] + nm2[rnd2]} ${nm5[rnd3]}${nm6[rnd4]}`;
    }
    return names;
  }
}
