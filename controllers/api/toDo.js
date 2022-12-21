const Activity = require('../../models/toDo')

const dataController = {
    // Index,
    index (req, res, next) {
      Activity.find({}, (err, foundActivities) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.activities = foundActivities
          next()
        }
      })
    },
    // Destroy
    destroy (req, res, next) {
      Activity.findByIdAndDelete(req.params.id, (err, deletedActivity) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.activity = deletedActivity
          next()
        }
      })
    },
    // Update
    update (req, res, next) {
      Activity.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedActivity) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.activity = updatedActivity
          next()
        }
      })
    },
    // Create
    create (req, res, next) {
      Activity.create(req.body, (err, createdActivity) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.activity = createdActivity
          next()
        }
      })
    },
    // Edit
    // Show
    show (req, res, next) {
      Activity.findById(req.params.id, (err, foundActivity) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
          })
        } else {
          res.locals.data.activity = foundActivity
          next()
        }
      })
    }
  }
  
  const apiController = {
      index (req, res, next) {
        res.json(res.locals.data.activities)
      },
      show (req, res, next) {
        res.json(res.locals.data.activity)
      }
    }
  
  module.exports = { dataController, apiController }