module.exports = (sequelize, DataTypes) => {

    const ActivityThrees = sequelize.define("ActivityThrees", {
        content: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        transcript_source_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        MLModel: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        AllowMLModel: {
            type: DataTypes.BOOLEAN, 
            allowNull: true, 
        }, 
        predefinedMLSelection: {
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

    // ActivityThrees.associate = (models) => {
    //     ActivityThrees.hasMany(models.ActivityFours, {
    //         onDelete: "cascade" 
    //     })
    // }

    ActivityThrees.associate = (models) => {
        ActivityThrees.hasMany(models.Activities, {
            onDelete: "cascade" 
        })
    }

    return ActivityThrees;
}