import { shallow } from 'enzyme';
import React from 'react'
import CounterButton from './CounterButton';
import toJson from 'enzyme-to-json';



it('expect to render Card Component', () => {
    const mockColor = 'red'
    expect(toJson(<CounterButton color={mockColor} />)).toMatchSnapshot()
})
