"use client"
import styles from '@/styles/navBar.module.css'
import Link from 'next/link';
import { MdPeople } from 'react-icons/md'
import { AiFillHome, AiOutlineAreaChart } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

type Props = {
  iconsSize: number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const NavBar = ({iconsSize, ...props}: Props) => {
  const pathname = usePathname();

  return (
    <nav {...props} >
      <Link href="/" className={styles['icons']} id={pathname === "/" ? styles["active"] : ""} >
        <AiFillHome size={iconsSize} />
      </Link>
      <Link href="/meteorites" className={styles['icons']} id={pathname === "/meteorites" ? styles["active"] : ""} >
        <AiOutlineAreaChart size={iconsSize} />
      </Link>
      <Link href="/about-us" className={styles['icons']} id={pathname === "/about-us" ? styles["active"] : ""}>
        <MdPeople size={iconsSize} />
      </Link>
    </nav>
  )
}

export default NavBar