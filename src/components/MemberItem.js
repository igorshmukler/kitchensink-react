import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getMemberbyId, deleteMember } from '../api/memberApi'
import '../styles/MemberItem.css'

const MemberItem = () =>{
  const { id } = useParams() // Retrieve member ID from the URL
  const [member, setMember] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch member by ID
    getMemberbyId(id)
      .then((data) => {
        setMember(data)
      })
      .catch((error) => console.error("Error fetching member:", error));
  }, [id])


  return (
    <div className="member-item">
      <div className="member-info">
        <p>
          <strong>{member.firstName} {member.lastName}</strong>
        </p>
        <p>Email: {member.email}</p>
      </div>
      <div className="member-actions">
        <button className="edit-btn" onClick={() => navigate(`/edit/${member.id}`)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => {
          deleteMember(member.id)
            .then(() => navigate('/'))
            .catch((error) => console.error('Error deleting member:', error))
        }}>
          Delete
        </button>
      </div>
    </div>
  )
}

MemberItem.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default MemberItem