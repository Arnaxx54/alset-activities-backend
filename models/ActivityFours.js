module.exports = (sequelize, DataTypes) => {

    const ActivityFours = sequelize.define("ActivityFours", {
        content: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    // ActivityFours.associate = (models) => {
    //     ActivityFours.hasMany(models.ActivityFives, {
    //         onDelete: "cascade" 
    //     })
    // }

    ActivityFours.associate = (models) => {
        ActivityFours.hasMany(models.Activities, {
            onDelete: "cascade" 
        })
    }

    return ActivityFours;
}