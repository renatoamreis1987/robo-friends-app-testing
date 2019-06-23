import { shallow } from 'enzyme';
import React from 'react'
import App from './App';



it('expect to render Card Component', () => {
    const mockColor = 'red'
    expect(toJson(<CounterButton color={mockColor} />)).toMatchSnapshot()
})
