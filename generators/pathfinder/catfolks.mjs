export default function catfolks() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  let rnd7;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['br', 'c', 'cr', 'dr', 'f', 'g', 'gr', 'j', 'k', 'kr', 'm', 'n',
    'p', 'pr', 'q', 'qr', 'r', 't', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i',
    'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'y', 'y',
    'ou', 'au', 'ei'];
  const nm3 = ['c', 'cc', 'cd', 'cb', 'g', 'gg', 'gt', 'gb', 'gd', 'k', 'kk',
    'kh', 'kt', 'mb', 'mk', 'mq', 'nq', 'nk', 'ng', 'q', 'qh', 'r', 'rr',
    'rq', 'rk', 'th', 'w'];
  const nm4 = ['', 'm', 'n', 'r', 's', 'th'];
  const nm5 = ['', '', '', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
    'r', 's', 't', 'v', 'z'];
  const nm6 = ['a', 'e', 'i', 'o', 'u'];
  const nm7 = ['f', 'ff', 'l', 'ly', 'lh', 'ls', 'lr', 'lm', 'ln', 'm', 'my',
    'mh', 'n', 'ny', 'nh', 'ph', 'phr', 'r', 'rr', 'ry', 'rh', 'sy', 'sh',
    'sr', 'sl', 'th', 'ty', 'y'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', 'h', 's'];
  const i = Math.floor(Math.random() * 10); {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 6) {
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm7.length);
        rnd7 = Math.floor(Math.random() * nm6.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm7[rnd6] + nm6[
          rnd7] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd3 = Math.floor(Math.random() * nm3.length);
      rnd4 = Math.floor(Math.random() * nm2.length);
      rnd5 = Math.floor(Math.random() * nm4.length);
      if (i < 7) {
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd6] + nm2[
          rnd7] + nm4[rnd5];
      }
    }
    return names;
  }
}
