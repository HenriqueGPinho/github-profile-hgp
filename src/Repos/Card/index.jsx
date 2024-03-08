import styles from './Card.module.css'

export default function Card({ name, description, language, htmlURL }) {
  return (
    <div className={styles.Card}>
      <h2 className={styles.title}>{name}</h2>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${styles.description}`}>{description}</li>
        <li className={styles.listItem}>{language}</li>
        <li className={styles.listItem}><a target='_blank' href={htmlURL}>Visit Repository</a></li>
      </ul>
    </div>
  )
}