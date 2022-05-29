class DisplayFile{
    constructor(file){
        this.file=file
    }

addFile(){
    a++
    const tbody=document.getElementById('tbody');
    const data=document.createElement('tr');
    const filedata=<th scope="row">${a}</th>
                   <td> ${this.file.HouseDocumentRecord} </td>
                   <td> ${this.file.CollegeDocumentRecord} </td>   
                   <td> ${this.file.JobDocumentRecord} </td>
                    <td> <button class='btn btn-danger' onclik={deletes(this)}> Delete </button> </td>

localStorage.setItem('file',filedata)
data.innerHTML=localStorage.getItem('file')
tbody.append(data)
  }
}
const GoogleFileKeep=document.getElementById('GoogleFileKeep');
GoogleFileKeep.addEventlistener('submit',GoogleFileKeep);

function GoogleFileKeepsubmit=(e){
    e.preventDfault();
    console.log('submitted');
    const foldername=document.getElementById('foldername').value;
    const filename=document.getElementById('filename').value;
    const housedocumentrecord=document.getElementById('housedocumentrecord');
    const collegedocumentrecord=document.getElementById('collegedocumentrecord');
    const jobdocumentrecord=document.getElementById('jobdocumentrecord');
    const alerts=document.getElementById('alerts');
}


console.log(bookname,value,author,cooking);

libraryform.addEventlistener('Submit'library form submit);
}