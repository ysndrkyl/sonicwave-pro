# SonicWave Pro — Scrollytelling Landing Page

A premium Next.js 14 scrollytelling landing page with a scroll-synced canvas animation, multi-language support (EN/DE/TR), and a dark, high-end aesthetic.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Image Sequence Setup

The scrollytelling engine expects **300 frames** at:

```
/public/assets/sequence/ezgif-frame-0001.png
/public/assets/sequence/ezgif-frame-0002.png
...
/public/assets/sequence/ezgif-frame-0003.png
```

### From your provided frames (300 images)

You provided 300 frames. To fill all 300 slots, you have two options:

**Option A — Rename & interpolate (recommended)**

Use FFmpeg to interpolate missing frames:
```bash
# First rename your existing frames to fit the numbering scheme
# Then interpolate to 300 frames using minterpolate
ffmpeg -i ezgif-frame-%01d.png -vf minterpolate=fps=30:mi_mode=mci output_%04d.png
```

**Option B — Use the provided frames directly (quick demo)**

Rename your 300 files sequentially:
```
→ ezgif-frame-0001.png
→ ezgif-frame-0002.png
→ ezgif-frame0003.png
...
```

Then update `TOTAL_FRAMES` in `components/CanvasScroll.tsx` to `300`.

**Option C — Point to different naming scheme**

Edit the `frameUrl` function in `CanvasScroll.tsx`:
```typescript
const frameUrl = (n: number) => `/assets/sequence/YOUR_NAME_${n}.png`;
```

---

## Project Structure

```
sonicwave-pro/
├── app/
│   ├── layout.tsx          # Root layout with fonts + LanguageProvider
│   ├── page.tsx            # All sections composed
│   └── globals.css         # Fonts, base styles, grain overlay
├── components/
│   ├── Navbar.tsx          # Sticky blurred nav + mobile menu
│   ├── Hero.tsx            # Large type hero with scroll parallax
│   ├── CanvasScroll.tsx    # ★ The scrollytelling engine
│   ├── About.tsx           # Brand philosophy + animated stats
│   ├── Services.tsx        # Hover cards grid
│   ├── Projects.tsx        # List-style project showcase
│   ├── Contact.tsx         # Dark form with animated inputs
│   ├── Footer.tsx
│   ├── CustomCursor.tsx    # Spring-tracked custom cursor
│   └── LanguageSwitcher.tsx
├── lib/
│   ├── i18n.ts             # All EN/DE/TR translations
│   └── LanguageContext.tsx # React context for language state
├── public/
│   └── assets/sequence/    # ← PUT YOUR 300 FRAMES HERE
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Canvas Architecture

The `CanvasScroll` component works as follows:

1. **Preloading**: On mount, all 300 `Image` objects are created simultaneously. A loading screen with progress bar is shown until complete.

2. **Scroll tracking**: Framer Motion's `useScroll` with `offset: ["start start", "end end"]` on the 1440px-tall sticky container gives `scrollYProgress` from 0→1.

3. **Frame mapping**: `useTransform(scrollYProgress, [0,1], [0, 300])` maps scroll to frame index.

4. **Smooth rendering**: A `requestAnimationFrame` loop lerps `currentFrame` toward `targetFrame` at 15% per tick — creating buttery interpolation even at fast scroll speeds. `alpha: false` context prevents canvas flicker.

5. **Text overlays**: `useMotionValueEvent` fires on every frame change, checking the active OVERLAYS array and animating in/out with `AnimatePresence`.

---

## Languages

Toggle between EN / DE / TR using the language switcher in the navbar. All content — nav links, section headings, body text, overlay text, form labels — updates instantly via React context.

To add a new language, extend `lib/i18n.ts` and add the new code to `LanguageSwitcher.tsx`.

---

## Customization

| What | Where |
|------|-------|
| Frame count | `TOTAL_FRAMES` in `CanvasScroll.tsx` |
| Overlay timing (frames) | `OVERLAYS` array in `CanvasScroll.tsx` |
| Brand colors | `tailwind.config.ts` → `ember`, `plasma` |
| Scroll section height | `style={{ height }}` on the sticky section |
| Fonts | `globals.css` Google Fonts import |
| All text content | `lib/i18n.ts` |

---

## Performance Notes

- Canvas uses `alpha: false` for hardware-optimized compositing
- `devicePixelRatio` scaling for Retina sharpness
- Images are preloaded to `HTMLImageElement` objects (not decoded on demand)
- RAF lerp ensures no jank even on trackpad fast-swipe
- `useMotionValueEvent` avoids React re-renders on every frame

-cruxestack
