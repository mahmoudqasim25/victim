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
  sectionHeading: {
    margin: '0 0 12px',
    color: '#111827',
    fontSize: '20px',
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
  branchSection: {
    marginTop: '32px',
  },
  branchList: {
    display: 'grid',
    gap: '16px',
  },
  branchItem: {
    padding: '16px',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    backgroundColor: '#f9fafb',
  },
  branchName: {
    margin: '0 0 8px',
    color: '#111827',
    fontSize: '16px',
  },
  branchDetail: {
    margin: '0 0 4px',
    color: '#1f2937',
    lineHeight: '1.6',
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

const branchItems = [
  {
    locationName: 'North America Hiring Hub',
    address: 'Sample office address: 250 Market Street, Suite 400, San Francisco, CA 94105, United States',
    supportHours: 'Sample support hours: Monday to Friday, 9:00 AM to 5:00 PM local time',
    notes: 'Placeholder branch details for layout review only. Final office information is still pending approval.',
  },
  {
    locationName: 'Europe Recruitment Desk',
    address: 'Sample office address: 18 Bishopsgate, Level 6, London EC2N 4BQ, United Kingdom',
    supportHours: 'Sample support hours: Monday to Friday, 8:30 AM to 4:30 PM local time',
    notes: 'Placeholder branch details for layout review only. Final office information is still pending approval.',
  },
  {
    locationName: 'Asia Pacific Talent Office',
    address: 'Sample office address: 80 Raffles Place, #24-01, Singapore 048624',
    supportHours: 'Sample support hours: Monday to Friday, 9:00 AM to 6:00 PM local time',
    notes: 'Placeholder branch details for layout review only. Final office information is still pending approval.',
  },
];

function ContactUs() {
  const visibleContactItems = contactItems.filter((item) => item.isVisible);

  return (
    <div style={contactPageStyles.page}>
      <section style={contactPageStyles.card}>
        <h1 style={contactPageStyles.heading}>Contact the recruitment team</h1>
        <p style={contactPageStyles.intro}>
          Use this sample contact page to review how candidates, hiring partners, or internal teams
          could reach recruitment support during a campaign.
        </p>
        <p style={contactPageStyles.helperText}>
          Every phone number, email address, messaging channel, location, and branch detail shown
          below is sample content for review only. Replace these placeholder details with approved
          live information before publishing the experience to end users.
        </p>

        <div style={contactPageStyles.contactList}>
          {visibleContactItems.map((item) => (
            <article key={item.label} style={contactPageStyles.contactItem}>
              <h2 style={contactPageStyles.label}>{item.label}</h2>
              <p style={contactPageStyles.value}>{item.value}</p>
            </article>
          ))}
        </div>

        <section style={contactPageStyles.branchSection}>
          <h2 style={contactPageStyles.sectionHeading}>Global branches</h2>
          <div style={contactPageStyles.branchList}>
            {branchItems.map((branch) => (
              <article key={branch.locationName} style={contactPageStyles.branchItem}>
                <h3 style={contactPageStyles.branchName}>{branch.locationName}</h3>
                <p style={contactPageStyles.branchDetail}>{branch.address}</p>
                <p style={contactPageStyles.branchDetail}>{branch.supportHours}</p>
                <p style={contactPageStyles.branchDetail}>{branch.notes}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default ContactUs;
