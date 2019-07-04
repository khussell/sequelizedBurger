module.exports = function(sequelize, DataTypes){
    var Eater = sequelize.define("Eater", {
        eaterName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    });
    Eater.associate = function(models){
        Eater.hasMany(models.Burger,{
            onDelete: "cascade"
        });
    };
    return Eater;
}