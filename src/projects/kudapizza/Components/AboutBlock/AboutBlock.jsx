import { useState } from 'react'
import styles from './AboutBlock.module.scss'

const AboutBlock = props => {
    const [showFull, setShowFull] = useState(false)

    const showMoreHandler = (e) => {
        setShowFull(true);
        e.target.remove();
    }

    const contentClasses = [styles.AboutBlock__content];
    if (!showFull) contentClasses.push(styles.AboutBlock__content__hidden);
    return (
        <section className={styles.AboutBlock}>
            <div className={contentClasses.join(' ')}>
                <h2 className={styles.AboutBlock__title}>Доставка пиццы в Москве</h2>
                <div className={styles.AboutBlock__description}>
                    <p>Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.</p>
                    <h3>Как сделать заказ</h3>
                    <p>Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!</p>
                </div>
            </div>
            <div className={styles.AboutBlock__showMore} onClick={showMoreHandler}>Показать полностью</div>
        </section>
    )
}

export default AboutBlock