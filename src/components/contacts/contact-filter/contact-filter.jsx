import './contact-filter.css';

function ContactFilter({ filter, onFilterChange }) {

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    onFilterChange({ ...filter, [name]: value });
  } 

  return (
    <div className="input-group mb-3 contact-filter">
      <span className="input-group-text"><i className="fa fa-tag"></i></span>
      <input type="text" className="form-control" placeholder="Find by name..." name="name" onChange={handleOnChange} />
      <span className="input-group-text"><i className="fa fa-venus-mars"></i></span>
      <select className="form-select" name="gender" onChange={handleOnChange}>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  )
}

export default ContactFilter;