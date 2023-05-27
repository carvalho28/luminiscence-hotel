import {StarIcon} from "@chakra-ui/icons";
import {Center, Container} from "@chakra-ui/react";

interface StarRatingComponentProps {
    value: number;
    onChange: (value: number) => void;
    nStars: number;
}

const StarRatingComponent = ({ value, onChange, nStars }: StarRatingComponentProps) => {
    return (
        <Center mt={"5"} mb={"5"}>
            {Array.from({ length: nStars }, (_, i) => i + 1).map((i) => (
                <StarIcon
                    key={i}
                    color={i <= value ? "yellow.400" : "gray.300"}
                    onClick={() => onChange(i)}
                    w={8}
                    h={8}
                    _hover={{cursor: "pointer"}}
                />
            ))}
        </Center>
    );
};

export default StarRatingComponent;``