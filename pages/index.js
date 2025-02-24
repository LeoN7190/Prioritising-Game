import { useState } from "react";
import { motion } from "framer-motion";

const tasks = [
  { id: 1, name: "Turn off running taps", priority: 1 },
  { id: 2, name: "Clean spilled drink", priority: 2 },
  { id: 3, name: "Pick up trash from floor", priority: 3 },
  { id: 4, name: "Clear tables with dishes", priority: 4 },
  { id: 5, name: "Take out the overflowing bin", priority: 5 },
  { id: 6, name: "Restock the fridge", priority: 6 },
  { id: 7, name: "Stand at the till", priority: 7 },
  { id: 8, name: "Check social media", priority: 8 },
];

export default function PrioritizationGame() {
  const [completed, setCompleted] = useState([]);
  const [message, setMessage] = useState("");

  const handleTaskClick = (task) => {
    if (completed.includes(task.id)) return;

    if (completed.length === 0 || task.priority === completed.length + 1) {
      setCompleted([...completed, task.id]);
      setMessage(`✅ Well done! You completed: ${task.name}`);
    } else {
      setMessage("⚠️ Try again! Prioritize more urgent tasks first.");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Workplace Prioritization Game</h1>
      <p className="mb-4 text-center">Click on the tasks in the correct order of priority.</p>
      <div className="grid grid-cols-2 gap-4 max-w-md">
        {tasks.map((task) => (
          <motion.div whileTap={{ scale: 0.9 }} key={task.id}>
            <div
              className={`p-4 cursor-pointer border rounded-lg shadow-md ${
                completed.includes(task.id) ? "bg-green-300" : "bg-white"
              }`}
              onClick={() => handleTaskClick(task)}
            >
              <p className="text-center">{task.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
    </div>
  );
}
