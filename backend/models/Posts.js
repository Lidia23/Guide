module.exports = (sequelize, DataTypes) => {
    const posts = sequelize.define("posts", {
        uniname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uniimage: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        uniprograms: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
    return posts;
}