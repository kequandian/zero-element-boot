import React from 'react';
import TreeItem from './TreeItem';
import TreeArrayItem from './TreeArrayItem';
import { Flex, Stack, Center } from '@chakra-ui/layout';
import Tree from './index'
import PageSection from 'zero-element-boot-plugin-theme/lib/components/text/pageSectionTitle/PageSectionTitle';


export default function index(props) {

    const { keyName, ...data } = props
    const keys = Object.keys(props)

    return (
        <>
            {
                keys && keys.length > 0 ?
                    <>
                        <Flex bg='#f5f5f5' margin=' 2px 0 0 0' >
                            <Center h='30px' margin='0 8px 0 0 '>
                                <svg t="1662005256045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="71804" width="18" height="18"><path d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z" fill="#cdcdcd" p-id="71805"></path></svg>
                            </Center>
                            <Center h='30px' margin='0 0 0' >
                                <PageSection>
                                    {keyName}
                                </PageSection>
                            </Center>
                        </Flex>

                        <Stack h='' margin='0 0 0 40px' spacing='0'>
                            <Tree {...getValue(props, keyName)} />
                        </Stack>
                    </>

                    : <></>
            }
        </>
    )
}


// 获取Value值
function getValue(props, key) {
    return props[key]
}