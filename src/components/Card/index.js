import { MdWatchLater } from 'react-icons/md';

import styles from './styles.module.scss';

export function Card(){
  return (
    <main className={styles.container}>
      <img src="/images/image-equilibrium.jpg" alt="Equilibrium" />
      <section className={styles.box}>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className={styles.info}>
          <h2>0.041 ETH</h2>
          <span>
            <MdWatchLater />
            <p>3 days left</p>
          </span>
        </div>
      </section>

      <span className={styles.footer}>
        <img src="/images/image-avatar.png" alt="Jules Jordan" />
        <div className={styles.detail}>
          <h4>Creation of <p>Vinícius de Souto</p>.</h4>
        </div>
      </span>
    </main>
  )
}