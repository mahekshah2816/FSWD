import React, { useState } from 'react';
import './Todo.css';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editId ? input : task
      );
      setTasks(updatedTasks);
      setEditId(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput('');
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditId(index);
  };

  const startListening = () => {
  try {
    recognition.abort(); // stops any running instance
    recognition.start(); // safely starts again
  } catch (error) {
    console.error("Speech recognition failed to start:", error);
  }
};


  recognition.onresult = (event) => {
    const voiceInput = event.results[0][0].transcript;
    setInput(voiceInput);
    setTimeout(() => handleAddTask(), 100);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
  };

  return (
    <div className="todo-container">
      <h1>Get Things Done !</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="What is the task today?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>{editId !== null ? 'Update' : 'Add Task'}</button>
        <button onClick={startListening} className="mic-btn">🎤</button>
      </div>

      <div className="tasks-section">
        {tasks.map((task, index) => (
          <div key={index} className="task-box">
            <span>{task}</span>
            <div className="actions">
              <button onClick={() => handleEdit(index)}>✏️</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
