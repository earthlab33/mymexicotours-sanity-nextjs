'use client';
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Vista from '../components/Vista';
import RingLoader from "react-spinners/RingLoader";
// import data from 'app/api/getLessons/route.ts'

export default function Vistas() {
    const [vistas, setVistas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchVistas() {
        try {
          const response = await fetch('/api/getVistas/');
          const vistas = await response.json();
          console.log(vistas.data);
          setVistas(vistas.data); // Adjust this line based on the actual structure of the data
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
      fetchVistas();
    }, []);
    
        return (
          <>
          <div className="mt-12">
            <div className="text-center px-20">
            </div>
              <h1 className="text-slate-100 text-2xl font-extrabold text-center mt-12">
                Vistas 
              </h1>
          </div>
          <div className="pt-20 px-[15vw] lg:px-40">
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-0">
            {vistas.map((vista, index) => (
    <Vista key={index} vista={vista} />
  ))}
  </div>
  {loading && (
              <RingLoader
                color="#8f7e7e"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="content-center"
              />
            )}
  </div>
          </>
        );
      }