<template>

        <div class="main-content">

            <div class="breadArea">
                <div class="container">
                    <ol class="breadcrumb">
                        <li>
                            <a href="hp.html">HOME</a>
                        </li>
                        <li>最新消息</li>
                        <li class="active">新創團隊想成為搶手數位行銷人？學習寫程式讓你技能大加分！</li>
                    </ol>
                </div>
            </div>
            <!-- breadArea END -->

            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12 main-content">
                        <div class="main-content-inner">
                            <article class="post-layout post">
                                <div class="post-header">
                                    <div class="divide20"></div>
                                    <div class="post-information-RL-15">
                                        <ul class="category">
                                            <li class="entry-category">
                                                <a href="#">{{article.keywords}}</a>
                                            </li>
                                        </ul>
                                        <h1>{{article.subject}}</h1>
                                        <div class="meta-info clearfix">
                                            <div class="pull-left social-media-share-btn">
                                                <i class="fa fa-2x fa-facebook-official" aria-hidden="true"></i>
                                                <i class="fa fa-2x fa-google-plus-square" aria-hidden="true"></i>
                                                <i class="fa fa-2x fa-twitter" aria-hidden="true"></i>
                                                <i class="fa fa-2x fa-print" aria-hidden="true"></i>
                                            </div>
                                            <div class="pull-rigt text-right">
                                                <div class="post-author">
                                                    <span>By</span>
                                                    <a href="#/author/admin/">{{article.author}}</a>
                                                    <span> - </span>
                                                </div>
                                                <span class="post-date">
                                                    <time datetime="2017-07-26T14:17:05+00:00">2017/7/26</time>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-featured-image">
                                        <a href="">
                                            <img class="image-full modal-image size-full" :src="'https://www.culturelaunch.net'+article.pic"
                                                width="1350" height="900" />
                                        </a>
                                    </div>



                                    <!-- meta-info END -->
                                </div>
                                <!-- post-header END -->

                                <div class="post-content">
                                    <div v-html="article.contents"></div>
                                 
                                </div>
                                <!-- post-content END -->
                                <div class="center-block text-center">
                                    <div class="post-tags">
                                        <a class="label label-keyword">關鍵字</a>
                                        <a class="label label-keyword">關鍵字</a>
                                    </div>
                                </div>



                            


                                <div class="divide20"></div>
                                <div class="extended-reading">
                                    <h3 class="new-index-main-title text-center">延伸閱讀</h3>
                                    <div class="extended-list">
                                        <ul class="fa-ul">
                                            <li>
                                                <i class="fa-li fa fa-angle-right"></i><a href="list.html">新創團隊想成為搶手數位行銷人？學習寫程式讓你技能大加分！</a></li>
                                            <li>
                                                <i class="fa-li fa fa-angle-right"></i><a href="list.html">如何選擇適合自己的內容管理系統（CMS）</a></li>
                                            <li>
                                                <i class="fa-li fa fa-angle-right"></i><a href="list.html">新創團隊想成為搶手數位行銷人？學習寫程式讓你技能大加分！</a></li>
                                            <li>
                                                <i class="fa-li fa fa-angle-right"></i><a href="list.html">如何選擇適合自己的內容管理系統（CMS）</a></li>
                                        </ul>
                                    </div>

                                    <!-- news-list END -->
                                </div>
                                <!-- post-footer END -->

                            </article>

                        </div>
                        <!-- main-content-inner END -->

                    </div>
                    <!-- col-md-8 td-main-content END -->
                  

                </div>
                <!-- row END -->

            </div>
            <!-- container END -->

        </div>
        <!-- main-content END -->

   


    
    
    </div>
</template>




<script>
import Footer from './footer';
// import Sidebar from './sidebar';

export default {
  data(){
      return {
          article: [],
      };
  },
  methods:{
      getArticle(){
        const id = this.$route.params.id;
        const api = `${process.env.APIPATH}id/${id}`;
        const vm = this;
        // console.log(api);
        this.$http.get(api).then((response) => {
            // console.log(response.data);
            vm.article = response.data;
        })
      },
  },
  created(){
      this.getArticle();
  },
  components:{
      Footer,
    //   Sidebar,
  }
}




</script>
