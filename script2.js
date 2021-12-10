const data =[
    {id:1,nome: 'Juliana'},
    {id:3,nome: 'Kaneki Ken'},
    {id:4,nome: 'Gin e Hotaru'},
    {id:2,nome: 'Touka Chan'}
];

// Além de apresentar o array, ordenada-o, alterando o algoritmo e a forma defimida d apresentação
// const novasData = {};
// for(const key of data){
//     const{id} = key;
//     novasData[id] = {...key};
//     console.log(novasData);
// };



// Resolve o problema
const novaData = new Map();
for(const key of data){
    const {id} = key;
    novaData.set(id, {...key});
}

const removido = novaData.delete(3);
console.log(novaData);
console.log(novaData.get(1));