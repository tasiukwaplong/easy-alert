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

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Subscribers</h1>
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
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Subscribed users</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">200</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
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
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Suscribers</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <!-- <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                  </div> -->
                  <table class="table" width="100%">
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>S/N</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                    <tr>
                      <td>S/N</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                    <tr>
                      <td>S/N</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                    <tr>
                      <td>S/N</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                    <tr>
                      <td>S/N</td>
                      <td>Name</td>
                      <td>Email</td>
                      <td>Phone</td>
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <!-- Pie Chart -->
            <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Add new subscriber</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                  <form class="user">
                    <div class="form-group">
                      <label>Code</label>
                        <input type="text" class="form-control" id="exampleFirstName" placeholder="Code">
                    </div>
                    <div class="form-group">
                      <label>Phone</label>
                        <input type="tel" class="form-control" id="exampleFirstName" placeholder="phone">
                    </div>
                    
                    <div class="form-group">
                        <h5>Subscribe user to:</h5>
                        <label><input type="checkbox"> Topic 1</label><br>
                        <label><input type="checkbox"> Topic 1</label><br>
                        <label><input type="checkbox"> Topic 1</label><br>
                        <label><input type="checkbox"> Topic 1</label><br>
                        <label><input type="checkbox"> Topic 1</label><br>
                      </div>
                      <a href="#" class="btn btn-primary btn-user btn-block">
                      Add user
                    </a>
                    <br>
                    Kindly note that the user will be notified via email on the change
                  </form>
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
  <!-- End of Page Wrapper -->
</template>


<script>
// @ is an alias to /src
import Footer from './includes/Footer.vue'
import SideBar from './includes/SideBar.vue'

export default {
  name: 'Subscribers',
  components: {
    Footer, SideBar
  }
}
</script>