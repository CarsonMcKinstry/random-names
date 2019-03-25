export default function bosmers() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aen', 'Aeng', 'Aga', 'Agar', 'Ale', 'Alen', 'All', 'Alli',
    'Alv', 'Alve', 'Amr', 'Amra', 'Amri', 'An', 'Ang', 'Angl', 'Angu', 'Ano',
    'Anor', 'Anr', 'Anru', 'Ar', 'Ara', 'Aran', 'Arat', 'Ath', 'Athr', 'Bae',
    'Baen', 'Baer', 'Bar', 'Bara', 'Bas', 'Bast', 'Ber', 'Bere', 'Bol',
    'Bolr', 'Bolw', 'Bra', 'Brag', 'Bral', 'Bre', 'Brel', 'Bri', 'Brit',
    'Bro', 'Brod', 'Brol', 'Cae', 'Caen', 'Cel', 'Cele', 'Cin', 'Cing', 'Cle',
    'Clen', 'Co', 'Cun', 'Dae', 'Daen', 'Dan', 'Dang', 'Den', 'Dene', 'Der',
    'Derv', 'Dir', 'Dird', 'Don', 'Dond', 'Edo', 'Edor', 'Elb', 'Elbe', 'Ele',
    'Eleg', 'Elis', 'Elo', 'Elor', 'Elr', 'Elri', 'End', 'Endr', 'Eng',
    'Enga', 'Engo', 'Eni', 'Enil', 'Ent', 'Enth', 'Era', 'Erad', 'Eras',
    'Eri', 'Erid', 'Err', 'Erra', 'Ert', 'Erth', 'Erv', 'Erva', 'Fae', 'Faen',
    'Fal', 'Fald', 'Far', 'Farg', 'Fau', 'Faul', 'Fil', 'Fill', 'Fim', 'Fimm',
    'Fin', 'Find', 'Fit', 'Fith', 'For', 'Foro', 'Gad', 'Gadn', 'Gae', 'Gael',
    'Gaen', 'Gal', 'Galm', 'Galt', 'Gaz', 'Gaza', 'Gel', 'Gele', 'Ger',
    'Gerr', 'Gir', 'Gird', 'Gla', 'Glar', 'Glau', 'Glo', 'Glon', 'Gloo',
    'God', 'Godr', 'Gor', 'Gorc', 'Gun', 'Gund', 'Gwi', 'Gwil', 'Gwin', 'Hag',
    'Haga', 'Hay', 'Haym', 'Hin', 'Hing', 'Hun', 'Hund', 'Karo', 'Lego', 'Li',
    'Mae', 'Maen', 'Mag', 'Magl', 'Mal', 'Malb', 'Man', 'Mank', 'Mel', 'Meld',
    'Men', 'Mene', 'Min', 'Mine', 'Ming', 'Mon', 'Mont', 'Mor', 'Mort', 'Nal',
    'Nali', 'Ned', 'Nedh', 'Nir', 'Nira', 'Niru', 'Nor', 'Nord', 'Orb',
    'Orbe', 'Orc', 'Orch', 'Pali', 'Peg', 'Pega', 'Per', 'Pera', 'Ria', 'Rin',
    'Rind', 'Rit', 'Rith', 'Ron', 'Ront', 'Sil', 'Syl', 'Sylc', 'Syn', 'Synd',
    'Ta', 'Tar', 'Tarh', 'Tha', 'Thad', 'Thae', 'Thau', 'Tho', 'Thor', 'Thr',
    'Thra', 'Thu', 'Thur', 'Tuu', 'Tuun', 'Ulw', 'Ulwa', 'Ung', 'Unge',
    'Ungo', 'Ungr', 'Uru', 'Urun', 'Uun', 'Uung', 'Uur', 'Uura', 'Val', 'Vali',
  ];
  const nm2 = ['adan', 'adras', 'aegaer', 'aen', 'aer', 'agar', 'agon', 'agor',
    'agoth', 'al', 'alas', 'alem', 'alorn', 'alos', 'an', 'angirfin', 'ar',
    'as', 'asai', 'ast', 'born', 'bros', 'chalas', 'cher', 'chond', 'chor',
    'dal', 'dalas', 'dan', 'dell', 'dhel', 'dil', 'ding', 'dinor', 'dir',
    'dis', 'dol', 'dolin', 'don', 'dor', 'dras', 'driel', 'duin', 'dulain',
    'dus', 'ebros', 'edhel', 'egaer', 'egor', 'egorn', 'elas', 'eleb', 'eleg',
    'elfin', 'elor', 'elorn', 'elras', 'engeval', 'endor', 'enin', 'ephor',
    'er', 'eroth', 'fin', 'gaer', 'gal', 'gan', 'glos', 'gon', 'gor', 'gorn',
    'goth', 'gvir', 'hadan', 'halas', 'haur', 'helas', 'helfin', 'helorn',
    'hen', 'hendor', 'hiel', 'hil', 'hir', 'hndil', 'hor', 'hragaer',
    'hragoth', 'hrannir', 'hroth', 'iath', 'iel', 'ien', 'il', 'ilgor',
    'ilon', 'imir', 'in', 'indil', 'indir', 'indor', 'ing', 'inor', 'ion',
    'ior', 'ir', 'irin', 'kar', 'lalos', 'las', 'ldol', 'leb', 'leg', 'lem',
    'lern', 'lgor', 'lim', 'lin', 'lion', 'lir', 'llin', 'llion', 'lmir',
    'lor', 'lorn', 'los', 'lras', 'lroth', 'man', 'mion', 'mir', 'mirn', 'mo',
    'mon', 'nagoth', 'nas', 'ndal', 'ndil', 'ndir', 'ndis', 'ndor', 'ng',
    'ngeval', 'ngirfin', 'nil', 'nim', 'nir', 'nis', 'nlin', 'nlorn', 'nnir',
    'nor', 'och', 'olim', 'olin', 'omlallor', 'on', 'ond', 'onir', 'onor',
    'or', 'ore', 'oren', 'orm', 'orn', 'orolros', 'oron', 'os', 'oth', 'phor',
    'ragaer', 'ragar', 'ralorn', 'rannir', 'ras', 'rast', 'relor', 'rfin',
    'riath', 'rien', 'rilgor', 'rim', 'rin', 'rindil', 'ring', 'rm', 'rolros',
    'romlallor', 'rond', 'ronir', 'ronor', 'ros', 'roth', 'rron', 'rthir',
    'sai', 'smo', 'sor', 'tan', 'th', 'thadan', 'thaur', 'thil', 'thir',
    'thor', 'thragoth', 'throth', 'uilon', 'uin', 'ulain', 'um', 'urron',
    'us', 'van', 'venin', 'vir', 'wing'];
  const nm3 = ['Ada', 'Adan', 'Aer', 'Aeri', 'Agl', 'Agla', 'Ala', 'Alaw',
    'All', 'Alle', 'Alt', 'Alth', 'And', 'Andr', 'Ane', 'Aned', 'Ang', 'Angr',
    'Anr', 'Anre', 'Anu', 'Anur', 'Ara', 'Arae', 'Area', 'Arad', 'Aran',
    'Arean', 'Ard', 'Ard', 'Ardh', 'Ardw', 'Are', 'Ared', 'Bau', 'Bou',
    'Baur', 'Bour', 'Bael', 'Bel', 'Bele', 'Belw', 'Ber', 'Berw', 'Bor',
    'Beor', 'Boro', 'Borw', 'Bot', 'Both', 'Bre', 'Brel', 'Car', 'Carw',
    'Cas', 'Cel', 'Cele', 'Cii', 'Ciin', 'Cir', 'Cirw', 'Cuu', 'Cuun', 'Cyl',
    'Dag', 'Daga', 'Dai', 'Dair', 'Deg', 'Degi', 'Den', 'Denn', 'Des', 'Dis',
    'Dist', 'Don', 'Dond', 'Dot', 'Deot', 'Doth', 'Doth', 'Dre', 'Dred',
    'Ein', 'Eind', 'Ele', 'Eleg', 'Elp', 'Elph', 'Elr', 'Elra', 'Els', 'Elsy',
    'Eme', 'Emel', 'Era', 'Eral', 'Est', 'Esti', 'Fael', 'Fal', 'Fali',
    'Faeli', 'Far', 'Fara', 'Fau', 'Faur', 'Fil', 'Filb', 'Gal', 'Gael',
    'Geal', 'Gala', 'Galb', 'Gald', 'Gan', 'Ganr', 'Gel', 'Geld', 'Gil',
    'Gild', 'Gin', 'Gini', 'Git', 'Gith', 'Gla', 'Glat', 'Has', 'Hasa', 'Huu',
    'Huur', 'Hyn', 'Hyna', 'Idr', 'Idro', 'Iin', 'Iing', 'Ind', 'Indr', 'Irw',
    'Irwa', 'Kaa', 'Kaal', 'Kir', 'Kirs', 'Lae', 'Laen', 'Lar', 'Lara',
    'Lare', 'Lego', 'Lie', 'Liet', 'Lilis', 'Lor', 'Lorc', 'Man', 'Mand',
    'Mar', 'Mara', 'Men', 'Mene', 'Met', 'Meth', 'Mil', 'Milb', 'Min', 'Naa',
    'Naar', 'Nae', 'Nael', 'Nat', 'Naet', 'Nate', 'Nath', 'Nil', 'Niol',
    'Nila', 'Nili', 'Nim', 'Niom', 'Nimp', 'Nimr', 'Niv', 'Nive', 'Non',
    'Nona', 'Par', 'Parw', 'Pen', 'Peng', 'Phy', 'Rad', 'Radr', 'Rilli',
    'Sam', 'Sami', 'Sel', 'Sele', 'Si', 'Syl', 'Syel', 'Tel', 'Tela', 'Tha',
    'Tha', 'Theo', 'Thea', 'Thae', 'Thae', 'Thal', 'Tham', 'Thi', 'Thii', 'U',
    'Ula', 'Ulan', 'Uur', 'Uurw', 'Vla', 'Vlan', 'Wyl', 'Wyla'];
  const nm4 = ['a', 'ae', 'ane', 'aone', 'aon', 'aen', 'afil', 'agail', 'agil',
    'ael', 'ail', 'althir', 'an', 'aril', 'aes', 'as', 'athil', 'awen',
    'bedir', 'beneth', 'bereth', 'chel', 'cialfin', 'dan', 'del', 'dhael',
    'dhel', 'dhwen', 'diir', 'diol', 'dael', 'diel', 'dil', 'draaendril',
    'draedil', 'draen', 'dreth', 'duin', 'edh', 'edhel', 'edir', 'egil',
    'ael', 'elaen', 'elyn', 'eylin', 'aelyn', 'aelin', 'elin', 'aen', 'enyl',
    'aenyl', 'en', 'eneth', 'aeneth', 'enandriah', 'endril', 'ene', 'enena',
    'enenor', 'eneth', 'ereth', 'eril', 'esse', 'fin', 'gaerwen', 'gail',
    'gael', 'gillys', 'glithil', 'gnan', 'haneth', 'hael', 'haelyn', 'helen',
    'hel', 'helathil', 'hiel', 'hael', 'hien', 'hil', 'hiron', 'hredhel',
    'hriian', 'hruviel', 'hwen', 'ia', 'icia', 'ielyn', 'ieleth', 'ielyl',
    'iel', 'ien', 'ifin', 'ihill', 'iir', 'ilyn', 'ileth', 'il', 'illas',
    'ilphaneth', 'ilwen', 'inyth', 'in', 'inan', 'ingil', 'inriel', 'inthil',
    'ion', 'ioniel', 'iron', 'lin', 'lyth', 'ldil', 'lian', 'lin', 'lin',
    'lithil', 'lthir', 'lwen', 'na', 'nafil', 'nan', 'naen', 'ndil', 'ndrae',
    'ndra', 'ndriah', 'ne', 'nel', 'neth', 'ngaer', 'ngil', 'nia', 'nilwen',
    'nmriel', 'nor', 'nrel', 'nwen', 'olian', 'on', 'ond', 'oneth', 'oniel',
    'raenriel', 'ragil', 'ras', 'rchel', 'raedhel', 'redhel', 'rel', 'rael',
    'reth', 'riel', 'rifin', 'rihill', 'riian', 'rilin', 'ril', 'rilirchel',
    'rin', 'rinthil', 'rond', 'ruviel', 'rwen', 'sse', 'sty', 'te', 'tel',
    'thel', 'thilith', 'thil', 'tte', 'ty', 'uin', 'val', 'wedh', 'waen',
    'wenyl', 'weneth', 'weanyl', 'waenyl', 'weanyth', 'waenyth', 'wen',
    'weneval', 'ynia', 'dra', 'fina', 'gina', 'landra', 'lerva', 'nea', 'nia',
    'sa', 'sandra', 'thia', 'ys'];
  const nm5 = ['Acorn', 'Apple', 'Balf', 'Bark', 'Blue', 'Camo', 'Dorn', 'Dusk',
    'Elm', 'Fern', 'Forest', 'Green', 'Ivy', 'Lichen', 'Lumber', 'Moss',
    'Night', 'Oak', 'Oaken', 'Pine', 'River', 'Rose', 'Sage', 'Seed', 'Shady',
    'Soft', 'Spring', 'Timber', 'Willow'];
  const nm6 = ['blossom', 'branch', 'brook', 'dale', 'grass', 'grove', 'hollow',
    'lake', 'lock', 'mire', 'pool', 'rock', 'run', 'scrub', 'shade', 'sky',
    'stone', 'thorn', 'vale', 'wind', 'wing', 'wood']; {
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
