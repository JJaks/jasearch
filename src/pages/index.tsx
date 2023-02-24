import Link from "next/link"

function HomePage() {
    return (
        // navbar with a title on the left side and then a search bar and about link on the right side NO TAILWIND
        <nav>
            <div>
                <h1>JaSearch</h1>
            </div>
            <div>
                <input type="text" placeholder="Search" />
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </nav>

        // Q: Does this need to be wrapped in a Layout component? And do I have to add head tags?
        // A: No, the Layout component is only for pages that are not the home page. The head tags are added automatically.
    )
  }
  
  export default HomePage