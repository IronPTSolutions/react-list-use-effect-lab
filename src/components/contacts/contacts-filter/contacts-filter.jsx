
function ContactsFilter({ filter, onFilterChange }) {

    const handleOnFilter = (event) =>  {
        const { name, newValue } = event.target;
        onFilterChange({ ...filter, [name]: newValue });
    }

    return (
        <div className="input-group mb-3 contacts-filter">
            <input type="text" className="form-control mb-3" placeholder="Find by name..." name="name" onChange={handleOnFilter} />
            {/* <span className="input-group-text"><i className="fa fa-venus-mars"></i></span> */}
            {/* <select className="form-select" name="gender" onChange={handleOnFilter}>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select> */}
        </div>
    );
}

export default ContactsFilter;