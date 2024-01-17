"use client";
import { ComponentProps, forwardRef } from "react";
import { Link } from "../navigation";

const NavigationLink = forwardRef(
  (props: ComponentProps<typeof Link>, _ref) => <Link {...props} />,
);
NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
