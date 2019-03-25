export default function biblicals() {
  let rnd;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Aaron', 'Abdiel', 'Abel', 'Abiah', 'Abiathar', 'Abiel', 'Abilene', 'Abiram', 'Abner', 'Abraham', 'Abram', 'Absalom', 'Adam', 'Adama', 'Adiel', 'Adin', 'Adlai', 'Adonijah', 'Adriel', 'Ahio', 'Ajah', 'Alexander', 'Alian', 'Allon', 'Alpha', 'Amad', 'Amariah', 'Amaziah', 'Amittai', 'Amon', 'Amos', 'Anaiah', 'Anayah', 'Andrew', 'Andronicus', 'Aquila', 'Arad', 'Areli', 'Ariel', 'Arioch', 'Armoni', 'Artemas', 'Asa', 'Asher', 'Azaliah', 'Azariah', 'Barabbas', 'Barak', 'Barnabas', 'Bartholmew', 'Baruch', 'Benjamin', 'Berachiah', 'Berechiah', 'Boaz', 'Cain', 'Calamus', 'Caleb', 'Canaan', 'Cedron', 'Chenaniah', 'Christian', 'Clement', 'Coniah', 'Corban', 'Cornelius', 'Cyprus', 'Cyrus', 'Dan', 'Daniel', 'Darius', 'Dathan', 'David', 'Demas', 'Dimnah', 'Dodavah', 'Ebenezer', 'Edrei', 'El`azar', 'Elah', 'Elasah', 'Elealeh', 'Eleazar', 'Elhanan', 'Eli', 'Elias', 'Eliezer', 'Elijah', 'Elisha', 'Elisheba', 'Elkanah', 'Elnaam', 'Elnathan', 'Emmanuel', 'Enan', 'Enoch', 'Ephraim', 'Erastus', 'Esau', 'Eshton', 'Ethan', 'Euphrates', 'Ezekiel', 'Ezra', 'Felix', 'Festus', 'Gabriel', 'Gamaliel', 'Gideon', 'Gilboa', 'Gilead', 'Hamath', 'Hanan', 'Haran', 'Hazael', 'Hazaiah', 'Hebron', 'Hezekiah', 'Hiram', 'Hosea', 'Immanuel', 'Isaac', 'Isaiah', 'Ishmael', 'Ishtob', 'Ismachiah', 'Ismaiah', 'Israel', 'Ithiel', 'Jaazaniah', 'Jabal', 'Jachin', 'Jacob', 'Jadon', 'Jahaziah', 'Jahaziel', 'Jahmai', 'Jairus', 'Jakin', 'Jalon', 'James', 'Jamin', 'Janna', 'Janoah', 'Japheth', 'Jared', 'Jaresiah', 'Jarmuth', 'Jasher', 'Jason', 'Javan', 'Jedidah', 'Jedidiah', 'Jehoiakim', 'Jehoram', 'Jehoshua', 'Jeremiah', 'Jeremy', 'Jeriah', 'Jericho', 'Jeshaiah', 'Jeshiah', 'Jeshua', 'Jeshuah', 'Jesse', 'Jesus', 'Jethro', 'Jezreel', 'Joab', 'Joachim', 'Joaquin', 'Joash', 'Job', 'Joel', 'Johanan', 'Johannan', 'John', 'Jonah', 'Jonathan', 'Jordan', 'Joseph', 'Joshua', 'Josiah', 'Jotham', 'Jubal', 'Judah', 'Jude', 'Julian', 'Julius', 'Justus', 'Kadesh', 'Kadmiel', 'Kedar', 'Kemuel', 'Kenan', 'Kenaniah', 'Kir', 'Kohath', 'Korah', 'Kristian', 'Laban', 'Lazarus', 'Lemuel', 'Levi', 'Linus', 'Lucas', 'Lucius', 'Luke', 'Lysanias', 'Malachi', 'Malchiah', 'Malchiel', 'Malchus', 'Manasseh', 'Manoah', 'Marcus', 'Mark', 'Mattathias', 'Matthew', 'Matthias', 'Mattithiah', 'Menahem', 'Meshach', 'Methuselah', 'Micah', 'Micaiah', 'Micha', 'Michael', 'Mordecai', 'Mose', 'Moses', 'Moshe', 'Naaman', 'Nadab', 'Nahaliel', 'Naham', 'Nathan', 'Nathanael', 'Nathanel', 'Nathaniel', 'Nedabiah', 'Nehemiah', 'Neriah', 'Nicholas', 'Nicodemas', 'Nicolas', 'Noah', 'Obadiah', 'Obed', 'Omar', 'Oren', 'Othniel', 'Pagiel', 'Parmenus', 'Patrobus', 'Paul', 'Pediah', 'Peres', 'Perez', 'Peter', 'Philemon', 'Philetus', 'Philip', 'Phillip', 'Rama', 'Ramah', 'Ramiah', 'Raphael', 'Rei', 'Reuben', 'Reuel', 'Rueben', 'Rufus', 'Salathiel', 'Salem', 'Samson', 'Samuel', 'Saul', 'Sergius', 'Seth', 'Shalem', 'Shalom', 'Shaphan', 'Shecaniah', 'Shem', 'Shemaiah', 'Shiloh', 'Silas', 'Simeon', 'Simon', 'Sirion', 'Solomon', 'Stephen', 'Steven', 'Tartan', 'Tekoa', 'Tekoah', 'Thaddaeus', 'Thaddeus', 'Theophilus', 'Thomas', 'Timon', 'Timotheus', 'Timothy', 'Titus', 'Tobiah', 'Tobias', 'Trophimus', 'Uriah', 'Urias', 'Uzziah', 'Vaniah', 'Yakim', 'Zachariah', 'Zachary', 'Zadok', 'Zebadiah', 'Zebedee', 'Zebulun', 'Zechariah', 'Zedekiah', 'Zelotes', 'Zephaniah', 'Zimri', 'Zion'];
  const nm2 = ['Abana', 'Abi', 'Abida', 'Abidah', 'Abiel', 'Abigail', 'Abihail', 'Abital', 'Ada', 'Adah', 'Adina', 'Adriel', 'Aednah', 'Ahinoam', 'Aijalon', 'Ajalon', 'Alexa', 'Alexandra', 'Alexis', 'Aliana', 'Alpha', 'Amanah', 'Amariah', 'Amethyst', 'Amzi', 'Ananiah', 'Anna', 'Apphia', 'Arba', 'Arbah', 'Aridatha', 'Ariel', 'Ashriel', 'Asiel', 'Asriel', 'Atarah', 'Athalia', 'Ava', 'Azaliah', 'Azubah', 'Bashemath', 'Bathsheba', 'Bealiah', 'Berea', 'Berenice', 'Bernice', 'Bethany', 'Bethel', 'Bethesda', 'Bethlehem', 'Beulah', 'Bilhah', 'Bithiah', 'Cana', 'Candace', 'Caris', 'Carmel', 'Carshena', 'Carys', 'Casiphia', 'Cassandra', 'Charis', 'Cherith', 'Chloe', 'Christiana', 'Christina', 'Claudia', 'Clementina', 'Cornelia', 'Damara', 'Damaris', 'Darda', 'Deborah', 'Delilah', 'Dimnah', 'Dinah', 'Dodavah', 'Dorcas', 'Dorothea', 'Dorothy', 'Drusilla', 'Eden', 'Eirene', 'Elasah', 'Elealeh', 'Elia', 'Eliada', 'Eliadah', 'Eliana', 'Eliane', 'Elisabeth', 'Elisheba', 'Elizabeth', 'Emma', 'Emmanuel', 'Emunah', 'Esther', 'Eulogia', 'Eunice', 'Euodia', 'Euphrates', 'Eve', 'Ezrah', 'Gabriella', 'Galatia', 'Galilee', 'Genesis', 'Gethsemane', 'Grace', 'Hadashah', 'Hadassah', 'Hali', 'Hannah', 'Hasadiah', 'Hatita', 'Hephzibah', 'Hosannah', 'Imla', 'Imlah', 'Imnah', 'Irene', 'Ithra', 'Jada', 'Jael', 'Jahdiel', 'Jahziel', 'Janoah', 'Japhia', 'Japhlet', 'Japho', 'Jarah', 'Jasiel', 'Jedidah', 'Jemimah', 'Jeriel', 'Jerusha', 'Jimnah', 'Joanna', 'Jochebed', 'Joel', 'Joella', 'Joiada', 'Jordan', 'Jubilee', 'Judith', 'Julia', 'Junia', 'Kanah', 'Karis', 'Kartah', 'Katharine', 'Kathleen', 'Keilah', 'Keren', 'Kerith', 'Ketsiah', 'Keturah', 'Keziah', 'Kitron', 'Kolaiah', 'Kore', 'Kristiana', 'Kristina', 'Kuria', 'Kyra', 'Kyria', 'Laadah', 'Lael', 'Lasha', 'Leah', 'Lebanah', 'Lois', 'Lucetta', 'Lucia', 'Lucille', 'Lucina', 'Lucinda', 'Lydia', 'Macedonia', 'Magda', 'Magdalene', 'Magdiel', 'Mahalath', 'Malachi', 'Mara', 'Maresha', 'Mareshah', 'Maria', 'Martha', 'Mary', 'Mathea', 'Medeba', 'Mehetabel', 'Mehida', 'Melatiah', 'Melea', 'Meleah', 'Meleas', 'Melicu', 'Melita', 'Mesha', 'Micah', 'Micaiah', 'Micha', 'Michah', 'Michaiah', 'Michal', 'Miriam', 'Mishal', 'Mithcah', 'Mizpah', 'Moriah', 'Myra', 'Naamah', 'Naarah', 'Nahamani', 'Naomi', 'Nazarene', 'Nazareth', 'Neah', 'Neginah', 'Nicola', 'Nicole', 'Olympas', 'Omega', 'Orpah', 'Palestina', 'Pamphylia', 'Paradise', 'Peninnah', 'Phebe', 'Phenicia', 'Phoebe', 'Prisca', 'Priscilla', 'Puah', 'Rachel', 'Ramiah', 'Rebecca', 'Rebekah', 'Rhoda', 'Rinnah', 'Rissah', 'Ruhamah', 'Ruth', 'Sachia', 'Sakia', 'Sakya', 'Salome', 'Samaria', 'Sara', 'Sarah', 'Sarai', 'Selah', 'Shachia', 'Shalisha', 'Sharon', 'Sheba', 'Shelah', 'Shelomi', 'Shemariah', 'Sherah', 'Shiloh', 'Shiza', 'Sia', 'Sophia', 'Susan', 'Susanna', 'Syntyche', 'Tabitha', 'Talitha', 'Tamah', 'Tamar', 'Tamara', 'Theodora', 'Tirzah', 'Tryphena', 'Tryphosa', 'Vashti', 'Zelah', 'Zemira', 'Zemirah', 'Zillah', 'Zilpah', 'Zimrah', 'Zion', 'Zipporah', 'Zoe'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
