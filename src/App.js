import './App.css';
import Greet from './components/FunctionalComponent'
import Welcome from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <Greet name ="Ahmad"/>
      <Greet name ="Hussain"/>
      <Greet name ="Fasih"/>
      <hr/>
      <Welcome name ="Ahmad" />
      <Welcome name ="Hussain" />
      <Welcome name ="Fasih" />
   
    </div>
  );
}

export default App;
