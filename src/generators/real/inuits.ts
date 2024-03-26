import { sample } from 'lodash-es';

export default function inuits() {
    let names: string;
    const nm1 = [
        'Adlartok (Clear Sky)',
        'Aga (Mother)',
        'Aglakti (Song Maker)',
        'Agloolik (Good Spirit)',
        'Aguta (Gatherer of the Dead)',
        'Ahnah (Wise Woman)',
        'Aipalovik (Evil God of the Sea)',
        'Aippaq (Companion)',
        'Aituserk (Prize)',
        'Akiak (Brave)',
        'Akkikiktok (Costs Little)',
        'Akkilokipok (Soft Snow)',
        'Akkituyok (Costs A Lot)',
        'Aklaq (Black Bear)',
        'Akluitok (Is Rich)',
        'Akna (Mother Goddess)',
        'Akrittok (Soft)',
        'Alornerk (Under-Feet)',
        'Amaguq (Father Wolf)',
        'Amak (Playful)',
        'Amaqjuaq (Strong One)',
        'Amaruq (Grey Wolf)',
        'Ammagaruqnik (Arctic Wolf)',
        'Anana (Beautiful)',
        'Anernerk (Angel)',
        'Anik (Seer)',
        'Aningan (God of the Moon)',
        'Annakpok (Free)',
        'Anuniaq (Hunter of Food or Knowledge)',
        'Anuun (Quagan, Man with the Hammer)',
        'Anyu (Snow)',
        'Aput (Snow)',
        'Aqakuktuq (Catches Fish)',
        'Aqillutaq (New Snow)',
        'Aqpalibaaqtuq (Runs a Race)',
        'Aquutaq (Ice Cream)',
        'Aquyittuq (Sits Down)',
        'Arjalinerk (Ash)',
        'Arnaaluk (Female sea spirit)',
        'Arrluk (Killer Whale)',
        'Asiavik (Blue Berry)',
        'Assiminik (Zealous)',
        'Asuilaak (Expected to Arrive)',
        'Asungaq  (Birddog)',
        'Ataciara (Familiar Spirit)',
        'Atanarjuat (Fast Runner)',
        'Ataneq (King)',
        'Ataninnuaq (One who counsels)',
        'Atiqtalaaq (Polar Bear Cub)',
        'Atiqtalik (Polar Bear Mother)',
        'Atka (Guardian Spirit)',
        'Atkonartok (God that lived on land)',
        'Atuqtuaq (Sings)',
        'Aujaq (Summer)',
        'Aukaneck (Stormy Sea)',
        'Aumanil (God that lived in the sea)',
        'Aupti (Snow on the Ground)',
        'Biisaiyowaq (Clever Person)',
        'Buniq (Sweet Daughter)',
        'Chena (Name of a river)',
        'Chu (Beaver)',
        'Chugach (Name of a Mountain Range)',
        'Chugiak (Name of a Mountain Range)',
        'Chulyin (Raven)',
        'Cikuq (Ice)',
        'Corazon (Heart)',
        'Cupun (Coal)',
        'Deniigi (Moose)',
        'Desna (Boss)',
        'Ek Chua (God of Merchants)',
        'Eska (Name of a Creek)',
        'Hey (Winter)',
        'Higalik (Ice House)',
        'Ikiaq (Red Spruce)',
        'Ikniqpalagaq (Lightning) ',
        'Ila (Companion)',
        'Ilannaq (Friend)',
        "Illiivat (Person who's learning)",
        'Iluak (Person who does good)',
        'Iluliaq (Iceberg)',
        'Iluq (Frost)',
        'Immuyak (Butter)',
        'Imnek (Cliff)',
        'Innugati (Friend)',
        'Inungoark (Doll)',
        'Ipiktok (Keen)',
        'Iqniq (Fire)',
        'Irdlirvirisissong (Demon cousin of the moon) ',
        'Irniq (Son)',
        'Issorartuyok (Leader Dog)',
        'Issudlerk (Extreme)',
        'Issumatar (Superior)',
        'Itigiaq (Weasel)',
        "K'eyush (Cub)",
        'Kakortok (Cheerful)',
        'Kamik (Boot)',
        'Kanguq (Snow Goose)',
        'Kannoyak (Cotton Grass)',
        'Kanosak (Gold)',
        'Kanut (White Goose)',
        'Kapik (Coffee)',
        'Kappianartok (Fearful)',
        'Kappiataitok (Brave)',
        'Karpok (Hungry)',
        'Kaskae (Chief)',
        'Kassuq (Drifting Ice)',
        'Kattituyok (Deep Voice)',
        'Kayuqtuq (Red Fox)',
        'Keelut (Evil Earth Spirit)',
        'Kesuk (Water)',
        'Kilalurak (White Whale)',
        'Kilaun (Drum)',
        'Kinaktok (Sharp)',
        'Kinalik (Duck)',
        'Kinapak (Mask)',
        'Kingudlerk (Ultimate)',
        'Kinguyakkii (Northern Lights)',
        'Kissarviarsuk (Kiss)',
        'Koko (Chocolate)',
        "Kuk'uq (Animal)",
        'Kunik (Kiss)',
        'Kunikpaa (Kiss Him/Her)',
        'Kunikpok (Kisses)',
        'Kunwaktok (Smiles)',
        'Kussuyok (Cowardly)',
        'Kuvageegai (Patriot)',
        'Maguyuk (Howler)',
        'Makittuq (Stand)',
        'Makoktok (Young)',
        'Makpigat (Book)',
        'Malik (Wave)',
        'Mangokpok (Melting Snow)',
        'Maniitok (Rugged)',
        'Manirak (Smooth Ice)',
        'Masaaraq (Ice Floe)',
        'Massak (Soft Snow)',
        'Massalerauvok (Snow Filled with Water)',
        'Mauja (Soft Deep Snow)',
        'Mequssuk (Shaggy Dog)',
        'Miki (Little)',
        'Nagojut (Friendly)',
        'Nannuraluk (Polar Bear)',
        'Nanuq (Polar Bear)',
        'Nasamiituuq (Blossom)',
        'Natsiq (Seal)',
        'Nauja (Seagull)',
        'Nerromiktok (Soft to the Touch)',
        'Nertornartok (Glorious)',
        'Nigaq (Rainbow)',
        'Nilak (Fresh-Water Ice)',
        'Ningakpok (Mad/Angry)',
        'Nini (Porcupine)',
        'Nippikortuyok (Loud)',
        'Nirliq (Snow Goose)',
        'Noahtakmiut (Little River)',
        'Noatak (River)',
        'Nukilik (Strong)',
        'Nukka (Younger Sister)',
        'Nunataq (Mountain Peak)',
        'Nuniq (Female Seal)',
        'Nutaaq (Solid Ice)',
        'Nutaralak (Baby)',
        'Nutarniq (New Ice)',
        'Nuvuk (Headland)',
        'Okauyak (Shrub)',
        'Olikpok (Shivers)',
        'Onartok (Warm)',
        'Oogrooq (Bearded Seal)',
        'Oomailiq (Whaling Captain)',
        'Palartok (Quiet)',
        'Pamiuq (Seal Tail)',
        'Panik (Daughter)',
        'Pattangayok (Chilly)',
        'Patuktuq (Ice Crystals)',
        'Pekartok (Rusty)',
        'Piaktok (Slippery)',
        'Pikatti (Companion)',
        'Piktaungitok (Evil)',
        'Pimniq (Seal)',
        'Piqqluyungmik (Iceberg)',
        'Pitsiark (Beautiful)',
        'Poallu (Mitts)',
        'Pukajaak (Snow)',
        'Pukak (Snow Crust)',
        'Pukiq (Smart)',
        'Purnaq (Duck Fat)',
        'Putyuk (Medicine Woman)',
        'Qajak (Kayak)',
        'Qammutiq (Sled)',
        'Qaniit  (Falling Snow)',
        'Qannik (Snowflake)',
        'Qeorvik (Wood)',
        'Qigiq (White Hawk)',
        'Qilaq (Sky)',
        'Qimmiabruk (Puppy)',
        'Qimmiq (Dog)',
        'Qimugkauyar (Puppy)',
        'Qimugta (Dog)',
        'Quamaniq (Beam of Light',
        'Quvianuq (Joy)',
        'Sadluyok (Skinny)',
        'Saghani (Raven)',
        'Sakari (Sweet)',
        'Salaksartok (Victorious)',
        'Sangilak (Strongest of All)',
        'Sedna (Goddess of the Sea)',
        'Sesi (Snow)',
        'Shesh (Brown Bear)',
        'Shila (Flame)',
        'Shtiya (Strength)',
        'Sialuk (Rain Drop)',
        'Siarut (Button)',
        'Siku (Ice)',
        'Sikuaq (Thin Ice)',
        'Silatuyok (Cute/Intelligent)',
        'Sinaaq (Edge of the Sea Ice)',
        'Sirmiq (Glacier)',
        'Sitiyok (Hard)',
        'Sivudlerk (First)',
        'Sos (Bear)',
        'Suka (Fast)',
        'Suluk (Feather)',
        'Sura (Green Leaf)',
        'Takiyok (Long)',
        'Taktuq (Fog)',
        'Takubvik (Eye Apple)',
        'Taliriktug (Strong Arm)',
        'Tanaraq (Granddaughter of the Tundra)',
        'Tapeesa (Arctic Flower)',
        'Taqukaq (Grizzly Bear)',
        'Tarralikitak (Butterfly)',
        'Tartok (Dark)',
        'Tatkret (Moon)',
        'Tattilgat (Crane Bird)',
        'Tekkeitsertok (God of the Eart)',
        'Tiguaq (Adopted Child)',
        'Tiilaqiia (Beautiful Plant)',
        'Tikaani (Wolf)',
        'Tingenek (Bare Ice)',
        'Tingiyok (Flying)',
        'Tipvigut (Snowdrift)',
        'Tiqriganiannig (Arctic Fox)',
        'Tiquana (Adopted Son)',
        'Tlate Hiin (Water Twinkle)',
        'Tomkin (Home of Spirits)',
        'Tonraq (Spirit)',
        'Tonrar (Spirit)',
        'Tootega (Old Female Deity)',
        'Torngasak (Good Spirit)',
        'Tukkuttok (Generous)',
        'Tuktu (Deer)',
        'Tulugaq (Raven)',
        'Tulukaruk (Crow)',
        'Tunerk (Gift)',
        'Tungortok (Blue)',
        'Tupilek (Shaman)',
        'Tupiq (Tent)',
        'Tuuluuwaq (Fierce)',
        'Tuuq (Ice Pick)',
        'Ublureak (Star)',
        'Ugalik (Arctic Hare)',
        'Uglu (Seal Hole in Ice)',
        'Uiritsaktak (Playful)',
        'Ukiuk (Winter)',
        'Ukluk (Brown Bear Skin)',
        'Ulva (Wolf)',
        'Umiaktorvik (River)',
        'Unalaq (West Wind)',
        'Unnuk (Evening)',
        'Uukkarnit (Carved Ice)',
        'Uvlugiaq (Stars in the Sky)',
        'Uyarak (Rolling Rock)',
        'Yakone (Red Aurora)',
        'Yuralria (Dancing One)',
    ];
    {
        names = sample(nm1);
        return names;
    }
}