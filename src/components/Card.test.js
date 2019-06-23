import { shallow } from 'enzyme';
import React from 'react'
import Card from './Card';

// shallow is the one we will use 90% of the time

// mount 

// render - It's use to render react components to a static html


it('expect to render Card Component', () => {
    expect(shallow(<Card />)).toMatchSnapshot()
})
