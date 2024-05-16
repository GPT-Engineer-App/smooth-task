import { useState } from "react";
import { Container, VStack, HStack, Input, Button, IconButton, Text, Checkbox, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo App</Text>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <Button onClick={addTask} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)}>
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => deleteTask(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
