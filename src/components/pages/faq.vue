<template>
  <div>
    <Header />
    <!-- Start terms section -->
    <section class="faq details_new">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="faq_common">
              <h5>{{ $t('faq')}}</h5>
              <!-- faq common -->
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li
                  class="nav-item"
                  role="presentation"
                  v-for="(question, index) in questions"
                  :key="question.id"
                >
                  <button
                    class="nav-link"
                    :class="{ active: index === 0 }"
                    :id="'pill'+question.id+'tab'"
                    data-bs-toggle="tab"
                    :data-bs-target="'#pills' + question.id"
                    type="button"
                    role="tab"
                    :aria-controls="question.id"
                    aria-selected="true"
                  >
                    {{ question.title }}
                  </button>
                </li>
              </ul>
              <!-- faq common -->

              <!-- common_new -->
              <div class="common_new mt-5">
                <h6>{{ $t('common_news')}}</h6>
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
              </div>
              <!-- common_new -->
            </div>
          </div>

          <div class="col-lg-8 col-12">
            <div class="tab-content">
              <div
                v-for="(question, index) in questions"
                :key="question.id"
                class="tab-pane"
                :class="{ active: index === 0, show: index === 0, fade: index === 0 }"
                :id="'pills'+question.id"
                role="tabpanel"
                :aria-labelledby="'pills'+question.id + 'tab'"
              >
                <div class="accordion" id="accordionPanelsStayOpenExample">
                  <div class="accordion-item" v-for="(answer, key) in question.questions" :key="answer.id">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#panelsStayOpen-'+answer.id"
                        aria-expanded="false"
                        :aria-controls="'panelsStayOpen-'+answer.id"
                      >
                        {{answer.question}}
                      </button>
                    </h2>
                    <div
                      :id="'panelsStayOpen-'+answer.id"
                      class="accordion-collapse collapse"
                      :class="{ show: key === 0}"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div class="accordion-body">{{answer.answer}}</div>
                    </div>
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

    // Get Question
    getQuestion: function () {
      // GET /someUrl
      fetch(`https://esaafy.crazyideaco.com/public/api/question_types`, {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
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
    this.getQuestion();
  },
};
</script>

