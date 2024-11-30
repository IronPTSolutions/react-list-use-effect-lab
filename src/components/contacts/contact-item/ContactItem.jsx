
function ContactItem ({ contact }){
    return (
        <div>
            <img src = {contact.avatar}/>
            <p> {contact.name} </p> 
            <p> {contact.phoneNumber} </p> 
            <p> {contact.birthday} </p> 
            <p> {contact.job.title} </p>
            <p> {contact.topics[0]} </p>
            <p> {contact.topics[1]} </p>
            <p> {contact.topics[2]} </p>
        </div>
    ); 
}

export default ContactItem; 