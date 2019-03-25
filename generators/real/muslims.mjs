export default function muslims() {
    let rnd;
    let rnd2;
    let names;
    const type = Math.random() > 0.5 ? 0 : 1;
    const nm1 = ['Aabdeen', 'Aabid', 'Aadam', 'Aadil', 'Aaish', 'Aakif', 'Aamir', 'Aaqil', 'Aarif', 'Aasim', 'Aatif', 'Aayid', 'Abbaad', 'Abbaas', 'Abdul Azeez', 'Abdul Baari', 'Abdul Baasid', 'Abdul Fattaah', 'Abdul Ghafoor', 'Abdul Ghani', 'Abdul Haadi', 'Abdul Hai', 'Abdul Hakeem', 'Abdul Haleem', 'Abdul Hameed', 'Abdul Jabbaar', 'Abdul Jaleel', 'Abdul Kader', 'Abdul Kareem', 'Abdul Khaliq', 'Abdul Lateef', 'Abdul Maalik', 'Abdul Majeed', 'Abdul Noor', 'Abdul Qayyoom', 'Abdul Quddoos', 'Abdul Rauf', 'Abdul Waahid', 'Abdul Wadood', 'Abdul Wahaab', 'Abdullah', 'Abdur Raheem', 'Abdur Rahmaan', 'Abdur Raqeeb', 'Abdur Rasheed', 'Abdur Razzaaq', 'Abdus Salam', 'Abdus Samad', 'Abdut Tawwab', 'Abood', 'Abyad', 'Adeeb', 'Adham', 'Adnaan', 'Afeef', 'Ahmed', 'Aiman', 'Akram', 'Alawi', 'Ali', 'Amaan', 'Amaanullah', 'Ameen', 'Ameer', 'Amjad', 'Ammaar', 'Amru', 'Anas', 'Annnees', 'Anwar', 'Aqeel', 'Arafaat', 'Arhab', 'Arkaan', 'Arshad', 'Asad', 'Aseel', 'Asghar', 'Ashqar', 'Ashraf', 'Aslam', 'Asmar', 'Awad', 'Awf', 'Awn', 'Awni', 'Ayyoob', 'Azhaar', 'Azmi', 'Azzaam', 'Baahir', 'Baaqir', 'Baasim', 'Badr', 'Badraan', 'Badri', 'Badruddeen', 'Baheej', 'Bakar', 'Bandar', 'Basheer', 'Bassaam', 'Bassil', 'Bilaal', 'Bishr', 'Burhaan', 'Daamir', 'Daawood', 'Daif', 'Daifallah', 'Daleel', 'Dhaafir', 'Dhaahir', 'Dhaakir', 'Dhaki', 'Dhareef', 'Faadi', 'Faadil', 'Faai Z', 'Faaid', ' Faaiq', 'Faalih', 'Faaris', 'Faarooq', 'Faatih', 'Faatin', 'Fahd', 'Faheem', 'Fahmi', 'Faisal', 'Faraj', 'Farajallah', 'Fareed', 'Farhaan', 'Fateen', 'Fat\'hi', 'Fawwaaz', 'Fawz', 'Fawzi', 'Fayyaad', 'Fikri', 'Fuaad', 'Furqaan', 'Ghaali', 'Ghaalib', 'Ghaamid', 'Ghaazi', 'Ghassaan', 'Haafil', 'Haajid', 'Haamid', 'Haani', 'Haarith', 'Haaroon', 'Haashid', 'Haashim', 'Haatim', 'Haazim', 'Haitham', 'Hakam', 'Hamad', 'Hamdaan', 'Hamdi', 'Hamood', 'Hamza', 'Haneef', 'Hanlala', 'Hasan', 'Hazm', 'Hibbaan', 'Hilaal', 'Hilmi', 'Hishaam', 'Hudhaifa', 'Humaid', 'Humaidaan', 'Huraira', 'Husaam', 'Husain', 'Husni', 'Ibrahim', 'Idrees', 'Ihaab', 'Ikram', 'Ilyaas', 'Imaad', 'Imraan', 'Irfaan', 'Isaam', 'Ishaaq', 'Ismad', 'Ismaeel', 'Iyaad', 'Izzaddeen', 'Izzat', 'Jaabir', 'Jaad', 'Jaadallah', 'Jaarallah', 'Jaasim', 'Jaasir', 'Jafar', 'Jalaal', 'Jam,Aan', 'Jamaal', 'Jameel', 'Jareer', 'Jasoor', 'Jawaad', 'Jawhar', 'Jihaad', 'Jiyaad', 'Jubair', 'Jumail', 'Junaid', 'Kaalim', 'Kaamil', 'Kaarim', 'Kabeer', 'Kaleem', 'Kamaal', 'Kamaaluddeen', 'Kameel', 'Kanaan', 'Katheer', 'Khaalid', 'Khairi', 'Khaleefa', 'Khaleel', 'Labeeb', 'Labeeb', 'Luqmaan', 'Lutfi', 'Luwai', 'Ma,Roof', 'Maahir', 'Maaiz', 'Maa\'iz', 'Maajid', 'Maazin', 'Mahboob', ' Mahdi', 'Mahfooz', 'Mahmood', 'Mahuroos', 'Maisara', 'Maisoon', 'Majdi', 'Mamdooh', 'Mamoon', 'Mansoor', 'Marwaan', 'Marzooq', 'Mashal', 'Masood', 'Mastoor', 'Mawdood', 'Mazeed', 'Miqdaad', 'Miqdaam', 'Misfar', 'Mishaari', 'Moosha', 'Mu,Aawiya', 'Muaaid', 'Muammar', 'Mubarak', 'Mubashshir', 'Mudrik', 'Mufeed', 'Muhaajir', 'Muhammad', 'Muhsin', 'Muhyddeen', 'Mujahid', 'Mukarram', 'Mukhtaar', 'Mundhir', 'Muneeb', 'Muneef', 'Muneer', 'Munjid', 'Munsif', 'Muntasir', 'Murshid', 'Musaaid', 'Mus\'ab', 'Musaddiq', 'Musheer', 'Mushtaaq', 'Muslih', 'Muslim', 'Mustaba', 'Mutammam', 'Mutasim', 'Mu\'taz', 'Muthanna', 'Mutlaq', 'Muzammil', 'Naadir', 'Naaif', 'Naaji', 'Naasif', 'Naasiruddeen', 'Naazil', 'Naazim', 'Nabeeh', 'Nabeel', 'Nadeem', 'Nadheer', 'Najeeb', 'Najeem', 'Naseem', 'Naseer', 'Nashat', 'Nassaar', 'Nawaar', 'Nawf', 'Nawfal', 'Nazmi', 'Neeshaan', 'Nizaam', 'Nizaar', 'Noori', 'Nu\'maan', 'Numair', 'Qaaid', 'Qaasim', 'Qais', 'Quraish', 'Qutb', 'Raadi', 'Raafi', 'Raaid', 'Raaji', 'Raakaan', 'Raamiz', 'Raashid', 'Rabi', 'Rafeeq', 'Raihaan', 'Rajaa', 'Rajab', 'Ramalaan', 'Ramzi', 'Rashaad', 'Rasheeq', 'Rayyaan', 'Razeen', 'Rida', 'Ridwaan', 'Rifaah', 'Rifat', 'Riyaal', 'Rushdi', 'Rushdi', 'Ruwaid', 'Saabiq', 'Saabir', 'Saadiq', 'Saahir', 'Saajid', ' Saalih', 'Saalim', 'Saami', 'Saamir', 'Sabaah', 'Sabri', 'Sad', 'Sadi', 'Sadoon', 'Saeed', 'Safar', 'Safwaan', 'Sahl', 'Saif', 'Sakeen', 'Salaah', 'Saleel', 'Saleem', 'Saleet', 'Salmaan', 'Samir', 'Saood', 'Saqr', 'Shaafi', 'Shaaheen', 'Shaahir', 'Shaakir', 'Shaamikh', 'Shaamil', 'Shabaan', 'Shaddaad', 'Shafeeq', 'Shaheed', 'Shaheed', 'Shaheer', 'Shakeel', 'Shameem', 'Shaqeeq', 'Sharaf', 'Sharaf', 'Shawqi', 'Shihaab', 'Shuaib', 'Shujaa', 'Shukri', 'Shuraih', 'Siddeeqi', 'Sidqi', 'Silmi', 'Siraaj', 'Sirajuddeen', 'Subhi', 'Sufyaan', 'Suhaib', 'Suhail', 'Sulaimaan', 'Sultan', 'Suwailim', 'Taaha', 'Taahir', 'Taaj', 'Taajuddeen', 'Taalib', 'Taamir', 'Taariq', 'Taiseer', 'Talaal', 'Talha', 'Tameem', 'Tammaam', 'Taqi', 'Tareef', 'Tawfeeq', 'Tawheed', 'Tayyib', 'Thaamir', 'Thaaqib', 'Tufail', 'Turki', 'Ubaida', 'Umair', 'Umar', 'Unais', 'Uqbah', 'Usaama', 'Uthmaa N', 'Uwais', 'Waail', 'Waatiq', 'Waddaah', 'Wajdi', 'Wajeeb', 'Wajeeh', 'Waleed', 'Waseef', 'Waseem', 'Wisaam', 'Yaasir', 'Ya\'eesh', 'Yahya', 'Ya\'qoob', 'Yoonus', 'Yoosuf', 'Yusri', 'Zaahid', 'Zaahir', 'Zaaid', 'Zaamil', 'Zaghlool', 'Zaid', 'Zaidaan', 'Zain', 'Zainuddeen', 'Zakariyya', 'Zaki', 'Zameel', 'Zayyaan', 'Ziyaad', 'Zubair', 'Zufar', 'Zuhair', 'Zuraara'];
    const nm2 = ['Aadila', 'Aaida', 'Aaisha', 'Aamina', 'Aanisa', 'Aarifa', 'Aasima', 'Aasiya', 'Aatifa', 'Aatika', 'Aayaat', 'Abeer', 'Adeeba', 'Adhraaa', 'Afaaf', 'Afeefa', 'Afnaan', 'Afraah', 'Ahlaam', 'Aliyya', 'Almaasa', 'Amaani', 'Amal', 'Amatullah', 'Ameena', 'Ameera', 'Amniyya', 'Anbara', 'Aneesa', 'Aqeela', 'Ariyya', 'Arwa', 'Aseela', 'Asmaa', 'Atheer', 'Atiyya', 'Awaatif', 'Awda', 'Azeema', 'Azeeza', 'Azza', 'Fakeeha', 'Faraah', 'Fareeda', 'Farha', 'Farhaana', 'Farhat', 'Faseeha', 'Fateena', 'Fat\'hiyaa', 'Fawqiyya', 'Fawzaana', 'Fawzia', 'Fidda', 'Fikra', 'Fikriyya', 'Firdaus', 'Fuaada', 'Gaitha', 'Ghaada', 'Ghaaliba', 'Ghaaliya', 'Ghaaziya', 'Ghaidaa', 'Ghazaala', 'Ghuzaila', 'Haafiza', 'Haajara', 'Haakima', 'Haala', 'Haamida', 'Haaniya', 'Haaritha', 'Haazima', 'Habeeba', 'Hadbaaa', 'Hadeel', 'Hadiyya', 'Hafsa', 'Haibaa', 'Haifaaa', 'Hakeema', 'Haleema', 'Hamaama', 'Hamda', 'Hamdoona', 'Hameeda', 'Hamna', 'Hamsa', 'Hanaaa', 'Hanaan', 'Haniyya', 'Hanoona', 'Hasana', 'Haseena', 'Hasnaa', 'Hawraa', 'Hazeela', 'Hiba', 'Hikma', 'Hilmiyya', 'Himma', 'Hishma', 'Hissa', 'Hiwaaya', ' Huda', 'Hujja', 'Humaina', 'Humaira', 'Husniyya', 'Huwaida', 'Ibtisaama', 'Iffat', 'Ilhaam', 'Imtinaan', 'Inaaya', 'Insaaf', 'Intisaar', 'Israa', 'Izza', 'Jadeeda', 'Jaleela', 'Jameela', 'Jannat', 'Jasra', 'Jawhara', 'Jeelaan', 'Juhaina', 'Jumaana', 'Jumaima', 'Juwairiya', 'Kaatima', 'Kaazima', 'Kabeera', 'Kameela', 'Kareema', 'Kawkab', 'Kawthar', 'Khaalida', 'Khadeeja', 'Khaira', 'Khairiya', 'Khaleela', 'Khawla', 'Khulood', 'Kifaaya', 'Kinaana', 'Kulthum', 'Laaiqa', 'Labeeba', 'Laila', 'Lateefa', 'Layaali', 'Lubaaba', 'Lubna', 'Lutfiyya', 'Maajida', 'Maariya', 'Maazina', 'Madeeha', 'Mahaa', 'Mahbooba', 'Mahdeeya', 'Mahdhoodha', 'Mahfoodha', 'Mahmooda', 'Maimoona', 'Maisara', 'Majdiyya', 'Majeeda', 'Maleeha', 'Maleeka', 'Manaahil', 'Manaal', 'Manaara', 'Mardiyya', 'Marjaana', 'Marwa', 'Marzooqa', 'Mas\'ooda', 'Masroora', 'Mastoora', 'Mawhiba', 'Mawzoona', 'Mayyaada', 'Mazeeda', 'Minnah', 'Misbaah', 'Miska', 'Mubaaraka', 'Mubeena', 'Mudrika', 'Mufeeda', 'Mufliha', 'Muhjar', 'Mu\'hsina', 'Mujaahida', 'Mumina', 'Mu\'mina', 'Mumtaaza', 'Muna', 'Muneefa', 'Muneera', 'Munisa', 'Muntaha', 'Musfira', 'Musheera', 'Mushtaaqa', 'Mutee\'a', 'Muzaina', ' Muzna', 'Naadiya', 'Naafoora', 'Naaifa', 'Naaila', 'Nabeeha', 'Nabeela', 'Nada', 'Nadeera', 'Nadheera', 'Nadiyya', 'Nafeesa', 'Nahla', 'Najaat', 'Najeeba', 'Najeema', 'Najiyya', 'Najlaa', 'Najma', 'Najwa', 'Nakheel', 'Nameera', 'Naqaa', 'Naqiyya', 'Naseeba', 'Naseefa', 'Naseema', 'Naseera', 'Nasreen', 'Nawaal', 'Nawaar', 'Nawfa', 'Nawwaara', 'Nazeeha', 'Nazeema', 'Nazmiyya', 'Nisma', 'Noora', 'Nooriyya', 'Nuha', 'Nu\'ma', 'Nusaiba', 'Nuzha', 'Qaaida', 'Qamraaa', 'Qisma', 'Raabia', 'Raabiya', 'Raadiya', 'Raafida', 'Raaida', 'Raaniya', 'Rabdaa', 'Radiyya', 'Radwa', 'Rafeeda', 'Rafeeqa', 'Raheema', 'Rahma', 'Raihaana', 'Raita', 'Ramla', 'Ramza', 'Ramziyya', 'Randa', 'Rashaa', 'Rasheeda', 'Rasheeqa', 'Rawda', 'Rayyana', 'Razeena', 'Reema', 'Rif\'a', 'Rifqa', 'Rihaab', 'Rumaana', 'Ruqayya', 'Rutaiba', 'Ruwaida', 'Saabiqa', 'Saabira', 'Saafiyya', 'Saahira', 'Saajida', 'Saaliha', 'Saalima', 'Saamiqa', 'Saamyya', 'Saara', 'Sabaaha', 'Sabeeha', 'Sabeeka', 'Sabiyya', 'Sabreen', 'Sabriyya', 'Sadeeda', 'Sadeeqa', 'Safaaa', 'Safiyya', 'Safwa', 'Sahar', 'Sahheeda', 'Sahla', 'Sajaa', 'Sajiyya', ' Sakeena', 'Saleema', 'Salma', 'Salwa', 'Sameeha', 'Sameera', 'Samraa', 'Sanaaa', 'Sanad', 'Sawada', 'Shaafia', 'Shaahida', 'Shaahira', 'Shaakira', 'Shaamila', 'Shabeeba', 'Shadhaa', 'Shafaaa', 'Shafee\'a', 'Shafeeqa', 'Shahaada', 'Shahaama', 'Shaheera', 'Shahla', 'Shaimaaa', 'Shajee\'a', 'Shakeela', 'Shakoora', 'Sham\'a', 'Shamaail', 'Shameema', 'Shaqeeqa', 'Shareefa', 'Shukriyya', 'Siddeeqa', 'Sireen', 'Sitaara', 'Suhaa', 'Suhaad', 'Suhaila', 'Sukaina', 'Sulama', 'Sultana', 'Sumaita', 'Sumayya', 'Sumbula', 'Sundus', 'Taaliba', 'Taamira', 'Tahaani', 'Tahiyya', 'Tahleela', 'Tamanna', 'Tameema', 'Taqiyya', 'Tareefa', 'Tasneem', 'Tawfeeqa', 'Tawheeda', 'Tayyiba', 'Thaabita', 'Thaamira', 'Thamra', 'Thanaa', 'Tharwa', 'Tuhfa', 'Tulaiha', 'Turfa', 'Ulyaa', 'Umaima', 'Umaira', 'Ummu Kulthoom', 'Urwa', 'Waajida', 'Wadee\'a', 'Wadha', 'Wafaaa', 'Waheeba', 'Waheeda', 'Wajdiyya', 'Wajeeha', 'Waleeda', 'Waliyya', 'Waneesa', 'Warda', 'Wardiyya', 'Waseema', 'Wasmaaa', 'Widdad', 'Yaasmeen', 'Yaasmeena', 'Zaahira', 'Zaaida', 'Zahra', 'Zahraaa', 'Zainab', 'Zaitoona', 'Zakiyya', 'Zarqaa', 'Zeena', 'Zubaida', 'Zuhaira', 'Zuhra', 'Zuhriyaa', 'Zulfa', 'Zumruda'];
    const nm3 = ['Abad', 'Abbas', 'Abbasi', 'Abdalla', 'Abdallah', 'Abdella', 'Abdelnour', 'Abdelrahman', 'Abdi', 'Abdo', 'Abdoo', 'Abdou', 'Abdul', 'Abdulla', 'Abdullah', 'Abed', 'Abid', 'Abood', 'Aboud', 'Abraham', 'Abu', 'Adel', 'Afzal', 'Agha', 'Ahmad', 'Ahmadi', 'Ahmed', 'Ahsan', 'Akbar', 'Akbari', 'Akel', 'Akhtar', 'Akhter', 'Akram', 'Alam', 'Ali', 'Allam', 'Allee', 'Alli', 'Ally', 'Aly', 'Aman', 'Amara', 'Amber', 'Ameen', 'Amen', 'Amer', 'Amin', 'Amini', 'Amir', 'Amiri', 'Ammar', 'Ansari', 'Anwar', 'Arafat', 'Arif', 'Arshad', 'Asad', 'Ashraf', 'Aslam', 'Asmar', 'Assad', 'Assaf', 'Atallah', 'Attar', 'Awan', 'Aydin', 'Ayoob', 'Ayoub', 'Ayub', 'Azad', 'Azam', 'Azer', 'Azimi', 'Aziz', 'Azizi', 'Azzam', 'Azzi', 'Bacchus', 'Baccus', 'Bacho', 'Baddour', 'Badie', 'Badour', 'Bagheri', 'Bahri', 'Baig', 'Baksh', 'Baluch', 'Bangura', 'Barakat', 'Bari', 'Basa', 'Basha', 'Bashara', 'Basher', 'Bashir', 'Baten', 'Begum', 'Ben', 'Beshara', 'Bey', 'Beydoun', 'Bilal', 'Bina', 'Burki', 'Can', 'Chahine', 'Dada', 'Dajani', 'Dallal', 'Daoud', 'Dar', 'Darwish', 'Dawood', 'Demian', 'Dia', 'Diab', 'Dib', 'Din', 'Doud', 'Ebrahim', 'Ebrahimi', 'Edris', 'Eid', 'Elamin', 'Elbaz', 'El-Sayed', 'Emami', 'Fadel', 'Fahmy', 'Fahs', 'Farag', 'Farah', 'Faraj', 'Fares', 'Farha', 'Farhat', 'Farid', 'Faris', 'Farman', 'Farooq', 'Farooqui', 'Farra', 'Farrah', 'Farran', 'Fawaz', 'Fayad', 'Firman', 'Gaber', 'Gad', 'Galla', 'Ghaffari', 'Ghanem', 'Ghani', 'Ghattas', 'Ghazal', 'Ghazi', 'Greiss', 'Guler', 'Habeeb', 'Habib', 'Habibi', 'Hadi', 'Hafeez', 'Hai', 'Haidar', 'Haider', 'Hakeem', 'Hakim', 'Halaby', 'Halim', 'Hallal', 'Hamad', 'Hamady', 'Hamdan', 'Hamed', 'Hameed', 'Hamid', 'Hamidi', 'Hammad', 'Hammoud', 'Hana', 'Hanif', 'Hannan', 'Haq', 'Haque', 'Hares', 'Hariri', 'Harron', 'Harroun', 'Hasan', 'Hasen', 'Hashem', 'Hashemi', 'Hashim', 'Hashmi', 'Hassan', 'Hassen', 'Hatem', 'Hoda', 'Hoque', 'Hosein', 'Hossain', 'Hosseini', 'Huda', 'Huq', 'Husain', 'Hussain', 'Hussein', 'Ibrahim', 'Idris', 'Imam', 'Iman', 'Iqbal', 'Irani', 'Ishak', 'Ishmael', 'Islam', 'Ismael', 'Ismail', 'Jabara', 'Jabbar', 'Jabbour', 'Jaber', 'Jabour', 'Jafari', 'Jaffer', 'Jafri', 'Jalali', 'Jalil', 'Jama', 'Jamail', 'Jamal', 'Jamil', 'Jan', 'Javed', 'Javid', 'Kaba', 'Kaber', 'Kabir', 'Kader', 'Kaiser', 'Kaleel', 'Kalil', 'Kamal', 'Kamali', 'Kamara', 'Kamel', 'Kanan', 'Karam', 'Karim', 'Karimi', 'Kassem', 'Kazemi', 'Kazi', 'Kazmi', 'Khalaf', 'Khalid', 'Khalifa', 'Khalil', 'Khalili', 'Khan', 'Khatib', 'Khawaja', 'Koroma', 'Laham', 'Latif', 'Lodi', 'Lone', 'Madani', 'Mady', 'Mahdavi', 'Mahdi', 'Mahfouz', 'Mahmood', 'Mahmoud', 'Mahmud', 'Majeed', 'Majid', 'Malak', 'Malek', 'Malik', 'Mannan', 'Mansoor', 'Mansour', 'Mansouri', 'Mansur', 'Maroun', 'Masih', 'Masood', 'Masri', 'Massoud', 'Matar', 'Matin', 'Mattar', 'Meer', 'Meskin', 'Miah', 'Mian', 'Mina', 'Minhas', 'Mir', 'Mirza', 'Mitri', 'Moghaddam', 'Mohamad', 'Mohamed', 'Mohammad', 'Mohammadi', 'Mohammed', 'Mohiuddin', 'Molla', 'Momin', 'Mona', 'Morad', 'Moradi', 'Mostafa', 'Mourad', 'Mousa', 'Moussa', 'Moustafa', 'Mowad', 'Muhammad', 'Muhammed', 'Munir', 'Murad', 'Musa', 'Mussa', 'Mustafa', 'Naderi', 'Nagi', 'Naim', 'Naqvi', 'Nasir', 'Nasr', 'Nasrallah', 'Nasser', 'Nassif', 'Nawaz', 'Nazar', 'Nazir', 'Neman', 'Niazi', 'Noor', 'Noorani', 'Noori', 'Nour', 'Nouri', 'Obeid', 'Odeh', 'Omar', 'Omer', 'Othman', 'Ozer', 'Parsa', 'Pasha', 'Pashia', 'Pirani', 'Popal', 'Pour', 'Qadir', 'Qasim', 'Qazi', 'Quadri', 'Raad', 'Rabbani', 'Rad', 'Radi', 'Radwan', 'Rafiq', 'Rahaim', 'Rahaman', 'Rahim', 'Rahimi', 'Rahman', 'Rahmani', 'Rais', 'Ramadan', 'Ramin', 'Rashed', 'Rasheed', 'Rashid', 'Rassi', 'Rasul', 'Rauf', 'Rayes', 'Rehman', 'Rehmann', 'Reza', 'Riaz', 'Rizk', 'Saab', 'Saad', 'Saade', 'Saadeh', 'Saah', 'Saba', 'Saber', 'Sabet', 'Sabir', 'Sadek', 'Sader', 'Sadiq', 'Sadri', 'Saeed', 'Safar', 'Safi', 'Sahli', 'Saidi', 'Sala', 'Salaam', 'Saladin', 'Salah', 'Salahuddin', 'Salam', 'Salama', 'Salame', 'Salameh', 'Saleem', 'Saleh', 'Salehi', 'Salek', 'Salem', 'Salih', 'Salik', 'Salim', 'Salloum', 'Salman', 'Samaan', 'Samad', 'Samara', 'Sami', 'Samra', 'Sani', 'Sarah', 'Sarwar', 'Sattar', 'Satter', 'Sawaya', 'Sayed', 'Selim', 'Semaan', 'Sesay', 'Shaban', 'Shabazz', 'Shad', 'Shaer', 'Shafi', 'Shah', 'Shahan', 'Shaheed', 'Shaheen', 'Shahid', 'Shahidi', 'Shahin', 'Shaikh', 'Shaker', 'Shakir', 'Shakoor', 'Sham', 'Shams', 'Sharaf', 'Shareef', 'Sharif', 'Shariff', 'Sharifi', 'Shehadeh', 'Shehata', 'Sheikh', 'Siddiqi', 'Siddique', 'Siddiqui', 'Sinai', 'Soliman', 'Soltani', 'Srour', 'Sulaiman', 'Suleiman', 'Sultan', 'Sultana', 'Syed', 'Sylla', 'Tabatabai', 'Tabet', 'Taha', 'Taheri', 'Tahir', 'Tamer', 'Tariq', 'Tawil', 'Toure', 'Turay', 'Uddin', 'Ullah', 'Usman', 'Vaziri', 'Vohra', 'Wahab', 'Wahba', 'Waheed', 'Wakim', 'Wali', 'Yacoub', 'Yamin', 'Yasin', 'Yassin', 'Younan', 'Younes', 'Younis', 'Yousef', 'Yousif', 'Youssef', 'Yousuf', 'Yusuf', 'Zadeh', 'Zafar', 'Zaher', 'Zahra', 'Zaidi', 'Zakaria', 'Zaki', 'Zaman', 'Zamani', 'Zia'];
    let names = '';
    {
        rnd2 = Math.floor(Math.random() * nm3.length);
        if (type === 1) {
            rnd = Math.floor(Math.random() * nm2.length);
            names = `${nm2[rnd]} ${nm3[rnd2]}`;
        } else {
            rnd = Math.floor(Math.random() * nm1.length);
            names = `${nm1[rnd]} ${nm3[rnd2]}`;
        }
        return names;
    }
}
