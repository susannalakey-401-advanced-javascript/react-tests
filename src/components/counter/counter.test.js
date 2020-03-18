import React from 'react'
import Counter from './counter'
import { shallow } from 'enzyme'


describe('<Counter />', () => {
  let tree;

  beforeEach(() => {
    tree = shallow(<Counter />)
  })

  it('renders to the page', () => {
    expect(tree).toMatchSnapshot();
  })

  describe('when the down is clicked', () => {

    beforeEach(() => {

      // find the element by targeting it, then simulate the click
      tree.find('.down').simulate('click');

    })

    it('renders to the page', () => {
      expect(tree).toMatchSnapshot();
    })

  })


  describe('when the up is clicked', () => {

    beforeEach(() => {
      // find the element by targeting it, then simulate the click
      tree.find('.up').simulate('click');
    })

    it('renders to the page', () => {
      expect(tree).toMatchSnapshot();
    })

  })

})





// describe('<Thing />', () => {
//   it('renders correctly', () => {
//     const tree = renderer.create(<Thing />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })

//   it('changes state on click', () => {
//     const component = mount(<Thing />)
//     const button = component.find('#myButton')
//     button.simulate('click')
//     expect(component).toHaveState({ stuff: false })
//     expect(component.find('span')).toIncludeText('false')
//   })
// })


// describe('<App />', () => {
//   it('renders correctly', () => {
//     const tree = renderer.create(<App />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })

//   it('is alive at application start', () => {
//     const component = shallow(<App />)
//     expect(component.find('h1')).toExist()
//   })
// })