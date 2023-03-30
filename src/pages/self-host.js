import React from 'react';
import clsx from "clsx";
import styles from "./styles.module.css";

const selfHost = () => {
  return (
    <div className={clsx("container", styles.parent)}>
      <div className="row" style={{ display: "flex" }}>

        <div className="col col--6 margin-vert--md" style={{ padding: "0px 70px" }}>
          <h1>SigNoz <span style={{ color: "#FF6321" }}>Enterprise</span></h1>
          <span>- Managed Self-hosted SigNoz in your premise or cloud</span><br />
          <span>- Single Sign-On</span><br />
          <span>- SAML and LDAP support</span><br />
          <span>- AWS Private Link</span><br />
          <span>- Support for Dashboard configuration from expert engineers</span><br />
          <span>- Support plan with SLAs</span><br />
        </div>

        <div className={clsx("col col--5 margin-vert--md", styles.form__box)} >
          <h5 style={{ textAlign: "center" }}>Get more info on SigNoz Enterprise</h5>
          <form>
            <input type="text" placeholder="Email*" /> <br />
            <input type="text" placeholder="Name" />  <br />
            <input type="text" placeholder="Company" />  <br />
            <button type='submit'>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default selfHost
