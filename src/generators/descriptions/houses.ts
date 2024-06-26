import { sample } from 'lodash';

export default function houses() {
    const nm1 = [
        'magnificent',
        'cozy',
        'warm and cozy',
        'stylish',
        'very elegant',
        'gorgeous',
        'grandiose',
        'impressive',
        'lavish',
        'snug and comfortable',
        'intimate and cozy',
        'luxurious',
        'posh and extravagant',
        'nice and traditional',
        'old, but wonderful',
    ];
    const nm2 = [
        'blue stones',
        'bricks covered in render',
        'brown bricks',
        'brown stones',
        'burgandy bricks',
        'cypress wood',
        'fir wood',
        'grey bricks',
        'grey stones',
        'oak wood',
        'poplar wood',
        'red bricks',
        'red pine wood',
        'sandstone',
        'spruce wood',
        'tan bricks',
        'tan stones',
        'walnut wood',
        'wheat colored bricks',
        'white bricks',
        'white cedar wood',
        'white pine wood',
        'white stones',
        'wood covered in render',
        'yellow pine wood',
    ];
    const nm3 = [
        'blue stone',
        'brown brick',
        'brown stone',
        'burgandy brick',
        'cypress wooden',
        'fir wooden',
        'grey brick',
        'grey stone',
        'oak wooden',
        'poplar wooden',
        'red brick',
        'red pine wooden',
        'sandstone',
        'spruce wooden',
        'tan brick',
        'tan stone',
        'marble',
        'granite',
        'mahogany wooden',
        'walnut wood',
        'white brick',
        'white cedar wooden',
        'white pine wooden',
        'white stone',
        'yellow pine wooden',
    ];
    const nm4 = [
        'Tall, large',
        'Tall, wide',
        'Short, wide',
        'Small, rounded',
        'Tall, rounded',
        'Small, squared',
        'Tall, squared',
        'Small, rectangular',
        'Tall, rectangular',
        'Small, half rounded',
        'Tall, half rounded',
        'Small, octagon',
        'Large, octagon',
        'Small, triangular',
        'Large, triangular',
    ];
    const nm5 = [
        'let in plenty of light',
        'brighten up the house',
        'add to the overall style of the house',
        'add to the overall look of the house',
        'allow enough light to enter the home',
    ];
    const nm6 = [
        'in a very symmetric way',
        'in a mostly symmetric way',
        'in a very asymmetric way',
        'in a mostly asymmetric way',
        'in a fairly symmetrical pattern',
        'in a fairly asymmetrical pattern',
    ];
    const nm7 = [
        'shaped like a T',
        'shaped like an L',
        'shaped like a short U',
        'shaped like a squared S',
        'square shaped',
        'rectangular shaped',
        'fairly rounded in shape',
        'shaped like a circle',
    ];
    const nm8a = [
        'The two extensions are linked by a patio circling around half the house',
        'The two extensions are linked by a covered patio circling around half the house',
        'The two extensions are linked by glass overhanging panels circling around half the house',
        'The two extensions are linked by wooden overhanging panels circling around half the house',
        'The two extensions are linked by cloth sunscreens circling around half the house',
        'The two extensions are linked by wooden sunscreens structures circling around half the house',
        'The two extensions are linked by stylish gardens circling around half the house',
        'The two extensions are linked by a garden path circling around half the house',
        'The two extensions are linked by overgrown wooden overhanging panels circling around half the house',
        'The two extensions extend into a patio reaching until the end of that side of the house',
        'The two extensions extend into a covered patio reaching until the end of that side of the house',
        'The two extensions extend into glass overhanging panels reaching until the end of that side of the house',
        'The two extensions extend into wooden overhanging panels reaching until the end of that side of the house',
        'The two extensions extend into cloth sunscreens reaching until the end of that side of the house',
        'The two extensions extend into wooden sunscreens structures reaching until the end of that side of the house',
        'The two extensions extend into stylish gardens reaching until the end of that side of the house',
        'The two extensions extend into a garden path reaching until the end of that side of the house',
        'The two extensions extend into overgrown wooden overhanging panels reaching until the end of that side of the house',
    ];
    const nm8b = [
        'The extension extends into a patio circling around half the house',
        'The extension extends into a covered patio circling around half the house',
        'The extension extends into glass overhanging panels circling around half the house',
        'The extension extends into wooden overhanging panels circling around half the house',
        'The extension extends into cloth sunscreens circling around half the house',
        'The extension extends into wooden sunscreens structures circling around half the house',
        'The extension extends into stylish gardens circling around half the house',
        'The extension extends into a garden path circling around half the house',
        'The extension extends into overgrown wooden overhanging panels circling around half the house',
        'The extension extends into a patio reaching until the end of that side of the house',
        'The extension extends into a covered patio reaching until the end of that side of the house',
        'The extension extends into glass overhanging panels reaching until the end of that side of the house',
        'The extension extends into wooden overhanging panels reaching until the end of that side of the house',
        'The extension extends into cloth sunscreens reaching until the end of that side of the house',
        'The extension extends into wooden sunscreens structures reaching until the end of that side of the house',
        'The extension extends into stylish gardens reaching until the end of that side of the house',
        'The extension extends into a garden path reaching until the end of that side of the house',
        'The extension extends into overgrown wooden overhanging panels reaching until the end of that side of the house',
    ];
    const nm8c = [
        'The two extensions are linked by a patio',
        'The two extensions are linked by a covered patio',
        'The two extensions are linked by glass overhanging panels',
        'The two extensions are linked by wooden overhanging panels',
        'The two extensions are linked by cloth sunscreens',
        'The two extensions are linked by wooden sunscreens structures',
        'The two extensions are linked by stylish gardens',
        'The two extensions are linked by a garden path',
        'The two extensions are linked by overgrown wooden overhanging panels',
        'The two extensions extend into a patio to each side',
        'The two extensions extend into a covered patio to each side',
        'The two extensions extend into glass overhanging panels to each side',
        'The two extensions extend into wooden overhanging panels to each side',
        'The two extensions extend into cloth sunscreens to each side',
        'The two extensions extend into wooden sunscreens structures to each side',
        'The two extensions extend into stylish gardens to each side',
        'The two extensions extend into a garden path to each side',
        'The two extensions extend into overgrown wooden overhanging panels to each side',
    ];
    const nm8d = [
        'The two extensions extend into a patio circling around half the house',
        'The two extensions extend into a covered patio circling around half the house',
        'The two extensions extend into glass overhanging panels circling around half the house',
        'The two extensions extend into wooden overhanging panels circling around half the house',
        'The two extensions extend into cloth sunscreens circling around half the house',
        'The two extensions extend into wooden sunscreens structures circling around half the house',
        'The two extensions extend into stylish gardens circling around half the house',
        'The two extensions extend into a garden path circling around half the house',
        'The two extensions extend into overgrown wooden overhanging panels circling around half the house',
        'The two extensions extend into a patio to each side',
        'The two extensions extend into a covered patio to each side',
        'The two extensions extend into glass overhanging panels to each side',
        'The two extensions extend into wooden overhanging panels to each side',
        'The two extensions extend into cloth sunscreens to each side',
        'The two extensions extend into wooden sunscreens structures to each side',
        'The two extensions extend into stylish gardens to each side',
        'The two extensions extend into a garden path to each side',
        'The two extensions extend into overgrown wooden overhanging panels to each side',
    ];
    const nm8e = [
        'The house is half surrounded by a patio',
        'The house is half surrounded by a covered patio',
        'The house is half surrounded by glass overhanging panels',
        'The house is half surrounded by wooden overhanging panels',
        'The house is half surrounded by cloth sunscreens',
        'The house is half surrounded by wooden sunscreens structures',
        'The house is half surrounded by stylish gardens',
        'The house is half surrounded by a garden path',
        'The house is half surrounded by overgrown wooden overhanging panels',
        'The house is fully surrounded by a patio',
        'The house is fully surrounded by a covered patio',
        'The house is fully surrounded by glass overhanging panels',
        'The house is fully surrounded by wooden overhanging panels',
        'The house is fully surrounded by cloth sunscreens',
        'The house is fully surrounded by wooden sunscreens structures',
        'The house is fully surrounded by stylish gardens',
        'The house is fully surrounded by a garden path',
        'The house is fully surrounded by overgrown wooden overhanging panels',
        'The house is partially surrounded by a patio on two sides',
        'The house is partially surrounded by a covered patio on two sides',
        'The house is partially surrounded by glass overhanging panels on two sides',
        'The house is partially surrounded by wooden overhanging panels on two sides',
        'The house is partially surrounded by cloth sunscreens on two sides',
        'The house is partially surrounded by wooden sunscreens structures on two sides',
        'The house is partially surrounded by stylish gardens on two sides',
        'The house is partially surrounded by a garden path on two sides',
        'The house is partially surrounded by overgrown wooden overhanging panels on two sides',
    ];
    const nm9 = [
        'bigger than the first',
        'smaller than the first',
        'the same size as the first',
    ];
    const nm10a = [
        'which creates a stylish overhang around the entire house',
        'which creates a stylish overhang around half the house',
        'which creates a stylish overhang on one side of the house',
        'which creates a stylish overhang on two sides of the house',
        'which creates several overhanging parts on several sides of the house',
        'which creates several overhanging parts on one side of the house',
    ];
    const nm10b = [
        'which allowed for a large balcony on one side of the house',
        'which allowed for several small balconies on one side of the house',
        'which allowed for several balconies on the sides of the house',
        'which creates a layered style of look in combination with the roof',
        'which, in combination with its placement, creates an original look',
        'which allowed for a roof garden on one side of the house',
        'which allowed for a roof garden on two sides of the house',
    ];
    const nm10c = [
        'which has been built exactly on top of the floor below it',
        'but part of it hangs over the edge of the floor below, creating an overhang on one side and a balcony on the other',
    ];
    const nm11 = [
        'follows the same style as',
        'has a slightly different style than',
        'has a different style than',
        'has a very different style than',
        'has roughly the same style as',
    ];
    const nm12 = [
        'high and triangular',
        'low and triangular',
        'high and pyramid shaped',
        'low and pyramid shaped',
        'flat',
        'low and slanted to one side',
        'high and slanted to one side',
        'high, triangular and layered',
        'low, triangular and layered',
        'high, triangular, but one side is longer than the other',
        'low, triangular, but one side is longer than the other',
        'high and v-shaped',
        'low and v-shaped',
        'low and square shaped',
        'high and square shaped',
        'high and rounded',
        'low and rounded',
    ];
    const nm13 = [
        'black ceramic tiles',
        'black roof tiles',
        'brown ceramic tiles',
        'brown roof tiles',
        'brown wood shingles',
        'dark ceramic tiles',
        'flat roof tiles',
        'grey ceramic tiles',
        'grey roof tiles',
        'grey wood shingles',
        'overlapping roof tiles',
        'red ceramic tiles',
        'red roof tiles',
        'red wood shingles',
        'rounded roof tiles',
        'seagrass',
        'slate shingles',
        'stone slabs',
        'wheat straw',
        'wood shingles',
    ];
    const nm14 = [
        'One large chimney pokes out the center of the roof',
        'Two large chimneys poke out the center of the roof',
        'One large chimney sits at the side of the house',
        'Two large chimneys sit at the side of the house',
        'Two large chimneys sit at either side of the house',
        'There are no chimneys',
        'One small chimney pokes out the center of the roof',
        'Two small chimneys poke out the center of the roof',
        'One small chimney sits at the side of the house',
        'Two small chimneys sit at the side of the house',
        'Two small chimneys sit at either side of the house',
    ];
    const nm15 = [
        'Several large windows let in plenty of light to the rooms below the roof',
        'Many smaller windows let in plenty of light to the rooms below the roof',
        'Several small windows let in just enough light to the rooms below the roof',
        'A few large windows let in just enough light to the rooms below the roof',
        'A few round, small windows let in enough light to the rooms below the roof',
        'Several long, thin windows let in plenty of light to the rooms below the roof',
        'Two roof terraces let in plenty of light to the rooms below the roof',
        'Large, skylight windows let in plenty of light to the rooms below the roof',
        'Rows of small windows let in plenty of light to the rooms below the roof',
        'There are no windows on the roof',
    ];
    const nm16 = [
        'a gorgeous garden with many hidden lights that make the garden come to life at night',
        'a gorgeous garden, including hanging grape vines, a pagoda, a pond and many different flowers',
        'a gorgeous garden, including various trees, bushes, flowers and a large pond',
        'a modest garden, covered mostly in grass, a few flower patches and with a small pond',
        'a modest garden, with mostly grass and a few small trees',
        "a modest garden, with mostly grass, a few flower patches and a children's playground",
        "a modest, childsafe garden covered mostly in grass and with a children's playground in the center",
        'a tranquil garden, with various flowers, a long pond including a small waterfall and various rock formations',
        'a well kept garden, with a grass field and flower patches at the edges of the garden',
        'a well kept garden. Grass, flower patches and trees have been placed in a stylish way',
        'grass, a huge tree in the center and bushes on the borders of the plot',
        'paved ground, with a pool at the backside of the house',
        'paved ground, with a small pond at one side and various potted plants all around the house',
        'paved ground, with an outdoor eating and relaxing space and various potted plants',
        'paved ground, with various party spots, like a fancy barbeque and a firepit',
    ];
    const nm17 = [
        'a large',
        'a small',
        'a modern',
        'a huge',
        'an average',
        'an old-fashioned',
    ];
    const nm18 = [
        'two bathrooms',
        'one large bathroom',
        'one small bathroom',
        'one average bathroom',
        'one modern bathroom',
        'two modern bathrooms',
        'three bathrooms',
    ];
    const nm19 = [
        'large',
        'cozy',
        'small',
        'warm',
        'huge',
        'fairly small',
        'comfortable',
        'snug',
        'generous',
        'spacious',
    ];
    const nm20 = [
        'two bedrooms',
        'three bedrooms',
        'four bedrooms',
        'five bedrooms',
    ];
    const nm21 = [
        'a small',
        'a large',
        'a cozy',
        'a snug',
        'a spacious',
        'a modest',
        'a grand',
        'a roomy',
    ];
    const nm22 = ['dining room', 'dining area'];
    const nm23 = [
        '',
        '',
        '',
        '',
        '',
        ', a lounge area',
        ', a study',
        ', a library',
        ', a game room',
        ', a bar',
        ', a sun room',
        ', a playroom',
        ', a multimedia room',
        ', an office',
    ];
    const nm24 = ['storage room', 'garage', 'basement'];
    let nms8 = '';
    let nms10 = '';
    const rnd7 = Math.floor(Math.random() * nm7.length);
    let rnd8 = Math.floor(Math.random() * nm8e.length);
    if (rnd7 === 0) {
        rnd8 = Math.floor(Math.random() * nm8a.length);
        nms8 = nm8a[rnd8];
    } else if (rnd7 === 1) {
        rnd8 = Math.floor(Math.random() * nm8b.length);
        nms8 = nm8b[rnd8];
    } else if (rnd7 === 2) {
        rnd8 = Math.floor(Math.random() * nm8c.length);
        nms8 = nm8c[rnd8];
    } else if (rnd7 === 3) {
        rnd8 = Math.floor(Math.random() * nm8d.length);
        nms8 = nm8d[rnd8];
    } else {
        nms8 = nm8e[rnd8];
    }
    const rnd9 = Math.floor(Math.random() * nm9.length);
    let rnd10 = Math.floor(Math.random() * nm10a.length);
    if (rnd9 === 1) {
        rnd10 = Math.floor(Math.random() * nm10b.length);
        nms10 = nm10b[rnd10];
    } else if (rnd9 === 2) {
        rnd10 = Math.floor(Math.random() * nm10c.length);
        nms10 = nm10c[rnd10];
    } else {
        nms10 = nm10a[rnd10];
    }
    const name = `From the outside this house looks ${sample(nm1)}, it has been built with ${sample(nm2)} and has ${sample(nm3)} decorations. ${sample(nm4)} windows ${sample(nm5)} and have been added to the house ${sample(nm6)}.`;
    const name2 = `The house is equipped with ${sample(nm17)} kitchen and ${sample(nm18)}, it also has a ${sample(nm19)} living room, ${sample(nm20)}, ${sample(nm21)} ${sample(nm22)}${sample(nm23)} and ${sample(nm21)} ${sample(nm24)}.`;
    const name3 = `The building is ${sample(nm7)}. ${nms8}.`;
    const name4 = `The second floor is ${sample(nm9)}, ${nms10}. This floor ${sample(nm11)} the floor below.`;
    const name5 = `The roof is ${sample(nm12)} and is covered with ${sample(nm13)}. ${sample(nm14)}. ${sample(nm15)}.`;
    const name6 = `The house itself is surrounded by ${sample(nm16)}.`;
    let result = '';
    result += name;
    result += '\n';
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
    result += name6;
    return result;
}
