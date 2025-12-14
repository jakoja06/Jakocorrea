export const SITE_CONFIG = {
  name: "Alex Engineer",
  title: "Senior Mechanical Engineer",
  description: "Specializing in robotics, FEA analysis, and precision mechanism design. Transforming complex problems into elegant mechanical solutions.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:alex@example.com"
  }
};

export const PROJECTS = [
  {
    id: "1",
    title: "6-DOF Robotic Arm",
    subtitle: "High-precision manipulator for assembly tasks",
    description: "Designed and prototyped a 6-degree-of-freedom robotic arm capable of 0.5mm repeatability. Utilized harmonic drives for compact joint actuation.",
    thumbnail: "https://picsum.photos/id/1/800/600",
    images: ["https://picsum.photos/id/1/800/600", "https://picsum.photos/id/2/800/600"],
    tags: ["SolidWorks", "Robotics", "Kinematics", "Python"],
    date: "2023-11",
    role: "Lead Mechanical Engineer",
    details: {
      challenge: "Achieving high torque density within a limited working envelope while maintaining structural rigidity.",
      solution: "Implemented custom strain wave gearing and optimized link topology using FEA to reduce mass by 25% without compromising stiffness.",
      result: "Successful prototype demonstration handling 5kg payloads with sub-millimeter precision."
    },
    specs: {
      "Payload": "5 kg",
      "Reach": "850 mm",
      "Weight": "12 kg",
      "Material": "AL 7075-T6"
    }
  },
  {
    id: "2",
    title: "Drone Chassis Optimization",
    subtitle: "Generative design for UAV structural integrity",
    description: "Applied generative design principles to create a lightweight, high-strength quadcopter frame optimized for additive manufacturing.",
    thumbnail: "https://picsum.photos/id/119/800/600",
    images: ["https://picsum.photos/id/119/800/600", "https://picsum.photos/id/120/800/600"],
    tags: ["Fusion 360", "Generative Design", "3D Printing", "CFD"],
    date: "2023-06",
    role: "Design Engineer",
    details: {
      challenge: "Minimizing airframe vibration and weight to extend flight time.",
      solution: "Utilized modal analysis to identify resonance frequencies and generative design to place material only where needed for load paths.",
      result: "30% weight reduction compared to traditional frame, increasing flight time by 4 minutes."
    },
    specs: {
      "Weight": "240g",
      "Material": "Carbon Fiber Nylon",
      "Max Load": "250N",
      "Mfg Process": "SLS Printing"
    }
  },
  {
    id: "3",
    title: "Planetary Gearbox System",
    subtitle: "High-reduction transmission for EV powertrain",
    description: "Detailed design and simulation of a 2-stage planetary gearbox for a small electric vehicle application.",
    thumbnail: "https://picsum.photos/id/250/800/600",
    images: ["https://picsum.photos/id/250/800/600", "https://picsum.photos/id/251/800/600"],
    tags: ["ANSYS", "Gear Design", "Transmission", "Simulation"],
    date: "2022-09",
    role: "Mechanical Analyst",
    details: {
      challenge: "Managing thermal dissipation and contact stresses under peak load conditions.",
      solution: "Optimized gear tooth profiles for contact ratio and integrated a passive oil splash lubrication system modeled in CFD.",
      result: "Passed 1000-hour durability simulation with safety factor > 1.5."
    },
    specs: {
      "Ratio": "12:1",
      "Max Torque": "150 Nm",
      "Efficiency": "96%",
      "Input Speed": "4000 RPM"
    }
  },
  {
    id: "4",
    title: "Automated conveyor rig",
    subtitle: "Industrial automation setup",
    description: "Modular conveyor system designed for rapid reconfiguration in a packaging facility.",
    thumbnail: "https://picsum.photos/id/305/800/600",
    images: ["https://picsum.photos/id/305/800/600"],
    tags: ["Automation", "Pneumatics", "PLC", "CAD"],
    date: "2022-02",
    role: "Project Lead",
    details: {
      challenge: "Existing systems were too rigid and required days to reconfigure for different package sizes.",
      solution: "Designed a modular aluminum profile system with quick-release pneumatic guides.",
      result: "Changeover time reduced from 8 hours to 45 minutes."
    }
  }
];

export const SKILLS = [
  { category: "CAD/CAM", items: ["SolidWorks", "Fusion 360", "AutoCAD", "Rhino"] },
  { category: "Simulation", items: ["ANSYS Workbench", "COMSOL", "Simulink", "CFD"] },
  { category: "Prototyping", items: ["3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting"] },
  { category: "Programming", items: ["Python (NumPy/Pandas)", "MATLAB", "C++ (Arduino)"] },
];
