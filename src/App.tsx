import React, { useState } from 'react';
import { MapPin, Building, GraduationCap, Calendar, MapPinned, Code, Laptop, Mail, Github, Linkedin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-[#64ffda] text-2xl font-bold">
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-[#64ffda]">Home</a>
              <a href="#about" className="text-gray-300 hover:text-[#64ffda]">About</a>
              <a href="#skills" className="text-gray-300 hover:text-[#64ffda]">Skills</a>
              <a href="#experience" className="text-gray-300 hover:text-[#64ffda]">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-[#64ffda]">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-[#64ffda]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-[#64ffda]">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-[#64ffda]">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-[#64ffda]">Skills</a>
              <a href="#experience" className="block px-3 py-2 text-gray-300 hover:text-[#64ffda]">Experience</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-[#64ffda]">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[#64ffda] mb-5">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-200 mb-4">
            Bindu Sai Shivani Yerramsetti
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6">
            I'm a Software Engineer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            I specialize in building exceptional digital experiences. Currently, I'm focused on
            building responsive full-stack web applications.
          </p>
          <div className="flex gap-4">
            <a
              href="#work"
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 bg-[#64ffda] text-[#0a192f] rounded hover:bg-[#64ffda]/90 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 space-y-32">
        {/* Education Section */}
        <section id="education">
          <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-[#64ffda]" />
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
              <h3 className="text-xl font-medium text-gray-200">University of Maryland Baltimore County</h3>
              <p className="text-[#64ffda] text-sm mt-1">Master of Computer Software Engineering — CGPA: 3.37/4.0</p>
              <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <MapPinned className="w-4 h-4" />
                  <span>Baltimore, MD</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug. 2023 – May 2025</span>
                </div>
              </div>
            </div>

            <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
              <h3 className="text-xl font-medium text-gray-200">Gayatri Vidya Parishad College of Engineering</h3>
              <p className="text-[#64ffda] text-sm mt-1">BTech in Computer Science — CGPA: 3.5/4.0</p>
              <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <MapPinned className="w-4 h-4" />
                  <span>Vizag, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Aug. 2017 – May 2021</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
            <Building className="w-6 h-6 text-[#64ffda]" />
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#64ffda]/20"></div>

            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="relative pl-8 md:pl-24">
                <div className="absolute left-[-4px] md:left-6 w-2 h-2 bg-[#0a192f] border-2 border-[#64ffda] rounded-full top-8"></div>
                <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
                  <h3 className="text-xl font-medium text-gray-200">Application Development Associate</h3>
                  <p className="text-[#64ffda] text-sm">Accenture Solutions Private Limited</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPinned className="w-4 h-4" />
                      <span>Hyderabad, India</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2021 – Jul 2023</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 list-disc list-outside ml-4">
                    <li>Designed and optimized scalable microservices using Java and Spring Boot, significantly improving system performance and reliability.</li>
                    <li>Developed over 30 RESTful APIs to enhance backend efficiency, resulting in a 25% reduction in response times.</li>
                    <li>Improved the user interface with React, HTML, CSS, Bootstrap, and JavaScript, leading to a 20% increase in user satisfaction.</li>
                    <li>Achieved 95% code coverage with JUnit and Mockito, reducing production bugs by 30%.</li>
                    <li>Delivered over 30 features across 20 sprints using Agile methodology, maintaining a 100% on-time completion rate.</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-8 md:pl-24">
                <div className="absolute left-[-4px] md:left-6 w-2 h-2 bg-[#0a192f] border-2 border-[#64ffda] rounded-full top-8"></div>
                <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
                  <h3 className="text-xl font-medium text-gray-200">Software Engineer Intern - Web Development</h3>
                  <p className="text-[#64ffda] text-sm">Accenture Pvt Limited</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPinned className="w-4 h-4" />
                      <span>Hyderabad, India</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 2021 – May 2021</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 list-disc list-outside ml-4">
                    <li>Developed and optimized responsive web applications using React.js, Node.js, and MongoDB, ensuring high performance and seamless user experience.</li>
                    <li>Designed and integrated RESTful APIs with Express.js, enhancing data retrieval speed by 30% through efficient database indexing and caching strategies with Redis.</li>
                    <li>Improved UI/UX by implementing Material-UI, reducing bounce rate by 20% with intuitive design enhancements.</li>
                    <li>Deployed and scaled applications using AWS services, including Amazon EC2 for compute, Amazon S3 for scalable storage, and AWS Lambda for serverless processing—ensuring high performance, reliability, and high availability.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
            <Code className="w-6 h-6 text-[#64ffda]" />
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
              <h3 className="text-xl font-medium text-gray-200">Campus Safety Watch – Crime Mapping Alert System</h3>
              <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2024 – May 2024</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400 list-disc list-outside ml-4">
                <li>Developed a web and mobile platform for campus safety, integrating real-time crime mapping to enhance security awareness.</li>
                <li>Implemented secure authentication and role-based access control for user data protection.</li>
                <li>Designed and deployed a scalable backend using Spring Boot, PostgreSQL, and Redis, ensuring fast and reliable data processing.</li>
                <li>Integrated Google Maps API for interactive crime visualization and deployed the application on AWS and Netlify using Docker and Ionic for seamless cross-platform functionality.</li>
              </ul>
            </div>

            <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
              <h3 className="text-xl font-medium text-gray-200">Food Recipe App</h3>
              <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Jan 2021 – May 2021</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400 list-disc list-outside ml-4">
                <li>Designed a web application for exploring and managing recipes with dynamic search and filtering.</li>
                <li>Built a responsive UI with MERN Stack MongoDB, Express.js, React.js, Node.js and integrated APIs for fetching and displaying recipe details.</li>
              </ul>
            </div>

            <div className="bg-[#112240] rounded-lg p-6 hover:translate-y-[-4px] transition-transform">
              <h3 className="text-xl font-medium text-gray-200">Predict Type 2 Diabetes Mellitus</h3>
              <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>June 2020 – Dec 2020</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400 list-disc list-outside ml-4">
                <li>Developed a predictive model for Type 2 Diabetes using Machine Learning on a dataset with 10 features and 15,000 records.</li>
                <li>Implemented and compared SVM, Random Forest, and Decision Tree classifiers, optimizing hyperparameters for improved accuracy.</li>
                <li>Evaluated model performance using F1 score, precision-recall curves, and ROC-AUC, ensuring robust classification.</li>
                <li>Applied feature scaling and selection techniques to enhance model efficiency and generalization.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="pb-32">
          <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
            <Laptop className="w-6 h-6 text-[#64ffda]" />
            Technical Skills
          </h2>

          <div className="bg-[#112240] rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-[#64ffda] font-medium mb-2">Languages</h3>
              <p className="text-gray-400">Java, Python, C, SQL (Postgres), JavaScript, HTML/CSS, R, COBOL</p>
            </div>
            
            <div>
              <h3 className="text-[#64ffda] font-medium mb-2">Frameworks</h3>
              <p className="text-gray-400">React, Node.js, Flask, JUnit, Material-UI, FastAPI, Single Page Applications</p>
            </div>
            
            <div>
              <h3 className="text-[#64ffda] font-medium mb-2">Developer Tools</h3>
              <p className="text-gray-400">Git, Docker, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse, ServiceNow</p>
            </div>
            
            <div>
              <h3 className="text-[#64ffda] font-medium mb-2">DevOps</h3>
              <p className="text-gray-400">CI/CD pipelines, Software Development Life Cycle (SDLC) creation</p>
            </div>
            
            <div>
              <h3 className="text-[#64ffda] font-medium mb-2">Database</h3>
              <p className="text-gray-400">Postgres, MySQL, MongoDB, SQLite</p>
            </div>
            
            <div>
              <h3 className="text-[#64ffda] font-medium mb-2">Artificial Intelligence & Machine Learning</h3>
              <p className="text-gray-400">Natural Language Processing (NLP), Machine Learning Model Development, TensorFlow, PyTorch, OpenAI APIs, Scikit-Learn, Large Language Models (LLMs), Data Preprocessing, Model Evaluation, Prompt Engineering</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;