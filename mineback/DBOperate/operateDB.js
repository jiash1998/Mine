var mineModel = require("../DBOperate/connectDB");

exports.insert = (callback) => {
  var arr = [];
  let j;
  for (let i = 0; i < 5; i++) {
    let i = Math.ceil(Math.random() * 1000 + 3);
    let item = {
      name: "test" + i,
      age: i,
    };
    arr.push(item);
  }
  // j = new mineModel(item);
  // j.save()
  //   .then((pro) => {
  //     console.log("保存成功", pro);
  //   })
  //   .catch((err) => {
  //     console.log("保存失败", err);
  //   });
  mineModel
    .insertMany(arr)
    .then((pro) => {
      console.log("保存成功", pro);
    })
    .catch((err) => {
      console.log("保存失败", err);
    });
  // let set = new Set(arr);
  // console.log(set);
  // console.log(set.size);
  callback(null);
};
