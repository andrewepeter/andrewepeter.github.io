import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string)  => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    //hook
    const [selectedIndex, setSelectedInex] = useState(-1); 

    return (
        <>
            <h1>{heading}</h1>
            {items.length == 0 ? <p>NoItemFound</p> : null}
            {items.length == 0 && <p>NoItemFound</p>}
            <ul className="list-group">
                {items.map((item, index) => (<li className={selectedIndex === index ? "list-group-item active" : "list-group-iem"} key={item} onClick={() => { setSelectedInex(index); onSelectItem(item) }}>{item}</li>))}          
            </ul>
        </>
    );
}

export default ListGroup;