<template>
    <div class="hp" id="app">

        <Navbar></Navbar>


    <div id="outer-wrap" class="wrapper">

        <Header></Header>

        <router-view></router-view>

       <Footer></Footer>


    </div>
    <!-- wrapper END -->


    </div>
</template>



<script>
import Homepage from './components/pages/hp';
import Navbar from './components/pages/navbar';
// import Slider from './components/pages/slider';
// import HotNews from './components/pages/hotnews';
import Footer from './components/pages/footer';
import Header from './components/pages/header';

export default {
  name: 'App',
  // created(){
  //   const api = `${process.env.APIPATH}/Getbanner`;
  //   this.$http.get(api).then((response) => {
  //    console.log(response.data)
  //   })
  // },
  components: {
    Homepage,
    Navbar,
    // Slider,
    // HotNews,
    Footer,
    Header,
  }
}
</script>

<style lang="scss" type="text/css">
@import "./assets/all"
</style>
