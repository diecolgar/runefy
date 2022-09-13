import './App.css';
import Navigation from './Components/Navigation';
import TranslatorApp from './Components/TranslatorApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
        <>
            <Navigation />
            <TranslatorApp />
        </>
        }
      </header>
    </div>
  );
}

export default App;
