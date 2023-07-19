'use client'
import { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const counterRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [Employee, setEmployee] = useState(0);
  const [Bags, setBags] = useState(0);
  const [woven, setWoven] = useState(0);


  const yearsOfExperience = 25;
  const clientsCount = 1.5;
  const EmployeeCount = 500;
  const BagsCount = 1.5;
  const wovenCount = 2; // Update this value with your desired count for 'others'

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // Simulate counting animation
      let yearsCounter = 0;
      let clientsCounter = 0;
      let EmployeeCounter = 0;
      let BagsCounter = 0;
      let wovenCounter= 0;

      const interval = setInterval(() => {
        if (yearsCounter < yearsOfExperience) {
          setYears(yearsCounter);
          yearsCounter++;
        }

        if (clientsCounter < clientsCount) {
          setClients(clientsCounter);
          clientsCounter += 0.5; // Update this increment value as desired
        }

        if (EmployeeCounter < EmployeeCount) {
          setEmployee(EmployeeCounter);
          EmployeeCounter += 10; // Update this increment value as desired
        }

        if (BagsCounter < BagsCount) {
            setBags(BagsCounter);
            BagsCounter += 0.2; // Update this increment value as desired
          }

          
          if (wovenCounter < wovenCount) {
            setWoven(wovenCounter);
            wovenCounter += 0.5; // Update this increment value as desired
          }
  

        if (yearsCounter >= yearsOfExperience && clientsCounter >= clientsCount && EmployeeCounter >= EmployeeCount && BagsCounter >= BagsCount && wovenCounter >= wovenCount) {
          clearInterval(interval);
        }
      }, 50); // Adjust the interval value as needed

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className='mb-10'>
    <div ref={counterRef} className="grid grid-cols-2 lg:flex lg:flex-row justify-center gap-6 items-center mt-8">
      <div className="text-center mx-6">
        <div className="text-4xl sm:text-6xl font-bold text-gray-800">{years}+</div>
        <div className="text-gray-600">Years of Experience</div>
      </div>
      <div className="text-center mx-6">
        <div className="text-4xl sm:text-6xl font-bold text-gray-800">{clients}K+</div>
        <div className="text-gray-600">Customer</div>
      </div>
      <div className="text-center mx-6">
        <div className="text-4xl sm:text-6xl font-bold text-gray-800">{Employee}+</div>
        <div className="text-gray-600">Employee</div>
      </div>
      <div className="text-center mx-6">
        <div className="text-4xl sm:text-6xl font-bold text-gray-800">{Bags}M+</div>
        <div className="text-gray-600">Bags Delivered</div>
      </div>
    </div>
    <div className='flex justify-center lg:mt-6'>
    <div className="text-center w-full">
      <div className="text-4xl sm:text-6xl font-bold text-gray-800">{woven}M+</div>
      <div className="text-gray-600 w-full">PP Woven Bags</div>
    </div>
    </div>
    </div>
  );
};

export default Counter;
