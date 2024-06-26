import { sample } from 'lodash';

export default function gearEnchantments() {
    let names: string;
    const nm1 = [
        'Amulet',
        'Axe',
        'Band',
        'Boots',
        'Bow',
        'Bracelet',
        'Bracers',
        'Chaps',
        'Chestplate',
        'Crown',
        'Dagger',
        'Dress',
        'Garment',
        'Gauntlets',
        'Gloves',
        'Greaves',
        'Halberd',
        'Hammer',
        'Hat',
        'Helm',
        'Leggings',
        'Locket',
        'Mace',
        'Necklace',
        'Ornament',
        'Pauldrons',
        'Pendant',
        'Ring',
        'Robes',
        'Scythe',
        'Shield',
        'Shoes',
        'Spear',
        'Staff',
        'Sword',
        'Talisman',
        'Tiara',
        'Trinket',
        'Vambraces',
    ];
    const nm2 = [
        'Absorption',
        'Accuracy',
        'Adaptability',
        'Adventure',
        'Affliction',
        'Agility',
        'Air',
        'Alchemy',
        'Amnesia',
        'Anger',
        'Anguish',
        'Annihilation',
        'Anxiety',
        'Arcane Magic',
        'Arcane Power',
        'Arcane Resist',
        'Archery',
        'Armor',
        'Art',
        'Ashes',
        'Assassination',
        'Assassins',
        'Assaults',
        'Astrology',
        'Astronomy',
        'Attack',
        'Attunement',
        'Auras',
        'Awareness',
        'Awe',
        'Barriers',
        'Barter',
        'Battle',
        'Beginnings',
        'Binding',
        'Blades',
        'Blast Protection',
        'Blasting',
        'Blindness',
        'Bliss',
        'Blood',
        'Bloodshed',
        'Bravery',
        'Brawn',
        'Brilliance',
        'Calamity',
        'Calmness',
        'Camouflage',
        'Caring',
        'Carnage',
        'Cataclysms',
        'Catastrophe',
        'Chains',
        'Chills',
        'Clarity',
        'Combat',
        'Comfort',
        'Composure',
        'Confidence',
        'Conjuration',
        'Conjuring',
        'Construction',
        'Convulsion',
        'Cooking',
        'Courage',
        'Cover',
        'Crafting',
        'Creation',
        'Crushing',
        'Cunning',
        'Danger',
        'Dangers',
        'Dark Magic',
        'Dark Powers',
        'Darkness',
        'Dawn',
        'Defense',
        'Defiance',
        'Deflection',
        'Delight',
        'Delirium',
        'Demolition',
        'Demons',
        'Depressions',
        'Despair',
        'Destruction',
        'Determination',
        'Devotion',
        'Dexterity',
        'Dignity',
        'Diplomacy',
        'Disbelief',
        'Discipline',
        'Disease Resist',
        'Disgust',
        'Dishonor',
        'Dismay',
        'Distress',
        'Dodging',
        'Dominance',
        'Domination',
        'Doom',
        'Doubt',
        'Dread',
        'Dreams',
        'Duels',
        'Dusk',
        'Earth',
        'Elegance',
        'Elimination',
        'Enchanting',
        'Enchantments',
        'Ends',
        'Endurance',
        'Executions',
        'Expertise',
        'Exploration',
        'Explosions',
        'Extinction',
        'Faith',
        'Fame',
        'Farming',
        'Fear',
        'Feather Falling',
        'Finesse',
        'Fire',
        'Fire Magic',
        'Fire Power',
        'Fire Protection',
        'Fire Resist',
        'Fishing',
        'Fletching',
        'Focus',
        'Fog',
        'Force',
        'Forging',
        'Fortitude',
        'Fortune',
        'Friendship',
        'Fright',
        'Frost',
        'Frost Power',
        'Frost Resist',
        'Fury',
        'Ghosts',
        'Glee',
        'Gloom',
        'Glory',
        'Gluttony',
        'Grace',
        'Greed',
        'Grief',
        'Guardians',
        'Guards',
        'Happiness',
        'Harm',
        'Haste',
        'Hate',
        'Hatred',
        'Havoc',
        'Healing',
        'Health',
        'Heaven',
        'Heavy Armor',
        'Hell',
        'Hellfire',
        'Herbalism',
        'Home',
        'Honor',
        'Horror',
        'Horrors',
        'Hostility',
        'Hunger',
        'Hurricanes',
        'Ice',
        'Ice Magic',
        'Icewalking',
        'Illusions',
        'Incantations',
        'Indifference',
        'Infinity',
        'Insomnia',
        'Intellect',
        'Invisibility',
        'Joy',
        'Killing',
        'Kings',
        'Laughter',
        'Lava',
        'Lavawalking',
        'Laziness',
        'Life',
        'Lifemending',
        'Lifestealing',
        'Light',
        'Light Armor',
        'Limbo',
        'Loot',
        'Loss',
        'Lost Souls',
        'Love',
        'Luck',
        'Magic',
        'Magic Resist',
        'Magma',
        'Mana',
        'Mana Restoration',
        'Massacre',
        'Mastery',
        'Melancholy',
        'Mending',
        'Might',
        'Mining',
        'Miracles',
        'Misery',
        'Misfortune',
        'Mist',
        'Moonlight',
        'Murder',
        'Mutation',
        'Mysteries',
        'Nature',
        'Neglect',
        'Nightmares',
        'Nothing',
        'Oblivion',
        'Optimism',
        'Pain',
        'Panic',
        'Paradise',
        'Parry',
        'Patience',
        'Peace',
        'Pessimism',
        'Phantoms',
        'Pickpocketing',
        'Piercing',
        'Pleasure',
        'Poise',
        'Poison',
        'Poison Resist',
        'Potency',
        'Potions',
        'Power',
        'Praise',
        'Prayers',
        'Precision',
        'Preservation',
        'Prestige',
        'Projectile Protection',
        'Prophecies',
        'Prosperity',
        'Protection',
        'Rain',
        'Recoil',
        'Refuge',
        'Regeneration',
        'Relics',
        'Relief',
        'Renewal',
        'Repulsion',
        'Resilience',
        'Respect',
        'Respiration',
        'Restoration',
        'Revenge',
        'Ruins',
        'Runes',
        'Safety',
        'Salvation',
        'Security',
        'Serenity',
        'Shadow Resist',
        'Shadows',
        'Shock',
        'Sickness',
        'Sight',
        'Silence',
        'Skills',
        'Slaughter',
        'Slaying',
        'Smite',
        'Smithing',
        'Sneaking',
        'Solitude',
        'Sorcery',
        'Soulmending',
        'Souls',
        'Soulstealing',
        'Speed',
        'Spellpower',
        'Spells',
        'Spirit',
        'Spite',
        'Stability',
        'Stamina',
        'Stealth',
        'Stone',
        'Storms',
        'Strength',
        'Striking',
        'Subtlety',
        'Success',
        'Suffering',
        'Summoning',
        'Sunfire',
        'Sunlight',
        'Swiftness',
        'Swordbreaking',
        'Tears',
        'Tenacity',
        'Terror',
        'Terrors',
        'Thieves',
        'Thorns',
        'Thunder',
        'Torment',
        'Torture',
        'Treasures',
        'Tributes',
        'Trickery',
        'Triumph',
        'Trouble',
        'Trust',
        'Twilight',
        'Understanding',
        'Undoing',
        'Valiance',
        'Valor',
        'Vengeance',
        'Venom',
        'Vigor',
        'Visibility',
        'Vitality',
        'Voodoo',
        'War',
        'Water',
        'Water Breathing',
        'Waterwalking',
        'Weakness',
        'Wealth',
        'Wind',
        'Windwalking',
        'Wisdom',
        'Witchcraft',
        'Woe',
        'Wonders',
        'Woodcutting',
        'Worship',
        'the Angler',
        'the Archer',
        'the Armageddon',
        'the Artist',
        'the Bear',
        'the Beast',
        'the Berserker',
        'the Boar',
        'the Cataclysm',
        'the Crusader',
        'the Day',
        'the Drunk',
        'the Eagle',
        'the Eclipse',
        'the End',
        'the Enigma',
        'the Gargoyle',
        'the Gladiator',
        'the Hunter',
        'the Isles',
        'the King',
        'the Knight',
        'the Light',
        'the Lion',
        'the Mage',
        'the Miner',
        'the Moon',
        'the Mountain',
        'the Night',
        'the Oracle',
        'the Phoenix',
        'the Prince',
        'the Princess',
        'the Prisoner',
        'the Prodigy',
        'the Prophecy',
        'the Prophet',
        'the Queen',
        'the River',
        'the Scourge',
        'the Seer',
        'the Serpent',
        'the Steward',
        'the Sun',
        'the Swamp',
        'the Void',
        'the Volcano',
        'the Ward',
        'the Warrior',
        'the Whale',
        'the Wolf',
    ];
    {
        names = `${sample(nm1)} of ${sample(nm2)}`;
        return names;
    }
}
