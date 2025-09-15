function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "15px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
