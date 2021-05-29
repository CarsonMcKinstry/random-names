import { sample } from 'lodash-es';

export default function frankishs() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abbo', 'Abrahil', 'Abram', 'Adalard', 'Adalbert', 'Adalbertus', 'Adaldag', 'Adalgrimus', 'Adalhaid', 'Adalhard', 'Adalolf', 'Adelard', 'Aega', 'Ageric', 'Agilbert', 'Agilfride', 'Agiulf', 'Agobard', 'Aigulf', 'Alberic', 'Aldedramnus', 'Aldgisl', 'Allowin', 'Amalricus', 'Amand', 'Amator', 'Andica', 'Angegisis', 'Angilbart', 'Angilbert', 'Anno', 'Ansegisel', 'Anskar', 'Ansovald', 'Arbitio', 'Arbogast', 'Arbogastes', 'Arculf', 'Aregisel', 'Arnegisel', 'Arnold', 'Arnoul', 'Arnulf', 'Artaud', 'Asselin', 'Atacinus', 'Audoen', 'Audomar', 'Audoneus', 'Audovald', 'Audramnus', 'Austregisel', 'Avremarus', 'Badegisel', 'Balderic', 'Baldrick', 'Baudry', 'Baugulf', 'Bauto', 'Bavo', 'Benild', 'Berchar', 'Berengar', 'Berenger', 'Bernard', 'Bernardus', 'Bernhard', 'Berno', 'Bero', 'Bertelis', 'Berthaire', 'Berthefried', 'Bertin', 'Bertlinus', 'Bertram', 'Bertramnus', 'Bertulf', 'Besso', 'Birinus', 'Blutmund', 'Boso', 'Bovo', 'Brice', 'Britius', 'Brocard', 'Bruno', 'Burchard', 'Butilin', 'Carloman', 'Cassyon', 'Ceslinus', 'Ceufroy', 'Chararic', 'Charibert', 'Charles', 'Cheldric', 'Childebert', 'Childebrand', 'Childeric', 'Chilperic', 'Chlodion', 'Chlodmer', 'Chlodomer', 'Chlodowig', 'Chlodwig', 'Chlotar', 'Chramnesind', 'Chrodegang', 'Clodio', 'Clodomir', 'Clotaire', 'Clothair', 'Cloud', 'Clovis', 'Conrad', 'Corbinian', 'Corbus', 'Creatus', 'Cyr', 'Cyricus', 'Dado', 'Dagaric', 'Dagobert', 'Dalfin', 'Dietrich', 'Dodo', 'Dreux', 'Drogo', 'Drogon', 'Dudon', 'Durand', 'Ebbo', 'Eberhard', 'Eberulf', 'Ebregisel', 'Ebroin', 'Ebrulf', 'Egide', 'Einhard', 'Electeus', 'Electus', 'Emme', 'Emmeran', 'Emmon', 'Engelbert', 'Engilbert', 'Enguerrand', 'Enurchus', 'Eracle', 'Erard', 'Erchinoald', 'Erenfried', 'Eudes', 'Euric', 'Evrard', 'Evroul', 'Evroult', 'Farabert', 'Fardulf', 'Faro', 'Faroardus', 'Faroinus', 'Feremundus', 'Feroardus', 'Flodoard', 'Floribert', 'Folcard', 'Folmar', 'Foroenus', 'Fredegar', 'Fridolin', 'Fridugis', 'Frobertus', 'Frothardus', 'Frotlaicus', 'Fulbert', 'Fulcaire', 'Fulk', 'Fulrad', 'Gararic', 'Garivald', 'Gaudulfus', 'Gaujoinus', 'Gausbertus', 'Gausboldus', 'Gautmarus', 'Gedalbertus', 'Gedalcaus', 'Gerbert', 'Gereon', 'Gerold', 'Gifemund', 'Gilbert', 'Giselbert', 'Giseler', 'Gislevertus', 'Giso', 'Godalbertus', 'Godobald', 'Godomar', 'Godun', 'Goisfrid', 'Gondulph', 'Goscelin', 'Gouzlim', 'Gozbert', 'Gozolon', 'Griffon', 'Grifo', 'Grimald', 'Grimbald', 'Grimoald', 'Guadulfus', 'Guido', 'Gundobad', 'Gundovald', 'Gunthar', 'Guntram', 'Guntramn', 'Hagen', 'Haldemarus', 'Halinard', 'Hartgard', 'Hartmut', 'Hartnid', 'Helinand', 'Helisachar', 'Heribert', 'Hildebald', 'Hildebold', 'Hildeboldus', 'Hildegaudus', 'Hildeprand', 'Hildevoldus', 'Hildoinus', 'Hilduin', 'Hincmar', 'Hlodver', 'Hrodbert', 'Hubert', 'Huebald', 'Humbert', 'Hunald', 'Imbert', 'Imnachar', 'Imninon', 'Ingalbertus', 'Ingelram', 'Ingomer', 'Ingund', 'Jocelin', 'Karlmann', 'Lambert', 'Lanfranc', 'Lantbertus', 'Laudus', 'Lebuin', 'Ledger', 'Leger', 'Leodegar', 'Letard', 'Leudast', 'Leufred', 'Leufroy', 'Leutfrid', 'Leuthard', 'Leuthere', 'Liudger', 'Liudhard', 'Liudolf', 'Lo', 'Lothar', 'Ludger', 'Lul', 'Lull', 'Magnachar', 'Magneric', 'Maiuel', 'Maixent', 'Majorian', 'Malaric', 'Mallobaudes', 'Mansuetus', 'Marachar', 'Maraulf', 'Marcomir', 'Marcoul', 'Marellus', 'Martinus', 'Matfrid', 'Mauger', 'Maurifius', 'Medard', 'Meginhard', 'Merobaudes', 'Merovech', 'Monulph', 'Munderic', 'Nevelung', 'Nibelung', 'Nithard', 'Norbert', 'Nordbert', 'Notger', 'Notker', 'Odger', 'Odilo', 'Odilon', 'Odo', 'Odulf', 'Omer', 'Orderic', 'Otbert', 'Otker', 'Otto', 'Otton', 'Ouen', 'Ouus', 'Pacatian', 'Pair', 'Pancras', 'Panteleon', 'Paschal', 'Pepin', 'Philibert', 'Piligrim', 'Pippin', 'Poppo', 'Priarios', 'Puvis', 'Radbod', 'Radigis', 'Ragenard', 'Ragenardus', 'Ragenaus', 'Ragnachar', 'Ragnfred', 'Ragno', 'Ramnulf', 'Rathar', 'Rathier', 'Ratold', 'Razo', 'Reginald', 'Reginar', 'Reginard', 'Remacle', 'Remi', 'Reolus', 'Ricbodo', 'Ricchar', 'Ricfried', 'Richer', 'Richomer', 'Richomeres', 'Rigunth', 'Riquier', 'Rothad', 'Samo', 'Samson', 'Sergius', 'Sichar', 'Sicho', 'Siclandus', 'Sicleardus', 'Siclevoldus', 'Siegfried', 'Sigebert', 'Sigefroy', 'Sigeric', 'Sigibert', 'Sigismund', 'Sinopus', 'Suger', 'Suidbert', 'Suidger', 'Sunnegisil', 'Sunno', 'Syagrius', 'Tassilo', 'Taurin', 'Tescelin', 'Thankmar', 'Thegan', 'Theodard', 'Theodebert', 'Theodemir', 'Theodon', 'Theodore', 'Theodoric', 'Theodulf', 'Theodulph', 'Theodwin', 'Theoto', 'Theudebald', 'Theudebert', 'Theuderic', 'Theutgaud', 'Thierry', 'Thietmar', 'Trutgaudus', 'Turpin', 'Unroch', 'Vedast', 'Vicelin', 'Vigor', 'Vulmar', 'Waiofar', 'Wala', 'Walaric', 'Walcaud', 'Waldolanus', 'Waleran', 'Waltgaud', 'Wandregisel', 'Wandregisilus', 'Wandrille', 'Warmann', 'Wazo', 'Welf', 'Werinbert', 'Wibert', 'Wichmann', 'Wido', 'Willehad', 'Willibald', 'Willibrord', 'Willichar', 'Wolbodo', 'Wulfhard', 'Wulfram', 'Zwentibold'];
  const nm2 = ['Ada', 'Adala', 'Adalberta', 'Adalind', 'Adalindis', 'Adallind', 'Adallinda', 'Adalmut', 'Adalrada', 'Adaltrude', 'Adaltrutis', 'Adaluuidis', 'Adalwif', 'Adda', 'Addela', 'Adela', 'Adelaidis', 'Adele', 'Adelhaid', 'Adelheid', 'Adeltrudis', 'Adhela', 'Adwala', 'Aebbe', 'Agatha', 'Agentrudis', 'Agglethrudis', 'Albelenda', 'Albofleda', 'Albruga', 'Alburch', 'Alburg', 'Aldguda', 'Aldgudana', 'Aldruth', 'Alfgarda', 'Alfild', 'Alflent', 'Alpaida', 'Alpaide', 'Alpais', 'Amabilia', 'Amalberga', 'Amalbirga', 'Amoltrud', 'Amulberga', 'Anselda', 'Ansgard', 'Anstruda', 'Aregund', 'Athalia', 'Athela', 'Atula', 'Aua', 'Auacyn', 'Aubirge', 'Aude', 'Audofleda', 'Audovera', 'Auekin', 'Auin', 'Auina', 'Auriana', 'Austrechild', 'Ava', 'Avacyn', 'Avekin', 'Avin', 'Baldechildis', 'Baltelda', 'Balthechildis', 'Balthildis', 'Basina', 'Bauin', 'Bava', 'Bavacin', 'Bave', 'Bavin', 'Begga', 'Belegardis', 'Benedicta', 'Berchildis', 'Berehta', 'Berenga', 'Beretrude', 'Bergard', 'Bergundis', 'Berhta', 'Beriungis', 'Berna', 'Bernewief', 'Bernewif', 'Berta', 'Bertaida', 'Bertha', 'Berthe', 'Berthefled', 'Berthefried', 'Berthegund', 'Berthildis', 'Berthlenda', 'Bertildis', 'Bertliana', 'Bertoane', 'Bertrada', 'Bertruda', 'Bertswinda', 'Bettin', 'Bilichildis', 'Blesinde', 'Blitekin', 'Boltiarda', 'Bova', 'Boviardis', 'Brunhild', 'Brunhilda', 'Burgundefara', 'Childebertana', 'Chlodeswinthe', 'Chlodosind', 'Chlothsinda', 'Chrodechildis', 'Chrodtrude', 'Chunsina', 'Cilia', 'Clodauuiua', 'Clothild', 'Clotild', 'Clotilde', 'Clotrada', 'Conegont', 'Conegundis', 'Conegunt', 'Crapahildis', 'Cunegonde', 'Cunegund ', 'Cunegundis', 'Dadin', 'Dagarada', 'Danburga', 'Deuteria', 'Doda', 'Dodda', 'Duda', 'Eadgithu', 'Ealswid', 'Ebertana', 'Edeberga', 'Edeborg', 'Ega', 'Egecin', 'Egeluuara', 'Egesburga', 'Egesloga', 'Ehgelhild', 'Ehgeluuara', 'Ellinrat', 'Emecin', 'Emma', 'Engelberga', 'Engelberge', 'Engelgard', 'Engelsuit', 'Engeltrude', 'Engeluuara', 'Engelwara', 'Enna', 'Erchembrog', 'Eremburgis', 'Ereprad', 'Erkembrog', 'Erkenbrog', 'Erkenburoc', 'Erkenrad', 'Ermecin', 'Ermegardis', 'Ermenberga', 'Ermengard', 'Ermengarda', 'Ermengarde', 'Ermengardis', 'Ermentrudis', 'Ermeswindis', 'Ermina', 'Erpsuid', 'Errictruda', 'Ethelchif', 'Ethelgard', 'Ethelgarda', 'Euerloga', 'Everelda', 'Evereldis', 'Faileuba', 'Fara', 'Fastrada', 'Flouerana', 'Folclind', 'Folclinda', 'Folcrada', 'Folcuuara', 'Folgarda', 'Folsuindis', 'Folsuuendis', 'Fordola', 'Fortlifh', 'Foy', 'Frauuara', 'Fredeburgis', 'Fredegunde', 'Frederada', 'Fredeuuara', 'Frethegard', 'Frethesuinda', 'Frethesuindis', 'Fridesuenda', 'Fridewiga', 'Frisburgis', 'Frithelinda', 'Frouuin', 'Frouuina', 'Galswinth', 'Geila', 'Gelduuara', 'Geneva', 'Genofeva', 'Gerberga', 'Geretrudis', 'Gerlent', 'Gerlinda', 'Gersenda', 'Gersuenda', 'Gersuinda', 'Gersvinda', 'Gertruda', 'Geruuara', 'Geua', 'Geva', 'Gisela', 'Gisla', 'Glismodis', 'Godalinda', 'Godeca', 'Godecin', 'Godelda', 'Godelinda', 'Godildis', 'Goduuara', 'Goiswinth', 'Gomatrudis', 'Gothuuera', 'Grimuuara', 'Gudula', 'Gudule', 'Gundrada', 'Gundrade', 'Gundradis', 'Guntheuc', 'Gunza', 'Guodhelda', 'Guodlia', 'Hadaken', 'Hamesindis', 'Harwara', 'Hatilde', 'Hazeca', 'Heilewif', 'Heilswinda', 'Heldeburga', 'Heletradana', 'Heleuuidis', 'Helinda', 'Heltrada', 'Hengelsenda', 'Herden', 'Herdin', 'Herenborg', 'Herenfrida', 'Herleva', 'Herlinda', 'Hermengarda', 'Hildberta', 'Hildborg', 'Hildcardis', 'Hildeberga', 'Hildeburg', 'Hildegard', 'Hildegarde', 'Hildegardis', 'Hildegund', 'Hildelana', 'Hildemunda', 'Hildeswindis', 'Hildeuuara', 'Hildeuuif', 'Hildewara', 'Hildewif', 'Hildrada', 'Hildwara', 'Hiltrude', 'Himiltrud', 'Hirmenlind', 'Hodierna', 'Hostaruuara', 'Hruodgarda', 'Hruotberta', 'Hruothraud', 'Ida', 'Idasgarda', 'Ideslef', 'Idesuuif', 'Ideswif', 'Idisiardis', 'Imicina', 'Imma', 'Ingela', 'Ingelburga', 'Ingelswindis', 'Ingeltrud', 'Ingeltrude', 'Ingeltrudis', 'Ingeluuara', 'Ingelwara', 'Ingitrude', 'Ingoberg', 'Ingunde', 'Iodberta', 'Iolitha', 'Irmengard', 'Irmenhild', 'Irmenlind', 'Irmgard', 'Irmingard', 'Isa', 'Isburch', 'Itta', 'Joveta', 'Kunegund', 'Landburuga', 'Landgarda', 'Landrada', 'Lanthechilde', 'Lanthildis', 'Lantuuara', 'Lebdrudis', 'Leddinga', 'Leubast', 'Leubovera', 'Leuekin', 'Leuuich', 'Liaueld', 'Lidiardis', 'Liedrada', 'Liefhun', 'Lieftet', 'Lietgarda', 'Lietgardis', 'Lietuuif', 'Lieuuara', 'Lifgarda', 'Liobsynde', 'Liodburga', 'Liodgard', 'Liodrada', 'Litburh', 'Litgardis', 'Litiardis', 'Liutgarde', 'Luitgarde', 'Machtildis', 'Madelgarda', 'Madelgarde', 'Madelrada', 'Madhalberta', 'Magnatrude', 'Magthildis', 'Magtildis', 'Marcatrude', 'Marcovefa', 'Markuuara', 'Mathildis', 'Mauriana', 'Mechtild', 'Megenberta', 'Megendrod', 'Megenhelda', 'Megenlind', 'Megenlioba', 'Megensind', 'Megensinda', 'Megenuuara', 'Meinburg', 'Meinnelda', 'Meinsent', 'Meinswindis', 'Menborch', 'Merofled', 'Merwig', 'Methdin', 'Moschia', 'Murina', 'Nantechildis', 'Nidlebis', 'Nordrada', 'Oda', 'Odburga', 'Odela', 'Odgiva', 'Odguda', 'Odgudana', 'Odlenda', 'Odriana', 'Ogiva', 'Olburgis', 'Olga', 'Osgarda', 'Osgiua', 'Otberta', 'Otgiua', 'Otgiva', 'Oydela', 'Pharahildis', 'Plectrudis', 'Radborg', 'Radburg', 'Radburgis', 'Radegund', 'Radeken', 'Radgert', 'Radlia', 'Radogund', 'Radsuinda', 'Ragnachilde', 'Rainilda', 'Rainildis', 'Ramburga', 'Regana', 'Regenburuga', 'Regenelda', 'Regenlind', 'Regenset', 'Reginsuint', 'Regintrude', 'Regnetrudis', 'Regneuuig', 'Reinewif', 'Reingard', 'Reingardis', 'Reingart', 'Reingaud', 'Reingod', 'Reinsuent', 'Renburgis', 'Rennewief', 'Riberta', 'Richelda', 'Richildis', 'Riclindis', 'Ricsuinda', 'Rigunth', 'Rikildis', 'Rinelt', 'Rinilda', 'Rodburga', 'Rodgarda', 'Rodgardae', 'Rofsind', 'Rosamund', 'Rotburga', 'Rothaide', 'Rothin', 'Rotlenda', 'Rotrud', 'Rotrude', 'Rotrudis', 'Ruodhaid', 'Ruothild', 'Ruothilde', 'Seburg', 'Seburga', 'Siborch', 'Siburg', 'Sigarda', 'Sigberta', 'Sigeberta', 'Sigeburgis', 'Sigethrod', 'Sigiburgis', 'Snelburch', 'Stenburch', 'Stilleuuara', 'Strilleburg', 'Suitburgis', 'Susanna', 'Swanahilde', 'Syardis', 'Teudsindis', 'Teutberga', 'Thancuuara', 'Theaduuara', 'Thedela', 'Theodelinda', 'Theoderada', 'Theodrada', 'Theodrade', 'Theudechild', 'Theudelinde', 'Theutberga', 'Thidela', 'Thieda', 'Thietgarda', 'Thietuuich', 'Thietwara', 'Thiodsind', 'Thiodsuinda', 'Thiutuuara', 'Thrasborg', 'Thrudberga', 'Ticekin', 'Tietlenda', 'Tietza', 'Trhutborgana', 'Trudlinde', 'Trutilda', 'UUaldburg', 'UUaldethruda', 'UUeremund', 'UUerenburoc', 'UUiburgis', 'UUindborog', 'UUinebarga', 'UUireda', 'UUlgarda', 'Uda', 'Ultrogotha', 'Uoldolberta', 'Veneranda', 'Vrowecin', 'Vualdberta', 'Vualdedruda', 'Vualdetruda', 'Vuifken', 'Vuinetberta', 'Vuiuechin', 'Vuldretrada', 'Vulfegundis', 'Waldrada', 'Wavin', 'Wiburgis', 'Wihted', 'Wilberga', 'Wilgeva', 'Willelda', 'Willesuindis', 'Wisigard', 'Wivecin', 'Wivin', 'Wlbergis', 'Wlbgis', 'Wlfildis', 'Wlgert'];
  if (type === 1) {
    names = sample(nm2);
  } else {
    names = sample(nm1);
  }
  return names;
}
