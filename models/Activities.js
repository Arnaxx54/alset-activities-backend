module.exports = (sequelize, DataTypes) => {

    const Activities = sequelize.define("Activities", {
        UserId: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    Activities.associate = (models) => {
        Activities.hasMany(models.InstructorLogs, {
            foreignKey: 'ActivitySequenceId',
        })
        Activities.hasMany(models.StudentLogs, {
            foreignKey: 'StudentTemplateId',
        })
    }



    return Activities;
}