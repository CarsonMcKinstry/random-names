export default function deaths() {
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
    const nm1 = [
        '',
        '',
        '',
        '',
        '',
        '',
        'b',
        'bh',
        'br',
        'c',
        'ch',
        'ct',
        'cth',
        'd',
        'dr',
        'dh',
        'dy',
        'dz',
        'f',
        'fr',
        'g',
        'gh',
        'gn',
        'h',
        'hw',
        'k',
        'kh',
        'kn',
        'kr',
        'l',
        'm',
        'm',
        'mn',
        'mh',
        'm',
        'n',
        'ng',
        'p',
        'ph',
        'pr',
        'q',
        'qh',
        's',
        'sh',
        'st',
        'sr',
        't',
        'th',
        'v',
        'vr',
        'vh',
        'w',
        'wr',
        'x',
        'y',
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
        'ae',
        'ae',
        'ai',
        'aa',
        'eo',
        'ea',
        'ei',
        'io',
        'iu',
        'ia',
        'oo',
        'ou',
        'uu',
        'ua',
        'ue',
    ];
    const nm3 = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'ch',
        'g',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        'z',
    ];
    const nm4 = [
        'b',
        'c',
        'd',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'r',
        's',
        't',
        'th',
        'tr',
        'w',
    ];
    const nm5 = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'c',
        'cs',
        'c',
        'd',
        'd',
        'h',
        'h',
        'k',
        'k',
        'ks',
        'l',
        'ls',
        'l',
        'n',
        'n',
        'ng',
        'nth',
        'q',
        'q',
        'r',
        'r',
        'rs',
        's',
        's',
        't',
        't',
        'th',
        'v',
        'x',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        rnd = Math.floor(Math.random() * nm1.length);
        rnd2 = Math.floor(Math.random() * nm2.length);
        rnd5 = Math.floor(Math.random() * nm5.length);
        if (i < 3) {
            while (rnd < 6) {
                rnd = Math.floor(Math.random() * nm1.length);
            }
            while (rnd5 < 12) {
                rnd5 = Math.floor(Math.random() * nm5.length);
            }
            names = nm1[rnd] + nm2[rnd2] + nm5[rnd5];
        } else if (i < 7) {
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm4.length);
            rnd6 = Math.floor(Math.random() * nm2.length);
            names =
                nm1[rnd] +
                nm2[rnd2] +
                nm3[rnd3] +
                nm4[rnd4] +
                nm2[rnd6] +
                nm5[rnd5];
        } else {
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm4.length);
            rnd6 = Math.floor(Math.random() * nm2.length);
            rnd7 = Math.floor(Math.random() * nm3.length);
            rnd8 = Math.floor(Math.random() * nm4.length);
            rnd9 = Math.floor(Math.random() * nm2.length);
            names =
                nm1[rnd] +
                nm2[rnd2] +
                nm3[rnd3] +
                nm4[rnd4] +
                nm2[rnd6] +
                nm3[rnd7] +
                nm4[rnd8] +
                nm2[rnd9] +
                nm5[rnd5];
        }
        return names;
    }
}
