module.exports = (sequelize, DataTypes) => {

    const ActivityFives = sequelize.define("ActivityFives", {
        content: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        MLClusters: {
            type: DataTypes.BOOLEAN, 
            allowNull: true 
        }
    })

    // ActivityFives.associate = (models) => {
    //     ActivityFives.hasMany(models.ActivitySixs, {
    //         onDelete: "cascade" 
    //     })
    // }

    ActivityFives.associate = (models) => {
        ActivityFives.hasMany(models.Activities, {
            onDelete: "cascade",
            foreignKey: 'ActivityFiveId',
        })
    }

    return ActivityFives;
}