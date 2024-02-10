module.exports = (sequelize, DataTypes) => {

    const ActivityTwos = sequelize.define("ActivityTwos", {
        activity_description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        content: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        transcript_source_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        predefinedHighlighting: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    })

    // ActivityTwos.associate = (models) => {
    //     ActivityTwos.hasMany(models.ActivityThrees, {
    //         onDelete: "cascade" 
    //     })
    // }

    ActivityTwos.associate = (models) => {
        ActivityTwos.hasMany(models.Activities, {
            onDelete: "cascade" 
        })
    }

    return ActivityTwos;
}