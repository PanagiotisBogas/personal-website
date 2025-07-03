import { useEffect, useState } from "react";

useEffect
export default function Output({ cmd, output }){
    const [displayedOutput, setDisplayedOutput] = useState("");

    useEffect(() => {
        let i = 0;
        const speed = 8; // ms per character
        const interval = setInterval(() => {    
        setDisplayedOutput(output.slice(0, i));
        i++;
        if (i > output.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [output]);
    return<>
        <div className="mb-2">
            <div><span className="text-green-400">guest@panagiotis-terminal: ~ %</span> {cmd}</div>
            <pre className="whitespace-pre-wrap">{displayedOutput}</pre>
        </div>
    </>
}