import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./Form.css"

export default function Form({setMemberList}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMemberList(list => [...list, formData]);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      address: ''
    });
  };

  return (
    <div>
      <h1>Fitness Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Add Member</button>
      </form>
      <button>
        <Link to="/member-list">View Member List</Link>
      </button>
    </div>
  )
}