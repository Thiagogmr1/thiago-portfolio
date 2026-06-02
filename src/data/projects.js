const projects = [
    {
        id: 1,
        title: "MediTrack — Plataforma de Adesão ao Tratamento",
        description: "Sistema de gerenciamento de prescrições médicas com envio automatizado de lembretes via WhatsApp, desenvolvido com Next.js, FastAPI e PostgreSQL.",
        blocked: false,
        message: "Projeto não disponível publicamente devido à dependência de infraestrutura backend.",
        techs: [
                { name: "Next.js", icon: "logos:nextjs-icon", color: "#000000" },
                { name: "React", icon: "logos:react", color: "#61DAFB" },
                { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
                { name: "Tailwind CSS", icon: "devicon:tailwindcss", color: "#06B6D4" },
                { name: "shadcn/ui", icon: "simple-icons:shadcnui", color: "#000000" },
                { name: "FastAPI", icon: "simple-icons:fastapi", color: "#009688" },
                { name: "PostgreSQL", icon: "logos:postgresql", color: "#336791" },
                { name: "Twilio", icon: "simple-icons:twilio", color: "#F22F46" },
                { name: "JWT", icon: "simple-icons:jsonwebtokens", color: "#000000" },
                { name: "Vercel", icon: "simple-icons:vercel", color: "#000000" },
                { name: "Railway", icon: "simple-icons:railway", color: "#0B0D0E" },
                { name: "Cloudflare", icon: "simple-icons:cloudflare", color: "#F38020" }
        ],
        image: "/img/Medi.png",
        demo: "https://www.meditrack-app.com/"
    },
    {
        id: 2,
        title: "Dashboard de Mensagens - WhatsApp",
        description:"Dashboard de mensagens em tempo real integrado ao WhatsApp via chatbot.",
        blocked: true,
        message: "Projeto desenvolvido em ambiente empresarial com acesso restrito. Design disponível para visualização.",
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
        blocked: false,
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