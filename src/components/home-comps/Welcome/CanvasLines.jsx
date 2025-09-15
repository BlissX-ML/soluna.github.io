import { useRef, useEffect } from "react";

export default function CanvasLines({ containerRef }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        class Segment {
            constructor(x1, y1, x2, y2) {
                this.x1 = x1;
                this.y1 = y1;
                this.x2 = x2;
                this.y2 = y2;
                this.alpha = 1;
            }

            update() {
                this.alpha -= 0.01;
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.moveTo(this.x1, this.y1);
                ctx.lineTo(this.x2, this.y2);
                // ctx.strokeStyle = this.color.replace(")", `,${this.alpha})`).replace("hsl", "hsla");
                const hue = (Date.now() / 50) % 360;  // 随时间旋转色相
                ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${this.alpha})`;
                ctx.lineWidth = 3;
                ctx.stroke();
            }
        }

        class Ray {
            constructor(x, y, angle) {
                this.x = x;
                this.y = y;
                this.lastX = x;
                this.lastY = y;
                this.angle = angle;
                this.speed = 5;
            }

            update() {
                this.lastX = this.x;
                this.lastY = this.y;

                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (this.x < 0 || this.x > canvas.width) {
                    this.angle = Math.PI - this.angle;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.angle = -this.angle;
                }

                segments.push(new Segment(this.lastX, this.lastY, this.x, this.y));
            }

        }

        let rays = [];
        let segments = [];

        // 初始化几条光线
        for (let i = 0; i < 8; i++) {
            rays.push(
                new Ray(
                    Math.random() * canvas.width,
                    Math.floor(Math.random() * canvas.height),
                    Math.random() * Math.PI * 2
                )
            );
        }

        function animate() {
            ctx.fillStyle = "rgb(239, 239, 239)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let ray of rays) {
                ray.update();
            }

            for (let i = segments.length - 1; i >= 0; i--) {
                let seg = segments[i];
                seg.update();
                seg.draw(ctx);
                if (seg.alpha <= 0) {
                    segments.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        // 获取父容器大小
        const resize = () => {
            if (containerRef.current) {
                canvas.width = containerRef.current.clientWidth;
                canvas.height = containerRef.current.clientHeight;
            }
        };

        resize(); // 初始化
        window.addEventListener("resize", resize);

        // 清理
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [containerRef]);

    return <canvas ref={canvasRef} style={{ display: "block" }} />;
}
