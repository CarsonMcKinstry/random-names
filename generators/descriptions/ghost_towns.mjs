export default function ghost_towns() {
  const nm1 = ['The road that led to and from', 'The main road that led to and from', 'The once busy road that led to', 'What was once a wide avenue that led to', 'The gentle road that led to', 'The now quiet road that led to', 'What was once a busy roadway that led to', 'The network of roads that led to', 'The once jam-packed roads that led to', 'The once smooth network of roads that let to'];
  const nm2 = ['barely discernible through the weeds and grasses that had reclaimed it', 'unrecognizable as nature had begun reclaiming the now unused area', 'barely more than a dirt path now and covered in shrubs and small bushes', 'now indistinguishable from the surrounding landscape', 'barely detectable beneath layers of dust, sand, shrubs and leaves', 'torn to pieces by the elements. Grass filled the labyrinth of cracks and sand covered whatever was left', 'still somewhat discernible despite the many cracks and holes given to it by the elements', 'frail and no longer able to support anything or anybody without the risk of collapsing under their weight', 'now a network of vines, grasses and roots that had taken hold of every bit they could get', 'slowly absorbed back into nature as grass, flowers and small shrubs reclaimed what they can as fast as they can'];
  const nm3 = ['Gardens once looked after and trimmed to perfection were now rough and overgrown, returning back to their chaotic natural state', 'Gardens are bustling with insect life who\'ve made their home in the now tall grasses and overgrown bushes', 'The occasional animal can be heard rustling in the tall grasses of the unkempt gardens or hiding in the wild overgrown bushes', 'The wind gently sways the tall grasses in the abandoned gardens while wild bushes make their claim on every acre not taken by the grass', 'Dry grass, dying bushes and withering flowers are all that\'s left of the once well kept gardens', 'Fallen trees block some of the paths while others continue to grow, their branches no longer prevented from growing into houses', 'Broken branches and leaves cover the roads inside the town while the tall grasses of the unkempt gardens sway in the wind', 'Dust and debris littered the roads within town while unkempt gardens are cluttered with forsaken possessions', 'Random pieces of long forgotten possessions litter the roads and wild, overgrown gardens within this town', 'The crisp and clean looking town now looked more like a jungle as trees and gardens grew beyond their now unkempt boundaries', 'Gardens grew beyond their artificial borders and began claiming parts of the streets and houses'];
  const nm5 = ['Most doors still stood in their frames as if nothing had changed. A few were ajar for one reason or another, perhaps left open in a hurry', 'Some doors had collapsed or were perhaps destroyed by looters or animals as time passed. Either way they left a welcoming entrance for animals', 'Most doors still stood sturdy in their frames. They were a little dirty, but if you only focused on the doors you\'d expect people to come out as if nothing had changed', 'Many doors had collapsed as rot ate away their edges. The open doorways that were once perhaps very welcoming were now an eerie and unwelcoming sight', 'Doors were broken, rotten and in most cases barely a door at all. Whether this was the work of looters, animals or the elements was unclear, but it didn\'t really matter', 'Some doors were shut tightly, others were broken down. Some forcefully, others had simply collapsed under their own weight as the elements continued to eat away at them', 'Remnants of packages and magazines still lay at some of the doorsteps, unopened and long forgotten. At least the animals got some use out of them', 'Doors were boarded up tightly and some showed signs of painted symbols with meanings known only to those who put them there, but whoever put them there\'s long gone too', 'Most doors were either completely gone or mere remnants of rotten wood and rusty metal. The open doorways looked eerie as only darkness showed within', 'Many doorways still stood tall and in some cases it was one of the few things left of a home. But most doors were completely gone and only remnants of rotten wood were left behind', 'Some doorways seemed in relative decent condition while others were destroyed and were indistinguishable from other collapsed walls and piles of rubble'];
  const nm6 = ['Window panes hung perilously from their hinges and here and there drapes had been flung out by the wind', 'Broken roof tiles lay in the streets and gardens and crusty, dry paint faded from walls and fences', 'Paint crumbled off of the walls and were slowly replaced by vines that crawled their way towards the rooftops', 'A few rusted cars still stood in their driveways, though most were stripped of all their spare parts', 'Broken cars and rusty pieces of metal littered some of the larger driveways, stripped from all but their most useless parts', 'Clothing, home appliances and other belongings were left lost and broken outside some of the homes. They were of no use to anyone anymore', 'Dry rot, vines and other undesired vegetation had taken the place of paint on most buildings and created their own kind of decoration', 'Many walls and balconies had collapsed. Without proper maintenance and cleaning it was easy for rot and water to do their damage', 'There were signs of fires, in some cases it was merely a trail of soot and smoke above a window pane, in others it was a pile of ash where once a building stood', 'Many buildings stood precariously upright despite looking like they had no means to do so. It\'d take just a slight nudge of a strong wind to tipple them all over', 'Many roofs had collapsed and in some cases had taken the entire building with it. Others looked in decent shape and were simply dirty and filled with bird nests'];
  const nm7 = ['bustling with life and brimming with light at this hour', 'a major festival town and home to an amazing night lift', 'rich with life, hopes, dreams and aspirations', 'a growing town on the rise to a better future', 'a pleasant quiet town and home to friendly folk', 'home to thousands of families and counting', 'a growing community of hundreds of families', 'a major hub for new businesses and young families', 'a peaceful and growing community', 'a hub of modern housing and technological developments', 'nothing more than a simple, quiet town'];
  const nm8 = ['was now a mere shadow of its former glory', 'was now but an eerie shell of its former self', 'had all but faded away from history', 'was now a mere distant memory of better times', 'was now a forgotten remnant of a time long passed', 'had been forsaken and left to rot alone', 'was now partially reclaimed by nature', 'was but a hollow shell of its former self', 'was now a ghost town in the truest sense', 'had become nothing more than a painful memory', 'had become a forgotten relic of the past'];
  const nm9 = ['An eerie silence had taken over and was only interrupted by the cracking of wood in the wind and the occasional bird who had made its home in one of the many collapsed roofs', 'Silence had taken the place of the sound of playing children, talking neighbors and the sounds of a working community. The silence was deafening', 'The air which was once filled with the many sounds of a growing community had grown eerily quiet. The silence was only broken up by the occasional animal sound and gust of wind', 'Silence had taken hold and would\'ve been deafening were it not for the many animals that had made this place their home. Bird songs, rustling bushes and the occasional howl filled the air', 'Bird songs, animals rustling in the bushes and trees and the various animal sounds from stray pets and other wild animals had taken the place of the sounds of a bustling community', 'Were it not for the occasional bird call the only sounds in this town was that of the wind. The sounds of market vendors, playing families and a loving community were no more', 'The creaking of wood and grinding of metal on metal were the only sounds in this town now. They were disturbing noises in a disturbing environment', 'The many voices of a once bustling community were replaced with the many voices of wild animals and stray pets that had made this town their new home', 'The wind in the trees and the creaking of wood were the new dominant sounds in a once lively community rich in sounds of joy and simple pleasures', 'The sounds of insects, winds and creaking wood of trees which were once drowned out by the sounds of cars and people had returned as the dominant sounds once more', 'The many sounds of wild animals who\'ve made their home in this town are carried in the wind and give it a new sense of liveliness and vibrancy'];
  const nm10 = ['The clock-tower was somehow still rich with sounds, but it wasn\'t its bells and gears as those had stopped working a long time ago. It was a flock of crows that had made this once great pillar their new home', 'In a strange sense of irony it was the library that was full of sounds now. Scattered pages of books, scratched wood and broken computers had become the home and playground of a huge community of cats', 'The town hall, once the pride and glory of this town, was turned into a new pride and glory by the various animals that lived here. Birds, cats, dogs and all sorts of rodents had all taken their spots', 'The once tranquil peace of mind people found in the park was now found by cats enjoying the sunshine and tall grasses. With nothing and nobody to bother them they had grown into a huge community of their own', 'The fountain in the town square was still full of water, though without filtration it had turn green and overgrown with algae and other plants. But at the very least the ducks seemed to enjoy it', 'Destroyed packages, remnants of forgotten letters and unpaid bills littered the floor of the post office. The smell of animal droppings clung to the air as much as the droppings did to the floor, the animals clearly loved the post office', 'The art gallery was once the cultural pride and joy of this town and tourists flocked to see the art displayed here. Now it was home to a flock of doves who\'ve destroyed most art pieces in their ignorance of what it once meant to so many people', 'Collapsed wooden walkways and a few sunken boats littered the relatively small docks. Some of the sunken boats had bird nests in them, but most were simply covered in shells and slowly reclaimed by nature', 'The lighthouse was once a beacon in multiple senses of the word. The once bright light on the outskirts of town was now merely a broken pillar and the perfect spot for nesting birds who gladly took advantage of this', 'The scents of fresh bread, various fruits and all sorts of other foods once filled the air of the market place. Now there\'s only the fresh air from the nearby forests to enjoy, as well as the occasional animal droppings that ruin it', 'The safety of the bank was forfeited long ago. There was nothing left but empty halls and empty safety deposit boxes, boxes that made for great nesting areas for small birds who gladly took advantage of this', 'In an almost sick sense of irony the museum, once home to relics from the past discovered and recovered by archaeologists from around the world, was now once again lost and forgotten. Waiting to be found by those who come next', 'Nothing\'s more eerie than an abandoned hospital and this one was no different. Empty halls and empty rooms where lives were once saved to the best of the staff\'s abilities only further added to the saddening atmosphere of this town', 'The police station once offered those in need and danger the protection they needed, but all this station can offer now is a home to animals and a shelter from the rain. On the bright side at least the cells were empty', 'Noble men and women were once called upon from the fire station, ready to save whoever needed saving. Unfortunately this town couldn\'t be saved. Funnily enough it was mostly cats that had made this station their home', 'The future looked bright to the students of this town. The school was part of their every day. Jokes were told and laughs were had, but now there was only silence and forgotten memories', 'The animals of this town always had the people of the animal shelter to count upon in times of need. It\'s perhaps for this reason that many had made this particular building their home, even if it wasn\'t the same as before', 'The main hotel has had a few esteemed guests over the years, but it was now decrepit and starting to collapse bit by bit. A few animals still dare to wander here, but most wisely stay away from the fragile walls', 'The large mill just outside of town still stood, though it was definitely on its last legs. A few animals still took shelter within its hollow walls, but the winds and worst weathers had left their mark', 'The public pool was still full of water. Green, algae filled rain water. It was big enough to become a new home to several families of ducks, but it was eerily abandoned by even them', 'The train station had collapsed and the tracks were covered in shrubs and fallen branches. Nobody was waiting for the next train anymore, no longer eagerly going to the next destination or waiting for those coming home'];
  const nm11 = ['Were it not for the animals that had made their home in many of the buildings this town would\'ve surely been a far more unsettling sight', 'Despite the many animals that inhabit this town it was still a very unsettling sight to behold. Nature had taken its toll on the vast majority of town', 'The town was truly an eerie sight. So many lives forgotten and whatever was left to show for it is slowly withering away as time goes on', 'It was a strange feeling to be in the footsteps of so many lives now long forgotten and not knowing what became of the people who once spent their lives here', 'No matter how you looked at it this town was an eerie sight to behold. Lives forgotten, perhaps completely ruined and there was barely anything to show for it', 'The more time would pass the more the traces of those who lived here will disappear. Even now there were only remnants left, it\'d be only a short while until there was nothing left', 'Street after street of abandoned homes made for a terrifying thought. Each house was once a home, a home belonging to a family and now there was only emptiness', 'Despite the decay of the buildings there was a certain charm about the town. Everything was greener as nature grew wild and the quiet during the day was almost peaceful', 'You couldn\'t help but feel lost in this town now, even if you knew exactly where you were. It was a lonely place with only distant memories of what once was', 'No matter how many animals made their home in this town now you couldn\'t help but be overcome with loneliness. Life had not just come to a halt, it had completely disappeared', 'You could go anywhere in town you wanted, walk into any home and visit any previously private part of town, assuming it hadn\'t been destroyed by nature already'];
  const nm12 = ['there was something oddly poetic about nature reclaiming what was once theirs to begin with', 'there was an odd sense of harmony as nature reclaimed what was theirs and resettled an old balance', 'not all was lost. In a way the legacy of this town lived on through the animals that lived here now, the spirit was still alive albeit in a different manner', 'despite being nothing like its former self this town still served its purpose. It was still home to a community and lives still thrived, it was just in the form of animals this time', 'even though everything may seem like it was lost forever there was still a silver lining. While this town was no longer home to the families that lived here, it was now home to families of wild animals', 'even with all the animals that lived here now and made this town their new home you couldn\'t escape the feeling that so much had been lost forever', 'there was an awful feeling of hopelessness you couldn\'t escape from. Even if those who lived here returned too much had been lost already and it\'d never be the same again', 'even though many buildings had found a new purpose there was just no way this town\'s former self could ever be restored', 'even when all the buildings are finally taken by nature there was at least the knowledge that the animals wouldn\'t have to leave and could continue their lives in peace', 'with nothing else to lose this town had a strange sense of comfort about it. Like a world of opportunity, except there was nobody there to take it', 'despite all the decay and destruction at least there was happiness among the animals. Most had found a relatively safe haven to live in'];
  const nm13 = ['MillerVille', 'Timeston', 'Krosstoen', 'Limesvilles', 'Cherrytown', 'Fortaare', 'Kelna', 'Strongfair', 'Solime', 'Wolfpine', 'Little Ivywood', 'Peatsland', 'Haling Cove', 'Eastcliff', 'Emall', 'Emelle', 'Holden', 'Walden', 'Venzor', 'Roselake', 'Beachmarsh', 'Beachcastle', 'Butterpond', 'Snowbush', 'Fallholt', 'Ironhaven', 'Woodpine', 'Black Crystal', 'Falcon Haven', 'Redwick Bush', 'Clare View Point', 'Crossroads', 'Skystead', 'Everwinter', 'Wolfwater', 'Shadowfen', 'King\'s Watch', 'Redwater', 'Dragontail', 'Mournstead', 'Lunaris', 'Solaris', 'Aynor', 'Naporia', 'Onryx', 'Aria', 'Aerilon ', 'Aquarin ', 'Aramoor ', 'Azmar ', 'Begger\'s Hole ', 'Black Hollow ', 'Blue Field ', 'Briar Glen ', 'Brickelwhyte ', 'Broken Shield ', 'Boatwright ', 'Bullmar ', 'Carran ', 'City of Fire ', 'Coalfell ', 'Cullfield ', 'Darkwell ', 'Deathfall ', 'Doonatel ', 'Dry Gulch ', 'Easthaven ', 'Ecrin ', 'Erast ', 'Far Water ', 'Firebend ', 'Fool\'s March ', 'Frostford ', 'Goldcrest ', 'Goldenleaf ', 'Greenflower ', 'Garen\'s Well ', 'Haran ', 'Hillfar ', 'Hogsfeet ', 'Hollyhead ', 'Hull ', 'Hwen ', 'Icemeet ', 'Ironforge ', 'Irragin ', 'Jarren\'s Outpost ', 'Jongvale ', 'Kara\'s Vale ', 'Knife\'s Edge ', 'Lakeshore ', 'Leeside ', 'Lullin ', 'Marren\'s Eve ', 'Millstone ', 'Moonbright ', 'Mountmend ', 'Nearon ', 'New Cresthill ', 'Northpass ', 'Nuxvar ', 'Oakheart ', 'Oar\'s Rest ', 'Old Ashton ', 'Orrinshire ', 'Ozryn ', 'Pavv ', 'Pella\'s Wish ', 'Pinnella Pass ', 'Pran ', 'Quan Ma ', 'Queenstown ', 'Ramshorn ', 'Red Hawk ', 'Rivermouth ', 'Saker Keep ', 'Seameet ', 'Ship\'s Haven ', 'Silverkeep ', 'South Warren ', 'Snake\'s Canyon ', 'Snowmelt ', 'Squall\'s End ', 'Swordbreak ', 'Tarrin ', 'Three Streams ', 'Trudid ', 'Ubbin Falls ', 'Ula\'ree ', 'Veritas ', 'Violl\'s Garden ', 'Wavemeet ', 'Whiteridge ', 'Willowdale ', 'Windrip ', 'Wintervale ', 'Wellspring ', 'Westwend ', 'Wolfden ', 'Xynnar ', 'Yarrin ', 'Yellowseed ', 'Zao Ying ', 'Zeffari ', 'Zumka ', 'Ormkirk', 'Dunwich', 'Anghor Thom', 'Anghor Wat', 'Kamouraska', 'Astrakhan', 'Arkkukari', 'Arkala', 'Halivaara', 'Hammaslahti', 'Hankala', 'Elinmylly', 'Hepojoki', 'Kalmankaltio', 'Kalmaniemi', 'Katinhanta', 'Kuoppa', 'Kuuma', 'Livohka', 'Loukussa', 'Mestauskalio', 'Meteli', 'Murtovaara', 'Myrrka', 'Niska', 'Pomovaara', 'Nishka', 'Risteys', 'Varisvaara', 'Erstonia', 'Cappadocia', 'Grimsby', 'Aberystwyth', 'Aberdyfi ', 'Aberdeen ', 'Aberuthven', 'Accrington', 'Acomb', 'Acton', 'Matlock', 'Glanyrafon', 'Armagh', 'Ardglass', 'Aston', 'Auchendinny', 'Auchenshuggle', 'Achnasheen', 'Auchtermuchty', 'Auchterarder', 'Exeter', 'Axminster', 'Westray', 'Lundy', 'Orkney', 'Ballachulish', 'Balerno', 'Ballymena', 'Ballinamallard', 'Ballater', 'Balmoral', 'Holbeck', 'Beckinsale', 'Troutbeck', 'Beckton', 'Bexley', 'Blencathra', 'Blencogo', 'Blaenau', 'Ffestiniog', 'Leurbost', 'Bournemouth', 'Eastbourne', 'Ashbourne', 'Blackburn', 'Bannockburn', 'Bradford', 'Bredon', 'Aylesbury', 'Dewsbury', 'Bury', 'Middlesbrough', 'Edinburgh', 'Bamburgh', 'Peterborough', 'Jedburgh', 'Grimsby', 'Tenby', 'Kincardine', 'Cardended', 'Lancaster', 'Doncaster', 'Gloucester', 'Caister', 'Worcester', 'Chester', 'Cirencester', 'Colchester', 'Caerdydd', 'Caerleon', 'Carlisle', 'Caerfyrddin', 'Chepstow', 'Barcombe', 'Farncombe', 'Ilfracombe', 'Coombe', 'Ascot', 'Draycott', 'Swadlincote', 'Culcheth', 'Cumdivock', 'Dalry', 'Dalmellington', 'Airedale', 'Rochdale', 'Saxondale', 'Croydon', 'Horndean', 'Todmorden', 'Abingdon', 'Bredon', 'Willesden', 'Drumchapel', 'Drumnacanvy', 'Drumnadrochit', 'Dundee', 'Dumbarton', 'Dungannon', 'Romsey', 'Athelney', 'Ely', 'Hornsey', 'Sheffield', 'Huddersfield', 'Wakefield', 'Mansfield', 'Macclesfield', 'Mirfield', 'Chesterfield', 'Murrayfield', 'Huddersfield', 'Findochty', 'Holmfirth', 'Burrafirth', 'Bradford', 'Ampleforth', 'Watford', 'Fanfoss', 'Aysgarth', 'Gillamoor', 'Garrigill', 'Rutherglen', 'Glenarm', 'Guthram', 'Rotherham', 'Newham', 'Tottenham', 'Oldham', 'Newsham', 'Faversham', 'Rotherhithe', 'Hythe', 'Erith', 'Holmfirth', 'Hempholme', 'Woolhope', 'Glossop', 'Howe', 'Norfolk', 'Dewhurst', 'Woodhurst', 'Spalding', 'Lockinge', 'Inverness', 'Keld', 'Threlkeld', 'Penketh', 'Culcheth', 'Kilmarnock', 'Kilead', 'Kilkenny', 'Kincardine', 'Kinallen', 'Coningsby', 'Kirkwall', 'Ormskirk', 'Colkirk', 'Falkirk', 'Lanteglos', 'Lhanbryde', 'Lanercost', 'Llanybydder', 'Langdale', 'Tow', 'Lewes', 'Barnsley', 'Hadleigh', 'Lindow', 'Llyn', 'Lingmell', 'Appleby', 'Wigston', 'Windermere', 'Grasmere', 'Cromer', 'Tranmere', 'Wimborne', 'Mossley', 'Bournemouth', 'Portsmouth', 'Monmouth', 'Nancledra', 'Nantgarw', 'Nantwich', 'Skegness', 'Furness', 'Norton', 'Norbury', 'Norwich', 'Pantmawr', 'Penzance', 'Pendle', 'Penrith', 'Putlochry', 'Pitmedden', 'Polperro', 'Poltragow', 'Pontypridd', 'Pontheugh', 'Hartlepool', 'Blackpool', 'Porthcawl', 'Porthaethwy', 'Davenport', 'Penshaw', 'Openshaw', 'Shepshed', 'Shipton', 'Stanmore', 'Stamford', 'Stanlow', 'Hampstead', 'Berkhamsted', 'Lybster', 'Scrabster', 'Damerel', 'Padstow', 'Strathmore', 'Streatham', 'Sudbury', 'Sutton', 'Swindon', 'Swinford', 'Cleethorpes', 'Thorpeness', 'Huthwaite', 'Tregaron', 'Travercraig', 'Tillicoultry', 'Tillydrone', 'Lowestoft', 'Tywardreath', 'Tunstead', 'Warrington', 'Coniston', 'Clacton', 'Everton', 'Broughton', 'Luton', 'Merton', 'Stratford', 'Wealdstone', 'Southwold', 'Norwich', 'Alnwick', 'Bromwich', 'Runswick', 'Lerwick', 'Wheldrake', 'Wimborne', 'Tamworth', 'Farnworth', 'Holsworthy', 'Bredwardine', 'Orilon ', 'Aquarine ', 'Aramore', 'Azmarin ', 'Beggar\'s Hole ', 'Black Hallows  ', 'Briar Glen ', 'Bracklewhyte  ', 'Bellmare ', 'Cirrane ', 'Caelfall ', 'Crullfeld ', 'Murkwell  ', 'Durnatel  ', 'Easthallow ', 'Acrine ', 'Erostey    ', 'Forstford ', 'Goulcrest ', 'Hirane', 'Hillford ', 'Ilragorn  ', 'Leefside  ', 'Mirstone ', 'Nerton  ', 'Aroonshire ', 'Alryne  ', 'Pirn    ', 'Torrine  ', 'Tardide ', 'Veritas  ', 'Whitebridge ', 'Wallowdale ', 'Wolford', 'Yarlford', 'Zalfari ', 'Urmkirkey', 'Dornwich', 'Kameeraska', 'Astrakane', 'Archmouth', 'Arkaley', 'Aelinmiley', 'Myrefall', 'Garmsby', 'Aberstwyth', 'Alderdyfi ', 'Alderrdeen ', 'Aeberuthey', 'Accreton', 'Alcombey', 'Arcton', 'Martslock', 'Glarnyraefon', 'Aermagh', 'Aeston', 'Auchendale', 'Archensheen', 'Auctermunty', 'Aucteraden', 'Arkmunster', 'Arkney', 'Bellechulish', 'Baerney', 'Bailymena', 'Ballingsmallard', 'Ballaeter', 'Bellmoral', 'Hullbeck', 'Beckinsdale', 'Troutberk', 'Berkton', 'Berxley', 'Blancathey', 'Blencalgo', 'Bellenau', 'Larcbost', 'Fournemouth', 'Eastborne', 'Ashborne', 'Bleakburn', 'Banrockburn', 'Bradfordshire', 'Braedon', 'Islesbury', 'Dawsbury', 'Middlesborough', 'Edinborourgh', 'Bamborourgh', 'Peterbrugh', 'Jedborourgh', 'Gramsby', 'Taernsby', 'Kingcardine', 'Cardend', 'Laencaster', 'Duncaster', 'Glanchester', 'Warcester', 'Sirencester', 'Calchester', 'Caershire', 'Carleone', 'Chaepstow', 'Barncombe', 'Ferncombe', 'Ilfreycombe', 'Graycott', 'Swindlincote', 'Calcheth', 'Cewmann', 'Dalelry', 'Dalmerlington', 'Aeredale', 'Rachdale', 'Craydon', 'Haerndean', 'Taedmorden', 'Arbington', 'Braedon', 'Willsden', 'Durmchapel', 'Domburton', 'Dangarnon', 'Gormsey', 'Aethelney', 'Eelry', 'Harnsey', 'Sherfield', 'Hardersfield', 'Waekefield', 'Mensfield', 'Marclesfield', 'Mirefield', 'Cesterfield', 'Murlayfield', 'Addersfield', 'Ferndochty', 'Helmfirth', 'Burrafirth', 'Bardford', 'Aempleforth', 'Warthford', 'Farnfoss', 'Iyesgarth', 'Gilramore', 'Garigill', 'Rptherglen', 'Glaenarm', 'Garthram', 'Ruthorham', 'Eldham', 'Favorsham', 'Ritherhithe', 'Ayrith', 'Helmfirth', 'Foolshope', 'Galssop', 'Hewe', 'Narfolk', 'Dalhurst', 'Woodhaerst', 'Larkinge', 'Eanverness', 'Kald', 'Thralkeld', 'Penkurth', 'Calcherth', 'Calmarnock', 'Kilerth', 'Kinecardine', 'Kineallen', 'Carningsby', 'Kirekwall', 'Armskirk', 'Caelkirk', 'Fallkirk', 'Laenteglos', 'Lhanbyrde', 'Lanercoast', 'Llaneybyder', 'Longdale', 'Taewe', 'Laewaes', 'Burnsley', 'Haedleigh', 'Landow', 'Llyne', 'Linemell', 'Wingston', 'Wandermere', 'Crasmere', 'Cromerth', 'Transmere', 'Wombourne', 'Moressley', 'Barnemouth', 'Paethsmouth', 'Marnmouth', 'Narnclaedra', 'Nantgarth', 'Narthwich', 'Skargness', 'Northon', 'Northbury', 'Northwich', 'Paentmarwy', 'Paendley', 'Pernrith', 'Perthlochry', 'Pitmerden', 'Palperroth', 'Peltragow', 'Pontybridge', 'Hurtlepool', 'Blackridgepool', 'Porthcrawl', 'Porthaethwidge', 'Doveport', 'Panshaw', 'Perlshaw', 'Sharpton', 'Stawford', 'Sanlow', 'Harmstead', 'Barkamsted', 'Daemarrel', 'Pathstow', 'Stathmore', 'Stratham', 'Satbury', 'Sarton', 'Swindmore', 'Swanford', 'Claethorpes', 'Thorpes', 'Harthwaite', 'Tergaron', 'Tylwaerdreath', 'Tarnstead', 'Warlington', 'Conriston', 'Clarcton', 'Alverton', 'Boroughton', 'Larton', 'Malrton', 'Stathford', 'Waeldestone', 'Alnerwick', 'Barmwich', 'Sharnwick', 'Larnwick', 'Whaelrdrake', 'Wanborne', 'Tarmsworth', 'Fernsworth', 'Halsworthy', 'Braedwardith'];
  const rnd1 = Math.floor(Math.random() * nm1.length);
  const rnd2 = Math.floor(Math.random() * nm2.length);
  const rnd3 = Math.floor(Math.random() * nm3.length);
  const rnd5 = Math.floor(Math.random() * nm5.length);
  const rnd6 = Math.floor(Math.random() * nm6.length);
  const rnd7 = Math.floor(Math.random() * nm7.length);
  const rnd8 = Math.floor(Math.random() * nm8.length);
  const rnd9 = Math.floor(Math.random() * nm9.length);
  const rnd10 = Math.floor(Math.random() * nm10.length);
  const rnd11 = Math.floor(Math.random() * nm11.length);
  const rnd12 = Math.floor(Math.random() * nm12.length);
  const rnd13 = Math.floor(Math.random() * nm13.length);
  const name = `${nm1[rnd1]} ${nm13[rnd13]} was ${nm2[rnd2]}. ${nm3[rnd3]}.`;
  const name2 = `${nm5[rnd5]}. ${nm6[rnd6]}. `;
  const name3 = `${nm13[rnd13]}, once ${nm7[rnd7]} ${nm8[rnd8]}. ${nm9[rnd9]}.`;
  const name4 = `${nm10[rnd10]}.`;
  const name5 = `${nm11[rnd11]}. But ${nm12[rnd12]}.`;
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
