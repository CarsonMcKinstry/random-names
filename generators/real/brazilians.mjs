export default function brazilians() {
  let names;
  let rnd;
  let rnd2;
  const type = Math.random() < 0.5 ? 0 : 1;
  const namesFemale = ['Elizabete', 'Janice', 'Marcia', 'Ângela', 'Érica',
    'Adelaide', 'Adriana', 'Ágata', 'Alícia', 'Alana', 'Alessandra', 'Alice',
    'Aline', 'Amanda', 'Ana', 'Andréia', 'Andressa', 'Angélica', 'Anita',
    'Bárbara', 'Beatriz', 'Berenice', 'Betina', 'Bianca', 'Bruna', 'Cíntia',
    'Camila', 'Carina', 'Carla', 'Carolina', 'Caroline', 'Catarina',
    'Cecília', 'Cláudia', 'Clara', 'Clarissa', 'Cristiane', 'Cristina',
    'Débora', 'Daiana', 'Daniela', 'Denise', 'Diana', 'Eduarda', 'Elaine',
    'Eliana', 'Elisa', 'Eloá', 'Emília', 'Estefânia', 'Ester', 'Evelyn',
    'Fabíola', 'Fabiane', 'Fernanda', 'Flávia', 'Francine', 'Gabriela',
    'Giovana', 'Gisele', 'Helena', 'Heloísa', 'Heloisa', 'Iara', 'Inês',
    'Isabel', 'Isabela', 'Isadora', 'Ivone', 'Izabel', 'Isadora', 'Jéssica',
    'Júlia', 'Janaína', 'Jaqueline', 'Joana', 'Julia', 'Juliana', 'Camila',
    'Lívia', 'Lúcia', 'Laís', 'Larissa', 'Laura', 'Lavínia', 'Leila',
    'Letícia', 'Liana', 'Lorena', 'Luíza', 'Luana', 'Luciana', 'Luiza',
    'Mônica', 'Maiara', 'Maitê', 'Manoela', 'Manuela', 'Marília', 'Marcela',
    'Maria', 'Mariana', 'Mariane', 'Marina', 'Marisa', 'Marta', 'Melissa',
    'Michele', 'Milena', 'Mirela', 'Miriam', 'Nívea', 'Natália', 'Nicole',
    'Nina', 'Olívia', 'Paloma', 'Patrícia', 'Paula', 'Priscila', 'Rafaela',
    'Raquel', 'Rebeca', 'Regina', 'Renata', 'Rita', 'Roberta', 'Rosa',
    'Rosana', 'Sílvia', 'Sônia', 'Sabrina', 'Samanta', 'Sandra', 'Sara',
    'Silvana', 'Sofia', 'Soraia', 'Estela', 'Suzana', 'Taís', 'Talita',
    'Tatiana', 'Teresa', 'Tereza', 'Vânia', 'Valéria', 'Valentina', 'Vanessa',
    'Verônica', 'Vera', 'Virgínia', 'Vitória', 'Vivian', 'Yasmin'];
  const namesMale = ['Agildo', 'Álvaro', 'Érico', 'Adriano', 'Alberto',
    'Alessandro', 'Alexandre', 'Alfredo', 'André', 'Antônio', 'Antonio',
    'Armando', 'Artur', 'Augusto', 'Benício', 'Bernardo', 'Breno', 'Bruno',
    'Cássio', 'César', 'Caio', 'Carlos', 'Cauã', 'Cauê', 'Cláudio', 'Conrado',
    'Cristiano', 'Daniel', 'Danilo', 'Davi', 'Diego', 'Diogo', 'Edgar',
    'Eduardo', 'Emanuel', 'Enrico', 'Érico', 'Estevão', 'Evandro', 'Fábio',
    'Fabiano', 'Fabrício', 'Felipe', 'Fernando', 'Felipe', 'Flávio',
    'Francisco', 'Frederico', 'Gabriel', 'Gilberto', 'Giovane', 'Guilherme',
    'Gustavo', 'Heitor', 'Henrique', 'Hugo', 'Igor', 'João', 'Joaquim',
    'Jonas', 'Jorge', 'José', 'Juliano', 'Julio', 'Leandro', 'Leonardo',
    'Lorenzo', 'Lucas', 'Luciano', 'Luiz', 'Márcio', 'Mário', 'Manuel',
    'Marcelo', 'Marcos', 'Mateus', 'Mateus', 'Maurício', 'Mauro', 'Miguel',
    'Murilo', 'Nicolas', 'Oscar', 'Otávio', 'Paulo', 'Pedro', 'Rafael',
    'Raul', 'Renan', 'Renato', 'Ricardo', 'Roberto', 'Rodolfo', 'Rodrigo',
    'Rogério', 'Sérgio', 'Sílvio', 'Samuel', 'Sandro', 'Tadeu', 'Teodoro',
    'Tiago', 'Tomás', 'Vítor', 'Vicente', 'Vinícius', 'Vinicius', 'Vitor'];
  const namesFamily = ['da Silva', 'dos Santos', 'de Oliveira', 'Amaral',
    'Aguiar', 'Azevedo', 'Álvarez', 'Álves', 'Ávila', 'Ambrósio', 'Assis',
    'Almeida', 'Amorim', 'Antunes', 'Andrade', 'Araújo', 'Alencar', 'Bezerra',
    'Boaventura', 'Bitencourt', 'Braga', 'Brandão', 'Barros', 'Barroso',
    'Branco', 'Barbosa', 'Bernardes', 'Bonfim', 'Bastos', 'Borba', 'Brito',
    'Barreto', 'Batista', 'Borges', 'Cruz', 'Cardoso', 'Carvalho', 'Coelho',
    'Costa', 'Cunha', 'Couto', 'Cavalcanti', 'Campos', 'Cerqueira', 'Câmara',
    'Canto', 'Castro', 'Conceição', 'Chaves', 'Clemente', 'Correia',
    'Caetano', 'Chagas', 'Castilho', 'Cordeiro', 'Camargo', 'Carmo', 'Dias',
    'Duarte', 'Dutra', 'Espíndola', 'Flores', 'Freitas', 'Ferreira',
    'Fernandes', 'Figueiredo', 'Furtado', 'Fonseca', 'Fraga', 'Farias',
    'Fagundes', 'Gonçalves', 'Gomes', 'Guedes', 'Garcia', 'Guimarães',
    'Guerra', 'Henriques', 'Jardim', 'Justo', 'Lima', 'Lópes', 'Leitão',
    'Lobo', 'Lemos', 'Luz', 'Linhares', 'Leal', 'Leite', 'Medina', 'Menezes',
    'Machado', 'Macedo', 'Marques', 'Mendes', 'Matos', 'Magalhães',
    'Meireles', 'Madruga', 'Melo', 'Medeiros', 'Morais', 'Moreira', 'Maciel',
    'Miranda', 'Monteiro', 'Martins', 'Maia', 'Neves', 'Nogueira',
    'Nascimento', 'Nazário', 'Nunes', 'Oliveira', 'Pires', 'Pereira',
    'Pedroso', 'Pimentel', 'Pinto', 'Peres', 'Paiva', 'Prestes', 'Padilha',
    'Pessoa', 'Pinheiro', 'Pinho', 'Paim', 'Prado', 'Paz', 'Quadros',
    'Queiroz', 'Quintana', 'Ramos', 'Rosário', 'Rosa', 'Ribeiro', 'Reis',
    'Rodrigues', 'Rezende', 'Rocha', 'Rios', 'Silva', 'Santos', 'Sousa',
    'Saraiva', 'Serra', 'Sá', 'Silveira', 'Simões', 'Soares', 'Tavares',
    'Teixeira', 'Vidal', 'Vila', 'Vasconcelos', 'Ventura', 'Vieira', 'Vale',
    'Vargas', 'Velho', 'Vaz'];
  const names1 = type === 1 ? namesFemale : namesMale;
  const names2 = namesFamily;
  {
    rnd = Math.floor(Math.random() * names1.length);
    rnd2 = Math.floor(Math.random() * names2.length);
    names = `${names1[rnd]} ${names2[rnd2]}`;
    return names;
  }
}
