<template>
  <section>
    <Header />

    <!-- start News section -->
    <section class="news bg-transparent">
      <div class="container">
        <span>{{ $t("last_blogs") }}</span>
        <h3 class="header_text">{{ blogs.blog_title }}</h3>
        <p>{{ blogs.blog_text }}</p>
        <div class="row">
          <!-- For loop this card news -->
          <div
            class="col-lg-4 col-sm-12 mb-3 mb-lg-0"
            v-for="blog in blogs"
            :key="blog.id"
          >
            <div class="card card_news">
              <img :src="blog.image" class="card-img-top" alt="news" />
              <div class="card-body">
                <span class="date">
                  <i class="fas fa-calendar-day"></i>
                  {{ blog.date }}
                </span>
                <h5 class="card-title">{{ blog.title | truncate(50) }}</h5>
                <p class="card-text">{{ blog.text | truncate(150) }}</p>
                <!-- v-html="blog.text.substring(0,250) +' ...'" -->
                <router-link
                  :to="`/blog/${blog.id}`"
                  class="btn btn-primary"
                  >{{ $t("show_more") }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- For loop this card news -->
        </div>
      </div>
    </section>
    <!-- End News section -->
  </section>
</template>

<script>
import Header from "../include/header_blog.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "blogs",
  components: {
    Header: Header,
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    getBlogs: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_blog", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.blogs = json.data;
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getBlogs();
  },
};
</script>
