export default function restaurants() {
  let rnd2;


  let names;

  const names1 = ['Abacus', 'Amber', 'Aqua', 'Arctic', 'Aroma', 'Autumn', 'Baking', 'Bamboo', 'Beach', 'Bengal', 'Big', 'Big City', 'Bitter', 'Boiling', 'Bright', 'Saffron', 'Brimstone', 'Bronze', 'Caramel', 'Caribbean', 'Caviar', 'Central', 'Champagne', 'Charming', 'Chili', 'Chocolate', 'Chopping', 'Cinnamon', 'City', 'Clear', 'Coastal', 'Cocoa', 'Coffee', 'Comet', 'Cool', 'Cool Cat', 'Copper', 'Coriander', 'Corner', 'Court', 'Crimson', 'Crystal', 'Curry', 'Dairy', 'Dapper', 'Delhi', 'Dwarf', 'Eastern', 'Electric', 'Emerald', 'Enigma', 'Fable', 'Fantasy', 'Fiery', 'Fire', 'First', 'Forest', 'French', 'Fresh', 'Friendly', 'Gallery', 'Glass', 'Golden', 'Grand', 'Greek', 'Harborview', 'Harlequin', 'Harmonic', 'Holy', 'Honey', 'Honor', 'Hot', 'Hungry', 'Imperial', 'Incredible', 'Indian', 'Island', 'Italian', 'Jade', 'Jamming', 'Japanese', 'Jazz', 'Jungle', 'Juniper', 'Karma', 'King\'s', 'Lakeside', 'Lavender', 'Light', 'Little', 'Lunar', 'Mad', 'Magical', 'Malt', 'Mammoth', 'Meadow', 'Mellow', 'Minty', 'Modern', 'Moroccan', 'Mountain', 'Mountainview', 'Narrow', 'New', 'Nifty', 'Noodle', 'Northern', 'Old', 'Olive', 'Orange', 'Original', 'Oval', 'Painted', 'Palm', 'Paradise', 'Pearl', 'Pepper', 'Pink', 'Polar', 'Private', 'Proud', 'Queen\'s', 'Rare', 'River', 'Royal', 'Ruby', 'Sailing', 'Salty', 'Sapphire', 'Savory', 'Seaside', 'Shining', 'Silent', 'Silk', 'Silver', 'Solar', 'Sour', 'Southern', 'Spaghetti', 'Spiced', 'Spicy', 'Spring', 'Square', 'Streetwise', 'Sugar', 'Summer', 'Sumo', 'Sushi', 'Sweet', 'Tandoori', 'Thai', 'Tropical', 'Underwater', 'Urban', 'Vanilla', 'Village', 'Vintage', 'Violet', 'Warm', 'Waterfront', 'Waterway', 'Western', 'Whiskey', 'Wild', 'Winter'];
  const names2 = ['After Dark', 'Afternoon', 'Ambience', 'Angel', 'Apple', 'Archive', 'Avenue', 'Badger', 'Balcony', 'Barbecue', 'Bass', 'Bay', 'Bear', 'Beehive', 'Bistrot', 'Bite', 'Bites', 'Blanket', 'Blend', 'Block', 'Blossom', 'Boar', 'Bond', 'Boulevard', 'Brewery', 'Brothers', 'Canteen', 'Castle', 'Catch', 'Chamber', 'Chef', 'Chicken', 'Chimney', 'Clam', 'Cloud', 'Clove', 'Club', 'Commander', 'Cottage', 'Court', 'Courtyard', 'Cow', 'Crown', 'Cuisine', 'Dairy', 'Deer', 'Demon', 'Devil', 'Diner', 'Docks', 'Dome', 'Door', 'Dragon', 'Dream', 'Drum', 'Duke', 'Eats', 'Elephant', 'Emperor', 'Empress', 'Exchange', 'Exhibit', 'Fable', 'Factory', 'Faire', 'Farmer', 'Fence', 'Fiddler', 'Fish', 'Flavour', 'Flower', 'Fox', 'Fridge', 'Front', 'Fussion', 'Garden', 'Gate', 'Genie', 'Goat', 'God', 'Goddess', 'Grill', 'Grove', 'Harvest', 'Heart', 'Heaven', 'Hog', 'Hook', 'Horse', 'Hound', 'House', 'Jewel', 'Junction', 'Kitchen', 'Knight', 'Laguna', 'Lane', 'Lantern', 'Leaf', 'Lighthouse', 'Lily', 'Lion', 'Lobster', 'Lounge', 'Maple', 'Market', 'Merchant', 'Mirror', 'Mission', 'Mockingbird', 'Moment', 'Moments', 'Monkey', 'Monument', 'Morning', 'Night', 'Nights', 'Oak', 'Orchard', 'Orchid', 'Oriental', 'Oyster', 'Palace', 'Panda', 'Pantry', 'Paradise', 'Parlour', 'Peasant', 'Persia', 'Petal', 'Pig', 'Pipe', 'Pizzeria', 'Place', 'Pond', 'Port', 'Ranch', 'Road', 'Rooftop', 'Room', 'Rose', 'Salmon', 'Saloon', 'Scarf', 'Shack', 'Shark', 'Ship', 'Shrimp', 'Sisters', 'Smith', 'Spice', 'Spices', 'Star', 'Stranger', 'Street', 'Street Kitchen', 'Table', 'Taste', 'Tiger', 'Tower', 'Tree', 'Trumpet', 'Tulip', 'Valley', 'Vaults', 'Victory', 'View', 'Vine', 'Violin', 'Walk', 'Way', 'Well', 'Whale', 'Wharf', 'Willow', 'Windmill', 'Window', 'Wok', 'Word', 'Yard'];
  const names3 = ['Abacus', 'Acapella', 'Ace', 'After Dark', 'Alpha', 'Ambience', 'Amigos', 'Amuse', 'Aqua', 'Arch', 'Aroma', 'Atlas', 'Aurora', 'Babylon', 'Backstage', 'Bambino', 'Bandits', 'Basil', 'Beehive', 'Blossoms', 'Blueprint', 'Bonds', 'Bones', 'Bounty', 'Brimstone', 'Butlers', 'Buttons', 'Candle', 'Carnival', 'Castle', 'Catch', 'Chance', 'Chapter', 'Charm', 'Cinnamon', 'Citrus', 'Clarity', 'Cocoa', 'Crickets', 'Curiosity', 'Daydream', 'Drifters', 'Elementary', 'Elements', 'Embers', 'Enigma', 'Eureka', 'Fabled', 'Fantasia', 'Fiddler', 'Fire and Ice', 'Fluorescence', 'Forester', 'Friends', 'Gastrognome', 'Gem', 'Gentle', 'Glasshouse', 'Grace', 'Happening', 'Harlequin', 'Harmony', 'Harvest', 'Hibiscus', 'Incognito', 'Indigo', 'Interlude', 'Intermezzo', 'Intermission', 'Ivory', 'Ivy', 'Jewel', 'Jubilee', 'Karma', 'Kings', 'Kingsize', 'Laguna', 'Lavender', 'Lemon', 'Lemon Grass', 'Lily', 'Limestone', 'Little China', 'Little Italy', 'Little Persia', 'Maximus', 'Maze', 'Meadows', 'Medallion', 'Melting Pot', 'Midnight', 'Mirage', 'Mirrors', 'Modesty', 'Moonlight', 'Mumbles', 'Nightowl', 'Nirvana', 'Nova', 'Oddity', 'Olive Grove', 'Paragon', 'Paramount', 'Parlay', 'Pavilion', 'Petals', 'Piccolo', 'Podium', 'Potroast', 'Prospects', 'Purity', 'Queens', 'Recess', 'Retro', 'Revelations', 'Roadhouse', 'Roast', 'Robot', 'Rogue', 'Roots', 'Rye', 'Saffron', 'Salutation', 'Sapphire', 'Seawise', 'Serenade', 'Serenity', 'Shambles', 'Shazam', 'Simmer Down', 'Skyward', 'Solitude', 'Solo Mio', 'Solstice', 'Souls', 'Splash', 'Starlight', 'Steam', 'Streetwise', 'Sunset', 'The Bell Tower', 'The Boar', 'The Boutique', 'The Cane', 'The Cave', 'The Cellar', 'The Cottage', 'The Crown', 'The Depot', 'The Eclipse', 'The Emperor', 'The Empress', 'The Exhibit', 'The Gallery', 'The Garden', 'The Goat', 'The Grove', 'The Hat', 'The Hive', 'The Hog', 'The Hummingbird', 'The Island', 'The Lamb', 'The Lighthouse', 'The Lion', 'The Locket', 'The Lotus', 'The Maple', 'The Mockingbird', 'The Momument', 'The Monarch', 'The Nightingale', 'The Nomad', 'The Oak', 'The Parlour', 'The Peacock', 'The Pearl', 'The Rose', 'The Scarf', 'The Smile', 'The Square', 'The Tower', 'The Tulip', 'The Turban', 'The Vine', 'The Vineyard', 'The Wall', 'The Willow', 'Tip Top', 'Tranquility', 'Treasure', 'Trilogy', 'Trinity', 'Twilight', 'Unwind', 'Veil', 'Vertigo', 'Vista', 'Whammy', 'Whisperwind'];


  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd = Math.floor(Math.random() * names1.length);
      rnd2 = Math.floor(Math.random() * names2.length);
      names = `The ${names1[rnd]} ${names2[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * names3.length);
      names = names3[rnd];
    }
    return names;
  }
}
