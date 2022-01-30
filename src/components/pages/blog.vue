<template>
  <div>
    <Header />
    <section class="details_new">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <img :src="$route.params.image" alt="news" />
            <span class="date">
              <i class="fas fa-calendar-day"></i>
              {{ $route.params.date }}
            </span>
            <h4>{{ $route.params.title }}</h4>
            <p v-html="$route.params.text"></p>
          </div>
        </div>
      </div>
    </section>
    <!-- <p>title: {{ $route.query.title }}</p>
    <p v-html="$route.query.text"></p>
    <p>date: {{ $route.query.date }}</p> -->
  </div>
</template>

<script>
import Header from "../include/header_blog.vue";

export default {
  name: "blog",
  props: ["id"],
  components: {
    Header: Header,
  },
  created(){
    //   this.$router.replace(this.$route.query.id)
  }
};
</script>
