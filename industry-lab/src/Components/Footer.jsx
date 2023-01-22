import styles from "./Styles/General.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div>
        <b>Company</b>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Careers</p>
        <p>Sell On Industrybuying</p>
        <p>Special offers</p>
        <p>Articles</p>
      </div>
      <div>
        <b>Help</b>
        <p>FAQs</p>
        <p>Report Infringement</p>
        <p>Cancellation & Returns</p>
      </div>
      <div>
        <b>Subscribe to Newsletter</b>
        <br />
        <input type="email" placeholder="Enter your email address" />
        <button>Sign Me</button>
      </div>
    </div>
  );
}
