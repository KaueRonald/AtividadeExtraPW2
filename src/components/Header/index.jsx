import styles from './Header.module.css';

import SertaoCompImg from '../../assets/sertaocomp-logo.svg'

export function Header(){

  return (
    <header className={styles.header}>
      <img src={SertaoCompImg} />
      
      <strong>Sertaocomp Feed</strong>
    </header>
  )
}