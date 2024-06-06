import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Ecosystem } from './pages/Ecosystem/Ecosystem';
import { Header } from './components/Header/Header';
import { animated, useTransition } from 'react-spring';

// Сформированные страницы
const Pages = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  return transitions((props, item) => (
    <animated.div style={{ ...props, borderRadius: '50%' }}>
      <Routes location={item}>
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </animated.div>
  ));
};

export default function App() {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  );
}
