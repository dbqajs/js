// Example for mysql
module.exports = {

    // ruleid: sequelize_tls_cert_validation
    dev: {
        username: "0xdbe",
        database: "app_db",
        dialect: "mariadb",
        host: "127.0.0.1",
        dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
        }
    }
    };
    // Example for mysql
    module.exports = {
    
    // ruleid: sequelize_tls_cert_validation
    dev: {
        username: "0xdbe",
        database: "app_db",
        dialect: "mysql",
        host: "127.0.0.1",
        dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
        }
    }
    };
    
    
    // Example for postgresql
    module.exports = {
    
    // ruleid: sequelize_tls_cert_validation
    dev: {
        username: "0xdbe",
        database: "app_db",
        dialect: "postgres",
        host: "127.0.0.1",
        dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
        }
    }
    };
    