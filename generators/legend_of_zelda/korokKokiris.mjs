export default function korokKokiris() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'd', 'br', 'dr', 'gr', 'g', 'h', 'k', 'l',
    'm', 'r', 'tr', 't'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['c', 'g', 'gn', 'gm', 'k', 'kl', 'l', 'v', 'ld', 'lm', 'll', 'm',
    'md', 'n', 'nd', 'r', 'rn', 's', 'sn', 'sm', 'sr'];
  const nm4 = ['', '', '', '', '', '', '', '', 'h', 'l', 'm', 's', 'r', 'n',
    'wn', 'w'];
  const nm5 = ['b', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't',
    'z'];
  const nm6 = ['b', 'd', 'f', 'g', 'h', 'l', 'k', 'm', 'n', 'p', 'r', 's', 't',
    'v', 'w', 'z'];
  const nm7 = ['c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'ph', 'r', 's', 't',
    'th', 'w', 'z'];
  const nm8 = ['a', 'e', 'i', 'o', 'u', 'ai', 'ae', 'ea', 'ei', 'eo', 'ia',
    'io', 'iu', 'ie', 'oa', 'oe', 'oi', 'ou', 'ua', 'ue', 'uo', 'ui'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm6.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm8.length);
      names = nm6[rnd] + nm2[rnd2] + nm7[rnd3] + nm8[rnd4];
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm2.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
    } else {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      names = nm5[rnd] + nm2[rnd2] + nm7[rnd3] + nm2[rnd4];
    }
    return names;
  }
}
