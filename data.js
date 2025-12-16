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
      objective: "Safely integrate a J-class solid rocket motor, achieve high structural stiffness while minimizing mass, and withstand elevated chamber pressure and nozzle thermal loads. Validate composite reinforcement techniques on non-metallic airframes.",
      design: "The primary airframe is constructed from cardboard tubing reinforced with fiberglass, providing an excellent stiffness-to-weight ratio. Critical load paths near the propulsion system are reinforced using a machined aluminum motor housing for dimensional stability.",
      manufacturing: "Fiberglass layup performed using wet-lay techniques. Aluminum motor mount precision-machined for concentric alignment. Steel nozzle hardened and fitted to ensure repeatable performance.",
      systems: "Propulsion system mechanically isolated from the composite airframe. Structural interfaces designed to limit thermal propagation. Recovery system interface designed for future upgrades.",
      outcomes: "Composite reinforcement dramatically improves cardboard airframe stiffness. Metal-composite interfaces require careful stress and thermal management. Nozzle material selection has a direct impact on performance repeatability."
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
      objective: "Achieve stable flight approaching Mach 0.9, integrate propulsion in a minimal-clearance aluminum airframe, and design a fully modular architecture for propulsion, avionics, and recovery.",
      design: "Monolithic aluminum body tube with machined fin slots optimized for axial stiffness. Fins are manufactured from wood reinforced with fiberglass. The rocket is divided into four primary subsystems: Propulsion, Airframe, Fin System, and Recovery.",
      manufacturing: "CNC milling of aluminum components with tight tolerance control to prevent interference. Fins surface-mounted and bonded to machined slots. Structural analysis focused on axial load paths and fin root stresses.",
      systems: "Dedicated electronics bay isolated from propulsion loads. Designed to house altimeters, flight computers, and power systems with structural provisions for telemetry.",
      outcomes: "Aluminum airframes demand careful thermal and vibration management. Fin attachment becomes critical when internal motor clearance is minimal. Modular design significantly improves testability and safety."
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
      objective: "Integrate VTOL and fixed-wing flight modes, support long-range FPV operations, enable autonomous navigation and mission planning, and maintain a lightweight crash-resilient structure.",
      design: "EPP foam airframe for impact resistance reinforced with carbon fiber spars for stiffness. Structural modifications implemented to support additional electronics and wiring.",
      manufacturing: "Customized commercial airframe. Integrated mounts for motors and servos ensuring aerodynamic efficiency.",
      systems: "SpeedyBee F405 Wing Flight Controller, DJI FPV Air Unit, ExpressLRS Radio Link, and GPS. Power distribution optimized for VTOL transition loads. EMI management between FPV and GPS components.",
      outcomes: "VTOL systems require careful tuning of transition logic. Digital FPV significantly improves situational awareness. Structural reinforcement is critical when mixing foam and carbon fiber."
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
      objective: "Create a safe and engaging learning platform to introduce basic control theory concepts. Use robust, child-friendly materials and enable modular expansion for future lessons.",
      design: "Two-wheel differential drive configuration with a low center of mass for improved stability. Protective housing included to shield electronics and moving parts from handling.",
      manufacturing: "Modular assembly designed for easy repair and modification. Standardized fasteners and durable chassis materials.",
      systems: "Microcontroller-based control system with sensors for balance and motion feedback. Simple interfaces designed for beginner programming.",
      outcomes: "Educational design requires balancing robustness and simplicity. Mechanical layout strongly influences control difficulty. Modular systems improve long-term usability."
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
