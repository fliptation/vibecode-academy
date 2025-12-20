import { define } from "../utils.ts";

export default define.page(function Error404() {
  return (
    <div class="container" style={{ textAlign: "center", padding: "8rem 0" }}>
      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>The page you were looking for doesn't exist.</p>
      <a href="/" class="nav-cta">Go back home</a>
    </div>
  );
});
