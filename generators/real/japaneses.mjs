export default function japaneses() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Akahito', 'Akeno', 'Aki', 'Akihiro', 'Akihisa', 'Akihito',
    'Akikazu', 'Akinari', 'Akinori', 'Akio', 'Akio', 'Akira', 'Amane',
    'Anzai', 'Arata', 'Arinori', 'Aritomo', 'Ashihei', 'Atasuke', 'Atshushi',
    'Atsumichi', 'Atsumori', 'Atsutane', 'Azumamaro', 'Baiko', 'Bairei',
    'Bakin', 'Basho', 'Benjiro', 'Benkei', 'Bokkai', 'Botan', 'Buncho',
    'Bunjiro', 'Bunrakuken', 'Bunzo', 'Bussho', 'Chikafusa', 'Chikao',
    'Chiko', 'Chojiro', 'Chomei', 'Chuichi', 'Dai', 'Daisetsu', 'Daisuke',
    'Danjuro', 'Danno', 'Dayu', 'Denbe', 'Doi', 'Dokuohtei', 'Doppo', 'Ebizo',
    'Eichi', 'Eichiro', 'Eien', 'Eiichi', 'Eiji', 'Eijiro', 'Eikichi',
    'Eisaku', 'Eisen', 'Eishi', 'Eisuke', 'Eitoku', 'Eizan', 'Eizo', 'Ekiken',
    'Ennosuke', 'Etsuya', 'Fujimaro', 'Fujio', 'Fukusaburu', 'Fumiaki',
    'Fumihiko', 'Fumihiro', 'Fumimaro', 'Fumio', 'Gaho', 'Gekko', 'Gempachi',
    'Gengyo', 'Genichi', 'Genjo', 'Gennai', 'Gennosuke', 'Genpaku', 'Gesshin',
    'Gidayu', 'Gihei', 'Giichi', 'Gonkuro', 'Gonshiro', 'Goro', 'Gyokusho',
    'Gyukudo', 'Hachemon', 'Hachigoro', 'Hachiro', 'Hajime', 'Hakuseki',
    'Hanshiro', 'Haranobu', 'Haru', 'Haru', 'Haruhiko', 'Haruhiro', 'Haruki',
    'Haruko', 'Harumi', 'Harunobu', 'Hayato', 'Heihachiro', 'Heiji',
    'Heikichi', 'Heizo', 'Hideaki', 'Hidehira', 'Hidekazu', 'Hideki',
    'Hidemichi', 'Hideo', 'Hidetada', 'Hidetora', 'Hidetoshi', 'Hidetsugu',
    'Hideyori', 'Hideyoshi', 'Higashikuni', 'Hikaru', 'Hikosaburo',
    'Hikozaemon', 'Hiro', 'Hiroaki', 'Hirobumi', 'Hirofumi', 'Hiroharu',
    'Hirohisa', 'Hiroji', 'Hirokazu', 'Hirokichi', 'Hirokumi', 'Hiroshi',
    'Hiroshige', 'Hirotada', 'Hirotaka', 'Hirotsugu', 'Hiroya', 'Hiroyasu',
    'Hiroyuki', 'Hisahsi', 'Hisaki', 'Hisamitsu', 'Hisanobu', 'Hisashi',
    'Hisato', 'Hisayuki', 'Hitomaro', 'Hitoshi', 'Hogai', 'Hoitsu', 'Hokichi',
    'Hokusai', 'Honzo', 'Horiuchi', 'Hoshi', 'Hoshiko', 'Hyobe', 'Hyosuke',
    'Hyotaru', 'Ichibei', 'Ichiro', 'Ichisake', 'Ichiyo', 'Ichizo', 'Iemitsu',
    'Iemochi', 'Ienobu', 'Iesada', 'Ieshige', 'Ietsuna', 'Ieyasu', 'Ieyoshi',
    'Ikemoto', 'Ikki', 'Ikku', 'Inejiro', 'Ippei', 'Isamu', 'Isao', 'Isei',
    'Isoruko', 'Isoshi', 'Iwane', 'Iwao', 'Izo', 'Izumo', 'Jakuchu', 'Jin',
    'Jinzaburo', 'Jiro', 'Jo', 'Joben', 'Joji', 'Jomei', 'Josuke', 'Jotaro',
    'Jou', 'Juichi', 'Jun', 'Junichi', 'Junichiro', 'Junji', 'Junnosuke',
    'Junzo', 'Juro', 'Jurobei', 'Juzaburo', 'Juzo', 'Kado', 'Kadonomaro',
    'Kaemon', 'Kafu', 'Kagehisa', 'Kagetoki', 'Kageyasu', 'Kaii', 'Kakuei',
    'Kakuzo', 'Kamatari', 'Kamlyn', 'Kan', 'Kanbe', 'Kane', 'Kaneie',
    'Kanezane', 'Kanjiro', 'Kanko', 'Kannon', 'Kano', 'Kansuke', 'Kantaro',
    'Kanzaburo', 'Kaori', 'Kaoru', 'Kata', 'Katai', 'Katsuhiko', 'Katsuhito',
    'Katsumi', 'Katsumoto', 'Katsunan', 'Katsunosuki', 'Katsuyoshi',
    'Katsuyuki', 'Katzumi', 'Kawanari', 'Kazu', 'Kazuhiko', 'Kazuhiro',
    'Kazuki', 'Kazuko', 'Kazuma', 'Kazunori', 'Kazuo', 'Kazushi', 'Kazushige',
    'Kazutoshi', 'Kazuyuki', 'Kei', 'Keiji', 'Keiki', 'Keishi', 'Keisuke',
    'Keita', 'Keitaro', 'Keizo', 'Ken', 'Kenichi', 'Kenji', 'Kenji', 'Kenji',
    'Kenjiro', 'Kenkichi', 'Kenko', 'Kensaku', 'Kenshin', 'Kentaro',
    'Kenzaburo', 'Kenzan', 'Kenzo', 'Kichibei', 'Kichisaburo', 'Kiemon',
    'Kiichi', 'Kijuro', 'Kikaku', 'Kikugoro', 'Kikunojo', 'Kimi', 'Kiminobu',
    'Kimitada', 'Kin', 'Kingo', 'Kinji', 'Kinmochi', 'Kinnojo', 'Kinnosuke',
    'Kinzo', 'Kioshi', 'Kisho', 'Kitahachi', 'Kiyoemon', 'Kiyohira',
    'Kiyohisa', 'Kiyomasu', 'Kiyomori', 'Kiyonaga', 'Kiyonobu', 'Kiyonori',
    'Kiyoshi', 'Kiyotaka', 'Koan', 'Kobo', 'Koetsu', 'Kohei', 'Koichi',
    'Koin', 'Koji', 'Kojiro', 'Kojuro', 'Kokan', 'Kokei', 'Koki', 'Kokushi',
    'Konosuke', 'Konoye', 'Konyo', 'Korechika', 'Korekiyo', 'Korenaga',
    'Korin', 'Koryusai', 'Kosaku', 'Kosami', 'Koshiro', 'Kosho', 'Kotaro',
    'Koto', 'Koyo', 'Kozue', 'Kuemon', 'Kuma', 'Kumanosuke', 'Kuniaki',
    'Kunihiko', 'Kunimatsu', 'Kunimichi', 'Kunio', 'Kunisada', 'Kunitaro',
    'Kuniyoshi', 'Kuniyuki', 'Kuri', 'Kyoden', 'Kyoichi', 'Kyoji', 'Kyoshi',
    'Kyuichi', 'Kyushichi', 'Kyuso', 'Kyuwa', 'Mabuchi', 'Magobei',
    'Magohachi', 'Makoto', 'Mamoru', 'Manabu', 'Manobu', 'Manzo', 'Mareo',
    'Maresuke', 'Marihito', 'Maris', 'Marise', 'Maro', 'Masaaki', 'Masafumi',
    'Masaharu', 'Masahide', 'Masahiko', 'Masahiro', 'Masakado', 'Masakazu',
    'Masaki', 'Masami', 'Masamichi', 'Masamune', 'Masanobu', 'Masanori',
    'Masao', 'Masaru', 'Masashi', 'Masashige', 'Masatake', 'Masato',
    'Masayoshi', 'Masayuki', 'Masazumi', 'Mashai', 'Mashashi', 'Mashiro',
    'Masu', 'Masuhiro', 'Masujiro', 'Masutaro', 'Matabei', 'Matashichi',
    'Matsu', 'Matsudaira', 'Matsuo', 'Matsusuke', 'Matsuta', 'Matsuyo',
    'Meiji', 'Michihiro', 'Michinaga', 'Michinori', 'Michio', 'Michizane',
    'Mieko', 'Miki', 'Mikio', 'Minoru', 'Misao', 'Mito', 'Mitsuharu',
    'Mitsuhide', 'Mitsukuni', 'Mitsunari', 'Mitsuo', 'Mitsuoki', 'Mitsuzuka',
    'Miyazaki', 'Miyoko', 'Mobumasu', 'Mochihito', 'Mokichi', 'Mokuami',
    'Momoru', 'Montaro', 'Monzaemon', 'Morie', 'Morihiro', 'Morimasa',
    'Morio', 'Moromao', 'Moronobu', 'Motoichi', 'Motoki', 'Motonobu',
    'Motoshige', 'Mototsune', 'Motoyasu', 'Motoyuki', 'Munemitsu', 'Munemori',
    'Munenori', 'Muneyaki', 'Munoto', 'Murai', 'Mushanokoji', 'Mutsohito',
    'Naganori', 'Naizen', 'Nakamaro', 'Nakazo', 'Namboku', 'Nampo', 'Naoaki',
    'Naofumi', 'Naohiro', 'Naoki', 'Naoko', 'Naomichi', 'Naonobu', 'Naosuke',
    'Naoya', 'Naozane', 'Narahiko', 'Nariaki', 'Nariakira', 'Narihari',
    'Narihira', 'Naruhiko', 'Natsu', 'Natsume', 'Natsuo', 'Nichiren', 'Nikki',
    'Nikko', 'Ninsei', 'Niou', 'Nissho', 'Noboru', 'Nobuatsu', 'Nobuharu',
    'Nobuhiko', 'Nobuhisa', 'Nobuhito', 'Nobukazu', 'Nobuo', 'Noburo',
    'Nobusuke', 'Nobuyoki', 'Nobuyori', 'Nobuyoshi', 'Nori', 'Noriaki',
    'Norihide', 'Norihisa', 'Norinaga', 'Norio', 'Norishige', 'Noritada',
    'Noritoshi', 'Noriyori', 'Noriyuki', 'Norogumi', 'Oda', 'Ogai', 'Okakura',
    'Okitsugu', 'Okura', 'Okyoito', 'Omezo', 'Oniji', 'Orinosuke', 'Osamu',
    'Otojiro', 'Rai', 'Raidon', 'Razan', 'Rei', 'Reijiro', 'Reizo', 'Renjiro',
    'Renzo', 'Rikiya', 'Rikyu', 'Ringo', 'Rinji', 'Rintaro', 'Rkuemon',
    'Robun', 'Roka', 'Roku', 'Rosanjin', 'Ryo', 'Ryobe', 'Ryoichi', 'Ryoko',
    'Ryoma', 'Ryosei', 'Ryozo', 'Ryu', 'Ryuichi', 'Ryunosuke', 'Ryushi',
    'Ryutaro', 'Ryuzaburo', 'Saburo', 'Sachi', 'Sachio', 'Sadaharu',
    'Sadahige', 'Sadakuno', 'Sadanobu', 'Sadao', 'Sadatake', 'Sadayoshi',
    'Saemon', 'Saikaku', 'Saionji', 'Sakutaro', 'Samba', 'Saneatsu',
    'Sanetomo', 'Sanjiro', 'Sanjuro', 'Sanraku', 'Sanzo', 'Satoru', 'Satoshi',
    'Sawao', 'Seibei', 'Seiesnsui', 'Seihachi', 'Seiho', 'Seiichi', 'Seiji',
    'Seika', 'Seiki', 'Seinosuke', 'Seiryo', 'Seishiro', 'Seishisai',
    'Seison', 'Seitaro', 'Sekien', 'Sen', 'Senichi', 'Senzo', 'Sessue',
    'Settan', 'Sharaku', 'Shiba', 'Shichirobei', 'Shigeaki', 'Shigekazu',
    'Shigeki', 'Shigeko', 'Shigemasa', 'Shigematsu', 'Shigemori', 'Shigenaga',
    'Shigenobu', 'Shigeru', 'Shigetaka', 'Shigetoki', 'Shigochiyo', 'Shihei',
    'Shihi', 'Shijo', 'Shiki', 'Shiko', 'Shimei', 'Shimpei', 'Shingen',
    'Shinichi', 'Shinji', 'Shinkichi', 'Shino', 'Shinobu', 'ShinriKiyaru',
    'Shinsaku', 'Shinsui', 'Shintaro', 'Shinzaburo', 'Shinzo', 'Shirai',
    'Shiro', 'Shirosama', 'Shizue', 'Sho', 'Shoda', 'Shogo', 'Shohei',
    'Shoichi', 'Shoin', 'Shoji', 'Shojiro', 'Shoko', 'Shoraku', 'Shosuke',
    'Shotaro', 'Shoyo', 'Shozaburo', 'Shozo', 'Shuichi', 'Shuji', 'Shukishi',
    'Shuko', 'Shumei', 'Shumkichi', 'Shun', 'Shun’en', 'Shuncho',
    'Shungyosai', 'Shunichi', 'Shunji', 'Shunko', 'Shunmyo', 'Shunsen',
    'Shunsho', 'Shunso', 'Shunsuke', 'Shusake', 'Shusaku', 'Shusui', 'Shuzo',
    'Soetsu', 'Sofu', 'Soh', 'Soichiro', 'Sojuro', 'Sorai', 'Sosa', 'Soseki',
    'Soshitsu', 'Soshu', 'Sosuke', 'Sotan', 'Sotaro', 'Sotatsu', 'Sozen',
    'Sozui', 'Ssekien', 'Subaru', 'Suezo', 'Sugimoto', 'Sugita', 'Sukejuro',
    'Sukenobu', 'Suketsune', 'Sukeyasu', 'Sumio', 'Sumiteru', 'Sumitomo',
    'Susumu', 'Suzu', 'Suzu', 'Tabito', 'Tadahisa', 'Tadakuni', 'Tadamasa',
    'Tadamichi', 'Tadao', 'Tadashi', 'Tadasu', 'Tadasuke', 'Tadataka',
    'Tadayoshi', 'Tadayuki', 'Tadiyuki', 'Taheiji', 'Taikan', 'Taisho',
    'Taisuke', 'Taji', 'Takaaki', 'Takafumi', 'Takahashi', 'Takahiro',
    'Takakazu', 'Takamasa', 'Takamori', 'Takamuku', 'Takanibu', 'Takanobu',
    'Takanori', 'Takao', 'Takashi', 'Takauji', 'Takayuki', 'Takechi',
    'Takehide', 'Takeichi', 'Takeji', 'Takejiro', 'Takenao', 'Takeo',
    'Takeru', 'Takeshi', 'Takesi', 'Taki', 'Takiji', 'Takuboku', 'Takuji',
    'Takuma', 'Takuro', 'Takuya', 'Tamasaburo', 'Tamasine', 'Tameyoshi',
    'Tamotsu', 'Tamuramaro', 'Tanak', 'Tango', 'Tanjiro', 'Tanosuke', 'Tanyu',
    'Tanzan', 'Taro', 'Taro', 'Taroemon', 'Tarozaemon', 'Tashiaki', 'Tashiro',
    'Tasuku', 'Tatsui', 'Tatsukichi', 'Tatsuya', 'Tatsuzo', 'Taysuke',
    'Teiji', 'Teijo', 'Teika', 'Teiljo', 'Teinosuke', 'Tekkan', 'Tenshin',
    'Terao', 'Teriuihi', 'Terumoto', 'Teruo', 'Tessai', 'Tetsu', 'Tetsuhiko',
    'Tetsui', 'Tetsunori', 'Tetsuo', 'Tetsuya', 'Tetsuyuki', 'Tetsuzan',
    'Thoki', 'Tobei', 'Togai', 'Tohaku', 'Toichi', 'Toin', 'Toju', 'Tokaji',
    'Toki', 'Tokichiro', 'Tokimasa', 'Tokimune', 'Tokugawa', 'Tokuhei',
    'Tokuma', 'Tokutomi', 'Tomeo', 'Tomiichi', 'Tomiji', 'Tomoaki',
    'Tomohiko', 'Tomokazu', 'Tomomi', 'Tomoyuki', 'Ton', 'Torajiro', 'Torazo',
    'Torio', 'Toru', 'Toshi', 'Toshiaki', 'Toshiharu', 'Toshikasu',
    'Toshikazu', 'Toshiki', 'Toshikuni', 'Toshimichi', 'Toshinobu', 'Toshiro',
    'Toshitsugu', 'Toshiyuki', 'Toson', 'Totoya', 'Toyoaki', 'Toyoharu',
    'Toyokazu', 'Toyokuni', 'Toyonobu', 'Toyoshige', 'Toyotomi', 'Toyozo',
    'Tsugahara', 'Tsugiharu', 'Tsuginori', 'Tsugumichi', 'Tsukasa',
    'Tsumemasa', 'Tsunayoshi', 'Tsuneari', 'Tsuneo', 'Tsunesaburo', 'Tsuneyo',
    'Tsuramatsu', 'Tsurayaki', 'Tsuruki', 'Tsutomu', 'Tsuyoshi', 'Udo',
    'Ukon', 'Ukyo', 'Unkei', 'Utaemon', 'Utamara', 'Utamuro', 'Utemaro',
    'Waotaka', 'Washi', 'Washichi', 'Yachi', 'Yaichiro', 'Yajirobei',
    'Yakamochi', 'Yakumo', 'Yamato', 'Yasotaro', 'Yasuhide', 'Yasuhiko',
    'Yasuhiro', 'Yasujiro', 'Yasukazu', 'Yasunari', 'Yasunobu', 'Yasuo',
    'Yasuoka', 'Yasushi', 'Yasutake', 'Yasutoki', 'Yasuyuki', 'Yataro',
    'Yatsuhiro', 'Yodo', 'Yohachi', 'Yoichi', 'Yoichibei', 'Yoriie',
    'Yorikane', 'Yoringa', 'Yoritoki', 'Yoritomo', 'Yoriyoshi', 'Yoriyuki',
    'Yosai', 'Yoshi', 'Yoshiaga', 'Yoshiaki', 'Yoshida', 'Yoshifumi',
    'Yoshifusa', 'Yoshihide', 'Yoshihiro', 'Yoshihisa', 'Yoshihito', 'Yoshii',
    'Yoshiiku', 'Yoshikazu', 'Yoshiki', 'Yoshimasa', 'Yoshimatsu', 'Yoshimi',
    'Yoshimitsu', 'Yoshimochi', 'Yoshimune', 'Yoshinaka', 'Yoshino',
    'Yoshinobu', 'Yoshinori', 'Yoshio', 'Yoshisada', 'Yoshitaka', 'Yoshitake',
    'Yoshiteru', 'Yoshitoki', 'Yoshitomo', 'Yoshitora', 'Yoshitoshi',
    'Yoshitsune', 'Yoshiyuki', 'Yoson', 'Yosuke', 'Yozo', 'Yugoro', 'Yuichi',
    'Yuifum', 'Yuji', 'Yujiro', 'Yuki', 'Yukichi', 'Yukinaga', 'Yukio',
    'Yuko', 'Yunosuke', 'Yushiro', 'Yusuke', 'Yutaka', 'Zenko', 'Zeshin'];
  const nm2 = ['Abi', 'Ado', 'Aeko', 'Aemi', 'Agasa', 'Ai', 'Aiga', 'Aiko',
    'Aira', 'Aisa', 'Aishun', 'Akae', 'Akako', 'Akane', 'Akasuki', 'Akemi',
    'Akeno', 'Aki', 'Akiko', 'Akina', 'Akio', 'Akira', 'Akirako', 'Akko',
    'Ako', 'Akoto', 'Akuro', 'Amarante', 'Amari', 'Amaya', 'Ami', 'Anbi',
    'Anda', 'Ane', 'Aneka', 'Aneko', 'Anii', 'Anju', 'Ano', 'Anri', 'Ao',
    'Aoba', 'Aoi', 'Aomi', 'Aoki', 'Are', 'Arei', 'Ari', 'Arisa', 'Arisu',
    'Asa', 'Asahi', 'Asaji', 'Asako', 'Asami', 'Asuka', 'Atsuko', 'Au', 'Aya',
    'Ayaka', 'Ayako', 'Ayame', 'Ayano', 'Ayao', 'Ayase', 'Aye', 'Ayuka',
    'Ayuko', 'Ayumi', 'Ayuri', 'Azami', 'Azumi', 'Azusa', 'Bachiko', 'Beni',
    'Benten', 'Chiaki', 'Chie', 'Chieko', 'Chifumi', 'Chifuyu', 'Chigusa',
    'Chiharu', 'Chihiro', 'Chiho', 'Chihoko', 'Chihomi', 'Chihori', 'Chika',
    'Chikage', 'Chikako', 'Chikaze', 'Chiko', 'Chikuma', 'Chima', 'Chimaki',
    'Chimako', 'Chimari', 'China', 'Chinami', 'Chinatsu', 'Chino', 'Chio',
    'Chisa', 'Chisato', 'Chise', 'Chisuzu', 'Chitako', 'Chitose', 'Chiyako',
    'Chiyeko', 'Chiyo', 'Chiyu', 'Chiyuki', 'Chiyumi', 'Chiyuri', 'Chizu',
    'Chizuru', 'Cho', 'Dai', 'Den', 'Dori', 'Eari', 'Eba', 'Echiko', 'Egao',
    'Eho', 'Ei', 'Eiko', 'Eimu', 'Eire', 'Eitsu', 'Eka', 'Ema', 'Emao', 'Eme',
    'Emi', 'Emiho', 'Emika', 'Emiko', 'Emina', 'Emio', 'Emiri', 'Emiya',
    'Emu', 'En', 'Ena', 'Enko', 'Enri', 'Ere', 'Eren', 'Erena', 'Eri',
    'Erika', 'Eriko', 'Erisa', 'Erisu', 'Erize', 'Eru', 'Esumi', 'Etsu',
    'Etsuko', 'Euiko', 'Fuji', 'Fujiko', 'Fukami', 'Fuki', 'Fukuko', 'Fumi',
    'Fumie', 'Fumika', 'Fumiki', 'Fumiko', 'Fumiya', 'Fusa', 'Fusae',
    'Futaba', 'Fuuko', 'Fuyu', 'Fuyuko', 'Fuyume', 'Gemmei', 'Gen', 'Gin',
    'Gina', 'Ginko', 'Hagino', 'Hainako', 'Hairi', 'Hako', 'Hama', 'Hami',
    'Han', 'Hana', 'Hanae', 'Hanako', 'Haniko', 'Haru', 'Harui', 'Haruka',
    'Harukichi', 'Haruko', 'Harumi', 'Hasumi', 'Hatomi', 'Hatsu', 'Hatsue',
    'Hatsuka', 'Hatsumi', 'Hatsune', 'Hatsuyo', 'Haya', 'Hazuki', 'Hibari',
    'Hide', 'Hideko', 'Hikari', 'Hikaru', 'Himeka', 'Himeko', 'Hina',
    'Hinako', 'Hirari', 'Hiro', 'Hiroe', 'Hiroko', 'Hiromi', 'Hiroshi',
    'Hisa', 'Hisae', 'Hisako', 'Hisano', 'Hitomi', 'Hitomo', 'Hitoshi',
    'Hizuru', 'Homi', 'Homugi', 'Hona', 'Honami', 'Honoka', 'Honomi', 'Hoshi',
    'Hoshie', 'Hoshiko', 'Hoshiyo', 'Hosuzu', 'Hotaru', 'Hozumi', 'Iako',
    'Ibu', 'Ichi', 'Ichie', 'Ichiha', 'Ichiho', 'Ichiko', 'Ichino', 'Ie',
    'Iena', 'Iho', 'Ihono', 'Iki', 'Ikoi', 'Iku', 'Ikue', 'Ikuko', 'Ikumu',
    'Ima', 'Imari', 'Ina', 'Inaho', 'Inari', 'Ine', 'Ino', 'Inoue', 'Io',
    'Ioko', 'Iona', 'Iori', 'Irisa', 'Isa', 'Isaki', 'Isako', 'Isami',
    'Isamu', 'Ise', 'Ishi', 'Isoko', 'Isono', 'Isuzu', 'Ito', 'Itsuko', 'Iwa',
    'Iyo', 'Iyona', 'Izumi', 'Jin', 'Jori', 'Joruri', 'Jun', 'June', 'Junko',
    'Juri', 'Juria', 'Kadiri', 'Kae', 'Kaede', 'Kagami', 'Kaho', 'Kahori',
    'Kahoru', 'Kai', 'Kaida', 'Kaiya', 'Kaiyo', 'Kameko', 'Kako', 'Kama',
    'Kame', 'Kami', 'Kamie', 'Kaminari', 'Kamlyn', 'Kana', 'Kane', 'Kaneko',
    'Kaneru', 'Kanna', 'Kanon', 'Kao', 'Kaori', 'Kaoru', 'Karen', 'Karin',
    'Kasumi', 'Kata', 'Katsu', 'Katsue', 'Katsuko', 'Katsumi', 'Kawa', 'Kaya',
    'Kayami', 'Kayo', 'Kayoko', 'Kayu', 'Kazashi', 'Kazu', 'Kazue', 'Kazuko',
    'Kazumi', 'Kei', 'Keiko', 'Kichi', 'Kiho', 'Kii', 'Kiko', 'Kiku', 'Kikyo',
    'Kimi', 'Kimie', 'Kimiko', 'Kin', 'Kina', 'Kino', 'Kinu', 'Kinuko',
    'Kinuye', 'Kinuyo', 'Kioko', 'Kioshi', 'Kirari', 'Kiri', 'Kisa', 'Kishi',
    'Kit', 'Kita', 'Kiwa', 'Kiyo', 'Kiyoko', 'Kiyomi', 'Kiyoshi', 'Kiyumi',
    'Ko', 'Kochiyo', 'Kofuyu', 'Kohana', 'Koharu', 'Koi', 'Koiso', 'Koken',
    'Koko', 'Koma', 'Komachi', 'Kome', 'Komi', 'Konami', 'Konatsu', 'Koneko',
    'Konomi', 'Koto', 'Kotone', 'Kouko', 'Koume', 'Kozakura', 'Kozue',
    'Kukiko', 'Kuma', 'Kumi', 'Kumiko', 'Kumiyo', 'Kuni', 'Kunie', 'Kuniko',
    'Kura', 'Kurea', 'Kuri', 'Kurumi', 'Kuwa', 'Kyoko', 'Kyouka', 'Kyouko',
    'Kyoumi', 'Leiko', 'Machi', 'Machiko', 'Madoka', 'Mae', 'Maeko', 'Maemi',
    'Mai', 'Maiko', 'Maiya', 'Maki', 'Makiko', 'Mako', 'Mami', 'Mamiko',
    'Man', 'Mana', 'Manami', 'Mari', 'Mariko', 'Marise', 'Maru', 'Masa',
    'Masae', 'Masago', 'Masako', 'Masu', 'Masumi', 'Matsu', 'Matsuko', 'Maya',
    'Mayako', 'Mayo', 'Mayoko', 'Mayuko', 'Mayumi', 'Megu', 'Megumi', 'Michi',
    'Michie', 'Michiko', 'Michiru', 'Midori', 'Mie', 'Mieko', 'Miho',
    'Mihoko', 'Miiko', 'Mika', 'Mikazuki', 'Miki', 'Mikka', 'Miliko', 'Mina',
    'Minako', 'Mine', 'Mineko', 'Mino', 'Mio', 'Misa', 'Misaki', 'Misako',
    'Misao', 'Misato', 'Mitsu', 'Misoka', 'Mitsu', 'Mitsuko', 'Mitsuyo',
    'Miu', 'Miwa', 'Miwako', 'Miya', 'Miyako', 'Miyo', 'Miyoko', 'Miyoshi',
    'Miyu', 'Miyuki', 'Mizuki', 'Mizuko', 'Moanna', 'Moe', 'Momoko', 'Mon',
    'Mori', 'Morie', 'Moto', 'Muika', 'Mura', 'Murasaki', 'Mutsuko',
    'Mutsumi', 'Nadeshiko', 'Nagisa', 'Naho', 'Nahoko', 'Nami', 'Namie',
    'Namika', 'Namiko', 'Namiyo', 'Nana', 'Nanako', 'Nanami', 'Nanao',
    'Nanase', 'Nao', 'Naoko', 'Naomi', 'Naora', 'Nara', 'Nari', 'Nariko',
    'Narumi', 'Natsu', 'Natsuko', 'Natsumi', 'Nayoko', 'Nene', 'Nikki',
    'Nishi', 'Nomi', 'Nori', 'Norie', 'Noriko', 'Nozomi', 'Nui', 'Nyoko',
    'Ochiyo', 'Ogi', 'Oharu', 'Oki', 'Okichi', 'Okiku', 'Okimi', 'Ome',
    'Omitsu', 'Ori', 'Oriana', 'Orika', 'Orime', 'Orimi', 'Orino', 'Osami',
    'Osen', 'Otoe', 'Otome', 'Otsu', 'Otsune', 'Poemu', 'Rai', 'Raicho',
    'Raira', 'Raku', 'Ran', 'Rea', 'Rebun', 'Rei', 'Reichiru', 'Reiko',
    'Reina', 'Reira', 'Reisa', 'Remi', 'Remon', 'Ren', 'Rena', 'Rie', 'Rieko',
    'Riho', 'Rii', 'Rika', 'Rikako', 'Riko', 'Riku', 'Rin', 'Rina', 'Rinako',
    'Ringo', 'Rini', 'Rino', 'Rio', 'Rira', 'Ririko', 'Risa', 'Risako',
    'Rise', 'Risu', 'Ritsuko', 'Roku', 'Rokuko', 'Romi', 'Rui', 'Ruka',
    'Ruma', 'Rumi', 'Rumiko', 'Runa', 'Ruri', 'Ruriko', 'Ruru', 'Ryo',
    'Ryoko', 'Ryou', 'Ryu', 'Sachi', 'Sachiko', 'Sada', 'Sadako', 'Sae',
    'Saeko', 'Sai', 'Saika', 'Saito', 'Sakae', 'Sakamae', 'Saki', 'Sakiko',
    'Sako', 'Sakue', 'Sakuko', 'Sakura', 'Sakurako', 'Sakuro', 'Sama',
    'Sanako', 'Saori', 'Sata', 'Sato', 'Satoko', 'Satomi', 'Satsu', 'Satsuki',
    'Satu', 'Sawa', 'Sawako', 'Saya', 'Sayo', 'Sayoko', 'Sayomi', 'Sayuri',
    'Sei', 'Seiko', 'Seka', 'Seki', 'Sen', 'Setsu', 'Setsuko', 'Shige',
    'Shiho', 'Shihobu', 'Shika', 'Shina', 'Shino', 'Shinobu', 'Shioko',
    'Shiori', 'Shirushi', 'Shizu', 'Shizue', 'Shizuka', 'Shoken', 'Shoko',
    'Shungiku', 'Sugi', 'Sui', 'Sukey', 'Suki', 'Suko', 'Sumi', 'Sumiko',
    'Sute', 'Suzu', 'Suzue', 'Suzuki', 'Suzuko', 'Suzume', 'Tadako', 'Tae',
    'Tai', 'Taira', 'Taji', 'Taka', 'Takako', 'Takara', 'Take', 'Taki',
    'Tama', 'Tamae', 'Tamafune', 'Tamaki', 'Tamami', 'Tame', 'Tami', 'Tamika',
    'Tamiko', 'Tamiyo', 'Tanak', 'Tanaka', 'Tane', 'Tani', 'Taniko', 'Tansho',
    'Tara', 'Taree', 'Taru', 'Tatsu', 'Tatsumi', 'Taura', 'Taya', 'Tazu',
    'Teruyo', 'Tetsu', 'Toki', 'Tokie', 'Tokiko', 'Tokiwa', 'Tokiyo', 'Toku',
    'Tomi', 'Tomiju', 'Tomiko', 'Tomo', 'Tomoe', 'Tomoko', 'Tomomi', 'Tooka',
    'Tora', 'Tori', 'Toshi', 'Toshie', 'Toshiko', 'Toya', 'Toyoko', 'Tsugi',
    'Tsuki', 'Tsukiko', 'Tsukiyama', 'Tsuna', 'Tsuru', 'Tsuya', 'Ui', 'Uka',
    'Uki', 'Ume', 'Umeka', 'Umeki', 'Umeko', 'Umi', 'Una', 'Uno', 'Urako',
    'Urano', 'Urara', 'Urena', 'Urumi', 'Usagi', 'Usami', 'Uta', 'Utako',
    'Utsuwa', 'Utzuki', 'Uzuki', 'Waka', 'Wakaba', 'Wakako', 'Wakana',
    'Wakano', 'Wakayo', 'Waki', 'Wakiko', 'Wako', 'Wakumi', 'Wakuri', 'Wami',
    'Warabi', 'Wattan', 'Wayoko', 'Wazuka', 'Yachi', 'Yae', 'Yaeko', 'Yama',
    'Yasu', 'Yasuko', 'Yasumu', 'Yatsumi', 'Yawara', 'Yayoi', 'Yei', 'Yo',
    'Yodo', 'Yoi', 'Yoka', 'Yokkako', 'Yoko', 'Yone', 'Yori', 'Yoriko',
    'Yoshe', 'Yoshi', 'Yoshike', 'Yoshiko', 'Yoshino', 'You', 'Yu', 'Yufu',
    'Yui', 'Yuka', 'Yukako', 'Yukari', 'Yuki', 'Yukiji', 'Yukika', 'Yukiko',
    'Yukiyo', 'Yuko', 'Yuma', 'Yumako', 'Yume', 'Yumeji', 'Yumi', 'Yumia',
    'Yumiko', 'Yumisa', 'Yuna', 'Yuno', 'Yura', 'Yuri', 'Yuria', 'Yuriko',
    'Yurisa', 'Yuro', 'Yusa', 'Yusuke', 'Yutori', 'Yutsuko', 'Yuuko', 'Yuyu'];
  const nm3 = ['Abe', 'Abo', 'Adachi', 'Agano', 'Aguni', 'Aihara', 'Aikawa',
    'Akagawa', 'Akagi', 'Akahoshi', 'Akamatsu', 'Akamine', 'Akanishi',
    'Akazawa', 'Aki', 'Akiba', 'Akibara', 'Akiya', 'Akiyama', 'Amachi',
    'Amagawa', 'Amai', 'Amano', 'Amari', 'Amaya', 'Amemori', 'Ametsuchi',
    'Amisaki', 'Ando', 'Anno', 'Anzai', 'Aoi', 'Aoki', 'Aomine', 'Aonuma',
    'Aoyama', 'Aozora', 'Ara', 'Arai', 'Arakaki', 'Arakawa', 'Araki',
    'Arashi', 'Arashiro', 'Arata', 'Araya', 'Arima', 'Arita', 'Asa', 'Asai',
    'Asaka', 'Asano', 'Asari', 'Asato', 'Ashikaga', 'Ayuzawa', 'Azuma',
    'Baba', 'Baisho', 'Ban', 'Bando', 'Banno', 'Chiba', 'Chigusa',
    'Chijimatsu', 'Chikae', 'Chikanari', 'Chinen', 'Chino', 'Chiura',
    'Chiyotanda', 'Chiziwa', 'Coda', 'Daigo', 'Date', 'Deguchi', 'Demura',
    'Dewa', 'Doi', 'Dokite', 'Dokuro', 'Domen', 'Domoto', 'Ebina', 'Ebinuma',
    'Ebisawa', 'Edamitsu', 'Edamura', 'Edano', 'Egawa', 'Eguchi', 'Egusa',
    'Ehara', 'Ejiri', 'Enatsu', 'Endo', 'Enokida', 'Enomoto', 'Esumi', 'Eto',
    'Fuchizaki', 'Fujii', 'Fujikawa', 'Fujima', 'Fujimori', 'Fujimoto',
    'Fujimura', 'Fujino', 'Fujioka', 'Fujita', 'Fujiwara', 'Fujiyama',
    'Fukasawa', 'Fukase', 'Fukaya', 'Fukuda', 'Fukuhara', 'Fukui',
    'Fukuizumi', 'Fukuma', 'Fukumoto', 'Fukunaga', 'Fukushima', 'Fukutsuchi',
    'Fukuyama', 'Fukuyo', 'Funai', 'Furukawa', 'Furusawa', 'Furuse', 'Furuta',
    'Furutani', 'Furuya', 'Fuse', 'Futaki', 'Gamo', 'Gima', 'Go', 'Goda',
    'Gomi', 'Goto', 'Goya', 'Gushiken', 'Hachimitsu', 'Hada', 'Haga',
    'Hagiwara', 'Hakuryū', 'Hamada', 'Hamadate', 'Hamakawa', 'Hamamoto',
    'Hamano', 'Hamasaki', 'Hanamura', 'Hanazawa', 'Handa', 'Hano', 'Hara',
    'Harada', 'Harigae', 'Haruno', 'Haruta', 'Haruyama', 'Hase', 'Hasegawa',
    'Hashi', 'Hashimoto', 'Hashira', 'Hata', 'Hatake', 'Hatanaka', 'Hatano',
    'Hatsu', 'Hattori', 'Hayabusa', 'Hayakawa', 'Hayashi', 'Hayashida',
    'Hayato', 'Henmi', 'Higa', 'Higashi', 'Higuchi', 'Himi', 'Himura', 'Hino',
    'Hirabayashi', 'Hirai', 'Hirano', 'Hiraoka', 'Hirashima', 'Hirata',
    'Hirayama', 'Hiroi', 'Hironaka', 'Hirose', 'Hiroshima', 'Hirota',
    'Hiroto', 'Hiruma', 'Hisakawa', 'Hitarashi', 'Hoashi', 'Hoga', 'Hokama',
    'Homura', 'Honda', 'Hora', 'Hori', 'Horie', 'Horikiri', 'Horiuchi',
    'Hoshino', 'Hosoo', 'Ichida', 'Ichihara', 'Ichijou', 'Ichikawa',
    'Ichinomiya', 'Ichioka', 'Ida', 'Ide', 'Ienaga', 'Igarashi', 'Ige', 'Iha',
    'Iida', 'Ikari', 'Ike', 'Ikeda', 'Ikehara', 'Ikehata', 'Imada', 'Imaeda',
    'Imai', 'Imamura', 'Imari', 'Inaba', 'Inai', 'Inazuma', 'Inoshishi',
    'Inouye', 'Inugami', 'Iori', 'Isa', 'Isayama', 'Iseri', 'Ishibashi',
    'Ishida', 'Ishido', 'Ishihara', 'Ishii', 'Ishikawa', 'Ishikura',
    'Ishimoto', 'Ishiwari', 'Ishiwata', 'Ishiyama', 'Isobe', 'Isozaki', 'Ito',
    'Itoh', 'Iwai', 'Iwakiri', 'Iwamoto', 'Iwasaki', 'Iwata', 'Iwayama',
    'Iwayanagi', 'Izuhara', 'Izumi', 'Izumo', 'Jin', 'Jinnouchi', 'Jissoji',
    'Jo', 'Juba', 'Junko', 'Kôzuke', 'Kaba', 'Kabuto', 'Kaga', 'Kagawa',
    'Kagiyama', 'Kagurazaka', 'Kai', 'Kaiba', 'Kajiwara', 'Kamata', 'Kamei',
    'Kamenashi', 'Kaminaga', 'Kamino', 'Kamiya', 'Kamoto', 'Kanagi', 'Kanai',
    'Kanbayashi', 'Kanda', 'Kaneda', 'Kaneko', 'Kanemaru', 'Kanemoto',
    'Kaneshiro', 'Kanno', 'Kano', 'Karasu', 'Kasai', 'Kase', 'Kashiwa',
    'Kashiwagi', 'Katabuchi', 'Katagiri', 'Kataoka', 'Katayama', 'Kato',
    'Katsura', 'Katsuragi', 'Kawabata', 'Kawada', 'Kawaguchi', 'Kawahara',
    'Kawai', 'Kawakami', 'Kawamoto', 'Kawamura', 'Kawano', 'Kawasaki',
    'Kawashima', 'Kawata', 'Kaya', 'Kayumi', 'Kazato', 'Kazehaya', 'Kazetani',
    'Keikain', 'Kibe', 'Kida', 'Kido', 'Kikuchi', 'Kikyo', 'Kimoto', 'Kimura',
    'Kinjo', 'Kinoshita', 'Kirigaya', 'Kirishima', 'Kishi', 'Kishimoto',
    'Kita', 'Kitabayashi', 'Kitagawa', 'Kitamura', 'Kitani', 'Kiya', 'Kiyabu',
    'Kiyota', 'Kobashigawa', 'Kobayashi', 'Kobe', 'Koda', 'Kodama', 'Koga',
    'Kogane', 'Koide', 'Koike', 'Koizumi', 'Kojima', 'Koki', 'Komatsu',
    'Komori', 'Komuro', 'Kon', 'Konda', 'Kondo', 'Konishi', 'Konno', 'Kono',
    'Konuma', 'Konya', 'Koshikawa', 'Kotake', 'Kotobuki', 'Kouumoto',
    'Koyama', 'Koyanagi', 'Koyasu', 'Kozato', 'Kozue', 'Kozutsami', 'Kuba',
    'Kubo', 'Kubota', 'Kudo', 'Kudou', 'Kuga', 'Kugimiya', 'Kugo', 'Kumagai',
    'Kunieda', 'Kuno', 'Kuramoto', 'Kurata', 'Kure', 'Kurihara', 'Kurisu',
    'Kuroba', 'Kuroda', 'Kurokawa', 'Kuroki', 'Kuronuma', 'Kurosawa', 'Kuse',
    'Kusumoto', 'Kuwahara', 'Kyoya', 'Machi', 'Machida', 'Mae', 'Maebara',
    'Maeda', 'Maekawa', 'Maeno', 'Maita', 'Maki', 'Makino', 'Manaka',
    'Maniwa', 'Mano', 'Maruyama', 'Masaki', 'Mase', 'Mashimo', 'Masuda',
    'Masuyama', 'Matsubara', 'Matsuda', 'Matsui', 'Matsumoto', 'Matsumura',
    'Matsunaga', 'Matsuno', 'Matsuo', 'Matsuoka', 'Matsushima', 'Matsushita',
    'Matsutani', 'Matsutoya', 'Matsuura', 'Matsuyama', 'Matsuzaki',
    'Mawatari', 'Mayeda', 'Michizoe', 'Mifune', 'Mihara', 'Mikami', 'Miki',
    'Minami', 'Minamoto', 'Mino', 'Misaki', 'Mita', 'Mitsue', 'Mitsugi',
    'Mitsugu', 'Mitsui', 'Miura', 'Miya', 'Miyabe', 'Miyagawa', 'Miyaguchi',
    'Miyahara', 'Miyahira', 'Miyake', 'Miyamoto', 'Miyano', 'Miyara',
    'Miyasaki', 'Miyasato', 'Miyashiro', 'Miyashita', 'Miyata', 'Miyazaki',
    'Miyazato', 'Miyazawa', 'Miyoshi', 'Mizuno', 'Mizusawa', 'Mizushima',
    'Mizutani', 'Mochizuki', 'Momoi', 'Mori', 'Moriai', 'Morihei', 'Morikawa',
    'Morimoto', 'Morine', 'Morino', 'Morioka', 'Morishige', 'Morishita',
    'Morita', 'Moriya', 'Moriyama', 'Moteki', 'Moto', 'Motome', 'Motozawa',
    'Mukai', 'Mura', 'Murai', 'Murakami', 'Muramoto', 'Muranaka', 'Murano',
    'Muraoka', 'Murata', 'Muratagi', 'Murayama', 'Muto', 'Naegi', 'Nagai',
    'Nagamatsu', 'Nagamine', 'Nagano', 'Nagao', 'Nagaoka', 'Nagasawa',
    'Nagase', 'Nagashima', 'Nagata', 'Nagatsuka', 'Naito', 'Nakada',
    'Nakagawa', 'Nakagome', 'Nakahara', 'Nakai', 'Nakajima', 'Nakama',
    'Nakamoto', 'Nakamura', 'Nakanishi', 'Nakano', 'Nakao', 'Nakashima',
    'Nakasone', 'Nakata', 'Nakatani', 'Nakatomi', 'Nakauchi', 'Nakayama',
    'Nakazawa', 'Namba', 'Nara', 'Narisawa', 'Narita', 'Naru', 'Nashio',
    'Natsukawa', 'Naya', 'Nii', 'Niikura', 'Nishi', 'Nishida', 'Nishihara',
    'Nishikawa', 'Nishikiri', 'Nishimoto', 'Nishimura', 'Nishioka',
    'Nishiyama', 'Nishizaka', 'Nitta', 'Niwa', 'No', 'Nobira', 'Nobusawa',
    'Noda', 'Noguchi', 'Nomi', 'Nomura', 'Nonaka', 'Noya', 'Noyamano', 'Nura',
    'Oba', 'Obara', 'Obi', 'Oda', 'Oe', 'Ogami', 'Ogasawara', 'Ogata',
    'Ogawa', 'Ogino', 'Ogura', 'Oh', 'Ohara', 'Ohashi', 'Ohno', 'Ohori',
    'Ohta', 'Oishi', 'Oka', 'Okabe', 'Okada', 'Okamoto', 'Okamura', 'Okane',
    'Okano', 'Okawa', 'Okazaki', 'Oki', 'Okimoto', 'Okino', 'Okita', 'Okubo',
    'Okuda', 'Okuma', 'Okumura', 'Okura', 'Okuyama', 'Omori', 'Omura',
    'Onaga', 'Onishi', 'Ono', 'Onoue', 'Oogami', 'Orio', 'Orito', 'Osada',
    'Osaki', 'Ose', 'Oshima', 'Oshiro', 'Oshita', 'Ota', 'Otake', 'Otani',
    'Otonari', 'Otsuka', 'Ouchi', 'Ouji', 'Oyakawa', 'Oyama', 'Oye', 'Ozaki',
    'Ozawa', 'Rai', 'Rakuyama', 'Rikimaru', 'Ritsushima', 'Rokuda', 'Ryūzaki',
    'Sada', 'Sadow', 'Saeki', 'Saiki', 'Saionji', 'Saito', 'Sakaguchi',
    'Sakai', 'Sakakibara', 'Sakamoto', 'Sakane', 'Sakata', 'Sakimoto',
    'Sakiyama', 'Sako', 'Sakuma', 'Sakurai', 'Sakurano', 'Sakurazaki', 'Sama',
    'Samejima', 'Samon', 'Sanda', 'Sando', 'Sano', 'Sasagawa', 'Sasaki',
    'Sasori', 'Sato', 'Satow', 'Sawa', 'Sawachika', 'Sawada', 'Sawano',
    'Sawaya', 'Saza', 'Sazama', 'Seki', 'Sekiguchi', 'Sekino', 'Seno',
    'Senri', 'Seo', 'Sera', 'Serizawa', 'Seta', 'Seto', 'Seyama', 'Shiba',
    'Shibata', 'Shibuya', 'Shima', 'Shimabukuro', 'Shimada', 'Shimamoto',
    'Shimamura', 'Shime', 'Shimizu', 'Shimoda', 'Shimomura', 'Shinkai',
    'Shinobu', 'Shinohara', 'Shinsato', 'Shintani', 'Shirai', 'Shiraishi',
    'Shiraki', 'Shiro', 'Shiroma', 'Shishido', 'Shoda', 'Shoji', 'Soda',
    'Soga', 'Soma', 'Sone', 'Sonoda', 'Suda', 'Sueno', 'Sueoka', 'Suga',
    'Sugai', 'Sugano', 'Sugawara', 'Sugihara', 'Sugimoto', 'Sugita',
    'Sugiyama', 'Suguro', 'Suko', 'Sumadera', 'Sumida', 'Sumisu', 'Sunada',
    'Suou', 'Suto', 'Suzukaze', 'Suzuki', 'Tabata', 'Tachibana', 'Tada',
    'Tagawa', 'Taguchi', 'Tahara', 'Taira', 'Tajima', 'Takagaki', 'Takagi',
    'Takahara', 'Takahashi', 'Takahata', 'Takai', 'Takaki', 'Takakuwa',
    'Takamaru', 'Takamitsu', 'Takamori', 'Takamoto', 'Takanashi', 'Takano',
    'Takara', 'Takashima', 'Takata', 'Takayama', 'Takeda', 'Takei',
    'Takemoto', 'Takenaka', 'Takeshita', 'Taketa', 'Takeuchi', 'Takishima',
    'Tamaasa', 'Tamai', 'Tamaki', 'Tamanaha', 'Tamashiro', 'Tamatsuki',
    'Tamon', 'Tamura', 'Tanabe', 'Tanaka', 'Tani', 'Tanifuji', 'Tanigawa',
    'Taniguchi', 'Tanikawa', 'Tanimoto', 'Taniuchi', 'Tanji', 'Tano', 'Tao',
    'Tashiro', 'Tatewaki', 'Tatsuda', 'Tatsuno', 'Tazawa', 'Tengan', 'Terada',
    'Teramoto', 'Terauchi', 'Teruya', 'Teshima', 'Tezuka', 'Tobe', 'Toda',
    'Togoshi', 'Tokuda', 'Tokugawa', 'Tokuma', 'Tokunaga', 'Toma', 'Tomatsu',
    'Tominaga', 'Tomita', 'Tone', 'Toujou', 'Toyama', 'Toyoda', 'Tsuboike',
    'Tsuchida', 'Tsuchiya', 'Tsuda', 'Tsudzumi', 'Tsudzuri', 'Tsuga', 'Tsuge',
    'Tsuji', 'Tsujihara', 'Tsujii', 'Tsujita', 'Tsukamoto', 'Tsukino',
    'Tsukiyama', 'Tsukiyomi', 'Tsukuda', 'Tsunematsu', 'Tsunoi', 'Tsuruoka',
    'Tsutsui', 'Tsutsumi', 'Tsuzuki', 'Ubukata', 'Uchibayashi', 'Uchida',
    'Uchikoshi', 'Uchima', 'Uchimura', 'Uchino', 'Uchiyama', 'Uda', 'Ueda',
    'Uegaki', 'Uehara', 'Uehashi', 'Ueki', 'Uematsu', 'Uemura', 'Ueno',
    'Uesaka', 'Uesato', 'Ueshiba', 'Uesugi', 'Ueto', 'Ueyama', 'Ueyonabaru',
    'Ugumori', 'Umebayashi', 'Umeda', 'Umeji', 'Umeki', 'Umemoto', 'Umemura',
    'Umesaka', 'Umezaki', 'Umezawa', 'Umon', 'Uno', 'Uozumi', 'Uramoto',
    'Uranishi', 'Urata', 'Urayama', 'Urushido', 'Ushijima', 'Ushioda', 'Usui',
    'Utada', 'Utagawa', 'Utsumi', 'Utsunomiya', 'Uyeda', 'Uyehara', 'Uyemura',
    'Uyeno', 'Uzumaki', 'Wada', 'Wakabayashi', 'Wakai', 'Wakaizumi', 'Wakaki',
    'Wakamatsu', 'Wakamatsu', 'Wakamura', 'Wakao', 'Wakasugi', 'Wakata',
    'Wakatsuchi', 'Wakatsuki', 'Wakayama', 'Wakayoshi', 'Waki', 'Wakimoto',
    'Wakino', 'Wakisaka', 'Wakita', 'Wakiya', 'Wakui', 'Wakuni', 'Wakuri',
    'Wanijima', 'Watabe', 'Watanabe', 'Watanuki', 'Watari', 'Watase',
    'Watsuji', 'Yūki', 'Yabūchi', 'Yabe', 'Yabuta', 'Yada', 'Yadama',
    'Yagami', 'Yagi', 'Yaginuma', 'Yaguchi', 'Yahiro', 'Yajima', 'Yakumo',
    'Yakushimaru', 'Yamabe', 'Yamada', 'Yamagata', 'Yamagishi', 'Yamaguchi',
    'Yamaha', 'Yamaji', 'Yamakawa', 'Yamamoto', 'Yamamura', 'Yamamuro',
    'Yamanaka', 'Yamanami', 'Yamane', 'Yamanishi', 'Yamaoka', 'Yamasaki',
    'Yamasato', 'Yamashina', 'Yamashiro', 'Yamashita', 'Yamataka', 'Yamauchi',
    'Yamazaki', 'Yanagi', 'Yanagida', 'Yanagimachi', 'Yanagimoto',
    'Yanagisawa', 'Yanagita', 'Yanai', 'Yanase', 'Yano', 'Yashida', 'Yashima',
    'Yashiro', 'Yasuda', 'Yasue', 'Yasui', 'Yasumi', 'Yasumoto', 'Yasunaga',
    'Yasutake', 'Yazawa', 'Yodogawa', 'Yogi', 'Yoichi', 'Yokoi', 'Yokono',
    'Yokota', 'Yokouchi', 'Yokoyama', 'Yomaura', 'Yonamine', 'Yoneda',
    'Yonemura', 'Yoneno', 'Yonezawa', 'Yoritaka', 'Yoshida', 'Yoshie',
    'Yoshifumi', 'Yoshigahara', 'Yoshihama', 'Yoshihara', 'Yoshihisa',
    'Yoshii', 'Yoshiie', 'Yoshikawa', 'Yoshikuni', 'Yoshimi', 'Yoshimoto',
    'Yoshimura', 'Yoshinaga', 'Yoshino', 'Yoshioka', 'Yoshitaka', 'Yoshiya',
    'Yoshiyuki', 'Yoshizawa', 'Yuguchi', 'Yuhara', 'Yukawa', 'Yukimori',
    'Yukimura', 'Yukimuro', 'Yukiyama', 'Yumoto', 'Yutani', 'Yuuma', 'Zakai',
    'Zakaza', 'Zayasu']; {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm2.length);
      names = `${nm3[rnd]} ${nm2[rnd2]}`;
    } else {
      rnd = Math.floor(Math.random() * nm3.length);
      rnd2 = Math.floor(Math.random() * nm1.length);
      names = `${nm3[rnd]} ${nm1[rnd2]}`;
    }
    return names;
  }
}
