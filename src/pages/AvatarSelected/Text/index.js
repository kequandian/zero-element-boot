import React, { useState, useEffect } from 'react';
import { Box,Center } from "@chakra-ui/react";


export default function Index(props) {

  const { title } = props;


  return (
    <Center w='100%'>
        {title}
    </Center>
  )
}