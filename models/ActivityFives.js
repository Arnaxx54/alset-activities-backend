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
        },
        label: {
            type: DataTypes.STRING,
            allowNull: true
        },
        instruction : {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    ActivityFives.associate = (models) => {
        ActivityFives.hasMany(models.Activities, {
            onDelete: "cascade",
            foreignKey: 'ActivityFiveId',
        })
    }

    return ActivityFives;
}