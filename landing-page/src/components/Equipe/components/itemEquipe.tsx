interface ItemEquipeProps {
    nome: string;
    cargo: string;
    descricao: string;
    cor: string;
    sigla: string;
}

function ItemEquipe({ sigla, nome, cargo, descricao, cor }: ItemEquipeProps) 
{
    return (
        <article className="card-equipe">
            <div className={`avatar-equipe ${cor}`}>{sigla}</div>
            <h3>{nome}</h3>
            <p>{cargo}</p>
            <p>{descricao}</p>
        </article>
    )
}

export default ItemEquipe;