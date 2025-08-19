import React from 'react';
import Produto from './components/Produto';
import CartaoPessoa from './components/CartaoPessoa';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Componentes React
        </h1>
        
        {/* Seção Produtos */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Produtos</h2>
          <div className="space-y-2 text-lg">
            <Produto nome="Arroz" preco={10.00} />
            <Produto nome="Feijão" preco={8.50} />
            <Produto nome="Açúcar" preco={4.90} />
          </div>
        </section>

        {/* Seção Pessoas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Pessoas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CartaoPessoa 
              nome="Maria" 
              idade={25} 
              profissao="Designer" 
            />
            <CartaoPessoa 
              nome="João" 
              idade={32} 
              profissao="Desenvolvedor" 
            />
            <CartaoPessoa 
              nome="Ana" 
              idade={28} 
              profissao="Professora" 
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;