<template>
  <div class="content">
    <div class="side">
      <div class="top">
        <div class="logo halo"></div>
        <div class="name">TownLoader</div>
      </div>
      <FileBar></FileBar>
    </div>
    <div class="separator"/>
    <div class="container">
      <div class="navigator">
        <ul class="menu">
          <li><ArrowBigLeft :size="28"/></li>
          <li style="margin-right:20px"><ArrowBigRight :size="28"/> </li>
          <li><Layers3/></li>
          <li><LayoutDashboard/></li>
        </ul>
        <div class="search"><input placeholder="查询图片" type="text"/></div>
        <ul class="menu">
          <li v-if="theme=='dark'" @click="changeTheme"><MoonStar /></li>
          <li v-if="theme=='light'" @click="changeTheme"><SunMoon /></li>
          <li><LayoutDashboard/></li>
          <li><Layers3/></li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FileBar from "./components/FileBar.vue";
import { 
  Layers3, 
  LayoutDashboard, 
  ArrowBigLeft, 
  ArrowBigRight,
  MoonStar,
  SunMoon
} from  "lucide-vue-next";

const theme = ref("dark")

const changeTheme = () => {
  theme.value =  (theme.value == "dark") ? "light" : "dark";
}

</script> 

<style scoped>

ul,li {
  padding: 0;
  margin: 0;
}

.content {
  display: flex;
}

.side {
  width: 300px;
  height: 98.5vh;
  opacity: 0.5;
  box-shadow: 1px 0 1px black;
}

.separator {
  height: 99vh;
  border: 1px solid black;
}

.separator:hover {
  border: 2px solid #1157cb;
  cursor: col-resize;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid, red;
  height: 100px;
}
.top > .name {
  padding-right: 20px;
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  line-height: 20px;
}

.container {
  width: 100%;
}

.container > .navigator {
  height: 50px;
  width: 100%;
  margin: 0 0 5px 0;
  padding: 5px 5px 5px 0;
  box-shadow: 0px 1px 5px black;
  display: flex;
  justify-content: space-between
}

.navigator > .menu {
  display: flex;
  justify-content: left;
  margin-top: 3px;
  margin-left: 20px;
}

.menu > li {
  display: flex;
  list-style: none;
  width: 40px;
  height: 40px;;
  line-height: 40px;
  justify-content: center;
  align-items: center;
}

.menu > li:hover {
  background-color: #00001150;
  border-radius: 50%;
}

.search {
  margin: 4px 0 6px 0;
}

.search > input {
  width: 400px;
}

input:focus {
  border: 2px solid #1157cb;
}

.logo {
  background-image: url("/idea.svg");
  background-size: cover;
  height: 10px;
  width: 20px;
  margin: auto;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
  filter: drop-shadow(0 0 1em #1157cb);
}

.logo.halo:hover {
  filter: drop-shadow(0 0 6em #ee1dd7);
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  color: #535bf2;
}

</style>
