import React from 'react'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import "./footer.css"

import Container from './container'
import { Link } from 'gatsby'

const Footer = () => (
  <Container as="footer">
    <div className="p-5 border-t-2 border-t-gray-300 bg-blue-50 flex flex-col items-center gap-5">
      <div class="flex flex-row gap-3 text-xl">
        <a className="footera" target="_blank" rel="noreferrer"
          href="https://github.com/SharanSMenon"><FaGithub /></a>
        <a className="footera" target="_blank" rel="noreferrer"
          href="https://www.youtube.com/channel/UCOd6WzD7DHWctHqhkm1Q3tg"><FaYoutube /></a>
        <a className="footera" target="_blank" rel="noreferrer"
          href="https://www.instagram.com/sharansmenon22/"><FaInstagram /></a>
      </div>
      <div>
        <ul className="flex list-none gap-10">
          <li className="list-item-footer">
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="list-item-footer">
            <Link to="/blog/" activeClassName="active">
              Blog
            </Link>
          </li>
          <li className="list-item-footer">
            <Link to="/project/" activeClassName="active">
              Projects
            </Link>
          </li>
        </ul>
      </div>
      Copyright 2022 Sharan Sajiv Menon
    </div>
  </Container>
)

export default Footer
