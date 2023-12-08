import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
            <Link href="/apps" className="rounded-button" passHref>
            Uygulamalar
            </Link>
            </div>
            <div className="section-button">
            <Link href="/courses" className="rounded-button" passHref>
            Kurslar
            </Link>
            </div>
            <div className="section-button">
            <Link href="/books" className="rounded-button" passHref>
            Kitaplar
            </Link>
            </div>
            <div className="section-button">
            <Link href="/models" className="rounded-button" passHref>
            Modeller
            </Link>
            </div>
            <div className="section-button">
            <Link href="/nft" className="rounded-button" passHref>
            NFT'ler
            </Link>
            </div>
        </div>
    )
}

export default Sections;