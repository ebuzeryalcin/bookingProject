import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/propertyList"
import FavoriteProperties from "../../components/favoriteProperties/FavoriteProperties"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by type</h1>
        <PropertyList />
        <h1 className="homeTitle">What people love</h1>
        <FavoriteProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home