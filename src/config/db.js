import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
    logging: false, // đổi thành console.log để xem câu SQL được sinh ra
  }
);

export async function connectDB() {
  await sequelize.authenticate();
  console.log("Đã kết nối MySQL");
}