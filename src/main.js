var activeTab = null;
var activeContent = null;

window.onload = function() {
    start();
}

function start() {
    // Set the first tab as active on page load
    const firstTabButton = document.getElementById("1");
    switchTab(firstTabButton);
}

function switchTab(clickedTab) {
    // Check if the clicked tab is already active (no need to do anything)
    if (clickedTab === activeTab) {
        return;
    }

    // Deactivate the previously active tab and content
    if (activeTab) {
        activeTab.classList.remove("tab-button--active");
    }
    if (activeContent) {
        activeContent.classList.remove("tab-content--active");
    }

    // Activate the clicked tab and its corresponding content
    clickedTab.classList.add("tab-button--active");
    activeTab = clickedTab;

    const contentId = "content" + activeTab.id;
    activeContent = document.getElementById(contentId);
    activeContent.classList.add("tab-content--active");
}