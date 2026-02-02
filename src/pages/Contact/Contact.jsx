import { useState } from "react";
import CopyRow from "../../components/CopyRow/CopyRow";

const email = "kam.gadzicki@gmail.com";
const phone = "517-439-350";
const info = "Hello from my portfolio";

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

      <CopyRow
        label="Email address"
        value={email}
        id="email"
        copied={copied}
        onCopy={handleCopy}
      />

      <CopyRow
        label="Phone number"
        value={phone}
        id="phone"
        copied={copied}
        onCopy={handleCopy}
      />

      <CopyRow
        label="Copy custom text"
        value={info}
        id="info"
        copied={copied}
        onCopy={handleCopy}
      />

      <h4>Lublin</h4>
    </div>
  );
}

export default Contact;
