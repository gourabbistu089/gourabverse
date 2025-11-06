import { NavItem, Project, Skill } from './types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  
  {
    id: '0',
    title: 'Task Manager App',
    description: 'A modern task manager app built with Next.js, Framer-Motion, and Tailwind CSS',
    image: '/projects/site0.png',
    technologies: ['Next.Js','Framer-Motion' ,'Tailwind CSS'],
    liveUrl: 'https://vercel.com/gourab-bistus-projects/task-manager-app',
    githubUrl: 'https://github.com/gourabbistu089/task-manager-app',
  },
  {
    id: '1',
    title: 'InterviewReady',
    description: 'A modern platform to learn core concepts, practice curated problems, and test your skills with an AI-powered mock interviewe',
    image: '/projects/site1.png',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://interviewready-xi.vercel.app/',
    githubUrl: 'https://github.com/gourabbistu089/interviewready',
  },
  {
    id: '2',
    title: 'Learnify',
    description: 'A Learning Management System (LMS) for students and teachers to manage their learning progress and track their progress towards their goals',
       image: '/projects/site2.png',

    technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://learnifyg.vercel.app/',
    githubUrl: 'https://github.com/gourabbistu089/Learnify_Client',
  },
  {
    id: '3',
  title: 'Dispensary Management System',
  description: 'A modern dispensary management system built with React.js, Express.js, MongoDB, Node.js, and Tailwind CSS',
  image: '/projects/site3.png',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://dispensary-v2-nit-jamshedpur.vercel.app/',
    githubUrl: 'https://github.com/gourabbistu089/DISPENSARYv1_NIT_JAMSHEDPUR',
  },
  {
    id: '4',
    title: 'NSS NIT JSR',
    description: 'Official website of National Service Scheme (NSS) NIT Jamshedpur',
    image: '/projects/site4.png',
    technologies: ['React.js', 'Framer Motion',  'Tailwind CSS'],
    liveUrl: 'https://nss-nit-jsr.vercel.app/',
    githubUrl: 'https://github.com/gourabbistu089/nss-nit-jsr',
  },
  {
    id: '5',
    title: 'E-cell',
    description: 'Official website of E-cell NIT Jamshedpur',
    image: '/projects/site5.png',
    technologies: ['React.js', 'Framer Motion',  'Tailwind CSS'],
    liveUrl: 'https://e-cell-zeta.vercel.app/',
    githubUrl: 'https://github.com/gourabbistu089/E-cell',
  },
  {
    id: '6',
    title: 'Crops Detection System',
    description: 'A modern crops detection system built with Machine Learning and Computer Vision',
    image: '/projects/site6.png',
    technologies: ['React.js', 'Flusk','Random Forest','Tailwind CSS'],
    liveUrl: 'https://crops-detection-app.vercel.app/',
    githubUrl: 'https://github.com/gourabbistu089/crops-detection-app',
  },
  

];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'TypeScript', category: 'frontend', level: 80 },
  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 80 },
  { name: 'Express', category: 'backend', level: 75 },
  { name: 'MongoDB', category: 'backend', level: 70 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 85 },
  { name: 'Docker', category: 'tools', level: 70 },
  { name: 'AWS', category: 'tools', level: 65 },
  
  // Soft Skills
  { name: 'Problem Solving', category: 'soft-skills', level: 90 },
  { name: 'Team Leadership', category: 'soft-skills', level: 85 },
  { name: 'Communication', category: 'soft-skills', level: 90 },
];

export const siteConfig = {
  name: 'Gourab Bistu',
  title: 'Aspiring Software Engineer',
  description: 'Passionate about web development and data science and problem-solving.',
  email: 'gourabbistu@gmail.com',
  social: {
    github: 'https://github.com/gourabbistu089/',
    linkedin: 'https://linkedin.com/in/gourabbistu',
    x: 'https://x.com/Gourab089',
  },
}; 

