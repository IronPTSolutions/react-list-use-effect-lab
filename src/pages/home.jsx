import { useState } from "react";
import ContactList from "../components/contacts/contact-list/ContactList";
import PageLayout from "../components/ui/layouts/page-layout/page-layouts";

function Home () {
    const [name, setName] = useState ();

    const handleInputChange = (event) => {
        setName (event.target.value);
    }; 

    return ( 
        <PageLayout>
            <h1>Contact List</h1>
           <input type="text" value={name} onChange = {handleInputChange} placeholder = "Contacto..." />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolore praesentium consequatur atque? Fuga incidunt blanditiis voluptatum hic ut voluptate dolore tempore suscipit cumque iste minima placeat porro, necessitatibus cum.
            </p>
            <ContactList name = {name}/>
        </PageLayout>
    );
}

export default Home; 