
export function ItemContactForm(props) {
    return (
        <li>
           <li key={props.contact.id}>
                    <p>{props.contact.name}</p>
                    <p>{props.contact.number}</p>
                    <button onClick={props.handleDelete}>Delete</button>
                </li>
        </li>
    );
}
