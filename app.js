import { PROJECTS, SKILLS, SITE_CONFIG } from './data.js';

// DOM Elements
const contentArea = document.getElementById('content-area');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelectorAll('.nav-link');

// State
let currentRoute = '';

// Icons (Feather Icons)
const Icons = {
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    file: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>`,
    box: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><line x1="3.27 16.96" x2="12.01" y2="12.01"/><line x1="20.73 16.96" x2="12.01" y2="12.01"/></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
};

// Router
function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    
    // Check if it's a project detail route
    if (hash.startsWith('project/')) {
        const projectId = hash.split('/')[1];
        renderProjectDetail(projectId);
    } else {
        switch(hash) {
            case 'home': renderHome(); break;
            case 'projects': renderProjectsList(); break;
            case 'about': renderAbout(); break;
            default: renderHome();
        }
    }
    
    updateActiveNav(hash.split('/')[0]); // simplified active state
    closeMobileMenu();
    window.scrollTo(0,0);
}

// Render Functions
function renderHome() {
    const featuredProjects = PROJECTS.slice(0, 2);
    
    contentArea.innerHTML = `
        <div class="fade-in">
            <div class="mb-16 max-w-3xl">
                <span class="inline-block px-3 py-1 mb-6 text-xs font-mono font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                    Portfolio
                </span>
                <h2 class="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight leading-tight mb-6">
                    Designing the machines <br/>
                    <span class="text-slate-600">of tomorrow.</span>
                </h2>
                <p class="text-lg text-slate-400 leading-relaxed">
                    ${SITE_CONFIG.description}
                </p>
                <div class="mt-8 flex gap-4">
                     <a href="#projects" class="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-900 bg-primary rounded-lg hover:bg-sky-300 transition-colors">
                        View Projects
                     </a>
                     <a href="#about" class="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-all">
                        About Me
                     </a>
                </div>
            </div>

            <h3 class="text-xl font-bold text-slate-200 mb-6 border-b border-slate-800 pb-2">Featured Work</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                ${featuredProjects.map(project => createProjectCard(project)).join('')}
            </div>
        </div>
    `;
}

function renderProjectsList() {
    contentArea.innerHTML = `
        <div class="fade-in">
            <div class="mb-8 border-b border-slate-800 pb-4">
                <h2 class="text-3xl font-bold text-slate-100">Selected Works</h2>
                <p class="text-slate-400 mt-2">A comprehensive list of engineering challenges and solutions.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${PROJECTS.map(project => createProjectCard(project)).join('')}
            </div>
        </div>
    `;
}

function renderAbout() {
    contentArea.innerHTML = `
        <div class="fade-in max-w-3xl">
            <h2 class="text-3xl font-bold text-slate-100 mb-8 border-b border-slate-800 pb-4">About Me</h2>
            <div class="prose prose-invert prose-lg text-slate-400 mb-12">
                <p class="leading-relaxed mb-4">
                    I am a mechanical engineer with a passion for precise design and robust simulation. 
                    My work bridges the gap between theoretical analysis and physical implementation. 
                    I believe that the best machines are those where form perfectly follows function, 
                    optimized not just for performance, but for manufacturability and maintenance.
                </p>
                <p class="leading-relaxed">
                   With a background in both hands-on fabrication and advanced computational modelling,
                   I strive to create systems that are reliable, efficient, and elegant.
                </p>
            </div>

            <h3 class="text-xl font-bold text-slate-100 mb-6">Technical Skills</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                ${SKILLS.map(group => `
                    <div class="bg-slate-900/50 p-5 rounded-lg border border-slate-800">
                        <h4 class="text-primary font-mono text-xs font-bold mb-3 uppercase tracking-wider">${group.category}</h4>
                        <ul class="space-y-2">
                            ${group.items.map(item => `
                                <li class="text-slate-400 text-sm flex items-center">
                                    <span class="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>
                                    ${item}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                <div>
                    <h3 class="text-slate-100 font-bold mb-1">Resume</h3>
                    <p class="text-slate-500 text-sm">Download my full resume for more details.</p>
                </div>
                <button class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center transition-colors text-sm font-medium border border-slate-700">
                    ${Icons.download} <span class="ml-2">Download PDF</span>
                </button>
            </div>
        </div>
    `;
}

function renderProjectDetail(id) {
    const project = PROJECTS.find(p => p.id === id);
    if (!project) {
        contentArea.innerHTML = `<div class="text-center text-slate-500 mt-20">Project not found. <a href="#projects" class="text-primary underline">Go back</a></div>`;
        return;
    }

    // Prepare Assets HTML if they exist
    const hasBlueprints = project.assets?.blueprints?.length > 0;
    const hasCad = project.assets?.cad?.length > 0;
    const hasCode = project.assets?.code?.length > 0;
    
    // Render Blueprints Section
    const blueprintsHTML = hasBlueprints ? `
        <div class="mb-12">
            <h3 class="text-lg font-bold text-slate-100 mb-6 flex items-center">
                <span class="p-2 bg-slate-800 rounded-lg mr-3 text-primary">${Icons.file}</span> Blueprints & Schematics
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${project.assets.blueprints.map(bp => `
                    <a href="${bp.url}" class="group flex items-center p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-primary/50 hover:bg-slate-800 transition-all">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-slate-200 truncate group-hover:text-primary transition-colors">${bp.title}</p>
                            <p class="text-xs text-slate-500 mt-1">${bp.type} • ${bp.size}</p>
                        </div>
                        <div class="text-slate-500 group-hover:text-primary transition-colors">
                            ${Icons.download}
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Render CAD Section
    const cadHTML = hasCad ? `
        <div class="mb-12">
            <h3 class="text-lg font-bold text-slate-100 mb-6 flex items-center">
                <span class="p-2 bg-slate-800 rounded-lg mr-3 text-primary">${Icons.box}</span> CAD Models
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${project.assets.cad.map(item => `
                    <a href="${item.url}" class="group flex items-center p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-primary/50 hover:bg-slate-800 transition-all">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-slate-200 truncate group-hover:text-primary transition-colors">${item.title}</p>
                            <p class="text-xs text-slate-500 mt-1">${item.type} • ${item.size}</p>
                        </div>
                        <div class="text-slate-500 group-hover:text-primary transition-colors">
                            ${Icons.download}
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Render Code Section
    const codeHTML = hasCode ? `
        <div class="mb-12">
            <h3 class="text-lg font-bold text-slate-100 mb-6 flex items-center">
                <span class="p-2 bg-slate-800 rounded-lg mr-3 text-primary">${Icons.code}</span> Engineering Logic
            </h3>
            <div class="space-y-6">
                ${project.assets.code.map(c => `
                    <div class="bg-[#1d1f21] rounded-lg overflow-hidden border border-slate-800 shadow-xl">
                        <div class="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                            <span class="text-xs font-mono text-slate-400">${c.filename}</span>
                            <span class="text-[10px] text-slate-600 uppercase font-bold">${c.language}</span>
                        </div>
                        <div class="p-4 overflow-x-auto">
                            <pre><code class="language-${c.language}">${c.snippet.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                        </div>
                        ${c.description ? `<div class="px-4 py-3 bg-slate-900/50 border-t border-slate-800 text-sm text-slate-500 italic">${c.description}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    // Render Gallery Images (excluding the first one which is the hero)
    const galleryImages = project.images.length > 1 ? project.images.slice(1) : [];
    const galleryHTML = galleryImages.length > 0 ? `
         <div class="mb-12">
             <h3 class="text-lg font-bold text-slate-100 mb-6">Gallery</h3>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${galleryImages.map(img => `
                    <div class="aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-800 group">
                        <img src="${img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Gallery image">
                    </div>
                `).join('')}
             </div>
         </div>
    ` : '';


    contentArea.innerHTML = `
        <div class="fade-in max-w-4xl">
            <a href="#projects" class="inline-flex items-center text-slate-500 hover:text-primary mb-6 text-sm transition-colors group">
                <svg class="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                Back to projects
            </a>
            
            <header class="mb-10">
                <h1 class="text-3xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">${project.title}</h1>
                <p class="text-xl text-slate-400 font-light">${project.subtitle}</p>
                <div class="flex flex-wrap gap-4 mt-6 text-sm text-slate-500 font-mono border-t border-slate-800 pt-6">
                   <span class="text-slate-300">${project.role}</span>
                   <span class="text-slate-700">•</span>
                   <span>${project.date}</span>
                </div>
            </header>

            <div class="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
                <img src="${project.images[0]}" alt="${project.title}" class="w-full h-full object-cover" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                <div class="lg:col-span-2 space-y-12">
                    <section>
                        <h3 class="text-lg font-bold text-slate-100 mb-4 flex items-center">
                            <span class="w-8 h-[1px] bg-primary mr-3"></span>The Challenge
                        </h3>
                        <p class="text-slate-400 leading-relaxed text-lg">${project.details.challenge}</p>
                    </section>
                    <section>
                        <h3 class="text-lg font-bold text-slate-100 mb-4 flex items-center">
                            <span class="w-8 h-[1px] bg-primary mr-3"></span>Solution
                        </h3>
                        <p class="text-slate-400 leading-relaxed text-lg">${project.details.solution}</p>
                    </section>
                    <section>
                        <h3 class="text-lg font-bold text-slate-100 mb-4 flex items-center">
                            <span class="w-8 h-[1px] bg-primary mr-3"></span>Result
                        </h3>
                        <p class="text-slate-400 leading-relaxed text-lg">${project.details.result}</p>
                    </section>
                </div>

                <div class="lg:col-span-1 space-y-8">
                    <div class="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h4 class="font-mono text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Specifications</h4>
                        ${project.specs ? `
                        <dl class="space-y-3 text-sm">
                            ${Object.entries(project.specs).map(([key, value]) => `
                                <div class="flex justify-between border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                                    <dt class="text-slate-500">${key}</dt>
                                    <dd class="text-slate-200 font-medium text-right">${value}</dd>
                                </div>
                            `).join('')}
                        </dl>
                        ` : '<p class="text-slate-500 text-sm">No specs available.</p>'}
                    </div>

                    <div class="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h4 class="font-mono text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">Tech Stack</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.tags.map(tag => `
                                <span class="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Assets Section -->
            ${blueprintsHTML}
            ${cadHTML}
            ${codeHTML}
            ${galleryHTML}

        </div>
    `;
    
    // Trigger syntax highlighting
    if (window.Prism) {
        setTimeout(() => window.Prism.highlightAll(), 0);
    }
}

// Helpers
function createProjectCard(project) {
    return `
        <a href="#project/${project.id}" class="group block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
            <div class="aspect-[16/10] overflow-hidden bg-slate-800 relative">
                <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.slice(0, 3).map(tag => `<span class="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">${tag}</span>`).join('')}
                </div>
                <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">${project.description}</p>
                <div class="text-primary text-xs font-mono font-medium flex items-center opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    EXPLORE PROJECT ${Icons.arrowRight}
                </div>
            </div>
        </a>
    `;
}

function updateActiveNav(activeHash) {
    // Basic active state logic
    const baseHash = activeHash === 'home' || activeHash === '' ? 'home' : activeHash;
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if(href === baseHash) {
            link.classList.add('bg-slate-800', 'text-white');
            link.classList.remove('text-slate-400');
        } else {
            link.classList.remove('bg-slate-800', 'text-white');
            link.classList.add('text-slate-400');
        }
    });
}

function closeMobileMenu() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

// Event Listeners
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
});

overlay.addEventListener('click', closeMobileMenu);
