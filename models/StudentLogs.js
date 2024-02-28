module.exports = (sequelize, DataTypes) => {

    const StudentLogs = sequelize.define("StudentLogs", {
        StudentId: {
            type: DataTypes.STRING,
        },
        Event: {
            type: DataTypes.STRING,
        },
        DateTime: {
            type: DataTypes.DATE,
        },
    })

    return StudentLogs;
}