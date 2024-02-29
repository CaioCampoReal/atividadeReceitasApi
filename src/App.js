import React, { Component } from 'react';
import receitas from './receitas.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    receitas: []
  };

  componentDidMount() {
    this.setState({ receitas: receitas });
  }

  render() {
    const { receitas } = this.state;

    return (
      <div>
        <header className="header">
          <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
            <h1>❄ Receitas de Gelo🧊 <span style={{ float: 'right' }} >🏂</span></h1>
          </div>
        </header>


        <section className="container m-5">
          <div className="receita-grid">
            {receitas.map(receita => (
              <div className="receita-quadro" key={receita.id}>
                <div className="receitas3">
                  <h2> Nº: {receita.id} {receita.title}</h2>
                  <h4>{receita.ingredientes}</h4>
                  <h6>{receita.modoPreparo}</h6>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
