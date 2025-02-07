import AnimatedCard from "./../components/AnimatedCard";

export default function Project() {
  const projects = [
    {
      title: "Nike (Ecommerce website)",
      description:
        "Developed a responsive and dynamic e-commerce website using Next.js and Tailwind CSS, featuring seamless navigation, optimized performance, and modern UI/UX design.",
      imageUrl: "/images/image copy.png",
      vercelLink :"https://hack-ecommerce-brhb.vercel.app/"
    },
    {
      title: "Resume Builder with Download Feature",
      description:
        "Built a resume builder using HTML, CSS, and TypeScript for easy customization and download of resumes.",
      imageUrl: "/images/image copy 2.png",
      vercelLink :"https://millestone-5-six.vercel.app/"
    },
    {
      title: "CLI calculator",
      description:
        "A command-line calculator built using Node.js and TypeScript, offering efficient and reliable arithmetic operations directly in the terminal.",
      imageUrl: "/images/calcu.webp",
      vercelLink :"/calculator"
    },
    {
      title: "CLI Number Guessing Game",
      description:
        "CLI-based Number Guessing Game built with Node.js and TypeScript, featuring interactive gameplay .",
      imageUrl: "/images/game (1).webp",
      vercelLink :"/numbergame"
    },
    {
      title: "CLI-ATM",
      description:
        "A command-line ATM application built with Node.js and TypeScript, offering essential banking functionalities like balance inquiry, deposits, and withdrawals.",
      imageUrl: "/images/atm.webp",
      vercelLink :"/atm"
    },
    {
      title: "CLI Todo List",
      description:
        "A command-line tool created with Node.js and TypeScript, allowing users to add, view, and manage tasks efficiently",
      imageUrl: "/images/todo.webp",
      vercelLink :"/todo"
    },
    {
      title: "CLI Currency Exchange Tool",
      description:
        "A command-line interface (CLI) currency exchange tool built using Node.js and TypeScript.Enables easy currency conversion with real-time exchange rates.",
      imageUrl: "/images/currency.webp",
      vercelLink :"/currencyexchange"
    },
  ];

  return (
    <main id="project" className="bg-gray-100 min-h-screen p-20 mt-[200px]">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <AnimatedCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
