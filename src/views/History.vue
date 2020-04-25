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
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Date</th>
                      <th>Message</th>
                      <th>Cost</th>
                      <th>Status</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>S/N</th>
                      <th>Date</th>
                      <th>Message</th>
                      <th>Cost</th>
                      <th>Status</th>
                      <th>Option</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>12/12/19</td>
                      <td>No lectures</td>
                      <td><em style="color:red">- 20</em></td>
                      <td>Delivered</td>
                      <td>-</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>12/12/19</td>
                      <td>Referal bonus</td>
                      <td><em style="color:green">+ 20</em></td>
                      <td>Delivered</td>
                      <td>-</td>
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
import Footer from './includes/Footer.vue'
import SideBar from './includes/SideBar.vue'

export default {
  name: 'History',
  components: {
    Footer, SideBar
  }
}
</script>