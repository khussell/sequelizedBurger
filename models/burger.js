module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: [4]
            }
        },
        isDevoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burger.associate = function(models){
        Burger.belongsTo(models.Eater, {
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Burger;
};