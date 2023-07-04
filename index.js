console.log('person1:shows Ticket')
console.log('person2:shows Ticket')
const premovie=async()=>{
    const promiseWifeGettingTicket=new Promise ((resolve,reject)=>{
        setTimeout(()=>
        resolve('ticket'),3000)
    })
    const getPopcorn=new Promise((resolve,reject)=>
        resolve('popcorn')
    )
    const addButter=new Promise((resolve,reject)=>
      resolve('butter')
    )
    const getColdDrinks=new Promise((resolve,reject)=>
        resolve('colddrinks')
    )
    let ticket =await promiseWifeGettingTicket;
    let [popcorn ,butter,coldDrinks]=await Promise.all([getPopcorn,addButter,getColdDrinks]);
    console.log(`${popcorn},${butter},${coldDrinks}`)
    return ticket;
}
premovie().then((m)=>console.log(`person3:shows Ticket`))

console.log('person4:shows Ticket')
console.log('person5:shows Ticket')