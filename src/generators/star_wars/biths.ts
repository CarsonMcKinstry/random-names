export default function biths() {
    let namelast;
    let names: string;
    let rnd;
    let rnd2;
    let rnd2b;
    let rnd3;
    let rnd3b;
    let rnd4;
    let rnd5;
    let rnd6;
    let rnd7;
    let rnd8;
    let rnd9;
    let rnd10;
    let rnd11;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'd',
        "d'r",
        'f',
        "f't",
        'g',
        "g'h",
        'h',
        'j',
        'k',
        'ph',
        "ph't",
        'r',
        'th',
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
        'oo',
        'eu',
        'ia',
        'aa',
    ];
    const nm3 = [
        'b',
        'bb',
        'c',
        'cr',
        'd',
        'dd',
        'g',
        'gr',
        'h',
        'k',
        'kr',
        'l',
        'lk',
        'll',
        'mk',
        'm',
        'n',
        'nk',
        'p',
        'pp',
        'r',
        'z',
    ];
    const nm4 = ['', '', '', 'l', 'm', 'n', 'ns', 'r', 's', 'ss', 'w'];
    const nm5 = [
        'd',
        "d'h",
        'f',
        "f'h",
        'g',
        "g'h",
        'h',
        'l',
        'm',
        'n',
        'ph',
        'r',
        'rh',
        "r'h",
        'th',
    ];
    const nm6 = [
        'b',
        'c',
        'd',
        'dh',
        'g',
        'gr',
        'h',
        'l',
        'lm',
        'ln',
        'ls',
        'm',
        'mn',
        'ml',
        'md',
        'mm',
        'n',
        'nn',
        'nr',
        'nl',
        'nd',
        'r',
        's',
        'sh',
        'th',
        'v',
        'z',
    ];
    const nm7 = ['', '', '', 'h', 'l', 'm', 'n', 's', 'ss'];
    const nm8 = [
        'd',
        "d'",
        'f',
        'g',
        "g'h",
        'h',
        'j',
        'k',
        "k's",
        'l',
        'm',
        'n',
        'ph',
        'r',
        'rh',
        "r'h",
        'th',
    ];
    const nm9 = ['a', 'e', 'i', 'o', 'u'];
    const nm10 = [
        'b',
        'd',
        'dh',
        'g',
        'gr',
        'h',
        'l',
        'lr',
        'lm',
        'm',
        'mn',
        'md',
        'mm',
        'n',
        'nn',
        'nr',
        'nd',
        'nt',
        'r',
        'rt',
        'rl',
        'rd',
        's',
        'sh',
        'th',
        'v',
        'z',
    ];
    const nm11 = ['', '', '', '', 'l', 'm', 'n', 'r', 'rn', 's', 'ss'];
    const nm12 = ['', '', '', '', '', 'a', 'e', 'i', 'o', 'u'];
    const i = Math.floor(Math.random() * 10);
    {
        rnd6 = Math.floor(Math.random() * nm8.length);
        rnd7 = Math.floor(Math.random() * nm9.length);
        rnd10 = Math.floor(Math.random() * nm11.length);
        if (i < 5) {
            while (rnd10 < 4) {
                rnd10 = Math.floor(Math.random() * nm11.length);
            }
            rnd11 = Math.floor(Math.random() * nm12.length);
            namelast = nm8[rnd6] + nm9[rnd7] + nm11[rnd10] + nm12[rnd11];
        } else {
            rnd8 = Math.floor(Math.random() * nm10.length);
            rnd9 = Math.floor(Math.random() * nm9.length);
            namelast =
                nm8[rnd6] + nm9[rnd7] + nm10[rnd8] + nm9[rnd9] + nm11[rnd10];
        }
        if (type === 1) {
            rnd = Math.floor(Math.random() * nm5.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm6.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            rnd5 = Math.floor(Math.random() * nm7.length);
            if (i < 8) {
                names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5]}  ${namelast}`;
            } else {
                rnd2b = Math.floor(Math.random() * nm2.length);
                rnd3b = Math.floor(Math.random() * nm6.length);
                names = `${nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm6[rnd3b] + nm2[rnd2b] + nm7[rnd5]}  ${namelast}`;
            }
        } else {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            rnd5 = Math.floor(Math.random() * nm4.length);
            if (i < 8) {
                names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]}  ${namelast}`;
            } else {
                rnd2b = Math.floor(Math.random() * nm2.length);
                rnd3b = Math.floor(Math.random() * nm3.length);
                names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm3[rnd3b] + nm2[rnd2b] + nm4[rnd5]}  ${namelast}`;
            }
        }
        return names;
    }
}
