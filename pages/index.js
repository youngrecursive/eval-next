import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function GfgDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <div>
      <h4>Déploiement</h4>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}>
      <div style={{ color: "red" }}>Attention au vendredi !!!</div>
      </DatePicker>

      <Link href={`/deploy/${startDate}`}>Déployer</Link>
    </div>
  );
}
