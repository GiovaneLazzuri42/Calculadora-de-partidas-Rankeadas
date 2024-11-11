function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinação do nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Exibição do resultado
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`);
}

// Exemplo de uso
const vitorias = 32;
const derrotas = 10;
calcularRank(vitorias, derrotas);
