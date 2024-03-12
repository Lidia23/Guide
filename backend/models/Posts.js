module.exports = (sequelize, DataTypes) => {
    const posts = sequelize.define("posts", {
        uniname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uniimage: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    posts.associate = (modules) => {
        posts.hasMany(modules.programs, {
            onDelete: "cascade",
        });
    }
    return posts;
}