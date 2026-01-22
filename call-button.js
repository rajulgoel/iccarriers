// Call button
const callBtn = document.createElement('a');
callBtn.href = 'tel:+19054581200';
callBtn.innerHTML = '<i class="fas fa-phone"></i>';
callBtn.setAttribute('aria-label', 'Call Indo Canadian Carriers: 905-458-1200');
callBtn.setAttribute('title', 'Call 905-458-1200');
callBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 24px;
    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
    z-index: 9999;
    transition: all 0.3s ease;
    text-decoration: none;
`;

document.body.appendChild(callBtn);
