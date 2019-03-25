import sample from 'lodash/sample';

export default function spaceMarines() {
  let names;
  const nm1 = ['Abdaziel', 'Abdiel', 'Abrariel', 'Adnachiel', 'Adonael', 'Adriel', 'Afriel', 'Akhazriel', 'Akriel', 'Ambriel', 'Amitiel', 'Amriel', 'Anael', 'Anaiel', 'Anaphiel', 'Anapiel', 'Anauel', 'Anpiel', 'Ansiel', 'Aphael', 'Aradiel', 'Arael', 'Araqiel', 'Araquiel', 'Arariel', 'Azrael', 'Azriel', 'Barachiel', 'Baradiel', 'Barakiel', 'Baraqiel', 'Barattiel', 'Barbiel', 'Barchiel', 'Bariel', 'Barquiel', 'Barrattiel', 'Baruchiel', 'Bethuel', 'Boamiel', 'Cadriel', 'Camael', 'Camiel', 'Caphriel', 'Cassiel', 'Castiel', 'Cerviel', 'Chamuel', 'Chayliel', 'Dabriel', 'Dagiel', 'Dalquiel', 'Daniel', 'Dardariel', 'Diniel', 'Domiel', 'Dubbiel', 'Emmanuel', 'Eremiel', 'Ezekiel', 'Ezequiel', 'Gabriel', 'Gadiel', 'Gadreel', 'Gadriel', 'Gagiel', 'Galgaliel', 'Gazardiel', 'Geburatiel', 'Germael', 'Habriel', 'Hadariel', 'Hadramiel', 'Hadraniel', 'Hadriel', 'Hakael', 'Hamael', 'Hamaliel', 'Hasdiel', 'Hayliel', 'Hermesiel', 'Hochmael', 'Hofniel', 'Humatiel', 'Humiel', 'Incarael', 'Ishmael', 'Israfel', 'Israfiel', 'Israfil', 'Ithuriel', 'Jehudiel', 'Jeremiel', 'Kabshiel', 'Kadmiel', 'Kafziel', 'Kalaziel', 'Karael', 'Kasbiel', 'Kemuel', 'Kerubiel', 'Khamael', 'Labbiel', 'Lahabiel', 'Machidiel', 'Malchediel', 'Mazrael', 'Michael', 'Mihael', 'Morael', 'Mordigael', 'Mydaiel', 'Naaririel', 'Nahaliel', 'Nanael', 'Narcariel', 'Nasargiel', 'Nathanael', 'Nathaniel', 'Nelchael', 'Omael', 'Omniel', 'Onafiel', 'Ophaniel', 'Ophiel', 'Orphamiel', 'Osmadiel', 'Pathiel', 'Peliel', 'Peniel', 'Perpetiel', 'Phanuel', 'Pyriel', 'Qaphsiel', 'Qaspiel', 'Quabriel', 'Rachmiel', 'Radfael', 'Radueriel', 'Raduriel', 'Rahatiel', 'Rahmiel', 'Ramiel', 'Raphael', 'Rasiel', 'Rathanael', 'Razael', 'Raziel', 'Rehael', 'Remiel', 'Remliel', 'Rhamiel', 'Rikbiel', 'Rogziel', 'Rufeal', 'Ruhiel', 'Sabathiel', 'Sabrael', 'Sachael', 'Sachiel', 'Salathiel', 'Samael', 'Samandiriel', 'Samandriel', 'Samkiel', 'Sammael', 'Saniel', 'Sarandiel', 'Sariel', 'Satqiel', 'Sealtiel', 'Seraphiel', 'Shamsiel', 'Simiel', 'Stadiel', 'Suriel', 'Tadhiel', 'Tamiel', 'Tatrasiel', 'Theliel', 'Turiel', 'Turmiel', 'Uriel', 'Usiel', 'Uzziel', 'Vretiel', 'Yerachmiel', 'Yeshamiel', 'Zacharael', 'Zachariel', 'Zachriel', 'Zadkiel', 'Zahariel', 'Zaphiel', 'Zazriel', 'Zophiel', 'Zuriel'];
  const nm2 = ['Abra', 'Ale', 'Alge', 'Alle', 'Alva', 'Ama', 'Apo', 'Arca', 'Archa', 'Are', 'Arge', 'Arte', 'Ata', 'Atana', 'Athi', 'Augu', 'Auto', 'Avi', 'Avu', 'Axa', 'Ba', 'Be', 'Belle', 'Bo', 'Borea', 'Ca', 'Cae', 'Caele', 'Caldi', 'Cassia', 'Cassio', 'Cassiu', 'Ce', 'Centu', 'Cleu', 'Co', 'Consta', 'Consu', 'Corio', 'Corne', 'Corvu', 'Cra', 'Cy', 'Cyru', 'Da', 'Dae', 'Damo', 'Dariu', 'Deme', 'Desti', 'Dio', 'Do', 'Domi', 'Ela', 'Ely', 'Eno', 'Epheu', 'Epi', 'Era', 'Eume', 'Fa', 'Fabiu', 'Fennia', 'Fenniu', 'Ferru', 'Fi', 'Firlu', 'Go', 'Gordia', 'Gothcha', 'Grae', 'Gre', 'Gri', 'Grima', 'Ha', 'Hadrio', 'Hea', 'Heli', 'Helve', 'Ho', 'Holo', 'Hono', 'Hy', 'Hype', 'Ica', 'Igna', 'Ikti', 'Invi', 'Ja', 'Janu', 'Ju', 'Juliu', 'Kae', 'Ko', 'Lae', 'Lame', 'Laza', 'Leo', 'Leode', 'Leona', 'Liciu', 'Lu', 'Luctu', 'Ludo', 'Ly', 'Lysi', 'Ma', 'Mandu', 'Maneu', 'Mariu', 'Marte', 'Maxi', 'Me', 'Mephi', 'Mero', 'Mettiu', 'Mi', 'Mike', 'Milu', 'Mora', 'Myki', 'Ne', 'Nele', 'No', 'Ome', 'Ore', 'Oria', 'Pa', 'Palla', 'Pe', 'Pella', 'Pera', 'Petiu', 'Pra', 'Prae', 'Qui', 'Ra', 'Rammiu', 'Re', 'Remu', 'Rena', 'Rheto', 'Rui', 'Sa', 'Sangui', 'Se', 'Sera', 'Seve', 'Sica', 'Soli', 'Tae', 'Tha', 'Theo', 'Tho', 'Thra', 'Tire', 'Titu', 'Tole', 'Toria', 'Try', 'Tybe', 'Va', 'Valle', 'Vite'];
  const nm3 = ['beros', 'bius', 'canus', 'carius', 'ccimius', 'ceus', 'cius', 'ctus', 'ddeus', 'des', 'deus', 'dia', 'dis', 'dius', 'dosios', 'drios', 'garius', 'goras', 'gris', 'gus', 'kelus', 'kilus', 'lanus', 'lcus', 'ldimus', 'ldus', 'lestis', 'leus', 'licanus', 'linus', 'lis', 'lius', 'lixus', 'llas', 'llenus', 'llian', 'llios', 'llius', 'llo', 'llus', 'lochus', 'los', 'ltus', 'lus', 'machus', 'maldus', 'medes', 'menes', 'metheus', 'mion', 'mis', 'mmius', 'mos', 'mus', 'natos', 'natus', 'nduls', 'ndus', 'nes', 'neus', 'nicus', 'nius', 'nnias', 'nnius', 'nnus', 'ntinus', 'ntis', 'ntius', 'ntos', 'nus', 'pheus', 'phicus', 'phis', 'ptus', 'ras', 'ratos', 'rbus', 'rdian', 'reas', 'rex', 'rias', 'rion', 'rius', 'rlus', 'rnon', 'ron', 'ros', 'rpheus', 'rpus', 'rrus', 'rtes', 'rthus', 'rus', 'rvus', 'scios', 'sias', 'sios', 'sius', 'ssian', 'ssios', 'ssius', 'ssos', 'ssus', 'stin', 'stis', 'ston', 'sus', 'theus', 'thios', 'thos', 'ticus', 'tin', 'tinos', 'tio', 'tios', 'tius', 'tor', 'trios', 'trius', 'ttius', 'tus', 'tutus', 'verus', 'vius', 'vus', 'ximus', 'xis', 'xus', 'zarus'];
  const nm4 = ['Akio', 'Andro', 'Aqui', 'Avi', 'Be', 'Beru', 'Ca', 'Cassiu', 'Ce', 'Co', 'Cora', 'Corda', 'Cy', 'Cybu', 'Dio', 'Dra', 'Fa', 'Fabri', 'Gie', 'Invi', 'Isso', 'Ky', 'Kyra', 'Ma', 'Manu', 'Me', 'Mede', 'Mo', 'Morre', 'Nu', 'Octa', 'Orio', 'Orty', 'Pho', 'Po', 'Polu', 'Sca', 'Si', 'Sica', 'So', 'Sola', 'Stro', 'Ta', 'Tari', 'Te', 'Telio', 'Ti', 'Tibe', 'Tigu', 'Titu', 'Tra', 'Tri', 'Trisme', 'Ty', 'Venta', 'Vi', 'Vibiu'];
  const nm5 = ['bius', 'bus', 'cles', 'cos', 'ctus', 'cus', 'des', 'dexus', 'don', 'gistus', 'gus', 'kios', 'kus', 'la', 'laris', 'lion', 'lis', 'llis', 'lux', 'medes', 'meon', 'ncus', 'nos', 'ntanus', 'nus', 'ras', 'rax', 'rdatus', 'rian', 'ricus', 'rikus', 'rion', 'ris', 'rius', 'ro', 'ros', 'rus', 's', 'sius', 'ssius', 'stus', 'tanus', 'tus', 'tys', 'vius', 'xus', 'yus'];
  const nm6 = ['Aar', 'Act', 'Aeg', 'Aeth', 'Al', 'Alar', 'Aldr', 'Aldw', 'Aleh', 'Aler', 'Alr', 'And', 'Andr', 'Ansg', 'Anv', 'Ard', 'Arg', 'Arj', 'Ark', 'Arm', 'Armar', 'Arv', 'Ash', 'Aud', 'Bael', 'Bald', 'Balt', 'Bann', 'Belph', 'Ben', 'Bened', 'Beth', 'Bheh', 'Bj', 'Bol', 'Bolin', 'Br', 'Brayd', 'Bulv', 'Cad', 'Cadm', 'Can', 'Car', 'Carn', 'Cast', 'Daarm', 'Daem', 'Darn', 'Dav', 'Drum', 'Drust', 'Dur', 'Eadw', 'Ech', 'Eck', 'Ed', 'Efr', 'Eg', 'El', 'Eng', 'Er', 'Esdr', 'Feirr', 'Felg', 'Fr', 'Fug', 'Gal', 'Gann', 'Garr', 'Gerh', 'Gervh', 'Gess', 'Gnaer', 'Gnyr', 'Graev', 'Grivn', 'Grol', 'Gunn', 'Gym', 'Haak', 'Hagr', 'Halbr', 'Haldr', 'Har', 'Harv', 'Has', 'Hect', 'Heinm', 'Helbr', 'Helg', 'Hengh', 'Herv', 'Hoen', 'Hold', 'Horn', 'Horthg', 'Hr', 'Hwyg', 'Indr', 'Ingv', 'Jerr', 'Jog', 'Jogh', 'Jon', 'Jor', 'Jub', 'Jul', 'Jurg', 'KRist', 'Kaer', 'Kald', 'Kalg', 'Kard', 'Karl', 'Karr', 'Keil', 'Ker', 'Kj', 'Kl', 'Kordh', 'Kr', 'Kreg', 'Kv', 'Lefv', 'Lem', 'Lod', 'Log', 'Lorg', 'Luk', 'Magn', 'Makl', 'Neod', 'Ner', 'Nid', 'Ol', 'Olb', 'Or', 'Orl', 'Ort', 'Ow', 'Ragn', 'Rakm', 'Rald', 'Ran', 'Reg', 'Rem', 'Rog', 'Ryn', 'Sab', 'Seg', 'Segl', 'Sel', 'Sevr', 'Seyd', 'Sief', 'Sig', 'Sigv', 'Skv', 'Sv', 'Talb', 'Tark', 'Tarn', 'Tob', 'Torbj', 'Torf', 'Torgh', 'Torv', 'Traj', 'Ulr', 'Var', 'Varr', 'Vayl', 'Vos', 'Vulk'];
  const nm7 = ['aar', 'ab', 'abro', 'ac', 'ach', 'aen', 'af', 'ah', 'aidin', 'ak', 'al', 'ald', 'an', 'and', 'ann', 'ant', 'ar', 'ard', 'aric', 'arl', 'aros', 'arr', 'art', 'as', 'ast', 'atan', 'aten', 'ath', 'ayden', 'eas', 'echt', 'ed', 'edict', 'egor', 'ehan', 'ehart', 'eifvar', 'ek', 'el', 'elan', 'em', 'en', 'eon', 'er', 'erin', 'esk', 'eyr', 'iak', 'ian', 'ias', 'ic', 'ick', 'ict', 'ied', 'ig', 'ik', 'il', 'in', 'indal', 'ine', 'invar', 'ion', 'ios', 'ir', 'is', 'ismund', 'ist', 'oan', 'oc', 'och', 'od', 'oec', 'off', 'ok', 'old', 'om', 'on', 'or', 'orn', 'oron', 'os', 'ot', 'oth', 'ovar', 'ul', 'ulf', 'ulon', 'un', 'und', 'ur', 'us', 'yn', 'yrll'];
  const nm8 = ['Ash', 'Battle', 'Black', 'Blood', 'Blue', 'Boulder', 'Cog', 'Dagger', 'Dark', 'Dead', 'Death', 'Doom', 'Dragon', 'Fell', 'Fire', 'Frost', 'Ghost', 'Gore', 'Grim', 'Hammer', 'Hell', 'Ice', 'Iron', 'Kraken', 'Rage', 'Red', 'Rock', 'Silver', 'Skull', 'Stark', 'Steel', 'Stone', 'Storm', 'Strong', 'Thunder', 'Twice', 'Umber', 'War'];
  const nm9 = ['blade', 'bleeder', 'blood', 'born', 'breaker', 'bringer', 'brow', 'caller', 'claw', 'cleaver', 'crusher', 'dust', 'fall', 'fang', 'fist', 'fisted', 'flayer', 'fury', 'gaze', 'hair', 'hammer', 'hand', 'handed', 'horn', 'howl', 'mane', 'mantle', 'maul', 'maw', 'moon', 'rage', 'scream', 'seeker', 'shield', 'slain', 'sword', 'tooth', 'walker', 'wolf'];
  const nm10 = ['Aga', 'Agapi', 'Aha', 'Ai', 'Ale', 'Ama', 'Ange', 'Anta', 'Asmo', 'Aste', 'Asto', 'Au', 'Avi', 'Aza', 'Azkae', 'Be', 'Belia', 'Bhar\'', 'Bo', 'Boka', 'Bray\'', 'Car', 'Carna', 'Carnae', 'Cema', 'Chi', 'Chry', 'Corbu', 'Cu', 'Cy', 'Da', 'Dak\'', 'Darrio', 'Dasei', 'Dra', 'Dri', 'Enp', 'Eoni', 'Fu', 'Gaui', 'Gero', 'Glo', 'Gri', 'Gui', 'Heka', 'Iga', 'Isa', 'Issa', 'Ja', 'Jagha', 'Je', 'Jemu', 'K\'', 'Kardo', 'Key', 'Kha', 'Khoi', 'Khy', 'Kori', 'Korvy', 'Kyu', 'Lavi', 'Laze', 'Ly', 'Lycao', 'Ma', 'Mae', 'Mala', 'Malu', 'Marqo', 'Maxi', 'Mercae', 'Mo', 'Molo', 'Morda', 'Na', 'Naa', 'Nassi', 'Nava', 'Ne', 'Necto', 'Neme', 'No', 'Numi', 'Nyko', 'Pa', 'Pae', 'Paele', 'Pho', 'Pto', 'Rha', 'Rohi', 'Romo', 'Sa', 'Sappho', 'Sarpe', 'Sca', 'Scama', 'Sci', 'Senti', 'Sepha', 'Seve', 'Shai', 'Shen\'', 'Ska', 'Skala', 'Skata', 'Ske', 'Sola', 'Subo', 'Szo', 'Tae', 'Talu', 'Tar\'', 'Targu', 'Tela', 'Tho', 'Thu', 'Toha', 'Tsu\'', 'Tu\'', 'Urga', 'Vai\'', 'Vara', 'Vashi', 'Vee', 'Vel\'', 'Vena', 'Verma', 'Verro', 'Volo', 'Xe', 'Xeri', 'Xero', 'Yafri', 'Yaro', 'Zarta', 'Zhe', 'Zhru', 'Zu', 'Zuru'];
  const nm11 = ['ban', 'bdek', 'be', 'blai', 'bor', 'bulum', 'caon', 'char', 'chia', 'chite', 'co', 'cole', 'cona', 'ctor', 'dae', 'dai', 'don', 'dor', 'drakk', 'driik', 'fen', 'frir', 'gan', 'go', 'gol', 'grim', 'gum', 'gutai', 'hiam', 'hr', 'jz', 'kal', 'kar', 'kari', 'katon', 'kha', 'kim', 'kir', 'kona', 'lach', 'lakim', 'lan', 'laro', 'lavech', 'lemy', 'ler', 'lgaar', 'lial', 'lian', 'lkca', 'llig', 'llion', 'llon', 'los', 'lsa', 'lus', 'mah', 'makar', 'man', 'mech', 'mine', 'mmon', 'nder', 'ndian', 'nea', 'nian', 'nid', 'nitan', 'noch', 'nos', 'pico', 'pito', 'pphon', 'ra', 'rah', 'ram', 'rast', 'rath', 'rbul', 'rbulo', 'rcyra', 'rdaci', 'rdan', 'rdova', 'ren', 'resh', 'rh', 'riah', 'riam', 'rian', 'rica', 'rkov', 'rleo', 'rnous', 'ro', 'ron', 'ros', 'rpico', 'rqol', 'rrion', 'rrox', 'rtath', 'rtes', 'rus', 'rvon', 'ryon', 'san', 'sarro', 'sein', 'shan', 'slan', 'ssir', 'stion', 'tai', 'tan', 'taron', 'tek', 'ter', 'thak', 'thar', 'ther', 'thigg', 'tikan', 'tor', 'trok', 'trus', 'vaan', 'var', 'vech', 'veren', 'viton', 'von', 'vydae', 'xx', 'zlo', 'zra'];
  const nm12 = ['Ab', 'Ad', 'Ak', 'Alb', 'Alv', 'Am', 'Andr', 'Aq', 'Ber', 'Bl', 'Blant', 'Blay', 'C', 'Calg', 'Ch', 'Chr', 'Cort', 'Cyb', 'Dar', 'Dars', 'Dom', 'Elg', 'Eng', 'F', 'Ferr', 'Fur', 'G', 'Gr', 'Grenz', 'Guill', 'H', 'Hest', 'Inv', 'Iss', 'K', 'Kan', 'Kant', 'Karr', 'Kyr', 'M', 'Med', 'Mend', 'Mor', 'Morv', 'N', 'Neot', 'Ort', 'P', 'Ph', 'Phor', 'R', 'Rub', 'S', 'Sh', 'Sharr', 'Shr', 'Sol', 'T', 'Tar', 'Th', 'Tham', 'Tib', 'Tig', 'Tr', 'Trism', 'Ush', 'V', 'Vib', 'Vid', 'W', 'Wyrd'];
  const nm13 = ['addas', 'ai', 'ake', 'an', 'ane', 'antar', 'antor', 'ar', 'are', 'aris', 'as', 'asi', 'atica', 'auth', 'ay', 'edth', 'ef', 'ein', 'elis', 'entre', 'era', 'erec', 'erro', 'erus', 'es', 'ev', 'exus', 'ez', 'iam', 'iar', 'ica', 'idya', 'iel', 'ikus', 'im', 'io', 'ios', 'ist', 'istus', 'it', 'ius', 'ixx', 'on', 'onus', 'or', 'orak', 'os', 'oss', 'ova', 'ox', 'oza', 'uebus', 'uil', 'uila', 'urus', 'us', 'yras', 'ys'];
  const i = Math.floor(Math.random() * 12);
  {
    if (i < 3) {
      names = sample(nm1);
    } else if (i < 6) {
      names = `${sample(nm2) + sample(nm3)} ${sample(nm4)}${sample(nm5)}`;
    } else if (i < 9) {
      names = `${sample(nm6) + sample(nm7)} ${sample(nm8)}${sample(nm9)}`;
    } else {
      names = `${sample(nm10) + sample(nm11)} ${sample(nm12)}${sample(nm13)}`;
    }
    return names;
  }
}
