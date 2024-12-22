
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[23vw] bg-blue-400 rounded-lg flex items-start justify-start flex-col px-4 py-6'>
        <div className='font-bold text-xl mb-4'>To Do List 📝</div>
        <div className='flex items-center justify-between w-full mb-5'>
          <input
            type='text'
            name='text'
            id='text'
            value={newTask}
            onChange={handleInputChange}
            placeholder='Enter task here...'
            className='w-[15vw] h-[2.6vw] rounded-[0.4vw] px-4 py-2 border-none outline-none'
          />
          <button
            onClick={handleAddTask}
            className='bg-cyan-300 rounded-[0.4vw] px-[0.8vw] py-[0.5vw] border-none outline-none font-medium transition duration-75 ease-in-out hover:bg-blue-500'
          >
            ADD
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`w-[21.3vw] px-2 mt-4 flex items-start justify-between flex-nowrap text-left `}
            >
              <span
                className={`mr-2 cursor-pointer ${task.completed ? 'line-through' : ''}`}
                onClick={() => handleCompleteTask(index)}
              >
                {index + 1} &nbsp; {task.text}
              </span>
              <button
                onClick={() => handleDeleteTask(index)}
                className='bg-orange-600 px-[0.4vw]  py-[0.4vw] text-sm rounded-[5px]'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App; 

