export default function TaskList({ users: tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks added yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between items-center p-3 bg-gray-50 rounded border">
          <div>
            <p className="font-medium">{task.title}</p>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
