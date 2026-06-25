let patients = [

{
    id: 1,
    name: "John Doe",mrn: "MRN001",refId: "100-001",abhaId: "ABHA-123-456",age: 45,gender: "Male",mobile: "+91 9876543210",email: "john.doe@email.com",address: "123 Maple St, NY",physician: "Dr. Smith",activeTab: "Complete",
    procedures: [
        {
            date: "2026-06-20",
            type: "Diagnostic Nasal Endoscopy",
            images: 12,
            videos: 2,
            status: "Complete"
        },
        {
            date: "2026-06-15",
            type: "Flexible Laryngoscopy",
            images: 8,
            videos: 1,
            status: "Complete"
        },
        {
            date: "2026-06-24",
            type: "Otology Examination",
            images: 0,
            videos: 0,
            status: "Pending"
        }
    ]
},
{
    id: 2,name: "Jane Smith",mrn: "MRN002",refId: "100-002",abhaId: "ABHA-789-012",age: 32,gender: "Female",mobile: "+1 555-0102",email: "jane.s@email.com",address: "456 Oak Ave, CA",physician: "Dr. Jones",activeTab: "Complete",
    procedures: [
        {
            date: "2026-06-18",
            type: "Diagnostic Nasal Endoscopy",
            images: 10,
            videos: 1,
            status: "Complete"
        },
        {
            date: "2026-06-22",
            type: "Flexible Laryngoscopy",
            images: 5,
            videos: 0,
            status: "Incomplete"
        }
    ]
},
{
    id: 3,name: "Michael Brown",mrn: "MRN003",refId: "100-003",abhaId: "ABHA-654-321",age: 57,gender: "Male",mobile: "+91 9123456780",email: "michael.brown@email.com",address: "78 Lake View Rd, TX",physician: "Dr. Wilson",activeTab: "Pending",
    procedures: [
        {
            date: "2026-06-25",
            type: "Otology Examination",
            images: 0,
            videos: 0,
            status: "Pending"
        },
        {
            date: "2026-06-23",
            type: "Diagnostic Nasal Endoscopy",
            images: 0,
            videos: 0,
            status: "Pending"
        },
        {
            date: "2026-06-21",
            type: "Flexible Laryngoscopy",
            images: 4,
            videos: 0,
            status: "Incomplete"
        }
    ]
}

];

