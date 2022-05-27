import { DataSource } from "typeorm";

const SFMDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'auth',
    entities: [
        "src/app/models/SFM/*.ts"
    ],
    migrations: [
        "src/database/migrations/Auth/*.ts"
    ],
});


export default SFMDataSource;


