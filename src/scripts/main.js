document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            hideAllTabs();
            tab.classList.add('ticketDate--is-active')
            removeActiveButton()
            button.target.classList.add('tabButton--is-active')
        })
    }
})

function removeActiveButton() {
    const button = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('tabButton--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id')
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('ticketDate--is-active')
    }
}