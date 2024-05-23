import { FunctionComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const CalendarCTA: FunctionComponent = () => {
    let interval: number | undefined;

    function handleRedirect() {
        const scheduleButton = document.getElementById('scheduleButton') as HTMLButtonElement;
        const cancelButton = document.getElementById('cancelButton') as HTMLButtonElement;
        const countdownElement = document.getElementById('countdown') as HTMLElement;
        let timeLeft: number = 5;

        if (scheduleButton && cancelButton && countdownElement) {
            scheduleButton.classList.add('disabled');
            scheduleButton.classList.remove('text-blue-500');
            scheduleButton.classList.add('text-gray-500');
            cancelButton.style.display = 'inline';

            countdownElement.innerHTML = `Redirecting in ${timeLeft} seconds...`;
            countdownElement.setAttribute("aria-live", "assertive");

            interval = window.setInterval(() => {
                timeLeft--;
                countdownElement.innerHTML = `Redirecting in ${timeLeft} seconds...`;
                if (timeLeft <= 0 && interval !== undefined) {
                    window.clearInterval(interval);
                    window.location.href = "https://outlook.office365.com/book/OfficeHours@imperfectandcompany.com/";
                }
            }, 1000);
        }
    }

    function cancelRedirect() {
        if (interval !== undefined) {
            window.clearInterval(interval);
        }

        const scheduleButton = document.getElementById('scheduleButton') as HTMLButtonElement;
        const cancelButton = document.getElementById('cancelButton') as HTMLButtonElement;
        const countdownElement = document.getElementById('countdown') as HTMLElement;

        if (scheduleButton && cancelButton && countdownElement) {
            scheduleButton.classList.remove('disabled');
            scheduleButton.classList.add('text-blue-500');
            scheduleButton.classList.remove('text-gray-500');
            cancelButton.style.display = 'none';
            countdownElement.innerHTML = '';
            countdownElement.removeAttribute("aria-live");
        }
    }

    return (
        <section class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Office Hours Calendar</h2>
            <p>Join us to learn more about Postogon and explore how you can enhance your social media experience.</p>
            <div class="tooltip">
                <button id="scheduleButton" onClick={handleRedirect} class="text-blue-500 hover:text-blue-700 hover-grow" aria-label="Schedule your appointment with Postogon">Schedule your appointment here</button>
                <span class="tooltiptext">External link delay for safety. Cancel within 5 seconds.</span>
            </div>
            <button id="cancelButton" onClick={cancelRedirect} class="text-red-500 hover:text-red-700 hover-grow ml-4" style={{display: 'none'}} aria-label="Cancel the redirect">Cancel</button>
            <div id="countdown" class="countdown" role="alert"></div>
        </section>
    );
};

export default CalendarCTA;
