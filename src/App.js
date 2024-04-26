import './App.css';
import chuva from './assets/chuva.gif';
import sol from './assets/diaLimpo.gif';
import solNuvens from './assets/solEntreNuvens.gif';
import noite from './assets/noiteLimpa.gif';
import nublado from './assets/nublado.gif';
import RealtimeClock from './componets/realtime';

function App() {

  let day = new Date().getDay();
  const diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
  ];

  const nomeDoDiaDaSemana = diasDaSemana[day];

  return (
    <div className="App">
      <header className="App-body">
        <div className='titulo'>
        <h2>Passo Fundo</h2>
        <RealtimeClock />
        </div>
        <div className='Card-container'>
        <div className='card1'>
            <div className="background"></div> {/* Plano de fundo */}
            <div className="content"> {/* Conteúdo do card */}
              <h3>Segunda-feira</h3>
              <br />
              <img src={sol} alt="sol"/>
              <br />
              <h1>23°C</h1>
            </div>
        </div>
        <div className='card1'>
            <div className="background"></div> {/* Plano de fundo */}
            <div className="content"> {/* Conteúdo do card */}
              <h3>Terça-feira</h3>
              <br />
              <img src={solNuvens} alt="Nuvens"/>
              <br />
              <h1>18°C</h1>
            </div>
        </div>
        <div className='card1'>
            <div className="background"></div> {/* Plano de fundo */}
            <div className="content"> {/* Conteúdo do card */}
              <h3>Quarta-feira</h3>
              <br />
              <img src={nublado} alt="nublado"/>
              <br />
              <h1>15°C</h1>
            </div>
        </div>
        <div className='card1'>
            <div className="background"></div> {/* Plano de fundo */}
            <div className="content"> {/* Conteúdo do card */}
              <h3>Quinta-feira</h3>
              <br />
              <img src={chuva} alt="chuva"/>
              <br />
              <h1>12°C</h1>
            </div>
        </div>
        <div className='card1'>
            <div className="background"></div> {/* Plano de fundo */}
            <div className="content"> {/* Conteúdo do card */}
              <h3>Sexta-feira</h3>
              <br />
              <img src={noite} alt="noite"/>
              <br />
              <h1>16°C</h1>
            </div>
        </div>          
        </div>
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
