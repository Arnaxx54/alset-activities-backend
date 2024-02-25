module.exports = (sequelize, DataTypes) => {

    const StudentLogs = sequelize.define("StudentLogs", {
        StudentId: {
            type: DataTypes.STRING,
        },
        StudentEvent: {
            type: DataTypes.JSON,
        },
        tobeDeleted: {
            type: DataTypes.STRING,
        }
    })

    return StudentLogs;
}