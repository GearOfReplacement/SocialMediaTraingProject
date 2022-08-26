import { Login } from "../Pages/Login";
import { Posts } from "../Pages/Posts";
import { Post } from "../Pages/Post";
import { Home } from "../Pages/Home";


export const routes = [
	{ path: '/Login', element: <Login /> },
	{ path: '/', element: <Home /> },
	
];

export const routeLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Login', path: '/Login' },
];

export const privatRoutes = [
	{ path: '/Posts', element: <Posts /> },
	{ path: '/Post/:id', element: <Post /> },
	{ path: '/', element: <Home /> },
	
];

export const privatRouteLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Posts', path: '/Posts' },
];
