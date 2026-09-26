import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/yasc")({
  head: () => ({
    meta: [
      { title: "SpaceTech Consulting at YASC | Enterprise Yardi Platform Partner" },
      {
        name: "description",
        content:
          "You met SpaceTech at YASC. Enterprise Yardi platform ownership, managed support, integrations, automation and reporting across Australia, India and the USA.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "SpaceTech Consulting at YASC" },
      {
        property: "og:description",
        content:
          "Enterprise Yardi platform ownership, managed support, integrations, automation and reporting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.spacetechconsulting.com/yasc" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap",
      },
    ],
  }),
  component: YascPage,
});

const QR_CODE_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAHMAQMAAABiFQrFAAAABlBMVEUWIz////9ef8N4AAADiElEQVR42u2dPY7bMBCF38gLyB33BspNtECKHEvOzcSbyCeI1MnAmi8Ff8RNusAMVDw2gm19zWDwhvND2oh/XFuHf15ChQoVelL0aXldYd9odgVA+wDsHUB8+PhlXm+ysNCzoCA/MZIkOffkAow74EL8MsRP8XeG8uaFXGVhoa9D3wAAjytgAYANofOOAOGvu8HorwAA/wG4X9WbsrDQhigX4/wwezdyMzIAPQHaRN5kJqGNFbEsAzAStnUBgLkVeBgBApgmysJCz4r2JEMUU8BfQQZ4R67Rsa0DgJ/v9ZuysNCX5zl59cQQMO7gapx7wtWfbi6UN5XnCH15VL98CdZGf4UBNm6GrQOSP24GZ5SFhTZTxFLWQR/LOsdvq3HGl8rPjmk1VX6EtgnNpfbIBdkfuSO5HlcAPW+OtVvKEYWeSUx3YCgqOu7HwzgfmY2Lertqeym0jZiOO1KCAxgZMxuybCajik65uxPbOnJEoa0SbuQ4DljZZfaEi6IZPfDmghRRaCtH5FI0MPe042PuWdwyBuqolnJEoSeL6lzix4HZT2eU4H5E9RzjJaZC2+bqR5KecqCkoiS5HjmQxFRoo+3lkAI4MJbgnhqL6ZG+nJRwC21U+ZljazsrIgkXqqynmqOce96g7aXQNo5Y9XMW5DLjyLrDzV17RKFnRh+G+4XcYWPAuJkNAd4M24VzOljR06zDWI1gysJCX4o+zRwBwJvhfuEM8N7lYxHekXyamXEFvBnvHcZPWVhoszyHO8r5nFQAqtMdqDkutK0jjns8DwFgCF+2l6z6i1M6KKaEW2g7R0xlxlwLT+tQxFzyiQO9KkEKPRUaN5QM8Ga5rbN18GY2BODIc/IgB+B1clxoIzFNXjaURg7J3MhJo22xOa7qpdBmjpi2kP3heqVQWY+vhbzL1PZSaEtFTBpYNpT5+LerFZE6FiH0pGJquTmedbP/I1cvS1FdaAtHrFc9rLHXZ8zSg5pGF9pOEfPqycVy/RzV8FA5/p0n1RXVhbYJzem+tZzuHGPoxySvFFHof8hzUhKzWHVwMQtjdRMGNEAp9OQ+/GXMMkX1+lIXHe0R2gR9+zub9o7YDPHetph+Pw09sF3ofwAA/PdPWVjo69HjroF7V1V34ALwyHOUcE+bttxtlIWFvlwRfdK+HgANMLgA/4F4ayUta2O+xlIWFnoi1PSPJ0KFChWa1m9P/n/wAvuMGgAAAABJRU5ErkJggg==";

