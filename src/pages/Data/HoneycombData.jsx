export const honeycombData = [
  {
    before: {
      detailPhoto: "portfolio/honeycomb/before/toolCad.png",
      situationOverview:
        "Shortly after I was promoted to the position of CAM programmer / manufacturing technologist, we received the first official non-conformity from a long-term client. The issue concerned the surface quality of parts made from honeycomb materials (aluminum and nomex).Up until that point, the client had accepted the parts as compliant – despite minor quality limitations – because they were manufactured using the best available methods at the time.At the time these parts were originally produced, I was working as an operator, which gave me valuable hands-on experience with the machines, tools, and process constraints.",
      problemDescription:
        "To achieve the required 75° machining angle, the B-axis needed to be tilted while the Z-axis moved deep enough to reach the part.However:It was impossible to simultaneously tilt the B-axis and lower the Z-axis without exceeding the machine’s Z-axis travel limit,Even if that movement was technically possible, it posed a high risk of spindle-to-table collision,The existing clamping method did not allow safe and stable part positioning for this kind of operation.As a result, surface quality suffered, and the client flagged the issue as a non-conformance.",
    },

    after: {
      detailPhoto: "portfolio/honeycomb/before/toolReal.jpg",
      correctiveActions:
        "I designed a custom two-part fixturing system:Part A (a smaller extension block),Part B (the main base fixture).The A + B configuration was used for larger honeycomb aluminum parts, and B alone was used for nomex honeycomb components.I fully verified all dimensions to ensure the fixture was universal, collision-free, and allowed clearance from the table, while keeping the Z-axis within its safe limits.I also recommended replacing the existing Ø19 mm end mill with a 76.2 mm face mill, which:Eliminated the roughing operation entirely,Reduced machining time by a factor of four or more,Required updates to 53 CNC programs, which I helped to modify and validate.",
      results:
        "The issue was fully resolved, and the client approved the new solution as the standard process.The updated setup allowed us to avoid spindle-to-table collisions and stay within Z-axis limits, improving process safety and repeatability.Machining time was significantly reduced, increasing productivity and lowering costs.This was my first major contribution as a technologist – I was the author of the concept, responsible for the design, dimensional validation, and implementation.Most importantly, I successfully applied the hands-on knowledge gained as an operator to solve a real-world production issue with a high-impact engineering solution.",
    },
  },
  {
    before: {
      detailPhoto: "portfolio/honeycomb/before/4in1honeycomb1.jpg",

      problemDescription:
        "Poor surface quality of honeycomb parts (aluminum and nomex),nability to use a face mill due to machine limitations,Risk of spindle-to-table collision when tilting to 75°,Exceeding Z-axis travel limits during machining.",
    },

    after: {
      detailPhoto: "portfolio/honeycomb/before/4in1honeycomb.jpg",

      results:
        "Implementation of a custom two-part fixture enabling safe part positioning,Enabled precise angled machining without collisions or axis limit errors,Improved surface quality,Significantly reduced machining time",
    },
  },
  {
    before: {
      detailPhoto: "portfolio/honeycomb/before/before_5.jpg",

      problemDescription:
        "Problem Identification: Incorrectly selected tool for machining internal contours,Rough and uneven edges inside the workpiece,",
    },

    after: {
      detailPhoto: "portfolio/honeycomb/after/after_5.jpg",

      results:
        "Updated machining strategy:Added a roughing pass with an end mill,Followed by a finishing pass using a 25.4 mm disk cutter,Significant improvement in edge quality,Visual enhancement clearly noticeable in inspection photos.",
    },
  },
  {
    before: {
      detailPhoto: "portfolio/honeycomb/before/4in1alu.jpg",

      problemDescription:
        "Poor surface quality of honeycomb parts (aluminum and nomex),nability to use a face mill due to machine limitations,Risk of spindle-to-table collision when tilting to 75°,Exceeding Z-axis travel limits during machining.",
    },

    after: {
      detailPhoto: "portfolio/honeycomb/after/4in1aluG.jpg",

      results:
        "Implementation of a custom two-part fixture enabling safe part positioning,Enabled precise angled machining without collisions or axis limit errors,Improved surface quality,Significantly reduced machining tim",
    },
  },
];
