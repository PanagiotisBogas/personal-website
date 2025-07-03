export default function CommandLine({ input, setInput }){
    return<>
        <div className="flex">
    <span className="text-green-400">guest@panagiotis-terminal: ~ %&nbsp;</span>
    <div className="flex-grow relative">
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-900 text-green-500 border-none outline-none w-full caret-transparent"
        spellCheck="false"
      />
      <span className="absolute top-0 left-0 pointer-events-none">
        {input}
        <span className="animate-blink">█</span>
      </span>
    </div>
  </div>
    </>
}