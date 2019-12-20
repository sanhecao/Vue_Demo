<template>
<div class="post-page">
  <h1 class="title">{{data.btitle}}</h1>
  <p class="createTime">{{data.bCreateTime }}</p>
  <div v-html="data.bcontent" ></div>
</div>
</template>

<script>
  import Vue from "vue";
    export default {
        name: "_id.vue",
        layout:"blog",
        validate({params}) {
            return /^\d+$/.test(params.id);
        },
        async asyncData({params,error}){
            let data={};
            try {
                data =await Vue.http.get(`blog/${params.id}`);
                return {
                    data:data
                };
            }catch (e) {
            }
        },
        fetch({store,params}){},
        data(){
            return { comments:[]};
        },
        head(){
            return {
                title: `${this.data.btitle}`,
                meta:[
                    {
                        name:"description",
                        content:this.data.btitle
                    }
                ]
            };
        },
        filters:{
            timeFormat:function (time) {
                if(!time) return "";
                return time;

            }
        },
        mounted() {
        },
        components:{}

    };
</script>

<style scoped>
@import "../../static/vue-blog-sq.css";
</style>
