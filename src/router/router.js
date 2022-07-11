const { createRouter, createWebHistory } = require("vue-router");
import ProfilePage from '../components/ProfilePage/ProfilePageComponent'
import BlogPage from '../components/BlogPage/BlogListPage/BlogPageComponent'
import PostDetailPage from '../components/BlogPage/PostPage/PostDetailPage'
import ToDoPage from '../components/DiariesPage/ToDoPage/ToDoPageComponent'
import ProfileEditSettingPage from '../components/SettingPage/ProfileEditSettings/ProfileEditSettingPage'
import HealthPage from '../components/DiariesPage/HealthPage/HealthPage'
import SportDiaryPage from '../components/DiariesPage/SportDiaryPage/SportDiaryPage'
import LoginPage from '../components/AuthPage/LoginPage/LoginPage'
import LogoutComponent from '../components/AuthPage/LogOutPage/LogoutComponent'
import RegisterPage from '../components/AuthPage/RegistrationPage/RegisterPage'
const routes = [
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/blog/:id",
    component: PostDetailPage,
  },
  {
    path: "/",
    component: ProfilePage,
  },
  {
    path: "/exit",
    component: LogoutComponent,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/diaries-todo",
    component: ToDoPage,
  },
  {
    path: "/diaries-health",
    component: HealthPage,
  },
  {
    path: "/diaries-training",
    component: SportDiaryPage,
  },
  {
    path: "/setting",
    component: ProfileEditSettingPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;