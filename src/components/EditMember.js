import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMemberbyId, updateMember } from '../api/memberApi'
import '../styles/EditMember.css'

function EditMember() {
  const { id } = useParams() // Retrieve member ID from the URL
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch member by ID
    getMemberbyId(id)
      .then((data) => {
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setEmail(data.email)
      })
      .catch((error) => console.error("Error fetching member:", error))
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedMember = { firstName, lastName, email, id }

    updateMember(id, updatedMember)
      .then((_response) => {
        navigate('/')
      })
      .catch((error) => console.error('Error updating member:', error))
  }

  return (
    <div className='edit-member-container'>
      <h1>Edit Member</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Update Member</button>
      </form>
    </div>
  );
}

export default EditMember
