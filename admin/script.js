function displayUploadedImg(input) {
    console.log(input.parentElement)
    if(input.files[0] && input.files[0]) {
        const reader = new FileReader()
        reader.onload = function(e) {
            const target = input.parentElement
            target.setAttribute("class","uploaded-img")
            const img = document.createElement("img")
            img.src = e.target.result
            target.append(img)
        }
        reader.readAsDataURL(input.files[0])
    }
}
 