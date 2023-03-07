import { Box, Button } from "dracula-ui";
import { useContext } from "react";
import { BucketContext } from "../context/BucketContext";

const CardButtons = ({ task }) => {
  const { completeTask, deleteTask } = useContext(BucketContext);

  return (
    <Box display="flex">
      <Button
        size="sm"
        mr="xs"
        color="green"
        variant="ghost"
        disabled={task.isCompleted ? true : false}
        onClick={() => completeTask(task.id)}
      >
        Done
      </Button>
      <Button
        size="sm"
        color="red"
        variant="ghost"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </Button>
    </Box>
  );
};

export default CardButtons;
