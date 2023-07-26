import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactLinks({href, aria, icon, span}) {
  return (
    <>
      <a
        href={href}
        aria-label={aria}
      >
        <FontAwesomeIcon icon={icon} />{" "}
        <span>{span}</span>
      </a>
    </>
  );
}

export default ContactLinks;
