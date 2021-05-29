import { sample } from 'lodash-es';

export default function moroccans() {
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abdelaziz', 'Abdelhak', 'Abdelhamid', 'Abdelilah', 'Abdelkader', 'Abdelkarim', 'Abdellah', 'Abdellatif', 'Abdelmajid', 'Abderrahim', 'Abderrahman', 'Abdeslam', 'Abdullah', 'Adil', 'Ahmed', 'Ali', 'Amaniyy', 'Amine', 'Amrane', 'Aqil', 'Arib', 'Arwarh', 'Asil', 'Askari', 'Attiq', 'Awadah', 'Ayham', 'Ayoub', 'Ayser', 'Aziz', 'Baariq', 'Barkad', 'Baz', 'Bilal', 'Boutaje', 'Brahim', 'Bushr', 'Dirar', 'Diwan', 'Driss', 'Dulamah', 'El Bachir', 'El Hassan', 'El Houari', 'El Madani', 'El Mahi', 'Elias', 'Faqih', 'Farid', 'Fayaaz', 'Fayyad', 'Fouad', 'Ghali', 'Girgis', 'Habbab', 'Hadir', 'Hakem', 'Hamas', 'Hamdan', 'Hamid', 'Hamza', 'Hassan', 'Hayyan', 'Hicham', 'Ibrahim', 'Ikrimah', 'Isma\'il', 'Ismail', 'Iyas', 'Jabalah', 'Jalal', 'Jamal', 'Jamaldine', 'Jaul', 'Jawdah', 'Jibran', 'Jubair', 'Kadeen', 'Karim', 'Khalid', 'Lahcen', 'Lubaid', 'Marzuq', 'Mhamed', 'Mimoun', 'Mohamed', 'Mohammed', 'Mojiz', 'Moosa', 'Mostafa', 'Moulham', 'Mourad', 'Muaz', 'Mujahid', 'Muslih', 'Mustapha', 'Muwaffaq', 'Noureddine', 'Omar', 'Ouahid', 'Quds', 'Quraishi', 'Rachid', 'Rasil', 'Ridouane', 'Rifky', 'Ruhul', 'Sadid', 'Safwah', 'Said', 'Salamah', 'Samir', 'Shihab', 'Simohamed', 'Sofian', 'Sufyan', 'Suhaim', 'Tanan', 'Tarik', 'Tazim', 'Thamir', 'Thawab', 'Waliedine', 'Waqqas', 'Wasif', 'Wasim', 'Yassine', 'Younes', 'Youssef', 'Youssouf', 'Zakwan', 'Zaky', 'Zamen', 'Zarif', 'Zeyn', 'Ziaul-Haq', 'Zitane', 'Zubayr'];
  const nm2 = ['Aalia', 'Aaliyah', 'Abal', 'Achoura', 'Ahlam', 'Aicha', 'Aider', 'Aisha', 'Alina', 'Alzahra', 'Amal', 'Amara', 'Amaya', 'Amelle', 'Amina', 'Aminah', 'Amira', 'Amira ', 'Amsah', 'Amurra', 'Anaan', 'Anamar', 'Anisha', 'Aqilah', 'Areebah', 'Areej', 'Arifa', 'Asala', 'Ashwaq', 'Asrar', 'Athir', 'Atyaf', 'Ayat', 'Ayesha', 'Aysha', 'Azeeza', 'Azhar', 'Aziza', 'Azmiyah', 'Azza', 'Badria', 'Badriya', 'Bahae', 'Balqis', 'Bassima', 'Batoul', 'Baysan', 'Benazir', 'Bisar', 'Bouchra', 'Buhjah', 'Busr', 'Chafika', 'Chahida', 'Chahrazad', 'Chama', 'Charifa', 'Chaymaa', 'Chaymae', 'Cherifa', 'Chifa', 'Choukria', 'Choumicha', 'Dahbia', 'Daouia', 'Darifa', 'Delilah', 'Dua', 'Dunyana', 'Durya', 'Enas', 'Fadeelah', 'Fadma', 'Fahimah', 'Fahime', 'Fairouz', 'Farida', 'Farizah', 'Fatema', 'Fathiyah', 'Fatiha', 'Fatima', 'Fatna', 'Fattouch', 'Fawz', 'Fawza', 'Fayha', 'Fikriyah', 'Firdoos', 'Fiza', 'Furat', 'Futun', 'Gadwa', 'Gawaher', 'Gehan', 'Ghaada', 'Ghaaliya', 'Gharam', 'Ghariba', 'Ghaydaa', 'Ghazal', 'Ghina', 'Gohar', 'Habeeba', 'Habiba', 'Hachmia', 'Hadeel', 'Hafida', 'Hajar', 'Hakima', 'Halima', 'Hameeda', 'Hamida', 'Hana', 'Hanan', 'Hanane', 'Haniya', 'Hasbia', 'Hassana', 'Hassiba', 'Hayat', 'Heya', 'Hikma', 'Hiyam', 'Hlalia', 'Houria', 'Hudun', 'Huriya', 'Ikram', 'Iman', 'Imane', 'Islamia', 'Isra', 'Jamila', 'Jasmine', 'Jawaher', 'Jihane', 'Juman', 'Jumina', 'Kamar', 'Karima', 'Khadija', 'Khadisha', 'Khadra', 'Khalila', 'Khatija', 'Laila', 'Lamyaa', 'Latifa', 'Layanah', 'Leila', 'Lila', 'Lina', 'Loubna', 'Madiha', 'Mahdia', 'Malika', 'Mansura', 'Mariam', 'Maryam', 'Masuda', 'Menena', 'Mennana', 'Michkat', 'Mimount', 'Mina', 'Minhat', 'Moufida', 'Mumina', 'Mutah', 'Nabila', 'Nadah', 'Nadia', 'Nahila', 'Naima', 'Najat', 'Najiha', 'Namira', 'Naqicha', 'Nasra', 'Nawar', 'Naziha', 'Nejlae', 'Nejlet', 'Nesma', 'Nezha', 'Nouria', 'Nurhayat', 'Nuzha', 'Nyla', 'Ouarda', 'Qadr', 'Rabia', 'Rabya', 'Racha', 'Rachida', 'Rafika', 'Raghad', 'Rahida', 'Rahma', 'Raisa', 'Rashida ', 'Reema ', 'Reshma', 'Ritwan', 'Rochdiya', 'Saadet', 'Saadia', 'Sabreen', 'Sabriye', 'Safiyah', 'Safura', 'Saida', 'Saira', 'Salma', 'Samaira', 'Samara', 'Samima', 'Samira', 'Sanaa', 'Sanae', 'Sara', 'Sayeda', 'Shabana', 'Shadin', 'Shahida', 'Shanaz', 'Shayma', 'Shenaz', 'Shukriya', 'Siham', 'Souad', 'Soulef', 'Soumaya', 'Sulayma', 'Summayyah', 'Tahani', 'Takama', 'Tamou', 'Tara', 'Thorya', 'Tirra', 'Tissam', 'Tunaruz', 'Ubaida', 'Waad', 'Wacila', 'Wadia', 'Wafiyah', 'Wala', 'Waliyah', 'Wedad', 'Widian', 'Wijdane', 'Xamira', 'Yamina', 'Yaram', 'Yasmin', 'Yasmina', 'Yasmine', 'Zahara', 'Zaheda', 'Zahidah', 'Zahra', 'Zairah', 'Zara', 'Zayna', 'Zhour', 'Zidana', 'Zinah', 'Zohra', 'Zuha', 'Zuheyra', 'Zuleika'];
  const nm3 = ['al-Jirari', 'al-Aziz', 'al-Ghumari', 'Guennoun', 'Laroui', 'Zrika', 'al-Jirari', 'Sahimi', 'Kilito', 'Said', 'Tazi', 'Serhane', 'Bouasria', 'Benali', 'Chaoui', 'Chatt', 'Jouiti', 'Tabbal', 'Khatibi', 'Torres', 'Ghallab', 'Taïa', 'Idrissi', 'Laabi', 'Benjelloun', 'Benjelloun', 'Belghiti', 'Bennani', 'Lahbibi', 'Benmansour', 'Jouahri', 'Hajji', 'El Moudden', 'al-Ghumari', 'al-Ghumari', 'al-Tayyeb', 'Abdessalam', 'Barakat', 'Benchemsi', 'Boukous', 'Bouzfour', 'Harrak', 'Joumari', 'Lemsih', 'Mejjati', 'Sefrioui', 'Toufiq', 'al-Madini', 'al-Buzidi', 'Azaykou', 'Bourequat', 'Haddani', 'Lmrabet', 'Siqli', 'ibn Qasim', 'El Hajjam', 'al-Fassi', 'Samie', 'Qamari', 'Trabelsi', 'Salem', 'Tawil', 'Ben Hamed', 'Chraïbi', 'El Khouri', 'El Meliani', 'Ksikes', 'El Maleh', 'Abécassis', 'Hocquard', 'Bendahan', 'Skali', 'al-Ansari', 'Diouri', 'Mernissi', 'Laroui', 'Rhissassi', 'Bikri', 'Zafrani', 'Ben Haddou', 'Ferhat', 'Bourkia', 'Toulali', 'Sinaceur', 'ibn al-Hassan', 'Marouazi', 'Mourad', 'Bennouna', 'Batma', 'Lalami', 'Baka', 'Abouzeid', 'Lahlou', 'Akalay', 'Kabbal', 'Elmandjra', 'Binebine', 'Tobji', 'Oufkir', 'al-Fassi', 'Akhrif', 'Ben Barka', 'Chafik', 'Choukri', 'Mrabet', 'Nedali', 'Raihani', 'Serghini', 'Sibari', 'Zafzaf', 'al-Jabri', 'Achaari', 'Akoujan', 'Tazi', 'El-Hababi', 'Lahbabi', 'Ben Abdelaziz', 'Bennis', 'Benzakour', 'Berrada', 'Daoud', 'El Haloui', 'El-Moustaoui', 'Hajuji', 'El Ouazzani', 'Ibrahim', 'Kaghat', 'Khammar', 'Sabbag', 'Sabila', 'Zniber', 'al-Habib', 'al-Harradi', 'al-Makki', 'al-Mokhtar', 'ibn Mohammed', 'ibn al-Hasan', 'Nissaboury', 'Hachim', 'n’Ait', 'Rabi', 'Barbery', 'Maadawi', 'Ayouch', 'Chafik', 'Yassine', 'El Hachmi', 'El Aoufi', 'Rhozali', 'Mounir', 'Benchemsi', 'El Khayat', 'Assaraf', 'Achtouk', 'Hajji', 'Leghlid', 'Yaktine', 'Menebhi', 'El-Ouadie', 'Bahéchar', 'Ben Jelloun', 'Seddiki', 'Allal', 'Saqqat', 'Oulehri', 'al-Wazzani', 'Lamrani', 'Fadel', 'Elalamy', 'Mansouri', 'Daoud', 'Ben Bouchta'];
  {
    if (type === 1) {
      names = `${sample(nm2)} ${sample(nm3)}`;
    } else {
      names = `${sample(nm1)} ${sample(nm3)}`;
    }
    return names;
  }
}
