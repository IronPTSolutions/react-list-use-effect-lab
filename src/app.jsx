import { Navbar } from "./components/ui";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PageLayout from './components/layouts/page-layout/PageLayout';

function App() {
  return (
    <>
      <Navbar />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;