import styles from './PromoBlock.module.scss'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'

const promo1 = require('../../resources/svg/promo-1.svg').default
const promo2 = require('../../resources/svg/promo-2.svg').default

const PromoBlock = props => {
    return (
        <section className={styles.PromoBlock} id='sales'>
            <ContentContainer>
                <div className={styles.PromoBlock__content}>
                    <div className={[styles.PromoBlock__card, styles.PromoBlock__card__orange].join(' ')} style={{backgroundImage: `url('${promo1}')`}}>
                        <div className={styles.PromoBlock__card__text}>3 средние пиццы от 999 рублей</div>
                    </div>
                    <div className={[styles.PromoBlock__card, styles.PromoBlock__card__red].join(' ')} style={{backgroundImage: `url('${promo2}')`, backgroundPositionY: '40px'}}>
                        <div className={styles.PromoBlock__card__text}>Кэшбек 10% на самовывоз (доставка)</div>
                    </div>
                    <div className={[styles.PromoBlock__card, styles.PromoBlock__card__orange].join(' ')} style={{backgroundImage: `url('${promo1}')`}}>
                        <div className={styles.PromoBlock__card__text}>3 средние пиццы от 999 рублей</div>
                    </div>
                    <div className={[styles.PromoBlock__card, styles.PromoBlock__card__red].join(' ')} style={{backgroundImage: `url('${promo2}')`, backgroundPositionY: '40px'}}>
                        <div className={styles.PromoBlock__card__text}>Кэшбек 10% на самовывоз (доставка)</div>
                    </div>
                </div>
            </ContentContainer>
        </section>
    )
}

export default PromoBlock