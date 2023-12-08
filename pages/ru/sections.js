import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
            <Link href="/apps" className="rounded-button" passHref>
                Aplicaciones
            </Link>
            </div>
            <div className="section-button">
            <Link href="/courses" className="rounded-button" passHref>
                Cursos
            </Link>
            </div>
            <div className="section-button">
            <Link href="/books" className="rounded-button" passHref>
                Libros
            </Link>
            </div>
            <div className="section-button">
            <Link href="/models" className="rounded-button" passHref>
                Modelos
            </Link>
            </div>
            <div className="section-button">
            <Link href="/nft" className="rounded-button" passHref>
                NFTs
            </Link>
            </div>
        </div>
    )
}

export default Sections;