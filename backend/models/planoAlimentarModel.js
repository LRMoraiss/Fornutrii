class PlanoAlimentar {
  constructor(row) {
    this.id = row.id;
    this.usuario_id = row.usuario_id;
    this.nome = row.nome;
    this.descricao = row.descricao;
    this.duracao = row.duracao;
    this.calorias = row.calorias;
    this.objetivo = row.objetivo;
    this.proteinas_percent = row.proteinas_percent;
    this.carboidratos_percent = row.carboidratos_percent;
    this.gorduras_percent = row.gorduras_percent;
    this.restricoes = row.restricoes;
  }
}

module.exports = PlanoAlimentar;
