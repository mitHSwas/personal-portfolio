import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import TopSection from './components/TopSection/TopSection';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Articles from './components/Articles/Articles';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <TopSection></TopSection>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Articles></Articles>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
}

export default App;
