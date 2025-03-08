
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Outlet } from 'react-router-dom' 
import AuthHanlder from "@/handlers/auth-handler";
const PublicLayout = () => {
  return (
    <div className="w-full">
      <AuthHanlder />
       <Header/>
         <Outlet/>
       <Footer/>
    </div>
  )
}

export default PublicLayout
