import TestUtils from 'react-addons-test-utils';

function shallowRender(component) {
    const renderer = TestUtils.createRenderer();

    renderer.render(component);
    return renderer.getRenderOutput();
}

export {
    shallowRender
};
