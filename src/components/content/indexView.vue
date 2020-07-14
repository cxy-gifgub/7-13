<template>
  <div>
      <div id="container-views">
          <div class="video-item" @click="get"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        get: function () {
                axios({
                    method: 'get',
                    dataType: "jsonp",
                    url:"https://run.mocky.io/v3/1999ad78-fabb-45e7-a0ea-48c1bdcd67d8"
                }).then(function (response) {
                    console.log(response.data.data.archives);
                    this.dataList = response.data.data.archives
                }.bind(this)).catch(function (error) {
                    console.log(error);
                });
            },
            jump(param){
            this.$router.push(param).catch(err => err)
            }
        }
    }
</script>

<style>
    #container-views{
        padding: 0.1rem;
        display: flex;
    }
    .video-item{
        display: flex;
        flex: 1;
        height: 8rem;
        background-color: teal;
        margin: 0.1rem;
        max-width: 50%;
    }
</style>