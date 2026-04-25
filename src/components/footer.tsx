type FooterProps = {
    name?: string;
};

export function Footer({name}: FooterProps) {
    return (
        <footer className="container d-flex flex-column flex-wrap align-items-center py-3 mt-4 border-top">
            <div>PROG27545 / Web Application Design and Implementation</div>
            <div>Sheridan College, {name ?? 'Ontario'}</div>
        </footer>
    );
}