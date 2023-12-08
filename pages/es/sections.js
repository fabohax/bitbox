import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
                <Link href="/apps" className="rounded-button" passHref>
                    aplicaciones
                </Link>
            </div>
            <div className="section-button">
                <Link href="/imgs" className="rounded-button" passHref>
                    imágenes
                </Link>
            </div>
            <div className="section-button">
                <Link href="/models" className="rounded-button" passHref>
                    modelos
                </Link>
            </div>
        </div>
    )
}

export default Sections;