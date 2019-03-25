import sample from 'lodash/sample';

export default function angloSaxons() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Acwald', 'Acwuld', 'Acwulf', 'Adalbert', 'Adelard', 'Adulf', 'Aedbald', 'Aedilbert', 'Aedilhum', 'Aedilhun', 'Aednoth', 'Aedwulf', 'Aefic', 'Aegelric', 'Aegenwulf', 'Aegheard', 'Aelbehrt', 'Aelbert', 'Aelffrith', 'Aelfgar', 'Aelfgeat', 'Aelfgiest', 'Aelfheah', 'Aelfhelm', 'Aelfhere', 'Aelfhun', 'Aelfmaer', 'Aelfnoth', 'Aelfred', 'Aelfric', 'Aelfsi', 'Aelfsige', 'Aelfstan', 'Aelfwald', 'Aelfwaru', 'Aelfwear', 'Aelfweard', 'Aelfwin', 'Aelfwine', 'Aelfwold', 'Aelred', 'Aelwin', 'Aembriht', 'Aenheri', 'Aescwig', 'Aescwine', 'Aethelbald', 'Aethelbehrt', 'Aethelbeorht', 'Aethelbert', 'Aethelbricht', 'Aetheldred', 'Aethelfrid', 'Aethelfrith', 'Aethelgar', 'Aethelhard', 'Aethelheah', 'Aethelheard', 'Aethelhelm', 'Aethelhere', 'Aethelhun', 'Aethelmaer', 'Aethelmod', 'Aethelmund', 'Aethelnoth', 'Aethelred', 'Aethelric', 'Aethelsige', 'Aethelstan', 'Aethelulf', 'Aethelwald', 'Aethelwalh', 'Aethelweah', 'Aethelweald', 'Aethelweard', 'Aethelwig', 'Aethelwin', 'Aethelwine', 'Aethelwold', 'Aethelwulf', 'Aethilheard', 'Aethilwald', 'Agilbert', 'Ahlfrith', 'Ailmar', 'Ailnoth', 'Ailred', 'Ailwin', 'Albold', 'Alcfrith', 'Alchere', 'Alchfrid', 'Alchfrith', 'Alchred', 'Alcred', 'Alcuin', 'Alden', 'Aldfrid', 'Aldfrith', 'Aldhelm', 'Aldhere', 'Aldhun', 'Aldred', 'Aldwulf', 'Aldwyn', 'Alfar', 'Alfgar', 'Alfric', 'Alfwaerd', 'Alfwine', 'Alfwold', 'Algar', 'Alhfrith', 'Alhhere', 'Alhmund', 'Alhstan', 'Alhwald', 'Alkmund', 'Allnut', 'Allric', 'Alnod', 'Alnoth', 'Aloc', 'Alphege', 'Alred', 'Alric', 'Aluuard', 'Alward', 'Alwin', 'Alwold', 'Alwyn', 'Alwyne', 'Andhere', 'Andhun', 'Angeltheow', 'Angenlaf', 'Angenmaer', 'Angenwit', 'Anlaf', 'Anselm', 'Ansfrid', 'Archibald', 'Arnulf', 'Ascferth', 'Aschere', 'Ashwin', 'Asulf', 'Athelheah', 'Athelmod', 'Athelric', 'Aylward', 'Aylwin', 'Badanoth', 'Badulf', 'Baegloc', 'Baeldaeg', 'Baerbald', 'Baerwald', 'Baldhere', 'Baldred', 'Baldric', 'Baldthryth', 'Baldwin', 'Baldwine', 'Baldwulf', 'Balther', 'Bardolph', 'Barduwulf', 'Beadumund', 'Beadured', 'Beaduric', 'Beadwheard', 'Beagmund', 'Beagnoth', 'Bealdwine', 'Beanburh', 'Beanstan', 'Bedfrith', 'Bedgeat', 'Bedhelm', 'Bedric', 'Bedwig', 'Behrtferth', 'Behrtwald', 'Beorcol', 'Beorhtel', 'Beorhtfrith', 'Beorhthelm', 'Beorhthere', 'Beorhtmaer', 'Beorhtmund', 'Beorhtnoth', 'Beorhtric', 'Beorhtsige', 'Beorhtstan', 'Beorhtweald', 'Beorhtwig', 'Beorhtwulf', 'Beornfred', 'Beornfrith', 'Beornheard', 'Beornhelm', 'Beornmod', 'Beornmund', 'Beornnoth', 'Beornoth', 'Beornred', 'Beornric', 'Beornstan', 'Beornwald', 'Beornward', 'Beornwulf', 'Beorthelm', 'Beorthmaer', 'Beorthwulf', 'Beorward', 'Beothuk', 'Beowulf', 'Bercthun', 'Berenwald', 'Berhtric', 'Berhtwald', 'Berhtwulf', 'Beric', 'Berihert', 'Bermund', 'Bernulf', 'Bernwini', 'Berthelm', 'Berthun', 'Bertram', 'Bertred', 'Bertulf', 'Bertwald', 'Berwulf', 'Berwyn', 'Bilfrith', 'Bilheard', 'Billfrid', 'Billfrith', 'Birstan', 'Blacwin', 'Blaecman', 'Blithhere', 'Blithweard', 'Bothelm', 'Botolph', 'Botsige', 'Botulf', 'Botwine', 'Botwulf', 'Bregowine', 'Brictric', 'Bridferth', 'Brifard', 'Brihteah', 'Brihthere', 'Brihtnoth', 'Brihtsige', 'Brihtwald', 'Brithnoth', 'Brithun', 'Brocwulf', 'Brunheard', 'Bruning', 'Brunloc', 'Brunweard', 'Brunwulf', 'Brychan', 'Bryning', 'Brynstan', 'Burchard', 'Burghal', 'Burgheard', 'Burghelm', 'Burghred', 'Burgred', 'Burgweard', 'Burgwine', 'Burgwulf', 'Burhhelm', 'Burhred', 'Burhtred', 'Byrhtferth', 'Byrhtnoth', 'Byrnhorn', 'Byrnstan', 'Byrnwold', 'Byrtferth', 'Caedmon', 'Caedwalla', 'Calemund', 'Calunoth', 'Cameleac', 'Cantwine', 'Carileph', 'Cathwulf', 'Ceadwalla', 'Ceadwealla', 'Ceafor', 'Ceawlin', 'Cenbeorht', 'Cenberet', 'Cenfirth', 'Cenfrith', 'Cenfus', 'Cenhelm', 'Cenhere', 'Cenred', 'Centweald', 'Centwine', 'Cenwalch', 'Cenwalh', 'Cenwulf', 'Ceolbald', 'Ceolbeald', 'Ceolfrid', 'Ceolfrih', 'Ceolfrith', 'Ceolheard', 'Ceolhelm', 'Ceolhere', 'Ceolmaer', 'Ceolmund', 'Ceolnoth', 'Ceolred', 'Ceolswith', 'Ceolwald', 'Ceolweald', 'Ceolweard', 'Ceolwulf', 'Ceonred', 'Ceowald', 'Cerdic', 'Ceredig', 'Clarembald', 'Coelfrid', 'Coenbehrt', 'Coengilsus', 'Coenhelm', 'Coenred', 'Coenwalh', 'Coenwulf', 'Coleman', 'Colman', 'Condede', 'Conewalch', 'Cuichelm', 'Cuthbald', 'Cuthbeorht', 'Cuthbert', 'Cuthburg', 'Cutheard', 'Cuthen', 'Cuthert', 'Cuthfrith', 'Cuthgils', 'Cuthheard', 'Cuthhelm', 'Cuthhere', 'Cuthman', 'Cuthred', 'Cuthsige', 'Cuthwin', 'Cuthwine', 'Cuthwulf', 'Cwenburg', 'Cwichelm', 'Cynebald', 'Cynebehrt', 'Cynebil', 'Cyneburg', 'Cynefrid', 'Cynegels', 'Cynegils', 'Cynegisl', 'Cyneheah', 'Cyneheard', 'Cynehelm', 'Cynehere', 'Cynelaf', 'Cynemaer', 'Cynemund', 'Cynered', 'Cynesige', 'Cynestan', 'Cyneswith', 'Cynewald', 'Cyneweard', 'Cynewulf', 'Cynferth', 'Cynfrith', 'Cynhelm', 'Cynibert', 'Cynidr', 'Cynred', 'Cynreow', 'Cynric', 'Cynsige', 'Cynwulf', 'Daedheah', 'Daegheard', 'Darwin', 'Delwyn', 'Deneheard', 'Denewulf', 'Deorlaf', 'Deorling', 'Deormod', 'Deormund', 'Deornoth', 'Deorsige', 'Deorwine', 'Deowuc', 'Derman', 'Digoth', 'Domgeat', 'Dreamwulf', 'Drithelm', 'Dryhthelm', 'Drythelm', 'Duceman', 'Dudemaer', 'Dudeman', 'Dunnere', 'Dunstan', 'Dycgbeorht', 'Eadbald', 'Eadbeald', 'Eadbehrt', 'Eadbeorht', 'Eadbert', 'Eadda', 'Eadfrid', 'Eadfrith', 'Eadger', 'Eadheard', 'Eadhed', 'Eadhelm', 'Eadhere', 'Eadlac', 'Eadmaer', 'Eadmer', 'Eadmod', 'Eadmund', 'Eadnod', 'Eadnoth', 'Eadred', 'Eadric', 'Eadsige', 'Eadstan', 'Eadulf', 'Eadwacer', 'Eadwald', 'Eadward', 'Eadweald', 'Eadweard', 'Eadwig', 'Eadwin', 'Eadwine', 'Eadwold', 'Eadwulf', 'Eadwyn', 'Eahfrid', 'Ealda', 'Ealdbehrt', 'Ealdbeorht', 'Ealdfrith', 'Ealdhelm', 'Ealdhere', 'Ealdred', 'Ealdwine', 'Ealdwulf', 'Ealfled', 'Ealgmund', 'Ealhelm', 'Ealhheard', 'Ealhhere', 'Ealhhun', 'Ealhmund', 'Ealhred', 'Ealhsige', 'Ealhstan', 'Ealhswith', 'Ealric', 'Eambald', 'Eanbald', 'Eanbeorht', 'Eanfrid', 'Eanfrith', 'Eanhere', 'Eanlac', 'Eanmaer', 'Eanred', 'Eansige', 'Eanulf', 'Eanwine', 'Eanwulf', 'Earcanwald', 'Earconbehrt', 'Earconbert', 'Eardnoth', 'Eardwul', 'Eardwulf', 'Earnmund', 'Earnwulf', 'Earpwald', 'Easterwine', 'Eastorwine', 'Ebrard', 'Ecgbald', 'Ecgbehrt', 'Ecgbert', 'Ecgfrith', 'Ecgheard', 'Ecghere', 'Ecgmund', 'Ecgred', 'Ecgric', 'Ecgtheow', 'Ecgwald', 'Ecgwine', 'Ecgwulf', 'Edric', 'Edward', 'Edwy', 'Eegelwin', 'Egbert', 'Egbin', 'Egbryht', 'Egelbert', 'Egelwin', 'Egferth', 'Egfrid', 'Egfrith', 'Egred', 'Egric', 'Egwine', 'Eilmund', 'Einhard', 'Ekbert', 'Ekkehard', 'Elfstan', 'Elphege', 'Elstan', 'Eluard', 'Eluric', 'Elwin', 'Elwyn', 'Engelard', 'Engelram', 'Eoforheard', 'Eoforich', 'Eoforweald', 'Eohhere', 'Eohric', 'Eomer', 'Eorcenbehrt', 'Eorconbeald', 'Eorconbehrt', 'Eorconweald', 'Eored', 'Eorkonweald', 'Eormenraed', 'Eormenread', 'Eorphere', 'Eorpwald', 'Eosterwine', 'Erconbert', 'Eric', 'Ermenred', 'Erminus', 'Ernulf', 'Erwald', 'Erwin', 'Esegar', 'Estmar', 'Estmund', 'Ethbin', 'Ethelred', 'Ethelric', 'Ethelsige', 'Eumer', 'Everard', 'Ewald', 'Eward', 'Ewias', 'Farman', 'Feleogild', 'Felgild', 'Feologild', 'Feolomaer', 'Feolugeld', 'Feolumaer', 'Flodwig', 'Folcheorht', 'Fordwin', 'Forthhere', 'Forthred', 'Forwin', 'Frealaf', 'Freawine', 'Fremund', 'Freodhoric', 'Freola', 'Freomund', 'Freothul', 'Freothulaf', 'Frigedag', 'Frithebert', 'Frithegod', 'Frithestan', 'Frithowulf', 'Frithugar', 'Frithugeorn', 'Frithugis', 'Frithulaf', 'Frithuwald', 'Fromund', 'Fulbert', 'Fullofaudes', 'Gaenbald', 'Gaenbeald', 'Gaenburh', 'Gaerwulf', 'Ganulf', 'Garbeorht', 'Garmund', 'Gebmund', 'Geldfrith', 'Geldhere', 'Geldwine', 'Gerbert', 'Germund', 'Gernebern', 'Gladwin', 'Gleawfrith', 'Godbert', 'Godefrid', 'Godfred', 'Godfrid', 'Godfrith', 'Godhelm', 'Godhere', 'Godhold', 'Goding', 'Godmaer', 'Godman', 'Godmann', 'Godmund', 'Godred', 'Godric', 'Godwald', 'Godwin', 'Godwine', 'Godwulf', 'Godwyn', 'Goldwin', 'Goldwine', 'Goodwin', 'Gosbeorht', 'Gosfrid', 'Graham', 'Grimbald', 'Grimbeald', 'Grimcytel', 'Grimwold', 'Gudram', 'Gumbeorht', 'Gumweald', 'Gundulf', 'Gunuert', 'Guthfrith', 'Guthhere', 'Guthlac', 'Guthlaf', 'Guthmaer', 'Guthred', 'Haeferic', 'Haemgils', 'Haemgisl', 'Haethbeorht', 'Harding', 'Hardred', 'Hardulph', 'Hardwin', 'Harhold', 'Hariulf', 'Harold', 'Hathcyn', 'Hathweald', 'Heahfrith', 'Heahhbeorht', 'Heahmund', 'Heahred', 'Heahstan', 'Healfdene', 'Heardbehrt', 'Heardinc', 'Heardred', 'Heardwulf', 'Heferth', 'Helmhead', 'Helmheard', 'Helpric', 'Hengest', 'Heorrenda', 'Heorstan', 'Heorulaf', 'Heorulf', 'Heorured', 'Heoruweald', 'Heoruwulf', 'Herbert', 'Herebeald', 'Herebeard', 'Herebehrt', 'Herebeorht', 'Herebert', 'Hereferth', 'Herefrid', 'Herefrith', 'Heregeard', 'Heregeorn', 'Heregils', 'Heregod', 'Herelaf', 'Hereman', 'Heremod', 'Herered', 'Hereric', 'Hereward', 'Hereweald', 'Herewulf', 'Heribert', 'Heriburg', 'Herimann', 'Hering', 'Herrig', 'Herward', 'Hethin', 'Hethor', 'Hewald', 'Hibald', 'Higbald', 'Hildebeorht', 'Hildwulf', 'Hincmar', 'Hiroc', 'Hleogar', 'Hlothere', 'Hlothhere', 'Holbert', 'Hondscio', 'Horik', 'Hothere', 'Hreodbeorht', 'Hrethbeorht', 'Hrethric', 'Hringhere', 'Hrothbeorht', 'Hrothgar', 'Hrothlaf', 'Hrothmaer', 'Hrothsige', 'Hrothwulf', 'Huaetberct', 'Hubert', 'Hughoc', 'Humbeald', 'Humbert', 'Humberth', 'Hunbald', 'Hunbeald', 'Hunbehrt', 'Hunbeorht', 'Hundine', 'Hunferth', 'Hunfirth', 'Hunfrith', 'Hunlaf', 'Hunsige', 'Hunstan', 'Hunwald', 'Hwaetbert', 'Hwaetmund', 'Hwaetsige', 'Hwitmann', 'Hybald', 'Hygbald', 'Hygebald', 'Hygebehrt', 'Hygebeorht', 'Hygelac', 'Hygered', 'Hylpric', 'Hynsige', 'Hythwalda', 'Iaenbeorht', 'Idhelm', 'Idmaer', 'Ielfgar', 'Ielfred', 'Iestyn', 'Ilfred', 'Ilhelm', 'Indulf', 'Ingeld', 'Ingilram', 'Inguburh', 'Ingulf', 'Ingulph', 'Ingwald', 'Ingweald', 'Ingwulf', 'Instio', 'Inwaer', 'Irminric', 'Itermon', 'Ithamar', 'Jaenbeorht', 'Jaenbert', 'Jambert', 'Jaruman', 'Jurmin', 'Kenelm', 'Kennald', 'Kenward', 'Lambert', 'Lambin', 'Lanfranc', 'Leavold', 'Leodbriht', 'Leodhere', 'Leodwald', 'Leofard', 'Leofgeat', 'Leofgiest', 'Leofheah', 'Leofhere', 'Leofing', 'Leofnoth', 'Leofred', 'Leofric', 'Leofsige', 'Leofstan', 'Leofwig', 'Leofwine', 'Leovenath', 'Letard', 'Leuthere', 'Liliwin', 'Lindhard', 'Litwin', 'Liudolf', 'Lulling', 'Madulf', 'Maegenfrith', 'Maerec', 'Maerheard', 'Maerleswein', 'Maethelgar', 'Maldred', 'Mansige', 'Mearcred', 'Medwin', 'Mensige', 'Merchelm', 'Merefin', 'Merehwit', 'Merewala', 'Merewald', 'Meriet', 'Mervin', 'Mildred', 'Morcar', 'Morkere', 'Norbert', 'Nordman', 'Norman', 'Northman', 'Nothelm', 'Nothhelm', 'Nothwulf', 'Odalric', 'Odard', 'Odbehrt', 'Odoacer', 'Oelfwine', 'Oeric', 'Oethelwald', 'Oftfor', 'Ohthere', 'Oidilwald', 'Ongentheow', 'Ordbehrt', 'Ordgar', 'Ordheah', 'Ordlaf', 'Ordmaer', 'Ordric', 'Ormar', 'Orped', 'Osbald', 'Osbeohrt', 'Osbeorn', 'Osbryht', 'Oscytel', 'Osegod', 'Osfrid', 'Osfrith', 'Osgar', 'Osgood', 'Oshern', 'Oslac', 'Oslaf', 'Oslafa', 'Osmaer', 'Osmer', 'Osmod', 'Osmund', 'Osred', 'Osric', 'Osulf', 'Osweald', 'Oswin', 'Oswine', 'Oswiu', 'Oswold', 'Oswudu', 'Oswuff', 'Oswulf', 'Oswy', 'Oswyn', 'Osyth', 'Oughtred', 'Pechthelm', 'Pecthelm', 'Peohtgils', 'Peohthelm', 'Peohtred', 'Peohtric', 'Peohtwine', 'Pilheard', 'Plechelm', 'Pleghelm', 'Plegmund', 'Radbod', 'Raedfrid', 'Raedwulf', 'Raegenhere', 'Ragener', 'Rahere', 'Randal', 'Randwulf', 'Ranulf', 'Redwald', 'Regenbald', 'Regengar', 'Regenhere', 'Regenmaer', 'Regenweald', 'Reginald', 'Regnheah', 'Regnhere', 'Rendel', 'Ribald', 'Ricbert', 'Richeard', 'Ricmaer', 'Ricmann', 'Ricsig', 'Ricsige', 'Robert', 'Roderic', 'Roderick', 'Rodney', 'Rodolph', 'Roger', 'Romund', 'Rumbald', 'Rumwald', 'Rumwold', 'Ryhrtwold', 'Sabehrt', 'Sabeorht', 'Sabert', 'Saebald', 'Saebehrt', 'Saebeorht', 'Saefugl', 'Saegar', 'Saegeat', 'Saeward', 'Saeweard', 'Saewig', 'Saewine', 'Saewulf', 'Saward', 'Sawin', 'Scenwulf', 'Scirheah', 'Scirheard', 'Seaxwulf', 'Seeman', 'Selewine', 'Selred', 'Selwyn', 'Sentwine', 'Sexbald', 'Sexfred', 'Sexhelm', 'Sexmund', 'Sexwulf', 'Sibert', 'Sibwine', 'Sideman', 'Siferth', 'Sigbert', 'Sigebald', 'Sigebehrt', 'Sigebert', 'Sigebryht', 'Sigeferth', 'Sigegar', 'Sigegeat', 'Sigehaeth', 'Sigeheah', 'Sigehelm', 'Sigehere', 'Sigelac', 'Sigered', 'Sigeric', 'Sigeweard', 'Sigewine', 'Sigewulf', 'Sighard', 'Sighere', 'Sigstein', 'Sired', 'Siward', 'Sledda', 'Snaroc', 'Sperling', 'Stidolph', 'Stigand', 'Stithbeorht', 'Stithwulf', 'Stronglic', 'Strongric', 'Swaebhard', 'Swaefheard', 'Swartcol', 'Swatreband', 'Sweartling', 'Swefred', 'Swetman', 'Swidbert', 'Swidhelm', 'Swithbert', 'Swithin', 'Swithulf', 'Swithun', 'Swithwulf', 'Tancred', 'Tatfrid', 'Tathere', 'Tating', 'Tatuini', 'Tatwine', 'Tatwulf', 'Teoweald', 'Teowulf', 'Thanchere', 'Theabul', 'Theobald', 'Theodbald', 'Theodbeald', 'Theodbeorht', 'Theodgar', 'Theodlac', 'Theodoric', 'Theodric', 'Theodulf', 'Thingfrith', 'Thorweald', 'Thraesfrith', 'Thruidred', 'Thrydwulf', 'Thrythbeorht', 'Thunor', 'Thurstan', 'Tidfrith', 'Tidhelm', 'Tidhere', 'Tidsige', 'Tidweald', 'Tidwulf', 'Tilbert', 'Tilhere', 'Tilman', 'Tilmund', 'Tilwald', 'Tondbehrt', 'Tondbert', 'Tondhere', 'Torhtsige', 'Torold', 'Torphin', 'Torthred', 'Tostig', 'Trumbehrt', 'Trumhere', 'Trumwin', 'Trumwine', 'Trygil', 'Tunbehrt', 'Tunbeorht', 'Tunbert', 'Tunfrith', 'Turbert', 'Turec', 'Turoc', 'Turold', 'Turstan', 'Uchtred', 'Ufegeat', 'Ulfbehrt', 'Ulfcytel', 'Ulfric', 'Ulfrid', 'Ulger', 'Unferth', 'Unlaf', 'Unwona', 'Urien', 'Uscfrea', 'Uxfrea', 'Vadir', 'Vifil', 'Waegdaeg', 'Waegmund', 'Waegstan', 'Waerbeald', 'Waerferth', 'Waerheard', 'Waermund', 'Waernoth', 'Walahfrid', 'Walden', 'Waldere', 'Waldhere', 'Waldwin', 'Walhhere', 'Wallding', 'Walstan', 'Wardlaw', 'Wardric', 'Wathsige', 'Watman', 'Wayland', 'Wealdhere', 'Wealdthaf', 'Wealdtheof', 'Wealhhere', 'Weidrek', 'Weland', 'Weohstan', 'Weohtgar', 'Weonard', 'Weorcgyth', 'Weorchaeth', 'Werferth', 'Werhard', 'Werheard', 'Wermund', 'Werwulf', 'Westerfalca', 'Wicbeorht', 'Wictgils', 'Wictred', 'Widmund', 'Widreth', 'Widsith', 'Widuc', 'Widukind', 'Wiergils', 'Wiermund', 'Wigbeald', 'Wigbeorht', 'Wigbeorn', 'Wigbert', 'Wigestan', 'Wigferth', 'Wigfrith', 'Wighard', 'Wigheard', 'Wighelm', 'Wighere', 'Wightgar', 'Wiglac', 'Wiglaf', 'Wigmaer', 'Wigmund', 'Wigod', 'Wigred', 'Wigric', 'Wigstan', 'Wigthegn', 'Wihtgar', 'Wihtgils', 'Wihthere', 'Wihtlac', 'Wihtlaeg', 'Wihtred', 'Wihtric', 'Wilbehrt', 'Wilbeorht', 'Wilbrord', 'Wilfram', 'Wilfrith', 'Wilgils', 'Wilgisl', 'Wilheard', 'Wilhere', 'Willehad', 'Willibrord', 'Wilmaer', 'Wilmund', 'Wilsiga', 'Wilsige', 'Wimund', 'Winebald', 'Winebeald', 'Winefrith', 'Winegar', 'Winelac', 'Winemaer', 'Winfirth', 'Winfrid', 'Winfrith', 'Winnibald', 'Winsige', 'Winstan', 'Winston', 'Wiohthere', 'Withergild', 'Withermund', 'Wlencing', 'Wolfeius', 'Wolnoth', 'Wolstan', 'Wraecwulf', 'Wuldric', 'Wuldwine', 'Wulfbeald', 'Wulfestan', 'Wulfferd', 'Wulffrith', 'Wulfgar', 'Wulfgeat', 'Wulfhad', 'Wulfheah', 'Wulfhelm', 'Wulfhere', 'Wulflaf', 'Wulfnoth', 'Wulfred', 'Wulfric', 'Wulfrid', 'Wulfrun', 'Wulfsige', 'Wulfsin', 'Wulfstan', 'Wulfthere', 'Wulfweard', 'Wulfwig', 'Wulgan', 'Wulmar', 'Wulpher', 'Wuscfrea', 'Wusfrea', 'Wyard', 'Wynbald', 'Wynfrid', 'Wynfrith', 'Wynhaeth', 'Wynsige', 'Wynstan', 'Yonwin', 'Yric'];
  const nm2 = ['Achae', 'Adellufu', 'Adney', 'Aebbe', 'Aedilberg', 'Aedilburh', 'Aedilhild', 'Aedilthryd', 'Aedwen', 'Aegthryth', 'Aelbfled', 'Aelfgifu', 'Aelfgyfu', 'Aelfgyth', 'Aelflaed', 'Aelflead', 'Aelfrun', 'Aelfswith', 'Aelfthryth', 'Aelfwyn', 'Aelfwynn', 'Aelgifu', 'Aengifu', 'Aeschild', 'Aethelberga', 'Aethelburg', 'Aethelburh', 'Aethelflaed', 'Aethelgifu', 'Aethelhild', 'Aethelhun', 'Aethelind', 'Aethelswith', 'Aethelthrith', 'Aethelthryd', 'Aethelthryth', 'Aethelu', 'Aethelwaru', 'Agatha', 'Agenilda', 'Agnes', 'Ailred', 'Akelda', 'Alburga', 'Alchflead', 'Alchfrid', 'Aldreda', 'Alfild', 'Alfilda', 'Alfrun', 'Alfwen', 'Alhburg', 'Alkeld', 'Alkelda', 'Aluburg', 'Aluhburg', 'Arild', 'Athilda', 'Aylild', 'Aylyld', 'Baldehuia', 'Baldeth', 'Baldethiva', 'Baldguia', 'Baldhild', 'Baldith', 'Balethiva', 'Balthildis', 'Bathild', 'Beadohild', 'Beaduburg', 'Beaduthryth', 'Bealdthryth', 'Bebbe', 'Begild', 'Begilda', 'Beorhtwynn', 'Beorngyth', 'Beornthryth', 'Beornwynn', 'Berchthild', 'Berhtgyth', 'Bertrade', 'Beyhild', 'Bilswith', 'Birghiva', 'Botild', 'Botilda', 'Botill', 'Bregeswith', 'Bregusuid', 'Breguswith', 'Bricheve', 'Brichheve', 'Brichterith', 'Brichtled', 'Brichtrede', 'Brichtrethe', 'Bricteva', 'Bricthiua', 'Bricthled', 'Brictiua', 'Brictiva', 'Brictled', 'Brictuia', 'Brictwen', 'Brigthwyna', 'Brihctiua', 'Brihteue', 'Brihtgiua', 'Brihtiua', 'Brihtiue', 'Britheue', 'Britheva', 'Brithiva', 'Brithreth', 'Brithrethe', 'Brithwen', 'Bucge', 'Burchwen', 'Burghwenna', 'Burgwenta', 'Burgwynn', 'Burwena', 'Burwenna', 'Cengifu', 'Ceolburh', 'Ceolfrith', 'Ceolwynn', 'Coenberg', 'Coenburg', 'Coenburga', 'Cuthberg', 'Cuthburga', 'Cuthburh', 'Cuthfleda', 'Cuthswith', 'Cwenburg', 'Cwenburh', 'Cwenthryth', 'Cyneberg', 'Cyneburg', 'Cyneburh', 'Cynedeall', 'Cynehild', 'Cyneswith', 'Cynethryth', 'Cynewise', 'Cyniburg', 'Cynuise', 'Cynwise', 'Denegifu', 'Denegyth', 'Derehild', 'Domneva', 'Eaba', 'Eadburg', 'Eadburh', 'Eadgifu', 'Eadgyd', 'Eadgyfu', 'Eadgyth', 'Eadild', 'Eadwine', 'Eadwynn', 'Ealdgifu', 'Ealdgyth', 'Ealhburg', 'Ealhhild', 'Ealhild', 'Ealhswith', 'Ealhswuth', 'Eanburg', 'Eanflaed', 'Eanflead', 'Eanfled', 'Eangyth', 'Eanswida', 'Eanswith', 'Eanswitha', 'Eanswyth', 'Eanwin', 'Earcongota', 'Eawyn', 'Ecgfrida', 'Ecgfrithu', 'Ecgwynn', 'Edild', 'Edilda', 'Ediltrudis', 'Edith', 'Edoma', 'Edusa', 'Edwen', 'Egefride', 'Einilda', 'Elfilda', 'Elfswitha', 'Emma', 'Enfleda', 'Engeled', 'Engeleis', 'Engeleisia', 'Engelieth', 'Engelise', 'Eorcengota', 'Eorcongota', 'Eormenburh', 'Eormengard', 'Eormengyth', 'Eormenhild', 'Eormenhilde', 'Ercongota', 'Erkengota', 'Ermenburga', 'Ermenhilda', 'Estrid', 'Estrith', 'Ethelflaed', 'Ethelhild', 'Eudelme', 'Everild', 'Everildis', 'Freawaru', 'Frethesant', 'Freware', 'Frigyth', 'Fritheswith', 'Frithugyth', 'Frithuswith', 'Frythegith', 'Garwynn', 'Geatfleda', 'Gertrude', 'Gethwine', 'Godehese', 'Godelina', 'Goderun', 'Godgifu', 'Godgyth', 'Godlefe', 'Godrun', 'Godwyna', 'Goldberga', 'Goldcorn', 'Goldcorna', 'Goldeburga', 'Golderon', 'Goldhen', 'Goldrun', 'Goldyna', 'Guthild', 'Gytha', 'Haunild', 'Heagyth', 'Heahburg', 'Heahgyth', 'Heahthryth', 'Heathuburg', 'Hehilde', 'Heiu', 'Hendina', 'Herburga', 'Hereburg', 'Heregyth', 'Herelufu', 'Heresuid', 'Hereswith', 'Herewynn', 'Hermynhild', 'Hild', 'Hilda', 'Hildeburg', 'Hildeburh', 'Hildegard', 'Hildegyth', 'Hildelida', 'Hildelith', 'Hildilid', 'Hildithryth', 'Hiltrude', 'Hounild', 'Hounilda', 'Hringwynn', 'Hrodwyn', 'Hrotsvitha', 'Hugeburc', 'Hunburg', 'Inga', 'Juthwara', 'Lefsued', 'Lefsuet', 'Leofgifu', 'Leofgyth', 'Leoflaed', 'Leofrun', 'Leoftaet', 'Leofwaru', 'Leofwynn', 'Maerwynn', 'Maethild', 'Mathilda', 'Matilda', 'Mildburh', 'Mildgyth', 'Mildoina', 'Mildrith', 'Mildthryth', 'Mindred', 'Modthryth', 'Nothgyth', 'Oedilburga', 'Osburga', 'Osburh', 'Osgifu', 'Osgyth', 'Oslafa', 'Osoryd', 'Osthryd', 'Osthryth', 'Quendreda', 'Quoenburg', 'Raenmaeld', 'Rafenild', 'Ricola', 'Rienmellt', 'Rimilda', 'Rimilde', 'Ronilda', 'Roswitha', 'Rowena', 'Rymenhild', 'Saeburg', 'Saegifu', 'Saegyth', 'Saehild', 'Saethryd', 'Saethryth', 'Saewara', 'Saewynn', 'Saxleue', 'Seaxburg', 'Sexhuie', 'Sidelufu', 'Sidwell', 'Siflaed', 'Sigegifu', 'Somerhild', 'Somerild', 'Stanfleda', 'Stanflede', 'Stangyth', 'Stanhild', 'Sunngifu', 'Sunnild', 'Theberga', 'Thedlef', 'Thedware', 'Theorigitha', 'Thurrieua', 'Tidhild', 'Tonild', 'Tortgith', 'Tortgyth', 'Touild', 'Touillda', 'Touilt', 'Turgiua', 'Uuordgiue', 'Vluerona', 'Waerblith', 'Waerburh', 'Waerhild', 'Wealhburh', 'Wealhtheow', 'Wendreda', 'Wenfleda', 'Wengeua', 'Wengewe', 'Wenyld', 'Weynild', 'Wicthiue', 'Wictieue', 'Wictiue', 'Wifrun', 'Wigburg', 'Wigswith', 'Wihtburg', 'Wihtburh', 'Wilcum', 'Wilthryth', 'Winfred', 'Winfrith', 'Witburh', 'Withburga', 'Wiuerona', 'Wlanchild', 'Wlankild', 'Wlfrun', 'Wrtheve', 'Wrthiue', 'Wuderoua', 'Wulburg', 'Wulfgifu', 'Wulfhild', 'Wulflead', 'Wulfrun', 'Wulfthryth', 'Wulftrudis', 'Wulfwaru', 'Wulfwyn', 'Wulfwynn', 'Wychtleth', 'Wyneue', 'Wynflaed', 'Wynflead', 'Wynyeue', 'Wyverun', 'Ymma'];
  const nm3 = ['Aber', 'Ast', 'Auch', 'Auchen', 'Ach', 'Auchter', 'Bal', 'Balla', 'Bally', 'Ball', 'Brad', 'Bre', 'Caer', 'Car', 'Cul', 'Cwm', 'Cum', 'Dal', 'Din', 'Dinas', 'Drum', 'Dun', 'Dum', 'Fin', 'Inver', 'Kil', 'Kin', 'Kyle', 'Lan', 'Lhan', 'Llan', 'Lang', 'Lin', 'Llyn', 'Mynydd', 'Nan', 'Nans', 'Nant', 'Nor', 'Pen', 'Pit', 'Pol', 'Pont', 'Porth', 'Shep', 'Ship', 'Stan', 'Stead', 'Ster', 'Strath', 'Sud', 'Sut', 'Tre', 'Tilly', 'Win'];
  const nm4 = ['afon', 'ay', 'beck', 'berg', 'berry', 'borough', 'bost', 'brough', 'burgh', 'bury', 'by', 'carden', 'caster', 'cester', 'ceter', 'chester', 'cheth', 'combe', 'coombe', 'cot', 'cott', 'dale', 'dean', 'den', 'don', 'ea', 'eig', 'ey', 'field', 'firth', 'ford', 'forth', 'fos', 'foss', 'garth', 'gate', 'ghyll', 'gill', 'glen', 'gowt', 'ham', 'hithe', 'holm', 'hope', 'hurst', 'hythe', 'ing', 'keld', 'keth', 'kirk', 'lea', 'leigh', 'ley', 'mere', 'minster', 'mouth', 'ness', 'pool', 'port', 'shaw', 'stead', 'ster', 'stow', 'thorp', 'thorpe', 'thwaite', 'toft', 'ton', 'tun', 'twatt', 'wardine', 'weald', 'wich', 'wick', 'wold', 'worth', 'worthy', 'wych', 'wyke'];
  const nm5 = ['Archer', 'Bacchus', 'Bailey', 'Barber', 'Barker', 'Baxter', 'Bekker', 'Bender', 'Berger', 'Boatwright', 'Bowman', 'Brewer', 'Butler', 'Campion', 'Cantrell', 'Carpenter', 'Carrin', 'Carter', 'Cartwright', 'Carver', 'Cater', 'Century', 'Chafer', 'Chaffer', 'Chalker', 'Challender', 'Chambers', 'Chandler', 'Chaplin', 'Chapman', 'Cheeseman', 'Cheesewright', 'Cherrier', 'Chessman', 'Clark', 'Cleaver', 'Coldren', 'Coleman', 'Collier', 'Conner', 'Cook', 'Cooper', 'Cotter', 'Crowther', 'Dexter', 'Drage', 'Dyer', 'Falconer', 'Farrar', 'Faulkner', 'Fearson', 'Fisher', 'Fiske', 'Flax', 'Fletcher', 'Foal', 'Forester', 'Foster', 'Fowler', 'Frobisher', 'Fuller', 'Gage', 'Gardner', 'Glover', 'Graves', 'Hammer', 'Harper', 'Hayward', 'Heard', 'Hinman', 'Hogg', 'Hooper', 'Hunter', 'Inman', 'Kantor', 'Kellogg', 'Key', 'Killer', 'Knight', 'Lander', 'Leadbetter', 'Lister', 'Lorimer', 'Lush', 'Machin', 'Marshall', 'Mason', 'Mercer', 'Miller', 'Milner', 'Mulliner', 'Mills', 'Nader', 'Naylor', 'Page', 'Paige', 'Paget', 'Palmer', 'Parker', 'Parson', 'Piper', 'Plummer', 'Potter', 'Proctor', 'Provost', 'Purcell', 'Redman', 'Rock', 'Rocker', 'Ryder', 'Sadler', 'Salter', 'Sargent', 'Sawyer', 'Scully', 'Seal', 'Seales', 'Shepherd', 'Shields', 'Singer', 'Skinner', 'Skipper', 'Smith', 'Smythe', 'Smoker', 'Snyder', 'Soppner', 'Spencer', 'Spicer', 'Spittle', 'Stanier', 'Stonier', 'Steele', 'Stewart', 'Stringer', 'Tabor', 'Tanner', 'Tasker', 'Taverner', 'Taylor', 'Thatcher', 'Tiller', 'Tillman', 'Todd', 'Toller', 'Trainer', 'Tranter', 'Trapp', 'Travers', 'Trinder', 'Trotter', 'Tucker', 'Turner', 'Tyler', 'Tyrer', 'Voss', 'Walker', 'Waller', 'Ward', 'Warf', 'Warner', 'Warrer', 'Wayne', 'Webb', 'Woodward', 'Wright'];
  const nm6 = ['Acwald', 'Acwuld', 'Acwulf', 'Adalbert', 'Adelard', 'Adulf', 'Aedbald', 'Aedilbert', 'Aedilhum', 'Aedilhun', 'Aednoth', 'Aedwulf', 'Aefic', 'Aegelric', 'Aegenwulf', 'Aegheard', 'Aelbehrt', 'Aelbert', 'Aelffrith', 'Aelfgar', 'Aelfgeat', 'Aelfgiest', 'Aelfheah', 'Aelfhelm', 'Aelfhere', 'Aelfhun', 'Aelfmaer', 'Aelfnoth', 'Aelfred', 'Aelfric', 'Aelfsi', 'Aelfsige', 'Aelfstan', 'Aelfwald', 'Aelfwaru', 'Aelfwear', 'Aelfweard', 'Aelfwin', 'Aelfwine', 'Aelfwold', 'Aelred', 'Aelwin', 'Aembriht', 'Aenheri', 'Aescwig', 'Aescwine', 'Aethelbald', 'Aethelbehrt', 'Aethelbeorht', 'Aethelbert', 'Aethelbricht', 'Aetheldred', 'Aethelfrid', 'Aethelfrith', 'Aethelgar', 'Aethelhard', 'Aethelheah', 'Aethelheard', 'Aethelhelm', 'Aethelhere', 'Aethelhun', 'Aethelmaer', 'Aethelmod', 'Aethelmund', 'Aethelnoth', 'Aethelred', 'Aethelric', 'Aethelsige', 'Aethelstan', 'Aethelulf', 'Aethelwald', 'Aethelwalh', 'Aethelweah', 'Aethelweald', 'Aethelweard', 'Aethelwig', 'Aethelwin', 'Aethelwine', 'Aethelwold', 'Aethelwulf', 'Aethilheard', 'Aethilwald', 'Agilbert', 'Ahlfrith', 'Ailmar', 'Ailnoth', 'Ailred', 'Ailwin', 'Albold', 'Alcfrith', 'Alchere', 'Alchfrid', 'Alchfrith', 'Alchred', 'Alcred', 'Alcuin', 'Alden', 'Aldfrid', 'Aldfrith', 'Aldhelm', 'Aldhere', 'Aldhun', 'Aldred', 'Aldwulf', 'Aldwyn', 'Alfar', 'Alfgar', 'Alfric', 'Alfwaerd', 'Alfwine', 'Alfwold', 'Algar', 'Alhfrith', 'Alhhere', 'Alhmund', 'Alhstan', 'Alhwald', 'Alkmund', 'Allnut', 'Allric', 'Alnod', 'Alnoth', 'Aloc', 'Alphege', 'Alred', 'Alric', 'Aluuard', 'Alward', 'Alwin', 'Alwold', 'Alwyn', 'Alwyne', 'Andhere', 'Andhun', 'Angeltheow', 'Angenlaf', 'Angenmaer', 'Angenwit', 'Anlaf', 'Anselm', 'Ansfrid', 'Archibald', 'Arnulf', 'Ascferth', 'Aschere', 'Ashwin', 'Asulf', 'Athelheah', 'Athelmod', 'Athelric', 'Aylward', 'Aylwin', 'Badanoth', 'Badulf', 'Baegloc', 'Baeldaeg', 'Baerbald', 'Baerwald', 'Baldhere', 'Baldred', 'Baldric', 'Baldthryth', 'Baldwin', 'Baldwine', 'Baldwulf', 'Balther', 'Bardolph', 'Barduwulf', 'Beadumund', 'Beadured', 'Beaduric', 'Beadwheard', 'Beagmund', 'Beagnoth', 'Bealdwine', 'Beanburh', 'Beanstan', 'Bedfrith', 'Bedgeat', 'Bedhelm', 'Bedric', 'Bedwig', 'Behrtferth', 'Behrtwald', 'Beorcol', 'Beorhtel', 'Beorhtfrith', 'Beorhthelm', 'Beorhthere', 'Beorhtmaer', 'Beorhtmund', 'Beorhtnoth', 'Beorhtric', 'Beorhtsige', 'Beorhtstan', 'Beorhtweald', 'Beorhtwig', 'Beorhtwulf', 'Beornfred', 'Beornfrith', 'Beornheard', 'Beornhelm', 'Beornmod', 'Beornmund', 'Beornnoth', 'Beornoth', 'Beornred', 'Beornric', 'Beornstan', 'Beornwald', 'Beornward', 'Beornwulf', 'Beorthelm', 'Beorthmaer', 'Beorthwulf', 'Beorward', 'Beothuk', 'Beowulf', 'Bercthun', 'Berenwald', 'Berhtric', 'Berhtwald', 'Berhtwulf', 'Beric', 'Berihert', 'Bermund', 'Bernulf', 'Bernwini', 'Berthelm', 'Berthun', 'Bertram', 'Bertred', 'Bertulf', 'Bertwald', 'Berwulf', 'Berwyn', 'Bilfrith', 'Bilheard', 'Billfrid', 'Billfrith', 'Birstan', 'Blacwin', 'Blaecman', 'Blithhere', 'Blithweard', 'Bothelm', 'Botolph', 'Botsige', 'Botulf', 'Botwine', 'Botwulf', 'Bregowine', 'Brictric', 'Bridferth', 'Brifard', 'Brihteah', 'Brihthere', 'Brihtnoth', 'Brihtsige', 'Brihtwald', 'Brithnoth', 'Brithun', 'Brocwulf', 'Brunheard', 'Bruning', 'Brunloc', 'Brunweard', 'Brunwulf', 'Brychan', 'Bryning', 'Brynstan', 'Burchard', 'Burghal', 'Burgheard', 'Burghelm', 'Burghred', 'Burgred', 'Burgweard', 'Burgwine', 'Burgwulf', 'Burhhelm', 'Burhred', 'Burhtred', 'Byrhtferth', 'Byrhtnoth', 'Byrnhorn', 'Byrnstan', 'Byrnwold', 'Byrtferth', 'Caedmon', 'Caedwalla', 'Calemund', 'Calunoth', 'Cameleac', 'Cantwine', 'Carileph', 'Cathwulf', 'Ceadwalla', 'Ceadwealla', 'Ceafor', 'Ceawlin', 'Cenbeorht', 'Cenberet', 'Cenfirth', 'Cenfrith', 'Cenfus', 'Cenhelm', 'Cenhere', 'Cenred', 'Centweald', 'Centwine', 'Cenwalch', 'Cenwalh', 'Cenwulf', 'Ceolbald', 'Ceolbeald', 'Ceolfrid', 'Ceolfrih', 'Ceolfrith', 'Ceolheard', 'Ceolhelm', 'Ceolhere', 'Ceolmaer', 'Ceolmund', 'Ceolnoth', 'Ceolred', 'Ceolswith', 'Ceolwald', 'Ceolweald', 'Ceolweard', 'Ceolwulf', 'Ceonred', 'Ceowald', 'Cerdic', 'Ceredig', 'Clarembald', 'Coelfrid', 'Coenbehrt', 'Coengilsus', 'Coenhelm', 'Coenred', 'Coenwalh', 'Coenwulf', 'Coleman', 'Colman', 'Condede', 'Conewalch', 'Cuichelm', 'Cuthbald', 'Cuthbeorht', 'Cuthbert', 'Cuthburg', 'Cutheard', 'Cuthen', 'Cuthert', 'Cuthfrith', 'Cuthgils', 'Cuthheard', 'Cuthhelm', 'Cuthhere', 'Cuthman', 'Cuthred', 'Cuthsige', 'Cuthwin', 'Cuthwine', 'Cuthwulf', 'Cwenburg', 'Cwichelm', 'Cynebald', 'Cynebehrt', 'Cynebil', 'Cyneburg', 'Cynefrid', 'Cynegels', 'Cynegils', 'Cynegisl', 'Cyneheah', 'Cyneheard', 'Cynehelm', 'Cynehere', 'Cynelaf', 'Cynemaer', 'Cynemund', 'Cynered', 'Cynesige', 'Cynestan', 'Cyneswith', 'Cynewald', 'Cyneweard', 'Cynewulf', 'Cynferth', 'Cynfrith', 'Cynhelm', 'Cynibert', 'Cynidr', 'Cynred', 'Cynreow', 'Cynric', 'Cynsige', 'Cynwulf', 'Daedheah', 'Daegheard', 'Darwin', 'Delwyn', 'Deneheard', 'Denewulf', 'Deorlaf', 'Deorling', 'Deormod', 'Deormund', 'Deornoth', 'Deorsige', 'Deorwine', 'Deowuc', 'Derman', 'Digoth', 'Domgeat', 'Dreamwulf', 'Drithelm', 'Dryhthelm', 'Drythelm', 'Duceman', 'Dudemaer', 'Dudeman', 'Dunnere', 'Dunstan', 'Dycgbeorht', 'Eadbald', 'Eadbeald', 'Eadbehrt', 'Eadbeorht', 'Eadbert', 'Eadda', 'Eadfrid', 'Eadfrith', 'Eadger', 'Eadheard', 'Eadhed', 'Eadhelm', 'Eadhere', 'Eadlac', 'Eadmaer', 'Eadmer', 'Eadmod', 'Eadmund', 'Eadnod', 'Eadnoth', 'Eadred', 'Eadric', 'Eadsige', 'Eadstan', 'Eadulf', 'Eadwacer', 'Eadwald', 'Eadward', 'Eadweald', 'Eadweard', 'Eadwig', 'Eadwin', 'Eadwine', 'Eadwold', 'Eadwulf', 'Eadwyn', 'Eahfrid', 'Ealda', 'Ealdbehrt', 'Ealdbeorht', 'Ealdfrith', 'Ealdhelm', 'Ealdhere', 'Ealdred', 'Ealdwine', 'Ealdwulf', 'Ealfled', 'Ealgmund', 'Ealhelm', 'Ealhheard', 'Ealhhere', 'Ealhhun', 'Ealhmund', 'Ealhred', 'Ealhsige', 'Ealhstan', 'Ealhswith', 'Ealric', 'Eambald', 'Eanbald', 'Eanbeorht', 'Eanfrid', 'Eanfrith', 'Eanhere', 'Eanlac', 'Eanmaer', 'Eanred', 'Eansige', 'Eanulf', 'Eanwine', 'Eanwulf', 'Earcanwald', 'Earconbehrt', 'Earconbert', 'Eardnoth', 'Eardwul', 'Eardwulf', 'Earnmund', 'Earnwulf', 'Earpwald', 'Easterwine', 'Eastorwine', 'Ebrard', 'Ecgbald', 'Ecgbehrt', 'Ecgbert', 'Ecgfrith', 'Ecgheard', 'Ecghere', 'Ecgmund', 'Ecgred', 'Ecgric', 'Ecgtheow', 'Ecgwald', 'Ecgwine', 'Ecgwulf', 'Edric', 'Edward', 'Edwy', 'Eegelwin', 'Egbert', 'Egbin', 'Egbryht', 'Egelbert', 'Egelwin', 'Egferth', 'Egfrid', 'Egfrith', 'Egred', 'Egric', 'Egwine', 'Eilmund', 'Einhard', 'Ekbert', 'Ekkehard', 'Elfstan', 'Elphege', 'Elstan', 'Eluard', 'Eluric', 'Elwin', 'Elwyn', 'Engelard', 'Engelram', 'Eoforheard', 'Eoforich', 'Eoforweald', 'Eohhere', 'Eohric', 'Eomer', 'Eorcenbehrt', 'Eorconbeald', 'Eorconbehrt', 'Eorconweald', 'Eored', 'Eorkonweald', 'Eormenraed', 'Eormenread', 'Eorphere', 'Eorpwald', 'Eosterwine', 'Erconbert', 'Eric', 'Ermenred', 'Erminus', 'Ernulf', 'Erwald', 'Erwin', 'Esegar', 'Estmar', 'Estmund', 'Ethbin', 'Ethelred', 'Ethelric', 'Ethelsige', 'Eumer', 'Everard', 'Ewald', 'Eward', 'Ewias', 'Farman', 'Feleogild', 'Felgild', 'Feologild', 'Feolomaer', 'Feolugeld', 'Feolumaer', 'Flodwig', 'Folcheorht', 'Fordwin', 'Forthhere', 'Forthred', 'Forwin', 'Frealaf', 'Freawine', 'Fremund', 'Freodhoric', 'Freola', 'Freomund', 'Freothul', 'Freothulaf', 'Frigedag', 'Frithebert', 'Frithegod', 'Frithestan', 'Frithowulf', 'Frithugar', 'Frithugeorn', 'Frithugis', 'Frithulaf', 'Frithuwald', 'Fromund', 'Fulbert', 'Fullofaudes', 'Gaenbald', 'Gaenbeald', 'Gaenburh', 'Gaerwulf', 'Ganulf', 'Garbeorht', 'Garmund', 'Gebmund', 'Geldfrith', 'Geldhere', 'Geldwine', 'Gerbert', 'Germund', 'Gernebern', 'Gladwin', 'Gleawfrith', 'Godbert', 'Godefrid', 'Godfred', 'Godfrid', 'Godfrith', 'Godhelm', 'Godhere', 'Godhold', 'Goding', 'Godmaer', 'Godman', 'Godmann', 'Godmund', 'Godred', 'Godric', 'Godwald', 'Godwin', 'Godwine', 'Godwulf', 'Godwyn', 'Goldwin', 'Goldwine', 'Goodwin', 'Gosbeorht', 'Gosfrid', 'Graham', 'Grimbald', 'Grimbeald', 'Grimcytel', 'Grimwold', 'Gudram', 'Gumbeorht', 'Gumweald', 'Gundulf', 'Gunuert', 'Guthfrith', 'Guthhere', 'Guthlac', 'Guthlaf', 'Guthmaer', 'Guthred', 'Haeferic', 'Haemgils', 'Haemgisl', 'Haethbeorht', 'Harding', 'Hardred', 'Hardulph', 'Hardwin', 'Harhold', 'Hariulf', 'Harold', 'Hathcyn', 'Hathweald', 'Heahfrith', 'Heahhbeorht', 'Heahmund', 'Heahred', 'Heahstan', 'Healfdene', 'Heardbehrt', 'Heardinc', 'Heardred', 'Heardwulf', 'Heferth', 'Helmhead', 'Helmheard', 'Helpric', 'Hengest', 'Heorrenda', 'Heorstan', 'Heorulaf', 'Heorulf', 'Heorured', 'Heoruweald', 'Heoruwulf', 'Herbert', 'Herebeald', 'Herebeard', 'Herebehrt', 'Herebeorht', 'Herebert', 'Hereferth', 'Herefrid', 'Herefrith', 'Heregeard', 'Heregeorn', 'Heregils', 'Heregod', 'Herelaf', 'Hereman', 'Heremod', 'Herered', 'Hereric', 'Hereward', 'Hereweald', 'Herewulf', 'Heribert', 'Heriburg', 'Herimann', 'Hering', 'Herrig', 'Herward', 'Hethin', 'Hethor', 'Hewald', 'Hibald', 'Higbald', 'Hildebeorht', 'Hildwulf', 'Hincmar', 'Hiroc', 'Hleogar', 'Hlothere', 'Hlothhere', 'Holbert', 'Hondscio', 'Horik', 'Hothere', 'Hreodbeorht', 'Hrethbeorht', 'Hrethric', 'Hringhere', 'Hrothbeorht', 'Hrothgar', 'Hrothlaf', 'Hrothmaer', 'Hrothsige', 'Hrothwulf', 'Huaetberct', 'Hubert', 'Hughoc', 'Humbeald', 'Humbert', 'Humberth', 'Hunbald', 'Hunbeald', 'Hunbehrt', 'Hunbeorht', 'Hundine', 'Hunferth', 'Hunfirth', 'Hunfrith', 'Hunlaf', 'Hunsige', 'Hunstan', 'Hunwald', 'Hwaetbert', 'Hwaetmund', 'Hwaetsige', 'Hwitmann', 'Hybald', 'Hygbald', 'Hygebald', 'Hygebehrt', 'Hygebeorht', 'Hygelac', 'Hygered', 'Hylpric', 'Hynsige', 'Hythwalda', 'Iaenbeorht', 'Idhelm', 'Idmaer', 'Ielfgar', 'Ielfred', 'Iestyn', 'Ilfred', 'Ilhelm', 'Indulf', 'Ingeld', 'Ingilram', 'Inguburh', 'Ingulf', 'Ingulph', 'Ingwald', 'Ingweald', 'Ingwulf', 'Instio', 'Inwaer', 'Irminric', 'Itermon', 'Ithamar', 'Jaenbeorht', 'Jaenbert', 'Jambert', 'Jaruman', 'Jurmin', 'Kenelm', 'Kennald', 'Kenward', 'Lambert', 'Lambin', 'Lanfranc', 'Leavold', 'Leodbriht', 'Leodhere', 'Leodwald', 'Leofard', 'Leofgeat', 'Leofgiest', 'Leofheah', 'Leofhere', 'Leofing', 'Leofnoth', 'Leofred', 'Leofric', 'Leofsige', 'Leofstan', 'Leofwig', 'Leofwine', 'Leovenath', 'Letard', 'Leuthere', 'Liliwin', 'Lindhard', 'Litwin', 'Liudolf', 'Lulling', 'Madulf', 'Maegenfrith', 'Maerec', 'Maerheard', 'Maerleswein', 'Maethelgar', 'Maldred', 'Mansige', 'Mearcred', 'Medwin', 'Mensige', 'Merchelm', 'Merefin', 'Merehwit', 'Merewala', 'Merewald', 'Meriet', 'Mervin', 'Mildred', 'Morcar', 'Morkere', 'Norbert', 'Nordman', 'Norman', 'Northman', 'Nothelm', 'Nothhelm', 'Nothwulf', 'Odalric', 'Odard', 'Odbehrt', 'Odoacer', 'Oelfwine', 'Oeric', 'Oethelwald', 'Oftfor', 'Ohthere', 'Oidilwald', 'Ongentheow', 'Ordbehrt', 'Ordgar', 'Ordheah', 'Ordlaf', 'Ordmaer', 'Ordric', 'Ormar', 'Orped', 'Osbald', 'Osbeohrt', 'Osbeorn', 'Osbryht', 'Oscytel', 'Osegod', 'Osfrid', 'Osfrith', 'Osgar', 'Osgood', 'Oshern', 'Oslac', 'Oslaf', 'Oslafa', 'Osmaer', 'Osmer', 'Osmod', 'Osmund', 'Osred', 'Osric', 'Osulf', 'Osweald', 'Oswin', 'Oswine', 'Oswiu', 'Oswold', 'Oswudu', 'Oswuff', 'Oswulf', 'Oswy', 'Oswyn', 'Osyth', 'Oughtred', 'Pechthelm', 'Pecthelm', 'Peohtgils', 'Peohthelm', 'Peohtred', 'Peohtric', 'Peohtwine', 'Pilheard', 'Plechelm', 'Pleghelm', 'Plegmund', 'Radbod', 'Raedfrid', 'Raedwulf', 'Raegenhere', 'Ragener', 'Rahere', 'Randal', 'Randwulf', 'Ranulf', 'Redwald', 'Regenbald', 'Regengar', 'Regenhere', 'Regenmaer', 'Regenweald', 'Reginald', 'Regnheah', 'Regnhere', 'Rendel', 'Ribald', 'Ricbert', 'Richeard', 'Ricmaer', 'Ricmann', 'Ricsig', 'Ricsige', 'Robert', 'Roderic', 'Roderick', 'Rodney', 'Rodolph', 'Roger', 'Romund', 'Rumbald', 'Rumwald', 'Rumwold', 'Ryhrtwold', 'Sabehrt', 'Sabeorht', 'Sabert', 'Saebald', 'Saebehrt', 'Saebeorht', 'Saefugl', 'Saegar', 'Saegeat', 'Saeward', 'Saeweard', 'Saewig', 'Saewine', 'Saewulf', 'Saward', 'Sawin', 'Scenwulf', 'Scirheah', 'Scirheard', 'Seaxwulf', 'Seeman', 'Selewine', 'Selred', 'Selwyn', 'Sentwine', 'Sexbald', 'Sexfred', 'Sexhelm', 'Sexmund', 'Sexwulf', 'Sibert', 'Sibwine', 'Sideman', 'Siferth', 'Sigbert', 'Sigebald', 'Sigebehrt', 'Sigebert', 'Sigebryht', 'Sigeferth', 'Sigegar', 'Sigegeat', 'Sigehaeth', 'Sigeheah', 'Sigehelm', 'Sigehere', 'Sigelac', 'Sigered', 'Sigeric', 'Sigeweard', 'Sigewine', 'Sigewulf', 'Sighard', 'Sighere', 'Sigstein', 'Sired', 'Siward', 'Sledda', 'Snaroc', 'Sperling', 'Stidolph', 'Stigand', 'Stithbeorht', 'Stithwulf', 'Stronglic', 'Strongric', 'Swaebhard', 'Swaefheard', 'Swartcol', 'Swatreband', 'Sweartling', 'Swefred', 'Swetman', 'Swidbert', 'Swidhelm', 'Swithbert', 'Swithin', 'Swithulf', 'Swithun', 'Swithwulf', 'Tancred', 'Tatfrid', 'Tathere', 'Tating', 'Tatuini', 'Tatwine', 'Tatwulf', 'Teoweald', 'Teowulf', 'Thanchere', 'Theabul', 'Theobald', 'Theodbald', 'Theodbeald', 'Theodbeorht', 'Theodgar', 'Theodlac', 'Theodoric', 'Theodric', 'Theodulf', 'Thingfrith', 'Thorweald', 'Thraesfrith', 'Thruidred', 'Thrydwulf', 'Thrythbeorht', 'Thunor', 'Thurstan', 'Tidfrith', 'Tidhelm', 'Tidhere', 'Tidsige', 'Tidweald', 'Tidwulf', 'Tilbert', 'Tilhere', 'Tilman', 'Tilmund', 'Tilwald', 'Tondbehrt', 'Tondbert', 'Tondhere', 'Torhtsige', 'Torold', 'Torphin', 'Torthred', 'Tostig', 'Trumbehrt', 'Trumhere', 'Trumwin', 'Trumwine', 'Trygil', 'Tunbehrt', 'Tunbeorht', 'Tunbert', 'Tunfrith', 'Turbert', 'Turec', 'Turoc', 'Turold', 'Turstan', 'Uchtred', 'Ufegeat', 'Ulfbehrt', 'Ulfcytel', 'Ulfric', 'Ulfrid', 'Ulger', 'Unferth', 'Unlaf', 'Unwona', 'Urien', 'Uscfrea', 'Uxfrea', 'Vadir', 'Vifil', 'Waegdaeg', 'Waegmund', 'Waegstan', 'Waerbeald', 'Waerferth', 'Waerheard', 'Waermund', 'Waernoth', 'Walahfrid', 'Walden', 'Waldere', 'Waldhere', 'Waldwin', 'Walhhere', 'Wallding', 'Walstan', 'Wardlaw', 'Wardric', 'Wathsige', 'Watman', 'Wayland', 'Wealdhere', 'Wealdthaf', 'Wealdtheof', 'Wealhhere', 'Weidrek', 'Weland', 'Weohstan', 'Weohtgar', 'Weonard', 'Weorcgyth', 'Weorchaeth', 'Werferth', 'Werhard', 'Werheard', 'Wermund', 'Werwulf', 'Westerfalca', 'Wicbeorht', 'Wictgils', 'Wictred', 'Widmund', 'Widreth', 'Widsith', 'Widuc', 'Widukind', 'Wiergils', 'Wiermund', 'Wigbeald', 'Wigbeorht', 'Wigbeorn', 'Wigbert', 'Wigestan', 'Wigferth', 'Wigfrith', 'Wighard', 'Wigheard', 'Wighelm', 'Wighere', 'Wightgar', 'Wiglac', 'Wiglaf', 'Wigmaer', 'Wigmund', 'Wigod', 'Wigred', 'Wigric', 'Wigstan', 'Wigthegn', 'Wihtgar', 'Wihtgils', 'Wihthere', 'Wihtlac', 'Wihtlaeg', 'Wihtred', 'Wihtric', 'Wilbehrt', 'Wilbeorht', 'Wilbrord', 'Wilfram', 'Wilfrith', 'Wilgils', 'Wilgisl', 'Wilheard', 'Wilhere', 'Willehad', 'Willibrord', 'Wilmaer', 'Wilmund', 'Wilsiga', 'Wilsige', 'Wimund', 'Winebald', 'Winebeald', 'Winefrith', 'Winegar', 'Winelac', 'Winemaer', 'Winfirth', 'Winfrid', 'Winfrith', 'Winnibald', 'Winsige', 'Winstan', 'Winston', 'Wiohthere', 'Withergild', 'Withermund', 'Wlencing', 'Wolfeius', 'Wolnoth', 'Wolstan', 'Wraecwulf', 'Wuldric', 'Wuldwine', 'Wulfbeald', 'Wulfestan', 'Wulfferd', 'Wulffrith', 'Wulfgar', 'Wulfgeat', 'Wulfhad', 'Wulfheah', 'Wulfhelm', 'Wulfhere', 'Wulflaf', 'Wulfnoth', 'Wulfred', 'Wulfric', 'Wulfrid', 'Wulfrun', 'Wulfsige', 'Wulfsin', 'Wulfstan', 'Wulfthere', 'Wulfweard', 'Wulfwig', 'Wulgan', 'Wulmar', 'Wulpher', 'Wuscfrea', 'Wusfrea', 'Wyard', 'Wynbald', 'Wynfrid', 'Wynfrith', 'Wynhaeth', 'Wynsige', 'Wynstan', 'Yonwin', 'Yric'];
  const i = Math.floor(Math.random() * 10);
  {
    if (type === 1) {
      if (i < 2) {
        names = sample(nm2);
      } else if (i < 4) {
        names = `${sample(nm2)}, wife of ${sample(nm6)}`;
      } else if (i < 6) {
        names = `${sample(nm2)} of ${sample(nm3)}${sample(nm4)}`;
      } else if (i < 8) {
        names = `${sample(nm2)}  ${sample(nm5)}`;
      } else {
        names = `${sample(nm2)} the ${sample(nm5)}`;
      }
    } else if (i < 3) {
      names = sample(nm1);
    } else if (i < 6) {
      names = `${sample(nm1)} of ${sample(nm3)}${sample(nm4)}`;
    } else if (i < 8) {
      names = `${sample(nm1)}  ${sample(nm5)}`;
    } else {
      names = `${sample(nm1)} the ${sample(nm5)}`;
    }
    return names;
  }
}
