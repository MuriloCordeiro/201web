import { Flex, Image, Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

type BlockMainContentType = {
    title: string;
    text: string;
    image: string;
};

export default function BlockMainContent({
    image,
    text,
    title,
}: BlockMainContentType) {
    const cardVariants: Variants = {
        offscreen: {
            opacity: 0.5,
            y: 200,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 2,
            },
        },
    };
    return (
        <Flex
            as={motion.div}
            variants={cardVariants}
            whileInView="onscreen"
            initial="offscreen"
            direction={"column"}
            viewport={{ once: true }}
            w={"500px"}
            h={"400px"}
            align={"center"}
            justify={"center"}
            bg={"white"}
            paddingX={"70px"}
            gap={"20px"}
            borderRadius={"20px"}
            boxShadow={"-14px 14px 14px 3px #0000000F"}
        >
            <Image src={image} w={"80px"} h={"80px"} />
            <Text textColor={"black"} textStyle={"Bold"} fontSize={"30px"}>
                {title}
            </Text>
            <Text
                textColor={"gray"}
                textStyle={"Regular"}
                fontSize={"20px"}
                textAlign={"center"}
            >
                {text}
            </Text>
        </Flex>
    );
}
