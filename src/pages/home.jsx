import { useState } from "react";
import { ContactsFilter, ContactList } from "../components/contacts";
import { PageLayout } from "../components/layouts";

function Home() {
  const [filter, setFilter] = useState({});

  const handleFilterChange = (filter) => {
    console.log(filter);
    setFilter(filter);
  }

  return (
    <PageLayout>
      <h3 className="fw-light mb-3 fs-4">Contacts List</h3>
      <ContactsFilter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList filter={filter} />
    </PageLayout>
  )
}

export default Home;