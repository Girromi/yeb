<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
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
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style>
</style>