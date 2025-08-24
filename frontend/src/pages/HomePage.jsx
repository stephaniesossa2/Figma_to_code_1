import React from "react";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <div className="hero">
      {/* NAVBAR */}
      <header className="nav">
        <div className="brand">
          <span className="brand-name">Vaultflow</span>
        </div>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About us</a>
        </nav>

        <div className="nav-cta">
          <button className="btn btn-light">Download the app</button>
          <button className="btn btn-outline">Talk to an expert</button>
        </div>
      </header>

      {/* CONTENT */}
      <main className="container">
        <div className="badge">
          We just raised $20M in Series B. <span className="badge-link">Learn more</span>
        </div>

        <h1 className="title">
          Modern analytics<br />
          <span className="line2">for the modern world</span>
        </h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique.
        </p>

        <div className="cta-row">
          <button className="btn btn-light lg">Download the app</button>
          <button className="btn btn-outline lg">Talk to an expert</button>
        </div>
      </main>

      {/* DASHBOARD SECTION */}
      <section className="dashboard-section">
        <div className="dashboard-container">
          {/* Top Navigation */}
          {/* <div className="dashboard-nav">
            <button className="btn btn-light">Download the app</button>
            <button className="btn btn-outline">Talk to an expert</button>
          </div> */}

          {/* Main Dashboard Window */}
          <div className="dashboard-window">
            {/* Header Bar */}
            <div className="dashboard-header">
              <div className="header-left">
                <button className="hamburger-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div className="nav-tabs">
                  <button className="tab active">Dashboard</button>
                  <button className="tab">Digital tokens</button>
                  <button className="tab">Analytics</button>
                </div>
              </div>
            </div>

            <div className="dashboard-content">
              {/* Sidebar */}
              <aside className="sidebar">
                <div className="sidebar-icon active">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                  </svg>
                </div>
                <div className="sidebar-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                  </svg>
                </div>
              </aside>

              {/* Main Content */}
              <div className="main-content">
                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                  DASHBOARD &gt; Vaultflow
                </div>

                {/* Section Header */}
                <div className="section-header">
                  <div className="section-title">
                    <div className="logo-circle"></div>
                    <h2>Vaultflow</h2>
                  </div>
                  <button className="add-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                    </svg>
                  </button>
                </div>

                {/* Dashboard Grid */}
                <div className="dashboard-grid">
                  {/* Total Visits Graph */}
                  <div className="graph-card">
                    <div className="card-header">
                      <h3>Total visits</h3>
                      <button className="info-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,17H11V15H13M13,13H11V7H13"/>
                        </svg>
                      </button>
                    </div>
                    <div className="graph-container">
                      <div className="graph">
                        <div className="graph-line"></div>
                        <div className="graph-area"></div>
                        <div className="tooltip">
                          <div className="tooltip-title">This Month</div>
                          <div className="tooltip-value">20,342,952</div>
                          <div className="tooltip-date">May, 2023</div>
                        </div>
                      </div>
                      <div className="graph-labels">
                        <div className="y-labels">
                          <span>26M</span>
                          <span>22M</span>
                          <span>18M</span>
                          <span>14M</span>
                        </div>
                        <div className="x-labels">
                          <span>Jan</span>
                          <span>Feb</span>
                          <span>Mar</span>
                          <span>Apr</span>
                          <span>May</span>
                          <span>Jun</span>
                          <span>Jul</span>
                          <span>Aug</span>
                          <span>Sep</span>
                          <span>Oct</span>
                          <span>Nov</span>
                          <span>Dec</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Active Users */}
                  <div className="stats-card">
                    <div className="card-header">
                      <h3>Active Users</h3>
                      <button className="info-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,17H11V15H13M13,13H11V7H13"/>
                        </svg>
                      </button>
                    </div>
                    <div className="stats-content">
                      <div className="progress-bars">
                        <div className="progress-item">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: '75%'}}></div>
                          </div>
                          <span>2,584 Total</span>
                        </div>
                        <div className="progress-item">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: '60%'}}></div>
                          </div>
                          <span>1,434 Total</span>
                        </div>
                        <div className="progress-item">
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: '45%'}}></div>
                          </div>
                          <span>594 Total</span>
                        </div>
                      </div>
                      <div className="donut-chart">
                        <div className="donut-center">
                          <span className="donut-value">4,612</span>
                        </div>
                      </div>
                    </div>
                    <div className="date-selector">
                      <span>May 2023</span>
                      <button className="calendar-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"/>
                        </svg>
                      </button>
                      <button className="more-options">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY TEAMS SECTION */}
      <section className="trusted-section">
        <div className="trusted-container">
          <h2 className="trusted-title">
            Trusted by teams at over 1,000 of the world's leading organizations
          </h2>
          
          <div className="logos-grid">
            <div className="logo-item">
              <span className="logo-text">DELL</span>
            </div>
            <div className="logo-item">
              <span className="logo-text">zendesk</span>
            </div>
            <div className="logo-item">
              <span className="logo-text">Rakuten</span>
            </div>
            <div className="logo-item">
              <div className="logo-with-icon">
                <div className="wave-icon"></div>
                <span className="logo-text">PACIFIC FUNDS</span>
              </div>
            </div>
            <div className="logo-item">
              <div className="logo-with-icon">
                <div className="circle-icon"></div>
                <span className="logo-text">NCR</span>
              </div>
            </div>
            <div className="logo-item">
              <div className="logo-with-icon">
                <div className="snowflake-icon"></div>
                <span className="logo-text">Lattice</span>
              </div>
            </div>
            <div className="logo-item">
              <span className="logo-text">TED</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">
            Features that<br />
            work for your<br />
            future.
          </h2>
          
          <p className="features-description">
            Check out our amazing features and experience the<br />
            power of Vaultflow for yourself.
          </p>
        </div>
      </section>

      {/* FEATURE CARDS SECTION */}
      <section className="feature-cards-section">
        <div className="feature-cards-container">
          <div className="cards-grid">
            {/* Analytics Dashboard Card */}
            <div className="feature-card">
              <div className="card-icon purple">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,13H7V23H3V13M10,9H14V23H10V9M17,5H21V23H17V5Z"/>
                </svg>
              </div>
              <h3 className="card-title">Analytics Dashboard</h3>
              <p className="card-description">
                Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.
              </p>
              <a href="#dashboard" className="card-link">View dashboard</a>
            </div>

            {/* Digital Credit Tokens Card */}
            <div className="feature-card">
              <div className="card-icon purple">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
              </div>
              <h3 className="card-title">Digital Credit Tokens</h3>
              <p className="card-description">
                Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.
              </p>
              <a href="#tokens" className="card-link">View tokens</a>
            </div>

            {/* Code Collaboration Card */}
            <div className="feature-card large">
              <div className="card-content">
                <div className="card-icon magenta">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6Z"/>
                  </svg>
                </div>
                <div className="card-text">
                  <h3 className="card-title">Code collaboration</h3>
                  <p className="card-description">
                    Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                  </p>
                  <a href="#collaboration" className="card-link">View code collaboration</a>
                </div>
              </div>
              
              {/* Code Window */}
              <div className="code-window">
                <div className="code-header">
                  <span className="file-name">DigitalToken.js</span>
                </div>
                <div className="code-content">
                  <pre className="code-snippet">
                    <span className="comment">// addNumbersToToken</span>
                    <span className="keyword">function</span> <span className="function">addNumbersToToken</span>(<span className="parameter">num1</span>, <span className="parameter">num2</span>) {'{'}
                      <span className="keyword">let</span> <span className="variable">sum</span> = <span className="number">num1</span> + <span className="number">num2</span>;
                      <span className="keyword">let</span> <span className="variable">token</span> = {'{'}
                        <span className="property">value</span>: <span className="variable">sum</span>,
                        <span className="property">value</span>: <span className="variable">sum</span>,
                        <span className="keyword">return</span> <span className="variable">token</span>;
                      {'}'};
                    {'}'}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL BANNER SECTION */}
      <section className="promotional-banner-section">
        <div className="promotional-banner-container">
          <div className="promotional-card">
            <h2 className="promotional-title">
              Our powerful analytics<br />
              provides invaluable insights.
            </h2>
            
            <p className="promotional-description">
              Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
            </p>
            
            <div className="promotional-cta">
              <button className="btn btn-outline">Download the app</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            {/* Contact Column */}
            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <div className="footer-links">
                <p className="footer-text">Work inquiries: work@vaultflow.com</p>
                <p className="footer-text">PR and speaking: press@vaultflow.com</p>
                <p className="footer-text">New business: newbusiness@vaultflow.com</p>
              </div>
            </div>

            {/* Address Column */}
            <div className="footer-column">
              <h3 className="footer-title">Address</h3>
              <div className="footer-links">
                <p className="footer-text">398 11th Street, Floor 2</p>
                <p className="footer-text">San Francisco, CA 94103</p>
              </div>
            </div>

            {/* Careers Column */}
            <div className="footer-column">
              <h3 className="footer-title">Careers</h3>
              <div className="footer-links">
                <p className="footer-text">Careers@vaultflow.com</p>
              </div>
            </div>

            {/* Social Column */}
            <div className="footer-column">
              <h3 className="footer-title">Social</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Twitter</a>
                <a href="#" className="footer-link">Instagram</a>
                <a href="#" className="footer-link">Tik Tok</a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p className="copyright-text">© 2023 Vaultflow. All Rights Reserved.</p>
            </div>
            
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-brand-name">Vaultflow</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
