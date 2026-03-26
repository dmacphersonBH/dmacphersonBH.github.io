import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { issuesData } from '../data/issues';

export default function Archive() {
  return (
    <div style={{ padding: '8rem 5% 6rem 5%', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. THE PAGE HEADER */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          fontSize: 'clamp(3rem, 10vw, 7rem)', 
          margin: '0 0 4rem 0', 
          fontWeight: 'normal', 
          textTransform: 'uppercase', 
          lineHeight: '1',
          borderBottom: '1px solid #222',
          paddingBottom: '2rem'
        }}
      >
        The Archive
      </motion.h1>

      {/* 2. THE EXPANSIVE GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
        {issuesData.map((issue, index) => (
          <Link key={issue.id} to={`/issues/${issue.slug}`}>
            
            {/* Staggered entrance based on the index */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              
              {/* The Hover Frame */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                style={{ 
                  overflow: 'hidden', 
                  aspectRatio: '3 / 4', /* Slightly wider aspect ratio than the homepage for a majestic gallery feel */
                  backgroundColor: '#111',
                  border: '1px solid #333'
                }}
              >
                {issue.coverImage ? (
                  <img 
                    src={issue.coverImage} 
                    alt={`${issue.title} Cover`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '1.2rem', letterSpacing: '2px' }}>
                    ISSUE 0{issue.id}
                  </div>
                )}
              </motion.div>
              
              {/* The Issue Typography */}
              <div>
                <p style={{ margin: '0 0 5px 0', fontSize: '0.9rem', color: '#888', letterSpacing: '2px' }}>
                  ISSUE 0{issue.id}
                </p>
                <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'normal', textTransform: 'uppercase' }}>
                  {issue.title}
                </h2>
              </div>

            </motion.div>

          </Link>
        ))}
      </div>

    </div>
  );
}