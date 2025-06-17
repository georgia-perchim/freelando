import BaseLayout from "../pages/BaseLayout";
import BaseRegistrationLayout from "../pages/register/BaseRegistrationLayout";
import CustomerSelection from "../pages/register/CustomerSelection";
import { createBrowserRouter } from "react-router-dom";
import Interest from "../pages/register/Interest";
import PersonalData from "../pages/register/PersonalData";
import Completed from "../pages/register/Completed";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "",
          element: <HomePage />
        },
        {
          path:'cadastro',
          element: <BaseRegistrationLayout />,
          children: [
            {
              path: '',
              element: <CustomerSelection />
            },
            {
              path: 'interesses',
              element: <Interest />
            },
            {
              path: 'dados-pessoais',
              element: <PersonalData />
            },
            {
              path: 'concluido',
              element: <Completed />
            }
          ]
        }
      ],
    },
]);