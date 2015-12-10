var ReactDOMServer = require('react-dom/server'),
    createBemComponent = require('react-bem/lib/createBemComponent');

// Non-enurable property
Object.defineProperty(
    exports,
    '__esModule',
    {value: true}
);

exports.renderToString = function(json, container) {
    var element = createBemComponent(json);
    return ReactDOMServer.renderToString(element, container);
};

exports.renderToStaticMarkup = function(json, container) {
    var element = createBemComponent(json);
    return ReactDOMServer.renderToStaticMarkup(element, container);
};
