/**
 * @description 加载过程列表项占位符
 * @author 
 * @date 2025-06-18
 */

import React from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';

const AltPlaceholder = () => {
    return (
        <Stack spacing={2} p={2}>
            <Skeleton height="16px" />
            <Skeleton height="12px" width="80%" />
            <Skeleton height="12px" width="60%" />
        </Stack>
    );
};