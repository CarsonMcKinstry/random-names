export default function nicknames() {
  let rnd;
  let names;
  const nm1 = ['Ace', 'Admiral', 'Aggy', 'Angel', 'Animal', 'Answer', 'Aqua', 'Arrow', 'Artsy', 'Assassin', 'Babe', 'Baby', 'Bad Boy', 'Baldy', 'Bambam', 'Barber', 'Bash', 'Basher', 'Beans', 'Bear', 'Beard', 'Beast', 'Beau', 'Beauty', 'Belle', 'Berry', 'Big Boy', 'Big Dog', 'Bigby', 'Biggie', 'Bigshot', 'Bing', 'Bingo', 'Bird', 'Birds', 'Bitsy', 'Black Magic', 'Black Widow', 'Blackjack', 'Blade', 'Blessed', 'Blondie', 'Blossom', 'Blue', 'Blush', 'Bo', 'Bobo', 'Bones', 'Boogie', 'Boomer', 'Boots', 'Braveheart', 'Brick', 'Brow', 'Buck', 'Bucket', 'Bud', 'Buddy', 'Bugs', 'Bull', 'Bulldog', 'Bullet', 'Bullseye', 'Bunny', 'Buster', 'Butch', 'Butcher', 'Butterfly', 'Buzz', 'Camille', 'Candy', 'Cannonball', 'Captain', 'Chappie', 'Charisma', 'Cheery', 'Chef', 'Chief', 'Chip', 'Chipper', 'Chuck', 'Cloud', 'Cobra', 'Comet', 'Coocoo', 'Cookie', 'Coyote', 'Crash', 'Creed', 'Creep', 'Crow', 'Cryo', 'Crystal', 'Cuddles', 'Curles', 'Cutie', 'Cyclone', 'Cyclops', 'Daddy', 'Dagger', 'Dandy', 'Dapper', 'Daring', 'Darlin', 'Darling', 'Dash', 'Dawg', 'Daydream', 'Dazzle', 'Dealer', 'Deedee', 'Delight', 'Demon', 'Devil', 'Diamond', 'Dice', 'Digger', 'Dimple', 'Dino', 'Dizzy', 'Doc', 'Dodo', 'Dog', 'Doggie', 'Double', 'Double Trouble', 'Dragon', 'Dream', 'Ducky', 'Duke', 'Dumdum', 'Dummy', 'Dusty', 'Dutch', 'Dynamite', 'Eagle', 'Fancy', 'Feathers', 'Fire', 'Fish', 'Flame', 'Flash', 'Flip', 'Flutters', 'Fortuna', 'Fox', 'Freak', 'Frosty', 'Fury', 'Fuzz', 'Fuzzy', 'Gator', 'Gem', 'Genie', 'Genius', 'Gentle', 'Gibbs', 'Gibby', 'Gigi', 'Gilly', 'Ginger', 'Glide', 'Gonzo', 'Goose', 'Grace', 'Grim', 'Groovy', 'Grouch', 'Growl', 'Guns', 'Gus', 'Hammer', 'Handsome', 'Happy', 'Hawk', 'Hawkeye', 'Hog', 'Honesty', 'Honey', 'Hooks', 'Horse', 'Hound', 'Hurricane', 'Ice', 'Icicle', 'Indie', 'Iron', 'Izzy', 'Jackal', 'Jacket', 'Jackhammer', 'Jade', 'Jazzy', 'Jelly', 'Jewel', 'Joker', 'Jolly', 'Jumbo', 'Jumper', 'Kiki', 'Killer', 'Kindle', 'King', 'Knight', 'Landslide', 'Lightning', 'Lion', 'Lioness', 'Little', 'Lock', 'Loco', 'Lucky', 'Mac', 'Machine', 'Mad', 'Mad Dog', 'Magic', 'Magica', 'Magician', 'Major', 'Mamba', 'Mania', 'Maniac', 'Marvel', 'Mayor', 'Mellow', 'Memo', 'Merry', 'Micro', 'Miracle', 'Missile', 'Mistletoe', 'Mitzi', 'Monk', 'Moose', 'Mouse', 'Mugs', 'Mugsy', 'Mule', 'Mutt', 'Navigator', 'Nimble', 'Old Buck', 'Oracle', 'Ox', 'Peanut', 'Penny', 'Petit', 'Pig', 'Piggy', 'Pipi', 'Pitch', 'Pogo', 'Poncho', 'Pops', 'Porky', 'Pretzel', 'Prince', 'Princess', 'Pug', 'Pugs', 'Punch', 'Pyro', 'Queen Bee', 'Queenie', 'Rags', 'Reaper', 'Rebel', 'Red', 'Rip', 'Ripper', 'Robin', 'Rock', 'Rogue', 'Rose', 'Rouge', 'Ruby', 'Ruin', 'Rusty', 'Sage', 'Sailor', 'Sandy', 'Sassy', 'Scoop', 'Scruffy', 'Serpent', 'Shade', 'Shadow', 'Shark', 'Sheep', 'Shorty', 'Shrimp', 'Shy', 'Silence', 'Silly', 'Silver', 'Sizzle', 'Sketch', 'Skin', 'Skinny', 'Skip', 'Skipper', 'Skippy', 'Slash', 'Slayer', 'Slick', 'Slide', 'Slim', 'Small', 'Smash', 'Smasher', 'Smiley', 'Smitty', 'Smoothie', 'Snake', 'Snowflake', 'Spark', 'Sparkle', 'Sparky', 'Sparrow', 'Special', 'Speed', 'Spider', 'Spike', 'Spud', 'Spuds', 'Starfall', 'Steel', 'Sticks', 'Stone', 'Storm', 'Stout', 'Stretch', 'Stuffy', 'Sugar', 'T-Bone', 'Tank', 'Terminator', 'Thief', 'Thunder', 'Tiger', 'Tigress', 'Tiny', 'Titch', 'Toon', 'Torch', 'Trey', 'Tricky', 'Trouble', 'Tug', 'Turk', 'Twinkle', 'Twinkle Toes', 'Twitch', 'Uncle', 'Undertaker', 'Vanilla', 'Viper', 'Vulture', 'Wheels', 'Whopper', 'Wiggles', 'Wild', 'Wildy', 'Wiz', 'Wonder', 'Worm', 'Yank', 'Zen', 'Zero', 'Ziggy'];
  {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    return names;
  }
}
