# Hey there, I'm Rahma! 👋

```
  ____        _  _    ____   _                 _      ____
 |  _ \ _   _| || |_ / ___| | |_  __ _   ___  | | __ |  _ \  ___ __   __
 | |_) | | | | ||  _|\___ \ | __|/ _` | / __| | |/ / | | | |/ _ \\ \ / /
 |  __/| |_| | || |_  ___) || |_| (_| || (__  |   <  | |_| |  __/ \ V /
 |_|    \__,_|_| \__||____/  \__|\__,_| \___| |_|\_\ |____/ \___|  \_/
```

** Full-Stack Engineer | Distributed Systems & High-Fidelity UI/UX Specialist**

Passionate about bridging the gap between scalable backends and premium user interfaces. I design high-throughput microservices, implement distributed consensus patterns, and craft pixel-perfect, highly interactive frontend experiences.

---

### 🚀 Technical Arsenal

<table>
  <tr>
    <td align="center" width="33%">
      <strong>Backend & Infrastructure</strong>
    </td>
    <td align="center" width="33%">
      <strong>Frontend & Design Systems</strong>
    </td>
    <td align="center" width="33%">
      <strong>Architecture & Patterns</strong>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <ul>
        <li>Node.js / NestJS / Express</li>
        <li>PostgreSQL / MongoDB / Redis</li>
        <li>Microservices Architecture</li>
        <li>Docker / Local Dev Environments</li>
        <li>Secure Identity & Access (IGA)</li>
      </ul>
    </td>
    <td valign="top">
      <ul>
        <li>React.js / Next.js (App Router)</li>
        <li>TypeScript / JavaScript</li>
        <li>Tailwind CSS / Premium Glassmorphism</li>
        <li>RTL Support / Multilingual UI</li>
        <li>Reusable Design Components</li>
      </ul>
    </td>
    <td valign="top">
      <ul>
        <li>Region-Based DB Sharding</li>
        <li>Transactional Outbox Pattern</li>
        <li>Event-Driven Consistency</li>
        <li>State Machine Workflow Engines</li>
        <li>API Middleware & Security Layers</li>
      </ul>
    </td>
  </tr>
</table>

---

### 🛠️ Key Architectural Achievements

Here's a breakdown of advanced engineering solutions I have designed and implemented:

```mermaid
graph TD
    A[Client App] -->|HTTPS Request| B[API Gateway]
    B -->|Auth Middleware| C[Auth & Identity Service]
    B -->|Route| D[Coring Services]
    B -->|Route| E[Ordering Service]
    
    subgraph "Distributed Microservices"
    D -->|Write State| F[(Sharded DB - Region A)]
    D -->|Transactional Outbox| G[Redis Cache / Msg Queue]
    G -->|Event Broadcast| E
    E -->|Write State| H[(Sharded DB - Region B)]
    end
```

#### 📦 Distributed Microservices & Eventual Consistency
* **Region-Based Sharding**: Designed and developed region-based database sharding logic to partition load and minimize request latency for microservice ecosystems (`coring-services` and `ordering-service`).
* **Transactional Outboxing**: Eliminated dual-write risks by implementing the Transactional Outbox pattern, routing event streams through Redis-backed brokers for reliable, eventual data consistency.
* **Complex Workflow Engines**: Crafted collaborative workflow engines featuring automated state transitions (e.g. `'ready_for_review'`), notification dispatches, and robust query fallback mechanisms.

#### 🎨 Premium Dashboards & Interactive Interfaces
* **Design Systems (`@/shared/components`)**: Built modular, reusable UI design system atoms (dynamic buttons, starred multi-select fields, badges, custom input components) with pixel-perfect attention to micro-animations and accessibility.
* **Complex Multi-step Wizards**: Built advanced product builder wizards with live visual simulators (interactive SVG geographic radius map widgets, customized RTL schedules/days timeline accordion builders).
* **RTL Layout Optimization**: Specialized in building native Right-to-Left (RTL) Arabic web layouts with clean user flows and transition animations.

---

### 📈 GitHub Activities & Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Rahma&show_icons=true&theme=tokyonight&count_private=true" alt="Rahma's Github Stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rahma&layout=compact&theme=tokyonight" alt="Top Langs" />
</div>

---

### 📂 Highlighted Repositories

#### 🌟 [Tunisia-Village-Dashboard](https://github.com/Rahma/Tunisia-Village-Dashboard)
> A premium dashboard UI built with Next.js App Router and TypeScript. Featuring reusable select inputs, customizable multi-step dashboards, map rendering with custom search radii, and dynamic accordion schedules.

#### ⚙️ [Coring & Ordering Services](https://github.com/Rahma/coring-services)
> A distributed backend engine featuring region-based sharding, transaction outboxing, authentication middleware, status change triggers, and Redis-backed caching strategies.

---

### 📫 Connect With Me

<div align="left">
  <a href="https://linkedin.com/in/your-profile" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="mailto:your-email@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Badge"/>
  </a>
</div>

***

*“Writing code is not just about making it work; it’s about making it resilient, scalable, and delightful.”*
