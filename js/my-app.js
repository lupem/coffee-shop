// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    modalTitle: 'Framework7',
	panel: {
		swipe: 'left',
	}, 
	cache:false,
	pushState:false,
	swipeBackPage:true,
    swipePanel: 'left',
	material: true,
	routes: [
		{
		path: '/breakfast/',
    	url: 'breakfast.html',
    	name: 'breakfast',
  		},
		{
		path: '/drinks/',
    	url: 'drinks.html',
    	name: 'drinks',
  		},
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
		{
		path: '/producto/',
    	url: 'info-producto.html',
    	name: 'producto',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

