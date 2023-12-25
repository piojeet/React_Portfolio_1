import React from 'react'
import './porfolio.css'
import IMG1 from '../../asests/portfolio1.jpg'
import IMG2 from '../../asests/portfolio2.jpg'
import IMG3 from '../../asests/portfolio3.jpg'
import IMG4 from '../../asests/portfolio4.jpg'
import IMG5 from '../../asests/portfolio5.png'
import IMG6 from '../../asests/portfolio6.jpg'

// USE THE IMAGES MULTUPLE 

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
            <div className="portfolio__item__image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item__cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default porfolio
