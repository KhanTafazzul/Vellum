# Vellum

> **/ˈvɛl.əm/** — *Named after fine, translucent drafting paper used by architects and artists. Evokes layering and smooth canvas edges.*

A high-performance desktop canvas editor inspired by editorial collage workflows (such as SCRL), engineered for seamless multi-frame panoramic carousels, layered collage compositions, and continuous seamless storytelling across social media slides.

---

## 🎨 Overview & Design Language

Vellum implements the **Studio Olive & Circular Tactile Design System**:
- **Tactile Olive Palette:** Rich olive hues (`#556B2F`, `#6B8E23`, `#A6BD86`) paired with low-glare matte dark studio surfaces.
- **Circular & Pill Geometry:** All buttons, docks, toolbars, badges, and zoom controls use soft pill (`9999px`) or circular (`50%`) geometry, reserving sharp `0px` edges exclusively for photo artboards.
- **Named Motion:** Built on dedicated fluid animation specifications (`velvet-press`, `olive-bloom`, `capsule-morph`, `silk-float-in`, `magnetic-snap`, `halo-ripple`, `carousel-glide`, and `shimmer-slice`).
- **Precision Typography:** Clean editorial typography pairing `Plus Jakarta Sans` for UI, `Syne` for display headers, and `JetBrains Mono` for canvas coordinate and scale readouts.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React 18+, TypeScript, Vite, Tailwind CSS, Zustand, Lucide React.
- **Backend / Core Engine:** Rust with [Tauri v2](https://v2.tauri.app/), Tokio asynchronous runtime, Serde, and the `image` crate for low-overhead multi-threaded image processing and hardware-accelerated exports.

---

## 📂 Project Structure

```
Vellum/
├── devellpomnt file/           # Design system tokens, geometry, and motion specs
│   ├── animation.md            # Named transitions & cubic bezier curves
│   ├── degine.md               # Studio Olive & Circular Tactile design system
│   └── degine_rules.md         # Golden UI rules & constraints
├── src/                        # React Frontend
│   ├── components/             # Reusable UI primitives (Toolbar, AssetDrawer, etc.)
│   ├── features/
│   │   ├── canvas/             # Multi-frame canvas viewport & rendering stage
│   │   └── inspector/          # Property & layer inspection panel
│   ├── hooks/                  # Custom React hooks (IPC bridges, hotkeys, resize)
│   ├── store/                  # Zustand global state management
│   ├── types/                  # Strict TypeScript data models & IPC contracts
│   ├── utils/                  # Coordinate transforms, IPC bridges & math
│   ├── App.tsx                 # Master editor shell & workspace layout
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind CSS & design tokens
├── src-tauri/                  # Tauri v2 Rust Backend
│   ├── Cargo.toml              # Rust crate manifest & dependencies
│   ├── tauri.conf.json         # Tauri v2 configuration & window settings
│   ├── build.rs                # Tauri build script
│   └── src/
│       ├── commands/           # Tauri IPC command handlers
│       ├── engine/             # Image processing & collage pipeline
│       ├── models/             # Rust data structures & serialization
│       ├── error.rs            # Centralized error model with serialization
│       ├── lib.rs              # AppState, plugin registration & IPC routing
│       └── main.rs             # Tauri binary entrypoint
├── LICENSE                     # GNU General Public License v3.0 (GPLv3)
├── package.json                # Frontend package configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── tailwind.config.js          # Tailwind CSS design system tokens
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Rust & Cargo](https://rustup.rs/) (latest stable)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/KhanTafazzul/Vellum.git
cd Vellum

# Install frontend dependencies
npm install

# Start Vite dev server + Tauri v2 native desktop window
npm run tauri dev
```

---

## ⚖️ License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**. 

Under the GPLv3:
- Anyone is free to use, study, inspect, and modify this software.
- Any modified versions or derivative works must also be distributed under the same GPLv3 copyleft license with source code made available.
- You cannot take this code and turn it into closed-source proprietary commercial software to sell.

See the [LICENSE](LICENSE) file for complete details.
