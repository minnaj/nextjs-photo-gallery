"use client";
import { ComponentProps } from "react";
import { Link } from "../navigation";

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  return <Link href={href} {...rest} />;
}
