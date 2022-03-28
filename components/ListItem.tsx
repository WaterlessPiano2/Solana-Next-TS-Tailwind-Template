import React from "react";
import Link from "next/link";
import { Token } from "../pages/users";

type Props = {
  data: Token;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[pkey]" as={`/users/${data.pkey}`}>
    <a>
      {data.pkey}: {data.balance}
    </a>
  </Link>
);

export default ListItem;
