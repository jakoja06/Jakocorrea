export const SITE_CONFIG = {
  name: "Jacobo Correa ",
  title: "Mechanical Engineer Student",
  description: "Specializing in robotics, FEAh analysis, and precision mechanism design. Transforming complex problems into elegant mechanical solutions.",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto: jakocorrea@icloud.com"
  }
};

export const PROJECTS = [
  {
    id: "1",
    title: "6-DOF Robotic Arm",
    subtitle: "High-precision manipulator for assembly tasks",
    description: "Designed and prototyped a 6-degree-of-freedom robotic arm capable of 0.5mm repeatability. Utilized harmonic drives for compact joint actuation.",
    thumbnail: "https://picsum.photos/id/1/800/600",
    images: [
      "https://picsum.photos/id/1/800/600",
      "https://picsum.photos/id/532/800/600",
      "https://picsum.photos/id/2/800/600"
    ],
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
    },
    assets: {
      // INSTRUCTIONS:
      // 1. Create a folder named 'assets' in your root directory.
      // 2. Put your files there (e.g., assets/blueprints/drawing.pdf).
      // 3. Update the 'url' below to point to that file.
      blueprints: [
        { title: "Arm Assembly View", url: "./assets/blueprints/assembly_view.pdf", type: "PDF", size: "2.4 MB" },
        { title: "Joint 3 Detail", url: "./assets/blueprints/joint_3.pdf", type: "PDF", size: "1.1 MB" }
      ],
      cad: [
        { title: "Full Assembly STEP", url: "./assets/cad/arm_assembly.step", type: "STEP", size: "45 MB" },
        { title: "Gripper End-Effector", url: "./assets/cad/gripper.stl", type: "STL", size: "5 MB" }
      ],
      code: [
        {
          language: "python",
          filename: "kinematics_solver.py",
          description: "Inverse kinematics solver for 6-DOF positioning.",
          snippet: `import numpy as np

def inverse_kinematics(target_pose, link_lengths):
    """
    Calculates joint angles for a 6-DOF arm.
    Args:
        target_pose: 4x4 homogenous transformation matrix
        link_lengths: list of link lengths [l1, l2, l3...]
    Returns:
        theta: list of joint angles [th1, th2, th3, th4, th5, th6]
    """
    x, y, z = target_pose[:3, 3]
    
    # Calculate Base Rotation (Theta 1)
    theta1 = np.arctan2(y, x)
    
    # ... geometrical calculations ...
    
    return [theta1, theta2, theta3, theta4, theta5, theta6]`
        }
      ]
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
    },
    assets: {
       cad: [
        { title: "Optimized Frame", url: "./assets/cad/drone_frame_v2.iges", type: "IGES", size: "12 MB" }
      ]
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
    },
    assets: {
      blueprints: [
         { title: "Gearbox Cross Section", url: "./assets/blueprints/gearbox_section.pdf", type: "PDF", size: "3.2 MB" },
         { title: "BOM List", url: "./assets/blueprints/gearbox_BOM.pdf", type: "PDF", size: "0.5 MB" }
      ]
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
    },
    assets: {
      code: [
         {
          language: "cpp",
          filename: "plc_logic.cpp",
          description: "Main loop for sorting logic.",
          snippet: `void loop() {
  if (sensorA.read() == HIGH) {
    actuatorPush.extend();
    delay(500);
    actuatorPush.retract();
  }
}`
         }
      ]
    }
  }
];

export const SKILLS = [
  { category: "CAD/CAM", items: ["SolidWorks", "Fusion 360", "AutoCAD", "Rhino"] },
  { category: "Simulation", items: ["ANSYS Workbench", "COMSOL", "Simulink", "CFD"] },
  { category: "Prototyping", items: ["3D Printing (FDM/SLA)", "CNC Machining", "Laser Cutting"] },
  { category: "Programming", items: ["Python (NumPy/Pandas)", "MATLAB", "C++ (Arduino)"] },
];
