import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { MyAuth } from './auth/auth0.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FaBullseye } from 'react-icons/fa'

const client = new QueryClient({
  defaultOptions: {
    queries : {
      refetchOnWindowFocus : false
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
          <MyAuth>
          <AppRoutes />
          </MyAuth>
        </React.StrictMode>
      </BrowserRouter>
      </QueryClientProvider>
  </Provider>
)
