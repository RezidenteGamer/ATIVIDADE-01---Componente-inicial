import React from 'react';

interface CartaoPessoaProps {
  nome: string;
  idade: number;
  profissao: string;
}

function CartaoPessoa({ nome, idade, profissao }: CartaoPessoaProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{nome}</h2>
      <p className="text-gray-600 mb-2">Idade: {idade}</p>
      <p className="text-gray-600">Profissão: {profissao}</p>
    </div>
  );
}

export default CartaoPessoa;