import React from "react";
import { HCenter } from "@/components/cart";
import { ChakraProvider } from "@chakra-ui/react";

export default function TextComponent() {
    
    const TestHCenter = () => {
        return (
            <HCenter>
                <div>Hello World</div>
            </HCenter>
        )
    }

    return (
        <ChakraProvider>
            <TestHCenter />
        </ChakraProvider>
    )
}