function YascPage() {
  return (
    <div className="yasc-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
:root {
  --navy: #17467B; --deep: #16233F; --deep2: #1E3155;
  --teal: #028090; --teal-br: #21B5C4; --gold: #E3B23C;
  --ink: #24303F; --muted: #5A6879; --rule: #DCE3EC; --wash: #F4F7FB;
}
.yasc-page {
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  line-height: 1.6;
  background: #fff;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}
.yasc-page * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.yasc-page .wrap {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}
.yasc-page a {
  color: inherit;
  text-decoration: none;
}
.yasc-page nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,.94);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--rule);
}
.yasc-page nav .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  gap: 16px;
}
.yasc-page nav img {
  height: 36px;
  width: auto;
  display: block;
}
.yasc-page .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: .18s;
  white-space: nowrap;
  border: 2px solid transparent;
}
.yasc-page .btn-p {
  background: var(--teal);
  color: #fff;
}
.yasc-page .btn-p:hover {
  background: #016B78;
  transform: translateY(-1px);
}
.yasc-page .btn-o {
  border-color: rgba(255,255,255,.45);
  color: #fff;
}
.yasc-page .btn-o:hover {
  background: rgba(255,255,255,.12);
}
.yasc-page .btn-d {
  border-color: var(--navy);
  color: var(--navy);
}
.yasc-page .btn-d:hover {
  background: var(--navy);
  color: #fff;
}
.yasc-page .btn-sm {
  padding: 9px 18px;
  font-size: 14px;
}
.yasc-page header.hero {
  background: linear-gradient(115deg,var(--deep) 0%,var(--deep2) 58%,var(--navy) 100%);
  color: #fff;
  padding: 76px 0 68px;
  position: relative;
  overflow: hidden;
}
.yasc-page header.hero::before {
  content: "";
  position: absolute;
  right: -160px;
  top: -160px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle,rgba(33,181,196,.20),transparent 68%);
}
.yasc-page header.hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 5px;
  background: linear-gradient(90deg,var(--teal),var(--teal-br) 45%,var(--gold));
}
.yasc-page .badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--teal-br);
  border: 1px solid rgba(33,181,196,.42);
  border-radius: 999px;
  padding: 7px 16px;
  margin-bottom: 24px;
}
.yasc-page .badge .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--teal-br);
}
.yasc-page header.hero h1 {
  font-size: clamp(34px,5.6vw,54px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -.02em;
  max-width: 16ch;
}
.yasc-page header.hero h1 .thin {
  font-weight: 300;
  color: #B9CBE2;
}
.yasc-page header.hero p.sub {
  font-size: clamp(16px,2.1vw,19px);
  color: #C6D3E4;
  font-weight: 300;
  margin-top: 20px;
  max-width: 56ch;
  line-height: 1.55;
}
.yasc-page .cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}
.yasc-page .hero-meta {
  margin-top: 38px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.16);
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
}
.yasc-page .hero-meta .m .n {
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -.02em;
}
.yasc-page .hero-meta .m .l {
  font-size: 12.5px;
  color: #9FB3CD;
  letter-spacing: .04em;
  margin-top: 2px;
}
.yasc-page section {
  padding: 64px 0;
}
.yasc-page section.alt {
  background: var(--wash);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}
