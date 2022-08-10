

var images;


images = ['https://media.istockphoto.com/photos/closeup-focus-on-persons-hands-typing-on-the-desktop-computer-show-picture-id1356364268?s=612x612', 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', 'https://media.istockphoto.com/photos/paul-revere-park-in-boston-at-night-is-easy-on-the-eye-picture-id1170584058?k=20&m=1170584058&s=612x612&w=0&h=kCndnVl6tPecMsQK_8Fe0cEaGnI71wbQPo0aqZ2ty50='];
let element_img = document.getElementById('img');
element_img.setAttribute("src", images[0]);


document.getElementById('nextbtn').addEventListener('click', (event) => {
  images.push(images.shift());
  let element_img2 = document.getElementById('img');
  element_img2.setAttribute("src", images[0]);

});

document.getElementById('prevbtn').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  images.unshift(images.pop());
  element_img3.setAttribute("src", images[0]);

});


function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_li);

});

document.getElementById('remove').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  element_list2.innerText = '';

});
getNumberOrString(document.getElementById('text').value);
