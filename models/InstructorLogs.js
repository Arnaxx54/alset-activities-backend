module.exports = (sequelize, DataTypes) => {

    const InstructorLogs = sequelize.define("InstructorLogs", {
        DateTime: {
            type: DataTypes.DATE,
        },
        InstructorId: {
            type: DataTypes.STRING
        },
        Event: {
            Type: DataTypes.JSON
        }


    })

    return InstructorLogs;
}