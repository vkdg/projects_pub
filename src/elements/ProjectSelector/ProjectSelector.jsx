import { Link, useLocation } from 'react-router-dom'
import styles from './ProjectSelector.module.scss'
import { useState } from 'react'

const projects = [
    {
        name: 'Bello',
        link: 'bello',
        description: 'Free Figma Template'
    },
    {
        name: 'Куда пицца',
        link: 'kudapizza',
        description: 'Шаблон онлайн-пиццерии'
    }
]

const ProjectSelector = (props) => {
    const [projectSelectorMenuOpen, setProjectSelectorMenuOpen] = useState(false);

    const buttonClasses = [styles.ProjectSelector__button]  
    const listClasses = [styles.ProjectSelector__list]

    if (projectSelectorMenuOpen) {
        listClasses.push(styles.ProjectSelector__list__open)
        buttonClasses.push(styles.ProjectSelector__button__active)
    }

    /* -------- Location -------- */
    const currentLocation = useLocation().pathname

    let isMessenger = false
    if (/\/messenger?(.+)/.test(currentLocation)) isMessenger = true
    /* -------- Location -------- */

    return (
        !isMessenger ?
        <div className={styles.ProjectSelector}>
            <div className={styles.ProjectSelector__wrapper}>
                <div className={buttonClasses.join(' ')} onClick={() => {setProjectSelectorMenuOpen(!projectSelectorMenuOpen)}}>Project Menu</div>
                <div className={listClasses.join(' ')}>
                    {
                        projects.map((item, index) => {
                            return (
                                <Link key={index} to={item.link} className={styles.ProjectSelector__list__item} onClick={() => { setProjectSelectorMenuOpen(false) }}>
                                    <strong>{item.name}</strong>
                                    <p>{item.description}</p>
                                </Link>
                            )
                        })
                    }
                </div>
                <Link to="/" className={styles.ProjectSelector__back}>Back to Mainpage</Link>
            </div>
        </div>
        : null
    )
}

export default ProjectSelector 