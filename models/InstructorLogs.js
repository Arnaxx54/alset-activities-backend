module.exports = (sequelize, DataTypes) => {

    const InstructorLogs = sequelize.define("InstructorLogs", {
        InstructorId: {
            type: DataTypes.STRING,
        },
        Event: {
            type: DataTypes.STRING,
        },
        DateTime: {
            type: DataTypes.DATE,
        },
    })

    return InstructorLogs;
}