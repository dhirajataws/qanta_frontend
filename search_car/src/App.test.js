import React from 'react';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()})
describe('test ',() => {
  it('renders dashboard page with logo header search nav bar', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('h1').exists()).toBe(true)
    expect(wrapper.find('.App-header').exists()).toBe(true)
    expect(wrapper.find('.App-logo').exists()).toBe(true)
    expect(wrapper.find('.App-title').exists()).toBe(true)
    expect(wrapper.find('SearchNavBar').length).toBe(1)
  })
})

