const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post(
  "/signin",
  asyncHandler(async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      id: req.body.id,
      password: hashedPassword,
    });
    res.json(`user created: ${user}`);
  })
);
router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { id, password } = req.body;
    // 사용자 이름으로 사용자 찾기
    const user = await User.findOne({ id });
    // 일치하는 사용자가 없으면 401 오류 표시
    if (!user) {
      return res.status(401).json({ message: "일치하는 사용자가 없습니다." });
    }
    // 입력한 비밀번호와 DB에 저장된 비밀번호 비교
    const isValidPassword = await bcrypt.compare(password, user.password);
    // 비밀번호가 일치하지 않으면 401 오류 표시
    if (!isValidPassword) {
      return res.json({ message: false });
    }
    // JWT 토큰 생성
    // 토큰을 쿠키에 저장
    // 로그인 성공 후에 전체 게시물 목록 페이지로 이동
    return res.json({ message: true });
  })
);
router.post(
  "/signup",
  asyncHandler(async (req, res) => {})
);
module.exports = router;
