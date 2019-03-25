export default function algerians() {
  let rnd;
  let rnd2;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abel', 'Abir', 'Absalom', 'Adel', 'Aden', 'Adil', 'Adnan',
    'Ahmed', 'Ahmet', 'Ahron', 'Ajmal', 'Akil', 'Akili', 'Akram', 'Alawi',
    'Alborz', 'Aleser', 'Ali', 'Alim', 'Allah', 'Altair', 'Alva', 'Amal',
    'Amani', 'Ameer', 'Amen', 'Amin', 'Amir', 'Ammar', 'Anissa', 'Anouar',
    'Ansari', 'Antar', 'Anwar', 'Ara', 'Aram', 'Arif', 'Armen', 'Arpiar',
    'Asfour', 'Ashraf', 'Asim', 'Asliraf', 'Ayaan', 'Ayman', 'Azhaire',
    'Azia', 'Azim', 'Aziz', 'Azzam', 'Bader', 'Baghel', 'Bahir', 'Bakri',
    'Baqer', 'Barak', 'Barakah', 'Bari', 'Basem', 'Bashir', 'Bashshar',
    'Basia', 'Basim', 'Berk', 'Bilal', 'Borak', 'Boulus', 'Bruhier', 'Burhan',
    'Candan', 'Coman', 'Darra', 'Dawud', 'Ebrahim', 'Eisa', 'Emir', 'Eyad',
    'Fadil', 'Faisal', 'Fakhir', 'Faouzi', 'Farid', 'Faris', 'Farook',
    'Farouk', 'Farran', 'Faruq', 'Fathi', 'Fatin', 'Fawzi', 'Feroz', 'Firdos',
    'Fouad', 'Gadi', 'Gamal', 'Gaspar', 'Ghalia', 'Ghassan', 'Ghazi',
    'Giaffar', 'Ginton', 'Givon', 'Habib', 'Hachemi', 'Haddad', 'Hadi',
    'Hafiz', 'Hakan', 'Hakim', 'Halim', 'Hamal', 'Hamden', 'Hamid', 'Hamza',
    'Hanan', 'Hannan', 'Haris', 'Haroun', 'Harun', 'Hashim', 'Hasim', 'Hatim',
    'Ibrahim', 'Idris', 'Imam', 'Isra', 'Jabbar', 'Jabir', 'Jahara', 'Jaide',
    'Jakeem', 'Jaleel', 'Jalil', 'Jamael', 'Jarrah', 'Jaser', 'Jassem',
    'Jibril', 'Jihan', 'Kadar', 'Kadeen', 'Kadin', 'Kadir', 'Kaeleb',
    'Kahill', 'Kahleil', 'Kalb', 'Kalid', 'Kaliq', 'Kamaal', 'Kamal', 'Kamel',
    'Kamil', 'Kaniel', 'Kardal', 'Kareef', 'Kareem', 'Karim', 'Kaseeb',
    'Kaseem', 'Kasim', 'Kassim', 'Kateb', 'Khaldun', 'Khaled', 'Khalif',
    'Khalil', 'Khanh', 'Kharim', 'Khayyat', 'Lamine', 'Latif', 'Lounes',
    'Lyes', 'Mahir', 'Mahmood', 'Mahomet', 'Majed', 'Majid', 'Malik',
    'Mansur', 'Marid', 'Mashaal', 'Masud', 'Medhi', 'Mohamad', 'Mohamed',
    'Mohamet', 'Mohammad', 'Mohammed', 'Mostafa', 'Moukib', 'Mourad',
    'Moussa', 'Mubarak', 'Mudawar', 'Muhunnad', 'Mukhtar', 'Musa', 'Mustafa',
    'Myron', 'Nabil', 'Nadir', 'Naif', 'Najee', 'Najjar', 'Nas', 'Nasim',
    'Nasser', 'Nay', 'Nazir', 'Nen', 'Nibal', 'Nishan', 'Nuhad', 'Nuri',
    'Omar', 'Omer', 'Osman', 'Qabil', 'Qadim', 'Qadir', 'Qais', 'Qamar',
    'Qaseem', 'Qasim', 'Quasim', 'Qudamah', 'Rabi', 'Rachid', 'Rafi', 'Rafiq',
    'Raheem', 'Rahimat', 'Rahman', 'Rahul', 'Rakin', 'Rami', 'Rashaad',
    'Rashad', 'Rashid', 'Rauf', 'Rayyan', 'Reda', 'Reyhan', 'Rida', 'Rimon',
    'Riyad', 'Sabir', 'Saddam', 'Sadik', 'Safin', 'Saghir', 'Sahir', 'Said',
    'Sak', 'Salah', 'Saleem', 'Salman', 'Sami', 'Samien', 'Samir', 'Samman',
    'Sarni', 'Sayed', 'Shafiq', 'Shahar', 'Shakar', 'Shakir', 'Shareef',
    'Sharif', 'Shunnar', 'Siraj', 'Smain', 'Sofiane', 'Suhayb', 'Suleiman',
    'Tahar', 'Tahir', 'Talal', 'Tamir', 'Tarafah', 'Tareec', 'Tareq', 'Tarif',
    'Tariq', 'Taweel', 'Taysir', 'Ubadah', 'Ubaid', 'Umar', 'Usamah',
    'Uthman', 'Wafiyy', 'Wahib', 'Walid', 'Yacine', 'Yacoub', 'Yanis',
    'Yardan', 'Yasin', 'Yasir', 'Yassin', 'Yazid', 'Yervant', 'Yousef',
    'Youssef', 'Yusuf', 'Zafar', 'Zafir', 'Zahi', 'Zahid', 'Zahir', 'Zahur',
    'Zaid', 'Zaim', 'Zaki', 'Zakiyah', 'Ziyan', 'Zuthimalin'];
  const nm2 = ['Aarfah', 'Abella', 'Abia', 'Abra', 'Adalia', 'Adara', 'Adiba',
    'Adila', 'Adira', 'Adiva', 'Aida', 'Aiesha', 'Ain', 'Aisha', 'Aishah',
    'Akila', 'Akilah', 'Alda', 'Alea', 'Alhena', 'Alima', 'Alimaia',
    'Altaira', 'Amala', 'Amana', 'Amany', 'Ameena', 'Ameenah', 'Amena',
    'Amiera', 'Amineh', 'Amira', 'Amirah', 'Anahid', 'Anan', 'Ananda',
    'Anisa', 'Annam', 'Annissa', 'Anoush', 'Ansariah', 'Asha', 'Ashia',
    'Asia', 'Asima', 'Atalaya', 'Atia', 'Atifa', 'Atiya', 'Ayah', 'Ayda',
    'Azhar', 'Azima', 'Aziza', 'Azizah', 'Azize', 'Azra', 'Bahira', 'Baraka',
    'Basimah', 'Basira', 'Beulah', 'Cala', 'Camilia', 'Cantara', 'Cari',
    'Carine', 'Carna', 'Chaka', 'Dalia', 'Damali', 'Eman', 'Fadila',
    'Fadilah', 'Fairuza', 'Faiza', 'Farah', 'Fareeda', 'Farhana', 'Farida',
    'Fariha', 'Farrah', 'Fathia', 'Fatima', 'Fatimah', 'Fatina', 'Fayza',
    'Gazala', 'Ghada', 'Habiba', 'Hadil', 'Hadiya', 'Hadya', 'Haifa', 'Hala',
    'Halah', 'Hamia', 'Hana', 'Harika', 'Hasna', 'Heba', 'Helima', 'Iamar',
    'Imane', 'Inara', 'Ismahane', 'Jala', 'Jamelia', 'Jasmeen', 'Jasmin',
    'Jayla', 'Jazmynn', 'Jehan', 'Jemima', 'Jena', 'Jumanah', 'Kadira',
    'Kahlilia', 'Kalila', 'Kalilah', 'Karima', 'Karimah', 'Karyan', 'Kayla',
    'Kedma', 'Ketifa', 'Khadijah', 'Khalida', 'Khalidah', 'Khalila', 'Lakia',
    'Lamis', 'Lamya', 'Latifa', 'Mahala', 'Mahalah', 'Mahlah', 'Maisah',
    'Maja', 'Majida', 'Maleka', 'Maliha', 'Malika', 'Manaar', 'Manal',
    'Manar', 'Maya', 'Maysa', 'Maysun', 'Medina', 'Melek', 'Meriem', 'Mimi',
    'Mouna', 'Muna', 'Munira', 'Nabila', 'Nadda', 'Nadia', 'Nadira', 'Naf',
    'Naida', 'Naimah', 'Najila', 'Najwa', 'Natara', 'Nawal', 'Nazirah',
    'Nedaa', 'Nenet', 'Nimah', 'Nina', 'Noura', 'Noya', 'Nudar', 'Nuray',
    'Nyela', 'Ohanna', 'Qadira', 'Qistina', 'Qitarah', 'Qubilah', 'Rahi',
    'Rahimateh', 'Raja', 'Rana', 'Rasha', 'Rashida', 'Rayya', 'Rima', 'Rowa',
    'Sabira', 'Sabirah', 'Sabiya', 'Sabra', 'Sadah', 'Sadira', 'Safa',
    'Saffron', 'Safia', 'Safiwah', 'Sagirah', 'Sahar', 'Saida', 'Saidah',
    'Sakina', 'Saleema', 'Salima', 'Salimah', 'Salome', 'Salva', 'Samar',
    'Sameh', 'Samia', 'Samira', 'Samirah', 'Sana', 'Saniyah', 'Sara', 'Sarah',
    'Saree', 'Selima', 'Selma', 'Semah', 'Shadia', 'Shahira', 'Shamara',
    'Shamra', 'Sharifah', 'Sheba', 'Shunnareh', 'Siham', 'Siran', 'Siroun',
    'Somar', 'Sophia', 'Sumayah', 'Sumehra', 'Tahira', 'Tahirah', 'Talihah',
    'Tameka', 'Thana', 'Thara', 'Thuraya', 'Ulema', 'Ulfah', 'Ulima',
    'Wahiba', 'Walida', 'Wasima', 'Yasmeen', 'Yasmin', 'Yasmina', 'Yasmine',
    'Yusra', 'Zada', 'Zafina', 'Zahara', 'Zahirah', 'Zaida', 'Zalika',
    'Zamira', 'Zarifa', 'Zariya', 'Zarola', 'Zayn', 'Zaynah', 'Zia', 'Ziazan',
    'Zohra', 'Zubaida', 'Zudora', 'Zuleika', 'Zuleyka'];
  const nm3 = ['Abbas', 'Aboulker', 'Agha', 'Allouache', 'Alloula', 'Amirouche',
    'Ammar', 'Amrani', 'Amrouche', 'Arkoun', 'Arkour', 'Aruj', 'Atlan',
    'Attali', 'Ayache', 'Aym', 'Azoulay', 'Bacri', 'Beghal', 'Behired',
    'Belghoul', 'Belkacem', 'Belloumi', 'Belmokhtar', 'Belounis', 'Benayoun',
    'Benboulaid', 'Benbrika', 'Benchabla', 'Bendjedid', 'Benguigui', 'Benida',
    'Benita', 'Benlabed', 'Bennabi', 'Bensoussan', 'Benyamina', 'Benzema',
    'Bitat', 'Bouali', 'Bouamama', 'Bouchiba', 'Boudiaf', 'Boudjedra',
    'Boulala', 'Boulmerka', 'Boumedienne', 'Bouteflika', 'Boutella',
    'Brahimi', 'Chabani', 'Chabat', 'Chaou', 'Chouikh', 'Derrida', 'Didouche',
    'Dilem', 'Djaballah', 'Djaout', 'Djebar', 'Djermouni', 'Doumaz',
    'Ebdelkader', 'Fahas', 'Fanon', 'Fellag', 'Feraoun', 'Fergani', 'Gamouh',
    'Guerouabi', 'Habib', 'Hadj', 'Halimi', 'Hamidou', 'Hamina', 'Hamou',
    'Hanin', 'Hannachi', 'Hanoune', 'Harbi', 'Harrachi', 'Hasnaoui', 'Hasni',
    'Hmida', 'Kateb', 'Kerbouche', 'Kermali', 'Khadra', 'Khalef', 'Khelfaoui',
    'Kouiret', 'Ksentini', 'Lakhdar', 'Laroussi', 'Litim', 'Madani', 'Madjer',
    'Makhloufi', 'Malek', 'Mami', 'Mammeri', 'Massi', 'Mekhloufi', 'Menouar',
    'Messaoudi', 'Mimouni', 'Morceli', 'Mouhandiz', 'Nahnah', 'Nakache',
    'Nasri', 'Ouyahia', 'Partyka', 'Rachedi', 'Ramdane', 'Ressam', 'Rimitti',
    'Saadi', 'Sadi', 'Sahnoun', 'Salem', 'Salhi', 'Seghir', 'Sidi',
    'Skandrani', 'Slimani', 'Solal', 'Taha', 'Tannoudji', 'Tarik', 'Tifour',
    'Timsit', 'Wadoud', 'Yacine', 'Youcef', 'Zabana', 'Zakaria', 'Zekkal',
    'Zerhouni', 'Zeroual', 'Ziani', 'Zidane'];
  {
    rnd2 = Math.floor(Math.random() * nm3.length);
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = `${nm2[rnd]} ${nm3[rnd2]}`;
      nm2.splice(rnd, 1);
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = `${nm1[rnd]} ${nm3[rnd2]}`;
      nm1.splice(rnd, 1);
    }
    nm3.splice(rnd2, 1);
    return names;
  }
}
