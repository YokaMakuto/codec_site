import HeaderClient from './HeaderClient';
import HeaderMobileClient from './HeaderMobileClient';

export default function Header() {
    return (
        <>
            <HeaderClient className="hidden lg-xl:block" />
            <HeaderMobileClient className="lg-xl:hidden" />
        </>
    );
}
