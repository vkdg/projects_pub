import styles from './Categories.module.scss'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'

const categoriesList = [
    { name: 'Акции', icon: require('../../resources/svg/categories/categories-1.svg'), hashlink: 'sales' },
    { name: 'Пицца', icon: require('../../resources/svg/categories/categories-2.svg'), hashlink: 'cat2' },
    { name: 'Суши', icon: require('../../resources/svg/categories/categories-3.svg'), hashlink: 'cat3' },
    { name: 'Напитки', icon: require('../../resources/svg/categories/categories-4.svg'), hashlink: 'cat4' },
    { name: 'Закуски', icon: require('../../resources/svg/categories/categories-5.svg'), hashlink: 'cat5' },
    { name: 'Комбо', icon: require('../../resources/svg/categories/categories-6.svg'), hashlink: 'cat6' },
    { name: 'Десерты', icon: require('../../resources/svg/categories/categories-7.svg'), hashlink: 'cat7' },
    { name: 'Соусы', icon: require('../../resources/svg/categories/categories-8.svg'), hashlink: 'cat8' }
]

const onClickHandle = function(e) {
    const currentElement = e.target
    const targetHash = currentElement.getAttribute('data-go')
    const scrollToElement = document.querySelector(`#${targetHash}`)
    
    if (scrollToElement) {
        const scrollToY = scrollToElement.offsetTop 
        window.scrollTo({
            top: scrollToY - 73 - 30,
            behavior: 'smooth'
        })
    }
}

const Categories = props => {
    return (
        <section className={styles.Categories}>
            <ContentContainer>
                <div className={styles.Categories__content}>
                    {
                        categoriesList.map((cat, index) => {
                            return(
                                <div className={styles.Categories__content__item} data-go={cat.hashlink} key={index} onClick={onClickHandle}>
                                    <div className={styles.Categories__content__item__icon} style={{backgroundImage: `url('${cat.icon.default}')`}} />
                                    <div className={styles.Categories__content__item__title}>{cat.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </ContentContainer>
        </section>
    )
}

export default Categories