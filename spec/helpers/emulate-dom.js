var jsdom = require('jsdom').jsdom;

global.document = jsdom('hello world');
global.window = document.defaultView;
global.navigator = {
    userAgent: 'jsdom'
};
