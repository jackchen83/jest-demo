// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

test('snapshot render', () => {
  const checkbox = renderer.create(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.toJSON()).toMatchSnapshot();
  checkbox.unmount();
});

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = mount(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');

  expect(checkbox).toMatchSnapshot();
  checkbox.unmount();

});

