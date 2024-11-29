import { useState } from "react"
import { ContactList } from "../components/contacts"
import { PageLayout } from "../components/layouts"

function Home() {
  const [name, setName] = useState();

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value)
  }

  return (
    <PageLayout>
      <h2 className="fw-light mb-3 fs-4">Contacts List</h2>
      <div className="input-group mb-3 w-50">
        <span className="input-group-text">@</span>
        <input type="text" className="form-control" placeholder="Find by name..." value={name} onChange={handleChangeName} />
      </div>
      <ContactList name={name} />
    </PageLayout>
  )
}

export default Home