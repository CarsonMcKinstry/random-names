import { sample } from 'lodash-es';

export default function plagues() {
    let names: string;
    const nm2 = [
        'Affliction',
        'Contagion',
        'Death',
        'Epidemic',
        'Infestation',
        'Outbreak',
        'Pandemic',
        'Plague',
        'Scourge',
    ];
    const nm1 = [
        'Aberration',
        'Abnormality',
        'Alpha',
        'Ancient',
        'Annihilation',
        'Anomaly',
        'Apex',
        'Aquatic',
        'Austere',
        'Bare',
        'Barren',
        'Berserker',
        'Bitter',
        'Black',
        'Bleak',
        'Blind',
        'Blinding',
        'Burning',
        'Chaos',
        'Chronic',
        'Crazed',
        'Creeping',
        'Crippling',
        'Crusty',
        'Curtains',
        'Dawn',
        'Deadline',
        'Dehydration',
        'Delirium',
        'Deluge',
        'Delusion',
        'Demise',
        'Desperate',
        'Desperation',
        'Deviation',
        'Dire',
        'Doom',
        'Dread',
        'Dusk',
        'Ebon',
        'End',
        'Ending',
        'Extinction',
        'Extreme',
        'Extremist',
        'Feral',
        'Fierce',
        'Finale',
        'Forlorn',
        'Fragment',
        'Frenzy',
        'Frozen',
        'Fuming',
        'Funereal',
        'Fury',
        'Futile',
        'Global',
        'Gloom',
        'God',
        'Grave',
        'Great',
        'Grievous',
        'Grim',
        'Grisly',
        'Horrid',
        'Howling',
        'Hysteria',
        'Illusion',
        'Immortal',
        'Inferior',
        'Inhuman',
        'Insanity',
        'Invincible',
        'Ire',
        'Iron',
        'Ivory',
        'K.O.',
        'Last',
        'Laughing',
        'Limbo',
        'Lingering',
        'Lost',
        'Lunacy',
        'Lunar',
        'Lurking',
        'Mad',
        'Malevolent',
        'Mania',
        'Maniac',
        'Massacre',
        'Merciless',
        'Molten',
        'Morose',
        'Mortal',
        'Necrosis',
        'Necrotic',
        'Neglect',
        'Neglected',
        'Neurosis',
        'Nightmare',
        'Oblivion',
        'Obsidian',
        'Omega',
        'Onyx',
        'Original',
        'Paragon',
        'Particle',
        'Phantom',
        'Pinnacle',
        'Prime',
        'Primeval',
        'Primitive',
        'Primordial',
        'Rabid',
        'Radical',
        'Reaper',
        'Recurring',
        'Relentless',
        'Repose',
        'Returning',
        'Ruthless',
        'Sadistic',
        'Savage',
        'Scalding',
        'Second',
        'Shadow',
        'Silence',
        'Silent',
        'Singularity',
        'Sleeper',
        'Sleeping',
        'Smothering',
        'Solar',
        'Spasm',
        'Stark',
        'Storm',
        'Stubborn',
        'Superior',
        'Tearing',
        'Terminal',
        'Terminus',
        'Terror',
        'Third',
        'Titan',
        'Tomb',
        'Torture',
        'Turbulent',
        'Twilight',
        'Uncontrollable',
        'Underestimated',
        'Unseen',
        'Veiled',
        'Vertex',
        'Violent',
        'Void',
        'Vortex',
        'White',
        'Wild',
        'Wildlife',
        'World',
        'Wretched',
        'Zombie',
    ];
    {
        names = `The ${sample(nm1)} ${sample(nm2)}`;
        return names;
    }
}
