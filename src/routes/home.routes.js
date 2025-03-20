import { Router, static as sendStaticFiles } from 'express'

const homeRouter = Router()

homeRouter.get('/', sendStaticFiles('public/home'))

export default homeRouter
