export default function cityNicknames() {
  let names;
  let rnd;
  const nm1 = ['Alcohol', 'Ancient', 'Angelic', 'Angry', 'Art', 'Autumn',
    'Awkward', 'Barren', 'Beast', 'Big', 'Bird', 'Bleak', 'Blissful',
    'Blossom', 'Blushing', 'Bold', 'Book', 'Brave', 'Bright', 'Brilliant',
    'Broken', 'Bronze', 'Burning', 'Butterfly', 'Careful', 'Careless', 'Cat',
    'Chameleon', 'Champion', 'Chaotic', 'Charming', 'Cheery', 'Cherry',
    'Classic', 'Cloudy', 'Cold', 'College', 'Colorful', 'Copper', 'Corrupt',
    'Crazy', 'Crime', 'Crimson', 'Crisp', 'Crossroad', 'Crowded', 'Crown',
    'Cruel', 'Crystal', 'Culture', 'Dark', 'Darling', 'Dead', 'Defiant',
    'Delightful', 'Democratic', 'Digital', 'Dirty', 'Discrete', 'Dog',
    'Dream', 'Dreaming', 'Dry', 'Earnest', 'Ebon', 'Elderly', 'Electric',
    'Elegant', 'Emerald', 'Empty', 'Enchanted', 'Enchanting', 'Enduring',
    'Esteemed', 'Eternal', 'Evergreen', 'Exalted', 'Excited', 'Exotic',
    'Expert', 'Faint', 'Fair', 'False', 'Fantastic', 'Fantasy', 'Farming',
    'Fashion', 'Fearless', 'Fish', 'Flag', 'Flawless', 'Floating', 'Flower',
    'Fog', 'Forbidden', 'Forsaken', 'Fortune', 'Fountain', 'Free', 'Fresh',
    'Frozen', 'Fruit', 'Funny', 'Future', 'Garden', 'Gateway', 'Gem',
    'Generous', 'Gentle', 'Ghost', 'Giant', 'Gifted', 'Giving', 'Glass',
    'Glorious', 'Golden', 'Good', 'Graceful', 'Grand', 'Granite', 'Great',
    'Greedy', 'Green', 'Griffin', 'Grim', 'Half', 'Happy', 'Harbor', 'Health',
    'Hearty', 'Herb', 'Hill', 'Hollow', 'Holy', 'Honest', 'Honor', 'Hungry',
    'Idle', 'Illusion', 'Imperial', 'Infinite', 'Innocent', 'Intelligent',
    'Invincible', 'Iron', 'Ivory', 'Jade', 'Jaded', 'Jewel', 'Jewelry',
    'Junior', 'Justice', 'Kind', 'Lasting', 'Lawful', 'Lazy', 'Light', 'Lily',
    'Literature', 'Little', 'Little Big', 'Lonely', 'Long', 'Lovable', 'Love',
    'Loyal', 'Lucky', 'Mad', 'Magic', 'Majestic', 'Marble', 'Marsh',
    'Massive', 'Mellow', 'Merry', 'Mighty', 'Minor', 'Misty', 'Model',
    'Modest', 'Molten', 'Money', 'Moon', 'Mountain', 'Music', 'Mysterious',
    'Mystery', 'Mystic', 'Mythical', 'Narrow', 'Nature', 'New', 'Oasis',
    'Obsidian', 'Onyx', 'Orchard', 'Orchid', 'Ordinary', 'Ornate', 'Parallel',
    'Peace', 'Pearl', 'People\'s', 'Perfume', 'Perfumed', 'Pet', 'Petal',
    'Phantom', 'Phoenix', 'Pink', 'Plastic', 'Pleasant', 'Poetry', 'Polite',
    'Precious', 'Prime', 'Pristine', 'Proud', 'Quiet', 'Rainbow', 'Red',
    'Remote', 'River', 'Rocky', 'Rose', 'Round', 'Royal', 'Ruby', 'Rumbling',
    'Safe', 'Sapphire', 'Scented', 'Serene', 'Shadow', 'Shallow',
    'Shimmering', 'Shy', 'Silent', 'Silver', 'Sin', 'Sleeping',
    'Sleepwalking', 'Smoke', 'Smooth', 'Song', 'Spice', 'Spicy', 'Spirit',
    'Spring', 'Square', 'Star', 'Steel', 'Storm', 'Stormy', 'Strange',
    'Strawberry', 'Style', 'Stylish', 'Summer', 'Sunny', 'Super', 'Tasty',
    'Tender', 'Terrible', 'Thunder', 'Tinted', 'Tiny', 'Tired', 'Tragedy',
    'Tranquil', 'Tree', 'Trembling', 'True', 'Trusty', 'Turbulent', 'Twin',
    'Unholy', 'Uniform', 'United', 'Unlucky', 'Upbeat', 'Velvet', 'Vermin',
    'Vibrant', 'Violet', 'Vision', 'Vivid', 'Warm', 'Water', 'Welcome', 'Wet',
    'White', 'Wicked', 'Wild', 'Windy', 'Winter', 'Wise', 'Wonder', 'Wooden',
    'Worn', 'Young'];
  const nm2 = ['Alcohol', 'Amusement', 'Ancients', 'Angels', 'Animals',
    'Antiquity', 'Art', 'Autumn', 'Beasts', 'Birds', 'Bliss', 'Blossoms',
    'Books', 'Bravery', 'Bronze', 'Butterflies', 'Cats', 'Celebration',
    'Champions', 'Chaos', 'Charm', 'Class', 'Clouds', 'Cold', 'Colors',
    'Comforts', 'Competition', 'Copper', 'Crime', 'Crimson', 'Crowds',
    'Crowns', 'Crystal', 'Crystals', 'Culture', 'Daydreams', 'Delights',
    'Dirt', 'Dogs', 'Dreamers', 'Dreams', 'Drinks', 'Ebon', 'Elegance',
    'Emeralds', 'Enchantments', 'Excellence', 'Fantasy', 'Farms', 'Fashion',
    'Flowers', 'Fog', 'Food', 'Fortitude', 'Fortune', 'Fountains', 'Fruits',
    'Futures', 'Games', 'Gardens', 'Gates', 'Gems', 'Ghosts', 'Giants',
    'Gifts', 'Glass', 'Gluttony', 'Gold', 'Grace', 'Grandure', 'Granite',
    'Greed', 'Green', 'Happiness', 'Harmony', 'Health', 'History', 'Honesty',
    'Honor', 'Hunger', 'Illusions', 'Infinity', 'Innocence', 'Insects',
    'Iron', 'Ivory', 'Jade', 'Jewelry', 'Jewels', 'Joy', 'Justice', 'Laws',
    'Lights', 'Lilies', 'Literature', 'Love', 'Loyalty', 'Luck', 'Luxury',
    'Magic', 'Marble', 'Marvel', 'Merit', 'Might', 'Mist', 'Modesty', 'Money',
    'Mountains', 'Music', 'Mystery', 'Myths', 'Nature', 'Obsidian', 'Onyx',
    'Orchards', 'Orchids', 'Peace', 'Perfume', 'Petals', 'Plastic',
    'Pleasure', 'Poems', 'Poetry', 'Pride', 'Rainbows', 'Riddles', 'Rivers',
    'Roses', 'Royalty', 'Rubies', 'Sapphires', 'Scents', 'Serenity',
    'Shadows', 'Silence', 'Silver', 'Sins', 'Sleep', 'Smoke', 'Solitude',
    'Songs', 'Souls', 'Spice', 'Spirit', 'Spirits', 'Spring', 'Stars',
    'Steel', 'Storms', 'Style', 'Summer', 'Tastes', 'Thrills', 'Thunder',
    'Tragedy', 'Tranquility', 'Trees', 'Trust', 'Unity', 'Values', 'Vermin',
    'Virtues', 'Visions', 'Water', 'Waterfalls', 'Welcomes', 'Winds',
    'Wisdom', 'Wonders', 'Wood', 'Yesteryear', 'Zest'];
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `The City of ${nm2[rnd]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `The ${nm1[rnd]} City`;
      nm1.splice(rnd, 1);
    }
    return names;
  }
}
