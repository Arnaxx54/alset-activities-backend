module.exports = (sequelize, DataTypes) => {

    const ActivityOnes = sequelize.define("ActivityOnes", {
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
        transcriptEditable: {
            type: DataTypes.BOOLEAN, 
            allowNull: true
        }
    })

    // ActivityOnes.associate = (models) => {
    //     ActivityOnes.hasMany(models.ActivityTwos, {
    //         onDelete: "cascade" 
    //     })
    // }

    ActivityOnes.associate = (models) => {
        ActivityOnes.hasMany(models.Activities, {
            onDelete: "cascade" 
        })
    }

    return ActivityOnes;
}