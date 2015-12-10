var ReactBEMDOM = require('../'),
    ReactBEM = require('react-bem'),
    InnerBlock = ReactBEM.createClass({
        render: function() {
            return {
                block: 'inner-block',
                content: 'inside'
            };
        }
    }),
    Block = ReactBEM.createClass({
        render: function() {
            return {
                block: 'test',
                content: [
                    'data',
                    {
                        block: InnerBlock,
                        props: {
                            key: 'in',
                            ref: 'deepest block'
                        }
                    }
                ]
            };
        }
    });

describe('ReactBEMDOM in browser', function() {
    var container,
        app;

    it('should return exported methods', function() {
        expect(typeof ReactBEMDOM).toBe('object');
        expect('render' in ReactBEMDOM).toBe(true);
    });

    it('should render to container', function() {
        container = document.createElement('div');
        app = ReactBEMDOM.render({block: Block}, container);

        expect(
            container.firstChild.className
        ).toBe('test');

        expect(
            container.firstChild.childNodes[1].className
        ).toBe('inner-block');
    });

    it('should find dom node inside container', function() {
        expect(
            ReactBEMDOM.findDOMNode(app)
        ).toBe(container.firstChild);

        expect(
            ReactBEMDOM.findDOMNode(app.refs['deepest block'])
        ).toBe(container.firstChild.childNodes[1]);
    });

    it('should unmount from node', function() {
        ReactBEMDOM.unmountComponentAtNode(container);

        expect(container.firstChild).toBeNull();
    });

    it('should throw "findDOMNode was called on an unmounted component."', function() {
        expect(function() {
            ReactBEMDOM.findDOMNode(app);
        }).toThrowError(/Invariant/);
    });
});
