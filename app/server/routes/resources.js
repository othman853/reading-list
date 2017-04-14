import {Router} from 'express'

const stubData = [
  {
    title: 'Learning stuff as an adult',
    source: 'https://getpocket.com/a/read/1656967172',
    tags: ['Self Improvement']
  },
  {
    title: '6 TED Talks about decisions',
    source: 'https://getpocket.com/a/read/1656966981',
    tags: ['Self Improvement']
  },
  {
    title: 'Electron is flash for desktop',
    source: 'https://josephg.com/blog/electron-is-flash-for-the-desktop/',
    tags: ['Tech Gossip', 'Tech Opinion']
  },
  {
    title: 'Smartphones are dead',
    source: 'http://www.businessinsider.com/death-of-the-smartphone-and-what-comes-after-2017-3?utm_source=pocket&utm_medium=email&utm_campaign=pockethits',
    tags: ['Tech Trend', 'Tech Opinion', 'Tech Prediction']
  },
  {
    title: 'Useful mental models',
    source: 'https://getpocket.com/a/read/1341799552',
    tags: ['Self Improvement']
  }
]

const router = Router()

router.route('/resources')
  .get((request, response) => {
    return response.json(stubData)
  })
  .post((request, response) => {
    return response.sendStatus(201)
  })

export default router
