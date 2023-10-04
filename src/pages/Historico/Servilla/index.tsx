import { Layout } from "../../../components/Layout"
import { SearchedForm } from "@/components/SearchedForm"
import { useAuth } from "../../../Auth"
import  Link  from "next/link";
// import { Navigate } from "react-router-dom"

const Servilla: () => JSX.Element | null = () => {
  const auth = useAuth()
  const perfil = auth.user.perfil
  
  return (
  perfil && perfil > 2?
    
      <Layout>
        <div>
        <SearchedForm />
      </div>
      </Layout>
    
  :
  <Link href="/login" replace={true} />
  
)
  }

export  default Servilla

