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
        </div>
        <div className='inGame'>
          <div className='aboveGame'>
            <div>Tempo</div>
            <div>palavras encontradas (x/z)</div>
            <div>Nível</div>
          </div>
          <div className='gameArea'>
            <div className='wrapperLetras'>Sopa de letras</div>
            <div className='wrapperPalavras'>
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
