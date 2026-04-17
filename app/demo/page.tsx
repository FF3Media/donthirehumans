'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/* ─── Option A: Animated Gradient Mesh ─── */
function OptionA() {
  return (
    <div style={{ position: 'relative', height: '420px', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        @keyframes blobA { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(60px,-40px) scale(1.1)} 66%{transform:translate(-40px,30px) scale(0.95)} }
        @keyframes blobB { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-80px,50px) scale(1.05)} 66%{transform:translate(50px,-60px) scale(1.1)} }
        @keyframes blobC { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,60px) scale(1.08)} }
      `}</style>
      {/* blobs */}
      <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(36,138,61,0.18) 0%, transparent 70%)', top:'-100px', left:'-50px', animation:'blobA 8s ease-in-out infinite' }} />
      <div style={{ position:'absolute', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(36,138,61,0.12) 0%, transparent 70%)', bottom:'-80px', right:'-20px', animation:'blobB 10s ease-in-out infinite' }} />
      <div style={{ position:'absolute', width:'350px', height:'350px', borderRadius:'50%', background:'radial-gradient(circle, rgba(100,200,120,0.1) 0%, transparent 70%)', top:'50px', right:'30%', animation:'blobC 12s ease-in-out infinite' }} />
      <div style={{ position:'relative', textAlign:'center' }}>
        <p style={{ fontFamily:'system-ui', fontWeight:800, fontSize:'42px', letterSpacing:'-0.04em', color:'#1D1D1F', margin:0, lineHeight:1 }}>AI Agents that power</p>
        <p style={{ fontFamily:'system-ui', fontWeight:800, fontSize:'42px', letterSpacing:'-0.04em', color:'#1A7A35', margin:0, lineHeight:1 }}>your business.</p>
        <p style={{ fontFamily:'system-ui', fontSize:'16px', color:'#6E6E73', marginTop:'12px' }}>Zero salaries.</p>
      </div>
    </div>
  )
}

/* ─── Option B: Floating Pixel Agents ─── */
const agentColors = ['#E8F5E9','#E3F2FD','#FFF3E0','#FCE4EC','#F3E5F5','#E0F7FA','#FFF8E1','#F1F8E9','#EDE7F6']
const agentLabels = ['Frank','Musa','Emmy','Clark','Barry','Bruce','Vera','Hannah','Eve']

function FloatingAgent({ x, y, delay, color, label }: { x: string; y: string; delay: number; color: string; label: string }) {
  return (
    <motion.div
      animate={{ y: ['0px', '-14px', '0px'] }}
      transition={{ duration: 3.5 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay }}
      style={{ position: 'absolute', left: x, top: y, textAlign: 'center' }}
    >
      <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: color, border: '1px solid rgba(0,0,0,0.08)', marginBottom: '4px' }} />
      <span style={{ fontFamily: 'system-ui', fontSize: '10px', color: '#6E6E73', fontWeight: 500 }}>{label}</span>
    </motion.div>
  )
}

function OptionB() {
  const positions = [
    { x: '4%', y: '15%' }, { x: '88%', y: '10%' }, { x: '15%', y: '60%' },
    { x: '78%', y: '55%' }, { x: '46%', y: '5%' }, { x: '30%', y: '72%' },
    { x: '60%', y: '70%' }, { x: '2%', y: '42%' }, { x: '90%', y: '38%' },
  ]
  return (
    <div style={{ position: 'relative', height: '420px', overflow: 'hidden', backgroundColor: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {positions.map((p, i) => (
        <FloatingAgent key={i} x={p.x} y={p.y} delay={i * 0.3} color={agentColors[i]} label={agentLabels[i]} />
      ))}
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#1D1D1F', margin: 0, lineHeight: 1 }}>AI Agents that power</p>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#1A7A35', margin: 0, lineHeight: 1 }}>your business.</p>
        <p style={{ fontFamily: 'system-ui', fontSize: '16px', color: '#6E6E73', marginTop: '12px' }}>Zero salaries.</p>
      </div>
    </div>
  )
}

/* ─── Option C: Particle Network ─── */
function OptionC() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2.5 + 1,
    }))

    const c = canvas
    const cx = ctx
    let frame: number
    function draw() {
      cx.clearRect(0, 0, c.width, c.height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > c.width) p.vx *= -1
        if (p.y < 0 || p.y > c.height) p.vy *= -1
        cx.beginPath()
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        cx.fillStyle = 'rgba(36,138,61,0.5)'
        cx.fill()
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 100) {
            cx.beginPath()
            cx.moveTo(p.x, p.y)
            cx.lineTo(q.x, q.y)
            cx.strokeStyle = `rgba(36,138,61,${0.15 * (1 - d / 100)})`
            cx.lineWidth = 0.8
            cx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div style={{ position: 'relative', height: '420px', overflow: 'hidden', backgroundColor: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1 }}>AI Agents that power</p>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#1A7A35', margin: 0, lineHeight: 1 }}>your business.</p>
        <p style={{ fontFamily: 'system-ui', fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginTop: '12px' }}>Zero salaries.</p>
      </div>
    </div>
  )
}

/* ─── Option D: Spline 3D ─── */
function OptionD() {
  return (
    <div style={{ position: 'relative', height: '420px', overflow: 'hidden', backgroundColor: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,-20px) scale(1.05)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-25px,25px) scale(0.97)} }
        @keyframes orb3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,30px) scale(1.03)} }
      `}</style>
      <div style={{ position:'absolute', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle at 40% 40%, rgba(36,138,61,0.5), rgba(36,138,61,0.05) 60%, transparent)', filter:'blur(40px)', top:'50%', left:'50%', transform:'translate(-50%,-50%)', animation:'orb1 6s ease-in-out infinite' }} />
      <div style={{ position:'absolute', width:'200px', height:'200px', borderRadius:'50%', background:'radial-gradient(circle, rgba(100,220,130,0.3), transparent 70%)', filter:'blur(30px)', top:'20%', right:'25%', animation:'orb2 8s ease-in-out infinite' }} />
      <div style={{ position:'absolute', width:'150px', height:'150px', borderRadius:'50%', background:'radial-gradient(circle, rgba(36,138,61,0.4), transparent 70%)', filter:'blur(20px)', bottom:'20%', left:'25%', animation:'orb3 7s ease-in-out infinite' }} />
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 80%)' }} />
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1 }}>AI Agents that power</p>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#1A7A35', margin: 0, lineHeight: 1 }}>your business.</p>
        <p style={{ fontFamily: 'system-ui', fontSize: '16px', color: 'rgba(255,255,255,0.45)', marginTop: '12px' }}>Zero salaries.</p>
      </div>
    </div>
  )
}

