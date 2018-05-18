module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('user_review', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: Sequelize.INTEGER,
      product_id: Sequelize.INTEGER,
      user_id: Sequelize.INTEGER,
      rating: Sequelize.FLOAT,
      review: Sequelize.STRING,
      created_at: Sequelize.INTEGER,
      updated_at: Sequelize.INTEGER,
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('web_admin');
  },
};
