"use client"
import React, { useContext } from 'react'
import styles from "./dashboard.module.scss"
import { AuthContext } from '@/context/AuthContext'
import Button from '@/components/button/Button'

function page() {
  const { user , logout } = useContext(AuthContext)
  return (
    <div className={styles.container}>
      <img src={user?.image} alt={user?.name} className={styles.profileImage} />
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span>name :</span> {user?.name}
        </div>
        <div className={styles.infoItem}>
          <span>email :</span> {user?.email}
        </div>
        <div className={styles.infoItem}>
          <span>gender :</span> {user?.gender}
        </div>
        <div className={styles.infoItem}>
          <span> location :</span> {user?.location}
        </div>
        <div className={styles.infoItem}>
          <span>mobile :</span> {user?.mobile}
        </div>
      </div>
      <Button title='Log Out' onClick={logout} />
    </div>
  )
}

export default page