import dayjs from '../../../lib/dayjs';

function ContactItem({ contact, onDelete }) {
  return (
    <div className="contact d-flex contact gap-2 bg-light p-2 rounded">
      <img src={contact.avatar} className="img-fluid rounded" alt={contact.name} style={{ maxHeight: '100px'}} />
      <div className="contact-info fw-light position-relative w-100">

        <h5 className="card-title mb-1 fw-light text-break"><strong>{contact.name}</strong></h5>

        <p className='mb-0 fw-lighter fs-xs'>{contact.phoneNumber}</p>
        <p className='mb-0 fw-lighter fs-xs'>{dayjs(contact.birthday).format('ll')}</p>
        <p className="mb-0 fw-lighter fs-xs">{contact.job.title}</p>
        
        <div className="d-flex gap-1 flex-wrap mb-1">
          {contact.topics.map((topic) => (
            <span key={topic} className='badge text-bg-light bg-secondary'>{topic}</span>
          ))}
        </div>

        <div className="d-flex gap-1 flex-wrap">
          {contact.series.map((serie) => (
            <span key={serie} className='badge text-bg-light bg-warning'>{serie}</span>
          ))}
        </div>

        <button className='btn btn-sm btn-danger btn-close' onClick={() => onDelete(contact)}></button>

      </div>
    </div>
  )
}

export default ContactItem;