import { StrictMode } from "react";
import "~/styles/global.css";

import { Routes } from "./routes";

import type { FC } from "react";

export const App: FC = () => (
  <StrictMode>
    <Routes />
  </StrictMode>
);
