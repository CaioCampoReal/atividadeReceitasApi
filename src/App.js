import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App(){
  const [nutri, setNutri] = useState([]);

  useEffect( () => {
        function carregaDados(){
          let url = './receitas.JSON';

          fetch(url)
          .then((r) => r.json())
          .then((json) => {
            setNutri(json);
          })
        }
        carregaDados();
  },[]);

  return(
    <div>
      <header>
        <strong>Receita de Gelo</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id}>
            aaa
          </article>
        );
      })}
    </div>
  );
}
export default App;
