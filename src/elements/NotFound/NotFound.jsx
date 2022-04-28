import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = (props) => {
    return (
        <section className={styles.NotFound}>
            <div className={styles.NotFound__wrapper}>
                <div className={styles.NotFound__image}></div>
                <h1 className={styles.NotFound__title}>Страница не найдена</h1>
                <p className={styles.NotFound__paragraph}>Извините, страница которую вы запрашиваете не существует или удалена</p>
                <Link className={styles.NotFound__link} to="/">Вернуться на главную</Link>
            </div>
        </section>
    )
}

export default NotFound