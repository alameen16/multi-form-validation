// ─────────────────────────────────────────────
//  SuccessScreen — shown after API call succeeds
// ─────────────────────────────────────────────

function SuccessScreen() {
  return (
    <div className="success">
      <div className="success__icon">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="30" fill="#4BB543" opacity="0.15" />
          <circle cx="30" cy="30" r="22" fill="#4BB543" />
          <path
            d="M20 30l7 7 13-14"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="success__title">Thank you!</h2>
      <p className="success__message">
        Your account has been successfully created. We've sent a confirmation
        to your email. Thanks for joining us!
      </p>
    </div>
  );
}

export default SuccessScreen;
