const projects = [
    {
        id: 1,
        title: "CRUD de Usuários",
        description: "Sistema completo de CRUD para gerenciamento de usuários.",
        techs: [
            { name: "PHP", icon: "logos:php", color: "#777BB4" },
            { name: "MySQL", icon: "logos:mysql", color: "#4479A1" },
            { name: "XAMPP", icon: "simple-icons:xampp", color: "#FB7A24" },
            { name: "HTML", icon: "vscode-icons:file-type-html", color: "#E34F26" },
            { name: "CSS", icon: "vscode-icons:file-type-css", color: "#1572B6" }
        ],
        image: "/img/CRUD.png",
        // github: "https://github.com/Thiagogmr1/Cadastro-em-PHP",
    },
    {
        id: 2,
        title: "Dashboard de Mensagens - WhatsApp",
        description:
            "Dashboard de mensagens em tempo real integrado ao WhatsApp via chatbot.",
        techs: [
            { name: "React", icon: "logos:react", color: "#61DAFB" },
            { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
            { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
            { name: "Prisma", icon: "simple-icons:prisma", color: "#2D3748" },
            { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
            { name: "Redis", icon: "logos:redis", color: "#DC382D" },
            { name: "Figma", icon: "logos:figma", color: "#F24E1E" }
        ],
        image: "/img/Dash.png",
        // github: "https://github.com/seuuser/projeto",
        figma: "https://www.figma.com/design/Wimrw7irhV6F231UQRreun/Dashboard---FTT?node-id=1461-3294&t=A3stDJ0kOZfQTaQU-1",
        demo: ""
    },
    {
        id: 3,
        title: "Gestão de Tarefas",
        description: "Sistema CRUD para gerenciamento de tarefas.",
        techs: [
            { name: "Angular", icon: "logos:angular-icon", color: "#DD0031" },
            { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
            { name: "HTML", icon: "vscode-icons:file-type-html", color: "#E34F26" },
            { name: "SCSS", icon: "vscode-icons:file-type-scss", color: "#CC6699" }
        ],
        image: "/img/Angular.png",
        // github: "https://github.com/Thiagogmr1/Angular-task-dashboard",
        demo: "https://angular-task-dashboard.vercel.app/dashboard"
    }
];

export default projects;