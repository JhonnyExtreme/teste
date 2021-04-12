import Link from "next/link";

function home() {
    return(
        <div>
            <center>
                <h1>Home</h1>
                <Link href='/sobre'>
                    <a href='/sobre'>Página Home</a>
                </Link>
            </center>
        </div>
    )}

export default home