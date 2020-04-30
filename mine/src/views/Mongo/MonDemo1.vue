<template>
  <div id="MonDemo">
    <js-button @click="insert" plain>插入10条数据</js-button>
    <js-button type="danger" @click="getAll">查詢所有</js-button>
    <form ref="postdb">
      <input type="text" v-model="postdb.values" placeholder="查询年龄" />
      <js-button type="success" @click.prevent="toDB">提交</js-button>
    </form>
  </div>
</template>

<script>
import JsButton from "../../components/Button/button";
import validation from "../../util/formVaildation";
import qs from "querystring";
export default {
  name: "MonDemo",
  components: {
    JsButton
  },
  data() {
    return {
      postdb: {
        values: ""
      }
    };
  },
  methods: {
    insert() {
      this.axios
        .get("/insertData")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAll() {
      this.axios
        .get("/getAll")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toDB() {
      console.log(this.postdb);
      // validation.validate()
      // this.axios
      //   .post("/getData", qs.stringify(this.postdb), {
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded"
      //     }
      //   })
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style lang="scss">
</style>