export default function nephilims() {
    let names: string;
    let rnd;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    let rnd6;
    let rnd7;
    const nm1 = [
        '',
        '',
        '',
        'b',
        'd',
        'g',
        'h',
        'j',
        'k',
        'n',
        'p',
        'q',
        'r',
        's',
        'sh',
        't',
        'th',
        'z',
    ];
    const nm2 = [
        'a',
        'e',
        'a',
        'e',
        'a',
        'e',
        'a',
        'e',
        'a',
        'e',
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
        'ya',
        'yu',
        'ee',
        'ie',
        'ue',
        'ia',
    ];
    const nm3 = [
        'dr',
        'dj',
        'gr',
        'gn',
        'kb',
        'kn',
        'mj',
        'mr',
        'mz',
        'nz',
        'nq',
        'rq',
        'rm',
        'rj',
        'rz',
        'sb',
        'sz',
        'st',
        'tr',
        'tn',
        'tz',
        'b',
        'd',
        'g',
        'j',
        'k',
        'm',
        'n',
        'q',
        'r',
        's',
        't',
        'z',
        'b',
        'd',
        'g',
        'j',
        'k',
        'm',
        'n',
        'q',
        'r',
        's',
        't',
        'z',
        'b',
        'd',
        'g',
        'j',
        'k',
        'm',
        'n',
        'q',
        'r',
        's',
        't',
        'z',
    ];
    const nm4 = ['l', 'n', 's', 'th', 'z', 'l', 'l', '', '', '', '', ''];
    const i = Math.floor(Math.random() * 10);
    {
        rnd = Math.floor(Math.random() * nm1.length);
        rnd2 = Math.floor(Math.random() * nm2.length);
        rnd3 = Math.floor(Math.random() * nm3.length);
        if (nm1[rnd] === nm3[rnd3]) {
            rnd3 = Math.floor(Math.random() * nm3.length);
        }
        rnd4 = Math.floor(Math.random() * nm2.length);
        rnd5 = Math.floor(Math.random() * nm4.length);
        if (i < 4) {
            names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
        } else {
            rnd6 = Math.floor(Math.random() * nm3.length);
            if (rnd3 < 21) {
                while (rnd6 < 21) {
                    rnd6 = Math.floor(Math.random() * nm3.length);
                }
            }
            rnd7 = Math.floor(Math.random() * nm2.length);
            names =
                nm1[rnd] +
                nm2[rnd2] +
                nm3[rnd3] +
                nm2[rnd4] +
                nm3[rnd6] +
                nm2[rnd7] +
                nm4[rnd5];
        }
        return names;
    }
}
