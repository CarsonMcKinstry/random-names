export default function planets() {
    let result;
    const type = Math.random() > 0.5 ? 0 : 1;
    let planetType = Math.floor(Math.random() * 3 + 1);
    let lifeType = Math.floor(Math.random() * 4 + 1);
    if (type === 1) {
        planetType = 1;
    }
    if (planetType > 3) {
        planetType = 3;
    }
    if (planetType > 1.5) {
        lifeType = 1;
    }
    if (type === 1) {
        if (lifeType < 2) {
            lifeType = 2;
        }
    }
    let maxSize = 0;
    let minSize = 0;
    let minGrav = 0;
    let maxGrav = 0;
    const size = Math.floor(Math.random() * 4 + 1);
    if (size === 1) {
        maxSize = 3;
        minSize = 0.2;
        maxGrav = 3;
        minGrav = 0.2;
    }
    if (size === 2) {
        maxSize = 8;
        minSize = 3;
        maxGrav = 5;
        minGrav = 1;
    }
    if (size === 3) {
        maxSize = 20;
        minSize = 8;
        maxGrav = 8;
        minGrav = 3;
    } else if (size === 4) {
        maxSize = 40;
        minSize = 20;
        maxGrav = 15;
        minGrav = 5;
    }
    const intelligent = Math.random();
    const names1 = [
        'Omicron Persei 8',
        'Amazonia',
        'Wormulon',
        'Eternium',
        'Vinci',
        'Pandora',
        'Tarantulon',
        'Skaro',
        'Gallifrey',
        'Mondas',
        'Alderaan',
        'Naboo',
        'Tatooine',
        'Hoth',
        'Endor',
        'Krypton',
        'Zenn-La',
        'Azeroth',
        'Draenor',
        "Qo'noS",
    ];
    // Intelligent lifeforms or not?
    const names2 = [
        ', named so by its discoverer, ',
        ', named after a famous scientist, ',
        ", as it's called by most scientists, ",
        ', which is a name which is still disputed, ',
        ', which is a temporary placeholder name, ',
        ", named so for the planet's properties, ",
        ', named so for its similarities to the fictional version, ',
    ];
    const names2a = [
        ", as it's called by most of the natives, ",
        ', the most popular name of the natives, ',
        ", as it's named by the native population, ",
    ];
    if (intelligent > 0.5) {
        names2.push(...names2a);
    }
    // Habitable, uninhabitable or resource planet?
    const names3 = [];
    const names3a = [
        ' terrestial',
        ' carbon',
        ' desert',
        'n earth-like',
        'n iron',
        'n ice',
    ];
    const names3b = [
        'n ocean',
        ' gas dwarf',
        ' gas giant',
        ' rogue',
        'n iron',
        'n ice',
        'n ice giant',
        ' desert',
        ' terrestial',
    ];
    const names3c = [
        'n ocean',
        ' terrestial',
        'n iron',
        'n earth-like',
        ' rogue',
        ' carbon',
        ' diamond',
        'n ice',
        'n ice giant',
        ' terrestial',
        'n iron',
        'n earth-like',
        ' rogue',
        ' carbon',
        ' diamond',
        'n ice',
        'n ice giant',
        ' terrestial',
        'n iron',
        'n earth-like',
        ' rogue',
        ' carbon',
        ' diamond',
        'n ice',
        'n ice giant',
    ];
    if (planetType === 1) {
        names3.push(...names3a);
    }
    if (planetType === 2) {
        names3.push(...names3b);
    }
    if (planetType === 3) {
        names3.push(...names3c);
    }
    const names4 = [
        'a small solar system with ',
        'a thinly populated solar system with only ',
        'a fairly small solar system with ',
        'a fairly large solar system with ',
        'a densely populated solar system with ',
        'a huge solar system filled with ',
        'a vast solar system with ',
    ];
    let names5 = ['five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let names6 = (Math.random() * (maxSize - minSize) + minSize).toFixed(1); // Size
    let names7 = (Math.random() * (maxGrav - minGrav) + minGrav).toFixed(2); // Gravity
    let names8 = (Math.random() * 40 + 10).toFixed(2); // Day Length
    const names9 = Math.floor(Math.random() * 400 + 100); // Year Length
    let names10 = Math.floor(Math.random() * 15 + 1); // Continent Amount
    let names11 = Math.floor(Math.random() * 80 + 10); // Land Mass
    const names12 = Math.floor(Math.random() * 5 + 1); // Moon Amount
    const names13 = [' red', ' blue', ' white', ' yellow', 'n orange'];
    // Orbit type, dependant on planet type.
    const names14 = [
        ' circular orbit',
        'n almost perfectly circular orbit',
        ' slightly elliptic orbit',
        ' wide, elliptic orbit',
        'n elliptic orbit',
        ' fairly circular orbit',
    ];
    const names14a = ['narrow, elliptic orbit'];
    if (planetType === 2) {
        names14.push(...names14a);
    }
    // Conditions, dependant on planet type
    // Life types, dependant on user choices
    // Plant Amount
    // Animal Amount
    // Sentient Amount
    // Super Sentient or Not
    // Plant types, dependant on user choices
    const names21 = [
        'mostly trees and bushes, with only a handful of flowers, but no fungi species. The trees and bushes come in all sorts of forms, both tiny and huge.',
        "almost exclusively trees, with some bushes and shrubs. Flowers can be seen on occasions, but they're rare. Fungi and grasses are almost non-existent.",
        'almost exclusively shrubs, bushes and other low plants, with some flowers, fungi and a handful of small tree species.',
        'mostly bushes, shrubs and flowers, with a good amount of fungi and grasses but very few tree species. The shrubs are the dominant organism on this planet as they grow fast and wide, with many different shapes, sizes and colors.',
        'dominated by large fungi and flowers, but there are some trees and shrubs as well. The flowers come in almost every color imaginable, but they tend to be fairly small. The fungi on the other hand, they reach incredible heights, but are usually fairly pale in color.',
        'almost all huge, towering trees, high above a layer of various shrubs, grasses and flowers. The trees can and often will completely block out light, which sometimes leads to a fairly empty ground layer, full of dead leaves.',
        'various types of flower, shrub, bush and tree species. The latter of which dominates slightly. Fungi make up a good part of the bottom layers. ',
        "exclusively various types of fungi. Many are small, much like you'd find on Earth. But others are towering high above the clouds, similar to trees on Earth.",
        "exclusively different types of flowers. They come in all shapes and sizes, some are small and single stemmed, like you'd expect to find on Earth. But others are more like bushes, shrubs and even trees.",
        'primarily shrubs and smaller trees, supported by small flowers, grasses and fungi on the bottom layer. Tall trees make up only a small portion of plant life on this planet.',
        "almost entirely made up of bushes and shrubs, in all shapes and sizes, some can grow to incredible heights. They're supported by grasses and fungi on the bottom layers, but there are almost no flower species and trees do not exist on this planet.",
        'almost exclusively types of grass. They can reach incredible heights due to the strength of some species, while others would be barely noticeable on the floor, if not for their spectacular colors. Shrubs, bushes and flowers are also fairly prominent, but fungi and trees are nearly non-existent.',
        'spread thinly and mostly made up out of a huge amount of different types of bushes. Each of which has the ability to absorb nutrients from a huge area around it, leaving nothing for other species. This leads to many different types of shapes and sizes, as well as colors and scents, due to the different nutrients in each area.',
        'made up of millions of flowers. Their combined colors and scents make for an amazing spectacle, but they leave little space for other species, which is why there are only very few bush and shrub species. Fungi, grasses and trees are non-existent.',
        'mostly different types of grass, but they could be compared to flowers, as they come in almost every color and they have incredible scents. Trees and larger shrubs make up most of the higher layers, but flowers, fungi and bushes are nearly non-existent.',
        "almost entirely made up of grasses and bushes, both of which work together to reach the nutrients they need. Their intertwined growth leads to spectacular shapes and colors, but they leave almost no nutrients for other species. So only small flowers and some fungi manage to live of what's left. Trees and shrubs are non-existent.",
        "dominated by various types of grass, but they only reach short heights. However, they're the cause flowers and fungi are non-existent on this planet, as they absorb all the shallow nutrients. Trees, bushes and shrubs thrive well, as they can reach the deeper nutrients. They reach incredible heights, especially the trees, who sometimes block out too much light for the lower layers.",
        'mostly small shrubs, flowers and grasses, all of which have spectacular colors, but they tend to remain quite small. Trees are spread thinly, but they tend to grow very wide, allowing them to store plenty of nutrients for when they smaller species bloom and take most of the nutrients in the ground.',
        'trees and lots of them. Oddly enough, trees are the only plant-like organism on this planet, but they come in a huge variety of shapes and sizes. The smallest can be compared to that of Bonsai trees and they grow in huge numbers. Due to their numbers the only other nutrients left in the soil are those deep in the ground, which lead to most other types of trees to become either enormously tall or very wide.',
        'mostly tall shrubs and trees, many of which have a surprising amount of different colors. Some even have strong scents. The small amount of flowers that do exist share these characteristics, but almost all of them are tiny. While there are a good amount of fungi on this planet, most of them have little to no color, but they have the strongest scent of all organisms, most of which are horrible.',
        'shrubs, shrubs and more shrubs. They come in various shapes and sizes, but none of them reach heights above 2-3 meters (6.5-10ft). While most roughly share the same characteristics, some manage to stand out with different colors, scents, shapes and even textures.',
        "almost exclusively made up of bushes. While flowers, shrubs and a few trees do exist, fungi are nowhere to be found. The bushes managed to dominate the planet and have done so by growing in a huge variety of shapes and sizes. One species grows so big they appear to be dozens, sometimes even hundreds of bushes, but it's actually just one enormous bush.",
        'bushes, with a few flowers and smaller shrubs mixed in. Trees are non-existent and fungi are so rare they might as well be. However, the bushes can grow in odd shapes and reach unexpected heights. Some can be confused for trees from afar, while others look like a group of flowers from up close. The few flower species that do exist emit incredible scents, while the shrubs tend to be hidden in plain sight, as they often look like a bush.',
        'mostly many types of fungi, but there are a good amount of bushes, shrubs and trees as well. Flowers, on the other hand, are almost non-existent, which is hard to tell, as many fungi species can be confused for flowers due to their shapes and colors, especially when looked at from a distance. But not all fungi species are small and colorful, some can reach incredible heights and may on occasion even surpass the height of the local trees.',
        'made up of fungi, flowers and tiny trees. Shrubs and bushes are non-existent, although some trees look enough like shrubs, so they could be classified as such. The fungi and flowers live in harmony with one another, which leads to interesting, intertwined growth patterns.',
        "mostly consist of large fungi and trees, with a few dozen flower species, but almost no grass species and bushes are non-existent. The trees are fairly similar to what you'd find on Earth, but the fungi are completely different. Most of them are huge and colorful. Despite their obvious differences, the fungi tend to mimic the overall shape of trees. Some even have branch-like tentacle growths, but with tiny hairs instead of leaves.",
        'an odd balance of smaller trees, shrubs, grasses and flowers. Each of which is almost entirely made up of pest-like species, with a tendency to completely overgrow everything, were it not for their competitor pests to keep them in check. In the midst of these pest battles, fungi, bushes and some nonpest flowers and grasses manage to grow quite successfully.',
        'mostly flowers, grasses and odd types of fungi. These species make up the lower organism layers, but many of them are eerily similar to each other to the point of being almost indistinguishable. Trees, in many different sizes, make up most of the upper layers, but there are some species of shrubs and bushes as well.',
        "made up of trees and flowers, with only a few dozen of grass species, even less bush species and almost no brush and fungi species. Although the grass species are few in number, they grow fast and cover wide areas. The trees and flowers cover a lot more though and because they use up most of the nutrients, other species like shrubs and fungi haven't been able to reach higher numbers.",
        "made up of tall grasses and flowers, with even taller fungi and huge trees. Shrubs are non-existent and bushes are so rare they might as well be. While flowers come in more shapes and colors than grasses, they both share a wide variety of scents, most of which are related to the nutrients in their area. The fungi are tall, strong and, like the grasses and flowers, scented. The trees are also scented, but it's much harder to detect.",
    ];
    // Advanced plants
    const names22a = [
        "Many of these organisms have developed unique ways to prevent them from being eaten. While many of them taste bad and a few are even poisonous, some have gone the extra mile and have become hard to digest. Any part of them that does get eaten and manages to survive an animal's digestion will often end up regrowing from that small piece, which now has plenty of nutrients from the animal's poop.",
        "While most organisms don't have to fear being completely destroyed when eaten by animals, some have made sure they will survive either way. Some will prevent being eaten by tasting horrible, by growing thorns or by being poisonous. But there are a handful of species who, in a way, need to be eaten. When an animal begin eaten these species, they will release the seeds around the eaten area, which are either swept away with the wind or get stuck on the animal to be taken away and thus ensure the species can continue to grow in other areas.",
        "Almost all organisms want to prevent being eaten and many do so by growing thorns or excreting horrible tasting fluids, but there's one species which, in a way, needs to be eaten to make sure the species survives. Once this species has grown to a mature size, it will stop regrowing. Instead it will begin storing energy, which makes it more appealing to animals. Once animals begin eating it and eat enough of it, the energy stored deep within will be transferred to all the seeds, which will be released simultaneously. The seeds get stuck to the animals, who are too busy eating the parent, and are taken with them. The extra energy stored within them will give a temporary growth boost in the vital first weeks.",
        "Organisms obviously don't want to be eaten and try to do everything they can to survive, but many species on this planet have turned the tables by eating animals and even each other. Some use trap systems to catch the animals, while others slowly grow around and strangle each other. But perhaps the most impressive killer is the species which kills its attackers. When an animal begins eating this species, it will retaliate by excreting small amounts of poison. If the animal eats enough of it, it will collapse where it stands, which, if it doesn't get dragged away by other animals, will give the soil around it more nutrients.",
        'Many organisms use the common tricks to prevent being eaten, like tasting bad, being poisonous or by growing thorns. But there is one species which has taken thorns to the next level. They can generally be divided into two groups. The first uses its thorns to spread itself to other areas, because inside those thorns, which get stuck in animals, are seeds, ready to be taken to another area. The second group uses the thorns purely for defense and is capable of using them as projectiles. If an animal eats too much of this species, it will bombarded the animal with thorns.',
        'Surviving is always high on the list of priorities of any organism, which includes reproducing. The organisms on this planet have taken this to a gorgeous next level. Almost all of them are bioluminescent, which means they glow in the dark. These lights will attract animals, who will spread the seeds and pollen one way or another. However, perhaps the most intriguing part is that each color or color combination is appealing to different groups of animals, creating an awesome, nighttime eating balance.',
        'Attracting animals to help with pollination and reproduction is usually done with smells and bright colors, but most species on this planet do it a little different. Sound is by far the most preferred way to attract animals and it can lead to some of the most spectacular natural orchestras. Some species let the wind blow between specialized openings which create special sounds. Others produce sound with specialized mechanisms, usually in the form of clapping, which can be compared to how a Venus flytrap catches its prey.',
        'Reproducing is the most important aspect to ensure the survival of a species. While many species use seeds or forms of pollination to reproduce, others simply grow into more copies of itself, all connected to one parent. However, a few species on this planet do it a little different. Some of them excrete their seeds through their roots, back into the water they normally absorb, allowing the water to carry the seeds further. Some species grow into multiple seeds from the moment they begin growing as a seed themselves. But perhaps the most impressive species is the one that grows around other species and uses their growing seeds and modifies them to become seeds of its own.',
        "Survival of the fittest is not something this planet is unfamiliar with. But one species might take this a little extreme. While most weak organisms are killed by other, stronger species, this species kills its own weak. Once they've grown to a mature size and are ready to produce seeds, these species begin by growing against each other, strangling the other and using specialized thorns to inject seeds into the other. The weakest will die and be used as nutrients for the seeds inside it. However, if two of them are equally matched, both of them could be injected and thus become food for the other's offspring.",
        'Reproduction is usually done by either using seeds to grow new organisms, pollination or by simply growing into multiples while either being connected to the parents or disconnecting after being fully grown. Most species on this planet follow these methods as well, with the exception of a few. Instead of taking a risk of wasting energy on seeds or growing into multiples of itself or instead of risking not being pollinated, these species have become specialized in taking over others. They grow onto other species, inject their roots into them and use their nutrients to either produce seeds or to modify the host into the hosted.',
        "Most plant-like organisms tend to grow in one place or at least float around in water, but a small amount of species on this planet isn't content with this, mainly due to the risk of a lack of nutrients in the soil around it. So instead these species try to attach themselves to small animals. Their survival has a better chance if they manage to intertwine with a furry animal for more grasp. After they've attached themselves to an animal, it will use dirt, dead skin and anything else that may fall on the animal's skin as nutrients, but some may even pierce the skin to take nutrients from the animal's blood.",
        "Being eaten often means the end of an individual organism or at least the part that has been eaten, but a few species on this planet have become very resilient. Whether eaten whole or in large enough pieces, these species will continue to grow and repair itself. Some will be pooped out and grow wherever it lands, with the added bonus of free nutrients from that poop. Others have become specialized in being patient and resisting acid. While in an animal's stomach, these species will transform. They'll go into what's essentially a hibernation mode, shielding themselves from the effects of stomach acids and the lack of of sunlight. Here they will wait patiently, perhaps occasionally using food in the stomach as nutrients, until the day the animal dies and thus the stomach loses its acidity. It will then begin to grow again with plenty of nutrients around it from the dead animal.",
        "Nutrients are always needed but not always around, so organisms have to find ways to get them. Common ways are using different roots to find them in deep or shallow grounds or even stealing them from others, but on this planet many species have found a different balance. Unlike most plants on Earth who tend to only produce oxygen and nutrients, usually in the form of sugars, for itself, the organisms on this planet also produce other forms of nutrients for itself, usually for different purposes. These processes often lead to many byproducts which it doesn't need and are thus discarded. These discarded products are exactly what other species need to live and in turn produce byproducts it discards for the other organisms, leading to a delicate balance.",
        "When nutrients are scarce, many organisms have methods of storing those nutrients for times of need. Some have become so specialized in this they can go for very long times without the need of additonal food, to then stock up when nutrients are available. However, some species on this planet didn't develop such methods. Instead, they simply take what they need, whenever they need it, from wherever they can. If nutrients aren't available in the ground, it will take them from others, including its own kind. This has occasionally lead to the survival of this species, but the downfall of another.",
        "Surviving is usually extremely difficult, especially when nutrients are scarce and you have to choose between growing or reproducing. One species on this planet has developed a nifty method to prepare for this. Once full matured, this species will split into 2 versions of itself and attached to each other, so it's essentially reproducing. Once those 2 are fully grown, they newly grown version will either detach itself if enough nutrients are available or it becomes a storage unit for the original, if nutrients are scarce. If nutrients continue to be scarce, the original will use slowly consume the nutrients in the new version in the hope that new nutrients become available again and it can repeat the cycle.",
    ];
    // Basic plants
    const names22b = [
        'Despite the large amount different species, none of them have developed much beyond their basic form. So while their colors and shapes are different, they have all yet to develop into more specialized organisms.',
        'While their colors, shapes and in some cases their scents may be wonderful, none of these organisms have developed beyond a more basic form. Some are on the right path, but it will take a while before we can see thorned or poisonous species on this planet.',
        'With the exception of a handful of species, none of them have developed into anything advanced. Most species still rely on simple photosynthesis to survive. A few species do have the basic beginnings of thorns and specialized leaves though, but it will be a long time before those are fully developed.',
        'These organisms may not be much more than the very basics of life as we know it, they make gorgeous landscapes nonetheless. It makes you wonder how amazing this planet will be in even 10,000 years.',
        'Although diverse in colors, shapes and sizes, none of the organisms have developed much. Most are still in a very crude form and those that did start to develop specialized parts have still a long way to go.',
        "These organisms may seem impressive based on their aesthetics, but they're far from impressive based on their development, as most, if not all, have yet to develop beyond their very basic forms.",
        'Hidden among the countless of species lacking any form of advancement beyond their basic forms, are a few hidden gems beginning to show the first steps to more specialized species. The beginnings of thorns and specialized leaves can already be seen in a handful of species.',
        "The species on this planet may not be much more than the first steps to specialized species, this doesn't take anything away from their astonishing beauty and elegance.",
        "Despite not being much more than the first baby steps to higher, more specialized species, the species on this planet already show great promise in terms of diversity and characteristics we've never seen before.",
        "In terms of development and specialization the species on this planet aren't very impressive, but their shapes and colors make for astonishing natural works of art and many already show great promise of a highly specialized natural balance for the distant future.",
    ];
    // Advanced Corals and water plants
    const names22c = [
        "The aquatic life too is full of wonders. Highly specialized plants, which closely resemble the corals of Earth, cover nearly everything in the not too deep waters. Their colors are bright and numerous, something they share with the Earth corals. But their shapes and sizes are far beyond anything ever seen on Earth or anywhere else we've discovered.",
        "Corals, or what closely resembles corals, cover the bottoms of almost every body of water, both lakes and oceans. Their beauty and the unique properties of this planet's waters make for some of the most impressive natural spectacles.",
        "The water plants on this planet are very different from what we're used to on Earth. While they roughly share the same colors, or lack thereof, these plants have developed into mostly flesh eating species. Almost no aquatic creature is safe, even the bigger ones can sometimes get caught in these death traps.",
        "Although most of the water on this planet is fresh, the water plants did develop into what is perhaps more closely related to corals than to plants. These highly specialized species roughly resemble what we're used to in the oceans of Earth, but are only seen in fresh water on very rare occasions, which makes the species on this planet all the more intriguing.",
        "The wonders seen on the surface are also seen underwater. A huge variety of corals and aquatic plants have made their home in the waters of this planet, both living in harmony with each other, at least in most cases. Some species have developed into more aggressive forms, effectively trying to force their species wherever there's water for them. This has lead to the decline of some other species, but also to the rise of new, specialized predators.",
        "The wonderful diversity is not unique to life on the surface. Life underwater has also given birth to a wide variety of corals and aquatic plants. While corals are in the vast majority, it's the plants that have developed into the most unique and beautiful species on this planet. Their colors are oddly diverse, something we don't really see on Earth. But it sure makes for an amazing spectacle.",
        'The coral underwater are perhaps more astonishing than the organisms on the surface, which is because they look almost the same, especially from a distance. The corals underwater have the same shapes as the surface organisms, almost as if they want to mimic them as closely as they can. But these shapes server their purpose. Much like the trees on Earth grow leafed branches, the corals on this planet grow to huge size and have branches with specialized polyps.',
        "The aquatic organisms aren't very large in numbers, but they are huge in size. They can grow to sizes of nearly 100 meters (328ft) and a diameter of up to 5 meters (16ft). These underwater giants give this aquatic world an eerie atmosphere as you never know what could lurk behind that pillar. But at the same time, they provide homes to thousands of species on all depths, which makes studying even 1 giant coral an absolute delight.",
        "There may be plenty of wonders on the surface, but the wonders don't stop once you delve into the deep waters of this planet. The plants of the deeps are nomadic, which means almost none of them grow in one place. Instead, most species float and drift with the currents. They let the water carry them to the nutrients. Some species will constantly float the surface, but many of the other species have developed ways to dive when needed.",
        "Hidden in the depths of this planet's water are many gorgeous corals. Almost every species is completely different from the other. Hundreds, if not thousands of shapes and sizes and countless of colors make the underwater world an amazing spectacle. However, finding these spectacles is difficult, as they only seem to grow in very specific places with the right conditions.",
        'Soft corals and various aquatic plants make up the plant-like life of the oceans on this planet. However, due to the unique properties of the water, many of these plants and corals have developed strange shapes and grow only to short sizes, with the exception of a handful of giant species.',
        "Aquatic plants are almost non-existent on this planet. Instead, life is limited almost exclusively to hard corals. Their rock-like skeletons offer a great deal of protection, but it's sometimes near impossible to tell where one coral starts and the other ends, let alone where coral meets rock. But their bright colors are bioluminescent, which makes these depths come to life at night with an amazing spectacle of hundreds of differently colored lights.",
        "If it weren't for the few dozen aquatic plants, the waters of this planet would be nearly lifeless. However, the few plant species that do exist have conquered every part covered in water. Many of them are highly specialized in surviving a specific depth, which gives every depth its own unique eco-system and all the beauty that comes with it.",
        "While the surface may have gorgeous forests of amazing organisms, the underwater world also has its fair share of forests. Mostly in the form of long, grass-like waterplants, but there are few dozens places on this planet where actual underwater forests grow. The species in these forests aren't actual trees, but they work in similar ways. Roots keep them in place, while a trunk helps carry the nutrients to every part of its body. At the top, branch-like tentacles grow to feed on micro-organisms near the surface. These tentacles often reach above the surface, giving the water a mysterious and eerie look.",
        'The underwater world of this planet is truly a feast for the eyes. Thousands of different soft and hard coral species cover the ocean floors, most of which have a form of bioluminescence, which makes the night even more magical than the day. These bioluminescent corals offer homes to plenty of creatures, which they need to be cleaned, while at the same time trying to attract the very same creatures with their lights so they can eat them. A truly remarkable balance.',
    ];
    // Basic corals and water plants
    const names22d = [
        "Just like the surface, the underwater world doesn't have much more to offer than basic plants. While they do play an important role in many of the planet's eco-systems, they're not that spectacular to look at.",
        "The underwater plants are also very basic. The steps to higher, more specialized organisms are slowly being taken, but it will take thousands of years before we'll be able to see much variation in the planet's underwater life.",
        "The underwater plants too are not much more than the very basic lifeforms you'd expect on young planets, but their colors are suprisingly varied and bright. A handful of species is already showing the first steps to higher organism forms, but they have still a long way to go.",
        "Corals, although very basic, can be found all over the planet's oceans, seas and lakes. While they lack the bright colors and odd shapes you'd find on Earth's corals, they do have the makings of a varied aquatic wildlife, with an abundance of gorgeous species.",
        "Weeds are pretty much the only water plant you'll find on this planet. Corals are non-existant and other forms of aquatic plants have yet to develop. But the weeds are gorgeous in their unique way. Whole forests of long, grass-like weeds give the ocean depths an eerie feel.",
        "Similar to the surface, the underwater world has little more to offer than basic lifeforms. However, this planet has an astonishing water world. Almost everything is covered in a type of sea-grass. This grass varies in length depending on the region, but they're all part of the same species. But what's probably more surprising are the 'flowers' you'll find in these fields of sea-grass. These flowers can only be described as primitive soft corals, but they're neither coral nor plant.",
        'Surprisingly, the underwater world of this planet has an abudance of primitive hard corals, but soft corals are extremely rare and only found in very specific regions. The hard corals are mostly nothing more than a shell with a flower-like organism growing out of it, which filters nutrients out of the ocean. But these hard corals already make for a gorgeous underwater world, despite them being all fairly similar to each other.',
        "While the surface of this planet has a decent variety of basic lifeforms, the waterworld has little more to offer beyond a large variety of algae. However, they come in so many different shapes and sizes, they may one day be the only type of plant-like organism in this planet's water world. While they don't grow in a large variety of colors, there's still something oddly beautiful about a huge field of grass-like algae or a forest of long, tentacle algae.",
        "Basic life forms are also the only thing you'll find in this planet's underwater world. Seaweeds, algae and a few dozen soft corals are scattered in very specific areas of this world, while everything else is eerily empty. But these vast areas of emptyness make the overgrown fields of soft corals and weeds all the more gorgeous.",
        "While the underwater world on this planet might not have any advanced plants or corals, their sheer numbers are astonishing. Almost everything in the shallower depth is covered in weeds, soft corals, hard corals and anything in between. Now it's just a matter of time to see which will develop and specialize the fastest and which species will perish in this fight.",
    ];
    // Lifeform types, dependant on user choices
    const names23a = [
        'The only thing coming close to animals on the planet are the many species of microorganisms found on pretty much every surface of this planet. While they may not provide a spectacular sight for the eyes, they do show promises of higher forms of life being possible on this planet. Only time will tell what they might evolve into.',
        "While most animal-like organisms on this planet are nothing more than bacteria and other microbes, a few species have already evolved into crude forms of insects. While they still lack many of the specialized characteristics you'd find on plenty of Earth's insects, they do show the first steps to such specialized creatures.",
        "Bacteria and other microorganisms are, perhaps unfortunately, the only thing you'll find on this planet if you're looking for any type of animal or higher life form. But, while they don't provide you with amazing sights, they do have a potential wealth of information, all of which could most likely greatly benefit us.",
        "A few dozen insect species are the only life forms on this planet visible with the naked eye, but microscopes will show there's a huge variety of bacteria and other microorganisms hiding in every nook and cranny. While the insects may be more appealing to study, it's the microorganisms that hold the most information and could even lead to potential scientific breakthroughs in many different fields.",
        'As expected, the only life forms coming close to being animals are the millions of microorganisms found pretty much everywhere. They could provide us with many answers to both how life was created on this planet and thus how life could be created on other planets.',
        "The conditions on this planet have unfortunately only given birth to microorganisms. While many do show great promise of evolving into higher species, it will still take thousands of years before we'll even be able to see the very first baby steps of evolution into new species.",
        "In terms of animals, microbes make up almost all of the lifeforms on this planet. But there are a few lifeforms which have and are evolving. While they're currently nothing more than the very basic forms of insects and fish, one day they may lead to the varied life like we now on Earth.",
        "With the exception of a few very basic insect and fish species, this planet is only home to countless microbe species. But while they may not be far into the evolutionary line, they do provide us with potential answers to the creation of this planet. The few insects and fish species show some slight forms of evolution, but they have a long way to go before they look like anything we've seen on Earth.",
        "This planet may not be home to any animals, it is filled with microbes. Many of these species are very basic and something you'd expect on a young planet. Others have evolved a little more, but have yet to reach a stage in which they could potentially evolve into higher organisms.",
        'A young planet such as this is of course not expected to be home to any animals, but you would expect microorganisms, which there are plenty of in this world. Millions of bacteria and other microbes have found their home, many of which have evolved to specialize in specific tasks. These specialized creatures will hopefully one day evolve into higher species, but it will take time.',
        'While not as exciting as the animals we know on earth, this planet is home to a wide variety of insects, fish, reptiles and amphibians. While none of them have higher brain functions besides the basic needs to survive, they do show a wonderful insight into how this planet and planets in general give birth to life.',
        "You will not find any intelligent life forms on this planet, but that doesn't take anything away from the astonishing beauty of the life forms it does have. Insects, reptiles, amphibians, fish and even the first baby steps to mammals can be found on this planet. The insects have evolved the most out of these species, but the amphibians have evolved into the most varied and surprising species.",
        'Intelligent life is non-existent on this planet, but you will not find a planet with a more varied, beautiful and astonishing life of insects and amphibians. The planet is ruled by these species and due to the fortunate conditions on this planet, many of them are huge.',
        'Just like the dinosaurs ruled Earth, fish and insects rule this planet. They may be nowhere near the size of dinosaurs, the fish and insect species of this planet are numerous. Remarkably, no other type of animal can be found on this planet, with the exception of microbes of course. The fish and insects are all highly specialized works of evolution, but only time will tell if they will stay this way.',
        "Reptiles, amphibians and insects can be found all over this planet. One more beautiful than the next. Mammals are non-existent, but many of the reptiles do show early signs of taking the very first evolutionary steps into mammals. One can only wonder what they'll evolve into.",
        'Mammals are non-existent on this planet, let alone intelligent life, but there are plenty of insects, amphibians and fish. None of them are very advanced, but they have at least evolved beyond microbes and other smaller organisms. The vast majority of the species on this planet are reptiles, many of which only show signs of becoming higher reptile species and not mammals. So only time will tell if this planet will give birth to intelligent, reptilian life forms.',
        "Insects, insects and more insects. That's what you'll find on this planet in terms of animal life. There are a few dozen fish species, but everything else is either a microbe or an insect. However, the insects on this planet are gorgeous and thanks to the right conditions, most of the insects are enormous.",
        "Amphibians are the rulers of this planet. While none of them are sentient, their shapes, sizes and ways of life makes them interesting nonetheless. Many of them are colorful, much like the chameleon's of Earth, but their sizes are close to that of the smaller dinosaurs. They share this planet with plenty of insects and fish, but the amphibians are far more numerous and advanced than the other species.",
        "Fish and amphibians species are numerous on this planet, both of which are heavily supported by the high insect populations and it is these insects who are the most interesting. They're the one responsible for the abundance of life, they're food for the bigger species, while also the pollinators for many of the plant-like organisms. Their roles in this world have given birth to a huge variety of specialized insects, each with their unique colors, shapes and sizes.",
        "The creatures on this planet may not be intelligent or even sentient, they truly are amazing to look at. Many of them seem very light and vulnerable, they could be best described as land-jellyfish, but even then you don't really do them justice. These species are all insects, but they look nothing like we're used to on Earth. But while this planet's unique properties have given birth to a wide variety of these unique species, there are plenty of insects which look more familiar and like something we'd expect to find on Earth.",
    ];
    const names23b = [
        "This planet is home to a huge variety of animals, mostly related to reptiles, birds and fish. However, the most advanced species are birds, some of which have become sentient. Their behavior is remarkable and fascinating to study, most of them are unlike anything we've seen on Earth. Whole communities of birds can be found throughout the planet, many of which have evolved into completely separate species.",
        'By far the most interesting animals on this planet are the aquatic mammals. They may not be as majestic as the birds or as fierce as some of the land mammals, but they are the only species who have a sentient member. This member of the aquatic species is roughly comparable to a mixture of seals and squids. They form huge colonies and actively take care of each other. They even build makeshift homes out of the available materials on the sea floors.',
        "Like Earth, this planet is home to many sentient mammals, both land and aquatic. However, the land mammals are far more advanced. What's perhaps most peculiar is that on this planet ape-like creatures seem to be the most intelligent. While the differences between this plant and Earth are vast, the similarities are astonishing and perhaps a bit frightening.",
        'This planet is home to many sentient creatures. The bird, reptile and amphibian kingdoms have the most sentient species, but the mammals and fish have their fair share as well. However, a few of the amphibian species appear to be the most advanced of all. They live in what can only be described as small communities in town-like constructions. They may lack the intelligence humans have, but their ingenuity is still very surprising.',
        "Hidden in the depths of this planet's oceans are a species of sentient creatures who made their home in the most hostile environments imaginable. These creatures look like a cross between jellyfish and giant squids, but have the intelligence comparable to that of dolphins. These intelligent creatures are surrounded by a plethora of fish, crustaceans and other aquatic creatures unseen on Earth. In contrast to this aquatic world, the surface world is relatively dull. Amphibians and insects rule this world, but while they may not be anywhere near as interesting as the sentient creatures of the depth, they did evolve in remarkable ways.",
        "Many of the creatures on this planet have evolved into gliders, so to speak. Most of the fish and aquatic mammals, despite coming in various shapes and sizes, tend to glide through the water without effort, similar to how manta's glide on Earth. However, the surface species are more astonishing. Similar to the flying squirrels or the vultures of Earth, many of the species on this planet have developed ways to effortlessly move from one place to another by using the winds. But there is one species which shows signs of sentience. These species, a type of bird, love to play and have become masters of flight. Similar to how dolphins play, explore and learn, these species use their intellect and courage to play and sometimes challenge each other to death defying tricks.",
        "Sentient life is rare in the universe, but this planet has plenty of it. Birds, reptiles, mammals and even fish. Not all of them as intelligent as some of them of course, but sentient nonetheless. However, there's one species of fish which are particularly interesting. These fish have become masters of teamwork. They will use their surroundings to get rid of predators, but they will sometimes do so by killing that predator for food. While most fish, especially those on Earth, have specific ways to flee from or intimidate predators, these advanced species will think of the best ways to survive, based on their surroundings and sometimes even based on other species nearby. Their intelligence has lead to a huge population, but there are a few predators who are slowly learning new tricks.",
        "This planet has an abundance of life in all shapes and sizes. Birds, reptiles, insects, fish, mammals, you name it. There are even a few dozen sentient species, most of them either reptilian or amphibian. However, the most remarkable species is only barely sentient. But it's not their sentience that makes them interesting. These large mammals have bark-like skin, comparable to the skin of an elephant but with the texture of a dragon's scale. These mammals are slow and docile, which they can afford to be with such armor, but their gentle nature causes moss, plants and other small organisms to grow on their skin. Some individuals look more like walking trees than a member of their own species and it has lead to unique micro-ecosystems.",
        "There are plenty of odd creatures in the universe and this planet is no different. Amidst all the birds, mammals, fish and reptiles, a species of sentient snake-like creatures has emerged. While sentience isn't unique to these snakes on this planet, their methods of hunting prey are odd to say the least. The snakes on Earth have various, often horrifying ways to hunter and kill prey, but these snake-like creatures hunt in groups. Their teamwork is astonishing and at the same time terrifying. A single attack of a team of these monsters could easily wipe out most of a family of smaller creatures, but like many animals on Earth, these creatures make sure enough survive for the future.",
        "Sentience is fairly common on Earth and on this planet too it's uncommon. However, on this planet most of the sentient species are insect-like creatures. The most remarkable creature can best be described as a large, winged spider. About the size of a pigeon, these 'spiders' are capable of flight, just like many insects. They aren't capable of creating webs however, but they do catch prey with sticky constructions. They're saliva is very sticky and is usually applied to a branch or large leaf, ready for an unsuspecting prey to land on. The 'spider' will usually cover several spots in a tree before flying to a higher position where it waits. These 'spiders' possess more intelligence than meets the eye though. They sometimes work together to scare prey towards regions with a lot of prepared sticky patches, often ending in a feast for these 'spiders'.",
    ];
    const names23c = [
        "The intelligent lifeforms on this planet are comparable to the humans of the bronze age, except that they are already more inclined to try to explain the mysteries of their world. Unfortunately they are quite violent, so they tend to live in smaller communities which they will protect at all costs. There are no signs of teamwork between the different communities, which would've been of benefit to them. This could lead to interesting developments in language and customs, but only time will tell how this will turn out.",
        "While the intelligent lifeforms on this planet aren't technologically advanced and it's still a uncertain what they know or think they know about the universe, they are quite advanced nonetheless. Their current stage can be compared roughly to that of the late ancient Egyptians, but only in terms of progress. Their societies are completely different, as they tend to live in harmony with one another. This is mostly due to the species lack of strong emotions, which has developed over millions of years without a real natural enemy, besides diseases.",
        "The higher sentient beings on this planet can be compared to the humans in the middle ages. Violent, unsanitary and fairly ignorant towards the mysteries of life. However, their technology has advanced beyond what humans were capable of in the middle ages. These beings are already capable of basic flight through the means of gliders. They're also in the process of inventing explosives and crude engines, though they're quite different from anything we've created on Earth.",
        "This planet's intelligent lifeforms are capable of technological feats far beyond what humans have achieved so far. These higher species have managed to colonize several planets, the last few of which they've managed to terra form. Unfortunately for them they have yet to find other intelligent life in the universe, but with their hundreds of space missions the odds are certainly in their favor.",
        "War is something that has been part of human history since its dawn and while humans aren't the only species who engage in war, they are by far the most skilled in it. This planet is no different. The higher intelligence of these sentient species has unfortunately lead to almost nothing but war. Fortunately they aren't as technologically advanced as humans yet, they're in a stage comparable to that of the middle ages, so while they are destructive, their planet isn't at risk of being completely destroyed. However, these creatures do fight with a lot of destructive force, often using poisons and diseases to kill their enemies.",
        'Finding higher forms of intelligence on other planets is something we as humans have dreamt of for ages, both for better and worse. The higher species on this planet are no different, in fact, these species are far more dedicated to it than humans are currently. Of course, the fact that these species have superior technology and a more peaceful society greatly benefits in their goals. Numerous space missions, both manned and unmanned, hundreds of space observation centers and hundreds of thousands of scientists and other professionals are the main force behind the goal to find other life in their galaxy and the universe. While they have discovered a fair deal of life, none of them are intelligent enough to even try to begin communications with.',
        "When we think of higher intelligence on other planets we often think of technologically advanced species in a world far beyond that of ours. Unfortunately, this planet is nothing like that. The intelligent species on this planet, though intelligent, aren't much more advanced than humans were during the late stone age. While they do have a language, they have yet to create a written version of it, which makes potential communications between them and other alien species a bigger challenge. These species do show a great interest in space, they adore and often worship the night sky, many of them even make crude drawings of constellations, the surrounding planets and their moons.",
        "Galactic and intergalactic empires are a big part of human sci-fi, many of these empires are often either evil or a coalition between different species. However, this planet is home to the rules of a true intergalactic empire. But they wouldn't call themselves rulers. Guardians is a more fitting term. These species have advanced far beyond anything humans would be capable of in the next few centuries, if not millennia. They have traveled to all the nearby planets containing any form of life and made sure it was protected, aided and sometimes even altered for their benefit. They've even terra formed planets without life. While most of this was done to study species, their evolution and the possibilities of their own technology, this has also lead to biological breakthroughs ranging from cures for diseases to altering and enhancing their own DNA.",
        "Evil alien species who wish to destroy the universe are a common theme in sci-fi movies. However, it turns out it's not that far from reality. The species on this planet are what we'd consider truly evil. Their superior technology has been the end of many species, both on their own planet and others. Having virtually destroyed most life their own planet, these hostile creatures now search the universe for resources they can use on their home-planet. No other species has had the capabilities to stand in their way, yet.",
        "If we as humans found intelligent life today, they would most likely be either millennia ahead of us or way behind us in terms of technology. Oddly enough, the higher species on this planet are somewhat equal to us. Our technology is of course very different from theirs, that's to be expected on a different planet, but our technologies are roughly capable of the same feats. However, cultural differences did lead to a few major differences. These species are far more advanced in cleaner energies, but humans are far more advanced in war machines, something which advanced a lot due to necessity, as well as space engineering and flight. If these two worlds were to meet peacefully, we'd certainly be able to learn a lot from each other.",
        "While the higher species of this planet have yet to enter space, their mastery of flight is commendable. These creatures are almost obsessed with flying and have invented hundreds, if not thousands of different vehicles that allow them to get from A to B by flying. They're less interested in space however, as flying is far less exciting when you don't have to worry about gravity.",
        "Necessity is the mother of invention and that's exactly why the higher species on this planet have highly advanced technology. Their planet has been under constant threat of natural disaster, but from their own planet as well as from space. This has resulted in strong weapons, nature controlling technology and planet defense mechanisms. While the natural disasters have lead to a lot of grief, it's fortunate they evolved their technology at such a rapid pace or else they wouldn't have been able to defend themselves against an alien threat.",
        "With the technology equivalent of the middle ages and the ambition equivalent of Ancient Rome, the higher species on this planet are fascinating to watch and study. While violent towards different groups, each region on this planet is rule by a well organized empire which takes care of its own. The hostility is mostly due to the hostile environment they live in. Dangerous wildlife and a lack of resources mean you have to stick together to survive. If only they would all work together for the survival of everybody, who knows what they'd be able to accomplish.",
    ];
    const names23d = [
        "Unfortunately the conditions on this planet make it impossible to sustain life, which is a shame as it's in a good enough position to do so. Perhaps in a few million years the conditions will have bettered, but un the mean time we can only appreciate it's violent beauty.",
        'Obviously this planet cannot sustain life, the conditions on this planet are far too violent and it changes too often. Perhaps when things have calmed down in a few million years life will begin to appear, but right now we can only study this young planet for more information about how planets are formed.',
        "Although relatively calm, the conditions on this planet are still too extreme to sustain life and it's still uncertain whether it will ever be able to do so. However, its extreme conditions are beautiful in their own way.",
        'The explosive nature of this planet makes it impossible to sustain any life forms. The volcanic eruptions are too devastating and the conditions on this planet change too drastically during its orbit. Perhaps once it has calmed down, life might be possible, but the chances are slim.',
        'Extreme weather conditions and violent tectonic plate movement make this planet unsuitable for any life. But this planet is still fairly young, so perhaps once it has aged and calmed down a bit, life might find its way to this world.',
        "Sustaining life on its own isn't something this planet will be capable of in the near future, but the conditions are good enough to allow terra forming and the planet is rich in resources, which could make it perfect for a mining colony.",
        'Terra forming may be the only way to ever bring life to this planet. The current conditions are far too extreme for most lifeforms, but with the right technologies, life could be introduced. The planet also has plenty of resources to allow for these construction to be done on the planet.',
        'With conditions as extreme as these, the chances of sustaining life on this planet are virtually none-existent. Even if the planet has calmed down after millions of years, it would probably still take terra forming to introduce any form of life.',
        "This planet currently has no lifeforms on it, but the conditions are currently good enough to allow for at least terra forming. But perhaps without any help, this planet might too be home to new life. We'd just have to wait and see.",
        'The only way this planet will ever be home to life is if an advanced species introduces it through terra forming. The conditions are currently far too extreme to allow for life to sprout on its own, but even if the conditions were milder, the chances of life sprouting are still slim to none.',
        'While this planet currently holds no lifeforms, it may very well do so in the future. The conditions are near perfect, all it takes now is the right trigger and plenty of time. Perhaps an advanced species could help set things in motion.',
        "The conditions on this planet may not be ideal, they're good enough to sustain life. Unfortunately it has yet to do so, but the future of this planet is very promising. If nothing else, it would be perfect as a new home for an advanced species.",
        "Barren, empty and cruel. This planet isn't the most ideal place for life, but there are plenty of examples similar to this planet which do sustain life. Only time will tell if this planet is a future home to new lifeforms.",
        'Life is still non-existent on this planet, but the conditions are just right for it. Under the right circumstances or if the right microorganisms are introduced into this world, life will most certainly flourish in a few million years.',
        "Surprisingly, life hasn't managed to find its way on this planet. The conditions are perfect however, so all it takes now is time and the right trigger. Once life does find its way here, it would certainly flourish and hopefully give birth to spectacular species.",
        'Life is obviously impossible on this planet and will always be impossible. The conditions are too violent, there are no places life could be created and anything that reaches the planet is destroyed in its violence. A violence that is strangely beautiful, yet eerily frightening.',
        'Beautiful as this planet may be, life will of course never be possible here. But in terms of research, this planet has plenty of secrets and answers ready to be discovered. If nothing else, this planet at least makes for a gorgeous sight in the night skies of the planets around it.',
        'The violent nature of this planet is so devastating it might one day mean the end of the moons and planets around it. Not only is life impossible on this planet or around it, it could very well be the end of any chance of life in this solar system.',
        'While life will never be possible on this planet, it does offer a unique sight in the night sky of nearby planets. Its colors and distance to the planets around it occasionally makes the night quite magical on those planets, especially those with an atmosphere.',
        "It's obvious life on this planet is impossible, but the planet does hold the key to whether or not life will exist on the planets around it. This planet shields some of the other planets from an asteroid field which crosses every few decades. When this happens, small pieces are scattered through this solar system, but the vast majority are caught by this planet. Those pieces that do get scattered are usually not big enough to destroy the other planets, while at the same time potentially holding the right materials or even lifeforms to begin the process of life on those other planets.",
        'Resources are pretty much the only thing this planet is good for. Life will most likely never be sustained due to the harsh conditions and terra forming would be very difficult. But for any alien species advanced enough to mine other planets, this one would be a perfect choice.',
        'For any species looking to build a new home planet or mine its resources, this planet is a perfect choice. While it currently holds no lifeforms, life is certainly possible and the high amounts of precious resources make it the ideal place for many technological needs.',
        "This planet may be devoid of life, but there's an abundance of resources, many of which are usually quite rare on many other planets. Life is certainly possible on this planet, as the conditions are just right, so this planet is a prime location for any species looking for a new home or for a place to gather resources.",
        "Although extremely violent, this planet holds many resources which could be of the utmost importance to some species. With the right technology, battling the elements on this planet shouldn't be too much of a challenge.",
    ];
    const names23e = [
        'Life is obviously impossible on this planet and will always be impossible. The conditions are too violent, there are no places life could be created and anything that reaches the planet is destroyed in its violence. A violence that is strangely beautiful, yet eerily frightening.',
        'Beautiful as this planet may be, life will of course never be possible here. But in terms of research, this planet has plenty of secrets and answers ready to be discovered. If nothing else, this planet at least makes for a gorgeous sight in the night skies of the planets around it.',
        'The violent nature of this planet is so devastating it might one day mean the end of the moons and planets around it. Not only is life impossible on this planet or around it, it could very well be the end of any chance of life in this solar system.',
        'While life will never be possible on this planet, it does offer a unique sight in the night sky of nearby planets. Its colors and distance to the planets around it occasionally makes the night quite magical on those planets, especially those with an atmosphere.',
        "It's obvious life on this planet is impossible, but the planet does hold the key to whether or not life will exist on the planets around it. This planet shields some of the other planets from an asteroid field which crosses every few decades. When this happens, small pieces are scattered through this solar system, but the vast majority are caught by this planet. Those pieces that do get scattered are usually not big enough to destroy the other planets, while at the same time potentially holding the right materials or even lifeforms to begin the process of life on those other planets.",
    ];
    const random1 = Math.floor(Math.random() * names1.length);
    const random2 = Math.floor(Math.random() * names2.length);
    const random3 = Math.floor(Math.random() * names3.length);
    if (random3 < 3 && planetType !== 1) {
        names10 = 0;
        names11 = 0;
    }
    const random4 = Math.floor(Math.random() * names4.length);
    if (random4 > 3) {
        names5 = [
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty',
            'twenty-one',
            'twenty-two',
            'twenty-three',
            'twenty-four',
            'twenty-five',
            'twenty-six',
            'twenty-seven',
            'twenty-eight',
        ];
    } else if (random4 === 3) {
        names5 = [
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty',
        ];
    }
    const random5 = Math.floor(Math.random() * names5.length);
    const random13 = Math.floor(Math.random() * names13.length);
    const random14 = Math.floor(Math.random() * names14.length);
    const random21 = Math.floor(Math.random() * names21.length);
    const random22a = Math.floor(Math.random() * names22a.length);
    const random22b = Math.floor(Math.random() * names22b.length);
    const random22c = Math.floor(Math.random() * names22c.length);
    const random22d = Math.floor(Math.random() * names22d.length);
    const random23a = Math.floor(Math.random() * names23a.length);
    const random23b = Math.floor(Math.random() * names23b.length);
    const random23c = Math.floor(Math.random() * names23c.length);
    const random23d = Math.floor(Math.random() * names23d.length);
    const random23e = Math.floor(Math.random() * names23e.length);
    const name = `The planet ${names1[random1]}${names2[random2]}is a${names3[random3]} planet in ${names4[random4]}${names5[random5]} other planets.`;
    const name2 = `${names1[random1]} is about ${names6} times bigger than Earth and its gravity is about ${names7} times that of Earth.`;
    const name3 = `A single day lasts ${names8} hours and a year lasts ${names9} days. The planet is made up of ${names10} continents, which make up ${names11}% of the planet's landmass.`;
    const name4 = `${names12} moon(s) orbit the planet and ${names1[random1]} itself orbits a${names13[random13]} sun in a${names14[random14]}.`;
    let name5 = '';
    let name6 = '';
    let name7 = '';
    let name8 = '';
    if (lifeType === 1) {
        if (random3 < 3) {
            name5 = names23e[random23e];
        } else {
            name5 = names23d[random23d];
        }
    } else if (lifeType === 2) {
        name5 = `The plant-like organisms on this planet are ${names21[random21]}`;
        name6 = names22b[random22b];
        name7 = names22d[random22d];
        name8 = names23a[random23a];
    } else if (lifeType === 3) {
        name5 = `The plant-like organisms on this planet are ${names21[random21]}`;
        name6 = names22a[random22a];
        name7 = names22c[random22c];
        name8 = names23b[random23b];
    } else if (lifeType === 4) {
        name5 = `The plant-like organisms on this planet are ${names21[random21]}`;
        name6 = names22a[random22a];
        name7 = names22c[random22c];
        name8 = names23c[random23c];
    }
    result = '';
    result += name;
    result += '\n';
    result += name2;
    result += '\n';
    result += '\n';
    result += name3;
    result += '\n';
    result += name4;
    result += '\n';
    result += '\n';
    result += name5;
    result += '\n';
    result += '\n';
    result += name6;
    result += '\n';
    result += '\n';
    result += name7;
    result += '\n';
    result += '\n';
    result += name8;
    return result;
}
