const Footer = ( {length} ) => {
  return (
    <footer>
        <p>{length} list {length === 1 ? 'item' : 'items  ' } left</p>
    </footer>
  )
}

export default Footer;