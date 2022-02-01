<template>
  <div>
    <Header />
    <!-- Start terms section -->
    <section class="faq details_new">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="faq_common">
              <h5>الاسئلة الشائعة</h5>
              <!-- faq common -->
              <ul>
                <li>
                  <router-link
                    to="question.id"
                    v-for="question in questions_types"
                    :key="question.id"
                    >{{ question.title }}</router-link
                  >
                </li>
              </ul>
              <!-- faq common -->

              <!-- common_new -->
              <div class="common_new mt-5">
                <h6>اخبار شائعة</h6>
                <!-- single common new -->
                <router-link
                  :to="`/blog/${common.id}`"
                  class="single_common_new"
                  v-for="common in commons"
                  :key="common.id"
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
                <!-- single common new -->
              </div>
              <!-- common_new -->
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="accordion" id="accordionPanelsStayOpenExample" v-for="question in questions" :key="question.id">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    {{question.question}}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    {{question.answer}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End terms section -->
  </div>
</template>

<script>
import Header from "../include/header_faq.vue";
import i18n from "@/plugins/i18n";

export default {
  name: "faq",
  components: {
    Header: Header,
  },
  data() {
    return {
      commons: [],
      questions_types: [],
      questions: [],
    };
  },
  methods: {
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

    // Get Question_types
    getQuestion_types: function () {
      // GET /someUrl
      fetch(`https://esaafy.crazyideaco.com/public/api/question_types`, {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.questions_types = json.data;
          // console.log(json);
        });
    },
    // Get Question_types

    // Get Question
    getQuestion: function () {
      // GET /someUrl
      fetch(`https://esaafy.crazyideaco.com/public/api/get_question`, {
        method: "post",
        headers: {
          "Accept-Language": i18n.locale,
        },
        body: {
          "type_id": 1,
        }
      })
        .then((response) => response.json())
        .then((json) => {
          this.questions = json.data;
          // console.log(json);
        });
    },
    // Get Question
  },
  created: function () {
    this.getCommon();
    this.getQuestion_types();
    this.getQuestion();
  },
};
</script>
