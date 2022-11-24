import React from 'react';
import OverlaySelector from '@/components/OverlaySelector'
import CircularCheckboxIndicator from '@/components/indicator/CircularCheckboxIndicator'

/**
 * @param {boolean} overlay  hover状态效果是否叠加, 默认为不叠加
 * @param {*} children  自定义子组件
 * @returns 
 */

export default function index(props) {
    const { children, overlay=false, ...rest } = props;

    return React.Children.map(children, child => {
        return (
            <OverlaySelector selected 
                             defaultIndicator={CircularCheckboxIndicator}
                             selectedIndicator={CircularCheckboxIndicator}
                             selectedIndicatorProps={{state: 'checked'}}
                             hoverIndicator={CircularCheckboxIndicator}
                             hoverIndicatorProps={{state: 'outline'}}
                             overlay={overlay}
                            >
            {
                React.cloneElement(child, {
                    ...rest
                })
            }
            </OverlaySelector>
        )
    })
}
