interface SolucaoPilarProps {

    icon: string;
    titulo: string;
    descricao: string;
}
export default function solucaoPilar ({icon, titulo, descricao}: SolucaoPilarProps){
    return(
       <article className="card-solucao">
            <div className="icon-solucao">{icon}</div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </article>
    )
}
