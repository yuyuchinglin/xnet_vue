<template>
    <div class="main-content">
                <div class="main-content-inner">

                    <div id="Slider" class="swiper-container">
                        <h2 class="main-title">
                            <span>Hot News</span>
                        </h2>
                        <div class="swiper-wrapper">


                            <div class="swiper-slide item" v-for="item in banners">
                                <div class="image" :style="{ background:'url(https://www.culturelaunch.net' + item.pic + ')' }">
                                        <div class="carousel-caption">
                                            <div class="container">
                                                <h3>
                                                    <a :href="'https://www.culturelaunch.net/article/' + item.articleId" :title="item.sibject">{{item.subject}}</a>
                                                </h3>
                                                <p>{{item.contents}}</p>
                                            </div>
                                        </div>
                                        <a :href="'https://www.culturelaunch.net/article/' + item.articleId" class="view-more" title="了解更多">我想了解</a>
                                    </div>
                                </div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                    <!-- Slider END -->

                </div>
            </div>


</template>
<!-- <script src="../assets/js/script.js"></script>-->

<script>
    // import Slider from './staitcs/js/script';

    import 'swiper/dist/css/swiper.css'  ;
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  data(){
      return {
          banners: [],
      };
  },
  methods:{
      getBanners(){
        const api = `${process.env.APIPATH}/Getbanner`;
        const vm = this;
        // console.log(api);
        this.$http.get(api).then((response) => {
            
            // console.log(response.data);
            vm.banners = response.data;
        })
      },
  },
  created(){
      this.getBanners();
    //   slider();
  },
  components: {
    Swiper,
    SwiperSlide
  },

}




</script>

