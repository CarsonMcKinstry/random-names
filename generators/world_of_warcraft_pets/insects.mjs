import { sample } from 'lodash-es';

export default function insects() {
  let names;
  const nm1 = ['Abella', 'Acrisius', 'Adiyis', 'Afelhuq', 'Ahmose', 'Aikazax', 'Aine', 'Akhenaten', 'Akhenaton', 'Alagos', 'Alakyrr', 'Alexei', 'Alta', 'Amenemhet', 'Amenhotep', 'Anansi', 'Anastera', 'Annelida', 'Aphrodite', 'Appendix', 'Arachnaut', 'Arachne', 'Arachnophia', 'Aragog', 'Araneidae', 'Archimedes', 'Argyrodes', 'Ariados', 'Arkaitz', 'Atahez', 'Aten', 'Atum', 'Auberon', 'Aurantia', 'Avicularia', 'Baeiira', 'Bain', 'Balboa', 'Beebop', 'Beetlejuice', 'BigWilly', 'Bine', 'Bitsy', 'Block', 'Blolphork', 'Blomphwun', 'Bloodbite', 'Bluestar', 'Boris', 'Breeze', 'BugLightyear', 'BugZapper', 'BuggedOut', 'Bumble', 'Bummezhei', 'Bumphdult', 'Buzzboss', 'Cavatica', 'Charlotte', 'Charm', 'Chip', 'Cleopatra', 'Clunph', 'Crawly', 'CrazyLegs', 'Creep', 'CreepyCrawly', 'Cricket', 'Crollh', 'Cuddles', 'Cure', 'Dancer', 'Dancingqueen', 'Defodio', 'Despduis', 'Despmtor', 'Dhaundax', 'Dhaunrysn', 'Dodger', 'Dracula', 'Droknal', 'Dulfgrult', 'Dune', 'Dyrage', 'EarthwormJim', 'EatindirtAFK', 'Edmund', 'EekASpider', 'Ekicak', 'ElTarantulo', 'Elania', 'Elarinya', 'Elifif', 'Eruanna', 'Eshacer', 'Ette', 'Evuvug', 'Ew', 'Ezeroc', 'Facehugger', 'Fanui', 'Fejjofui', 'Feriave', 'Fidget', 'Firefly', 'Flash', 'Flogfooz', 'Floof', 'Fluffy', 'FluffyCuddle', 'Flutter', 'Folt', 'Francis', 'Fuzzy', 'Gahan', 'George', 'Geverspike', 'Ghoddomau', 'Ghuddedio', 'Ghulftumb', 'Gidget', 'Gigit', 'Glider', 'Glork', 'Glowstick', 'Glowy', 'Gook', 'Gumph', 'Gwaeron', 'Gwilwileth', 'Haemosu', 'Haldor', 'Hallucinated', 'Happyfeet', 'Harrison', 'Hatshepsut', 'Haze', 'Hendra', 'Henna', 'Hercules', 'Hesutu', 'Hive', 'Hopper', 'Hugo', 'Humor', 'IBite', 'ISpinwebz', 'Ibavof', 'Ibirod', 'Icanhazbug', 'Icanhazfly', 'Ichozuc', 'Idophor', 'Iguker', 'Ijushir', 'Ilphstra', 'Ilztzyr', 'ImInUrSox', 'Imhotep', 'Impedimenta', 'Incey', 'Interwebz', 'Itsy', 'ItsyBitsy', 'Iwijech', 'Ixophiw', 'Iyevaj', 'Jettesue', 'Jim', 'Jitterbug', 'John', 'Johnny', 'Juice', 'Jumpingbean', 'Kahu', 'Kaia', 'Kaiba', 'Kaljou', 'Kerosyn', 'Khepri', 'Klax', 'Kloozuck', 'KneesUp', 'Kraque', 'Krigon', 'Kyshf', 'Lakkucoa', 'Lartath', 'Lazzuxei', 'Legs', 'Lennon', 'Lhaccujoi', 'Lhupposue', 'Libnrak', 'Lightbuzzer', 'Lirlt', 'Llyrrad', 'Lokghper', 'Loki', 'Lollipop', 'Loon', 'Lorn', 'Lucky', 'Lumos', 'Luna', 'Matikah', 'McCartney', 'MelReynolds', 'Meleth', 'Menes', 'Mighund', 'Mirdan', 'Mothball', 'Mothra', 'MrSquishy', 'Mudbottom', 'MuddyBuddy', 'Myze', 'Nanzi', 'Naraku', 'Ned', 'Nefertari', 'Nematoda', 'Ninltkim', 'Nosferatu', 'Noshg', 'Nulljss', 'Nuzzle', 'Off', 'Okispe', 'Orifel', 'Orlyafin', 'Ovepaq', 'Ozzy', 'Painfuldeath', 'Palk', 'Palluhae', 'Paul', 'Pebbleskull', 'Pedro', 'Peepers', 'Peripatus', 'PeterParker', 'Phad', 'Phammaxia', 'Phiqquvuo', 'Phirrushuu', 'Phisrd', 'Physco', 'Pipez', 'Pipsqueak', 'Protego', 'Pyihel', 'Pythagoras', 'Qualnvrae', 'Quickstep', 'Raffashua', 'Raid', 'Rakkan', 'Ramessu', 'Reclusa', 'Redd', 'Rhavaniel', 'Ringo', 'Rocky', 'Rosa', 'Rosie', 'Rune', 'Saraswati', 'Satan', 'Sausage', 'Scarletfever', 'Scissa', 'Scruff', 'Scuttlebutt', 'Sectar', 'Semmiheu', 'SereneGrace', 'Serenity', 'Serpigo', 'Seti', 'Seymora', 'Seymore', 'Shellby', 'Shelley', 'Shelloholic', 'Shellshocked', 'Shellton', 'Shelob', 'Shimmer', 'Shittewio', 'Shuyyabuo', 'Sideswipe', 'Sipuncula', 'Skirax', 'Skitter', 'Skitterbug', 'Skitters', 'Skittles', 'Skreech', 'Skrill', 'Slasgh', 'Slash', 'Slerdach', 'Sliphche', 'Snendos', 'Snuggles', 'SonOfaBee', 'Song', 'Spaghetti', 'SpeedBuggy', 'Spidey', 'Spidrid', 'Spin', 'Spinarak', 'Spindle', 'Spinner', 'Spinnerz', 'Splat', 'Squiggles', 'Squiggly', 'Squirmy', 'Squish', 'Starr', 'Stemrdtur', 'Steve', 'Sticker', 'Stingerthorn', 'Stingy', 'Strafe', 'Strider', 'Sunshine', 'Surskit', 'Swoml', 'Swucran', 'Sylvester', 'Tabitha', 'Tank', 'Thalhlhejae', 'Thatzaer', 'Threst', 'Thutmose', 'Tickle', 'Tickles', 'Tiger', 'Tigga', 'Tiki', 'Tilly', 'Tiltelm', 'Tranquility', 'Tremor', 'Trov', 'Tsuchigumo', 'Tsuki', 'Tuvok', 'Twist', 'Twitch', 'Typchray', 'Ucashes', 'Udadiy', 'Ujarak', 'Umusaq', 'Ungoliant', 'Utabuch', 'Uyureg', 'Vavb', 'Venatoria', 'Vespera', 'Vessex', 'Vin', 'VitaminDirt', 'Vittorio', 'Vladimar', 'Vore', 'Vorryn', 'Vowwalhoe', 'Voyyozaa', 'Wash', 'Waterspout', 'Webber', 'Webby', 'Webmaster', 'Webslinger', 'Webster', 'Webzya', 'Whitie', 'Wincey', 'Wippiyeu', 'Wolfgang', 'Woolslayer', 'Wyphem', 'Xaggavea', 'Xennowua', 'Xunkiira', 'Xuzzayua', 'Zechchenoa', 'Zkirax', 'Zoll', 'Zorphax'];
  {
    names = sample(nm1);
    return names;
  }
}
