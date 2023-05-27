import { Badge } from "@chakra-ui/react";

interface BadgeRoomProps {
  room_type: string;
}

export const BadgeRoom = ({ room_type }: BadgeRoomProps) => {
  //suite
  let color = "pink";
  const room_type_lower = room_type.toLowerCase();
  console.log(room_type_lower);
  if (room_type_lower === "single") {
    color = "green";
  } else if (room_type_lower === "double") {
    color = "yellow";
  } else if (room_type_lower === "twin") {
    color = "blue";
  } else if (room_type_lower === "suite") {
    color = "pink";
  } else if (room_type_lower === "premium_suite") {
    color = "purple";
  } else {
    color = "teal";
  }

  return (
    <Badge variant="subtle" colorScheme={color} px="2" py="1" rounded="full">
      {room_type}
    </Badge>
  );
};
