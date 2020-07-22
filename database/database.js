const Sequelize = require('sequelize')

const connection = new Sequelize('guiaprogramador', 'ferreira', 'hon91529462dacivic',{
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
    timezone: '-03:00'
})



module.exports = connection