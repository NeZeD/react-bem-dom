var ReactDOM = require('react-dom'),
    createBemComponent = require('react-bem/lib/createBemComponent');

// Non-enurable property
Object.defineProperty(
    exports,
    '__esModule',
    {value: true}
);

exports.unmountComponentAtNode = ReactDOM.unmountComponentAtNode.bind(ReactDOM);

exports.findDOMNode = ReactDOM.findDOMNode.bind(ReactDOM);

exports.render = function(json, container) {
    var element = createBemComponent(json);
    return ReactDOM.render(element, container);
};
