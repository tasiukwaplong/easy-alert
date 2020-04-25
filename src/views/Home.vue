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
                      >Subscribed users</div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">{{userdata.message.topics}}</div> -->
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
                      >Topics / Courses</div>
                      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">{{userdata.message.topics}}</div> -->
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
                          <div
                            class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                          >#{{userdata.message.balance.split(',')[0].split(':')[1] || '-'}}</div>
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
                      >Subscriber bonus</div>
                      <!-- <div
                        class="h5 mb-0 font-weight-bold text-gray-800"
                      >#{{userdata.message.balance.split(',')[1].split(':')[1] || '-'}}</div> -->
                    </div>
                    <sub>
                      <a href="#">Withdraw bonus</a>
                    </sub>
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
            <!-- Area Chart -->
            <div class="col-xl-8 col-lg-7">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">Topics / Course(s)</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <!-- <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div>-->
                  <table class="table" width="100%">
                    <tr>
                      <th>S/N</th>
                      <th>Alias</th>
                      <th>Topic name</th>
                      <th>Short Description</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                    <tbody v-bind:key="topic.id" v-for="(topic, counter) in userdata.message.topics">
                      <tr>
                        <td>{{(counter+1)}}</td>
                        <td>{{topic.alias}}</td>
                        <td>{{topic.topic_name}}</td>
                        <td>{{topic.description}}</td>
                        <td><button @click="btnMsg = 'Edit topic';topicData=topic" class="btn btn-primary">Edit</button></td>
                        <td><button class="btn btn-danger">Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">Add/Edit topic</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <form class="user" v-if="!success">
                    <div class="form-group">
                      <label>Topic</label>
                      <input
                        required
                        type="text"
                        id="topic"
                        class="form-control form-control-user"
                        v-model.trim="topicData.topic"
                        placeholder="Topic"
                      />
                    </div>
                    <div class="form-group">
                      <label>Alias</label>
                      <input
                        required
                        type="text"
                        id="alias"
                        class="form-control form-control-user"
                        v-model.trim="topicData.alias"
                        placeholder="Shorter name/abbreviation"
                      />
                    </div>
                    <div class="form-group">
                      <label>Short description</label>
                      <textarea
                        required
                        class="form-control form-control-user"
                        v-model.trim="topicData.description"
                        placeholder="Brief description of topic"
                      ></textarea>
                    </div>
                    <p class="text-center alert-danger">{{errorMsg}}</p>
                    <button
                      v-if="errored"
                      type="button"
                      @click="validateInput('submitBtn')"
                      class="btn btn-primary btn-user btn-block"
                    >{{btnMsg}}</button>
                    <button
                      v-else
                      class="btn btn-primary btn-user btn-block disabled"
                      disabled
                      title="Please wait"
                    >{{btnMsg}}</button>
                  </form>
                  <div v-else class="user">
                    <div class="alert alert-success text-center">
                      <strong>Topic added successfully..!!</strong>
                      <br />
                      <a href="/dashboard">Add another topic</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import Footer from "./includes/Footer.vue";
import SideBar from "./includes/SideBar.vue";
import { login } from "../controller/mixins";
import e from "../controller/easyAlert";

export default {
  name: "Home",
  data() {
    return {
      topicData: {
        topic: "",
        alias: "",
        description: "",
      },
      errorMsg: "",
      success: false,
      errored: true,
      btnMsg: "Add topic"
    };
  },
  components: {
    Footer,
    SideBar
  },
  mixins: [login],
  methods: {
    validateInput: function() {
      //check if any input is empty
      // console.log(this.userdata)
      let inputCheck =
        !this.topicData.topic || !this.topicData.alias || !this.topicData.description ? true : false;

      this.errored = inputCheck;
      if (this.errored) {
        this.errorMsg =
          "One or more of your input is not valid. Kindly check and correct where necessary";
      } else {
        this.btnMsg = "Processing ....";
        this.errorMsg = "";
        this.addTopic();
      }
    },
    addTopic: async function() {
      //Add topic to DB
      const data = {
        action: 'add-edit',
        user: this.userdata.message.usernmae,
        topic: this.topicData.topic,
        alias: this.topicData.alias,
        description: this.topicData.description
      };
      const addTopic = await e.addTopic(data);
      this.success = !addTopic.error;
      // console.log(addTopic);
      this.errored = addTopic.error;
      this.errorMsg = addTopic.message;
      addTopic.error ? "" : location.reload();
      this.btnMsg = 'Add topic'
    }
  },
  created: function() {
    this.userData().then((re)=>{this.userdata = re;});
    // console.log(user);
  }
};
</script>