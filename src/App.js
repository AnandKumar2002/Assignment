import "@fontsource/oswald"; // Defaults to weight 400
import "@fontsource/oswald/400.css"; // Specify weight
// import "@fontsource/oswald/400-italic.css"; // Specify weight and style

import NavBar from './components/navbar/NavBar';
import Home from './components/Header/Home'
import HomeBottom from './components/Header/HomeBottom';
import Connected from './components/We-stay-connected/Connected';
import WeBelieve from './components/We-believe in-diversity-&-inclusion/WeBelieve';
import Careers from "./components/careers/Careers";
import GlobalMap from './components/globalMap/GlobalMap';
import Footer from './components/footer/Footer';
import PeopleCollage from "./components/people/PeopleCollage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <HomeBottom />
      <Connected />
      <WeBelieve />
      <PeopleCollage />
      <Careers />
      <GlobalMap />
      <Footer />
    </div>
  );
};

export default App;
