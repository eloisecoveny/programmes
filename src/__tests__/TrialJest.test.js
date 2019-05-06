import React from 'react';
import { shallow } from '../../enzyme';

describe('when user clicks heading', () => {
  it ('calls correct function to sort the programmes', () => {
    const handleIdSort = jest.fn();
    const wrapper = shallow(<p onClick={handleIdSort}/>);
    const buttonElement = wrapper.find('p');
    buttonElement.simulate('click');

    expect(handleIdSort).toHaveBeenCalledTimes(1);
  });
});
