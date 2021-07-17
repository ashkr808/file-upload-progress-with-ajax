const form = document.querySelector('#fileForm')
const progressBar = document.querySelector(".progress-bar")

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const xhr = new XMLHttpRequest;

    xhr.open('POST','/upload-file')

    xhr.setRequestHeader('Enctype','multipart/form-data')

    xhr.upload.addEventListener('progress',(e)=>{
        let uploaedPercentage = Math.round( (e.loaded/e.total)*100 )
        progressBar.style.width = `${uploaedPercentage}%`
        progressBar.innerHTML = `${uploaedPercentage}%`
    })
    
    xhr.onload = (e)=>{
        alert("File Uploaded !")
    }

    xhr.send(new FormData(form))

})