function AuthFormCard({ title, description, children, styles }) {
  return (
    <div style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.heading}>{title}</h1>
        <p style={styles.description}>{description}</p>
        {children}
      </section>
    </div>
  );
}

export default AuthFormCard;
