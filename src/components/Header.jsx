import { Heading, Box } from "dracula-ui";
import { useContext } from "react";
import { BucketContext } from "../context/BucketContext";

const Header = () => {
  const { tasks } = useContext(BucketContext);
  const incompleteTasks = tasks.filter((task) => task.isCompleted == false);

  return (
    <Box as="header">
      <Heading color="purpleCyan" size="2xl">
        BUCKET LIST
      </Heading>
      <Heading color="purple" size="md">
        You've got {incompleteTasks.length || "no"}{" "}
        {incompleteTasks.length === 1 ? "thing" : "things"} on your list to do
        before you kick the bucket.
      </Heading>
    </Box>
  );
};

export default Header;
