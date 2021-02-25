const inputs = document.querySelectorAll('.controls input') // getting all controls as nodeList to iterate later
function handleUpdate() {
    const suffix = this.dataset.sizing || '' // getting the suffix in data object from each control or none in case that doesn't exists
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)) // check if any mouse move happens to any control
inputs.forEach(input => input.addEventListener('change', handleUpdate)) // check if any change happens to any control
