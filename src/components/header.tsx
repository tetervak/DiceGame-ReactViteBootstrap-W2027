type HeaderProps = {
    title: string;
}

export function Header({ title }: HeaderProps) {
    return (
        <header className="container d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <h1>{title}</h1>
        </header>
    )
}