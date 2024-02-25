module.exports = (sequelize, DataTypes) => {

    const Activities = sequelize.define("Activities", {
        UserId: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    Activities.associate = (models) => {
        Activities.hasMany(models.InstructorLogs)
        Activities.hasMany(models.StudentLogs)
    }



    return Activities;
}