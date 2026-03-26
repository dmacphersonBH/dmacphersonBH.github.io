import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { issuesData } from '../data/issues';

export default function Issue() {
  const { issueSlug } = useParams();
  
  // Find the current issue
  const issueIndex = issuesData.findIndex(i => i.slug === issueSlug);
  const issue = issuesData[issueIndex];

  // Logic for Next and Previous buttons
  // (Assuming index 0 is the newest issue, so index + 1 is an older issue)
  const prevIssue = issueIndex < issuesData.length - 1 ? issuesData[issueIndex + 1] : null;
  const nextIssue = issueIndex > 0 ? issuesData[issueIndex - 1] : null;

  if (!issue) {
    return (
      <div style={{ padding: '10rem 5%', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontWeight: 'normal', letterSpacing: '2px' }}>
          ISSUE NOT FOUND.
        </motion.h2>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. ISSUE HEADER */}
      <section style={{ padding: '8rem 5% 2rem 5%' }}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '1rem', letterSpacing: '3px', color: '#888', margin: '0 0 10px 0' }}
        >
          ISSUE 0{issue.id}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, fontWeight: 'normal', textTransform: 'uppercase', lineHeight: '1' }}
        >
          {issue.title}
        </motion.h1>
      </section>

      {/* 2. THE CANVA EMBED (THE GALLERY FRAME) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ width: '100%', padding: '0 5%', flex: 1, display: 'flex', flexDirection: 'column' }}
      >
        {issue.canvaUrl ? (
          <div style={{ 
            width: '100%', 
            height: '80vh', /* Gives the zine a massive, commanding frame without losing the footer */
            backgroundColor: '#111', 
            border: '1px solid #333',
            overflow: 'hidden'
          }}>
            <iframe 
              loading="lazy" 
              src={issue.canvaUrl} 
              style={{ width: '100%', height: '100%', border: 'none' }}
              title={`${issue.title} Canva Embed`}
              allowFullScreen="allowfullscreen" 
              allow="fullscreen"
            ></iframe>
          </div>
        ) : (
          /* The Cool Fallback */
          <div style={{ 
            width: '100%', height: '60vh', backgroundColor: '#111', border: '1px solid #333',
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem'
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 'normal', letterSpacing: '1px', color: '#666' }}>
              THIS ISSUE IS STILL IN THE DARKROOM.<br/>CHECK BACK SOON.
            </h2>
          </div>
        )}
      </motion.section>

      {/* 3. ISSUE NAVIGATION FOOTER */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #222', marginTop: '4rem' }}
      >
        <div>
          {prevIssue && (
            <Link to={`/issues/${prevIssue.slug}`} style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', letterSpacing: '2px', color: '#888', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#888'}>
              &larr; {prevIssue.title.toUpperCase()}
            </Link>
          )}
        </div>
        <div style={{ textAlign: 'right' }}>
          {nextIssue && (
            <Link to={`/issues/${nextIssue.slug}`} style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', letterSpacing: '2px', color: '#888', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#888'}>
              {nextIssue.title.toUpperCase()} &rarr;
            </Link>
          )}
        </div>
      </motion.section>

    </div>
  );
}