var ReactBEMDOMServer = require('../server'),
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

describe('ReactBEMDOMServer', function() {

    it('should return exported methods', function() {
        expect(typeof ReactBEMDOMServer).toBe('object');
        expect('renderToString' in ReactBEMDOMServer).toBe(true);
    });

    it('should renderToString', function() {
        var markup = ReactBEMDOMServer.renderToString({block: Block});

        expect(markup).toMatch(new RegExp(
            '<div.+?class="test".+?>' +
               '<span.+?>data<\/span>' +
               '<div.+?class="inner-block".+?>inside<\/div>' +
           '<\/div>'
        ));
    });

    it('should renderToStaticMarkup', function() {
        var markup = ReactBEMDOMServer.renderToStaticMarkup({block: Block});

        expect(markup).toEqual('<div class="test">data<div class="inner-block">inside</div></div>');
    });

});
