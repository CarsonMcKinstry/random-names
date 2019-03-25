export default function trees() {
  let names;
  let rnd;
  let rnd2;
  let rnd3;
  const nm1 = ['African', 'Algerian', 'American', 'Annual', 'Appalachian',
    'Ash-leaved', 'Asian', 'Baby', 'Bank', 'Bastard', 'Bear', 'Bearberry',
    'Belle', 'Bermuda', 'Big ', 'Bird\'s', 'Bitter', 'Black', 'Black-eyed',
    'Black-weed', 'Blue', 'Blunt-leaved', 'Bolean', 'Boston', 'Brilliant',
    'Bristly', 'Brown', 'Brown-eyed', 'Buffalo', 'Bulbous', 'Bull', 'Bur ',
    'Butterfly', 'Cabinet', 'Cane', 'Canoe', 'Canyon', 'Cart', 'Champion',
    'Chigger', 'Chrysanthemum', 'Climbing', 'Clumpfoot', 'Coast', 'Colic',
    'Common', 'Coyote', 'Creek', 'Creeping', 'Crow\'s', 'Cursed', 'Cutleaf',
    'Damask', 'Dame\'s', 'Deadly', 'Deciduous', 'Devil\'s', 'Dooryard',
    'Downy', 'Duck', 'Dwarf', 'Dyer\'s', 'Early', 'Earth', 'Eastern',
    'Evergreen', 'Extinguisher', 'False', 'Fern-leaf', 'Fernleaf', 'Field',
    'Flowering', 'Garden', 'Giant', 'Gloriosa', 'Golden', 'Goodding', 'Goose',
    'Gray', 'Great', 'Greater', 'Green', 'Green-headed', 'Hairy', 'Hard',
    'Hare\'s', 'Hay ', 'Healing', 'Hedge', 'Hen ', 'Henbit', 'Herb', 'Hispid',
    'Honey', 'Horse', 'Horsetail', 'Hound\'s', 'Island', 'Kenaf', 'Kimberly',
    'Lamb\'s', 'Land', 'Leatherleaf', 'Love', 'Low ', 'Mango', 'Meadow',
    'Milk', 'Milky', 'Mirbeck\'s', 'Moose', 'Mosquito', 'Mossycup',
    'Mountain', 'Multiflora', 'Nature\'s', 'New ', 'Night', 'Nodding',
    'Northern ', 'Orange-root', 'Osage', 'Pale', 'Paper', 'Pedunculate',
    'Penny', 'Pepper', 'Perennial', 'Petty', 'Pigeon', 'Pin', 'Pink',
    'Pistachio', 'Plane', 'Pleurisy', 'Pocan', 'Poison', 'Poke', 'Polecat',
    'Poor', 'Poorland', 'Prairie', 'Prickly', 'Pudina', 'Purple',
    'Purple-flowered', 'Queen', 'Queen\'s', 'Radical', 'Rambler', 'Red ',
    'Rheumatism', 'Rhubarb', 'Ribwort', 'River', 'Rock', 'Rogue\'s', 'Roman',
    'Roundleaf', 'Rum ', 'Running ', 'Sand', 'Sauce-alone', 'Scarlet',
    'Scotch', 'Scrambled', 'Screwbean', 'Scrub', 'Scurvy', 'Sessile',
    'Sharp-fringed', 'Silky', 'Silver', 'Silverleaf', 'Skunk',
    'Small-flowered', 'Sneezeweed', 'Sneezewort', 'Soft', 'Soldier\'s',
    'Spanish', 'Speckled', 'Spice', 'Spiny', 'Spiny-leaved', 'Spotted',
    'Spring', 'Squaw', 'Stag', 'Striped', 'Summer', 'Sunflower', 'Swamp',
    'Sweet', 'Swine', 'Sword', 'Tall', 'Tassel ', 'Thin-leaved',
    'Three-leaved', 'Trailing', 'Traveller\'s', 'True', 'Upland', 'Valley',
    'Vanilla', 'Virgin\'s', 'Virginia', 'Wall', 'Water', 'Way ', 'Wayside',
    'Weeping', 'Western', 'Whiskey', 'White', 'White-root', 'Whorled', 'Wild',
    'Winter', 'Woody', 'Woolly', 'Wound', 'Yellow', 'Yellowbark'];
  const nm2 = ['Aconite', 'Alder', 'Almond', 'Ambrosia', 'Anne\'s Lace',
    'Annie', 'Apple', 'Apricot', 'Arfaj', 'Arrowwood', 'Ash', 'Azolla',
    'Bamboo', 'Banana Tree', 'Barbara', 'Bay', 'Bean', 'Bearberry', 'Beech',
    'Berry', 'Betty', 'Bindweed', 'Birch', 'Bite', 'Bittercress',
    'Bittersweet', 'Bitterweed', 'Black Cherry', 'Black Oak', 'Blackberry',
    'Blackhaw', 'Blade', 'Bloom', 'Blueberry', 'Boabab', 'Bow-wood', 'Bower',
    'Box', 'Boxelder', 'Boxwood', 'Brier', 'Brittlebush', 'Broadleaf',
    'Buckeye', 'Bull\'s Eye', 'Bush', 'Buttons', 'Cabbage', 'Cane', 'Cap',
    'Carrot', 'Cherry', 'Chestnut', 'Cinnamon', 'Clove', 'Clover', 'Coakum',
    'Coconut', 'Coffee', 'Collard', 'Colwort', 'Coneflower', 'Corn', 'Cornel',
    'Corydalis', 'Cotton', 'Cress', 'Crowfoot', 'Cucumber', 'Daisy',
    'Darning Needle', 'Deadnettle', 'Dewberry', 'Dindle', 'Dogbane',
    'Dogwood', 'Duscle', 'Eucalyptus', 'Eytelia', 'Fairymoss', 'Fellenwort',
    'Felonwood', 'Felonwort', 'Fennel', 'Fern', 'Fever Weed', 'Feverbush',
    'Feverfew', 'Fieldcress', 'Fig', 'Flax', 'Flower', 'Fluxroot', 'Foot',
    'Fumewort', 'Gall', 'Gallberry', 'Garget', 'Garlic', 'Gilliflower',
    'Goldenglow', 'Grapefruit', 'Grapevine', 'Grass', 'Groundberry',
    'Gutweed', 'Hair', 'Haldi', 'Harlequin', 'Hedge', 'Hellebore', 'Hemp',
    'Hogweed', 'Holly', 'Hops', 'Horse Nettle', 'Houseleek', 'Huckleberry',
    'Ink Plant', 'Inkberry', 'Itchweed', 'Ivy', 'Jack-in-the-Bush', 'Jalap',
    'Jerusalem', 'Joy', 'Juniper', 'Keek', 'Kinnikinnik', 'Kousa', 'Kudzu',
    'Laceflower', 'Laurel', 'Lavender', 'Leek', 'Lemon', 'Lettuce', 'Lilac',
    'Mahogany', 'Maize', 'Man\'s Foot', 'Man\'s Mustard', 'Maple', 'Mesquite',
    'Milfoil', 'Milkweed', 'Mistake', 'Moosewood', 'Morel', 'Moss',
    'Mulberry', 'Mustard', 'Neem', 'Nettle', 'Nightshade', 'Nosebleed', 'Oak',
    'Olive', 'Onion', 'Orange', 'Orange-root', 'Osage', 'Osier', 'Paintbrush',
    'Parsley', 'Parsnip', 'Pea', 'Peach', 'Peanut', 'Pear', 'Pellitory',
    'Pine', 'Pineapple', 'Pistachio', 'Plague', 'Plant', 'Plantain',
    'Poisonberry', 'Poisonflower', 'Poke', 'Pokeroot', 'Pokeweed', 'Polkweed',
    'Polypody', 'Poplar', 'Poppy', 'Possumhaw', 'Posy', 'Potato', 'Pudina',
    'Quercitron', 'Ragweed', 'Rantipole', 'Rapeseed', 'Raspberry', 'Redbrush',
    'Redbud', 'Redweed', 'Retten', 'Rhubarb', 'Ribwort', 'Roadweed',
    'Rock Fern', 'Rocket', 'Root', 'Rose', 'Rosemary', 'Rye', 'Saffron',
    'Sanguinary', 'Scoke', 'Serviceberry', 'Shadblow', 'Shadbush', 'Silkweed',
    'Skunkweed', 'Snakeberry', 'Sneezeweed', 'Sneezewort', 'Snowdrop',
    'Sorrel', 'Sow Thistle', 'Spanish Oak', 'Speedwell', 'Spoolwood',
    'Stammerwort', 'Stickweed', 'Strawberry', 'Sugarcane', 'Sugarplum',
    'Sunflower', 'Susan', 'Swallow-wort', 'Swinies', 'Sycamore', 'Tansy',
    'Tassel', 'Tea', 'Thimbleberry', 'Thimbleweed', 'Thistle',
    'Thousand-leaf', 'Thousand-seal', 'Thyme', 'Tickleweed', 'Tobacco',
    'Toes', 'Tomato', 'Tongue', 'Toothwort', 'Touch-me-not', 'Track Plant',
    'Tree', 'Trillium', 'Tulip', 'Tulsi', 'Viburnum', 'Vine', 'Violet',
    'Violet Nightshade', 'Virgin\'s Bower', 'Wake Robin', 'Walnut',
    'Waybread', 'Weed', 'Weeping Birch', 'Wheat', 'White-root', 'Wild Rose',
    'Willow', 'Windroot', 'Wineberry', 'Winterberry', 'Wintercress',
    'Woodbine', 'Wormwood', 'Woundwort', 'Yarrow', 'Yellowcress',
    'Yellowwood', 'Zedoary', 'Zinnia'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    rnd2 = Math.floor(Math.random() * nm2.length);
    if (i < 5) {
      names = `${nm1[rnd]} ${nm2[rnd2]}`;
    } else {
      rnd3 = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm1[rnd3]} ${nm2[rnd2]}`;
    }
    return names;
  }
}
