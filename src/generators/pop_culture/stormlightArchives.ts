export default function stormlightArchives() {
    let names: string;
    let sname;
    let lname;
    let rnd;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    let rnd6;
    let rnd7;
    let rnd8;
    let rnd9;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        '',
        '',
        '',
        'b',
        'bl',
        'c',
        'd',
        'g',
        'gr',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'r',
        's',
        't',
        'th',
        'v',
        'w',
        'y',
    ];
    const nm2 = [
        'a',
        'e',
        'o',
        'a',
        'e',
        'o',
        'a',
        'e',
        'o',
        'a',
        'a',
        'a',
        'e',
        'i',
        'o',
        'u',
        'a',
        'e',
        'i',
        'o',
        'oa',
        'ea',
        'ia',
        'ai',
        'io',
    ];
    const nm3 = [
        'b',
        'br',
        'd',
        'k',
        'l',
        'lh',
        'll',
        'm',
        'mm',
        'n',
        'r',
        'rf',
        'rr',
        'rt',
        'sh',
        'st',
        't',
        'th',
        'v',
    ];
    const nm4 = [
        '',
        '',
        '',
        'b',
        'ds',
        'ft',
        'h',
        'ks',
        'l',
        'lds',
        'lp',
        'm',
        'n',
        'nn',
        'r',
        'rd',
        'rks',
        'rl',
        's',
        'sh',
        'st',
        't',
        'th',
        'v',
        'w',
        'z',
    ];
    const nm5 = [
        '',
        '',
        '',
        'c',
        'd',
        'f',
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
        'w',
    ];
    const nm6 = [
        'a',
        'ee',
        'ae',
        'ia',
        'ai',
        'i',
        'e',
        'a',
        'e',
        'i',
        'a',
        'e',
        'i',
        'a',
        'e',
        'i',
        'a',
        'a',
        'a',
        'a',
    ];
    const nm7 = [
        'd',
        'l',
        'lh',
        'll',
        'm',
        'mm',
        'n',
        'nk',
        'nl',
        'r',
        'rh',
        'sm',
        's',
        'sh',
        'sn',
        't',
        'th',
        'v',
        'w',
    ];
    const nm8 = [
        '',
        '',
        '',
        '',
        '',
        '',
        'd',
        'h',
        'l',
        'm',
        'n',
        's',
        't',
        'th',
        'v',
    ];
    const nm9 = [
        '',
        '',
        '',
        '',
        'c',
        'd',
        'g',
        'h',
        'k',
        'kh',
        'l',
        'm',
        'n',
        'r',
        's',
        'st',
        't',
        'v',
        'w',
    ];
    const nm10 = [
        'a',
        'e',
        'o',
        'i',
        'a',
        'a',
        'e',
        'o',
        'i',
        'a',
        'a',
        'e',
        'o',
        'i',
        'a',
        'io',
        'ea',
    ];
    const nm11 = [
        'd',
        'g',
        'k',
        'l',
        'm',
        'n',
        'p',
        'r',
        's',
        'sh',
        'st',
        't',
        'th',
        'v',
    ];
    const nm12 = [
        '',
        '',
        '',
        '',
        '',
        '',
        'a',
        'e',
        'o',
        'i',
        'a',
        'a',
        'e',
        'o',
        'i',
        'a',
        'a',
        'e',
        'o',
        'i',
        'a',
        'io',
        'ea',
    ];
    const nm13 = [
        '',
        '',
        '',
        '',
        '',
        '',
        'd',
        'g',
        'k',
        'l',
        'm',
        'n',
        'p',
        'r',
        's',
        'sh',
        'st',
        't',
        'th',
        'v',
    ];
    const nm14 = ['c', 'd', 'g', 'm', 'n', 's', 't', 'th', 'v', 'w'];
    const nm15 = [
        '',
        '',
        '',
        'b',
        'd',
        'h',
        'j',
        'l',
        'm',
        'n',
        'p',
        'r',
        'v',
        'w',
    ];
    const nm16 = [
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
        'a',
        'ue',
        'ia',
    ];
    const nm17 = [
        'd',
        'j',
        'k',
        'kk',
        'l',
        'm',
        'n',
        'r',
        'sh',
        's',
        'ss',
        't',
        'v',
    ];
    const nm18 = ['', '', '', 'd', 'l', 'n', 'm', 'r', 's', 'sh', 't'];
    const nm19 = [
        '',
        '',
        '',
        'f',
        'h',
        'l',
        'm',
        'n',
        's',
        'sh',
        't',
        'th',
        'v',
        'w',
    ];
    const nm20 = [
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
        'a',
        'ue',
        'ia',
    ];
    const nm21 = ['d', 'f', 'j', 'h', 'l', 'll', 'm', 'n', 'r', 'ss', 's', 't'];
    const nm22 = ['', '', '', '', '', '', 'l', 'n', 'm', 'r', 's', 'sh', 'th'];
    const nm23 = ['b', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't'];
    const nm24 = ['a', 'e', 'i'];
    const nm25 = ['f', 'h', 'j', 'k', 'l', 'll', 'lm', 'm', 'n', 'r', 'v'];
    const nm26 = ['', 'a', 'e', 'i'];
    const nm27 = ['', 'f', 'h', 'j', 'k', 'l', 'll', 'lm', 'm', 'n', 'r', 'v'];
    const nm28 = ['d', 'l', 'n', 'r'];
    const nm29 = [
        'cn',
        'cl',
        'dv',
        'dvl',
        'dr',
        'gm',
        'gl',
        'gv',
        'km',
        'kl',
        'k',
        'mn',
        'mst',
        'mv',
        'mw',
        'mr',
        'nm',
        'nr',
        'nst',
        'nv',
        'nw',
        'nl',
        'tr',
        'ts',
        'tv',
        'tm',
        'tn',
        't',
        'tvl',
        'vl',
        'vm',
        'vn',
        'vst',
    ];
    const nm30 = ['a', 'e', 'o', 'i', 'y'];
    const nm31 = [
        'cv',
        'cl',
        'cn',
        'km',
        'kn',
        'krn',
        'k',
        'kv',
        'lm',
        'ln',
        'lrn',
        'll',
        'lb',
        'nm',
        'nr',
        'nd',
        'nt',
        'm',
        'mt',
        'mrn',
        'md',
        'rn',
        'lrm',
        'rm',
    ];
    const nm32 = [
        '',
        '',
        '',
        '',
        '',
        'hs',
        'hsh',
        'hth',
        'htn',
        'kn',
        'km',
        'ks',
        'kst',
        'kh',
        'lm',
        'ln',
        'll',
        'lb',
        'lst',
        'ls',
        'lt',
        'nm',
        'nr',
        'nd',
        'nt',
        'm',
        'mt',
        'ms',
        'msh',
        'msl',
        'md',
        'shlv',
        'sn',
    ];
    const nm33 = ['a', 'e', 'o', 'i', 'y'];
    const nm34 = [
        'cl',
        'dv',
        'dr',
        'dh',
        'dl',
        'gh',
        'gl',
        'gm',
        'gn',
        'h',
        'hr',
        'hl',
        'kl',
        'kh',
        'kn',
        'km',
        'kv',
        'l',
        'ln',
        'lm',
        'ls',
        'mn',
        'mw',
        'mh',
        'nw',
        'nl',
        'nh',
        'th',
        'thr',
        'trh',
        'ts',
        'tw',
        'tm',
        'tn',
        'vl',
        'vn',
        'r',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 4) {
            rnd = Math.floor(Math.random() * nm9.length);
            rnd2 = Math.floor(Math.random() * nm10.length);
            rnd3 = Math.floor(Math.random() * nm11.length);
            rnd4 = Math.floor(Math.random() * nm10.length);
            rnd5 = Math.floor(Math.random() * nm11.length);
            rnd6 = Math.floor(Math.random() * nm12.length);
            rnd7 = Math.floor(Math.random() * nm13.length);
            if (rnd6 < 6) {
                rnd7 = 0;
            } else {
                while (rnd7 < 6) {
                    rnd7 = Math.floor(Math.random() * nm13.length);
                }
            }
            rnd8 = Math.floor(Math.random() * nm10.length);
            rnd9 = Math.floor(Math.random() * nm14.length);
            lname =
                nm9[rnd] +
                nm10[rnd2] +
                nm11[rnd3] +
                nm10[rnd4] +
                nm11[rnd5] +
                nm12[rnd6] +
                nm13[rnd7] +
                nm10[rnd8] +
                nm14[rnd9];
        } else if (i < 7) {
            rnd = Math.floor(Math.random() * nm23.length);
            rnd2 = Math.floor(Math.random() * nm24.length);
            rnd3 = Math.floor(Math.random() * nm25.length);
            rnd4 = Math.floor(Math.random() * nm24.length);
            rnd5 = Math.floor(Math.random() * nm25.length);
            rnd6 = Math.floor(Math.random() * nm26.length);
            rnd7 = Math.floor(Math.random() * nm27.length);
            if (rnd6 < 1) {
                rnd7 = 0;
            } else {
                while (rnd7 < 1) {
                    rnd7 = Math.floor(Math.random() * nm27.length);
                }
            }
            rnd8 = Math.floor(Math.random() * nm24.length);
            rnd9 = Math.floor(Math.random() * nm28.length);
            sname =
                nm23[rnd] +
                nm24[rnd2] +
                nm25[rnd3] +
                nm24[rnd4] +
                nm25[rnd5] +
                nm26[rnd6] +
                nm27[rnd7] +
                nm24[rnd8] +
                nm28[rnd9];
        }
        if (type === 1) {
            if (i < 2) {
                rnd = Math.floor(Math.random() * nm5.length);
                rnd2 = Math.floor(Math.random() * nm6.length);
                rnd3 = Math.floor(Math.random() * nm8.length);
                while (rnd < 3) {
                    rnd = Math.floor(Math.random() * nm5.length);
                }
                names = `${nm5[rnd] + nm6[rnd2] + nm8[rnd3]} ${lname}`;
            } else if (i < 4) {
                rnd = Math.floor(Math.random() * nm5.length);
                rnd2 = Math.floor(Math.random() * nm6.length);
                rnd3 = Math.floor(Math.random() * nm7.length);
                rnd4 = Math.floor(Math.random() * nm6.length);
                rnd5 = Math.floor(Math.random() * nm8.length);
                names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd5]} ${lname}`;
            } else if (i < 6) {
                rnd = Math.floor(Math.random() * nm19.length);
                rnd2 = Math.floor(Math.random() * nm20.length);
                rnd3 = Math.floor(Math.random() * nm22.length);
                while (rnd < 3) {
                    rnd = Math.floor(Math.random() * nm19.length);
                }
                while (rnd3 < 6) {
                    rnd3 = Math.floor(Math.random() * nm22.length);
                }
                rnd4 = Math.floor(Math.random() * nm20.length);
                names = `${nm19[rnd] + nm20[rnd2] + nm22[rnd3] + nm20[rnd4]} ${sname}`;
            } else if (i < 7) {
                rnd = Math.floor(Math.random() * nm19.length);
                rnd2 = Math.floor(Math.random() * nm20.length);
                rnd3 = Math.floor(Math.random() * nm21.length);
                rnd4 = Math.floor(Math.random() * nm20.length);
                rnd5 = Math.floor(Math.random() * nm22.length);
                names = `${nm19[rnd] + nm20[rnd2] + nm21[rnd3] + nm20[rnd4] + nm22[rnd5]} ${sname}`;
            } else {
                rnd = Math.floor(Math.random() * nm32.length);
                rnd2 = Math.floor(Math.random() * nm33.length);
                rnd3 = Math.floor(Math.random() * nm34.length);
                names = nm32[rnd] + nm33[rnd2] + nm34[rnd3];
            }
        } else if (i < 2) {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm4.length);
            if (rnd < 3) {
                while (rnd3 < 3) {
                    rnd3 = Math.floor(Math.random() * nm4.length);
                }
            } else {
                while (rnd3 < 3) {
                    rnd3 = Math.floor(Math.random() * nm4.length);
                }
            }
            names = `${nm1[rnd] + nm2[rnd2] + nm4[rnd3]} ${lname}`;
        } else if (i < 4) {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            rnd5 = Math.floor(Math.random() * nm4.length);
            names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${lname}`;
        } else if (i < 6) {
            rnd = Math.floor(Math.random() * nm15.length);
            rnd2 = Math.floor(Math.random() * nm16.length);
            rnd3 = Math.floor(Math.random() * nm18.length);
            if (rnd < 3) {
                while (rnd3 < 3) {
                    rnd3 = Math.floor(Math.random() * nm18.length);
                }
            } else {
                while (rnd3 < 3) {
                    rnd3 = Math.floor(Math.random() * nm18.length);
                }
            }
            names = `${nm15[rnd] + nm16[rnd2] + nm18[rnd3]} ${sname}`;
        } else if (i < 7) {
            rnd = Math.floor(Math.random() * nm15.length);
            rnd2 = Math.floor(Math.random() * nm16.length);
            rnd3 = Math.floor(Math.random() * nm17.length);
            rnd4 = Math.floor(Math.random() * nm16.length);
            rnd5 = Math.floor(Math.random() * nm18.length);
            names = `${nm15[rnd] + nm16[rnd2] + nm17[rnd3] + nm16[rnd4] + nm18[rnd5]} ${sname}`;
        } else {
            rnd = Math.floor(Math.random() * nm29.length);
            rnd2 = Math.floor(Math.random() * nm30.length);
            rnd3 = Math.floor(Math.random() * nm31.length);
            names = nm29[rnd] + nm30[rnd2] + nm31[rnd3];
        }
        return names;
    }
}
