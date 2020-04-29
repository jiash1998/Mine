var express = require("express");
var router = express.Router();
var operateDB = require("../DBOperate/operateDB");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/getData", (req, res) => {
  return res.json({
    status: "data",
    msg: "保存成功1",
  });
  //   operateDB.insert((err, data)=>{
  //      if (err) {
  //        return res.json({
  //          status: "发送错误",
  //          msg: "连接错误",
  //        });
  //      }
  //      res.json({
  //        status: "data",
  //        msg: "保存成功",
  //      });
  //   });
});

module.exports = router;
