import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
<Header />
<Main />
<Movies />
<SavedMovies />
<Footer />
    </div>
  );
}

export default App;
