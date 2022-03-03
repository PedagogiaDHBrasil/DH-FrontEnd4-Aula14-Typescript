import React from 'react';
import './App.css';

interface Empregado {
  id: number;
  nome: string;
  salario: number;
  funcionario: boolean;
  departamento?: string;
}

function App() {
  const pessoas: Empregado[] = [
    {
      id: 1,
      nome: "Steve",
      salario: 1000,
      funcionario: true,
      departamento: "TI",
    },
    {
      id: 2,
      nome: "Maria",
      salario: 0,
      funcionario: false,
    },
    {
      id: 3,
      nome: "Fernanda",
      salario: 1200,
      funcionario: true,
      departamento: "RH",
    },
    {
      id: 4,
      nome: "Carlos",
      salario: 0,
      funcionario: false,
    },
  ];

  return (
    <div className="App">
      {pessoas.map(pessoa => <div>
        <p>{pessoa.id} - <strong>{pessoa.nome}</strong> - Salário de R$ {pessoa.salario} - {pessoa.funcionario ? 'É funcionário' : 'Não é funcionário'} {pessoa.funcionario && pessoa.departamento && `do departamento de ${pessoa.departamento}`}</p>
      </div>)}
    </div>
  );
}

export default App;
