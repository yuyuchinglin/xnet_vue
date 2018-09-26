<template>
    <div>
        <div class="col-md-4 col-sm-12 col-xs-12 main-sidebar">
                        <!-- <div class=main-sidebar-inner> -->
                        <div class="block-wrap">
                            <ul class="banner-group">
                                <li class="col-md-12 col-sm-12 col-xs-12 thumbnail">
                                    <a href="#" title="img-banner-300x200" target="_blank">
                                        <img src="images/004.png" alt="" title="">
                                    </a>
                                </li>
                                <li class="col-md-12 col-sm-12 col-xs-12 thumbnail">
                                    <a href="#" title="img-banner-300x200" target="_blank">
                                        <img src="images/001.png" alt="" title="">
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="block-wrap">
                            <h2 class="new-index-main-title text-center">Newsletter</h2>
                            <div class="epaper-box">
                                <p>精選國內外設計與藝文大事、設計大師最新訪談，每週最新資訊定期遞送給您。</p>
                                <div class="form">
                                    <div class="form-group">
                                        <label class="sr-only" for="exampleInputEmail2">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail2" placeholder="yourmail@example.com">
                                    </div>
                                    <button type="submit" class="btn btn-green btn-block">訂閱
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="block-wrap">
                            <h2 class="new-index-main-title text-center">Popular</h2>

                            <div class="news-wrap news-list">


                                <div class="thumbnail" v-for="popuItem in popularLists" :key="popuItem.id">
                                    <div class="pic effect">
                                        <img src="https://"
                                            alt="" :title="popuItem.subject" :src="'https://www.culturelaunch.net'+popuItem.pic">
                                        <a class="view-more" href="detail.html" title="了解更多">
                                            <span>more</span>
                                        </a>
                                    </div>

                                    <div class="caption">
                                        <h3 class="new-index-list-title">
                                            <router-link :to="popuItem.id">{{popuItem.subject}}{{popuItem.id}}</router-link>
                                        </h3>
                                    </div>
                                </div>

                                

                            </div>
                            <!-- news-list END -->
                        </div>

                        <div class="block-wrap">
                            <div class="divide20"></div>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%E6%99%BA%E5%AA%92%E6%99%82%E4%BB%A3-1880890488818139%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1355515061131043"
                                width="300" height="500" scrolling="no" frameborder="0" allowTransparency="true" style="display: block; width: 300px; margin: auto;">
                            </iframe>
                        </div>

                        <!-- </div> -->
                        <!-- main-sidebar-inner END -->
                    </div>
                    <!-- col-md-4 END -->
    </div>
</template>





<script>

import axios from 'axios' //主要ajax套件
import VueAxios from 'vue-axios' //將它轉為vue的套件

export default {
  data(){
      return {
          popularLists: [],
      };
  },
  methods:{
      getArticleList() {
        const vm = this;
        let apiData = { cid: '1', pagesize: "5" };
        axios.post(`${process.env.APIPATH}/GetArticleList`, apiData)
            .then(res => {
                // console.log(res.data);
                vm.popularLists = res.data;
            })
       },
    //    goArticle(id){

    //    }
  },
  created(){
      this.getArticleList();
  },

}
</script>