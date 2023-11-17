import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home/Home";
type LayoutType = React.FC<{
  children: React.JSX.Element | React.JSX.Element[];
}>;
type PageType = React.FC;
export const Router = () => {
  const loadLayout = (Layout: LayoutType, Page: PageType) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(Layout, Home)} />
    </Routes>
  );
};
