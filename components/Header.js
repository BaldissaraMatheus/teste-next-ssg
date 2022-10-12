import Link from "next/link";

function Header({ slugs }) {
	return <header style={{
      width: '100%',
      height: '100px',
      background: 'sandybrown',
      paddingTop: 25,
      paddingLeft: 15,
      marginBottom: 20
    }}>
      <h1 style={{ marginTop: 0, marginBottom: 8 }}>Anatomia braba</h1>
      <nav style={{ display: 'flex', gap: 12 }}>
        {slugs?.map(slug => {
          return (
            <div key={slug}>
              <Link href={slug}>
                <a>{slug}</a>
              </Link>
            </div>
          );
        })}
      </nav>
    </header>
};


export default Header;
