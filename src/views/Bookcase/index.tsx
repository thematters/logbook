import Link from "next/link";
import { Button, Head } from "~/components";

import { Stranger } from "./Stranger";
import { BookList } from "./BookList";

const Bookcase: React.FC = () => {
  return (
    <>
      <Head title="Bookcase" />
{/*
      <h1>Bookcase</h1>

      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="logbook">Logbook Detail</Link>
        </li>
        <li>
          <Link href="library">Library</Link>
        </li>
      </ul> */}

      {/* <Stranger /> */}
      <BookList />
    </>
  );
};

export default Bookcase;
