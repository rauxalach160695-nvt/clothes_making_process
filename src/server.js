import "dotenv/config";               // phải nằm dòng đầu để nạp .env trước
import app from "./app.js";
import { connectDB, sequelize } from "./config/db.js";
import "./models/index.js";           // nạp model để sync biết cần tạo bảng nào

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();          // tạo bảng nếu chưa có
  console.log("Đã đồng bộ bảng");

  app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Không thể khởi động server:", err);
  process.exit(1);
});