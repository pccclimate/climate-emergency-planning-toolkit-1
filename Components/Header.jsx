import Nav1 from '../assets/navigation-01.svg'
import Nav2 from '../assets/navigation-02.svg'
import SVG from 'react-inlinesvg'
import Link from 'next/link'

export const Header = () => {
    return (
    <header>
        <div style={{ width: '100%', maxWidth: 1600, margin: '0 auto', cursor: 'pointer'}}>
            <Link href={'/'}>
                <SVG
                    src={Nav1.src}
                    width={'100%'}
                />
            </Link>
        </div>
        <div style={{ width: '100%', height: 60 }}>
                <SVG
                    src={Nav2.src}
                    width={'100%'}
                    height={'100%'}
                />
        </div>
    </header>
    )
}