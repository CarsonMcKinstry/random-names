export default function dragons() {
  let rnd2; let rnd3; let rnd4; let rnd5; let rnd6; let
    rnd7;


  let names;

  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['', '', '', '', 'b', 'c', 'd', 'f', 'g', 'gl', 'gr', 'k', 'l', 'n', 'r', 's', 'sr', 'shr', 't', 'th', 'v'];
  const nm2 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'io', 'ui', 'ua', 'au'];
  const nm3 = ['b', 'd', 'g', 'k', 'ln', 'l', 'lg', 'lm', 'm', 'md', 'n', 'nd', 'r', 'rm', 'rn'];
  const nm4 = ['c', 'd', 'dr', 'gr', 'k', 'kr', 'lfr', 'ldr', 'm', 'n', 'ngr', 'r', 'rn', 'th'];

  const nm5 = ['', '', '', '', 'c', 'd', 'f', 'gl', 'h', 'j', 'l', 'm', 'n', 'ph', 'r', 'sh', 's', 'th', 'v'];
  const nm6 = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ae', 'io', 'ei', 'ea', 'au'];
  const nm7 = ['d', 'g', 'l', 'lm', 'ln', 'm', 'mn', 'n', 'nv', 'ph', 'r', 'rn', 'rv', 'th', 'v'];
  const nm8 = ['', '', '', '', '', '', '', '', '', '', '', 'h', 'l', 'n', 's', 'sh', 'th'];


  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm5.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      rnd3 = Math.floor(Math.random() * nm7.length);
      rnd4 = Math.floor(Math.random() * nm6.length);
      rnd5 = Math.floor(Math.random() * nm8.length);
      if (i < 6) {
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5];
      } else {
        rnd6 = Math.floor(Math.random() * nm6.length);
        rnd7 = Math.floor(Math.random() * nm7.length);
        names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd6] + nm7[rnd7] + nm6[rnd4] + nm8[rnd5];
      }
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      rnd4 = Math.floor(Math.random() * nm4.length);
      if (i < 3) {
        names = nm1[rnd] + nm2[rnd2] + nm4[rnd4];
      } else if (i < 7) {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd5 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
      } else {
        rnd3 = Math.floor(Math.random() * nm3.length);
        rnd5 = Math.floor(Math.random() * nm2.length);
        rnd6 = Math.floor(Math.random() * nm3.length);
        rnd7 = Math.floor(Math.random() * nm2.length);
        names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm4[rnd4];
      }
    }
    return names;
  }
}
