import { sample } from 'lodash';

export default function suebis() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Accaricus',
        'Acimiro',
        'Adarius',
        'Adaulfus',
        'Adefonsus',
        'Adegaster',
        'Adelasindo',
        'Adeqisio',
        'Aderedus',
        'Aderico',
        'Adesindus',
        'Adileobo',
        'Adimirus',
        'Agarius',
        'Agildus',
        'Agimadus',
        'Agiulfus',
        'Agrivulfum',
        'Agromirus',
        'Alamiro',
        'Alaricus',
        'Alarius',
        'Albiaster',
        'Aldemirus',
        'Alderedus',
        'Aldericus',
        'Aldroitus',
        'Alduarius',
        'Algaster',
        'Aliaricus',
        'Aliulfus',
        'Aliverko',
        'Alivertus',
        'Alliefredus',
        'Aloindo',
        'Aloitus',
        'Alvaricus',
        'Alvatus',
        'Amedeiro',
        'Anagildus',
        'Andeatus',
        'Andericus',
        'Andiarius',
        'Andifonso',
        'Andilevo',
        'Andosindus',
        'Andulfus',
        'Ansedeus',
        'Ansemarus',
        'Ansemirus',
        'Ansemondus',
        'Anseredo',
        'Ansericus',
        'Ansiulphus',
        'Ansuallo',
        'Ansuario',
        'Ansvertus',
        'Antemirus',
        'Anualdus',
        'Anulfo',
        'Aquisildus',
        'Ardabastus',
        'Ardaldus',
        'Ardericus',
        'Ardesendus',
        'Ardulfus',
        'Arebuldo',
        'Argeberto',
        'Argefonsus',
        'Argemirus',
        'Argemondo',
        'Argeredus',
        'Argericus',
        'Argesindus',
        'Argevadus',
        'Argevitus',
        'Argifredus',
        'Argivastro',
        'Ariamiro',
        'Ariulfus',
        'Arnadius',
        'Arnaldus',
        'Arnulfo',
        'Arosindus',
        'Artemiro',
        'Arualdus',
        'Arumundo',
        'Asarulfo',
        'Ascarigus',
        'Ascarius',
        'Asculfo',
        'Asemondus',
        'Asiulfus',
        'Asoredus',
        'Asparigus',
        'Asterigo',
        'Astragis',
        'Astramondus',
        'Astratus',
        'Astredo',
        'Astremarus',
        'Astromirus',
        'Astruario',
        'Astrulfus',
        'Astualdu',
        'Astulfus',
        'Atalamondo',
        'Atanagildus',
        'Atanaricus',
        'Atarius',
        'Atauldus',
        'Ataulfus',
        'Atericus',
        'Audibertus',
        'Audofredo',
        'Audugus',
        'Aulfus',
        'Aumiro',
        'Aunarius',
        'Auresindus',
        'Ausarigus',
        'Ausendus',
        'Avaldus',
        'Badamundus',
        'Bademirus',
        'Badosindus',
        'Bagesindus',
        'Baldemarius',
        'Baldemirus',
        'Balderedo',
        'Balderico',
        'Baldesindo',
        'Baldoigius',
        'Baltarius',
        'Barvaldus',
        'Baudemirus',
        'Baudesindus',
        'Bazarius',
        'Becosindo',
        'Belesarius',
        'Belfonsus',
        'Belmirus',
        'Bernaldus',
        'Berosindus',
        'Bertamirus',
        'Bertarius',
        'Berulfus',
        'Betericus',
        'Betrulfus',
        'Bidualdus',
        'Bliviaricus',
        'Bonesindus',
        'Bonimiro',
        'Brandericus',
        'Brandiulfus',
        'Bretenandus',
        'Cagildo',
        'Camundus',
        'Cartemiro',
        'Caudemirus',
        'Cendamiro',
        'Censerigus',
        'Coniaricus',
        'Crescemirus',
        'Crodemirus',
        'Cufarius',
        'Dacamiro',
        'Dagaredus',
        'Daildus',
        'Damiro',
        'Damondus',
        'Desterigus',
        'Docemiro',
        'Dolcemondus',
        'Domerigo',
        'Donagastro',
        'Donazarius',
        'Donegildus',
        'Dulcemirus',
        'Ebreguldus',
        'Ebregulfus',
        'Eburicus',
        'Egeredus',
        'Egildus',
        'Eilleus',
        'Eimericus',
        'Eimirus',
        'Eindu',
        'Eirigu',
        'Eisindus',
        'Eldegeses',
        'Eldegotus',
        'Eldemirus',
        'Eldemundus',
        'Eldesindus',
        'Eldivercus',
        'Eldivertus',
        'Eldoigius',
        'Elperico',
        'Enaredus',
        'Endulfus',
        'Engildus',
        'Engladius',
        'Engomirus',
        'Engoredus',
        'Engorigus',
        'Ensaldus',
        'Erdebredo',
        'Erifonsus',
        'Erigio',
        'Ermaldus',
        'Ermefredo',
        'Ermegildus',
        'Ermegis',
        'Ermegotus',
        'Ermelindus',
        'Ermemirus',
        'Ermenandus',
        'Ermericus',
        'Ermerote',
        'Ermiarius',
        'Ermosindus',
        'Ermoygius',
        'Ermulfo',
        'Eroigius',
        'Eruulfus',
        'Estromirus',
        'Eugienadus',
        'Euvenandus',
        'Evorido',
        'Evosindo',
        'Fagildus',
        'Falderedo',
        'Falgildus',
        'Fardulfus',
        'Fateredus',
        'Felgirus',
        'Felmiro',
        'Filisteus',
        'Filivertus',
        'Floresindus',
        'Fortesindus',
        'Fradiulfus',
        'Fralenko',
        'Framiro',
        'Framuldo',
        'Francemirus',
        'Franomiro',
        'Fraredus',
        'Fredamundus',
        'Fredario',
        'Fredemiro',
        'Fredenandus',
        'Fredericus',
        'Fredilli',
        'Fredisclus',
        'Fredoaldus',
        'Fredoindus',
        'Fredosindus',
        'Freduarius',
        'Fredulfus',
        'Fregulfus',
        'Fridiverto',
        'Frineguldus',
        'Froaringus',
        'Frogiulfo',
        'Froisendus',
        'Fromaldus',
        'Fromaricus',
        'Fromildus',
        'Fromosindus',
        'Fronuldo',
        'Fruaricus',
        'Frugildus',
        'Frumarius',
        'Frumirus',
        'Fulcaredus',
        'Gademiro',
        'Gaifarius',
        'Ganati',
        'Gandulfo',
        'Gardulfus',
        'Gauderigus',
        'Gaudesindo',
        'Gaudilti',
        'Gaulfus',
        'Gebuldus',
        'Geldemirus',
        'Gelmiro',
        'Gemundus',
        'Genitrigus',
        'Geodefredo',
        'Geodegildus',
        'Geodemirus',
        'Geodemondo',
        'Geodesindus',
        'Geodevertus',
        'Geodulfus',
        'Germundus',
        'Geserigus',
        'Gesmiro',
        'Gesulfus',
        'Getericus',
        'Gidiberto',
        'Gigulfo',
        'Gildaricus',
        'Giraldus',
        'Gismundus',
        'Gisovredus',
        'Gisvado',
        'Gitarius',
        'Gitesindus',
        'Godefredus',
        'Godemiro',
        'Godomundus',
        'Goldegildo',
        'Goldredo',
        'Golfarico',
        'Gomadus',
        'Gomaldo',
        'Gomaredus',
        'Gomarigus',
        'Gomesindo',
        'Gomulfus',
        'Gomundus',
        'Gontemondus',
        'Gontualdo',
        'Gotesendus',
        'Goymundus',
        'Gresulfo',
        'Gresumarus',
        'Grimaldus',
        'Gualamarius',
        'Gualamirus',
        'Gualdarius',
        'Guanatus',
        'Guantaldus',
        'Gudegisus',
        'Gudenandus',
        'Guderedus',
        'Guderigo',
        'Gudesindus',
        'Gudesteus',
        'Gudilulfo',
        'Gugivertus',
        'Guiliberto',
        'Guimarigus',
        'Guimirus',
        'Guimundus',
        'Guiricus',
        'Guisindus',
        'Guldarius',
        'Gulderigus',
        'Guldremirus',
        'Gulfarius',
        'Gulfemirus',
        'Gumarius',
        'Gundarius',
        'Gundebredo',
        'Gundemarus',
        'Gunderamnus',
        'Gunderedo',
        'Gunderigus',
        'Gundesindus',
        'Gundiscalcus',
        'Gundivadus',
        'Gundivaldo',
        'Gundulfo',
        'Guntato',
        'Guntemirus',
        'Guntiesclo',
        'Guntigio',
        'Gutemirus',
        'Gutemondo',
        'Gutumarus',
        'Heremigarium',
        'Hermecisclus',
        'Hermundus',
        'Ianardo',
        'Idiverto',
        'Iensericus',
        'Ierulfus',
        'Ildebredus',
        'Ildefonsus',
        'Ilderigus',
        'Ildulfus',
        'Indisclus',
        'Ionarico',
        'Itaultus',
        'Itimondo',
        'Iubarius',
        'Iusterigo',
        'Iustiarius',
        'Iuuisclus',
        'Iuvatus',
        'Iuvericus',
        'Ivolicus',
        'Karmirus',
        'Kedesendo',
        'Kedisilo',
        'Kenderedus',
        'Kendulfus',
        'Keremondus',
        'Ketenando',
        'Leodarius',
        'Leodefredus',
        'Leodegasti',
        'Leodegisius',
        'Leodemiro',
        'Leodemundo',
        'Leoderigus',
        'Leodesindo',
        'Leodeuigus',
        'Leodulfus',
        'Leomirus',
        'Leovaldo',
        'Leovegildus',
        'Leoveredus',
        'Leoverigus',
        'Leoverto',
        'Leovesindus',
        'Leubegutus',
        'Leudemarus',
        'Lotarius',
        'Magnaricus',
        'Magnarius',
        'Malaredus',
        'Malaricus',
        'Mandulfo',
        'Maniulfus',
        'Manosindus',
        'Manualdus',
        'Manulfus',
        'Marcosendus',
        'Matericus',
        'Megildus',
        'Meitulfus',
        'Mervigius',
        'Mirualdo',
        'Modericus',
        'Moderido',
        'Modildus',
        'Monderico',
        'Monefonsus',
        'Monobredo',
        'Mudario',
        'Mundildus',
        'Munisclus',
        'Nandamundus',
        'Nandaricus',
        'Nandulfo',
        'Nantemiro',
        'Nantildo',
        'Nitigisius',
        'Notarius',
        'Odamirus',
        'Odemundus',
        'Odericus',
        'Odisclus',
        'Odoynus',
        'Oduarius',
        'Olcarius',
        'Olemundus',
        'Onaredus',
        'Onegildo',
        'Onemirus',
        'Onesindus',
        'Onoricus',
        'Osdulfus',
        'Osoarius',
        'Osobredus',
        'Osoredo',
        'Osorico',
        'Ostrofredo',
        'Ostromirus',
        'Otualdo',
        'Pabregildus',
        'Pantardus',
        'Pederagildu',
        'Pipericus',
        'Provaredo',
        'Quedesendo',
        'Quedulfus',
        'Quidemirus',
        'Quidericus',
        'Quitarius',
        'Rademirus',
        'Rademundus',
        'Radesindus',
        'Radulfus',
        'Ragesindus',
        'Ragifredo',
        'Ragimiru',
        'Ragolfus',
        'Rakericus',
        'Ranarius',
        'Randemirus',
        'Randuarius',
        'Randulfus',
        'Ranemirus',
        'Ranemundus',
        'Ranisclus',
        'Ranivertus',
        'Ranosindus',
        'Ranualdus',
        'Ranulfus',
        'Ratario',
        'Rauparius',
        'Recaredus',
        'Reccafredus',
        'Reccesuindus',
        'Recemirus',
        'Recemundus',
        'Recesindus',
        'Rechiarius',
        'Recualdus',
        'Refulfo',
        'Regaulfus',
        'Reginaldus',
        'Reimondus',
        'Reinantus',
        'Reirigus',
        'Remegildus',
        'Remesario',
        'Remesindus',
        'Remismundus',
        'Rendericus',
        'Requefonsus',
        'Restericus',
        'Retericus',
        'Ricardo',
        'Riquinandus',
        'Rodemirus',
        'Rodevertus',
        'Rodougus',
        'Roelindus',
        'Romarigus',
        'Rosamundus',
        'Rouvredo',
        'Rudericus',
        'Rudesindus',
        'Rumario',
        'Sabaredus',
        'Sagatus',
        'Sagildo',
        'Sagulfus',
        'Salamarus',
        'Salamirus',
        'Santimirus',
        'Savaracus',
        'Savaricus',
        'Savegodus',
        'Saxomirus',
        'Segemundus',
        'Segesindo',
        'Segimarus',
        'Segomirus',
        'Selmirus',
        'Selvatus',
        'Sendamirus',
        'Sendericus',
        'Sendredus',
        'Senduitu',
        'Sendulfus',
        'Seniaredus',
        'Seniulfus',
        'Sentarius',
        'Senuldo',
        'Seririgo',
        'Serulfus',
        'Servaldus',
        'Sescutus',
        'Sesericus',
        'Sesmiro',
        'Sesmundo',
        'Sesuito',
        'Sevegildo',
        'Sigeberto',
        'Sigeredus',
        'Sigericus',
        'Sigunterigo',
        'Sindamundus',
        'Sindigis',
        'Sinifredus',
        'Sisebutus',
        'Sisildus',
        'Sisiverto',
        'Sisnandus',
        'Sisualdo',
        'Sisuldus',
        'Sisulfus',
        'Sitagellus',
        'Sonegildus',
        'Soniaricus',
        'Spanaricu',
        'Spanarius',
        'Spandaricus',
        'Spanosendo',
        'Spodemirus',
        'Spoderigo',
        'Storesindo',
        'Suavarius',
        'Sueredus',
        'Suimirus',
        'Sulfemirus',
        'Sundemirus',
        'Suniagisclus',
        'Suniarius',
        'Suniemirus',
        'Suntarius',
        'Tarildus',
        'Teadario',
        'Teobaldus',
        'Teodefredo',
        'Teodegildo',
        'Teodelindus',
        'Teodemirus',
        'Teodemundus',
        'Teodenandus',
        'Teoderago',
        'Teoderedus',
        'Teodericus',
        'Teodesindus',
        'Teodisclus',
        'Teodulfus',
        'Teudecutus',
        'Theodivertus',
        'Tiotevadus',
        'Todegogia',
        'Toduldo',
        'Torsario',
        'Trasaricus',
        'Trasarius',
        'Trasendus',
        'Trasiuadus',
        'Trasmiro',
        'Trasmondo',
        'Trasoldi',
        'Trassemutus',
        'Trastemiro',
        'Trastulfus',
        'Trasuarius',
        'Trasulfus',
        'Trenelldus',
        'Trevuleus',
        'Tructemiro',
        'Tructemondo',
        'Tructericus',
        'Tructesindus',
        'Trudigildus',
        'Trudulfus',
        'Truitero',
        'Tudeildus',
        'Tudiscaisum',
        'Tumtuldo',
        'Tundulfus',
        'Turisulfus',
        'Turpericus',
        'Uanagildi',
        'Uandalarius',
        'Uiliaredus',
        'Uimaredus',
        'Uisulfus',
        'Unemundus',
        'Unileus',
        'Usegildus',
        'Vadamundus',
        'Vademirus',
        'Valarius',
        'Vedragese',
        'Venariufi',
        'Vendericus',
        'Venedario',
        'Venetricus',
        'Vermudus',
        'Viamundus',
        'Viaricus',
        'Victemirus',
        'Victericus',
        'Vidragildus',
        'Vidraldus',
        'Vidramirus',
        'Vigiltu',
        'Viliamirus',
        'Viliaricu',
        'Viliarius',
        'Viliatus',
        'Viliefredus',
        'Vilifonsus',
        'Viligus',
        'Viliulfus',
        'Vilivado',
        'Villelmus',
        'Villisendo',
        'Visaldus',
        'Visaridus',
        'Visclafredo',
        'Visclamirus',
        'Visclamundus',
        'Visclario',
        'Visigotus',
        'Vistemundo',
        'Vistisclo',
        'Vistragildus',
        'Vistramundi',
        'Vistraricus',
        'Vistrarius',
        'Vistravarius',
        'Vistremiro',
        'Vistresindus',
        'Vistrevius',
        'Vitarius',
        'Vitildus',
        'Vitisclus',
        'Vittimero',
        'Vittinandus',
        'Vivildus',
        'Vizamundus',
        'Zamarius',
        'Zamondo',
        'Zendasindo',
    ];
    const nm2 = [
        'Abronilli',
        'Adegundia',
        'Adileova',
        'Adosinda',
        'Alaguntia',
        'Alatrudia',
        'Alifreda',
        'Aliverga',
        'Aliverta',
        'Alobrida',
        'Amalilli',
        'Aniedrudia',
        'Ansetrudia',
        'Ansileova',
        'Ansiunda',
        'Ansobrida',
        'Ansuildi',
        'Aragunti',
        'Argenilli',
        'Argeva',
        'Argifonsa',
        'Argileuva',
        'Arosinda',
        'Aruildi',
        'Asileva',
        'Astileuva',
        'Astragundia',
        'Astriverga',
        'Astrogoto',
        'Astruara',
        'Astruildi',
        'Audesinda',
        'Aurilli',
        'Barilli',
        'Barsilli',
        'Belavrida',
        'Bergundi',
        'Berildi',
        'Berosildi',
        'Bertosinda',
        'Bertuara',
        'Bonilde',
        'Brunildi',
        'Cenabrida',
        'Cenusenda',
        'Dagadrudia',
        'Desteilli',
        'Donadildi',
        'Ebragundia',
        'Ebrailli',
        'Ebrildi',
        'Eigonza',
        'Eileuva',
        'Eldegundia',
        'Eldesinda',
        'Entrudi',
        'Ermedrudia',
        'Ermefara',
        'Ermego',
        'Ermegoto',
        'Ermegundia',
        'Ermesinda',
        'Ermildi',
        'Ermileuva',
        'Eudisinda',
        'Fradegundia',
        'Framilli',
        'Fredenanda',
        'Fredesinda',
        'Fremosilli',
        'Frogeva',
        'Frogildi',
        'Froiloba',
        'Froisenda',
        'Fromosinda',
        'Fronildi',
        'Fronosili',
        'Frumildi',
        'Gadenanda',
        'Ganilli',
        'Gasuildi',
        'Gaudilli',
        'Gelvira',
        'Genildi',
        'Genitigia',
        'Genobreda',
        'Germira',
        'Gesmira',
        'Getilli',
        'Giudimira',
        'Godenanda',
        'Godesinda',
        'Godoigia',
        'Gogilli',
        'Goldregodo',
        'Gondenanda',
        'Goysenda',
        'Gualamira',
        'Guanadildi',
        'Guananildi',
        'Gudigeba',
        'Gudileuva',
        'Guinilli',
        'Guisenda',
        'Gundebrida',
        'Gunderona',
        'Gundesilli',
        'Gundigeva',
        'Gundivera',
        'Gundiverga',
        'Guntedrudia',
        'Gunterotis',
        'Guntilli',
        'Guntuigia',
        'Gutilli',
        'Helaguntia',
        'Ibilli',
        'Ildiverga',
        'Ildoncia',
        'Ilduara',
        'Ionilde',
        'Iustesenda',
        'Kagilda',
        'Ketemera',
        'Kindiverga',
        'Leodegundia',
        'Leovegoto',
        'Leoverona',
        'Leovesenda',
        'Leovilli',
        'Manildi',
        'Manileuva',
        'Manosenda',
        'Mansuara',
        'Manusildi',
        'Margilli',
        'Mectubrida',
        'Meitilli',
        'Menegundia',
        'Meroildi',
        'Mirosinda',
        'Modilli',
        'Obstrisinda',
        'Odorica',
        'Onegilda',
        'Onildi',
        'Onosinda',
        'Orosinda',
        'Penetrudia',
        'Peruisenda',
        'Qualatrudia',
        'Qualavara',
        'Ragesenda',
        'Randili',
        'Ranemira',
        'Raniverga',
        'Raniverta',
        'Ranosenda',
        'Recebrida',
        'Recedrudia',
        'Recemera',
        'Recesenda',
        'Recesuinda',
        'Recilli',
        'Reicionda',
        'Remesilli',
        'Requilli',
        'Rezevera',
        'Rimionda',
        'Rodosildi',
        'Sabegoto',
        'Sanigia',
        'Sarilli',
        'Saruilli',
        'Savildi',
        'Senatrudia',
        'Senderiga',
        'Senildi',
        'Senuita',
        'Sigefrida',
        'Sigesgundia',
        'Sigesinda',
        'Sindileuba',
        'Sindiverga',
        'Sinduara',
        'Siseguntia',
        'Sisileova',
        'Sisilli',
        'Sisiverta',
        'Sisivigia',
        'Sisuita',
        'Sitividis',
        'Songimera',
        'Sonifreda',
        'Sontrilli',
        'Spanubrida',
        'Sparuildi',
        'Stanildi',
        'Stodildi',
        'Sunildi',
        'Tanquilli',
        'Tederona',
        'Tenildi',
        'Teodesinda',
        'Teodeverga',
        'Teodildi',
        'Teodiverta',
        'Teodogoncia',
        'Teodoriga',
        'Teudisila',
        'Texilli',
        'Trasavara',
        'Trasilli',
        'Trasmira',
        'Trastivigia',
        'Trasuildi',
        'Trasuinda',
        'Treitegundia',
        'Tructesinda',
        'Tructilli',
        'Trudildi',
        'Uaduuara',
        'Uenildi',
        'Uistrileuba',
        'Unilli',
        'Vedrailli',
        'Vergilli',
        'Vestregoti',
        'Vigilli',
        'Vilesinda',
        'Villavaria',
        'Viscaverga',
        'Visclavara',
        'Vistesinda',
        'Vistiberga',
        'Vistivara',
        'Vistravara',
        'Vistregia',
        'Vistresilli',
        'Vistrildi',
    ];
    {
        if (type === 1) {
            names = sample(nm2);
        } else {
            names = sample(nm1);
        }
        return names;
    }
}
