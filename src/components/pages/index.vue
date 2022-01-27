<template>
  <div>
    <about />
    <story />
    <services />
    <feature />
    <download />
    <newsindex />
    <work />
    <contact />
  </div>
</template>

<script>
import about from "../include/about.vue";
import story from "../include/story.vue";
import services from "../include/services.vue";
import feature from "../include/feature.vue";
import download from "../include/download.vue";
import newsindex from "../include/newsindex.vue";
import work from "../include/work.vue";
import contact from "../include/contact.vue";
export default {
  name: "App",
  components: {
    about: about,
    story: story,
    services: services,
    feature: feature,
    download: download,
    newsindex: newsindex,
    work: work,
    contact: contact,
  },
};
</script>
