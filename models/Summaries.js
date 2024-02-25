module.exports = (sequelize, DataTypes) => {

    const Summaries = sequelize.define("Summaries", {
        InstructorId: {
            type: DataTypes.INTEGER,
        },
        ActivitySequenceId: {
            type: DataTypes.JSON
        },
        StudentId: {
            type: DataTypes.INTEGER,
        },
        StudentTemplateId: {
            type: DataTypes.JSON,
        },
        InstructorId: {
            type: DataTypes.INTEGER,
        },
        IntervieweeSentenceA1Index: {
            type: DataTypes.INTEGER,
        },
        IntervieweeSentenceContentA1: {
            type: DataTypes.JSON
        },
        SentenceUserHighlightA2: {
            type: DataTypes.JSON
        }


    })

    return Summaries;
}