<div align="center">

  # 🏗️ Architex AI
  ### The Intelligent Future of Architectural Design

  <p>
    <b>Where Generative AI Meets Precision Engineering</b>
  </p>

  <p>
    <a href="https://azure-ai-drafter.vercel.app/">
      <img src="https://img.shields.io/badge/Live_Demo-Visit_App-000000?style=for-the-badge&logo=vercel&logoColor=white" />
    </a>
    <a href="#tech-stack">
      <img src="https://img.shields.io/badge/Architecture-Next.js_14-black?style=for-the-badge&logo=next.js" />
    </a>
    <a href="#tech-stack">
      <img src="https://img.shields.io/badge/Language-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    </a>
    <a href="#ai-integration">
      <img src="https://img.shields.io/badge/Intelligence-Azure_OpenAI-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white" />
    </a>
  </p>

  <br />

  <a href="https://azure-ai-drafter.vercel.app/">
    <img src="/cad_generator.png" alt="Architex AI Interface" width="100%" style="border-radius: 4px; border: 1px solid #333;" />
  </a>

</div>

---

### 🚀 Application Overview

**Architex AI** (formerly AIDraft) is a production-grade platform engineered to streamline the architectural design process. By integrating **artificial intelligence** with a robust **full-stack architecture**, it empowers users to generate, optimize, and visualize sophisticated designs instantly.

This project demonstrates a complete **System Architecture** integrating:
-   **Frontend Engineering**: Complex state management and 3D rendering in React/Next.js.
-   **Backend Logic**: Secure API route handling and server-side operations.
-   **Third-Party Integration**: Direct orchestration of Azure AI services.

---

### ⚠️ Engineer's Note: API Configuration
**This application requires valid Azure API keys to function.** The Live Demo below connects to restricted demonstration services.

**Resources Required for Local Dev:**
1.  **Azure OpenAI**: GPT-4 deployment (for generative drafting).
2.  **Azure Computer Vision**: For spatial analysis resources.

> *For demonstration purposes, the app includes fallback mock data strategies to handle API limits or missing keys gracefully.*

---

### 🏗️ System Architecture

The detailed architecture below illustrates how the Frontend (Next.js) interacts with the AI Agent Layer and Azure Services.

<div align="center">
  <img src="/app_architecture.png" alt="System Architecture Diagram" width="90%" />
</div>

---

### ⚡ Key Features & Engineering Modules

| 🛠️ Full-Stack Modules | 🤖 AI & Data Features |
| :--- | :--- |
| **Real-Time Collaboration**<br>WebSocket-based multi-user editing allowing teams to work simultaneously.<br><br>**Project Management System**<br>Full CRUD capabilities for tracking progress, tasks, and deadlines.<br><br>**Interactive 3D Engine**<br>Custom **Three.js** implementation for browser-based CAD visualization.<br><br>**Responsive UI/UX**<br>Pixel-perfect interface built with **Shadcn UI** and Tailwind CSS. | **Generative Drafting**<br>Seamlessly generate floor plans and layouts from natural language prompts using GPT-4.<br><br>**Sustainability Engine**<br>Algorithms to evaluate energy efficiency and material usage in real-time.<br><br>**Automated Compliance**<br>Instant verification of designs against building codes using vector-based rule checking. |

---

### 🛠 Tech Stack

-   **Frontend Framework**: Next.js 14 (App Router), React, TypeScript
-   **Styling System**: Tailwind CSS, Shadcn UI
-   **Visualization**: Three.js, React-Three-Fiber
-   **AI Services**: Azure OpenAI, Azure Computer Vision
-   **State Management**: React Context / Hooks
-   **Authentication**: NextAuth.js (Configurable)

---

### 🚦 Getting Started

#### Prerequisites
-   Node.js (v18+) and npm
-   Git
-   **Azure Account** with active OpenAI & Computer Vision subscriptions

#### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/architex-ai.git
    cd architex-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env.local` file in the root directory:

    ```env
    # App Settings
    NEXT_PUBLIC_APP_URL=http://localhost:3000

    # Azure OpenAI Configuration
    AZURE_OPENAI_KEY=your_key_here
    AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
    AZURE_OPENAI_DEPLOYMENT=gpt-4-preview
    AZURE_OPENAI_API_VERSION=2023-12-01-preview

    # Azure Computer Vision
    AZURE_VISION_KEY=your_vision_key
    AZURE_VISION_ENDPOINT=https://your-vision.cognitiveservices.azure.com

    # Authentication (Optional)
    AUTH_SECRET=your_auth_secret_key
    NEXTAUTH_URL=http://localhost:3000
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

---

### ⚙️ Backend Configuration

#### Agent System Configuration
The multi-agent system is configured in `agent-config.ts`, demonstrating modular code structure:

```ts
export const AZURE_SERVICES_CONFIG = {
    openai: {
        key: process.env.AZURE_OPENAI_KEY || "",
        endpoint: process.env.AZURE_OPENAI_ENDPOINT || "",
        deployment: process.env.AZURE_OPENAI_DEPLOYMENT || "gpt-4",
        // ...
    },
    vision: {
        key: process.env.AZURE_VISION_KEY || "",
        endpoint: process.env.AZURE_VISION_ENDPOINT || "",
    },
};
```

---

### 📂 Project Structure

A clean, modular structure ensures scalability and maintainability.

```
├── app/             # Next.js App Router (Pages & Layouts)
├── components/      # Reusable React UI components
├── lib/             # Utility functions & API wrappers
├── public/          # Static assets & images
├── styles/          # Global CSS & Tailwind configuration
└── types/           # TypeScript interfaces for strict typing
```

### 📃 Key Routes

-   `/` – Landing Page
-   `/dashboard` – Principal User Interface
-   `/projects` – Project Management Grid
-   `/cad-generator` – AI Drafting Canvas
-   `/analytics` – Data Visualization Dashboard

---

### 🌍 Deployment & Workflow

#### Production Build
```bash
npm run build
npm start
```

#### Development Workflow
We follow a strict feature-branch workflow:
1.  `git checkout -b feature/name`
2.  Commit changes
3.  PR to `main`

---

<div align="center">
  <sub>Engineered by Bhargavi Guda</sub>
</div>
