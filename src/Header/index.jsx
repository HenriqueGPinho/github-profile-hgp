import styles from './Header.module.css'

export default function Header({ avatar, user }) {
  return(
    <header className={styles.Header}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <span className={styles.username}>{user}</span>
    </header>
  )
}