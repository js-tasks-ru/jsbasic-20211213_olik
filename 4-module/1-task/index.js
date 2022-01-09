 function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    document.body.append(ul); 
    
    for(let friend of friends) {
       let li = document.createElement('li');
       let str = friend.firstName + " " + friend.lastName;
       li.innerHTML = str;
       ul.append(li);
    }
   return ul; 
}
