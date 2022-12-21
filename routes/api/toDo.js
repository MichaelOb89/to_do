const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/toDo')

//=========INDEX ROUTE=========
router.get('/', dataController.index, apiController.index)
//=========DELETE ROUTE=========
router.delete('/:id', dataController.destroy, apiController.show)
//=========UPDATE ROUTE=========
router.put('/:id', dataController.update, apiController.show)
//=========CREATE ROUTE=========
router.post('/', dataController.create, apiController.show)
//=========SHOW ROUTE=========
router.get('/:id', dataController.show, apiController.show)

module.exports = router
