import { FaSlackHash } from "react-icons/fa";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center gap-2 p-3 bg-neutral text-neutral-content">
      <FaSlackHash className="text-3xl" />
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;
