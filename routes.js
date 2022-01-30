import indexPage from "./src/components/pages/index.vue";
import termsPage from "./src/components/pages/terms.vue";
import privacyPage from "./src/components/pages/privacy.vue";
import faqPage from "./src/components/pages/faq.vue";
import blogsPage from "./src/components/pages/blogs.vue";
import blog from "./src/components/pages/blog";
import NotFound from "./src/components/pages/error";

const routes = [
  { path: "/", component: indexPage, name: "index" },
  { path: "/terms", component: termsPage, name: "terms" },
  { path: "/privacy", component: privacyPage, name: "privacy" },
  { path: "/faq", component: faqPage, name: "faq" },
  { path: "/blogs", component: blogsPage, name: "blogs" },
  { path: "/blog/:id", component: blog, props: true, name: "signle-blog" },
  { path: "/404", component: NotFound },
  { path: "*", redirect: "/404" },
];

export default routes;
