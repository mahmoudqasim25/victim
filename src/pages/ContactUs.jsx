const contactPageStyles = {
  page: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    width: '100%',
    maxWidth: '720px',
    padding: '32px',
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  heading: {
    margin: '0 0 12px',
    color: '#111827',
  },
  intro: {
    margin: '0 0 12px',
    color: '#4b5563',
    lineHeight: '1.6',
  },
  helperText: {
    margin: '0 0 24px',
    color: '#6b7280',
    lineHeight: '1.6',
    fontSize: '14px',
  },
  contactList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  contactItem: {
    padding: '16px',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    backgroundColor: '#f9fafb',
  },
  label: {
    margin: '0 0 8px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  value: {
    margin: 0,
    color: '#1f2937',
    lineHeight: '1.6',
    wordBreak: 'break-word',
  },
};

const contactItems = [
  {
    label: 'Phone',
    value: '+1 (555) 010-2040',
    isVisible: true,
  },
  {
    label: 'Email',
    value: 'recruitment@example.com',
    isVisible: true,
  },
  {
    label: 'WhatsApp',
    value: '+1 (555) 010-2041',
    isVisible: true,
  },
  {
    label: 'Location',
    value: 'Sample Recruitment Desk, 250 Market Street, Suite 400, San Francisco, CA 94105, United States',
    isVisible: true,
  },
];

function ContactUs() {
  const visibleContactItems = contactItems.filter((item) => item.isVisible);

  return (
    <div style={contactPageStyles.page}>
      <section style={contactPageStyles.card}>
        <h1 style={contactPageStyles.heading}>Contact Us</h1>
        <p style={contactPageStyles.intro}>
          Reach our recruitment team using the sample contact details below for general hiring-related enquiries.
        </p>
        <p style={contactPageStyles.helperText}>
          These are placeholder details for layout and content review only, so each item can be updated or hidden later without redesigning the page.
        </p>

        <div style={contactPageStyles.contactList}>
          {visibleContactItems.map((item) => (
            <article key={item.label} style={contactPageStyles.contactItem}>
              <h2 style={contactPageStyles.label}>{item.label}</h2>
              <p style={contactPageStyles.value}>{item.value}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
