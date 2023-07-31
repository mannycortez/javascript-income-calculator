window.Webflow ||= [];
window.Webflow.push(() => {
  // Query the elements
  const form = document.querySelector<HTMLFormElement>('[fs-element="form"]');

  const resultNewClientYearlyTotal = document.querySelector<HTMLFormElement>(
    '[fs-element="result-new-client-yearly-total"]'
  );
  const resultVIPYearlyTotal = document.querySelector<HTMLFormElement>(
    '[fs-element="result-vip-yearly-total"]'
  );
  const resultSupplementYearlyTotal = document.querySelector<HTMLFormElement>(
    '[fs-element="result-supplement-yearly-total"]'
  );
  const resultCoachReferralYearlyTotal = document.querySelector<HTMLFormElement>(
    '[fs-element="result-coach-referral-yearly-total"]'
  );
  if (
    !form ||
    !resultNewClientYearlyTotal ||
    !resultVIPYearlyTotal ||
    !resultSupplementYearlyTotal ||
    !resultCoachReferralYearlyTotal
  )
    return;

  // Listen for form submission events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get the data from the calculator
    const formData = new FormData(form);
    const amount = formData.get('amount');

    if (!amount) return;

    // Perform any maths
    // I = P * r * T

    const total = Number(amount);

    // Display the results
    resultNewClientYearlyTotal.textContent = amount.toString();
  });
});
