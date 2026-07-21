import { NavLink, Outlet } from 'react-router-dom'

'use client';
import Navbar from '@/components/layout/Navbar';

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="text-xl font-semibold tracking-tight text-slate-900">
            Grandir
          </NavLink>
          <header className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
            header placeholder
          </header>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Outlet />
        </div>
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border/80 sm:p-8">
            {/* {children} */}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white/70">
        Footer Placeholder
      </footer>
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <h3 className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-lg font-bold tracking-tight text-transparent">
                grandir
              </h3>
              <p className="text-sm text-foreground/60">
                Empowering local businesses with beautiful digital storefronts.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-foreground/60 hover:text-foreground transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                    Order Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Get in Touch</h4>
              <p className="text-sm text-foreground/60">
                Ready to grow your business?
              </p>
              <button className="group relative inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                <span className="relative z-10">Let&apos;s Talk</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-foreground/50 sm:flex-row sm:text-left">
              <p>&copy; 2024 Grandir. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-foreground/80 transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground/80 transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground/80 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default AppLayout



// // import { NavLink, Outlet } from 'react-router-dom'

// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/layout/Navbar'

// function AppLayout() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <Navbar />

//       <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//           <Outlet />
//         </div>
//       </main>

//       <footer className="border-t border-slate-200 bg-white/70">Footer Placeholder</footer>
//     </div>
//   )
// }

// export default AppLayout

// function AppLayout() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900">
//       <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
//         <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//           <NavLink to="/" className="text-xl font-semibold tracking-tight text-slate-900">
//             Grandir
//           </NavLink>
//           <header className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
//             header placeholder
//           </header>
//         </div>
//       </header>

//       <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
//           <Outlet />
//         </div>
//       </main>

//       <footer className="border-t border-slate-200 bg-white/70">
//         Footer Placeholder
//       </footer>
//     </div>
//   )
// }

// export default AppLayout
