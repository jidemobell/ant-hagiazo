import React from 'react';

import 'bulma-pricingtable/dist/css/bulma-pricingtable.min.css';

const PriceTable = () => {
  return (
    <div className="pricing-table">
  <div className="pricing-plan">
    <div className="plan-header">Starter</div>
    <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>20</span>/month</div>
    <div className="plan-items">
      <div className="plan-item">20GB Storage</div>
      <div className="plan-item">100 Domains</div>
      <div className="plan-item">-</div>
      <div className="plan-item">-</div>
    </div>
    <div className="plan-footer">
      <button className="button is-fullwidth" disabled="disabled">Current plan</button>
    </div>
  </div>

  <div className="pricing-plan is-warning">
    <div className="plan-header">Startups</div>
    <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>40</span>/month</div>
    <div className="plan-items">
      <div className="plan-item">20GB Storage</div>
      <div className="plan-item">25 Domains</div>
      <div className="plan-item">1TB Bandwidth</div>
      <div className="plan-item">-</div>
    </div>
    <div className="plan-footer">
      <button className="button is-fullwidth">Choose</button>
    </div>
  </div>

  <div className="pricing-plan is-active">
    <div className="plan-header">Growing Team</div>
    <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>60</span>/month</div>
    <div className="plan-items">
      <div className="plan-item">200GB Storage</div>
      <div className="plan-item">50 Domains</div>
      <div className="plan-item">1TB Bandwidth</div>
      <div className="plan-item">100 Email Boxes</div>
    </div>
    <div className="plan-footer">
      <button className="button is-fullwidth">Choose</button>
    </div>
  </div>

  <div className="pricing-plan is-danger">
    <div className="plan-header">Enterprise</div>
    <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>100</span>/month</div>
    <div className="plan-items">
      <div className="plan-item">2TB Storage</div>
      <div className="plan-item">100 Domains</div>
      <div className="plan-item">1TB Bandwidth</div>
      <div className="plan-item">1000 Email Boxes</div>
    </div>
    <div className="plan-footer">
      <button className="button is-fullwidth">Choose</button>
    </div>
  </div>
</div>
  );
};

export default PriceTable;