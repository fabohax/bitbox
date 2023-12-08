import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
            <Link href="/apps" className="rounded-button" passHref>
                Aplicacöes
            </Link>
            </div>
            <div className="section-button">
            <Link href="/imgs" className="rounded-button" passHref>
                Images
            </Link>
            </div>
            <div className="section-button">
            <Link href="/models" className="rounded-button" passHref>
                Modelos
            </Link>
            </div>
        </div>
    )
}

export default Sections;