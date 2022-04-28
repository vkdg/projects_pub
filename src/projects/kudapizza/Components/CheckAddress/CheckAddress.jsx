import ContentContainer from '../../HOC/ContentContainer/ContentContainer'
import Button from '../../Elements/Button/Button'
import styles from './CheckAddress.module.scss'


const CheckAddress = props => {
    return (
        <section className={styles.CheckAddress}>
            <ContentContainer>
                <div className={styles.CheckAddress__content}>
                    <div className={styles.CheckAddress__content__text}>Проверить адрес доставки</div>
                    <input className={styles.CheckAddress__content__input} placeholder='Адрес' />
                    <Button theme='primary'>Проверить</Button>       
                </div>
            </ContentContainer>
        </section>
    )
}

export default CheckAddress