<template>
  <!-- start story section -->
  <section class="story" id="story">
    <img
      src="../../assets/media/image/carves.png"
      class="carves"
      alt="carves"
    />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-12">
          <h2>{{ story.title }}</h2>
          <p>{{ story.text }}</p>
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="video" id="video-container">
            <!-- <video id="video" preload="metadata" :poster="story.image">
              <source :src="story.video" />
            </video> -->

            <div class="videoCoverImage">
              <img class="thumb" id="image" :src="story.image" />
              <div id="thevideo" class="thevideo">
                <iframe
                  id="video"
                  :src="story.video"
                  frameborder="0"
                  allowfullscreen=""
                  include=""
                ></iframe>
              </div>
            </div>

            <div title="Play video" class="play" id="circle-play-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 124 124"
              >
                <g
                  id="Group_136"
                  data-name="Group 136"
                  transform="translate(-472 -1584)"
                >
                  <circle
                    id="Ellipse_41"
                    data-name="Ellipse 41"
                    cx="62"
                    cy="62"
                    r="62"
                    transform="translate(472 1584)"
                    fill="#4a5cd0"
                  />
                  <path
                    id="Vector"
                    d="M0,6.539V31.026a6.54,6.54,0,0,0,9.8,5.655l10.619-6.115,10.619-6.141a6.51,6.51,0,0,0,0-11.284L20.419,7,9.8.884A6.532,6.532,0,0,0,0,6.539Z"
                    transform="translate(516.918 1627.553)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End story section -->
</template>

<script>
// import axios from "axios";
import i18n from "@/plugins/i18n";

export default {
  name: "story",
  data() {
    return {
      story: {},
    };
  },

  methods: {
    getStory: function () {
      fetch("https://esaafy.crazyideaco.com/public/api/get_story", {
        method: "get",
        headers: {
          "Accept-Language": i18n.locale,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.story = json.data;
          // console.log(json);
        });
    },
  },
  created: function () {
    this.getStory();
  },

  mounted() {
    document.getElementById("image").addEventListener("click", myFunction);

    function myFunction() {
      // document.getElementById("image").innerHTML = "YOU CLICKED ME!";
      var thevid = document.getElementById("thevideo");
      var play = document.getElementById("circle-play-b");
      thevid.style.display = "block";
      play.style.display = "none";
      this.style.display = "none";
    }"thevid=document.getElementById('thevideo'); thevid.style.display='block'; this.style.display='none'";
  },
};
</script>
