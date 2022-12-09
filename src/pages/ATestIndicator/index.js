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
import NextIndicator from '@/components/NextIndicator'
import SelectAvatar from '@/components/indicator/SelectAvatar';
import { Center, Stack, Text } from '@chakra-ui/layout';
import Avatar from '@/components/presenter/Avatar';


export default function index(props) {

    return (
        <>

            <OverlaySelector
                defaultIndicator={SelectAvatar}
                selectedIndicator={SelectedCartRightIcon}  selectedIndicatorProps={{color :'#ee941f', outline:'any' }}
                // hoverIndicator={TagIndicator} hoverIndicatorProps ={{state: 'selected'}}
                // isSelected
                selected
            >
                <Stack>
                    <Center>
                        <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    </Center>
                    <Center>
                        头像
                    </Center>
                </Stack>
            </OverlaySelector>
        </>
    )
}