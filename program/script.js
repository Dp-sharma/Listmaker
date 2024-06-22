// Edit title
const title = document.getElementById('title')
title.addEventListener('click',function(){
    let new_tittle = prompt('Enter your list name')
    title.textContent = new_tittle;
})
const value = document.querySelector('#list_input');

//Function for Creating new list-item 
function new_li() {
    const my_list = document.querySelector('#my_list');
    const new_item = document.createElement('li');
    const Edit_btn = document.createElement('button');
    const Delete_btn = document.createElement('button');

    // console.log(value);
    let item_name = value.value;
    console.log(item_name)
    if (item_name === '') {
        alert('Please Enter a valid Name!!')
    } 
    else{
        new_item.textContent = item_name;
        Edit_btn.innerHTML = 'Edit';
        Delete_btn.innerHTML = 'Delete';
        Delete_btn.classList.add = 'delete-btn';
        my_list.append(new_item);
        new_item.append(Edit_btn);
        new_item.append(Delete_btn);
        value.value = '';
        value.focus();
           
        const showlistDiv = document.querySelector('.showlist');
        showlistDiv.scrollTop = showlistDiv.scrollHeight;

        // Add event listener to the new delete button
        Delete_btn.addEventListener('click', function() {
            let confirm_del = confirm('Do you really want to delete this item')
            if (confirm_del === true) {
                new_item.remove();
            } else {
                console.log('undo Delete')
            }
        });
        Edit_btn.addEventListener('click',function(){
            let name = new_item.textContent ;
            let new_name = name.replace("EditDelete", "")
            
            console.log(new_name)
            value.value = new_name;
            value.focus();
            new_item.remove();
        })
    }
}


value.addEventListener('keydown',function(event){
    if (event.key === 'Enter'){
        new_li()
        console.log('Enter key pressed');
    }
});


// Image Download code
function screenshot(){
    html2canvas(document.getElementById("my_list")).then(function(canvas){
       downloadImage(canvas.toDataURL(),"Mylist.png");
    });
}

function downloadImage(uri, filename){
  var link = document.createElement('a');
  if(typeof link.download !== 'string'){
     window.open(uri);
  }
  else{
      link.href = uri;
      link.download = filename;
      accountForFirefox(clickLink, link);
  }
}

function clickLink(link){
    link.click();
}

function accountForFirefox(click){
    var link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
}


// pdf Download code
function pdf_converter(){
    const pdf = document.getElementById('my_list')
    var opt = {
        margin: 1,
        filename: 'list.pdf',
        image: { type: 'jpeg', quality: 0.98},
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }

    }
    html2pdf().from(pdf).set(opt).save();
}
