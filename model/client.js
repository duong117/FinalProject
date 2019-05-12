
module.exports=(sequelize,DataTypes) => {

    var Client=sequelize.define('Client',{
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },when: {
            type: DataTypes.DATE,
            allowNull:false,
        },type: {
            type: DataTypes.STRING,
            allowNull:false
        },male: {
            type: DataTypes.STRING,
            allowNull:false,
        },female: {
            type: DataTypes.STRING,
            allowNull:false,
        },present:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
    })
    Client.sync({force:true}).then(() => {
        console.log('synced table')
    })

    return Client
}
