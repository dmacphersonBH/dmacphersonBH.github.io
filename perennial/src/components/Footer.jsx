export default function Footer() {
  return (
    <footer style={{ padding: '3rem 2rem', borderTop: '1px solid #222', textAlign: 'center', marginTop: 'auto' }}>
      <p style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '1px' }}>
        © {new Date().getFullYear()} PERENNIAL. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}