/* ─── Option E: Video Loop ─── */
function OptionE() {
  return (
    <div style={{ position: 'relative', height: '420px', overflow: 'hidden', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }}
        src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }} />
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#fff', margin: 0, lineHeight: 1 }}>AI Agents that power</p>
        <p style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '42px', letterSpacing: '-0.04em', color: '#1A7A35', margin: 0, lineHeight: 1 }}>your business.</p>
        <p style={{ fontFamily: 'system-ui', fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginTop: '12px' }}>Zero salaries.</p>
      </div>
    </div>
  )
}

/* ─── Page ─── */
const options = [
  { label: 'A', title: 'Animated Gradient Mesh', desc: 'Soft colour blobs, light mode, Apple-style', component: <OptionA /> },
  { label: 'B', title: 'Floating Pixel Agents', desc: 'Your agents drifting in the background', component: <OptionB /> },
  { label: 'C', title: 'Particle Network', desc: 'Neural-network dots, dark mode, techy/AI', component: <OptionC /> },
  { label: 'D', title: 'Glowing Orbs', desc: 'Blurred 3D-style orbs, dark & premium', component: <OptionD /> },
  { label: 'E', title: 'Video Loop', desc: 'Cinematic background video', component: <OptionE /> },
]

export default function DemoPage() {
  return (
    <div style={{ backgroundColor: '#111', minHeight: '100vh', padding: '48px 24px' }}>
      <h1 style={{ fontFamily: 'system-ui', fontWeight: 700, fontSize: '28px', color: '#fff', textAlign: 'center', marginBottom: '8px', letterSpacing: '-0.03em' }}>Banner Options</h1>
      <p style={{ fontFamily: 'system-ui', fontSize: '14px', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: '48px' }}>Pick your favourite — reply with A, B, C, D, or E</p>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {options.map(opt => (
          <div key={opt.label}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: '20px', color: '#1A7A35' }}>Option {opt.label}</span>
              <span style={{ fontFamily: 'system-ui', fontWeight: 600, fontSize: '16px', color: '#fff' }}>{opt.title}</span>
              <span style={{ fontFamily: 'system-ui', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{opt.desc}</span>
            </div>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              {opt.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
