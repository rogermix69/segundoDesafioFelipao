let resultado = rank(10, 9);
function rank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  if (vitorias <= 10) {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Ferro"
    );
  } else if (saldoVitorias >= 11 && saldoVitorias < 20) {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Bronze"
    );
  } else if (saldoVitorias >= 21 && saldoVitorias < 50) {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Prata"
    );
  } else if (saldoVitorias >= 51 && saldoVitorias < 80) {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Ouro"
    );
  } else if (saldoVitorias >= 81 && saldoVitorias < 90) {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Diamante"
    );
  } else if (saldoVitorias >= 91 && saldoVitorias < 100) {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Lendario"
    );
  } else {
    console.log(
      "O Herói tem de saldo de " +
        saldoVitorias +
        " vitorias esta no nivel Imortal"
    );
  }
  return rank;
}
