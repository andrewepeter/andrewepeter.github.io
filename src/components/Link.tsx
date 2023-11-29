interface Props{
    linkString: string;
    children:string;
}

const Link = ({linkString, children}: Props) => {
    return (
        <p>
            <a href={linkString} target="_blank" rel="noopener noreferrer">
            {children}
            </a>
        </p>
    )
}

export default Link