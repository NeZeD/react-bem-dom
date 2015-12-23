import * as ReactDOM from 'react-dom';
import createBemComponent from 'react-bem/lib/createBemComponent';

export const unmountComponentAtNode = ReactDOM.unmountComponentAtNode.bind(ReactDOM);

export const findDOMNode = ReactDOM.findDOMNode.bind(ReactDOM);

export const render = function(json, container) {
    var element = createBemComponent(json);
    return ReactDOM.render(element, container);
};
