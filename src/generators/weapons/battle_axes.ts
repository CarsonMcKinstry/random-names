import { sample } from 'lodash-es';

export default function battleAxes() {
    let names: string;

    const nm1 = [];
    const nm2 = [];
    const nm3 = [];
    const nm4 = [];
    const nm5 = [];
    const nm6 = [];
    const nm7 = [];

    const i = Math.floor(Math.random() * 10);
    {
        if (i < 3) {
            names = sample(nm1);
        } else if (i < 5) {
            names = `${sample(nm2)} ${sample(nm4)}`;
        } else if (i < 7) {
            names = `${sample(nm2)} ${sample(nm3)} ${sample(nm4)}`;
        } else {
            names = `${sample(nm7)}, ${sample(nm5)} ${sample(nm6)}`;
        }
        return names;
    }
}
