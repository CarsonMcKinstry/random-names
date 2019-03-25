export default function humanoids() {
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Two', 'Two', 'Two', 'Three', 'Four', 'Two'];
  const nm2 = ['beady', 'broad', 'bug-eyed', 'clear', 'close-set', 'dead', 'doe-eyed', 'enormous', 'giant', 'glassy', 'glowing', 'heavy', 'hollow', 'hooded', 'large', 'narrow', 'shiny', 'shuttered', 'small', 'sunken', 'thin', 'tiny', 'wide'];
  const nm3 = ['observe', 'study', 'watch', 'inspect', 'examine', 'monitor', 'survey', 'look at', 'view'];
  const nm4 = ['narrow', 'wide', 'broad', 'large', 'thin', 'deep', 'huge', 'bony'];
  const nm5 = ['big', 'broad', 'crooked', 'flat', 'gentle', 'large', 'narrow', 'pig-like', 'pointy', 'round', 'short', 'small', 'tiny', 'wide'];
  const nm6 = ['narrow', 'large', 'wide', 'long', 'shallow', 'deep', 'average', 'normal', 'ordinary', 'small'];
  const nm7 = ['sly', 'shy', 'wide', 'happy', 'gentle', 'creepy', 'brittle', 'gummy', 'lazy', 'sardonic', 'thin'];
  const nm8 = ['sharp', 'long', 'pointy', 'short', 'small', 'stubby', 'dull', 'thin', 'crooked', 'large', 'creepy', 'eerie'];
  const nm9 = ['flat', 'broad', 'thin', 'long', 'wide', 'small', 'large'];
  const nm10 = ['Short', 'Long', 'Narrow', 'Wide', 'Broad', 'Large', 'Small', 'Thin'];
  const nm11 = ['pointy', 'round', 'bent', 'squared'];
  const nm12 = ['long', 'short', 'average', 'small', 'large'];
  const nm13 = ['narrow', 'wide', 'thin', 'broad', 'rounded', 'squared', 'pointy'];
  const nm14 = ['thick', 'curly', 'thin', 'long', 'short', 'wavy', 'coarse', 'soft', 'very long', 'silken'];
  const nm15 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ' and has two small horns protruding from the top', ' and has two small horns protruding from the sides', ' and has two curved horns protruding from the top', ' and has two curved horns protruding from the sides', ' and has two stubby horns protruding from the top', ' and has two stubby horns protruding from the sides', ' and has two thin horns protruding from the top', ' and has two thin horns protruding from the sides', ' and has two broad horns protruding from the top', ' and has two broad horns protruding from the sides'];
  const nm16 = ['short', 'long', 'tall', 'small', 'low', 'average'];
  const nm17 = ['muscular', 'broad', 'thin', 'skinny', 'lean', 'fat', 'slender', 'bulky', 'chunky', 'hefty', 'athletic', 'stout', 'brawny'];
  const nm18 = ['stands straight', 'is slightly hunched over', 'is hunched over', 'stands straight'];
  const nm19 = ['long', 'thick', 'short', 'broad', 'average', 'thin', 'lean'];
  const nm20 = ['dangle', 'hang', 'rest'];
  const nm21 = ['small', 'gentle', 'graceful', 'large', 'thin', 'narrow', 'wide', 'broad'];
  const nm22 = ['long', 'thick', 'thin', 'short', 'stubby', 'small', 'curvy'];
  const nm23 = ['normal', 'long', 'sharp', 'claw-like', 'dull', 'thin', 'pointy', 'broad'];
  const nm24 = ['long', 'muscular', 'broad', 'short', 'small', 'tall', 'wide', 'lean', 'thin', 'skinny'];
  const nm25 = ['stand straight', 'are slightly bent', 'are bent', 'stand straight'];
  const nm26 = ['large', 'broad', 'small', 'short', 'wide', 'big', 'hairy', 'flat'];
  const nm27 = ['short fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'coarse fur', 'thick fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'small scales', 'thick skin', 'thick scales'];
  const nm28 = ['broader than', 'narrower than', 'about the same width as'];
  const nm29 = ['', '', '', '', '', '', '', '', '', '', '', '', ', from which a long tail sways back and forth', ', from which a short tail sways back and forth', ', from which a broad tail sways back and forth', ', from which a thin tail sways back and forth', ', from which a small tail sways back and forth', ', from which a large tail sways back and forth', ', from which a narrow tail sways back and forth'];
  const nm34 = ['narrow', 'wide', 'broad', 'large', 'thin', 'deep', 'huge', 'bony', 'scaly', 'eerie', 'slimy', 'bulging', 'enormous', 'giant', 'tiny'];
  const nm35 = ['big', 'broad', 'crooked', 'flat', 'gentle', 'large', 'narrow', 'pig-like', 'pointy', 'round', 'short', 'small', 'tiny', 'wide', 'barely existing', 'snake-like', 'reptilian', 'bony', 'spiky', 'hollow', 'bent', 'sharp', 'hooked', 'thin', 'narrow'];
  const nm36 = ['narrow', 'large', 'wide', 'long', 'shallow', 'deep', 'normal', 'small', 'huge', 'massive', 'tiny', 'giant', 'overbite', 'underbite', 'enormous'];
  const nm37 = ['sly', 'shy', 'wide', 'happy', 'gentle', 'creepy', 'brittle', 'gummy', 'lazy', 'sardonic', 'thin'];
  const nm38 = ['rows upon rows of small teeth', 'rows upon rows of teeth', 'two large fangs', 'two small fangs', 'two large canines', 'two small canines', 'rows of eerie looking teeth', 'several rows of sharp teeth', 'monstrous teeth', 'curved fangs', 'rows of crooked teeth', 'rows of dull teeth', 'only a few teeth here and there', 'rows of huge teeth', 'several huge dull teeth', 'several huge sharp teeth', 'several large broken teeth', 'rows of broken teeth', 'rows of shark-like teeth'];
  const nm39 = ['flat', 'broad', 'thin', 'long', 'wide', 'small', 'large', 'very long', 'forked', 'huge', 'coarse', 'slimy'];
  const nm40 = ['Short', 'Long', 'Narrow', 'Wide', 'Broad', 'Large', 'Small', 'Thin', 'Huge', 'Enormous', 'Tiny', 'Massive'];
  const nm41 = ['pointy', 'round', 'bent', 'squared', 'fan-like', 'spiky', 'bony', 'warped', 'hanging', 'flappy', 'stubby', 'wrinkled', 'jagged'];
  const nm42 = ['long', 'short', 'average', 'small', 'large', 'huge', 'tiny', 'massive'];
  const nm43 = ['narrow', 'wide', 'thin', 'broad', 'rounded', 'squared', 'pointy', 'oval', 'angular', 'wrinkled', 'lean', 'bony', 'triangular'];
  const nm44 = ['long hairs', 'coarse hairs', 'short hairs', 'rows of small horns', 'rows of small spikes', 'small tentacles', 'thin hair-like tentacles', 'bony ridges', 'bony spikes', 'web-like fans', 'tiny hairs', 'tattoo-like markings', 'scar-like carvings', 'soft hair', 'scaly ridges'];
  const nm45 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ' and has two small horns protruding from the top', ' and has two small horns protruding from the sides', ' and has two curved horns protruding from the top', ' and has two curved horns protruding from the sides', ' and has two stubby horns protruding from the top', ' and has two stubby horns protruding from the sides', ' and has two thin horns protruding from the top', ' and has two thin horns protruding from the sides', ' and has two broad horns protruding from the top', ' and has two broad horns protruding from the sides', ' and has two large tentacles protruding from the top', ' and has two large tentacles protruding from the sides', ' and has two large antlers protruding from the top', ' and has two large antlers protruding from the sides', ' and has two bony spikes protruding from the top', ' and has two bony spikes protruding from the sides', ' and has two huge horns protruding from the top', ' and has two huge horns protruding from the sides', ' and has two small tentacles protruding from the top', ' and has two small tentacles protruding from the sides', ' and has two small antlers protruding from the top', ' and has two small antlers protruding from the sides', ' and has several bony spikes protruding from the top', ' and has several bony spikes protruding from the sides', ' and has several large tentacles protruding from the top', ' and has several large tentacles protruding from the sides'];
  const nm49 = ['long', 'thick', 'short', 'broad', 'average', 'thin', 'lean'];
  const nm50 = ['arms', 'tentacle-like arms', 'bony arms', 'almost branch-like arms', 'stone-like arms', 'fleshy arms', 'warping arms', 'crooked arms'];
  const nm51 = ['small', 'large', 'thin', 'narrow', 'wide', 'broad', 'bony', 'webbed', 'tentacle-like', 'claw-like', 'bent', 'crooked', 'massive', 'huge', 'tiny', 'stone-like'];
  const nm52 = ['long', 'thick', 'thin', 'short', 'stubby', 'small', 'curvy', 'bent', 'very long', 'sharp nailed', 'long nailed', 'claw-like'];
  const nm53 = ['6', '8', '10', '12'];
  const nm54 = ['long', 'muscular', 'broad', 'short', 'small', 'wide', 'lean', 'thin', 'skinny', 'crooked'];
  const nm55 = ['feet', 'hooves', 'feet', 'paws'];
  const nm57 = ['short fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'coarse fur', 'thick fur', 'coarse skin', 'smooth skin', 'soft skin', 'delicate skin', 'small scales', 'thick skin', 'thick scales', 'slime', 'slimy scales', 'large scales', 'rock-like scales', 'fluffy fur', 'nasty skin', 'wood-like skin', 'small feathers', 'large feathers', 'feathers', 'oily skin', 'armor-like scales', 'large armor-like scales'];
  const nm59 = ['', '', '', '', '', '', '', '', '', '', '', '', ', from which a long tail sways back and forth', ', from which a short tail sways back and forth', ', from which a broad tail sways back and forth', ', from which a thin tail sways back and forth', ', from which a small tail sways back and forth', ', from which a large tail sways back and forth', ', from which a narrow tail sways back and forth', ', from which a massive tail sways back and forth', ', from which a bony tail sways back and forth', ', from which a spiked tail sways back and forth', ', from which a tentacle-like tail grows', ', from which a coarse tail sways back and forth', ', from which a split tail sways back and forth', ', from which a forked tail sways back and forth', ', from which a bladed tail sways back and forth', ', from which a fanned tail sways back and forth'];
  if (type === 1) {
    var rnd1 = Math.floor(Math.random() * nm1.length);
    var rnd2 = Math.floor(Math.random() * nm2.length);
    var rnd3 = Math.floor(Math.random() * nm3.length);
    const rnd34 = Math.floor(Math.random() * nm34.length);
    const rnd35 = Math.floor(Math.random() * nm35.length);
    const rnd36 = Math.floor(Math.random() * nm36.length);
    const rnd37 = Math.floor(Math.random() * nm37.length);
    const rnd38 = Math.floor(Math.random() * nm38.length);
    const rnd39 = Math.floor(Math.random() * nm39.length);
    const rnd40 = Math.floor(Math.random() * nm40.length);
    const rnd41 = Math.floor(Math.random() * nm41.length);
    const rnd42 = Math.floor(Math.random() * nm42.length);
    const rnd43 = Math.floor(Math.random() * nm43.length);
    const rnd44 = Math.floor(Math.random() * nm44.length);
    const rnd45 = Math.floor(Math.random() * nm45.length);
    var rnd16 = Math.floor(Math.random() * nm16.length);
    var rnd17 = Math.floor(Math.random() * nm17.length);
    var rnd18 = Math.floor(Math.random() * nm18.length);
    const rnd49 = Math.floor(Math.random() * nm49.length);
    const rnd50 = Math.floor(Math.random() * nm50.length);
    var rnd20 = Math.floor(Math.random() * nm20.length);
    const rnd51 = Math.floor(Math.random() * nm51.length);
    const rnd52 = Math.floor(Math.random() * nm52.length);
    const rnd53 = Math.floor(Math.random() * nm53.length);
    const rnd54 = Math.floor(Math.random() * nm54.length);
    var rnd24 = Math.floor(Math.random() * nm24.length);
    var rnd25 = Math.floor(Math.random() * nm25.length);
    const rnd55 = Math.floor(Math.random() * nm55.length);
    const rnd57 = Math.floor(Math.random() * nm57.length);
    var rnd28 = Math.floor(Math.random() * nm28.length);
    const rnd59 = Math.floor(Math.random() * nm59.length);
    var name = `${nm1[rnd1]} ${nm2[rnd2]} eyes ${nm3[rnd3]} their surroundings from their ${nm34[rnd34]} sockets. A ${nm35[rnd35]} nose rests below, but it's the ${nm36[rnd36]} mouth below that takes all the attention. A ${nm37[rnd37]} smile reveals ${nm38[rnd38]} and a ${nm39[rnd39]} tongue.`;
    var name2 = `${nm40[rnd40]} ${nm41[rnd41]} ears sit on each side of its ${nm42[rnd42]}, ${nm43[rnd43]} head, which itself is covered in ${nm44[rnd44]}${nm45[rnd45]}.`;
    var name3 = `Its ${nm16[rnd16]} ${nm17[rnd17]} body ${nm18[rnd18]}. Two ${nm49[rnd49]} ${nm50[rnd50]} ${nm20[rnd20]} at its sides and end in ${nm51[rnd51]} hands with ${nm52[rnd52]} fingers, of which it has ${nm53[rnd53]} in total.`;
    var name4 = `Its legs are ${nm24[rnd24]} and ${nm25[rnd25]}, each ending in ${nm54[rnd54]} ${nm55[rnd55]}.`;
    var name5 = `Its body is covered in ${nm57[rnd57]} and its shoulders are ${nm28[rnd28]} its pelvis${nm59[rnd59]}.`;
  } else {
    var rnd1 = Math.floor(Math.random() * nm1.length);
    var rnd2 = Math.floor(Math.random() * nm2.length);
    var rnd3 = Math.floor(Math.random() * nm3.length);
    const rnd4 = Math.floor(Math.random() * nm4.length);
    const rnd5 = Math.floor(Math.random() * nm5.length);
    const rnd6 = Math.floor(Math.random() * nm6.length);
    const rnd7 = Math.floor(Math.random() * nm7.length);
    const rnd8 = Math.floor(Math.random() * nm8.length);
    const rnd9 = Math.floor(Math.random() * nm9.length);
    const rnd10 = Math.floor(Math.random() * nm10.length);
    const rnd11 = Math.floor(Math.random() * nm11.length);
    const rnd12 = Math.floor(Math.random() * nm12.length);
    const rnd13 = Math.floor(Math.random() * nm13.length);
    const rnd14 = Math.floor(Math.random() * nm14.length);
    const rnd15 = Math.floor(Math.random() * nm15.length);
    var rnd16 = Math.floor(Math.random() * nm16.length);
    var rnd17 = Math.floor(Math.random() * nm17.length);
    var rnd18 = Math.floor(Math.random() * nm18.length);
    const rnd19 = Math.floor(Math.random() * nm19.length);
    var rnd20 = Math.floor(Math.random() * nm20.length);
    const rnd21 = Math.floor(Math.random() * nm21.length);
    const rnd22 = Math.floor(Math.random() * nm22.length);
    const rnd23 = Math.floor(Math.random() * nm23.length);
    var rnd24 = Math.floor(Math.random() * nm24.length);
    var rnd25 = Math.floor(Math.random() * nm25.length);
    const rnd26 = Math.floor(Math.random() * nm26.length);
    const rnd27 = Math.floor(Math.random() * nm27.length);
    var rnd28 = Math.floor(Math.random() * nm28.length);
    const rnd29 = Math.floor(Math.random() * nm29.length);
    var name = `${nm1[rnd1]} ${nm2[rnd2]} eyes ${nm3[rnd3]} their surroundings from their ${nm4[rnd4]} sockets. A ${nm5[rnd5]} nose rests below, but it's the ${nm6[rnd6]} mouth below that takes all the attention. A ${nm7[rnd7]} smile reveals two ${nm8[rnd8]} canines and a ${nm9[rnd9]} tongue.`;
    var name2 = `${nm10[rnd10]} ${nm11[rnd11]} ears sit on each side of its ${nm12[rnd12]}, ${nm13[rnd13]} head, which itself is covered in ${nm14[rnd14]}${nm15[rnd15]} hair.`;
    var name3 = `Its ${nm16[rnd16]} ${nm17[rnd17]} body ${nm18[rnd18]}. Two ${nm19[rnd19]} arms ${nm20[rnd20]} at its sides and end in ${nm21[rnd21]} hands with ${nm22[rnd22]} fingers, each with ${nm23[rnd23]} nails.`;
    var name4 = `Its legs are ${nm24[rnd24]} and ${nm25[rnd25]}, each ending in ${nm26[rnd26]} feet.`;
    var name5 = `Its body is covered in ${nm27[rnd27]} and its shoulders are ${nm28[rnd28]} its pelvis${nm29[rnd29]}.`;
  }
  let result = '';
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
  return result;
}
