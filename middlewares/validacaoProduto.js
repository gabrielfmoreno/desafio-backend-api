exports.validarProduto = (dados) => {
  const erros = [];

  if (!dados.nome || dados.nome.length < 3 || dados.nome.length > 255) {
    erros.push('Nome deve ter entre 3 e 255 caracteres.');
  }

  if (!dados.descricao || dados.descricao.length < 3 || dados.descricao.length > 255) {
    erros.push('Descrição deve ter entre 3 e 255 caracteres.');
  }

  if (typeof dados.preco !== 'number' || dados.preco <= 0) {
    erros.push('Preço deve ser um número positivo.');
  }

  const data = new Date(dados.data_atualizado);
  const minData = new Date('2000-01-01');
  const maxData = new Date('2025-06-20');

  if (isNaN(data.getTime()) || data < minData || data > maxData) {
    erros.push('Data de atualização deve estar entre 01/01/2000 e 20/06/2025.');
  }

  return erros;
};
