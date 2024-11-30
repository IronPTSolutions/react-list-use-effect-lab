import { ContactList } from "../components/contacts";
import { PageLayout } from "../components/layouts";

function Home() {
  return (
    <PageLayout>
      <h3 className="fw-light">Contacts List</h3>
      <ContactList />
    </PageLayout>
  )
}

export default Home;