import logo from './logo.svg';
import './App.css';

function App() {

  const nome = 'Lameu';
  const idade = 18;

  const saudacao = () => "Ola tudo bem ?"

  const pessoas = [
    {
      nome: "Ivo",
      profissao: "Professor"
    },

    {
      nome: "Maria",
      profissao: "Medica"
    },

    {
      nome: "Joao",
      profissao: "Professor"
    }
  ]


  return (
  <div>

    <h1 className='titulo'>Meu nome é {nome}</h1>
    <p>É maior de idade? {idade >= 18 ? "Sim" : "Não"} </p>
    <ul>
      {pessoas.map(pessoa =>(
        <li>{pessoa.nome} - {pessoa.profissao}</li>
      ))}
    </ul>

 </div>
  );
}

export default App;
