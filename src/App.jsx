import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <section>
        <div className='controls'>
          <div className='adicionarPalavra'>Adicionar palavra</div>
          <div className='levelSelector'>Selecionar dificuldade</div>
          <div className='startButton'>Botão Start</div>
        </div>
        <div className='inGame'>
          <div className='aboveGame'>
            <div>Tempo</div>
            <div>palavras encontradas (x/z)</div>
            <div>Nível</div>
          </div>
          <div className='gameArea'>
            <div className='wrapperLetras'>
              <h2>Sopa de letras</h2>
              <div className='tabuleiros'>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
                <span className='letra'>0</span>
              </div>
            </div>
            <div className='wrapperPalavras'>
              <h2>Encontra estas palavras</h2>
              <ul>
                <li>Coimbra</li>
                <li>Lisboa</li>
                <li>Porto</li>
                <li>Arouca</li>
                <li>Aveiro</li>
                <li>Faro</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
