export const SITE_CONFIG = {
  name: "Jacobo Correa",
  title: "Mechanical Engineering Student",
  description: "Specializing in robotics, FEA analysis, and precision mechanism design. Transforming complex problems into elegant mechanical solutions.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:jacobo@example.com"
  }
};

export const PROJECTS = [
  {
    id: "centurion",
    title: "Centurion Rocket",
    subtitle: "High-Power Composite Rocket with J-Class Motor",
    description: "A 130 cm high-power model rocket designed to explore structural behavior, propulsion integration, and thermal resistance at high thrust levels.",
    thumbnail: "./assets/images/thumbnails/centurion_thumb.jpg",
    images: [
      "./assets/images/thumbnails/centurion_thumb.jpg",
      "./assets/images/centurion_detail.jpg"
    ],
    tags: ["Rocketry", "Composites", "Machining", "SolidWorks"],
    date: "2024-01",
    role: "Lead Mechanical Engineer",
    details: {
      challenge: "Safely integrate a J-class solid rocket motor and withstand elevated chamber pressure and thermal loads while minimizing mass.",
      solution: "Constructed a primary airframe from cardboard tubing reinforced with fiberglass for high stiffness-to-weight ratio. Engineered a machined aluminum motor housing and hardened steel nozzle to handle peak thrust loads.",
      result: "Validated composite reinforcement techniques on non-metallic airframes and achieved reliable thrust transfer with a modular, flight-ready system."
    },
    specs: {
      "Height": "130 cm",
      "Motor": "J-Class Solid",
      "Nozzle": "Hardened Steel",
      "Structure": "Fiberglass/Cardboard"
    },
    assets: {
      cad: [
        { title: "Motor Mount Assembly", url: "./assets/cad/centurion_motor_mount.step", type: "STEP", size: "15 MB" }
      ],
      blueprints: [
         { title: "Airframe Dimensions", url: "./assets/blueprints/centurion_dims.pdf", type: "PDF", size: "1.2 MB" }
      ]
    }
  },
  {
    id: "renegade",
    title: "Renegade Rocket",
    subtitle: "Fully Machined Aluminum Transonic Rocket",
    description: "A 100 cm, high-performance rocket designed for stable flight approaching Mach 0.9. Features a fully machined aluminum airframe and modular subsystem design.",
    thumbnail: "./assets/images/thumbnails/renegade_thumb.jpg",
    images: [
      "./assets/images/thumbnails/renegade_thumb.jpg",
      "./assets/images/renegade_assembly.jpg"
    ],
    tags: ["Aerospace", "CNC Machining", "Transonic", "Aluminum"],
    date: "2023-08",
    role: "Design Engineer",
    details: {
      challenge: "Achieve stable flight approaching Mach 0.9 while integrating propulsion in a minimal-clearance aluminum airframe.",
      solution: "Designed a monolithic aluminum body tube with machined fin slots and a modular 4-subsystem architecture. Fins were manufactured from wood reinforced with fiberglass and bonded to the machined slots.",
      result: "Successful integration of modular subsystems and validation of tight-tolerance aluminum manufacturing for high-speed aerodynamics."
    },
    specs: {
      "Height": "100 cm",
      "Top Speed": "Mach 0.9",
      "Motor": "H300-Class",
      "Material": "Aluminum 6061-T6"
    },
    assets: {
       cad: [
        { title: "Full Assembly", url: "./assets/cad/renegade_full.step", type: "STEP", size: "32 MB" }
      ]
    }
  },
  {
    id: "heewing",
    title: "HeeWing T1 Ranger VTOL",
    subtitle: "Custom VTOL RC Aircraft with FPV",
    description: "Transformation of a commercial airframe into a high-performance FPV and autonomous platform, integrating vertical takeoff capabilities with efficient fixed-wing flight.",
    thumbnail: "./assets/images/thumbnails/heewing_thumb.jpg",
    images: [
      "./assets/images/thumbnails/heewing_thumb.jpg", 
      "./assets/images/heewing_flight.jpg"
    ],
    tags: ["UAV", "VTOL", "Avionics", "FPV"],
    date: "2023-05",
    role: "Systems Integrator",
    details: {
      challenge: "Integrating VTOL systems, long-range FPV, and autonomous navigation into a lightweight crash-resilient foam airframe.",
      solution: "Reinforced EPP foam with carbon fiber spars. Integrated SpeedyBee F405 controller, DJI FPV system, and ELRS radio link. Optimized power distribution for VTOL transition loads.",
      result: "Achieved a functional autonomous platform with digital FPV situational awareness and reliable VTOL transitions."
    },
    specs: {
      "Frame": "EPP Foam + Carbon",
      "Controller": "SpeedyBee F405",
      "Link": "ExpressLRS / DJI FPV",
      "Mode": "VTOL / Fixed-Wing"
    },
    assets: {
      code: [
         {
          language: "cpp",
          filename: "vtol_mix.cpp",
          description: "Motor mixing logic for transition phase.",
          snippet: `// Example mixer logic for VTOL transition
if (mode == TRANSITION) {
    float tilt = getTiltAngle();
    front_motors.setPower(map(tilt, 0, 90, 100, 0));
    rear_pusher.setPower(map(tilt, 0, 90, 0, 100));
}`
         }
      ]
    }
  },
  {
    id: "robot",
    title: "Two-Wheel Learning Robot",
    subtitle: "Educational Robotics Platform",
    description: "A self-balancing educational robot designed to introduce children to robotics, control systems, and programming concepts in a safe, engaging way.",
    thumbnail: "./assets/images/thumbnails/robot_thumb.jpg",
    images: ["./assets/images/thumbnails/robot_thumb.jpg"],
    tags: ["Robotics", "Education", "Control Systems", "Embedded"],
    date: "2022-11",
    role: "Product Designer",
    details: {
      challenge: "Creating a robust, child-friendly platform that effectively simplifies complex control theory concepts for beginners.",
      solution: "Designed a two-wheel differential drive system with low center of mass. Implemented a microcontroller-based feedback loop with simple interfaces for beginner programming.",
      result: "Delivered a modular, impact-resistant educational tool that successfully demonstrates balance and kinematics logic."
    },
    specs: {
      "Type": "Self-Balancing",
      "Drive": "Differential",
      "Target": "Education",
      "Interface": "Microcontroller"
    },
    assets: {
      code: [
         {
          language: "cpp",
          filename: "balance_pid.cpp",
          description: "PID loop for self-balancing.",
          snippet: `void balance() {
  error = setPoint - currentAngle;
  integral += error * dt;
  derivative = (error - prevError) / dt;
  output = Kp * error + Ki * integral + Kd * derivative;
  motors.write(output);
}`
         }
      ]
    }
  }
];

export const SKILLS = [
  { category: "CAD/CAM", items: ["SolidWorks", "Fusion 360", "AutoCAD", "Rhino"] },
  { category: "Simulation", items: ["ANSYS Workbench", "COMSOL", "Simulink", "CFD"] },
  { category: "Prototyping", items: ["3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting", "Composites"] },
  { category: "Programming", items: ["Python (NumPy/Pandas)", "MATLAB", "C++ (Arduino)", "G-Code"] },
];
