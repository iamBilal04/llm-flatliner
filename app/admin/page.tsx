"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [logs, setLogs] = useState<any[]>([]);
  const [authed, setAuthed] = useState(false);

  const login = (e: any) => {
    e.preventDefault();
    const u = e.target.user.value;
    const p = e.target.pass.value;
    if (u === "admin" && p === "hunter2") {
      setAuthed(true);
      fetch("/log.json")
        .then((r) => r.json())
        .then(setLogs);
    } else {
      alert("wrong creds");
    }
  };

  if (!authed) {
    return (
      <form
        onSubmit={login}
        className="p-6 flex flex-col gap-4 max-w-md mx-auto"
      >
        <h1 className="text-xl font-bold">Admin Login</h1>
        <input name="user" placeholder="username" className="border p-2" />
        <input
          name="pass"
          type="password"
          placeholder="password"
          className="border p-2"
        />
        <button type="submit" className="bg-black text-white px-4 py-2">
          Login
        </button>
      </form>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">HTML Bomb Access Logs</h1>
      <pre className="text-sm bg-gray-100 p-4 overflow-auto max-h-[80vh]">
        {JSON.stringify(logs, null, 2)}
      </pre>
    </div>
  );
}
