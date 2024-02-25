module.exports = (sequelize, DataTypes) => {

    const InstructorLogs = sequelize.define("InstructorLogs", {
        InstructorId: {
            type: DataTypes.STRING,
        },
        InstructorEvent: {
            type: DataTypes.JSON,
        }
    })

    return InstructorLogs;
}