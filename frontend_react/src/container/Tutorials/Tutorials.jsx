import React, { useState, useEffect } from 'react';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion/dist/framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Tutorials.scss';


const Tutorials = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [tutorials, setTutorials] = useState([]);
  const [filterTutorial, setFilterTutorial] = useState([]);

  useEffect(() => {
    const query = '*[_type =="tutorials"]'
    client.fetch(query)
      .then((data) => {
        setTutorials(data);
        setFilterTutorial(data);
      })

  }, [])



  const handleTutorialFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);


    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterTutorial(tutorials)
      } else {
        setFilterTutorial(tutorials.filter((tutorial) => tutorial.tags.includes(item)))
      }

    }, 500);

  }


  return (
    <>
      <h2 className='head-text'>
        Tutorials Section <span> For Beginners  </span>
      </h2>

      <div className='app__tutorial-filter'>
        {['All', 'HTML & CSS', 'JavaScript', 'React'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleTutorialFilter(item)}
            className={`app__tutorial-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''} `}
          >

            {item}

          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__tutorial-portfolio"
      >

        {filterTutorial.map((tutorial, index) => (
          <div className='app__tutorial-item app__flex' key={index}>
            <div className="app__tutorial-img app__flex">
              <img src={urlFor(tutorial.imgUrl)} alt={tutorial.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__tutorial-hover app__flex"
              >

                <a href={tutorial.tutorialLink} target="blank" rel="noreferr" >


                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillYoutube />
                  </motion.div>


                </a>
                <a href={tutorial.codeLink} target="blank" rel="noreferr" >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />

                  </motion.div>

                </a>
              </motion.div>

            </div>
            <div className='app__tutorial-content app__flex'>
              <div className='mobile_buttons'>
                <a href={tutorial.tutorialLink} target="blank" rel="noreferr"> <AiFillYoutube color='red' />  </a>
                <a href={tutorial.codeLink} target="blank" rel="noreferr" > <AiFillGithub /></a>
              </div>
              <h4 className='bold-text'>
                {tutorial.title}
              </h4>

              <p className='p-text' style={{ marginTop: 10 }}>{tutorial.description}</p>

              <div className='app__tutorial-tag app__flex' >
                <p className='p-text'>{tutorial.tags[0]}</p>
              </div>

            </div>

          </div>
        ))}

      </motion.div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Tutorials, 'app__tutorials'),
  'tutorials',
  'app__primarybg'
)