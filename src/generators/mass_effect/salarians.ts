export default function salarians() {
    let names: string;
    let rnd0;
    let rnd1;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    let rnd6;
    let rnd7;
    let rnd8;
    let names7;
    const type = Math.random() > 0.5 ? 0 : 1;
    const names1 = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'l',
        'm',
        'n',
        'p',
        'r',
        's',
        't',
        'v',
        'w',
        'y',
        'z',
        '',
        '',
        '',
        '',
    ];
    const names2 = ['a', 'e', 'o', 'i', 'u', 'ae'];
    const names3 = ['r', '', ''];
    const names4 = [
        'b',
        'd',
        'g',
        'h',
        'k',
        'l',
        'm',
        'n',
        'p',
        'r',
        's',
        'st',
        't',
        'w',
    ];
    const names5 = [
        'af',
        'al',
        'all',
        'an',
        'ann',
        'ant',
        'ar',
        'arf',
        'arp',
        'art',
        'arth',
        'aw',
        'ern',
        'ik',
        'in',
        'ip',
        'irn',
        'ok',
        'ol',
        'oln',
        'on',
        'op',
        'orm',
        'ort',
        'orth',
        'ow',
        'um',
    ];
    const names6 = [
        'bam',
        'ban',
        'ben',
        'dril',
        'drok',
        'he',
        'ja',
        'ji',
        'ks',
        'lan',
        'lban',
        'lben',
        'lis',
        'lji',
        'lon',
        'lorn',
        'ls',
        'lu',
        'lus',
        'lzik',
        'mal',
        'min',
        'mnor',
        'mor',
        'nik',
        'nis',
        'nmorn',
        'nok',
        'pon',
        'raji',
        'ral',
        'ralan',
        'ran',
        'rban',
        'rix',
        'rji',
        'rlan',
        'ss',
        'u',
        'wan',
        'x',
        'yor',
        'zal',
        'zen',
        'zik',
        'zom',
        'zon',
        'zor',
        'zu',
        'zz',
    ];
    if (type === 1) {
        names7 = [''];
    } else {
        names7 = ['a', 'e', 'o', 'i'];
    }
    {
        rnd0 = Math.floor(Math.random() * names1.length);
        rnd1 = Math.floor(Math.random() * names2.length);
        rnd2 = Math.floor(Math.random() * names3.length);
        rnd3 = Math.floor(Math.random() * names4.length);
        rnd4 = Math.floor(Math.random() * names5.length);
        rnd5 = Math.floor(Math.random() * names1.length);
        while (rnd5 === '') {
            rnd5 = Math.floor(Math.random() * names1.length);
        }
        rnd6 = Math.floor(Math.random() * names2.length);
        rnd7 = Math.floor(Math.random() * names6.length);
        rnd8 = Math.floor(Math.random() * names7.length);
        names = `${names1[rnd0] + names2[rnd1] + names3[rnd2] + names4[rnd3] + names5[rnd4]} ${names1[rnd5]}${names2[rnd6]}${names6[rnd7]}${names7[rnd8]}`;
        return names;
    }
}
