export default function gerudos() {
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let
    rnd7;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['B', 'C', 'D', 'G', 'H', 'K', 'M', 'R', 'T'];
  const nm2 = ['a', 'e', 'i', 'o', 'u'];
  const nm3 = ['b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'b', 'd', 'f', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'z', 'br', 'bl', 'dr', 'dl', 'fl', 'fn', 'fm', 'fr', 'gr', 'gn', 'gm', 'lb', 'ld', 'lg', 'lm', 'ln', 'lr', 'lt', 'lz', 'mb', 'md', 'ml', 'mn', 'mr', 'nb', 'nd', 'ng', 'nl', 'nm', 'nr', 'nz', 'rb', 'rd', 'rg', 'rl', 'rm', 'rn', 'rt', 'rs', 'tl', 'tm', 'tn', 'tr', 'vl', 'vm', 'zl'];
  const nm4 = ['g', 'l', 'lm', 'ln', 'm', 'n', 'r', 'rf', 'rg', 'rn', 'rm', 'rt', 'ng'];
  const nm5 = ['', '', '', '', 'k', 'n', 'm', 'l', 't', 's', 'f', 'g', 'h', 'r'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ei', 'ea', 'eo', 'oa', 'ou', 'oo', 'ae', 'ai', 'au'];
  const nm7 = ['v', 'm', 'k', 'b', 'r', 'f', 'g', 'l', 'n', 's', 't'];
  const nm8 = ['m', 'k', 'r', 'f', 'g', 'l', 'n', 's', 't'];
  const nm9 = ['a', 'e', 'i', 'o', 'u', '', '', '', ''];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      rnd6 = Math.floor(Math.random() * nm9.length);
      names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5] + nm9[rnd6];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      rnd5 = Math.floor(Math.random() * nm2.length);
      rnd6 = Math.floor(Math.random() * nm3.length);
      rnd7 = Math.floor(Math.random() * nm2.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm4[rnd4];
    }
    return names;
  }
}
