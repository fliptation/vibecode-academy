import { useEffect, useRef } from "preact/hooks";

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
}

export default function MeteorShower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let meteors: Meteor[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createMeteor = (): Meteor => ({
      x: Math.random() * canvas.width * 1.5,
      y: -20,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 4 + 3,
      opacity: Math.random() * 0.6 + 0.2,
      width: Math.random() * 1.5 + 0.5,
    });

    const init = () => {
      meteors = [];
      for (let i = 0; i < 8; i++) {
        const meteor = createMeteor();
        meteor.y = Math.random() * canvas.height;
        meteors.push(meteor);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor, index) => {
        // Update position (diagonal movement)
        meteor.x -= meteor.speed * 0.7;
        meteor.y += meteor.speed;

        // Draw meteor trail
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x + meteor.length * 0.7,
          meteor.y - meteor.length
        );

        // Cyan color: #22d3ee
        gradient.addColorStop(0, `rgba(34, 211, 238, ${meteor.opacity})`);
        gradient.addColorStop(0.3, `rgba(34, 211, 238, ${meteor.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.width;
        ctx.lineCap = "round";
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(meteor.x + meteor.length * 0.7, meteor.y - meteor.length);
        ctx.stroke();

        // Draw bright head
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.arc(meteor.x, meteor.y, meteor.width, 0, Math.PI * 2);
        ctx.fill();

        // Reset meteor if off screen
        if (meteor.y > canvas.height + 20 || meteor.x < -100) {
          meteors[index] = createMeteor();
        }
      });

      // Randomly add new meteors
      if (Math.random() < 0.02 && meteors.length < 15) {
        meteors.push(createMeteor());
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      class="meteor-canvas"
    />
  );
}
