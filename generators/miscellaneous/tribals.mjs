export default function tribals() {
  let names;
  let rnd;
  const nm1 = ['Agile one', 'Always running', 'Animal companion',
    'Beautiful voice', 'Best friend', 'Big heart', 'Bitter as a berry',
    'Blazing fire', 'Blossoms like a flower', 'Born of magic', 'Born of rain',
    'Born of the solstice', 'Born of thunder', 'Born of violence',
    'Brave one', 'Bright as a full moon', 'Bright like fire', 'Bright smile',
    'Brings messages', 'Builder of boats', 'Builder of homes', 'Burning fire',
    'Catches birds', 'Chases bugs', 'Climbs trees', 'Cooks delicious food',
    'Crashing waves', 'Cries like a wolf', 'Curly haired',
    'Dances like a sprite', 'Dancing bear', 'Dark as a forest',
    'Dark as the night', 'Deep waters', 'Defends us all', 'Dressed in furs',
    'Ears of a fox', 'Eternal blossom', 'Eternal one', 'Eyes big as the moon',
    'Eyes bright as the sun', 'Eyes like the moon', 'Eyes of a snake',
    'Eyes of an eagle', 'Falcon that soars in the sky', 'Fallen eagle',
    'Falls a lot', 'Fast runner', 'Fell from tree', 'Field of flowers',
    'First to dance', 'First to walk', 'Flies like a bird',
    'Flower blooming at night', 'Flower of pure gold', 'Flower of pure snow',
    'Flower of the river', 'Flows like a river', 'Friend among foes',
    'Friend of foe', 'Friend of snakes', 'Gentle walk', 'Gives kisses',
    'Gliding snowflake', 'Glow of rising sun', 'Goes to war', 'Good one',
    'Granted wish', 'Grazing bull', 'Great protector', 'Guide of the spirits',
    'Hair like ash', 'Hair like straw', 'Hair of feathers',
    'Hair of the earth', 'Hair of the sun', 'Handsome one', 'Hard as a rock',
    'Has a pure aura', 'Has big feet', 'Has good fortune', 'Has many secrets',
    'Healer of pain', 'Healer of wounds', 'Helps all', 'Hidden treasure',
    'Horned one', 'Hot as fire', 'Jumps like a frog', 'Kind and generous',
    'Knows medicines', 'Laughing child', 'Laughs like an owl', 'Leaping fish',
    'Light as a feather', 'Like a beast', 'Like a bird', 'Like a blue sky',
    'Like a butterfly', 'Like a fawn', 'Like a mermaid', 'Like a mountain',
    'Like a snake', 'Like a spider', 'Like a star at night', 'Like a vine',
    'Like an owl', 'Like clear water of a lake', 'Like rumbling earth',
    'Like snow', 'Like the thunder', 'Like the wind', 'Liked by all',
    'Likes to chase', 'Likes to speak', 'Little bumblebee',
    'Little companion', 'Little flower', 'Little fox',
    'Little leaf in the wind', 'Little miracle', 'Little one',
    'Little pebble', 'Littlest one', 'Lives with a monster', 'Lone wolf',
    'Lost and found again', 'Loud voice', 'Lover of animals',
    'Loves little bells', 'Loves shiny things', 'Loves snow', 'Loves storms',
    'Loves the night', 'Loves the rain', 'Loves to bathe', 'Loves to dance',
    'Loves war', 'Loves water', 'Lucky charm', 'Makes a lot of noise',
    'Makes beautiful crafts', 'Makes music', 'Marked by war',
    'Marked like a leopard', 'Meets the enemy', 'Mountain river', 'My heart',
    'Nimble feet', 'Oak tree', 'Of the earth', 'Old leader',
    'Overflowing spring', 'Part monster', 'Patient one', 'Picks flowers',
    'Playful like a cub', 'Possesses magic', 'Precious one', 'Pretty flower',
    'Proud as a lion', 'Red as the earth', 'Red like blood', 'Remembers all',
    'Returned from death', 'Returned from war', 'Rippling water',
    'Roars as a bear', 'Runs like the wind', 'Runs with horses',
    'Searched for and found', 'Shooting star', 'Sigh of the sun in the sky',
    'Sings like a bird', 'Skin as stone', 'Skin like ash',
    'Skin like night sky', 'Skin of stars', 'Sleeps during the day',
    'Speaks wisely', 'Speaks with dogs', 'Special like a white lion',
    'Spins around', 'Spirit among us', 'Spirit dancer', 'Stalking panther',
    'Strange one', 'Strikes true', 'Strong as a bear', 'Strong as a boulder',
    'Strong as an ox', 'Strong guardian', 'Stronger one',
    'Sun rising above the horizon', 'Sweet as fruit', 'Swims like a fish',
    'Tallest tree', 'Teeth like a wolf', 'Thunder that rolls over clouds',
    'Touched by magic', 'Travels a lot', 'Tree blossom',
    'Tree swaying in the wind', 'Tumbling rock', 'Turtle dove',
    'Turtle laying eggs', 'Twinkling star', 'Unique being',
    'Valley of blossoms', 'Voice of a bird', 'Walks like a fairy',
    'Walks on four claws', 'Warrior spirit', 'Waves crashing against rock',
    'Wild as a river', 'Wild horse', 'Wild rose', 'Willow tree',
    'Wise leader', 'Wise like an elder', 'Wise one']; {
    rnd = Math.floor(Math.random() * nm1.length);
    names = nm1[rnd];
    nm1.splice(rnd, 1);
    return names;
  }
}
