import React, { useState, useEffect } from 'react';

const BusinessTypes = () => {
  const [theme, setTheme] = useState('light');
  const [currentType, setCurrentType] = useState(null);

  const infoData = {
    sole: (
      <>
        <strong>Registration:</strong> No registration needed. 1 govt certificate required for current account, GST, etc.<br />
        <strong>Taxes:</strong> Taxed as individual income, no separate business tax.<br />
        <strong>Turnover:</strong> No specific limit, but higher turnover may require GST registration.<br />
        <strong>Compliance:</strong> Minimal compliance, no annual filings required.<br />
        <strong>Liability:</strong> Unlimited personal liability.<br />
        <strong>Advantages:</strong> Easy to set up, full control, minimal compliance.<br />
        <strong>Disadvantages:</strong> Unlimited liability, harder to raise capital.<br />
        <strong>Ideal For:</strong> Small businesses, freelancers, consultants.<br />
        <strong>Examples:</strong> Local shops, individual consultants.<br />
        <strong>Funding:</strong> Limited to personal savings and loans.<br />
        <strong>Management:</strong> Sole owner manages all aspects.<br />
        <strong>Succession:</strong> Business ceases to exist upon owner's death.
      </>
    ),
    partnership: (
      <>
        <strong>Registration:</strong> Optional registration under the Partnership Act, 1932. DEED mandatory.<br />
        <strong>Taxes:</strong> Taxed as a separate entity, partners taxed on their share of profits.<br />
        <strong>Turnover:</strong> No specific limit, but higher turnover may require GST registration.<br />
        <strong>Compliance:</strong> Moderate compliance, annual filings required.<br />
        <strong>Liability:</strong> Unlimited personal liability for partners.<br />
        <strong>Advantages:</strong> Shared responsibility, more capital available.<br />
        <strong>Disadvantages:</strong> Unlimited liability, potential for disputes.<br />
        <strong>Ideal For:</strong> Small to medium-sized businesses, family businesses.<br />
        <strong>Examples:</strong> Law firms, family-owned businesses.<br />
        <strong>Funding:</strong> Contributions from partners.<br />
        <strong>Management:</strong> Managed by partners as per agreement.<br />
        <strong>Succession:</strong> Partnership dissolves upon death of a partner unless otherwise agreed.
      </>
    ),
    pvtltd: (
      <>
        <strong>Registration:</strong> Registered with MCA (Ministry of Corporate Affairs).<br />
        <strong>Taxes:</strong> Corporate tax rates apply.<br />
        <strong>Turnover:</strong> No specific limit, but higher turnover may require GST registration.<br />
        <strong>Compliance:</strong> High compliance, annual filings and audits required.<br />
        <strong>Liability:</strong> Limited liability for shareholders.<br />
        <strong>Advantages:</strong> Limited liability, easier to raise capital, perpetual succession.<br />
        <strong>Disadvantages:</strong> Higher compliance costs, more regulations.<br />
        <strong>Ideal For:</strong> Startups, growing businesses, businesses seeking investment.<br />
        <strong>Examples:</strong> Tech startups, manufacturing companies.<br />
        <strong>Funding:</strong> Equity investment, loans.<br />
        <strong>Management:</strong> Managed by a board of directors.<br />
        <strong>Succession:</strong> Perpetual existence, not affected by changes in ownership.
      </>
    ),
    llp: (
      <>
        <strong>Registration:</strong> Registered with MCA (Ministry of Corporate Affairs).<br />
        <strong>Taxes:</strong> Taxed as a partnership firm.<br />
        <strong>Turnover:</strong> No specific limit, but higher turnover may require GST registration.<br />
        <strong>Compliance:</strong> Moderate compliance, annual filings required.<br />
        <strong>Liability:</strong> Limited liability for partners.<br />
        <strong>Advantages:</strong> Limited liability, flexible management structure.<br />
        <strong>Disadvantages:</strong> Higher compliance than a partnership, but lower than a private limited.<br />
        <strong>Ideal For:</strong> Professional services, small to medium-sized businesses.<br />
        <strong>Examples:</strong> Accounting firms, law firms.<br />
        <strong>Funding:</strong> Contributions from partners, loans.<br />
        <strong>Management:</strong> Managed by partners as per agreement.<br />
        <strong>Succession:</strong> Perpetual existence, not affected by changes in partners.
      </>
    ),
    opc: (
      <>
        <strong>Registration:</strong> Registered with MCA (Ministry of Corporate Affairs).<br />
        <strong>Taxes:</strong> Corporate tax rates apply.<br />
        <strong>Turnover:</strong> No specific limit, but higher turnover may require GST registration.<br />
        <strong>Compliance:</strong> High compliance, annual filings and audits required.<br />
        <strong>Liability:</strong> Limited liability for the sole shareholder.<br />
        <strong>Advantages:</strong> Limited liability, full control, easier to manage than a private limited.<br />
        <strong>Disadvantages:</strong> Higher compliance than a sole proprietorship, but lower than a private limited.<br />
        <strong>Ideal For:</strong> Solo entrepreneurs, small businesses.<br />
        <strong>Examples:</strong> Freelancers, consultants.<br />
        <strong>Funding:</strong> Personal savings, loans.<br />
        <strong>Management:</strong> Sole owner manages all aspects.<br />
        <strong>Succession:</strong> Business ceases to exist upon owner's death unless a nominee is appointed.
      </>
    )
  };

  const toggleInfo = (type) => {
    setCurrentType(currentType === type ? null : type);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  return (
    <>
      <div id="themeToggle" onClick={toggleTheme}>🌓</div>
      <div className="container">
        <h1>Choose Your Business Type</h1>
        <div className="buttons">
          {['sole', 'partnership', 'pvtltd', 'llp', 'opc'].map((type) => (
            <button
              key={type}
              className={`button ${currentType === type ? 'selected' : ''}`}
              onClick={() => toggleInfo(type)}
            >
              {type === 'sole' ? 'Sole Proprietorship' :
               type === 'partnership' ? 'Partnership Firm' :
               type === 'pvtltd' ? 'Private Limited' :
               type === 'llp' ? 'LLP' :
               'One Person Company'}
            </button>
          ))}
        </div>
        <div
          id="info"
          style={{
            display: currentType ? 'block' : 'none',
            opacity: currentType ? 1 : 0,
            transform: currentType ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {currentType && infoData[currentType]}
        </div>
      </div>
    </>
  );
};

export default BusinessTypes;