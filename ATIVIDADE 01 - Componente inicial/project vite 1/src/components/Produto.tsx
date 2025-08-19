import React from 'react';

interface ProdutoProps {
  nome: string;
  preco: number;
}

function Produto({ nome, preco }: ProdutoProps) {
  return (
    <p>{nome} - R$ {preco.toFixed(2).replace('.', ',')}</p>
  );
}

export default Produto;