export default function candys() {
  let names;
  let rnd;
  const nm1 = ['Angels', 'Angelwings', 'Animazings', 'Appies', 'Baboons',
    'Baboos', 'Bakies', 'Banananice', 'Banonza', 'Banonzas', 'Banzais',
    'Barbarians', 'Beaks', 'Beardies', 'Bingbongs', 'Bitbites', 'Bits',
    'Bitterbutter', 'Blasters', 'Blossoms', 'Blues', 'Bomboons', 'Booboos',
    'Boombun', 'Booters', 'Braids', 'Brattles', 'Brittles', 'Buggles',
    'Bumbles', 'Bundles', 'Bunnies', 'Butterflies', 'Buzzers', 'Caramellows',
    'Cerealice', 'Cheddies', 'Cheekies', 'Cheeries', 'Cheeselocks',
    'Cheezies', 'Chestnutters', 'Chewies', 'Chippies', 'Chocakes',
    'Chococanes', 'Chuckles', 'Chunkies', 'Cocoons', 'Cocos', 'Coils',
    'Comets', 'Coolies', 'Coyoties', 'Crackles', 'Crawlies', 'Creamies',
    'Crescents', 'Crispies', 'Crumblers', 'Crumblies', 'Crunchers',
    'Crusties', 'Cubies', 'Cupids', 'Custart', 'Damias', 'Delicies', 'Dewies',
    'Diggies', 'Dimdums', 'Doodles', 'Doofies', 'Doughno\'s', 'Dragons',
    'Drivers', 'Droplets', 'Dubbles', 'Dubloons', 'Dumdums', 'Fairy Rings',
    'Fancakes', 'Fanties', 'Fiddlesticks', 'Fidge', 'Fidgies', 'Figles',
    'Flakies', 'Flappers', 'Fluxies', 'Fortunes', 'Frazzles', 'Fruities',
    'Fusers', 'Galaxies', 'Gingies', 'Gnomies', 'Gobbles', 'Goldies',
    'Gooeys', 'Goofies', 'Googlies', 'Growlies', 'Grumbles', 'Gumbies',
    'Gumbles', 'Haggles', 'Halos', 'Heartstones', 'Hoots', 'Howlers',
    'Huckles', 'Huffles', 'Humhums', 'Hushies', 'Jabbers', 'Jazzles',
    'Jesters', 'Jice', 'Jimbles', 'Jingles', 'Jokers', 'Jumpers', 'Khandi',
    'Lasers', 'Lemones', 'Loopies', 'Lumpies', 'Lunas', 'Luscies', 'Magmas',
    'Marbles', 'Marvels', 'Mellows', 'Melties', 'Mergies', 'Merries',
    'Milkies', 'Miracles', 'Mockers', 'Moomoos', 'Muffles', 'Mumbles',
    'Mummies', 'Munchers', 'Munties', 'Nacheeze', 'Neptunes', 'Nudgefudge',
    'Nutters', 'Oaties', 'Partles', 'Pastels', 'Pasties', 'Pawpaws', 'Petals',
    'Picolocos', 'Picos', 'Piglets', 'Pinkies', 'Pippops', 'Pizzaz', 'Poofs',
    'Pretties', 'Prickles', 'Puds', 'Puffles', 'Puffs', 'Pulpies', 'Pummels',
    'Pumples', 'Raffits', 'Raffles', 'Rainbows', 'Rascals', 'Rebels',
    'Ribbles', 'Rickets', 'Rifrafs', 'Riglies', 'Rimbas', 'Riots', 'Ripples',
    'Roars', 'Rolers', 'Roley Poley', 'Rollies', 'Rompers', 'Rubies',
    'Rumbles', 'Rumbuns', 'Salties', 'Samsams', 'Samsos', 'Sapphires',
    'Shakies', 'Shazams', 'Shinies', 'Shorties', 'Slapples', 'Sluicies',
    'Smashers', 'Smoots', 'Snappers', 'Snipsnaps', 'Snowballs', 'Snowflakes',
    'Sparklers', 'Speakers', 'Spikes', 'Sponges', 'Spoofs', 'Squirmies',
    'Stampers', 'Stripies', 'Sugies', 'Sunies', 'Sweeties', 'Swirvels',
    'Tackles', 'Tea-ser', 'Teasers', 'Tempies', 'Thrillers', 'Tiftofs',
    'Timbles', 'Timtums', 'Trailers', 'Troofles', 'Twiglies', 'Twinkles',
    'Twisters', 'Twitters', 'Vampies', 'Waggles', 'Wallops', 'Whippers',
    'Whippersnappers', 'Whoopees', 'Wibbles', 'Wiggles', 'Wisecrackers',
    'Witties', 'Wizards', 'Wonkies', 'Wrilies', 'Wrinklies', 'Yahoos',
    'Yumyums', 'Zigzags', 'Zoots'];
  {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    return names;
  }
}
