import { useState } from "react"
import { ContactFilter, ContactList } from "../components/contacts"
import { PageLayout } from "../components/layouts"

function Home() {
  const [filter, setFilter] = useState({});

  const handleFilterChange = (filter) => {
    console.log(filter);
    setFilter(filter)
  }

  return (
    <PageLayout>
      <h2 className="fw-light mb-3 fs-4">Contacts List</h2>
      <ContactFilter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList filter={filter} />
    </PageLayout>
  )
}

export default Home