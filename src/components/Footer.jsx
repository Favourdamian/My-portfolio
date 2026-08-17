import React from "react";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {profile.legalName}</p>
    </footer>
  );
}
