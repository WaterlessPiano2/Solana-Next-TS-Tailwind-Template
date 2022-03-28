import * as React from "react";
import ListItem from "./ListItem";
import { Token } from "../pages/users";

type Props = {
  items: Token[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.pkey}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
