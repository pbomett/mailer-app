const Sequelize = require('sequelize');
const db = require('../config/database');

const Learner = db.define('learner', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    ip1: {
        type: Sequelize.NUMBER
    },
    ip2: {
        type: Sequelize.NUMBER
    },
    ip3: {
        type: Sequelize.NUMBER
    },
    ip4: {
        type: Sequelize.NUMBER
    },
    attendance: {
        type: Sequelize.STRING
    },
    recommend1: {
        type: Sequelize.STRING
    },
    reason1: {
        type: Sequelize.STRING
    },
    recommend2: {
        type: Sequelize.STRING
    },
    reason2: {
        type: Sequelize.STRING
    }
}) 
module.exports = Learner;