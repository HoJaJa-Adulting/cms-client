import axios from "../../api/contentApi";
import Link from "next/link";

export default function Pages({ pages }) {
  return (
    <div>
      <main>
        <h1>PAGE LIST</h1>
        <table>
          <tbody>
            {pages.map((page) => {
              return (
                <tr key={page.name}>
                  <td>{page.name}</td>
                  <td>
                    <Link href={`/page/${page.name}`}>
                      <a className="button primary-button">See details</a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`${axios.defaults.baseURL}/page/`);
  const data = await req.json();

  return {
    props: { pages: data },
  };
}
