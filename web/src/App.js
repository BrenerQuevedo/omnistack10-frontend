import React, {useEffect, useState} from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'
//Componente: função que retorna um HTML,CSS ou/e JS, não interfere na execução do restante da aplicação
//Estado: informações mantidas pelo componentes
//Propriedade: informações/atributos que um componente PAI  passa para um componente filho



function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
         
        setLatitude(latitude);
         setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>

            <form>
              <div className="input-block">
                <label htmlFor="github_username">Usuário Github</label>
                <input name="github_username" id="github_username" required/>
              </div>
              
              <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs" id="techs" required/>
              </div>

              <div className="input-group">
                
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input name="latitude" id="latitude" required value={latitude}/>
                </div>

                <div className="input-block">
                  <label htmlFor="longitude">longitude</label>
                  <input name="longitude" id="longitude" required value={longitude}/>
                </div>

              </div>

              <button type="submit">Salvar</button>

            </form>

        </aside>


        <main>
          <ul>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
            <li className="dev-item">
                <header>
                  <img src="https://avatars1.githubusercontent.com/u/39017457?s=400&u=12665826e41e2256ba2d61c9c1a941009c832496&v=4" alt="Brener Quevedo"/>
                  <div className="user-info">
                    <strong>Brener Quevedo</strong>
                    <span>React, Node, Mongo</span>
                  </div>
                </header>
              
                <p>biografia de teste</p>
                <a href="https://github.com/BrenerQuevedo">Acessar perfil no github</a>
            </li>
          </ul>
        </main>
      </div>
    );
}

export default App;
