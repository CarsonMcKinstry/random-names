export default function fallens() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  let rnd4;
  let rnd5;
  let rnd6;
  const nm1 = ['b', 'br', 'd', 'dr', 'f', 'fr', 'g', 'gr', 'k', 'kr', 'n', 'p',
    'ph', 'pr', 'r', 's', 'sk', 't', 'tr', 'v', 'vr', 'w', 'y', 'z'];
  const nm2 = ['a', 'e', 'i', 'o', 'y'];
  const nm3 = ['g', 'gr', 'k', 'kl', 'kn', 'kr', 'ks', 'l', 'ld', 'lkr', 'ltr',
    'lv', 'lz', 'p', 'r', 'rk', 'rl', 'rrh', 'sg', 'sgr', 'sk', 'skr', 'str',
    'thr', 'tk', 'tr', 'v', 'vg', 'vk', 'vr'];
  const nm4 = ['k', 'ks', 'ks', 'ks', 'n', 'r', 'rk', 's', 's', 's', 'sk'];
  const i = Math.floor(Math.random() * 10); {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    rnd3 = Math.floor(Math.random() * nm3.length);
    rnd4 = Math.floor(Math.random() * nm2.length);
    rnd5 = Math.floor(Math.random() * nm4.length);
    if (i < 5) {
      names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
    } else {
      rnd6 = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd6] + nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[
        rnd5];
    }
    return names;
  }
}
