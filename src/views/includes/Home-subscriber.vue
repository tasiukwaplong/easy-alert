<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <SideBar />
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> -->
          </div>

          <!-- Content Row -->
          <div class="row">
            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >Balance</div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">#{{userdata.message.balance.split(',')[1].split(':')[1]}}</div> -->
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-success text-uppercase mb-1"
                      >Topics subscribed to</div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">{{userdata.message.subscribe.split(':').length}}</div> -->
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-info text-uppercase mb-1"
                      >Referal bonus</div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <!-- <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">#{{userdata.message.balance.split(',')[0].split(':')[1] || '-'}}</div> -->
                        </div>
                        <!-- <div class="col"> -->
                        <!-- <div> -->
                        <sub>
                          <a href="#">Withdraw bonus</a>
                        </sub>
                        <!-- <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> -->
                        <!-- </div> -->
                        <!-- </div> -->
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                      >Account type</div>
                      <div
                        class="h5 mb-0 font-weight-bold text-gray-800"
                      >{{userdata.message.type}}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Content Row -->
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
                  <button  @click="topicToUnsubscribe(topic.topic_id)" style="float: right;" class="btn btn-danger btn-circle">
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
                <h3>SUBSCRIBE TO A TOPIC</h3>
                <div class="col-sm-12">
                  <i class="fas fa-search"></i>
                  <div class="form-group">
                    <label>AllTopics</label>
                    <select multiple class="form-control" title="Click on CTRL to select multiple" v-model="seletedTopics">
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
              <button type="button" v-if="btnMsg === 'Subscribe'" @click="subscribe()" class="btn btn-primary">{{btnMsg}}</button>
              <button type="button" v-else class="btn btn-primary disabled" disabled>{{btnMsg}}</button>
            </div>
            <!-- Border Bottom Utilities -->
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "./Footer.vue";
import SideBar from "./SideBar.vue";
import { login } from "../../controller/mixins";
import e from "../../controller/easyAlert";

export default {
  name: "Subscriber",
  data() {
    return {
      errored: false,
      btnMsg: "Subscribe",
      errorMsg: "",
      subsribedTopics: "",
      myTopics: [],
      topicsNotSubscribed: [],
      seletedTopics: [],
      errorSubscribe: '',
    };
  },
  components: {
    Footer,
    SideBar
  },
  mixins: [login],
  methods: {
    subscribe: function() {
      //subscribe user to selected topics
      let a = [];
      this.subsribedTopics.forEach(st =>{
        a.push(Number(st))// convert subscribed topics to number
      })
      // filter out selected topics that are already subcribed
      const filteredTopics = (this.seletedTopics.filter(n=>!a.includes(n)));
      
      this.errored = (filteredTopics.length === 0);
      if (this.errored) {
        this.errorSubscribe = 'Kindly select a topic you have not been subscribed to';
      } else {
        this.btnMsg = "Processing ....";
        this.errorSubscribe = "";
        this.updateSubcription(filteredTopics);
      }
    },
    updateSubcription: async function(incomingTopics){
      // subscribe the user to a topic
      const updatedTopics = this.subsribedTopics;
      incomingTopics.forEach(t => {
        // turn subcribed topics to number
        updatedTopics.push(t.toString())
      })
      const data = {
        action: 'update',
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
      this.subsribedTopics.forEach((t) => {
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
        updatedTopics.push(Number(t))
      })
      // console.log('Existing subscribed topics',updatedTopics);
      const filteredTopics = (updatedTopics.filter(n=>![incomingTopics].includes(n)));
      // console.log('filtered topics', filteredTopics)
      const data = {
        action: 'delete',
        user: this.userdata.message.usernmae,
        topics: filteredTopics,
        incomingTopics
      };

      const updateTopic = await e.updateTopic(data);
      this.errored = updateTopic.error;
      this.errorSubscribe = updateTopic.message;
      updateTopic.error ? "" : location.reload();
      this.btnMsg = "Subscribe";

    },
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