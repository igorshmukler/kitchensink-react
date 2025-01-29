const BASE_URL = 'http://localhost:8080'

export async function getMembers() {
  const response = await fetch(`${BASE_URL}/members`)
  if (!response.ok) {
    throw new Error('Failed to fetch members')
  }
  return await response.json()
}

export async function getMemberbyId(id) {
  const response = await fetch(`${BASE_URL}/members/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch member')
  }
  return await response.json()
}

export async function addMember(member) {
  const response = await fetch(`${BASE_URL}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  })
  if (!response.ok) {
    throw new Error('Failed to add member')
  }
}

export async function updateMember(id, member) {
  const response = await fetch(`${BASE_URL}/members/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  })
  if (!response.ok) {
    throw new Error('Failed to update member')
  }
  return await response.json()
}

export async function deleteMember(id) {
  const response = await fetch(`${BASE_URL}/members/${id}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Failed to delete member')
  }
}
