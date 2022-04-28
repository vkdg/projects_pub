import styles from './Mainpage.module.scss'
import ContentContainer from '../../HOC/ContentContainer/ContentContainer'
import Categories from '../Categories/Categories'
import PromoBlock from '../PromoBlock/PromoBlock'
import CheckAddress from '../CheckAddress/CheckAddress'
import Catalog from '../Catalog/Catalog'
import AboutBlock from '../AboutBlock/AboutBlock'

const catalogItems = [
    {
        title: 'Пицца',
        filter: true,
        hashlink: 'cat2',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-1-1.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-1-2.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
            {
                image: require('../../resources/catalog/catalog-item-1-3.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-1-4.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-1-5.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-1-6.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-1-7.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                image: require('../../resources/catalog/catalog-item-1-8.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
        ]
    },
    {
        title: 'Суши',
        filter: true,
        hashlink: 'cat3',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-2-1.jpg'),
                title: 'Филадельфия кранч',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '475'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-2-2.jpg'),
                title: 'Филадельфия крем-брюле',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '395'
            },
            {
                image: require('../../resources/catalog/catalog-item-2-3.jpg'),
                title: 'Супер Филадельфия',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '425'
            },
            {
                image: require('../../resources/catalog/catalog-item-2-4.jpg'),
                title: 'Тигр мама',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '525'
            },
            {
                image: require('../../resources/catalog/catalog-item-2-5.jpg'),
                title: 'Тигр мама',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '525'
            },
            {
                image: require('../../resources/catalog/catalog-item-2-6.jpg'),
                title: 'Супер Филадельфия',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '425'
            },
            {
                image: require('../../resources/catalog/catalog-item-2-7.jpg'),
                title: 'Филадельфия кранч',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '475'
            },
            {
                image: require('../../resources/catalog/catalog-item-2-8.jpg'),
                title: 'Филадельфия крем-брюле',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '395'
            },
        ]
    },
    {
        title: 'Закуски',
        hashlink: 'cat5',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-3-1.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-3-2.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
            {
                image: require('../../resources/catalog/catalog-item-3-3.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-3-4.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-3-5.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-3-6.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-3-7.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                image: require('../../resources/catalog/catalog-item-3-8.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
        ]
    },
    {
        title: 'Десерты', 
        hashlink: 'cat7',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-4-1.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-4-2.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
            {
                image: require('../../resources/catalog/catalog-item-4-3.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-4-4.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-4-5.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-4-6.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-4-7.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                image: require('../../resources/catalog/catalog-item-4-8.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
        ]
    },
    {
        title: 'Напитки',
        hashlink: 'cat4',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-5-1.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-5-2.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
            {
                image: require('../../resources/catalog/catalog-item-5-3.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-5-4.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-5-5.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-5-6.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-5-7.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                image: require('../../resources/catalog/catalog-item-5-8.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
        ]
    },
    {
        title: 'Соусы',
        hashlink: 'cat8',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-6-1.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-6-2.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
            {
                image: require('../../resources/catalog/catalog-item-6-3.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-6-4.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-6-5.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-6-6.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-6-7.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                image: require('../../resources/catalog/catalog-item-6-8.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
        ]
    },
    {
        title: 'Комбо',
        hashlink: 'cat6',
        items: [
            {
                caption: 'NEW',
                image: require('../../resources/catalog/catalog-item-7-1.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                caption: 'ХИТ',
                image: require('../../resources/catalog/catalog-item-7-2.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
            {
                image: require('../../resources/catalog/catalog-item-7-3.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-7-4.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-7-5.jpg'),
                title: '4 сезона',
                description: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...',
                price: '630'
            },
            {
                image: require('../../resources/catalog/catalog-item-7-6.jpg'),
                title: 'EASY PEASY чикен а-ля хрен',
                description: 'Курица, Лук, Соус Карбонара,...',
                price: '249'
            },
            {
                image: require('../../resources/catalog/catalog-item-7-7.jpg'),
                title: 'Чикен Сладкий Чили',
                description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
                price: '399'
            },
            {
                image: require('../../resources/catalog/catalog-item-7-8.jpg'),
                title: 'EASY PEASY огуречный расколбас',
                description: 'Курица, Лук, Перец Халапеньо...',
                price: '549'
            },
        ]
    },
]

const Mainpage = props => {
    
    return (
        <section className={styles.Mainpage}>
            <ContentContainer>
                <Categories />
                <PromoBlock />
                <CheckAddress />
                {
                    catalogItems.map((catalog, index) => {
                        return (
                            <Catalog title={catalog.title} filter={catalog.filter} items={catalog.items} hashlink={catalog.hashlink} key={index} />
                        )
                    })
                }
                <AboutBlock />
            </ContentContainer>
            
        </section>
    )
}

export default Mainpage