.yasc-page .eyebrow {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .19em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 12px;
}
.yasc-page h2 {
  font-size: clamp(25px,3.4vw,34px);
  font-weight: 900;
  letter-spacing: -.02em;
  color: var(--navy);
  line-height: 1.15;
}
.yasc-page h2 .thin {
  font-weight: 300;
  color: var(--muted);
}
.yasc-page .intro {
  font-size: 17px;
  color: var(--muted);
  max-width: 62ch;
  margin-top: 14px;
}
.yasc-page .qs {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(270px,1fr));
  gap: 20px;
  margin-top: 34px;
}
.yasc-page .q {
  background: #fff;
  border: 1px solid var(--rule);
  border-left: 4px solid var(--teal);
  border-radius: 10px;
  padding: 24px;
}
.yasc-page .q .qn {
  font-size: 12px;
  font-weight: 900;
  color: var(--teal);
  letter-spacing: .14em;
}
.yasc-page .q h3 {
  font-size: 17.5px;
  font-weight: 900;
  color: var(--navy);
  margin: 8px 0 8px;
  line-height: 1.3;
}
.yasc-page .q p {
  font-size: 14.5px;
  color: var(--muted);
  line-height: 1.5;
}
.yasc-page .svc {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 18px;
  margin-top: 34px;
}
.yasc-page .s {
  background: #fff;
  border: 1px solid var(--rule);
  border-top: 3px solid var(--teal);
  border-radius: 10px;
  padding: 22px 22px 20px;
}
.yasc-page .s .n {
  font-size: 12px;
  font-weight: 900;
  color: var(--teal);
  letter-spacing: .14em;
}
.yasc-page .s h3 {
  font-size: 17px;
  font-weight: 900;
  color: var(--navy);
  margin: 6px 0 10px;
}
.yasc-page .s ul {
  list-style: none;
}
.yasc-page .s li {
  position: relative;
  padding-left: 17px;
  font-size: 14.4px;
  color: var(--muted);
  margin-bottom: 6px;
  line-height: 1.45;
}
.yasc-page .s li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal);
}
.yasc-page .proof {
  background: linear-gradient(115deg,var(--deep),var(--deep2) 60%,var(--navy));
  color: #fff;
}
.yasc-page .proof .eyebrow {
  color: var(--teal-br);
}
.yasc-page .proof h2 {
  color: #fff;
}
.yasc-page .proof .intro {
  color: #C6D3E4;
}
.yasc-page .pstats {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(160px,1fr));
  gap: 1px;
  margin-top: 34px;
  background: rgba(255,255,255,.14);
  border-radius: 12px;
  overflow: hidden;
}
.yasc-page .pstats .p {
  background: rgba(255,255,255,.05);
  padding: 26px 18px;
  text-align: center;
}
.yasc-page .pstats .p .n {
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -.03em;
  line-height: 1;
}
.yasc-page .pstats .p .l {
  font-size: 12.5px;
  color: #9FB3CD;
  margin-top: 9px;
  line-height: 1.4;
}
.yasc-page .pnote {
  font-size: 12.5px;
  color: #8296B0;
  margin-top: 16px;
  max-width: 70ch;
}
.yasc-page .steps {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 20px;
  margin-top: 34px;
  counter-reset: st;
}
.yasc-page .st {
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 24px;
  position: relative;
}
.yasc-page .st .k {
  font-size: 12px;
  font-weight: 900;
  color: var(--teal);
  letter-spacing: .14em;
}
.yasc-page .st h3 {
  font-size: 19px;
  font-weight: 900;
  color: var(--navy);
  margin: 7px 0 9px;
}
.yasc-page .st p {
  font-size: 14.5px;
  color: var(--muted);
  line-height: 1.5;
}
.yasc-page .dl {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap: 16px;
  margin-top: 30px;
}
.yasc-page .d {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 18px 20px;
  text-decoration: none;
  transition: .18s;
}
.yasc-page .d:hover {
  border-color: var(--teal);
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(23,70,123,.09);
}
.yasc-page .d .ico {
  width: 40px;
  height: 40px;
  border-radius: 9px;
  flex-shrink: 0;
  background: linear-gradient(135deg,var(--navy),var(--teal));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .04em;
}
.yasc-page .d .t {
  font-size: 15.5px;
  font-weight: 900;
  color: var(--navy);
  line-height: 1.25;
}
.yasc-page .d .sub {
  font-size: 13px;
  color: var(--muted);
  margin-top: 2px;
}
.yasc-page .ccard {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 36px;
  align-items: center;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 14px;
  padding: 34px;
  margin-top: 32px;
}
.yasc-page .ccard h3 {
  font-size: 23px;
  font-weight: 900;
  color: var(--navy);
}
.yasc-page .ccard .role {
  font-size: 14.5px;
  color: var(--teal);
  font-weight: 700;
  margin-top: 2px;
}
.yasc-page .ccard .lines {
  margin-top: 18px;
  font-size: 15px;
  color: var(--muted);
  line-height: 1.9;
}
.yasc-page .ccard .lines a {
  color: var(--navy);
  font-weight: 700;
  text-decoration: none;
}
.yasc-page .ccard .lines a:hover {
  text-decoration: underline;
}
.yasc-page .qrbox {
  text-align: center;
}
.yasc-page .qrbox img {
  width: 100%;
  max-width: 190px;
  border: 1px solid var(--rule);
  border-radius: 10px;
  padding: 9px;
  background: #fff;
  display: inline-block;
}
.yasc-page .qrbox .cap {
  font-size: 12.5px;
  color: var(--muted);
  margin-top: 10px;
  line-height: 1.45;
}
.yasc-page .regions {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  margin-top: 30px;
}
.yasc-page .regions .r {
  border-left: 3px solid var(--teal);
  padding-left: 14px;
}
.yasc-page .regions .r .t {
  font-size: 15px;
  font-weight: 900;
  color: var(--navy);
}
.yasc-page .regions .r .d {
  font-size: 13.5px;
  color: var(--muted);
}
.yasc-page footer {
  background: var(--deep);
  color: #9FB3CD;
  padding: 44px 0 30px;
  font-size: 13.5px;
}
.yasc-page footer img {
  height: 44px;
  margin-bottom: 16px;
  display: block;
}
.yasc-page footer .fl {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: space-between;
  align-items: flex-end;
}
.yasc-page footer a {
  color: #C6D3E4;
  text-decoration: none;
}
.yasc-page footer a:hover {
  color: #fff;
}
.yasc-page footer .fine {
  font-size: 12px;
  color: #67809E;
  margin-top: 22px;
  border-top: 1px solid rgba(255,255,255,.1);
  padding-top: 18px;
}
.yasc-page .bar {
  height: 5px;
  background: linear-gradient(90deg,var(--navy),var(--teal) 55%,var(--gold));
}

