import AppBarTop from './components/AppBarTop.js';
import Landing from './pages/Landing.js';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBarTop />
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={AboutUs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
