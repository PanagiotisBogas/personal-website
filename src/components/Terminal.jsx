import { useState } from "react";
import { commands } from "../utils/commands";
import CommandLine from "./CommandLine";
import Output from "./Output";
export default function Terminal(){
    const [history, setHistory] = useState([]);
    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);


    const handleCommand = (cmd) => {
        if (cmd === "clear") {
        setHistory([]);
        return;
        }
        const commandOutput = commands[cmd]?.output || `Command not found: ${cmd}`;
        setHistory([...history, { cmd, output: commandOutput }]);
        setCommandHistory([...commandHistory, cmd]);
        setHistoryIndex(-1);
    }

    const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[commandHistory.length - 1 - newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setInput(commandHistory[commandHistory.length - 1 - newIndex]);
    }
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
        handleCommand(input.trim());
        setInput("");
        }
    };
    return(
    <div
      className="bg-gray-900 text-fuchsia-300 p-4 h-screen font-mono overflow-y-auto"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {history.map((item, index) => (
        <Output key={index} cmd={item.cmd} output={item.output} />
      ))}
      <form onSubmit={handleSubmit}>
        <CommandLine input={input} setInput={setInput} />
      </form>
    </div>
  );
}