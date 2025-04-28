import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Briefcase, Code, Codesandbox, Award, User, ArrowUp, Loader2, Sun, Moon } from "lucide-react";
import ParticlesBackground from "./components/ParticlesBackground";
import { Link, animateScroll as scroll } from "react-scroll";
import Loader from "./components/Loader";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const profilePic = "/cropped-OPT_PIC.jpg";
  const accentureLogo = "/accenture-logo.png";
  const dxcLogo = "/dxc-logo.png";
  const deloitteLogo = "/deloitte-logo.png";
  const resumeLink = "/Resume25_SP.pdf";

  const handleImgError = (e, fallbackText) => {
    e.target.outerHTML = `<div class='flex items-center justify-center h-12 w-12 bg-gray-700 text-xs text-center rounded-full'>${fallbackText}</div>`;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`relative min-h-screen flex flex-col z-10 ${darkMode ? "bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 text-white" : "bg-gradient-to-br from-sky-100/80 via-white/70 to-blue-50/80 text-black"}`}>

      <ParticlesBackground darkMode={darkMode} />

      <nav className="fixed top-0 w-full flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 backdrop-blur-md bg-black/20 z-50 shadow-md">
        <div className="flex flex-wrap gap-4 sm:gap-10 text-md sm:text-lg font-semibold">
          {[
            { to: "about", label: "About" },
            { to: "experience", label: "Experience" },
            { to: "skills", label: "Skills" },
            { to: "projects", label: "Projects" },
            { to: "achievements", label: "Achievements" },
            { to: "contact", label: "Contact" }
          ].map(({ to, label }, idx) => (
            <Link
              key={idx}
              to={to}
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="text-cyan-400 underline underline-offset-8"
              className="relative cursor-pointer text-white hover:text-cyan-300 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>

        <a href={resumeLink} download className="mt-4 sm:mt-0 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition">
          <ArrowUp size={20} /> Resume
        </a>
      </nav>

      <div className="fixed bottom-6 right-6 flex flex-col gap-6 items-center">
        <button onClick={() => setDarkMode(!darkMode)} className="rounded-full p-4 bg-cyan-500 hover:bg-cyan-600">
          {darkMode ? <Sun size={40} /> : <Moon size={40} />}
        </button>
        <button onClick={() => scroll.scrollToTop()} className="rounded-full p-4 bg-cyan-500 hover:bg-cyan-600">
          <ArrowUp size={40} />
        </button>
      </div>

      <div className="p-4 sm:p-8 pt-40 space-y-16 sm:space-y-24">
 
        {/* Hero Section */}
        <motion.section id="hero" className="text-center space-y-6 scroll-mt-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="relative mx-auto w-64 h-64">
            {!profileLoaded && <div className="absolute inset-0 flex items-center justify-center"><Loader2 className="animate-spin" size={40} /></div>}
            <motion.img 
              src={profilePic} 
              alt="Profile" 
              onLoad={() => setProfileLoaded(true)}
              onError={(e) => handleImgError(e, "Profile")}
              className={`w-64 h-64 rounded-full border-4 border-cyan-400 object-cover ${profileLoaded ? "opacity-100" : "opacity-0"}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <h1 className="text-6xl font-extrabold">Harshavardhan Ambidi</h1>
          <p className="text-2xl">Software Engineer | SAP ABAP Developer | Full-Stack Developer</p>
        </motion.section>

        {/* About Section */}
        <motion.section id="about" className="space-y-6 scroll-mt-32\" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-semibold flex items-center gap-2"><User /> About Me</h2>
          <p>Master's student in Computer Science with a focus on impactful solutions and nearly 3 years of professional working experience in Full-Stack Development, SAP ABAP and Enterprise Software Engineering. Skilled in Java, Python, Machine Leaning, SAP and Modern Web Technologies.</p>
        </motion.section>

        {/* Experience Section */}
        <motion.section id="experience" className="space-y-6 scroll-mt-32\" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-semibold flex items-center gap-2"><Briefcase /> Experience</h2>
          {[{
            logo: accentureLogo,
            title: "Accenture | Packaged Application Development Analyst",
            time: "Dec 2022 – Jul 2023",
            desc: "Developed and optimized multiple projects ensuring adherence to coding standards and performance efficiency, while resolving critical production issues impacting ~7,000 live transactions, fixing front-end screen errors and role delegation problems enhancing system functionality. Led enhancements and bug fixes in Front-End Fiori apps, OData services, and Adobe Forms. Assessed technical feasibility, provided insights and maintained comprehensive technical specification documentations. Collaborated with cross-functional teams and functional consultants for seamless project execution. Conducted unit/regression testing to ensure software quality and delivered Knowledge Transfer (KT) sessions to train three entry-level associates."
          }, {
            logo: accentureLogo,
            title: "Accenture | Packaged Application Development Associate",
            time: "Sep 2021 – Dec 2022",
            desc: "Developed key reports and solutions including the Monthly Timesheet Allocation Report and Firefighter ID application, while resolving critical testing issues and reducing memory consumption through code optimization. Collaborated with cross-functional teams and leadership to address system discrepancies, provided insights on development landscapes, and deliver solutions for Intercompany Purchase Orders and Procure-to-Pay processes. Enhanced technical expertise through mandatory trainings (Technology Quotient, Ethics & Compliance, Delivery Learning Framework) and continuous skill development to meet evolving project demands."
          }, {
            logo: dxcLogo,
            title: "DXC Technology | Associate Professional Software Engineer",
            time: "Jan 2021 – Jul 2021",
            desc: "Completed intensive training in Java, Spring Framework, Hibernate, and RESTful APIs applying secure coding practices to develop high-performance enterprise applications and ensuring adherence to coding standards and best practices. Played a key role in the end-to-end software development lifecycle including coding, testing, debugging and maintenance of Java-based applications, while resolving defects and enhancing application performance. Collaborated in system integration and deployment tasks using Spring Boot, actively participated in code reviews and contributed to knowledge transfer sessions in a team-oriented development environment."
          }, {
            logo: deloitteLogo,
            title: "Deloitte | Technology Consulting Virtual Intern",
            time: "Dec 2019 – Jun 2020",
            desc: "Designed and integrated APIs to enhance system interoperability, refactored legacy code to reduce runtime by 30% and conducted code reviews while collaborating on debugging client-facing applications, earning recognition for efficient problem-solving. Developed and maintained Python-based applications, optimizing scripts for data processing and automation, resulting in a 40% reduction in manual effort and built predictive analytics tools that improved forecasting accuracy."
          }].map((exp, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-6">
              <img src={exp.logo} alt="Logo" className="h-12 w-12 object-contain" onError={(e) => handleImgError(e, "Logo")} />
              <div>
                <h3 className="font-bold">{exp.title}</h3>
                <p className="text-sm">{exp.time}</p>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Skills Section */}
<motion.section id="skills" className="space-y-8 scroll-mt-32" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
<h2 className="text-3xl font-semibold flex items-center gap-2"><Code /> Skills</h2>
  
  <div className="grid md:grid-cols-3 gap-10">
    
    {/* Languages and Frameworks */}
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-cyan-400">Languages & Frameworks</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Java, Python, SAP ABAP, SAP Fiori/UI5, SAP S/4 HANA, SAP OData</li>
        <li>C, C++, Bash, HTML, CSS, JavaScript, Bootstrap, PHP, React.js</li>
        <li>MongoDB, SQL, Spring Boot, OpenCV, TensorFlow, Keras, Django and Node.js</li>
      </ul>
    </div>

    {/* Tools and Platforms */}
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-cyan-400">Tools & Platforms</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Visual Studio, Eclipse, SAP NetWeaver</li>
        <li>Docker, Git, MySQL, SQLite</li>
        <li>Microsoft Office, Linux, Windows and AWS</li>
      </ul>
    </div>

    {/* Technical and Soft Skills */}
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-cyan-400">Technical & Soft Skills</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Operating Systems, Computer Networks, Information Security</li>
        <li>Distributed Systems, Virtualization, Application Development, Technical Documentation</li>
        <li>Project Management, Software Quality Assurance and Agile Methodology</li>
      </ul>
    </div>

  </div>
</motion.section>


        {/* Projects Section */}
        <motion.section id="projects" className="space-y-6 scroll-mt-32\" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-semibold flex items-center gap-2"><Codesandbox /> Projects</h2>
          {[{
            name: "Attendance Marking Based on Face Identification | Python | 2021",
            desc: "A Machine Learning based attendance marking project which uses Open CV for face detection and TKinter module for user-interface. It uses the LBPH machine learning algorithm for Face identification.",
            link: "#"
          }, {
            name: "Library Management System | Full-stack Java | 2021",
            desc: "A full-stack Java based project for Library management. It uses Java Collection Framework for data structuring and Oracle database for storing the data through JDBC.",
            link: "#"
          }, {
            name: "Leave Management System (LMS) | PHP-MySQL | 2020",
            desc: "Leave management web application for Teachers in a school/university created using PHP-MySQL. It contains both employee and admin login for leave requesting approve/reject and email notifications.",
            link: "#"
          }].map((proj, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg shadow-md p-4">
              <h3 className="font-bold">{proj.name}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} className="text-cyan-400 underline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </motion.section>

        {/* Achievements Section */}
        <motion.section id="achievements" className="space-y-6 scroll-mt-32\" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-semibold flex items-center gap-2"><Award /> Achievements</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>🏆 Accenture Recognitions: Merit Holder, Best People, Rising Star, Key Contributor, Individual Best Contributor, Accenture Excellence.</li>
            <li>🏆 Part of for Accenture's Guinness World Record for Largest online photo album of people displaying a digital certificate.</li>
            <li>🏆 EU Sustainability Champ, Green Software Champ and FY22 Making a Difference Volunteer.</li>
            <li>🏆 Oxford Achievers English Proficiency Certification – Oxford University Press (2018).</li>
            <li>🏆 Certified in Green Software Engineering and Sustainability, promoting carbon-free work processes.</li>
            <li>🏆 Awarded a Certificate of Plantation for environmental contributions through SankalpTaru.org</li>
            <li>🏆 Earned Microsoft Power-To-Everyone Power Platform Conversant – Bronze Certification.</li>
          </ul>
        </motion.section>

        {/* Contact Section */}
<motion.section id="contact" className="space-y-6 text-center scroll-mt-32\" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
  <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
  <p className="text-lg mb-8">Feel free to connect with me through any of the platforms below!</p>
  <div className="flex justify-center gap-12">
    <a href="mailto:harshavardhan1830.hv@gmail.com" target="_blank" rel="noopener noreferrer">
      <Mail size={60} className="hover:text-cyan-400 transition" />
    </a>
    <a href="https://linkedin.com/in/harshavardhan-ambidi-0672b81a5" target="_blank" rel="noopener noreferrer">
      <Linkedin size={60} className="hover:text-cyan-400 transition" />
    </a>
    <a href="https://github.com/AmbidiHarshavardhan" target="_blank" rel="noopener noreferrer">
      <Github size={60} className="hover:text-cyan-400 transition" />
    </a>
  </div>
</motion.section>



      </div>
    </div>
  );
}
