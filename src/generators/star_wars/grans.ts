export default function grans() {
    let namelast;
    let names: string;
    let rnd;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    let rnd6;
    let rnd7;
    let rnd8;
    let rnd9;
    let rnd11;
    const nm1 = [
        '',
        '',
        '',
        '',
        '',
        'b',
        'br',
        'c',
        'dr',
        'f',
        'g',
        'gr',
        'h',
        'j',
        'k',
        'kh',
        'kl',
        'kr',
        'l',
        'm',
        'n',
        'p',
        'ph',
        'r',
        'rh',
        's',
        'sh',
        'shm',
        't',
        'th',
        'tw',
        'v',
        'y',
        'z',
        'zh',
    ];
    const nm2 = [
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'u',
        'ee',
        'aa',
        'oe',
        'ie',
        'ia',
        'ea',
    ];
    const nm3 = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'gg',
        'gh',
        'k',
        'kg',
        'kk',
        'ks',
        'l',
        'll',
        'lv',
        'm',
        'mm',
        'n',
        'nch',
        'nl',
        'nn',
        'ns',
        'p',
        'ph',
        'r',
        'rb',
        'rg',
        'rh',
        'rl',
        'rr',
        'rv',
        's',
        'sk',
        'ss',
        't',
        'th',
        'tt',
        'w',
        'wh',
        'y',
        'yc',
    ];
    const nm4 = [
        '',
        '',
        '',
        '',
        '',
        'b',
        'c',
        'd',
        'f',
        'ff',
        'g',
        'gh',
        'j',
        'k',
        'ks',
        'kz',
        'l',
        'ls',
        'm',
        'n',
        'nd',
        'ps',
        'r',
        'rch',
        'rg',
        's',
        'sk',
        'ss',
        'th',
        'wz',
        'x',
        'yk',
        'z',
    ];
    const nm5 = ['ee', 'aa', 'oe', 'ie', 'ia', 'ea', 'ei'];
    const i = Math.floor(Math.random() * 10);
    {
        rnd6 = Math.floor(Math.random() * nm1.length);
        rnd7 = Math.floor(Math.random() * nm5.length);
        rnd8 = Math.floor(Math.random() * nm4.length);
        if (rnd6 < 5) {
            while (rnd8 < 5) {
                rnd8 = Math.floor(Math.random() * nm4.length);
            }
        }
        if (i % 2 === 0) {
            namelast = nm1[rnd6] + nm5[rnd7] + nm4[rnd8];
        } else {
            rnd9 = Math.floor(Math.random() * nm3.length);
            rnd11 = Math.floor(Math.random() * nm2.length);
            namelast =
                nm1[rnd6] + nm5[rnd7] + nm3[rnd9] + nm2[rnd11] + nm4[rnd8];
        }
        rnd = Math.floor(Math.random() * nm1.length);
        rnd2 = Math.floor(Math.random() * nm2.length);
        rnd4 = Math.floor(Math.random() * nm4.length);
        if (i < 5) {
            if (rnd < 5) {
                while (rnd4 < 5) {
                    rnd4 = Math.floor(Math.random() * nm4.length);
                }
            }
            names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd4]}  ${namelast}`;
        } else {
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd5 = Math.floor(Math.random() * nm2.length);
            names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4]}  ${namelast}`;
        }
        return names;
    }
}
