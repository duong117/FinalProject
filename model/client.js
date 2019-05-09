
module.exports=(sequelize,DataTypes) => {

    var Client=sequelize.define('Client',{
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },when: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },type: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },male: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },female: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
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
