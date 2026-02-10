export const compositeItems = [
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/before_1.jpg",
      situationOverviwe:
        "While working on a carbon fiber composite component, a critical issue occurred during the final machining stage: the contour of the part was damaged, exceeding the defined trim line. The flaw was clearly visible on the finished surface and could compromise both functionality and aesthe",
      problemDescription:
        "Initial inspection of the machined part revealed a tool path deviation, resulting in chipping beyond the designated cut line (confirmed by visual evidence).I performed a verification of the part mounting procedure by reviewing the operator’s work and the setup on the fixture.The analysis confirmed that the operator had correctly mounted the part in the tool; the root cause was in the CNC program.",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/after_1.jpg",
      correctiveActions:
        "Tool Path Redesign.Replaced the existing 2D profile strategy with Multi-Axis Curve Machining, which allowed better adaptation to the part’s surface and contour transitions. Improved Entry and Exit Movements. Optimized lead-in and lead-out motions to minimize stress on the fiber edges.Updated Machining Parameters. Adjusted tool engagement, reduced feed rate on entry/exit, and implemented compensation based on fiber directionality. Simulation and Validation.Ran a full simulation in CATIA NC Manufacturing to validate the revised path and tool behavior before executing on the machine.",
      results:
        "The final part shape matched the CAD model with no visual or structural defects.Eliminated chipping and delamination in edge areas. Prevented further production loss by updating the machining template for similar parts. Reinforced the importance of using multi-axis strategies for composite materials, especially when dealing with sharp transitions or delicate contours.",
    },
  },
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/before_2.jpg",
      situationOverviwe:
        "While working on a carbon fiber composite component, a critical issue occurred during the final machining stage: the contour of the part was damaged, exceeding the defined trim line. The flaw was clearly visible on the finished surface and could compromise both functionality and aesthe",
      problemDescription:
        "Initial inspection of the machined part revealed a tool path deviation, resulting in chipping beyond the designated cut line (confirmed by visual evidence).I performed a verification of the part mounting procedure by reviewing the operator’s work and the setup on the fixture.The analysis confirmed that the operator had correctly mounted the part in the tool; the root cause was in the CNC program.",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/after_2.jpg",
      correctiveActions:
        "Tool Path Redesign.Replaced the existing 2D profile strategy with Multi-Axis Curve Machining, which allowed better adaptation to the part’s surface and contour transitions. Improved Entry and Exit Movements. Optimized lead-in and lead-out motions to minimize stress on the fiber edges.Updated Machining Parameters. Adjusted tool engagement, reduced feed rate on entry/exit, and implemented compensation based on fiber directionality. Simulation and Validation.Ran a full simulation in CATIA NC Manufacturing to validate the revised path and tool behavior before executing on the machine.",
      results:
        "The final part shape matched the CAD model with no visual or structural defects.Eliminated chipping and delamination in edge areas. Prevented further production loss by updating the machining template for similar parts. Reinforced the importance of using multi-axis strategies for composite materials, especially when dealing with sharp transitions or delicate contours.",
    },
  },
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/before_3.jpg",
      situationOverviwe:
        "During the CNC machining of a carbon fiber composite part, the final shape significantly deviated from the CAD model. Additionally, the CNC fixture was damaged, indicating that the tool had moved too deeply, likely due to improper strategy or motion control.",
      problemDescription:
        "Analysis revealed that:The machining strategy was not appropriate for the part’s complex geometry. Entry and exit tool motions were poorly configured, leading to potential collisions. The tool did not maintain sufficient clearance, resulting in physical damage to the fixture.",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/after_3.jpg",
      correctiveActions:
        "Revised Machining Strategy. A new strategy was developed in CATIA NC Manufacturing to better suit the geometry and risk zones of the part. Tool Holder Extension Added.A tool extension (adapter) was introduced to increase clearance between the tool and the fixture, helping to eliminate collision points. Optimized Tool Paths. Entry/exit movements were corrected, and additional geometrical constraints were added to avoid risky areas. Simulation and Test Run.A full simulation followed by a dry run with test blocks confirmed the updated program’s safety and accuracy.",
      results:
        "The part’s shape matched the CAD design precisely. Tool and fixture collisions were eliminated. Production was resumed without needing to replace the fixture. The corrected approach was documented and reused as a template for similar carbon fiber components.",
    },
  },
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/before_4.jpg",
      situationOverviwe: "",
      problemDescription: "",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/after_4.jpg",
      correctiveActions: "",
      results: "",
    },
  },
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/before_6.jpg",
      situationOverviwe: "",
      problemDescription: "",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/after_6.jpg",
      correctiveActions: ".",
      results: "",
    },
  },
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/before_7.jpg",
      situationOverviwe:
        "While working on a complex composite part consisting of multiple layers (fiberglass and a honeycomb core), I encountered a critical issue: the honeycomb filler was not adhering properly to the bottom fiberglass layer during the bonding process. The component required high precision alignment in the tool before laminating, and the failure to achieve a tight bond risked compromising structural integrity.",
      problemDescription:
        "Initially, the root cause was thought to be insufficient pressure during the bonding process.Together with the cleanroom technicians, we verified that the tooling and pressure system were functioning correctly. Upon closer inspection of the CAD model, I discovered that the honeycomb core was incorrectly reconstructed, specifically at the angled edges – the ends had improper cut angles, which prevented full contact with the fiberglass layer inside the fixture.",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/after_7.jpg",
      correctiveActions:
        "Geometry Reconstruction.I corrected the 3D model of the honeycomb filler, ensuring that the end angles matched the contours of the fiberglass base layer precisely.",
      results:
        "Achieved a strong and consistent bond between the core and fiberglass layer.Prevented material waste and production delays.Enabled successful continuation of CNC operations despite fixture limitations, keeping the process on schedule.",
    },
  },
  {
    before: {
      detailPhoto: "public/portfolio/composites/before/6in1.jpg",
      situationOverviwe:
        "The attached photos show only selected examples of non-conformities found during machining of composite parts that did not meet CAD model specifications. In reality, the number of such cases was much higher and often required a multidisciplinary approach.My responsibilities included:inspecting laminate quality,checking fixture condition and positioning,analyzing CNC program correctness (strategy, parameters, toolpath),collaborating with machine operators, quality control, process engineers, and lamination staff,participating in 8D meetings both internally and with the client.",
      problemDescription:
        "Typical CNC operator mistakes:incorrect zero-point,improper clamping or fixture securing,use of worn tools or missing tool length data (causing collisions),poorly selected tool extensions – length matched, but not diameter,lack of fixture parallelism – cutting outside the intended line.Fixture-related challenges:worn or leaking vacuum systems,excessive laminate allowance requiring manual pre-machining,limited working space (e.g., AW149 tail beam),design mismatches – real fixture differing from CAD model.Programming issues:inconsistent program structure,missing declaration of clamping components,excessive or inefficient toolpaths,incomplete or outdated customer documentation,need to rebuild full 3D geometry and unfolding of parts.",
    },

    after: {
      detailPhoto: "public/portfolio/composites/after/2in1.jpg",
      correctiveActions:
        "Developed new machining strategies and CNC programs tailored to the issues.Repaired or modified fixtures (seal replacements, new clamps, corrected mounting holes).Introduced technological corrections: adjusted operation sequences, used correct tools and extensions.Trained laminators and updated work instructions to reduce excessive allowance.Worked closely with quality control to identify and trace root causes of non-conformities.",
      results:
        "The implemented improvements significantly reduced the number of production errors and enhanced part quality.Cross-departmental collaboration (operators, QC, engineers, lamination) enabled the creation of an effective corrective process, leading to better repeatability and conformity with customer documentation.",
    },
  },
];
