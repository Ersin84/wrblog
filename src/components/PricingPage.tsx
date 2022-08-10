import { CONSTANTS } from "constants/constants";
import React from "react";
import Badge from "./Badge";


function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <stripe-pricing-table 
      pricing-table-id="prctbl_1LVH0CEt31tuBKqWkoHKbozA"
      publishable-key="pk_live_D6ifCmwtgzpL26A30tBa7swv007m7606uX"
    >
    </stripe-pricing-table>
  );
}

export default PricingPage;