// Checks to see if darkmode is in LS for persistence 
function checkLocalStorageDM() {
    if (window.localStorage.getItem('darkmode')) {
        darkModeTest()
    } else {
        return
    }
}
//Switches to darkmode
function darkModeTest() {
    // Toggles the CSS class
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        // If darkmode put object in LS
        window.localStorage.setItem('darkmode', true)
        console.log('[!] Dark Mode Enabled')
    } else {
        console.log('[!] Light Mode Enabled')
        window.localStorage.removeItem('darkmode')
    }
}
// Runs the check on page load 
checkLocalStorageDM()

document.getElementById("darkmode-button").addEventListener("click", darkModeTest);