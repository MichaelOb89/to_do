const {Schema, model} = require('mongoose')

const toDoSchema = new Schema({
    text: {type: String, required: true},
    completed: {type: Boolean, required: true}
})

const Activity = model('Activity', toDoSchema)

module.exports = Activity