import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, useRouterHistory  } from  'react-router';


import routes from './routes';

ReactDOM.render(
	<Router history={ hashHistory }  >
		{routes}
	</Router>,
    
    document.getElementById('app')
);