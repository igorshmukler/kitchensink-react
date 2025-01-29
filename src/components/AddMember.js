import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addMember } from '../api/memberApi'

import '../styles/AddMember.css'

const AddMember = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const newMember = { firstName, lastName, email };

    addMember(newMember)
      .then((_response) => {
        navigate('/')
      })
      .catch((error) => console.error('Error adding member:', error))
  }

  return (
    <div className='add-member-container'>
      <h1>Add Member</h1>
      <form onSubmit={handleSubmit} className='add-member-form'>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </div>
  )
}

export default AddMember
