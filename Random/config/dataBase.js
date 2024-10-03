import Sequelize from "sequelize";

const dataBase = new Sequelize('db_user', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

export {
    dataBase
}

// Lo único que se le debe cambiar a esta plantilla es el nombre de la db (db_user)