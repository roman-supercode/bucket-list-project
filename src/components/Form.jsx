import { useContext, useState } from "react";
import { Input, Button } from "dracula-ui";
import { BucketContext } from "../context/BucketContext";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTask } = useContext(BucketContext);

  const submitForm = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "row", padding: "1rem 0" }}
      onSubmit={submitForm}
    >
      <Input
        mr="xs"
        borderSize="sm"
        size="md"
        color="cyan"
        type="text"
        placeholder="add something"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button size="md" color="cyan" variant="ghost">
        +
      </Button>
    </form>
  );
};

export default Form;
