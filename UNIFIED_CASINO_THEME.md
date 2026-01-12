# Unified Casino Theme Design System

## Overview
All 5 games (Mines, Slots, Plinko, Diamonds, Roulette) will share a cohesive, professional casino aesthetic with consistent design language, animations, and user experience.

## Color Palette
- **Primary Dark**: #0F1419 (Deep black background)
- **Accent Gold**: #D4AF37 (Premium gold highlights)
- **Accent Cyan**: #00D9FF (Modern cyan accents)
- **Accent Purple**: #9D4EDD (Royal purple)
- **Success Green**: #00FF41 (Win indicators)
- **Alert Red**: #FF006E (Loss/warning indicators)
- **Text Light**: #FFFFFF (Primary text)
- **Text Muted**: #A0A0A0 (Secondary text)

## Layout Structure (All Games)
```
┌─────────────────────────────────────────────────────┐
│  Header: Game Title | Balance | Settings            │
├──────────────────┬──────────────────────────────────┤
│                  │                                  │
│  Control Panel   │      Game Display Area           │
│  (Left Side)     │      (Right Side - Main Game)    │
│                  │                                  │
│  - Bet Amount    │                                  │
│  - Game Options  │                                  │
│  - Play Button   │                                  │
│  - Stats         │                                  │
│                  │                                  │
├──────────────────┴──────────────────────────────────┤
│  Footer: Last Win | Multiplier | Game Info         │
└─────────────────────────────────────────────────────┘
```

## Typography
- **Headings**: Poppins Bold (24-32px)
- **Subheadings**: Poppins SemiBold (18-20px)
- **Body Text**: Roboto Regular (14-16px)
- **Numbers/Stats**: Roboto Mono Bold (16-20px)

## UI Components (Consistent Across All Games)

### Buttons
- **Play Button**: Bright green (#00FF41) with gold border, hover glow effect
- **Secondary Buttons**: Gold (#D4AF37) with dark background
- **Control Buttons**: Cyan (#00D9FF) with subtle glow

### Cards/Panels
- **Background**: Dark with gradient overlay
- **Border**: Gold or cyan accent border with glow effect
- **Shadow**: Soft glow shadow for depth

### Input Fields
- **Background**: Darker shade with gold border
- **Text**: White with gold placeholder text
- **Focus State**: Cyan glow

## Animations
- **Button Hover**: Subtle scale (1.05x) + glow intensification
- **Game Start**: Fade-in with slide animation
- **Win Animation**: Gold particle effects + celebratory pulse
- **Loss Animation**: Red flash + fade-out
- **Transitions**: 0.3s ease-in-out for smooth interactions

## Game-Specific Themes (While Maintaining Unified Look)

### Mines
- Dark grid background with gold-bordered tiles
- Cyan glow on revealed tiles
- Red glow on mines

### Slots (Carnival Cash)
- Theatrical red curtain background
- Gold frame around reels
- Carnival-themed symbols with gold accents

### Plinko
- Dark background with cyan pegs
- Gold-bordered multiplier slots at bottom
- Ball animation with glow trail

### Diamonds
- Dark grid with gem symbols
- Gold borders on selected gems
- Cyan glow on matches

### Roulette
- Green felt table (classic casino)
- Gold-framed wheel
- Professional betting layout with gold accents

## Responsive Design
- **Desktop**: Full two-panel layout
- **Tablet**: Stacked layout with controls on top
- **Mobile**: Full-screen game with collapsible controls

## Accessibility
- High contrast text (WCAG AA compliant)
- Clear focus states for keyboard navigation
- Readable font sizes (minimum 14px)
- Color-blind friendly indicators (not relying on color alone)

## Professional Elements
- Loading screens with game branding
- Smooth transitions between games
- Real-time stats and multiplier display
- Professional sound effect indicators (muted by default)
- Help/Info panels for each game

## Consistency Rules
1. All games use the same color palette
2. All buttons follow the same styling
3. All animations use the same timing (0.3s)
4. All layouts follow the two-panel structure
5. All games display stats in the same format
6. All games have the same header/footer design
