'use strict';
        
// --- Mobile Menu ---
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
if(mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const i = mobileBtn.querySelector('i');
        i.classList.toggle('fa-bars');
        i.classList.toggle('fa-xmark');
    });
}

// --- Calendar Logic ---
const date = new Date();
let selectedDate = null;

function renderCalendar() {
    const monthYear = document.getElementById('currentMonthDisplay');
    const daysContainer = document.getElementById('calendarDays');
    if(!daysContainer) return;
    
    date.setDate(1);
    const firstDayIndex = date.getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const today = new Date();
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYear.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;
    
    let days = "";

    // Previous Month Fillers
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="cal-date disabled">${prevLastDay - x + 1}</div>`;
    }

    // Current Month
    for (let i = 1; i <= lastDay; i++) {
        const checkDate = new Date(date.getFullYear(), date.getMonth(), i);
        const isPast = checkDate.setHours(0,0,0,0) < today.setHours(0,0,0,0);
        
        let className = "cal-date";
        if(isPast) className += " disabled";
        if(selectedDate && selectedDate.toDateString() === checkDate.toDateString()) className += " selected";
        
        if(!isPast) {
            days += `<div class="${className}" onclick="selectDate(${i}, ${date.getMonth()}, ${date.getFullYear()})">${i}</div>`;
        } else {
            days += `<div class="${className}">${i}</div>`;
        }
    }
    daysContainer.innerHTML = days;
}

document.getElementById('prevMonth').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

window.selectDate = function(day, month, year) {
    selectedDate = new Date(year, month, day);
    renderCalendar(); // refresh for highlighting
    // Show Slots
    document.getElementById('calendar-view').classList.add('hidden');
    document.getElementById('time-view').classList.remove('hidden');
    renderSlots();
}

function renderSlots() {
    const container = document.getElementById('timeSlots');
    container.innerHTML = '';
    const times = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"];
    times.forEach(t => {
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline';
        btn.style.width = '100%';
        btn.style.fontSize = '0.85rem';
        btn.innerText = t;
        btn.onclick = () => {
            document.getElementById('time-view').classList.add('hidden');
            document.getElementById('form-view').classList.remove('hidden');
        };
        container.appendChild(btn);
    });
}

document.getElementById('backToCal').addEventListener('click', () => {
    document.getElementById('time-view').classList.add('hidden');
    document.getElementById('calendar-view').classList.remove('hidden');
});

document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('form-view').classList.add('hidden');
    document.getElementById('success-view').classList.remove('hidden');
});

renderCalendar();
