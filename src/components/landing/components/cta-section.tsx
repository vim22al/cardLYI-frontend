import React from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Button } from '#/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic background that adapts to theme */}
      <div className="absolute inset-0 bg-primary/95 dark:bg-primary/90 -z-10"></div>
      
      {/* Animated decorative glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-white/10 blur-[120px] rounded-full point-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-white/10 blur-[120px] rounded-full point-events-none -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-bold uppercase tracking-wider backdrop-blur-md mb-4 shadow-xl">
            <Sparkles className="size-4 text-primary-foreground" />
            <span>Start your free trial today</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-primary-foreground tracking-tight leading-[1.1]">
            Ready to turn business cards into <br className="hidden md:block" />
            <span className="opacity-80">real connections?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Join thousands of professionals who are saving hours of manual data entry and closing more deals through automated outreach.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button size="lg" className="h-14 px-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto text-lg font-black shadow-2xl transition-all duration-300 transform hover:scale-105" asChild>
              <Link to="/auth/signup">
                Start Scanning for Free
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full sm:w-auto text-lg font-bold backdrop-blur-sm transition-all duration-300">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-10 border-t border-primary-foreground/10">
            {['No credit card required', '14 days free trial', 'Cancel anytime'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/40" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
