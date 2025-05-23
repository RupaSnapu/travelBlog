import TaskForm from "./components/UserForm";

export default function Home() {
  const rows = [
    [
      { text: 'Row 1 - Column 1', bg: '#f3f4f6' },
      { text: 'Row 1 - Column 2', bg: '#e5e7eb' },
      { text: 'Row 1 - Column 3', bg: '#d1d5db' },
    ],
    [
      { text: 'Row 2 - Column 1', bg: '#dbeafe' },
      { text: 'Row 2 - Column 2', bg: '#bfdbfe' },
      { text: 'Row 2 - Column 3', bg: '#93c5fd' },
    ],
    [
      { text: 'Row 3 - Column 1', bg: '#d1fae5' },
      { text: 'Row 3 - Column 2', bg: '#a7f3d0' },
      { text: 'Row 3 - Column 3', bg: '#6ee7b7' },
    ],
  ];

  return (
    <>
    <div className="p-4 space-y-8">
      {rows.map((items, index) => (
        <Row key={index} items={items} />
      ))}
    </div>
     <main className="min-h-screen p-8 bg-gray-100">
      <TaskForm/>
    </main>
    </>
  );
}
function Row({ items }) {
  return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((content, index) => (
        <div key={index} className="p-4 rounded text-center" style={{ backgroundColor: content.bg }}>
          {content.text}
        </div>
      ))}
    </section>

  );
}
