import "./index.scss";

const Footer = () => {
  const today = new Date();

  return (
    <div className="footer">
      <a href="https://michaelchilaka.netlify.com">
        {today.getFullYear()}. Michael Chilaka.
      </a>
    </div>
  )
}

export default Footer;