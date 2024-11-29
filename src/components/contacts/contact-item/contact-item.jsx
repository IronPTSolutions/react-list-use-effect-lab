import dayjs from "../../../lib/dayjs";

import './contact-item.css';

function ContactItem({ contact, onDelete }) {
  return (
    <div className="contact d-flex contact gap-2 bg-light p-2 rounded">
      <img className="img-fluid rounded" src={contact.avatar} alt={contact.name} style={{ maxHeight: '100px'}}/>
      <div className="contact-info fw-light position-relative w-100">
        <i className="fa fa-times text-danger position-absolute top-0 end-0" role="button" onClick={() => onDelete(contact)}></i>
        <h6 className="mb-0"><strong><i className="fa fa-user fa-fw"></i></strong> {contact.name}</h6>
        <p className="mb-0"><strong><i className="fa fa-phone fa-fw"></i></strong> {contact.phoneNumber}</p>
        <p className="mb-0"><strong><i className="fa fa-birthday-cake fa-fw"></i></strong> {dayjs(contact.birthday).format('ll')}</p>
        <p className="mb-1"><strong><i className="fa fa-briefcase fa-fw"></i></strong> {contact.job.title}</p>
        <div className="d-flex flex-wrap gap-1 mb-1">
          {contact.topics.map((topic, i) => (
            <span key={i} className="badge text-bg-secondary fw-light">{topic}</span>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-1">
          {contact.series.map((serie, i) => (
            <span key={i} className="badge text-bg-warning fw-light">{serie}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactItem;