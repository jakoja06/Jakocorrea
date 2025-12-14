import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { SITE_CONFIG, PROJECTS, SKILLS } from './data';
import { Project } from './types';
import { 
  IconGithub, 
  IconLinkedin, 
  IconMail, 
  IconMenu, 
  IconArrowRight, 
  IconFileText 
} from './components/Icons';

// --- Components defined internally to App.tsx for file count constraint ---

const Sidebar = ({ mobileOpen, setMobileOpen }: { mobileOpen: boolean, setMobileOpen: (o: boolean) => void }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-72 bg-surface/95 backdrop-blur-xl border-r border-slate-700/50 
          z-50 transition-transform duration-300 ease-in-out md:translate-x-0 md:bg-surface/50
          flex flex-col
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-8 pb-4 flex flex-col flex-grow overflow-y-auto">
          {/* Header info */}
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-slate-100 tracking-tight">{SITE_CONFIG.name}</h1>
            <p className="text-primary font-mono text-sm mt-1 opacity-90">{SITE_CONFIG.title}</p>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1 flex-grow">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/about', label: 'About' },
              // { path: '/resume', label: 'Resume' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive(link.path) 
                    ? 'bg-primary/10 text-primary border-l-2 border-primary translate-x-1' 
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-700/30'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-slate-700/50">
             <div className="flex gap-4 justify-center md:justify-start">
               <a href={SITE_CONFIG.social.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><IconGithub className="w-5 h-5"/></a>
               <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><IconLinkedin className="w-5 h-5"/></a>
               <a href={SITE_CONFIG.social.email} className="text-slate-400 hover:text-white transition-colors"><IconMail className="w-5 h-5"/></a>
             </div>
             <div className="mt-6 text-xs text-slate-600 font-mono text-center md:text-left">
               © {new Date().getFullYear()} {SITE_CONFIG.name}
             </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const Home = () => (
  <div className="max-w-4xl animate-in fade-in duration-700 slide-in-from-bottom-4">
    <div className="mb-12">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
        Portfolio
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight leading-tight mb-6">
        Designing the machines <br/>
        <span className="text-slate-500">of tomorrow.</span>
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
        {SITE_CONFIG.description}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {PROJECTS.slice(0, 2).map((project) => (
         <Link key={project.id} to={`/projects/${project.id}`} className="group relative aspect-video overflow-hidden rounded-xl bg-slate-800 border border-slate-700/50 hover:border-primary/50 transition-all duration-300">
           <img 
             src={project.thumbnail} 
             alt={project.title} 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"/>
           <div className="absolute bottom-0 left-0 p-6">
             <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
             <p className="text-sm text-slate-300 line-clamp-1">{project.subtitle}</p>
             <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               View Case Study <IconArrowRight className="w-4 h-4 ml-2" />
             </div>
           </div>
         </Link>
      ))}
    </div>

    <div className="flex gap-4">
       <Link to="/projects" className="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-900 bg-primary rounded-lg hover:bg-sky-300 transition-colors shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)]">
         View All Projects
       </Link>
       <Link to="/about" className="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-all">
         About Me
       </Link>
    </div>
  </div>
);

const ProjectsList = () => (
  <div className="max-w-5xl animate-in fade-in duration-500">
    <h2 className="text-3xl font-bold text-slate-100 mb-8 border-b border-slate-800 pb-4">Selected Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {PROJECTS.map((project, idx) => (
        <Link 
          key={project.id} 
          to={`/projects/${project.id}`}
          className="group bg-surface border border-slate-700/50 rounded-xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-slate-900/50"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          <div className="aspect-[16/10] overflow-hidden bg-slate-800 relative">
             <img 
               src={project.thumbnail} 
               alt={project.title} 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <span className="text-primary text-xs font-mono font-medium flex items-center group-hover:translate-x-1 transition-transform">
              EXPLORE PROJECT <IconArrowRight className="w-3 h-3 ml-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="text-slate-400">Project not found</div>;

  return (
    <div className="max-w-4xl animate-in fade-in duration-500">
      <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-primary mb-6 text-sm transition-colors">
        <IconArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to projects
      </Link>
      
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">{project.title}</h1>
        <p className="text-xl text-slate-400 font-light">{project.subtitle}</p>
        <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-500 font-mono">
           <span>{project.role}</span>
           <span className="text-slate-700">•</span>
           <span>{project.date}</span>
        </div>
      </header>

      <div className="aspect-video w-full bg-slate-800 rounded-xl overflow-hidden mb-12 border border-slate-700/50">
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-3"></span>The Challenge
            </h3>
            <p className="text-slate-400 leading-relaxed">{project.details.challenge}</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-3"></span>Technical Solution
            </h3>
            <p className="text-slate-400 leading-relaxed">{project.details.solution}</p>
          </section>

          <section>
             <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-3"></span>Results
            </h3>
            <p className="text-slate-400 leading-relaxed">{project.details.result}</p>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-8">
           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
             <h4 className="font-mono text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Specifications</h4>
             {project.specs ? (
               <dl className="space-y-3 text-sm">
                 {Object.entries(project.specs).map(([key, value]) => (
                   <div key={key} className="flex justify-between border-b border-slate-700/50 pb-2 last:border-0 last:pb-0">
                     <dt className="text-slate-500">{key}</dt>
                     <dd className="text-slate-200 font-medium text-right">{value}</dd>
                   </div>
                 ))}
               </dl>
             ) : (
               <p className="text-slate-500 text-sm">No specific metrics available.</p>
             )}
           </div>

           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
             <h4 className="font-mono text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Tech Stack</h4>
             <div className="flex flex-wrap gap-2">
               {project.tags.map(tag => (
                 <span key={tag} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded border border-slate-600">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <div className="max-w-3xl animate-in fade-in duration-500">
    <h2 className="text-3xl font-bold text-slate-100 mb-8 border-b border-slate-800 pb-4">About Me</h2>
    <div className="prose prose-invert prose-slate mb-12">
      <p className="text-lg text-slate-300 leading-relaxed">
        I am a mechanical engineer with a passion for precise design and robust simulation. 
        My work bridges the gap between theoretical analysis and physical implementation. 
        I believe that the best machines are those where form perfectly follows function, 
        optimized not just for performance, but for manufacturability and maintenance.
      </p>
    </div>

    <h3 className="text-xl font-bold text-slate-100 mb-6">Technical Skills</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
      {SKILLS.map((skillGroup) => (
        <div key={skillGroup.category} className="bg-slate-800/30 p-5 rounded-lg border border-slate-700/50">
          <h4 className="text-primary font-mono text-sm font-bold mb-3 uppercase">{skillGroup.category}</h4>
          <ul className="space-y-2">
            {skillGroup.items.map(item => (
              <li key={item} className="text-slate-400 text-sm flex items-center">
                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    
    <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-between">
      <div>
        <h3 className="text-slate-100 font-bold mb-1">Resume</h3>
        <p className="text-slate-400 text-sm">Download my full resume for more details.</p>
      </div>
      <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center transition-colors text-sm font-medium">
        <IconFileText className="w-4 h-4 mr-2" /> Download PDF
      </button>
    </div>
  </div>
);

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen flex bg-background text-slate-200 font-sans selection:bg-primary selection:text-slate-900">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-slate-700/50 z-30 md:hidden flex items-center justify-between px-4">
          <span className="font-bold text-lg text-slate-100">{SITE_CONFIG.name}</span>
          <button onClick={() => setMobileOpen(true)} className="p-2 text-slate-300 hover:text-white">
            <IconMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-72 min-h-screen relative">
          <div className="max-w-6xl mx-auto px-4 py-24 md:px-12 md:py-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsList />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;