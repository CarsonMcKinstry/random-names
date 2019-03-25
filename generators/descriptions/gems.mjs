import sample from 'lodash/sample';

export default function gems() {
  const nm1 = ['Agate', 'Agate Geode', 'Alexandrite', 'Almandine Garnet', 'Amazonite', 'Amethyst', 'Ametrine', 'Ammolite', 'Andalusite', 'Apatite', 'Aquamarine', 'Aventurine', 'Axinite', 'Beryl', 'Bloodstone', 'Boulder Opal', 'Calcite', 'Carnelian', 'Cassiterite', 'Charoite', 'Chrome Diopside', 'Citrine', 'Clinohumite', 'Diamond', 'Emerald', 'Enstatite', 'Fire Agate', 'Fire Opal', 'Fluorite', 'Hematite', 'Hiddenite', 'Howlite', 'Iolite', 'Jasper', 'Kyanite', 'Lapis Lazuli', 'Malachite', 'Mali Garnet', 'Melanite', 'Moldavite', 'Moonstone', 'Morganite', 'Moss Opal', 'Nuummite', 'Obsidian', 'Onyx', 'Opal', 'Peridot', 'Prehnite', 'Pyrope Garnet', 'Quartz', 'Rainbow Moonstone', 'Rainbow Pyrite', 'Rhodochrosite', 'Rhodolite Garnet', 'Rhodonite', 'Rose Quartz', 'Ruby', 'Sapphire', 'Scapolite', 'Seraphinite', 'Serpentine', 'Snowflake Obsidian', 'Sodalite', 'Sphalerite', 'Sphene', 'Spinel', 'Star Diopside', 'Star Garnet', 'Star Ruby', 'Star Sapphire', 'Sugilite', 'Sunstone', 'Tanzanite', 'Tiger\'s Eye', 'Topaz', 'Tourmaline', 'Turquoise', 'Verdite', 'Zircon'];
  const nm2 = ['an antique cushion', 'a baguette', 'a brilliant', 'a briolette', 'a cabochon', 'a cushion', 'an emerald', 'a heart', 'a kite', 'a marquise', 'an octagon', 'an oval', 'a pear', 'a princess', 'a radiant', 'a round', 'a royal', 'a square', 'a triangle', 'a trillion'];
  const nm3 = ['bean', 'blueberry', 'fig', 'fist', 'grape', 'hazelnut', 'kumquat', 'lemon', 'lentil', 'lime', 'pea', 'peanut', 'strawberry', 'walnut'];
  const nm4 = ['average', 'decent', 'excellent', 'fair', 'fairly decent', 'fairly poor', 'fairly rough', 'fine', 'great', 'inferior', 'magnificent', 'mediocre', 'near flawless', 'outstanding', 'poor', 'premium', 'presentable', 'pristine', 'reasonable', 'rough', 'rugged', 'superb', 'supreme', 'terrific'];
  const nm5 = ['barely sought after', 'decently popular', 'fairly popular', 'in average demand', 'in decent demand', 'in fairly high demand', 'in low demand', 'in very high demand', 'not that popular', 'not very sought after', 'often ignored', 'often in high demand', 'often quite popular', 'quite unpopular', 'rarely sought after'];
  const nm6 = ['an incredibly common', 'a very common', 'a fairly common', 'a fairly uncommon', 'a quite uncommon', 'a very uncommon', 'a fairly rare', 'a quite rare', 'a very rare', 'an incredibly rare'];
  const nm7 = ['amplifying', 'augmentative', 'controlling', 'cooling', 'defensive', 'desirable', 'diminishing', 'disabling', 'electric', 'elemental', 'emotional', 'enhancing', 'enlarging', 'fiery', 'focusing', 'fortunate', 'healing', 'icy', 'invigorating', 'life', 'light', 'mending', 'potent', 'protective', 'rejuvenating', 'seductive', 'shady', 'strengthening', 'tenacious', 'warming'];
  const nm8 = ['defensive weapon', 'offensive weapon', 'defensive spell focus', 'offensive spell focus', 'beneficial spell focus', 'offensive weapon enhancement', 'defensive weapon enhancement', 'defensive spell focus enhancement', 'offensive spell focus enhancement', 'beneficial spell focus enhancement', 'defensive artifact', 'offensive artifact', 'defensive artifact enhancement', 'offensive artifact enhancement', 'defensive jewelry', 'offensive jewelry', 'defensive jewelry enhancement', 'offensive jewelry enhancement'];
  const name = `This ${sample(nm1)} with ${sample(nm2)} cut and the size of a ${sample(nm3)} is in ${sample(nm4)} condition. These gems are ${sample(nm5)}, but they're ${sample(nm6)} gemstone species.`;
  const name2 = `It's said these gems contain ${sample(nm7)} properties which make for a great ${sample(nm8)}.`;
  const name3 = '-----------------------------------------------------------------------------------------------------------------------------';
  const name4 = `This ${sample(nm1)} with ${sample(nm2)} cut and the size of a ${sample(nm3)} is in ${sample(nm4)} condition. These gems are ${sample(nm5)}, but they're ${sample(nm6)} gemstone species.`;
  const name5 = `It's said these gems contain ${sample(nm7)} properties which make for a great ${sample(nm8)}.`;
  let result = '';
  result += name;
  result += '\n';
  result += name2;
  result += '\n';
  result += '\n';
  result += name3;
  result += '\n';
  result += '\n';
  result += name4;
  result += '\n';
  result += name5;
  return result;
}
