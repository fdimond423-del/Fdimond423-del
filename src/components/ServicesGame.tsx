import { useEffect, useRef } from "react";
import Matter from "matter-js";

const SERVICES = [
  "WordPress",
  "Meta Ads",
  "SEO",
  "Canva",
  "Google Ads",
  "Social Media",
  "PPC",
  "Email Marketing",
  "Landing Pages",
  "Content Marketing",
  "Graphic Design",
  "Conversion Rate",
  "UI/UX Design",
  "Brand Identity",
  "Copywriting",
  "Analytics",
  "Strategy",
  "E-commerce",
  "Lead Gen",
  "Funnel Building",
];

export function ServicesGame() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width = sceneRef.current.clientWidth;
    const height = window.innerWidth < 768 ? 500 : 800; // Responsive height

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // Walls
    const wallOptions = { 
      isStatic: true, 
      render: { fillStyle: "transparent" },
      restitution: 1
    };

    Composite.add(world, [
      Bodies.rectangle(width / 2, -10, width, 20, wallOptions), // top
      Bodies.rectangle(width / 2, height + 10, width, 20, wallOptions), // bottom
      Bodies.rectangle(-10, height / 2, 20, height, wallOptions), // left
      Bodies.rectangle(width + 10, height / 2, 20, height, wallOptions), // right
    ]);

    // Balls - Adjusted sizes for mobile
    const balls = SERVICES.map((service, i) => {
      const baseRadius = window.innerWidth < 768 ? 25 : 45;
      const radius = baseRadius + Math.random() * (window.innerWidth < 768 ? 20 : 35);
      const x = Math.random() * (width - radius * 2) + radius;
      const y = Math.random() * (height - radius * 2) + radius;

      return Bodies.circle(x, y, radius, {
        restitution: 0.9,
        friction: 0.005,
        frictionAir: 0.01,
        render: {
          fillStyle: i % 3 === 0 ? "#ccff00" : i % 3 === 1 ? "#00f0ff" : "#111",
          strokeStyle: i % 3 === 2 ? "#00f0ff" : "#000",
          lineWidth: 4,
        },
        label: service,
      });
    });

    Composite.add(world, balls);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    
    // Enable touch support
    if (mouse.element) {
      mouse.element.removeEventListener("mousewheel", (mouse as any).mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
    }

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: { visible: false },
      },
    });

    Composite.add(world, mouseConstraint);

    // Custom rendering for text on balls
    Matter.Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = "bold 12px Clash Display";
      context.textAlign = "center";
      context.textBaseline = "middle";

      balls.forEach((ball, i) => {
        const { x, y } = ball.position;
        context.save();
        context.translate(x, y);
        context.rotate(ball.angle);
        context.fillStyle = i % 3 === 2 ? "#00f0ff" : "#000";
        context.fillText(ball.label, 0, 0);
        context.restore();
      });
    });

    const handleResize = () => {
      if (!sceneRef.current) return;
      render.canvas.width = sceneRef.current.clientWidth;
      render.options.width = sceneRef.current.clientWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[800px] bg-[#111] overflow-hidden brutal-border cursor-grab active:cursor-grabbing shadow-2xl">
      <div ref={sceneRef} className="w-full h-full" />
      <div className="absolute top-12 left-12 pointer-events-none">
        <h3 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white/20">
          Interactive <br /> Services
        </h3>
      </div>
    </div>
  );
}
