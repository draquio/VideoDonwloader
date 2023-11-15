import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home/Home";
import { Youtube } from "../pages/Youtube/Youtube";
import { Tiktok } from "../pages/Tiktok/Tiktok";
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
      <Route path="/youtube/:id" element={loadLayout(Layout, Youtube)} />
      <Route path="/tiktok/:id" element={loadLayout(Layout, Tiktok)} />
    </Routes>
  );
};
