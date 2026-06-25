function toggleProfileMenu() {
    document.getElementById('profileMenu').classList.toggle('hidden');
}

function signout() {
    toggleProfileMenu();
    document.getElementById('login-screen').classList.remove('hidden');
}

setInterval(() => {
    document.getElementById('live-time').innerText =
        new Date().toLocaleString();
}, 1000);

function switchTab(tab) {

    document.querySelectorAll('[id^="content-"]').forEach(el => {
        el.classList.add('hidden');
    });

    document.getElementById(`content-${tab}`)
        .classList.remove('hidden');

}

function toggleModal(show) {
    document.getElementById('regModal')
        .classList.toggle('hidden', !show);
}

function checkClose() {
    document.getElementById('confirmModal')
        .classList.remove('hidden');
}

function closeConfirm(discard) {
    document.getElementById('confirmModal')
        .classList.add('hidden');

    if (discard) {
        toggleModal(false);
        document.getElementById('regForm').reset();
    }
}

document.getElementById('regForm').onsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newPatient = {
        id: Date.now(),
        mrn: formData.get('mrn'),
        name: formData.get('name'),
        refId: formData.get('refId'),
        abhaId: formData.get('abhaId'),
        age: formData.get('age'),
        gender: formData.get('gender'),
        mobile: `${formData.get('mobilePrefix')} ${formData.get('mobile')}`,
        email: formData.get('email'),
        address: formData.get('address'),
        physician: formData.get('physician'),
        activeTab: 'Complete',
        procedures: []
    };

    patients.push(newPatient);
    renderPatients();

    e.target.reset();
    toggleModal(false);
};

renderPatients();

function openLiveProcedure() {
        startProcedureTimer();
    document.getElementById('content-Dashboard').classList.add('hidden');
    document.getElementById('content-Templates').classList.add('hidden');
    document.getElementById('content-Medicines').classList.add('hidden');

    document.getElementById('content-LiveProcedure').classList.remove('hidden');

    document.getElementById('sidebar').classList.add('hidden');
}

function backToDashboard() {
    document.getElementById('leaveProcedureModal').classList.remove('hidden');
}

function confirmLeaveProcedure() {

    document.getElementById('content-LiveProcedure').classList.add('hidden');

    document.getElementById('content-Dashboard').classList.remove('hidden');

    document.getElementById('sidebar').classList.remove('hidden');

    document.getElementById('leaveProcedureModal').classList.add('hidden');
}

function cancelLeaveProcedure() {
    document.getElementById('leaveProcedureModal').classList.add('hidden');
}

function openAnnotate() {
    document.getElementById("content-LiveProcedure").classList.add("hidden");
    document.getElementById("content-Annotate").classList.remove("hidden");
}

function backToLiveProcedure() {
    document.getElementById("content-Annotate").classList.add("hidden");
    document.getElementById("content-LiveProcedure").classList.remove("hidden");
}

function returnHome() {
    document.getElementById("content-Annotate").classList.add("hidden");
    document.getElementById("content-Dashboard").classList.remove("hidden");
    document.querySelector("nav").classList.remove("hidden");
}

function confirmBackToLiveProcedure() {
    document.getElementById("returnProcedureModal")
        .classList.remove("hidden");
}

function closeReturnProcedureModal() {
    document.getElementById("returnProcedureModal")
        .classList.add("hidden");
}

function confirmReturnProcedureModal() {

    closeReturnProcedureModal();

    backToLiveProcedure();
}

function confirmReturnHome() {

    const confirmed = confirm(
        "Exit Annotation Mode?\n\nAre you sure you want to exit to the Patient Dashboard?"
    );

    if (confirmed) {
        returnHome();
    }

}

function updateAnnotationActionButton() {

    const procedure =
        document.getElementById("ProcedureType").value;

    const text =
        document.getElementById("annotationActionText");

    const button =
        document.getElementById("annotationActionBtn");

    if (procedure) {

        text.textContent = "Finish";

        button.innerHTML = `
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"/>
            </svg>
            <span id="annotationActionText" class="text-xs font-medium">
                Finish
            </span>
        `;

    } else {

        button.innerHTML = `
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 10L12 3l9 7"/>
                <path d="M5 10v10h14V10"/>
            </svg>
            <span id="annotationActionText" class="text-xs font-medium">
                Back To Home
            </span>
        `;
    }
}

function handleAnnotationAction() {

    const procedure =
        document.getElementById("ProcedureType").value;

    if (procedure) {

        // Open generated report screen
        openReport();

    } else {

        confirmReturnHome();

    }
}

function openReport() {
    document.getElementById("content-Annotate").classList.add("hidden");
    document.getElementById("content-Report").classList.remove("hidden");
}

function backToAnnotate() {
    document.getElementById("content-Report").classList.add("hidden");
    document.getElementById("content-Annotate").classList.remove("hidden");
}

function saveAndFinalize() {

    document.getElementById("finalizeReportModal")
        .classList.remove("hidden");

}

function closeFinalizeModal() {

    document.getElementById("finalizeReportModal")
        .classList.add("hidden");

}

function confirmFinalizeReport() {

    closeFinalizeModal();

    document.getElementById("sidebar").classList.remove("hidden");

    document.getElementById("content-Report").classList.add("hidden");
    document.getElementById("content-Annotate").classList.add("hidden");
    document.getElementById("content-LiveProcedure").classList.add("hidden");

    document.getElementById("content-Dashboard").classList.remove("hidden");

    stopProcedureTimer();

}

function showContent(section) {

    document.querySelectorAll('[id^="content-"]').forEach(content => {
        content.classList.add('hidden');
    });

    const selectedContent =
        document.getElementById(`content-${section}`);

    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
}


let procedureSeconds = 0;
let procedureTimerInterval = null;

function startProcedureTimer() {

    procedureSeconds = 0;

    procedureTimerInterval = setInterval(() => {

        procedureSeconds++;

        const hrs = String(Math.floor(procedureSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((procedureSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(procedureSeconds % 60).padStart(2, '0');

        document.getElementById('procedureTimer').textContent =
            `${hrs}:${mins}:${secs}`;

    }, 1000);

}

function stopProcedureTimer() {

    clearInterval(procedureTimerInterval);

}
