import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header.jsx';
import AppFooter from './components/footer.jsx';
import Index from './components/index.jsx';
import StudentCard from './components/studentCard.jsx';

function App() {
  return ( 
  <>
      <AppHeader/>
      <StudentCard name={"Camila Aviles"} level= {"6B Dual"} career = {"TIDSM"}/>
      <StudentCard name={"Lorena Lizeth"} level= {"6B Dual"} career = {"TIDSM"}/>
      <StudentCard name={"Victor Francisco"} level= {"6B Dual"} career = {"TIDSM"}/>
      <StudentCard name={"Maximo Dimas"} level= {"6B Dual"} career = {"TIDSM"}/>
      <StudentCard name={"Brandon Daniel"} level= {"6B Dual"} career = {"TIDSM"}/>
      <AppFooter/>
  </>
);
}

export default App;
