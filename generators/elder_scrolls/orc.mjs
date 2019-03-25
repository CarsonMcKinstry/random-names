export default function orc() {
  let names;
  let rnd;
  let rnd2;
  let rnd5;
  let rnd6;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Agr', 'Agro', 'Atu', 'Atul', 'Azu', 'Azuk', 'Bag', 'Baga',
    'Bak', 'Bakh', 'Bal', 'Bala', 'Bar', 'Baro', 'Bas', 'Bash', 'Bat', 'Baz',
    'Bazg', 'Bazu', 'Bog', 'Boga', 'Bogr', 'Bol', 'Bolo', 'Bor', 'Bork',
    'Boru', 'Bot', 'Both', 'Bra', 'Brag', 'Bro', 'Brok', 'Bru', 'Brug', 'Bug',
    'Buga', 'Bugd', 'Bugh', 'Bugr', 'Bum', 'Bumb', 'Bur', 'Bura', 'Burg',
    'Buru', 'Burz', 'Dub', 'Dubo', 'Dul', 'Dula', 'Dulf', 'Dulp', 'Dulu',
    'Dum', 'Duma', 'Dumb', 'Dur', 'Dura', 'Durb', 'Durg', 'Durz', 'Dus',
    'Dush', 'Gad', 'Gadb', 'Gar', 'Garo', 'Garz', 'Gas', 'Gash', 'Gat',
    'Gatu', 'Gha', 'Gham', 'Gho', 'Ghor', 'Ghu', 'Ghun', 'Glu', 'Glus', 'Gog',
    'Gogr', 'Gor', 'Gorg', 'Gra', 'Grak', 'Gram', 'Grat', 'Gro', 'Grog',
    'Grom', 'Gru', 'Grul', 'Grus', 'Gruz', 'Gua', 'Guar', 'Gul', 'Gula',
    'Gur', 'Gura', 'Han', 'Hanz', 'Kha', 'Khad', 'Khag', 'Khar', 'Kof',
    'Koff', 'Kro', 'Krog', 'Kur', 'Kurd', 'Kurz', 'Lar', 'Lara', 'Larg',
    'Lob', 'Lor', 'Lorb', 'Lorz', 'Lug', 'Lugd', 'Lugr', 'Lum', 'Lumd', 'Lur',
    'Lurb', 'Luro', 'Mag', 'Magr', 'Magu', 'Mah', 'Mahk', 'Mak', 'Makh',
    'Makn', 'Mako', 'Mal', 'Malk', 'Mas', 'Mash', 'Mat', 'Matu', 'Mau',
    'Mauh', 'Maz', 'Mazo', 'Mog', 'Mogh', 'Mogr', 'Mol', 'Mor', 'Morb', 'Mot',
    'Moth', 'Mug', 'Mugd', 'Muk', 'Mul', 'Mulu', 'Mur', 'Mura', 'Murk',
    'Murz', 'Muz', 'Muzg', 'Nag', 'Nagr', 'Nar', 'Nas', 'Nash', 'Ogl', 'Oglu',
    'Ogo', 'Ogol', 'Ogr', 'Ogru', 'Olf', 'Olfi', 'Olp', 'Olpa', 'Olu', 'Olum',
    'Olur', 'Ora', 'Orak', 'Oro', 'Orok', 'Oth', 'Othm', 'Ram', 'Ramo', 'Rog',
    'Rogd', 'Rug', 'Rugd', 'Sha', 'Shag', 'Shak', 'Sham', 'Shar', 'Shat',
    'Shaz', 'She', 'Shel', 'Sho', 'Shob', 'Shu', 'Shul', 'Shum', 'Shur',
    'Shuz', 'Sna', 'Snag', 'Snak', 'Snat', 'Ugd', 'Ugdu', 'Ugh', 'Ugha',
    'Ula', 'Ulag', 'Ulam', 'Ulm', 'Ulmu', 'Umu', 'Umug', 'Umur', 'Ura',
    'Urag', 'Uram', 'Urb', 'Urbu', 'Uri', 'Urim', 'Uru', 'Urul', 'Urz',
    'Urzo', 'Ush', 'Usha', 'Ushn', 'Uzg', 'Uzga', 'Uzu', 'Uzul', 'Yad',
    'Yadb', 'Yag', 'Yaga', 'Yak', 'Yam', 'Yama', 'Yamb', 'Yar', 'Yarg', 'Yas',
    'Yash', 'Yat', 'Yatu'];
  const nm2 = ['a', 'ac', 'ag', 'agdush', 'agog', 'agorn', 'ak', 'akh', 'amog',
    'amph', 'amul', 'an', 'ar', 'arz', 'arzob', 'ash', 'at', 'b', 'ba',
    'bagorn', 'bash', 'bob', 'borz', 'bub', 'buk', 'bul', 'bumol', 'burz',
    'c', 'dan', 'dba', 'dul', 'dum', 'dumph', 'el', 'fish', 'futto', 'g',
    'gakh', 'gam', 'gash', 'glak', 'gmar', 'gnak', 'go', 'gob', 'gog', 'gol',
    'gonk', 'gra', 'grol', 'guk', 'gulub', 'h', 'ha', 'hag', 'hakh', 'harz',
    'hel', 'hna', 'hnag', 'hnamub', 'hnarz', 'hul', 'hulakh', 'humph', 'il',
    'in', 'ish', 'k', 'kh', 'kha', 'kil', 'klak', 'kub', 'kul', 'kus', 'l',
    'lak', 'lakh', 'lg', 'long', 'lorz', 'm', 'man', 'mar', 'mash', 'mba',
    'mborz', 'mbu', 'mmok', 'mob', 'mog', 'mok', 'monk', 'morz', 'mph', 'mul',
    'n', 'na', 'nag', 'nak', 'namub', 'nar', 'narz', 'nk', 'nok', 'nzul', 'o',
    'ob', 'og', 'ogra', 'ok', 'ol', 'olg', 'on', 'onak', 'ong', 'onk', 'or',
    'orn', 'orz', 'othmuk', 'phumph', 'r', 'ra', 'rag', 'ragdush', 'rash',
    'rbash', 'rg', 'rgam', 'rgol', 'rkub', 'rkul', 'rlorz', 'rn', 'rol',
    'ron', 'rub', 'rul', 'rum', 'rz', 'rzob', 'sh', 'shnag', 't', 'thmuk',
    'ub', 'ug', 'uk', 'ul', 'ulakh', 'ulub', 'um', 'umbu', 'umol', 'umph',
    'ur', 'urn', 'urz', 'us', 'ush', 'utto', 'z', 'zgob', 'zol', 'zonk',
    'zub', 'zug', 'zul', 'zum'];
  const nm3 = ['Agr', 'Agro', 'Aro', 'Arob', 'Atu', 'Atub', 'Bad', 'Badb',
    'Bag', 'Bagr', 'Bas', 'Bash', 'Bat', 'Batu', 'Bog', 'Bogd', 'Bol', 'Bola',
    'Bor', 'Borb', 'Borg', 'Bug', 'Bugd', 'Bul', 'Bula', 'Bulf', 'Bum',
    'Bump', 'Bur', 'Buru', 'Burz', 'Dul', 'Dulu', 'Dur', 'Dura', 'Durg',
    'Durz', 'Gar', 'Gara', 'Gas', 'Gash', 'Gha', 'Ghak', 'Ghar', 'Gho',
    'Ghob', 'Ghor', 'Gla', 'Glas', 'Glo', 'Glob', 'Glu', 'Glur', 'Gon',
    'Gonk', 'Gra', 'Grat', 'Graz', 'Gul', 'Gulf', 'Hom', 'Homr', 'Kha',
    'Khar', 'Lag', 'Laga', 'Lam', 'Lamb', 'Las', 'Lash', 'Laz', 'Lazg', 'Maz',
    'Mazg', 'Mazo', 'Mog', 'Moga', 'Mogd', 'Mor', 'Morn', 'Mur', 'Murb',
    'Muro', 'Murz', 'Nar', 'Narg', 'Ogh', 'Ogha', 'Ora', 'Orag', 'Orb',
    'Orbu', 'Rag', 'Raga', 'Rog', 'Rogb', 'Rogm', 'Rol', 'Rolf', 'Rul',
    'Rulf', 'Sha', 'Shad', 'Shag', 'Shar', 'She', 'Shel', 'Shu', 'Shuf',
    'Slo', 'Sloo', 'Sna', 'Snak', 'Uga', 'Ugak', 'Ugl', 'Ugla', 'Ugo', 'Ugor',
    'Ulo', 'Ulot', 'Ulu', 'Ulum', 'Umo', 'Umog', 'Uro', 'Urog', 'Urz', 'Urzo',
    'Urzu', 'Ush', 'Ushu', 'Vol', 'Volt', 'Yag', 'Yat', 'Yatu', 'Yaz', 'Yazg'];
  const nm4 = ['a', 'ak', 'akh', 'amph', 'ar', 'arz', 'ash', 'at', 'az', 'b',
    'ba', 'bak', 'bog', 'bug', 'bul', 'but', 'dbak', 'dub', 'durash', 'durz',
    'esh', 'fim', 'fish', 'ftharz', 'g', 'ga', 'gak', 'gakh', 'gar', 'gash',
    'gat', 'gdub', 'gol', 'h', 'ha', 'hnakh', 'huk', 'im', 'ish', 'k', 'kh',
    'l', 'lur', 'm', 'malah', 'mesh', 'mpha', 'n', 'nakh', 'ob', 'og', 'oga',
    'ol', 'omalah', 'onk', 'oth', 'ph', 'pha', 'r', 'rak', 'ramph', 'raz',
    'rn', 'rog', 'rol', 'ronk', 'rz', 'rza', 'rzug', 'sh', 'sha', 't', 'th',
    'tha', 'tharz', 'ub', 'ug', 'uk', 'ul', 'um', 'ur', 'urash', 'urz', 'ush',
    'ut', 'z', 'za', 'zob', 'zug', 'zush'];
  const nm5 = ['Aga', 'Agad', 'Agam', 'Agl', 'Agla', 'Agu', 'Agum', 'Atu',
    'Atum', 'Azo', 'Azor', 'Bad', 'Badb', 'Bag', 'Bagd', 'Bago', 'Bagr',
    'Bagu', 'Bam', 'Bamo', 'Bar', 'Bara', 'Barg', 'Baro', 'Bas', 'Bash',
    'Bat', 'Batu', 'Bha', 'Bhar', 'Bog', 'Boga', 'Bogh', 'Bogl', 'Bogr',
    'Bogu', 'Bol', 'Bola', 'Bolm', 'Bon', 'Bonk', 'Bor', 'Borb', 'Bro',
    'Brok', 'Bug', 'Buga', 'Bugl', 'Bul', 'Bula', 'Bulf', 'Bum', 'Bump',
    'Bur', 'Bura', 'Burb', 'Buri', 'Buro', 'Burz', 'Buz', 'Buzg', 'Cob',
    'Cobl', 'Cro', 'Crom', 'Dra', 'Drag', 'Dug', 'Dugu', 'Dul', 'Dula',
    'Dulo', 'Dum', 'Dumu', 'Dur', 'Durg', 'Duro', 'Duru', 'Dus', 'Dush',
    'Gal', 'Gala', 'Gam', 'Gamo', 'Gar', 'Gas', 'Gash', 'Gat', 'Gatu', 'Gha',
    'Ghar', 'Ghas', 'Gho', 'Ghol', 'Ghor', 'Ghot', 'Glo', 'Glor', 'Glu',
    'Gluk', 'Glur', 'Gol', 'Golp', 'Gon', 'Gonk', 'Gor', 'Gort', 'Gorz',
    'Gra', 'Gram', 'Gru', 'Grul', 'Gul', 'Gulf', 'Gur', 'Gura', 'Guru', 'Hub',
    'Hubr', 'Kas', 'Kash', 'Kha', 'Khag', 'Khar', 'Khas', 'Khat', 'Khaz',
    'Lag', 'Lagd', 'Lar', 'Larg', 'Laz', 'Lazg', 'Log', 'Logh', 'Logo',
    'Logr', 'Lor', 'Lorg', 'Lum', 'Lumb', 'Lumo', 'Lur', 'Lurk', 'Lurn',
    'Luz', 'Luzg', 'Mag', 'Maga', 'Magr', 'Magu', 'Mal', 'Malo', 'Mar',
    'Mara', 'Maro', 'Mas', 'Mash', 'Mog', 'Moga', 'Mogd', 'Mogh', 'Mor',
    'Morg', 'Mug', 'Mugh', 'Muk', 'Mul', 'Mula', 'Mur', 'Murg', 'Muru',
    'Murz', 'Muz', 'Muzg', 'Nay', 'Nayb', 'Nol', 'Nolo', 'Oga', 'Ogar', 'Ogd',
    'Ogdu', 'Olo', 'Olor', 'Olu', 'Olur', 'Orb', 'Orbu', 'Ork', 'Orku', 'Oru',
    'Orum', 'Rim', 'Rimp', 'Rug', 'Rugd', 'Rugo', 'Rus', 'Rush', 'Sha',
    'Shad', 'Shag', 'Shak', 'Sham', 'Shar', 'Shat', 'Shaz', 'Shu', 'Shub',
    'Shug', 'Shul', 'Shum', 'Shur', 'Shuz', 'Ska', 'Skan', 'Sna', 'Snag',
    'Tra', 'Trai', 'Uft', 'Ufth', 'Ugd', 'Ugdu', 'Ugr', 'Ugru', 'Ula', 'Ular',
    'Ulf', 'Ulfi', 'Urg', 'Urga', 'Ush', 'Usha', 'Ushu', 'Uzg', 'Uzga',
    'Uzgu', 'Uzu', 'Uzug', 'Uzuk', 'Yag', 'Yaga', 'Yak', 'Yar', 'Yarg',
    'Yaru', 'Yarz'];
  const nm6 = ['a', 'ad', 'ag', 'ak', 'akh', 'am', 'amakh', 'amph', 'an', 'ar',
    'arn', 'arz', 'ash', 'at', 'b', 'ba', 'bag', 'bak', 'bek', 'bog',
    'borgob', 'bu', 'bug', 'buk', 'bul', 'bush', 'd', 'dar', 'dborgob', 'dbu',
    'dbuk', 'du', 'dub', 'duk', 'dulg', 'dum', 'dush', 'ek', 'el', 'fim',
    'fish', 'g', 'ga', 'gak', 'gakh', 'gamph', 'gan', 'garn', 'garz', 'gash',
    'gdu', 'gdub', 'gdulg', 'gdum', 'gham', 'gk', 'gob', 'gog', 'gol', 'grak',
    'gramph', 'grump', 'gub', 'gul', 'gum', 'gur', 'gurz', 'h', 'hakh', 'ham',
    'hamph', 'harz', 'harzol', 'hash', 'hel', 'hnag', 'hnar', 'hnikh', 'hol',
    'hub', 'hug', 'ilslag', 'im', 'imph', 'ish', 'k', 'kh', 'ku', 'kub',
    'kul', 'l', 'la', 'lam', 'lar', 'lfim', 'lg', 'lob', 'lor', 'lslag',
    'lug', 'lump', 'm', 'ma', 'makh', 'mba', 'mbak', 'mgog', 'mog', 'mph',
    'mub', 'n', 'nag', 'nar', 'ndar', 'nikh', 'ob', 'og', 'ok', 'ol', 'olg',
    'or', 'orn', 'oth', 'ph', 'pok', 'r', 'ra', 'rag', 'rak', 'ramph', 'rat',
    'rba', 'rbag', 'rbush', 'rg', 'rga', 'rgak', 'rgakh', 'rish', 'rku',
    'rkub', 'rkul', 'rn', 'rob', 'rol', 'rolg', 'rump', 'rz', 'rzog', 'rzuf',
    'sh', 'sharzol', 'shnar', 't', 'th', 'tub', 'tur', 'twog', 'u', 'ub',
    'ug', 'uk', 'ul', 'ulg', 'um', 'uma', 'ump', 'ur', 'urn', 'urz', 'ush',
    'wog', 'z', 'zag', 'zgub', 'zog', 'zol', 'zor', 'zuf'];
  {
    rnd5 = Math.floor(Math.random() * nm5.length);
    rnd6 = Math.floor(Math.random() * nm6.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm4.length);
      names = `${nm3[rnd] + nm4[rnd2]} ${nm5[rnd5]}${nm6[rnd6]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd] + nm2[rnd2]} ${nm5[rnd5]}${nm6[rnd6]}`;
    }
    return names;
  }
}
