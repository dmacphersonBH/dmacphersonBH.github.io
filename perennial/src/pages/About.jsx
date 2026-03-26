import { motion } from 'framer-motion';

// A simple array of team members makes it super easy for you to update next year!
const teamMembers = [
  { name: "Jane Doe", role: "Editor-in-Chief" },
  { name: "Sarah Smith", role: "Art Director" },
  { name: "Maya Johnson", role: "Head of Writing" },
  { name: "Emily Chen", role: "Head of Photography" },
  { name: "Chloe Williams", role: "Lead Designer" },
  { name: "Ms. Anderson", role: "Faculty Advisor" }
];

export default function About() {
  return (
    <div style={{ padding: '8rem 5% 6rem 5%', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. THE HERO MANIFESTO */}
      <section style={{ borderBottom: '1px solid #222', paddingBottom: '4rem', marginBottom: '4rem' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', margin: '0 0 2rem 0', fontWeight: 'normal', textTransform: 'uppercase', lineHeight: '1' }}
        >
          ABOUT US
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: '1.2', maxWidth: '1200px', margin: 0, textTransform: 'uppercase', color: '#ccc' }}
        >
          We are Branksome Hall's student-led literary and art magazine. We curate, design, and publish the voices that define our generation.
        </motion.p>
      </section>

      {/* 2. THE HISTORY SECTION */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginBottom: '6rem', borderBottom: '1px solid #222', paddingBottom: '6rem' }}>
        
        {/* The Title Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 300px' }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 'normal', letterSpacing: '2px', margin: 0 }}>OUR HISTORY</h2>
        </motion.div>

        {/* The Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: 0, color: '#aaa' }}>
            The Perennial was founded with a singular mission: to provide a blank canvas for the brilliant minds of Branksome Hall. For years, we have served as the definitive archive of student creativity, capturing the evolving perspectives, artistic movements, and narratives of our student body.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: 0, color: '#aaa' }}>
            From poetry and prose to photography, digital art, and traditional media, every issue is a time capsule. We believe that art is not just meant to be created—it is meant to be shared, discussed, and remembered.
          </p>
        </motion.div>

      </section>

      {/* 3. THE EDITORIAL BOARD */}
      <section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '2rem', fontWeight: 'normal', letterSpacing: '2px', marginBottom: '3rem' }}
        >
          THE EDITORIAL BOARD
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '3rem' }}>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              style={{ borderTop: '1px solid #333', paddingTop: '1rem' }}
            >
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', fontWeight: 'normal' }}>{member.name}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#888', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}