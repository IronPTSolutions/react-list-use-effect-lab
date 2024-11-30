import { useState } from 'react';
import ContactList from '../ContactList';

function Home() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <input
        type="text"
        placeholder="Filtrar contactos por nombre"
        value={filter}
        onChange={handleFilterChange}
      />
      <ContactList filter={filter} />
    </div>
  );
}

export default Home;