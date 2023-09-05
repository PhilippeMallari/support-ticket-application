// Database schema, all the fields that are needed for the software.

const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'Android', 'BlackBerry', 'Windows Phone', 'Macbook Pro', 'iMac', 'iPad']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the issue'],
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Ticket', ticketSchema);