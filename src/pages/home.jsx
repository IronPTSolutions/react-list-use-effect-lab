import { useState } from "react";
import ContactList from "../components/contacts/contactlist/ContactList";
import PageLayout from "../components/ui/layouts/page-layout/page-layouts";


function Home() {
  const [name, setName] = useState ();

  const handleInputChange = (event) => {
    setName (event.target.value);
  };  
  
 

  return (
    <PageLayout>

      <input type="text" value={name} onChange={handleInputChange} placeholder="escribe lo que te de la gana"/>

      
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa optio
        corporis provident, officia voluptates aspernatur cumque nihil odio natus
        vitae nulla maxime neque! Deleniti alias amet laboriosam, quia eos iusto?
      </p>
      
      <ContactList name={name}/>
      
    </PageLayout>
    
  );
}

export default Home;
