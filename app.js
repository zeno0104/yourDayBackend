const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require("cors"); // ✅ CORS 모듈 추가
const connectDb = require("./config/db");
connectDb();
app.use(cors()); // ✅ 모든 출처 허용 (개발 환경용)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", require("./routes/user"));
app.use("/", require("./routes/content"));

app.listen(3000, () => {
  console.log("서버 실행 중");
});
