import BaseLayout from "../pages/BaseLayout";
import BaseRegistrationLayout from "../pages/register/BaseRegistrationLayout";
import CustomerSelection from "../pages/register/CustomerSelection";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path:'cadastro',
          element: <BaseRegistrationLayout />,
          children: [
            {
              path: '',
              element: <CustomerSelection />
            },
            {
              path: 'cliente',
              element: <h1>Interesses</h1>
            },
            {
              path: 'dados pessoais',
              element: <h1>Dados pessoais</h1>
            },
            {
              path: 'concluido',
              element: <h1>Concluído</h1>
            }
          ]
        }
      ],
    },
]);