import {createRouter, createWebHistory} from "vue-router";


//=====================
// Pages
//=====================
import Layout from "../components/pages/layout/Lavyout.vue";
import Home from "../components/pages/home/Home.vue";
import About from "../components/pages/about/About.vue";
import Faq from "../components/pages/faq/Faq.vue";
import Contact from "../components/pages/contact/Contact.vue";
import Review from "../components/pages/review/Review.vue";
import BlogList from "../components/pages/blog/BlogList.vue";
import SingleBlog from "../components/pages/blog/SingleBlog.vue";
import SignIn from "../components/pages/auth/SignIn.vue";
import SignUp from "../components/pages/auth/SignUp.vue";
import PageNotFound from "../components/pages/pagenotfound/PageNotFound.vue";


const ROOT_URL = "/";
const routes = [
    { path: ROOT_URL + 'login', name: 'SignIn', component: SignIn, meta: {title: 'Login'} },
    { path: ROOT_URL + 'register', name: 'SignUp', component: SignUp, meta: {title: 'Register'} },
    {
        path: ROOT_URL, name: 'Layout', component: Layout,
        children: [
            // Home
            {path: ROOT_URL, name: 'Home', component: Home, meta: {title: 'Home'}},
            // About
            {path: ROOT_URL + 'about', name: 'About', component: About, meta: {title: 'About'}},
            // Faq
            {path: ROOT_URL + 'faq', name: 'Faq', component: Faq, meta: {title: 'Faq'}},
            // Contact
            {path: ROOT_URL + 'contact', name: 'Contact', component: Contact, meta: {title: 'Contact'}},
            // Contact
            {path: ROOT_URL + 'review', name: 'Review', component: Review, meta: {title: 'Review'}},
            // BlogList
            {path: ROOT_URL + 'blogs', name: 'BlogList', component: BlogList, meta: {title: 'BlogList'}},
            // BlogSingle
            {path: ROOT_URL + 'blogs/:id', name: 'SingleBlog', component: SingleBlog, meta: {title: 'SingleBlog'}},
        ],
    },
    { path: ROOT_URL + ':pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound }
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
        return { top: 0 }
    },
    routes
})


// Middlewares
/*router.beforeEach((to, from, next) => {
    if (window.core.UserInfo != null) {
        if (to.meta.value !== undefined) {
            let user = window.core.UserInfo;
            let roles = user.roles !== '' ? JSON.parse(user.roles) : [];
            if (roles.indexOf(to.meta.value) > -1) {
                next();
            }
            next({name: "Dashboard"});
        }
        next();
    }
    next();
});*/

export default router;
