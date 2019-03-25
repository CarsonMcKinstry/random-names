export default function myLittlePonys() {
  let names;
  let names1;
  let names2;
  let names3;
  let rnd0;
  let rnd1;
  const type = Math.random() > 0.5 ? 0 : 1;
  if (type === 1) {
    names1 = ['Blueberry', 'Twinkletoes', 'Starfish', 'Nettlekiss',
      'Hazelblossom', 'Dazzleflash', 'Buttercup', 'Bubblegum',
      'Cherry Blossom', 'Snowflake', 'Water Lilly', 'Twinkle Star', 'Saffron',
      'Pumpkin', 'Cinnamon Twirl', 'Sweetie Pie', 'Cutie Pie', 'Celeste',
      'Rose Petal', 'Sugar Song', 'Honey Bee', 'Scarlet', 'Obsidia',
      'Lollipop', 'Sparkle', 'Dahlia', 'Lucy Light', 'Lavender',
      'Orchid Jewel', 'Sapphire', 'Sapphire Swing', 'Scarlet Harmony',
      'Sapphire Sunlight', 'Lunar Candy', 'Midnight Harmony', 'Violet Glow',
      'Velvet Love', 'Sapphire Daisy', 'Fluffy Candy', 'Fluffy Star',
      'Rainbow Dawn', 'Pearl Petunia', 'Caramel Candy', 'Velvet Kisses',
      'Ruby Aurora', 'Dew Drop', 'Solar Kisses', 'Ivy Jewel', 'Emerald Aura',
      'Violet Sparkle', 'Violet Rain', 'Strawberry Fashion', 'Ivory Fire',
      'Shadow Flower', 'Delilah Dusk', 'Velvet Cupcake', 'Star Eyes',
      'Celestial Song', 'Celestial Snowflake', 'Snowy Blossom', 'Azure Moon',
      'Azure Shadow', 'Mythic Diamond', 'Sapphire Flower', 'Lunar Flower',
      'Sapphire Moonlight', 'Aqua Lilly', 'Lillypad Love', 'Lila Love',
      'Emerald Snow', 'Sugar Spice', 'Chocolate Harmony', 'Electric Harmony',
      'Ebony Moon', 'River Breeze', 'Ebony Breeze', 'Crystal Rose',
      'Diamond Blossom', 'Ice Blossom', 'Phantasia', 'Starry Night',
      'Moon Petal', 'Emerald Dream', 'Sandy Shadow', 'Ivory Charm',
      'Lucky Star', 'Lucky Lucy', 'Ocean Breeze', 'Cherry Berry',
      'Caramel Smooch', 'Caramel Kisses', 'Amethyst Rose', 'Lunar Love',
      'Scarlet Shadow', 'Mythic Fashion', 'Little Harmony',
      'Little Snowflake', 'Starry Diamond', 'Starry Swirl',
      'Nightlight Nourish', 'Honey Cake', 'Amber Night', 'Amber Gem',
      'Flawless Gem', 'Twilight Snowflake', 'Fluffy Wings'];
    names2 = ['Amber', 'Amethyst', 'Aqua', 'Azure', 'Caramel', 'Celestial',
      'Cherry', 'Chocolate', 'Cinnamon', 'Crystal', 'Cutie', 'Delilah', 'Dew',
      'Diamond', 'Ebony', 'Electric', 'Emerald', 'Flawless', 'Fluffy',
      'Honey', 'Ice', 'Ivory', 'Ivy', 'Lila', 'Lillypad', 'Little', 'Lucky',
      'Lucy', 'Lunar', 'Midnight', 'Moon', 'Mythic', 'Nightlight', 'Ocean',
      'Orchid', 'Pearl', 'Rainbow', 'River', 'Rose', 'Ruby', 'Sandy',
      'Sapphire', 'Scarlet', 'Shadow', 'Snowy', 'Solar', 'Star', 'Starry',
      'Strawberry', 'Sugar', 'Sweetie', 'Twilight', 'Twinkle', 'Velvet',
      'Violet', 'Water'];
    names3 = ['Aura', 'Aurora', 'Bee', 'Berry', 'Blossom', 'Breeze', 'Cake',
      'Candy', 'Charm', 'Cupcake', 'Daisy', 'Dawn', 'Diamond', 'Dream',
      'Drop', 'Dusk', 'Eyes', 'Fashion', 'Fire', 'Flower', 'Gem', 'Glow',
      'Harmony', 'Jewel', 'Kisses', 'Light', 'Lilly', 'Love', 'Moon',
      'Moonlight', 'Night', 'Nourish', 'Petal', 'Petunia', 'Pie', 'Rain',
      'Rose', 'Shadow', 'Smooch', 'Snow', 'Snowflake', 'Song', 'Sparkle',
      'Spice', 'Star', 'Sunlight', 'Swing', 'Swirl', 'Twirl', 'Wings'];
  } else if (type === 2) {
    names1 = ['Blueberry', 'Twinkletoes', 'Starfish', 'Nettlekiss',
      'Hazelblossom', 'Dazzleflash', 'Anomaly', 'Applesauce', 'Blitz',
      'Blue Blanket', 'Brushed Light', 'Buttons', 'Cheery Leap', 'Coco-Nut',
      'Cookie Dough', 'Cupcake', 'Dancing Star', 'Dark Heart', 'Dark Style',
      'Dark Vision', 'Fancy Hooves', 'Firefly', 'Flawless Beat', 'Frost Wing',
      'Frostblossom', 'Frozen Hoof', 'Fruitcake', 'Full Moon', 'Golden Moon',
      'Justice', 'Lightning Star', 'Liquorice', 'Little Hoof', 'Little Note',
      'Looney', 'Lucky', 'Lucky Prize', 'Lucky Shadow', 'Lucky Star',
      'Lunar Dash', 'Lunar Fury', 'Magic Tinker', 'Marble Mystery',
      'Midnight Gem', 'Midnight Meteor', 'Midnight Might',
      'Midnight Sapphire', 'Midnight Solo', 'Midnight Sparkle',
      'Midnight Star', 'Moondance', 'Moondust', 'Moonshadow', 'Morning Haste',
      'Mystic Manes', 'Mythic Wish', 'Ocean Breeze', 'Oddity', 'Pebbles',
      'Peppermint Spice', 'Popcorn', 'Quirk Smirk', 'Rainbow Gadget',
      'Rapid Shadow', 'Rocking Star', 'Sapphire Moonlight',
      'Sapphire Sparkle', 'Scarlet Scar', 'Shadow Charm', 'Shadow Eyes',
      'Shadow Fang', 'Shadow Hoof', 'Shining Star', 'Shooting Star',
      'Shuffle Step', 'Silent Step', 'Silver Manes', 'Silver Shadow',
      'Silver Song', 'Silver Stream', 'Silver Sunset', 'Silver Sunshine',
      'Sky Chaser', 'Sky Star', 'Smooch', 'Smooth Shadow', 'Sneezy',
      'Snow Star', 'Star Eyes', 'Starburst', 'Stone Steps', 'Straight Arrow',
      'Sugar Cube', 'Sugardash', 'Sunrise', 'Sunshine', 'Sunshine Shy',
      'Sweet Tooth', 'Swift Mist', 'Tiny', 'Tiny Thimble', 'Tiny Tumbler',
      'Twinkle Toes', 'Wiggles', 'Winternight', 'Wintersong'];
    names2 = ['Blue', 'Brushed', 'Cheery', 'Cookie', 'Dancing', 'Dark', 'Fancy',
      'Flawless', 'Frost', 'Frozen', 'Full', 'Golden', 'Lightning', 'Little',
      'Lucky', 'Lunar', 'Magic', 'Marble', 'Midnight', 'Morning', 'Mystic',
      'Mythic', 'Ocean', 'Peppermint', 'Quirk', 'Rainbow', 'Rapid', 'Rocking',
      'Sapphire', 'Scarlet', 'Shadow', 'Shining', 'Shooting', 'Shuffle',
      'Silent', 'Silver', 'Sky', 'Smooth', 'Snow', 'Star', 'Stone',
      'Straight', 'Sugar', 'Sunshine', 'Sweet', 'Swift', 'Tiny', 'Twinkle'];
    names3 = ['Arrow', 'Beat', 'Blanket', 'Breeze', 'Charm', 'Chaser', 'Cube',
      'Dash', 'Dough', 'Eyes', 'Fang', 'Fury', 'Gadget', 'Gem', 'Haste',
      'Heart', 'Hoof', 'Hooves', 'Leap', 'Light', 'Manes', 'Meteor', 'Might',
      'Mist', 'Moon', 'Moonlight', 'Mystery', 'Note', 'Prize', 'Sapphire',
      'Scar', 'Shadow', 'Shy', 'Smirk', 'Solo', 'Song', 'Sparkle', 'Spice',
      'Star', 'Step', 'Steps', 'Stream', 'Style', 'Sunset', 'Sunshine',
      'Thimble', 'Tinker', 'Toes', 'Tooth', 'Tumbler', 'Vision', 'Wing',
      'Wish'];
  } else {
    names1 = ['Blueberry', 'Twinkletoes', 'Starfish', 'Nettlekiss',
      'Hazelblossom', 'Dazzleflash', 'Apple Specter', 'Applesauce',
      'Arctic Breeze', 'Astral Thunder', 'Berry White', 'Big B', 'Blaze',
      'Bouncer', 'Brisk Bronco', 'Bulky Buster', 'Caramel Crunch',
      'Cloud Sweeper', 'Cobalt', 'Coco-Nut', 'Colt Feet', 'Colt Ice',
      'Comet Flash', 'Crimson Mask', 'Crimson Moon', 'Crimson Vision',
      'Dapper Dash', 'Dapper Force', 'Dark Meadow', 'Dark Snow',
      'Dark Specter', 'Duke Bristle', 'Duke Starlight', 'Duke Venture',
      'Emerald Mask', 'Fancy Hooves', 'Flawless Victory', 'Golden Flash',
      'Ivory Spark', 'Jackpot Star', 'Jade Jester', 'Last Legacy',
      'Little Snow', 'Lost Legacy', 'Marble Mark', 'Master Facade',
      'Master Metal', 'Maverick', 'Midnight Hero', 'Mister Bristle',
      'Mister Dare', 'Moonlight Hunter', 'Moonshadow Colt',
      'Moonshadow Sprint', 'Moonstone Mustang', 'Mythic Haze',
      'Night Twister', 'Nimble Force', 'Onyx', 'Onyx Armor', 'Onyx Bolt',
      'Onyx Justice', 'Onyx Star', 'Platinum Night', 'Prince Prickle',
      'Raggedy Randy', 'Rapid Shadow', 'Rocky Road', 'Sapphire Spirit',
      'Sapphire Twister', 'Shadow Mark', 'Shining Star', 'Silver Mane',
      'Silver Shine', 'Silver Spirit', 'Silver Whiskers', 'Sky Chaser',
      'Sky Scraper', 'Smoky', 'Soaring Surfer', 'Solar Comet', 'Star Chaser',
      'Star Whistle', 'Steel Mustang', 'Steel Stud', 'Straight Arrow',
      'Sundance', 'Sunrise Storm', 'Sweet Sorbet', 'Swift Bolt', 'Tango',
      'Thunder Bolt', 'Thunder Charge', 'Thunder Colt', 'Thunder Spark',
      'Thunder Tail', 'Thunder Wing', 'Thunderhoof', 'Tiny Thunder',
      'Twilight Thunder', 'Velvet Chaser', 'Wild Ace', 'Wild Strikes',
      'Winter Gust', 'Yellow Rock'];
    names2 = ['Apple', 'Arctic', 'Astral', 'Berry', 'Brisk', 'Bulky', 'Caramel',
      'Cloud', 'Colt', 'Comet', 'Crimson', 'Dapper', 'Dark', 'Duke',
      'Emerald', 'Fancy', 'Flawless', 'Golden', 'Ivory', 'Jackpot', 'Jade',
      'Little', 'Marble', 'Master', 'Midnight', 'Mister', 'Moonlight',
      'Moonshadow', 'Moonstone', 'Mythic', 'Night', 'Nimble', 'Onyx',
      'Platinum', 'Prince', 'Rapid', 'Rocky', 'Sapphire', 'Shadow', 'Shining',
      'Silver', 'Sky', 'Solar', 'Star', 'Steel', 'Straight', 'Sunrise',
      'Sweet', 'Swift', 'Thunder', 'Tiny', 'Twilight', 'Velvet', 'Wild',
      'Winter', 'Yellow'];
    names3 = ['Ace', 'Armor', 'Arrow', 'Bolt', 'Breeze', 'Bristle', 'Bronco',
      'Buster', 'Charge', 'Chaser', 'Colt', 'Comet', 'Crunch', 'Dare', 'Dash',
      'Facade', 'Feet', 'Flash', 'Force', 'Gust', 'Haze', 'Hero', 'Hooves',
      'Hunter', 'Ice', 'Jester', 'Justice', 'Mane', 'Mark', 'Mask', 'Meadow',
      'Metal', 'Moon', 'Mustang', 'Night', 'Prickle', 'Road', 'Rock',
      'Shadow', 'Shine', 'Snow', 'Sorbet', 'Spark', 'Specter', 'Spirit',
      'Sprint', 'Star', 'Starlight', 'Storm', 'Strikes', 'Sweeper', 'Tail',
      'Thunder', 'Twister', 'Venture', 'Victory', 'Vision', 'Whiskers',
      'Whistle', 'White', 'Wing'];
  }
  const i = Math.floor(Math.random() * 10);
  {
    if (i < 5) {
      rnd0 = Math.floor(Math.random() * names1.length);
      names = names1[rnd0];
    } else {
      rnd0 = Math.floor(Math.random() * names2.length);
      rnd1 = Math.floor(Math.random() * names3.length);
      names = `${names2[rnd0]} ${names3[rnd1]}`;
    }
    return names;
  }
}
