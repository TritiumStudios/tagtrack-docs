import React from "react";
import { AuthProvider } from "../auth";

// Default implementation, that you can customize
export default function Root(props) {
  return <AuthProvider>{props.children}</AuthProvider>;
}
