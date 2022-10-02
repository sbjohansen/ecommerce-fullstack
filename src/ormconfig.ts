export = {
  type: 'mysql',
  host: '212.107.17.103',
  port: 3306,
  username: 'u861488330_root',
  password: process.env.DB_PASSWORD,
  database: 'u861488330_shoppingDB',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
};
