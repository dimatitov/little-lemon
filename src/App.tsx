import { PATCHS } from "constants/paths";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { PAGES } from "constants/pages";
import { PageKey } from "types/pages";
import { FC } from "react";
import { Home } from "pages/Home";
import { Reservation } from "pages/Reservation";
import { ConfirmationReservation } from "pages/ConfirmationReservation";
import { Error404 } from "pages/Error404";
import { Layout } from "components/Layout";

function App() {
  return (
    <Routes>
      <Route
        path={PATCHS.ROOT}
        element={<Navigate to={PATCHS.HOME} replace />}
      />
      {PAGES.map(({ key, route }) => {
        const Page = pagesMap[key];
        return (
          <Route
            key={key}
            path={route}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}

      <Route
        path="*"
        element={
          <Layout>
            <Error404 />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

const pagesMap: { [key in PageKey]: FC } = {
  home: Home,
  reservations: Reservation,
  "confirmation-reservation": ConfirmationReservation,
};
