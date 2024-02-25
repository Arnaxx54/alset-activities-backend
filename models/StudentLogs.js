module.exports = (sequelize, DataTypes) => {

    const StudentLogs = sequelize.define("StudentLogs", {
        StudentId: {
            type: DataTypes.STRING,
        },
        StudentEvent: {
            type: DataTypes.JSON,
        },
    })

    return StudentLogs;
}