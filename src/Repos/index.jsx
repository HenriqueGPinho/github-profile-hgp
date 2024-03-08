import Card from './Card'
import styles from './Repos.module.css'

export default function Repos({ repos }) {
  return(
    <main className={styles.Repos}>
      <div className={styles.container}>
        {repos.map(item => {
          return(
            <Card 
              name={item.name}
              description={item.description}
              language={item.language}
              htmlURL={item.html_url}
            />
          )
        })}
      </div>
    </main>
  )
}