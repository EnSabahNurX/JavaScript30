const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

let lastChecked

function handleCheck(e) {
    let inBetweenFlag = false
    // check if they had the shift key down
    // AND check that they are checking it
    if (e.shiftKey && e.target.checked) {
        // go ahead and do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetweenFlag = !inBetweenFlag
            }
            if (inBetweenFlag && lastChecked) {
                checkbox.checked = true
            }
        })
    }
    lastChecked = this
}