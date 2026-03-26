import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { issuesData, currentIssue } from '../data/issues';

export default function Home() {
  return (
    <div style={{ paddingBottom: '4rem', overflowX: 'hidden' }}>
      
      {/* 1. THE HERO COLLAGE */}
      <section className="hero-collage">
        
        {/* Left Column */}
        <div className="col col-left" style={{ width: '100%' }}>
          {/* Title slides in from the left */}
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ fontSize: 'clamp(2.2rem, 8vw, 5rem)', margin: '0 0 20px 0', lineHeight: '1.1', letterSpacing: '2px', fontWeight: 'normal', wordWrap: 'break-word' }}
          >
            THE<br/>PERENNIAL
          </motion.h1>
          
          {/* Image 1: Fades and drifts up slowly */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{ overflow: 'hidden' }}
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="/images/hero-image 1.png" 
              alt="Perennial Cover Art" 
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', backgroundColor: '#222', display: 'block' }} 
            />
          </motion.div>
        </div>
        
        {/* Middle Column */}
        {/* Deliberately delayed so it drifts in AFTER the left column */}
        <div className="col col-mid" style={{ width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            style={{ overflow: 'hidden', height: '100%' }}
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="/images/hero-image 2.png" 
              alt="Perennial Featured Art" 
              style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', backgroundColor: '#222', display: 'block' }} 
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="col col-right" style={{ width: '100%' }}>
          {/* Deliberately delayed so it drifts in AFTER the middle column */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            style={{ overflow: 'hidden' }}
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="/images/hero-image 3.png" 
              alt="Perennial Supplemental Art" 
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', backgroundColor: '#222', display: 'block' }} 
            />
          </motion.div>
          
          {/* Subtext fades in last */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ fontSize: '0.8rem', letterSpacing: '1px', textAlign: 'right', marginTop: '10px' }}
          >
            BRANKSOME HALL'S LITERARY<br/>AND ART MAGAZINE
          </motion.p>
        </div>
        
      </section>

      {/* 2. READ CURRENT ISSUE BUTTON */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', padding: '4rem 5%' }}
      >
        <Link to={`/issues/${currentIssue.slug}`} style={{ 
          display: 'inline-block', padding: '1rem 2rem', border: '1px solid white', 
          fontSize: 'clamp(1rem, 3vw, 1.2rem)', letterSpacing: '2px', textTransform: 'uppercase', transition: 'background 0.3s', maxWidth: '100%' 
        }} onMouseOver={(e) => e.target.style.background = '#222'} onMouseOut={(e) => e.target.style.background = 'transparent'}>
          Read Current Issue
        </Link>
      </motion.section>

      {/* 3. ABOUT US SECTION */}
      <section style={{ maxWidth: '1500px', margin: '0 auto', padding: '0 5% 4rem 5%', display: 'flex', flexWrap: 'wrap', gap: '2rem', borderBottom: '1px solid #222', overflow: 'hidden' }}>
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ flex: '1 1 250px', textAlign: 'left', fontSize: 'clamp(2.5rem, 12vw, 9rem)', margin: 0, fontWeight: 'normal', wordWrap: 'break-word' }}
        >
          ABOUT US
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{ flex: '1 1 250px', textAlign: 'left', fontSize: 'clamp(1.2rem, 4vw, 4rem)', lineHeight: '1.2', textTransform: 'uppercase' }}
        >
          The Perennial is Branksome Hall's student-led magazine that celebrates creativity in all its forms. 
          Through writing, art, and photography, we give students a space to be seen, read, and remembered.
        </motion.div>
      </section>

      {/* 4. PAST ISSUES GRID */}
      <section style={{ maxWidth: '1200px', margin: '4rem auto 0', padding: '0 5%' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal', letterSpacing: '2px', marginBottom: '2rem' }}>PAST ISSUES</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
          {issuesData.map((issue, index) => (
            <Link key={issue.id} to={`/issues/${issue.slug}`}>
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                {/* The Image Container with the cool hover zoom */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  style={{ 
                    overflow: 'hidden', 
                    aspectRatio: '9 / 16', /* Keeps all covers uniformly tall and elegant */
                    marginBottom: '1rem', 
                    cursor: 'pointer', 
                    backgroundColor: '#111',
                    border: '1px solid #333'
                  }}
                >
                  {/* If the issue has an image, show it. Otherwise, show the placeholder text. */}
                  {issue.coverImage ? (
                    <img 
                      src={issue.coverImage} 
                      alt={`${issue.title} Cover`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                      Cover #{issue.id}
                    </div>
                  )}
                </motion.div>
                
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'normal' }}>{issue.title}</h4>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}