module.exports = (sequelize, DataTypes) => {

    const ActivitySixs = sequelize.define("ActivitySixs", {
        content: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    ActivitySixs.associate = (models) => {
        ActivitySixs.hasMany(models.Activities, {
            onDelete: "cascade" 
        })
    }

    return ActivitySixs;
}