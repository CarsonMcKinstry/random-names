export default function gallifreyans() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  let rnd8;
  let rnd9;
  let rnd10;
  let rnd11;
  let rnd12;
  let rnd13;
  let rnd14;
  let rnd15;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', '', 'b', 'c', 'ch', 'd', 'dr', 'f', 'g', 'gl',
    'gr', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'pr', 'q', 'r', 's', 'st', 't',
    'th', 'tr', 'v', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ia'];
  const nm3 = ['bl', 'br', 'bj', 'd', 'ff', 'g', 'gn', 'gr', 'kk', 'kl', 'kr',
    'lj', 'l', 'lg', 'll', 'lr', 'lm', 'ly', 'lp', 'm', 'mr', 'md', 'mt',
    'nd', 'ndr', 'nc', 'ng', 'nn', 'ns', 'nt', 'nz', 'p', 'pp', 'r', 'rn',
    'rb', 'rt', 'rl', 'rkh', 'rv', 'sb', 'sm', 'sp', 'ss', 'sk', 't', 'th',
    'tth', 'v', 'vl', 'vr', 'w', 'wtr', 'x', 'xr', 'xt', 'zm'];
  const nm4 = ['c', 'd', 'f', 'k', 'l', 'ld', 'll', 'n', 'nd', 'r', 'rg', 's',
    'sh', 'th', 't', 'w', 'x'];
  const nm5 = ['br', 'dr', 'g', 'gr', 'gl', 'k', 'kl', 'kr', 'm', 'n', 'p', 'r',
    's', 't', 'tr', 'v', 'z'];
  const nm6 = ['br', 'cr', 'ctr', 'dr', 'dd', 'd', 'gr', 'gl', 'gg', 'g', 'l',
    'll', 'lgr', 'lsr', 'lbr', 'lk', 'ldr', 'm', 'mr', 'ms', 'n', 'ng', 'ngr',
    'nt', 'ntr', 'ndr', 'p', 'pr', 'phr', 'r', 'rd', 'rth', 's', 'sk', 'str',
    'sr', 'v', 'vr'];
  const nm7 = ['', '', '', '', 'd', 'l', 'll', 'm', 'm', 'n', 'nn', 's', 'ss',
    'st', 'th', 'tkh'];
  const nm8 = ['', '', '', '', '', '', '', '', 'c', 'ch', 'cl', 'd', 'dh', 'dr',
    'f', 'gl', 'h', 'j', 'kh', 'kr', 'l', 'm', 'n', 'p', 'ph', 'pr', 'q', 'r',
    's', 'sh', 'sc', 't', 'th', 'v', 'z'];
  const nm9 = ['br', 'd', 'ff', 'gn', 'gl', 'hr', 'hn', 'k', 'kr', 'l', 'll',
    'ly', 'lm', 'ln', 'lph', 'lt', 'lr', 'm', 'mn', 'mm', 'n', 'nn', 'nd',
    'ns', 'nt', 'nz', 'ndr', 'nt', 'p', 'pp', 'pr', 'r', 'rr', 'ry', 'rl',
    'rs', 'rk', 'sf', 'sm', 'sn', 'sh', 'sp', 'st', 'tth', 'th', 'v', 'vy',
    'vr', 'y'];
  const nm10 = ['a', 'e', 'i', 'o', 'u', 'ia', 'oie', 'ea'];
  const nm11 = ['br', 'bl', 'dv', 'dh', 'dr', 'f', 'ff', 'gl', 'gr', 'h', 'l',
    'lm', 'ln', 'm', 'n', 'pr', 'ph', 'q', 'r', 'rr', 'rl', 's', 'st', 'sr',
    'sh', 'th', 'tr', 'x'];
  const nm12 = ['bv', 'ch', 'c', 'dr', 'd', 'dd', 'dv', 'gr', 'gl', 'gg', 'g',
    'nm', 'hn', 'h', 'l', 'll', 'lm', 'lt', 'ls', 'lz', 'm', 'mm', 'mr', 'nd',
    'ng', 'nt', 'ns', 'nl', 'nph', 'p', 'pp', 'ph', 'phr', 'q', 'r', 'rh',
    'rl', 'rm', 'st', 'sv', 'str', 'tr', 'th', 'v'];
  const nm13 = ['', '', '', '', '', 'd', 'l', 'll', 'm', 'm', 'n', 'nn', 'r',
    's', 'ss', 'sh', 'th'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 4) {
        rnd = Math.floor(Math.random() * nm8.length);
        rnd2 = Math.floor(Math.random() * nm2.length);
        rnd3 = Math.floor(Math.random() * nm9.length);
        rnd4 = Math.floor(Math.random() * nm10.length);
        rnd5 = Math.floor(Math.random() * nm11.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        rnd7 = Math.floor(Math.random() * nm12.length);
        rnd8 = Math.floor(Math.random() * nm2.length);
        rnd9 = Math.floor(Math.random() * nm12.length);
        rnd10 = Math.floor(Math.random() * nm2.length);
        rnd11 = Math.floor(Math.random() * nm13.length);
        names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5] + nm2[rnd6] + nm12[rnd7] + nm2[rnd8] + nm12[rnd9] + nm2[rnd10] + nm13[rnd11];
      } else if (i < 7) {
        rnd = Math.floor(Math.random() * nm8.length);
        rnd2 = Math.floor(Math.random() * nm2.length);
        rnd3 = Math.floor(Math.random() * nm9.length);
        rnd4 = Math.floor(Math.random() * nm10.length);
        rnd5 = Math.floor(Math.random() * nm11.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        rnd7 = Math.floor(Math.random() * nm12.length);
        rnd8 = Math.floor(Math.random() * nm2.length);
        rnd9 = Math.floor(Math.random() * nm12.length);
        rnd10 = Math.floor(Math.random() * nm2.length);
        rnd11 = Math.floor(Math.random() * nm12.length);
        rnd12 = Math.floor(Math.random() * nm2.length);
        rnd13 = Math.floor(Math.random() * nm13.length);
        names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5] + nm2[rnd6] + nm12[rnd7] + nm2[rnd8] + nm12[rnd9] + nm2[rnd10] + nm12[rnd11] + nm2[rnd12] + nm13[rnd13];
      } else {
        rnd = Math.floor(Math.random() * nm8.length);
        rnd2 = Math.floor(Math.random() * nm2.length);
        rnd3 = Math.floor(Math.random() * nm9.length);
        rnd4 = Math.floor(Math.random() * nm10.length);
        rnd5 = Math.floor(Math.random() * nm11.length);
        rnd6 = Math.floor(Math.random() * nm2.length);
        rnd7 = Math.floor(Math.random() * nm12.length);
        rnd8 = Math.floor(Math.random() * nm2.length);
        rnd9 = Math.floor(Math.random() * nm12.length);
        rnd10 = Math.floor(Math.random() * nm2.length);
        rnd11 = Math.floor(Math.random() * nm12.length);
        rnd12 = Math.floor(Math.random() * nm2.length);
        rnd13 = Math.floor(Math.random() * nm12.length);
        rnd14 = Math.floor(Math.random() * nm2.length);
        rnd15 = Math.floor(Math.random() * nm13.length);
        names = nm8[rnd] + nm2[rnd2] + nm9[rnd3] + nm10[rnd4] + nm11[rnd5] + nm2[rnd6] + nm12[rnd7] + nm2[rnd8] + nm12[rnd9] + nm2[rnd10] + nm12[rnd11] + nm2[rnd12] + nm12[rnd13] + nm2[rnd14] + nm13[rnd15];
      }
    } else if (i < 4) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm2.length);
      rnd7 = Math.floor(Math.random() * nm5.length);
      rnd8 = Math.floor(Math.random() * nm2.length);
      rnd9 = Math.floor(Math.random() * nm6.length);
      rnd10 = Math.floor(Math.random() * nm2.length);
      rnd11 = Math.floor(Math.random() * nm7.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm2[rnd6] + nm5[rnd7] + nm2[rnd8] + nm6[rnd9] + nm2[rnd10] + nm7[rnd11];
    } else if (i < 7) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm2.length);
      rnd7 = Math.floor(Math.random() * nm5.length);
      rnd8 = Math.floor(Math.random() * nm2.length);
      rnd9 = Math.floor(Math.random() * nm6.length);
      rnd10 = Math.floor(Math.random() * nm2.length);
      rnd11 = Math.floor(Math.random() * nm6.length);
      rnd12 = Math.floor(Math.random() * nm2.length);
      rnd13 = Math.floor(Math.random() * nm7.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm2[rnd6] + nm5[rnd7] + nm2[rnd8] + nm6[rnd9] + nm2[rnd10] + nm6[rnd11] + nm2[rnd12] + nm7[rnd13];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      rnd6 = Math.floor(Math.random() * nm2.length);
      rnd7 = Math.floor(Math.random() * nm5.length);
      rnd8 = Math.floor(Math.random() * nm2.length);
      rnd9 = Math.floor(Math.random() * nm6.length);
      rnd10 = Math.floor(Math.random() * nm2.length);
      rnd11 = Math.floor(Math.random() * nm6.length);
      rnd12 = Math.floor(Math.random() * nm2.length);
      rnd13 = Math.floor(Math.random() * nm6.length);
      rnd14 = Math.floor(Math.random() * nm2.length);
      rnd15 = Math.floor(Math.random() * nm7.length);
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5] + nm2[rnd6] + nm5[rnd7] + nm2[rnd8] + nm6[rnd9] + nm2[rnd10] + nm6[rnd11] + nm2[rnd12] + nm6[rnd13] + nm2[rnd14] + nm7[rnd15];
    }
    return names;
  }
}
