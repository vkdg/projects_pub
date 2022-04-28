import styles from './Catalog.module.scss'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'
import ProductCard from './ProductCard/ProductCard'
import FiltersButton from '../../Elements/FiltersButton/FiltersButton'

const Catalog = props => {
    return (
        <section className={styles.Catalog}>
            <ContentContainer>
                <div className={styles.Catalog__content}>
                    <div className={styles.Catalog__content__heading} id={props.hashlink}>
                        <h2 className={styles.Catalog__content__title}>{props.title}</h2>
                        { 
                        
                            props.filter ? 
                            <FiltersButton />
                            : null
                        
                        }
                    </div>
                    {
                        props.items ?
                        <div className={styles.Catalog__content__items}>
                            {
                                props.items.map((item, index) => {
                                    return (
                                        <ProductCard data={item} key={index} />
                                    )
                                })
                            }
                        </div>
                        : null    
                    }
                </div>
            </ContentContainer>
        </section>
    )
}

export default Catalog