@media (max-width:760px){
  .yasc-page section{padding:48px 0}
  .yasc-page .ccard{grid-template-columns:1fr;padding:26px}
  .yasc-page .hero-meta{gap:24px}
  .yasc-page nav .wrap{height:60px}
  .yasc-page nav img{height:30px}
}
`,
        }}
      />

      <nav>
        <div className="wrap">
          <a href="https://www.spacetechconsulting.com/">
            <img src="/optimized/nav-logo-600.webp" alt="SpaceTech Consulting" />
          </a>
          <a className="btn btn-p btn-sm" href="https://cal.com/spacetech/30min">
            Book 30 minutes
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="badge">
            <span className="dot"></span>You met us at YASC
          </div>
          <h1>
            Yardi platform ownership, <span className="thin">without the big-firm premium.</span>
          </h1>
          <p className="sub">
            SpaceTech runs Yardi for property organisations that have outgrown ad hoc support.
            Named specialists own modules, carry SLA accountability, and work to reduce the
            volume of support your platform needs rather than simply closing what arrives.
          </p>
          <div className="cta-row">
            <a className="btn btn-p" href="https://cal.com/spacetech/30min">
              Book a 30 minute call
            </a>
            <a className="btn btn-o" href="#what">
              See what we do in Yardi
            </a>
          </div>
          <div className="hero-meta">
            <div className="m">
              <div className="n">3,000+</div>
              <div className="l">Platform issues managed</div>
            </div>
            <div className="m">
              <div className="n">95%+</div>
              <div className="l">SLA on owned ticket volume</div>
            </div>
            <div className="m">
              <div className="n">1,000+</div>
              <div className="l">Business users supported</div>
            </div>
            <div className="m">
              <div className="n">3</div>
              <div className="l">Delivery regions</div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="eyebrow">Worth a conversation if</div>
          <h2>
            Three questions <span className="thin">most Yardi teams cannot answer</span>
          </h2>
          <p className="intro">
            If any of these land, a short call is probably worth your time. If none of them do,
            your platform is in good shape and we will say so.
          </p>
          <div className="qs">
            <div className="q">
              <div className="qn">01</div>
              <h3>Which recurring issues are quietly eating your support budget?</h3>
              <p>
                Most environments cannot answer this, because tickets are not categorised
                consistently enough for trends to surface.
              </p>
            </div>
            <div className="q">
              <div className="qn">02</div>
              <h3>Who owns each module by name, and what is their SLA?</h3>
              <p>
                If the answer is a queue rather than a person, escalation slows down and gaps
                appear at exactly the wrong moment.
              </p>
            </div>
            <div className="q">
              <div className="qn">03</div>
              <h3>Is your platform needing more support each year, or less?</h3>
              <p>
                Support should reduce future support. If demand only ever grows, the operating
                model is the problem, not the volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="what">
        <div className="wrap">
          <div className="eyebrow">Yardi capability</div>
          <h2>
            What we do <span className="thin">in Yardi</span>
          </h2>
          <p className="intro">
            Full lifecycle coverage across Voyager, Elevate, RENTCafe and Investment Management,
            from daily operations through to implementation and modernisation.
          </p>
          <div className="svc">
            <div className="s">
              <div className="n">01</div>
              <h3>Platform support and optimisation</h3>
              <ul>
                <li>Application help desk across L1, L2 and L3</li>
                <li>Administration, upgrade support and testing</li>
                <li>SLA management, health checks and tuning</li>
              </ul>
            </div>
            <div className="s">
              <div className="n">02</div>
              <h3>Custom development</h3>
              <ul>
                <li>Custom reporting in YSR and Columnar</li>
                <li>Custom financials and interfaces</li>
                <li>Workflow validation, automation and RPA</li>
              </ul>
            </div>
            <div className="s">
              <div className="n">03</div>
              <h3>Data migration</h3>
              <ul>
                <li>Legacy migration using Yardi ETL</li>
                <li>Cleansing, mapping and enrichment</li>
                <li>Load, reconciliation and cutover</li>
              </ul>
            </div>
            <div className="s">
              <div className="n">04</div>
              <h3>Implementation and consulting</h3>
              <ul>
                <li>Voyager, Elevate and Breeze rollout</li>
                <li>Multi-module deployment and configuration</li>
                <li>Security model, go-live and stabilisation</li>
              </ul>
            </div>
            <div className="s">
              <div className="n">05</div>
              <h3>Training and testing</h3>
              <ul>
                <li>Role-based training built from real ticket trends</li>
                <li>Knowledge base and process documentation</li>
                <li>Product testing and regression packs</li>
              </ul>
            </div>
            <div className="s">
              <div className="n">06</div>
              <h3>Data and analytics</h3>
              <ul>
                <li>BI integration through Yardi Data Connect</li>
                <li>Executive reporting and dashboards</li>
                <li>KPI tracking and data quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <div className="eyebrow">Enterprise proof</div>
          <h2>Built inside a large listed property group</h2>
          <p className="intro">
            Our operating model was shaped supporting commercial and residential portfolios in
            one Yardi environment, for hundreds of business users, under executive scrutiny.
          </p>
          <div className="pstats">
            <div className="p">
              <div className="n">3,000+</div>
              <div className="l">Platform issues managed</div>
            </div>
            <div className="p">
              <div className="n">95%+</div>
              <div className="l">SLA on owned ticket volume</div>
            </div>
            <div className="p">
              <div className="n">18+</div>
              <div className="l">Recurring patterns identified and resolved</div>
            </div>
            <div className="p">
              <div className="n">Under 100</div>
              <div className="l">Open backlog maintained</div>
            </div>
            <div className="p">
              <div className="n">1,000+</div>
              <div className="l">Business users supported</div>
            </div>
          </div>
          <p className="pnote">
            Around a quarter of all support volume traced back to repeating causes, and within
            that a handful of causes explained most of it. Client identity withheld by choice.
            Reference detail is available under a confidentiality arrangement.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">What happens next</div>
          <h2>
            Three steps, <span className="thin">no obligation</span>
          </h2>
          <div className="steps">
            <div className="st">
              <div className="k">Step 01</div>
              <h3>A 30 minute call</h3>
              <p>
                You describe the environment and where it hurts. We tell you plainly whether
                this is something we can help with.
              </p>
            </div>
            <div className="st">
              <div className="k">Step 02</div>
              <h3>Platform health check</h3>
              <p>
                A short, fixed-scope review of environment, ticket history, reporting and
                integration gaps. You keep the findings whether or not we work together.
              </p>
            </div>
            <div className="st">
              <div className="k">Step 03</div>
              <h3>A scoped proposal</h3>
              <p>
                Managed support, a defined project, or nothing at all. We only propose work we
                believe will pay for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="eyebrow">Take it with you</div>
          <h2>
            The one-pagers <span className="thin">from our conversation</span>
          </h2>
          <div className="dl">
            <a className="d" href="/downloads/spacetech-company-profile.pdf">
              <div className="ico">PDF</div>
              <div>
                <div className="t">Company profile</div>
                <div className="sub">One page, who we are</div>
              </div>
            </a>
            <a className="d" href="/downloads/spacetech-yardi-capability.pdf">
              <div className="ico">PDF</div>
              <div>
                <div className="t">Yardi capability</div>
                <div className="sub">One page, what we do</div>
              </div>
            </a>
            <a className="d" href="/downloads/spacetech-case-study.pdf">
              <div className="ico">PDF</div>
              <div>
                <div className="t">Enterprise case study</div>
                <div className="sub">One page, what changed</div>
              </div>
            </a>
            <a className="d" href="/downloads/spacetech-specialists.pdf">
              <div className="ico">PDF</div>
              <div>
                <div className="t">Core specialists</div>
                <div className="sub">Who runs your platform</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="eyebrow">Direct line</div>
          <h2>
            Talk to the person <span className="thin">you met</span>
          </h2>
          <div className="ccard">
            <div>
              <h3>Sambhaji Biradar</h3>
              <div className="role">Founder and Chief Executive Officer</div>
              <div className="lines">
                <a href="mailto:sambhaji@spacetechconsulting.com">
                  sambhaji@spacetechconsulting.com
                </a>
                <br />
                <a href="tel:+61468040481">+61 468 040 481</a> &nbsp;Australia
                <br />
                <a href="tel:+14158708418">+1 (415) 870 8418</a> &nbsp;United States
                <br />
                <a href="https://www.linkedin.com/company/spacetech-consulting/">
                  linkedin.com/company/spacetech-consulting
                </a>
              </div>
              <div className="cta-row">
                <a className="btn btn-p" href="https://cal.com/spacetech/30min">
                  Book a 30 minute call
                </a>
                <a className="btn btn-d" href="/downloads/sambhaji-biradar.vcf">
                  Save contact
                </a>
              </div>
            </div>
            <div className="qrbox">
              <img src={QR_CODE_BASE64} alt="QR code to spacetechconsulting.com/yasc" />
              <div className="cap">
                Share this page
                <br />
                spacetechconsulting.com/yasc
              </div>
            </div>
          </div>
          <div className="regions">
            <div className="r">
              <div className="t">Australia</div>
              <div className="d">Client delivery and regional continuity</div>
            </div>
            <div className="r">
              <div className="t">India</div>
              <div className="d">Engineering, reporting and extended coverage</div>
            </div>
            <div className="r">
              <div className="t">United States</div>
              <div className="d">Advisory and partnership coverage</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <img src="/optimized/footer-logo-600.webp" alt="SpaceTech Consulting" />
          <div className="fl">
            <div>
              Enterprise Yardi consulting partner. Bringing out the best in Yardi.
              <br />
              Australia &nbsp;/&nbsp; India &nbsp;/&nbsp; USA
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="https://www.spacetechconsulting.com/services">Services</a> &nbsp;&nbsp;
              <a href="https://www.spacetechconsulting.com/who-we-serve">Who we serve</a> &nbsp;&nbsp;
              <a href="https://www.spacetechconsulting.com/about">About</a> &nbsp;&nbsp;
              <a href="https://www.spacetechconsulting.com/contact">Contact</a>
            </div>
          </div>
          <div className="fine">
            &copy; 2026 SpaceTech Consulting Pty Ltd. ACN 695 432 458. All rights reserved.
          </div>
        </div>
      </footer>
      <div className="bar"></div>
    </div>
  );
}