function renderPatients() {
            const container = document.getElementById('patientList');
            container.innerHTML = patients.map(p => `
                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div class="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onclick="toggleDetails(${p.id})">
                        <div class="grid grid-cols-6 gap-4 w-full items-center text-sm">
                            <div class="font-mono font-bold text-slate-900">${p.mrn}</div>
                            <div><p class="font-semibold text-slate-900">${p.name}</p><p class="text-[10px] text-sky-600 font-bold tracking-wider">${p.refId}</p></div>
                            <div class="text-slate-600">${p.age} / ${p.gender.charAt(0)}</div>
                            <div class="text-slate-600">${p.mobile}</div>
                            <div class="text-slate-600 font-medium italic">${p.procedures[0]?.type || 'N/A'}</div>
                            <div class="flex justify-end">
                                <div class="slider-track w-32 h-10 rounded-full shadow-inner overflow-hidden cursor-pointer" onpointerdown="event.stopPropagation(); initSlide(event, ${p.id})">
                                    <div class="absolute inset-0 flex items-center justify-center gap-0.5 text-white font-black text-[9px] opacity-40 uppercase tracking-widest pointer-events-none">
                                        <span>>></span><span>>></span><span>>></span>
                                    </div>
                                    <div id="thumb-${p.id}" class="slider-thumb w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-none font-bold text-[9px] text-emerald-600">Start</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="details-${p.id}" class="hidden p-6 border-t border-slate-100 bg-slate-50/50">
                        <div class="flex justify-between items-center text-sm text-slate-600 mb-8 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm px-10">
                            <div class="flex items-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <span>${p.email}</span>
                            </div>
                            <div class="flex items-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                                <span>${p.abhaId}</span>
                            </div>
                            <div class="flex items-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                <span>${p.address}</span>
                            </div>
                            <div class="flex items-center gap-3 text-slate-700">
                                <svg class="w-5 h-5 text-sky-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                                <span>${p.physician}</span>
                            </div>
                        </div>
                        <div class="flex gap-3 mb-6">
                            ${['Complete', 'Pending', 'Incomplete', 'Bin'].map(status => {
                                const count = p.procedures.filter(pr => pr.status === status).length;
                                const isActive = p.activeTab === status;
                                const statusClass = isActive ? `clinical-glow-${status.toLowerCase()}` : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300';
                                
                                let badgeColorClass;
                                if (status === 'Complete') badgeColorClass = 'bg-emerald-100 text-emerald-700';
                                else if (status === 'Pending') badgeColorClass = 'bg-amber-100 text-amber-700';
                                else if (status === 'Incomplete') badgeColorClass = 'bg-orange-100 text-orange-700';
                                else badgeColorClass = 'bg-red-100 text-red-700';

                                return `<div onclick="setTab(${p.id}, '${status}')" class="px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-3 border cursor-pointer ${statusClass}">
                                    ${status} <span class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${badgeColorClass}">${count}</span>
                                </div>`;
                            }).join('')}
                        </div>
                        <table class="w-full text-sm">
                            <thead class="text-[10px] text-slate-400 uppercase border-b border-slate-200">
                                <tr><th class="pb-3 text-left">Date & Time</th><th class="pb-3 text-left">Procedure</th><th class="pb-3 text-left">Gallery</th><th class="pb-3 text-center">Report</th><th class="pb-3 text-center">Edit</th><th class="pb-3 text-center">Delete</th><th class="pb-3 text-center">Download</th></tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${p.procedures.filter(proc => proc.status === p.activeTab).map(proc => `
                                    <tr>
                                        <td class="py-4 text-slate-900 font-medium">${proc.date}</td>
                                        <td>${proc.type}</td>
                                        <td class="flex gap-3 py-4">
                                            <span class="flex items-center gap-1 font-bold text-xs"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 15-3-3-5 5"/></svg>${proc.images}</span>
                                            <span class="flex items-center gap-1 font-bold text-xs"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m23 7-7 5 7 5V7Z"/><rect width="15" height="14" x="1" y="5" rx="2"/></svg>${proc.videos}</span>
                                        </td>
                                        <td class="text-center"><button class="text-sky-600"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></button></td>
                                        <td class="text-center"><button class="text-slate-600"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button></td>
                                        <td class="text-center"><button class="text-red-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></td>
                                        <td class="text-center"><button class="text-emerald-600"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg></button></td>
                                    </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `).join('');
        }

        function initSlide(e, id) {
    e.preventDefault();
    e.stopPropagation();

    const track = e.currentTarget;
    const thumb = document.getElementById(`thumb-${id}`);

    const trackRect = track.getBoundingClientRect();
    const thumbWidth = thumb.offsetWidth;
    const max = track.offsetWidth - thumbWidth - 8;

    let currentX = 0;

    thumb.style.transition = "none";

    function onPointerMove(ev) {
        currentX = ev.clientX - trackRect.left - thumbWidth / 2;

        if (currentX < 0) currentX = 0;
        if (currentX > max) currentX = max;

        thumb.style.transform = `translateX(${currentX}px)`;
    }

    function onPointerUp() {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);

        if (currentX > max * 0.8) {
            thumb.style.transform = `translateX(${max}px)`;

            setTimeout(() => {
                openLiveProcedure();

                thumb.style.transition = "transform 0.3s ease";
                thumb.style.transform = "translateX(0)";
            }, 150);
        } else {
            thumb.style.transition = "transform 0.3s ease";
            thumb.style.transform = "translateX(0)";
        }
    }

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
}

        function setTab(pid, tab) { const p = patients.find(x => x.id === pid); p.activeTab = tab; renderPatients(); document.getElementById(`details-${pid}`).classList.remove('hidden'); }

        function toggleDetails(id) { document.getElementById(`details-${id}`).classList.toggle('hidden'); }
