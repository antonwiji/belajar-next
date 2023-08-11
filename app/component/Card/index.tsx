interface Person {
    name: string,
    email: string,
    phone: number
}

const Card = ({name, email, phone }: Person) => {
    return(
    <>
        <li>
            Name: {name}
        </li>
        <li>
            Email: {email}
        </li>
        <li>
            phone: {phone}
        </li>
        <br />
    </>
    )
}

export default Card