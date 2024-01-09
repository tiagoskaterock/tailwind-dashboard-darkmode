import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div
      className="font-inter bg-white before:absolute before:inset-x-0 before:0 before:h-96 before:bg-very-pale-blue before:-z-10 text-very-dark-blue dark:bg-very-dark-blue dark:before:bg-very-dark-blue-top dark:text-white">
      
      <Main />  
      <Footer />  

    </div>
  );
}

export default App;
