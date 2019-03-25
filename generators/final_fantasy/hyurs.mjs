export default function hyurs() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Acwald', 'Acwuld', 'Acwulf', 'Adalbert', 'Adelard', 'Aegheard',
    'Aelbert', 'Aelfgar', 'Aelfred', 'Aelfric', 'Aelred', 'Aelwin',
    'Aethelgar', 'Agilbert', 'Ailmar', 'Ailwin', 'Albold', 'Alcred', 'Alden',
    'Aldhelm', 'Aldhere', 'Aldhun', 'Aldred', 'Aldwyn', 'Alfar', 'Alfric',
    'Algar', 'Alhmund', 'Allric', 'Alnod', 'Alnoth', 'Alred', 'Alric',
    'Alward', 'Alwin', 'Alwold', 'Alwyn', 'Andhun', 'Ashwin', 'Aylwin',
    'Badulf', 'Baldred', 'Baldric', 'Baldwin', 'Baldwulf', 'Balther',
    'Beagmund', 'Bedric', 'Bedwig', 'Beorhtmund', 'Beornhelm', 'Beornmod',
    'Beric', 'Bermund', 'Bernulf', 'Berthelm', 'Berthun', 'Bertram',
    'Bertred', 'Bertulf', 'Bertwald', 'Berwulf', 'Berwyn', 'Birstan',
    'Blacwin', 'Botulf', 'Botwine', 'Botwulf', 'Brictric', 'Brifard',
    'Brunheard', 'Bruning', 'Brunloc', 'Brunweard', 'Brunwulf', 'Brychan',
    'Bryning', 'Brynstan', 'Burchard', 'Burgred', 'Byrnhorn', 'Cenred',
    'Cenwalh', 'Cenwulf', 'Ceolmund', 'Ceolred', 'Coenred', 'Coleman',
    'Colman', 'Cuthwin', 'Cynebald', 'Cynebil', 'Cynemund', 'Cynric',
    'Darwin', 'Delwyn', 'Denewulf', 'Deormod', 'Deormund', 'Derman',
    'Duceman', 'Dunnere', 'Dunstan', 'Eadbald', 'Eadbeald', 'Eadbert',
    'Eadger', 'Eadmer', 'Eadmod', 'Eadmund', 'Eadnod', 'Eadred', 'Eadric',
    'Eadwald', 'Eadward', 'Eadweald', 'Eadweard', 'Eadwig', 'Eadwin',
    'Eadwine', 'Eadwold', 'Eadwyn', 'Ealdhelm', 'Ealdhere', 'Ealdred',
    'Ealdwin', 'Ealric', 'Eanlac', 'Earnmund', 'Ebrard', 'Ecgmund', 'Eddard',
    'Edric', 'Edward', 'Edwyn', 'Egbert', 'Egbin', 'Einhard', 'Ekbert',
    'Elstan', 'Eluard', 'Eluric', 'Elwin', 'Elwyn', 'Engelard', 'Eohric',
    'Eomer', 'Eric', 'Erwald', 'Erwin', 'Esegar', 'Estmar', 'Estmund',
    'Everard', 'Ewald', 'Eward', 'Fordwin', 'Forwin', 'Fremund', 'Fromund',
    'Garmund', 'Gerbert', 'Germund', 'Gladwin', 'Godbert', 'Godric',
    'Godwald', 'Godwin', 'Godwyn', 'Goldwin', 'Goodwin', 'Graham', 'Grimbald',
    'Gudram', 'Haeferic', 'Harding', 'Hardred', 'Hardwin', 'Harhold',
    'Harold', 'Heahmund', 'Herbert', 'Herebert', 'Hereward', 'Heribert',
    'Herimann', 'Hering', 'Herrig', 'Herward', 'Hethor', 'Hewald', 'Hibald',
    'Hiroc', 'Holbert', 'Horik', 'Hrothgar', 'Hubert', 'Hughor', 'Humbert',
    'Hunwald', 'Hybald', 'Jambert', 'Jurmin', 'Kenelm', 'Kennald', 'Kenward',
    'Lambert', 'Lambin', 'Leodwald', 'Leofred', 'Leowald', 'Lindhard',
    'Maerec', 'Maerheard', 'Maldred', 'Medwin', 'Merewald', 'Mervin',
    'Morcar', 'Norbert', 'Nordman', 'Norman', 'Northman', 'Odard', 'Oeric',
    'Ordgar', 'Ordric', 'Osbald', 'Osbeorn', 'Osgar', 'Osgood', 'Osmund',
    'Osred', 'Osric', 'Oswin', 'Oswold', 'Oswyn', 'Radbod', 'Randal',
    'Randwulf', 'Redwald', 'Reginald', 'Ribald', 'Robert', 'Roderic',
    'Roderick', 'Rodney', 'Rodolph', 'Roger', 'Romund', 'Rumbald', 'Rumwald',
    'Rumwold', 'Sabert', 'Saebald', 'Saegar', 'Saeward', 'Selwyn', 'Sibert',
    'Sideman', 'Sigbert', 'Siward', 'Teoweald', 'Teowulf', 'Theabul',
    'Theobald', 'Theodgar', 'Theodlac', 'Theodoric', 'Theodric', 'Theodulf',
    'Tilbert', 'Tilman', 'Tilmund', 'Tilwald', 'Torold', 'Trygil', 'Turoc',
    'Turold', 'Walden', 'Waldere', 'Waldwin', 'Wallding', 'Wardric', 'Weland',
    'Weonard', 'Wermund', 'Widmund', 'Wigmund', 'Wilbehrt', 'Wilbeorht',
    'Wilbrord', 'Wilfram', 'Wilhere', 'Wilmaer', 'Wilmund', 'Winstan',
    'Winston', 'Wulgan', 'Wulmar'];
  const nm2 = ['Adalag', 'Adam', 'Aevar', 'Agdi', 'Agnar', 'Alfr', 'Alrek',
    'Alrekr', 'Anlaf', 'Anskar', 'Ardgar', 'Armod', 'Arnaldr', 'Arnar',
    'Arnis', 'Arnkel', 'Arnkell', 'Arnor', 'Arnridr', 'Arnstein', 'Arnvid',
    'Arnvidar', 'Asbiorn', 'Asbjorn', 'Asgrim', 'Askold', 'Asvard', 'Audr',
    'Avaldr', 'Balder', 'Bard', 'Bild', 'Biolan', 'Biolfr', 'Biorn',
    'Bjarkmar', 'Bjolan', 'Bjorn', 'Bodmodr', 'Bodvar', 'Bodvarr', 'Borgar',
    'Brand', 'Broddr', 'Brondolf', 'Dagr', 'Dyri', 'Eddval', 'Egil', 'Egill',
    'Eidr', 'Eilaf', 'Eilif', 'Einar', 'Einarr', 'Emund', 'Erling', 'Erlingr',
    'Eyvind', 'Farulf', 'Fjalar', 'Fjolmod', 'Fjolnir', 'Fridgeir', 'Friggir',
    'Galmr', 'Gardarr', 'Geirmund', 'Geirolf', 'Geirrod', 'Gellir', 'Gilling',
    'Glammad', 'Godfred', 'Godfrid', 'Godmund', 'Godord', 'Gudbrand',
    'Gudmund', 'Gudmundr', 'Gudrod', 'Gunnar', 'Gunnarr', 'Gunnor', 'Guthorm',
    'Hadding', 'Halldor', 'Hallgrim', 'Hallvard', 'Hamund', 'Harald',
    'Havarr', 'Heidrek', 'Heimdall', 'Heimir', 'Helgrim', 'Hemming',
    'Hergrim', 'Hermund', 'Hermundr', 'Hervard', 'Hildir', 'Holmgeir',
    'Hordr', 'Hrani', 'Hromund', 'Hromundr', 'Ingimund', 'Ingimundr',
    'Ingvar', 'Ingvarr', 'Jorund', 'Jorundr', 'Kiaran', 'Kodran', 'Kormak',
    'Leidorf', 'Lodmund', 'Magnus', 'Malcolm', 'Mani', 'Moldan', 'Mord',
    'Nikolas', 'Nikulas', 'Oddmar', 'Ogmund', 'Ogmundr', 'Otkar', 'Ragnald',
    'Ragnar', 'Ragnarr', 'Rennir', 'Runolf', 'Saemund', 'Saemundr', 'Sigfred',
    'Siggurd', 'Sigmund', 'Sigmundr', 'Solmund', 'Solmundr', 'Solvarr',
    'Steinar', 'Steinarr', 'Sveinn', 'Thor', 'Thordar', 'Thordr', 'Thorgil',
    'Thorir', 'Thormod', 'Thormodr', 'Thrand', 'Thrandr', 'Torrad', 'Ulf',
    'Valagnar', 'Valbrandr', 'Valgard', 'Vamod', 'Vandill', 'Vandrad',
    'Varin', 'Vemund', 'Vermund', 'Vermundr', 'Vermunds', 'Vilbradr', 'Volund',
  ];
  const nm3 = ['Adney', 'Aebbe', 'Aedwen', 'Aeschild', 'Agatha', 'Agenilda',
    'Agnes', 'Ailred', 'Akelda', 'Alchfrid', 'Aldreda', 'Alfrun', 'Alfwen',
    'Arild', 'Athilda', 'Begild', 'Begilda', 'Bertrade', 'Beyhild', 'Botild',
    'Botilda', 'Botill', 'Bricheve', 'Bricteva', 'Brictiva', 'Britheva',
    'Brithwen', 'Burwena', 'Burwenna', 'Ceolwynn', 'Cwenburg', 'Cwenburh',
    'Cynehild', 'Cynwise', 'Derehild', 'Eada', 'Eadwine', 'Eadwynn',
    'Ealhild', 'Eangyth', 'Eanswith', 'Eanwin', 'Eawyn', 'Edild', 'Edilda',
    'Edith', 'Edoma', 'Edusa', 'Edwen', 'Emma', 'Engelieth', 'Engelise',
    'Estrid', 'Estrith', 'Everild', 'Everildis', 'Garwynn', 'Gertrude',
    'Gethwine', 'Godelina', 'Goderun', 'Godrun', 'Godwyna', 'Golderyn',
    'Goldyna', 'Gytha', 'Hendina', 'Herewynn', 'Hild', 'Hilda', 'Hildeburg',
    'Hildeburh', 'Hildegard', 'Hildegyth', 'Hildelida', 'Hildelith',
    'Hildilid', 'Hiltrude', 'Hounild', 'Hounilda', 'Hrodwyn', 'Inga',
    'Leofwynn', 'Maerwynn', 'Maethild', 'Mathilda', 'Matilda', 'Mildburh',
    'Mildgyth', 'Mildoina', 'Mildrith', 'Mildthryth', 'Mindred', 'Rafenild',
    'Ricola', 'Rimilda', 'Rimilde', 'Ronilda', 'Roswitha', 'Rowena',
    'Saegyth', 'Saehild', 'Saewara', 'Saewynn', 'Sidwell', 'Somerhild',
    'Somerild', 'Stangyth', 'Sunnild', 'Tidhild', 'Tonild', 'Waerburh',
    'Waerhild', 'Wendreda', 'Wenyld', 'Weynild'];
  const nm4 = ['Aegileif', 'Aesa', 'Agnes', 'Agnete', 'Aldis', 'Alfhild',
    'Amalie', 'Andrea', 'Anette', 'Anna', 'Anne', 'Arnora', 'Asa', 'Ashildr',
    'Asta', 'Astra', 'Astri', 'Astrid', 'Asvor', 'Bente', 'Bera', 'Bergdis',
    'Berit', 'Birna', 'Camilla', 'Caroline', 'Cathrine', 'Catrine',
    'Christine', 'Dalla', 'Danica', 'Dorte', 'Eir', 'Elina', 'Elisa', 'Elise',
    'Ellen', 'Elsa', 'Emilie', 'Emma', 'Eona', 'Eydis', 'Eyja', 'Finna',
    'Freya', 'Frida', 'Geirhildr', 'Geirny', 'Gerd', 'Geror', 'Grima',
    'Gunnhild', 'Gunnhildr', 'Guony', 'Haldis', 'Halla', 'Hallbera',
    'Halldis', 'Halldora', 'Hanna', 'Hannah', 'Hanne', 'Hedda', 'Hege',
    'Heidi', 'Heior', 'Helene', 'Helga', 'Herdis', 'Hilda', 'Hilde',
    'Hildigunnr', 'Hlif', 'Ida', 'Inga', 'Ingeborg', 'Inger', 'Ingibjorg',
    'Ingileif', 'Ingri', 'Ingrid', 'Ingrior', 'Ingunn', 'Ingvil', 'Ingvild',
    'Ingvill', 'Ingvoldr', 'Janne', 'Jenny', 'Jodis', 'Johanna', 'Jora',
    'Josefina', 'Julie', 'Kaia', 'Kamilla', 'Kaolin', 'Karen', 'Kari',
    'Karolina', 'Karoline', 'Katie', 'Katla', 'Katrine', 'Kirsten',
    'Kolfinna', 'Kolgrima', 'Kristin', 'Kristina', 'Kristine', 'Lene',
    'Lisbet', 'Malena', 'Malin', 'Maren', 'Margit', 'Margrete', 'Mari',
    'Maria', 'Marie', 'Marit', 'Marta', 'Marte', 'Marthe', 'Marthine',
    'Martine', 'Mary', 'Matilda', 'Myrun', 'Nina', 'Niobjorg', 'Nora', 'Oda',
    'Oddleif', 'Olava', 'Olina', 'Pernilla', 'Petra', 'Raforta', 'Signy',
    'Svana', 'Thora', 'Vedis', 'Vilborg', 'Yngvildr'];
  const nm5 = ['Archer', 'Bacchus', 'Bailey', 'Barber', 'Barker', 'Baxter',
    'Bekker', 'Bender', 'Berger', 'Blacke', 'Boatwright', 'Boulder',
    'Brewster', 'Browne', 'Butler', 'Campion', 'Cantrell', 'Carpenter',
    'Carrin', 'Carter', 'Cartwright', 'Carver', 'Cater', 'Century', 'Chafer',
    'Chaffer', 'Chalker', 'Challender', 'Chamberlain', 'Chambers',
    'Cheesewright', 'Cherrier', 'Clark', 'Cleaver', 'Coldren', 'Collier',
    'Conner', 'Cook', 'Cooper', 'Cotter', 'Crowther', 'Dexter', 'Drage',
    'Draper', 'Dyster', 'Farrar', 'Faulkner', 'Fisher', 'Fiske', 'Flax',
    'Fletcher', 'Foal', 'Forest', 'Forester', 'Forrest', 'Foster', 'Fowler',
    'Frobisher', 'Fuller', 'Gage', 'Gardiner', 'Gardner', 'Glover', 'Graves',
    'Harper', 'Hayward', 'Heard', 'Hill', 'Hinman', 'Hogg', 'Hooper',
    'Hunter', 'Inman', 'Kantor', 'Kellogg', 'Kisser', 'Lander', 'Lorimer',
    'Lush', 'Machin', 'Marsh', 'Mercer', 'Miller', 'Mills', 'Milner',
    'Mulliner', 'Nader', 'Naylor', 'Parker', 'Potter', 'Proctor', 'Provost',
    'Purcell', 'River', 'Rivers', 'Rock', 'Rocker', 'Ryder', 'Sadler',
    'Salter', 'Sawyer', 'Scully', 'Singer', 'Soppner', 'Spencer', 'Spicer',
    'Spittle', 'Stanier', 'Stone', 'Stringer', 'Tabor', 'Tanne', 'Tanner',
    'Tasker', 'Taverner', 'Taylor', 'Thatcher', 'Tiller', 'Todd', 'Toller',
    'Trainer', 'Tranter', 'Trapper', 'Travers', 'Trinder', 'Trotter',
    'Tucker', 'Turner', 'Tyler', 'Tyrer', 'Voss', 'Walker', 'Waller', 'Warf',
    'Warner', 'Warrer', 'Webster', 'Woodward', 'Wright'];
  const nm6 = ['Anger', 'Armstrong', 'Arrow', 'Bash', 'Basher', 'Battleaxe',
    'Battleblade', 'Battlecry', 'Battlefist', 'Battlefury', 'Bearclaw',
    'Bearpaw', 'Beast', 'Behemoth', 'Blacke', 'Blizzard', 'Blood',
    'Bloodchaser', 'Bloodfury', 'Bloodlust', 'Bloodseeker', 'Boarsblood',
    'Brawl', 'Brawn', 'Breaker', 'Bullseye', 'Burne', 'Butcher', 'Cleaver',
    'Courage', 'Destroyer', 'Doome', 'Ferocity', 'Fiend', 'Fiery', 'Furor',
    'Fury', 'Grande', 'Grandscream', 'Heart', 'Hellfist', 'Hellfury',
    'Hornblade', 'Horne', 'Hunter', 'Ironbash', 'Ironfist', 'Ironsmash',
    'Jackal', 'Lionheart', 'Lionroar', 'Longblade', 'Might', 'Mighte',
    'Mightyblade', 'Nemesis', 'Piercer', 'Savage', 'Shade', 'Shadow',
    'Shadowstrike', 'Sharpblade', 'Shatterfist', 'Slayer', 'Smokefist',
    'Stalker', 'Stalwart', 'Steelsmash', 'Stonefist', 'Stonemaul',
    'Stormcaller', 'Storme', 'Stout', 'Strength', 'Striker', 'Strong',
    'Strongarm', 'Strongaxe', 'Strongblade', 'Stronge', 'Strongfist',
    'Swiftaxe', 'Swiftspear', 'Swiftstrike', 'Talon', 'Thorne', 'Thunder',
    'Torment', 'Trasher', 'Valor', 'Warblade', 'Warcry', 'Warfury', 'Warsong',
    'Warsoul', 'Windstorm', 'Wolfe', 'Wolfshead', 'Wolfsheart', 'Wolfshowl',
    'Wrath'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 5) {
        rnd = Math.floor(Math.random() * nm3.length);
        rnd2 = Math.floor(Math.random() * nm5.length);
        names = `${nm3[rnd]} ${nm5[rnd2]}`;
      } else {
        rnd = Math.floor(Math.random() * nm4.length);
        rnd2 = Math.floor(Math.random() * nm6.length);
        names = `${nm4[rnd]} ${nm6[rnd2]}`;
      }
    } else if (i < 5) {
      rnd = Math.floor(Math.random() * nm1.length);
      rnd2 = Math.floor(Math.random() * nm5.length);
      names = `${nm1[rnd]} ${nm5[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm2.length);
      rnd2 = Math.floor(Math.random() * nm6.length);
      names = `${nm2[rnd]} ${nm6[rnd2]}`;
    }
    return names;
  }
}
