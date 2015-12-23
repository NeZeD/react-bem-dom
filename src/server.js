import * as ReactDOMServer from 'react-dom/server';
import createBemComponent from 'react-bem/lib/createBemComponent';

export const renderToString = function(json, container) {
    var element = createBemComponent(json);
    return ReactDOMServer.renderToString(element, container);
};

export const renderToStaticMarkup = function(json, container) {
    var element = createBemComponent(json);
    return ReactDOMServer.renderToStaticMarkup(element, container);
};
