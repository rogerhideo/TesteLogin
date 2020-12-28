import Vue from "vue";
import VueRouter from "vue-router";
import DashBoard from '@/views/DashBoard.vue';
import Team from '@/views/Team.vue';
import Projects from '@/views/Projects.vue';
import Calendar from '@/views/Calendar.vue';
import Documents from '@/views/Documents.vue';
import Reports from '@/views/Reports.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/documents",
    name: "Documents",
    component: Documents
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
