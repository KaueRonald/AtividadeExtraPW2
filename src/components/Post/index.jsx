
import styles from './index.module.css';
import { Avatar } from '../Avatar';
export function Post() {

  return (
    <div className={styles.card}>

      <div className={styles.container}>
        <Avatar />

        <div className={styles.profile}>
          <strong>Kauê Ronald</strong>
          <span>Full Stack Developer</span>
        </div>
        <time className={styles.time}>Publicado há 1h</time>
      </div>

      <div className={styles.text}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de realizar o minicurso de React no evento SertaoComp.Vocês gostaram? 🚀</p>
        <div className={styles.hashtag}>
          <h4>#typescript #React #sertaocomp</h4>
        </div>
      </div>

      <hr className={styles.line} />

      {/* aqui falta o formulario */}
      <form className={styles.form}>
        <span>Deixe seu feedback</span>
        <textarea className={styles.area} />
        <button className={styles.button} type="submit">Publicar</button>
      </form>

    </div>
  )
}