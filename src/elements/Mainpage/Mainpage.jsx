import React, { useEffect } from 'react'
import styles from './Mainpage.module.scss'
import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'Bello',
        caption: 'Бесплатный шаблон из Figma',
        image: require('../../projects/bello/projects-bello.jpg'),
        link: '/bello'
    },
    {
        title: 'Куда Пицца',
        caption: 'Шаблон онлайн-пиццерии',
        image: require('../../projects/kudapizza/projects-kudapizza.jpg'),
        link: '/kudapizza'
    }
]

const Mainpage = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <section className={styles.Mainpage}>
            <div className={styles.Mainpage__wrapper}>
                <h1 className={styles.Mainpage__title}>Mainpage</h1>
                <div className={styles.Mainpage__projects}>
                    {
                        projects.map((project, index) => {
                            return (
                                <Link to={project.link} key={index} className={styles.Mainpage__projects__item}>
                                    <div className={styles.Mainpage__projects__item__image} style={{backgroundImage: `url('${project.image}')`}}></div>
                                    <div className={styles.Mainpage__projects__item__description}>
                                        <h2 className={styles.Mainpage__projects__item__title}>{project.title}</h2>
                                        <p className={styles.Mainpage__projects__item__caption}>{project.caption}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Mainpage