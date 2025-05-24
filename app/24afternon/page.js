"use client";

import { useState, useEffect, useRef } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState([]);
  const intervalRef = useRef(null);

  // Helper to add a log entry with color coding
  const addLog = (message, type = "info") => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [
      { id: prev.length, timestamp, message, type },
      ...prev,
    ]);
  };

  // Start interval counting
  const startCounting = () => {
    if (intervalRef.current) return;
    addLog("⏳ Started interval timer", "start");
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  // Stop interval counting & cleanup
  const stopCounting = () => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    addLog("🛑 Stopped interval timer (cleanup)", "stop");
  };

  // Log mount and cleanup
  useEffect(() => {
    addLog("🚀 Component mounted", "mount");

    return () => {
      stopCounting();
      addLog("🧹 Component unmounted (cleanup)", "cleanup");
    };
  }, []);

  // Log count updates
  useEffect(() => {
    if (count === 0) return; // skip initial render
    addLog(`📈 Count updated to ${count}`, "update");
  }, [count]);

  return (
    <main
      style={{
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fefefe",
        userSelect: "none",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0070f3" }}>
        React Lifecycle & State Demo
      </h1>

      <div
        style={{
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <button
          onClick={startCounting}
          style={{
            padding: "12px 24px",
            fontSize: 16,
            borderRadius: 8,
            border: "none",
            backgroundColor: "#0070f3",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,112,243,0.6)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
        >
          Start Counting
        </button>

        <button
          onClick={stopCounting}
          style={{
            padding: "12px 24px",
            fontSize: 16,
            borderRadius: 8,
            border: "none",
            backgroundColor: "#e00",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(224,0,0,0.6)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a00")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e00")}
        >
          Stop Counting
        </button>
      </div>

      <section
        aria-live="polite"
        style={{
          marginTop: 40,
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#282c34",
          color: "white",
          fontFamily: "'Courier New', Courier, monospace",
          minHeight: 150,
          maxHeight: 250,
          overflowY: "auto",
          boxShadow: "inset 0 0 10px #000",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#61dafb" }}>Count: {count}</h2>

        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            fontSize: 14,
            lineHeight: 1.4,
          }}
        >
          {logs.length === 0 ? (
            <li style={{ fontStyle: "italic", opacity: 0.7 }}>
              Waiting for activity...
            </li>
          ) : (
            logs.map(({ id, timestamp, message, type }) => (
              <li
                key={id}
                style={{
                  marginBottom: 4,
                  color:
                    type === "start"
                      ? "#00ff00"
                      : type === "stop"
                      ? "#ff5555"
                      : type === "mount"
                      ? "#61dafb"
                      : type === "cleanup"
                      ? "#ffb86c"
                      : type === "update"
                      ? "#f1fa8c"
                      : "white",
                }}
              >
                <span style={{ opacity: 0.7 }}>{timestamp}</span> — {message}
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}
