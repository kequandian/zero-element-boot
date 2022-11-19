import React from 'react';
import { Flex } from "@chakra-ui/react";
require('./index.less');

/**
 * 
 */
export default function (props) {

    const { api, name, apiMethod, index=0 } = props;

    // console.log('props == ', props)

    return (
            <Flex h="21px" direction="row">
                <div className="textColor">
                    {`${apiMethod} ${api || '-'}`}
                </div>
                <div style={{width:'20px', height:'1px'}}></div>

                {
                    name && (
                        <div className="note">
                            {`${name}`}
                        </div>
                    )
                }
            </Flex>
    )
    
 

}