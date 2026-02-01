import { useState } from "react";

const email = "kam.gadzicki@gmail.com";
const phone = "517-439-350";

function Contact() {
  // null | "email" | "phone"
  const [copied, setCopied] = useState(null);

  async function handleCopy(text, type) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied(null);
      }, 2000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      // opcjonalnie: możesz tu ustawić inny komunikat błędu
    }
  }

  return (
    <div className="contact">
      <h1>Contact</h1>

      <section className="contactRow">
        <h2>Email address</h2>
        <div className="line">
          <span className="value">{email}</span>
          <button onClick={() => handleCopy(email, "email")}>Copy</button>
          {copied === "email" && <span className="copied">Skopiowano</span>}
        </div>
      </section>

      <section className="contactRow">
        <h2>Phone number</h2>
        <div className="line">
          <span className="value">{phone}</span>
          <button onClick={() => handleCopy(phone, "phone")}>Copy</button>
          {copied === "phone" && <span className="copied">Skopiowano</span>}
        </div>
      </section>

      <h4>Lublin</h4>
    </div>
  );
}

export default Contact;
