import { Router } from 'express'
import { getAllCards, getAllCardsFromPack } from '../controllers/cards.js'

const router = Router()

router.get('/all-cards', getAllCards)
router.get('/:packType', getAllCardsFromPack)

export default router
