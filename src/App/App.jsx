import './App.css';
import { SearchBox } from '../Searchbox';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { TableRoutes } from '../TableRoutes';

export default function App() {

  return (
    <main>
      <SearchBox />
      <Header />
      <TableRoutes />
      <Footer />
    </main>
  );
};
