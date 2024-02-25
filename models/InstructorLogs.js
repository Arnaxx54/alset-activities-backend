module.exports = (sequelize, DataTypes) => {

    const InstructorLogs = sequelize.define("InstructorLogs", {
        DateTime: {
            type: DataTypes.DATE,
        },
        InstructorId: {
            type: DataTypes.STRING,
        },
        InstructorEvent: {
            type: DataTypes.STRING,
        }
    })

    return InstructorLogs;
}