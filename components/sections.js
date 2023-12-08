import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
            <Link href="/apps" className="rounded-button" passHref>
                apps
            </Link>
            </div>
            <div className="section-button">
            <Link href="/images" className="rounded-button" passHref>
                images
            </Link>
            </div>
            <div className="section-button">
            <Link href="/models" className="rounded-button" passHref>
                models
            </Link>
            </div>
        </div>
    )
}

export default Sections;