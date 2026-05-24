function getClinicalParams(inputWeight) {
    const weights = Object.keys(CLINICAL_DATA).map(Number);
    // Find weight closest to input
    const closestWeight = weights.reduce((prev, curr) =>
        Math.abs(curr - inputWeight) < Math.abs(prev - inputWeight) ? curr : prev
    );

    return CLINICAL_DATA[closestWeight];
}

const crisisData = {
    // A/B
    'ab-CICO': {
        title: 'CICO (ADULT) <br><a href="crisis.html?id=p-cico" class="primary-btn" style="font-size: 0.55em; line-height: 1.2; padding: 0.6rem 1.2rem; margin-top: 0.5rem; display: inline-block; text-decoration: none; border: 1px solid currentColor;">GO TO<br>CICO PAED</a>',
        content: `
            <style>
                .cico-box li {
                    margin-bottom: 0.6rem !important;
                }
                .cico-box ul {
                    margin-top: 0.6rem !important;
                }
                .cico-branch {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 0.5rem;
                    margin-bottom: 1rem;
                    background-color: rgba(56, 189, 248, 0.12);
                    border: none;
                }
                .cico-branch ul {
                    margin-top: 0.5rem;
                }
                .cico-branch ul li {
                    margin-bottom: 0.4rem !important;
                    color: #f8fafc;
                }
                .cico-branch strong {
                    color: #f8fafc;
                    border-bottom: none !important;
                }
            </style>
            <div class="crisis-section alert-box cico-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CALL FOR HELP / EARLY ENT</li>
                    <li>CONTINUE SUPRAGLOTTIC OXYGENATION ATTEMPTS</li>
                    <li>POSITION PATIENT (NECK EXTENDED / SHOULDERS ELEVATED)</li>
                </ul>
                <h3 style="color: #22c55e; font-size: 1.15rem; margin: 2rem 0 1rem 0; font-weight: 900; text-transform: uppercase;">PROCEED WITH CLINICIAN PREFERRED TECHNIQUE AS BELOW</h3>
                <div style="margin: 1rem 0 0.8rem 0;">
                    <div style="color: #ef4444; font-size: 1rem; font-weight: 900; text-transform: uppercase; line-height: 1.1;">FAILED INITIAL TECHNIQUE</div>
                    <div style="display: flex; align-items: flex-start; margin-left: 0.8rem; margin-top: 0.4rem;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; margin-right: 0.5rem; flex-shrink: 0;">
                            <path d="M6 0v8a4 4 0 0 0 4 4h10" />
                            <polyline points="16 8 20 12 16 16" />
                        </svg>
                        <div style="color: #ef4444; font-size: 1rem; font-weight: 900; text-transform: uppercase; line-height: 1.2;">ASSESS NECK ANATOMY (PALPABLE VS IMPALPABLE)</div>
                    </div>
                </div>

                <div class="cico-branch">
                    <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                        PALPABLE
                    </div>
                    <ul style="margin-left: 1.5rem;">
                        <li><strong>CANNULA CRICOTHYROIDOTOMY / CANNULA TRACHEOTOMY</strong>
                            <ul>
                                <li>5ML SYRINGE + SALINE + 14G CANNULA</li>
                                <li>45&deg; NEEDLE ANGLE, FROM CAUDAD TO MIDLINE, ASPIRATE FOR AIR AND CONFIRM NO RECOIL</li>
                                <li>ATTACH LEROY RAPID O2 DEVICE @ 15L/MIN</li>
                                <li>INSUFFLATE FOR 4 SEC (1000ML) - WATCH FOR CHEST RISE / SUB CUT EMPHYSEMA</li>
                                <li>ADDITIONAL 2 SEC (500ML) INSUFFLATION WHEN SATS DROP OR @ 30/60</li>
                                <li>FAILURE TO EXPAND CHEST / IMPROVE SATS - ABANDON &rarr; ALTERNATIVE TECHNIQUE</li>
                               <li>SUCCESS - CONSIDER MELKER SIZE 5 VIA SELDINGER TECHNIQUE</li>
                            </ul>
                        </li>
                        <li style="margin-top: 1.5rem;"><strong>SCALPEL, BOUGIE, TUBE</strong>
                            <ul>
                                <li>10 BLADE SCALPEL</li>
                                <li>HORIZONTAL EXCISION + ROTATE 90 DEGREES</li>
                                <li>6.0 ETT OVER BOUGIE
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="cico-branch">
                    <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                        IMPALPABLE
                    </div>
                    <ul style="margin-left: 1.5rem;">
                        <li><strong>SCALPEL, FINGER, CANNULA/SCALPEL</strong>
                            <ul>
                                <li>SUCTION + GAUZE</li>
                                <li>MIDLINE INCISION TO EXPOSE THYROID CARTILAGE</li>
                                <li>BLUNT FINGER DISSECTION TO CRICOTHYROID / TRACHEA</li>
                                <li>CANNULA OR SCALPEL, BOUGIE, TUBE AS ABOVE</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    'ab-difficult-airway': {
        title: 'UNANTICIPATED DIFFICULT AIRWAY',
        content: `
            <div class="supplementary-box-left">
                <strong>ETT INTUBATION OPTIMISATION</strong>
                <ul>
                    <li>CRICOID OFF</li>
                    <li>OPTIMAL POSITIONING (TRAGUS TO STERNUM)</li>
                    <li>BOUGIE / STYLET</li>
                    <li>ELM / BURP</li>
                    <li>CHANGE LARYNGOSCOPE (MAC / MILLER / HYPERANGULATED / LOW PROFILE)</li>
                    <li>CONSIDER FIBREOPTIC EQUIPMENT (SHIKANI / BRONCHOSCOPE)</li>
                    <li>MILLER TECHNIQUE (LIFT EPIGLOTTIS)</li>
                    <li>CHANGE ETT SIZE</li>
                </ul>
            </div>
            <div class="supplementary-box" style="top: 15%; transform: none;">
                <strong>SUPRAGLOTTIC AIRWAY / LMA OPTIMISATION</strong>
                <ul>
                    <li>CHANGE SIZE / MANUFACTURER</li>
                    <li>CUFF INFLATION / DEFLATION</li>
                    <li>PLACEMENT WITH LARYNGOSCOPE</li>
                    <li>RAILROAD OVER OESOPHAGEAL BOUGIE</li>
                </ul>
            </div>
            <div class="supplementary-box" style="top: 55%; transform: none;">
                <strong>FACEMASK VENTILATION OPTIMISATION</strong>
                <ul>
                    <li>OPEN MOUTH</li>
                    <li>DENTURES IN</LI>
                    <li>OPA / NPA</li>
                    <li>TWO HANDED TECHNIQUE / VICE GRIP</li>
                    <li>ASSESS MASK SEAL ON FACE +/- CHANGE MASK SIZE</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>DECLARE DIFFICULT AIRWAY</li>
                    <li>CALL FOR ASSISTANCE (RETRIEVE DIFFICULT AIRWAY EQUIPMENT)</li>
                    <li>CONTINUE OXYGENATION ATTEMPTS (HFNO)</li>
                    <li>ENSURE TIME / SATS + CO2 AWARENESS (ALLOCATE TEAM MEMBER)</li>
                    <li>CONSIDER WAKING PATIENT</li>
                    <li>OPTIMISE ANAESTHETIC DEPTH + MUSCLE RELAXATION</li>
                    <li>EARLY MOBILISATION OF <a href="crisis.html?id=ab-CICO" class="cico-btn">CICO</a> EQUIPMENT (COGNITIVE PRIMING)</li>
                    <li>MAXIMUM 3 OPTIMISED ATTEMPTS + 1 (MORE EXPERIENCED OPERATOR) AT:</li>
                        <ul>
                            <li>1. ENDOTRACHAL INTUBATION</li>
                        </ul>
                        <ul>
                            <li>2. SUPRAGLOTTIC AIRWAY / LMA</li>
                        </ul>
                        <ul>
                            <li>3. FACEMASK VENTILATION</li>
                        </ul>
                </ul>
                <h3>FAILURE TO RESCUE AIRWAY / MAINTAIN OXYGENATION</h3>
                <ul>
                    <li>PROCEED TO <a href="crisis.html?id=ab-CICO" class="cico-btn">CICO</a></li>
                </ul>
            </div>
        `
    },
    'ab-aspiration': {
        title: 'ASPIRATION',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ANNOUNCE / COMMUNICATE +/- CALL FOR HELP</li>
                    <li>IF ABLE POSITION PATIENT LEFT LATERAL + TRENDELENBERG</li>
                    <li>LMA / OPA &rarr; REMOVE AND SUCTION</li>
                    <li>IF SPO2 / OXYGENATION PERMITS &rarr; PERFORM RSI + SECURE AIRWAY</li>
                    <li>EVOLVING / IMPENDING HYPOXIA &rarr; ESTABLISH OXYGENATION VIA FMV DESPITE CONTAMINATION RISK</li>
                </ul>

                <h3>PAUSE AND PLAN</h3>
                <ul>
                    <li>CONSIDER BRONCHOSCOPY POST ETT</li>
                    <li>MDT DISCUSSION RE: PROCEED / CANCEL</li>
                    <li>ORO / NASOGASTRIC DECOMPRESSION</li>
                </ul>
            </div>
            <div class="supplementary-box">
                <strong>POST CRISIS MX</strong>
                <ul>
                    <li>OPEN DISCLOSURE</li>
                    <li>STEROIDS / ANTIBIOTICS NOT ROUTINELY INDICATED</li>
                    <li>EXTENDED PACU STAY 2/24 + CXR</li>
                    <li>CONSIDER DISPOSITION (WARD VS ICU)</li>
                </ul>
            </div>
        `
    },

    'ab-bronchospasm': {
        title: 'BRONCHOSPASM',
        content: `
            <div class="crisis-section alert-box">
                <h3 style="color: #22c55e;">ASSESS</h3>
                <ul>
                    <li>ABCDE CHECK +/- CALL FOR HELP</li>
                    <li>ASSESS CO2 WAVEFORM - SLOPING / ↓ / ABSENT</li>
                    <li>AUSCULTATE CHEST - ?WHEEZE / SILENT</li>
                    <li>CONFIRM TUBE PATENCY + POSITION</li>
                    <li>?<a href="crisis.html?id=ab-pressure" style="text-decoration: underline;">HIGH AIRWAY PRESSURES</a></li>
                    <li>MANUALLY VENTILATE - ASSESS COMPLIANCE</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: #22c55e;">MANAGE</h3>
                <ul>
                    <li>↑ FiO2 TO 100%</li>
                    <li>DEEPEN ANAESTHESIA (SEVO > PROPOFOL FOR BRONCHODILATION)</li>
                    <li>IN CIRCUIT SALBUTAMOL + IPRATROPIUM BROMIDE</li>
                    <li>↓ I:E RATIO, CONSIDER INTERMITTENT CIRCUIT DISCONNECTION, ↓ PEEP, ↓ RR, PERMISSIVE HYPERCAPNOEA</li>
                    <li>IV ADRENALINE +/- IV SALBUTAMOL</li>
                    <li>IV DEXAMETHASONE</li>
                    <li>ADJUNCT THERAPIES - MAGNESIUM, KETAMINE, SEVOFLURANE, AMINOPHYLINE (PAEDS)</li>
                    <li>GASTRIC DECOMPRESSION</li>
                    <li><a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">CARDIAC ARREST</a> (SPECIAL CIRCUMSTANCE)
                        <ul>
                        <li>EARLY INTUBATION (MITIGATE GASTRIC INSUFFLATION)</li>
                        <li>TUBE DISCONNECTION +/- CHEST WALL COMPRESSION</li>
                        <li>CONSIDER TENSION PNEUMOTHORAX</li>
                        <li>CONSIDER ECMO</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="supplementary-box-left">
                <strong>ADULT DOSES</strong>
                <ul style="margin-bottom: 0;">
                    <li>SALBUTAMOL MDI 12 PUFFS (1200mcg)</li>
                    <li>IPRATROPIUM BROMIDE MDI 6 PUFFS (126mcg)</li>
                    <li>ADRENALINE 10-200MCG IV BOLUS</li>
                    <li>DEXAMETHASONE 8-12MG IV</li>
                    <li>SALBUTAMOL IV (QUESTIONABLE RISK:BENEFIT) 250MCG IV</li>
                </ul>
            </div>
            <div class="supplementary-box">
                <strong>PAEDS DOSES</strong>
                <ul style="margin-bottom: 0;">
                    <li>SALBUTAMOL MDI &lt;6YRS: 6 PUFFS (600mcg) | &gt;6YRS: 12 PUFFS (1200mcg)</li>
                    <li>IPRATROPIUM BROMIDE MDI &lt;6YRS: 4 PUFFS (84mcg) | &gt;6YRS: 8 PUFFS (168mcg)</li>
                    <li>SALBUTAMOL IV 10 MCG/KG (MAX 300 MCG) OVER 10/60</li>
                    <li>ADRENALINE IV 1-10 MCG/KG IV BOLUS (MAX 100MCG)</li>
                    <li>DEXAMETHASONE 0.6MG/KG IV</li>
                    <li>MAGNESIUM SULFATE 50MG/KG IV MAX 2.47MG (10MMOL) OVER 10-20/60</li>
                    <li>AMINOPHYLINE 10MG/KG IV (MAX 500MG) OVER 30/60</li>
                </ul>
            </div>
        `
    },
    'ab-co2-low': {
        title: 'LOW END TIDAL CO2',
        content: `
            <style>
                .co2-low-actions > ul > li {
                    margin-bottom: 0.6rem !important;
                    font-size: 1.05rem;
                }
                .co2-low-branch {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 0.5rem;
                    margin-bottom: 1rem;
                }
                .co2-low-branch ul {
                    margin-top: 0.5rem;
                }
                .co2-low-actions,
                .co2-low-actions ul,
                .co2-low-actions ul li,
                .co2-low-actions span,
                .co2-low-actions p,
                .co2-low-actions strong,
                .co2-low-actions a {
                    color: #f8fafc;
                }
                .co2-low-branch ul li {
                    margin-bottom: 0.4rem !important;
                }
                .co2-low-branch-red,
                .co2-low-branch-blue {
                    background-color: rgba(56, 189, 248, 0.12);
                    border: 1px solid rgba(56, 189, 248, 0.3);
                }
                .alce-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
                @media (max-width: 768px) {
                    .alce-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="crisis-section alert-box co2-low-actions">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ABCDE CHECK</li>
                    <li style="margin-top: 1.5rem; list-style-type: none; margin-left: 0; padding-left: 0;">
                        <h3>ASSESS WAVEFORM</h3>
                        
                        <div class="co2-low-branch co2-low-branch-red">
                            <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="2 16 6 10 10 18 14 11 18 15 22 9" />
                                    <line x1="2" y1="20" x2="22" y2="20" />
                                </svg>
                                NO ETCO2 TRACE
                            </div>
                            <ul style="margin-left: 1.5rem;">
                                <li>IMMEDIATELY EXCLUDE ENDOBRONCHIAL INTUBATION / INADVERTENT EXTUBATION</li>
                                <li>CHECK SAMPLING LINE + H20 TRAP + CIRCUIT INTEGRITY</li>
                                <li>SWITCH TO BAG + ASSESS COMPLIANCE + CHEST EXPANSION</li>
                                <li>AUSCULTATE CHEST</li>
                            </ul>
                        </div>

                        <div class="co2-low-branch co2-low-branch-blue">
                            <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="2 16 6 10 10 18 14 11 18 15 22 9" />
                                    <line x1="2" y1="20" x2="22" y2="20" />
                                </svg>
                                LOW / DECREASING ETCO2 TRACE
                            </div>
                            <ul style="margin-left: 1.5rem;">
                                <li>PERI-ARREST / LOW CARDIAC OUTPUT - ANTICIPATE <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ALS</a></li>
                                <li>CHECK SAMPLING LINE + H20 TRAP + CIRCUIT INTEGRITY</li>
                                <li>SWITCH TO BAG + ASSESS COMPLIANCE + CHEST EXPANSION</li>
                                <li>CHECK AIRWAY PATENCY / POSITION</li>
                                <li>AUSCULTATE CHEST</li>
                                <li>VENT SETTINGS - ?HYPOVENTILATION / HYPERVENTILATION</li>
                            </ul>
                        </div>
                        <div style="margin-top: 1.5rem; margin-left: 0; padding-left: 0;">
                            <h3>PERSISTING LOW ETCO2 - CALL FOR HELP + DIAGNOSE</h3>
                        </div>
                    </li>
                </ul>

                <strong style="margin-top: 1.5rem; font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--text-primary); border-bottom: none; padding-bottom: 0.5rem;">DIAGNOSTIC CHECKLIST</strong>
                
                <div class="alce-grid">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">DECREASED PRODUCTION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">HYPOTHERMIA</li>
                            <li style="margin-bottom: 0;">HYPOTHYROIDISM</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">INCREASED ELIMINATION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0;">HYPERVENTILATION</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">ALVEOLAR HYPOVENTILATION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=ab-laryngospasm" style="text-decoration: underline;">LARYNGOSPASM</a></li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a></li>
                            <li style="margin-bottom: 0.4rem;">ETT OBSTRUCTION</li>
                            <li style="margin-bottom: 0.4rem;">AIRWAY DISPLACEMENT</li>
                            <li style="margin-bottom: 0;">INCREASED DEAD SPACE</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">DECREASED PULMONARY PERFUSION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">SEVERE <a href="crisis.html?id=c-hypotension" style="text-decoration: underline;">HYPOTENSION</a></li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=c-anaphylaxis" style="text-decoration: underline;">ANAPHYLAXIS</a></li>
                            <li style="margin-bottom: 0.4rem;">TENSION / TAMPONADE</li>
                            <li style="margin-bottom: 0;"><a href="crisis.html?id=c-embolism" style="text-decoration: underline;">AIR / GAS EMBOLISM</a></li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">SAMPLING ERROR</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">ENTRAINMENT</li>
                            <li style="margin-bottom: 0.4rem;">HIGH FRESH GAS FLOWS</li>
                            <li style="margin-bottom: 0;">SAMPLING CHAMBER ERROR</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'ab-co2-high': {
        title: 'HIGH END TIDAL CO2',
        content: `
            <style>
                .co2-high-actions,
                .co2-high-actions ul,
                .co2-high-actions ul li,
                .co2-high-actions span,
                .co2-high-actions p,
                .co2-high-actions strong,
                .co2-high-actions a {
                    color: #f8fafc;
                }
                .alce-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
                @media (max-width: 768px) {
                    .alce-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="crisis-section alert-box co2-high-actions">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ABCDE CHECK</li>
                    <li>ASSESS ETCO2 WAVEFORM - RISING BASELINE: CHECK FOR REBREATHING (EXHAUSTED SODA LIME / INADEQUATE FGF) OR RISING PHASE III: ?HYPOVENTILATION</li>
                    <li>EXCLUDE COMMON CAUSES - LOW MV, EXHAUSTED SODA LIME, INADEQUATE FGF</li>
                    <li>CONSIDER CAUSES AS PER DIAGNOSTIC CHECKLIST</li>
                </ul>

                <strong style="margin-top: 1.5rem; font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--text-primary); border-bottom: none; padding-bottom: 0.5rem;">DIAGNOSTIC CHECKLIST</strong>
                
                <div class="alce-grid">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">INCREASED PRODUCTION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=e-mh" style="text-decoration: underline;">MH</a></li>
                            <li style="margin-bottom: 0.4rem;">SEPSIS</li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=e-thyroid" style="text-decoration: underline;">THYROID STORM</a></li>
                            <li style="margin-bottom: 0.4rem;">NMS / SS</li>
                            <li style="margin-bottom: 0.4rem;">REPERFUSION</li>
                            <li style="margin-bottom: 0;">SODIUM BICARBONATE ADMINISTRATION</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">DECREASED ELIMINATION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">AIRWAY OBSTRUCTION (APPARATUS OR PATIENT)</li>
                            <li style="margin-bottom: 0.4rem;">VALVE DYSFUNCTION</li>
                            <li style="margin-bottom: 0;">INCREASED DEAD SPACE</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },

    'ab-NECK HAEMATOMA POST THYROID SURGERY': {
        title: 'NECK HAEMATOMA POST THYROID SURGERY',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>LOW THRESHOLD FOR REVIEW (PATIENT ANXIETY / NURSING STAFF CONCERN) DO NOT WAIT FOR LATE SIGNS (STRIDOR / HYPOXIA)</li>
                    <li>ABCDE CHECK + CALL FOR HELP (SENIOR ENT + ANAESTHETICS) + ADVISE THEATRE</li>
                    <li>POSITION PT 45 DEGREES + APPLY 15L/MIN O2</li>
                    <li>RETRIEVE BEDSIDE HAEMATOMA KIT + SUCTION + GAUZE</li>
                    <li style="list-style-type: none; margin-left: 0; padding-left: 0;">
                        <div style="background-color: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 0.5rem; padding: 1rem; margin: 0.5rem 0 1rem 0;">
                            <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; margin-bottom: 0.4rem;">SIGNS OF AIRWAY COMPROMISE</div>
                            <div style="margin-bottom: 0.4rem;">(STRIDOR, HYPOXIA, DYSPNOEA, EVOLVING HAEMATOMA / BLEEDING) &rarr; EVACUATE HAEMATOMA</div>
                            <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
                                <li>1) TRANSVERSE SUBCUTICULAR LAYER</li>
                                <li>2) TRANSVERSE SUBCUTANEOUS LAYER</li>
                                <li>3) HORIZONTAL STRAP MUSCLE SUTURES</li>
                            </ul>
                        </div>
                    </li>
                    <li>IF AIRWAY COMPROMISE PERSISTS POST HAEMATOMA EVACUATION &rarr; CONVENTIONAL RSI FROM ABOVE</li>
                    <li>UNSUCCESSFUL &rarr; PROCEED TO FONA / <a href="crisis.html?id=ab-CICO" class="cico-btn">CICO</a></li>
                </ul>

                <h3>PAUSE AND PLAN</h3>
                <ul>
                    <li>AIRWAY COMPROMISE RESOLVED &rarr; ?RETURN TO OT</li>
                </ul>
            </div>
        `
    },
    'ab-hypoxia': {
        title: 'HYPOXIA / LOW SPO2',
        content: `
            <style>
                .hypoxia-actions > ul > li {
                    margin-bottom: 0.6rem !important;
                    font-size: 1.05rem;
                }
                .hypoxia-branch {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 0.5rem;
                    margin-bottom: 1rem;
                }
                .hypoxia-branch ul {
                    margin-top: 0.5rem;
                }
                .hypoxia-actions,
                .hypoxia-actions ul,
                .hypoxia-actions ul li,
                .hypoxia-actions span,
                .hypoxia-actions p,
                .hypoxia-actions strong {
                    color: #f8fafc;
                }
                .hypoxia-branch ul li {
                    margin-bottom: 0.4rem !important;
                }
                .hypoxia-branch-red,
                .hypoxia-branch-blue {
                    background-color: rgba(56, 189, 248, 0.12);
                    border: 1px solid rgba(56, 189, 248, 0.3);
                }
                .alce-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
                @media (max-width: 768px) {
                    .alce-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="crisis-section alert-box hypoxia-actions">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>&uarr; FiO2/FGF + ABCDE CHECK</li>
                    <li>CONFIRM READING - CHECK PROBE POSITION, PT COLOUR + PERIPHERAL TEMP</li>
                    <li>IF ABLE POSITION PATIENT HEAD UP / REVERSE TRENDELENBURG</li>
                    <li>SWITCH TO BAG - ASSESS COMPLIANCE + CHEST EXPANSION</li>
                    <li style="margin-top: 1.5rem; list-style-type: none; margin-left: 0; padding-left: 0;">
                        <h3>ASSESS CO2 WAVEFORM</h3>
                        
                        <div class="hypoxia-branch hypoxia-branch-red">
                            <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="2 16 6 10 10 18 14 11 18 15 22 9" />
                                    <line x1="2" y1="20" x2="22" y2="20" />
                                </svg>
                                CO2 TRACE ABSENT / ALTERED
                            </div>
                            <ul style="margin-left: 1.5rem;">
                                <li>CHECK CIRCUIT CONNECTIONS</li>
                                <li>CONSIDER LOW CARDIAC OUTPUT / ?IMPENDING <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ARREST</a></li>
                                <li>BAG MASK VENTILATE - ASSESS AIRWAY POSITION / PATENCY</li>
                                <li>AUSCULTATE CHEST - MX <a href="crisis.html?id=ab-laryngospasm" style="text-decoration: underline;">LARYNGOSPASM</a> / <a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a></li>
                            </ul>
                        </div>

                        <div class="hypoxia-branch hypoxia-branch-blue">
                             <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="2 16 6 10 10 18 14 11 18 15 22 9" />
                                    <line x1="2" y1="20" x2="22" y2="20" />
                                </svg>
                                CO2 TRACE UNCHANGED
                            </div>
                            <ul style="margin-left: 1.5rem;">
                                <li>CONFIRM GAS FLOW / FiO2</li>
                                <li>CONSIDER ENDOBRONCHIAL INTUBATION</li>
                                <li>CONSIDER SHUNT - EXAMINE CHEST / NECK VEINS +/- CXR / LUNG USS</li>
                            </ul>
                        </div>
                        <div style="margin-top: 1.5rem; margin-left: 0; padding-left: 0;">
                            <h3>PERSISTING HYPOXIA - CALL FOR HELP + DIAGNOSE</h3>
                        </div>
                    </li>
                </ul>

                <strong style="margin-top: 1.5rem; font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--text-primary); border-bottom: none; padding-bottom: 0.5rem;">DIAGNOSTIC CHECKLIST</strong>
                
                <div class="alce-grid">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">AIRWAY</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">INADVERTENT EXTUBATION / ENDOBRONCHIAL</li>
                            <li style="margin-bottom: 0.4rem;">ETT DISCONNECTION</li>
                            <li style="margin-bottom: 0.4rem;">ETT OBSTRUCTION</li>
                            <li style="margin-bottom: 0;"><a href="crisis.html?id=ab-laryngospasm" style="text-decoration: underline;">LARYNGOSPASM</a></li>
                        </ul>
                    </div>

                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">LUNGS</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a> / SPUTUM PLUGGING</li>
                            <li style="margin-bottom: 0.4rem;">PNEUMOTHORAX / CAPNOTHORAX</li>
                            <li style="margin-bottom: 0.4rem;">PULMONARY OEDEMA</li>
                            <li style="margin-bottom: 0;"><a href="crisis.html?id=ab-aspiration" style="text-decoration: underline;">ASPIRATION</a> / CONSOLIDATION</li>
                        </ul>
                    </div>

                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">CIRCULATION</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">&darr; CARDIAC OUTPUT / <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ARREST</a></li>
                            <li style="margin-bottom: 0.4rem;">IMPAIRED VENOUS RETURN (PNEUMOPERITONEUM)</li>
                            <li style="margin-bottom: 0.4rem;">EMBOLUS (AIR, THROMBUS, FAT, CEMENT)</li>
                            <li style="margin-bottom: 0;">SHUNT - PE, ATELECTASIS, R>L CARDIAC</li>
                        </ul>
                    </div>

                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">EQUIPMENT</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">OXYGEN SUPPLY FAILURE (PIPELINE / CYLINDER)</li>
                            <li style="margin-bottom: 0.4rem;">CIRCUIT / VALVE DYSFUNCTION</li>
                            <li style="margin-bottom: 0.4rem;">HYPOXIC MIXTURE</li>
                            <li style="margin-bottom: 0;">PROBE FAILURE / POOR PERFUSION SIGNAL</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'ab-laryngospasm': {
        title: 'LARYNGOSPASM',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>100% O2 / ↑FGF</li>
                    <li>CPAP 30cmH2O</li>
                    <li>JAW THRUST +/- LARSON's MANOEUVRE</li>
                    <li>GENTLE TIMED PPV BETWEEN PT BREATHS</li>
                    <li>PROPOFOL BOLUS 1-3MG/KG</li>
                </ul>

                <h3>HYPOXIA / SATS <90%</h3>
                <ul>
                    <li>CALL FOR HELP</li>
                    <li>SUXAMETHONIUM 2MG/KG IV OR 4MG/KG IM/IL</li>
                    <li>SUXAMETHONIUM CONTRAINDICATED - IV ROCURONIUM 1MG/KG, IM 1-2MG/KG (OFF LABEL, CASE REPORTS ONLY)  </li>
                </ul>

                <h3>MX COMPLICATIONS</h3>
                <ul>
                    <li>BRADYCARDIA - ATROPINE IM/IV 20MCG/KG</li>
                    <li>GASTRIC INSUFFLATION - CONSIDER GASTRIC DECOMPRESSION</li>
                </ul>
            </div>
        `
    },

    'ab-pressure': {
        title: 'HIGH AIRWAY PRESSURE',
        content: `
            <style>
                .pressure-actions > ul > li {
                    margin-bottom: 0.6rem !important;
                    font-size: 1.05rem;
                }
                .pressure-actions ul li {
                    margin-bottom: 0.4rem !important;
                }
                .pressure-actions,
                .pressure-actions ul,
                .pressure-actions ul li,
                .pressure-actions span,
                .pressure-actions p,
                .pressure-actions strong,
                .pressure-actions a {
                    color: #f8fafc;
                }
                .pressure-branch {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 0.75rem;
                    margin-bottom: 1rem;
                    background-color: rgba(56, 189, 248, 0.12);
                    border: 1px solid rgba(56, 189, 248, 0.3);
                }
                .pressure-branch ul {
                    margin-top: 0.5rem;
                    margin-left: 1.5rem;
                }
                .pressure-branch-title {
                    font-weight: 900;
                    color: rgb(56, 189, 248);
                    font-size: 1.1rem;
                }
                .pressure-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
                @media (max-width: 768px) {
                    .pressure-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="crisis-section alert-box pressure-actions">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CONFIRM DEPTH / PARALYSIS</li>
                    <li>SWITCH TO BAG - ASSESS COMPLIANCE + CHEST EXPANSION</li>
                    <li>AUSCULTATE CHEST</li>
                    <li>CONSIDER AUTOPEEP / BREATH STACKING</li>
                    <li style="list-style-type: none; margin-left: 0; padding-left: 0;">
                        <div class="pressure-branch">
                            <div class="pressure-branch-title">ASSESS ETCO2 WAVEFORM</div>
                            <ul>
                                <li>CURARE CLEFT (VENTILATOR DYSSNCHRONY)</li>
                                <li>BIFID (ENDOBRONCHIAL)</li>
                                <li>INCREASED ALPHA ANGLE (BRONCHOSPASM)</li>
                            </ul>
                        </div>

                        <div class="pressure-branch">
                            <div class="pressure-branch-title">SYSTEMATICALLY ASSESS AIRWAY / BREATHING APPARATUS</div>
                            <ul>
                                <li>ETT - PLUGGING / KINKING (SUCTION +/- BRONCHOSCOPY)</li>
                                <li>OBSTRUCTED / CRUSHED CIRCUIT</li>
                                <li>VALVE DYSFUNCTION</li>
                                <li>VENTILATOR FAILURE</li>
                            </ul>
                        </div>
                    </li>
                    <li style="margin: 1rem 0 1rem 0;"><h3>NO CAUSE IDENTIFIED - CALL FOR HELP</h3></li>
                    <li>SWITCH TO BVM WITH NEW FILTER (TIVA SWITCH IF REQUIRED)</li>
                    <li>CONSIDER REPLACING ETT / LMA</li>
                    <li>WORK THROUGH DIAGNOSTIC CHECKLIST</li>
                </ul>

                <strong style="margin-top: 1.5rem; font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--text-primary); border-bottom: none; padding-bottom: 0.5rem;">DIAGNOSTIC CHECKLIST</strong>
                <div class="pressure-grid">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">EQUIPMENT</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">VENTILATOR / BAG SWITCH</li>
                            <li style="margin-bottom: 0.4rem;">VENTILATOR SETTINGS</li>
                            <li style="margin-bottom: 0.4rem;">TUBE OBSTRUCTION / KINKING</li>
                            <li style="margin-bottom: 0.4rem;">OBSTRUCTION / CRUSH (CIRCUIT)</li>
                            <li style="margin-bottom: 0.4rem;">BLOCKED HME</li>
                            <li style="margin-bottom: 0.4rem;">INSP / EXP VALVE DYSFUNCTION</li>
                            <li style="margin-bottom: 0.4rem;">APL VALVE DYSFUNCTION</li>
                            <li style="margin-bottom: 0;">O2 FLUSH VALVE STUCK</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">PATIENT</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=ab-laryngospasm" style="text-decoration: underline;">LARYNGO</a> / <a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a></li>
                            <li style="margin-bottom: 0.4rem;">AUTOPEEP</li>
                            <li style="margin-bottom: 0.4rem;">FOREIGN BODY / INVASIVE LESION</li>
                            <li style="margin-bottom: 0.4rem;">PNEUMOTHORAX / CAPNOTHORAX</li>
                            <li style="margin-bottom: 0.4rem;">PNEUMOPERITONEUM</li>
                            <li style="margin-bottom: 0.4rem;">STEEP TRENDELENBURG</li>
                            <li style="margin-bottom: 0.4rem;">CHEST WALL RIGIDITY</li>
                            <li style="margin-bottom: 0.4rem;">FOREIGN BODY COMPRESSION (SURGEON / ROBOT)</li>
                            <li style="margin-bottom: 0.4rem;">ADIPOSITY++</li>
                            <li style="margin-bottom: 0.4rem;">PULMONARY OEDEMA / FIBROSIS</li>
                            <li style="margin-bottom: 0;">ARDS / CONSOLIDATION / CONTUSION</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },

    // C

    'c-anaphylaxis': {
        title: 'ANAPHYLAXIS',
        content: `
            <div class="supplementary-box">
                <strong>SEVERITY GRADING</strong>
                <ul>
                    <li><strong>GRADE 1 (MILD)</strong> - ERYTHEMA / URTICARIA +/- ANGIOOEDEMA</li>
                    <li><strong>GRADE 2 (MODERATE)</strong> - CVS / RESP INVOLVEMENT (HYPOTENSION, TACHYCARDIA, BRONCHOSPASM)</li>
                    <li><strong>GRADE 3 (LIFE-THREATENING)</strong> - HYPOTENSION / TACHYCARDIA / DYSRRHYTHMIA, SEVERE BRONCHOSPASM +/- AIRWAY OEDEMA (LOW PERFUSION MAY MASK MUCOCUTANOUS SIGNS)</li>
                    <li><strong>GRADE 4 (ARREST)</strong> - CARDIAC / RESPIRATORY ARREST</li>
                </ul>
            </div>
            <div class="supplementary-box-left">
                <strong>POST CRISIS MX</strong>
                <ul>
                    <li>STEROIDS</li>
                    <li>PO ANTIHISTAMINES (WHEN STABLE)</li>
                    <li>TRYPTASES AT 1, 4 AND 24 HOURS</li>
                    <li>COAG SCREEN (IF PROCEEDING WITH SURGERY)</li>
                    <li>REFERRAL TO ALLERGY CLINIC</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CALL FOR ASSISTANCE / RETRIEVE ANAPHYLAXIS BOX</li>
                    <li>↑ FIO2 / REVIEW DEPTH OF ANAESTHESIA</li>
                    <li>CEASE OFFENDING AGENT (IRRIGATE CHLORHEX, CHECK INFUSIONS)</li>
                    <li>CONSIDER EARLY ETT</li>
                    <li>OPEN FLUID LINE - 20ML/KG BOLUS</li>
                    <li>ASSESS CAPNOGRAPHY / AUSCULTATE CHEST - MX <a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a></li>
                </ul>
                <h3>ADRENALINE (PRIORITY)</h3>
                <ul>
                    <li>MODERATE
                        <ul>
                            <li>ADULT - 500 MCG IM Q5M, 20 MCG IV Q1M</li>
                            <li>PAEDS
                                <ul>
                                    <li>&lt; 6YRS 150 MCG IM Q5M, 2 MCG/KG IV Q1M</li>
                                    <li>&gt; 6YRS 300 MCG IM Q5M, 2 MCG/KG IV Q1M</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>LIFE THREATENING 
                        <ul>
                            <li>ADULT - 100-200 MCG Q1M</li>
                            <li>PAED - 4-10 MCG/KG Q1M</li>
                        </ul>
                    </li>
                    <li>ARREST
                        <ul>
                            <li>AS PER <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ALS</a> - CONSIDER ↑ BOLUS FREQUENCY &lt;Q4M</li>
                        </ul>
                    </li>
                </ul>
                <h3>REFRACTORY MANAGEMENT</h3>
                <ul>
                    <li>SPECIALISED HELP - CONSIDER TOE/TTE +/- ECMO</li>
                    <li>REPEAT FLUID BOLUS 50ML/KG ADULT, 20-40ML/KG PAED</li>
                </ul>
                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">ADDITIONAL VASOPRESSOR</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li><span style="color: #e5e7eb; font-weight: 800;">ADULT</span>
                            <ul>
                                <li>NORADRENALINE 3-40MCG/MIN</li>
                                <li>VASOPRESSIN BOLUS 1-2 UNITS THEN 2 UNITS/HR</li>
                                <li>ALTERNATIVE - METARAMINOL OR PHENYLEPHRINE</li>
                                <li>GLUCAGON 1-2 MG IV Q5M (PT ON BETA BLOCKERS)</li>
                            </ul>
                        </li>
                        <li><span style="color: #e5e7eb; font-weight: 800;">PAED</span>
                            <ul>
                                <li>NORADRENALINE 0.1-2 MCG/KG/MIN
                                    <ul style="margin: 0.2rem 0 0 0; padding-left: 1rem; list-style-type: circle;">
                                        <li style="margin-bottom: 0; font-size: 0.9rem;">0.15MG/KG IN 50ML, RUN AT 2-40ML/HR</li>
                                    </ul>
                                </li>
                                <li>VASOPRESSIN 0.02-0.06 UNITS/KG/HR
                                    <ul style="margin: 0.2rem 0 0 0; padding-left: 1rem; list-style-type: circle;">
                                        <li style="margin-bottom: 0.1rem; font-size: 0.9rem;">1 UNIT/KG IN 50ML</li>
                                        <li style="margin-bottom: 0; font-size: 0.9rem;">2ML BOLUS THEN 1-3ML/HR</li>
                                    </ul>
                                </li>
                                <li>GLUCAGON 40MCG/KG IV Q5M TO MAX 1MG</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 0;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">RESISTANT <a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a></div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li><span style="color: #e5e7eb; font-weight: 800;">ADULT</span>
                            <ul>
                                <li>SALBUTAMOL
                                    <ul style="margin: 0.2rem 0 0 0; padding-left: 1rem; list-style-type: circle;">
                                        <li style="margin-bottom: 0.1rem; font-size: 0.9rem;">pMDI x12 100MCG PUFFS</li>
                                        <li style="margin-bottom: 0; font-size: 0.9rem;">BOLUS 100-200MCG +/- INFUSION 5-25MCG/MIN</li>
                                    </ul>
                                </li>
                                <li>MgSO4 - 8MMOL OVER 20MIN</li>
                                <li>CONSIDER LOW DOSE VOLATILE +/- KETAMINE</li>
                            </ul>
                        </li>
                        <li><span style="color: #e5e7eb; font-weight: 800;">PAED</span>
                            <ul>
                                <li>SALBUTAMOL pMDI 6 PUFFS &lt;6 YEARS 12 PUFFS &gt; 6 YEARS.</li>
                                <li>SALBUTAMOL INFUSION AS PER LOCAL PROTOCOL</li>
                                <li>MgSO4 50MG/KG (MAX 2G) OVER 20/60</li>
                                <li>AMINOPHYLINE 10MG/KG OVER 1/24 (MAX 500MG)</li>
                                <li>HYDROCORTISONE 2-4MG/KG (MAX 200MG) IV</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    'c-cardiac-arrest': {
        title: 'ADULT CARDIAC ARREST / ALS <br><a href="crisis.html?id=p-arrest" class="primary-btn" style="font-size: 0.55em; line-height: 1.2; padding: 0.6rem 1.2rem; margin-top: 0.5rem; display: inline-block; text-decoration: none; border: 1px solid currentColor;">GO TO<br>PAED ALS</a>',
        content: `
            <div class="supplementary-box als-box" style="top: 45%;">
                <h3>CORRECTIBLE CAUSES (4Hs & Ts)</h3>
                <ul>
                    <li>HYPOXIA</li>
                    <li>HYPOVOLAEMIA</li>
                    <li>HYPO/HYPERKALAEMIA</li>
                    <li>HYPOTHERMIA</li>
                    <li>TENSION</li>
                    <li>TAMPONADE</li>
                    <li>TOXINS</li>
                    <li>THROMBUS</li>
                </ul>
            </div>
            <div class="supplementary-box-left als-box">
                <strong>COACHED</strong>
                <ul>
                    <li>CONTINUE COMPRESSIONS</li>
                    <li>OXYGEN AWAY</li>
                    <li>ALL ELSE CLEAR</li>
                    <li>CHARGING</li>
                    <li>HANDS OFF</li>
                    <li>EVALUATE RHYTHM</li>
                    <li>DEFIBRILLATE OR DISARM</li>
                </ul>
            </div>
            <div class="crisis-section alert-box als-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ACTIVATE CODE BLUE</li>
                    <li>INITIATE HIGH PERFORMANCE CPR @ 30:2</li>
                    <li>SUPRAGLOTTIC AIRWAY / LMA &gt; CPR @ 15:1</li>
                    <li>PRIORITISE EARLY DEFIBRILLATION
                        <ul>
                            <li>3 STACKED SHOCKS IF WITNESSED + MONITORED VF/VT</li>
                        </ul>
                    </li>
                    <li>PREPARE IV ADRENALINE (Q4M OR IMMEDIATE IF PEA)</li>
                    <li>IO ACCESS IF NO IV</li>
                    <li>COACHED APPROACH Q2MINS</li>
                    <li>SHOCKABLE RHYTHM - 200J</li>
                    <li>SHOCKABLE - AMIODARONE / LIGNOCAINE (<a href="#adult-als-drugs-dosing" style="text-decoration: underline;">SEE BELOW</a>)</li>
                </ul>

                <h3>CONSIDER SPECIAL CIRCUMSTANCES</h3>
                <ul>
                    <li>POST CARDIAC SURGERY (<a href="crisis.html?id=c-cals" style="text-decoration: underline;">CALS</a>)</li>
                    <li><a href="crisis.html?id=c-anaphylaxis" style="text-decoration: underline;">ANAPHYLAXIS</a></li>
                    <li>TRAUMA
                        <ul>
                            <li>PRIORITISE AS REQUIRED:
                                <ul>
                                    <li>HAEMORRHAGE CONTROL</li>
                                    <li>AIRWAY PATENCY (MANOUVERS +/- ETT / LMA / <a href="crisis.html?id=ab-CICO" class="cico-btn">FONA</a>)</li>
                                    <li>BREATHING (VENTIALTION, CHEST DECOMPRESSION, PERICARDIOCENTESIS, RESUSCITATIVE THORACOTOMY)</li>
                                    <li>CIRCULATION (RESTORATION OF CIRCULATING VOLUME, PELVIC SPLINTING)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="crisis.html?id=o-arrest" style="text-decoration: underline;">PREGNANCY</a></li>
                    <li>HYPOTHERMIA
                        <ul>
                            <li>ANTICIPATE PROLONGED RESUSCITATION:
                                <ul>
                                    <li>MECHANICAL CPR</li>
                                    <li>ACTIVE REWARMING</li>
                                    <li>ECMO CONSIDERATION</li>
                                </ul>
                            </li>
                            <li>IF NO RESPONSE TO SHOCK + Vf - WH UNTIL &gt; 30°C</li>
                            <li>ADRENALINE - WH UNTIL &gt; 30°C, X2 DOSING INTERVALS 30-34°C</li>
                        </ul>
                    </li>
                    <li><a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">ASTHMA</a></li>
                    <li><a href="crisis.html?id=e-last" style="text-decoration: underline;">LAST</a></li>
                    <li>PULMONARY EMBOLISM
                        <ul>
                            <li>SUSPECTED CAUSE - CONSIDER THROMBOLYSIS</li>
                            <li>CONFIRMED CAUSE - CONSIDER THROMBOLYSIS +/- PULMONARY THROMBECTOMY</li>
                            <li>MECHANICAL / PROLONGED CPR POST THROMBOLYSIS</li>
                        </ul>
                    </li>
                    <li>ORGANOPHOSPHATES
                        <ul>
                            <li>BRADYCARDIA - ATROPINE+++ (2-4MG DOSES)</li>
                        </ul>
                    </li>
                    <li>CYANIDE
                        <ul>
                            <li>CONSIDER HYDROXYCOBALAMIN + SODIUM THIOSULFATE</li>
                        </ul>
                    </li>
                    <li>TCA TOXICITY
                        <ul>
                            <li>SODIUM BICARBONATE + HYPERVENTILATION</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="adult-als-drugs-dosing" class="drugs-dosing-box" style="order: 3; background-color: rgba(59, 130, 246, 0.1); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 0.8rem; padding: 1.2rem; margin-top: 1.5rem;">
                <h3>DRUGS & DOSING</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">ADRENALINE</div>
                        <div style="font-size: 0.7rem;">PEA: 1MG STAT</div>
                        <div style="font-size: 0.7rem;">VF/VT: 1MG EVERY 2ND CYCLE</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(ALL CARDIAC ARREST RHYTHMS)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">AMIODARONE</div>
                        <div style="font-size: 0.7rem;">300MG AFTER 3RD SHOCK</div>
                        <div style="font-size: 0.7rem;">150MG AFTER 7TH SHOCK</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;"></div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">LIGNOCAINE</div>
                        <div style="font-size: 0.7rem;">100MG AFTER 5TH SHOCK</div>
                        <div style="font-size: 0.7rem;">50MG AFTER 9TH SHOCK</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;"></div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">POTASSIUM CHLORIDE</div>
                        <div style="font-size: 0.7rem;">5MMOL IV BOLUS</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(↓K)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">SODIUM BICARBONATE</div>
                        <div style="font-size: 0.7rem;">1MMOL/KG IV (8.4% = 1MMOL/ML)</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(ACIDOSIS, ↑K, TCA OD, ARREST >15MIN)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">MAGNESIUM SULFATE</div>
                        <div style="font-size: 0.7rem;">5MMOL (2.5G) IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(TORSADES, DIGOXIN TOX, ↓K/Mg)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">CALCIUM</div>
                        <div style="font-size: 0.7rem;">CaCl 10ML 10% IV</div>
                        <div style="font-size: 0.7rem;">CaGluc 30ML 10% IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(↑K, ↓Ca, CCB OD)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">ALTEPLASE</div>
                        <div style="font-size: 0.7rem;">100MG IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(PE / THROMBUS)</div>
                    </div>
                </div>
            </div>
        `
    },
    'c-cals': {
        title: 'ARREST POST CARDIAC SURGERY',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ACTIVATE CODE BLUE / ALERT CARDIOTHORACIC TEAM</li>
                    <li>WITHHOLD CPR FOR 60 SECS
                        <ul>
                            <li>VF/VT - THREE STACKED SHOCKS</li>
                            <li>ASYSTOLE / BRADYCARDIA - ATTEMPT PACING (IF WIRES INSITU)</li>
                            <li>PEA - PAUSE PACING - EXCLUDE FINE VF</li>
                        </ul>
                    </li>
                </ul>
                <h3>ARREST PERSISTS AT 60 SECS</h3>
                <ul>
                    <li>INITIATE CPR 30:2</li>
                    <li>PREPARE FOR RESTERNOTOMY - CHEST OPEN &lt;5MIN</li>
                    <li>JUDICIOUS ADRENALINE ONLY (SENIOR CLINICIAN DISCRETION)</li>
                    <li>SWITCH TO BVM, CONFIRM ETT PLACEMENT/PATENCY</li>
                    <li>CONFIRM BILATERAL AIR ENTRY</li>
                </ul>
            </div>
        `
    },
    'c-hypotension': {
        title: 'HYPOTENSION',
        content: `
            <style>
                .hypotension-actions > ul > li {
                    margin-bottom: 0.6rem !important;
                    font-size: 1.05rem;
                }
                .hypotension-actions ul li {
                    margin-bottom: 0.4rem !important;
                }
                .hypotension-actions,
                .hypotension-actions ul,
                .hypotension-actions ul li,
                .hypotension-actions span,
                .hypotension-actions p,
                .hypotension-actions strong,
                .hypotension-actions a {
                    color: #f8fafc;
                }
                .hypotension-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
            </style>

            <div class="crisis-section alert-box hypotension-actions">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CONFIRM MEASUREMENT ACCURACY</li>
                    <li>TEMPORISE (FLUID LINE OPEN / VASOPRESSOR / TRENDELENBERG)</li>
                    <li>SCAN MONITORS + ABCDE CHECK +/- CALL FOR HELP</li>
                    <li>SEVERE HYPOTENSION → ANTICIPATE / PREPARE FOR <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ALS</a></li>
                </ul>
                
                <h3 style="color: #22c55e; font-size: 1.15rem; margin: 2rem 0 1rem 0; font-weight: 900; text-transform: uppercase;">PERSISTENT HYPOTENSION - CALL FOR HELP + DIAGNOSE</h3>
                <ul style="margin: 0 0 1rem 0;">
                    <li>HELP - CONSIDER TTE / TOE / ART LINE / CVP MONITORING)</li>
                </ul>
                <strong style="margin-top: 1.5rem; font-size: 1.1rem; display: block; margin-bottom: 0.5rem; color: var(--text-primary); border-bottom: none; padding-bottom: 0.5rem;">DIAGNOSTIC CHECKLIST</strong>
                <div class="hypotension-grid">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">DECREASED PRELOAD</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">HYPOVOLAEMIA (HAEMORRHAGE / DEHYDRATION / CAPILLARY LEAK EG. BURNS)</li>
                            <li style="margin-bottom: 0.4rem;">IMPAIRED VENOUS RETURN (PNEUMOPERITONEUM / REVERSE TRENDELENBERG / ABDOMINAL COMPARTMENT SYNDROME / IVC COMPRESSION / PREGNANCY)</li>
                            <li style="margin-bottom: 0.4rem;">REDUCED RV OUTPUT (TAMPONADE / TENSION / EMBOLISM / RV INFARCT)</li>
                            <li style="margin-bottom: 0.4rem;">IMPAIRED PULMONARY FLOW (HIGH PEEP / autoPEEP / SEVERE PHT)</li>
                            <li style="margin-bottom: 0;">LEFT ATRIAL DYSFUNCTION (MITRAL STENOSIS / ATRIAL MYXOMA)</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">REDUCED CONTRACTILITY</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">PHARMACOLOGICAL DEPRESSION</li>
                            <li style="margin-bottom: 0.4rem;">MYOCARDIAL ISCHAEMIA</li>
                            <li style="margin-bottom: 0.4rem;">CARDIAC FAILURE</li>
                            <li style="margin-bottom: 0.4rem;">DYSRHYTHMIA</li>
                            <li style="margin-bottom: 0.4rem;">VALVE DISEASE</li>
                            <li style="margin-bottom: 0;">INCREASED SVR</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">REDUCED SVR</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">PHARMACOLOGICAL (VOLATILES / IV ANAESTHETIC AGENTS / ANTIHYPERTENSIVES / OPIOIDS / REGIONAL ANAESTHESIA / DRUG ERROR)</li>
                            <li style="margin-bottom: 0.4rem;">PATHOLOGIC VASODILATATION (ANAPHYLAXIS / SEPSIS / SIRS / NEUROGENIC SHOCK / POST BYPASS VASOPLEGIA / THYROID STORM / CARCINOID CRISIS / ADRENAL INSUFFICIENCY / AUTONOMIC DYSFUNCTION)</li>
                            <li style="margin-bottom: 0;">OTHER (TOURNIQUET OR CLAMP RELEASE / BONE CEMENT IMPLANTATION SYNDROME)</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'c-bradycardia': {
        title: 'BRADYCARDIA',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CONFIRM READING, SCAN MONITORS, ABCDE CHECK</li>
                    <li>COMMUNICATE WITH SURGEON - REMOVE STIMULUS</li>
                </ul>

                <h3>ADEQUATELY PERFUSED / CLINICALLY STABLE</h3>
                <ul>
                    <li>PAUSE, ASSESS AND <a href="#bradycardia-potential-causes" style="text-decoration: underline;">DIAGNOSE CAUSE</a></li>
                </ul>

                <h3>INADEQUATELY PERFUSED / CLINICALLY UNSTABLE / SYMPTOMATIC</h3>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">1ST LINE - PHARMACOLOGICAL</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">ATROPINE 10-20MCG/KG (ADULT 500 - 1000MCG)</li>
                        <li style="margin-bottom: 0.4rem;">GLYCOPYRROLATE 5MCG/KG (ADULT 200-400MCG)</li>
                        <li style="margin-bottom: 0.4rem;">EPHEDRINE 100MCG/KG (ADULT 3-12MG)</li>
                        <li style="margin-bottom: 0.4rem;">ISOPRENALINE (ADULT - START AT 5MCG/MIN)</li>
                        <li style="margin-bottom: 0;">ADRENALINE (ADULT 10-100MCG BOLUS)</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">2ND LINE - TRANSCUTANEOUS / TRANSVENOUS PACING</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">APPLY PADS + ECG LEADS</li>
                        <li style="margin-bottom: 0.4rem;">PROVIDE ANALGESIA / LIGHT SEDATION</li>
                        <li style="margin-bottom: 0.4rem;">SELECT DEMAND PACING MODE</li>
                        <li style="margin-bottom: 0.4rem;">START AT 30mA + HR 60-70</li>
                        <li style="margin-bottom: 0.4rem;">UPTITRATE UNTIL ELECTROMECHANICAL CAPTURE</li>
                        <li style="margin-bottom: 0.4rem;">SET @ 10 mA ABOVE CAPTURE</li>
                        <li style="margin-bottom: 0;">CONSIDER FIXED PACING IF SIGNIFICANT EMI / ARTIFACT PRESENT EG. PREHOSPITAL</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">SUSPECTED TOXIDROME (B-BLOCKERS / CALCIUM CHANNEL BLOCKERS)</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">BBS - CONSIDER HIGH DOSE INSULIN EUGLYCAEMIC THERAPY (PROPANOLOL - CONSIDER SODIUM BICARBONATE)</li>
                        <li style="margin-bottom: 0;">CCBS - AS PER BBS + CONSIDER CALCIUM CHLORIDE</li>
                    </ul>
                </div>

                <h3 id="bradycardia-potential-causes">POTENTIAL CAUSES</h3>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">PRIMARY</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">FIT AND HEALTHY</li>
                        <li style="margin-bottom: 0.4rem;">IHD</li>
                        <li style="margin-bottom: 0.4rem;">SICK SINUS SYNDROME</li>
                        <li style="margin-bottom: 0.4rem;">CONDUCTION SYSTEM DISEASE</li>
                        <li style="margin-bottom: 0.4rem;">VALVULAR DISEASE</li>
                        <li style="margin-bottom: 0.4rem;">MYOCARDITIS</li>
                        <li style="margin-bottom: 0.4rem;">CARDIOMYOPATHY</li>
                        <li style="margin-bottom: 0;">POST CARDIAC SURGERY (INCLUDING TAVI)</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">SECONDARY</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">HIGH VAGAL TONE</li>
                        <li style="margin-bottom: 0.4rem;">ELECTROLYTE DISTURBANCE</li>
                        <li style="margin-bottom: 0.4rem;">REFLEX BRADYCARDIA</li>
                        <li style="margin-bottom: 0.4rem;">DRUG ERROR / OVERDOSE</li>
                        <li style="margin-bottom: 0.4rem;">INCREASED ICP (CUSHING'S REFLEX)</li>
                        <li style="margin-bottom: 0.4rem;">HYPOTHYROIDISM</li>
                        <li style="margin-bottom: 0.4rem;">HYPOTHERMIA</li>
                        <li style="margin-bottom: 0.4rem;">TENSION</li>
                        <li style="margin-bottom: 0;">TAMPONADE</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">ANAESTHETIC</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">UNOPPOSED ANTICHOLINESTERASE</li>
                        <li style="margin-bottom: 0.4rem;">VASOPRESSOR REFLEX</li>
                        <li style="margin-bottom: 0.4rem;">HIGH NEURAXIAL BLOCK</li>
                        <li style="margin-bottom: 0.4rem;">VOLATILE AGENTS</li>
                        <li style="margin-bottom: 0.4rem;">IV ANAESTHETIC AGENTS</li>
                        <li style="margin-bottom: 0.4rem;">OPIOIDS</li>
                        <li style="margin-bottom: 0.4rem;">MUSCLE RELAXANT (EG. SUX)</li>
                        <li style="margin-bottom: 0;">DRUG ERROR</li>
                    </ul>
                </div>
            </div>
        `
    },
    'c-tachycardia': {
        title: 'TACHYCARDIA',
        content: `
            <div class="supplementary-box" style="width: 35%; max-width: 250px; float: right; margin-left: 20px;">
                <h3>CAUSES</h3>
                <ul style="margin-bottom: 0.5rem; margin-top: 10px;">
                    <li style="font-weight: bold; margin-bottom: 0.2rem;">PRIMARY</li>
                    <li>IHD</li>
                    <li>POST CARDIAC SURGERY</li>
                    <li>CARDIOMYOPATHY</li>
                    <li>CONDUCTION SYSTEM DISORDERS</li>
                    <li>CARDIAC FAILURE</li>
                    <li>MYOCARDITIS</li>
                    <li>PERICARDITIS</li>
                    <li>VALVULAR DISEASE</li>
                    <li>CHD</li>
                </ul>
                <ul style="margin-bottom: 0.5rem;">
                    <li style="font-weight: bold; margin-bottom: 0.2rem; margin-top: 0.8rem;">SECONDARY</li>
                    <li>HYPOVOLAEMIA</li>
                    <li>INADEQUATE DEPTH</li>
                    <li>PHARMACOLOGIC (LOCAL WITH ADRENALINE / DRUG ERROR)</li>
                    <li>ANAPHYLAXIS</li>
                    <li>PAIN / SNS RESPONSE</li>
                    <li>ELECTROLYTE ABNORMALITIES</li>
                    <li>TENSION / TAMPONADE</li>
                    <li>SEPSIS</li>
                    <li>MH</li>
                    <li><a href="crisis.html?id=e-thyroid" style="text-decoration: underline;">THYROID STORM</a></li>
                    <li>CARCINOID</li>
                    <li>ADRENAL INSUFFICIENCY</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ABCDE CHECK +/- CALL FOR HELP</li>
                    <li>CORRECT ELECTROLYTES, <a href="crisis.html?id=c-ischaemia" style="text-decoration: underline;">MANAGE ISCHAEMIA</a></li>
                </ul>

                <h3>INADEQUATELY PERFUSED / RAPIDLY DETERIORATING (BROAD / NARROW)</h3>
                <ul>
                    <li>SYNCRONISED CARDIOVERSION (CONSIDER ANALGESIA / LIGHT SEDATION) &rarr; 150, 200, 200J + AMIODARONE 150MG OVER 20/60 &rarr; 900MG/24HRS</li>
                </ul>

                <h3>STABLE PT - ASSESS RHYTHM (SINUS / NARROW / BROAD)</h3>

                <h3>1) SINUS RHYTHM</h3>
                <ul>
                    <li>DIAGNOSE AND ADDRESS CAUSE</li>
                </ul>

                <h3>2) NARROW COMPLEX</h3>
                <ul>
                    <li>IF IN DOUBT RE: QRS DURATION + UNSTABLE PATIENT &rarr; MX AS PER BROAD COMPLEX</li>
                </ul>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">REGULAR &rarr; SVT (AVNRT / AVRT / AFLUT)</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">VAGAL MANOEUVRES</li>
                        <li style="margin-bottom: 0.4rem;">ADENOSINE 6MG IV, RPT 12MG X2</li>
                        <li style="margin-bottom: 0.4rem;">CONSULT CARDIOLOGY RE: BETA BLOCKERS / CCBS</li>
                        <li style="margin-bottom: 0;">AFLUTTER - RATE CONTROL (BETA BLOCKERS / CCBS) - ACUTE ONSET AND UNSTABLE - CONSIDER CARDIOVERSION</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">IRREGULAR &rarr; PROBABLE AF</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">ACUTE ONSET &lt;48HR - AMIODARONE</li>
                        <li style="margin-bottom: 0;">RATE CONTROL - B-BLOCKER / DIGOXIN</li>
                    </ul>
                </div>

                <h3>3) BROAD COMPLEX</h3>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">REGULAR</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">VT &rarr; AMIODARONE, CONSIDER LIGNOCAINE IF ISCHAEMIA / INFARCTION SUSPECTED</li>
                        <li style="margin-bottom: 0;">PHX OF SVT WITH BBB (ABERANCY) &rarr; MX AS PER REGULAR NARROW COMPLEX</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">IRREGULAR</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">AFIB WITH BBB (ABERANCY) &rarr; MX AS PER NARROW COMPLEX IRREGULAR</li>
                        <li style="margin-bottom: 0.4rem;">AFIB WITH PRE-EXCITATION (WPW) - CARDIOVERSION (SAFEST) - CONSIDER AMIODARONE (SEEK ADVICE) - AVOID AV-NODAL BLOCKING AGENTS (ADENOSINE, DIGOXIN, VERAPAMIL / DILTIAZEM)</li>
                        <li>POLYMORPHIC VT (TORSADES)
                            <ul style="margin-top: 0.4rem; list-style-type: disc; padding-left: 1.5em;">
                                <li style="margin-bottom: 0.4rem;">MAGNESIUM SULFATE, AVOID AMIODARONE</li>
                                <li style="margin-bottom: 0.4rem;">2ND TO AV BLOCK WITH BRADYCARDIA: TRANSCUTANEOUS / TRANSVENOUS PACING</li>
                                <li style="margin-bottom: 0.4rem;">REFRACTORY CASES: CONSULT CARDIOLOGY FOR OVERDRIVE PACING, ISOPRENALINE, OR BLOCK AND PACE</li>
                                <li style="margin-bottom: 0.4rem;">CONSIDER LIGNOCAINE</li>
                                <li style="margin-bottom: 0.4rem;">CORRECT ELECTROLYTE IMBALANCES</li>
                                <li style="margin-bottom: 0.4rem;">CEASE QT PROLONGING AGENTS</li>
                                <li style="margin-bottom: 0;">TREAT ISCHAEMIA</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },
    'c-embolism': {
        title: 'AIR / GAS EMBOLISM',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>100% FiO2 + CALL FOR HELP</li>
                    <li>NITROUS OFF + PEEP OFF</li>
                    <li>STOP ENTRAINMENT
                        <ul>
                            <li>FLOOD FIELD WITH SALINE</li>
                            <li>CLOSE OPEN LINES</li>
                            <li>CEASE INSUFFLATION</li>
                            <li>APPLY BONE WAX</li>
                        </ul>
                    </li>
                    <li>POSITION SURGICAL SITE BELOW LEVEL OF HEART (LEFT SIDE DOWN + HEAD DOWN IF ABLE)</li>
                    <li>DRAINING VESSEL COMPRESSION (EG. JUGULAR VEINS)</li>
                </ul>
                <h3>ADDITIONAL MEASURES</h3>
                <ul>
                    <li>SUPPORT RIGHT VENTRICLE + MAP (OPEN FLUID LINE +/- VASOPRESSORS / INOTROPES)</li>
                    <li>ASPIRATE CVC (?FUTILE)</li>
                    <li>CONSIDER CLOSED CARDIAC MASSAGE / CHEST COMPRESSIONS (BREAKS UP AIR EMBOLI)</li>
                    <li>CONSIDER HYPERBARIC OXYGEN THERAPY</li>
                </ul>
            </div>
        `
    },
    'c-haemorrhage': {
        title:
            'MASSIVE HAEMORRHAGE',
        content: `
        <div class="crisis-section alert-box">
            <h3 style="margin-top: 0;">IMMEDIATE ACTIONS</h3>
            <ul>
                <li>ABCDE CHECK</li>
                <li>COMMUNICATE MTP ACTIVATION / CODE CRIMSON</li>
            </ul>
            <h3 style="margin-top: 1.5rem;">MANAGEMENT</h3>
            <ul>
                <li>WIDE BORE IV ACCESS x2 +/- RIC +/- MAC SHEATH</li>
                <li>COMPATIBLE FLUID VIA WARMING LINE (AVOID EXCESS CRYSTALLOID)</li>
                <li>CONSIDER RAPID INFUSOR +/- CELL SALVAGE</li>
                <li>CONSIDER TXA (OBSTETRICS / TRAUMA <3/24 POST INJURY)</li>
                <li>ANTICOAGULATED PATIENTS
                    <ul>
                        <li>VITAMIN K ANTAGONISTS - CONSIDER VIT K, PCC (Beriplex)</li>
                        <li>DABIGATRAN - CONSIDER IDARUCIZUMAB (Praxbind)</li>
                    </ul>
                </li>
                <li style="list-style: none; margin-left: -1.2rem;">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-top: 1.3rem;">
                        <div style="font-weight: 900; font-size: 1.25rem; color: rgb(56, 189, 248); margin-bottom: 0.8rem;"><strong>PRIORITY</strong> - LETHAL DIAMOND</div>
                        <ul style="list-style: none; padding-left: 0; margin: 0;">
                            <li style="margin-bottom: 0.7rem;"><span style="color: #d1d5db; font-weight: 700; font-size: 0.95rem;">COAGULOPATHY</span>
                                <ul style="margin: 0.25rem 0 0; padding-left: 1rem; line-height: 1.35;">
                                    <li>TARGETS: FIB>1.5-2, INR<1.5, PLT>50 (TBI/ECMO >100), APTT/PT<1.5</li>
                                    <li>1:1:1 RATIO</li>
                                    <li>CONSIDER VISCOELASTIC HAEMOSTATIC ASSAYS (TEG/ROTEM)</li>
                                    <li>CONSIDER CRYOPRECIPITATE, FIBRINOGEN CONCENTRATE, PROTROMBIN COMPLEX CONCENTRATE</li>
                                    <li>CONSIDER HAEMATOLOGY GUIDANCE</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 0.7rem;"><span style="color: #d1d5db; font-weight: 700; font-size: 0.95rem;">ACIDOSIS</span>
                                <ul style="margin: 0.25rem 0 0; padding-left: 1rem; line-height: 1.35;">
                                    <li>TARGETS: PH>7.2, BE>-6, LAC<4</li>
                                    <li>COMPETING GOAL - END ORGAN PERFUSION VS PERMISSIVE HYPOTENSION (MAP>65)</li>
                                    <li>TBI - TARGET SYSTOLIC >110MMHG</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 0.7rem;"><span style="color: #d1d5db; font-weight: 700; font-size: 0.95rem;">HYPOTHERMIA</span>
                                <ul style="margin: 0.25rem 0 0; padding-left: 1rem; line-height: 1.35;">
                                    <li>TARGET: TEMP>35</li>
                                    <li>WARM FLUIDS, FORCED AIR WARMER, ↑ AMBIENT TEMP</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 0;"><span style="color: #d1d5db; font-weight: 700; font-size: 0.95rem;">HYPOCALCAEMIA</span>
                                <ul style="margin: 0.25rem 0 0; padding-left: 1rem; line-height: 1.35;">
                                    <li>TARGET: >1.1MMOL/L</li>
                                    <li>REPLACEMENT VIA SEPARATE LINE</li>
                                    <li>10ML 10% CALCIUM GLCONATE EVERY 4TH BAG RED</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>` },
    'c-ischaemia': {
        title:
            'INTRAOPERATIVE MYOCARDIAL ISCHAEMIA',
        content: `
        <div class="crisis-section alert-box">
            <h3>IMMEDIATE ACTIONS</h3>
            <ul>
                <li>ABCDE CHECK</li>
                <li>COMMUNICATE TO SURGEONS</li>
            </ul>
            <h3>↓ MYOCARDIAL O2 DEMAND + ↑ MYOCARDIAL O2 SUPPLY</h3>
            <ul>
                <li>TITRATE ANAESTHETIC DEPTH / ANALGESIA / ATTENUATION SNS RESPONSE</li>
                <li>TREAT HYPOVOLAEMIA / ANAEMIA</li>
                <li>MX FEVER / SHIVERING / RIGORS</li>
                <li>AVOID TACHYCARDIA - TARGET HR 60-80 IF APPROPRIATE
                    <ul>
                        <li>ESMOLOL / METOPROLOL</li>
                    </ul>
                </li>
                <li>MAINTAIN CORONARY PERFUSION PRESSURE (CPP = ADP - LVEDP)</li>
                <li>TARGET MAP 65-75MMHG
                    <ul>
                        <li>HYPOTENSION
                            <ul>
                                <li>JUDICIOUS VASOPRESSORS +/- INODILATOR</li>
                                <li>CONSIDER IABP / BYPASS (eg. PRE-CABGS)</li>
                            </ul>
                        </li>
                        <li>HYPERTENSION
                            <ul>
                                <li>GTN INFUSION</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>REFERRAL (CTS / CARDIOLOGY / CARDIAC ANAES)
                    <ul>
                        <li>CONSIDER TTE / TOE / CVC +/- PAC</li>
                        <li>CONSIDER ANTICOAGULATION / ANTIPLATELETS / THROMBOLYSIS</li>
                        <li>DISCUSS TREATMENT PLAN / DESTINATION (MEDICAL VS PCI VS CABGS)</li>
                    </ul>
                </li>
            </ul>
        </div>` },
    'c-transfusion': {
        title: 'HAEMOLYTIC TRANSFUSION REACTION',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CEASE INFUSION AND CHANGE IV LINE</li>
                    <li>EXCLUDE ADMINISTRATION ERROR</li>
                </ul>
                <h3>SUPPORTIVE MANAGEMENT</h3>
                <ul>
                    <li>AIRWAY/BREATHING - <a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">BRONCHOSPASM</a> / HYPOXIA</li>
                    <li>CIRCULATION - SHOCK / DIC (ART LINE + CVC)</li>
                    <li>DISABILITY - TITRATE ANAESTHETIC DEPTH</li>
                    <li>EXPOSURE - ASSESS FOR BLEEDING (MUCOUS MEMBRANES, CATHETER SITES)</li>
                    <li>FLUIDS (PREVENT RENAL FAILURE) - TARGET UO 1ML/KG/HR (CATHETERISE), DIURESIS (FUROSEMIDE, MANNITOL) + INOTROPES (ASSESS FOR COLA COLOURED URINE)</li>
                    <li>HAEMATOLOGY - ASSESS FOR / MX DIC - CONSULT HAEMATOLOGY</li>
                    <li>METHYLPREDNISOLONE 1-3MG/KG IV</li>
                    <li>RETURN BLOOD PRODUCTS TO LAB</li>
                    <li>REFER ICU</li>
                </ul>
            </div>` },
    'c-hypertension': {
        title: 'HYPERTENSION',
        content: `
            <div class="supplementary-box">
                <strong>Mx OPTIONS</strong>
                <ul style="margin-bottom: 0.5rem;">
                    <li style="font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.2rem; margin-bottom: 0.2rem;">GENERAL</li>
                    <li>PROPOFOL / THIOPENTONE</li>
                    <li>ALFENTANIL / REMIFENTANIL</li>
                    <li>ESMOLOL 0.5-1MG/KG IV OVER 1/60 / LABETALOL 10-20MG IV OVER 2/60 / METOPROLOL 1-5MG IV OVER 5/60</li>
                    <li>GTN 50-100MCG</li>
                    <li>PHENTOLAMINE 1-5MG IV</li>
                    <li>HYDRALAZINE 5-10MG IV</li>
                    <li>ALPHA AGONISTS EG. CLONIDINE (CAUTION - UNOPPOSED B-STIMULATION)</li>
                    <li>MgSO4 25-50MG/KG IV OVER 10-20MIN</li>
                </ul>
                <ul>
                    <li style="font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.2rem; margin-bottom: 0.2rem; margin-top: 0.8rem;">SPECIFIC</li>
                    <li>CEASE OFFENDING AGENT</li>
                    <li>REMOVE STIMULUS</li>
                    <li>OCTREOTIDE 100-1000MCG IV (<a href="crisis.html?id=e-carcinoid" style="text-decoration: underline;">CARCINOID CRISIS</a>)</li>
                    <li>DANTROLENE 2.5MG/KG IV, REPEAT TO 10MG/KG</li>
                    <li>CYPROHEPTADINE 12MG PO/NG</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>CONFIRM MEASUREMENT + TEMPORISE (IF SEVERE)</li>
                </ul>

                <h3>CONSIDER CAUSES</h3>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">ANAESTHETIC</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;"><span style="color: #d1d5db; font-weight: 700;">ANAESTHESIA / AMNESIA</span> - CONFIRM DEPTH</li>
                        <li style="margin-bottom: 0.4rem;"><span style="color: #d1d5db; font-weight: 700;">ANALGESIA</span> - ENSURE ADEQUATE - ?TORNIQUET</li>
                        <li style="margin-bottom: 0.4rem;"><span style="color: #d1d5db; font-weight: 700;">IMMOBILITY</span> - STRAINING, COUGHING, VENTILATOR DYSYNCHRONY</li>
                        <li style="margin-bottom: 0.4rem;"><span style="color: #d1d5db; font-weight: 700;">PHYSIOLOGICAL STABILITY</span> - CONFIRM NORMOXIA / NORMORBIA, ?SNS RESPONSE</li>
                        <li style="margin-bottom: 0;">MISADVENTURE (DRUG ERROR / EXCESSIVE VOLUME ADMINISTRATION)</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">PATIENT</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;"><span style="color: #d1d5db; font-weight: 700;">CNS</span> (STROKE / HIGH ICP, <a href="crisis.html?id=d-autonomic" style="text-decoration: underline;">AUTONOMIC DYSREFLEXIA</a>, WITHDRAWAL, RECREATIONAL DRUGS)</li>
                        <li style="margin-bottom: 0.4rem;"><span style="color: #d1d5db; font-weight: 700;">RESP</span> (HYPOXIA / HYPERCAPNOEA)</li>
                        <li style="margin-bottom: 0;"><span style="color: #d1d5db; font-weight: 700;">ENDOCRINE</span> (<a href="crisis.html?id=e-thyroid" style="text-decoration: underline;">THYROID STORM</a>, PHAEOCHROMOCYTOMA, <a href="crisis.html?id=e-carcinoid" style="text-decoration: underline;">CARCINOID</a>, SEROTONIN SYNDROME, MALIGNANT HYPERTHERMIA, CONN'S / CUSHINGS)</li>
                    </ul>
                </div>

                <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">SURGICAL</div>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                        <li style="margin-bottom: 0.4rem;">X-CLAMP APPLIED</li>
                        <li style="margin-bottom: 0.4rem;">RUPTURED INTRACRANIAL ANEURYSM</li>
                        <li style="margin-bottom: 0;">LOCAL WITH ADRENALINE</li>
                    </ul>
                </div>
            </div>
        `
    },


    // D
    'd-aneurysm-ir': {
        title: 'ANEURYSM RUPTURE - IR SUITE',
        content: `
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>INCREASE FiO2</li>
                    <li>HYPERVENTILATE</li>
                    <li>ELEVATE HEAD IF ABLE</li>
                    <li>CALL FOR HELP (NEUROSURGERY / IR TEAM)</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>
                <ul>
                    <li>CONSIDER GA CONVERSION IF PT AWAKE</li>
                    <li>DISCUSS ANTICOAGULATION REVERSAL WITH INTERVENTIONALIST
                        <ul>
                            <li>PROTAMINE 1MG PER 100 UNITS HEPARIN (MAX 50MG)</li>
                        </ul>
                    </li>
                    <li>DECREASE ICP
                        <ul>
                            <li>OSMOTHERAPY (MANNITOL / HYPERTONIC SALINE)</li>
                            <li>ACCEPT BASELINE / LOW NORMAL BP UNTIL BLEEDING CONTROLLED</li>
                            <li>CONSIDER TIVA SWITCH</li>
                            <li>MAINTAIN EUGLYCAEMIA, NORMOTHERMIA AND PREPARE FOR SEIZURE MX</li>
                        </ul>
                    </li>
                    <li>SEND CROSS MATCH + ACT IF REQUIRED</li>
                    <li>EVD KIT TO IR</li>
                    <li>CONTACT THEATRE - PREPARE FOR POTENTIAL CRANIOTOMY</li>
                </ul>
            </div>
        `
    },
    'd-aneurysm-ot': {
        title: 'ANEURYSM RUPTURE - OPERATING THEATRE',
        content: `
            <div class="supplementary-box" style="top: 50%; transform: translateY(-50%);">
                <h3>PREVENTION</h3>
                <ul>
                    <li>AVOID ↑ TMPG
                        <ul>
                            <li>HYPERTENSION - LARYNGOSCOPY, PINNING, VALSALVA, COUGH, EXCESSIVE PEEP</li>
                            <li>SUDDEN ↓ ICP - HYPERVENTILATION, CSF DRAINAGE</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>COMMUNICATE WITH SURGEON RE: VISIBILITY / BLOOD LOSS</li>
                    <li>CALL FOR HELP</li>
                    <li>CONSIDER BLOOD PRODUCTS / MTP</li>
                    <li>INCREASE FiO2, INFUSE VOLUME + ADMINISTER VASOPRESSORS AS REQUIRED</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>

                <h3 style="margin-top: 1.5rem; color: white; font-size: 1rem;">RUPTURE PRE DURAL OPENING</h3>
                <ul>
                    <li>MODEST HYPERVENTILATION (REDUCE ICP)</li>
                    <li>AVOID LABILE BPs</li>
                    <li>MINIMISE CMRO2 (PROPOFOL, THIOPENTONE)</li>
                    <li>SURGICAL DECOMPRESSION</li>
                    <li>OSMOTHERAPY
                        <ul>
                            <li>MANNITOL 0.25-1G/KG 15/60</li>
                            <li>HYPERTONIC SALINE 3% 2-5ML/KG 15/60</li>
                        </ul>
                    </li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: white; font-size: 1rem;">RUPTURE AFTER DURAL OPENING</h3>
                <ul>
                    <li>TOLERATE LOW MAP ~50</li>
                    <li>CONSIDER FLOW ARREST (0.5MG/KG ADENOSINE)</li>
                    <li>↓ CRMO2 / BURST SUPRESSION - PROPOFOL / THIOPENTONE</li>
                </ul>
            </div>
        `
    },
    'd-autonomic': {
        title: 'AUTONOMIC DYSREFLEXIA',
        content: `
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ANNOUNCE EMERGENCY + CALL FOR HELP</li>
                    <li>ABCDE CHECK</li>
                    <li>REMOVE INCITING STIMULUS
                        <ul>
                            <li>HALT SURGERY</li>
                            <li>CHECK / EMPTY BLADDER (OR CATHETER)</li>
                            <li>CHECK FOR BOWEL IMPACTION</li>
                            <li>EXAMINE FOR NOCICEPTIVE STIMULI (PRESSURE AREAS, TIGHT CLOTHING, WOUND DRESSINGS)</li>
                        </ul>
                    </li>
                    <li>HEAD UP POSITION IF ABLE</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>
                <ul>
                    <li>DEEPEN ANAESTHESIA / ANALGESIA (PROPOFOL / VOLATILE)</li>
                    <li>TREAT SEVERE HYPERTENSION
                        <ul>
                            <li>RAPID ONSET, SHORT-ACTING AGENTS GTN / SNP</li>
                        </ul>
                    </li>
                    <li>TREAT BRADYCARDIA (ATROPINE / GLYCOPYRROLATE) IF SYMPTOMATIC</li>
                    <li>MANAGE COMPLICATIONS (ISCHAEMIA, HAEMORRHAGE, HEART BLOCK)
                </ul>
            </div>
        `
    },
    'd-emergence': {
        title: 'DELAYED EMERGENCE / FAILURE TO WAKE',
        content: `
            <div class="crisis-section alert-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ABCDE CHECK</li>
                </ul>
                <h3>ASSESS FOR CAUSE + MANAGE</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">PHARMACOLOGICAL</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">OPIOIDS</li>
                            <li style="margin-bottom: 0.4rem;">INHALATIONAL AGENTS</li>
                            <li style="margin-bottom: 0.4rem;">INTRAVENOUS ANAESTHETIC AGENTS</li>
                            <li style="margin-bottom: 0.4rem;">BENZODIAZEPINES</li>
                            <li style="margin-bottom: 0.4rem;">ANTICHOLINERGIC AGENTS</li>
                            <li style="margin-bottom: 0.4rem;">NMBAs</li>
                            <li style="margin-bottom: 0.4rem;">ETOH / ILLICIT SUBSTANCE</li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=e-last" style="text-decoration: underline;">LAST</a></li>
                            <li style="margin-bottom: 0;">INADVERTENT (DRUG ERROR)</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">METABOLIC</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">HYPOXIA</li>
                            <li style="margin-bottom: 0.4rem;">HYPERCAPNOEA</li>
                            <li style="margin-bottom: 0.4rem;">HYPO/HYPERTHERMIA</li>
                            <li style="margin-bottom: 0.4rem;">HYPO/HYPERGLYCAEMIA</li>
                            <li style="margin-bottom: 0.4rem;">ELECTROLYTE DERANGEMENT</li>
                            <li style="margin-bottom: 0;">HYPOTHYROIDISM</li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1.1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">NEUROGENIC</div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; color: #f8fafc;">
                            <li style="margin-bottom: 0.4rem;">ISCHAEMIC STROKE</li>
                            <li style="margin-bottom: 0.4rem;">SEIZURE</li>
                            <li style="margin-bottom: 0.4rem;">ENCEPHALOPATHY</li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=d-icp" style="text-decoration: underline;">RAISED INTRACRANIAL PRESSURE</a></li>
                            <li style="margin-bottom: 0;">CEREBRAL HYPERPERFUSION SYNDROME</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    'd-stroke': {
        title: 'ISCHAEMIC STROKE',
        content: `
            <div class="supplementary-box" style="top: 50%; transform: translateY(-50%);">
                <h3>MX OPTIONS</h3>
                <ul>
                    <li>MX = TPA +/- ENDOVASCULAR CLOT RETRIEVAL (ECR)</li>
                    <li>TPA < 4.5 HOURS</li>
                    <li>ECR < 6 HOURS, < 24 HOURS WITH FAVOURABLE IMAGING / SALVAGEABLE PENUMBRA</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>STABILISE ABCS</li>
                    <li>DISCUSS TREATMENT PLAN WITH TREATING TEAM</li>
                    <li>CONTACT THEATRE / IR</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>
                <ul>
                    <li>ASPIRIN + VTE PROPHYLAXIS</li>
                    <li>GA VS SEDATION - EQUIVOCAL - INDIVIDUALISE TO PT</li>
                    <li>AVOID DELAY - NO ART-LINE UNLESS ALTERNATIVE INDICATION - SLAVE FROM FEMORAL ACCESS IF REQUIRED</li>
                    <li>TARGET SYSTOLIC 140-180MMHG</li>
                    <li>NORMOCAPNOEA, NORMOGLYCAEMIA, NORMOXIA (&gt;92%)</li>
                </ul>
            </div>
        `
    },
    'd-spinal': {
        title: 'HIGH / TOTAL SPINAL',
        content: `
            <div class="supplementary-box" style="top: 50%; transform: translateY(-50%);">
                <h3>DRUG DOSES</h3>
                <ul>
                    <li>METARAMINOL 1MG IV BOLUS</li>
                    <li>EPHEDRINE 9MG IV BOLUS</li>
                    <li>PHENYLEPHRINE 100MCG IV BOLUS</li>
                    <li>ATROPINE 600MCG IV</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS / MANAGEMENT</h3>
                <ul>
                    <li>CALL FOR HELP</li>
                    <li>CEASE OFFENDING AGENT (EPIDURAL OFF)</li>
                    <li>REASSURE PATIENT</li>
                    <li>100% O2 + APPV / IPPV AS REQUIRED</li>
                    <li>PREPARE FOR RSI (ASCENDING BLOCK / LOC)</li>
                    <li>POSITION SUPINE + LEFT UTERINE DISPLACEMENT IF PREGNANT</li>
                </ul>

                <ul>
                    <li>HAEMODYNAMIC SUPPORT
                        <ul>
                            <li>IV FLUID BOLUS + LEG ELEVATION</li>
                            <li>METARAMINOL / EPHEDRINE / PHENYLEPHRINE / NORADRENALINE / ATROPINE</li>
                            <li>ADRENALINE IF SEVERE OR REFRACTORY</li>
                        </ul>
                    </li>
                    <li>PREPARE TO MANAGE <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">CARDIAC ARREST</a></li>
                </ul>
            </div>
        `
    },
    'd-icp': {
        title: 'RAISED INTRACRANIAL PRESSURE',
        content: `
            <div class="supplementary-box" style="top: 50%; transform: translateY(-50%);">
                <h3>COMMON CAUSES</h3>
                <ul>
                    <li>INTRACRANIAL HAEMORRHAGE (EPIDURAL / SUBDURAL / INTRACEREBRAL)</li>
                    <li>SUBARACHNOID HAEMORRHAGE (ANEURYSM RUPTURE)</li>
                    <li>CSF FLOW OBSTRUCTION (HYDROCEPHALUS)</li>
                    <li>↑ VENOUS PRESSURE (VENOUS THROMBOSIS / CARDIAC FAILURE)</li>
                    <li>METABOLIC (HYPONATRAEMIA, HEPATIC / URAEMIC ENCEPHALOPATHY)</li>
                </ul>
            </div>
            <div class="supplementary-box-left" style="top: 50%; transform: translateY(-50%); background: rgba(34, 197, 94, 0.08); border-right: 4px solid var(--color-e); border-left: none;">
                <div style="font-size: 1.2rem; font-weight: 900; text-align: center; color: #f8fafc; text-transform: uppercase;">
                    CPP = MAP - ICP
                </div>
            </div>
                    <div style="display: flex; align-items: flex-start; gap: 2rem;">
                        <div class="crisis-section alert-box" style="flex: 1; margin-bottom: 0;">
                            <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                            <ul style="list-style: none; padding-left: 0;">
                                <li>COMMUNICATE WITH SURGEON (BRAIN APPEARANCE / VITALS / MONITORING)</li>
                                <li>HEAD UP IF ABLE, ENSURE FREE VENOUS DRAINAGE</li>
                                <li>REVIEW ANAESTHETIC DEPTH / ANALGESIA +/- MUSCLE RELAXATION</li>
                                <li>HYPERVENTILATE TO ETCO2 ~ 35</li>
                                <li>MAINTAIN NORMOXIA, NORMOGLYCAEMIA, NORMOTHERMIA</li>
                            </ul>

                            <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>
                            <ul style="list-style: none; padding-left: 0;">
                                <li>MAINTAIN CPP (HIGH NORMAL / MILD HYPERTENSION)</li>
                                <li>SEND BLOODS (METABOLIC CAUSE)</li>
                                <li>OSMOTHERAPY
                                    <ul>
                                        <li>MANNITOL / HYPERTONIC SALINE</li>
                                        <li>CONSIDER IV FUROSEMIDE</li>
                                    </ul>
                                </li>
                                <li>OTHER INTERVENTIONS
                                    <ul>
                                        <li>STEROIDS - TUMOURS / VASOGENIC OEDEMA</li>
                                        <li>BARBITURATE COMA (SPECIAL CIRCUMSTANCES)</li>
                                        <li>ANTICIPATE AND MX SEIZURES</li>
                                        <li>CSF DRAINAGE (SURGICAL VS INTRATHECAL DRAIN)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
        `
    },
    'd-evoked': {
        title: 'LOSS OF EVOKED POTENTIALS',
        content: `
            <div class="supplementary-box" style="top: 50%; transform: translateY(-50%);">
                <h3>POTENTIAL CAUSES</h3>
                <ul>
                    <li>SURGICAL: DISTRACTION OF SPINAL CORD, DEROTATION / DEFORMITY, SCREW MISPLACEMENT, OSTEOTOMY, PATIENT POSITIONING</li>
                    <li>ANESTHETIC: DRUG BOLUSES, DEEP STAGE OF ANAESTHESIA</li>
                    <li>PHYSIOLOGIC: HYPOTENSION, HYPOTHERMIA</li>
                    <li>TECHNICAL: ELECTRODE DISCONNECTION</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>COMMUNICATE LOSS OF SIGNALS TO TEAM + PAUSE SURGERY</li>
                    <li>ABCDE CHECK (ANAESTHESIA)</li>
                    <li>CHECK LEAD PLACEMENT / EQUIPMENT (NEUROPHYSIOLOGY TEAM)</li>
                    <li>SURGICAL REVIEW OF RECENT MANOUVRES / ACTIONS PRIOR TO SIGNAL LOSS</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>
                <ul>
                    <li>OPTIMISE PHYSIOLOGY
                        <ul>
                            <li>INCREASE MAP (TARGET AT OR ABOVE SURGICAL BASELINE)</li>
                            <li>CONFIRM NORMOXIA, NORMOCARBIA, NORMOTHERMIA</li>
                            <li>CHECK HAEMOGLOBIN + GLUCOSE</li>
                            <li>CONSIDER FULL TIVA SWITCH</li>
                        </ul>
                    </li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">PERSISTING ABNORMAL SIGNAL</h3>
                <ul>
                    <li>CONSIDER POTENTIAL CAUSES</li>
                    <li>DISCUSS WITH SURGICAL TEAM (WAKE TEST VS EMERGENT IMAGING)</li>
                </ul>
            </div>
        `
    },
    'd-seizure': {
        title: 'SEIZURE DURING CRANIOTOMY',
        content: `
            <div class="supplementary-box" style="top: 50%; transform: translateY(-50%);">
                <h3>POTENTIAL CAUSES</h3>
                <ul>
                    <li>METABOLIC DERANGEMENTS: HYPOGLYCAEMIA, HYPONATRAEMIA, ALKALOSIS / HYPERVENTILATION, SEVERE HYPOCALCAEMIA OR HYPOMAGNESAEMIA</li>
                    <li>DRUG TOXICITY OR WITHDRAWAL, INADEQUATE SERUM ANTICONVULSANT LEVELS</li>
                    <li>SURGICAL INSULTS: CORTICAL STIMULATION, BRAIN INJURY, CEREBRAL HAEMORRHAGE OR ISCHAEMIA</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ANNOUNCE SEIZURE + CALL FOR HELP</li>
                    <li>CHECK AIRWAY PATENCY (SUCTION / BITE BLOCKS) + INCREASE FiO2</li>
                    <li>HALT SURGICAL STIMULATION</li>
                    <li>ICE-COLD SALINE TO CORTEX</li>
                    <li>PHARMACOLOGICAL MANAGEMENT
                        <ul>
                            <li>PROPOFOL (0.5-1MG/KG) OR THIOPENTONE</li>
                            <li>MIDAZOLAM (1-5MG)</li>
                        </ul>
                    </li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">MANAGEMENT</h3>
                <ul>
                    <li>AWAKE CRANIOTOMY + THREATENED AIRWAY / UNCONTROLLED SEIZURE - OPA/LMA +/- GA + ETT</li>
                    <li>DISCUSS ANTIEPILEPTICS (LEVETIRACETAM / PHENYTOIN) WITH SURGICAL TEAM</li>
                    <li>ENSURE NORMOXIA, NORMOTENSION, NORMOGLYCAEMIA, NORMOTHERMIA</li>
                    <li>AVOID EPILEPTOGENIC ANAESTHETIC AGENTS</li>
                    <li>CONSIDER UNDERLYING CAUSE</li>
                </ul>
            </div>
        `
    },

    // E
    'e-last': {
        title: 'LOCAL ANAESTHETIC SYSTEMIC TOXICITY (LAST)',
        content: `
            <div class="supplementary-box">
                <strong>DRUG DOSING</strong>
                <ul>
                    <li>LIPID EMULSION 20%: 1.5 ML/KG BOLUS, THEN 15 ML/KG/HR</li>
                    <li>REPEAT BOLUS X2 AT 5 MIN INTERVALS IF NEEDED</li>
                    <li>INCREASE INFUSION TO 30 ML/KG/HR IF UNSTABLE</li>
                    <li>MAX TOTAL LIPID DOSE: 12 ML/KG</li>
                    <li>ARREST ADRENALINE: 1 MCG/KG BOLUS (REDUCED DOSE)</li>
                    <li>AMIODARONE: 300 MG SLOW IV PUSH</li>
                    <li>SODIUM BICARBONATE: 1 MMOL/KG IV</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>CALL FOR HELP / RETRIEVE LAST TROLLEY</li>
                    <li>CEASE OFFENDING AGENT</li>
                    <li>SUPPORTIVE MAP (IVF + VASOPRESSORS)</li>
                    <li>LIPID EMULSION 20% - 1.5ML/KG BOLUS + 15ML/KG/HR, GOAL = CVS STABILTY</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">ONGOING MANAGEMENT</h3>
                <ul>
                    <li>RPT 1.5ML/KG BOLUS X2 @ 5/60 / DOUBLE INFUSION @ 5/60 to 30ML/KG/HR (MAX 12ML/KG or 840ML)</li>
                    <li>ANTICIPATE PROLONGED ALS (CONSIDER EARLY ECMO ACTIVATION)</li>
                    <li>CONSIDER SODIUM BICARBONATE IN ARRESTED PATIENT + PH <7.25</li>
                    <li>REDUCED ARREST DOSE ADRENALINE (1 MCG/KG BOLUS) - AVOID VASOPRESSIN</li>
                    <li>DYSRHYTHMIA MX - AMIODARONE 300MG SLOW PUSH (AVOID LIGNOCAINE / PROCAINAMIDE, BBs, CCBs)</li>
                    <li>SEIZURE MX - JUDICIOUS MIDAZOLAM / PROPOFOL / THIOPENTONE +/- NMBA / RSI</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">POST-CRISIS MANAGEMENT</h3>
                <ul>
                    <li>POST-EVENT LIPASE (PANCREATITIS)</li>
                    <li>INCIDENT REPORTING SYSTEM</li>
                    <li>TEAM DEBRIEF</li>
                </ul>
            </div>
        `
    },
    'e-mh': {
        title: 'MALIGNANT HYPERTHERMIA (MH)',
        content: `
            <div class="supplementary-box">
                <strong>DIFFERENTIAL DIAGNOSES</strong>
                <ul>
                    <li>ANAESTHESIA INDUCED RHABDOMYOLYSIS</li>
                    <li>NEUROLEPTIC MALIGNANT SYNDROME (NMS)</li>
                    <li>SEROTONIN SYNDROME</li>
                    <li>SEPSIS</li>
                    <li><a href="crisis.html?id=e-thyroid" style="text-decoration: underline;">THYROID STORM</a></li>
                    <li>PHAEOCHROMOCYTOMA</li>
                    <li>EQUIPMENT ERROR</li>
                    <li>INADVERTENT OVERHEATING</li>
                    <li>RECREATIONAL DRUGS / PSYCHOSTIMULANTS</li>
                    <li>INADEQUATE FGF / MV</li>
                    <li>INSUFFICIENT DEPTH / ANALGESIA</li>
                    <li>EXOGENOUS CO2 (LAPAROSCOPIC INSUFFLATION)</li>
                    <li>CEREBRAL EVENT (STROKE, SAH)
                </ul>
            </div>
            <div class="supplementary-box-left">
                <strong>POST CRISIS MANAGEMENT</strong>
                <ul>
                    <li>TEAM DEBRIEF</li>
                    <li>REFERRAL TO MH CLINIC</li>
                    <li>INCIDENT REPORT / CASE REVIEW</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>CALL FOR HELP + ANNOUNCE MH CRISIS</li>
                    <li>CEASE OFFENDING AGENT + TIVA SWITCH</li>
                    <li>CONSIDER DDXs</li>
                    <li>RETRIEVE MH TROLLEY + ALLOCATE ROLES</li>
                    <li>HYPERVENTILATE WITH HIGH FLOWS AND 100% O2 (LEAVE CIRCUIT INSITU)</li>
                    <li>ADD CHARCOAL FILTERS AND REMOVE VAPORISER</li>
                    <li>DANTROLENE 2.5MG/KG TBW (MOBILISE MULTIPLE BOTTLES / STAFF FOR RECONSTITUTION)
                        <ul>
                            <li>REPEAT DOSE 5/60 TO 10MG/KG (HIGHER DOSES MAY BE REQUIRED)</li>
                        </ul>
                    </li>
                    <li>ARTERIAL LINE, IDC +/- CVC</li>
                    <li>BLOODS - ABG,  FBE, UEC, CMP, LFT, COAGS, MYOGLOBIN</li>
                    <li>CHECK FOR SIGNS OF COMPARTMENT SYNDROME</li>
                    <li>ICU REFERRAL</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">TREAT SEQUELAE</h3>
                <ul>
                    <li><strong>HYPERTHERMIA</strong>
                        <ul>
                            <li>COOL IVF</li>
                            <li>ICE TO GROIN / AXILLAE / FANS</li>
                            <li>OTHER COOLING DEVICES IF AVAILABLE</li>
                            <li>TARGET AND CEASE COOLING @ 38.5C</li>
                        </ul>
                    </li>
                    <li><a href="crisis.html?id=e-hyperkalaemia"><strong>HYPERKALAEMIA</strong></a></li>
                    <li><strong>ACIDOSIS</strong>
                        <ul>
                            <li>HYPERVENTILATE TO NORMOCAPNOEA</li>
                            <li>SODIUM BICARBONATE 1MMOL/KG IV (8.4% = 1MMOL/ML) IF PH &lt; 7.2</li>
                        </ul>
                    </li>
                    <li><strong>ARRHYTHMIAS</strong>
                        <ul>
                            <li>ANTICIPATE <a href="crisis.html?id=c-tachy-broad">BROAD COMPLEX</a></li>
                        </ul>
                    </li>
                    <li><strong>MAINTAIN URINE OUTPUT &gt;2 ML/KG</strong>
                        <ul>
                            <li>JUDICIOUS IVF</li>
                            <li>CONSIDER FUROSEMIDE 0.5-1 MG/KG, MANNITOL 1 G/KG</li>
                        </ul>
                    </li>
                </ul>
            </div>
        `
    },
    'e-hyperkalaemia': {
        title: 'HYPERKALAEMIA',
        content: `
            <div class="supplementary-box als-box" style="top: 50%;">
                <h3>CLINICAL FEATURES</h3>
                <strong style="display: block; margin-bottom: 0.6rem;">CVS</strong>
                <ul style="margin-top: 0; margin-bottom: 1rem;">
                    <li>ARRHYTHMIAS</li>
                    <li>MYOCARDIAL DEPRESSION</li>
                    <li>ECG CHANGES: PEAKED T WAVES, FLATTENED P WAVES, LONG PR INTERVAL, SHORT QT INTERVAL, WIDE QRS, VENTRICULAR FIBRILLATION</li>
                </ul>
                <strong style="display: block; margin-bottom: 0.6rem; margin-top: 0.6rem;">CNS</strong>
                <ul style="margin-top: 0; margin-bottom: 1rem;">
                    <li>RESPIRATORY DEPRESSION</li>
                    <li>DYSESTHESIA</li>
                    <li>MUSCLE WEAKNESS / MYALGIAS</li>
                    <li>PARALYSIS</li>
                </ul>
                <strong style="display: block; margin-bottom: 0.6rem; margin-top: 0.6rem;">GIT</strong>
                <ul style="margin-top: 0;">
                    <li>NAUSEA</li>
                    <li>ABDOMINAL PAIN</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>CONFIRM READING (?LYSED SAMPLE)</li>
                    <li>CEASE ENDOGENOUS K+</li>
                    <li>CONSIDER UNDERLYING CAUSE</li>
                    <li>AVOID SUXAMETHONIUM</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: var(--color-e);">K+ &gt; 6.5 WITH CLINICAL FEATURES OF HYPERKALAEMIA</h3>

                <h3 style="margin-top: 1.5rem; color: white; font-size: 0.95rem;">1. STABILSE CARDIAC MEMBRANE</h3>
                <ul>
                    <li>CALCIUM CHLORIDE 10%: 10ML IV<strong>OR</strong></li>
                    <li>CALCIUM GLUCONATE 10%: 30ML IV</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: white; font-size: 0.95rem;">2. SHIFT K+ INTRACELLULARLY</h3>
                <ul>
                    <li>INSULIN / DEXTROSE: 10 UNITS SHORT-ACTING INSULIN + 50ML 50% DEXTROSE IV OR 250ML 10% IV</li>
                    <li>SALBUTAMOL: 10-20MG NEBULISED (OR 100 - 250MCG IV)</li>
                    <li>IF ACIDOTIC CONSIDER SODIUM BICARBONATE</li>
                </ul>

                <h3 style="margin-top: 1.5rem; color: white; font-size: 0.95rem;">3. ENHANCE K+ ELIMINATION</h3>
                <ul>
                    <li>FUROSEMIDE: 20-40MG IV (ENSURE ADEQUATE HYDRATION / NORMOTENSION)</li>
                    <li>CONSIDER HAEMODIALYSIS / HAEMOFILTRATION (CONTACT RENAL / ICU)</li>
                </ul>
            </div>
        `
    },

    'ab-fire': {
        title: 'AIRWAY FIRE',
        content: `
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>IMMEDIATELY REMOVE ETT</li>
                    <li>CEASE ALL FGF</li>
                    <li>REMOVE SPONGES / DEBRIS / FUEL SOURCES FROM AIRWAY</li>
                    <li>POUR SALINE INTO AIRWAY</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">FIRE PERSISTS</h3>
                <ul>
                    <li>EXTINGUISH WITH CO2 EXTINGUISHER</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">FIRE OUT</h3>
                <ul>
                    <li>RE-ESTABLISH VENTILATION</li>
                    <li>AVOID EXCESSIVE O2 DELIVERY + NITROUS OXIDE</li>
                    <li>INSPECT ETT FOR POSSIBLE RETAINED FRAGMENTS</li>
                    <li>CONSIDER BRONCHOSCOPY</li>
                    <li>PREPARE FOR ICU TRANSFER</li>
                </ul>
            </div>
        `
    },
    'e-fire': {
        title: 'FIRE IN OPERATING THEATRE',
        content: `
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CEASE ALL FGF</li>
                    <li>REMOVE ALL DRAPES AND FLAMMABLE MATERIAL</li>
                    <li>EXTINGUISH FIRE WITH SALINE OR OTHER MEANS</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">FIRE ONGOING</h3>
                <ul>
                    <li>USE CO2 EXTINGUISHER</li>
                    <li>IF UNCONTROLLABLE ACTIVATE FIRE ALARM</li>
                    <li>EVACUATE PATIENT</li>
                    <li>CLOSE OT DOOR</li>
                    <li>SUSPEND GAS SUPPLY TO OT
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">FIRE OUT</h3>
                <ul>
                    <li>MAINTAIN VENTILATION</li>
                    <li>ASSESS FOR INHALATIONAL INJURY IF PATIENT NOT INTUBATED</li>
                </ul>
            </div>
        `
    },

    'e-thyroid': {
        title: 'THYROID STORM',
        content: `
            <div class="supplementary-box">
                <strong>DRUG DOSING</strong>
                <ul>
                    <li><strong>BETA BLOCKADE</strong>
                        <ul>
                            <li>METOPROLOL 5MG IV OVER 2-3/60, RPT Q5M (MAX 15MG)</li>
                            <li>ESMOLOL 250-500MCG/KG LOADING DOSE - INFUSION 50-100MCG/KG/MIN</li>
                        </ul>
                    </li>
                    <li><strong>THIONAMIDES</strong>
                        <ul>
                            <li>PROPYLTHIOURACIL (PTU) 500-1000MG PO/NG LOADING DOSE</li>
                            <li>OR CARBIMAZOLE 20MG PO/NG</li>
                        </ul>
                    </li>
                    <li><strong>IODIDES (MUST GIVE 1HR POST PTU)</strong>
                        <ul>
                            <li>IODINE 5% + POTASSIUM IODIDE 10% (LUGOL SOLUTION) 0.5ML PO/NG</li>
                        </ul>
                    </li>
                    <li><strong>STEROIDS</strong>
                        <ul>
                            <li>HYDROCORTISONE 100MG IV Q6H</li>
                            <li>OR DEXAMETHASONE 8MG IV Q12H</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="supplementary-box-left">
                <strong>DIAGNOSTIC CRITERIA</strong>
                <ul>
                    <li>THERMOREGULATORY DYSFUNCTION (TEMP &gt; 38&deg;C)</li>
                    <li>CVS DYSFUNCTION (<a href="crisis.html?id=c-tachycardia" style="text-decoration: underline;">TACHYCARDIA</a> / <a href="crisis.html?id=c-tachycardia" style="text-decoration: underline;">AF</a> / CCF)</li>
                    <li>CNS EFFECTS (AGITATION / DELIRIUM / COMA)</li>
                    <li>GI-HEPATIC DYSFUNCTION (N/V / DIARRHOEA / JAUNDICE)</li>
                    <li>PRECIPITANT (SURGERY / INFECTION / TRAUMA / PREGNANCY)</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>INFORM SURGEON + CALL FOR ASSISTANCE</li>
                    <li>100% OXYGEN +/- SECURE AIRWAY (IF NEUROLOGICALLY DETERIORATING)</li>
                    <li>MONITOR ECG + TEMPERATURE</li>
                    <li>WIDE BORE IV ACCESS + ARTERIAL LINE</li>
                    <li>CONSIDER DDX'S</li>
                    <li>DO NOT DELAY TREATMENT AWAITING TFTS</li>
                    <li>MANAGE HYPERTHERMIA
                        <ul>
                            <li>COOL IVF</li>
                            <li>ICE PACKS TO GROIN / AXILLAE + FANS</li>
                            <li>PARACETAMOL 1G IV (AVOID NSAIDS - DISPLACE T4)</li>
                        </ul>
                    </li>
                    <li>MANAGE HAEMODYNAMICS & SYMPATHETIC OVERDRIVE
                        <ul>
                            <li>BETA-BLOCKADE (PROPANOLOL BLOCKS T4-&gt;T3 CONVERSION)</li>
                            <li>MANAGE TACHYCARDIA / AF / CCF / ISCHAEMIA</li>
                            <li>CONSIDER DIRECT ACTING VASOPRESSORS IF HYPOTENSIVE (AVOID METARAMINOL / EPHEDRINE)</li>
                        </ul>
                    </li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">SPECIFIC THERAPIES (IN SEQUENCE)</h3>
                <ol>
                    <li>BLOCK SYNTHESIS: PTU OR CARBIMAZOLE VIA NGT</li>
                    <li>BLOCK RELEASE: IODINE THERAPY (MUST BE DELAYED BY AT LEAST 1HR POST THIONAMIDE)</li>
                    <li>BLOCK PERIPHERAL CONVERSION: HYDROCORTISONE OR DEXAMETHASONE IV</li>
                    <li>CONSIDER BILE ACID SEQUESTRANTS (E.G. CHOLESTYRAMINE) TO PREVENT ENTEROHEPATIC RECYCLING</li>
                </ol>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">FURTHER MANAGEMENT</h3>
                <ul>
                    <li>URGENT ENDOCRINOLOGY / ENDO SURGERY ADVICE
                    <li>ICU REFERRAL</li>
                </ul>
            </div>
        `
    },
    'e-carcinoid': {
        title: 'CARCINOID CRISIS',
        content: `
            <div class="supplementary-box">
                <strong>CLINICAL FEATURES</strong>
                <ul>
                    <li>HAEMODYNAMIC INSTABILITY (HYPO/HYPERTENSION)</li>
                    <li>TACHYCARDIA</li>
                    <li>FLUSHING</li>
                    <li>BRONCHOSPASM</li>
                    <li>HYPERTHERMIA</li>
                </ul>
            </div>
            <div class="supplementary-box-left">
                <strong>HISTAMINE RELEASING DRUGS</strong>
                <ul>
                    <li>MORPHINE / CODEINE</li>
                    <li>PETHIDINE</li>
                    <li>ATRACURIUM / MIVACURIUM</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>ABCDE CHECK</li>
                    <li>CONSIDER +/- REMOVE PRECIPITANT
                        <ul>
                            <li>SURGICAL STIMULUS</li>
                            <li>INDUCTION + INTUBATION</li>
                            <li>UNMITIGATED SNS RESPONSE</li>
                            <li>TUMOUR MANIPULATION / EMBOLISATION / RADIONUCEUTIDE THERAPY</li>
                            <li>HISTAMINERGIC MEDICATION ADMINISTRATION</li>
                        </ul>
                    </li>
                    <li>INITIATE APPROPRIATE MONITORING (ART LINE, CVP +/- TTE/TOE)</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">ANTICIPATE AND MANAGE</h3>
                <ul>
                    <li>RIGHT HEART FAILURE (CARCINOID HEART DISEASE)</li>
                    <li>HAEMODYNAMIC INSTABILITY (HYPER / HYPOTENSION)</li>
                    <li>HYPOVOLAEMIA
                        <ul>
                            <li>CAUTION RV OVERLOAD</li>
                        </ul>
                    </li>
                    <li>ELECTROLYTE DERANGEMENT</li>
                    <li>HYPERTHERMIA</li>
                    <li>HYPERGLYCAEMIA</li>
                    <li>ACIDOSIS</li>
                    <li>RENAL FAILURE</li>
                    <li>BRONCHOSPASM
                        <ul>
                            <li>CAUTION ADRENERGIC AGENTS</li>
                        </ul>
                    </li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">SPECIFIC THERAPIES</h3>
                <ul>
                    <li>OCTREOTIDE (MAINSTAY) - 100-1000MCG BOLUSES (INFUSION 100-1000MCG/HOUR)</li>
                    <li>VASOPRESSOR SELECTION - LIMITED EVIDENCE - PHENYLEPHRINE, VASOPRESSIN PREFERRED - AVOID INDIRECT AGENTS (METARAMINOL / EPHEDRINE)</li>
                    <li>EXERCISE CAUTION WITH ADRENERGIC AGENTS (NORADRENALINE, ADRENALINE, SALBUTAMOL)</li>
                    <li>CONSIDER ANTIHISTAMINES (H1 & H2 ANTAGONISTS)</li>
                    <li>CONSIDER GLUCOCORTICOIDS</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">POST CRISIS MANAGEMENT</h3>
                <ul>
                    <li>ICU REFERRAL</li>
                    <li>CONTINUE OCTREOTIDE INFUSION (WEAN OVER DAYS)</li>
                    <li>PAIN MANAGEMENT (REGIONAL / NEURAXIAL / PCA)</li>
                </ul>
            </div>
        `
    },
    'e-turp': {
        title: 'TURP SYNDROME / HYSTEROSCOPY INDUCED HYPONATRAEMIA',
        content: `
            <div class="supplementary-box">
                <strong>SEVERE NEUROLOGICAL FEATURES</strong>
                <ul>
                    <li>VISUAL DISTURBANCE / BLINDNESS</li>
                    <li>NAUSEA AND VOMITING</li>
                    <li>SEVERE HEADACHES</li>
                    <li>PRONOUNCED HYPOTENSION</li>
                </ul>
            </div>
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE MANAGEMENT</h3>
                <ul>
                    <li>100% O2</li>
                    <li>ABCDE CHECK</li>    
                    <li>CEASE IRRIGATION FLUDIS (NON-CONDUCTIVE EG. GYLCINE)<li/> 
                    <li>CEASE INTRAVENOUS FLUIDS / AVOID HYPOTONIC IVF</li> 
                    <li>CONSIDER INTUBATION (ALTERED CONSCIOUS STATE / UNPROTECTED AIRWAY)</li>
                    <li>SEND IX's - [Na+], SERUM OSMOLALITY, Hb, HCT</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">ANTICIPATE AND MANAGE</h3>
                <ul>
                    <li>CVS INSTABILTY / DYSRHYTHMIA - INTOTROPES / VASOPRESSORS</li>
                    <li>SEIZURES - BENZODIAZEPINES +/- MAGNESIUM SULFATE</li>
                    <li>PULMONARY OEDEMA - (OSMOTIC THERAPY - BELOW)</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">SPECIFIC THERAPIES</h3>
                <ul>
                    <li>HYPERTONIC SALINE (3%) - IF [Na] <120 OR SEVERE NEUROLOGICAL FEATURES (INCREASE MAX 1 MMOL/L/HR)</li>
                    <li>OSMOTIC THERAPY (PULMONARY OEDEMA ONLY)
                        <ul>
                            <li>FUROSEMIDE (REMOVES FREE H2O / WORSENS HYPONATRAEMIA)</li>
                            <li>MANNITOL (LESS SODIUM LOSS Cf. FUROSEMIDE)</li>
                        </ul>
                    </li>
                    <li>ART LINE +/- CVC</li>
                    <li>ICU / HDU REFERRAL</li>
                </ul>
            </div>
        `
    },



    // O
    'o-eclampsia': {
        title: 'ECLAMPSIA / MATERNAL SEIZURE',
        content: `
            <div class="crisis-section alert-box">
                <h3 style="margin-top: 0; color: #22c55e;">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ACTIVATE CODE / CALL FOR HELP</li>
                    <li>APPLY 15L/MIN VIA NON-REBREATHER</li>
                    <li>POSITION PATIENT LEFT LATERAL / PROVIDE LEFT UTERINE DISPLACEMENT</li>
                    <li>ADMINISTER 4GM LOAD MAGNESIUM SULFATE OVER 15/60 IV (IM 2GM INTO EACH DELTOID IF NO IV)</li>
                </ul>
                <h3 style="color: #22c55e;">ONGOING SEIZURE @ 10/60</h3>
                <ul>
                    <li>TREAT SEIZURES (BENZODIAZEPINES)</li> 
                    <li>MANAGE HYPERTENSION (LABETALOL / HYDRALAZINE)</li>
                    <li>PREPARE FOR RSI (ABLATION HAEMODYNAMIC RESPONSE TO INTUBATION)</li>
                </ul>
                <h3 style="color: #22c55e;">ONGOING MANAGEMENT</h3>
                <ul>
                    <li>ABCDE CHECK</li>
                    <li>ASSESS FOR ASPIRATION</li>
                    <li>ADDITIONAL SEIZURE: FURTHER 2GM MAGNESIUM SULFATE OVER 10/60</li>
                    <li>SEND BLOODS</li>
                    <li>MANAGE THROMBOCYTOPENIA / COAGULOPATHY</li>
                    <li>CHECK BGL, MX HYPOGLYCAEMIA</li>
                    <li>AVOID EXCESSIVE FLUID ADMINISTRATION</li>
                </ul>
                <h3 style="color: #22c55e;">PREPARE FOR DELIVERY</h3>
            </div>
        `
    },
    'o-arrest': {
        title: 'MATERNAL COLLAPSE / ARREST',
        content: `
            <div class="supplementary-box als-box" style="top: 45%;">
                <strong>GENERIC CORRECTIBLE CAUSES (4Hs & 4Ts)</strong>
                <ul>
                    <li>HYPOXIA</li>
                    <li>HYPOVOLAEMIA</li>
                    <li>HYPO/HYPERKALAEMIA</li>
                    <li>HYPOTHERMIA</li>
                    <li>TENSION</li>
                    <li>TAMPONADE</li>
                    <li>TOXINS</li>
                    <li>THROMBUS</li>
                </ul>
            </div>
            <div class="crisis-section alert-box als-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CALL FOR ASSISTANCE (SENIOR OBS / ICU / ANAES / PAEDS / HAEM)</li>
                    <li>LEFT UTERINE DISPLACEMENT</li>
                    <li>X2 WIDE BORE IV ACCESS / IO (ABOVE DIAPHRAGM)</li>
                    <li>CONSIDER <a href="#pregnancy-specific-correctible-causes" style="text-decoration: underline;">PREGNANCY-SPECIFIC CORRECTIBLE CAUSES</a></li>
                </ul>

                <h3>ARRESTED PATIENT</h3>
                <ul>
                    <li>INITIATE <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ALS</a></li>
                    <li>MAINTAIN CONTINUOUS LEFT UTERINE DISPLACEMENT</li>
                    <li>PREPARE FOR IMMINENT DELIVERY</li>
                    <li>>20 WKS = RESUCITATIVE HYSTEROTOMY @ 4/60</li>
                    <li>CONSIDER ECMO EARLY IN REFRACTORY ARREST</li>
                </ul>

                <h3>PERI-ARREST PATIENT</h3>
                <ul>
                    <li>PREPARE FOR IMPENDING ARREST / <a href="crisis.html?id=c-cardiac-arrest" style="text-decoration: underline;">ALS</a></li>
                    <li>AGRESSIVE ABC SUPPORT + SPECIFIC CAUSE MX</li>
                    <li>CONSIDER + DISCUSS DELIVERY WITH OBSTETRICS</li>
                </ul>

                <h3 id="pregnancy-specific-correctible-causes">SPECIFIC CAUSES</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 0.5rem;">
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">COMMON CAUSES<br><span style="font-size: 0.85rem; font-weight: 700;">DELIVERY LESS LIKELY</span></div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem;">
                            <li style="margin-bottom: 0.4rem;">VASOVAGAL</li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=d-spinal" style="text-decoration: underline;">HIGH / TOTAL SPINAL</a></li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=e-last" style="text-decoration: underline;">LAST</a></li>
                            <li style="margin-bottom: 0.4rem;"><a href="crisis.html?id=c-haemorrhage" style="text-decoration: underline;">HAEMORRHAGE</a></li>
                            <li style="margin-bottom: 0.4rem;">OVERDOSE / DRUG ERROR
                                <ul style="margin: 0.2rem 0 0 0; padding-left: 1.2rem; list-style-type: disc;">
                                    <li style="font-size: 0.85rem; opacity: 0.8; list-style-type: disc;">CONSIDER MAGNESIUM OD</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 0.4rem;">HYPOGLYCAEMIA</li>
                            <li style="margin-bottom: 0.4rem;">SEPSIS</li>
                            <li style="margin-bottom: 0;"><a href="crisis.html?id=o-eclampsia" style="text-decoration: underline;">ECLAMPSIA / PRE-ECLAMPSIA</a></li>
                        </ul>
                    </div>
                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); padding: 1.2rem; border-radius: 0.5rem;">
                        <div style="font-weight: 900; font-size: 1rem; color: rgb(56, 189, 248); margin-bottom: 0.6rem;">UNCOMMON CAUSES<br><span style="font-size: 0.85rem; font-weight: 700;">DELIVERY MORE LIKELY</span></div>
                        <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem;">
                            <li style="margin-bottom: 0.4rem;">PE / THROMBUS
                                <ul style="margin: 0.2rem 0 0 0; padding-left: 1.2rem; list-style-type: disc;">
                                    <li style="font-size: 0.85rem; opacity: 0.8; list-style-type: disc;">CONSIDER HEPARIN / THROMBOLYSIS</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 0.4rem;">UTERINE RUPTURE</li>
                            <li style="margin-bottom: 0.4rem;">AFE (AMNIOTIC FLUID EMBOLISM)
                                <ul style="margin: 0.2rem 0 0 0; padding-left: 1.2rem; list-style-type: disc;">
                                    <li style="font-size: 0.85rem; opacity: 0.8; list-style-type: disc; margin-bottom: 0.1rem;">ANTICIPATE COAGULOPATHY</li>
                                    <li style="font-size: 0.85rem; opacity: 0.8; list-style-type: disc;">ANTICIPATE RHF</li>
                                </ul>
                            </li>
                            <li style="margin-bottom: 0.4rem;">CARDIAC - ISCHAEMIA, DISSECTION, DYSRHYTHMIA, VALVE</li>
                            <li style="margin-bottom: 0.4rem;">CEREBRAL EVENT / ICH</li>
                            <li style="margin-bottom: 0;"><a href="crisis.html?id=c-anaphylaxis" style="text-decoration: underline;">ANAPHYLAXIS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="drugs-dosing-box" style="order: 3; background-color: rgba(59, 130, 246, 0.1); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 0.8rem; padding: 1.2rem; margin-top: 1.5rem;">
                <h3>DRUGS & DOSING</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">CALCIUM GLUCONATE</div>
                        <div style="font-size: 0.7rem;">CaGluc 30ML 10% IV</div>
                        <div style="font-size: 0.7rem;">CaCl 10ML 10% IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(MgSO4 ANTIDOTE)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">MAGNESIUM SULFATE</div>
                        <div style="font-size: 0.7rem;">4G IV OVER 5-10 MINS</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">MAINT: 1-2G/HR INFUSION</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(PRE-ECLAMPSIA / ECLAMPSIA)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">ALTEPLASE</div>
                        <div style="font-size: 0.7rem;">?50MG IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(PE / THROMBUS - CPR 90/60 POST)</div>
                    </div>
                </div>
            </div>
        `
    },
    'o-pph': {
        title: 'PRIMARY POST PARTUM HAEMORRHAGE (PPH)',
        content: `
            <div class="supplementary-box">
                <strong>UTEROTONICS</strong>
                <ul style="margin-bottom: 0;">
                    <li>OXYTOCIN 5 IU SLOW IV OVER 1-2 MIN</li>
                    <li>OXYTOCIN INFUSION: 40 IU IN 500ML @ 125ML/HR</li>
                    <li>ERGOMETRINE 250 MCG IV (SLOW) OR IM Q5M TO MAX 1MG</li>
                    <li style="color: #ff9800;">&#9888; ERGOMETRINE: AVOID HTN / PRE-ECLAMPSIA</li>
                    <li>CARBOPROST 250 MCG IM Q15 MIN (MAX 8 DOSES)</li>
                    <li style="color: #ff9800;">&#9888; CARBOPROST: AVOID ASTHMA / PHT</li>
                    <li>MISOPROSTOL 1000 MCG SUBLINGUAL OR PR</li>
                    <li>TXA 1G IV OVER 10 MIN (REPEAT AT 30 MIN)</li>
                </ul>
            </div>
            <div class="crisis-section alert-box" style="overflow: hidden;">
                <h3 style="margin-top: 0; color: var(--color-e);">IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ACTIVATE PPH CODE</li>
                    <li>APPLY SUPPLEMENTAL O2</li>
                    <li>WIDE BORE IV ACCESS X2 ABOVE DIAPHRAGM</li>
                    <li>BASELINE BLOODS + CROSS MATCH</li>
                    <li>ARRANGE DEFINITIVE CARE / HAEMORRHAGE CONTROL WITH OBSTETRICS</li>
                    <li>ACTIVATE MTP IF REQUIRED</li>
                    <li>TXA 1GM</li>
                    <li>TRANSFUSION PER <a href="crisis.html?id=c-haemorrhage">MASSIVE HAEMORRHAGE</a></li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">CONSIDER 4TS</h3>
                <ul>
                    <li><strong>TONE:</strong> UTEROTONICS, FUNDAL MASSAGE, BIMANUAL COMPRESSION (IDC), SPARE SEVOFLURANE</li>
                    <li><strong>TISSUE:</strong> SURGICAL MX - RETAINED PLACENTA / CLOTS</li>
                    <li><strong>TRAUMA:</strong> SURGICAL MX - CERVICAL / VAGINAL / PERINEAL TRAUMA, IF SHOCKED WITH MINIMAL PV BLEEDING CONSDIER INTRA-ABDOMINAL SOURCE</li>
                    <li><strong>THROMBIN:</strong> TXA + MANAGE COAGULOPATHY</li>
                </ul>
                <h3 style="margin-top: 1.5rem; color: var(--color-e);">SURGICAL MX OPTIONS</h3>
                <ul>
                    <li>BALLOON TAMPONADE (E.G. BAKRI BALLOON)</li>
                    <li>HAEMOSTATIC BRACE SUTURING</li>
                    <li>UTERINE ARTERY LIGATION</li>
                    <li>RADIOLOGICAL EMBOLISATION</li>
                    <li>HYSTERECTOMY</li>
                </ul>
            </div>
        `
    },

    // P
    'p-arrest': {
        title: 'PAEDIATRIC CARDIAC ARREST / PALS <br><a href="crisis.html?id=c-cardiac-arrest" class="primary-btn" style="font-size: 0.55em; line-height: 1.2; padding: 0.6rem 1.2rem; margin-top: 0.5rem; display: inline-block; text-decoration: none; border: 1px solid currentColor;">GO TO<br>ADULT ALS</a>',
        content: `
            <div class="supplementary-box als-box" style="top: 45%;">
                <strong>CORRECTIBLE CAUSES (4Hs & Ts)</strong>
                <ul>
                    <li>HYPOXIA</li>
                    <li>HYPOVOLAEMIA</li>
                    <li>HYPO/HYPERKALAEMIA</li>
                    <li>HYPOTHERMIA</li>
                    <li>TENSION</li>
                    <li>TAMPONADE</li>
                    <li>TOXINS</li>
                    <li>THROMBUS</li>
                </ul>
            </div>
            <div class="supplementary-box-left als-box">
                <strong>COACHED</strong>
                <ul>
                    <li>CONTINUE COMPRESSIONS</li>
                    <li>OXYGEN AWAY</li>
                    <li>ALL ELSE CLEAR</li>
                    <li>CHARGING</li>
                    <li>HANDS OFF</li>
                    <li>EVALUATE RHYTHM</li>
                    <li>DEFIBRILLATE OR DISARM</li>
                </ul>
            </div>
            <div class="crisis-section alert-box als-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>ACTIVATE CODE BLUE</li>
                    <li><strong>PRIORITY</strong> = AIRWAY + VENTILATION + OXYGENATION</li>
                    <li>INITIATE HIGH PERFORMANCE CPR @ 15:2</li>
                    <li>CHILD HR <40, INFANT <60 = START CPR</li>
                    <li>COACHED Q2M</li>
                    <li>ADRENALINE 10MCG/KG (0.1ML/KG 1:10,000) Q4M (IMMEDIATE IF PEA)</li>
                    <li>IO ACCESS IF NO IV</li>
                    <li>LMA / ETT (IF NO CPR INTERRUPTION)</li>
                    <li>SHOCKABLE = 4J/KG
                        <ul>
                            <li>AMIODARONE 5MG/KG AFTER 3RD SHOCK</li>
                            <li>LIGNOCAINE 1MG/KG AFTER 5TH SHOCK</li>
                        </ul>
                    </li>
                </ul>
                <h3>CONSIDER SPECIAL CIRCUMSTANCES</h3>
                <ul>
                    <li>POST CARDIAC SURGERY (<a href="crisis.html?id=c-cals" style="text-decoration: underline;">CALS</a>)</li>
                    <li><a href="crisis.html?id=c-anaphylaxis" style="text-decoration: underline;">ANAPHYLAXIS</a></li>
                    <li>TRAUMA
                        <ul>
                            <li>PRIORITISE AS REQUIRED:
                                <ul>
                                    <li>HAEMORRHAGE CONTROL</li>
                                    <li>AIRWAY PATENCY (MANOUVERS +/- ETT / LMA / <a href="crisis.html?id=p-cico" class="cico-btn">FONA</a>)</li>
                                    <li>BREATHING (VENTILATION, CHEST DECOMPRESSION, PERICARDIOCENTESIS, RESUSCITATIVE THORACOTOMY)</li>
                                    <li>CIRCULATION (RESTORATION OF CIRCULATING VOLUME, PELVIC SPLINTING)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>HYPOTHERMIA
                        <ul>
                            <li>ANTICIPATE PROLONGED RESUSCITATION:
                                <ul>
                                    <li>MECHANICAL CPR</li>
                                    <li>ACTIVE REWARMING</li>
                                    <li>ECMO CONSIDERATION</li>
                                </ul>
                            </li>
                            <li>IF ↓RESPONSE TO SHOCK + Vf - WH SHOCK UNTIL &gt; 30°C</li>
                            <li>ADRENALINE - WH UNTIL &gt; 30°C, X2 DOSING INTERVALS 30-34°C</li>
                        </ul>
                    </li>
                    <li><a href="crisis.html?id=ab-bronchospasm" style="text-decoration: underline;">ASTHMA</a></li>
                    <li><a href="crisis.html?id=e-last" style="text-decoration: underline;">LAST</a></li>
                    <li>PULMONARY EMBOLISM
                        <ul>
                            <li>SUSPECTED CAUSE - CONSIDER THROMBOLYSIS</li>
                            <li>CONFIRMED CAUSE - CONSIDER THROMBOLYSIS +/- PULMONARY THROMBECTOMY</li>
                            <li>MECHANICAL / PROLONGED CPR POST THROMBOLYSIS</li>
                        </ul>
                    </li>
                    <li>ORGANOPHOSPHATES
                        <ul>
                            <li>BRADYCARDIA - ATROPINE+++</li>
                        </ul>
                    </li>
                    <li>CYANIDE
                        <ul>
                            <li>CONSIDER HYDROXYCOBALAMIN + SODIUM THIOSULFATE</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="drugs-dosing-box" style="order: 3; background-color: rgba(59, 130, 246, 0.1); border: 2px solid rgba(59, 130, 246, 0.4); border-radius: 0.8rem; padding: 1.2rem; margin-top: 1.5rem;">
                <h3>DRUGS & DOSING</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">ADRENALINE</div>
                        <div style="font-size: 0.7rem;">10 MCG/KG (0.1ML/KG 1:10,000)</div>
                        <div style="font-size: 0.7rem;">PEA: IMMEDIATE</div>
                        <div style="font-size: 0.7rem;">VF/VT: EVERY 2ND CYCLE</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">AMIODARONE</div>
                        <div style="font-size: 0.7rem;">5 MG/KG AFTER 3RD SHOCK</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">LIGNOCAINE</div>
                        <div style="font-size: 0.7rem;">1 MG/KG AFTER 5TH SHOCK</div>
                    </div>


                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">SODIUM BICARBONATE</div>
                        <div style="font-size: 0.7rem;">1 MMOL/KG IV (8.4% = 1MMOL/ML)</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(ACIDOSIS, ↑K, TCA OD, ARREST >15MIN)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">MAGNESIUM SULFATE</div>
                        <div style="font-size: 0.7rem;">25 MG/KG</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(TORSADES, DIGOXIN TOX, ↓K/Mg)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">CALCIUM</div>
                        <div style="font-size: 0.7rem;">CaCl 0.2 ML/KG 10% IV</div>
                        <div style="font-size: 0.7rem;">CaGluc 0.5 ML/KG 10% IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(↑K, ↓Ca, CCB OD)</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border-radius: 0.5rem; padding: 0.6rem;">
                        <div style="font-weight: 800; margin-bottom: 0.3rem; font-size: 0.75rem; color: #f8fafc;">ALTEPLASE</div>
                        <div style="font-size: 0.7rem;">UNKNOWN ?0.6 MG/KG IV</div>
                        <div style="font-size: 0.7rem; margin-top: 0.2rem;">(SUSPECTED PE / THROMBUS)</div>
                    </div>
                </div>
            </div>
        `
    },
    'p-neonatal': {
        title: 'NEONATAL ALS',
        content: `
            <div class="supplementary-box-left als-box" style="top: 45%;">
                <strong>TARGET PRE-DUCTAL SPO2</strong>
                <ul style="margin-top: 10px;">
                    <li><span style="font-weight: bold;">1 MIN:</span> 60 - 65%</li>
                    <li><span style="font-weight: bold;">2 MIN:</span> 65 - 70%</li>
                    <li><span style="font-weight: bold;">3 MIN:</span> 70 - 75%</li>
                    <li><span style="font-weight: bold;">4 MIN:</span> 75 - 80%</li>
                    <li><span style="font-weight: bold;">5 MIN:</span> 80 - 85%</li>
                    <li><span style="font-weight: bold;">10 MIN:</span> 85 - 90%</li>
                </ul>
            </div>
            <div class="supplementary-box als-box" style="top: 50%; background: transparent; border: none; box-shadow: none; padding: 0; display: flex; flex-direction: column; gap: 1rem;">
                <div style="background-color: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 0.8rem; padding: 1.2rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
                    <h3>DRUGS & FLUIDS</h3>
                    <ul style="margin-bottom: 0.5rem; margin-top: 10px;">
                        <li style="font-weight: bold; padding-bottom: 0.2rem; margin-bottom: 0.2rem;">ADRENALINE</li>
                        <li>10-30 MCG/KG IV/IO (0.1 - 0.3 ML/KG OF 1:10,000)</li>
                        <li>100 MCG/KG VIA ETT</li>
                        <li>RPT Q4M IF HR < 60</li>
                    </ul>
                    <ul style="margin-bottom: 0.5rem;">
                        <li style="font-weight: bold; padding-bottom: 0.2rem; margin-bottom: 0.2rem; margin-top: 0.8rem;">VOLUME EXPANSION</li>
                        <li>10 ML/KG (0.9% SALINE OR O-NEG BLOOD)</li>
                    </ul>
                </div>
                <div style="background-color: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 0.8rem; padding: 1.2rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
                    <h3>AIRWAY SIZING</h3>
                    <ul style="margin-top: 10px;">
                        <li><span style="font-weight: bold;">I-GEL 1:</span> 2-5KG</li>
                        <li><span style="font-weight: bold;">BLADE:</span> MILLER 0 (PRETERM) / 1 (TERM)</li>
                        <li style="font-weight: bold; margin-top: 5px; padding-bottom: 2px;">ETT SIZES:</li>
                        <li><span style="font-weight: bold;">TERM (>3KG):</span> SIZE 3.5</li>
                        <li><span style="font-weight: bold;">PRETERM (2-3KG):</span> SIZE 3.0 - 3.5</li>
                        <li><span style="font-weight: bold;">PRETERM (1-2KG):</span> SIZE 3.0</li>
                        <li><span style="font-weight: bold;">PRETERM (<1KG):</span> SIZE 2.5</li>
                    </ul>
                </div>
            </div>
            <div class="crisis-section alert-box als-box" style="overflow: hidden;">
                <h3>INITIAL EVALUATION</h3>
                <ul>
                    <li>TERM GESTATION? BREATHING OR CRYING? GOOD TONE?</li>
                    <li><strong>YES &rarr;</strong> KEEP WARM, MONITOR, STAY WITH MUM.</li>
                    <li><strong>NO &rarr;</strong> ACTIVELY WARM, ENSURE OPEN AIRWAY, STIMULATE</li>
                </ul>
                <h3>@ 1/60 - HR < 100? GASPING OR APNOEA?</h3>
                <ul>
                    <li><strong>YES &rarr;</strong> IPPV, MONITOR SPO2</li>
                    <li><strong>NO &rarr;</strong> LABOURED BREATHING OR PERSISTENT CYANOSIS?
                        <ul>
                            <li><strong>YES &rarr;</strong> ENSURE OPEN AIRWAY, SPO2 MONITORING, CONSIDER CPAP</li>
                            <li><strong>NO &rarr;</strong> POST-RESUSCITATION CARE</li>
                        </ul>
                    </li>
                </ul>
                <h3>HR < 100?</h3>
                <ul>
                    <li><strong>YES &rarr;</strong> ENSURE OPEN AIRWAY, OPTIMISE SEAL. CONSIDER:
                        <ul>
                            <li>INCREASED PRESSURE & O2</li>
                            <li>LMA OR ETT</li>
                        </ul>
                    </li>
                    <li><strong>NO &rarr;</strong> POST-RESUSCITATION CARE</li>
                </ul>
                <h3>HR < 60?</h3>
                <ul>
                    <li><strong>YES &rarr;</strong> COMMENCE CPR 3:1</li>
                    <li>100% OXYGEN</li>
                    <li>LMA OR ETT</li>
                    <li>IV/IO/UMBILICAL ACCESS</li>
                </ul>
                <h3>HR REMAINS < 60?</h3>
                <ul>
                    <li><strong>YES &rarr;</strong> IV ADRENALINE</li>
                    <li>CONSIDER VOLUME EXPANSION</li>
                </ul>
            </div>
        `
    },

    'p-cico': {
        title: 'CICO (PAED) <br><a href="crisis.html?id=ab-CICO" class="primary-btn" style="font-size: 0.55em; line-height: 1.2; padding: 0.6rem 1.2rem; margin-top: 0.5rem; display: inline-block; text-decoration: none; border: 1px solid currentColor;">GO TO<br>CICO ADULT</a>',
        content: `
            <style>
                .cico-box li {
                    margin-bottom: 0.6rem !important;
                }
                .cico-box ul {
                    margin-top: 0.6rem !important;
                }
                .cico-branch {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 0.5rem;
                    margin-bottom: 1rem;
                    background-color: rgba(56, 189, 248, 0.12);
                    border: none;
                }
                .cico-branch ul {
                    margin-top: 0.5rem;
                }
                .cico-branch ul li {
                    margin-bottom: 0.4rem !important;
                    color: #f8fafc;
                }
                .cico-branch strong {
                    color: #f8fafc;
                }
            </style>
            <div class="crisis-section cico-box">
                <h3>IMMEDIATE ACTIONS</h3>
                <ul>
                    <li>CALL FOR HELP (ENT EARLY)</li>
                    <li>CONTINUE SUPRAGLOTTIC OXYGENATION ATTEMPTS</li>
                    <li>WAKE + REVERSE PATIENT IF ABLE + IF MAINTAINING SATS >80%</li>
                    <li>POSITION PATIENT (NECK EXTENSION +/- SHOULDER ROLL)</li>
                </ul>
                <h3 style="color: #22c55e; font-size: 1.15rem; margin: 2rem 0 1rem 0; font-weight: 900; text-transform: uppercase;">FIRST LINE - CANNULA TECHNIQUE AS BELOW</h3>
                <div style="margin: 1rem 0 0.8rem 0;">
                    <div style="color: #ef4444; font-size: 1rem; font-weight: 900; text-transform: uppercase; line-height: 1.1;">FAILED CANNULA TECHNIQUE</div>
                    <div style="display: flex; align-items: flex-start; margin-left: 0.8rem; margin-top: 0.4rem;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px; margin-right: 0.5rem; flex-shrink: 0;">
                            <path d="M6 0v8a4 4 0 0 0 4 4h10" />
                            <polyline points="16 8 20 12 16 16" />
                        </svg>
                        <div style="color: #ef4444; font-size: 1rem; font-weight: 900; text-transform: uppercase; line-height: 1.2;">ASSESS NECK ANATOMY (PALPABLE VS IMPALPABLE)</div>
                    </div>
                </div>
                <div class="cico-branch">
                    <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                        PALPABLE
                    </div>
                    <ul style="margin-left: 1.5rem;">
                        <li><strong>CANNULA CRICOTHYROIDOTOMY / CANNULA TRACHEOTOMY</strong>
                            <ul>
                                <li>5ML SYRINGE + SALINE + 18/16G CANNULA</li>
                                <li>45&deg; NEEDLE ANGLE, FROM CAUDAD TO MIDLINE, ASPIRATE FOR AIR AND CONFIRM NO RECOIL</li>
                                <li>ATTACH LEROY RAPID O2 DEVICE @ 1L/MIN/KG (MINIMUM 4L/MIN)</li>
                                <li>INSUFFLATE UNTIL CHEST RISE - WATCH FOR SUBCUT EMPHYSEMA</li>
                                <li>SECOND INSUFFLATION WHEN SATS &darr; (AVOID BREATH STACKING)</li>
                                <li>FAILURE TO EXPAND CHEST / IMPROVE SATS - ABANDON &rarr; ALTERNATIVE TECHNIQUE</li>
                                <li>CONSULT ENT FOR SURGICAL TRACHEOSTOMY</li>
                                <li>NO ENT AVAILABLE + DIFFICULTY WITH CANNULA (BLEEDING, KINKING, SECRETIONS) - CONSIDER MELKER (AGE >8 ONLY)</li>
                            </ul>
                        </li>
                        <li style="margin-top: 1.5rem;"><strong>SCALPE, BOUGIE, TUBE</strong>
                            <ul>
                                <li>10 BLADE SCALPEL</li>
                                <li>HORIZONTAL EXCISION + ROTATE 90 DEGREES</li>
                                <li>ETT OVER BOUGIE
                                    <ul>
                                        <li>3.0 ETT WITH 5Fr BOUGIE (NEONATES / INFANTS)</li>
                                        <li>4.0 ETT WITH 8Fr FROVA INTRODUCER (SMALL CHILD)</li>
                                        <li>5.0 ETT WITH 11Fr AIRWAY EXCHANGE (MEDIUM CHILD / ADOLESCENT)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="cico-branch">
                    <div style="font-weight: 900; color: rgb(56, 189, 248); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                        IMPALPABLE
                    </div>
                    <ul style="margin-left: 1.5rem;">
                        <li><strong>SCALPEL, FINGER, CANNULA/SCALPEL</strong>
                            <ul>
                                <li>SUCTION + GAUZE</li>
                                <li>MIDLINE INCISION TO EXPOSE THYROID CARTILAGE</li>
                                <li>BLUNT FINGER DISSECTION TO CRICOTHYROID / TRACHEA</li>
                                <li>CANNULA OR SCALPEL, BOUGIE, TUBE AS ABOVE</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        `
    },

    // Resources

    'r-about': {
        title: 'ABOUT GASCRISIS.NET',
        content: `
            <div class="crisis-section">
                <h2 style="color: var(--color-e); margin-bottom: 1.5rem; font-size: 1.3rem;">GasCrisis.net - Anaesthesia and Critical Care Crisis Manual</h2>

                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-primary); margin-bottom: 0.8rem; font-size: 1.1rem;">What is GasCrisis.net?</h3>
                    <p style="color: #f8fafc; line-height: 1.6; margin-bottom: 1rem;">
                        GasCrisis.net is a comprehensive, evidence-based crisis management resource designed specifically for anaesthetists and critical care clinicians.
                        This digital manual provides rapid access to critical information during anaesthetic emergencies, combining clinical guidelines with practical management steps.
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-primary); margin-bottom: 0.8rem; font-size: 1.1rem;">Purpose & Design</h3>
                    <ul style="color: #f8fafc; line-height: 1.6;">
                        <li style="margin-bottom: 0.8rem;"><h3>Rapid Access:</h3> Pertinent information is organised for quick navigation during crises</li>
                        <li style="margin-bottom: 0.8rem;"><h3>Evidence-Based:</h3> Content derived from current guidelines and peer-reviewed literature</li>
                        <li style="margin-bottom: 0.8rem;"><h3>Practical Focus:</h3> Emphasises actionable steps and cognitive aids for time-critical situations</li>
                        <li style="margin-bottom: 0.8rem;"><h3>Mobile-Optimised:</h3> Designed for use on desktops, tablets and smartphones in clinical environments</li>
                    </ul>
                </div>


                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-primary); margin-bottom: 0.8rem; font-size: 1.1rem;">How to Use</h3>
                    <ul style="color: #f8fafc; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">Navigate using the main dashboard tiles or search function</li>
                        <li style="margin-bottom: 0.5rem;">Structured stepwise formatting is provided where relevant but not exclusively for all topics</li>
                        <li style="margin-bottom: 0.5rem;">Cross-reference related topics using embedded links</li>
                        <li style="margin-bottom: 0.5rem;">An effort has been made to provide relevant, concise information for quick reference by experienced clinicians ie. finer details often omitted for brevity</li>
                        
                        


                    </ul>
                </div>

                <div style="margin-bottom: 2rem; padding: 1rem; background: rgba(56, 189, 248, 0.08); border-left: 4px solid rgb(56, 189, 248); border-radius: 0.5rem;">
                    <h3 style="color: rgb(56, 189, 248); margin-bottom: 0.8rem; font-size: 1.1rem;">⚠️ Important Disclaimer</h3>
                    <p style="color: #f8fafc; line-height: 1.6; margin: 0; font-size: 0.95rem;">
                        <strong>This resource is for educational and reference purposes only.</strong> It does not constitute medical advice and should not replace
                        clinical judgment, institutional protocols, or consultation with a medical professional. Efforts are made for accurancy and currency however no guarantees are provided. The authors and contributors accept no liability for any consequences arising from the use of this information. 
                    </p>
                </div>

                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--text-primary); margin-bottom: 0.8rem; font-size: 1.1rem;">Version & Updates</h3>
                    <p style="color: #f8fafc; line-height: 1.6; margin: 0;">
                        Current Version: 1.0 (May 2026)<br>
                        Last updated: May 17, 2026
                    </p>
                </div>

                <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                    <p style="color: #f8fafc; font-size: 0.9rem; margin: 0;">
                        GasCrisis.net © 2026 | Designed for anaesthetic crisis management
                    </p>
                </div>
            </div>
        `
    },
    'r-paeds-params': {
        title: 'PAEDIATRIC PARAMETERS BY AGE / WEIGHT',
        content: `
            <div class="crisis-section">
                <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap; align-items: flex-end;">
                    <div>
                        <label for="weight-input" style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); display: block; margin-bottom: 0.5rem;">WEIGHT (KG)</label>
                        <input type="number" id="weight-input" min="1" max="50" step="0.5" placeholder="e.g. 15" style="padding: 0.6rem 1rem; font-size: 1.1rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.3); color: #f8fafc; width: 120px;" />
                    </div>
                    <div>
                        <label for="age-input" style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); display: block; margin-bottom: 0.5rem;">OR AGE (YRS)</label>
                        <input type="number" id="age-input" min="0" max="16" step="0.1" placeholder="e.g. 5" style="padding: 0.6rem 1rem; font-size: 1.1rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.3); color: #f8fafc; width: 120px;" />
                    </div>
                    <div>
                        <button id="calc-btn" style="padding: 0.6rem 1.2rem; font-size: 1rem; font-weight: 700; border-radius: 0.5rem; border: none; background: rgb(56, 189, 248); color: #0f172a; cursor: pointer; height: 45px;">CALCULATE</button>
                    </div>
                </div>
                <div id="params-result" style="display:none;">
                    <div class="paeds-calc-grid">
                        <div class="paeds-card">
                            <h3>Vitals</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tbody id="vitals-table-body"></tbody>
                            </table>
                        </div>
                        <div class="paeds-card">
                            <h3>Airway</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tbody id="airway-table-body"></tbody>
                            </table>
                        </div>
                        <div class="paeds-card">
                            <h3>Drug Doses</h3>
                            <table style="width: 100%; border-collapse: collapse;">
                                <tbody id="drugs-table-body"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'r-credited': {
        title: 'CREDITED RESOURCES',
        content: `
            <div class="crisis-section">
                <ol style="list-style-type: none; padding-left: 0; overflow-wrap: anywhere; word-break: break-word;">
                    <li>Ambulance Victoria. Clinical Practice Guidelines [Internet]. Melbourne: Ambulance Victoria; [cited 2026]. Available from: https://www.ambulance.vic.gov.au/paramedics/clinical-practice-guidelines/</li>
                    <li>American Society of Anesthesiologists Task Force on Operating Room Fires. Practice advisory for the prevention and management of operating room fires: an updated report. Anesthesiology. 2013;118(2):271-290.</li>
                    <li>Anaesthetic Crisis Handbook [Internet]. New Zealand; [cited 2026 Apr 16]. Available from: https://anaestheticcrisishandbook.com/</li>
                    <li>Association of Anaesthetists. Quick Reference Handbook: Anaesthetic Emergencies. 3rd ed. London: Association of Anaesthetists; 2024.</li>
                    <li>Australian and New Zealand Committee on Resuscitation (ANZCOR). ANZCOR Guidelines [Internet]. Melbourne (VIC): ANZCOR; [updated 2024; cited 2026 Mar 12]. Available from: https://www.anzcor.org/</li>
                    <li>Borshoff DC. The anaesthetic crisis manual. International edition, version 2.0. Perth: Leeuwin Press; 2017.</li>
                    <li>Chu J, Johnston TA, Geoghegan J; Royal College of Obstetricians and Gynaecologists. Maternal Collapse in Pregnancy and the Puerperium: Green-top Guideline No. 56. BJOG. 2020;127(5):e14-e52.</li>
                    <li>Kaltsas G, Caplin M, Davies P, et al. ENETS Consensus Guidelines for the Standards of Care in Neuroendocrine Tumors: Pre- and Perioperative Therapy in Patients with Neuroendocrine Tumors. Neuroendocrinology. 2017;105(3):245-254.</li>
                    <li>Karcher C, Jurisevic C, Southwood T, McCormack D, Rogers A, Levine A, et al. The Australasian ANZSCTS/ANZICS guidelines on cardiothoracic advanced life support (CALS-ANZ). Crit Care Resusc. 2022 Sep 5;24(3):218-223.</li>
                    <li>Kopp PA, Giordani I, Feldt-Rasmussen U, Forget-Renaud A. Approach to the patient with thyroid storm. J Clin Endocrinol Metab. 2026 Feb 8;111(5):1484-1494. doi: 10.1210/clinem/dgag054.</li>
                    <li>Malignant Hyperthermia Australia [Internet]. [cited 2026 May 7]. Available from: https://www.malignanthyperthermia.org.au/</li>
                    <li>NeuroEndocrine Cancer Australia. Carcinoid crisis and anaesthesia fact sheet [Internet]. NeuroEndocrine Cancer Australia; [cited 2026 May 19]. Available from: https://neuroendocrine.org.au/</li>
                    <li>O'Donnell AM, Foo IT. Anaesthesia for transurethral resection of the prostate. BJA Education. 2009;9(3):92-96. Available from: https://www.bjaed.org/article/S1743-1816(17)30313-X/fulltext</li>
                    <li>Royal Australian and New Zealand College of Obstetricians and Gynaecologists (RANZCOG). Guideline for the management of hypertensive disorders of pregnancy [Internet]. Melbourne: RANZCOG; 2023 [cited 2024 May 21]. Available from: ranzcog.edu.au</li>
                    <li>Royal Australian and New Zealand College of Obstetricians and Gynaecologists (RANZCOG). Management of postpartum haemorrhage (C-Obs 43) [Internet]. Melbourne: RANZCOG; 2017 [cited 2026 May 5]. Available from: https://ranzcog.edu.au/wp-content/uploads/2022/05/Management-of-Postpartum-Haemorrhage-C-Obs-43.pdf</li>
                    <li>Sabato SC, Long E. An institutional approach to the management of the 'Can't Intubate, Can't Oxygenate' emergency in children. Pediatr Anesth. 2016;26(8):784-793.</li>
                    <li>Sims C, Johnson C. Your guide to paediatric anaesthesia. McGraw-Hill Medical Australia; 2011.</li>
                    <li>Society for Neuroscience in Anesthesiology and Critical Care (SNACC) Education Committee. Cognitive Aids for the Diagnosis and Treatment of Neuroanesthetic Emergencies: Consensus Guidelines. J Neurosurg Anesthesiol. 2019 Jan;31(1):7-17.</li>
                    <li>Therapeutic Guidelines [Internet]. Hyperkalaemia. Melbourne: Therapeutic Guidelines Limited; [cited 2026 May 11]. Available from: https://www.tg.org.au/</li>
                    <li>Therapeutic Guidelines [Internet]. Thyroid disorders. Melbourne: Therapeutic Guidelines Limited; [cited 2026 May 10]. Available from: https://www.tg.org.au/</li>
                    <li>UpToDate [Internet]. Thyrotoxicosis in adults: Evaluation and management. Waltham (MA): UpToDate; [cited 2026 May 10]. Available from: https://www.uptodate.com/</li>
                </ol>
            </div>
        `
    }
};

// helper: keep the dashboard lists in alphabetical order, unless data-no-sort is set
function sortCrisisLists() {
    document.querySelectorAll('.crisis-list').forEach(ul => {
        if (ul.getAttribute('data-no-sort') === 'true') {
            return; // Skip sorting for this specific list
        }
        const items = Array.from(ul.querySelectorAll('li'));
        items.sort((a, b) =>
            a.textContent.trim().localeCompare(b.textContent.trim(), undefined, { sensitivity: 'base' })
        );
        items.forEach(li => ul.appendChild(li));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ensure the tiles are sorted every time the index renders
    sortCrisisLists();

    // --- Global Disclaimer Logic for Both Pages ---
    const disclaimerModal = document.getElementById('disclaimer-modal');
    const agreeBtn = document.getElementById('agree-btn');

    if (disclaimerModal && agreeBtn) {
        let hasAgreed = false;
        try {
            hasAgreed = !!localStorage.getItem('gascrisis_agreed');
        } catch (e) {
            console.warn('localStorage is not accessible (likely due to file:// protocol in Chrome). Defaulting to not agreed.');
        }

        if (!hasAgreed) {
            disclaimerModal.style.display = 'flex';
            setTimeout(() => {
                disclaimerModal.classList.add('show');
            }, 50);
        }

        agreeBtn.addEventListener('click', () => {
            try {
                localStorage.setItem('gascrisis_agreed', 'true');
            } catch (e) {
                console.warn('Could not save to localStorage.', e);
            }
            disclaimerModal.classList.remove('show');
            setTimeout(() => {
                disclaimerModal.style.display = 'none';
            }, 300);
        });
    }

    // --- Index Page Logic ---
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('index') || window.location.pathname.endsWith('index/')) {

        // Search Functionality
        const searchInput = document.getElementById('crisis-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();

                document.querySelectorAll('.crisis-list a').forEach(a => {
                    a.classList.remove('highlight');
                });

                if (searchTerm.length < 2) return;

                document.querySelectorAll('.crisis-list a').forEach(a => {
                    const text = a.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        a.classList.add('highlight');
                    }
                });
            });
        }
    }

    // --- Crisis Detail Page Logic ---
    if (window.location.pathname.endsWith('crisis.html') || window.location.pathname.endsWith('crisis') || window.location.pathname.endsWith('crisis/')) {
        const urlParams = new URLSearchParams(window.location.search);
        const crisisId = urlParams.get('id');

        const crisisTitleEl = document.getElementById('crisis-title');
        const crisisContentEl = document.getElementById('crisis-content');

        if (crisisId && crisisData[crisisId]) {
            crisisTitleEl.innerHTML = crisisData[crisisId].title;
            crisisContentEl.innerHTML = crisisData[crisisId].content;

            // Set dynamic theme class
            const prefix = crisisId.split('-')[0];
            document.body.classList.add(`crisis-theme-${prefix}`);

            // Wire up paediatric params calculator
            if (crisisId === 'r-paeds-params') {
                const calcBtn = document.getElementById('calc-btn');
                const weightInput = document.getElementById('weight-input');
                const ageInput = document.getElementById('age-input');
                const resultDiv = document.getElementById('params-result');
                const vitalsLabels = {
                    hr: { label: 'Heart Rate', unit: 'bpm' },
                    rr: { label: 'Respiratory Rate', unit: 'bpm' },
                    sbp: { label: 'Systolic BP', unit: 'mmHg' }
                };

                const airwayLabels = {
                    ettCuffed: { label: 'ETT Cuffed (Age/4 + 3.5)', unit: '' },
                    ettUncuffed: { label: 'ETT Uncuffed (Age/4 + 4)', unit: '' },
                    depthOral: { label: 'ETT Depth Oral - Age/2 + 12', unit: 'cm' },
                    depthNasal: { label: 'ETT Depth Nasal - Age/2 + 15', unit: 'cm' },
                    lma: { label: 'LMA Size', unit: '' },
                    lScope: { label: 'Laryngoscope', unit: '' },
                    suction: { label: 'Suction Catheter - ETT size x2', unit: 'Fr' },
                    vt: { label: 'V<small>T</small> 6-8ml/kg', unit: 'ml' }
                };

                const drugsLabels = {
                    atropine: { label: 'Atropine 20mcg/kg', unit: 'mcg' },
                    suxIm: { label: 'Sux IM 4mg/kg', unit: 'mg' },
                    suxIv: { label: 'Sux IV 2mg/kg', unit: 'mg' },
                    adrArrest: { label: 'Adrenaline - Arrest - 10mcg/kg', unit: 'mcg' },
                    adrArrestMl: { label: 'Adrenaline - Arrest - 1:10,000', unit: 'ml' },
                    anaphModIm: { label: 'Adrenaline - Anaphylaxis - Moderate IM 10mcg/kg', unit: 'mcg' },
                    anaphModIv: { label: 'Adrenaline - Anaphylaxis - Moderate IV 2mcg/kg', unit: 'mcg' },
                    anaphLife: { label: 'Adrenaline - Anaphylaxis - Life-threatening IV 4-10mcg/kg', unit: 'mcg' },
                    seizure: { label: 'Midazolam - Seizure - 0.15mg/kg', unit: 'mg' },
                    dccs: { label: 'DC Cardioversion 4J/kg', unit: 'J' }
                };

                function runCalc() {
                    let w = parseFloat(weightInput.value);
                    const a = parseFloat(ageInput.value);

                    // Clear weight input if it was automatically calculated previously 
                    // and user has now typed a new age without a weight
                    if (!weightInput.value && !isNaN(a)) {
                        if (a < 1) {
                            // < 1 year: (Age in months * 0.5) + 4
                            w = ((a * 12) * 0.5) + 4;
                        } else if (a <= 5) {
                            // 1 - 5 years: (Age in years * 2) + 8
                            w = (a * 2) + 8;
                        } else {
                            // 6 - 12 years: (Age in years * 3) + 7
                            w = (a * 3) + 7;
                        }
                        // Update weight field to show calculated value
                        weightInput.value = w.toFixed(1);
                    }

                    if (!w || w <= 0) return;

                    // Clear the age input if user just entered weight so we don't recalculate if they change weight later
                    if (weightInput.value && !isNaN(w) && isNaN(a) && a !== 0) {
                        // Do nothing, just use weight
                    } else if (weightInput.value && !isNaN(w) && !isNaN(a)) {
                        // User provided both. If they click calculate, we should use weight as source of truth.
                        // Or if they wanted to re-calculate from age, they'd clear weight.
                    }

                    const data = getClinicalParams(w);
                    
                    const vitalsBody = document.getElementById('vitals-table-body');
                    const airwayBody = document.getElementById('airway-table-body');
                    const drugsBody = document.getElementById('drugs-table-body');

                    vitalsBody.innerHTML = '';
                    airwayBody.innerHTML = '';
                    drugsBody.innerHTML = '';
                    
                    // Add Weight row to Vitals
                    const trW = document.createElement('tr');
                    trW.innerHTML = `<td>Weight</td><td style="color: #f8fafc; font-weight: bold; font-size: 1.1em;">${parseFloat(w).toFixed(1)} kg</td>`;
                    vitalsBody.appendChild(trW);

                    // Add Typical Age row to Vitals
                    let displayAge = !isNaN(a) && a > 0 ? a + ' yrs' : data.ageLabel;
                    const trA = document.createElement('tr');
                    trA.innerHTML = `<td>Typical Age</td><td style="color: #f8fafc; font-weight: bold; font-size: 1.1em;">${displayAge}</td>`;
                    vitalsBody.appendChild(trA);

                    // Populate Vitals
                    for (const [key, item] of Object.entries(vitalsLabels)) {
                        const tr = document.createElement('tr');
                        let value = data[key];
                        const unitStr = item.unit ? ' ' + item.unit : '';
                        tr.innerHTML = `<td>${item.label}</td><td>${value}${unitStr}</td>`;
                        vitalsBody.appendChild(tr);
                    }

                    // Populate Airway
                    for (const [key, item] of Object.entries(airwayLabels)) {
                        const tr = document.createElement('tr');
                        let value = data[key];
                        if (key === 'vt') value = Math.round(w * 6) + ' – ' + Math.round(w * 8);
                        const unitStr = item.unit ? ' ' + item.unit : '';
                        tr.innerHTML = `<td>${item.label}</td><td>${value}${unitStr}</td>`;
                        airwayBody.appendChild(tr);
                    }

                    // Populate Drugs
                    for (const [key, item] of Object.entries(drugsLabels)) {
                        const tr = document.createElement('tr');
                        let value = data[key];
                        if (key === 'atropine') value = Math.min(Math.round(value * 1000), 600);
                        const unitStr = item.unit ? ' ' + item.unit : '';
                        tr.innerHTML = `<td>${item.label}</td><td>${value}${unitStr}</td>`;
                        drugsBody.appendChild(tr);
                    }

                    resultDiv.style.display = 'block';
                }

                calcBtn.addEventListener('click', runCalc);
                weightInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') runCalc();
                });
                weightInput.addEventListener('input', () => {
                    ageInput.value = ''; // clear age if weight is manually entered
                });
                ageInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') runCalc();
                });
                ageInput.addEventListener('input', () => {
                    weightInput.value = ''; // clear weight if age is manually entered
                });
            }
        } else {
            if (crisisTitleEl) crisisTitleEl.textContent = 'Crisis Not Found';
            if (crisisContentEl) crisisContentEl.innerHTML = '<p>Sorry, the information for this crisis could not be found. Please return to the dashboard.</p>';
        }
    }
});


