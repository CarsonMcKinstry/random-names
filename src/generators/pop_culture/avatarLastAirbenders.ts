export default function avatarLastAirbenders() {
    let names: string;
    let rnd;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    let rnd6;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = ['g', 'h', 'l', 'm', 'n', 'gy', 'p', 'r', 's', 't'];
    const nm2 = ['a', 'e', 'i', 'o'];
    const nm3 = ['h', 'l', 'll', 'm', 'n', 'ng', 'nz', 'r', 's', 'sh', 'ts'];
    const nm4 = ['', 'hn', 'l', 'ng', 'n'];
    const nm5 = ['', 'h', 'l', 'n', 'm', 'p', 'r', 's', 'y'];
    const nm6 = ['h', 'l', 'm', 'ng', 'n', 'sh', 'r', 'rr'];
    const nm7 = ['', '', 'hn', 'h', 'n'];
    const nm8 = ['h', 'r', 's', 't', 'v', 'z'];
    const nm9 = ['a', 'i', 'o'];
    const nm10 = ['cc', 'dd', 'kk', 'lr', 'sr', 'nr', 'rr', 'vr'];
    const nm11 = ['', '', 'ck', 'k', 'r', 'm', 'n', 's'];
    const nm12 = ['h', 'k', 'r', 't', 'v', 'y', 'z'];
    const nm13 = ['a', 'i', 'o'];
    const nm14 = ['h', 'k', 'l', 'll', 'm', 'n', 'nn', 'r', 'rr', 's', 't'];
    const nm15 = ['ch', 'b', 'f', 'g', 'h', 'l', 'm', 'p', 'r', 'sh', 'x'];
    const nm16 = [
        'ao',
        'uo',
        'aa',
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
    ];
    const nm17 = ['h', 'l', 'm', 'n', 'sh', 't'];
    const nm18 = ['', '', '', 'h', 'ng', 'n', 'r'];
    const nm19 = [
        '',
        '',
        'b',
        'f',
        'g',
        'h',
        'k',
        'l',
        'n',
        'm',
        's',
        'sh',
        't',
        'w',
    ];
    const nm19b = ['b', 'f', 'g', 'h', 'k', 'l', 'n', 'm', 's', 'sh', 't', 'w'];
    const nm20 = ['k', 'l', 'm', 'n', 'r', 'sh', 'v', 'y'];
    const nm21 = ['', '', 'ph', 'h', 'ng', 'n'];
    const nm22 = ['', '', 'ch', 'd', 'j', 'm', 'r', 's', 'sh', 't', 'y', 'z'];
    const nm23 = ['d', 'g', 'k', 'm', 'r', 'z'];
    const nm24 = ['', '', 'h', 'k', 'm', 'n', 'ng', 'w'];
    const nm25 = ['', '', 'ch', 'h', 'l', 'm', 'n', 's', 'sh', 't', 'y', 'z'];
    const nm26 = ['k', 'l', 'rs', 's', 'z'];
    const nm27 = ['', '', 'ch', 'h', 'l', 'm', 'n', 's', 'sh', 't', 'y', 'z'];
    const i = Math.floor(Math.random() * 12);
    {
        if (type === 1) {
            if (i < 3) {
                rnd = Math.floor(Math.random() * nm5.length);
                rnd2 = Math.floor(Math.random() * nm2.length);
                rnd3 = Math.floor(Math.random() * nm6.length);
                rnd4 = Math.floor(Math.random() * nm2.length);
                rnd5 = Math.floor(Math.random() * nm7.length);
                names =
                    nm5[rnd] + nm2[rnd2] + nm6[rnd3] + nm2[rnd4] + nm7[rnd5];
            } else if (i < 4) {
                rnd = Math.floor(Math.random() * nm12.length);
                rnd2 = Math.floor(Math.random() * nm13.length);
                rnd3 = Math.floor(Math.random() * nm14.length);
                rnd4 = Math.floor(Math.random() * nm13.length);
                rnd5 = Math.floor(Math.random() * nm14.length);
                rnd6 = Math.floor(Math.random() * nm13.length);
                names =
                    nm12[rnd] +
                    nm13[rnd2] +
                    nm14[rnd3] +
                    nm13[rnd4] +
                    nm14[rnd5] +
                    nm13[rnd6];
            } else if (i < 6) {
                rnd = Math.floor(Math.random() * nm12.length);
                rnd2 = Math.floor(Math.random() * nm13.length);
                rnd3 = Math.floor(Math.random() * nm14.length);
                rnd4 = Math.floor(Math.random() * nm13.length);
                names = nm12[rnd] + nm13[rnd2] + nm14[rnd3] + nm13[rnd4];
            } else if (i < 7) {
                rnd = Math.floor(Math.random() * nm19.length);
                rnd2 = Math.floor(Math.random() * nm2.length);
                rnd3 = Math.floor(Math.random() * nm20.length);
                rnd4 = Math.floor(Math.random() * nm2.length);
                rnd5 = Math.floor(Math.random() * nm21.length);
                names =
                    nm19[rnd] + nm2[rnd2] + nm20[rnd3] + nm2[rnd4] + nm21[rnd5];
            } else if (i < 9) {
                rnd = Math.floor(Math.random() * nm19b.length);
                rnd2 = Math.floor(Math.random() * nm2.length);
                rnd3 = Math.floor(Math.random() * nm21.length);
                names = nm19b[rnd] + nm2[rnd2] + nm21[rnd3];
            } else if (i < 10) {
                rnd = Math.floor(Math.random() * nm25.length);
                rnd2 = Math.floor(Math.random() * nm2.length);
                rnd3 = Math.floor(Math.random() * nm26.length);
                rnd4 = Math.floor(Math.random() * nm2.length);
                rnd5 = Math.floor(Math.random() * nm26.length);
                rnd6 = Math.floor(Math.random() * nm2.length);
                names =
                    nm25[rnd] +
                    nm2[rnd2] +
                    nm26[rnd3] +
                    nm2[rnd4] +
                    nm26[rnd5] +
                    nm2[rnd6];
            } else {
                rnd = Math.floor(Math.random() * nm27.length);
                rnd2 = Math.floor(Math.random() * nm2.length);
                rnd3 = Math.floor(Math.random() * nm2.length);
                names = nm25[rnd] + nm2[rnd2] + nm2[rnd3];
            }
        } else if (i < 3) {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            rnd5 = Math.floor(Math.random() * nm4.length);
            names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
        } else if (i < 6) {
            rnd = Math.floor(Math.random() * nm8.length);
            rnd2 = Math.floor(Math.random() * nm9.length);
            rnd3 = Math.floor(Math.random() * nm10.length);
            rnd4 = Math.floor(Math.random() * nm9.length);
            rnd5 = Math.floor(Math.random() * nm11.length);
            names = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm9[rnd4] + nm11[rnd5];
        } else if (i < 7) {
            rnd = Math.floor(Math.random() * nm15.length);
            rnd2 = Math.floor(Math.random() * nm16.length);
            rnd3 = Math.floor(Math.random() * nm17.length);
            rnd4 = Math.floor(Math.random() * nm16.length);
            if (rnd2 < 3) {
                while (rnd4 < 3) {
                    rnd4 = Math.floor(Math.random() * nm16.length);
                }
            }
            rnd5 = Math.floor(Math.random() * nm18.length);
            names =
                nm15[rnd] + nm16[rnd2] + nm17[rnd3] + nm16[rnd4] + nm18[rnd5];
        } else if (i < 9) {
            rnd = Math.floor(Math.random() * nm15.length);
            rnd2 = Math.floor(Math.random() * nm16.length);
            rnd3 = Math.floor(Math.random() * nm18.length);
            names = nm15[rnd] + nm16[rnd2] + nm18[rnd3];
        } else {
            rnd = Math.floor(Math.random() * nm22.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm23.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            rnd5 = Math.floor(Math.random() * nm24.length);
            if (rnd < 2) {
                while (rnd5 < 2) {
                    rnd5 = Math.floor(Math.random() * nm24.length);
                }
            }
            names = nm22[rnd] + nm2[rnd2] + nm23[rnd3] + nm2[rnd4] + nm24[rnd5];
        }
        return names;
    }
}
