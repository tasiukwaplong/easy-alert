<template>
  <div class="row">
    <!-- Border Left Utilities -->
    <div class="col-lg-6">
      <!-- {{allTopics}}{{subsribedTopics}} -->
      <!-- {{myTopics}} -->
      <div
        class="card mb-4 py-1 border-left-primary"
        v-bind:key="topic.id"
        v-for="topic in myTopics"
      >
        <div class="card-body">
          <!-- {{allTopics}} -->
          <button
            @click="topicToUnsubscribe(topic.topic_id)"
            style="float: right;"
            class="btn btn-danger btn-circle"
          >
            <i class="fa fa-trash" title="Unsubscribe"></i>
          </button>
          <br />
          <h4>
            <i class="fa fa-check-circle-o"></i>
            {{topic.alias}}
          </h4>
          {{topic.topic_name}}
          <br />
          <span style="float: right;">
            <b>Sender: {{topic.name}}</b>
          </span>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-group">
        <label for="search" class="col-sm-12 control-label">Subscribe to a topic</label>
        <div class="col-sm-12">
          <i class="fas fa-search"></i>
          <div class="form-group">
            <label>AllTopics</label>
            <select
              multiple
              class="form-control"
              title="Click on CTRL to select multiple"
              v-model="seletedTopics"
            >
              <option
                v-bind:key="topic.id"
                v-for="topic in allTopics"
                :value="topic.topic_id"
              >{{topic.alias}} - (by {{topic.name}})</option>
            </select>
          </div>
        </div>
      </div>
      <p class="alert alert-danger well" v-if="errorSubscribe">{{errorSubscribe}}</p>
      <!-- <p>{{seletedTopics}}{{subsribedTopics}}</p> -->
      <p>Selected topics; {{seletedTopics.length}}</p>
      <button
        type="button"
        v-if="btnMsg === 'Subscribe'"
        @click="subscribe()"
        class="btn btn-primary"
      >{{btnMsg}}</button>
      <button type="button" v-else class="btn btn-primary disabled" disabled>{{btnMsg}}</button>
    </div>
    <!-- Border Bottom Utilities -->
  </div>
</template>


<script>
// @ is an alias to /src
// import Footer from "./Footer.vue";
// import SideBar from "./SideBar.vue";
import { login } from "../../controller/mixins";
import e from "../../controller/easyAlert";

export default {
  name: "Topics",
  data() {
    return {
      errored: false,
      btnMsg: "Subscribe",
      errorMsg: "",
      subsribedTopics: "",
      myTopics: [],
      topicsNotSubscribed: [],
      seletedTopics: [],
      errorSubscribe: ""
    };
  },
//   components: {
//     Footer,
//     SideBar
//   },
  mixins: [login],
  methods: {
    subscribe: function() {
      //subscribe user to selected topics
      let a = [];
      this.subsribedTopics.forEach(st => {
        a.push(Number(st)); // convert subscribed topics to number
      });
      // filter out selected topics that are already subcribed
      const filteredTopics = this.seletedTopics.filter(n => !a.includes(n));

      this.errored = filteredTopics.length === 0;
      if (this.errored) {
        this.errorSubscribe =
          "Kindly select a topic you have not been subscribed to";
      } else {
        this.btnMsg = "Processing ....";
        this.errorSubscribe = "";
        this.updateSubcription(filteredTopics);
      }
    },
    updateSubcription: async function(incomingTopics) {
      // subscribe the user to a topic
      const updatedTopics = this.subsribedTopics;
      incomingTopics.forEach(t => {
        // turn subcribed topics to number
        updatedTopics.push(t.toString());
      });
      const data = {
        action: "update",
        user: this.userdata.message.usernmae,
        topics: updatedTopics,
        incomingTopics
      };
      // console.log(data)
      const updateTopic = await e.updateTopic(data);
      this.errored = updateTopic.error;
      this.errorSubscribe = updateTopic.message;
      updateTopic.error ? "" : location.reload();
      this.btnMsg = "Subscribe";
    },
    userSubscribedTopics: function() {
      // {{allTopics}}{{subsribedTopics}}
      this.subsribedTopics.forEach(t => {
        // get details of subscribed topics of user
        for (let i = 0; i < this.allTopics.length; i++) {
          if (Number(t) === this.allTopics[i].topic_id) {
            this.myTopics.push(this.allTopics[i]);
          }
        }
      });
      return this.subsribedTopics;
    },
    topicToUnsubscribe: async function(incomingTopics) {
      // when the delete button is clicked
      const updatedTopics = [];
      // console.log('incoming',incomingTopics);
      // remove incoming topics from list of existing topics
      this.subsribedTopics.forEach(t => {
        // turn subcribed topics to number
        updatedTopics.push(Number(t));
      });
      // console.log('Existing subscribed topics',updatedTopics);
      const filteredTopics = updatedTopics.filter(
        n => ![incomingTopics].includes(n)
      );
      // console.log('filtered topics', filteredTopics)
      const data = {
        action: "delete",
        user: this.userdata.message.usernmae,
        topics: filteredTopics,
        incomingTopics
      };

      const updateTopic = await e.updateTopic(data);
      this.errored = updateTopic.error;
      this.errorSubscribe = updateTopic.message;
      updateTopic.error ? "" : location.reload();
      this.btnMsg = "Subscribe";
    }
  },

  created: function() {
    this.userData().then(re => {
      this.userdata = re;
      this.subsribedTopics = re.message.subscribe.split(":");
    });
    this.getAllTopics().then(re => {
      this.allTopics = re.message;
      this.userSubscribedTopics();
    });
  }
};
</script>