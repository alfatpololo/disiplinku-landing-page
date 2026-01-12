import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>Beranda</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">Halaman</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
                Tim Kami
              </Link>
            </li>
            <li>
              <Link href="/pricing" onClick={() => setMobileToggle(false)}>
                Harga
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
                FAQ
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/* <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Layanan
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/service/service-details" onClick={() => setMobileToggle(false)}>
                Detail Layanan
              </Link>
            </li>
          </ul>
        </DropDown>

      </li> */}
      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Kontak
        </Link>
      </li>
    </ul>
  );
}
