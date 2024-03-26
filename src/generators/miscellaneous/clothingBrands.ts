import { sample } from 'lodash-es';

export default function clothingBrands() {
    let names: string;
    const nm1 = [
        'Ace',
        'Adore',
        'Aeon',
        'Allure',
        'Ambience',
        'Amity',
        'Amour',
        'Anchor',
        'Angel',
        'Angelwings',
        'Anomaly',
        'Apex',
        'Aqua',
        'Aqua Pura',
        'Arcane',
        'Ardor',
        'Aristocrat',
        'Arrow',
        'Artiste',
        'August',
        'Aura',
        'Aurelian',
        'Aurora',
        'Aurora Borealis',
        'Awe',
        'Azure',
        'Beacon',
        'Beast',
        'Black Widow',
        'Bliss',
        'Blitz',
        'Blizzard',
        'Blossoms',
        'Blue Flamingo',
        'Blues',
        'Borealis',
        'Caesura',
        'Capital',
        'Castle',
        'Charade',
        'Charisma',
        'Cherish',
        'Chronicle',
        'Comet',
        'Countess',
        'Crystal',
        'Cupid',
        'Dawn',
        'Daydream',
        'Dazzle',
        'Delicacy',
        'Delight',
        'Desire',
        'Eagle Eye',
        'Ebony',
        'Eccentricity',
        'Eccentrics',
        'Echo',
        'Eclipse',
        'Ecstasy',
        'Edict',
        'Elan Vital',
        'Elite',
        'Elysium',
        'Emerald',
        'Eminence',
        'Emperor',
        'Empress',
        'Enchanted',
        'Enigma',
        'Enterprise',
        'Entity',
        'Entrance',
        'Eos',
        'Epilogue',
        'Epoch',
        'Escape',
        'Esprit',
        'Essence',
        'Estate',
        'Eternal Youth',
        'Eternity',
        'Ethereal',
        'Euphoria',
        'Fable',
        'Facet',
        'Fairy Dust',
        'Fanatics',
        'Fata Morgana',
        'Fay',
        'Felicity',
        'Figments',
        'Firefly',
        'Flair',
        'Flame',
        'Flare',
        'Flow',
        'Flow Motion',
        'Fluke',
        'Flux',
        'Forte',
        'Fusion',
        'Galaxy',
        'Gemstone',
        'Gift',
        'Glamour',
        'Glimmer',
        'Grace',
        'Grand Slam',
        'Grandeur',
        'Groove',
        'Halcyon',
        'Heirloom',
        'Helix',
        'Heritage',
        'Honor',
        'Hush',
        'Illume',
        'Impulse',
        'Intrepid',
        'Ivory',
        'Joy',
        'Jubilee',
        'Lacuna',
        'Lagoon',
        'Legacy',
        'Legend',
        'Leisure',
        'Leviathan',
        'Liberty',
        'Lily',
        'Loco Motion',
        'Lore',
        'Lullaby',
        'Luminos',
        'Majesty',
        'Memo',
        'Merry',
        "Mind's Eye",
        'Miracle',
        'Mirage',
        'Monolith',
        'Muse',
        'Mystery',
        'Mythic',
        'Mythos',
        'Noble',
        'Nova',
        'Oasis',
        'Obelisk',
        'Obsidian',
        'Oddity',
        'Onyx',
        'Opal Essence',
        'Oracle',
        'Orchid',
        'Palace',
        'Paradise',
        'Paradox',
        'Paragon',
        'Parallel',
        'Paramour',
        'Patron',
        'Peacock',
        'Petal',
        'Petal Rose',
        'Phenomenon',
        'Pinnacle',
        'Pizzazz',
        'Pompon',
        'Prestige',
        'Prime',
        'Primrose',
        'Prodigy',
        'Prophecy',
        'Psyche',
        'Pyramid',
        'Pyre',
        'Question Mark',
        'Radiance',
        'Rara Avis',
        'Reflection',
        'Reign',
        'Relish',
        'Repose',
        'Retrospectacle',
        'Revelation',
        'Reverse',
        'Saga',
        'Sanctuary',
        'Sapphire',
        'Scandal',
        'Scents',
        'Sensations',
        'Serenity',
        'Shadow',
        'Shooting Star',
        'Snowflake',
        'Solace',
        'Solitude',
        'Solstice',
        'Spark',
        'Sparkle',
        'Spectacle',
        'Spellbound',
        'Spire',
        'Spirit',
        'Sprite',
        'Starlight',
        'Stasis',
        'Strut',
        'Suave',
        'Summit',
        'Swagger',
        'Swashbuckle',
        'Tempest',
        'Temptation',
        'Tranquility',
        'Tribute',
        'Triumph',
        'Urbane',
        'Valentine',
        'Venture',
        'Vice',
        'Virtue',
        'Vision',
        'Vortex',
        'White Wolf',
        'Willow',
        'Yen',
        'Yin',
        'Zeal',
        'Zenith',
        'Zigzag',
        'Zion',
    ];
    const nm2 = [
        'Design',
        'Designs',
        'Apparel',
        'Gear',
        'Couture',
        'Clothing Company',
        'Clothing',
        'Accessories',
        'Fashion',
        'Clothing',
        'Clothes',
        'Collective',
        'Collection',
        'Company',
    ];
    const i = Math.floor(Math.random() * 10);
    {
        if (i < 3) {
            names = sample(nm1);
        } else {
            names = `${sample(nm1)} ${sample(nm2)}`;
        }
        return names;
    }
}
