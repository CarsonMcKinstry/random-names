export default function wildstarAurins() {
    let names: string;
    let lname;
    let rnd;
    let rnd2;
    let rnd3;
    let rnd4;
    let rnd5;
    let rnd6;
    let rnd7;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        '',
        '',
        '',
        'd',
        'f',
        'g',
        'h',
        'l',
        'm',
        'n',
        's',
        'r',
        't',
        'v',
    ];
    const nm2 = ['a', 'e', 'i', 'y'];
    const nm3 = [
        'b',
        'ff',
        'h',
        'l',
        'll',
        'm',
        'mm',
        'n',
        'nn',
        'r',
        'rv',
        'rl',
        'v',
        'w',
        'z',
    ];
    const nm4 = ['l', 'll', 'n', 'nn', 'r', 's'];
    const nm5 = [
        'd',
        'f',
        'h',
        'l',
        'm',
        'n',
        'r',
        's',
        'sh',
        't',
        'th',
        'v',
        'w',
    ];
    const nm6 = [
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
        'e',
        'i',
        'a',
        'e',
        'i',
        'ya',
        'ia',
    ];
    const nm7 = [
        'h',
        'ff',
        'hn',
        'hl',
        'l',
        'll',
        'ln',
        'lm',
        'm',
        'mm',
        'n',
        'nn',
        'r',
        'rs',
        'rl',
        'rn',
        'rm',
        's',
        'sh',
        'ss',
        'w',
    ];
    const nm8 = [
        'amber',
        'autumn',
        'blue',
        'bright',
        'comet',
        'dawn',
        'day',
        'dew',
        'dusk',
        'ember',
        'even',
        'ever',
        'far',
        'feather',
        'fire',
        'flame',
        'fog',
        'forest',
        'green',
        'lake',
        'leaf',
        'light',
        'luna',
        'lunar',
        'mirth',
        'mist',
        'moon',
        'morning',
        'moss',
        'night',
        'ocean',
        'opal',
        'rain',
        'red',
        'river',
        'rose',
        'ruby',
        'shadow',
        'silver',
        'sky',
        'solar',
        'stem',
        'still',
        'storm',
        'summer',
        'sun',
        'twilight',
        'water',
        'wild',
        'wind',
        'winter',
        'wood',
    ];
    const nm9 = [
        'bloom',
        'blossom',
        'blower',
        'branch',
        'breath',
        'breeze',
        'brook',
        'cloud',
        'clouds',
        'dance',
        'drift',
        'fall',
        'flame',
        'flock',
        'flower',
        'gaze',
        'gazer',
        'grass',
        'heart',
        'lead',
        'leaf',
        'mind',
        'petal',
        'root',
        'shade',
        'shine',
        'sky',
        'snow',
        'song',
        'spirit',
        'spyre',
        'stalk',
        'star',
        'strike',
        'swift',
        'thorn',
        'vale',
        'walk',
        'watch',
        'whisper',
        'wing',
    ];
    {
        rnd6 = Math.floor(Math.random() * nm8.length);
        rnd7 = Math.floor(Math.random() * nm9.length);
        while (nm8[rnd6] === nm9[rnd7]) {
            rnd7 = Math.floor(Math.random() * nm9.length);
        }
        lname = nm8[rnd6] + nm9[rnd7];
        if (type === 1) {
            rnd = Math.floor(Math.random() * nm5.length);
            rnd2 = Math.floor(Math.random() * nm6.length);
            rnd3 = Math.floor(Math.random() * nm7.length);
            rnd4 = Math.floor(Math.random() * nm6.length);
            names = `${nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4]} ${lname}`;
        } else {
            rnd = Math.floor(Math.random() * nm1.length);
            rnd2 = Math.floor(Math.random() * nm2.length);
            rnd3 = Math.floor(Math.random() * nm3.length);
            rnd4 = Math.floor(Math.random() * nm2.length);
            rnd5 = Math.floor(Math.random() * nm4.length);
            names = `${nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5]} ${lname}`;
        }
        return names;
    }
}
