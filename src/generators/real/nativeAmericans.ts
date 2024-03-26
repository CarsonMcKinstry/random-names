import { sample } from 'lodash';

export default function nativeAmericans() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Abooksigun (Algonquin)',
        'Abornazine (Abnaki)',
        'Abukcheech (Algonquin)',
        'Achak (Algonquin)',
        'Achachak (Algonquin)',
        'Adahy (Cherokee)',
        'Aditsan (Navajo)',
        'Adoeete (Kiowa)',
        'Ahanu (Algonquin)',
        'Ahiga (Navajo)',
        'Ahote (Hopi)',
        'Ahtunowhiho (Cheyenne)',
        'Ahuli (Cherokee)',
        'Ahusaka (Winnebago)',
        'Akecheta (Sioux)',
        'Alahmoot (Nez Perce)',
        'Allahkoliken (Nez Perce)',
        'Alo (Hopi)',
        'Alosaka (Hopi)  ',
        'Anakausuen (Algonquin)',
        'Angvariationu Toke (Sioux)',
        'Annawan (Algonquin)',
        'Apash Wyakaikt (Nez Perce)',
        'Appanoose (Sauk)',
        'Apiatan (Kiowa)',
        'Apisi (Blackfoot)',
        'Aponivi (Hopi)',
        'Aranck (Algonquin)',
        'Ar-Ke-Kee-Tah (Oto)',
        'Arre-Catte Waho (Omaha)',
        'Ashkii (Navajo)',
        'Ashkii Dighin (Navajo)',
        'Askook (Algonquin)',
        'Askuwheteau (Algonquin)',
        'Atagulkalu (Cherokee)',
        "Ata'Halne' (Navajo)",
        'Atepa (Choctaw)',
        'Atohi (Cherokee)',
        'Atsadi (Cherokee)',
        'Atsidi (Navajo)',
        'Attakullakulla (Cherokee)',
        'Avonaco (Cheyenne)',
        'Ayawamat (Hopi)',
        'Bagwunagijik (Chippewa)',
        'Bemidii (Ojibwa)',
        'Beshiltheeni (Navajo)',
        'Beshkno (Potawatomi)',
        'Bidziil (Navajo)',
        'Bilagaana (Navajo)',
        'Bisahalani (Navajo)',
        'Bornbazine (Abnaki)',
        'Buegoneguig (Chippewa)',
        'Cameahwait (Shoshone)',
        'Canowicakte (Sioux)',
        'Cashesegra (Osage)',
        'Cetanwakuwa (Sioux)',
        "Cha'Akmongwi (Hopi)",
        "Cha'Tima (Hopi)",
        'Chankoowashtay (Sioux)',
        'Chansomps (Algonquin)',
        'Chapowits (Nez Perce)',
        'Chas-Chunk-A (Winnebago)',
        'Chaska (Sioux)',
        'Chatan (Sioux)',
        'Chavatangakwunua (Hopi)',
        'Chayton (Sioux)',
        'Cheasequah (Cherokee)',
        'Cheauka  (Hopi)',
        'Cheveyo (Hopi)',
        'Chochmo (Hopi)',
        'Chochokpi (Hopi)',
        'Chochuschuvio (Hopi)',
        'Chogan (Algonquin)',
        'Choovio (Hopi)',
        'Choviohoya (Hopi)',
        'Chowilawu (Hopi)',
        "Chu'A (Hopi)",
        'Chuchip (Hopi)',
        'Chunta (Hopi)',
        'Chuslum (Nez Perce)',
        'Chuslum Moxmox (Nez Perce)',
        'Ciqala (Dakota)',
        'Coowescoowe (Cherokee)',
        'Dadgayadoh (Seneca)',
        'Dakota (Sioux)',
        'Deganawidah (Iroquois)',
        'Degotoga (Cherokee)',
        'Diwali (Cherokee)',
        'Dohate (Kiowa)',
        'Dohosan (Kiowa)',
        'Donehogawa (Seneca)',
        'Dustu (Cherokee)',
        'Ealahweemah (Nez Perce)',
        'Ealaot Wadass (Nez Perce)',
        'Ealaothek Kaunis (Nez Perce)',
        'Eapalekthiloom (Nez Perce)',
        'Ehane (Cheyenne)',
        'Elaskolatat (Nez Perce)',
        'Elki (Miwok)',
        'Elsu (Miwok)',
        'Eluwilussit (Algonquin)',
        'Enapay (Sioux)',
        'Enkoodabooaoo (Algonquin)',
        'Enkoodabaoo (Algonquin) ',
        'Eskaminzim (Apache)',
        'Espowyes (Nez Perce)',
        'Etchemin (Algonquin)',
        'Etlelooaat (Algonquin)',
        'Eyanosa (Sioux)',
        'Fala (Choctaw)',
        'Gaagii (Navajo)',
        'Gad (Navajo)',
        'Gawonii (Cherokee)',
        'Gomda (Kiowa)',
        'Guitonkagya (Kiowa)',
        'Hahkethomemah (Cheyenne)',
        'Harkahome (Cheyenne)',
        'Halian (Zuni)',
        'Hania (Hopi)',
        'Hanska (Sioux)',
        'Hassun (Algonquin)',
        'Harkahome (Cheyenne)',
        'Hastiin (Navajo)',
        'Hawiovi (Hopi)',
        'Heammawihio (Cheyenne)',
        'Heinmot (Nez Perce)',
        'He-Lush-Ka (Winnebago)',
        'Helki (Miwok)',
        'Hemene (Nez Perce)',
        'Hento (Dakota)',
        'Heskovizenako (Cheyenne)',
        'Hesutu (Miwok)',
        'Hevataneo (Cheyenne)',
        'Hevovitastamiutsto (Cheyenne)',
        'Hiamovi (Cheyenne) ',
        'Hinto (Dakota)',
        'Hohnihohkaiyohos (Cheyenne) ',
        'Neeheeoeewootis (Cheyenne)',
        "Hok'Ee (Navajo)",
        'Holata (Seminole)',
        'Honani (Hopi)',
        'Honaw (Hopi)',
        'Honiahaka (Cheyenne)',
        'Honon (Miwok)',
        'Honovi (Hopi)',
        'Hotah (Sioux)',
        'Hototo (Hopi)',
        'Hotuaekhaashtait (Cheyenne)',
        'Howahkan (Sioux)',
        'Howi (Miwok)',
        'Huritt (Algonquin)',
        'Iiniwa (Blackfoot)',
        'Istaqa (Hopi)',
        'Istaqa (Hopi)',
        'Kachada (Hopi) ',
        'Kangee (Sioux)',
        'Kanuna (Cherokee)',
        'Keezheekoni (Chippewa)',
        'Kele (Hopi)',
        'Keme (Algonquin)',
        'Kesegowaase (Algonquin)',
        'Kestejoo (Algonquin)',
        'Kilchii (Navajo)',
        'Kitchi (Algonquin)',
        'Kiyiya (Yakima)',
        'Klah (Navajo)',
        'Kohana (Sioux)',
        'Kohkahycumest (Cheyenne)',
        'Koi (Choctaw)',
        'Koko (Black Foot)',
        'Kokotni (Potawatomi)',
        'Kolichiyaw (Hopi)',
        'Kono (Miwok)',
        'Koshisigre (Osage)',
        'Kosumi (Miwok)',
        'Kotori (Hopi)',
        'Kuckunniwi (Cheyenne)',
        'Kuruk (Pawnee)',
        'Kusinut (Yakima)',
        'Kwahu (Hopi)',
        'Kwatoko (Hopi)',
        'Lallo (Kiowa)',
        'Lansa (Hopi)',
        'Lanu (Miwok)',
        'Lapu (Hopi)',
        'Len (Hopi)',
        'Lena (Hopi)',
        'Lesharo (Pawnee)',
        'Leyati (Miwok)',
        'Lise (Miwok)',
        'Liwanu (Miwok)',
        'Lokni (Miwok)',
        'Lonan (Zuni)',
        'Lootah (Sioux)',
        'Lusio (Zuni)',
        'Machakw (Hopi)',
        'Machk (Algonquin)',
        'Mahkah (Sioux)',
        'Mahpee (Sioux)',
        'Makkapitew (Algonquin)',
        'Makya (Hopi)',
        'Mammedaty (Kiowa)',
        'Mantotohpa (Cheyenne)',
        'Masichuvio (Hopi) ',
        'Matchitehew (Algonquin)',
        'Matchitisiw (Algonquin)',
        'Mato (Sioux)',
        'Matoskah (Sioux)',
        'Matunaaga (Algonquin)',
        'Matwau (Algonquin)',
        'Maza Blaska (Dakota)',
        'Megedagik (Algonquin)',
        'Melkedoodum (Algonquin)',
        'Micanopy (Seminole)',
        'Micco (Seminole)',
        'Migisi (Chippewa)',
        'Mika (Sioux)',
        'Mikasi (Omaha)',
        'Mikasi (Hokan)',
        'Minco (Choctaw)',
        'Mingan (Algonquin)',
        'Minninnewah (Cheyenne)',
        'Misu (Miwok)',
        'Mochni (Hopi)',
        'Mohe (Cheyenne)',
        'Moki (Hopi)',
        'Molimo (Miwok)',
        'Momuso (Miwok)  ',
        'Mona (Miwok)',
        'Mongwau (Hopi)',
        'Motsqueh (Nez Perce)',
        'Muata (Miwok)',
        'Mukki (Algonquin)',
        'Naalnish (Navajo)',
        'Nadie (Algonquin)',
        'Nahcomence (Cheyenne)',
        'Nahiossi (Cheyenne)',
        'Nakai (Navajo)',
        'Nakos (Arapaho)',
        'Namid (Chippewa)',
        'Namida (Chippewa)',
        'Nantan (Apache)',
        'Napayshni (Sioux)',
        'Nashashuk (Sauk)',
        'Nashoba (Choctaw)',
        'Nastas (Navajo)',
        'Nawkaw (Winnebago)',
        'Nayavu (Hopi)',
        'Neeheeoeewootis (Cheyenne)',
        'Niichaad (Navajo)',
        'Nikan (Potawatomi)',
        'Nita (Choctaw)',
        'Nixkamich (Algonquin)',
        'Niyol (Navajo)',
        'Nokosi (Seminole)',
        'Nootau (Algonquin)',
        'Nosh (Algonquin)',
        'Noshi (Algonquin)',
        'Notaku (Miwok)',
        'Nukpana (Hopi)',
        'Ocumwhowurst (Cheyenne) ',
        'Ocunnowhurst (Cheyenne)',
        'Odakota (Sioux)',
        'Ogaki (Arapaho)',
        'Ogaleesha (Sioux)',
        'Ogima (Potawatomi)',
        'Ohanzee (Sioux)',
        'Okhmhaka (Cheyenne)',
        'Ohitekah (Sioux)',
        'Ohiyesa (Sioux)',
        'Okemos (Ojibway)',
        'Okhmhaka (Cheyenne)',
        'Okomi (Arapaho)',
        'Omawnakw (Hopi)',
        'Onacona (Cherokee)',
        'Opechancanough (Algonquin)',
        'Osceola (Seminole)',
        'Otaktay (Sioux)',
        'Otetiani (Iroquois)',
        'Otoahhastis (Cheyenne)',
        'Otoahnacto (Cheyenne)',
        'Otskai (Nez Perce)',
        'Ouray (Ute)',
        'Pa-Akanti (Kiowa)',
        "Pachu'A (Hopi)",
        'Pahana (Hopi)',
        'Pajackok (Algonquin)',
        'Pannoowau (Algonquin)',
        'Paytah (Sioux)',
        'Peopeo (Nez Perce)',
        'Peta (Black Foot)',
        'Pezi (Sioux)',
        'Pimne (Hopi)',
        'Pitalesharo (Pawnee)',
        'Pivane (Hopi)',
        'Powwaw (Algonquin)',
        'Powwow (Algonquin)',
        'Qaletaqa (Hopi)',
        'Qochata (Hopi)',
        'Quanah (Comanche)',
        'Rowtag (Algonquin)',
        'Sahkonteic (Nez Perce)',
        'Sakima (Ojibwa)',
        'Sakuruta (Pawnee)',
        'Samoset (Algonquian)',
        'Sani (Navajo)',
        'Satanta (Kiowa)',
        'Segenam (Algonquin)',
        'Sequoyah (Cherokee)',
        'Setangya (Kiowa)',
        'Setimika (Kiowa)',
        'Sewati (Miwok)',
        'Shappa (Sioux)',
        'Shilah (Navajo)',
        'Shiriki (Pawnee)',
        'Shishiesh (Crow)',
        'Shiye (Navajo)',
        "Shizhe'E (Navajo)",
        'Shuman (Hopi)',
        'Sicheii (Navajo)',
        "Sik'Is (Navajo)",
        'Sike (Navajo)',
        'Sikyahonaw (Hopi)',
        'Sikyatavo (Hopi)',
        'Sinte Maza (Sioux)',
        'Sipatu (Miwok)',
        'Skah (Sioux)',
        "Sowi'Ngwa (Hopi)",
        'Soyala (Hopi)',
        'Sucki (Algonquin)',
        'Sugmuk (Potawatomi)',
        'Sugnog (Potawatomi)',
        'Sunukkuhkau (Algonquin)',
        "T'Iis (Navajo)",
        'Tadi (Omaha)',
        'Tahatan (Sioux)',
        'Taheton (Sioux)',
        'Tahkeome (Cheyenne)',
        'Tahmelapachme (Cheyenne)',
        'Tahoma (Navajo)',
        'Takoda (Sioux)',
        'Tangakwunu (Hopi)',
        'Tapco (Kiowa)',
        'Taregan (Algonquin)',
        'Tashunka (Sioux)',
        'Tasunke (Dakota)',
        'Tatanka-Ptecila (Dakota)',
        'Tatonga (Sioux)',
        'Tawa (Hopi)',
        'Tayanita (Cherokee)',
        'Teetonka (Sioux)',
        'Telutci (Miwok)',
        'Tuketu (Miwok)',
        'Tihkoosue (Algonquin)',
        'Tocho (Hopi)',
        'Todi (Omaha)',
        'Togquos (Algonquin)',
        'Tohopka (Hopi)',
        'Tokala (Dakota)',
        'Tokota (Sioux)',
        'Tooantuh (Cherokee)',
        'Tse (Navajo)',
        'Tsela (Navajo)',
        "Tsiishch'Ili (Navajo)",
        'Tsiyi (Cherokee)',
        'Tsoai (Kiowa)',
        'Tuari (Laguna)',
        'Tuari (Hokan)',
        'Tuketu (Miwok)',
        'Tumu (Miwok)',
        'Tupi (Miwok)',
        'Tyee (Chinook)',
        'Unaduti (Cherokee)',
        'Usti (Cherokee)',
        'Uzumati (Miwok)',
        'Viho (Cheyenne)',
        'Vipponah (Cheyenne)',
        'Vohkinne (Cheyenne)',
        'Vokivocummast (Cheyenne)',
        'Waboyan (Potawatomi)',
        'Wahanassatta (Cheyenne)',
        'Wahchinksapa (Sioux)',
        'Wahchintonka (Sioux)',
        'Wahkan (Sioux)',
        'Wahkoowah (Sioux)',
        'Wamblee (Sioux)',
        'Wambleeska (Sioux)',
        'Wambli-Waste (Dakota)',
        'Wanageeska (Sioux)',
        'Wanahton (Sioux)',
        'Wanikiya (Sioux)',
        'Wanikiy (Sioux)',
        'Wapti (Potawatomi)',
        'Waquini (Cheyenne)',
        'Wattan (Arapaho)',
        'Waya (Cherokee)',
        'Weayaya (Sioux)',
        'Wematin (Algonquin)',
        'Wesa (Cherokee)',
        'Wicasa (Dakota)',
        'Wikvaya (Hopi)',
        'Wilu (Miwok)',
        'Whakan (Sioux)',
        'Wis Ki Gete (Potawatomi)',
        'Wohali (Cherokee)',
        'Wohehiv (Cheyenne)',
        'Wokaihwokomas (Cheyenne)',
        'Wuyi (Miwok)',
        'Yahto (Sioux)',
        'Yanisin (Navajo)',
        'Yansa (Cherokee)',
        'Yas (Navajo)',
        'Yiska (Navajo)',
    ];
    const nm2 = [
        'Abedabun (Cheyenne)',
        'Abequa (Cheyenne)',
        'Abeque (Cheyenne)',
        'Abetzi (Omaha)',
        'Abey (Omaha)',
        'Abeytu (Omaha)',
        'Adoette (Kiowa)',
        'Adsila (Cherokee)',
        'Agasga (Cherokee)',
        'Ahawi (Cherokee)',
        'Ahyoka (Cherokee) ',
        'Alawa (Algonquin)',
        'Aleshanee (Coos)',
        'Alsoomse (Algonquin)',
        'Altsoba (Navajo)',
        'Ama (Cherokee)',
        'Amadahy (Cherokee)',
        'Amayeta (Miwok',
        'Anaba (Navajo)',
        'Anamosa (Sauk)',
        'Angpetu (Sioux)',
        'Angwusnasomtaqa (Hopi)',
        'Ankti (Hopi)',
        'Anna (Algonquin)',
        'Anpaytoo (Sioux) ',
        'Asdza (Navajo)',
        "At'Eed (Navajo)",
        'Atepa (Choctaw)',
        'Atsila (Cherokee)',
        'Awanata (Miwok)',
        'Awenasa (Cherokee) ',
        'Awinita (Cherokee)',
        'Ayasha (Cheyenne)',
        'Ayashe (Cheyenne)',
        'Ayita (Cherokee)',
        'Bonita (Apache)',
        'Byhalia (Choctaw)',
        'Calfuray (Mapuche)',
        'Catori (Hopi)',
        "Cha'Kwaina (Hopi)",
        "Cha'Risa (Hopi)",
        'Chapa (Sioux)',
        'Chapawee (Sioux)',
        'Chepi (Algonquin)',
        'Chlumani (Sioux)',
        'Chochmingwu (Hopi)',
        'Chosovi (Hopi)',
        'Chosposi (Hopi)',
        "Chu'Mana (Hopi)",
        "Chu'Si (Hopi)",
        'Chumani (Sioux)',
        'Ciqala(Dakota)',
        'Coahoma (Choctaw)',
        'Dezba (Navajo)',
        'Dibe (Navajo)',
        'Doba (Navajo)',
        'Doli (Navajo)',
        'Donoma (Omaha)',
        'Dowanhowee (Sioux)',
        'Doya (Cherokee)',
        'Ehawee (Sioux)',
        'Elu (Zuni)',
        'Ethete (Arapaho)',
        'Eyota (Sioux)',
        'Fala (Choctaw)',
        'Galilahi (Cherokee)',
        'Genessee (Iroquois)',
        'Gigyago (Potawatomi)',
        'Goga (Cherokee)',
        'Gola (Cherokee)',
        'Hachi (Seminole)',
        'Haiwee (Shoshone)',
        'Hakidonmuya (Hopi)',
        'Haloke (Navajo)',
        'Hantaywee (Sioux)',
        'Hateya (Miwok)',
        'Hausis (Algonquin)',
        'Hausisse (Algonquin)',
        'Hehewuti (Hopi)',
        'Helki (Miwok)',
        'Hialeah (Seminole)',
        'Hiawassee (Cherokee)',
        'Hinto (Dakota)',
        'Hola (Hopi)',
        'Honiahaka (Cheyenne)',
        'Honovi (Hopi)',
        'Howi (Miwok)',
        'Huata (Miwok)',
        'Huata (Moquelumnan)',
        'Humita (Hopi)',
        'Hurit (Algonquin)',
        'Huyana (Miwok)',
        'Inola (Cherokee)',
        'Isi (Choctaw)',
        'Jaci (Tupi)',
        'Kachina (Hopi)',
        'Kai (Navajo)',
        'Kakawangwa (Hopi)',
        'Kaliska (Miwok)',
        'Kamali (Mahona)',
        'Kamama (Cherokee)',
        'Kangee (Sioux)',
        'Kanti (Algonquin)',
        'Kasa (Hopi)',
        'Kaya (Hopi)',
        'Keegsquaw (Algonquin)',
        'Keezheekoni (Cheyenne)',
        'Keezheekoni (Chippewa)',
        'Kele (Hopi)',
        'Kenda (Dakota)',
        'Kewanee (Potawatomi)',
        'Kimama (Shoshone)',
        'Kimi (Algonquin)',
        'Kimimela (Sioux)',
        'Kinta (Choctaw)',
        'Kiwidinok (Cheyenne)',
        'Kiwidinok (Chippewa)',
        'Kokyangwuti (Hopi)',
        'Kolenya (Miwok)',
        'Kosa (Cheyenne)',
        'Kuckunniwi (Cheyenne)',
        'Kuwanlelenta (Hopi)',
        'Kuwanyamtiwa (Hopi)',
        'Kuwanyauma (Hopi)',
        'Kwanita (Zuni)',
        'Lenmana (Hopi)',
        'Liluye (Miwok)',
        'Liseli (Zuni',
        'Litonya (Miwok)',
        'Lomahongva (Hopi)',
        'Macawi (Sioux)',
        'Macha (Sioux)',
        'Magaskawee (Sioux)',
        'Mahu (Hopi) ',
        'Maka (Sioux)',
        'Makawee (Sioux)',
        'Makkitotosimew (Algonquin)',
        'Malia (Zuni)',
        'Malila (Miwok)',
        'Manaba (Navajo)',
        'Mankalita (Zuni ',
        'Mansi (Hopi)',
        'Mapiya (Sioux)',
        'Meli (Zuni)',
        'Memdi (Henna',
        'Meoquanee (Cheyenne)',
        'Meoquanee (Chippewa)',
        'Migina (Omaha)',
        'Migisi (Cheyenne)',
        'Migisi (Chippewa)',
        'Mimiteh (Omaha)',
        'Mina (Sioux)',
        'Minya (Osage)',
        'Misae (Osage)',
        'Misu (Miwok)',
        'Mitena (Ojibway)',
        'Mitena (Omaha)',
        'Mituna (Miwok)',
        'Mosi (Navajo)',
        'Muna (Hopi)',
        'Nadie (Algonquin)',
        'Nahimana (Sioux)',
        'Namid (Cheyenne)',
        'Namid (Chippewa)',
        'Namida (Chippewa)',
        'Nampeyo (Hopi)',
        'Nascha (Navajo)',
        'Natane (Arapaho)',
        'Neche (Ojibway)',
        'Nekoma (Chippewa)',
        'Niabi (Osage)',
        'Nidawi (Omaha)',
        'Nijlon (Algonquin)',
        'Nimeda (Potawatomi)',
        'Ninovan (Cheyenne)',
        'Nirvelli (Tudas)',
        'Nishwequanniquaweseh (Algonquin)',
        'Nita (Choctaw)',
        'Nittawosew (Algonquin)',
        'Niyol (Navajo)',
        'Nokomis (Cheyenne)',
        'Nokomis (Chippewa)',
        'Nova (Hopi)',
        'Noya (Cherokee)',
        'Nukpana (Hopi)',
        'Numees (Algonquin)',
        'Nuttah (Algonquin)',
        'Odahingum (Cheyenne)',
        'Odahingum (Chippewa)',
        'Odina (Algonquian)',
        'Ohcumgache (Cheyenne)',
        'Ojinjintka (Sioux)',
        'Ominotago (Cheyenne)',
        'Omusa (Miwok)',
        'Onaiwah (Ojibway)',
        'Onatah (Iroquois)',
        'Ooljee (Navajo)',
        'Oota Dabun (Algonquin)',
        'Opa (Choctaw)',
        'Orenda (Iroquois)',
        'Osyka (Choctaw)',
        'Otekah (Navajo)',
        'Oya (Moquelumnan)',
        'Pakuna (Miwok)',
        'Pakwa (Hopi)',
        'Pamuy (Hopi)',
        'Pamuya (Hopi)',
        'Pana (Blackfoot)',
        'Panola (Choctaw)',
        'Papina (Miwok)',
        'Pati (Miwok)',
        'Pauwau (Algonquin)',
        'Pavati (Hopi)',
        'Pazi (Ponca)',
        'Pelipa (Zuni)',
        'Polikwaptiwa (Hopi)',
        'Poloma (Choctaw)',
        'Posala (Miwok)',
        'Powaqa (Hopi)',
        'Ptaysanwee (Sioux)',
        'Pules (Algonquin)',
        'Quahneah(Cheyenne)',
        'Quanah(Comanche)',
        'Sacajawea (Shoshone)',
        'Sahkyo (Navajo)',
        'Sahpooly (Kiowa)',
        'Salali (Cherokee)',
        'Sanuye (Miwok)',
        'Sapata (Miwok)',
        'Sasa (Cherokee)',
        'Shadi (Navajo)',
        'Sheshebens (Cheyenne)',
        'Sheshebens (Chippewa)',
        'Shideezhi (Navajo)',
        'Shima (Navajo)',
        'Shimasani (Navajo)',
        'Shuman (Hopi)',
        'Sihu (Hopi)',
        'Sikya (Hopi)',
        'Sinopa (Blackfoot)',
        'Sinopa (Cayuse)',
        'Sipatu (Miwok)',
        'Sitala (Miwok)',
        'Sitsi (Navajo)',
        'Skenandoa (Iroquois)',
        'Snana (Sioux)',
        'Sokanon (Algonquin)',
        'Sokw (Algonquin)',
        'Sonoma (Miwok)',
        'Sooleawa (Algonquin)',
        'Soyala (Hopi)',
        'Suletu (Miwok)',
        'Suni (Zuni)',
        'Suni Nati (Zuni)',
        'Sunki (Hopi)',
        'Taa (Zuni)',
        'Tablita (Hopi)',
        'Taci (Zuni)',
        'Tadewi (Omaha)',
        'Tadita (Omaha)',
        'Tahki (Algonquin)',
        'Taigi(Omaha) ',
        'Taini (Omaha)',
        'Taipa (Miwok)',
        'Takala (Hopi)',
        'Takchawee (Sioux)',
        'Takhi (Algonquin)',
        'Talulah (Choctaw)',
        'Talutah (Sioux)',
        'Tangakwunu (Hopi)',
        'Tansy (Hopi)',
        'Tayanita (Cherokee)',
        'Tiponi (Hopi)',
        'Tiva (Hopi)',
        'Tiwa (Zuni)',
        'Tokala (Dakota)',
        'Tolinka (Miwok)',
        'Tooantuh (Cherokee)',
        'Toski (Hopi)',
        'Totsi (Hopi)',
        "Tsiishch'Ili (Navajo)",
        'Tsomah (Kiowa)',
        'Tsula (Cherokee)',
        'Tula (Choctaw)',
        'Tusa (Zuni)',
        'Tuuwa (Hopi)',
        'Tuwa (Hopi)',
        'Una (Hopi)',
        'Unega (Cherokee)',
        'Urika (Omaha)',
        'Usdi (Cherokee)',
        'Utina (Timucua)',
        'Wachiwi (Sioux)',
        'Wakanda (Sioux)',
        'Waki (Hopi)',
        'Wanekia (Paiute)',
        'Wapun (Potawatomi)',
        'Washta (Sioux)',
        'Watseka (Potawatomi)',
        'Wauna (Miwok)',
        'Wawetseka (Potawatomi)',
        'Weayaya (Sioux)',
        'Weeko (Sioux)',
        'Wenona (Sioux)',
        'Wenonah (Sioux)',
        'Wichahpi (Sioux)',
        'Wihakayda (Sioux)',
        'Wikimak (Algonquin)',
        'Winona (Sioux)',
        'Witashnah (Sioux)',
        'Woya (Cherokee)',
        'Wuti (Hopi)',
        'Wyome (Algonquian)',
        'Xochitl (Nahuatl)',
        'Yamka (Hopi)',
        'Yanaba (Navajo)',
        'Yatokya (Zuni)',
        'Yazhi (Navajo)',
        'Yenene (Miwok)',
        'Yoki (Hopi)',
        'Yona (Cherokee)',
        'Yoomee (Coos)',
        'Yutu (Miwok)',
        'Zihna (Hopi)',
        'Ziracuny (Kiowa)',
        'Zitkala (Dakota)',
        'Zonta (Sioux)',
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
