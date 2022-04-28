import styles from './HeaderNavigation.module.scss'

const navigationLinks = [
    { title: 'Акции', hashlink: 'sales' },
    { title: 'Пицца', hashlink: 'cat2' },
    { title: 'Суши', hashlink: 'cat3' },
    { title: 'Напитки', hashlink: 'cat4' },
    { title: 'Закуски', hashlink: 'cat5' },
    { title: 'Комбо', hashlink: 'cat6' },
    { title: 'Десерты', hashlink: 'cat7' },
    { title: 'Соусы', hashlink: 'cat8' }
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

const HeaderNavigation = props => {
    return (
        <div className={styles.HeaderNavigation}>
            {
                navigationLinks.map((element, index) => {
                    return (
                        <div className={styles.HeaderNavigation__link} data-go={element.hashlink} onClick={onClickHandle} key={index}>{element.title}</div>
                    )
                })
            }
            <div className={styles.HeaderNavigation__list}>Другое</div>
        </div>
    )
}

export default HeaderNavigation