module.exports = (sequelize, DataType) => {
    const programs = sequelize.define("programs", {
        programimg:{
            type: DataType.STRING,
            allowedNull: true
        },
        uniprograms:{
            type: DataType.STRING,
            allowedNull: false
        }
    })
    return programs;
}