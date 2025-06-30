import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './UserProfile.module.css'

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://randomuser.me/api')
      setUser(response.data.results[0])
    } catch (error) {
      console.error('Error fetching user:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) {
    return <p className={styles.loading}>Loading...</p>
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <br />
      <h2 className={styles.name}>
        {user.name.first} {user.name.last}
      </h2>

      <br />
      <br />
      <br />
      <p className={styles.email}>Email: {user.email}</p>
      <br />
      <p className={styles.location}>
        Location: {user.location.city}, {user.location.country}
      </p>
      <br />
      <p className={styles.phone}>Phone: {user.phone}</p>
      <br />
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  )
}

export default UserProfile
