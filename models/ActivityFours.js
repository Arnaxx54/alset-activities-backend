module.exports = (sequelize, DataTypes) => {

    const ActivityFours = sequelize.define("ActivityFours", {
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

    ActivityFours.associate = (models) => {
        ActivityFours.hasMany(models.Activities, {
            onDelete: "cascade" 
        })
    }

    return ActivityFours;
}