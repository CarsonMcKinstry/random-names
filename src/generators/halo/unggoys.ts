export default function unggoys() {
    let names: string;
    let rnd;
    let rnd1;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    const nm1 = ['a', 'i', 'u'];
    const nm2 = ['d', 'f', 'k', 'l', 'm', 's', 'w', 'p', 'y', 'z'];
    const nm3 = [
        'fl',
        'kl',
        'sl',
        'sm',
        'pl',
        'zl',
        'd',
        'f',
        'k',
        'l',
        'm',
        's',
        'w',
        'p',
        'y',
        'z',
    ];
    const nm4 = ['fl', 'kl', 'sl', 'sm', 'pl', 'zl'];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 5) {
            rnd = Math.floor(Math.random() * nm2.length);
            rnd2 = Math.floor(Math.random() * nm1.length);
            rnd3 = Math.floor(Math.random() * nm2.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            names = nm2[rnd] + nm1[rnd2] + nm2[rnd3] + nm1[rnd2] + nm2[rnd4];
        } else if (i < 7) {
            rnd = Math.floor(Math.random() * nm3.length);
            rnd2 = Math.floor(Math.random() * nm1.length);
            rnd1 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            if (rnd < 6) {
                while (rnd3 < 6) {
                    rnd3 = Math.floor(Math.random() * nm3.length);
                }
            }
            rnd4 = Math.floor(Math.random() * nm1.length);
            rnd5 = Math.floor(Math.random() * nm2.length);
            names =
                nm3[rnd] +
                nm1[rnd2] +
                nm2[rnd1] +
                nm3[rnd3] +
                nm1[rnd4] +
                nm2[rnd5];
        } else {
            rnd = Math.floor(Math.random() * nm4.length);
            rnd2 = Math.floor(Math.random() * nm1.length);
            rnd3 = Math.floor(Math.random() * nm2.length);
            names = nm4[rnd] + nm1[rnd2] + nm2[rnd3];
        }
        return names;
    }
}
