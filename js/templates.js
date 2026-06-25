const templateLibrary = {

"DNE": `
PATIENT INFORMATION
────────────────────────────────────

Patient Name :
Age / Gender :
MRN :
Referring Doctor :

PROCEDURE DETAILS
────────────────────────────────────

Procedure :
Diagnostic Nasal Endoscopy

Date :
Indication :
Anaesthesia :

FINDINGS
────────────────────────────────────

Nasal Septum :

Inferior Turbinates :

Middle Meatus :

Osteomeatal Complex :

Nasopharynx :

IMPRESSION
────────────────────────────────────

____________________________________

RECOMMENDATIONS
────────────────────────────────────

____________________________________

Consultant Signature :
`,

"Otology": `
PATIENT INFORMATION
────────────────────────────────────

Patient Name :
Age / Gender :
MRN :
Referring Doctor :

PROCEDURE DETAILS
────────────────────────────────────

Procedure :
Otology Examination

Date :
Side Examined :

FINDINGS
────────────────────────────────────

External Auditory Canal :

Tympanic Membrane :

Middle Ear :

Mastoid Region :

IMPRESSION
────────────────────────────────────

____________________________________

RECOMMENDATIONS
────────────────────────────────────

____________________________________

Consultant Signature :
`,

"Laryngoscopy": `
PATIENT INFORMATION
────────────────────────────────────

Patient Name :
Age / Gender :
MRN :
Referring Doctor :

PROCEDURE DETAILS
────────────────────────────────────

Procedure :
Flexible Laryngoscopy

Date :
Indication :
Anaesthesia :

FINDINGS
────────────────────────────────────

Nasal Passage :

Nasopharynx :

Oropharynx :

Hypopharynx :

Vocal Cords :

Laryngeal Structures :

IMPRESSION
────────────────────────────────────

____________________________________

RECOMMENDATIONS
────────────────────────────────────

____________________________________

Consultant Signature :
`

};

function openFullScreenTemplate(type) {

    const titleEl = document.getElementById('fsTemplateTitle');
    const contentEl = document.getElementById('fsTemplateContent');
    const modalEl = document.getElementById('fullScreenTemplate');

    if (!titleEl || !contentEl || !modalEl) {
        console.error("Fullscreen template elements missing in HTML");
        return;
    }

    titleEl.textContent = type;
    contentEl.textContent = templateLibrary[type] || "No content available.";

    modalEl.classList.remove('hidden');
}

function closeFullScreenTemplate() {

    document.getElementById('fullScreenTemplate')
        .classList.add('hidden');

}
