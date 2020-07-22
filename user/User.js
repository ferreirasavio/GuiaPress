const Sequelize = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
            type: Sequelize.STRING,
            allowNull: false
    }
})

//User.sync({force: false}) essa linha úsada para forçar a criar a tabela, então depoois de forçado pode apagar a linha pra não tentar criar a tabela toda hora

module.exports = User