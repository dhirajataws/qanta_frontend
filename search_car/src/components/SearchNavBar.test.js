import React from 'react';
import SearchNavBar from './SearchNavBar';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()})
describe('test ',() => {
  it('renders search Nav bar', () => {
    const wrapper = shallow(<SearchNavBar/>)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('.container').exists()).toBe(true)
    expect(wrapper.find('.navbar').exists()).toBe(true)
  })
})

