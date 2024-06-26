import { sample } from 'lodash';

export default function zulus() {
    let names: string;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = [
        'Abelo (Free Gift)',
        'Abongameli (President)',
        'Amahle (Beautiful one)',
        'Amehlo (Eyes)',
        'Amukelani (Accept)',
        'Andile (The family is growing)',
        'Anele (They are enough)',
        'Anelisa (Satisfy)',
        'Avela (They appear)',
        'Ayanda (Augment the family )',
        'Ayize (Let it happen)',
        'Azisa (Honour, Esteem, Pride)',
        'Bafana (Boys)',
        'Bandile (They have extended in number )',
        'Bangizwe (Fighting for Land)',
        'Bheka (Look, watch, take care of)',
        'Bhekabantu (Look after the people)',
        'Bhekifa (Look after the treasure)',
        'Bhekimuzi (Look after the household or descendants)',
        'Bhekinkosi (Look to the King (God))',
        'Bhekisisa (Careful, Cautious)',
        'Bhekithemba (Look for Hope )',
        'Bhekizifundiswa (Watch  (and learn from) the educated ones)',
        'Bhekizizwe (Look after the Nations)',
        'Bhekumuzi (Look after the house)',
        'Bongani (Be thankful, Grateful )',
        'Bonginkosi (Thank the Lord)',
        'Busiso (Blessing, benediction)',
        'Buyisiwe (Returned )',
        'Cakaza (To scatter)',
        'Cashile (Hidden, Child of Secret Birth)',
        'Cebo (Riches, wealth)',
        'Cela (To ask)',
        'Celankobe (Evening Star)',
        "Celokwakhe (Asking one's due)",
        'Celumusa (Ask for mercy)',
        'Cetshwayo (The betrayed one)',
        'Chacha (Sleek)',
        'Chaka (Warrior)',
        'Chakide (Weasel )',
        'Chakijane (Cunning fellow, mongoose)',
        'Chipo (Gift)',
        'Chitauli (Dictator, One who tells the Law)',
        'Chotho (Hail)',
        'Chweba (Lake, lagoon, harbor, haven)',
        'Ciko (Gifted person, dancer or singer)',
        'Cilonga (Trumpet)',
        'Cothoza (Walk carefully)',
        'Cwatha (Cloudless)',
        'Dabu (Origin, source)',
        'Dabuka (Traditional custom)',
        'Dabulamanzi (Divider of the waters)',
        'Dalingcebo (Founder of wealth)',
        'Daza (Obstinate, persistent)',
        'Delani (Content )',
        'Dida (Puzzle, mystery)',
        'Dinfa (To wander, to be without a home)',
        'Dingane (One who Searches )',
        'Dingani (what do you need)',
        'Dingiswayo (Wanderer )',
        'Dinizulu (The one who satisfies the Zulus)',
        'Donya (Star, white spot on face of an animal)',
        'Dube (Zebra )',
        'Duma (Thunder, rumble)',
        'Dumezulu (Something big, exciting)',
        'Dumisa (Causes thunder)',
        'Dumisane (Praising)',
        'Dumisani (Give praises )',
        'Dumisile (Praised )',
        'Dumo (Fame, renown)',
        'Duna (Headman)',
        'Dundu (Reaching the top)',
        'Dundubala (Climax, reach the top)',
        'Eethaba (Be happy)',
        'Elethu (It is Ours)',
        'Engameli (President)',
        'Falakhe (His inheritance)',
        'Fananaye (Resembling the other)',
        'Fanyana (Little Boy)',
        'Felokwakhe (Die for his own)',
        'Fikile (He has been born)',
        'Finyelela (To reach, to arrive)',
        'Fobela (To gulp down, take a large mouthful)',
        'Fokazi (Stranger)',
        'Fowabo (their brother)',
        'Fowenu (Your brother)',
        'Fudu (Tortoise)',
        'Fulathela (Turn the back)',
        'Fundani (Learn)',
        'Fundisa (Teach)',
        'Fuza (Resemble, take after)',
        'Fuzo (Heredity, resemblance)',
        'Gabadeli (He who acts with force)',
        'Gabadi (Earth)',
        "Gabangaye (Putting one's trust on other; Faces in the sun)",
        'Gamalakhe (His name)',
        'Gangi (Mischievous person)',
        'Gania (Clever)',
        'Ganiah (Clever)',
        'Ganya (Clever)',
        'Ganyah (Clever)',
        'Gatsha (Tree branch)',
        'Gazi (Strong personality)',
        'Gazini (Blood)',
        'Gcinumuzi (Look after the house)',
        'Gebhuza (Slashing warrior)',
        'Geza (Handsome young man)',
        'Ghakarhi (Fierce Warrior)',
        'Gibeli (Expert horseman)',
        'Gijimani (A fast runner)',
        'Gijimi (Professional runner, messenger)',
        'Godlumthakathi (Holds back the Wizard)',
        'Goduka (Prodigal son, return home)',
        'Guduza (Walk about)',
        'Gugu (Treasure)',
        'Gwala (Coward)',
        'Gwazi (Warrior who is an expert with a spear)',
        'Gwedi (Skilled sculptor)',
        'Gwembeshe (Bow-legged)',
        'Gwili (Rich, prosperous person)',
        'Hlatshwayo (Stabbed one)',
        'Hlelile (Reversed)',
        'Hlengiwe (Rescued )',
        'Hluphizwe (He who harasses the nation)',
        'Ibubesi (Lion)',
        'Ifu (Cloud)',
        'Igama (Name)',
        'Ikhanda (Head)',
        'Impela (Truth)',
        'Impi (Army)',
        'Impisi (Hyena)',
        'Indlovu (Forceful)',
        'Induna (Advisor, Great Leader)',
        'Ingane (Child)',
        'Ingiyab (Serpent)',
        'Ingqondo (Intelligence )',
        'Ingwe (Leopard)',
        'Inyoni (Bird)',
        'Iqaqa (Polecat)',
        'Iqhunde (Rooster)',
        'Izagala (Stick)',
        'Izula (Nomad)',
        'Jabu (Rejoice)',
        'Jabulani (Rejoice)',
        'Jama (Stern Countenance )',
        'Jwayelani (Accustomed)',
        'Kgabu (Richly decorate )',
        'Kgomotso (Tranquility)',
        'Khayalethu (Our home)',
        'Khethukuthula (Choose to be quiet)',
        'Khewzi (Star)',
        'Khulani (Growing up)',
        'Khulekani (Pray)',
        'Kosan (A leader)',
        'Kubu (Rebellion)',
        'Kufika (It is beautiful)',
        'Kuhlekonke (All is well)',
        'Kuhlesbonge (We should be thankful)',
        'Kwanele (It is enough)',
        'Kwazulu (Place of Heaven)',
        'Langalibalele (Shining sun)',
        'Lethu (Ours)',
        'Linda (Waiting)',
        'Lindani (Wait, Be patient)',
        'Lindela (Wait for something)',
        'Lindelani (Waited)',
        'Lindile (Waited)',
        'Litha (Ray of Light)',
        'Lizwi (He is the Voice)',
        'Londisizwe (Protect the Nation)',
        'Lunga (Be good and kind)',
        'Lungelo (Right)',
        'Lungile (Good One)',
        'Luvo (Opinion)',
        'Luyanda (It  (Love) is growing)',
        'Lwandile (It  (love) has intensified)',
        'Lwazi (Knowledge)',
        'Makhaya (Homes)',
        'Malibongwe (Let His name be praised)',
        'Malusi (Shepherd)',
        'Mandla (Power)',
        'Mandlakhe (Strength / Power / His efforts)',
        'Mandlenkosi (Power of God)',
        'Manelesi (Satisfier)',
        'Manqoba (The one who conquers in hopeless situations)',
        'Maphikelela (He who perseveres)',
        'Mapoza (One who chases )',
        'Matshana (Little stones)',
        'Mbongiseni (Help one to say thank you)',
        'Mbube (Lion )',
        'Mcebo (Wealth)',
        'Mduduzi (Bring hope)',
        'Menzi (Creator)',
        'Meshindi (Conqueror, Victor)',
        "Mfanafuthi (It's a boy again)",
        'Mfundo (Education)',
        'Mgwazeni (Stab him)',
        'Mhambi (Traveler)',
        'Minenhle (Having a good or lovely day)',
        "Mkhumbuleni (Let's remember him)",
        'Mlungisi (The one who brings order)',
        'Mlungisi (fixer)',
        'Mmeli (Lawyer)',
        'Mncedisi (Helper)',
        'Mndeni (Family)',
        'Mnotho (Our wealth)',
        'Mnqobi (Conquer)',
        'Mondli (Feeder)',
        'Mpendulo (Reply)',
        'Mphikeleli (He who perseveres)',
        'Mpilo (Life)',
        'Mpinkulu (Big or great war)',
        'Mpucuko (Civilization)',
        'Mpumelelo (Success)',
        'Mqondisi (Director)',
        'Msizi (Helper)',
        'Mthandeni (Love him)',
        'Mthobisi (The one who made things quiet)',
        'Mthokozisi (The one who gives joy)',
        'Mtholephi (Where was he found)',
        'Mthunzi (Shade, Shadow)',
        'Musa (Grace)',
        'MusaweNkosi (Having the Grace of God)',
        "Muzikayise (He who builds his father's home)",
        'Mvelo (Creation)',
        'Mvuseselo (Revival)',
        'Mzamo (Attempts, puts in effort)',
        "Mzikayise (Father's household)",
        'Mzwakhle (His home)',
        'Mzwamandla (Powerhouse)',
        'Mzwandile (The family has increased)',
        'Mzwenhlanhla (Home for good fortune)',
        'Ncelebana (Spy)',
        'Ndleleni (On the road)',
        'Ndonsa (Bright morning star)',
        'Nduduzo (Make one feel better)',
        'Ndumiso (Praise)',
        'Ngenzokwami (I do what I want)',
        'Nhlahla (Luck)',
        'Nhlakanipho (Wisdom)',
        'Nhlanhla (Luck)',
        'Nikhil (Complete, whole, entire)',
        'Njabulo (Joy )',
        'Nkanyezi (Star)',
        'Nkanyiso (Light)',
        'Nkonkoni (Champion, Leader)',
        'Nkosenye (One king or another king)',
        'Nkosi (He will rule)',
        'Nkosinathi (God is with us)',
        'Nkosingiphile (Given by God)',
        'Nkosinhle (The King  (ie God) is good)',
        'Nkosiphendule (God has answered)',
        'Nkululeko (Freedom)',
        'Nqobani (You must conquer)',
        'Nqobizitha (Conquer the enemies)',
        'Nsizwa (Young man)',
        'Ntuthuko (Development)',
        'Olothando (That love of God)',
        'Owethu (Ours)',
        'Phakama (Stand up)',
        'Phazamisa (Troublesome)',
        'Phesheya (Overseas)',
        'Phila (Good Health)',
        'Philani (Be well)',
        'Phindile (Repetition)',
        'Phiwayinkosi (Given by the Lord)',
        'Phiwokwakhe (He who was given what was rightfully his)',
        'Phumelela (Prosperity)',
        'Phumlani (Rest)',
        'Qaphelani (Be Observant)',
        'Qedusizi (End misery)',
        'Qhude (Rooster)',
        'Qinisela (Persevere)',
        'Qiniso (Truthful)',
        "S'bonele (Example)",
        "S'kulekile (We've prayed)",
        "S'bu (Blessing)",
        "S'bu (short for Sibusiso)",
        "S'phamandla (Give us strength)",
        'Sakhile (We have built)',
        'Sandile (We have increased)',
        'Sanele (We are satisfied)',
        "Sbu (Short for ?ibusiso')",
        'Sduduzo (Make one feel better)',
        'Senzangakona (Acts for a good reason)',
        'Senzo (Deed)',
        'Sfiso (Wish)',
        'Sibakabaka (Sky, Blue sky)',
        'Sibongile (We are thankful)',
        'Sibongiseni (We are thankful)',
        'Siboniso (Being a leader)',
        'Sibusiso (Blessing)',
        'Sifiso (What we wished for)',
        'Sihle (Beautiful feeling)',
        'Sikhosiphi (Where are we)',
        'Simphiwe (We have been given him)',
        'Sinenhlanhla (We have luck)',
        'Sinoxolo (We have peace)',
        'Siphamandla (Give us strength)',
        'Siphelele (We are complete)',
        'Siphesihle (Good gift)',
        'Siphiwe (We have been given)',
        'Sipho (Gift)',
        'Siphosethu (our gift)',
        'Sithembile (We trust)',
        'Sithembiso (Promise)',
        'Siyabonga (We thank you)',
        'Siyanda (We are growing)',
        'Siza (Help)',
        'Sizani (You all help)',
        'Sizwe (Nation)',
        'Slindile (Waiting)',
        'Spamandla (Give us strength)',
        'Sqalesihle (Beautiful)',
        'Sthembiso (Promise)',
        'Tandie (Fire)',
        'Thabo (Happiness)',
        'Thamsanqa (Luck)',
        'Thamsanqa (We have luck)',
        'Thandabantu (Fond of others)',
        'Thandanani (You all love one another)',
        'Thando (Love)',
        'Thandoluhle (Good love)',
        'Thatha (Take )',
        'Themba (Hope and trust)',
        'Thembelani (Have faith)',
        'Thembinkosi (Trust the lord)',
        'Thembisile (Promise)',
        'Thulani (Be still, Be comforted)',
        'Thulasizwe (Nation)',
        'Thuthuka (Become a better person)',
        'Ubaba (Our Father)',
        'Ufasimba (Haze)',
        'Ukudlala (Play )',
        'Ukuxhasa (Support)',
        'Ukuza (Come )',
        'Ulwazi (One with knowledge)',
        'Umgibeli (Passenger)',
        'Umklomelo (Prize)',
        'Umzuzu (Moment)',
        'Unathi (He is with us)',
        'Uyathanda (He loves)',
        'Uyise (Their Father)',
        'Vala (Close )',
        'Velabahleke (Amuser)',
        'Velaphi (Where from?)',
        'Vukani (Rise and shine)',
        'Vusi (Builder of the Home)',
        'Vusumuzi (Builder of the Home)',
        'Vuyo (Joy)',
        'Wandile (Extra)',
        'Wenzile (It has been done)',
        'Xhegu (Old Man)',
        'Xhibeni (Kitchen)',
        'Xolani (Peace)',
        'Yengwayo (The tempted)',
        'Zama (Try)',
        'Zamani (Try again)',
        'Zenzele (Do for self)',
        'Zibonele (See for yourself)',
        'Ziphozonke (All the gifts)',
        'Zishwezi (Gliding)',
        'Zithembe (Trust yourself )',
        'Zithulele (He is quiet)',
        'Zonke (All)',
        'Zonkizizwe (All nations)',
        'Zuzumuzi (Household beneficiary)',
        'Zwelibani (Broad country)',
        'Zwelikude (Far away)',
    ];
    const nm2 = [
        'Abusiswe (Be blessed)',
        'Amahle (Beautiful one)',
        'Amehlo (Eyes)',
        'Amukelani (Accept)',
        'Andile (The family is growing)',
        'Anele (They are enough)',
        'Anelisa (Satisfied)',
        'Aphiwe (We are given)',
        'Ayanda (Growing, Increasing)',
        'Ayize (Let it happen)',
        'Babavana (Tall and slender person)',
        'Bakabaka (Pretty Woman)',
        'Balungile (Righteous)',
        'Bekebeke (Glittering, Shining)',
        'Bheka (Look, Take care of)',
        'Bhekimuzi (Look after the household)',
        'Bhekisisa (Careful, Cautious)',
        'Bhekisisa (To be careful, cautious)',
        'Bhekithemba (Look for hope)',
        'Bhekizizwe (Look after the nations)',
        'Bikwaphi (Where should the report be sent)',
        'Bongani (Be thankful)',
        'Bongile (Thanks)',
        'Bongiwe (Asked for girl child, we are grateful)',
        'Buhle (Beauty)',
        'Buhlebenkosi (Gracious God)',
        'Busisiwe (She has been blessed)',
        'Buyisiwe (Blessed)',
        'Cabanga (Think, Meditate)',
        'Cebile (Rich)',
        'Cebisile (Advise giver)',
        'Celukuthula (Ask for peace)',
        'Celukwazi (Looking for knowledge)',
        'Cwazimula (Shine Brightly)',
        'Dade (Sister)',
        'Dambudzo (Born during troubled times)',
        'Dandalaza (In the open)',
        'Dansa (Dance)',
        'Davathi (Beaded Anklet)',
        'Dazuluka (Shout or scream loudly)',
        "Deliwe (She's been forsaken)",
        'Dida (Puzzle)',
        'Didiza (Flutter, tingle)',
        'Dodakazi (Daughter)',
        'Duduzile (Consoled)',
        'Dumazile (She disappoints)',
        'Dumile (Renowned)',
        'Dumisani (Give praise)',
        'Dumisile (Praised)',
        'Ejaj (Be jovial, merry)',
        'Ekuseni (In the morning)',
        'Elethu (It is ours)',
        'Enama (To be happy, contented)',
        'Enanela (Rejoice)',
        'Enezezelo (Addition)',
        'Esasa (Be happy)',
        'Ethuka (Surprise)',
        'Ethulo (Gift)',
        'Ethwasa (Start anew)',
        'Fahlasi (Tall person)',
        "Fakazi (Jehovah's witness)",
        'Fikile (She has arrived)',
        'Fudu (Tortoise)',
        'Fula (Reap, gather crops from the field)',
        'Funani (Searching)',
        'Futhi (Again, more than once)',
        'Gabisile (She, who we can show off)',
        'Gagasi (Ocean wave)',
        'Gatsha (Tree branch)',
        'Gede (Honey guide)',
        'Gonothi (Tall, slender person)',
        'Gqamile (To stand among others)',
        'Gugu (Precious)',
        'Gugulethu (Our Treasure)',
        'Halalisiwe (Celebrated)',
        'Hlengiwe (Redeemed, Nursed)',
        'Hleziphi (Whereupon is she?)',
        'Hlobisile (Decorative)',
        'Hloniphile (Respectful)',
        'Hluphekile (She is destitute)',
        'Icici (Earring)',
        'Ifu (Cloud)',
        'Impela (Truthfully, Indeed)',
        'Impisi (Hyena)',
        'Indlovu (Elephant)',
        'Ingani (Child)',
        'Ingqondo (Intelligence)',
        'Ingwe (Leopard)',
        'Inyoni (Bird)',
        'Ishumi (Ten)',
        'Izula (Nomad)',
        'Jabhile (She is saddened)',
        'Jabulile (She is happy)',
        "Jezile (She's been punished)",
        'Kgabu (Richly decorate)',
        'Khangezile (Our hands are open)',
        'Khanya (Light)',
        'Khanyisile (Brought Light)',
        'Khaya (Home)',
        'Khethiwe (Chosen)',
        'Khethukuthula (Choose to be quiet)',
        'Kholiwe (Religious)',
        'Khule (It is beautiful)',
        'Khulekani (Pray)',
        'Khulelaphi (Where should she grow up?)',
        'Khululiwe (Exonerated)',
        'Khwezi (Bright morning star)',
        'Kwanele (Enough)',
        "Lethiwe (She's been brought)",
        'Lethu (Ours)',
        'Lindelani (Wait)',
        'Lindidwe (Waited for)',
        'Lindiwe (We have waited for her)',
        'Linduthando (Waiting to be loved)',
        'Londisizwe (Protect the Nation)',
        'Londiwe (She is preserved)',
        'Lungelo (Rights)',
        'Lungile (She is good, Good one)',
        'Luvo (Opinion)',
        'Lwandle (Ocean)',
        'Makhosazana (Princess)',
        'Mandla (Power)',
        'Manelesi (Satisfier)',
        'Mbalenhle (Beautiful flower)',
        'Mbali (Flower)',
        'Mbhali (Rose / Flower)',
        'Mhambi (Traveler)',
        'Minehle (Beautiful day)',
        'Minenhle (Good day)',
        'Mlilo (Fire)',
        'Mncedisi (Helper)',
        'Mondli (Feeder)',
        'Mpendulo (Reply)',
        'Mpumelelo (Success)',
        'Msizi (Helper)',
        'Mthandeni (Love her)',
        'Mthunzi (Shadow)',
        'Mzwandile (The family has increased)',
        'Naledi (Star)',
        'Nandi (Sweet)',
        'Ncamisile (She has caused us to give up)',
        'Ndabezinhle (Good news)',
        'Ndonsa (Bright morning star)',
        'Ndumiso (Praise)',
        'Nelisiwe (Satisfied)',
        'Nhalahla (Luck)',
        'Nhlakanipho (Wisdom)',
        'Njabulo (Happy)',
        'Njabulu (Happiness)',
        'Nkazimulo (Glory)',
        'Nkonkoni (Champion)',
        'Nkosazana (Princess)',
        'Nkosingiphile (The Lord gave me)',
        'Nkosiphendule (God has answered)',
        'Nobantu (Mother of the People)',
        'Nobuhle (Beautiful one)',
        'Nobuntu (Kindness)',
        'Nokubonga (Full of thanks)',
        'Nokukhanya (Mother of light)',
        'Nokulunga (Faithfulness)',
        'Nokuthokoza (Gratitude)',
        'Nokuthula (Mother of peace)',
        'Nokwanda (Expansion)',
        'Nokwazi (Knowledgeable)',
        'Nolwandle (Mother of Oceans)',
        'Nolwazi (One with knowledge)',
        'Nomabhongo (With pride)',
        'Nomagugu (The precious one)',
        'Nomakholwa (Mother of believers)',
        'Nomalanga (Mother of sun)',
        'Nomandla (Mother of strength)',
        'Nomasonto (Mother of Sundays)',
        'Nomathalente (Mother of talents)',
        'Nomathemba (With hope)',
        'Nombulelo (Mother of prayer)',
        'Nombuyiselo (Mother of restoration)',
        'Nomcebo (Mother of wealth)',
        'Nomfundo (Mother of education)',
        'Nompilo (Mother of health)',
        'Nompumelelo (Success)',
        'Nomsa (Caring One, Faith)',
        'Nomthandazo (Mother of prayer)',
        'Nomthimba (Wedding)',
        'Nomusa (With grace / Kindness)',
        'Nomvula (After the rain)',
        'Nomzamo (Struggle)',
        'Nonhlanhla (Good luck)',
        'Nonhle (Mother of Beauty)',
        'Nonjabulo (Mother of joy)',
        'Nonkululeko (Freedom)',
        'Nontethelelo (To be washed from sin)',
        'Nontobeko (Humility)',
        'Nosakhele (Build for us)',
        'Nosiphiwo (With a gift)',
        'Nosipho (Mother of a gift)',
        'Nothando (Mother of love)',
        'Nothemba (Hope)',
        'Nothembi (Faith, Hope)',
        'Noxolo (Mother of peace)',
        'Nozibusiso (Mother of blessings)',
        'Nozipho (Mother of gifts)',
        'Nozizwe (Mother of nations)',
        'Nqobile (She has conquered)',
        'Ntokozo (Joy, Happiness)',
        'Ntombenhle (Beautiful girl)',
        'Ntombi (Girl/Woman)',
        'Ntombifuthi (Another girl)',
        "Ntombikanina (Mother's girl)",
        "Ntombikayise (Father's girl)",
        'Ntombikhona (We have a girl)',
        'Ntombiyesizwe (Girl of the earth)',
        'Ntombizanele (Enough girls)',
        'Ntombizodwa (Only girls)',
        'Ntombizonke (All girls)',
        'Ntuthuko (Prosperity)',
        'Ogogo (Grandmother)',
        'Phakamile (Proud/High)',
        'Philile (Spirited)',
        'Philisile (She has given life)',
        'Phindile (Repetition)',
        'Phumelela (Prosperity)',
        'Phumlani (Rest)',
        'Phumzile (Rest)',
        'Qhikiza (Full-grown Girl)',
        'Qiniso (Thankful)',
        'Ramla (Prophetess)',
        'Sakhile (We Have)',
        'Samkelisiwe (Received)',
        'Samukelisiwe (We have been welcomed)',
        'Sandile (We have increased)',
        'Sibahle (We are beautiful)',
        'Sibhakabhaka (Sky)',
        'Sibonakaliso (Sign)',
        'Sibongile (We are thankful)',
        'Sibongiseni (Help us to say thank you)',
        'Sibusiso (Blessing)',
        'Sifiso (Wish)',
        'Sihle (Good)',
        'Simangele (Surprise)',
        'Simosihle (Beautiful feeling)',
        'Simphiwe (Given)',
        'Simphiwe (We have been given her)',
        'Sindisiwe (Saved)',
        'Sindiswa (Saved)',
        'Sinegugu (Our treasure)',
        'Sinehlanhla (We have luck)',
        'Sinenhlanhla (We have luck)',
        'Sinethemba (We have hope)',
        'Siphamandla (Give us strength)',
        'Siphephelo (Refuge)',
        'Siphesihle (Beautiful gift)',
        'Siphiwe (Gift)',
        'Sipho (Gift)',
        'Siphokazi (Gift)',
        'Sithembile (We trust)',
        'Sithokozile (We are happy)',
        'Siyanda (We are growing)',
        'Siza (Help)',
        'Sizakele (Helped)',
        'Sizamile (We have tried)',
        'Sizani (You all help)',
        'Sizwe (Nation)',
        "Slindile (We're waiting)",
        'Sonto (Sunday)',
        'Sphesihle (Precious gift)',
        'Sthembile (We have hope)',
        'Sthokozile (Thank you)',
        'Thabile (Happy)',
        'Thabisa (Bring joy)',
        'Thabisile (Has brought joy)',
        'Thalente (Talent or gift from God)',
        'Thandazile (Have prayed)',
        'Thandeka (Beloved)',
        'Thandekile (Loved one)',
        'Thandie (Beloved)',
        'Thandiswa (She who had to be loved)',
        'Thandiwe (Beloved)',
        'Thando (Love)',
        'Thathani (Take)',
        'Themba (Trust, Faith)',
        'Thembeka (Be reliable, be trustworthy)',
        'Thembekile (Trustworthy)',
        'Thembelihle (Good hope)',
        'Thembeni (What do you trust)',
        'Thembi (Trusting)',
        'Thembile (Hopeful, trusting)',
        'Thembisile (Promised)',
        'Thenjiwe (Trusted One)',
        'Thoko (Happiness)',
        'Thokozile (Thank you)',
        'Tholakele (She has been found)',
        'Thulani (Be quiet, Be comforted)',
        'Thulile (Is quiet)',
        'Thulisile (She who made things quiet)',
        'Thuthuka (To progress)',
        'Thuthukile (Has become a better person)',
        'Uju (Honey)',
        'Ukudala (Create)',
        'Ukudlala (Play)',
        'Ukuxhasa (Support)',
        'Ukuza (Come)',
        'Uluthando (She is love)',
        'Umakoti (Bride)',
        'Umgibeli (Passenger)',
        'Uminathi (He (God) is with us)',
        'Umklomelo (Prize)',
        'Umzuzu (Moment)',
        'Unathi (She is with us)',
        'Unina (Her mother)',
        'Usizo (Help)',
        'Vala (Close)',
        'Velile (Come to sight)',
        'Vemvane (Butterfly)',
        'Vumela (In harmony with)',
        'Vumile (She has agreed)',
        'Vuyiswa (Made Happy)',
        'Welile (We have crossed over)',
        'Winile (Winner)',
        'Xabanisile (Initiator of dispute)',
        'Xolani (Peace)',
        'Xolile (Made happy)',
        'Xolisile ((We are) sorry)',
        'Zama (Try)',
        'Zamafuthi (Try again)',
        'Zamani (Try again)',
        'Zamile (Tried)',
        'Zandile (They have multiplied)',
        'Zanele (Girls are enough)',
        'Zanele (We are satisfied)',
        'Zibu (Water Lily)',
        'Zibuyile (Already back)',
        'Zinhle (The girls are beautiful)',
        'Zintwezinhle (Beautiful things)',
        'Ziphozonke (All the gifts)',
        'Zishwezi (Gliding)',
        'Zodwa (Girls only)',
        'Zola (Quiet, Tranquil)',
        'Zondlile (Nourished herself)',
        'Zongile (Preserved)',
        'Zonke (All gifts)',
        'Zonkizizwe (All nations)',
        'Zula (Brilliant)',
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
