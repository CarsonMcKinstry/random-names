export default function yorubas() {
  let names;
  let rnd;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Abimbola (born wealthy)', 'Abiodun (born on a festival)',
    'Abiola (wealth has been born)', 'Abioye (born into royalty)',
    'Abioye (we have royalty)', 'Ade (crown)',
    'Adebayo (crown has met wealth)', 'Adebayo (crown has met with joy)',
    'Adebimpe (crown is complete)', 'Adebisi (we added to the crown)',
    'Adebowale (crown has come home)', 'Adeboye (crown has brought title)',
    'Adedamola (crowm has mixed with wealth)', 'Adedayo (crown becomes joy)',
    'Adedayo (the crown turned to joy)', 'Adedeji (the crown has become two)',
    'Adegoke (crown has been exalted)',
    'Adelaja (the king settled this fight)', 'Adelomo (a child is a crown)',
    'Ademola (crown knows wealth)', 'Ademuyiwa (the crown brought this)',
    'Aderounke (crown has one to pamper with)',
    'Adesanya (rewards my suffering)',
    'Adetokunbo (crown came from over the sea)',
    'Adetola (crown can be measured to wealth)',
    'Adewale (crown has come home)', 'Adewunmi (I desire the crown)',
    'Adeyemi (I\'m worth of the crown)', 'Adisa (one who is clear)',
    'Afolabi (born into wealth)', 'Afolabi (born with wealth)',
    'Akande (first born)', 'Akanni (the first one)',
    'Akintoye (strength is enough)', 'Amadi (destined to die at birth)',
    'Anituke (taken care of from conception)',
    'Anuoluwaop (Abundance of God\'s mercies)',
    'Anuoluwaposi (Increase of God\'s mercies)', 'Ayo (joy)',
    'Ayodele (joy has come home)', 'Ayokunle (joy fills the home)',
    'Ayokunumi (overwhelmed with wealth)', 'Ayomide (joy has arrived)',
    'Ayoola (joy of wealth)', 'Ayotola (joy\'s enough wealth)',
    'Ayotunde (joy returned)', 'Babajide (father has come to life again)',
    'Babajide (father has returned)', 'Babatunde (father has returned)',
    'Babatunde (father returned)', 'Bamidele (follow me home)',
    'Bidemi (born awaiting me)', 'Boluwatife (will of God)',
    'Dayo (joy arrives)', 'Durosinmi (wait to rest)',
    'Abidemi (born during father\'s absence)',
    'Ekundayo (sorrow becomes joy)', 'Eniola (person of wealth)',
    'Enitan (person of story)', 'Enitan (person with a history)',
    'Fiayosemi (mold me with joy)', 'Folami (respect and honor me)',
    'Gbohunmi (God heard me cry)', 'Gbolahun (show the wealth)',
    'Gboyega (carry the glory high)', 'Idowu (born after twins)',
    'Ifedapo (love came together)', 'Ifedayo (love turned to joy)',
    'Jibola (child who woke up with wealth)', 'Kayin (celebrated child)',
    'Kayode (he brought joy)', 'Kolapo (wealth in abundance)',
    'Kolawole (wealth has come)', 'Mayowa (brings joy)',
    'Moniade (I have the crown)', 'Monisola (I obtained wealth)',
    'Morounkola (someone to help gather wealth)',
    'Numilekunoluwa (clean my tears Lord)', 'Olabode (wealth returns)',
    'Oladele (wealth has reached home)', 'Olaitan (eternal wealth)',
    'Olakunle (abundance of wealth at home)', 'Olamilekan (my wealth grew)',
    'Olamilekan (wealth has increased)', 'Olanrewaju (wealth is the future)',
    'Olanrewaju (wealth\'s moving forward)',
    'Olaonipekun (wealth\'s endless)', 'Olarenrewaju (wealth in the future)',
    'Olashalew (wealth chose a place to go)',
    'Olasinbo (wealth\'s on the way)', 'Olatimbo (my wealth\'s on its way)',
    'Olatunji (wealth woke up again)', 'Olawunmi (I desire wealth)',
    'Olayemi (I\'m worthy of wealth)', 'Olayinka (surrounded with wealth)',
    'Ololade (wealthy one has come)', 'Olorunyomi (God saved me)',
    'Olufemi (God loves me)', 'Olufunke (God has cared for)',
    'Olufunmilayo (God gave me joy)', 'Olufunmilola (God gives me wealth)',
    'Olugbenga (God raised me up)', 'Olujimi (given by God)',
    'Olukayode (God brings happiness)', 'Olumide (God has come)',
    'Oluwabukunola (God added to the wealth)',
    'Oluwabunmi (God has provided for me)',
    'Oluwabusolami (God added to my wealth)',
    'Oluwadamilare (God has justified me)',
    'Oluwadamilola (God reward me with wealth)',
    'Oluwadurotimi (God will stand by me)', 'Oluwafemi (God wants me)',
    'Oluwafeyisayo (God turned this gift into joy)',
    'Oluwafunmilola (God gave me wealth)',
    'Oluwafuntan (God has given everything)',
    'Oluwagbemileke (God lifted me high)', 'Oluwagbenga (God lifted me up)',
    'Oluwakanmi (God has touched me)',
    'Oluwakanyinsola (God sweetened my wealth)',
    'Oluwakayode (God has brought joy)',
    'Oluwakemi (God\'s taking care of me)', 'Oluwalanni (we have God)',
    'Oluwamuyiwa (God brought this one)', 'Oluwarantimi (God remembered me)',
    'Oluwaremilekun (God dried my tears)', 'Oluwasanmi (God rewarded me)',
    'Oluwasegun (God has conquered)', 'Oluwasegun (God\'s victorious)',
    'Oluwaseun (thank you Lord)', 'Oluwaseun (we thank God)',
    'Oluwaseyi (God made this)', 'Oluwasola (God made wealth)',
    'Oluwatobi (God is great)', 'Oluwatoke (God\'s to be adored)',
    'Oluwatomiwa (God searched for me)',
    'Oluwatoniyi (God\'s worthy of praise)',
    'Oluwatope (God\'s to be praised)', 'Oluwatoyin (God\'s to be praised)',
    'Oluwatunmise (God regenerated me)', 'Oluwayemisi (God honors me)',
    'Oluwayemisi (I\'m understanding God more)', 'Oluwole (God has entered)',
    'Omobolaji (child born with wealth)',
    'Omobolanle (a child who met wealth at home)',
    'Omobolanle (child has met wealth at home)',
    'Omodele (child has come home)', 'Omolayo (a child is joy)',
    'Omotanwa (the child we searched for)',
    'Omotayo (child worth rejoicing for)',
    'Omoteleola (child has stepped into wealth)',
    'Omotunde (the child is back)', 'Omowale (child has come home)',
    'Omowunmi (I desire a child)', 'Omoyeni (we\'re worthy of a child)',
    'Opeyemi (I should give praise)', 'Otegbade (conspiracy won the crown)',
    'Oyindamola (honey mixed with wealth)',
    'Pamilekunayo (cause me tears of joy)',
    'Sangodele (God of thunder has come home)',
    'Similoluwa (rest in the Lord)', 'Sunbola (slepts and had wealth)',
    'Sunkanmi (draw close to me)', 'Tejumola (aims to gain wealth)',
    'Teleayo (lay ground for joy)', 'Teleola (lay ground for wealth)',
    'Temidare (mine turned good)', 'Temidayo (mine has turned to joy)',
    'Temilade (mine is the crown)', 'Temiloluwa (God is mine)',
    'Temitope (enough to give thanks)', 'Temitope (mine\'s worthy of praise)',
    'Teniayo (foundation of joy)', 'Teniola (foundation of wealth)',
    'Tiwalade (crown is ours)', 'Tokunbo (born in my absence)',
    'Toluwalope (god\'s to be praised)',
    'Yejide (mother has come back to life)', 'Yetunde (mother has come back)',
    'Yewande (mother returned)'];
  const nm2 = ['Abeni (we asked for her)', 'Abimbola (born wealthy)',
    'Abiodun (born on a festival)', 'Abiola (wealth has been born)',
    'Abioye (we have royalty)', 'Ade (crown)', 'Adebimpe (crown is complete)',
    'Adebisi (we added to the crown)', 'Adebola (the crown met wealth)',
    'Adebowale (the crown came home)', 'Adeboye (crown has brought title)',
    'Ademuyiwa (the crown brought this)',
    'Adenika (crown needs to be pampered)', 'Adeola (crown of wealth)',
    'Aderounke (crown has one to pamper with)',
    'Adesanya (rewards my suffering)',
    'Adetokunbo (crown came from over the sea)',
    'Adetola (crown can be measured to wealth)',
    'Adetutu (the crown is gentle and patient)',
    'Adewemimo (the crown washed me clean)', 'Adewunmi (I desire the crown)',
    'Adeyemi (I\'m worth of the crown)', 'Akanni (the first one)',
    'Akintoye (strength is enough)', 'Alaba (second child after twins)',
    'Anituke (taken care of from conception)',
    'Anuoluwaop (Abundance of God\'s mercies)',
    'Anuoluwaposi (Increase of God\'s mercies)', 'Ayo (joy)',
    'Ayodele (joy came home)', 'Ayokunle (joy filled the home)',
    'Ayokunumi (overwhelmed with wealth)', 'Ayomide (my joy has arrived)',
    'Ayoola (joy of wealth)', 'Ayotola (joy\'s enough wealth)',
    'Ayotunde (joy has returned)', 'Ayotundun (joy is sweet)',
    'Bidemi (born awaiting me)', 'Bolanle (finds wealth at home)',
    'Boluwatife (will of God)', 'Bosede (born on Sunday)',
    'Dada (curly hair)', 'Dayo (joy arrives)',
    'Ekundayo (sorrow becomes joy)', 'Eniola (person of wealth)',
    'Eniola (person with wealth)', 'Enitan (person of story)',
    'Enitan (person with a history)', 'Fehintola (returned wealth)',
    'Feyisayo (use as wealth)', 'Fiayosemi (mold me with joy)',
    'Folake (take care with wealth)', 'Folami (respect and honor me)',
    'Fowoke (pampered with wealth)', 'Gbemisola (God lifted me into wealth)',
    'Gbemisola (carry me into wealth)', 'Gbohunmi (God heard me cry)',
    'Gbolahun (show the wealth)', 'Gboyega (carry the glory high)',
    'Ide (love)', 'Idowu (born after twins)', 'Ifedapo (love came together)',
    'Ifedayo (love turned to joy)', 'Ifetundun (love is sweet)',
    'Ige (born feet first)', 'Iretilouwa (waiting on God)',
    'Itunu (consolation)', 'Iyabo (mother has come)',
    'Jaiyesimi (let the world rest)',
    'Jibola (child who woke up with wealth)', 'Kayin (celebrated child)',
    'Kolapo (wealth in abundance)', 'Kolawole (wealth has come)',
    'Mayowa (brings joy)', 'Modupe (I praise God)',
    'Mojisola (I awoke into wealth)', 'Mojisola (wake up to wealth)',
    'Moniade (I have the crown)', 'Monifa (I\'m lucky)',
    'Monisola (I obtained wealth)', 'Morenike (I\'ve got one to pamper)',
    'Morounkola (someone to help gather wealth)',
    'Numilekunoluwa (clean my tears Lord)',
    'Obafunke (the King gave me to take care of)',
    'Olabimpe (wealth made me complete)', 'Oladele (wealth has reached home)',
    'Olaitan (eternal wealth)', 'Olakunle (abundance of wealth at home)',
    'Olamide (my wealth arrived)', 'Olasinbo (wealth\'s on the way)',
    'Olatimbo (my wealth\'s on its way)', 'Olawunmi (I desire wealth)',
    'Olayemi (I\'m worthy of wealth)', 'Olayinka (surrounded with wealth)',
    'Olayinka (wealth surrounds me)', 'Ololade (wealthy one has come)',
    'Olorunyomi (God saved me)', 'Olubunmi (gift of God)',
    'Olufemi (God loves me)', 'Olufunke (God has cared for)',
    'Olufunmilayo (God gave me joy)', 'Olufunmilola (God gives me wealth)',
    'Olugbenga (God raised me up)', 'Oluwabukunola (God added to the wealth)',
    'Oluwabunmi (God has provided for me)',
    'Oluwabusolami (God added to my wealth)',
    'Oluwadamilare (God has justified me)',
    'Oluwadamilola (God reward me with wealth)',
    'Oluwadurotimi (God will stand by me)', 'Oluwafemi (God wants me)',
    'Oluwafeyisayo (God turned this gift into joy)',
    'Oluwafunke (God gave me to take care of)',
    'Oluwafunmilola (God gave me wealth)',
    'Oluwafuntan (God has given everything)',
    'Oluwagbemileke (God lifted me high)', 'Oluwagbenga (God lifted me up)',
    'Oluwakanyinsola (God sweetened my wealth)',
    'Oluwakemi (God\'s taking care of me)', 'Oluwalanni (we have God)',
    'Oluwamisimi (God breathed on me)', 'Oluwamuyiwa (God brought this one)',
    'Oluwarantimi (God remembered me)', 'Oluwaremilekun (God dried my tears)',
    'Oluwasanmi (God rewarded me)', 'Oluwasegun (God has conquered)',
    'Oluwasegun (God\'s victorious)', 'Oluwaseun (thank you Lord)',
    'Oluwaseun (we thank God)', 'Oluwaseyi (God made this)',
    'Oluwasola (God made wealth)', 'Oluwatobi (God is great)',
    'Oluwatoke (God\'s to be adored)', 'Oluwatomiwa (God searched for me)',
    'Oluwatoniyi (God\'s worthy of praise)',
    'Oluwatope (God\'s to be praised)', 'Oluwatoyin (God\'s to be praised)',
    'Oluwatunmise (God regenerated me)', 'Oluwayemisi (God honors me)',
    'Oluwayemisi (I\'m understanding God more)', 'Oluwole (God has entered)',
    'Omobolaji (child born with wealth)',
    'Omobolanle (child has met wealth at home)',
    'Omobolanle (child who met wealth at home)',
    'Omodele (child has come home)', 'Omolara (a child is family)',
    'Omolayo (a child is joy)', 'Omotanwa (the child we searched for)',
    'Omotayo (child worth rejoicing for)',
    'Omoteleola (child has stepped into wealth)',
    'Omotunde (the child is back)', 'Omowale (child has come home)',
    'Omowunmi (I desire a child)', 'Omoyeni (we\'re worthy of a child)',
    'Oni (born in sacred abode)', 'Opeyemi (I should give praise)',
    'Orisabunmi (the gods have provided for me)',
    'Oyindamola (honey mixed with wealth)',
    'Pamilekunayo (cause me tears of joy)',
    'Rinsiouluwa (soaked in the Lord)', 'Shanumi (have mercy on me)',
    'Similola (rest in wealth)', 'Similoluwa (rest in the Lord)',
    'Simisola (rest in wealth)', 'Sunbola (slepts and had wealth)',
    'Tejumola (aims to gain wealth)', 'Teleayo (lay ground for joy)',
    'Teleola (lay ground for wealth)', 'Temidare (mine turned good)',
    'Temidayo (mine has turned to joy)', 'Temilade (mine is the crown)',
    'Temiloluwa (God is mine)', 'Temitope (enough to give thanks)',
    'Temitope (mine\'s worthy of praise)', 'Teniayo (foundation of joy)',
    'Teniola (foundation of wealth)', 'Titilayo (eternal happiness)',
    'Titilayo (joy is forever)', 'Titilola (wealth is forever)',
    'Titilope (grateful forever)', 'Tiwalade (crown is ours)',
    'Tokunbo (born in my absence)', 'Toluwalope (god\'s to be praised)',
    'Yejide (image of the mother)', 'Yejide (mother has come back to life)',
    'Yetunde (mother has come back)', 'Yewande (mother has returned)',
    'Yewande (mother returned)'];
  const nm3 = ['Abimbola (born wealthy)', 'Abiodun (born on a festival)',
    'Abiola (wealth has been born)', 'Abioye (we have royalty)',
    'Ade (crown)', 'Adebimpe (crown is complete)',
    'Adebisi (we added to the crown)', 'Adebola (crown met wealth)',
    'Adebowale (crown came home)', 'Adeboye (crown has brought title)',
    'Adedayo (crown becomes joy)', 'Ademuyiwa (the crown brought this)',
    'Aderounke (crown has one to pamper with)',
    'Adesanya (rewards my suffering)',
    'Adetokunbo (crown came from over the sea)',
    'Adetola (crown can be measured to wealth)',
    'Adewunmi (I desire the crown)', 'Adeyemi (I\'m worth of the crown)',
    'Akanni (the first one)', 'Akintoye (strength is enough)',
    'Anituke (taken care of from conception)',
    'Anuoluwaop (Abundance of God\'s mercies)',
    'Anuoluwaposi (Increase of God\'s mercies)', 'Ayo (joy)',
    'Ayodele (joy came home)', 'Ayokunumi (overwhelmed with wealth)',
    'Ayomide (my joy has arrived)', 'Ayoola (joy of wealth)',
    'Ayotola (joy\'s enough wealth)', 'Ayotunde (joy has returned)',
    'Bidemi (born awaiting me)', 'Boluwatife (will of God)',
    'Dayo (joy arrives)', 'Ekundayo (sorrow becomes joy)',
    'Eniola (person of wealth)', 'Enitan (person of story)',
    'Enitan (person with a history)', 'Fiayosemi (mold me with joy)',
    'Folami (respect and honor me)', 'Gbohunmi (God heard me cry)',
    'Gbolahun (show the wealth)', 'Gboyega (carry the glory high)',
    'Idowu (born after twins)', 'Ifedapo (love came together)',
    'Ifedayo (love turned to joy)', 'Jibola (child who woke up with wealth)',
    'Kayin (celebrated child)', 'Kolapo (wealth in abundance)',
    'Kolawole (wealth has come)', 'Mayowa (brings joy)',
    'Moniade (I have the crown)', 'Monisola (I obtained wealth)',
    'Morounkola (someone to help gather wealth)',
    'Numilekunoluwa (clean my tears Lord)',
    'Oladele (wealth has reached home)', 'Olaitan (eternal wealth)',
    'Olakunle (abundance of wealth at home)',
    'Olasinbo (wealth\'s on the way)', 'Olatimbo (my wealth\'s on its way)',
    'Olawunmi (I desire wealth)', 'Olayemi (I\'m worthy of wealth)',
    'Olayinka (surrounded with wealth)', 'Ololade (wealthy one has come)',
    'Olorunyomi (God saved me)', 'Olufemi (God loves me)',
    'Olufunke (God has cared for)', 'Olufunmilayo (God gave me joy)',
    'Olufunmilola (God gives me wealth)', 'Olugbenga (God raised me up)',
    'Oluwabukunola (God added to the wealth)',
    'Oluwabunmi (God has provided for me)',
    'Oluwabusolami (God added to my wealth)',
    'Oluwadamilare (God has justified me)',
    'Oluwadamilola (God reward me with wealth)',
    'Oluwadurotimi (God will stand by me)', 'Oluwafemi (God wants me)',
    'Oluwafeyisayo (God turned this gift into joy)',
    'Oluwafunmilola (God gave me wealth)',
    'Oluwafuntan (God has given everything)',
    'Oluwagbemileke (God lifted me high)', 'Oluwagbenga (God lifted me up)',
    'Oluwakanyinsola (God sweetened my wealth)',
    'Oluwakemi (God\'s taking care of me)', 'Oluwalanni (we have God)',
    'Oluwamuyiwa (God brought this one)', 'Oluwarantimi (God remembered me)',
    'Oluwaremilekun (God dried my tears)', 'Oluwasanmi (God rewarded me)',
    'Oluwasegun (God has conquered)', 'Oluwasegun (God\'s victorious)',
    'Oluwaseun (thank you Lord)', 'Oluwaseun (we thank God)',
    'Oluwaseyi (God made this)', 'Oluwasola (God made wealth)',
    'Oluwatobi (God is great)', 'Oluwatoke (God\'s to be adored)',
    'Oluwatomiwa (God searched for me)',
    'Oluwatoniyi (God\'s worthy of praise)',
    'Oluwatope (God\'s to be praised)', 'Oluwatoyin (God\'s to be praised)',
    'Oluwatunmise (God regenerated me)', 'Oluwayemisi (God honors me)',
    'Oluwayemisi (I\'m understanding God more)', 'Oluwole (God has entered)',
    'Omobolaji (child born with wealth)',
    'Omobolanle (child has met wealth at home)',
    'Omobolanle (child who met wealth at home)',
    'Omodele (child has come home)', 'Omolayo (a child is joy)',
    'Omotanwa (the child we searched for)',
    'Omotayo (child worth rejoicing for)',
    'Omoteleola (child has stepped into wealth)',
    'Omotunde (the child is back)', 'Omowale (child has come home)',
    'Omowunmi (I desire a child)', 'Omoyeni (we\'re worthy of a child)',
    'Opeyemi (I should give praise)', 'Oyindamola (honey mixed with wealth)',
    'Pamilekunayo (cause me tears of joy)', 'Similoluwa (rest in the Lord)',
    'Sunbola (slepts and had wealth)', 'Tejumola (aims to gain wealth)',
    'Teleayo (lay ground for joy)', 'Teleola (lay ground for wealth)',
    'Temidare (mine turned good)', 'Temidayo (mine has turned to joy)',
    'Temilade (mine is the crown)', 'Temiloluwa (God is mine)',
    'Temitope (enough to give thanks)', 'Temitope (mine\'s worthy of praise)',
    'Teniayo (foundation of joy)', 'Teniola (foundation of wealth)',
    'Tiwalade (crown is ours)', 'Tokunbo (born in my absence)',
    'Toluwalope (god\'s to be praised)',
    'Yejide (mother has come back to life)', 'Yetunde (mother has come back)',
    'Yewande (mother returned)'];
  {
    if (type === 1) {
      rnd = Math.floor(Math.random() * nm2.length);
      names = nm2[rnd];
    } else if (type === 2) {
      rnd = Math.floor(Math.random() * nm3.length);
      names = nm3[rnd];
    } else {
      rnd = Math.floor(Math.random() * nm1.length);
      names = nm1[rnd];
    }
    return names;
  }
}
