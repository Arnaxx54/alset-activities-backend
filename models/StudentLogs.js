module.exports = (sequelize, DataTypes) => {

    const StudentLogs = sequelize.define("StudentLogs", {
        DateTime: {
            type: DataTypes.DATE,
        },
        StudentId: {
            type: DataTypes.STRING
        },
        Event: {
            Type: DataTypes.JSON
        }


    })

    return StudentLogs;
}