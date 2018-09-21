import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Icon, iconType } from '../../src/components/Icon'
/**
 * Page Component tests
 */
export const pageTests: Mocha.Suite = describe('Icon component', () => {

    let c!: renderer.ReactTestRenderer

    after(() => {
        c.unmount()
    })

    it('Should render without crashing', () => {
        c = renderer.create(
            <Icon
            type={iconType.materialui}
            iconName="workspace">
            </Icon>)
    })
})
