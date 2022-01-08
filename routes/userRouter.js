const express = require('express')
const { route } = require('express/lib/application')
const { registerUser, authUser,userApplication,status,bookSlot,appList,viewApp,updateNewAppStat,approveNewAppStat,
    processingApp,rejectNewAppStat,approvedApp,allSlots,addSlot,cancelSlot} = require('../controllers/userController')
const router = express.Router()

router.post('/', registerUser)
router.post('/login', authUser)
router.post('/userApplication',userApplication)
router.get('/status/:id',status)
router.get('/adminHome',appList)
router.get('/viewApplication/:id',viewApp)
router.patch('/updateNewAppStatus/:id',updateNewAppStat)
router.patch('/approveNewAppStatus/:id',approveNewAppStat)
router.patch('/rejectNewAppStatus/:id',rejectNewAppStat)
router.get('/approved',approvedApp)
router.get('/processing',processingApp)
router.get('/allSlots',allSlots)
router.post('/addSlot',addSlot)
router.get('/cancelSlot/:appId',cancelSlot)
router.get('/slotBooking/:appId/:userId/:slotNo',bookSlot)

module.exports = router



