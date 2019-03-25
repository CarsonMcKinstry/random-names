export default function bretonnias() {
  let rnd;
  let rnd2;
  let names;
  const type = Math.random() > 0.5 ? 0 : 1;
  const nm1 = ['Adam', 'Adenet', 'Adenin', 'Alain', 'Alardin', 'Albert', 'Aleamme', 'Aleaume', 'Alixandre', 'Almaurry', 'Amaury', 'Ambroisin', 'Ambroys', 'Ame', 'Ancelet', 'Andri', 'Andriet', 'Andry', 'Anthoine', 'Arnoul', 'Arnould', 'Arnoulet', 'Arnoullet', 'Arnoult', 'Artur', 'Aubelet', 'Aubert', 'Aubertin', 'Aubin', 'Audebert', 'Audenin', 'Audouin', 'Auffroy', 'Aufondet', 'Augé', 'Augustin', 'Aymon', 'Balthazar', 'Bastien', 'Baudet', 'Baudoin', 'Baudrain', 'Benard', 'Benedeit', 'Benoit', 'Bernard', 'Bernart', 'Berthelemy', 'Berthelmi', 'Berthelot', 'Bertin', 'Bertran', 'Binet', 'Blanchet', 'Blavot', 'Boniface', 'Bossu', 'Boutart', 'Brandan', 'Brion', 'Brodier', 'Bureau', 'Caisin', 'Cardin', 'Casin', 'Cassin', 'Charles', 'Charlon', 'Charlot', 'Chiquart', 'Christian', 'Christofle', 'Clamens', 'Clement', 'Climent', 'Colart', 'Colet', 'Colin', 'Colinet', 'Collinet', 'Conrrard', 'Conrrart', 'Conrrat', 'Crespin', 'Daniel', 'Denis', 'Denisot', 'Denixost', 'Dimenche', 'Domin', 'Dreue', 'Drouet', 'Durant', 'Edouart', 'Edward', 'Elyot', 'Emery', 'Enguerran', 'Enguerrand', 'Erard', 'Erart', 'Ernault', 'Estiene', 'Estienne', 'Ethor', 'Eustace', 'Evrard', 'Evrart', 'Ewart', 'Felix', 'Ferrant', 'Fleurent', 'Fleury', 'Floquart', 'Florent', 'Fouet', 'François', 'Françoys', 'Franceis', 'Fremin', 'Gabriel', 'Gadiffer', 'Galleren', 'Galois', 'Galoys', 'Galtier', 'Gamelet', 'Gamet', 'Garnier', 'Garnot', 'Gassot', 'Gauchier', 'Gaultier', 'Gautier', 'Gefrei', 'George', 'Gerard', 'Gerart', 'Germain', 'Gervaisot', 'Gieffrin', 'Gieffroy', 'Giffrei', 'Gilbert', 'Gilebert', 'Giles', 'Gilet', 'Gillebert', 'Gilles', 'Gillet', 'Gillot', 'Gilot', 'Girard', 'Girart', 'Gobin', 'Godeffroy', 'Godefroy', 'Gracien', 'Gregoire', 'Gualter', 'Guerin', 'Guerinet', 'Guibert', 'Guieffroy', 'Guillalme', 'Guillame', 'Guillaume', 'Guillemin', 'Guillemot', 'Guillot', 'Guimart', 'Guion', 'Guiot', 'Guy', 'Guymart', 'Gyeffroy', 'Hangest', 'Hannequin', 'Hebert', 'Helie', 'Heliot', 'Helyot', 'Hemonnet', 'Hennequin', 'Henri', 'Henriet', 'Henrriet', 'Henrry', 'Henrryet', 'Henry', 'Henryet', 'Heraut', 'Herbert', 'Herbin', 'Herle', 'Herman', 'Hermant', 'Hervé', 'Hubert', 'Huchon', 'Hue', 'Huet', 'Huget', 'Hugon', 'Huguelin', 'Huguenin', 'Hugues', 'Huguet', 'Huistase', 'Husson', 'Imbert', 'Innocent', 'Jacob', 'Jacotin', 'Jacques', 'Jacquet', 'Jacquot', 'Jamet', 'Jaquemin', 'Jaques', 'Jaquet', 'Jaquin', 'Jaquinot', 'Jaquob', 'Jaquot', 'Jaspar', 'Jasque', 'Jean', 'Jehan', 'Jehanin', 'Jehannin', 'Josset', 'Jourdain', 'Julien', 'Junien', 'Lambert', 'Lancelet', 'Lancelot', 'Larrecin', 'Laurens', 'Laurentin', 'Loeis', 'Lohier', 'Lorens', 'Lorin', 'Louis', 'Louys', 'Loys', 'Loyset', 'Lucas', 'Luquin', 'Lyebault', 'Macé', 'Mahiet', 'Mahieu', 'Marc', 'Marcel', 'Marcelet', 'Marinet', 'Marquet', 'Martin', 'Mathé', 'Mathelin', 'Mathieu', 'Maussart', 'Menet', 'Michault', 'Michel', 'Michelet', 'Michellet', 'Michiel', 'Mile', 'Milet', 'Mille', 'Morelet', 'Moriset', 'Naudin', 'Nicaise', 'Nicolas', 'Nicole', 'Nicolle', 'Noel', 'Oliver', 'Olivier', 'Osmont', 'Oudart', 'Oudin', 'Oudinet', 'Paquier', 'Pasquier', 'Peire', 'Perceval', 'Perrenet', 'Perresson', 'Perrin', 'Perrot', 'Phelipe', 'Phelippon', 'Phelippot', 'Philippe', 'Philippes', 'Philippin', 'Philippot', 'Phillippot', 'Phlippot', 'Pierre', 'Pierrey', 'Pol', 'Poncelet', 'Poncellet', 'Poncet', 'Porret', 'Poton', 'Quentin', 'Raol', 'Raoul', 'Raoulet', 'Raoulin', 'Rasse', 'Raymon', 'Raymondin', 'Regnault', 'Regnier', 'Reinald', 'Remon', 'Remonet', 'Remy', 'Richard', 'Richart', 'Robert', 'Robin', 'Robinet', 'Rogerin', 'Rogier', 'Rolant', 'Rolet', 'Rolin', 'Rollant', 'Sauvage', 'Sauvaige', 'Senestre', 'Sicart', 'Simmonet', 'Simon', 'Simonnet', 'Symmonet', 'Symon', 'Symonet', 'Symonnet', 'Talbot', 'Talebot', 'Tallebot', 'Tanguy', 'Tanneguy', 'Tassin', 'Thevenin', 'Thevot', 'Thibault', 'Thiebaut', 'Thierry', 'Thomas', 'Thomassin', 'Thomin', 'Thommas', 'Tierri', 'Toussains', 'Tristan', 'Tristran', 'Tumas', 'Verain', 'Vincent', 'Vivien', 'Volo', 'Voulo', 'Wace', 'Walkelin', 'Willalme', 'Willame', 'Willeme', 'Ymbelet', 'Ymbelot', 'Ymbert', 'Ymbolet', 'Ysambart', 'Yvain', 'Yvon', 'Yvonnet'];
  const nm2 = ['Aalipdis', 'Aeliz', 'Agatha', 'Agnés', 'Agnes', 'Agnesot', 'Agneta', 'Agnez', 'Alberea', 'Alesia', 'Alips', 'Alipson', 'Alison', 'Alys', 'Amelot', 'Anne', 'Ascelina', 'Auburgis', 'Avelina', 'Blancha', 'Catherine', 'Cecile', 'Cecilia', 'Chrestienne', 'Claricia', 'Collette', 'Cunstance', 'Denise', 'Denisete', 'Denisette', 'Dorian', 'Edelina', 'Edine', 'Ele', 'Emelina', 'Emmelot', 'Ermengardis', 'Ermentrudis', 'Genevote', 'Gervaise', 'Gibelina', 'Gila', 'Gillette', 'Guiburgis', 'Guillemette', 'Guillette', 'Guiote', 'Guiotte', 'Gunnor', 'Hecelina', 'Helloysis', 'Heloysis', 'Helvisis', 'Helyoudis', 'Hersendis', 'Hodeardis', 'Honnorée', 'Isabel', 'Isabellis', 'Jaqueligne', 'Jaqueline', 'Jaquette', 'Jehanne', 'Jehannette', 'Jehenne', 'Jehennette', 'Johanna', 'Juliote', 'Katerine', 'Katherine', 'Lorence', 'Loyse', 'Luciana', 'Mahault', 'Mahelt', 'Margarite', 'Margot', 'Marguarite', 'Marguerite', 'Marguot', 'Maria', 'Marie', 'Marion', 'Marota', 'Martine', 'Mesot', 'Mezot', 'Nesot', 'Nezot', 'Nicole', 'Nicolete', 'Odelina', 'Oudine', 'Pasquette', 'Perrette', 'Perrotte', 'Petronilla', 'Philippote', 'Phlipote', 'Plantée', 'Poubelle', 'Rapine', 'Sedilia', 'Stephana', 'Sybilla', 'Symonne', 'Thecia', 'Thieffane', 'Thiephaine', 'Thomasse', 'Thyephaine', 'Thyesphaine', 'Thyeuffaine', 'Tiephaine', 'Tyeffaine', 'Tyephaine', 'Tyesphaine', 'Ysabeau', 'Ysabel', 'Ysabelet'];
  const nm3 = ['Baille', 'Baillet', 'Bertran', 'Bourdon', 'Caboche', 'Charetier', 'Cirasse', 'Courtecuisse', 'Crete', 'Cyrasse', 'Discret', 'Dole', 'Foucault', 'Frallon', 'Gaiant', 'Gas', 'Gaude', 'Gencien', 'Jamelin', 'Jouvenel', 'Lamben', 'Lore', 'Lormoy', 'Marc', 'Marcel', 'Marchant', 'Mariette', 'Morhier', 'Nepveu', 'Oger', 'Paris', 'Perquin', 'Petitmeny', 'Petitmesnil', 'Pidoye', 'Pie', 'Poupart', 'Ragnier', 'Rallart', 'Rappiot', 'Regnault', 'Rousseau', 'Sanguin', 'Sarazin', 'Sifflet', 'Syrasse', 'Tirasse', 'd\'Allee', 'd\'Armignac', 'd\'Ausserre', 'd\'Esparnon', 'd\'Espernon', 'd\'Estouville', 'd\'Orgremont', 'de Bar', 'de Belloy', 'de Betencourt', 'de Bonpre', 'de Bonpuis', 'de Bournonville', 'de Braquemont', 'de Breban', 'de Brey', 'de Brie', 'de Chartres', 'de Clamecy', 'de Cobie', 'de Craon', 'de Dampierre', 'de Favieres', 'de Fromonville', 'de Gaucourt', 'de Grantrue', 'de Grinquos', 'de Labrait', 'de Lalier', 'de Langre', 'de Lestre', 'de Lolive', 'de Louviers', 'de Lunay', 'de Luxembourg', 'de Malconquat', 'de Marle', 'de Montagu', 'de Montaigu', 'de Morvillier', 'de Neufville', 'de Neuville', 'de Pisex', 'de Pisieux', 'de Rivel', 'de Roubres', 'de Saintraille', 'de Saintyon', 'de Saulx', 'de Spire', 'de Ternant', 'de Tourraine', 'de Troyes', 'de Tuillieres', 'de Valois', 'de Vauru', 'de Vienne', 'de Vry', 'de l\'Esclat', 'de la Guerre', 'de la Riviere', 'de la Rochelle', 'de la Vallee', 'des Champs', 'des Croustez', 'des Essars', 'des Essarts', 'des Moulins', 'dit le Beau', 'du Bois', 'du Boys', 'du Chastel', 'du Gibet', 'du Mesnil', 'du Pre', 'l\'Amy', 'l\'Archer', 'l\'Empereur', 'l\'Extrac', 'la Gajant', 'la Poucelle', 'la Pucelle', 'la Voiriere', 'la pucelle', 'le Berger', 'le Cler', 'le Coq', 'le Cordelier', 'le Gouays', 'le Grant Augustin', 'le Maçon', 'le Prestre'];
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
