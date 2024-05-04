
import React from "react";
import About from "../assets/About.jpg";
import "../styles/About.css";

function AboutFunc() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${About})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          <t>Hello reader,</t>
          Our auto service house was founded back in 2018. We are highly-motivated, well-educated, detail-oriented, car specialists.<b>Our motto is: We take care and work on every customer vehicle as it is our own!</b> <b>Our ultimate aim is customer satisfaction.</b> Our team comprises of six people, each of whom is a professional in his field. The services that we offer are the following ones: change of oil, filters, brake pads, discs, brake drums, brake fluid, replacement of timing chains, tensioners, belts, heater core replacement, water, fuel, oil, vacuum pumps replacement, coolant change, PCV system check and PCV components replacement (hoses, valves, filters), air suspension inspection and repair, car diagnostic with OBD2 scanner. We also offer SAI pump replacement or SAI pump deletion with software turn off. Addittionaly, we offer clutch replacement as an offer, transmission inspection, removal, repair, installation. We can also help you with fuel rails removal, injectors inspection, cleaning, repair, installation. Apart from this, other services that we offer as well include: EGR system inspection, EGR valve cleaning, EGR valve deletion with software intervention, DPF cleaning, Suspension inspection and components replacement, exhaust systems inspection, muffler, catalytic converter, flex pipe, downpipe replacement, only turbochargers removal and installation, air conditioning system inspection, A/C compressor, A/C expansionvalve, A/C hoses, A/C condenser, A/C drier, A/C evaporator replacement, A/C refrigerant quantity check and recharge if needed together with AC compressor oil. We work in collaboration with different partners, from which you can buy various high quality parts and accessories.

        </p>
      </div>
    </div>
  );
}

export default AboutFunc;

