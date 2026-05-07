import 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <p>&copy; 2026 Your Company. All rights reserved.</p>
      <div>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;