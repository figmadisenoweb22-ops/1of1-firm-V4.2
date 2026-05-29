"use client"

import { useState } from "react"
import { ArrowLeft, Play, ArrowRight } from "lucide-react"
import HamburgerMenu from "./hamburger-menu"

interface GoldenBackstageDetailProps {
  onNavigate?: (page: string) => void
}

const exclusiveContent = [
  {
    id: 1,
    title: "LUNA LLENA",
    subtitle: "BEFORE THE SHOW",
    duration: "11:32",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80"
  },
  {
    id: 2,
    title: "ANIMAL",
    subtitle: "BACKSTAGE INTERVIEW",
    duration: "08:47",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
  },
  {
    id: 3,
    title: "BABADOOK",
    subtitle: "INSIDE THE DRESSING ROOM",
    duration: "09:15",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80"
  },
  {
    id: 4,
    title: "CELESTIAL",
    subtitle: "ARTIST CONVERSATIONS",
    duration: "07:21",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80"
  }
]

const moments = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=80",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=300&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=300&q=80",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&q=80",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=300&q=80"
]

export default function GoldenBackstageDetail({ onNavigate }: GoldenBackstageDetailProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 md:p-6">
        <button onClick={() => onNavigate?.("home")} className="cursor-pointer">
          <img 
            src="/logo.png" 
            alt="1 OF 1 FIRM" 
            className="h-10 md:h-12 w-auto"
          />
        </button>
        <div className="flex items-center gap-4">
          <button className="text-amber-500 text-xs tracking-[0.15em] hover:text-amber-400 transition-colors hidden md:block">
            VIP ACCESS
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white p-2 hover:text-amber-500 transition-colors"
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <div className="w-6 h-px bg-current" />
              <div className="w-6 h-px bg-current" />
            </div>
          </button>
        </div>
      </header>

      {/* Hero Section - Grid 2 columnas en mobile */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] pt-20 md:pt-0">
        <div className="grid grid-cols-2 md:grid-cols-1 min-h-[50vh] md:min-h-[70vh]">
          {/* Contenido - Columna izquierda en mobile */}
          <div className="relative z-10 flex flex-col justify-end p-3 md:p-12 pb-6 md:pb-16 bg-gradient-to-r from-black via-black/90 to-transparent md:bg-transparent md:absolute md:inset-0 md:flex md:items-end">
            <div>
              <h1 className="text-2xl md:text-7xl lg:text-8xl font-light tracking-tight text-amber-100">
                GOLDEN
              </h1>
              <h1 className="text-2xl md:text-7xl lg:text-8xl font-light tracking-tight text-amber-100">
                BACKSTAGE
              </h1>
              <p className="mt-2 md:mt-6 text-white/60 text-[8px] md:text-sm tracking-[0.15em] md:tracking-[0.2em]">
                INSIDE THE UNIVERSE.
              </p>
            </div>
          </div>
          
          {/* Imagen - Columna derecha en mobile */}
          <div className="relative md:absolute md:inset-0 md:-z-10 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-right md:bg-center"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0004-L3aDIdQwHCFiyitSfuKr4ora1ur0sB.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'right center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/70 md:bg-gradient-to-t md:from-black md:via-black/60 md:to-black/30" />
          </div>
        </div>
      </section>

      {/* Exclusive Content Section */}
      <section className="px-4 md:px-12 py-8 md:py-16">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xs md:text-sm tracking-[0.2em] text-white/80">EXCLUSIVE CONTENT</h2>
          <button className="flex items-center gap-2 text-amber-500 text-[10px] md:text-xs tracking-[0.15em] hover:text-amber-400 transition-colors">
            VIEW ALL
            <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {exclusiveContent.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-amber-500/20">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                
                {/* Play button and duration */}
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3 flex items-center justify-between">
                  <button className="w-6 md:w-8 h-6 md:h-8 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-all">
                    <Play className="w-2 md:w-3 h-2 md:h-3 ml-0.5" fill="currentColor" />
                  </button>
                  <span className="text-white/80 text-[10px] md:text-xs">{video.duration}</span>
                </div>
              </div>
              
              <div className="mt-2 md:mt-3">
                <h3 className="text-white text-xs md:text-sm font-medium tracking-wide line-clamp-1">{video.title}</h3>
                <p className="text-white/50 text-[10px] md:text-xs tracking-wide mt-0.5 md:mt-1 line-clamp-1">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* Moments Section */}
      <section className="px-4 md:px-12 py-8 md:py-16">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xs md:text-sm tracking-[0.2em] text-white/80">MOMENTS</h2>
          <button className="flex items-center gap-2 text-amber-500 text-[10px] md:text-xs tracking-[0.15em] hover:text-amber-400 transition-colors">
            VIEW GALLERY
            <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-1.5 md:gap-3">
          {moments.slice(0, 5).map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-md md:rounded-lg border border-amber-500/10 cursor-pointer group"
            >
              <img
                src={image}
                alt={`Moment ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1.5 md:gap-3 mt-1.5 md:mt-3">
          {moments.slice(5, 10).map((image, index) => (
            <div
              key={index + 5}
              className="aspect-square overflow-hidden rounded-md md:rounded-lg border border-amber-500/10 cursor-pointer group"
            >
              <img
                src={image}
                alt={`Moment ${index + 6}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Tagline */}
      <section className="py-8 md:py-16 text-center">
        <p className="text-amber-500/80 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em]">
          CAPTURED DURING THE EXPERIENCE.
        </p>
        <div className="w-8 md:w-12 h-px bg-amber-500/30 mx-auto mt-4 md:mt-6" />
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-6 md:py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-white/40 text-[10px] md:text-xs tracking-wider">
          <p>© 10F1 FIRM 2026</p>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">TERMS</a>
            <a href="#" className="hover:text-amber-500 transition-colors">PRIVACY</a>
          </div>
        </div>
      </footer>

      {/* Hamburger Menu */}
      <HamburgerMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={onNavigate}
      />

      {/* Back Button */}
      <button 
        onClick={() => onNavigate?.("home")}
        className="fixed top-20 left-4 z-30 text-white/70 hover:text-amber-500 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
    </div>
  )
}
