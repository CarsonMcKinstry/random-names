export default function bountyHunters() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Angel', 'Ape', 'Arrow', 'Ash', 'Asp', 'Azrael', 'Ballista',
    'Bane', 'Barb', 'Bassilisk', 'Bear', 'Beast', 'Bilge', 'Bingo',
    'Blackjack', 'Blade', 'Blaze', 'Blight', 'Blink', 'Blitz', 'Bolt',
    'Boomer', 'Boon', 'Brass', 'Brute', 'Buffet', 'Bull', 'Bulldozer',
    'Bullet', 'Bulwark', 'Buzz', 'Canine', 'Chase', 'Cipher', 'Cloak',
    'Cloud', 'Cobra', 'Coil', 'Comet', 'Crater', 'Crisis', 'Crook', 'Crow',
    'Cruise', 'Crux', 'Daemon', 'Dagger', 'Dash', 'Deadlock', 'Death',
    'Diablo', 'Discount', 'Dog', 'Domino', 'Doom', 'Dragon', 'Drake', 'Dusk',
    'Edge', 'Face', 'Falcon', 'Fang', 'Fence', 'Fetch', 'Fiend', 'Filch',
    'Flame', 'Flash', 'Flint', 'Fluke', 'Fox', 'Gargoyle', 'Ghost', 'Glitch',
    'Gloom', 'Goliath', 'Gorge', 'Grave', 'Gray', 'Grim', 'Grimace', 'Guarde',
    'Gunner', 'Gut', 'Harm', 'Hatchet', 'Haunt', 'Hawk', 'Haze', 'Hero',
    'Hex', 'Hollow', 'Hook', 'Hound', 'Hunter', 'Hush', 'Image', 'Jag', 'Jet',
    'Jingo', 'Knave', 'Lance', 'Light', 'Locus', 'Lore', 'Lupus', 'Lurch',
    'Lynch', 'Mace', 'Mane', 'Manes', 'Mark', 'Mask', 'Memento', 'Midnight',
    'Mime', 'Mite', 'Mockingbird', 'Mongrel', 'Mug', 'Musket', 'Mute', 'Myth',
    'Necro', 'Nemo', 'Night', 'Nightshade', 'Nil', 'Nix', 'Onyx', 'Orbit',
    'Padlock', 'Paradox', 'Paragon', 'Phantom', 'Pierce', 'Pinch', 'Pivot',
    'Predator', 'Pyro', 'Quill', 'Quiver', 'Ranger', 'Rascal', 'Ratchet',
    'Rattle', 'Reaper', 'Retch', 'Robin', 'Rocket', 'Rogue', 'Ronin', 'Rush',
    'Rust', 'Rustle', 'Saber', 'Savage', 'Scab', 'Scar', 'Scarf', 'Scotch',
    'Scratch', 'Scythe', 'Scyther', 'Seal', 'Sentinel', 'Seraph', 'Shade',
    'Shadow', 'Shank', 'Shepherd', 'Shin', 'Shiver', 'Shotgun', 'Shroud',
    'Silver', 'Sin', 'Slash', 'Sly', 'Smith', 'Smudge', 'Snake', 'Snow',
    'Soul', 'Spark', 'Spectre', 'Spike', 'Splinter', 'Spot', 'Storm',
    'Stranger', 'Swagger', 'Taint', 'Talon', 'Thorne', 'Tide', 'Titan',
    'Tomb', 'Tooth', 'Totem', 'Tracer', 'Trump', 'Tusk', 'Twitch', 'Tyran',
    'Umbra', 'Vain', 'Veil', 'Venin', 'Venom', 'Veto', 'Viper', 'Virtue',
    'Visage', 'Vise', 'Void', 'Wane', 'Whisper', 'Wither', 'Wolf', 'Wraith',
    'Wright', 'X', 'Zero'];
  const nm2 = ['Aegis', 'Allure', 'Angel', 'Arrow', 'Ash', 'Azraelle', 'Azure',
    'Ballista', 'Banshee', 'Barb', 'Beauty', 'Blaze', 'Blesse', 'Blight',
    'Blink', 'Blitz', 'Brass', 'Bridesmaid', 'Brook', 'Cat', 'Celeste',
    'Charm', 'Cicatrix', 'Cloud', 'Clover', 'Comet', 'Cover', 'Coyote',
    'Crisis', 'Critter', 'Crux', 'Curse', 'Dagger', 'Dash', 'Dawn', 'Dawne',
    'Death', 'Deity', 'Demise', 'Desire', 'Destiny', 'Diamond', 'Dilemma',
    'Ditch', 'Dove', 'Ebony', 'Echo', 'Eclipse', 'Enigma', 'Envy', 'Essence',
    'Fable', 'Fae', 'Faith', 'Fang', 'Faze', 'Feather', 'Feline', 'Ferine',
    'Fetch', 'Figment', 'Flair', 'Flame', 'Flow', 'Flower', 'Flux', 'Fortune',
    'Foxy', 'Freak', 'Gem', 'Ghost', 'Gin', 'Glitch', 'Gloome', 'Grim',
    'Grimace', 'Haze', 'Hex', 'Hope', 'Huntress', 'Hush', 'Image', 'Ivory',
    'Jewel', 'Jinx', 'Karma', 'Kelpie', 'Kindle', 'Kiss', 'Lash', 'Light',
    'Locus', 'Lore', 'Lotus', 'Lullaby', 'Lumen', 'Luna', 'Lynch', 'Mace',
    'Maiden', 'Maim', 'Maime', 'Mime', 'Mince', 'Mini', 'Mirage', 'Mischief',
    'Misery', 'Mist', 'Mockingbird', 'Moon', 'Morose', 'Mouse', 'Myth',
    'Nada', 'Nebula', 'Nemo', 'Nettle', 'Night', 'Nighte', 'Nightshade',
    'Nil', 'Nix', 'Numen', 'Oracle', 'Paradox', 'Peach', 'Pearl', 'Penumbra',
    'Phantasma', 'Pickle', 'Primrose', 'Pyro', 'Queen', 'Quest', 'Queste',
    'Quill', 'Rags', 'Raine', 'Rattle', 'Raven', 'Riddle', 'Robin', 'Rogue',
    'Rumor', 'Rush', 'Sabre', 'Sage', 'Scarf', 'Scotch', 'Scratch',
    'Serenity', 'Shade', 'Shadow', 'Shepherd', 'Silence', 'Silver', 'Sin',
    'Slice', 'Smile', 'Snare', 'Snowflake', 'Spark', 'Sparkle', 'Sparrow',
    'Sphinx', 'Spice', 'Sprite', 'Squint', 'Starlight', 'Stiletto', 'Storm',
    'Stranger', 'Tainte', 'Tare', 'Thistle', 'Tide', 'Tigress', 'Trace',
    'Tragedy', 'Trauma', 'Trickster', 'Trixy', 'Twilight', 'Twinkle',
    'Twitch', 'Umbra', 'Veil', 'Vex', 'Virtue', 'Vision', 'Web', 'Wendigo',
    'Whisper', 'Wish', 'Witch', 'Woe', 'X', 'Zero', 'Zot'];
  const nm3 = ['Aegis', 'Angel', 'Arrow', 'Ash', 'Asp', 'Azrael', 'Ballista',
    'Barb', 'Bingo', 'Blade', 'Blaze', 'Blight', 'Blink', 'Blitz', 'Brass',
    'Bullet', 'Buzz', 'Canine', 'Chase', 'Cloak', 'Cloud', 'Coil', 'Comet',
    'Cover', 'Coyote', 'Crisis', 'Critter', 'Crow', 'Crux', 'Curse', 'Dagger',
    'Dash', 'Dawn', 'Death', 'Discount', 'Ditch', 'Domino', 'Dragon', 'Dusk',
    'Echo', 'Edge', 'Fable', 'Falcon', 'Fang', 'Faze', 'Fetch', 'Figment',
    'Flame', 'Flash', 'Flow', 'Fluke', 'Flux', 'Fortune', 'Fox', 'Ghost',
    'Gin', 'Glitch', 'Gloom', 'Grim', 'Grimace', 'Hatchet', 'Haze', 'Hero',
    'Hex', 'Hush', 'Image', 'Jingo', 'Karma', 'Kindle', 'Lash', 'Light',
    'Locus', 'Lore', 'Lynch', 'Mace', 'Maim', 'Memento', 'Midnight', 'Mime',
    'Mince', 'Mini', 'Mirage', 'Mist', 'Mite', 'Mockingbird', 'Mongrel',
    'Moon', 'Morose', 'Mouse', 'Mute', 'Myth', 'Nemo', 'Nettle', 'Night',
    'Nightshade', 'Nil', 'Nix', 'Numen', 'Onyx', 'Orbit', 'Padlock',
    'Paradox', 'Paragon', 'Penumbra', 'Phantom', 'Pickle', 'Pinch', 'Pyro',
    'Quest', 'Quill', 'Quiver', 'Rags', 'Raine', 'Ranger', 'Rascal',
    'Ratchet', 'Rattle', 'Raven', 'Reaper', 'Riddle', 'Robin', 'Rocket',
    'Rogue', 'Ronin', 'Rush', 'Rust', 'Rustle', 'Saber', 'Sabre', 'Savage',
    'Scar', 'Scarf', 'Scotch', 'Scratch', 'Scythe', 'Seal', 'Seraph', 'Shade',
    'Shadow', 'Shank', 'Shepherd', 'Shiver', 'Shroud', 'Silence', 'Silver',
    'Sin', 'Slash', 'Slice', 'Sly', 'Smile', 'Smudge', 'Snake', 'Snare',
    'Snow', 'Spark', 'Sparrow', 'Spice', 'Squint', 'Storm', 'Stranger',
    'Taint', 'Talon', 'Thistle', 'Thorne', 'Tide', 'Totem', 'Trace', 'Tracer',
    'Trauma', 'Trumps', 'Twilight', 'Twitch', 'Tyran', 'Umbra', 'Vain',
    'Veil', 'Venin', 'Venom', 'Veto', 'Vex', 'Viper', 'Virtue', 'Visage',
    'Vise', 'Vision', 'Whisper', 'Wish', 'Wither', 'Woe', 'Wolf', 'X', 'Zero',
    'Zot']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = nm3[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
