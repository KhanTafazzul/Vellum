# DESIGN.MD — Studio Olive & Circular Tactile Design System

> **Single Source of Truth for UI, Typography, Color Tokens, Circular Geometry, and Named Premium Motion.**  
> All React components, Tailwind configurations, and canvas overlays MUST strictly follow the tokens defined in this file.

---

## 1. Design Philosophy

- **Aesthetic Direction:** Matte Dark Studio meets Organic Olive Tactility (inspired by SCRL's clean editorial studio workflow).
- **Geometry Language:** **Circular & Pill-First**. Every interactive surface—tool docks, icon buttons, modals, layer chips, and zoom pills—uses deep circular or capsule rounding (`9999px` pills and `24px–32px` squircles). Sharp `0px` corners are strictly reserved for the actual photo artboard frames on the canvas.
- **Surface Feel:** Matte, low-glare dark slate surfaces paired with soft tactile inner highlights (subtle clay/neumorphic depth) and rich **Olive Green (`#556B2F`)** accents.

---

## 2. Color System — Olive Green Shades & Matte Surfaces

### 2.1 Primary Olive Green Ramp (Brand & Interactive Accents)

| Token Name    | Hex Code  | RGB                  | Usage                                                              |
| :------------ | :-------- | :------------------- | :----------------------------------------------------------------- |
| `--olive-50`  | `#F4F7EE` | `rgb(244, 247, 238)` | Subtle tint for high-contrast text on olive surfaces               |
| `--olive-100` | `#E4EBDA` | `rgb(228, 235, 218)` | Soft badge text, active icon illumination                          |
| `--olive-200` | `#C8D6B3` | `rgb(200, 214, 179)` | Hover borders, secondary pill outlines                             |
| `--olive-300` | `#A6BD86` | `rgb(166, 189, 134)` | Active canvas snap lines, selection handles, focus rings           |
| `--olive-400` | `#84A15D` | `rgb(132, 161, 93)`  | Hover state for primary olive buttons & sliders                    |
| `--olive-500` | `#6B8E23` | `rgb(107, 142, 35)`  | Vibrant Olive — primary CTA highlights, export progress            |
| `--olive-600` | `#556B2F` | `rgb(85, 107, 47)`   | **Core Brand Olive** — primary pill buttons, active tool indicator |
| `--olive-700` | `#435525` | `rgb(67, 85, 37)`    | Pressed button surface, active layer row background                |
| `--olive-800` | `#313E1B` | `rgb(49, 62, 27)`    | Muted olive surface for floating chips and subtle tags             |
| `--olive-900` | `#212A12` | `rgb(33, 42, 18)`    | Deep olive tint for modal headers and glass overlays               |
| `--olive-950` | `#13180A` | `rgb(19, 24, 10)`    | Darkest forest olive shadow & ambient backdrop                     |

### 2.2 Matte Dark Studio Surfaces (Canvas & Chrome)

| Token Name           | Hex Code                 | Usage                                                                  |
| :------------------- | :----------------------- | :--------------------------------------------------------------------- |
| `--surface-canvas`   | `#0B0F14`                | Infinite pan/zoom viewport background behind artboards                 |
| `--surface-base`     | `#121820`                | Main application shell background                                      |
| `--surface-panel`    | `#1E293B`                | Matte Slate — floating docks, sidebars, and inspector cards            |
| `--surface-elevated` | `#263346`                | Hover cards, dropdown menus, and active layer pills                    |
| `--surface-glass`    | `rgba(30, 41, 59, 0.78)` | Translucent floating circular toolbars (`backdrop-filter: blur(20px)`) |

### 2.3 Text, Borders & Semantic Tokens

| Token Name            | Value                       | Usage                                            |
| :-------------------- | :-------------------------- | :----------------------------------------------- |
| `--text-primary`      | `#F8FAFC`                   | Primary headings, active labels, and button copy |
| `--text-secondary`    | `#94A3B8`                   | Inspector property names, inactive tab labels    |
| `--text-muted`        | `#64748B`                   | Disabled controls, subtle hints, frame numbers   |
| `--border-subtle`     | `rgba(255, 255, 255, 0.07)` | Hairline divider on matte panels                 |
| `--border-olive-glow` | `rgba(166, 189, 134, 0.38)` | Active circular button & selected card border    |
| `--status-success`    | `#7BA042`                   | Export complete, health check passed             |
| `--status-warning`    | `#D99B26`                   | Low-resolution image warning                     |
| `--status-danger`     | `#E05252`                   | Delete layer, destructive confirmation           |

---

## 3. Typography System & Font Families

### 3.1 Font Family Stack (UI & SCRL Editorial Presets)

1. **Primary Studio UI Font (`--font-sans`):** `'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
   - _Why:_ Clean geometric proportions with open circular counters that match circular UI corners.
2. **Brand & Display Header Font (`--font-display`):** `'Syne', 'Plus Jakarta Sans', sans-serif`
   - _Why:_ Used for studio headers, onboarding titles, and export modal headlines.
3. **Numeric & Coordinate Font (`--font-mono`):** `'JetBrains Mono', monospace`
   - _Why:_ Used in the right inspector for exact `X`, `Y`, `W`, `H`, rotation degrees (`0.0°`), zoom (`100%`), and frame indices (`01 / 05`).
4. **Built-in Canvas Collage Font Pack (SCRL-Style Text Tool Fonts):**
   - _Editorial Serif:_ `'Playfair Display'`, `'Cormorant Garamond'`, `'Instrument Serif'`
   - _Modern Bold Sans:_ `'Bebas Neue'`, `'Montserrat'`, `'Space Grotesk'`
   - _Handwritten / Organic:_ `'Caveat'`, `'Reenie Beanie'`

### 3.2 Complete Typography Scale

| Style Token    | Font Family      | Size (`rem` / `px`)  | Weight           | Line Height | Letter Spacing | Usage                                            |
| :------------- | :--------------- | :------------------- | :--------------- | :---------- | :------------- | :----------------------------------------------- |
| `display-hero` | `--font-display` | `2.25rem` (`36px`)   | `700` (Bold)     | `1.15`      | `-0.03em`      | Splash screen, project hub header                |
| `heading-xl`   | `--font-sans`    | `1.50rem` (`24px`)   | `700` (Bold)     | `1.25`      | `-0.02em`      | Modal titles, export dialog header               |
| `heading-lg`   | `--font-sans`    | `1.125rem` (`18px`)  | `600` (SemiBold) | `1.35`      | `-0.015em`     | Drawer titles, major section headers             |
| `heading-sm`   | `--font-sans`    | `0.875rem` (`14px`)  | `600` (SemiBold) | `1.40`      | `0.01em`       | Inspector group headers (e.g., "Transform")      |
| `body-md`      | `--font-sans`    | `0.9375rem` (`15px`) | `400` (Regular)  | `1.50`      | `0em`          | Standard descriptions, modal body text           |
| `ui-control`   | `--font-sans`    | `0.8125rem` (`13px`) | `500` (Medium)   | `1.20`      | `0.01em`       | Pill buttons, layer names, dropdown items        |
| `ui-micro`     | `--font-sans`    | `0.6875rem` (`11px`) | `600` (SemiBold) | `1.00`      | `0.06em`       | Uppercase pill badges, shortcut hints            |
| `mono-readout` | `--font-mono`    | `0.75rem` (`12px`)   | `500` (Medium)   | `1.20`      | `-0.01em`      | Canvas `X/Y` coordinates, zoom %, frame counters |

---

## 4. Circular Corner & Border Radius System

All UI chrome follows a strict **Circular / Capsule Geometry**. Only canvas photo frames use `0px` (or user-controlled radius) so the artwork contrasts sharply against the soft circular interface.

| Token Name              | Value    | Component Mapping                                                                                   |
| :---------------------- | :------- | :-------------------------------------------------------------------------------------------------- |
| `--radius-canvas-frame` | `0px`    | Default seamless Instagram carousel artboard slices                                                 |
| `--radius-sm`           | `10px`   | Small inner color swatches, keyboard shortcut kbd tags                                              |
| `--radius-md`           | `16px`   | Numeric input boxes, layer thumbnail previews, tooltips                                             |
| `--radius-lg`           | `22px`   | Inspector section cards, template preview tiles                                                     |
| `--radius-xl`           | `28px`   | Floating side panels, asset drawer containers, dialogs                                              |
| `--radius-2xl`          | `36px`   | Main floating workspace islands and export preview shells                                           |
| `--radius-pill`         | `9999px` | **Primary standard** for all buttons, floating toolbars, zoom controls, segmented tabs, and sliders |
| `--radius-circle`       | `50%`    | Icon-only action buttons, color picker nodes, canvas rotation/resize handles, avatar badges         |

---

## 5. Tactile Elevation, Shadows & Sizing Tokens

### 5.1 Tactile Matte & Clay Shadows

```css
:root {
  /* Floating pill dock elevation */
  --shadow-floating-dock:
    0 18px 40px -10px rgba(0, 0, 0, 0.65), 0 4px 12px -2px rgba(0, 0, 0, 0.45),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);

  /* Tactile Olive Button (Soft 3D Matte Depth) */
  --shadow-olive-tactile:
    0 8px 20px -4px rgba(85, 107, 47, 0.55),
    inset 0 1.5px 1px 0 rgba(228, 235, 218, 0.28),
    inset 0 -2px 4px 0 rgba(19, 24, 10, 0.45);

  /* Pressed / Active Recessed Control */
  --shadow-recessed:
    inset 0 2px 5px rgba(0, 0, 0, 0.55),
    inset 0 0 0 1px rgba(166, 189, 134, 0.2);

  /* Canvas Artboard Shadow */
  --shadow-artboard: 0 24px 60px rgba(0, 0, 0, 0.75);
}
```
