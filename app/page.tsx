import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Bem-vindo ao Next.js!</h1>
      <p className={styles.description}>Esta é uma aplicação de teste para deploy na AWS.</p>
      
      <div className={styles.features}>
        <div className={styles.card}>
          <h2>🚀 Next.js 15</h2>
          <p>Framework React moderno com App Router</p>
        </div>
        
        <div className={styles.card}>
          <h2>⚡ TypeScript</h2>
          <p>Tipagem estática para maior segurança</p>
        </div>
        
        <div className={styles.card}>
          <h2>☁️ AWS Deploy</h2>
          <p>Pronto para deploy na nuvem</p>
        </div>
      </div>
    </main>
  )
}