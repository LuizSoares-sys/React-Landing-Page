interface ItemEquipeProps {
    foto: string;
    nome: string;
    cargo: string;
    descricao: string;
}

export default function ItemEquipe({ nome, cargo, descricao, foto }: ItemEquipeProps) 
{
    return (
        <article className="card-equipe">
            <img src={foto} alt={nome} className="icon-equipe" />
            <h3>{nome}</h3>
            <p>{cargo}</p>
            <p>{descricao}</p>
        </article>
    )   
}