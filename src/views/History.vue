<template>
    <!-- Page Wrapper -->
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
           <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-2 text-gray-800">History</h1>
          <!-- <p class="mb-4">+ </p> -->

          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Account History</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <!-- {{userHistory}} -->
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Date</th>
                      <th>Message</th>
                      <th>Cost</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody v-for="(history, i) in userHistory" v-bind:key="history.id">
                    <tr v-if="history.date_and_time">
                      <td>{{(i + 1)}}</td>
                      <td>{{history.date_and_time}}</td>
                      <td>{{history.message}}</td>
                      <td>{{history.cost}}</td>
                      <td v-html="historyStatus(history.status)"></td>
                    </tr>
                  </tbody>
                </table>
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
  <!-- End of Page Wrapper -->
</template>


<script>
// @ is an alias to /src
import Footer from "./includes/Footer.vue";
import SideBar from "./includes/SideBar.vue";
import { login } from "../controller/mixins";
import e from "../controller/easyAlert";

export default {
  name: "History",
  data() {
    return {
      userHistory: []
    };
  },
  components: {
    Footer,
    SideBar
  },
  mixins: [login],
  methods: {
    historyStatus: function(status){
      const STATUS = {
        "0":'<span style="color:red">-</span>',
        "1":'<span style="color:red">SUCCESFUL</span>',
        "2":'<span style="color:red">PENDING</span>',
        "3":'<span style="color:red">FAILED</span>',
        "4":'<span style="color:red">ERROR</span>',
      }
      return STATUS[status];
    }
  },
  created: async function() {
    this.userData().then((re)=>{
      e.getUserHistroy({user: re.message.usernmae}).then((history)=>{
        this.userHistory = history.message
      });
    });
    // this.getUserHistory().then((re)=>{this.userHistory = re});
    // console.log(user);
  }
};
</script>