import React from 'react';
import './global.css';
import './App.css';

//Componente: função que retorna um HTML,CSS ou/e JS, não interfere na execução do restante da aplicação
//Estado: informações mantidas pelo componentes
//Propriedade: informações/atributos que um componente PAI  passa para um componente filho

function App() {
  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>

            <form>
              <div className="input-block">
                <label htmlFor="github_username">Github Username</label>
                <input name="github_username" id="github_username" required/>
              </div>
              
              <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required/>
              </div>

              <div className="input-group">
                
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input name="latitude" id="latitude" required/>
                </div>

                <div className="input-block">
                  <label htmlFor="longitude">longitude</label>
                  <input name="longitude" id="longitude" required/>
                </div>

              </div>

              <button type="submit">Salvar</button>

            </form>

        </aside>

        <main>

        </main>
      </div>
    );
}

export default App;
