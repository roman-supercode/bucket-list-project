import CardButtons from "./CardButtons";
import { Box, Text } from "dracula-ui";
import { useContext } from "react";
import { BucketContext } from "../context/BucketContext";

const ItemCard = ({ task }) => {
  const { completeTask } = useContext(BucketContext);

  return (
    <Box
      onDoubleClick={() => task.isCompleted && completeTask(task.id)}
      color={!task.isCompleted && "black"}
      display="flex"
      p="sm"
      mb="xs"
      rounded="lg"
      as="article"
    >
      <Box display="flex" pr="sm" style={{ flexDirection: "column" }}>
        <Text
          color={task.isCompleted ? "blackSecondary" : "purpleCyan"}
          style={{ wordBreak: "break-all" }}
        >
          {task.text}
        </Text>
        <Text color="blackSecondary">{task.date}</Text>
      </Box>
      <CardButtons task={task} />
    </Box>
  );
};

export default ItemCard;
