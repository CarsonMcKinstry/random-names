export default function constellations() {
  let result;
  const names1 = ['four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const names2 = ['Acanthuridae', 'Achatina', 'Achatinoidea', 'Acidalia',
    'Acinonyx', 'Actinidia', 'Aedes', 'Aegypius', 'Aepyceros', 'Ailuropoda',
    'Ailurus', 'Aitheria', 'Ajaja', 'Alcelaphinae', 'Alces', 'Alligator',
    'Allita', 'Alopex', 'Alouatta', 'Ambystoma', 'Amphiprioninae', 'Anas',
    'Anguis', 'Anisoptera', 'Anthozoa', 'Antilocapra', 'Apatura', 'Apis',
    'Apodemus', 'Apolline', 'Apollonia', 'Aptenodytes', 'Arachnocampa',
    'Arctictis', 'Arctocephalinae', 'Ardeidae', 'Arini', 'Arvicola', 'Asta',
    'Asteria', 'Asterodea', 'Astra', 'Astrea', 'Astrochelys', 'Atelerix',
    'Balaenoptera', 'Balsenoptera', 'Barbus', 'Betta', 'Bison', 'Blattaria',
    'Bombina', 'Bombus', 'Bos', 'Brachypelma', 'Brachyura', 'Branta',
    'Bubalus', 'Bubo', 'Bufo', 'Buteo', 'Cacajao', 'Caelestra', 'Caeli',
    'Caelia', 'Caelifera', 'Caimaninae', 'Callithrix', 'Calva', 'Camelus',
    'Canis', 'Canus', 'Capra', 'Caracal', 'Carcharhinus', 'Carcharodon',
    'Caridea', 'Castor', 'Casuarius', 'Caudata', 'Cavia', 'Cebus', 'Celaeno',
    'Celesse', 'Celesta', 'Celeste', 'Celestia', 'Celestiel', 'Celestina',
    'Celestine', 'Celestyna', 'Celia', 'Celine', 'Cephalopterus',
    'Ceratophrys', 'Ceratotherium', 'Cerura', 'Cervus', 'Cetorhinus',
    'Cettia', 'Chelonioidea', 'Chelydridae', 'Chilopoda', 'Chinchilla',
    'Chiroptera', 'Chlamyphorus', 'Chlorocebus', 'Choeropsis', 'Choloepus',
    'Cichlidae', 'Cirripedia', 'Civettictis', 'Clethrionomys', 'Cnidaria',
    'Coccinellidae', 'Coleoptera', 'Connochaetes', 'Coraciiformes',
    'Coturnix', 'Crocodylus', 'Crocuta', 'Cryptoprocta', 'Cuon', 'Cygnus',
    'Damia', 'Dasyatis', 'Dasypodidae', 'Dasyurus', 'Daubentonia',
    'Delphinus', 'Demospongiae', 'Dendrobatidae', 'Dendrobranchiata',
    'Dermaptera', 'Desmodontinae', 'Dicerorhinus', 'Diceros', 'Didelphis',
    'Diomedeidae', 'Diplopoda', 'Dipodomys', 'Diptera', 'Dracaena',
    'Dromaius', 'Dugong', 'Dynastes', 'Echinoidea', 'Eleadora', 'Eleana',
    'Electrophorus', 'Elephantulus', 'Elephas', 'Eliana', 'Elianna',
    'Elianne', 'Emydidae', 'Enhydra', 'Ephemeroptera', 'Eptesicus',
    'Erethizon', 'Erithacus', 'Erythrocebus', 'Esox', 'Essie', 'Estella',
    'Estelle', 'Eudyptes', 'Eudyptula', 'Eustella', 'Eutamias',
    'Falconiforme', 'Fanum', 'Felis', 'Formicidae', 'Fratercula', 'Fregata',
    'Funambulus', 'Galeocerdo', 'Gallinula', 'Gallus', 'Gavia', 'Gavialis',
    'Gekkonidae', 'Geochelone', 'Gerbillinae', 'Gerridae', 'Ginglymostoma',
    'Giraffa', 'Glaucomys', 'Gliridae', 'Gopherus', 'Gorilla', 'Gruidae',
    'Gulo', 'Gynnidomorpha', 'Halichoerus', 'Helarctos', 'Heleioporus',
    'Helia', 'Heloderma', 'Helogale', 'Hemigalus', 'Hester', 'Heterodontus',
    'Hieraatus', 'Hippopotamus', 'Holothuroidea', 'Hydrochoerus',
    'Hydrodamalis', 'Hydrurga', 'Hyla', 'Hylobatidae', 'Hymenoptera',
    'Idalia', 'Iguana', 'Indri', 'Iris', 'Irisa', 'Isoptera', 'Labridae',
    'Lacerta', 'Lacertilia', 'Lagenorhynchus', 'Lagothrix', 'Lama', 'Larva',
    'Latrodectus', 'Lemmus', 'Lemur', 'Leontopithecus', 'Leopardus',
    'Lepisosteidae', 'Leptailurus', 'Lepus', 'Limulidae', 'Lissotriton',
    'Litoria', 'Lontra', 'Lopholithodes', 'Loxodonta', 'Lucanidae',
    'Luscinia', 'Lutra', 'Lycaon', 'Lynx', 'Macaca', 'Macropus', 'Maia',
    'Malleus', 'Mammuthus', 'Mandrillus', 'Manta', 'Marmota', 'Martes',
    'Megadyptes', 'Megaptera', 'Meleagris', 'Melopsittacus', 'Mephitis',
    'Merops', 'Mesobatrachia', 'Mesocricetus', 'Metynnis', 'Microcebus',
    'Microsorex', 'Microtus', 'Mirounga', 'Moloch', 'Muraenidae', 'Mustela',
    'Myotis', 'Myrmecobius', 'Myrmecophaga', 'Nandinia', 'Nasalis', 'Nasua',
    'Nectophryne', 'Neofelis', 'Neotoma', 'Nephropidae', 'Numididae',
    'Nyctereutes', 'Ochotona', 'Octopus', 'Odobenus', 'Odocoileus', 'Okapia',
    'Ondatra', 'Oniscidea', 'Ophisaurus', 'Orcinus', 'Oreamnos', 'Oriana',
    'Oriolus', 'Ornithorhynchus', 'Oryctolagus', 'Osteolaemus', 'Ostreidae',
    'Otariidae', 'Ovis', 'Paguma', 'Paguroidea', 'Panthera', 'Papilionoidea',
    'Papio', 'Paracheirodon', 'Paradoxurus', 'Paralichthys', 'Passeridae',
    'Pavo', 'Pecari', 'Pelecanus', 'Pelophylax', 'Perameles', 'Peromyscus',
    'Phacochoerus', 'Phaethon', 'Phalanger', 'Phasianus', 'Phasmatodea',
    'Phoca', 'Phoenicopterus', 'Phycodurus', 'Physeter', 'Physignathus',
    'Pica', 'Picidae', 'Platanistoidea', 'Pleione', 'Poecilia', 'Pogona',
    'Pomacanthidae', 'Pongo', 'Prionailurus', 'Pristella', 'Procavia',
    'Procyon', 'Proteus', 'Protoreaster', 'Pseudoryx', 'Psittacine',
    'Pterois', 'Pteromyini', 'Pygocentrus', 'Pygoscelis', 'Ramphastos',
    'Rana', 'Rangifer', 'Raphus', 'Rattus', 'Recurvirostra', 'Rhincodon',
    'Rhinoceros', 'Rhinocerotidae', 'Rhinoderma', 'Rupicapra', 'Saguinus',
    'Saimiri', 'Sarcophilus', 'Sciuridae', 'Scorpaenidae', 'Scorpiones',
    'Selena', 'Selene', 'Selenia', 'Sepiida', 'Serpentes', 'Setonix', 'Sidra',
    'Siluriformes', 'Simia', 'Smilodon', 'Sorex', 'Spermophilus',
    'Spheniscus', 'Sphenodon', 'Sphyraena', 'Sphyrna', 'Squalus', 'Star',
    'Stegostoma', 'Stella', 'Stelle', 'Strigops', 'Strix', 'Struthio', 'Sula',
    'Suricata', 'Sylvilagus', 'Symphysodon', 'Syncerus', 'Tachyglossus',
    'Tadarida', 'Talpidae', 'Tamias', 'Tamiasciurus', 'Tapirus', 'Tarsius',
    'Taxidea', 'Tefia', 'Tellus', 'Teralyn', 'Terra', 'Terrecea', 'Terrena',
    'Terrene', 'Terricia', 'Tetraodontidae', 'Tetraoninae', 'Teuthida',
    'Thomomys', 'Threskiornithidae', 'Thylogale', 'Tragelaphus', 'Tremarctos',
    'Trichechus', 'Tridacna', 'Trochilidae', 'Troglodytes', 'Tursiops',
    'Tyto', 'Urania', 'Urochordata', 'Urocyon', 'Uroplatus', 'Ursidae',
    'Ursus', 'Vanessa', 'Varanus', 'Vega', 'Venessa', 'Vespa', 'Vespera',
    'Vesperia', 'Vespira', 'Viverra', 'Vombatus', 'Vulpes', 'Xenopus', 'Zapus',
  ];
  const names3 = ['albatross', 'alligator', 'ant', 'antelope', 'armadillo',
    'baboon', 'badger', 'bandicoot', 'bat', 'bear', 'starfish', 'beaver',
    'bee', 'bird', 'bison', 'boar', 'buffalo', 'butterfly', 'cat', 'catfish',
    'chameleon', 'chipmunk', 'cobra', 'cow', 'crab', 'crane', 'crow', 'deer',
    'dog', 'donkey', 'dove', 'dragon', 'dragonfly', 'duck', 'eagle',
    'elephant', 'flamingo', 'fox', 'frog', 'gazelle', 'gecko', 'gerbil',
    'goat', 'goose', 'hare', 'hawk', 'hedgehog', 'hippo', 'hummingbird',
    'hyena', 'ibis', 'iguana', 'jackal', 'kangaroo', 'koala', 'lemur',
    'leopard', 'lion', 'lizard', 'llama', 'lobster', 'lynx', 'macaw',
    'mockingbird', 'mongoose', 'monkey', 'mouse', 'mule', 'ocelot', 'ostrich',
    'otter', 'owl', 'ox', 'parrot', 'pelican', 'penguin', 'pheasant', 'pig',
    'pigeon', 'porcupine', 'rabbit', 'raccoon', 'rat', 'raven', 'rhino',
    'salmon', 'seagull', 'seal', 'serpent', 'shark', 'sheep', 'sloth',
    'snake', 'sparrow', 'spider', 'squirrel', 'stork', 'swallow', 'swan',
    'tapir', 'tiger', 'tortoise', 'trout', 'turtle', 'vulture', 'wasp',
    'whale', 'wolf', 'yak', 'helmet', 'shield', 'sword', 'compass', 'ship',
    'hammer', 'chisel', 'crown', 'cup', 'cross', 'river', 'furnace', 'fire',
    'flame', 'gem', 'diamond', 'clock', 'table', 'arrow', 'temple', 'archer',
    'knight', 'telescope', 'pyramid', 'triangle', 'robe', 'scarf', 'chair',
    'candle', 'tower', 'castle', 'torch', 'feather', 'rod', 'leaf', 'tree',
    'flower', 'petal', 'droplet', 'gate', 'spear', 'dagger', 'fountain',
    'horn', 'tooth', 'claw', 'lantern', 'drum', 'cart', 'axe', 'hatchet',
    'pickaxe', 'eye', 'mountain', 'river', 'flute', 'wheel', 'altar', 'skull',
    'throne', 'flag', 'boulder', 'wave', 'maze', 'scepter', 'wing',
    'couldron', 'broom', 'lance', 'spear', 'tiara', 'cannon', 'cannonball',
    'pistol', 'rifle', 'anvil', 'airplane', 'wrench', 'horseshoe', 'needle',
    'screw', 'sapling', 'pipe', 'hat', 'chest', 'hourglass', 'umbrella',
    'telephone', 'ring', 'pencil', 'brush', 'cone', 'scroll', 'heart',
    'spoon', 'fork', 'knife', 'vase', 'shell', 'book'];
  const names4 = ['high in the sky', 'just above the Northern horizon',
    'just above the Southern horizon', 'just above the Eastern horizon',
    'just above the Western horizon', 'high above the Northern horizon',
    'high above the Southern horizon', 'high above the Eastern horizon',
    'high above the Western horizon', 'just above the Northeastern horizon',
    'just above the Southeastern horizon',
    'just above the Northwestern horizon',
    'just above the Southwestern horizon',
    'high above the Northeastern horizon',
    'high above the Southeastern horizon',
    'high above the Northwestern horizon',
    'high above the Southwestern horizon', 'high in the Northern sky',
    'high in the Eastern sky', 'high in the Southern sky',
    'high in the Western sky', 'high in the Northeastern sky',
    'high in the Southeastern sky', 'high in the Northwestern sky',
    'high in the Southwestern sky'];
  const names5 = ['during summer', 'during winter', 'during autumn',
    'during spring', 'just after the summer solstice',
    'just after the winter solstice', 'just after the autumn equinox',
    'just after the spring equinox', 'just before the summer solstice',
    'just before the winter solstice', 'just before the autumn equinox',
    'just before the spring equinox', 'in the middle of winter',
    'in the middle of summer', 'in the middle of spring',
    'in the middle of autumn'];
  const names6 = ['abundance', 'agriculture', 'animals', 'battle', 'beauty',
    'beer', 'beginnings', 'blacksmiths', 'children', 'chivalry', 'commerce',
    'dawn', 'day', 'death', 'destiny', 'dreams', 'dusk', 'duty', 'earth',
    'education', 'endings', 'envy', 'fall', 'fame', 'fertility', 'finance',
    'fire', 'forgiveness', 'fortune', 'freedom', 'funerals', 'good luck',
    'governance', 'harvest', 'health', 'home', 'honesty', 'hope', 'hunting',
    'infamy', 'jealousy', 'justice', 'law', 'life', 'life & death', 'light',
    'logic', 'love', 'loyalty', 'magic', 'marriage', 'medicine', 'mercy',
    'messages', 'miracles', 'misfortune', 'music', 'nature', 'night',
    'night & day', 'oracles', 'peace', 'pleasure', 'poetry', 'prosperity',
    'revenge', 'science', 'shadows', 'sleep', 'spring', 'strength', 'success',
    'summer', 'thunder', 'time', 'torture', 'trade', 'tranquility', 'tricks',
    'truth', 'vengeance', 'victory', 'virtues', 'war', 'water', 'weddings',
    'wind', 'wine', 'winter', 'wisdom', 'work', 'youth', 'the afterlife',
    'the dark', 'the hearth', 'the hunt', 'the land', 'the military',
    'the moon', 'the mountains', 'the ocean', 'the rivers', 'the sea',
    'the sky', 'the stars', 'the sun', 'the underworld'];
  const names7 = ['air', 'ancestors', 'ancestry', 'balance', 'crops', 'dragons',
    'earth', 'exploration', 'fathers', 'fire', 'flowers', 'forgiveness',
    'fruits', 'grain', 'history', 'iron', 'maps', 'metal', 'money', 'mothers',
    'music', 'nature', 'navigation', 'peace', 'steel', 'stories', 'temples',
    'the angels', 'the archer', 'the bear', 'the carriage', 'the cat',
    'the dog', 'the eagle', 'the earth', 'the eye', 'the fortunate',
    'the horse', 'the infant', 'the king', 'the knight', 'the lion',
    'the moon', 'the mountains', 'the oceans', 'the prince', 'the princess',
    'the queen', 'the rivers', 'the shield', 'the sun', 'the throne',
    'the tiger', 'the virgin', 'the wolf', 'time', 'trade', 'trees', 'twins',
    'victory', 'vision', 'water', 'wind'];
  const names8 = ['be a little mischievious', 'be adventurous', 'be caring',
    'be charismatic', 'be dignified', 'be forgiving', 'be friends of animals',
    'be generous', 'be great friends', 'be great parents', 'be humble',
    'be in balance with nature', 'be intelligent', 'be kind to others',
    'be loved', 'be nonjudgemental', 'be passionate', 'be perfectionistic',
    'be romantic lovers', 'be self-reliant', 'be very charming',
    'be very confident', 'be very fortunate', 'be very honest',
    'be very lucky', 'be very optimistic', 'be very patient',
    'be very spiritual', 'be very talented', 'be very trustworthy',
    'become animal trainers', 'become athletic', 'become explorers',
    'become great delegators', 'become great inventors',
    'become great leaders', 'become great musicians', 'become hard workers',
    'become ocean explorers', 'become outstanding role models', 'become rich',
    'become strong soldiers ', 'become succesful in life',
    'become talented artists', 'become travelers', 'find happiness',
    'have a great sense of humor', 'have great intuitions',
    'posses hidden talents', 'possess great integrity'];
  const names9 = [', albatross', ', alligator', ', ant', ', antelope',
    ', armadillo', ', baboon', ', badger', ', bandicoot', ', bat', ', bear',
    ', starfish', ', beaver', ', bee', ', bird', ', bison', ', boar',
    ', buffalo', ', butterfly', ', cat', ', catfish', ', chameleon',
    ', chipmunk', ', cobra', ', cow', ', crab', ', crane', ', crow', ', deer',
    ', dog', ', donkey', ', dove', ', dragon', ', dragonfly', ', duck',
    ', eagle', ', elephant', ', flamingo', ', fox', ', frog', ', gazelle',
    ', gecko', ', gerbil', ', goat', ', goose', ', hare', ', hawk',
    ', hedgehog', ', hippo', ', hummingbird', ', hyena', ', ibis', ', iguana',
    ', jackal', ', kangaroo', ', koala', ', lemur', ', leopard', ', lion',
    ', lizard', ', llama', ', lobster', ', lynx', ', macaw', ', mockingbird',
    ', mongoose', ', monkey', ', mouse', ', mule', ', ocelot', ', ostrich',
    ', otter', ', owl', ', ox', ', parror', ', pelican', ', penguin',
    ', pheasant', ', pig', ', pigeon', ', porcupine', ', rabbit', ', raccoon',
    ', rat', ', raven', ', rhino', ', salmon', ', seagull', ', seal',
    ', serpent', ', shark', ', sheep', ', sloth', ', snake', ', sparrow',
    ', spider', ', squirrel', ', stork', ', swallow', ', swan', ', tapir',
    ', tiger', ', tortoise', ', trout', ', turtle', ', vulture', ', wasp',
    ', whale', ', wolf', ', yak', ', helmet', ', shield', ', sword',
    ', compass', ', ship', ', hammer', ', chisel', ', crown', ', cup',
    ', cross', ', river', ', furnace', ', fire', ', flame', ', gem',
    ', diamond', ', clock', ', table', ', arrow', ', temple', ', archer',
    ', knight', ', telescope', ', pyramid', ', triangle', ', robe', ', scarf',
    ', chair', ', candle', ', tower', ', castle', ', torch', ', feather',
    ', rod', ', leaf', ', tree', ', flower', ', petal', ', droplet', ', gate',
    ', spear', ', dagger', ', fountain', ', horn', ', tooth', ', claw',
    ', lantern', ', drum', ', cart', ', axe', ', hatchet', ', pickaxe',
    ', eye', ', mountain', ', river', ', flute', ', wheel', ', altar',
    ', skull', ', throne', ', flag', ', boulder', ', wave', ', maze',
    ', scepter', ', wing', ', couldron', ', broom', ', lance', ', spear',
    ', tiara', ', cannon', ', cannonball', ', pistol', ', rifle', ', anvil',
    ', airplane', ', wrench', ', horseshoe', ', needle', ', screw',
    ', sapling', ', pipe', ', hat', ', chest', ', hourglass', ', umbrella',
    ', telephone', ', ring', ', pencil', ', brush', ', cone', ', scroll',
    ', heart', ', spoon', ', fork', ', knife', ', vase', ', shell', ', book',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  const random1 = Math.floor(Math.random() * names1.length);
  const random2 = Math.floor(Math.random() * names2.length);
  const random3 = Math.floor(Math.random() * names3.length);
  const random4 = Math.floor(Math.random() * names4.length);
  const random5 = Math.floor(Math.random() * names5.length);
  const random6 = Math.floor(Math.random() * names6.length);
  const random7 = Math.floor(Math.random() * names7.length);
  const random8 = Math.floor(Math.random() * names8.length);
  let random9 = Math.floor(Math.random() * names3.length);
  while (random3 === random9) {
    random9 = Math.floor(Math.random() * names3.length);
  }
  let random10 = Math.floor(Math.random() * names9.length);
  while (random3 === random9 || random3 === random10) {
    random10 = Math.floor(Math.random() * names9.length);
  }
  let random11 = Math.floor(Math.random() * names3.length);
  while (random3 === random9 || random3 === random11 || random10 === random11) {
    random11 = Math.floor(Math.random() * names3.length);
  }
  let random12 = Math.floor(Math.random() * names3.length);
  while (random3 === random9 || random3 === random12 || random10 === random12 || random11 === random12) {
    random12 = Math.floor(Math.random() * names3.length);
  }
  let random13 = Math.floor(Math.random() * names9.length);
  while (random3 === random9 || random3 === random13 || random10 === random13 || random11 === random13 || random12 === random13) {
    random13 = Math.floor(Math.random() * names9.length);
  }
  let random14 = Math.floor(Math.random() * names3.length);
  while (random3 === random9 || random3 === random14 || random10 === random14 || random11 === random14 || random12 === random14 || random13 === random14) {
    random14 = Math.floor(Math.random() * names3.length);
  }
  const name = `Made up of ${names1[random1]} stars, the constellation called ${names2[random2]} roughly resembles the shape of a ${names3[random3]}`;
  const name2 = `. It can be seen most prominently ${names4[random4]} ${names5[random5]}.`;
  const name3 = `In an ancient society, this constellation was seen as the representation of the god of ${names6[random6]}, which is how it received the name still used today.`;
  const name4 = `In astrology, this constellation bears the sign of ${names7[random7]}, those born under it are believed to ${names8[random8]}.`;
  const name5 = `They're suposed to be a good match with those born under the constellations resembling a ${names3[random9]}${names9[random10]} and ${names3[random11]}. `;
  const name6 = `But they don't match well with those born under the ${names3[random12]}${names9[random13]} and ${names3[random14]} constellations.`;
  result = '';
  result += name;
  result += name2;
  result += '\n';
  result += name3;
  result += '\n';
  result += '\n';
  result += name4;
  result += '\n';
  result += name5;
  result += name6;
  result += '\n';
  return result;
}
