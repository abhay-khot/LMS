import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TabCard.css';

function TabCard() {
  return (
    <>
      <div class="researchContainer">
        <div class="researchCard">
          <div class="researchBox">
            <div class="researchContent">
              <h3>Naval Research Board, DRDO</h3>
              <a href="/drdo">Read More</a>
            </div>
          </div>
        </div>

        <div class="researchCard">
          <div class="researchBox">
            <div class="researchContent">
              <h3>Department of Higher Education, MHRD, India</h3>
              <a href="/mhrd">Read More</a>
            </div>
          </div>
        </div>

        <div class="researchCard">
          <div class="researchBox">
            <div class="researchContent">
              <h3> Science and Engineering Research Board, DST</h3>
              <a href="/serb">Read More</a>
            </div>
          </div>
        </div>

        <div class="researchCard">
          <div class="researchBox">
            <div class="researchContent">
              <h3>Council of Scientific and Industrial Research (CSIR), India</h3>
              <a href="/csir">Read More</a>
            </div>
          </div>
        </div>

        <div class="researchCard">
          <div class="researchBox">
            <div class="researchContent">
              <h3>TATA Consultancy Service (TCS)</h3>
              <a href="/tcs">Read More</a>
            </div>
          </div>
        </div>
          
        </div>
    </>
  );
}

export default TabCard;
