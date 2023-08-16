import chalk from 'chalk';
console.log(chalk.blue('Média Aritmética'));

const calculaMedia=(n1,n2,n3,n4)=>{
    const media = (n1+n2+n3+n4)/4
    if(media<5){
        return chalk.red(media)
    }
    else if(media>7){
        return chalk.green(media)
    }else{
        return chalk.yellow(media)
    }
   
}
const a=6
const b=3
const c=2
const d=2
console.log(calculaMedia(a,b,c,d))