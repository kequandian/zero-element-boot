import React from 'react';

import { NamedCart } from '@/components';
import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';
import SelectedCartUpperRightIcon from '@/components/indicator/SelectedCartUpperRightIcon';
import SelectedCartRightIcon from '@/components/indicator/SelectedCartRightIcon';
import ItemPlaceholder from '@/components/presenter/ItemPlaceholder';
import CheckBoxIndicatorCart from '@/components/indicator/CheckBoxIndicatorCart';
import CircularCheckboxIndicator from '@/components/indicator/CircularCheckboxIndicator';
import OnDeleteIndicator from '@/components/indicator/OnDeleteIndicator';
import SelectIndicatorCart from '@/components/indicator/SelectIndicatorCart';
import TagIndicator from '@/components/indicator/TagIndicator';
import OverlaySelector from '@/components/OverlaySelector'
import ShadowIndicator from '@/components/indicator/ShadowIndicator'


export default function index(props) {

    return (
        <>

            <OverlaySelector
                defaultIndicator={SelectedCartUpperRightIcon} 
                hoverIndicator={ShadowIndicator}
                selectedIndicator={SelectedCartUpperRightIcon} selectedIndicatorProps={{ state: 'selected' }}
                // isSelected
                selected
            >
                <ItemPlaceholder />
            </OverlaySelector>
        </>
    )
}