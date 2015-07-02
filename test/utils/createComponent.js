import React from 'react/addons';


function createComponent(component, props, ...children) {
  const shallowRenderer = React.addons.TestUtils.createRenderer();

  shallowRenderer.render(
    React.createElement(component, props, children.length > 1 ? children : children[0])
  );
  return {shallow: shallowRenderer, out: shallowRenderer.getRenderOutput()};
}


export default createComponent;
