import './style.css'

type CardProps = {
    Nome: string,
    Imagem: string,
    Idade: number,
    Descricao:string
}

const Card = ({Nome, Imagem, Idade, Descricao}: CardProps) =>{
    return(

        <div className='card'>
            <h1>{Nome}</h1>
            <img src={Imagem}/>
            <h3>{Descricao}</h3>
            <h4>Idade do ator: {Idade}</h4>
            
        </div>
    
    )

}
export default Card