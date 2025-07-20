import Link from 'next/link'
import styles from './about.module.css'

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Sobre</h1>
      <p className={styles.description}>Esta é uma página de exemplo para demonstrar o roteamento do Next.js.</p>
      
      <div className={styles.info}>
        <h2>Tecnologias utilizadas:</h2>
        <ul>
          <li>Next.js 15 com App Router</li>
          <li>React 19</li>
          <li>TypeScript</li>
          <li>CSS Modules</li>
        </ul>
      </div>

      <Link href="/" className={styles.backLink}>← Voltar para Home</Link>
    </main>
  )
}