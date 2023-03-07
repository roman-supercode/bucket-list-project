import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const BucketContext = createContext();

export const BucketProvider = ({ children }) => {
  // Datumstempel
  const locale = navigator.language;
  const date = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString(locale, options);

  const firstItems = [
    {
      id: uuidv4(),
      text: "Hello! Add something to the bucket list!",
      isCompleted: false,
      date: formattedDate,
    },
    {
      id: uuidv4(),
      text: "Create a Bucket List with React.js!",
      isCompleted: true,
      date: formattedDate,
    },
    {
      id: uuidv4(),
      text: "Style the bucket list with Dracula UI!",
      isCompleted: true,
      date: formattedDate,
    },
  ];
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || firstItems
  );

  // Effekt, um den Zustand der Aufgabenliste im localStorage zu speichern
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const currentDate = formattedDate;
    const newTask = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
      date: currentDate,
    };
    setTasks([...tasks, newTask]);
    toast.success("Added");
    console.log(newTask.id);
  };

  const completeTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.isCompleted = !task.isCompleted;
    setTasks(newTasks);
    task.isCompleted
      ? toast.success("Completed", {
          iconTheme: { primary: "#8aff80", secondary: "#21222c" },
          style: { color: "#8aff80" },
        })
      : toast.success("Restored", {
          iconTheme: { primary: "#ffff80", secondary: "#21222c" },
          style: { color: "#ffff80" },
        });
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    setTasks(newTasks.filter((task) => task.id !== id));
    toast.error("Deleted");
  };

  return (
    <BucketContext.Provider
      value={{ tasks, addTask, completeTask, deleteTask }}
    >
      {children}
    </BucketContext.Provider>
  );
};
