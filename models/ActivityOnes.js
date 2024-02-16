module.exports = (sequelize, DataTypes) => {

    const ActivityOnes = sequelize.define("ActivityOnes", {
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