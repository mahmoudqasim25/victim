import PageShell, { MutedCard, PageIntro, SectionIntro, SurfaceCard } from '../components/PageShell'
import { tokens } from '../components/designSystem'

const supportOptions = [
  {
    label: 'General recruitment support',
    value: 'recruitment@example.com',
    detail: 'Best for application questions, timelines, and next-step guidance.',
  },
  {
    label: 'Candidate phone line',
    value: '+1 (555) 010-2040',
    detail: 'Use for urgent support during business hours when you need direct assistance.',
  },
  {
    label: 'Messaging support',
    value: '+1 (555) 010-2041',
    detail: 'Suitable for quick updates, reminders, and simple coordination requests.',
  },
  {
    label: 'Recruitment desk location',
    value: '250 Market Street, Suite 400, San Francisco, CA 94105, United States',
    detail: 'A sample office location shown for layout review and public journey planning.',
  },
]

const supportMoments = [
  {
    title: 'Before you apply',
    description: 'Ask about role fit, hiring partners, or what information to prepare before creating your profile.',
  },
  {
    title: 'During review',
    description: 'Use support channels for status questions, interview coordination, or accessibility requests.',
  },
  {
    title: 'After follow-up',
    description: 'Reconnect with the team if you need clarification on next steps or updated availability.',
  },
]

const branchItems = [
  {
    region: 'North America',
    locationName: 'San Francisco Branch',
    address: '250 Market Street, Suite 400, San Francisco, CA 94105, United States',
    supportHours: 'Mon-Fri, 9:00 AM-5:00 PM PST',
    presence: 'Regional hiring support for technology, operations, and executive search.',
  },
  {
    region: 'Europe',
    locationName: 'London Branch',
    address: '18 Bishopsgate, Level 6, London EC2N 4BQ, United Kingdom',
    supportHours: 'Mon-Fri, 8:30 AM-4:30 PM GMT',
    presence: 'Candidate coordination and employer partnerships across the UK and EU markets.',
  },
  {
    region: 'Middle East',
    locationName: 'Dubai Branch',
    address: 'Office 1204, One Central, Dubai World Trade Centre, Dubai, UAE',
    supportHours: 'Sun-Thu, 9:00 AM-5:30 PM GST',
    presence: 'Recruitment advisory for hospitality, infrastructure, and regional expansion teams.',
  },
  {
    region: 'Asia Pacific',
    locationName: 'Singapore Branch',
    address: '80 Raffles Place, #24-01, Singapore 048624',
    supportHours: 'Mon-Fri, 9:00 AM-6:00 PM SGT',
    presence: 'Talent sourcing and onboarding support for APAC commercial and product roles.',
  },
]

const gridStyle = (minWidth) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
  gap: '16px',
})

function ContactUs() {
  return (
    <PageShell>
      <SurfaceCard
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center',
          background:
            'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0.96) 55%, rgba(14, 165, 233, 0.08) 100%)',
        }}
      >
        <PageIntro
          eyebrow="Recruitment support"
          title="Get clear help through the channel that fits your question."
          description="The contact page now presents support options in a cleaner hierarchy so candidates, partners, and internal teams can quickly understand how to reach recruitment support and what each channel is best for."
        />

        <MutedCard>
          <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Support note</span>
          <p style={{ margin: '10px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
            Contact details shown here remain sample content for review. Replace them with approved live information before publishing to candidates.
          </p>
        </MutedCard>
      </SurfaceCard>

      <SurfaceCard>
        <SectionIntro
          title="Support options"
          description="Choose the route that matches your need, whether you are preparing to apply, checking progress, or coordinating with the recruitment team."
        />
        <div style={gridStyle('240px')}>
          {supportOptions.map((item) => (
            <MutedCard key={item.label} style={{ backgroundColor: tokens.colors.surface }}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>{item.label}</span>
              <h3 style={{ margin: '8px 0 0', fontSize: '1.1rem', color: tokens.colors.text }}>{item.value}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.detail}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <SectionIntro
          title="When to contact us"
          description="A modern support page should help visitors understand not only how to reach the team, but also when each touchpoint is most useful."
        />
        <div style={gridStyle('220px')}>
          {supportMoments.map((item) => (
            <MutedCard key={item.title}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: tokens.colors.text }}>{item.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <SectionIntro
          title="Regional branch coverage"
          description="These sample branch cards show how localized support can be presented in the same public shell and spacing system."
        />
        <div style={gridStyle('240px')}>
          {branchItems.map((branch) => (
            <MutedCard key={branch.locationName} style={{ backgroundColor: tokens.colors.surface }}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>{branch.region}</span>
              <h3 style={{ margin: '8px 0 0', fontSize: '1.15rem', color: tokens.colors.text }}>
                {branch.locationName}
              </h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7, overflowWrap: 'anywhere' }}>
                <strong style={{ color: tokens.colors.text }}>Address:</strong> {branch.address}
              </p>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
                <strong style={{ color: tokens.colors.text }}>Hours:</strong> {branch.supportHours}
              </p>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
                {branch.presence}
              </p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>
    </PageShell>
  )
}

export default ContactUs
