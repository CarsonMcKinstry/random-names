export default function dragons() {
  let rnd;
  let rnd2;
  let names;
  const nm1 = ['Stiria', 'Mirianth', 'Venia', 'Gawaine', 'Loivissa', 'Slytha', 'Garuga', 'Erisdar', 'Tharos', 'Avantador', 'Leomaris', 'Xalanth', 'Valstrath', 'Erfolg', 'Vita', 'Igirre', 'Rthyin', 'Cithyth', 'Nighith', 'Baliarth', 'Bassilth', 'Bayorth', 'Bazzalth', 'Bedelth', 'Benarth', 'Bessonth', 'Bevurth', 'Birroth', 'Bredolth', 'Brynioth', 'Cadreinth', 'Camroth', 'Carinth', 'Carith', 'Carolth', 'Caydranth', 'Cennuth', 'Cenolth', 'Cerioth', 'Chelianth', 'Chenth', 'Cheselth', 'Ciamath', 'Cinolth', 'Colrath', 'Cordath', 'Cordenth', 'Corduth', 'Corinth', 'Culdranth', 'Culdreth', 'Daganth', 'Dalbinth', 'Dallarth', 'Dammath', 'Darilth', 'Darlath', 'Darmith', 'Dazenth', 'Deneth', 'Dennenth', 'Derolth', 'Deventh', 'Doranth', 'Dulanth', 'Emelth', 'Feranth', 'Ferreth', 'Firroth', 'Gavarenth', 'Ginarth', 'Heralth', 'Herinth', 'Honeth', 'Inilth', 'Inioth', 'Iraneth', 'Ith', 'Jeruth', 'Jevith', 'Jevrath', 'Jielarth', 'Jielith', 'Kaleth', 'Kalinth', 'Kalurth', 'Kamirth', 'Kayelinth', 'Kayerith', 'Kelarth', 'Keleth', 'Kelirth', 'Kelorth', 'Kementh', 'Kemoth', 'Kenith', 'Kennioth', 'Keselth', 'Kevalth', 'Kilarth', 'Kimerth', 'Kindralth', 'Kisenth', 'Kovinth', 'Kyloth', 'Leneth', 'Lennalth', 'Liorenth', 'Lioth', 'Lissoth', 'Loganth', 'Lusarth', 'Lusolth', 'Lyrroth', 'Lyth', 'Malirth', 'Malliath', 'Marganth', 'Maylanth', 'Medolth', 'Medreth', 'Mekarth', 'Mersorth', 'Mersoth', 'Mesanth', 'Mesarth', 'Meseth', 'Mesianth', 'Messenth', 'Mianth', 'Miath', 'Milenth', 'Milorth', 'Mirelth', 'Mirroth', 'Mirsoth', 'Mnerolth', 'Mneventh', 'Morelth', 'Morenth', 'Mylanth', 'Naloth', 'Narolth', 'Nelarth', 'Nerroth', 'Nesenth', 'Nessonth', 'Nevalth', 'Nevith', 'Nilanth', 'Ninarth', 'Niruth', 'Norlanth', 'Norruth', 'Parath', 'Parinath', 'Peddrenth', 'Perenth', 'Perrath', 'Porath', 'Porrelth', 'Quenth', 'Quinarth', 'Quoloth', 'Ralarth', 'Rallinth', 'Rasenth', 'Razeth', 'Resalth', 'Rhodrolth', 'Rhosalth', 'Rinnenth', 'Roluth', 'Ronnuth', 'Rugarth', 'Rumalth', 'Rusorth', 'Rylarth', 'Ryluth', 'Salanth', 'Seddrinth', 'Seralth', 'Serelath', 'Shalerth', 'Shamilth', 'Shevorth', 'Shorolth', 'Shuvirth', 'Sirath', 'Sivath', 'Sonneth', 'Soreth', 'Sorrilth', 'Sorth', 'Sorventh', 'Stevarth', 'Sudreth', 'Sunnulth', 'Syralth', 'Syrilth', 'Syrreth', 'Syrriolth', 'Taenth', 'Taevarth', 'Talath', 'Talurth', 'Tamenth', 'Tamolth', 'Tanulth', 'Tavorth', 'Tavreth', 'Tavrinth', 'Tavurth', 'Tebinth', 'Teminth', 'Tenelth', 'Teovanth', 'Tesselth', 'Tessith', 'Tezoth', 'Tielenth', 'Tiemeth', 'Tiolth', 'Tobalth', 'Tuelonth', 'Tuesirth', 'Tyrath', 'Vanlith', 'Vellath', 'Verath', 'Verioth', 'Vezoth', 'Vinarth', 'Visalth', 'Vollenth', 'Vorlianth', 'Zerelth', 'Zinnath', 'Zoralth', 'Jura', 'Hirador', 'Fundor', 'Galzra', 'Briam', 'Ohen', 'Gretiem', 'Beroan', 'Roslarb', 'Saphira', 'Raziel', 'Daenerys', 'Barioth', 'Livjatan', 'Lagiocrus', 'Avrae', 'Rhaegos', 'Barroth', 'Umbaroth', 'Ohm', 'Hudraer', 'Nveryll', 'Nveryioth', 'Apophis', 'Askook', 'Ator', 'Favnir', 'Tulvir', 'Franae', 'Niadhogr'];
  const nm2 = ['the Nocturnal', 'the Protective', 'the Clever', 'the Bright', 'the Dark', 'the Dark One', 'the Dark', 'the Eternal', 'the Firestarter', 'the Eternal One', 'the Calm', 'the Gentle', 'the Redeemer', 'the Champion', 'the Evil One', 'the Chosen', 'the Great', 'the Kind', 'the Fierce', 'the Strong', 'the Tiran', 'the Dragonlord', 'the Warrior', 'the Barbarian', 'the Tall', 'the Magnificent', 'the Clean', 'the Adorable', 'the Gifted', 'the Tender', 'the Powerful One', 'the Gifted One', 'the Powerful', 'the Black', 'the White', 'the White One', 'the Careful', 'the Clumsy One', 'the Grumpy', 'the Jealous One', 'the Mysterious', 'the Mysterious One', 'the Scary', 'the Scary One', 'the Brave', 'the Victorious', 'the Skinny One', 'the Mammoth', 'the Puny', 'the Quiet', 'the Voiceless', 'the Loud', 'the Voiceless One', 'the Fast One', 'the Swift', 'the Young One', 'the Youngling', 'the Slow', 'the Creep', 'the Warm', 'Warmheart', 'Braveheart', 'Gentleheart', 'the Strong Minded', 'the Stubborn', 'Firebreath', 'Icebreath', 'the Squeeler', 'Champion of Dragons', 'Eternal Fire', 'Gentle Mind', 'Longtail', 'Redeemer of Men', 'Protector of the Weak', 'Protector of the Forest', 'Protector of the Sky', 'Lord of the Skies', 'Champion of the Skies', 'Champion of Men', 'Lord of Fire', 'Lord of Ice', 'Lord of the Red', 'Lord of the Black', 'Lord of the White', 'Lord of the Blue', 'Lord of the Green', 'Lord of the Yellow', 'Lord of the Brown', 'Champion of the Red', 'Champion of the White', 'Champion of the Black', 'Champion of the Blue', 'Champion of the Yellow', 'Champion of the Brown', 'Champion of the Green', 'Protector of Creatures', 'Protector of Life', 'Giver of Life', 'Bringer of Death', 'the Deathlord', 'the Dead', 'Destroyer of Life', 'Destroyer of Men', 'Eater of Sheep', 'Eater of All', 'the Hungry', 'Eater of Bunnies', 'the Bunny Killer', 'the Rabbit Slayer', 'the Taker of Life', 'the Insane', 'the Life Giver'];
  const i = Math.floor(Math.random() * 10);
  {
    rnd = Math.floor(Math.random() * nm1.length);
    if (i < 5) {
      names = nm1[rnd];
    } else {
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm1[rnd]} ${nm2[rnd2]}`;
    }
    return names;
  }
}
