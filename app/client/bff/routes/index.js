import services from '../services'
import {Router} from 'express'
import Route from './Route'
import resources from './resources'

const router = Router()

const route = router.route.bind(router)

resources(route('/resources'))(services.resources)

export default router
