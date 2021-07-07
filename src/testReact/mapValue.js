import React from 'react'

const MapValue = () =>{
    var user = [
        {name: "chon",job:true},
        {name:"weerachon"},
        {name:"Yaiin"}
    ]
   const is_enabled = false;
    // reduce
    // การบวกจำนวนใน Array
    const numbers = [10,20,30,40];
    const result = numbers.reduce((sum,number)=> {
        return sum + number
    },0);

    return (<div>
        <ul>
            {user.map(function (i) {return<li>{i.name}</li>})}
        
        {is_enabled? user .filter(users => users.job)
            .map((users) => <li>{users.name}</li>):<p>user is null</p>}
        </ul>
        {result}
        </div>
    );
}
export default MapValue ;