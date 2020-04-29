<template>
     <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-text mx-3">Dashboard</div>
      </a>
      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
      <router-link 
        class="nav-link collapsed" 
        to="/dashboard">
        <i class="fa fa-fw fa-cog"></i>Dashboard
        </router-link>

      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Menu
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item" v-if="type == 'sender'">
      <a 
        class="nav-link collapsed" 
        href="javascript:void(0)"
        data-toggle="modal" data-target="#modelId"
        >
        <i class="fa fa-fw fa-envelop"></i>Send Message
        </a>
      </li>
      <li class="nav-item" v-if="type == 'sender' || type == 'subscriber'">
      <a class="nav-link collapsed" 
        href="javascript:void(0)"
        data-toggle="modal" data-target="#modelId2">
        <i class="fa fa-fw fa-envelop"></i>Fund account
        </a>
      </li>
      <li class="nav-item" v-if="type == 'sender' || type == 'subscriber'">
      <router-link 
        class="nav-link collapsed" 
        to="/profile">
        <i class="fa fa-fw fa-cog"></i>Profile
        </router-link>
      </li>
      <li class="nav-item" v-if="type == 'sender'">
        <router-link 
        class="nav-link collapsed" 
        to="/subscribers">
        <i class="fa fa-fw fa-cog"></i>Subscribers
        </router-link>
      </li>
      <li class="nav-item" v-if="type == 'sender'">
        <router-link 
        class="nav-link collapsed" 
        to="/my-topics">
        <i class="fa fa-fw fa-cog"></i>My topics
        </router-link>
      </li>
      <li class="nav-item" v-if="type == 'sender' || type == 'subscriber'">
        <router-link 
        class="nav-link collapsed" 
        to="/history">
        <i class="fa fa-fw fa-cog"></i>History
        </router-link>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="javascript:void(0)" @click="logout" >
          <i class="fas fa-fw fa-cog"></i>
          <span>Logout</span>
        </a>
      </li>

    </ul>
</template>

<script>
import { login } from '../../controller/mixins';

export default {
    name: "SideBar",
    data(){
      return {
        type: ''
      }
    },
    mixins: [login],
    created: function() {
      this.userData().then((re)=>{
        this.userdata = re;
        this.type = re.message.type
        });
      // console.log(user);
      }
}
</script>