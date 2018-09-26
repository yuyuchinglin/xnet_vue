<template>
  
    <!--熱門文章區塊-->
            <div class="container">
                <div class="row">
                    <!--熱門文章區塊-->
                    <div class="main-content">
                        <div class=main-content-inner>
                            <h1 class="new-index-main-title text-center">Popular</h1>
                            <div class="news-wrap">
                                <div class="divide20"></div>
                                <div class="col-md-4 col-sm-6 col-xs-12" v-for="(articleItem) in artLists" :key="articleItem.id">
                                    <div class="thumbnail">
                                        <div class="pic effect">
                                            <img :src="'https://www.culturelaunch.net'+articleItem.pic"
                                                alt="" :title="articleItem.subject">
                                            <a class="view-more" :href="'article/'+articleItem.Id" title="了解更多">
                                            <router-link class="view-more" :to="'/article/'+articleItem.id" title="了解更多"></router-link>
                                                <span>more</span>
                                            </a>
                                        </div>

                                        <div class="caption">
                                            <div class="category"> 
                                                <a href="list.html" class="post-category">人物/職場</a>
                                                <!--<router-link :to='{name:"article", params:{ id:articleItem.Id } }'>-->
                                            </div>
                                            <h3 class="new-index-list-title">
                                                <router-link :to="'/article/'+articleItem.id">{{articleItem.subject}}</router-link>
                                        
                                            </h3>
                                            <!-- meta-info END -->
                                        </div>
                                    </div>
                                </div>
                                <!-- col-md-12 END -->

                                

                                
                               

                                

                               
                                <div class="center-block text-center">
                                    <a class="btn btn-more" href="#">更多熱門文章
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <!-- news-list END -->

                        </div>
                        <!-- main-content-inner END -->
                    </div>
                </div>
                <!-- row END -->
            </div>
            <!-- 熱門文章區塊 END -->
    
 
</template>



<script>

import axios from 'axios' //主要ajax套件
import VueAxios from 'vue-axios' //將它轉為vue的套件

    export default {
  data(){
      return {
          artLists: [],
      };
  },
  methods:{
      getArticleList() {
        const vm = this;
        let apiData = { cid: '1', pagesize: "6" };
        axios.post(`${process.env.APIPATH}/GetArticleList`, apiData)
            .then(res => {
                // console.log(res.data);
                vm.artLists = res.data;
            })
       },
  },
  computed:{
    //   keywordsArray() {
    //       const vm =this;
    //       this.artLists.forEach(function(article){
    //           vm.keyArr = artcle.keywords.split(',')

    //       })
    //     return keyArr
    //     },
  },
  created(){
      this.getArticleList();
  },

}
</script>