import "dracula-ui/styles/dracula-ui.css";
import { useContext, useState } from "react";
import { BucketContext } from "./context/BucketContext";
import { Box } from "dracula-ui";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import TaskCard from "./components/ItemCard";
import Form from "./components/Form";
import Notification from "./components/Notification";

const App = () => {
  const [showAll, setShowAll] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const { tasks } = useContext(BucketContext);

  return (
    <Box className="container">
      <Header />
      <Form />
      <NavTabs
        setShowAll={setShowAll}
        setFilterCompleted={setFilterCompleted}
      />
      <Box as="main" mt="xs">
        {tasks
          .filter((task) => showAll || task.isCompleted == filterCompleted)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </Box>
      <Notification />
    </Box>
  );
};

export default App;
