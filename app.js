// get element

import Alert from "./image/alert.js";
import storage from "./image/storage.js";

const add_new_staff =document.getElementById('add_new_staff');
const staff_data_list =document.getElementById('staff_data_list');

add_new_staff.addEventListener('submit', function(e){
    e.preventDefault();

    const msg = document.querySelector('.msg');



    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries());

    let { name, cell, skill, location, } = data;

    if( name == '' || cell == '' || skill == '' || location == '' ){
        

        msg.innerHTML = Alert.danger('All field are Requied');

    }else{
        

        storage.set('staff', data );
        add_new_staff.reset();
        getAllStaff();

    }

    
});

getAllStaff()
function getAllStaff(){
    let data = storage.get('staff')
    
    let list = '';
    data.map((data, index) => {

        let { name, cell, skill, location, photo } = data;


        list    += `
            <td>${ index + 1}</td>
            <td>${ name }</td>                               
            <td>${ cell }</td>                               
            <td>${ skill }</td>                               
            <td>${ location }</td>                               
            <td> <img style="width:50px; height:50px; object-fit:cover;" src ="${ photo ? photo :'avater.png' }"> </td>                               
            <td>
                <button class="bnt btn-info btn-sm"><i class="fas fa-eye"></i></button>
                <button class="bnt btn-primary btn-sm"><i class="fas fa-edit"></i></button>
                <button class="bnt btn-danger btn-sm"><i class="fas fa-trash"></i></button>
            </td> `;
    });


    staff_data_list.innerHTML = list;


}






