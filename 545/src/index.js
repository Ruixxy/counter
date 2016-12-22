import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,browserHistory } from 'react-router'
import App from './components/Main';

function onEnterRootPath(nextState, replace) {
	if(nextState.location.pathname == '/'){
		replace('/SiranZhang')
	}
}

var routeMap = {
	component:'div',
	childRoutes:[
		{
			path:'/',
			onEnter: onEnterRootPath,
			component:require('./pages/Entrance.js'),
			childRoutes:[
				{
					path:'SiranZhang',
					getComponent: (location, cb) => {
						require.ensure([], (require) => {
							cb(null, require('./pages/Home'))
						})
					}
				},
				{
					path:'timeRecord',
					getComponent: (location, cb) => {
						require.ensure([], (require) => {
							cb(null, require('./pages/timeRecord/TimeRecord'))
						})			
					}
				},
				{
					path:'loveThings',
					getComponent: (location, cb) => {
						require.ensure([], (require) => {
							cb(null, require('./pages/loveThings/LoveThings'))
						})	
					}
				},
				{
					path:'blogs',
					getComponent: (location, cb) => {
						require.ensure([], (require) => {
							cb(null, require('./pages/blogs/Blogs'))
						})		
					}
				},
				{
					path:'workCollection',
					getComponent: (location, cb) => {
						require.ensure([], (require) => {
							cb(null, require('./pages/workCollection/WorkCollection'))
						})		
					},
					childRoutes:[
						{
							path:'workDetail',
							getComponent: (location, cb) => {
								require.ensure([], (require) => {
									cb(null, require('./pages/workCollection/WorkDetail'))
								})		
							}
						}
					]
				}
			]
		}
	]
}


// Render the main component into the dom
ReactDOM.render(
	<Router history={browserHistory} routes={routeMap} />
	,document.getElementById('app')
);
