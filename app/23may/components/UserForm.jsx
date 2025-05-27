"use client";
import { useState } from "react";
import UserList from "./TaskList"; // You can rename this to TaskList if you want

export default function TaskForm() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    if (editingId) {
      setTasks(tasks.map(task =>
        task.id === editingId ? { ...task, ...form } : task
      ));
      setEditingId(null);
    } else {
      const newTask = { id: Date.now(), ...form };
      setTasks([...tasks, newTask]);
    }

    setForm({ title: "", description: "" });
  };

  const handleEdit = (task) => {
    setForm({ title: task.title, description: task.description });
    setEditingId(task.id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ title: "", description: "" });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-6">
      <h2 className="text-2xl font-bold mb-4">{editingId ? "Edit Task" : "Add Task"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task Name"
          value={form.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Task" : "Add Task"}
        </button>
      </form>

      <UserList users={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
