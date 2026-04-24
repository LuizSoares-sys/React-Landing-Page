interface ItemContatoProps {
    titulo: string;
    descricao: string;
    contato: string;
}

export default function ItemContato({ titulo, descricao, contato}: ItemContatoProps )
{
    return (
        <article className="card-contato">
            <h3>{titulo}</h3>
            <h2>{descricao}</h2>
            <h2>{contato}</h2>
        </article>
    )
} 
