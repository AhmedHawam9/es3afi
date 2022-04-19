<template>
  <div>
    <Header />
    <!-- start News section -->
    <section class="details_new">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12">
            <img :src="blog.image" alt="news" />
            <span class="date my-3 d-block">
              <i class="fas fa-calendar-day"></i>
              {{ blog.date }}
            </span>
            <h4>{{ blog.title }}</h4>
            <p v-html="blog.text"></p>
            <!-- <p v-html="blog.text"></p> -->
          </div>

          <div class="col-lg-4 col-12">
            <!-- same_topics -->
            <div class="common_new">
              <h6>{{ $t('common_news')}}</h6>
              <!-- single same_topics -->
              <router-link
                :to="`/blog/${common.id}`"
                v-for="common in commons"
                :key="common.id"
                class="single_common_new"
              >
                <img :src="common.image" alt="new" />
                <div class="text_common_new">
                  <h6>{{ common.title }}</h6>
                  <p class="date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>{{ common.date }}</span>
                  </p>
                </div>
              </router-link>
              <!-- single same_topics -->
            </div>
            <!-- same_topics -->

            <!-- follow -->
            <div class="tags_new">
              <h5>{{ $t('tags')}}</h5>
              <ul>
                <li v-for="tag in tags" :key="tag.id">
                  <router-link :to="`/tagblog/${tag.id}`"
                    >#{{ tag.title }}</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- follow -->
          </div>
        </div>
      </div>
    </section>
    <!-- End News section -->

    <!-- start News section -->
    <section class="news bg-transparent">
      <div class="container">
        <div class="row">
          <h2 class="header_text">{{ $t('similar_articles')}}</h2>
          <!-- For loop this card news -->
          <div
            class="col-lg-4 col-sm-12 mb-3 mb-lg-0"
            v-for="topics in same_topics"
            :key="topics.id"
          >
            <div class="card card_news">
              <img :src="topics.image" class="card-img-top" alt="same_topics" />
              <div class="card-body">
                <span class="date">
                  <i class="fas fa-calendar-day"></i>
                  {{ topics.date }}
                </span>
                <h5 class="card-title">{{ topics.title | truncate(50) }}</h5>
                <p class="card-text" v-html="topics.text.substring(0,250) +' ...'"></p>
                <router-link :to="`/blog/${topics.id}`" class="btn btn-primary"
                  >{{ $t('show_more')}}
                </router-link>
              </div>
            </div>
          </div>
          <!-- For loop this card news -->
        </div>
      </div>
    </section>
    <!-- End News section -->
  </div>
</template>

<script>
import Header from "../include/header_blog.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "blog",
  // props: ["id"],
  components: {
    Header: Header,
  },
  data() {
    return {
      blog: {},
      last_news: [],
      same_topics: [],
      tags: [],
      commons: []
    };
  },
  methods: {
    // Get blog data
    getBlogs: function () {
      // GET /someUrl
      let id = this.$route.params.id;
      // console.log(id);
      fetch(`https://esaafy.crazyideaco.com/public/api/single_blog/${id}`, {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.blog = json.blog;
          this.last_news = json.last_news;
          this.same_topics = json.same_topics;
          this.tags = json.tags;
          //  console.log(json);
        });
    },
    // Get blog data

    // Get common blog data
    getCommon: function () {
      // GET /someUrl
      fetch(`https://esaafy.crazyideaco.com/public/api/common_blogs`, {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.commons = json.data;
          // console.log(json);
        });
    },
    // Get common blog data
  },
  watch: {
    // call the method if the route changes
    $route: {
      handler: "getBlogs",
      immediate: true, // runs immediately with mount() instead of calling method on mount hook
    },
  },
  created: function () {
    this.getBlogs();
    this.getCommon();
  },
};
</script>
