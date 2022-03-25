<template>
  <div>
    <el-container>
      <el-header class="homeHeader">
        <div class="title">云E办</div>
        <el-dropdown class="userInfo" @command="commandHandler">
          <span class="el-dropdown-link">
            系统管理员
            <i><img src=D:\practice\project\graduation-project\yeb\src\HI3BRL$%%N)WFIS108%{S]Q.png></i>
            <!-- <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon> -->
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
              <el-dropdown-item command="setting">设置</el-dropdown-item>
              <el-dropdown-item command="logout">注销登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <template v-for="(item,index) in this.$router.options.routes" :key="index">
              <el-sub-menu index="1" v-if="!item.hidden">
                <template #title>
                  <el-icon>
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8="">
                      <path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path>
                      <path fill="currentColor"
                        d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z">
                      </path>
                      <path fill="currentColor"
                        d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z">
                      </path>
                    </svg>
                  </el-icon>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item :index="children.path" v-for="(children,index) in item.children">
                  {{children.name}}
                </el-menu-item>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$route.path !='/home'">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="homeWelcome" v-if="this.$route.path=='/home'">
            欢迎来到云E办系统
          </div>
          <router-view class="homeRouterView" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: "Home",
  data () {
    return {
      user: JSON.parse(window.sessionStorage.getItem("user")),
    };
  },
  //   computed: {
  //     routes () {
  //       return this.$store.state.routes;
  //     }
  //   }
  methods: {
    commandHandler (command) {
      if (command == "logout") {
        this.$confirm("是否确认注销登录！", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            //注销登录
            // this.postRequest('/logout');
            //清空用户信息
            // window.sessionStorage.removeItem('tokenStr');
            // window.sessionStorage.removeItem('user');
            //清空菜单
            // this.$store.commit('initRoutes',[]);
            //跳转到登录页
            this.$router.replace("/");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消操作",
            });
          });
      }
    },
  },
};
</script>

<style>
.homeHeader {
  background: #1c60a5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
}

.homeHeader .title {
  font-size: 30px;
  font-family: 楷体;
  color: white;
}
.userInfo {
  cursor: pointer;
}
.el-dropdown-link img {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 8px;
}
.homeWelcome {
  text-align: center;
  font-size: 30px;
  font-family: 楷体;
  color: #409eff;
  padding-top: 50px;
}
.homeRouterView {
  margin-top: 10px;
}
</style>