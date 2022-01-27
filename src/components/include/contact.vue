<template>
  <!-- start contact section -->
  <section class="contact">
    <div class="container">
      <h2 class="header_text">{{$t ('contact_us')}}</h2>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <iframe
            :src="setting.map_link"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <h5>{{$t ('contact_info')}}</h5>
          <ul>
            <li>
              <i class="far fa-envelope"></i>
              <a :href="`tel:${setting.email}`">{{ setting.email }}</a>
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              <a :href="`tel:${setting.phone}`">{{ setting.phone }}</a>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <a target="_blank" :href="setting.location_link">{{
                setting.address
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h4>{{$t ('communication')}}</h4>
          <form v-on:submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                id="name"
                :placeholder="$t('require_name')"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                id="email"
                :placeholder="$t('require_email')"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="form.subject_text"
                id="subject_text"
                class="form-control"
                :placeholder="$t('subject')"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="form.message"
                id="message"
                class="form-control"
                :placeholder="$t('message')"
                required
              />
            </div>
            <button type="submit" class="btn">{{$t ('send_message')}}</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End contact section -->
</template>

<script>
import axios from "axios";
import Toastify from "toastify-js";

export default {
  name: "contact",
  data() {
    return {
      setting: {},
      form: {
        name: "",
        email: "",
        subject_text: "",
        message: "",
      },
    };
  },
  methods: {
    getSetting: function () {
      // GET /someUrl
      fetch("https://esaafy.crazyideaco.com/public/api/get_setting")
        .then((response) => response.json())
        .then((json) => {
          this.setting = json.data;
          // console.log(json);
        });
    },

    submitForm() {
      axios
        .post(
          "https://esaafy.crazyideaco.com/public/api/web_contact",
          this.form
        )
        .then((res) => {
          //Perform Success Action
          Toastify({
            text: "تم ارسال طلبك بنجاح",
            className: "Success",
            duration: 3000,
            close: true,
            gravity: "top",
            style: {
              background: "#198754",
            },
          }).showToast();
          this.form.name = "";
          this.form.email = "";
          this.form.subject_text = "";
          this.form.message = "";
          return res;
        })
        .catch((error) => {
          // error.response.status Check status code
          Toastify({
            text: "هناك مشكله في ارسال طلبك الرجاء المحاولة مره اخرى",
            className: "error",
            duration: 3000,
            close: true,
            gravity: "top",
            style: {
              background: "#dc3545",
            },
          }).showToast();
          return error;
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
  created: function () {
    this.getSetting();
  },
};
</script>
