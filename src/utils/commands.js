export const commands = {
  help: {
    description: "List all commands",
    output: `
Available commands:
- about
- projects
- contact
- clear
- help
- ↑/↓ to navigate past commands
`
  },
  about: {
    description: "About me",
    output: `Hi! I'm Panagiotis, a cyber security automations developer at Pfizer, located in Greece. \nI like to build cool stuff. 
    
    Experience:
    -Cyber Security Automations Developer | Pfizer | July 2024 – Present

    Education:
    -MSc in Applied Informatics - Software Development and Cloud | Oct 2025 - present | University of Macedonia, Thessaloniki, Greece
    -BSc in Applied Informatics | SEP 2020 -  FEB 2025 | University of Macedonia, Thessaloniki, Greece

    Skills & Abilities:
    -Java           -YAML
    -JavaScript     -Tailwind CSS
    -Python         -Cortex XSOAR    
    -React          -Splunk
`
  },
  projects: {
    description: "My Projects",
    output: "Done some pretty cool projects, but i am working on better ones. Stay tuned, thanks.😊"
  },
  contact: {
    description: "Contact info",
    output: `LinkedIn: https://www.linkedin.com/in/panagiotis-bogka\nGitHub: https://github.com/PanagiotisBogas`
  },
  clear: {
    description: "Clear terminal",
    action: "clear"
  }
};
