function Contact() {
  const containerStyle = {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
    textAlign: 'center',
  };
  const detailsStyle = {
    marginTop: '20px',
    lineHeight: '1.6',
    textAlign: 'left',
    display: 'inline-block',
  };
  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us using the information below.</p>
      <div style={detailsStyle}>
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        {/* Placeholder for future contact form */}
        <p>Contact form will be added here.</p>
      </div>
    </div>
  );
}

export default Contact;
