export default function mansions() {
  let names;
  let rnd;
  let rnd2;
  let rnd4;
  const nm1 = ['Ander', 'Arm', 'Arn', 'Bal', 'Batten', 'Beau', 'Beres', 'Black',
    'Blan', 'Boat', 'Bott', 'Bran', 'Brew', 'Bridge', 'Brow', 'Buck', 'Cal',
    'Camp', 'Car', 'Caul', 'Chal', 'Chap', 'Clay', 'Cole', 'Con', 'Cope',
    'Coul', 'Coving', 'Craw', 'Cunning', 'Daven', 'Daw', 'Dris', 'Du', 'Ed',
    'Eger', 'Est', 'Fair', 'Farn', 'Fiel', 'Fore', 'Fox', 'Frank', 'Free',
    'Fuller', 'Gallo', 'Gardi', 'Garret', 'Glad', 'Gold', 'Good', 'Gran',
    'Greg', 'Gren', 'Ham', 'Hamil', 'Har', 'Harring', 'Hart', 'Hen', 'Hol',
    'Hop', 'How', 'Hub', 'Hum', 'Hutch', 'Jen', 'Ken', 'Knap', 'Lam', 'Lamb',
    'Lan', 'Law', 'Le', 'Lind', 'Living', 'Mac', 'Man', 'Marsh', 'Mau', 'Max',
    'May', 'Mea', 'Mer', 'Mon', 'Mont', 'Mor', 'More', 'Moris', 'Mul', 'Mur',
    'Nel', 'Nichol', 'Nick', 'Nor', 'O', 'Os', 'Pad', 'Paken', 'Pal', 'Par',
    'Part', 'Patter', 'Pau', 'Pear', 'Penning', 'Pet', 'Peter', 'Pett',
    'Pick', 'Pit', 'Pitt', 'Port', 'Put', 'Rain', 'Ram', 'Ran', 'Rem',
    'Rober', 'Robin', 'Rosen', 'Rot', 'Roths', 'Rott', 'Rut', 'Ruther', 'Rux',
    'San', 'Saun', 'Saw', 'Sey', 'Shan', 'Shear', 'Shep', 'Shur', 'Sin',
    'Skel', 'Skin', 'Small', 'Solo', 'Spen', 'Stan', 'Ste', 'Stone', 'Strat',
    'Sul', 'Swee', 'Tal', 'Tay', 'Tho', 'Thorn', 'Tom', 'Town', 'Under',
    'Valen', 'Wai', 'Wal', 'War', 'Wat', 'Wea', 'Web', 'Wer', 'Whit', 'Wil',
    'Win', 'Woo', 'Wood', 'Wyn', 'Yeat'];
  const nm2 = ['bard', 'barry', 'barth', 'bell', 'bert', 'borne', 'bot', 'bow',
    'brand', 'brandt', 'brick', 'brook', 'burg', 'burn', 'card', 'caster',
    'cher', 'child', 'clair', 'coll', 'comb', 'cox', 'cus', 'dal', 'dall',
    'daway', 'del', 'dell', 'der', 'ders', 'ding', 'don', 'dows', 'drey',
    'dwell', 'dwin', 'fax', 'field', 'ford', 'fort', 'gan', 'ger', 'gett',
    'gomery', 'gor', 'hall', 'ham', 'herd', 'hold', 'hope', 'ker', 'kett',
    'kins', 'lace', 'land', 'ledge', 'leigh', 'ler', 'less', 'lins', 'lor',
    'lyn', 'maker', 'man', 'mann', 'mar', 'mas', 'mer', 'mers', 'mert',
    'mier', 'mon', 'mond', 'mont', 'mour', 'nard', 'nedy', 'nell', 'nelly',
    'ner', 'ney', 'ning', 'nings', 'non', 'nor', 'pard', 'perd', 'phens',
    'phrey', 'port', 'rance', 'rant', 'rence', 'rene', 'rett', 'rice',
    'ridge', 'rish', 'rough', 'row', 'ryett', 'say', 'sen', 'send', 'sey',
    'sley', 'smith', 'son', 'ster', 'ston', 'stone', 'strong', 'sworth',
    'ter', 'tero', 'ters', 'thall', 'tine', 'ton', 'van', 'ver', 'ville',
    'vine', 'ward', 'wards', 'way', 'well', 'wen', 'wens', 'win', 'wood',
    'yer'];
  const nm3 = ['Aspendale', 'Autumn Grove', 'Autumnburn', 'Autumnhall',
    'Bayview', 'Beaverdam', 'Beaverlake', 'Beech Valley', 'Beechbury',
    'Beechwood', 'Belcourt', 'Belleview', 'Birdsong', 'Birdvalley',
    'Black Bear', 'Blossomfall', 'Bouldercove', 'Boulderland', 'Bridewater',
    'Brier Hill', 'Brierwell', 'Broadriver', 'Bumble Bee', 'Castle Hill',
    'Castlemore', 'Castlewill', 'Castlewoods', 'Cedar Grove', 'Cedarvale',
    'Cedarworth', 'Cherry Grove', 'Cherryfield', 'Cherrypond',
    'Chestnut Grove', 'Cinnamon Grove', 'Clayriver', 'Cloverfield',
    'Clovervale', 'Crescentwood', 'Crow Valley', 'Crystal Hall',
    'Crystal Lake', 'Crystalcreek', 'Dewberry', 'Diamond Springs',
    'Dream Valley', 'Eagle\'s Nest', 'Eastmeadow', 'Eastwell', 'Edgeriver',
    'Elm', 'Elm Valley', 'Emerald Wilds', 'Evergreen', 'Evergreen Valley',
    'Fallingwater', 'Farnworth', 'Firefly', 'Forestvale', 'Froglake',
    'Frost River', 'Gentle Plains', 'Gracebourne', 'Graceland', 'Gracemeadow',
    'Graceview', 'Graceville', 'Gracewoods', 'Grand Meadow', 'Grand Pebble',
    'Grapevine', 'Grayside', 'Green Meadow', 'Grimwood', 'Hammersmith',
    'Harbordale', 'Hareforest', 'Harmony Vale', 'Hazelbend', 'Hazelfield',
    'Hazelvale', 'Hazelwood', 'Heartstone', 'Highwood', 'Hollylane',
    'Hollyvale', 'Homestead', 'Homewood', 'Honeydew', 'Honeydrop',
    'Humble Bee', 'Humble Hill', 'Humbleblossom', 'Humblecreek', 'Hyacinth',
    'Idlehall', 'Idleworth', 'Ivory', 'Ivy Grove', 'Ivylane', 'Ivywood',
    'Jade Meadow', 'Jade River', 'Jasmine', 'Lakefield', 'Lakeside',
    'Lilylake', 'Littlewood', 'Locust Grove', 'Longford', 'Longhaven',
    'Lowvalley', 'Magnolia', 'Maplebrook', 'Mapleleaf', 'Maplevale',
    'Marble Hill', 'Meadow Brook', 'Midblossom', 'Moonriver', 'Morning Dew',
    'Mudwood', 'Murkwood', 'Myrtlegrove', 'Myrtlewood', 'Narrowcreek',
    'Newpoint', 'Noble Oak', 'Noblebranch', 'North Grove', 'Northfork',
    'Oak Alley', 'Oak Haven', 'Oak Valley', 'Oceanview', 'Peace Blossom',
    'Peace Valley', 'Pearlhall', 'Pebblebrook', 'Pine Valley', 'Poinsetta',
    'Raindrop', 'Rainport', 'Raven\'s Nest', 'Redwood', 'Restmeadow',
    'Riverswood', 'Rose Point', 'Rosemary', 'Rosepetal', 'Rosestone',
    'Salmoncreek', 'Sandfort', 'Sapphire Lake', 'Seapoint', 'Seaside',
    'Serenity Point', 'Serenity Valley', 'Shadewoods', 'Shadowfield',
    'Shadowplains', 'Snowflake', 'Songbird', 'Southbay', 'Southsong',
    'Spring Blossom', 'Springriver', 'Springwood', 'Stagwoods', 'Starbrook',
    'Starfall', 'Starlake', 'Starlight', 'Stonewill', 'Storm Grove',
    'Stormview', 'Sugarhill', 'Summergrove', 'Summervale', 'Summerview',
    'Summerworth', 'Sunrise', 'Swanlake', 'Tanglesprings', 'Tanglewood',
    'Tranquil Grove', 'Troutriver', 'Tulipvale', 'Undergrove', 'Vanilla Bean',
    'Weeping Willow', 'Westwell', 'Whisperwind', 'White Stag', 'White Willow',
    'Whitemarsh', 'Whitewater', 'Whitland', 'Whitmore', 'Wild Willow',
    'Wildridge', 'Willow Vale', 'Windsong', 'Winterberry', 'Wintersmith',
    'Wintervale', 'Woodrest'];
  const nm4 = ['Mansion', 'Manor', 'Estate', 'Chateau', 'Residence'];
  const i = Math.floor(Math.random() * 10); {
    rnd4 = Math.floor(Math.random() * nm4.length);
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = `${nm3[rnd]} ${nm4[rnd4]}`;
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd] + nm2[rnd2]} ${nm4[rnd4]}`;
    }
    return names;
  }
}
