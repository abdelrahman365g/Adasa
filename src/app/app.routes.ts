import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { About } from './components/about/about';
import { Privacy } from './components/privacy/privacy';
import { Terms } from './components/terms/terms';
import { Notfound } from './components/notfound/notfound';
import { BlogDetails } from './components/blog-details/blog-details';

export const routes: Routes = [
    {path:"", redirectTo:"home" , pathMatch:"full"},
    {path:"home" , component:Home , title:"Overview • عدسة"},
    {path:"blog" , component:Blog , title: "Blog • عدسة"},
    {path:'blog/:category' , component:Blog , title:(route) => `${route.params['category']} • عدسة`},
    {path:"post/:postId" , component:BlogDetails , title:"Post • عدسة"},
    {path:"about" , component:About , title:"Who Are We • عدسة"},
    {path:"privacy" , component:Privacy , title:"Privacy Policy • عدسة"},
    {path:"terms" , component:Terms , title:"Terms of Use • عدسة"},
    {path:"**" , component:Notfound , title:"Page Not Found • عدسة"}
];
