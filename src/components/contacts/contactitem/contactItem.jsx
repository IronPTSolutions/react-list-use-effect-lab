

function ContactItem ({ contact, onDelete }) {
    return(
        <div>
            <div>
                <img src={contact.avatar}></img>
                <p>{contact.name}</p>
                <p>{contact.phoneNumber}</p>
                <p>{contact.birthay}</p>
                <p>{contact.job.title}</p>
                <p>{contact.topics[0]}</p>
                <p>{contact.topics[1]}</p>
                <p>{contact.topics[2]}</p>
            </div>
            <button onClick={() => onDelete(contact)}>delete</button>
        </div>
    )
}

export default ContactItem;