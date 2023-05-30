import Link from 'next/link';

const Sections = () => {
    return (
        <div className="sections">
            <div className="section-button">
            <Link href="/apps" className="rounded-button" passHref>
                Apps
            </Link>
            </div>
            <div className="section-button">
            <Link href="/courses" className="rounded-button" passHref>
                Courses
            </Link>
            </div>
            <div className="section-button">
            <Link href="/books" className="rounded-button" passHref>
                Books
            </Link>
            </div>
            <div className="section-button">
            <Link href="/models" className="rounded-button" passHref>
                Models
            </Link>
            </div>
            <div className="section-button">
            <Link href="/nft" className="rounded-button" passHref>
                NFT
            </Link>
            </div>
        </div>
    )
}

export default Sections;