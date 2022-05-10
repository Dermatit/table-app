import './App.css';
import { SearchBox } from '../Searchbox';
import { Header } from '../Header';
import { Table } from '../Table';
import { Footer } from '../Footer';

export default function App() {
  return (
    <main>
      <SearchBox />
      <Header />
      <Table />
      <Footer />
    </main>
  );
};
