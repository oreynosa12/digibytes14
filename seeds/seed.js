const sequelize = require ('../config/connection')
const postseeds = require ('./postseeds')
const commentseeds = require ('./commentseeds')
const userseeds = require ('./userseeds')

const seeddb = async () =>{
    await sequelize.sync({ force: true });
    console.log('Database Connected')

    await userseeds()
    console.log('Users created')
    process.exit(0)


}
seeddb()