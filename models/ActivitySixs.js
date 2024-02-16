module.exports = (sequelize, DataTypes) => {

    const ActivitySixs = sequelize.define("ActivitySixs", {
        content: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instruction : {
            type: DataTypes.TEXT('medium'),
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