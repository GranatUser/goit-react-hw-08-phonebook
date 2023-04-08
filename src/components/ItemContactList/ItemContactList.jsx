
export function ItemContactForm(props) {
    return (
        <li>
           <li key={props.contact.id}>
                    <p>Name: {props.contact.name}</p>
                    <p>Number:{props.contact.number}</p>
                    <button onClick={props.handleDelete} >Delete</button>
                </li>
        </li>
    );
}
